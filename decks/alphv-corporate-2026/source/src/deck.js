// Deck viewer: scroll reel by default, single-slide "present" mode on demand.
(function () {
  const frames = Array.from(document.querySelectorAll(".slide-frame"));
  const count = document.querySelector(".vb-count");
  const presentBtn = document.getElementById("present-btn");
  const hint = document.querySelector(".present-hint");
  let current = 0;
  let presenting = false;

  function fit() {
    const vw = window.innerWidth, vh = window.innerHeight;
    frames.forEach((f) => {
      let w = f.clientWidth;
      if (presenting) {
        const k = Math.min(vw / 1920, vh / 1080);
        f.style.width = 1920 * k + "px";
        f.style.height = 1080 * k + "px";
        w = 1920 * k;
      } else {
        f.style.width = "";
        f.style.height = "";
        w = f.clientWidth;
      }
      f.style.setProperty("--k", (w / 1920).toFixed(5));
    });
  }

  function label() {
    if (count) count.textContent = String(current + 1).padStart(2, "0") + " / " + String(frames.length).padStart(2, "0");
  }

  function show(i, scroll) {
    current = Math.max(0, Math.min(frames.length - 1, i));
    frames.forEach((f, j) => f.classList.toggle("current", j === current));
    label();
    if (!presenting && scroll) frames[current].scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
  }

  function setPresenting(on) {
    presenting = on;
    document.body.classList.toggle("presenting", on);
    if (hint) hint.hidden = !on;
    fit();
    show(current, !on);
    if (on && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else if (!on && document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }

  // Track the slide nearest the middle of the window while scrolling the reel.
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (presenting || ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const mid = window.innerHeight / 2;
      let best = 0, bestDist = Infinity;
      frames.forEach((f, i) => {
        const r = f.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      current = best;
      label();
    });
  }, { passive: true });

  document.addEventListener("keydown", (e) => {
    if (e.target.closest && e.target.closest("input, textarea, select")) return;
    const k = e.key;
    if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(k)) { e.preventDefault(); show(current + 1, true); }
    else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(k)) { e.preventDefault(); show(current - 1, true); }
    else if (k === "Home") { e.preventDefault(); show(0, true); }
    else if (k === "End") { e.preventDefault(); show(frames.length - 1, true); }
    else if (k === "p" || k === "P" || k === "f" || k === "F") { setPresenting(!presenting); }
    else if (k === "Escape" && presenting) { setPresenting(false); }
  });

  frames.forEach((f, i) => f.addEventListener("click", (e) => {
    if (!presenting) return;
    const r = f.getBoundingClientRect();
    show(e.clientX - r.left > r.width / 3 ? current + 1 : current - 1, false);
  }));

  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && presenting) setPresenting(false);
  });

  if (presentBtn) presentBtn.addEventListener("click", () => setPresenting(true));
  window.addEventListener("resize", fit);
  if ("ResizeObserver" in window) new ResizeObserver(fit).observe(document.querySelector(".reel"));

  fit();
  const fromHash = frames.findIndex((f) => f.id === location.hash.slice(1));
  show(fromHash > 0 ? fromHash : 0, fromHash > 0);
})();
