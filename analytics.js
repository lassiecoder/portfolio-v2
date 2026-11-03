// Analytics for the portfolio: Firebase Analytics (GA4) and PostHog, side by side.
// Each provider loads only when its generated config has a key, so nothing is sent until it's configured.

const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/13.0.0";
const POSTHOG_SDK = "https://cdn.jsdelivr.net/npm/posthog-js@1.434.2/dist/module.js";

async function startFirebase() {
  // firebase-config.js is generated from env vars at build time (scripts/build-config.mjs); absent => Firebase off
  const { firebaseConfig } = await import("./firebase-config.js").catch(() => ({}));
  if (!firebaseConfig?.measurementId || !firebaseConfig?.appId) return null;
  const [{ initializeApp }, { getAnalytics, isSupported, logEvent }] = await Promise.all([
    import(`${FIREBASE_SDK}/firebase-app.js`),
    import(`${FIREBASE_SDK}/firebase-analytics.js`),
  ]);
  if (!(await isSupported())) return null; // e.g. blocked storage or unsupported browser
  const analytics = getAnalytics(initializeApp(firebaseConfig));
  return {
    track: (name, params) => logEvent(analytics, name, params),
    pageView: (path) => logEvent(analytics, "page_view", { page_title: document.title, page_location: location.href, page_path: path }),
  };
}

async function startPostHog() {
  // posthog-config.js is generated alongside firebase-config.js; absent => PostHog off
  const { posthogConfig } = await import("./posthog-config.js").catch(() => ({}));
  if (!posthogConfig?.key) return null;
  const { default: posthog } = await import(POSTHOG_SDK);
  posthog.init(posthogConfig.key, {
    api_host: posthogConfig.host,
    defaults: "2026-05-30",
    person_profiles: "identified_only", // anonymous visitors only; no person profiles to bill for
    capture_pageview: true, // initial load only; project routes are captured below on hashchange
  });
  return {
    track: (name, params) => posthog.capture(name, params),
    // The initial load is already a $pageview, so only hash navigations need one
    pageView: (path, initial) => initial || posthog.capture("$pageview", { $current_url: location.href, path }),
  };
}

const settle = (p, name) => p.catch((err) => console.warn(`[analytics] ${name} disabled:`, err?.message || err));

