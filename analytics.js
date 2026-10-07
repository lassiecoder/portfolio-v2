// Firebase Analytics (Google Analytics 4) for the portfolio.
// Loads only when firebase-config.js has a measurementId, so nothing is sent until it's configured.

const SDK = "https://www.gstatic.com/firebasejs/13.0.0";

async function start() {
  // firebase-config.js is generated from env vars at build time (scripts/build-config.mjs); absent => analytics off
  const { firebaseConfig } = await import("./firebase-config.js").catch(() => ({}));
  if (!firebaseConfig?.measurementId || !firebaseConfig?.appId) return;
  const [{ initializeApp }, { getAnalytics, isSupported, logEvent }] = await Promise.all([
    import(`${SDK}/firebase-app.js`),
    import(`${SDK}/firebase-analytics.js`),
  ]);
  if (!(await isSupported())) return; // e.g. blocked storage or unsupported browser
  const analytics = getAnalytics(initializeApp(firebaseConfig));
  const track = (name, params = {}) => logEvent(analytics, name, params);

  /* ---------- Project pages are hash routes: log them as page views ---------- */
  const slugOf = () => location.hash.match(/^#\/work\/([\w-]+)/)?.[1];
  const projectView = () => {
    const slug = slugOf();
    if (!slug) return;
    track("page_view", { page_title: document.title, page_location: location.href, page_path: `/work/${slug}` });
    track("view_project", { project: slug });
  };
  addEventListener("hashchange", projectView);
  projectView(); // deep link straight to a project

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
  document.querySelectorAll("#work, #expertise, #ai, #experience, #beyond, #contact, .stats").forEach((el) => io.observe(el));

  /* ---------- Every CTA: anything that navigates, opens, or toggles ----------
     One consistent `cta_click` event for all of them (easy to report on), plus a few
     specific events (contact, select_project, ...) for the ones that matter most. */
  const CTA = "a[href], button, [role=button], [data-href]";
  const where = (el) =>
    el.closest("header") ? "nav" : el.closest("footer") ? "footer"
    : el.closest("#detail") ? "project_page" : el.closest("section, article")?.id || "page";
  const label = (el) =>
    (el.getAttribute("aria-label") || el.querySelector("h3, .full")?.textContent || el.textContent || "")
      .replace(/[↗→←]/g, "").replace(/\s+/g, " ").trim().slice(0, 80);
  const typeOf = (el, dest) =>
    dest.startsWith("mailto:") ? "email" : dest.includes("forms.gle") ? "form"
    : dest.startsWith("#/work/") ? "project" : dest.startsWith("#") ? "in_page"
    : /^https?:/.test(dest) ? "outbound" : "action";

  function onCta(el, how) {
    const dest = el.getAttribute("href") || el.dataset.href || "";
    const type = typeOf(el, dest);
    const location = where(el);
    const project = slugOf() || "";
    track("cta_click", { cta_text: label(el), cta_type: type, destination: dest || el.id || type, location, project, input: how });

    // Specific events
    if (type === "email") track("contact", { method: "email", location });
    else if (type === "form") track("contact", { method: "collab_form", location });
    else if (el.id === "copyEmail") track("contact", { method: "copy_email", location });
    else if (type === "project") track("select_project", { project: dest.split("/").pop(), from: location });
    else if (type === "outbound") track("click_outbound", { link_url: dest, link_text: label(el), location, project });
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

start().catch((err) => console.warn("[analytics] disabled:", err?.message || err));
