'use strict';

/* ════════════════════════════════════════════════════════════════
   contact.js — loaded only by contact.html
   Adds C.contact, defines renderContact(), overrides renderPage()
   ════════════════════════════════════════════════════════════════ */

C.contact = {
  seo: {
    title: {en:'Contact Us & Request a Quotation | A NEW Engineering Thailand',
            th:'ติดต่อเราและขอใบเสนอราคา | เอ นิว เอ็นจิเนียริ่ง ไทย',
            zh:'联系我们并申请报价 | A NEW Engineering 泰国',
            ja:'お問い合わせ・見積依頼 | A NEW Engineering タイ'},
    desc:  {en:'Contact A NEW Engineering in Si Racha, Chonburi. Request a quotation for fabrication, welding, installation & custom manufacturing. Upload drawings. Call 033-046-051-2.',
            th:'ติดต่อ เอ นิว เอ็นจิเนียริ่ง ศรีราชา ชลบุรี ขอใบเสนอราคาสำหรับงานโครงสร้างเหล็ก เชื่อม ติดตั้ง และผลิตตามแบบ แนบแบบได้ โทร 033-046-051-2',
            zh:'联系泰国春武里西拉差A NEW Engineering。申请钢结构制造、焊接、安装及定制零件报价。可上传图纸。电话033-046-051-2。',
            ja:'A NEW Engineering（タイ チョンブリー シーラーチャー）へのお問い合わせ。鉄骨製作・溶接・設置工事・カスタム製造の見積依頼。図面アップロード可。電話033-046-051-2。'}
  },

  hero: {
    h1:  {en:'Contact Us & Request a Quotation',
          th:'ติดต่อเรา & ขอใบเสนอราคา',
          zh:'联系我们 & 申请报价',
          ja:'お問い合わせ & 見積依頼'},
    sub: {en:'Send your technical drawings or part specifications — our team will review your inquiry and respond as soon as possible',
          th:'ส่งแบบทางเทคนิคหรือข้อกำหนดชิ้นส่วนของคุณ — ทีมงานจะตรวจสอบข้อมูลและติดต่อกลับโดยเร็วที่สุด',
          zh:'发送您的技术图纸或零件规格——我们的团队将审核您的询价并尽快回复',
          ja:'技術図面や部品仕様をお送りください — 内容を確認のうえ、できるだけ早くご連絡いたします'}
  },

  info: {
    sectionTitle: {en:'Get in Touch',          th:'ติดต่อเรา',       zh:'联系方式',     ja:'お問い合わせ先'},
    addrLabel:    {en:'Our Location',          th:'ที่ตั้งของเรา',   zh:'我们的位置',   ja:'所在地'},
    addrValue:    {en:'129/14 Moo 11, Bang Phra, Si Racha, Chonburi 20110, Thailand',
                   th:'129/14 หมู่ 11 ตำบลบางพระ อำเภอศรีราชา จังหวัดชลบุรี 20110 ประเทศไทย',
                   zh:'泰国春武里府西拉差区邦帕镇129/14 村11号 邮编20110',
                   ja:'〒20110 タイ国チョンブリー県シーラーチャー郡バーンプラ129/14 ムー11'},
    phoneLabel:   {en:'Phone',                 th:'โทรศัพท์',        zh:'电话',         ja:'電話'},
    emailLabel:   {en:'Email',                 th:'อีเมล',           zh:'邮箱',         ja:'メールアドレス'},
    fbLabel:      {en:'Facebook',              th:'เฟซบุ๊ก',         zh:'脸书',         ja:'フェイスブック'},
    hoursLabel:   {en:'Business Hours',        th:'เวลาทำการ',       zh:'营业时间',     ja:'営業時間'},
    hoursValue:   {en:'Monday – Saturday: 08:00 – 17:00 · Sunday: Closed',
                   th:'จันทร์ – เสาร์: 08:00 – 17:00 น. · วันอาทิตย์: ปิดทำการ',
                   zh:'周一至周六：08:00 – 17:00 · 周日：休息',
                   ja:'月曜日～土曜日：08:00～17:00 · 日曜日：定休日'},
    directionsBtn:{en:'Get Directions',        th:'รับเส้นทาง',      zh:'获取路线',     ja:'道順を取得'}
  },

  form: {
    title:       {en:'Request for Quotation (RFQ)',
                  th:'คำขอใบเสนอราคา (RFQ)',
                  zh:'询价单 (RFQ)',
                  ja:'お見積依頼フォーム (RFQ)'},
    instruction: {en:'Complete the form below with your project details and attach your technical drawings, part specifications, or reference photos. Our team will review your inquiry and respond as soon as possible.',
                  th:'กรอกแบบฟอร์มด้านล่างพร้อมรายละเอียดโครงการของคุณ และแนบแบบทางเทคนิค ข้อกำหนดชิ้นส่วน หรือรูปภาพอ้างอิง ทีมงานจะตรวจสอบข้อมูลและติดต่อกลับโดยเร็วที่สุด',
                  zh:'请填写以下表格，提供您的项目详情，并附上技术图纸、零件规格或参考图片。我们的团队将审核您的询价并尽快回复。',
                  ja:'以下フォームにプロジェクトの詳細を記入し、技術図面・部品仕様書・参考写真を添付してください。内容を確認のうえ、できるだけ早くご連絡いたします。'},
    secContact:  {en:'Your Contact Details',    th:'ข้อมูลติดต่อของคุณ',          zh:'您的联系信息',       ja:'お客様の連絡先'},
    secProject:  {en:'Project & Part Details',  th:'รายละเอียดโครงการและชิ้นส่วน', zh:'项目及零件详情',     ja:'プロジェクト・部品詳細'},
    fName:       {en:'Full Name *',             th:'ชื่อ-นามสกุล *',              zh:'姓名 *',            ja:'お名前 *'},
    fCompany:    {en:'Company / Factory Name *',th:'บริษัท / ชื่อโรงงาน *',       zh:'公司/工厂名称 *',    ja:'会社名・工場名 *'},
    fPhone:      {en:'Phone Number *',          th:'หมายเลขโทรศัพท์ *',           zh:'联系电话 *',         ja:'電話番号 *'},
    fEmail:      {en:'Email Address *',         th:'อีเมล *',                     zh:'电子邮箱 *',         ja:'メールアドレス *'},
    fService:    {en:'Service Required *',      th:'บริการที่ต้องการ *',           zh:'所需服务 *',         ja:'必要なサービス *'},
    fServicePH:  {en:'Select a service...',     th:'เลือกบริการ...',               zh:'请选择服务...',      ja:'サービスを選択...'},
    fMaterial:   {en:'Material',                th:'วัสดุ',                        zh:'材料',               ja:'材質'},
    fMaterialPH: {en:'e.g. SS304, Carbon Steel, Aluminum 6061',
                  th:'เช่น SS304, เหล็กคาร์บอน, อลูมิเนียม 6061',
                  zh:'如SS304、碳素钢、铝6061',
                  ja:'例：SS304、炭素鋼、アルミ6061'},
    fQty:        {en:'Quantity Required',       th:'จำนวนที่ต้องการ',              zh:'所需数量',            ja:'必要数量'},
    fQtyPH:      {en:'e.g. 50 pcs / 200 pcs per month',
                  th:'เช่น 50 ชิ้น / 200 ชิ้นต่อเดือน',
                  zh:'如50件/每月200件',
                  ja:'例：50個 / 月200個'},
    fDelivery:   {en:'Required Delivery Date',  th:'วันที่ต้องการรับงาน',          zh:'要求交货日期',        ja:'納期希望日'},
    fDesc:       {en:'Part Description & Specifications *',
                  th:'คำอธิบายชิ้นส่วนและข้อกำหนด *',
                  zh:'零件描述及规格 *',
                  ja:'部品説明・仕様 *'},
    fDescHint:   {en:'Describe the part, key dimensions, tolerances, surface finish requirements, heat treatment, or any special requirements',
                  th:'อธิบายชิ้นส่วน ขนาดหลัก พิกัดความคลาดเคลื่อน ข้อกำหนดพื้นผิว การอบชุบ หรือข้อกำหนดพิเศษใดๆ',
                  zh:'描述零件、关键尺寸、公差、表面质量要求、热处理或任何特殊要求',
                  ja:'部品の説明・主要寸法・公差・表面仕上げ要件・熱処理・その他特別要件をご記入ください'},
    fFiles:      {en:'Attach Files (Drawing / Specification / Photos)',
                  th:'แนบไฟล์ (แบบ / ข้อกำหนด / รูปภาพ)',
                  zh:'上传文件（图纸/规格/照片）',
                  ja:'ファイル添付（図面・仕様書・写真）'},
    fFilesHint:  {en:'Accepted formats: DXF, DWG, PDF, STEP, IGES, JPG, PNG · Max 10 MB per file',
                  th:'รูปแบบที่รับได้: DXF, DWG, PDF, STEP, IGES, JPG, PNG · สูงสุด 10 MB ต่อไฟล์',
                  zh:'支持格式：DXF、DWG、PDF、STEP、IGES、JPG、PNG · 每个文件最大10MB',
                  ja:'対応形式：DXF・DWG・PDF・STEP・IGES・JPG・PNG · 1ファイル最大10MB'},
    fDropZone:   {en:'Drag & drop files here or click to browse',
                  th:'ลากและวางไฟล์ที่นี่ หรือคลิกเพื่อเรียกดู',
                  zh:'将文件拖放至此处或点击浏览',
                  ja:'ここにファイルをドラッグ＆ドロップ、またはクリックして選択'},
    fNotes:      {en:'Additional Notes or Special Requirements',
                  th:'หมายเหตุเพิ่มเติมหรือข้อกำหนดพิเศษ',
                  zh:'附加备注或特殊要求',
                  ja:'補足事項・特別要件'},
    fNotesPH:    {en:'Any additional information that would help us prepare an accurate quotation',
                  th:'ข้อมูลเพิ่มเติมใดๆ ที่จะช่วยให้เราจัดทำใบเสนอราคาที่ถูกต้อง',
                  zh:'任何有助于我们准确报价的补充信息',
                  ja:'正確な見積作成に役立つ補足情報をご記入ください'},
    fSubmit:     {en:'Submit RFQ →',            th:'ส่ง RFQ →',                   zh:'提交询价单 →',       ja:'見積依頼を送信 →'},
    fRequired:   {en:'* Required fields',       th:'* ช่องที่ต้องกรอก',            zh:'* 必填项',           ja:'* 必須項目'},
    successTitle:{en:'Your RFQ Has Been Submitted!',
                  th:'ส่ง RFQ ของคุณเรียบร้อยแล้ว!',
                  zh:'您的询价单已成功提交！',
                  ja:'見積依頼を受け付けました！'},
    successBody: {en:'Thank you for contacting A NEW Engineering. Our team will review your inquiry and respond as soon as possible. If your request is urgent, please call us directly at 033-046-051-2.',
                  th:'ขอบคุณที่ติดต่อ เอ นิว เอ็นจิเนียริ่ง ทีมงานจะตรวจสอบข้อมูลและติดต่อกลับโดยเร็วที่สุด หากคำขอของคุณเร่งด่วน โปรดโทรหาเราโดยตรงที่ 033-046-051-2',
                  zh:'感谢您联系A NEW Engineering。我们的团队将审核您的询价并尽快回复。如需紧急处理，请直接致电033-046-051-2。',
                  ja:'A NEW Engineeringへのお問い合わせありがとうございます。内容を確認のうえ、できるだけ早くご連絡いたします。お急ぎの場合は、033-046-051-2へ直接お電話ください。'},
    errorMsg:    {en:'Something went wrong. Please try again or contact us directly at sales@anew.co.th',
                  th:'เกิดข้อผิดพลาด กรุณาลองอีกครั้งหรือติดต่อเราโดยตรงที่ sales@anew.co.th',
                  zh:'出现错误，请重试或直接联系我们：sales@anew.co.th',
                  ja:'エラーが発生しました。再度お試しいただくか、sales@anew.co.thへ直接ご連絡ください。'}
  }
};

