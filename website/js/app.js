'use strict';

/* ════════════════════════════════════════════════════════════════
   A NEW Engineering — app.js
   Handles: navigation, footer, floating CTA, language switching,
   and page-level renderers.
   Phase 1 includes: renderHome()
   Phase 2+: append renderAbout(), renderService(), etc.
   ════════════════════════════════════════════════════════════════ */

/* ── Utility ─────────────────────────────────────────────────── */

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── SEO metadata update ─────────────────────────────────────── */

function updateSEO(title, desc) {
  if (title) document.title = title;
  const m = document.querySelector('meta[name="description"]');
  if (m && desc) m.setAttribute('content', desc);
  // html[lang] attribute
  const langMap = {en:'en', th:'th', zh:'zh-Hans', ja:'ja'};
  document.documentElement.lang = langMap[lang] || 'en';
}

/* ── Navigation ─────────────────────────────────────────────────
   Reads the data-page attribute on <main> to determine the active
   nav link, then injects both desktop nav and mobile overlay.
   ──────────────────────────────────────────────────────────────── */

function renderNav() {
  const page = (document.getElementById('page-content') || {}).dataset?.page || '';

  // Map data-page values to which nav key should be highlighted
  const activeMap = {
    home: 'home', about: 'about',
    services: 'services',
    cncTurning: 'services', cncMilling: 'services', surfaceGrinding: 'services',
    jigFixture: 'services', sandblasting: 'services',
    customMfg: 'services', reverseEng: 'services',
    machinery: 'machinery', projects: 'projects',
    careers: 'careers', contact: 'contact'
  };
  const activeKey = activeMap[page] || '';

  // Main nav items: key maps to C.nav label, href is the target file
  const navItems = [
    {key:'home',      href:'index.html'},
    {key:'about',     href:'about.html'},
    {key:'services',  href:'services.html', hasDropdown: true},
    {key:'machinery', href:'machinery.html'},
    {key:'projects',  href:'projects.html'},
    {key:'careers',   href:'careers.html'},
    {key:'contact',   href:'contact.html'}
  ];

  /* --- Desktop nav links --- */
  const desktopLinksHtml = navItems.map(item => {
    const isActive = item.key === activeKey ? ' active' : '';
    if (item.hasDropdown) {
      const dropItems = C.nav.service_items.map(s =>
        `<a href="${esc(s.slug)}" class="nav__dropdown-item">${esc(t(s))}</a>`
      ).join('');
      return `
        <li class="nav__dropdown">
          <a href="${esc(item.href)}" class="nav__link${isActive}">
            ${esc(t(C.nav[item.key]))}&nbsp;<span class="nav__dropdown-arrow">▾</span>
          </a>
          <div class="nav__dropdown-menu">${dropItems}</div>
        </li>`;
    }
    return `<li><a href="${esc(item.href)}" class="nav__link${isActive}">${esc(t(C.nav[item.key]))}</a></li>`;
  }).join('');

  /* --- Language buttons --- */
  const langBtnsHtml = ['en','th','zh','ja'].map(l =>
    `<button class="lang-switcher__btn${l === lang ? ' active' : ''}"
             onclick="setLang('${l}')" aria-label="${l}">${l.toUpperCase()}</button>`
  ).join('');

  /* --- Mobile overlay links --- */
  const mobilePrimaryHtml = navItems.map(item => {
    if (item.hasDropdown) {
      const subItems = C.nav.service_items.map(s =>
        `<a href="${esc(s.slug)}">${esc(t(s))}</a>`
      ).join('');
      return `
        <a href="${esc(item.href)}" class="nav__mobile-link">${esc(t(C.nav.services))}</a>
        <div class="nav__mobile-sub">${subItems}</div>`;
    }
    return `<a href="${esc(item.href)}" class="nav__mobile-link">${esc(t(C.nav[item.key]))}</a>`;
  }).join('');

  const mobileLangHtml = ['en','th','zh','ja'].map(l =>
    `<button class="lang-switcher__btn${l === lang ? ' active' : ''}"
             onclick="setLang('${l}')" aria-label="${l}">${l.toUpperCase()}</button>`
  ).join('');

  /* --- Assemble --- */
  document.getElementById('nav-container').innerHTML = `
    <nav class="nav" id="main-nav" role="navigation" aria-label="Main navigation">
      <div class="nav__inner">

        <a href="index.html" class="nav__logo" aria-label="A NEW Engineering Home">
          <span class="nav__logo-main">A NEW Engineering</span>
          <span class="nav__logo-sub">Co., Ltd. · Si Racha, Chonburi</span>
        </a>

        <ul class="nav__links" role="list">${desktopLinksHtml}</ul>

        <div class="lang-switcher" role="group" aria-label="Language switcher">
          ${langBtnsHtml}
        </div>

        <a href="contact.html" class="nav__cta">${esc(t(C.nav.cta))}</a>

        <button class="nav__hamburger" id="hamburger" aria-label="Open menu"
                aria-expanded="false" aria-controls="mobile-overlay">
          <span></span><span></span><span></span>
        </button>

      </div>
    </nav>

    <div class="nav__mobile-overlay" id="mobile-overlay" aria-hidden="true">
      ${mobilePrimaryHtml}
      <div class="nav__mobile-lang">${mobileLangHtml}</div>
      <a href="contact.html" class="nav__mobile-cta">${esc(t(C.nav.cta))}</a>
    </div>`;

  /* --- Mobile hamburger toggle --- */
  const hamburger = document.getElementById('hamburger');
  const overlay   = document.getElementById('mobile-overlay');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen);
      overlay.setAttribute('aria-hidden', !isOpen);
    });
  }

  /* --- Close overlay when a mobile link is tapped --- */
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target.tagName === 'A') {
        document.body.classList.remove('nav-open');
        hamburger && hamburger.setAttribute('aria-expanded', 'false');
        overlay.setAttribute('aria-hidden', 'true');
      }
    });
  }
}

