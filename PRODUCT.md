# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), Tailwind CSS v4, GSAP (ScrollTrigger, SplitText and other plugins, all free since the Webflow acquisition), Lenis for smooth scroll, and OGL for one WebGL shader moment. Recommended by Claude and confirmed by Daren on 2026-10-01.

Deploy target: undecided. A static build deploys to any host. This build replaces the site currently live at darentan.my, whose source is not in this repo.

## Users

A personal home base for a mixed audience, confirmed by Daren:

- people who might hire Daren or ALPHV for AI work;
- event organisers and partners checking Daren's track record;
- peers and the developer community following Daren's work.

Their shared job is to understand quickly who Daren Tan is, see real proof, and then connect on LinkedIn.

## Product Purpose

darentan.my is the canonical home for Daren Tan. It works when a visitor leaves with a clear one-line understanding of Daren, has seen evidence behind it, and has moved to LinkedIn to connect or message.

## Positioning

Daren Tan is the Founder and CEO of ALPHV Group of Companies, which builds AI, data and cloud solutions for businesses across Southeast Asia.

What a neighbouring consultant cannot truthfully copy is the whole ecosystem Daren built around the work:

- a company that builds (ALPHV Technologies);
- an academy that trains (ALPHV Academy);
- Malaysia's largest developer community (Developer Kaki, 72,000+ members);
- a recruitment arm (ALPHV Recruit).

The ecosystem rests on ten years as an engineer, CTO, instructor and researcher. ALPHV's own motto is "Develop. Educate. Innovate."

## Operating Context

- The domain is darentan.my. Daren is based in Kuala Lumpur and works across Malaysia and Southeast Asia.
- LinkedIn (https://www.linkedin.com/in/daren-tan/, 8.7k followers) is where Daren is most active and where visitors are sent.
- Daren is a regular on BFM 89.9 and a keynote speaker, so visitors often arrive from a talk, an episode or a LinkedIn post.

## Capabilities and Constraints

- Scope for v1: a home page plus two case-study pages, Developer Kaki and ALPHV Group of Companies.
- The only call to action is the LinkedIn profile. There is no email call to action, no contact form and no booking flow.
- Talks and BFM episodes appear as proof only, not as a speaking-services pitch.
- The site is static, with content authored in the repo. Language: English.
- Voice: polished and professional (Daren's choice), not the casual register of Daren's LinkedIn posts.

## Brand Commitments

- Name: Daren Tan. Company name: "ALPHV Group of Companies". Its arms are named ALPHV Technologies, ALPHV Academy, ALPHV DevRel and ALPHV Recruit.
- Community names stay exactly as written: Developer Kaki, Hackathon Kaki.
- The previous live site's look (cream ground, serif with a red italic accent) is not a commitment and will be replaced.
- ALPHV has its own brand system, but the personal site is not bound to it.
- Daren has publicly criticised generic AI-made design: "Same AI gradient. Same AI eyebrow. Same fonts. Same purple-to-orange hue." The site must visibly show taste and a point of view.

## Evidence on Hand

All sourced facts are in `.source/content.md`, which is a dev reference and is not shipped. Sources:

- Daren's key-personnel deck;
- Daren's LinkedIn (experience, honours, posts);
- the previous live site (BFM episodes, talks with YouTube IDs).

Assets:

- `.source/photos/stage-main.jpg` and `stage-about.jpg`: Daren's own stage photos, about 900px wide;
- `.source/photos/deck-portrait.png`;
- `.source/deck-logos/`: press logos (The Star, BFM, Malay Mail, DNA), award logos (APICTA, AYEC, YEA 2025) and employer/education logos (BASF, MaGIC, MMU), all low-resolution raster.

Rules:

- Never generate or alter images of Daren's face or body. Use only real photos.
- Never fabricate testimonials, clients, metrics, logos or dates. The old site's "Rajan Mehta, TechCorp Malaysia" testimonial was a placeholder and must not appear.
- "Malaysia's Top AI & Tech Expert" (old site) is an unsourced superlative. Prefer sourced recognition such as the #7 ranking on Favikon MY Top 50 Tech Creators (2026), the ASEAN Young Entrepreneur Award 2025 and the Top 30 Young Entrepreneur Award 2025.

## Product Principles

1. **Proof over adjectives.** Every claim points to a real company, number, award, talk or episode.
2. **One door out.** Every path ends at LinkedIn.
3. **The ecosystem is the story.** Build, train, convene and hire: show how the pieces connect rather than listing titles.
4. **Taste is the credential.** The craft of the site is itself evidence of Daren's judgment, so nothing on it should feel templated.
5. **Grasped in seconds.** Identity and first proof land in the first viewport.

## Accessibility & Inclusion

WCAG 2.2 AA is the default standard (not a requirement Daren set). Because the stack is motion-heavy (GSAP, Lenis, WebGL), every authored motion needs a `prefers-reduced-motion` path, and content must stay readable if scripts or WebGL fail.