/* ── Renderer ────────────────────────────────────────────────── */

function renderContact() {
  var c = C.contact;
  var f = c.form;
  updateSEO(t(c.seo.title), t(c.seo.desc));

  /* Service options from global content */
  var serviceOptions = C.home.services.items.map(function(s) {
    return '<option value="' + esc(s.name.en) + '">' + esc(t(s.name)) + '</option>';
  }).join('');

  document.getElementById('page-content').innerHTML = `

    <!-- ░░░ INNER HERO ░░░ -->
    <section class="hero hero--inner" style="background:linear-gradient(135deg,rgba(15,35,71,.85) 0%,rgba(27,58,107,.80) 55%,rgba(13,92,122,.78) 100%),url(images/hero-contact.webp.png);background-size:auto;background-position:center">

      <div class="container">
        <nav aria-label="Breadcrumb" class="hero__badge" style="background:rgba(255,255,255,0.15);display:inline-block">
          <a href="index.html" style="color:inherit;text-decoration:none">${esc(t(C.nav.home))}</a>
          <span style="margin:0 6px">›</span>
          <span>${esc(t(C.nav.contact))}</span>
        </nav>
        <h1 class="hero__h1">${esc(t(c.hero.h1))}</h1>
        <p class="hero__sub">${esc(t(c.hero.sub))}</p>
      </div>
    </section>

    <!-- ░░░ CONTACT + FORM ░░░ -->
    <section class="section section--white">
      <div class="container">
        <div class="contact-layout">

          <!-- ── Contact Info ─────────────────────────────────── -->
          <aside class="contact-info">
            <h2 class="section-title" style="font-size:1.375rem;margin-bottom:28px">${esc(t(c.info.sectionTitle))}</h2>

            <div class="contact-item">
              <div class="contact-item__label">📍 ${esc(t(c.info.addrLabel))}</div>
              <div class="contact-item__value">${esc(t(c.info.addrValue))}</div>
            </div>

            <div class="contact-item">
              <div class="contact-item__label">📞 ${esc(t(c.info.phoneLabel))}</div>
              <div class="contact-item__value">
                <a href="tel:033046051" class="contact-link">033-046-051-2</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item__label">✉️ ${esc(t(c.info.emailLabel))}</div>
              <div class="contact-item__value">
                <a href="mailto:sales@anew.co.th" class="contact-link">sales@anew.co.th</a><br>
                <a href="mailto:saleanew@gmail.com" class="contact-link">saleanew@gmail.com</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item__label">📘 ${esc(t(c.info.fbLabel))}</div>
              <div class="contact-item__value">
                <a href="https://facebook.com/AnewEngineering" target="_blank" rel="noopener" class="contact-link">facebook.com/AnewEngineering</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item__label">🕐 ${esc(t(c.info.hoursLabel))}</div>
              <div class="contact-item__value">${esc(t(c.info.hoursValue))}</div>
            </div>

            <div style="margin-top:28px">
              <a href="https://maps.google.com/?q=129/14+Moo+11+Bang+Phra+Si+Racha+Chonburi+Thailand"
                 target="_blank" rel="noopener"
                 class="btn btn-primary" style="width:100%;justify-content:center;display:flex">
                📍 ${esc(t(c.info.directionsBtn))}
              </a>
            </div>
          </aside>

          <!-- ── RFQ Form ──────────────────────────────────────── -->
          <div class="contact-form-wrap">
            <h2 class="section-title" style="font-size:1.375rem;margin-bottom:8px">${esc(t(f.title))}</h2>
            <p style="color:var(--color-text-light);font-size:0.9rem;margin-bottom:28px">${esc(t(f.instruction))}</p>

            <!-- Success state (hidden initially) -->
            <div id="rfq-success" hidden style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:28px;text-align:center">
              <div style="font-size:2rem;margin-bottom:12px">✅</div>
              <h3 style="color:#15803d;font-size:1.125rem;margin-bottom:10px">${esc(t(f.successTitle))}</h3>
              <p style="color:#166534;font-size:0.9rem;line-height:1.7">${esc(t(f.successBody))}</p>
            </div>

            <!-- Error banner (hidden initially) -->
            <div id="rfq-error" hidden style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:16px;margin-bottom:20px;color:#b91c1c;font-size:0.9rem">
              ${esc(t(f.errorMsg))}
            </div>

            <form id="rfq-form" novalidate>

              <!-- Contact Details -->
              <div class="form-section-label">${esc(t(f.secContact))}</div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="rfq-name">${esc(t(f.fName))}</label>
                  <input class="form-input" type="text" id="rfq-name" name="name" required autocomplete="name">
                </div>
                <div class="form-group">
                  <label class="form-label" for="rfq-company">${esc(t(f.fCompany))}</label>
                  <input class="form-input" type="text" id="rfq-company" name="company" required autocomplete="organization">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="rfq-phone">${esc(t(f.fPhone))}</label>
                  <input class="form-input" type="tel" id="rfq-phone" name="phone" required autocomplete="tel">
                </div>
                <div class="form-group">
                  <label class="form-label" for="rfq-email">${esc(t(f.fEmail))}</label>
                  <input class="form-input" type="email" id="rfq-email" name="email" required autocomplete="email">
                </div>
              </div>

              <!-- Project Details -->
              <div class="form-section-label" style="margin-top:24px">${esc(t(f.secProject))}</div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="rfq-service">${esc(t(f.fService))}</label>
                  <select class="form-input form-select" id="rfq-service" name="service" required>
                    <option value="">${esc(t(f.fServicePH))}</option>
                    ${serviceOptions}
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label" for="rfq-material">${esc(t(f.fMaterial))}</label>
                  <input class="form-input" type="text" id="rfq-material" name="material" placeholder="${esc(t(f.fMaterialPH))}">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="rfq-qty">${esc(t(f.fQty))}</label>
                  <input class="form-input" type="text" id="rfq-qty" name="quantity" placeholder="${esc(t(f.fQtyPH))}">
                </div>
                <div class="form-group">
                  <label class="form-label" for="rfq-delivery">${esc(t(f.fDelivery))}</label>
                  <input class="form-input" type="date" id="rfq-delivery" name="delivery">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="rfq-desc">${esc(t(f.fDesc))}</label>
                <textarea class="form-input form-textarea" id="rfq-desc" name="description" required
                  placeholder="${esc(t(f.fDescHint))}" rows="5"></textarea>
              </div>

              <!-- File Upload -->
              <div class="form-group">
                <label class="form-label">${esc(t(f.fFiles))}</label>
                <div class="drop-zone" id="drop-zone" tabindex="0" role="button" aria-label="${esc(t(f.fDropZone))}">
                  <input type="file" id="rfq-files" name="attachment" multiple accept=".dxf,.dwg,.pdf,.step,.stp,.iges,.igs,.jpg,.jpeg,.png" style="display:none">
                  <div class="drop-zone__icon">📎</div>
                  <div class="drop-zone__text">${esc(t(f.fDropZone))}</div>
                  <div class="drop-zone__hint">${esc(t(f.fFilesHint))}</div>
                </div>
                <div id="file-list" style="margin-top:8px"></div>
              </div>

              <div class="form-group">
                <label class="form-label" for="rfq-notes">${esc(t(f.fNotes))}</label>
                <textarea class="form-input form-textarea" id="rfq-notes" name="notes"
                  placeholder="${esc(t(f.fNotesPH))}" rows="3"></textarea>
              </div>

              <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:8px">
                <span style="font-size:0.8rem;color:var(--color-text-light)">${esc(t(f.fRequired))}</span>
                <button type="submit" class="btn btn-primary btn-lg" id="rfq-submit" style="min-width:180px">
                  ${esc(t(f.fSubmit))}
                </button>
              </div>

            </form>
          </div>

        </div><!-- /.contact-layout -->
      </div>
    </section>`;

  /* ── Inject contact page styles ─────────────────────────────── */
  var st = document.getElementById('contact-styles');
  if (!st) {
    st = document.createElement('style');
    st.id = 'contact-styles';
    st.textContent = `
      .contact-layout {
        display: grid;
        grid-template-columns: 340px 1fr;
        gap: 56px;
        align-items: start;
      }
      @media (max-width: 968px) {
        .contact-layout { grid-template-columns: 1fr; gap: 40px; }
        .contact-info { order: 2; }
        .contact-form-wrap { order: 1; }
      }
      .contact-item { margin-bottom: 20px; }
      .contact-item__label {
        font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
        letter-spacing: 0.06em; color: var(--color-primary); margin-bottom: 4px;
      }
      .contact-item__value { font-size: 0.9375rem; color: var(--color-text); line-height: 1.6; }
      .contact-link { color: var(--color-accent); text-decoration: none; }
      .contact-link:hover { text-decoration: underline; }
      .form-section-label {
        font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
        letter-spacing: 0.07em; color: var(--color-primary);
        border-bottom: 1.5px solid var(--color-border);
        padding-bottom: 8px; margin-bottom: 18px;
      }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 0; }
      @media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
      .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
      .form-label { font-size: 0.8125rem; font-weight: 600; color: var(--color-text); }
      .form-input {
        padding: 10px 14px;
        border: 1.5px solid var(--color-border);
        border-radius: 6px;
        font-size: 0.9rem;
        color: var(--color-text);
        background: #fff;
        transition: border-color 0.18s, box-shadow 0.18s;
        font-family: inherit;
        width: 100%;
        box-sizing: border-box;
      }
      .form-input:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(27,58,107,0.1);
      }
      .form-input.invalid { border-color: var(--color-cta); }
      .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
      .form-textarea { resize: vertical; min-height: 100px; }
      .drop-zone {
        border: 2px dashed var(--color-border);
        border-radius: 8px;
        padding: 28px 20px;
        text-align: center;
        cursor: pointer;
        transition: border-color 0.18s, background 0.18s;
        background: var(--color-bg-light, #f8fafc);
      }
      .drop-zone:hover, .drop-zone.dragover {
        border-color: var(--color-primary);
        background: rgba(27,58,107,0.04);
      }
      .drop-zone__icon { font-size: 1.75rem; margin-bottom: 8px; }
      .drop-zone__text { font-size: 0.9rem; font-weight: 500; color: var(--color-text); margin-bottom: 4px; }
      .drop-zone__hint { font-size: 0.775rem; color: var(--color-text-light); }
      .file-chip {
        display: inline-flex; align-items: center; gap: 6px;
        background: var(--color-bg-light, #f1f5f9);
        border: 1px solid var(--color-border);
        border-radius: 999px;
        padding: 4px 10px 4px 8px;
        font-size: 0.8rem;
        color: var(--color-text);
        margin: 4px 4px 0 0;
      }
      .file-chip__remove {
        background: none; border: none; cursor: pointer;
        color: var(--color-text-light); font-size: 0.9rem; line-height: 1;
        padding: 0; margin-left: 2px;
      }
      .file-chip__remove:hover { color: var(--color-cta); }
    `;
    document.head.appendChild(st);
  }

  /* ── Drop zone logic ─────────────────────────────────────────── */
  var dropZone  = document.getElementById('drop-zone');
  var fileInput = document.getElementById('rfq-files');
  var fileList  = document.getElementById('file-list');
  var selectedFiles = [];

  function renderFileList() {
    fileList.innerHTML = selectedFiles.map(function(f, i) {
      return '<span class="file-chip">📄 ' + esc(f.name) + '<button class="file-chip__remove" data-idx="' + i + '" type="button" aria-label="Remove">×</button></span>';
    }).join('');
    fileList.querySelectorAll('.file-chip__remove').forEach(function(btn) {
      btn.addEventListener('click', function() {
        selectedFiles.splice(parseInt(btn.dataset.idx, 10), 1);
        renderFileList();
      });
    });
  }

  dropZone.addEventListener('click', function() { fileInput.click(); });
  dropZone.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') fileInput.click(); });
  dropZone.addEventListener('dragover', function(e) { e.preventDefault(); dropZone.classList.add('dragover'); });
  dropZone.addEventListener('dragleave', function() { dropZone.classList.remove('dragover'); });
  dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    Array.from(e.dataTransfer.files).forEach(function(f) { selectedFiles.push(f); });
    renderFileList();
  });
  fileInput.addEventListener('change', function() {
    Array.from(fileInput.files).forEach(function(f) { selectedFiles.push(f); });
    fileInput.value = '';
    renderFileList();
  });

  /* ── Form submission ─────────────────────────────────────────── */
  var form       = document.getElementById('rfq-form');
  var submitBtn  = document.getElementById('rfq-submit');
  var successBox = document.getElementById('rfq-success');
  var errorBox   = document.getElementById('rfq-error');

  function validateField(el) {
    var ok = el.checkValidity();
    el.classList.toggle('invalid', !ok);
    return ok;
  }

  form.querySelectorAll('[required]').forEach(function(el) {
    el.addEventListener('blur', function() { validateField(el); });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    errorBox.hidden = true;

    /* Client-side validation */
    var valid = true;
    form.querySelectorAll('[required]').forEach(function(el) {
      if (!validateField(el)) valid = false;
    });
    if (!valid) return;

    /* Build FormData for FormSubmit */
    var data = new FormData();
    data.append('_subject', 'New RFQ from ' + document.getElementById('rfq-company').value);
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('Name',        document.getElementById('rfq-name').value);
    data.append('Company',     document.getElementById('rfq-company').value);
    data.append('Phone',       document.getElementById('rfq-phone').value);
    data.append('Email',       document.getElementById('rfq-email').value);
    data.append('Service',     document.getElementById('rfq-service').value);
    data.append('Material',    document.getElementById('rfq-material').value);
    data.append('Quantity',    document.getElementById('rfq-qty').value);
    data.append('Delivery',    document.getElementById('rfq-delivery').value);
    data.append('Description', document.getElementById('rfq-desc').value);
    data.append('Notes',       document.getElementById('rfq-notes').value);
    selectedFiles.forEach(function(f) { data.append('attachment', f); });

    submitBtn.disabled = true;
    submitBtn.textContent = '⏳';

    fetch('https://formsubmit.co/ajax/sales@anew.co.th', { method: 'POST', body: data })
      .then(function(res) { return res.json(); })
      .then(function(json) {
        if (json.success === 'true' || json.success === true) {
          form.hidden = true;
          successBox.removeAttribute('hidden');
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          throw new Error('rejected');
        }
      })
      .catch(function() {
        errorBox.removeAttribute('hidden');
        submitBtn.disabled = false;
        submitBtn.textContent = t(C.contact.form.fSubmit);
        errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
  });
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