/* ── Footer ──────────────────────────────────────────────────── */

function renderFooter() {
  const f = C.footer;
  const n = C.nav;

  const serviceLinksHtml = n.service_items.map(s =>
    `<a href="${esc(s.slug)}" class="footer__link">${esc(t(s))}</a>`
  ).join('');

  document.getElementById('footer-container').innerHTML = `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer__grid">

          <!-- Brand / Contact column -->
          <div class="footer__brand">
            <div class="footer__logo">A NEW Engineering Co., Ltd.</div>
            <div class="footer__tagline">${esc(t(f.tagline))}</div>
            <div class="footer__contact-item">
              <span>&#128205;</span>
              <span>${esc(t(f.address))}</span>
            </div>
            <div class="footer__contact-item">
              <span>&#128222;</span>
              <span>
                <a href="tel:${f.phone1}">${f.phone1}</a>
              </span>
            </div>
            <div class="footer__contact-item">
              <span>&#9993;&#65039;</span>
              <span><a href="mailto:${f.email1}">${f.email1}</a></span>
            </div>
            <div class="footer__contact-item">
              <span>&#9993;&#65039;</span>
              <span><a href="mailto:${f.email2}">${f.email2}</a></span>
            </div>
          </div>

          <!-- Services column -->
          <div>
            <div class="footer__col-title">${esc(t(f.col1))}</div>
            ${serviceLinksHtml}
          </div>

          <!-- Company column -->
          <div>
            <div class="footer__col-title">${esc(t(f.col2))}</div>
            <a href="about.html"    class="footer__link">${esc(t(n.about))}</a>
            <a href="machinery.html" class="footer__link">${esc(t(n.machinery))}</a>
            <a href="projects.html" class="footer__link">${esc(t(n.projects))}</a>
            <a href="careers.html"  class="footer__link">${esc(t(n.careers))}</a>
          </div>

          <!-- Connect column -->
          <div>
            <div class="footer__col-title">${esc(t(f.col3))}</div>
            <a href="contact.html"       class="footer__link">${esc(t(n.contact))}</a>
            <a href="tel:${f.phone1}"   class="footer__link">${f.phone1}</a>
            <a href="mailto:${f.email1}" class="footer__link">${f.email1}</a>
            <div class="footer__link" style="cursor:default;opacity:.7">${esc(t(f.hours))}</div>
          </div>

        </div>

        <div class="footer__bottom">
          <div class="footer__copy">${esc(t(f.copyright))}</div>
          <div class="footer__bottom-links">
            <a href="contact.html" class="footer__bottom-link">${esc(t(n.contact))}</a>
          </div>
        </div>
      </div>
    </footer>`;
}

/* ── Floating CTA (mobile only, <968px) ─────────────────────── */

function renderFloatingCta() {
  const el = document.getElementById('floating-cta');
  if (!el) return;
  el.textContent = t(C.footer.floatingCta);
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', '0');
  el.onclick = () => { location.href = 'contact.html'; };
  el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') el.click(); };
}

