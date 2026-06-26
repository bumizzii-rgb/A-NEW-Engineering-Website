'use strict';

/* ════════════════════════════════════════════════════════════════
   careers.js — loaded only by careers.html
   Adds C.careers, defines renderCareers(), overrides renderPage()
   ════════════════════════════════════════════════════════════════ */

C.careers = {
  seo: {
    title: {en:'Careers & Jobs | A NEW Engineering, Si Racha, Chonburi',
            th:'ร่วมงานกับเรา | เอ นิว เอ็นจิเนียริ่ง ศรีราชา ชลบุรี',
            zh:'招聘信息 | A NEW Engineering 西拉差春武里',
            ja:'採用情報 | A NEW Engineering シーラーチャー チョンブリー'},
    desc:  {en:'Join A NEW Engineering — Metal Welder, Metal Fabricator, Lathe Operator, and manufacturing careers in Si Racha, Chonburi. Stable employment with an experienced industrial fabrication and installation company. Send your CV to sales@anew.co.th',
            th:'ร่วมงานกับ เอ นิว เอ็นจิเนียริ่ง — ช่างเชื่อมโลหะ ช่างประกอบโลหะ ช่างกลึง และงานการผลิตที่ศรีราชา ชลบุรี งานมั่นคงกับบริษัทผลิตโครงสร้างและงานโลหะที่มีประสบการณ์ ส่ง CV มาที่ sales@anew.co.th',
            zh:'加入A NEW Engineering——西拉差春武里金属焊工、金属制造工、车床操作员等制造职位。加入经验丰富的工业制造与安装公司，工作稳定。简历请发送至sales@anew.co.th',
            ja:'A NEW Engineering採用情報 — シーラーチャー チョンブリーの溶接工・金属製作工・旋盤オペレーターほか製造職。経験豊富な産業製作・設置工事会社での安定雇用。履歴書はsales@anew.co.thへ。'}
  },

  hero: {
    h1:  {en:'Join Our Team',
          th:'ร่วมทีมงานของเรา',
          zh:'加入我们的团队',
          ja:'私たちのチームに参加しませんか'},
    sub: {en:'Build a rewarding career in industrial fabrication and manufacturing with A NEW Engineering in Si Racha, Chonburi',
          th:'สร้างอาชีพที่คุ้มค่าในงานโลหะอุตสาหกรรมและการผลิตกับ เอ นิว เอ็นจิเนียริ่ง ที่ศรีราชา ชลบุรี',
          zh:'与A NEW Engineering一起，在春武里西拉差开启工业制造与金属加工领域的职业生涯',
          ja:'春武里県シーラーチャーのA NEW Engineeringで、産業製造・金属加工分野でのやりがいあるキャリアを築きましょう'}
  },

  intro: {en:'A NEW Engineering is an established industrial fabrication and installation company based in Si Racha, Chonburi — Thailand\'s most active industrial zone. We specialise in structural steel fabrication, welding and metal fabrication, industrial installation, machine structure manufacturing, and custom manufacturing. We are always looking for skilled, motivated individuals who take pride in their craft — whether you are an experienced welder, a metal fabricator, a lathe operator, or a skilled trades professional looking for a stable employer in the manufacturing sector. We offer a stable working environment, hands-on experience on industrial fabrication and machining projects, and the opportunity to grow your skills alongside a professional team with over 19 years of manufacturing experience.',
          th:'เอ นิว เอ็นจิเนียริ่ง เป็นบริษัทผลิตโครงสร้างและติดตั้งอุตสาหกรรมที่มีประสบการณ์ ตั้งอยู่ที่ศรีราชา ชลบุรี เขตอุตสาหกรรมที่คึกคักที่สุดของประเทศไทย เราเชี่ยวชาญด้านงานโครงสร้างเหล็ก เชื่อมและผลิตโลหะ ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร และการผลิตตามแบบ เราแสวงหาบุคลากรที่มีทักษะและแรงจูงใจที่ภาคภูมิใจในฝีมือของตนเองอยู่เสมอ ไม่ว่าจะเป็นช่างเชื่อมที่มีประสบการณ์ ช่างประกอบโลหะ ช่างกลึง หรือผู้เชี่ยวชาญสายช่างที่ต้องการนายจ้างที่มั่นคงในภาคการผลิต เรามอบสภาพแวดล้อมการทำงานที่มั่นคง ประสบการณ์ตรงในโครงการงานโลหะอุตสาหกรรมและผลิตชิ้นส่วน และโอกาสในการพัฒนาทักษะร่วมกับทีมงานมืออาชีพที่มีประสบการณ์การผลิตกว่า 19 ปี',
          zh:'A NEW Engineering是一家位于泰国最活跃工业区——春武里府西拉差的成熟工业制造与安装公司。我们专注于钢结构制造、焊接与金属加工、工业安装、机械结构制造及定制生产。我们始终寻找以自身技艺为荣、技能突出、充满干劲的人才——无论您是经验丰富的焊工、金属制造工、车床操作员，还是在制造业寻求稳定雇主的技能型人才，我们都欢迎您的申请。我们提供稳定的工作环境、参与工业制造和加工项目的实践经验，以及在拥有19年以上制造经验的专业团队中成长的机会。',
          ja:'A NEW Engineeringは、タイで最も活発な工業地帯——チョンブリー県シーラーチャーに拠点を置く経験豊富な産業製作・設置工事会社です。鉄骨構造製作・溶接/金属加工・産業機器設置・機械架台製作・カスタム製造を専門としています。自らの技術に誇りを持つ、技能と意欲のある方を常に求めています——経験豊富な溶接工・金属製作工・旋盤オペレーター、または製造業で安定した雇用先をお探しの技能職の方を問わず、ご応募をお待ちしています。安定した就労環境、産業製作・加工プロジェクトでの実践経験、そして19年以上の製造経験を持つプロフェッショナルチームとともに成長できる機会を提供しています。'},

  whyTitle: {en:'Why Work at A NEW Engineering?',
             th:'ทำไมต้องทำงานที่ เอ นิว เอ็นจิเนียริ่ง?',
             zh:'为什么选择A NEW Engineering？',
             ja:'A NEW Engineeringで働く理由'},

  benefits: [
    { icon: '🏆',
      text: {en:'Stable long-term employment with a company established in 2007 — over 19 years of manufacturing experience',
             th:'การจ้างงานระยะยาวที่มั่นคงกับบริษัทที่ก่อตั้งตั้งแต่ปี 2550 — ประสบการณ์การผลิตกว่า 19 ปี',
             zh:'在2007年成立、拥有19年以上制造经验的公司获得稳定的长期就业机会',
             ja:'2007年創業・19年以上の製造実績を持つ会社での安定した長期雇用'} },
    { icon: '⚙️',
      text: {en:'Hands-on experience on industrial fabrication, structural steel, welding, and machining projects across multiple industrial sectors',
             th:'ประสบการณ์ตรงในโครงการงานโลหะ โครงสร้างเหล็ก เชื่อม และการผลิตในหลายภาคอุตสาหกรรม',
             zh:'参与多行业工业制造、钢结构、焊接及加工项目的实践经验',
             ja:'複数業種にわたる産業製作・鉄骨・溶接・加工プロジェクトでの実践的な経験'} },
    { icon: '🎯',
      text: {en:'A professional working environment focused on craftsmanship, quality, and continuous improvement',
             th:'สภาพแวดล้อมการทำงานที่เป็นมืออาชีพ มุ่งเน้นฝีมือ คุณภาพ และการปรับปรุงอย่างต่อเนื่อง',
             zh:'注重工艺、品质和持续改进的专业工作环境',
             ja:'技術・品質・継続的改善に焦点を当てたプロフェッショナルな職場環境'} },
    { icon: '📍',
      text: {en:'Conveniently located in Si Racha — close to industrial estates, residential areas, and public transport',
             th:'ตั้งอยู่ในศรีราชาอย่างสะดวกสบาย — ใกล้นิคมอุตสาหกรรม ที่พักอาศัย และขนส่งสาธารณะ',
             zh:'位置便利，位于西拉差——靠近工业园区、住宅区及公共交通',
             ja:'シーラーチャーの好立地 — 工業団地・住宅地・公共交通機関に近接'} },
    { icon: '🌐',
      text: {en:'Opportunity to work on diverse industrial fabrication, welding, installation, and custom manufacturing projects',
             th:'โอกาสทำงานในโครงการงานโลหะ เชื่อม ติดตั้ง และผลิตตามแบบที่หลากหลาย',
             zh:'有机会参与多样化的工业制造、焊接、安装及定制生产项目',
             ja:'多様な産業製作・溶接・設置・カスタム製造プロジェクトへの参画機会'} }
  ],

  positionsTitle: {en:'Current Openings',
                   th:'ตำแหน่งที่เปิดรับ',
                   zh:'当前职位空缺',
                   ja:'現在の求人'},

  noVacancies: {en:'Qualifications: Aged up to 45 years. Applicants must have the skills required for the position applied for. Prior experience in a related field is an advantage and will be given special consideration.',
                th:'คุณสมบัติ: อายุไม่เกิน 45 ปี มีทักษะที่จำเป็นตามตำแหน่งงานที่รับผิดชอบ หากมีประสบการณ์ในสายงานที่เกี่ยวข้อง จะได้รับการพิจารณาเป็นพิเศษ',
                zh:'招聘条件：年龄不超过45岁。应聘者须具备所申请岗位所需技能。具有相关工作经验者将获优先考虑。',
                ja:'応募要件：45歳以下。応募ポジションに必要なスキルを有すること。関連分野での経験がある方は優遇します。'},

  positions: [
    {en:'Metal Welder (2 Positions)',                th:'ช่างเชื่อมโลหะ (2 อัตรา)',         zh:'金属焊工（2名）',              ja:'溶接工（2名）'},
    {en:'Metal Fabricator / Assembler (2 Positions)', th:'ช่างประกอบโลหะ (2 อัตรา)',        zh:'金属制造工／装配工（2名）',      ja:'金属製作工・組立工（2名）'},
    {en:'Lathe Operator (1 Position)',               th:'ช่างกลึง (1 อัตรา)',               zh:'车床操作员（1名）',             ja:'旋盤オペレーター（1名）'},
    {en:'Gas & Plasma Cutting Operator (1 Position)', th:'ช่างตัดแก๊ส-พลาสม่า (1 อัตรา)', zh:'气割及等离子切割操作员（1名）', ja:'ガス・プラズマ切断オペレーター（1名）'}
  ],

  applyTitle: {en:'Ready to Apply?',
               th:'พร้อมสมัครแล้วใช่ไหม?',
               zh:'准备好申请了吗？',
               ja:'応募のご準備はできましたか？'},

  applyBody: {en:'Send your CV and a brief introduction to sales@anew.co.th — our team will review your application and contact you regarding suitable positions.',
              th:'ส่ง CV และข้อมูลแนะนำตัวโดยย่อมาที่ sales@anew.co.th — ทีมงานของเราจะตรวจสอบใบสมัครและติดต่อคุณเกี่ยวกับตำแหน่งที่เหมาะสม',
              zh:'将您的简历及简短自我介绍发送至sales@anew.co.th——我们的团队将审核您的申请，并就合适职位与您联系。',
              ja:'履歴書と簡単な自己紹介をsales@anew.co.thへお送りください。チームが応募内容を確認し、適したポジションについてご連絡します。'},

  applyBtn: {en:'Send Your Application',
             th:'ส่งใบสมัครของคุณ',
             zh:'发送申请',
             ja:'応募書類を送る'}
};

