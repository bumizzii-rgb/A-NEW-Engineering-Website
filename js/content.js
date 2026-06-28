'use strict';

/* ── Language State ──────────────────────────────────────────────────────── */
var lang = localStorage.getItem('anew_lang') || 'en';

function t(o) {
  if (!o) return '';
  if (typeof o === 'string') return o;
  return o[lang] || o.en || '';
}

/* ── Content ─────────────────────────────────────────────────────────────── */
const C = {};

/* NAVIGATION
   Referenced by renderNav() in app.js — shared across all pages.
   Phase 2+ pages append their own C.pageName = {...} below this block. */
C.nav = {
  home:     {en:'Home',     th:'หน้าแรก',       zh:'首页',    ja:'ホーム'},
  about:    {en:'About Us', th:'เกี่ยวกับเรา',  zh:'关于我们', ja:'会社概要'},
  services: {en:'Services', th:'บริการ',        zh:'服务',    ja:'サービス'},
  machinery:{en:'Machinery',th:'เครื่องจักร',   zh:'设备',    ja:'設備'},
  projects: {en:'Projects', th:'ผลงาน',         zh:'项目案例', ja:'実績'},
  careers:  {en:'Careers',  th:'ร่วมงานกับเรา', zh:'招聘',    ja:'採用情報'},
  contact:  {en:'Contact',  th:'ติดต่อเรา',     zh:'联系我们', ja:'お問い合わせ'},
  cta:      {en:'Get a Quote', th:'ขอใบเสนอราคา', zh:'申请报价', ja:'お見積りを依頼'},
  service_items: [
    {en:'Structural Steel Fabrication',  th:'งานโครงสร้างเหล็ก',          zh:'钢结构制造',    ja:'鉄骨構造製作',            slug:'services.html#structural-steel'},
    {en:'Welding & Fabrication',         th:'งานเชื่อมและผลิตโลหะ',        zh:'焊接与金属加工', ja:'溶接・金属加工',           slug:'services.html#welding'},
    {en:'Industrial Installation',       th:'งานติดตั้งอุตสาหกรรม',         zh:'工业安装',      ja:'産業機器設置工事',          slug:'services.html#installation'},
    {en:'Machine Structure Fabrication', th:'งานโครงสร้างเครื่องจักร',      zh:'机械结构制造',  ja:'機械架台・構造体製作',      slug:'services.html#machine-structure'},
    {en:'Custom Manufacturing',          th:'ผลิตชิ้นส่วนตามแบบ',           zh:'定制零件制造',  ja:'カスタム製造',              slug:'services.html#custom'},
    {en:'CNC Machining',                 th:'งานกลึงและกัด CNC',            zh:'CNC精密加工',  ja:'CNC精密加工',               slug:'services.html#cnc'},
    {en:'Reverse Engineering',           th:'วิศวกรรมย้อนกลับ',             zh:'逆向工程',      ja:'リバースエンジニアリング',  slug:'services.html#reverse'}
  ]
};

