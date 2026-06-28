'use strict';

/* ════════════════════════════════════════════════════════════════
   projects.js — loaded only by projects.html
   Adds C.projects, defines renderProjects(), overrides renderPage()
   ════════════════════════════════════════════════════════════════ */

C.projects = {
  seo: {
    title: {en:'Project Gallery | A NEW Engineering Thailand',
            th:'แกลเลอรี่ผลงาน | เอ นิว เอ็นจิเนียริ่ง ไทย',
            zh:'项目案例展示 | A NEW Engineering 泰国',
            ja:'製作実績ギャラリー | A NEW Engineering タイ'},
    desc:  {en:'Browse A NEW Engineering\'s project gallery — structural steel fabrication, welding & fabrication, industrial installation, machine structure fabrication, custom manufacturing, CNC machining & reverse engineering in Si Racha, Chonburi, Thailand.',
            th:'ดูแกลเลอรี่ผลงานของ เอ นิว เอ็นจิเนียริ่ง — โครงสร้างเหล็ก เชื่อมโลหะ ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร ผลิตตามแบบ กลึง CNC และวิศวกรรมย้อนกลับ ศรีราชา ชลบุรี ประเทศไทย',
            zh:'浏览A NEW Engineering项目案例——钢结构制造、焊接与金属加工、工业安装、机械结构制造、定制零件、CNC加工及逆向工程，位于泰国春武里西拉差。',
            ja:'A NEW Engineeringの製作実績ギャラリー — 鉄骨構造製作・溶接/金属加工・産業機器設置・機械架台製作・カスタム製造・CNC精密加工・リバースエンジニアリング、タイ チョンブリー シーラーチャー。'}
  },

  hero: {
    h1:  {en:'Project Gallery',
          th:'แกลเลอรี่ผลงาน',
          zh:'项目案例展示',
          ja:'製作実績ギャラリー'},
    sub: {en:'A selection of fabrication, welding, installation, and machining projects completed for industrial clients across Thailand',
          th:'ตัวอย่างผลงานด้านโครงสร้าง เชื่อม ติดตั้ง และการผลิตสำหรับลูกค้าอุตสาหกรรมทั่วประเทศไทย',
          zh:'为泰国各地工业客户完成的钢构、焊接、安装及加工项目精选',
          ja:'タイ全土の産業顧客向けに完成した鉄骨・溶接・設置・加工プロジェクトの一部'}
  },

  ctaTitle:  {en:'Ready to Discuss Your Project?',
              th:'พร้อมพูดคุยเกี่ยวกับโครงการของคุณแล้วหรือยัง?',
              zh:'准备好讨论您的项目了吗？',
              ja:'プロジェクトについてご相談ですか？'},

  ctaBtn:    {en:'Request a Quote',
              th:'ขอใบเสนอราคา',
              zh:'申请报价',
              ja:'お見積もりを依頼する'},

  photoSoon: {en:'Photo coming soon',
              th:'กำลังเพิ่มรูปภาพ',
              zh:'照片即将上传',
              ja:'写真準備中'},

  /* ── Gallery items ───────────────────────────────────────────
     To add a real photo: add  src:'images/projects/filename.jpg'
     ──────────────────────────────────────────────────────────── */
  items: [
    {src:'images.project/steel-01.png',         cat:{en:'Structural Steel Fabrication',  th:'งานโครงสร้างเหล็ก',      zh:'钢结构制造',    ja:'鉄骨構造製作'}},
    {src:'images.project/steel-02.png',         cat:{en:'Structural Steel Fabrication',  th:'งานโครงสร้างเหล็ก',      zh:'钢结构制造',    ja:'鉄骨構造製作'}},
    {src:'images.project/steel-03.png',         cat:{en:'Structural Steel Fabrication',  th:'งานโครงสร้างเหล็ก',      zh:'钢结构制造',    ja:'鉄骨構造製作'}},
    {src:'images.project/steel-04.png',         cat:{en:'Structural Steel Fabrication',  th:'งานโครงสร้างเหล็ก',      zh:'钢结构制造',    ja:'鉄骨構造製作'}},
    {src:'images.project/steel-05.png',         cat:{en:'Structural Steel Fabrication',  th:'งานโครงสร้างเหล็ก',      zh:'钢结构制造',    ja:'鉄骨構造製作'}},
    {src:'images.project/welding-01.png',       cat:{en:'Welding & Fabrication',         th:'งานเชื่อมและผลิตโลหะ',   zh:'焊接与金属加工', ja:'溶接・金属加工'}},
    {src:'images.project/welding-02.jpg',       cat:{en:'Welding & Fabrication',         th:'งานเชื่อมและผลิตโลหะ',   zh:'焊接与金属加工', ja:'溶接・金属加工'}},
    {src:'images.project/welding-03.png',       cat:{en:'Welding & Fabrication',         th:'งานเชื่อมและผลิตโลหะ',   zh:'焊接与金属加工', ja:'溶接・金属加工'}},
    {src:'images.project/installation-01.png',  cat:{en:'Industrial Installation',       th:'งานติดตั้งอุตสาหกรรม',   zh:'工业安装',      ja:'産業機器設置工事'}},
    {src:'images.project/installation-02.jpg',  cat:{en:'Industrial Installation',       th:'งานติดตั้งอุตสาหกรรม',   zh:'工业安装',      ja:'産業機器設置工事'}},
    {src:'images.project/installation-03.png',  cat:{en:'Industrial Installation',       th:'งานติดตั้งอุตสาหกรรม',   zh:'工业安装',      ja:'産業機器設置工事'}},
    {src:'images.project/machine-01.jpg',       cat:{en:'Machine Structure Fabrication', th:'งานโครงสร้างเครื่องจักร', zh:'机械结构制造',  ja:'機械架台・構造体製作'}},
    {src:'images.project/machine-02.png',       cat:{en:'Machine Structure Fabrication', th:'งานโครงสร้างเครื่องจักร', zh:'机械结构制造',  ja:'機械架台・構造体製作'}},
    {src:'images.project/machine-03.png',       cat:{en:'Machine Structure Fabrication', th:'งานโครงสร้างเครื่องจักร', zh:'机械结构制造',  ja:'機械架台・構造体製作'}},
    {src:'images.project/custom-01.png',        cat:{en:'Custom Manufacturing',          th:'ผลิตชิ้นส่วนตามแบบ',      zh:'定制零件制造',  ja:'カスタム製造'}},
    {src:'images.project/custom-02.png',        cat:{en:'Custom Manufacturing',          th:'ผลิตชิ้นส่วนตามแบบ',      zh:'定制零件制造',  ja:'カスタム製造'}},
    {src:'images.project/custom-03.jpg',        cat:{en:'Custom Manufacturing',          th:'ผลิตชิ้นส่วนตามแบบ',      zh:'定制零件制造',  ja:'カสタム製造'}},
    {src:'images.project/cnc-01.png',           cat:{en:'CNC Machining',                 th:'งานกลึงและกัด CNC',       zh:'CNC精密加工',  ja:'CNC精密加工'}}
  ]
};