/* ════════════════════════════════════════════════════════════════
   HOME PAGE RENDERER
   ════════════════════════════════════════════════════════════════ */

function renderHome() {
  const h = C.home;
  updateSEO(t(h.seo.title), t(h.seo.desc));

  /* Stats bar */
  const statsHtml = h.stats.map(s => `
    <div class="stats-bar__item">
      <div class="stats-bar__number">${esc(s.num)}</div>
      <div class="stats-bar__label">${esc(t(s.lbl))}</div>
    </div>`).join('');

  /* Industry cards — 5 items, auto-fit grid */
  const industryHtml = h.industries.items.map(i => `
    <div class="industry-card">
      <div class="industry-card__icon">${i.icon}</div>
      <div class="industry-card__name">${esc(t(i.name))}</div>
    </div>`).join('');

  /* Service cards */
  const serviceHtml = h.services.items.map(s => `
    <div class="service-card" style="justify-content:center">
      <div class="service-card__name">${esc(t(s.name))}</div>
      <div class="service-card__desc">${esc(t(s.desc))}</div>
    </div>`).join('');

  /* Projects preview — 4 category tiles */
  const projCatHtml = h.projectsPreview.cats.map(c => `
    <a href="projects.html" class="industry-card">
      <div class="industry-card__icon">${c.icon}</div>
      <div class="industry-card__name">${esc(t(c.name))}</div>
    </a>`).join('');

  /* Why Us — 6 reason cards */
  const whyHtml = h.whyUs.pts.map((p, i) => `
    <div class="reason-card">
      <div class="reason-card__num">0${i + 1}</div>
      <p class="reason-card__body">${esc(t(p))}</p>
    </div>`).join('');

  /* Inject into <main> */
  document.getElementById('page-content').innerHTML = `

    <!-- ░░░ HERO ░░░ -->
    <section class="hero" aria-label="Hero" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-home.webp.png);background-size:cover;background-position:right center">
      <div class="container">
        <div class="hero__badge">${esc(t(h.hero.badge))}</div>
        <h1 class="hero__h1">${esc(t(h.hero.h1))}</h1>
        <p class="hero__sub">${esc(t(h.hero.sub))}</p>
        <div class="hero__actions">
          <a href="contact.html" class="btn btn-primary btn-lg">${esc(t(h.hero.cta1))}</a>
          <a href="projects.html" class="btn btn-secondary btn-lg">${esc(t(h.hero.cta2))}</a>
        </div>
      </div>
    </section>

    <!-- ░░░ STATS BAR ░░░ -->
    <div class="stats-bar" aria-label="Company statistics">
      <div class="container">
        <div class="stats-bar__grid">${statsHtml}</div>
      </div>
    </div>

    <!-- ░░░ INDUSTRIES ░░░ -->
    <section class="section section--white">
      <div class="container text-center">
        <div class="section-label">${esc(t(h.industries.eyebrow))}</div>
        <h2 class="section-title">${esc(t(h.industries.title))}</h2>
        <p class="section-subtitle">${esc(t(h.industries.sub))}</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:20px;margin-top:8px">
          ${industryHtml}
        </div>
      </div>
    </section>

    <!-- ░░░ SERVICES OVERVIEW ░░░ -->
    <section class="section section--light">
      <div class="container text-center">
        <div class="section-label">${esc(t(h.services.eyebrow))}</div>
        <h2 class="section-title">${esc(t(h.services.title))}</h2>
        <p class="section-subtitle">${esc(t(h.services.sub))}</p>
        <div class="card-grid">${serviceHtml}</div>
        <div style="margin-top:40px">
          <a href="services.html" class="btn btn-outline btn-lg">${esc(t(h.services.cta))}</a>
        </div>
      </div>
    </section>

    <!-- ░░░ PROJECTS PREVIEW ░░░ -->
    <section class="section section--white">
      <div class="container text-center">
        <div class="section-label">${esc(t(h.projectsPreview.eyebrow))}</div>
        <h2 class="section-title">${esc(t(h.projectsPreview.title))}</h2>
        <p class="section-subtitle">${esc(t(h.projectsPreview.sub))}</p>
        <div class="card-grid--4">${projCatHtml}</div>
        <div style="margin-top:40px">
          <a href="projects.html" class="btn btn-outline btn-lg">${esc(t(h.projectsPreview.cta))}</a>
        </div>
      </div>
    </section>

    <!-- ░░░ CTA BAND ░░░ -->
    <div class="cta-band">
      <div class="container">
        <div class="cta-band__title">${esc(t(h.ctaBand.title))}</div>
        <p class="cta-band__sub">${esc(t(h.ctaBand.sub))}</p>
        <div class="cta-band__actions">
          <a href="contact.html" class="btn btn-white btn-lg">${esc(t(h.ctaBand.btn))}</a>
        </div>
      </div>
    </div>

    <!-- ░░░ WHY CHOOSE US ░░░ -->
    <section class="section section--light">
      <div class="container text-center">
        <h2 class="section-title">${esc(t(h.whyUs.title))}</h2>
        <div class="reasons-grid" style="margin-top:40px">${whyHtml}</div>
      </div>
    </section>`;
}

