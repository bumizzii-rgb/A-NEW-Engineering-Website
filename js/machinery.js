'use strict';

/* ════════════════════════════════════════════════════════════════
   machinery.js — loaded only by machinery.html
   Adds C.machinery and overrides renderPage() so the router
   handles data-page="machinery" without touching app.js.
   ════════════════════════════════════════════════════════════════ */

/* ── Content ─────────────────────────────────────────────────── */

C.machinery = {
  seo: {
    title: {en:'Manufacturing Equipment & Machinery | A NEW Engineering, Si Racha Chonburi Thailand',
            th:'เครื่องจักรและอุปกรณ์การผลิต | เอ นิว เอ็นจิเนียริ่ง ศรีราชา ชลบุรี',
            zh:'制造设备与机械 | A NEW Engineering 泰国春武里西拉差',
            ja:'製造設備・機械一覧 | A NEW Engineering タイ チョンブリー県シーラーチャー'},
    desc:  {en:'A NEW Engineering operates 10+ machines supporting structural steel fabrication, welding, industrial installation, and precision machining: Mazak, OKUMA, Takisawa, ROKU ROKU, Enshu, OKK & Jones & Shipman. Si Racha, Chonburi.',
            th:'เอ นิว เอ็นจิเนียริ่ง มีเครื่องจักรกว่า 10 เครื่องสนับสนุนงานโครงสร้างเหล็ก เชื่อม ติดตั้งอุตสาหกรรม และงานกลึงความแม่นยำ Mazak OKUMA Takisawa ROKU ROKU Enshu OKK และ Jones & Shipman ศรีราชา ชลบุรี',
            zh:'A NEW Engineering拥有10台以上设备，支持钢结构制造、焊接、工业安装及精密加工：Mazak、OKUMA、Takisawa、ROKU ROKU、Enshu、OKK及Jones & Shipman。泰国春武里西拉差。',
            ja:'A NEW Engineeringは10台以上の設備を保有し、鉄骨構造製作・溶接・産業機器設置・精密加工をサポート：Mazak・OKUMA・Takisawa・ROKU ROKU・Enshu・OKK・Jones & Shipman。チョンブリー県シーラーチャー。'}
  },

  hero: {
    h1:  {en:'Our Production Equipment',
          th:'อุปกรณ์การผลิตของเรา',
          zh:'我们的生产设备',
          ja:'生産設備一覧'},
    sub: {en:'In-house manufacturing equipment supporting structural steel fabrication, welding, industrial installation, machine structure manufacturing, and precision component production',
          th:'เครื่องจักรการผลิตภายในโรงงาน สนับสนุนงานโครงสร้างเหล็ก เชื่อมโลหะ ติดตั้งอุตสาหกรรม โครงสร้างเครื่องจักร และการผลิตชิ้นส่วนความแม่นยำ',
          zh:'内部制造设备，支持钢结构制造、焊接金属加工、工业安装、机械结构制造及精密零件生产',
          ja:'自社内製造設備——鉄骨構造製作・溶接/金属加工・産業機器設置・機械架台製作・精密部品生産をサポート'}
  },

  intro: {en:'At A NEW Engineering, our in-house manufacturing capability is built on a carefully selected range of production machines and precision equipment from globally recognized manufacturers. Our CNC lathes, machining centers, and surface grinding machines form the precision machining backbone of our fabrication operation — producing the shafts, flanges, mounting plates, brackets, and precision sub-components that our structural steel, welding, and industrial installation projects require. All machining is performed in-house by our experienced team of fabricators, machinists, and engineers, ensuring quality control at every stage from raw material to finished component.',
          th:'ที่ เอ นิว เอ็นจิเนียริ่ง ความสามารถในการผลิตภายในโรงงานสร้างบนเครื่องจักรการผลิตและอุปกรณ์ความแม่นยำที่คัดสรรจากผู้ผลิตที่ได้รับการยอมรับระดับโลก แท่นกลึง CNC ศูนย์กัด และเครื่องเจียรพื้นผิวของเราเป็นแกนหลักของความสามารถด้านการผลิตชิ้นส่วนความแม่นยำ — ผลิตเพลา แฟลนจ์ แผ่นยึด แบร็กเก็ต และชิ้นส่วนย่อยความแม่นยำสำหรับงานโครงสร้างเหล็ก งานเชื่อม และการติดตั้งอุตสาหกรรมของเรา งานกลึงทั้งหมดดำเนินการภายในโรงงานโดยทีมช่าง ผู้เชี่ยวชาญด้านการผลิต และวิศวกรที่มีประสบการณ์',
          zh:'在A NEW Engineering，我们的内部制造能力建立在精心选配的生产机械和精密设备上，这些设备来自全球知名制造商。我们的CNC车床、加工中心和平面磨床构成精密加工体系的核心，为钢结构制造、焊接和工业安装项目提供所需的轴类、法兰、安装底板、支架及精密配套零件。所有加工均由我们经验丰富的制造工人、技工和工程师团队在内部完成，确保从原材料到成品零件的每个阶段都得到质量管控。',
          ja:'A NEW Engineeringの自社内製造能力は、世界的に認められたメーカーの厳選された生産機械と精密設備によって支えられています。CNC旋盤・マシニングセンター・平面研削盤は弊社製作工場の精密加工の中核を担い、鉄骨構造製作・溶接・産業機器設置プロジェクトに必要なシャフト・フランジ・取付プレート・ブラケット・精密サブコンポーネントを供給します。すべての加工は経験豊富な製作技術者・加工士・エンジニアが自社内で実施し、原材料から完成部品まで各工程の品質管理を確保します。'},

  /* Labels */
  labels: {
    cat1:     {en:'CNC Lathes — Turning',              th:'แท่นกลึง CNC',                          zh:'CNC车床 — 车削',                     ja:'CNC旋盤 — 旋削加工'},
    cat2:     {en:'CNC Machining Centers — Milling',   th:'ศูนย์กัด CNC',                          zh:'CNC加工中心 — 铣削',                  ja:'CNCマシニングセンター — フライス加工'},
    cat3:     {en:'Surface Grinder — Precision Finishing', th:'เครื่องเจียรพื้นผิว — ตกแต่งความแม่นยำ', zh:'平面磨床 — 精密精加工',              ja:'平面研削盤 — 精密仕上げ'},
    usedFor:  {en:'Primarily Used For',                th:'ใช้สำหรับ',                              zh:'主要用途',                           ja:'主な用途'},
    specLabel:{en:'Key Specifications',                th:'ข้อกำหนดหลัก',                          zh:'主要规格',                           ja:'主要仕様'}
  },

  /* CNC Lathes — 5 machines */
  lathes: [
    {name:'Mazak Nexus 150 II',
     desc:{en:'High-performance CNC turning center from Mazak — one of the world\'s most trusted machine tool brands. Used for producing precision shafts, flanges, bushings, and turned sub-components that support structural steel fabrication, machine structure manufacturing, and industrial installation projects.',
           th:'ศูนย์กลึง CNC ประสิทธิภาพสูงจาก Mazak — หนึ่งในแบรนด์เครื่องมือกลที่น่าเชื่อถือที่สุดในโลก ใช้สำหรับผลิตเพลา แฟลนจ์ บุช และชิ้นส่วนย่อยกลึงที่สนับสนุนงานโครงสร้างเหล็ก โครงสร้างเครื่องจักร และการติดตั้งอุตสาหกรรม',
           zh:'来自Mazak的高性能CNC车削中心——全球最受信赖的机床品牌之一。用于生产支持钢结构制造、机械结构制造及工业安装项目所需的精密轴类、法兰、衬套及车削配件。',
           ja:'世界で最も信頼されている工作機械ブランドの一つMazakの高性能CNC旋削センター。鉄骨構造製作・機械架台製作・産業機器設置プロジェクトに必要な精密シャフト・フランジ・ブッシュ・旋削サブコンポーネントの製作に使用します。'},
     usedFor:{en:'Precision shafts, flanges & bushings for fabrication and machine structure projects',
              th:'เพลา แฟลนจ์ และบุชความแม่นยำสำหรับงานโครงสร้างและเครื่องจักร',
              zh:'支持制造和机械结构项目的精密轴类、法兰及衬套',
              ja:'製作・機械架台プロジェクト向け精密シャフト・フランジ・ブッシュ'}},
    {name:'OKUMA LB-15',
     desc:{en:'OKUMA CNC lathe renowned for rigidity and thermal stability — ideal for tight-tolerance turning of engineering components where dimensional consistency is critical. Used for producing precision connecting components, mounting hubs, and machined sub-parts for machine structures and fabrication assemblies.',
           th:'แท่นกลึง CNC ของ OKUMA ที่มีชื่อเสียงด้านความแข็งแกร่งและเสถียรภาพทางความร้อน เหมาะอย่างยิ่งสำหรับการกลึงชิ้นส่วนวิศวกรรมที่ต้องการความสม่ำเสมอทางขนาด ใช้สำหรับผลิตชิ้นส่วนเชื่อมต่อความแม่นยำ ฮับยึด และชิ้นส่วนย่อยสำหรับโครงสร้างเครื่องจักรและชุดประกอบงานโลหะ',
           zh:'OKUMA CNC车床以刚性和热稳定性著称，特别适合对尺寸一致性要求严格的紧公差工程零件车削。用于生产机械结构和制造组件所需的精密连接零件、安装轮毂及加工配件。',
           ja:'剛性と熱安定性で定評あるOKUMA CNC旋盤。寸法一貫性が重要なエンジニアリング部品の精密旋削に最適です。機械架台・製作アセンブリ向けの精密連結部品・取付ハブ・加工サブパーツの製作に使用します。'},
     usedFor:{en:'Connecting components, mounting hubs & sub-parts for machine structures and assemblies',
              th:'ชิ้นส่วนเชื่อมต่อ ฮับยึด และชิ้นส่วนย่อยสำหรับโครงสร้างเครื่องจักร',
              zh:'机械结构和组件所需的连接零件、安装轮毂及加工配件',
              ja:'機械架台・アセンブリ向け連結部品・取付ハブ・サブパーツ'}},
    {name:'Takisawa TAL-460',
     desc:{en:'Japanese-made CNC lathe with high structural rigidity, suited for medium-to-large turned components including longer shafts, large-diameter flanges, and rings. Frequently used to produce drive shafts, roller shafts, and large structural connectors for machine structure and equipment installation work.',
           th:'แท่นกลึง CNC ผลิตจากญี่ปุ่น มีความแข็งแกร่งโครงสร้างสูง เหมาะสำหรับชิ้นส่วนกลึงขนาดกลางถึงใหญ่ รวมถึงเพลายาว แฟลนจ์เส้นผ่านศูนย์กลางใหญ่ และแหวน ใช้สำหรับผลิตเพลาขับ เพลาลูกกลิ้ง และตัวเชื่อมต่อโครงสร้างสำหรับงานโครงสร้างเครื่องจักรและการติดตั้งอุปกรณ์',
           zh:'日本制造的高结构刚性CNC车床，适合中至大型车削零件，包括长轴、大直径法兰和环件。常用于生产机械结构及设备安装工作所需的传动轴、滚轴及大型结构连接件。',
           ja:'高い構造剛性を持つ日本製CNC旋盤。長尺シャフト・大径フランジ・リング類を含む中〜大型旋削部品に最適です。機械架台・設備設置工事向けの駆動シャフト・ローラーシャフト・大型構造コネクタの製作に使用します。'},
     usedFor:{en:'Long shafts, large flanges & rings for machine structures and installation work',
              th:'เพลายาว แฟลนจ์ขนาดใหญ่ และแหวนสำหรับโครงสร้างเครื่องจักรและงานติดตั้ง',
              zh:'机械结构和安装工作所需的长轴、大直径法兰及环件',
              ja:'機械架台・設置工事向け長尺シャフト・大径フランジ・リング'}},
    {name:'Mazak Junior',
     desc:{en:'Compact CNC lathe for small precision turned parts. Used for producing fastening components, pins, sleeves, and small-diameter precision parts that form part of larger fabrication assemblies, machine structures, and custom manufacturing work.',
           th:'แท่นกลึง CNC แบบกะทัดรัดสำหรับชิ้นส่วนกลึงขนาดเล็ก ใช้สำหรับผลิตชิ้นส่วนยึด พิน ปลอก และชิ้นส่วนเส้นผ่านศูนย์กลางเล็กที่เป็นส่วนหนึ่งของชุดประกอบงานโลหะ โครงสร้างเครื่องจักร และงานผลิตตามแบบ',
           zh:'适合小型精密车削零件的紧凑型CNC车床。用于生产紧固零件、销类、套筒及小直径精密零件，作为大型制造组件、机械结构和定制制造工作的配套部件。',
           ja:'小型精密旋削部品向けコンパクトなCNC旋盤。より大きな製作アセンブリ・機械架台・カスタム製造作業の一部を構成する締結部品・ピン・スリーブ・小径精密部品の製作に使用します。'},
     usedFor:{en:'Pins, sleeves & small precision parts supporting fabrication assemblies',
              th:'พิน ปลอก และชิ้นส่วนขนาดเล็กสำหรับชุดประกอบงานโลหะ',
              zh:'支持制造组件的销类、套筒及小型精密零件',
              ja:'製作アセンブリをサポートするピン・スリーブ・小型精密部品'}},
    {name:'YDPM SL-200',
     desc:{en:'Reliable CNC lathe for medium-sized turned components. Provides consistent dimensional accuracy and good surface finish across carbon steel, stainless steel, and aluminum — suitable for the range of materials used in industrial fabrication and machine structure manufacturing.',
           th:'แท่นกลึง CNC ที่เชื่อถือได้สำหรับชิ้นส่วนกลึงขนาดกลาง ให้ความแม่นยำเชิงมิติสม่ำเสมอและผิวสำเร็จดีสำหรับเหล็กคาร์บอน สแตนเลส และอลูมิเนียม เหมาะสำหรับวัสดุที่หลากหลายที่ใช้ในงานโลหะอุตสาหกรรมและโครงสร้างเครื่องจักร',
           zh:'适用于中型车削零件的可靠CNC车床，在碳素钢、不锈钢及铝材上提供一致的尺寸精度和良好的表面质量——适合工业制造和机械结构制造中所用的各种材料。',
           ja:'中型旋削部品向けの信頼性の高いCNC旋盤。炭素鋼・ステンレス鋼・アルミ材に安定した寸法精度と良好な表面仕上げを提供——産業製作・機械架台製造で使用される幅広い材質に対応します。'},
     usedFor:{en:'Medium-size fabrication sub-components across carbon steel, stainless & aluminium',
              th:'ชิ้นส่วนย่อยงานโลหะขนาดกลาง หลายวัสดุ รวมถึงเหล็กคาร์บอนและสแตนเลส',
              zh:'碳素钢、不锈钢及铝材中型制造配件',
              ja:'炭素鋼・ステンレス・アルミ製中型製作サブコンポーネント'}}
  ],

  /* CNC Machining Centers — 4 machines */
  mills: [
    {name:'ROKU ROKU V-1XW',
     desc:{en:'Japanese CNC vertical machining center with high-speed spindle capability. Used for milling complex brackets, base plates, mounting interfaces, and 3D-profiled components in aluminum and steel that support fabrication, machine structure, and industrial installation projects.',
           th:'ศูนย์กัดแนวตั้ง CNC ญี่ปุ่นที่มีความสามารถสปินเดิลความเร็วสูง ใช้สำหรับกัดแบร็กเก็ตที่ซับซ้อน แผ่นฐาน อินเทอร์เฟซยึด และชิ้นส่วนโปรไฟล์ 3D ในอลูมิเนียมและเหล็กสำหรับงานโครงสร้าง โครงสร้างเครื่องจักร และการติดตั้งอุตสาหกรรม',
           zh:'具备高速主轴的日本CNC立式加工中心。用于铣削支持制造、机械结构及工业安装项目的复杂支架、底板、安装接口及三维轮廓零件（铝及钢材）。',
           ja:'高速スピンドルを備えた日本製CNC立型マシニングセンター。製作・機械架台・産業機器設置プロジェクトをサポートする複雑ブラケット・ベースプレート・取付インターフェース・3Dプロファイル部品（アルミ・鋼）のフライス加工に使用します。'},
     usedFor:{en:'Complex brackets, base plates & mounting interfaces for fabrication projects',
              th:'แบร็กเก็ตซับซ้อน แผ่นฐาน และอินเทอร์เฟซยึดสำหรับงานโครงสร้างและติดตั้ง',
              zh:'制造项目所需的复杂支架、底板及安装接口',
              ja:'製作プロジェクト向け複雑ブラケット・ベースプレート・取付インターフェース'}},
    {name:'ROKU ROKU RM-2H',
     desc:{en:'Robust CNC vertical machining center delivering strong cutting performance for steel, stainless, and alloy workpieces. Well-suited for producing machine structure components, fixture plates, and fabrication support parts requiring milling, drilling, and tapping to drawing specification.',
           th:'ศูนย์กัดแนวตั้ง CNC ที่แข็งแกร่ง ให้ประสิทธิภาพการตัดแข็งแกร่งสำหรับชิ้นงานเหล็ก สแตนเลส และอัลลอย เหมาะสำหรับผลิตชิ้นส่วนโครงสร้างเครื่องจักร แผ่นฟิกซ์เจอร์ และชิ้นส่วนสนับสนุนงานโลหะที่ต้องการกัด เจาะ และต๊าปตามแบบ',
           zh:'稳健的CNC立式加工中心，为钢、不锈钢及合金工件提供强劲的切削性能。适合生产需要按图纸铣削、钻孔及攻丝的机械结构零件、夹具板及制造配套零件。',
           ja:'鋼・ステンレス・合金に強い切削性能を発揮する堅牢なCNC立型マシニングセンター。図面仕様通りのフライス・穴あけ・タップ加工が必要な機械架台部品・治具プレート・製作サポートパーツの製作に最適です。'},
     usedFor:{en:'Machine structure components, fixture plates & fabrication parts in steel & stainless',
              th:'ชิ้นส่วนโครงสร้างเครื่องจักร แผ่นฟิกซ์เจอร์ และงานโลหะในเหล็กและสแตนเลส',
              zh:'钢及不锈钢机械结构零件、夹具板及制造配套零件',
              ja:'鋼・ステンレス製機械架台部品・治具プレート・製作パーツ'}},
    {name:'Enshu F2',
     desc:{en:'Japanese-made CNC machining center known for structural rigidity and thermal compensation. Used where high-precision flatness and positional tolerances are required — including bearing housings, precision mounting surfaces, and machine structural components that must align correctly during assembly and installation.',
           th:'ศูนย์กัด CNC ผลิตจากญี่ปุ่น รู้จักกันดีด้านความแข็งแกร่งโครงสร้างและการชดเชยความร้อน ใช้ในกรณีที่ต้องการความราบและพิกัดตำแหน่งที่เข้มงวด รวมถึงโบว์เฮาส์ลูกปืน พื้นผิวยึดความแม่นยำ และชิ้นส่วนโครงสร้างเครื่องจักรที่ต้องการการจัดตำแหน่งที่แม่นยำระหว่างการประกอบและติดตั้ง',
           zh:'以结构刚性和热补偿著称的日本制CNC加工中心。用于需要高精度平面度和位置公差的场合——包括轴承座、精密安装面及在装配和安装期间必须精确对齐的机械结构零件。',
           ja:'構造剛性と熱補償で知られる日本製CNCマシニングセンター。軸受ハウジング・精密取付面・組立・設置時に正確な位置合わせが必要な機械構造部品など、高精度な平面度・位置公差が求められる用途に使用します。'},
     usedFor:{en:'Bearing housings, precision mounting surfaces & high-tolerance machine components',
              th:'โบว์เฮาส์ลูกปืน พื้นผิวยึดความแม่นยำ และชิ้นส่วนเครื่องจักรพิกัดเข้มงวด',
              zh:'轴承座、精密安装面及高公差机械结构零件',
              ja:'軸受ハウジング・精密取付面・高精度機械構造部品'}},
    {name:'OKK MH-3V',
     desc:{en:'Reliable CNC machining center offering good spindle rigidity and versatility. Suitable for a broad range of milled and drilled fabrication components in steel and aluminum alloys, including connection plates, equipment brackets, and machine frame sub-components.',
           th:'ศูนย์กัด CNC ที่เชื่อถือได้ มีความแข็งแกร่งของสปินเดิลและความยืดหยุ่นสูง เหมาะสำหรับชิ้นส่วนงานโลหะกัดและเจาะหลากหลายในเหล็กและอลูมิเนียมอัลลอย รวมถึงแผ่นเชื่อมต่อ แบร็กเก็ตอุปกรณ์ และชิ้นส่วนย่อยโครงเครื่องจักร',
           zh:'可靠的CNC加工中心，主轴刚性好，适应性强。适合各类钢及铝合金制造零件的铣削和钻孔加工，包括连接板、设备支架及机架配套零件。',
           ja:'スピンドル剛性と汎用性に優れた信頼性の高いCNCマシニングセンター。鋼・アルミ合金の連結プレート・機器ブラケット・機械フレームサブコンポーネントを含む幅広い製作部品のフライス・穴あけ加工に適しています。'},
     usedFor:{en:'Connection plates, equipment brackets & machine frame components in steel & aluminium',
              th:'แผ่นเชื่อมต่อ แบร็กเก็ตอุปกรณ์ และชิ้นส่วนโครงเครื่องจักรในเหล็กและอลูมิเนียม',
              zh:'钢及铝合金连接板、设备支架及机架零件',
              ja:'鋼・アルミ合金製連結プレート・機器ブラケット・機械フレーム部品'}}
  ],

  /* Surface Grinder — 1 machine */
  grinders: [
    {name:'Jones & Shipman 450P',
     desc:{en:'British-made precision surface grinder with excellent magnetic table and grinding wheel system. Used for final precision flat surface finishing of mounting plates, machine structure components, hardened tool steel parts, jig plates, and any workpiece requiring strict flatness and surface finish specifications — ensuring that mating surfaces align correctly during assembly and installation.',
           th:'เครื่องเจียรพื้นผิวความแม่นยำสูงผลิตจากอังกฤษ มีแม่เหล็กและระบบล้อเจียรที่ยอดเยี่ยม ใช้สำหรับการตกแต่งพื้นผิวราบขั้นสุดท้ายของแผ่นยึด ชิ้นส่วนโครงสร้างเครื่องจักร เหล็กเครื่องมือชุบแข็ง แผ่นจิ๊ก และชิ้นงานใดๆ ที่ต้องการความราบและผิวสำเร็จที่เข้มงวด เพื่อให้พื้นผิวประกบสัมพันธ์กันถูกต้องระหว่างการประกอบและติดตั้ง',
           zh:'英国制造的精密平面磨床，配备出色的电磁台及砂轮系统。用于安装底板、机械结构零件、淬硬工具钢件、夹具板及任何需要严格平面度和表面粗糙度要求工件的最终精密平面精加工——确保配合面在装配和安装过程中准确对齐。',
           ja:'優れた磁気テーブルと砥石システムを備えた英国製精密平面研削盤。取付プレート・機械構造部品・焼入れ工具鋼・治具プレート・厳密な平面度・表面仕上げ仕様が求められるあらゆる部品の最終精密平面仕上げに使用——組立・設置時の合わせ面の正確な位置合わせを確保します。'},
     usedFor:{en:'Final precision finishing: mounting plates, machine structure parts & tool steel',
              th:'การตกแต่งขั้นสุดท้าย แผ่นยึด ชิ้นส่วนโครงสร้างเครื่องจักร และเหล็กเครื่องมือ',
              zh:'安装底板、机械结构零件及工具钢的最终精密平面精加工',
              ja:'取付プレート・機械構造部品・工具鋼の最終精密仕上げ'}}
  ],

  cta: {
    title: {en:'Our Equipment Is Ready for Your Project',
            th:'อุปกรณ์ของเราพร้อมสำหรับโครงการของคุณ',
            zh:'我们的设备随时准备好承接您的项目',
            ja:'弊社設備はお客様のプロジェクトに対応可能です'},
    sub:   {en:'Tell us about your fabrication, machining, or installation project and we will identify the most suitable process and equipment for the job — then provide a competitive quotation for your review',
            th:'บอกโครงการงานโลหะ กลึง หรือการติดตั้งของคุณให้เรา และเราจะระบุกระบวนการและเครื่องจักรที่เหมาะสมที่สุดสำหรับงานนั้น — จากนั้นให้ใบเสนอราคาที่แข่งขันได้',
            zh:'告诉我们您的制造、加工或安装项目，我们将为该工作选定最合适的工艺和设备——并提供具有竞争力的报价供您参考',
            ja:'製作・加工・設置工事プロジェクトをお知らせください。最適なプロセスと設備を選定し、競争力のある見積をご提供します'},
    btn:   {en:'Request a Quotation', th:'ขอใบเสนอราคา', zh:'申请报价', ja:'お見積りを依頼する'}
  }
};

