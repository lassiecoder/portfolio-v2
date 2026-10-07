/* =========================================================
   Content — all sourced from Priyanka Sharma's resume
   ========================================================= */

const HOME_TITLE = document.title; // set in index.html (SEO title)

const PROJECTS = [
  {
    slug: "traya",
    title: "Traya — Hair Assessment App",
    kind: "Mobile App",
    filter: ["mobile", "oss"],
    badge: "Personal Project",
    tags: ["Mobile App", "React Native"],
    summary:
      "A React Native app that walks a user through a signup, an 11-question hair-loss assessment, and a generated report and plan with a mini product checkout.",
    highlights: [
      "Multi-step signup and onboarding flow",
      "11-question guided assessment with progress tracking",
      "Generated personalized report and treatment plan",
      "Mini product checkout at the end of the journey",
    ],
    role: "Design & Development",
    stack: "React Native, TypeScript",
    links: [
      {
        label: "View Code",
        href: "https://github.com/lassiecoder/traya-hair-test",
      },
      {
        label: "Live Demo",
        href: "https://drive.google.com/file/d/1j-KcXs2jb15fY4aYW2V4i94gbZzSV5JK/view",
        primary: true,
      },
    ],
    mock: "phones",
    preview: {
      xl: "assets/traya-xl.webp",
      sm: "assets/traya-sm.webp",
      alt: "Traya app screens: product plan, diagnosis, hair health result and age question",
    },
    accent: "#3f6b4a",
    screen: "#f6f3ee",
  },
  {
    slug: "wayk",
    title: "Wayk — The Alarm You Can't Snooze",
    kind: "Mobile App",
    filter: ["mobile", "oss"],
    badge: "Personal Project",
    tags: ["Mobile App", "React Native"],
    summary:
      "An alarm app that doesn't let you snooze your way back to sleep. Pick a wake time and a “mission” you must complete before the alarm stops — push-ups, a math problem, photographing your made bed — and Wayk builds a personalized morning plan around it.",
    highlights: [
      "Mission-gated alarms: push-ups, math problems, photo check-ins",
      "Personalized morning plan built around your wake time",
      "Designed for reliability — the alarm only stops when the mission is done",
    ],
    role: "Design & Development",
    stack: "React Native, TypeScript",
    links: [
      { label: "View Code", href: "https://github.com/lassiecoder/wayk" },
      {
        label: "Live Demo",
        href: "https://drive.google.com/file/d/1R4oCvM3MKR30JF7ktZXXKV7O_MWrVMCn/view",
        primary: true,
      },
    ],
    mock: "alarm",
    preview: {
      xl: "assets/wayk-xl.webp",
      sm: "assets/wayk-sm.webp",
      alt: "Wayk app screens: morning energy chart, one alarm one mission, wake-up time picker and push-up mission setup",
    },
    accent: "#f59e0b",
    screen: "#141414",
  },
  {
    slug: "enterprise-dashboard",
    title: "Enterprise Dashboard",
    kind: "Web App",
    filter: ["web", "oss"],
    badge: "Personal Project",
    tags: ["Web App", "Next.js 16"],
    summary:
      "A modern, feature-rich enterprise dashboard built with Next.js 16, React 19, TypeScript and Tailwind CSS — comprehensive business analytics, eCommerce management and data visualization with dark and light themes.",
    highlights: [
      "Business analytics and eCommerce management modules",
      "Data visualization with charts and KPI cards",
      "Dark / light theme support",
      "Built on the latest Next.js 16 + React 19 stack",
    ],
    role: "Design & Development",
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS",
    links: [
      {
        label: "View Code",
        href: "https://github.com/lassiecoder/enterprise-dashboard",
      },
      {
        label: "Live Preview",
        href: "https://enterprise-dashboard-eqmx3xdse-lassiecoders-projects.vercel.app/",
        primary: true,
      },
    ],
    mock: "dash",
    preview: {
      // Paired by actual size: enterprise-sm-* are 2256×1128 (desktop), enterprise-xl-* are 686×514 (mobile)
      slides: [
        {
          xl: "assets/enterprise-sm-01.webp",
          sm: "assets/enterprise-xl-01.webp",
          alt: "Enterprise Dashboard: eCommerce analytics with revenue, projections and top products",
        },
        {
          xl: "assets/enterprise-sm-02.webp",
          sm: "assets/enterprise-xl-03.webp",
          alt: "Enterprise Dashboard: business overview with revenue, active users and recent activity",
        },
        {
          xl: "assets/enterprise-sm-03.webp",
          sm: "assets/enterprise-xl-02.webp",
          alt: "Enterprise Dashboard: order list with status, dates and pagination",
        },
      ],
    },
    accent: "#4b5563",
  },
  {
    slug: "npx-lassiecoder",
    title: "npx lassiecoder — in your terminal",
    kind: "NPM Package",
    filter: ["oss"],
    badge: "Open Source",
    tags: ["NPM Package", "Node.js", "CLI"],
    summary:
      "A personalized command-line business card. Run one command and see a professional profile, skills and contact information — right in the terminal.",
    highlights: [
      "Zero-install: runs with a single npx command",
      "Showcases profile, skills and contact links in the terminal",
      "Published on npm",
    ],
    role: "Author & Maintainer",
    stack: "Node.js, npm",
    links: [
      {
        label: "View Code",
        href: "https://github.com/lassiecoder/npx-lassiecoder",
      },
      {
        label: "View on npm",
        href: "https://www.npmjs.com/package/lassiecoder",
        primary: true,
      },
    ],
    mock: "term",
    accent: "#3a3a3a",
  },
  {
    slug: "edufund",
    title: "EduFund — Mutual Funds SIP",
    kind: "Mobile App",
    filter: ["mobile"],
    badge: "Real Project",
    tags: ["Mobile App", "EduFund"],
    summary:
      "EduFund, India's leading education-investment app, helps parents save for their children's education and stay ahead of rising education costs.",
    highlights: [
      "KYC verification for Indian and US investment accounts",
      "Secure access via facial recognition and fingerprint scanning",
      "Push notifications that increased new-user activity by 47%",
      "Firebase analytics for age-based targeted marketing",
      "Fastlane-powered build and deployment workflows",
    ],
    role: "Product Engineer",
    stack: "React Native, Firebase, Fastlane",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.educationfund.edufund&hl=en_IN",
        primary: true,
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/in/app/edufund-mutual-funds-sip/id1538432722",
      },
    ],
    mock: "phones",
    preview: {
      xl: "assets/edu-xl.webp",
      sm: "assets/edu-sm.webp",
      alt: "EduFund app screens: investing for your child's future, top mutual funds, education cost calculator and secure transactions",
    },
    accent: "#4f46e5",
    screen: "#f5f6ff",
  },
  {
    slug: "adecco",
    title: "Adecco — Job Placement App",
    kind: "Mobile App",
    filter: ["mobile"],
    badge: "Real Project",
    tags: ["Mobile App", "The Adecco Group"],
    summary:
      "The Adecco mobile app transforms job placement with accuracy, speed and thorough evaluation — linking over 700,000 people to top-tier global opportunities every day.",
    highlights: [
      "White-label onboarding solution deployable across multiple client brands",
      "Enhanced candidate, associate and client sign-in / sign-up screens",
      "eKYC flow refactor that shortened onboarding and reduced support queries",
      "Fastlane + GitOps release automation — 60% faster releases",
    ],
    role: "SDE1",
    stack: "React Native, Fastlane, GitHub Actions, GitOps",
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.adecco.app20&hl=en_IN&gl=US",
        primary: true,
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/adecco/id1518950579",
      },
    ],
    mock: "phones",
    preview: {
      // Paired by content: desktop 01 / mobile 02 = App Store, desktop 02 / mobile 01 = Play Store
      slides: [
        {
          xl: "assets/adecco-xl-01.webp",
          sm: "assets/adecco-sm-02.webp",
          alt: "Adecco India on the App Store: sign-in, dashboard and attendance screens",
        },
        {
          xl: "assets/adecco-xl-02.webp",
          sm: "assets/adecco-sm-01.webp",
          alt: "Adecco India on Google Play: 4.5 rating, 100K+ downloads and app screenshots",
        },
      ],
    },
    accent: "#dc2626",
    screen: "#fff6f6",
  },
];