async function start() {
  const providers = (await Promise.all([settle(startFirebase(), "firebase"), settle(startPostHog(), "posthog")])).filter(Boolean);
  if (!providers.length) return;
  const track = (name, params = {}) => providers.forEach((p) => p.track(name, params));

  /* ---------- Project pages are hash routes: log them as page views ---------- */
  const slugOf = () => location.hash.match(/^#\/work\/([\w-]+)/)?.[1];
  const prOf = () => location.hash.match(/^#\/open-source\/([\w.-]+\/[\w.-]+\/\d+)$/)?.[1] || ""; // "owner/repo/number"
  const projectView = (initial) => {
    // Open source pages: #/open-source and #/open-source/<owner>/<repo>/<number>
    const oss = location.hash.match(/^#\/open-source(?:\/([\w.-]+\/[\w.-]+\/\d+))?$/);
    if (oss) {
      providers.forEach((p) => p.pageView(location.hash.slice(1), initial));
      track("view_open_source", { pr: oss[1] || "all" });
      return;
    }
    const slug = slugOf();
    if (!slug) return;
    providers.forEach((p) => p.pageView(`/work/${slug}`, initial));
    track("view_project", { project: slug });
  };
  addEventListener("hashchange", () => projectView(false));
  projectView(true); // deep link straight to a project

  /* ---------- Which sections people actually reach (once per page load) ---------- */
  const seen = new Set();
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        const id = e.target.id || "stats";
        if (e.isIntersecting && !seen.has(id)) {
          seen.add(id);
          track("view_section", { section: id });
        }
      }),
    { threshold: 0.35 },
  );
  document.querySelectorAll("#work, #open-source, #expertise, #experience, #beyond, #community, #contact, .stats").forEach((el) => io.observe(el));

  /* ---------- Open source: GitHub failures, and whether people read a PR to the end ----------
     main.js reports each GitHub load ("loaded" / "error"); ones from before analytics started are replayed. */
  const readPRs = new Set();
  const onOss = ({ type, view, pr = "", reason }) => {
    if (type === "error") return track("open_source_error", { view, pr, reason });
    if (view !== "pr" || pr !== prOf() || readPRs.has(pr)) return;
    const end = document.querySelector("#detailBody .prose > :last-child");
    if (!end) return;
    const obs = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      obs.disconnect();
      if (prOf() !== pr || readPRs.has(pr)) return; // navigated away meanwhile
      readPRs.add(pr);
      track("read_pull_request", { pr });
    });
    obs.observe(end);
  };
  (window.ossEvents || []).forEach(onOss);
  addEventListener("oss", (e) => onOss(e.detail));

  /* ---------- Every CTA: anything that navigates, opens, or toggles ----------
     One consistent `cta_click` event for all of them (easy to report on), plus a few
     specific events (contact, select_project, ...) for the ones that matter most. */
  const CTA = "a[href], button, [role=button], [data-href]";
  const where = (el) =>
    el.closest("header") ? "nav" : el.closest("footer") ? "footer"
    : el.closest("#detail") ? (location.hash.startsWith("#/open-source") ? "open_source_page" : "project_page") : el.closest("section, article")?.id || "page";
  const label = (el) =>
    (el.getAttribute("aria-label") || el.querySelector("h3, .full")?.textContent || el.textContent || "")
      .replace(/[↗→←]/g, "").replace(/\s+/g, " ").trim().slice(0, 80);
  const typeOf = (el, dest) =>
    dest.startsWith("mailto:") ? "email" : dest.includes("forms.gle") ? "form"
    : dest.startsWith("#/work/") ? "project" : dest.startsWith("#/open-source/") ? "pull_request"
    : dest === "#/open-source" ? "open_source_list" : dest.startsWith("#") ? "in_page"
    : /^https?:/.test(dest) ? "outbound" : "action";

  function onCta(el, how) {
    const dest = el.getAttribute("href") || el.dataset.href || "";
    const type = typeOf(el, dest);
    const location = where(el);
    const project = slugOf() || "";
    const pr = prOf();
    track("cta_click", { cta_text: label(el), cta_type: type, destination: dest || el.id || type, location, project, pr, input: how });

    // Specific events
    if (type === "email") track("contact", { method: "email", location });
    else if (type === "form") track("contact", { method: "collab_form", location });
    else if (el.id === "copyEmail") track("contact", { method: "copy_email", location });
    else if (type === "project") track("select_project", { project: dest.split("/").pop(), from: location });
    else if (type === "pull_request") {
      const [owner, repo] = dest.replace("#/open-source/", "").split("/");
      track("select_pull_request", {
        pr: dest.replace("#/open-source/", ""),
        repo: `${owner}/${repo}`,
        state: el.dataset.state || "",
        position: Number(el.dataset.pos) || 0, // 1 = the latest PR in that list
        from: el.closest(".detail-more") ? "more_contributions" : location,
      });
    }
    else if (type === "open_source_list") track("view_all_open_source", { from: location });
    else if (type === "outbound") {
      track("click_outbound", { link_url: dest, link_text: label(el), location, project, pr });
      // Leaving for GitHub from the open source section or its pages: which link, and from which PR
      if (location === "open-source" || location === "open_source_page")
        track("open_source_github_click", {
          pr,
          link: el.closest(".pr-empty") ? "error_fallback" : el.closest(".prose") ? "description_link"
            : dest.endsWith("/files") ? "files_changed" : pr ? "pull_request" : "all_pull_requests",
        });
    }
    else if (el.id === "themeToggle") setTimeout(() => track("theme_toggle", { theme: document.documentElement.dataset.theme }), 0);
    else if (el.matches(".filters button")) track("filter_work", { filter: el.dataset.filter });
    else if (el.matches(".acc-head")) track("expand_expertise", { area: el.firstElementChild?.textContent.trim(), open: el.getAttribute("aria-expanded") !== "true" });
    else if (el.matches(".xp-toggle")) track("expand_experience", { company: el.closest(".xp-row")?.querySelector("h3")?.textContent.trim() });
    else if (el.matches(".slide-bars .bar")) track("slideshow_jump", { slide: Number(el.dataset.i) + 1, location, project });
  }

  // Capture phase: runs before the page's own handlers (e.g. the accordion toggling), so state is "before click"
  document.addEventListener("click", (e) => {
    const el = e.target.closest?.(CTA);
    if (!el || el.closest(".insp")) return;
    // The Speaking card is clickable itself; links inside it are their own CTAs
    if (el.matches("[data-href]") && e.target.closest("a")) return;
    onCta(el, e.detail === 0 ? "keyboard" : "pointer");
  }, true);
  // Keyboard activation of role=button elements (slideshow bars) doesn't fire click
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const el = e.target.closest?.("[role=button]");
    if (el && el.tagName !== "BUTTON") onCta(el, "keyboard");
  }, true);
}

// Not needed for the first paint: start once the page has loaded and the browser is idle,
// so the Firebase and PostHog request chains stay off the critical path.
const boot = () => start().catch((err) => console.warn("[analytics] disabled:", err?.message || err));
const whenIdle = () => ("requestIdleCallback" in window ? requestIdleCallback(boot, { timeout: 4000 }) : setTimeout(boot, 1500));
if (document.readyState === "complete") whenIdle();
else addEventListener("load", whenIdle, { once: true });