/* ── Renderer ────────────────────────────────────────────────── */

function renderProjects() {
  var p = C.projects;
  updateSEO(t(p.seo.title), t(p.seo.desc));

  /* Inject gallery styles once */
  if (!document.getElementById('proj-gallery-style')) {
    var s = document.createElement('style');
    s.id = 'proj-gallery-style';
    s.textContent = [
      '.gallery-grid{',
        'display:grid;',
        'grid-template-columns:repeat(3,1fr);',
        'gap:20px;',
      '}',
      '@media(max-width:767px){',
        '.gallery-grid{grid-template-columns:repeat(2,1fr);}',
      '}',
      '@media(max-width:639px){',
        '.gallery-grid{grid-template-columns:repeat(2,1fr);}',
      '}',
      '.gallery-item{',
        'background:#fff;',
        'border-radius:8px;',
        'overflow:hidden;',
        'border:1px solid var(--color-border,#E2E8F0);',
        'box-shadow:0 1px 4px rgba(0,0,0,0.06);',
        'transition:box-shadow 0.18s,transform 0.18s;',
      '}',
      '.gallery-item:hover{',
        'box-shadow:0 6px 18px rgba(0,0,0,0.11);',
        'transform:translateY(-2px);',
      '}',
      '.gallery-item__img{',
        'position:relative;',
        'width:100%;',
        'padding-top:75%;',   /* 4:3 aspect ratio */
        'background:#F1F5F9;',
        'overflow:hidden;',
      '}',
      '.gallery-item__img img{',
        'position:absolute;',
        'top:0;left:0;',
        'width:100%;height:100%;',
        'object-fit:cover;',
      '}',
      '.gallery-item__placeholder{',
        'position:absolute;',
        'top:0;left:0;right:0;bottom:0;',
        'display:flex;',
        'flex-direction:column;',
        'align-items:center;',
        'justify-content:center;',
        'gap:10px;',
      '}',
      '.gallery-item__ph-text{',
        'font-size:0.6875rem;',
        'font-weight:600;',
        'color:#94A3B8;',
        'letter-spacing:0.06em;',
        'text-transform:uppercase;',
      '}',
      '.gallery-item__caption{',
        'padding:10px 14px 12px;',
        'font-size:0.8125rem;',
        'font-weight:600;',
        'color:var(--color-primary,#1B3A6B);',
        'line-height:1.35;',
        'border-top:1px solid var(--color-border,#E2E8F0);',
      '}'
    ].join('');
    document.head.appendChild(s);
  }

  /* Placeholder camera icon */
  var icon = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
    + '<rect x="3" y="13" width="34" height="22" rx="3.5" stroke="#CBD5E1" stroke-width="2"/>'
    + '<circle cx="20" cy="24" r="7" stroke="#CBD5E1" stroke-width="2"/>'
    + '<circle cx="20" cy="24" r="3" fill="#E2E8F0"/>'
    + '<path d="M14 13 L15.5 8 L24.5 8 L26 13" stroke="#CBD5E1" stroke-width="2" fill="none" stroke-linejoin="round"/>'
    + '<circle cx="32" cy="18" r="1.5" fill="#CBD5E1"/>'
    + '</svg>';

  /* Build gallery cards */
  var cards = p.items.map(function(item) {
    var imgHtml = item.src
      ? '<img src="' + esc(item.src) + '" alt="' + esc(t(item.cat)) + '" loading="lazy">'
      : '<div class="gallery-item__placeholder">'
          + icon
          + '<span class="gallery-item__ph-text">' + esc(t(p.photoSoon)) + '</span>'
        + '</div>';
    return '<div class="gallery-item">'
      + '<div class="gallery-item__img">' + imgHtml + '</div>'
      + '<div class="gallery-item__caption">' + esc(t(item.cat)) + '</div>'
      + '</div>';
  }).join('');

  document.getElementById('page-content').innerHTML =

    /* ── INNER HERO ── */
    '<section class="hero hero--inner" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-project.webp.png);background-size:cover;background-position:center">'
    + '<div class="container">'
    +   '<nav aria-label="Breadcrumb" class="hero__badge" style="background:rgba(255,255,255,0.15);display:inline-block">'
    +     '<a href="index.html" style="color:inherit;text-decoration:none">' + esc(t(C.nav.home)) + '</a>'
    +     '<span style="margin:0 6px">›</span>'
    +     '<span>' + esc(t(C.nav.projects)) + '</span>'
    +   '</nav>'
    +   '<h1 class="hero__h1">' + esc(t(p.hero.h1)) + '</h1>'
    +   '<p class="hero__sub">' + esc(t(p.hero.sub)) + '</p>'
    + '</div>'
    + '</section>'

    /* ── GALLERY ── */
    + '<section class="section section--white">'
    + '<div class="container">'
    +   '<div class="gallery-grid">' + cards + '</div>'
    + '</div>'
    + '</section>'

    /* ── CTA BAND ── */
    + '<div class="cta-band">'
    + '<div class="container">'
    +   '<div class="cta-band__title">' + esc(t(p.ctaTitle)) + '</div>'
    +   '<div class="cta-band__actions">'
    +     '<a href="contact.html" class="btn btn-white btn-lg">' + esc(t(p.ctaBtn)) + '</a>'
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
    default: break;
  }
}