/* ── Renderer ────────────────────────────────────────────────── */

function renderCareers() {
  const c = C.careers;
  updateSEO(t(c.seo.title), t(c.seo.desc));

  const benefitCards = c.benefits.map(function(b) {
    return `
      <div class="reason-card">
        <div class="reason-card__num">${b.icon}</div>
        <p class="reason-card__body">${esc(t(b.text))}</p>
      </div>`;
  }).join('');

  const positionItems = c.positions.map(function(pos) {
    return `
      <div style="display:flex;align-items:center;gap:12px;padding:16px 0;border-bottom:1px solid var(--color-border)">
        <span style="width:10px;height:10px;border-radius:50%;background:var(--color-cta);flex-shrink:0"></span>
        <span style="font-weight:500;color:var(--color-text)">${esc(t(pos))}</span>
      </div>`;
  }).join('');

  document.getElementById('page-content').innerHTML = `

    <!-- ░░░ INNER HERO ░░░ -->
    <section class="hero hero--inner" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-careers.webp.png);background-size:cover;background-position:center">
      <div class="container">
        <nav aria-label="Breadcrumb" class="hero__badge" style="background:rgba(255,255,255,0.15);display:inline-block">
          <a href="index.html" style="color:inherit;text-decoration:none">${esc(t(C.nav.home))}</a>
          <span style="margin:0 6px">›</span>
          <span>${esc(t(C.nav.careers))}</span>
        </nav>
        <h1 class="hero__h1">${esc(t(c.hero.h1))}</h1>
        <p class="hero__sub">${esc(t(c.hero.sub))}</p>
      </div>
    </section>

    <!-- ░░░ INTRO ░░░ -->
    <section class="section section--white">
      <div class="container">
        <div style="max-width:800px;margin:0 auto;text-align:center">
          <p style="color:var(--color-text-light);line-height:1.8;font-size:1.0625rem">${esc(t(c.intro))}</p>
        </div>
      </div>
    </section>

    <!-- ░░░ WHY WORK HERE ░░░ -->
    <section class="section section--light">
      <div class="container">
        <h2 class="section-title text-center">${esc(t(c.whyTitle))}</h2>
        <div class="reasons-grid" style="margin-top:32px">
          ${benefitCards}
        </div>
      </div>
    </section>

    <!-- ░░░ OPEN POSITIONS ░░░ -->
    <section class="section section--white">
      <div class="container">
        <div style="max-width:640px;margin:0 auto">
          <h2 class="section-title">${esc(t(c.positionsTitle))}</h2>
          <p style="color:var(--color-text-light);margin-bottom:24px">${esc(t(c.noVacancies))}</p>
          <div>
            ${positionItems}
          </div>
        </div>
      </div>
    </section>

    <!-- ░░░ APPLY CTA ░░░ -->
    <section class="section section--navy">
      <div class="container">
        <div style="max-width:600px;margin:0 auto;text-align:center">
          <h2 class="section-title section-title--white">${esc(t(c.applyTitle))}</h2>
          <p style="color:rgba(255,255,255,0.8);line-height:1.8;margin-bottom:32px">${esc(t(c.applyBody))}</p>
          <a href="mailto:sales@anew.co.th" class="btn btn-white btn-lg">${esc(t(c.applyBtn))}</a>
        </div>
      </div>
    </section>`;
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
    default: break;
  }
}