/* FOOTER — shared across all pages */
C.footer = {
  tagline:    {en:"Precision Manufacturing for Thailand's Industry",
               th:'การผลิตความแม่นยำสำหรับอุตสาหกรรมไทย',
               zh:'为泰国工业提供精密制造服务',
               ja:'タイ産業のための精密製造'},
  address:    {en:'129/14 Moo 11, Bang Phra, Si Racha, Chonburi 20110, Thailand',
               th:'129/14 หมู่ 11 บางพระ ศรีราชา ชลบุรี 20110 ประเทศไทย',
               zh:'泰国春武里府西拉差县邦帕129/14村11号，邮编20110',
               ja:'タイ国チョンブリー県シーラーチャー郡バーンプラ129/14 ムー11 郵便番号20110'},
  phone1:     '094-925-5553',
  phone2:     '094-925-5552',
  email1:     'sales@anew.co.th',
  email2:     'saleanew@gmail.com',
  facebook:   'facebook.com/AnewEngineering',
  hours:      {en:'Monday – Saturday: 08:00 – 17:00 · Sunday: Closed',
               th:'จันทร์ – เสาร์: 08:00 – 17:00 น. · วันอาทิตย์: ปิดทำการ',
               zh:'周一至周六：08:00 – 17:00 · 周日：休息',
               ja:'月曜日～土曜日：08:00～17:00 · 日曜日：定休日'},
  col1:       {en:'Services',  th:'บริการ',  zh:'服务',    ja:'サービス'},
  col2:       {en:'Company',   th:'บริษัท', zh:'公司',    ja:'会社情報'},
  col3:       {en:'Connect',   th:'ติดต่อ',  zh:'联系我们', ja:'お問い合わせ'},
  copyright:  {en:'© 2026 A NEW Engineering Co., Ltd. All rights reserved.',
               th:'© 2569 บริษัท เอ นิว เอ็นจิเนียริ่ง จำกัด สงวนลิขสิทธิ์',
               zh:'© 2026 A NEW Engineering有限公司 版权所有',
               ja:'© 2026 A NEW Engineering Co., Ltd. All rights reserved.'},
  floatingCta:{en:'Get a Quotation — Tap Here',
               th:'ขอใบเสนอราคา — แตะที่นี่',
               zh:'申请报价 — 点击这里',
               ja:'見積依頼 — タップしてください'}
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HOME PAGE  (index.html · data-page="home")
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
C.home = {
  seo: {
    title: {en:'Industrial Fabrication, Welding & Installation Thailand | A NEW Engineering',
            th:'รับงานโครงสร้างเหล็ก เชื่อม ติดตั้งอุตสาหกรรม ชลบุรี | เอ นิว เอ็นจิเนียริ่ง',
            zh:'泰国钢结构制造、焊接与工业安装 | A NEW Engineering',
            ja:'鉄骨構造製作・溶接・産業設置工事 タイ | A NEW Engineering'},
    desc:  {en:'A NEW Engineering offers structural steel fabrication, welding & fabrication, industrial installation, machine structure fabrication, custom manufacturing, CNC machining & reverse engineering in Si Racha, Chonburi. Est. 2007.',
            th:'เอ นิว เอ็นจิเนียริ่ง รับงานโครงสร้างเหล็ก เชื่อม ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร ผลิตตามแบบ กลึง CNC และวิศวกรรมย้อนกลับ ศรีราชา ชลบุรี ก่อตั้ง 2550',
            zh:'A NEW Engineering提供钢结构制造、焊接与金属加工、工业安装、机械结构制造、定制零件、CNC加工及逆向工程，位于泰国春武里西拉差。2007年成立。',
            ja:'A NEW Engineeringはタイ チョンブリー シーラーチャーにて鉄骨構造製作・溶接・産業機器設置・機械架台製作・カスタム製造・CNC加工・リバースエンジニアリングを提供。2007年創業。'}
  },

  hero: {
    badge: {en:'Est. 2007 · Si Racha, Chonburi, Thailand',
            th:'ก่อตั้งปี 2550 · ศรีราชา ชลบุรี ประเทศไทย',
            zh:'成立于2007年 · 泰国春武里府西拉差',
            ja:'2007年創業 · タイ国チョンブリー県シーラーチャー'},
    h1:    {en:'Industrial Fabrication, Structural Steel & On-Site Installation',
            th:'งานโครงสร้างเหล็ก เชื่อมโลหะ และติดตั้งอุตสาหกรรม',
            zh:'钢结构制造、焊接与工业现场安装',
            ja:'鉄骨構造製作・溶接・産業機器設置工事'},
    sub:   {en:"Serving Thailand's industrial sector since 2007 — Structural Steel · Welding & Fabrication · Industrial Installation · Machine Structure · CNC Machining | Si Racha, Chonburi",
            th:'ให้บริการภาคอุตสาหกรรมไทยกว่า 19 ปี — โครงสร้างเหล็ก · เชื่อมโลหะ · ติดตั้งอุตสาหกรรม · โครงสร้างเครื่องจักร · กลึง CNC | ศรีราชา ชลบุรี',
            zh:'自2007年起服务泰国工业领域 — 钢结构制造·焊接与金属加工·工业安装·机械结构制造·CNC加工 | 春武里府西拉差',
            ja:'2007年よりタイ産業界にサービスを提供 — 鉄骨構造製作・溶接/金属加工・産業機器設置・機械架台製作・CNC加工 | チョンブリー県シーラーチャー'},
    cta1:  {en:'Request a Quotation', th:'ขอใบเสนอราคา', zh:'申请报价', ja:'お見積りを依頼する'},
    cta2:  {en:'View Our Projects',   th:'ดูผลงานของเรา', zh:'查看我们的项目', ja:'製作実績を見る'}
  },

  stats: [
    {num:'19+', lbl:{en:'Years of Manufacturing Experience', th:'ปี ประสบการณ์การผลิต',           zh:'年 制造经验',   ja:'年以上 製造実績'}},
    {num:'7',   lbl:{en:'Industrial Services',                th:'บริการอุตสาหกรรม',               zh:'项 工业服务',    ja:'種類 産業サービス'}},
    {num:'10+', lbl:{en:'Machines & Production Equipment',   th:'เครื่องจักรและอุปกรณ์การผลิต',  zh:'台以上 生产设备', ja:'台以上 生産設備'}},
    {num:'5+',  lbl:{en:'Industries Served',                 th:'อุตสาหกรรมที่ให้บริการ',         zh:'服务 工业领域',  ja:'業種以上 に対応'}}
  ],

  industries: {
    eyebrow: {en:'Industries We Serve', th:'อุตสาหกรรมที่เราให้บริการ', zh:'服务行业', ja:'対応業種'},
    title:   {en:"Trusted Across Thailand's Key Manufacturing Sectors",
              th:'ได้รับความไว้วางใจจากอุตสาหกรรมชั้นนำของประเทศไทย',
              zh:'获泰国各主要制造行业广泛信赖',
              ja:'タイの主要製造業界から幅広い信頼を獲得'},
    sub:     {en:'From factory structural steel and equipment installation to precision custom manufacturing — we serve a broad range of industrial clients across Thailand',
              th:'ตั้งแต่โครงสร้างเหล็กโรงงานและการติดตั้งอุปกรณ์ไปจนถึงการผลิตตามแบบความแม่นยำสูง — เราให้บริการลูกค้าอุตสาหกรรมที่หลากหลายทั่วประเทศไทย',
              zh:'从工厂钢结构和设备安装到精密定制零件制造——我们服务泰国各地各类工业客户',
              ja:'工場の鉄骨構造・設備設置から精密カスタム製造まで — タイ全土の幅広い産業顧客にサービスを提供します'},
    items: [
      {icon:'🚗', name:{en:'Automotive Industry',      th:'อุตสาหกรรมยานยนต์',           zh:'汽车行业',    ja:'自動車産業'}},
      {icon:'⚙️', name:{en:'Industrial Automation',    th:'ระบบอัตโนมัติอุตสาหกรรม',      zh:'工业自动化',  ja:'産業オートメーション'}},
      {icon:'📦', name:{en:'Packaging Industry',       th:'อุตสาหกรรมบรรจุภัณฑ์',        zh:'包装行业',    ja:'包装産業'}},
      {icon:'🍽️', name:{en:'Food Processing Industry', th:'อุตสาหกรรมแปรรูปอาหาร',       zh:'食品加工行业', ja:'食品加工業'}},
      {icon:'🏭', name:{en:'General Manufacturing',    th:'การผลิตทั่วไป',                zh:'通用制造业',  ja:'一般製造業'}}
    ]
  },

  services: {
    eyebrow: {en:'Our Services', th:'บริการของเรา', zh:'我们的服务', ja:'サービス内容'},
    title:   {en:'Industrial Fabrication, Welding & Manufacturing Services',
              th:'บริการงานโครงสร้างเหล็ก เชื่อม ติดตั้ง และผลิตชิ้นส่วนอุตสาหกรรม',
              zh:'钢结构制造、焊接与工业制造服务',
              ja:'鉄骨構造製作・溶接・産業製造サービス'},
    sub:     {en:'From structural steel fabrication and industrial installation to precision CNC machining — we deliver complete manufacturing solutions from our Si Racha, Chonburi facility',
              th:'ตั้งแต่งานโครงสร้างเหล็ก งานติดตั้งอุตสาหกรรม ไปจนถึงงานกลึง CNC ความแม่นยำสูง — เราส่งมอบโซลูชันการผลิตครบวงจรจากโรงงานศรีราชา ชลบุรี',
              zh:'从钢结构制造和工业安装到精密CNC加工——我们从泰国春武里西拉差工厂提供完整的制造解决方案',
              ja:'鉄骨構造製作・産業機器設置から精密CNC加工まで — チョンブリー県シーラーチャーの工場から完全な製造ソリューションを提供します'},
    items: [
      {name:{en:'Structural Steel Fabrication',
             th:'งานโครงสร้างเหล็ก',
             zh:'钢结构制造',
             ja:'鉄骨構造製作'},
       desc:{en:'Fabrication of steel frameworks, platforms, mezzanines, support structures, and industrial assemblies for factories and heavy industrial facilities',
             th:'งานผลิตโครงสร้างเหล็ก แพลตฟอร์ม ชานพัก โครงรองรับ และชุดประกอบอุตสาหกรรมสำหรับโรงงานและอุตสาหกรรมหนัก',
             zh:'为工厂和重工业设施制造钢框架、平台、夹层楼板、支撑结构及工业组件',
             ja:'工場・重工業施設向けの鉄骨フレーム・プラットフォーム・中二階・支持構造・産業用アセンブリの製作'},
       slug:'structural-steel.html'},
      {name:{en:'Welding & Fabrication',
             th:'งานเชื่อมและผลิตโลหะ',
             zh:'焊接与金属加工',
             ja:'溶接・金属加工'},
       desc:{en:'MIG, TIG, and arc welding for assemblies, sub-frames, brackets, tanks, pipe supports, and custom metalwork in carbon steel, stainless steel, and aluminium to client drawings',
             th:'งานเชื่อม MIG TIG และอาร์กสำหรับชุดประกอบ โครงรอง แบร็กเก็ต ถัง รองรับท่อ และงานโลหะตามแบบในเหล็กคาร์บอน สแตนเลส และอลูมิเนียม',
             zh:'MIG、TIG及弧焊加工，用于组件、副框架、支架、储罐、管道支撑及按图定制金属件，涵盖碳素钢、不锈钢及铝材',
             ja:'炭素鋼・ステンレス・アルミのMIG・TIG・アーク溶接。アセンブリ・サブフレーム・ブラケット・タンク・配管支持材・カスタム金属加工を図面通りに製作'},
       slug:'welding-fabrication.html'},
      {name:{en:'Industrial Installation',
             th:'งานติดตั้งอุตสาหกรรม',
             zh:'工业安装',
             ja:'産業機器設置工事'},
       desc:{en:'On-site installation of machinery, equipment bases, structural steel assemblies, and industrial systems — including leveling, alignment, and commissioning support',
             th:'งานติดตั้งภาคสนามของเครื่องจักร ฐานอุปกรณ์ ชุดโครงสร้างเหล็ก และระบบอุตสาหกรรม รวมถึงการปรับระดับ จัดแนว และสนับสนุนการเริ่มเดินเครื่อง',
             zh:'现场安装机械设备、设备底座、钢结构组件及工业系统，包括调平、对准及调试支持',
             ja:'機械・設備ベース・鉄骨組立品・産業システムの現地設置。レベリング・アライメント・試運転サポートまで対応'},
       slug:'industrial-installation.html'},
      {name:{en:'Machine Structure Fabrication',
             th:'งานโครงสร้างเครื่องจักร',
             zh:'机械结构制造',
             ja:'機械架台・構造体製作'},
       desc:{en:'Fabrication of machine frames, bases, guards, enclosures, jigs, and fixtures — combining welded steel structures with precision CNC-machined components for complete machine-ready assemblies',
             th:'งานผลิตโครงเครื่องจักร ฐาน ครอบป้องกัน เปลือกหุ้ม จิ๊ก และฟิกซ์เจอร์ โดยรวมโครงสร้างเหล็กเชื่อมเข้ากับชิ้นส่วน CNC ความแม่นยำเพื่อชุดประกอบเครื่องจักรที่สมบูรณ์',
             zh:'制造机械框架、底座、防护罩、外壳、夹具及定位装置，将焊接钢结构与精密CNC加工部件结合，交付完整的机器级组件',
             ja:'機械フレーム・ベース・カバー・エンクロージャー・治具・フィクスチャーの製作。溶接鋼構造と精密CNC加工部品を組み合わせ、完成品アセンブリとして納入'},
       slug:'machine-structure.html'},
      {name:{en:'Custom Manufacturing',
             th:'ผลิตชิ้นส่วนตามแบบ',
             zh:'定制零件制造',
             ja:'カスタム製造'},
       desc:{en:'Single-source manufacturing of complex assemblies requiring multiple processes — fabrication, CNC machining, grinding, and surface finishing — delivered as complete, ready-to-fit components',
             th:'การผลิตชิ้นส่วนจากแหล่งเดียวสำหรับชุดประกอบที่ต้องการหลายกระบวนการ งานโลหะ กลึง CNC เจียร และตกแต่งพื้นผิว ส่งมอบเป็นชิ้นส่วนสำเร็จรูปพร้อมติดตั้ง',
             zh:'针对需要多道工序的复杂组件提供一站式制造——包括钢构、CNC加工、磨削及表面处理——按客户规格交付完整的即装部件',
             ja:'複数工程が必要な複雑なアセンブリをワンソースで製造——鉄骨製作・CNC加工・研削・表面仕上げを一貫対応し、完成品として納入'},
       slug:'custom-manufacturing.html'},
      {name:{en:'CNC Machining',
             th:'งานกลึงและกัด CNC',
             zh:'CNC精密加工',
             ja:'CNC精密加工'},
       desc:{en:'In-house CNC turning, milling, and surface grinding supporting fabrication and installation projects — precision shafts, flanges, brackets, and plates machined to drawing from steel, stainless, and aluminium',
             th:'งานกลึง กัด และเจียรพื้นผิว CNC ภายในโรงงานเพื่อสนับสนุนงานโครงสร้างและติดตั้ง — เพลา แฟลนจ์ แบร็กเก็ต และแผ่นความแม่นยำจากเหล็ก สแตนเลส และอลูมิเนียม',
             zh:'自有CNC车削、铣削和平面磨削，为钢构和安装项目提供配套精密加工——按图纸加工钢材、不锈钢及铝材的精密轴类、法兰、支架及板件',
             ja:'自社CNC旋削・フライス・平面研削で鉄骨・設置プロジェクトをサポート——鋼材・ステンレス・アルミからシャフト・フランジ・ブラケット・プレートを図面通りに精密加工'},
       slug:'cnc-machining.html'},
      {name:{en:'Reverse Engineering',
             th:'วิศวกรรมย้อนกลับ',
             zh:'逆向工程',
             ja:'リバースエンジニアリング'},
       desc:{en:'Reproduction of obsolete or unavailable parts and structures from physical samples or site measurements — no original drawing required, reducing downtime and dependency on imported OEM parts',
             th:'การผลิตชิ้นส่วนและโครงสร้างที่ล้าสมัยหรือหาไม่ได้จากตัวอย่างจริงหรือการวัดภาคสนาม โดยไม่ต้องใช้แบบเดิม ลดเวลาหยุดเดินเครื่องและการพึ่งพาชิ้นส่วน OEM นำเข้า',
             zh:'根据实物样品或现场测量复制已停产或无法获取的零件和结构——无需原始图纸，减少停机时间，消除对进口OEM零件的依赖',
             ja:'現物サンプルや現地計測から廃番・入手困難な部品・構造物を再製造——元の図面不要。ダウンタイム削減と輸入OEM部品への依存解消に貢献'},
       slug:'reverse-engineering.html'}
    ],
    cta: {en:'Explore All Services', th:'ดูบริการทั้งหมด', zh:'查看全部服务', ja:'すべてのサービスを見る'}
  },

  projectsPreview: {
    eyebrow: {en:'Our Work', th:'ผลงานของเรา', zh:'我们的作品', ja:'製作実績'},
    title:   {en:"Fabrication, Welding & Installation Projects Across Thailand",
              th:'ผลงานงานโครงสร้าง เชื่อม และติดตั้งทั่วประเทศไทย',
              zh:'泰国各地的钢构、焊接与安装项目',
              ja:'タイ全土の鉄骨・溶接・設置工事実績'},
    sub:     {en:'A selection of structural steel fabrication, welding, industrial installation, and manufacturing projects completed for industrial clients across Thailand',
              th:'ตัวอย่างผลงานงานโครงสร้างเหล็ก เชื่อม ติดตั้งอุตสาหกรรม และการผลิตสำหรับลูกค้าอุตสาหกรรมทั่วประเทศไทย',
              zh:'为泰国各地工业客户完成的钢结构制造、焊接、工业安装及制造项目精选',
              ja:'タイ全土の産業顧客向けに完成した鉄骨構造製作・溶接・産業機器設置・製造プロジェクトの一部'},
    cats: [
      {icon:'🏗️', name:{en:'Structural Steel',        th:'งานโครงสร้างเหล็ก',    zh:'钢结构工程',  ja:'鉄骨構造工事'}},
      {icon:'🔥', name:{en:'Welding & Fabrication',   th:'งานเชื่อมโลหะ',        zh:'焊接制作',    ja:'溶接・製作'}},
      {icon:'🔩', name:{en:'Industrial Installation', th:'ติดตั้งอุตสาหกรรม',   zh:'工业安装',    ja:'産業機器設置'}},
      {icon:'⚙️', name:{en:'Custom Manufacturing',    th:'ผลิตตามแบบ',           zh:'定制制造',    ja:'カスタム製造'}}
    ],
    cta: {en:'View All Projects', th:'ดูผลงานทั้งหมด', zh:'查看全部项目', ja:'すべての実績を見る'}
  },

  ctaBand: {
    title: {en:'Ready to Start Your Project?',
            th:'พร้อมเริ่มโครงการของคุณแล้วใช่ไหม?',
            zh:'准备好启动您的项目了吗？',
            ja:'プロジェクトを始める準備はできましたか？'},
    sub:   {en:'Send us your project drawings, site measurements, or specifications — our team will review and come back to you with a competitive quotation',
            th:'ส่งแบบโครงการ การวัดพื้นที่ หรือข้อกำหนดให้เรา — ทีมงานจะตรวจสอบและติดต่อกลับพร้อมใบเสนอราคาที่แข่งขันได้',
            zh:'将项目图纸、现场测量数据或规格说明发送给我们 — 我们的团队将审核并回复具有竞争力的报价',
            ja:'プロジェクト図面・現地測量データ・仕様書をお送りください — 弊社チームが確認し、競争力のある見積もりをご回答します'},
    btn:   {en:'Submit an RFQ Now', th:'ส่ง RFQ เลยตอนนี้', zh:'立即提交询价单', ja:'今すぐ見積依頼を送る'}
  },

  whyUs: {
    title: {en:'Why Partner with A NEW Engineering?',
            th:'ทำไมต้องเลือก เอ นิว เอ็นจิเนียริ่ง?',
            zh:'为什么选择A NEW Engineering？',
            ja:'なぜA NEW Engineeringを選ぶのか？'},
    pts: [
      {en:'19+ Years of proven industrial fabrication and manufacturing experience',
       th:'ประสบการณ์การผลิตและงานโลหะอุตสาหกรรมที่พิสูจน์แล้วกว่า 19 ปี',
       zh:'19年以上经过验证的工业制造与钢构加工经验',
       ja:'19年以上の実績ある産業製造・鉄骨製作の経験'},
      {en:'Complete in-house capability — structural steel fabrication, welding, industrial installation, machine structures, CNC machining & reverse engineering',
       th:'ความสามารถครบวงจรภายในโรงงาน — โครงสร้างเหล็ก เชื่อม ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร กลึง CNC และวิศวกรรมย้อนกลับ',
       zh:'完整的内部制造能力 — 钢结构制造、焊接、工业安装、机械结构、CNC加工及逆向工程，一站式完成',
       ja:'完全自社内対応 — 鉄骨構造製作・溶接・産業機器設置・機械架台製作・CNC加工・リバースエンジニアリングをワンストップ提供'},
      {en:'In-house CNC machining — precision turning, milling & grinding supporting fabrication and installation projects',
       th:'งาน CNC ภายในโรงงาน — กลึง กัด และเจียรความแม่นยำสนับสนุนงานโครงสร้างและติดตั้ง',
       zh:'内部CNC加工能力 — 精密车削、铣削及磨削，为钢构和安装项目提供配套加工支持',
       ja:'自社CNC加工 — 精密旋削・フライス・研削で鉄骨製作・設置プロジェクトをサポート'},
      {en:"Strategic location in Si Racha, Chonburi — heart of Thailand's Eastern Economic Corridor (EEC)",
       th:'ทำเลเชิงกลยุทธ์ในศรีราชา ชลบุรี — ใจกลางระเบียงเศรษฐกิจพิเศษภาคตะวันออก (EEC) ของไทย',
       zh:'战略位置——泰国东部经济走廊（EEC）核心，春武里府西拉差',
       ja:'タイ東部経済回廊（EEC）の中心地、チョンブリー県シーラーチャーに立地'},
      {en:'Responsive quotation support — contact our team to discuss your requirements',
       th:'สนับสนุนด้านใบเสนอราคาอย่างรวดเร็ว — ติดต่อทีมงานเพื่อหารือเกี่ยวกับความต้องการของคุณ',
       zh:'报价响应及时 — 联系我们的团队讨论您的需求',
       ja:'迅速な見積サポート — チームにお問い合わせください'},
      {en:'Serving factories, industrial plants, manufacturing facilities & maintenance teams across Thailand',
       th:'ให้บริการโรงงาน โรงงานอุตสาหกรรม สถานประกอบการผลิต และทีมซ่อมบำรุงทั่วประเทศไทย',
       zh:'服务于泰国各地的工厂、工业厂房、制造设施及维护团队',
       ja:'タイ全土の工場・産業プラント・製造施設・メンテナンスチームにサービスを提供'}
    ]
  }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ABOUT US PAGE  (about.html · data-page="about")
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
C.about = {
  seo: {
    title: {en:'About Us | A NEW Engineering — Industrial Fabrication & Installation Contractor, Thailand Since 2007',
            th:'เกี่ยวกับเรา | เอ นิว เอ็นจิเนียริ่ง — รับงานโครงสร้างเหล็กและการผลิตอุตสาหกรรม ไทย ตั้งแต่ปี 2550',
            zh:'关于我们 | A NEW Engineering — 泰国工业钢构制造与安装承包商，自2007年起',
            ja:'会社概要 | A NEW Engineering — タイの産業製造・鉄骨構造製作・設置工事会社、2007年創業'},
    desc:  {en:'Learn about A NEW Engineering Co., Ltd. — established 2007 in Si Racha, Chonburi. 19+ years of structural steel fabrication, welding, industrial installation, machine structure manufacturing, and custom manufacturing serving industrial clients across Thailand.',
            th:'เรียนรู้เกี่ยวกับ บ. เอ นิว เอ็นจิเนียริ่ง จก. ก่อตั้งปี 2550 ศรีราชา ชลบุรี 19+ ปีประสบการณ์งานโครงสร้างเหล็ก เชื่อม ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร และผลิตตามแบบ ให้บริการลูกค้าอุตสาหกรรมทั่วประเทศไทย',
            zh:'了解A NEW Engineering有限公司——2007年成立于泰国春武里府西拉差，19年以上钢结构制造、焊接、工业安装、机械结构制造及定制零件制造经验，服务泰国各地工业客户。',
            ja:'A NEW Engineering Co., Ltd.について — 2007年チョンブリー県シーラーチャー創業。19年以上の鉄骨構造製作・溶接・産業機器設置・機械架台製作・カスタム製造の実績を持ち、タイ全土の産業顧客にサービスを提供。'}
  },

  hero: {
    breadcrumb: {en:'Home → About Us', th:'หน้าแรก → เกี่ยวกับเรา', zh:'首页 → 关于我们', ja:'ホーム → 会社概要'},
    h1:  {en:'About A NEW Engineering Co., Ltd.',
          th:'เกี่ยวกับ บริษัท เอ นิว เอ็นจิเนียริ่ง จำกัด',
          zh:'关于A NEW Engineering有限公司',
          ja:'A NEW Engineering Co., Ltd. について'},
    sub: {en:'Over 19 years of industrial fabrication and manufacturing experience — structural steel, welding, installation, and precision machining from our Si Racha, Chonburi facility',
          th:'กว่า 19 ปีแห่งประสบการณ์การผลิตและงานโลหะอุตสาหกรรม — โครงสร้างเหล็ก เชื่อม ติดตั้ง และกลึง CNC จากโรงงานศรีราชา ชลบุรี',
          zh:'19年以上的工业制造与钢构制作经验 — 钢结构制造、焊接、工业安装及精密加工，源自我们的春武里西拉差工厂',
          ja:'19年以上の産業製造・鉄骨製作の経験 — 鉄骨構造製作・溶接・産業機器設置・精密加工をチョンブリー県シーラーチャーの自社工場より提供'}
  },

  overview: {
    title: {en:'Who We Are', th:'เราคือใคร', zh:'我们是谁', ja:'私たちについて'},
    p1: {en:'A NEW Engineering Co., Ltd. was established in 2007 in Si Racha, Chonburi — Thailand\'s most industrially concentrated province, strategically positioned within the Eastern Economic Corridor (EEC). Over more than 19 years, we have grown into an experienced industrial fabrication and installation contractor — delivering structural steel fabrication, welding and metalwork, on-site industrial installation, machine structure manufacturing, and custom parts production for factories, industrial plants, and manufacturing facilities throughout Thailand.',
         th:'บริษัท เอ นิว เอ็นจิเนียริ่ง จำกัด ก่อตั้งขึ้นในปี 2550 ที่ศรีราชา ชลบุรี จังหวัดที่มีความหนาแน่นทางอุตสาหกรรมสูงที่สุดของประเทศไทย และตั้งอยู่ในเขตพัฒนาพิเศษภาคตะวันออก (EEC) ในช่วงกว่า 19 ปีที่ผ่านมา เราได้เติบโตจนกลายเป็นผู้รับเหมางานโลหะและการติดตั้งอุตสาหกรรมที่มีประสบการณ์ — ส่งมอบงานโครงสร้างเหล็ก เชื่อมโลหะ ติดตั้งอุตสาหกรรมภาคสนาม โครงสร้างเครื่องจักร และผลิตชิ้นส่วนตามแบบสำหรับโรงงานและสถานประกอบการผลิตทั่วประเทศไทย',
         zh:'A NEW Engineering有限公司成立于2007年，位于泰国工业最密集的省份——春武里府西拉差，战略性地坐落于东部经济走廊（EEC）内。经过19年以上的发展，我们已成长为一家经验丰富的工业制造与安装承包商——为泰国各地工厂、工业厂房及制造设施提供钢结构制造、焊接与金属加工、现场工业安装、机械结构制造及定制零件生产服务。',
         ja:'A NEW Engineering Co., Ltd.は2007年、タイで最も工業集積度の高い省であるチョンブリー県シーラーチャー——東部経済回廊（EEC）の戦略的拠点——に創業しました。19年以上にわたり、タイ全土の工場・産業プラント・製造施設向けに鉄骨構造製作・溶接/金属加工・産業機器の現地設置・機械架台製作・カスタム部品製造を手がける、経験豊富な産業製造・設置工事会社へと成長しました。'},
    p2: {en:'Our in-house capability covers the complete project workflow — from drawing review and material procurement through steel cutting, welding, and fabrication to surface preparation, CNC machining of precision support components, and on-site installation and commissioning. Our team of experienced fabricators, welders, and engineers applies rigorous quality control at every stage — from material inspection and fit-up check through to post-weld dimensional verification and installation confirmation. CNC turning, milling, and surface grinding are performed in-house on our dedicated machining floor, providing precision components that support fabrication projects and serving clients who require standalone machined parts.',
         th:'ความสามารถภายในโรงงานของเราครอบคลุมขั้นตอนโครงการทั้งหมด ตั้งแต่การตรวจแบบและจัดหาวัสดุ ผ่านการตัด เชื่อม และผลิตโครงสร้าง ไปจนถึงการเตรียมพื้นผิว งาน CNC ของชิ้นส่วนสนับสนุน และการติดตั้งภาคสนามพร้อมการเริ่มเดินเครื่อง ทีมช่างโลหะ ช่างเชื่อม และวิศวกรที่มีประสบการณ์ของเราใช้การควบคุมคุณภาพอย่างเข้มงวดในทุกขั้นตอน ตั้งแต่การตรวจสอบวัสดุและการประกอบ ไปจนถึงการตรวจสอบขนาดหลังเชื่อมและการยืนยันการติดตั้ง งานกลึง กัด และเจียร CNC ดำเนินการภายในโรงงานของเราเพื่อผลิตชิ้นส่วนความแม่นยำที่สนับสนุนงานโครงสร้างและให้บริการลูกค้าที่ต้องการชิ้นส่วนกลึงแยกต่างหาก',
         zh:'我们的内部能力覆盖完整的项目工作流程——从图纸审查和材料采购，经钢材切割、焊接和制造，到表面处理、配套精密零件的CNC加工，再到现场安装和调试。我们经验丰富的制造工人、焊接工和工程师团队在每个阶段实施严格的质量控制——从材料检验和组对检查，到焊后尺寸验证和安装确认。CNC车削、铣削和平面磨削在我们专属的加工车间内进行，为钢构项目提供配套精密零件，同时服务有独立加工需求的客户。',
         ja:'弊社の自社能力は、図面確認・材料調達から鋼材切断・溶接・製作、表面処理・CNC精密部品の加工、現地設置・試運転まで、プロジェクト全工程をカバーしています。経験豊富な製作技術者・溶接工・エンジニアのチームが、材料検査・組み付け確認から溶接後寸法確認・設置確認まで、すべての段階で厳格な品質管理を実施します。CNC旋削・フライス・平面研削は専用の加工フロアで自社内に行い、鉄骨製作プロジェクトをサポートする精密部品を供給するとともに、単独の加工部品を必要とするお客様にも対応します。'}
  },

  facts: [
    {icon:'📅', lbl:{en:'Established',    th:'ก่อตั้ง',           zh:'成立时间',   ja:'創業'},
               val:{en:'2007',            th:'พ.ศ. 2550',         zh:'2007年',    ja:'2007年'}},
    {icon:'📍', lbl:{en:'Location',       th:'ที่ตั้ง',           zh:'所在地',     ja:'所在地'},
               val:{en:'Si Racha, Chonburi', th:'ศรีราชา ชลบุรี', zh:'泰国春武里西拉差', ja:'チョンブリー県シーラーチャー'}},
    {icon:'⚙️', lbl:{en:'Core Services',  th:'บริการหลัก',        zh:'核心服务',   ja:'コアサービス'},
               val:{en:'7 Industrial Services', th:'7 บริการ',     zh:'7项工业服务', ja:'7種類のサービス'}},
    {icon:'🏭', lbl:{en:'Production Equipment',  th:'เครื่องจักรการผลิต',   zh:'生产设备',   ja:'生産設備'},
               val:{en:'10+ Machines',    th:'10+ เครื่อง',       zh:'10台以上',   ja:'10台以上'}},
    {icon:'🏢', lbl:{en:'Industries Served', th:'อุตสาหกรรม',    zh:'服务行业',   ja:'対応業種'},
               val:{en:'5+ Sectors',     th:'5+ อุตสาหกรรม',    zh:'5个以上行业', ja:'5業種以上'}}
  ],

  vision: {
    label: {en:'Our Vision', th:'วิสัยทัศน์ของเรา', zh:'我们的愿景', ja:'ビジョン'},
    text:  {en:'To earn and maintain the trust of every client we work with — by consistently delivering fabrication, welding, installation, and manufacturing work to specification, on schedule, and to the quality standard that industrial projects demand. Whether the job is a structural steel platform, a precision machined component, or a complete equipment installation, we bring the same commitment to getting every detail right.',
            th:'ได้รับและรักษาความไว้วางใจจากลูกค้าทุกรายที่เราทำงานด้วย — โดยส่งมอบงานโครงสร้าง เชื่อม ติดตั้ง และการผลิตตามข้อกำหนดอย่างสม่ำเสมอ ตรงตามกำหนด และตามมาตรฐานคุณภาพที่โครงการอุตสาหกรรมต้องการ ไม่ว่างานนั้นจะเป็นแพลตฟอร์มเหล็กโครงสร้าง ชิ้นส่วนกลึงความแม่นยำ หรือการติดตั้งอุปกรณ์ทั้งชุด เรามุ่งมั่นทำให้ทุกรายละเอียดถูกต้อง',
            zh:'赢得并维护每一位合作客户的信任——始终按规格、按时、按工业项目所要求的质量标准交付制造、焊接、安装及加工工作。无论任务是钢结构平台、精密加工零件，还是完整设备安装，我们都以同样的专注把每个细节做好。',
            ja:'お取引いただくすべてのお客様の信頼を誠実に積み上げること——製作・溶接・設置・製造の工事を、仕様通り・予定通り・産業プロジェクトが求める品質基準で常に一貫して納めること。鉄骨プラットフォームであれ、精密機械加工部品であれ、完全な設備設置工事であれ、すべての細部を正確に仕上げることへの揺るぎない姿勢で臨みます。'}
  },

  mission: {
    label: {en:'Our Mission', th:'พันธกิจของเรา', zh:'我们的使命', ja:'ミッション'},
    text:  {en:'To deliver structural steel fabrication, welding, installation, and manufacturing work that meets our clients\' project requirements — on schedule, at a fair price, and with the communication and reliability that industrial businesses depend on. We review project requirements thoroughly before work begins, coordinate closely with our clients at every stage, and take pride in delivering work that is safe, dimensionally correct, and built to last. By working this way consistently — and building on over 19 years of skilled engineering and manufacturing experience in Si Racha, Chonburi — we aim to be the fabrication and installation contractor that our clients return to, trust with critical projects, and recommend to others.',
            th:'ส่งมอบงานโครงสร้างเหล็ก เชื่อม ติดตั้ง และการผลิตที่ตรงตามความต้องการของโครงการลูกค้า — ตรงตามกำหนด ในราคาที่เป็นธรรม และด้วยการสื่อสารและความน่าเชื่อถือที่ธุรกิจอุตสาหกรรมต้องพึ่งพา เราตรวจสอบความต้องการของโครงการอย่างละเอียดก่อนเริ่มงาน ประสานงานกับลูกค้าอย่างใกล้ชิดในทุกขั้นตอน และภูมิใจในการส่งมอบงานที่ปลอดภัย ถูกต้องตามขนาด และทนทานยาวนาน โดยการทำสิ่งนี้อย่างสม่ำเสมอ และสร้างบนประสบการณ์วิศวกรรมและการผลิตที่มีทักษะกว่า 19 ปีในศรีราชา ชลบุรี เรามุ่งมั่นที่จะเป็นผู้รับเหมางานโครงสร้างและติดตั้งที่ลูกค้ากลับมาใช้บริการ ไว้วางใจในโครงการสำคัญ และแนะนำให้ผู้อื่น',
            zh:'按时、以合理价格交付符合客户项目要求的钢结构制造、焊接、安装及加工工作，并提供工业企业所依赖的沟通配合与服务可靠性。我们在开工前全面核查项目需求，在每个阶段与客户密切协调，并以交付安全、尺寸准确、经久耐用的工程成果为荣。通过持续的一贯表现——以及在春武里西拉差积累的19年以上专业工程与制造经验为基础——我们致力于成为客户愿意回头委托、放心交付重点项目、并乐于向他人推荐的制造与安装承包商。',
            ja:'お客様のプロジェクト要件を満たす鉄骨構造製作・溶接・設置工事・製造を、予定通り・適正価格で、産業企業が必要とするコミュニケーションと信頼性をもって提供すること。着工前に要件を丁寧に確認し、各工程でお客様と密に連携し、安全で寸法的に正確かつ耐久性の高い成果物を届けることを誇りとしています。この姿勢を一貫して続けること——シーラーチャー・チョンブリーにおける19年以上の熟練した工事・製造実績を礎として——お客様が繰り返し依頼し、重要プロジェクトを安心して任せ、周囲に推薦したくなる製作・設置工事会社を目指します。'}
  },

  whyUs: {
    title: {en:'Why Choose A NEW Engineering?',
            th:'ทำไมต้องเลือก เอ นิว เอ็นจิเนียริ่ง?',
            zh:'为什么选择A NEW Engineering？',
            ja:'なぜA NEW Engineeringを選ぶのか？'},
    reasons: [
      {title:{en:'Established Track Record Since 2007',
              th:'ผลงานที่ผ่านการพิสูจน์ตั้งแต่ปี 2550',
              zh:'自2007年以来的成熟业绩',
              ja:'2007年創業の確かな実績'},
       body: {en:'Over 19 years of continuous operation serving factories, industrial plants, and manufacturing facilities across Thailand. Our experience spans structural steel fabrication projects, welding and metalwork assemblies, on-site equipment installation, machine structure manufacturing, emergency spare parts production, and precision CNC machining — built on practical site experience and factory floor expertise.',
              th:'กว่า 19 ปีของการดำเนินงานต่อเนื่องให้บริการโรงงาน โรงงานอุตสาหกรรม และสถานประกอบการผลิตทั่วประเทศไทย ประสบการณ์ของเราครอบคลุมงานโครงสร้างเหล็ก ชุดประกอบงานเชื่อมโลหะ การติดตั้งอุปกรณ์ภาคสนาม การผลิตโครงสร้างเครื่องจักร การผลิตอะไหล่ฉุกเฉิน และงานกลึง CNC ความแม่นยำ — สร้างบนประสบการณ์จริงในสถานที่และบนพื้นที่การผลิต',
              zh:'19年以上持续运营，为泰国各地的工厂、工业厂房和制造设施提供服务。我们的经验涵盖钢结构制造项目、焊接及金属加工组件、现场设备安装、机械结构制造、紧急备件生产及精密CNC加工——建立在丰富的现场实践和工厂生产经验之上。',
              ja:'19年以上にわたりタイ全土の工場・産業プラント・製造施設に継続的にサービスを提供。鉄骨構造製作プロジェクト・溶接/金属加工アセンブリ・機器の現地設置・機械架台製作・緊急スペアパーツ製造・精密CNC加工まで幅広い経験——現場での実践と製造フロアでの技術に裏打ちされています。'}},
      {title:{en:'Complete In-House Manufacturing Capability',
              th:'ความสามารถการผลิตในโรงงานครบวงจร',
              zh:'全面的内部制造能力',
              ja:'充実した自社内製造能力'},
       body: {en:'Structural steel fabrication, welding and metal fabrication, industrial installation, machine structure manufacturing, custom part production, CNC machining, and reverse engineering — all performed in-house at our Si Racha facility. No subcontracting of core processes means consistent quality, tighter project control, and single-point accountability for every job we take on.',
              th:'งานโครงสร้างเหล็ก เชื่อมและผลิตโลหะ ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร ผลิตชิ้นส่วนตามแบบ กลึง CNC และวิศวกรรมย้อนกลับ — ทำภายในโรงงานศรีราชาของเราทั้งหมด การไม่จ้างงานช่วงสำหรับกระบวนการหลัก หมายถึงคุณภาพที่สม่ำเสมอ การควบคุมโครงการที่เข้มงวดขึ้น และความรับผิดชอบเดียวในทุกงานที่รับ',
              zh:'钢结构制造、焊接与金属加工、工业安装、机械结构制造、定制零件生产、CNC加工及逆向工程——全部在我们西拉差工厂内自主完成。核心工序不外包，意味着更一致的质量、更严格的项目控制，以及每个项目的单一责任方。',
              ja:'鉄骨構造製作・溶接/金属加工・産業機器設置・機械架台製作・カスタム部品製造・CNC加工・リバースエンジニアリング——すべてシーラーチャーの自社工場内で一貫対応。コア工程を外注しないことで、安定した品質・厳格なプロジェクト管理・すべての案件における単一責任体制を実現します。'}},
      {title:{en:'In-House CNC Machining — Supporting Capability',
              th:'งานกลึง CNC ภายในโรงงาน — ความสามารถสนับสนุน',
              zh:'内部CNC加工——配套加工能力',
              ja:'自社内CNC加工——サポート機能として'},
       body: {en:'Our dedicated CNC machining floor — equipped with 10+ machines from Mazak, OKUMA, Takisawa, ROKU ROKU, Enshu, OKK, and Jones & Shipman — provides precision turning, milling, and grinding capability that directly supports our fabrication and installation projects. Shafts, flanges, mounting plates, brackets, and precision sub-components are produced in-house to drawing, eliminating dependency on external machining suppliers and reducing project lead times.',
              th:'พื้นที่กลึง CNC โดยเฉพาะของเรา ซึ่งติดตั้งเครื่องจักรกว่า 10 เครื่องจาก Mazak, OKUMA, Takisawa, ROKU ROKU, Enshu, OKK และ Jones & Shipman ให้ความสามารถในการกลึง กัด และเจียรความแม่นยำที่สนับสนุนงานโครงสร้างและการติดตั้งของเราโดยตรง เพลา แฟลนจ์ แผ่นยึด แบร็กเก็ต และชิ้นส่วนย่อยความแม่นยำผลิตภายในตามแบบ ลดการพึ่งพาซัพพลายเออร์งานกลึงภายนอกและย่นระยะเวลาของโครงการ',
              zh:'我们专用的CNC加工车间——配备来自Mazak、OKUMA、Takisawa、ROKU ROKU、Enshu、OKK及Jones & Shipman的10台以上设备——提供精密车削、铣削和磨削能力，直接支持我们的钢构制造和安装项目。轴类、法兰、安装底板、支架及精密配套零件均按图纸在内部生产，消除对外部加工供应商的依赖并缩短项目周期。',
              ja:'Mazak・OKUMA・Takisawa・ROKU ROKU・Enshu・OKK・Jones & Shipmanの10台以上を擁する専用CNC加工フロアが、鉄骨製作・設置プロジェクトを直接支援する精密旋削・フライス・研削能力を提供します。シャフト・フランジ・取付プレート・ブラケット・精密サブコンポーネントは図面通りに自社内で製作し、外部加工サプライヤーへの依存を排除してプロジェクトリードタイムを短縮します。'}},
      {title:{en:'EEC Strategic Location',
              th:'ทำเลเชิงกลยุทธ์ในเขต EEC',
              zh:'EEC战略地理位置',
              ja:'EEC戦略的立地'},
       body: {en:'Located in Si Racha, Chonburi — the industrial and logistics hub of Thailand\'s Eastern Economic Corridor. Close proximity to major industrial estates, seaports (Laem Chabang), and manufacturing clusters makes us an ideal local supplier for EEC-based operations.',
              th:'ตั้งอยู่ที่ศรีราชา ชลบุรี — ศูนย์กลางอุตสาหกรรมและโลจิสติกส์ของระเบียงเศรษฐกิจพิเศษภาคตะวันออกของไทย ใกล้กับนิคมอุตสาหกรรม ท่าเรือ (แหลมฉบัง) และกลุ่มอุตสาหกรรมขนาดใหญ่ ทำให้เราเป็นซัพพลายเออร์ท้องถิ่นที่เหมาะสมสำหรับการดำเนินงานในเขต EEC',
              zh:'位于春武里府西拉差——泰国东部经济走廊的工业与物流枢纽。紧邻大型工业园区、海港（林查班港）及制造业集群，是EEC区域运营企业理想的本地供应商。',
              ja:'タイ東部経済回廊の工業・物流拠点、チョンブリー県シーラーチャーに立地。主要工業団地、港湾（レムチャバン港）、製造業集積地に近接しており、EEC拠点企業に最適なローカルサプライヤーです。'}},
      {title:{en:'Responsive & Reliable Service',
              th:'บริการที่รวดเร็วและเชื่อถือได้',
              zh:'响应迅速、服务可靠',
              ja:'迅速・確実なサービス'},
       body: {en:'We understand that manufacturing downtime is costly. Our team responds to quotation requests promptly, and we work closely with our clients to prioritize urgent jobs, minimize lead times, and communicate proactively at every stage of production.',
              th:'เราเข้าใจว่าการหยุดเดินเครื่องการผลิตมีต้นทุนสูง ทีมงานของเราตอบสนองต่อคำขอใบเสนอราคาอย่างรวดเร็ว และทำงานร่วมกับลูกค้าอย่างใกล้ชิดเพื่อจัดลำดับความสำคัญงานเร่งด่วน ลดระยะเวลาการผลิต และสื่อสารเชิงรุกในทุกขั้นตอนของการผลิต',
              zh:'我们深知生产停工的代价高昂。我们的团队迅速回复报价请求，并与客户密切协作，优先处理紧急订单，缩短交货期，并在每个生产环节主动保持沟通。',
              ja:'製造ラインのダウンタイムがいかにコストに直結するかを深く理解しています。弊社チームは見積依頼に迅速に対応し、緊急案件の優先対応、リードタイムの短縮、各生産工程での積極的なコミュニケーションに努めます。'}},
      {title:{en:'Bilingual Team — Thai & English',
              th:'ทีมงานสองภาษา — ไทยและอังกฤษ',
              zh:'双语团队 — 泰语与英语',
              ja:'バイリンガル対応 — タイ語・英語'},
       body: {en:'Our team communicates fluently in both Thai and English, ensuring clear technical discussions with both domestic and international clients. We can review English-language engineering drawings and specifications without translation delays.',
              th:'ทีมงานของเราสื่อสารได้อย่างคล่องแคล่วทั้งภาษาไทยและอังกฤษ รับประกันการอภิปรายทางเทคนิคที่ชัดเจนกับลูกค้าทั้งในและต่างประเทศ เราสามารถตรวจสอบแบบวิศวกรรมและข้อกำหนดภาษาอังกฤษได้โดยไม่ต้องรอการแปล',
              zh:'我们的团队能够流利地使用泰语和英语进行沟通，确保与国内外客户进行清晰的技术交流。我们可以直接审阅英文工程图纸和规格说明，无需等待翻译。',
              ja:'弊社チームはタイ語と英語を流暢に扱い、国内外のお客様との技術的なやり取りをスムーズに行います。英語の工程図面や仕様書も翻訳を待たずに直接確認できます。'}}
    ]
  },

  cta: {
    title: {en:'Let\'s Work Together',
            th:'มาทำงานร่วมกัน',
            zh:'携手合作',
            ja:'一緒に取り組みましょう'},
    sub:   {en:'Send us your project drawings, site measurements, or fabrication specifications and let us demonstrate the A NEW Engineering difference — quality workmanship, on-time delivery, and responsive service on every job',
            th:'ส่งแบบโครงการ การวัดพื้นที่ หรือข้อกำหนดการผลิตให้เรา และให้เราแสดงให้เห็นความแตกต่างของ เอ นิว เอ็นจิเนียริ่ง — ฝีมือการทำงานที่มีคุณภาพ การส่งมอบตรงเวลา และบริการที่รวดเร็วในทุกงาน',
            zh:'将您的项目图纸、现场测量数据或制造规格发送给我们，让我们展示A NEW Engineering的与众不同——精良的施工工艺、准时交付以及每个项目的高效响应服务',
            ja:'プロジェクト図面・現地測量データ・製作仕様書をお送りいただき、A NEW Engineeringの違いを実感してください——高品質な仕上がり・確実な納期遵守・すべての案件への迅速なサービスを提供します'},
    btn:   {en:'Request a Quotation', th:'ขอใบเสนอราคา', zh:'申请报价', ja:'お見積りを依頼する'}
  }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SERVICES OVERVIEW PAGE  (services.html · data-page="services")
   Card data is reused from C.home.services.items — not duplicated.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
C.servicesPage = {
  seo: {
    title: {en:'Industrial Fabrication, Welding & Manufacturing Services | A NEW Engineering Thailand',
            th:'บริการโครงสร้างเหล็ก เชื่อม ติดตั้ง และผลิต | เอ นิว เอ็นจิเนียริ่ง ไทย',
            zh:'钢结构制造、焊接与工业制造服务 | A NEW Engineering 泰国',
            ja:'鉄骨構造製作・溶接・産業製造サービス | A NEW Engineering タイ'},
    desc:  {en:'A NEW Engineering offers structural steel fabrication, welding & fabrication, industrial installation, machine structure fabrication, custom manufacturing, CNC machining & reverse engineering in Si Racha, Chonburi, Thailand.',
            th:'เอ นิว เอ็นจิเนียริ่ง รับงานโครงสร้างเหล็ก เชื่อม ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร ผลิตตามแบบ กลึง CNC และวิศวกรรมย้อนกลับ ศรีราชา ชลบุรี ประเทศไทย',
            zh:'A NEW Engineering提供钢结构制造、焊接与金属加工、工业安装、机械结构制造、定制零件、CNC加工及逆向工程，位于泰国春武里西拉差。',
            ja:'A NEW Engineeringは鉄骨構造製作・溶接・産業機器設置・機械架台製作・カスタム製造・CNC加工・リバースエンジニアリングをタイ チョンブリー県シーラーチャーにて提供。'}
  },
  hero: {
    h1:  {en:'Industrial Fabrication & Manufacturing Services',
          th:'บริการงานโครงสร้างเหล็กและการผลิตอุตสาหกรรม',
          zh:'工业制造与钢结构服务',
          ja:'産業製造・鉄骨構造サービス'},
    sub: {en:'7 in-house services — structural steel fabrication, welding & fabrication, industrial installation, machine structure fabrication, custom manufacturing, CNC machining & reverse engineering — all from our Si Racha, Chonburi facility',
          th:'7 บริการภายในโรงงาน — โครงสร้างเหล็ก เชื่อมและผลิตโลหะ ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร ผลิตตามแบบ กลึง CNC และวิศวกรรมย้อนกลับ — ทำที่โรงงานศรีราชา ชลบุรีของเรา',
          zh:'7项自有服务——钢结构制造、焊接与金属加工、工业安装、机械结构制造、定制零件、CNC精密加工及逆向工程——全部在西拉差春武里工厂完成',
          ja:'7種類の自社サービス — 鉄骨構造製作・溶接/金属加工・産業機器設置・機械架台製作・カスタム製造・CNC精密加工・リバースエンジニアリング — すべてシーラーチャー・チョンブリー工場内で対応'}
  },
  inhouse: {
    title: {en:'Complete In-House Industrial Manufacturing Capability',
            th:'ความสามารถการผลิตอุตสาหกรรมครบวงจรภายในโรงงาน',
            zh:'完整的内部工业制造能力',
            ja:'完全自社内の産業製造能力'},
    body:  {en:'Structural steel fabrication, welding and metal fabrication, industrial installation, machine structure manufacturing, custom part production, CNC machining, and reverse engineering — all performed in-house at our Si Racha, Chonburi facility. No outsourcing of core processes means tighter quality control, faster delivery, and a single point of accountability for every project.',
            th:'งานโครงสร้างเหล็ก เชื่อมและผลิตโลหะ ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร ผลิตชิ้นส่วนตามแบบ กลึง CNC และวิศวกรรมย้อนกลับ — ทำภายในโรงงานศรีราชา ชลบุรีของเราทั้งหมด การไม่จ้างภายนอกสำหรับกระบวนการหลักหมายถึงการควบคุมคุณภาพที่เข้มงวดขึ้น การส่งมอบที่รวดเร็วขึ้น และความรับผิดชอบเดียวในทุกโครงการ',
            zh:'钢结构制造、焊接及金属加工、工业安装、机械结构制造、定制零件生产、CNC加工及逆向工程——全部在我们春武里西拉差工厂内完成。核心工序不外包意味着更严格的质量控制、更快的交货速度，以及每个项目的单一责任方。',
            ja:'鉄骨構造製作・溶接/金属加工・産業機器設置・機械架台製作・カスタム部品製造・CNC加工・リバースエンジニアリング——すべてチョンブリー県シーラーチャーの自社工場内で一貫対応。コア工程を外注しないことで、厳格な品質管理・迅速な納品・プロジェクト全体の単一責任体制を実現します。'}
  },
  /* Shared sidebar labels used on individual service pages */
  sidebar: {
    navTitle:    {en:'All Services',     th:'บริการทั้งหมด',               zh:'全部服务',   ja:'全サービス'},
    ctaTitle:    {en:'Need This Service?', th:'ต้องการบริการนี้ใช่ไหม?',  zh:'需要此服务？', ja:'このサービスが必要ですか？'},
    ctaSub:      {en:'Contact our team for a quotation', th:'ติดต่อทีมงานของเราเพื่อขอใบเสนอราคา', zh:'联系我们的团队获取报价', ja:'見積はチームまでお問い合わせください'},
    ctaBtn:      {en:'Get a Quote', th:'ขอใบเสนอราคา', zh:'申请报价', ja:'お見積りを依頼'},
    machinery:   {en:'Machines Used for This Service', th:'เครื่องจักรที่ใช้สำหรับบริการนี้', zh:'用于此服务的设备', ja:'このサービスに使用する機械'},
    relProjects: {en:'Related Project Samples', th:'ตัวอย่างผลงานที่เกี่ยวข้อง', zh:'相关项目案例', ja:'関連製作実績サンプル'},
    bottomCta:   {en:'Ready to Get Started? Request a Quote for This Service', th:'พร้อมเริ่มต้นแล้วใช่ไหม? ขอใบเสนอราคาสำหรับบริการนี้', zh:'准备好了吗？申请此服务报价', ja:'始める準備はできましたか？このサービスの見積を依頼する'}
  }
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   INDIVIDUAL SERVICE PAGES  (data-page="cncTurning" etc.)
   Appended here in Phase 3b when individual service pages are built.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Phase 4+: append C.machinery, C.projects, C.careers, C.contact
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
