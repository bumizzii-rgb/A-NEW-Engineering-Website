'use strict';

/* ════════════════════════════════════════════════════════════════
   services.js — loaded only by services.html
   Overrides renderServicesPage() from app.js:
   - CTA button text → "ผลงานของเรา" (Our Work) in all 4 languages
   - CTA links → projects.html#[section] instead of service detail pages
   ════════════════════════════════════════════════════════════════ */

/* ── Slug → projects page anchor map ────────────────────────── */
var SERVICE_PROJECT_ANCHORS = {
  'structural-steel.html':       'projects.html#structural-steel',
  'welding-fabrication.html':    'projects.html#welding',
  'industrial-installation.html':'projects.html#installation',
  'machine-structure.html':      'projects.html#machine-structure',
  'custom-manufacturing.html':   'projects.html#custom',
  'cnc-machining.html':          'projects.html#cnc',
  'reverse-engineering.html':    'projects.html#reverse-engineering'
};

/* ── Scoped style override (services page only) ──────────────── */

if (!document.getElementById('services-styles')) {
  var _st = document.createElement('style');
  _st.id = 'services-styles';
  _st.textContent =
    '#page-content .section-label {'
    + 'font-size:18px;'
    + 'font-weight:700;'
    + 'letter-spacing:1px;'
    + 'margin-top:12px;'
    + 'margin-bottom:16px;'
    + '}';
  document.head.appendChild(_st);
}

/* ── Renderer ────────────────────────────────────────────────── */

function renderServicesPage() {
  var sp = C.servicesPage;
  var hs = C.home.services;
  updateSEO(t(sp.seo.title), t(sp.seo.desc));

  /* Build service cards — title + description only */
  var serviceCardsHtml = hs.items.map(function(s) {
    return '<div class="service-card" style="justify-content:center">'
      + '<div class="service-card__name">' + esc(t(s.name)) + '</div>'
      + '<div class="service-card__desc">' + esc(t(s.desc)) + '</div>'
      + '</div>';
  }).join('');

  document.getElementById('page-content').innerHTML =

    /* ── INNER HERO ── */
    '<section class="hero hero--inner" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-sevices.webp.png);background-size:scale down;background-position:center">'
    + '<div class="container">'
    +   '<nav aria-label="Breadcrumb" class="hero__badge" style="background:rgba(255,255,255,0.15);display:inline-block">'
    +     '<a href="index.html" style="color:inherit;text-decoration:none">' + esc(t(C.nav.home)) + '</a>'
    +     '<span style="margin:0 6px">›</span>'
    +     '<span>' + esc(t(C.nav.services)) + '</span>'
    +   '</nav>'
    +   '<h1 class="hero__h1">' + esc(t(sp.hero.h1)) + '</h1>'
    +   '<p class="hero__sub">' + esc(t(sp.hero.sub)) + '</p>'
    + '</div>'
    + '</section>'

    /* ── SERVICE CARDS GRID ── */
    + '<section class="section section--white">'
    + '<div class="container text-center">'
    +   '<div class="section-label">' + esc(t(hs.eyebrow)) + '</div>'
    +   '<h2 class="section-title">' + esc(t(hs.title)) + '</h2>'
    +   '<p class="section-subtitle">' + esc(t(hs.sub)) + '</p>'
    +   '<div class="card-grid">' + serviceCardsHtml + '</div>'
    + '</div>'
    + '</section>'

    /* ── IN-HOUSE CAPABILITY ── */
    + '<section class="section section--light">'
    + '<div class="container">'
    +   '<div style="max-width:720px;margin:0 auto;text-align:center">'
    +     '<h2 class="section-title">' + esc(t(C.servicesPage.inhouse.title)) + '</h2>'
    +     '<p style="color:var(--color-text-light);line-height:1.8;margin-bottom:32px">' + esc(t(C.servicesPage.inhouse.body)) + '</p>'
    +     '<a href="machinery.html" class="btn btn-outline btn-lg">' + esc(t(C.nav.machinery)) + '</a>'
    +   '</div>'
    + '</div>'
    + '</section>'

    /* ── CTA BAND ── */
    + '<div class="cta-band">'
    + '<div class="container">'
    +   '<div class="cta-band__title">' + esc(t(C.home.ctaBand.title)) + '</div>'
    +   '<p class="cta-band__sub">' + esc(t(C.home.ctaBand.sub)) + '</p>'
    +   '<div class="cta-band__actions">'
    +     '<a href="contact.html" class="btn btn-white btn-lg">' + esc(t(C.home.ctaBand.btn)) + '</a>'
    +   '</div>'
    + '</div>'
    + '</div>';
}

/* ── Page Router Override ────────────────────────────────────── */

function renderPage() {
  var el   = document.getElementById('page-content');
  var page = el ? (el.dataset.page || 'home') : 'home';
  switch (page) {
    case 'home':      renderHome();          break;
    case 'about':     renderAbout();         break;
    case 'services':  renderServicesPage();  break;
    case 'machinery': renderMachinery();     break;
    case 'projects':  renderProjects();      break;
    case 'careers':   renderCareers();       break;
    case 'contact':   renderContact();       break;
    default: break;
  }
}