/* ════════════════════════════════════════════════════════════════
   SERVICES OVERVIEW PAGE RENDERER  (services.html)
   Individual service pages (cnc-turning.html etc.) are rendered
   by renderServiceDetail() added in the next phase.
   ════════════════════════════════════════════════════════════════ */

function renderServicesPage() {
  const sp = C.servicesPage;
  const hs = C.home.services;   // reuse the 7-item card data from home content
  updateSEO(t(sp.seo.title), t(sp.seo.desc));

  const serviceCardsHtml = hs.items.map(s => `
    <div class="service-card" style="justify-content:center">
      <div class="service-card__name">${esc(t(s.name))}</div>
      <div class="service-card__desc">${esc(t(s.desc))}</div>
    </div>`).join('');

  document.getElementById('page-content').innerHTML = `

    <!-- ░░░ INNER HERO ░░░ -->
    <section class="hero hero--inner" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-sevices.webp.png);background-size:cover;background-position:center">
      <div class="container">
        <nav aria-label="Breadcrumb" class="hero__badge" style="background:rgba(255,255,255,0.15);display:inline-block">
          <a href="index.html" style="color:inherit;text-decoration:none">${esc(t(C.nav.home))}</a>
          <span style="margin:0 6px">›</span>
          <span>${esc(t(C.nav.services))}</span>
        </nav>
        <h1 class="hero__h1">${esc(t(sp.hero.h1))}</h1>
        <p class="hero__sub">${esc(t(sp.hero.sub))}</p>
      </div>
    </section>

    <!-- ░░░ SERVICE CARDS GRID ░░░ -->
    <section class="section section--white">
      <div class="container text-center">
        <div class="section-label">${esc(t(hs.eyebrow))}</div>
        <h2 class="section-title">${esc(t(hs.title))}</h2>
        <p class="section-subtitle">${esc(t(hs.sub))}</p>
        <div class="card-grid">${serviceCardsHtml}</div>
      </div>
    </section>

    <!-- ░░░ WHY IN-HOUSE CAPABILITY MATTERS ░░░ -->
    <section class="section section--light">
      <div class="container">
        <div style="max-width:720px;margin:0 auto;text-align:center">
          <h2 class="section-title">${esc(t(C.servicesPage.inhouse.title))}</h2>
          <p style="color:var(--color-text-light);line-height:1.8;margin-bottom:32px">${esc(t(C.servicesPage.inhouse.body))}</p>
          <a href="machinery.html" class="btn btn-outline btn-lg">${esc(t(C.nav.machinery))}</a>
        </div>
      </div>
    </section>

    <!-- ░░░ CTA BAND ░░░ -->
    <div class="cta-band">
      <div class="container">
        <div class="cta-band__title">${esc(t(C.home.ctaBand.title))}</div>
        <p class="cta-band__sub">${esc(t(C.home.ctaBand.sub))}</p>
        <div class="cta-band__actions">
          <a href="contact.html" class="btn btn-white btn-lg">${esc(t(C.home.ctaBand.btn))}</a>
        </div>
      </div>
    </div>`;
}

/* ════════════════════════════════════════════════════════════════
   ABOUT PAGE RENDERER
   ════════════════════════════════════════════════════════════════ */

