// The cover art: 72,000 points, one for every Developer Kaki member, turning slowly in an
// off-centre swirl on the ultramarine plate. The pointer parts the field. Static under reduced motion.
import { Renderer, Geometry, Program, Mesh } from 'ogl';

export interface FieldOptions {
  count?: number; // points drawn
  arms?: number; // bright bundles of streamlines that form the swirl's arms
  armContrast?: number; // 0 = every streamline equally bright, 1 = only the arms read
  center?: [number, number]; // swirl centre, normalised plate coordinates
  compWidth?: number; // the plate's width in comp pixels, for point sizing
}

const vertex = /* glsl */ `
  attribute vec2 seed;      // x: radius (plate heights), y: start angle
  attribute vec2 look;      // x: size jitter, y: alpha
  uniform float uTime;
  uniform float uAspect;    // plate width / height
  uniform vec2 uCenter;     // vortex centre, normalised plate coords
  uniform vec2 uMouse;      // pointer, plate-height units (far away when absent)
  uniform float uPx;        // device pixels per comp pixel
  varying float vAlpha;

  void main() {
    // the whole field turns slowly and breathes; streamlines keep their shape
    float r = seed.x * (1.0 + 0.012 * sin(uTime * 0.6 + seed.y * 5.0));
    float theta = seed.y + uTime * 0.03;
    vec2 c = vec2(uCenter.x * uAspect, uCenter.y);
    vec2 p = c + r * vec2(cos(theta), sin(theta));

    vec2 d = p - uMouse;
    float dist = length(d);
    float R = 0.16;
    if (dist < R) {
      p += normalize(d + 1e-5) * (R - dist) * 0.55;
    }

    vec2 n = vec2(p.x / uAspect, p.y);
    gl_Position = vec4(n.x * 2.0 - 1.0, 1.0 - n.y * 2.0, 0.0, 1.0);
    gl_PointSize = (2.6 + look.x * 2.4) * uPx;
    vAlpha = look.y;
  }
`;

const fragment = /* glsl */ `
  precision mediump float;
  varying float vAlpha;
  void main() {
    vec2 q = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.32, length(q));
    gl_FragColor = vec4(1.0, 1.0, 1.0, a * vAlpha);
  }
`;

function gaussian() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function buildSeeds(count: number, arms: number, armContrast: number) {
  const seed = new Float32Array(count * 2);
  const look = new Float32Array(count * 2);
  // 240 streamlines of evenly spaced points spiral in to a bright core; their brightness is
  // bundled into arms, and one side of the core carries a crescent.
  const LINES = 180;
  const PER_LINE = Math.floor((count * 0.62) / LINES);
  const STEP = 1.22 / PER_LINE;
  const PITCH = 1.05;
  let i = 0;
  for (let l = 0; l < LINES; l++) {
    const base = (l / LINES) * Math.PI * 2;
    const arm = Math.pow(0.5 + 0.5 * Math.cos(arms * base), 2.2);
    for (let k = 0; k < PER_LINE; k++, i++) {
      const r = 0.006 + k * STEP + gaussian() * 0.0012;
      const theta = base + PITCH * Math.log(r + 0.02) + gaussian() * 0.004;
      seed[i * 2] = r;
      seed[i * 2 + 1] = theta;
      look[i * 2] = Math.random();
      const crescent = r < 0.55 ? 0.6 + 0.4 * Math.max(Math.cos(theta + 0.7), 0) * (1 - r / 0.55) * 1.6 : 0.6;
      const rim = r < 0.65 ? 1 : Math.max(1 - (r - 0.65) / 0.9, 0.22);
      const strength = (1 - armContrast + armContrast * arm) * crescent * rim;
      // streamlines converge on the core, so thin them there: it resolves into points, never a haze
      const core = Math.pow(Math.min(r / 0.16, 1), 0.85);
      look[i * 2 + 1] = Math.min((0.45 + 0.55 * Math.random()) * strength * 1.85 * (0.18 + 0.82 * core), 1);
      if (r < 0.16 && Math.random() > 0.35 + 0.65 * core) look[i * 2 + 1] = 0;
    }
  }
  // the rest: a sparse field across the whole plate
  for (; i < count; i++) {
    seed[i * 2] = 0.08 + 1.75 * Math.sqrt(Math.random());
    seed[i * 2 + 1] = Math.random() * Math.PI * 2;
    look[i * 2] = Math.random() * 0.6;
    look[i * 2 + 1] = 0.12 + 0.34 * Math.random();
  }
  return { seed, look };
}

export function mountCoverField(canvas: HTMLCanvasElement, options: FieldOptions = {}) {
  const { count = 72000, arms = 3, armContrast = 0.35, center = [0.67, 0.63], compWidth = 1540 } = options;
  const host = canvas.parentElement as HTMLElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let renderer: Renderer;
  try {
    renderer = new Renderer({ canvas, dpr, alpha: true, antialias: false, premultipliedAlpha: false });
  } catch {
    return; // no WebGL: the plate stays solid ultramarine, content unaffected
  }
  const gl = renderer.gl;
  gl.clearColor(0, 0, 0, 0);

  const { seed, look } = buildSeeds(count, arms, armContrast);
  const geometry = new Geometry(gl, {
    seed: { size: 2, data: seed },
    look: { size: 2, data: look },
  });

  const program = new Program(gl, {
    vertex,
    fragment,
    transparent: true,
    depthTest: false,
    uniforms: {
      uTime: { value: 0 },
      uAspect: { value: 1.67 },
      uCenter: { value: center },
      uMouse: { value: [-10, -10] },
      uPx: { value: 1 },
    },
  });

  const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

  const resize = () => {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height);
    program.uniforms.uAspect.value = width / height;
    // point sizes are authored in comp pixels (plate is 1540 comp px wide on desktop)
    program.uniforms.uPx.value = Math.max((width / compWidth) * dpr, 0.55 * dpr);
  };
  resize();
  new ResizeObserver(resize).observe(host);

  // pointer parts the field
  const target = [-10, -10];
  host.addEventListener('pointermove', (e) => {
    const rect = host.getBoundingClientRect();
    target[0] = ((e.clientX - rect.left) / rect.height);
    target[1] = (e.clientY - rect.top) / rect.height;
  });
  host.addEventListener('pointerleave', () => {
    target[0] = -10;
    target[1] = -10;
  });

  const start = performance.now();
  const draw = (now: number) => {
    program.uniforms.uTime.value = reduce ? 0 : (now - start) / 1000;
    const m = program.uniforms.uMouse.value as number[];
    m[0] += (target[0] - m[0]) * 0.12;
    m[1] += (target[1] - m[1]) * 0.12;
    renderer.render({ scene: mesh });
  };

  if (reduce) {
    draw(start);
    return;
  }

  let raf = 0;
  let visible = true;
  const loop = (now: number) => {
    draw(now);
    raf = requestAnimationFrame(loop);
  };
  const play = () => {
    if (!raf && visible && !document.hidden) raf = requestAnimationFrame(loop);
  };
  const pause = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? play() : pause();
  }).observe(host);
  document.addEventListener('visibilitychange', () => (document.hidden ? pause() : play()));
  play();
}