const EXPERTISE = [
  {
    title: "Mobile App Development",
    body: "React Native apps for iOS and Android: state management, push notifications, deep linking, biometric auth and store releases.",
    chips: [
      "React Native",
      "Expo",
      "Redux",
      "Rematch",
      "Xcode",
      "Android Studio",
      "Flipper",
    ],
    proof: [
      {
        where: "Torum",
        what: "Migrated data layer from React Query to Redux",
        metric: "−30% crash rate",
      },
      {
        where: "Torum",
        what: "In-app + push notifications with deep-link routing to target screens",
      },
      {
        where: "EduFund",
        what: "Integrated push notifications targeting new users",
        metric: "+47% new-user activity",
      },
      {
        where: "Adecco",
        what: "Candidate, associate and client sign-in/sign-up screens in React Native",
      },
    ],
    // Sliced from assets/mobile-app-development.png
    panels: [
      {
        src: "assets/mobile-app-development-1.webp",
        alt: "Lock screen with Torum and EduFund push notifications",
      },
      {
        src: "assets/mobile-app-development-2.webp",
        alt: "Deep link torum://post/8421 opened from a notification, routing to the post screen",
      },
      {
        src: "assets/mobile-app-development-3.webp",
        alt: "Play Console release tracks: internal testing, alpha, beta rolling out at 20%, production",
      },
    ],
  },
  {
    title: "Web Development",
    body: "React, Next.js and Astro with TypeScript: component architecture, static site generation, third-party API integration and frontend performance.",
    chips: [
      "ReactJS",
      "Next.js",
      "Astro",
      "TypeScript",
      "Storybook",
      "SSG / SEO",
    ],
    proof: [
      {
        where: "Imaige.io",
        what: "Built from scratch: auth flows, payment gateway, responsive onboarding",
      },
      {
        where: "Kinnbook",
        what: "Astro SSG site with reusable components, page performance and SEO tuning",
      },
      {
        where: "Zataverse",
        what: "Optimized frontend data flow to remove redundant network requests",
      },
      { where: "EduFund", what: "Next.js white-label build for ICICI" },
    ],
    panels: [
      {
        src: "assets/web-app-1.webp",
        alt: "Lighthouse mobile audit for Kinnbook: performance, accessibility, best practices and SEO scores",
      },
      {
        src: "assets/web-app-2.webp",
        alt: "imaige.io landing page in a browser window",
      },
      {
        src: "assets/web-app-3.webp",
        alt: "Astro Card component source with typed props",
      },
    ],
  },
  {
    title: "Auth, Onboarding & eKYC",
    body: "OAuth and social login, multi-role sign-up/sign-in, white-label onboarding, KYC verification, biometric auth and payment integration.",
    chips: [
      "OAuth",
      "Social Login",
      "eKYC",
      "Biometrics",
      "Payments",
      "White-label",
    ],
    proof: [
      {
        where: "Socialaise",
        what: "Refactored OAuth integrations, social sign-up/sign-in and push handling",
      },
      {
        where: "Imaige.io",
        what: "Authentication flows and secure payment gateway integration",
      },
      {
        where: "Adecco",
        what: "White-label onboarding across client brands; eKYC flow refactor",
      },
      {
        where: "EduFund",
        what: "KYC for Indian + US investment accounts; face and fingerprint auth via third-party SDKs",
      },
    ],
    panels: [
      {
        src: "assets/auth-1.webp",
        alt: "Sign-in screen with email, Google and Apple options for candidates, associates and clients",
      },
      {
        src: "assets/auth-2.webp",
        alt: "eKYC step 2 of 3: OTP verification before document and face match",
      },
      {
        src: "assets/auth-3.webp",
        alt: "Checkout with server-verified totals and card payment",
      },
    ],
  },
  {
    title: "Release Automation & DevOps",
    body: "Fastlane for mobile builds and store deploys, GitOps for web, GitHub Actions CI gates, and App Store Connect / Play Console release tracks.",
    chips: [
      "Fastlane",
      "GitHub Actions",
      "GitOps",
      "AWS",
      "App Store Connect",
      "Play Console",
      "Jest",
    ],
    proof: [
      {
        where: "Adecco",
        what: "Fastlane (mobile) + GitOps (web) deployment pipelines",
        metric: "−60% release time",
      },
      {
        where: "Adecco",
        what: "GitHub Actions, branch protection and required status checks on PRs",
        metric: "−40% manual review",
      },
      {
        where: "Torum",
        what: "Play Console alpha/beta tracks; team guidelines for commits and PRs",
      },
      { where: "EduFund", what: "Fastlane build and deployment automation" },
    ],
    panels: [
      {
        src: "assets/release-devops-1.webp",
        alt: "Terminal running fastlane android beta: gradle bundleRelease, upload to Play Store beta track",
      },
      {
        src: "assets/release-devops-2.webp",
        alt: "CI run on a feature branch: lint, typecheck, unit tests and build all passed",
      },
      {
        src: "assets/release-devops-3.webp",
        alt: "Branch protection on main: require pull requests, status checks and up-to-date branches",
      },
    ],
  },
  {
    title: "AI Integration",
    body: "LLM APIs (Google Gemini, Azure OpenAI) for web apps, plus AI-assisted development with Claude Code, Copilot and Cursor.",
    chips: [
      "Gemini API",
      "Azure OpenAI",
      "Claude Code",
      "GitHub Copilot",
      "Cursor",
      "ChatGPT / Codex",
    ],
    proof: [
      {
        where: "Author",
        what: "E-book on building web apps with the Gemini API (Apple Books, Fable)",
      },
      {
        where: "Speaker",
        what: "Azure OpenAI Service integration, setup to production, at Microsoft Bangalore",
      },
    ],
    panels: [
      // ai-1/ai-2 are trimmed 1200px copies of the originals (removes a 1px export outline)
      {
        src: "assets/ai-1-web.webp",
        alt: "E-book cover: AI + Gemini for Web Developers, a beginner's practical guide by Priyanka Sharma",
      },
      {
        src: "assets/ai-2-web.webp",
        alt: "Tech talk at Microsoft Bangalore: Practical Guide to Azure OpenAI Service Integration, from setup to production",
      },
      {
        src: "assets/ai-3.webp",
        alt: "summarize.ts calling the Gemini API with the @google/genai SDK",
      },
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Zataverse (formerly Black Leaf Digital)",
    linkedin: "https://www.linkedin.com/company/blackleafdigital/",
    role: "SDE2",
    where: "Los Angeles, CA",
    when: "Nov 2025 — Now",
    metric: ["4", "client products: Imaige.io, Socialaise, Kinnbook, Staryo"],
    points: [
      "Develop and maintain multiple client applications across React, React Native and Astro for web and mobile.",
      "Built the Imaige.io website from scratch — authentication flows, secure payment gateway integration and responsive onboarding, improving conversion and checkout reliability.",
      "Refactored Socialaise social authentication — OAuth integrations, sign-up/sign-in flows and push notification handling.",
      "Developed the Kinnbook marketing site in Astro with reusable components, optimized SSG, performance and SEO.",
      "Resolved production issues in Staryo — UI inconsistencies, stability and customer-reported usability bottlenecks.",
      "Integrated third-party APIs and optimized frontend data flow to cut redundant network requests.",
    ],
    chips: [
      "React",
      "React Native",
      "Astro",
      "TypeScript",
      "OAuth",
      "Payments",
    ],
  },
  {
    company: "The Adecco Group",
    linkedin: "https://www.linkedin.com/company/theadeccogroup/",
    role: "SDE1",
    where: "Bangalore, IN",
    when: "May 2023 — Nov 2025",
    metric: ["60%", "faster release time"],
    points: [
      "Developed a white-label user-onboarding solution enabling faster deployment across multiple client brands.",
      "Enhanced candidate, associate and client sign-in/sign-up screens for performance and maintainability.",
      "Automated mobile deployment with Fastlane and web deployment via GitOps, reducing release time by 60%.",
      "Refactored and optimized the eKYC process with clients, improving onboarding time and reducing support queries.",
      "Automated PR review with GitHub Actions, branch protection and required checks — 40% less manual review overhead.",
    ],
    chips: ["React Native", "Fastlane", "GitOps", "GitHub Actions", "eKYC"],
  },
  {
    company: "Torum Technology Sdn. Bhd.",
    linkedin: "https://www.linkedin.com/company/torum",
    role: "Mobile Application Developer",
    where: "Kuala Lumpur, MY",
    when: "May 2022 — May 2023",
    metric: ["30%", "fewer app crashes"],
    points: [
      "Boosted engagement with in-app and push notifications plus deep linking for seamless redirection.",
      "Built robust, well-tested, scalable components ready for future feature integration.",
      "Set up Google Play Console alpha and beta distribution, reducing manual release overhead.",
      "Replaced React Query with Redux for data management, reducing app crashes by 30%.",
      "Authored team guidelines for version control, commit practices and PR procedures.",
    ],
    chips: ["React Native", "Redux", "Deep Linking", "Play Console"],
  },
  {
    company: "EduFund",
    linkedin: "https://www.linkedin.com/company/edufund-app",
    role: "Product Engineer",
    where: "Bangalore, IN",
    when: "Aug 2020 — May 2022",
    metric: ["47%", "more new-user activity"],
    points: [
      "Implemented KYC verification for Indian and US investment accounts to assist non-KYC users.",
      "Integrated third-party tools for secure access via facial recognition and fingerprint scanning.",
      "Set up Firebase to track user activity, enabling age-based targeted marketing.",
      "Integrated push notifications, increasing new-user activity by 47%.",
      "Integrated Fastlane to optimize build and deployment workflows.",
      "Developed a white-label solution for ICICI, a major banking partner, using Next.js.",
    ],
    chips: ["React Native", "Next.js", "Firebase", "Fastlane", "KYC"],
  },
];

/* =========================================================
   Helpers
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) =>
  s.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

// Real preview images: xl for desktop/tablet, sm for phones (≤640px).
// One image renders statically; several become a slideshow (see initSlideshows).
// Intrinsic widths of images that have smaller -640/-1200 variants (made at build time),
// so the browser can download the size it actually displays.
const IMG_W = {"adecco-xl-01.webp": 2256, "adecco-xl-02.webp": 2256, "ai-1-web.webp": 1200, "ai-2-web.webp": 1200, "ai-3.webp": 1200, "auth-1.webp": 1200, "auth-2.webp": 1200, "auth-3.webp": 1200, "edu-xl.webp": 2256, "enterprise-sm-01.webp": 2256, "enterprise-sm-02.webp": 2256, "enterprise-sm-03.webp": 2256, "mobile-app-development-1.webp": 900, "mobile-app-development-2.webp": 900, "mobile-app-development-3.webp": 900, "portrait.webp": 1000, "release-devops-1.webp": 1200, "release-devops-2.webp": 1200, "release-devops-3.webp": 1200, "traya-xl.webp": 2256, "wayk-xl.webp": 2256, "web-app-1.webp": 1200, "web-app-2.webp": 1200, "web-app-3.webp": 1200};
function srcset(path) {
  const w = IMG_W[path.split("/").pop()];
  if (!w) return "";
  const sizes = [640, 1200].filter((v) => w > v * 1.15).map((v) => `${path.replace(/\.webp$/, `-${v}.webp`)} ${v}w`);
  return [...sizes, `${path} ${w}w`].join(", ");
}
const CARD_SIZES = "(max-width: 900px) 92vw, 520px";
const DETAIL_SIZES = "(max-width: 1240px) 92vw, 1128px";

function previewHTML(p, eager = false) {
  const slides = p.preview.slides || [p.preview];
  const multi = slides.length > 1;
  const pics = slides
    .map(
      (sl, i) => `<picture class="slide${i === 0 ? " is-active" : ""}">
      <source media="(max-width: 640px)" srcset="${sl.sm}" />
      <img src="${sl.xl}" srcset="${srcset(sl.xl)}" sizes="${eager ? DETAIL_SIZES : CARD_SIZES}" alt="${esc(sl.alt)}" ${i === 0 && eager ? 'fetchpriority="high"' : 'loading="lazy"'} />
    </picture>`,
    )
    .join("");
  const bars = multi
    ? `<span class="slide-bars">${slides.map((_, i) => `<span class="bar${i === 0 ? " on" : ""}" data-i="${i}"${eager ? ` role="button" tabindex="0" aria-label="Show screen ${i + 1} of ${slides.length}"` : ""}><i></i></span>`).join("")}</span>`
    : "";
  return `<div class="mock shots${multi ? " slideshow" : ""}">${pics}${bars}</div>`;
}

function mockHTML(p) {
  const style = `style="--accent:${p.accent};--scr:${p.screen || "#fafafa"}"`;
  if (p.mock === "dash") {
    const bars = [40, 62, 48, 80, 56, 92, 70, 85, 60, 98, 74, 88]
      .map((h) => `<i style="height:${h}%"></i>`)
      .join("");
    return `<div class="mock m-dark" ${style}><div class="dash"><div class="side"><i></i><i></i><i></i><i></i><i></i></div><div class="main"><div class="kpis"><b></b><b></b><b></b></div><div class="chart">${bars}</div></div></div></div>`;
  }
  if (p.mock === "term") {
    return `<div class="mock m-dark" ${style}><div class="term"><div class="bar"><i></i><i></i><i></i></div><pre><span class="g">$</span> npx lassiecoder
<span class="d">─────────────────────────────</span>
  Priyanka Sharma · SDE2
  React · React Native · Next.js
  <span class="d">github</span>  /lassiecoder
  <span class="d">web</span>     lassiecoder.com
<span class="g">$</span> <span class="cursor"></span></pre></div></div>`;
  }
  if (p.mock === "alarm") {
    const scr = (inner) =>
      `<div class="phone"><div class="scr">${inner}</div></div>`;
    return `<div class="mock m-dark" ${style}><div class="phones">
      ${scr(`<div class="b w60" style="background:#333"></div><div class="ring"></div><div class="b ac"></div>`)}
      ${scr(`<div class="clock">06:30</div><div class="b w80" style="background:#2a2a2a"></div><div class="b w60" style="background:#2a2a2a"></div><div class="b ac"></div>`)}
      ${scr(`<div class="b w60" style="background:#333"></div><div class="b big"></div><div class="b" style="background:#2a2a2a"></div><div class="b ac"></div>`)}
    </div></div>`;
  }
  const scr = (inner) =>
    `<div class="phone"><div class="scr">${inner}</div></div>`;
  return `<div class="mock m-dark" ${style}><div class="phones">
    ${scr(`<div class="b w60"></div><div class="b big"></div><div class="b"></div><div class="b w80"></div><div class="b ac"></div>`)}
    ${scr(`<div class="b w80"></div><div class="b"></div><div class="b big"></div><div class="b w60"></div><div class="b ac"></div>`)}
    ${scr(`<div class="b w60"></div><div class="b"></div><div class="b w80"></div><div class="b big"></div><div class="b ac"></div>`)}
  </div></div>`;
}

function cardHTML(p) {
  return `<a class="card reveal" href="#/work/${p.slug}" data-filter="${p.filter.join(" ")}">
    <div class="thumb">${p.preview ? previewHTML(p) : mockHTML(p)}<span class="badge">${esc(p.badge)}</span><span class="open">↗</span></div>
    <h3>${esc(p.title)}</h3>
    <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
  </a>`;
}

/* =========================================================
   Render
   ========================================================= */
$("#grid").innerHTML = PROJECTS.map(cardHTML).join("");

$("#accordion").innerHTML = EXPERTISE.map(
  (s, i) => `<div class="acc-item${i === 0 ? " open" : ""}">
    <button class="acc-head" aria-expanded="${i === 0}"><span>${esc(s.title)}</span><span class="ico">↗</span></button>
    <div class="acc-body"><div><div class="acc-inner">
      <div>
        <p>${esc(s.body)}</p>
        <div class="chips">${s.chips.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
        <ul class="proof" aria-label="Where I've done this">${s.proof.map((r) => `<li><b>${esc(r.where)}</b><span>${esc(r.what)}</span>${r.metric ? `<em>${esc(r.metric)}</em>` : ""}</li>`).join("")}</ul>
      </div>
      <div class="acc-deck"><div class="mock shots slideshow">${s.panels.map((pn, i) => `<div class="slide${i === 0 ? " is-active" : ""}"><img src="${pn.src}" srcset="${srcset(pn.src)}" sizes="(max-width: 900px) 92vw, 520px" alt="${esc(pn.alt)}" loading="lazy" /></div>`).join("")}<span class="slide-bars">${s.panels.map((_, i) => `<span class="bar${i === 0 ? " on" : ""}" data-i="${i}" role="button" tabindex="0" aria-label="Show panel ${i + 1} of ${s.panels.length}"><i></i></span>`).join("")}</span></div></div>
    </div></div></div>
  </div>`,
).join("");

$("#xp").innerHTML = EXPERIENCE.map(
  (x, i) => `<li class="xp-row reveal" data-i="${i}">
    <div class="xp-head">
      <span class="xp-co">
        <h3>${esc(x.company)}</h3>${
          x.linkedin
            ? `<a class="xp-li" href="${x.linkedin}" target="_blank" rel="noopener" aria-label="${esc(x.company)} on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg></a>`
            : ""
        }
        <span class="role">${esc(x.role)}</span>
      </span>
      <span class="when">${esc(x.when)}<span class="where">${esc(x.where)}</span></span>
      <!-- Stretched over the whole row (see .xp-toggle::before), so clicking anywhere expands it -->
      <button class="xp-toggle" aria-expanded="false" aria-label="Show what I did at ${esc(x.company)}"><span class="ico">+</span></button>
    </div>
    <div class="xp-detail"><div>
      <ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <div class="chips">${x.chips.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
    </div></div>
  </li>`,
).join("");

$("#year").textContent = new Date().getFullYear();

/* =========================================================
   Interactions
   ========================================================= */
// Nav background on scroll
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Theme toggle — circular reveal from the button via the View Transitions API
const root = document.documentElement;
const themeBtn = $("#themeToggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

/* Slideshows: each progress bar's CSS fill animation is the timer — when it ends, the next
   slide comes in. Pausing the animation (off-screen) therefore pauses the slideshow too. */
const slideIO = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) =>
      en.target.classList.toggle("paused", !en.isIntersecting),
    ),
  { threshold: 0.25 },
);
function showSlide(ss, n) {
  const slides = ss.querySelectorAll(".slide");
  const bars = ss.querySelectorAll(".bar");
  const cur = +ss.dataset.i || 0;
  if (n === cur) return;
  slides.forEach((el, i) => {
    el.classList.toggle("is-active", i === n);
    el.classList.toggle("is-leaving", i === cur);
  });
  bars.forEach((b, i) => {
    b.classList.remove("on");
    b.classList.toggle("done", i < n);
  });
  void bars[n].offsetWidth; // restart the fill animation
  bars[n].classList.add("on");
  ss.dataset.i = n;
}
function initSlideshows(scope) {
  scope.querySelectorAll(".slideshow:not([data-ready])").forEach((ss) => {
    ss.dataset.ready = "";
    ss.dataset.i = 0;
    const count = ss.querySelectorAll(".slide").length;
    if (reduceMotion.matches) ss.classList.add("manual"); // no autoplay; bars still clickable on the project page
    ss.addEventListener("animationend", (e) => {
      if (!e.target.matches(".bar.on > i") || ss.classList.contains("manual"))
        return;
      showSlide(ss, ((+ss.dataset.i || 0) + 1) % count);
    });
    ss.querySelectorAll(".bar[role=button]").forEach((b) => {
      const pick = () => showSlide(ss, +b.dataset.i);
      b.addEventListener("click", pick);
      b.addEventListener(
        "keydown",
        (e) =>
          (e.key === "Enter" || e.key === " ") && (e.preventDefault(), pick()),
      );
    });
    slideIO.observe(ss);
  });
}
initSlideshows(document);

function setTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  themeBtn.setAttribute("aria-pressed", dark);
  themeBtn.setAttribute(
    "aria-label",
    dark ? "Switch to light theme" : "Switch to dark theme",
  );
  themeMeta.setAttribute("content", dark ? "#0b0b0c" : "#ffffff");
}
let currentTheme = root.dataset.theme === "dark" ? "dark" : "light";
setTheme(currentTheme);

themeBtn.addEventListener("click", () => {
  // Track the target theme immediately so rapid clicks don't read a stale value mid-transition
  const next = (currentTheme = currentTheme === "dark" ? "light" : "dark");
  try {
    localStorage.setItem("theme", next);
  } catch {}

  if (reduceMotion.matches) return setTheme(next);

  if (!document.startViewTransition) {
    // Fallback: crossfade colours
    root.classList.add("theme-fade");
    setTheme(next);
    setTimeout(() => root.classList.remove("theme-fade"), 550);
    return;
  }

  const r = themeBtn.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  const radius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  const vt = document.startViewTransition(() => setTheme(next));
  vt.ready.then(() => {
    root.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 750,
        easing: "cubic-bezier(.22, 1, .36, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
});

// Follow OS theme changes until the visitor picks one explicitly
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch {}
  if (!saved) setTheme((currentTheme = e.matches ? "dark" : "light"));
});

// Inspector cursor: crosshair + DevTools-style brackets around the hovered interactive element
const insp = $(".insp");
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const cross = $(".insp-cross", insp),
    box = $(".insp-box", insp),
    label = $(".insp-label", insp);
  const TARGETS = "a, button, [role=button], .acc-head, label, select";
  // Innermost wins: a link inside a Beyond Code card (incl. the Publication card's "View" label),
  // then any normal interactive element, then a showcase card itself (Beyond Code, How I work with AI).
  const resolve = (el) =>
    el?.closest?.(".b-card .link-arrow, .xp-li") ||
    el?.closest?.(".xp-head") ||
    el?.closest?.(TARGETS) ||
    el?.closest?.(".b-card, .ai-card") ||
    null;
  const PAD = 6;
  let target = null,
    raf = 0,
    px = -1,
    py = -1,
    inside = false;

  // What is really under the pointer right now? (used after scroll, view changes, element moves)
  const hitTest = () =>
    inside && px >= 0 ? resolve(document.elementFromPoint(px, py)) : null;
  const setTarget = (el) => {
    if (el === target) return;
    target = el;
    insp.classList.toggle("has-target", !!el);
    if (el && !raf) raf = requestAnimationFrame(place);
  };

  // Keep the brackets glued to the element while it moves (hover lift, scroll, resize),
  // and drop/retarget them the moment the pointer is no longer over it.
  function place() {
    raf = 0;
    if (!target) return;
    let r = target.isConnected ? target.getBoundingClientRect() : null;
    if (!r || px < r.left || px > r.right || py < r.top || py > r.bottom) {
      const next = hitTest();
      setTarget(next);
      if (!next) return;
      r = next.getBoundingClientRect();
    }
    box.style.left = r.left - PAD + "px";
    box.style.top = r.top - PAD + "px";
    box.style.width = r.width + PAD * 2 + "px";
    box.style.height = r.height + PAD * 2 + "px";
    label.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
    const below = r.bottom + PAD + 6 + 18 < innerHeight;
    label.style.left =
      Math.max(
        6,
        Math.min(
          r.right + PAD - label.offsetWidth,
          innerWidth - label.offsetWidth - 6,
        ),
      ) + "px";
    label.style.top =
      (below ? r.bottom + PAD + 6 : r.top - PAD - 6 - label.offsetHeight) +
      "px";
    raf = requestAnimationFrame(place);
  }

  addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      root.classList.add("insp-on"); // hide the native cursor only once a real mouse moves
      px = e.clientX;
      py = e.clientY;
      inside = true;
      cross.style.opacity = 1;
      // use `translate`, not `transform`: the hover `scale` would otherwise scale this offset too
      cross.style.translate = `${px}px ${py}px`;
    },
    { passive: true },
  );
  addEventListener("pointerover", (e) => {
    if (e.pointerType === "mouse") setTarget(resolve(e.target));
  });
  addEventListener("scroll", () => setTarget(hitTest()), { passive: true });
  addEventListener("hashchange", () =>
    requestAnimationFrame(() => setTarget(hitTest())),
  );
  document.documentElement.addEventListener("pointerleave", () => {
    inside = false;
    setTarget(null);
    cross.style.opacity = 0;
  });
  addEventListener("blur", () => {
    inside = false;
    setTarget(null);
    cross.style.opacity = 0;
  });
  addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    insp.classList.add("is-down");
    const ring = document.createElement("span");
    ring.className = "insp-ping";
    document.body.appendChild(ring);
    const at = (s) => `translate(${e.clientX}px, ${e.clientY}px) scale(${s})`;
    ring.animate(
      [
        { transform: at(0.15), opacity: 1 },
        { transform: at(1), opacity: 0 },
      ],
      {
        duration: reduceMotion.matches ? 200 : 520,
        easing: "cubic-bezier(.2,.7,.3,1)",
      },
    ).onfinish = () => ring.remove();
  });
  addEventListener("pointerup", () => insp.classList.remove("is-down"));
  // A real touch on a hybrid device brings the native cursor back
  addEventListener(
    "touchstart",
    () => {
      root.classList.remove("insp-on");
      setTarget(null);
    },
    { passive: true },
  );
}

// Speaking card: the whole card opens the LinkedIn post; "View slides" stays its own link
document.querySelectorAll(".b-card[data-href]").forEach((card) =>
  card.addEventListener("click", (e) => {
    if (e.target.closest("a") || getSelection().toString()) return; // inner links / text selection win
    window.open(card.dataset.href, "_blank", "noopener");
  }),
);

// Work filters
document.querySelectorAll(".filters button").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filters button")
      .forEach((b) => { b.classList.toggle("active", b === btn); b.setAttribute("aria-pressed", b === btn); });
    const f = btn.dataset.filter;
    document.querySelectorAll("#grid .card").forEach((c) => {
      c.classList.toggle(
        "hide",
        f !== "all" && !c.dataset.filter.split(" ").includes(f),
      );
    });
  }),
);

// Expertise accordion (one open at a time)
document.querySelectorAll(".acc-item").forEach((item) =>
  $(".acc-head", item).addEventListener("click", () => {
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".acc-item").forEach((o) => {
      o.classList.remove("open");
      $(".acc-head", o).setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.classList.add("open");
      $(".acc-head", item).setAttribute("aria-expanded", "true");
    }
  }),
);

// Experience rows: click to expand, hover shows a floating metric tile
const preview = $("#xpPreview");
document.querySelectorAll(".xp-row").forEach((row) => {
  const btn = $(".xp-toggle", row);
  const head = $(".xp-head", row);
  const x = EXPERIENCE[row.dataset.i];
  btn.addEventListener("click", () => {
    const open = row.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  head.addEventListener("mouseenter", () => {
    preview.innerHTML = `<div class="tile"><b>${x.metric[0]}</b><small>${esc(x.metric[1])}</small></div>`;
    preview.classList.add("show");
  });
  head.addEventListener("mouseleave", () => preview.classList.remove("show"));
  // Pointing at the LinkedIn icon: hide the metric tile so it doesn't cover the link
  const li = $(".xp-li", row);
  li?.addEventListener("mouseenter", () => preview.classList.remove("show"));
  li?.addEventListener("mouseleave", () => head.matches(":hover") && preview.classList.add("show"));
});
addEventListener(
  "mousemove",
  (e) => {
    preview.style.left = e.clientX + 140 + "px";
    preview.style.top = e.clientY + "px";
  },
  { passive: true },
);

// Reveal on scroll + count-up stats
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      io.unobserve(en.target);
    }),
  { threshold: 0.12 },
);
const observeReveals = () =>
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
observeReveals();

// Ghost title parallax
const ghosts = [...document.querySelectorAll("[data-parallax]")];
let ticking = false;
addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ghosts.forEach((g) => {
        const r = g.parentElement.getBoundingClientRect();
        g.style.transform = `translateX(${(r.top - innerHeight / 2) * -0.15}px)`;
      });
      ticking = false;
    });
  },
  { passive: true },
);

// Copy email
const toast = $("#toast");
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 1800);
}
$("#copyEmail").addEventListener("click", async (e) => {
  const email = e.currentTarget.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied ✓");
  } catch {
    showToast(email);
  }
});

/* =========================================================
   Project detail view (hash routing: #/work/<slug>)
   ========================================================= */
const detail = $("#detail");
let lastScroll = 0;

function renderDetail(p) {
  const others = PROJECTS.filter((o) => o.slug !== p.slug).slice(0, 2);
  $("#detailBody").innerHTML = `
    <div class="detail-hero">
      <div>
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <h1>${esc(p.title)}<small>/${esc(p.badge)}</small></h1>
        <p>${esc(p.summary)}</p>
        <div class="detail-actions">
          ${p.links.map((l) => `<a class="btn ${l.primary ? "btn-dark" : "btn-light"}" href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} <span class="arrow">↗</span></a>`).join("")}
          <a class="btn btn-light" href="mailto:lassiecoder@gmail.com">Contact Me</a>
        </div>
      </div>
      <div class="detail-meta">
        <div><small>Type</small><span>${esc(p.kind)}</span></div>
        <div><small>Role</small><span>${esc(p.role)}</span></div>
        <div><small>Stack</small><span>${esc(p.stack)}</span></div>
      </div>
    </div>
    <div class="detail-shot">${p.preview ? previewHTML(p, true) : mockHTML(p)}</div>
    <div class="detail-note">
      <h3>Highlights</h3>
      <ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
    </div>
    <div class="detail-more">
      <h3>More work</h3>
      <div class="grid">${others.map(cardHTML).join("")}</div>
    </div>`;
  observeReveals();
  initSlideshows($("#detailBody"));
}

function route() {
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  const p = m && PROJECTS.find((x) => x.slug === m[1]);
  if (p) {
    if (!document.body.classList.contains("viewing")) lastScroll = scrollY;
    renderDetail(p);
    document.body.classList.add("viewing");
    detail.hidden = false;
    document.title = `${p.title} · Priyanka Sharma (lassiecoder)`;
    scrollTo({ top: 0, behavior: "instant" });
  } else if (document.body.classList.contains("viewing")) {
    document.body.classList.remove("viewing");
    detail.hidden = true;
    document.title = HOME_TITLE;
    const target = location.hash && document.querySelector(location.hash);
    if (target && location.hash !== "#work") target.scrollIntoView();
    else
      scrollTo({
        top: lastScroll || $("#work").offsetTop,
        behavior: "instant",
      });
  }
}
addEventListener("hashchange", route);
route();