function renderAbout() {
  const a = C.about;
  updateSEO(t(a.seo.title), t(a.seo.desc));

  /* Company facts row */
  const factsHtml = a.facts.map(f => `
    <div class="stats-bar__item">
      <div class="stats-bar__number" style="font-size:1.75rem">${f.icon}</div>
      <div class="stats-bar__number" style="font-size:1.5rem;margin-top:4px">${esc(t(f.val))}</div>
      <div class="stats-bar__label">${esc(t(f.lbl))}</div>
    </div>`).join('');

  /* Why Us — 6 full reason cards */
  const reasonsHtml = a.whyUs.reasons.map((r, i) => `
    <div class="reason-card">
      <div class="reason-card__num">0${i + 1}</div>
      <div class="reason-card__title">${esc(t(r.title))}</div>
      <p class="reason-card__body">${esc(t(r.body))}</p>
    </div>`).join('');

  document.getElementById('page-content').innerHTML = `

    <!-- ░░░ INNER HERO ░░░ -->
    <section class="hero hero--inner" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-about.webp.png);background-size:cover;background-position:center">
      <div class="container">
        <nav aria-label="Breadcrumb" class="hero__badge" style="background:rgba(255,255,255,0.15);display:inline-block">
          <a href="index.html" style="color:inherit;text-decoration:none">${esc(t(C.nav.home))}</a>
          <span style="margin:0 6px">›</span>
          <span>${esc(t(C.nav.about))}</span>
        </nav>
        <h1 class="hero__h1">${esc(t(a.hero.h1))}</h1>
        <p class="hero__sub">${esc(t(a.hero.sub))}</p>
      </div>
    </section>

    <!-- ░░░ WHO WE ARE ░░░ -->
    <section class="section section--white">
      <div class="container">
        <div style="max-width:800px;margin:0 auto">
          <h2 class="section-title">${esc(t(a.overview.title))}</h2>
          <p style="color:var(--color-text-light);line-height:1.8;margin-bottom:24px">${esc(t(a.overview.p1))}</p>
          <p style="color:var(--color-text-light);line-height:1.8">${esc(t(a.overview.p2))}</p>
        </div>
      </div>
    </section>

    <!-- ░░░ COMPANY FACTS BAR ░░░ -->
    <div class="stats-bar">
      <div class="container">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:24px">
          ${factsHtml}
        </div>
      </div>
    </div>

    <!-- ░░░ VISION & MISSION ░░░ -->
    <section class="section section--navy">
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:960px;margin:0 auto">
          <div>
            <div class="section-label" style="color:var(--color-cta)">${esc(t(a.vision.label))}</div>
            <p style="color:rgba(255,255,255,0.85);line-height:1.8;margin-top:16px">${esc(t(a.vision.text))}</p>
          </div>
          <div>
            <div class="section-label" style="color:var(--color-cta)">${esc(t(a.mission.label))}</div>
            <p style="color:rgba(255,255,255,0.85);line-height:1.8;margin-top:16px">${esc(t(a.mission.text))}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░░ WHY CHOOSE US ░░░ -->
    <section class="section section--light">
      <div class="container text-center">
        <h2 class="section-title">${esc(t(a.whyUs.title))}</h2>
        <div class="reasons-grid" style="margin-top:40px;text-align:left">${reasonsHtml}</div>
      </div>
    </section>

    <!-- ░░░ CTA BAND ░░░ -->
    <div class="cta-band">
      <div class="container">
        <div class="cta-band__title">${esc(t(a.cta.title))}</div>
        <p class="cta-band__sub">${esc(t(a.cta.sub))}</p>
        <div class="cta-band__actions">
          <a href="contact.html" class="btn btn-white btn-lg">${esc(t(a.cta.btn))}</a>
        </div>
      </div>
    </div>`;
}

/* ════════════════════════════════════════════════════════════════
   PAGE DISPATCHER — reads data-page on <main> and routes
   Phase 3+: add cases for cncTurning, cncMilling, etc.
   ════════════════════════════════════════════════════════════════ */

function renderPage() {
  const el   = document.getElementById('page-content');
  const page = el ? (el.dataset.page || 'home') : 'home';
  switch (page) {
    case 'home':     renderHome();          break;
    case 'about':    renderAbout();         break;
    case 'services': renderServicesPage();  break;
    // Phase 3b+: case 'cncTurning': renderServiceDetail('cncTurning'); break;
    default: break;
  }
}

/* ════════════════════════════════════════════════════════════════
   LANGUAGE SWITCHER
   ════════════════════════════════════════════════════════════════ */

function setLang(newLang) {
  lang = newLang;
  localStorage.setItem('anew_lang', lang);
  renderNav();
  renderPage();
  renderFooter();
  renderFloatingCta();
}

/* ════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {
  renderNav();
  renderPage();
  renderFooter();
  renderFloatingCta();
});