/* ── Renderer ────────────────────────────────────────────────── */

function renderMachinery() {
  const m = C.machinery;
  updateSEO(t(m.seo.title), t(m.seo.desc));

  function machineCard(machine) {
    return `
      <div class="card">
        <div class="card__title" style="font-size:1rem;margin-bottom:8px">${esc(machine.name)}</div>
        <p class="card__body" style="font-size:0.875rem;margin-bottom:14px">${esc(t(machine.desc))}</p>
        <div style="border-top:1px solid var(--color-border);padding-top:12px;margin-top:auto">
          <div style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:var(--color-primary);margin-bottom:4px">${esc(t(m.labels.usedFor))}</div>
          <div style="font-size:0.875rem;color:var(--color-text-light)">${esc(t(machine.usedFor))}</div>
        </div>
      </div>`;
  }

  const lathesHtml   = m.lathes.map(machineCard).join('');
  const millsHtml    = m.mills.map(machineCard).join('');
  const grindersHtml = m.grinders.map(machineCard).join('');

  document.getElementById('page-content').innerHTML = `

    <!-- ░░░ INNER HERO ░░░ -->
    <section class="hero hero--inner" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-machinery.webp.png);background-size:cover;background-position:center">
      <div class="container">
        <nav aria-label="Breadcrumb" class="hero__badge" style="background:rgba(255,255,255,0.15);display:inline-block">
          <a href="index.html" style="color:inherit;text-decoration:none">${esc(t(C.nav.home))}</a>
          <span style="margin:0 6px">›</span>
          <span>${esc(t(C.nav.machinery))}</span>
        </nav>
        <h1 class="hero__h1">${esc(t(m.hero.h1))}</h1>
        <p class="hero__sub">${esc(t(m.hero.sub))}</p>
      </div>
    </section>

    <!-- ░░░ INTRO ░░░ -->
    <section class="section section--white">
      <div class="container">
        <div style="max-width:800px;margin:0 auto;text-align:center">
          <p style="color:var(--color-text-light);line-height:1.8;font-size:1.0625rem">${esc(t(m.intro))}</p>
        </div>
      </div>
    </section>

    <!-- ░░░ CNC LATHES ░░░ -->
    <section class="section section--light">
      <div class="container">
        <h2 class="section-title text-center">${esc(t(m.labels.cat1))}</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:32px">
          ${lathesHtml}
        </div>
      </div>
    </section>

    <!-- ░░░ CNC MACHINING CENTERS ░░░ -->
    <section class="section section--white">
      <div class="container">
        <h2 class="section-title text-center">${esc(t(m.labels.cat2))}</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-top:32px">
          ${millsHtml}
        </div>
      </div>
    </section>

    <!-- ░░░ SURFACE GRINDER ░░░ -->
    <section class="section section--light">
      <div class="container">
        <h2 class="section-title text-center">${esc(t(m.labels.cat3))}</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:24px;margin-top:32px">
          ${grindersHtml}
        </div>
      </div>
    </section>

    <!-- ░░░ CTA BAND ░░░ -->
    <div class="cta-band">
      <div class="container">
        <div class="cta-band__title">${esc(t(m.cta.title))}</div>
        <p class="cta-band__sub">${esc(t(m.cta.sub))}</p>
        <div class="cta-band__actions">
          <a href="contact.html" class="btn btn-white btn-lg">${esc(t(m.cta.btn))}</a>
        </div>
      </div>
    </div>`;
}

/* ── Page Router Override ────────────────────────────────────────
   This function declaration shadows the one in app.js (last
   declaration in the same scope wins). When DOMContentLoaded fires
   and when setLang() calls renderPage(), this version runs.
   ──────────────────────────────────────────────────────────────── */

function renderPage() {
  const el   = document.getElementById('page-content');
  const page = el ? (el.dataset.page || 'home') : 'home';
  switch (page) {
    case 'home':      renderHome();          break;
    case 'about':     renderAbout();         break;
    case 'services':  renderServicesPage();  break;
    case 'machinery': renderMachinery();     break;
    default: break;
  }
}
