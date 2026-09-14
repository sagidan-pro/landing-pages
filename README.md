<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#0b0b0b" />
  <title>Tal Bitton | Barber</title>
  <meta name="description" content="Tal Bitton Barber - קביעת תור אונליין" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Frank+Ruhl+Libre:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root{
      --ink:#0b0b0b;
      --paper:#f2efe8;
      --paper-2:#e7e0d3;
      --line:#cfc6b7;
      --accent:#c7ff3d;
      --muted:#6f6a61;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      background:var(--paper);
      color:var(--ink);
      font-family:"Assistant",Arial,sans-serif;
      overflow-x:hidden;
    }
    a{color:inherit}
    .shell{
      width:min(1500px,calc(100% - 30px));
      margin:0 auto;
      padding:15px 0 40px;
    }

    /* HERO */
    .hero{
      min-height:92vh;
      background:var(--ink);
      color:#fff;
      border-radius:30px;
      overflow:hidden;
      position:relative;
      display:grid;
      grid-template-rows:auto 1fr auto;
    }
    .topbar{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:24px 28px;
      border-bottom:1px solid rgba(255,255,255,.14);
      font-size:13px;
      letter-spacing:.08em;
      text-transform:uppercase;
      position:relative;
      z-index:3;
    }
    .mini-brand{font-weight:700}
    .topbar a{text-decoration:none;color:#dcdcdc}
    .hero-inner{
      display:grid;
      grid-template-columns:1.18fr .82fr;
      min-height:640px;
      position:relative;
      z-index:2;
    }
    .hero-copy{
      padding:55px 40px 30px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      position:relative;
    }
    .eyebrow{
      display:flex;
      align-items:center;
      gap:10px;
      font-size:14px;
      color:#bdbdbd;
      margin-bottom:26px;
    }
    .eyebrow:before{
      content:"";
      width:44px;
      height:1px;
      background:var(--accent);
    }
    .tal{
      font-family:"Cormorant Garamond",serif;
      font-size:clamp(78px,10vw,160px);
      font-weight:600;
      line-height:.82;
      letter-spacing:-.065em;
      margin:0;
      text-transform:lowercase;
      white-space:nowrap;
    }
    .latin-logo{
      direction:ltr;
      unicode-bidi:isolate;
      display:inline-block;
    }
    .period{
      color:var(--accent);
      font-style:italic;
      margin-left:.01em;
    }
    .hero-note{
      margin-top:46px;
      max-width:510px;
      color:#d1d1d1;
      font-size:18px;
      line-height:1.65;
    }
    .hero-note strong{color:#fff;font-weight:600}
    .scroll-tag{
      position:absolute;
      left:36px;
      bottom:24px;
      writing-mode:vertical-rl;
      transform:rotate(180deg);
      color:#777;
      font-size:11px;
      letter-spacing:.18em;
      text-transform:uppercase;
    }

    .booking-side{
      background:linear-gradient(160deg,#e6dfd2 0%,#f5f1e8 65%);
      color:var(--ink);
      padding:34px;
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
    }
    .booking-side:before{
      content:"TB";
      position:absolute;
      top:25px;
      left:28px;
      font-family:"Cormorant Garamond",serif;
      font-size:100px;
      line-height:1;
      color:rgba(0,0,0,.055);
    }
    .booking{
      width:100%;
      max-width:470px;
      background:rgba(255,255,255,.78);
      backdrop-filter:blur(12px);
      border:1px solid rgba(0,0,0,.08);
      border-radius:24px;
      padding:28px;
      box-shadow:0 28px 65px rgba(35,28,18,.13);
      position:relative;
      z-index:2;
    }
    .booking-head{
      display:flex;
      justify-content:space-between;
      align-items:flex-start;
      gap:20px;
      margin-bottom:22px;
    }
    .booking h2{
      margin:0;
      font-family:"Frank Ruhl Libre",serif;
      font-size:35px;
      letter-spacing:-.02em;
    }
    .num{
      width:42px;height:42px;border-radius:50%;
      background:var(--accent);
      display:grid;place-items:center;
      font-size:13px;font-weight:700;
    }
    .sub{color:#777;margin:5px 0 0;font-size:14px}
    .field{margin:0 0 15px}
    label{display:block;margin-bottom:7px;font-size:13px;font-weight:700}
    input,select{
      width:100%;
      border:1px solid #d7d1c8;
      background:#fff;
      color:var(--ink);
      border-radius:12px;
      padding:14px;
      font:inherit;
      font-size:16px;
      outline:none;
      transition:.2s ease;
    }
    input:focus,select:focus{
      border-color:var(--ink);
      box-shadow:0 0 0 3px rgba(0,0,0,.06);
    }
    .service-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
    .service-option input{display:none}
    .service-option span{
      display:block;
      border:1px solid #d8d1c6;
      background:#fff;
      border-radius:12px;
      padding:14px 10px;
      text-align:center;
      cursor:pointer;
      transition:.2s ease;
      font-weight:600;
    }
    .service-option input:checked + span{
      background:var(--ink);
      color:#fff;
      border-color:var(--ink);
    }
    .row{display:grid;grid-template-columns:1fr 1fr;gap:10px}
    .cta{
      width:100%;
      border:0;
      border-radius:12px;
      background:var(--ink);
      color:#fff;
      padding:16px 18px;
      font-size:17px;
      font-weight:700;
      cursor:pointer;
      transition:.2s ease;
      margin-top:5px;
    }
    .cta:hover{transform:translateY(-2px);background:#242424}
    .tiny{text-align:center;color:#929292;font-size:12px;margin:10px 0 0}
    .success{display:none;text-align:center;padding:34px 10px}
    .check{
      width:60px;height:60px;border-radius:50%;
      display:grid;place-items:center;
      background:var(--accent);
      margin:0 auto 16px;
      font-size:28px;
    }

    .marquee{
      overflow:hidden;
      border-top:1px solid rgba(255,255,255,.14);
      white-space:nowrap;
      color:#fff;
      font-size:13px;
      letter-spacing:.16em;
      text-transform:uppercase;
      padding:13px 0;
    }
    .marquee-track{
      display:flex;
      width:max-content;
      animation:move 20s linear infinite;
    }
    .marquee-group{
      display:flex;
      flex-shrink:0;
      min-width:max-content;
    }
    .marquee-group span{
      display:inline-block;
      padding-left:28px;
    }
    @keyframes move{
      from{transform:translateX(0)}
      to{transform:translateX(50%)}
    }

    /* LOOKBOOK */
    .lookbook{
      padding:86px 0 30px;
    }
    .section-head{
      display:block;
      margin-bottom:26px;
      text-align:right;
    }
    .section-kicker{
      font-size:12px;
      letter-spacing:.16em;
      text-transform:uppercase;
      color:var(--muted);
      margin-bottom:8px;
    }
    .section-title{
      margin:0;
      font-family:"Frank Ruhl Libre",serif;
      font-size:clamp(50px,7vw,100px);
      line-height:.9;
      letter-spacing:-.05em;
    }
    .reel-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:12px;
    }
    .reel{
      aspect-ratio:9/16;
      position:relative;
      overflow:hidden;
      border-radius:18px;
      background:
        radial-gradient(circle at 20% 10%,rgba(199,255,61,.22),transparent 28%),
        linear-gradient(160deg,#242424 0%,#0c0c0c 70%);
      color:#fff;
      border:1px solid rgba(0,0,0,.12);
      isolation:isolate;
    }
    .reel:nth-child(2){transform:translateY(36px)}
    .reel:nth-child(4){transform:translateY(36px)}
    .reel:before{
      content:"";
      position:absolute;inset:0;
      background:linear-gradient(to top,rgba(0,0,0,.72),transparent 50%);
      z-index:1;
    }
    .reel video{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      object-fit:cover;
    }
    .reel-meta{
      position:absolute;
      inset:auto 16px 16px;
      z-index:3;
      display:flex;
      justify-content:space-between;
      align-items:end;
      gap:10px;
    }
    .reel-meta strong{
      font-family:"Cormorant Garamond",serif;
      font-size:24px;
      font-weight:600;
    }
    .reel-meta span{font-size:11px;color:#c8c8c8;letter-spacing:.12em}
    .play{
      position:absolute;
      top:16px;left:16px;
      width:42px;height:42px;border-radius:50%;
      border:1px solid rgba(255,255,255,.4);
      display:grid;place-items:center;
      z-index:3;
      font-size:12px;
      backdrop-filter:blur(8px);
      background:rgba(255,255,255,.08);
    }
    .placeholder-center{
      position:absolute;
      inset:0;
      display:grid;
      place-items:center;
      z-index:0;
      color:#777;
      font-size:12px;
      letter-spacing:.16em;
      text-transform:uppercase;
    }

    /* LOCATION */
    .location{
      margin-top:110px;
      background:var(--ink);
      color:#fff;
      border-radius:28px;
      overflow:hidden;
      display:grid;
      grid-template-columns:.72fr 1.28fr;
    }
    .location-copy{
      padding:48px 38px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      min-height:420px;
    }
    .location-copy-clean{
      background:
        radial-gradient(circle at 50% 40%,rgba(199,255,61,.10),transparent 34%),
        var(--ink);
    }
    .location-copy h2{
      margin:0;
      font-family:"Frank Ruhl Libre",serif;
      font-size:56px;
      letter-spacing:-.04em;
    }
    .location-copy p{
      color:#b9b9b9;
      font-size:17px;
      line-height:1.7;
    }
    .nav-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      width:max-content;
      text-decoration:none;
      background:var(--accent);
      color:var(--ink);
      padding:24px 40px;
      border-radius:999px;
      font-weight:800;
      font-size:28px;
      line-height:1;
      box-shadow:0 0 0 14px rgba(255,255,255,.03), 0 20px 50px rgba(199,255,61,.18);
      transition:.2s ease;
    }
    .nav-btn:hover{transform:translateY(-2px) scale(1.02)}
    @media(max-width:620px){
      .nav-btn{padding:18px 28px;font-size:22px;}
    }
    .map-wrap{min-height:420px}
    .map-wrap iframe{width:100%;height:100%;min-height:420px;border:0;display:block}
    footer{
      display:flex;
      justify-content:space-between;
      gap:20px;
      padding:22px 4px 0;
      color:#777;
      font-size:12px;
    }

    @media(max-width:980px){
      .hero-inner{grid-template-columns:1fr}
      .hero-copy{min-height:520px}
      .booking-side{padding:24px}
      .section-head{grid-template-columns:1fr}
    @media(max-width:620px){
      .shell{width:calc(100% - 14px);padding-top:7px}
      .hero{border-radius:20px;min-height:auto}
      .topbar{padding:18px}
      .hero-copy{padding:48px 20px 30px;min-height:440px}
      .tal{font-size:64px;line-height:.82;white-space:normal}
      .hero-note{font-size:16px;margin-top:36px}
      .booking-side{padding:14px}
      .booking{padding:20px;border-radius:18px}
      .booking h2{font-size:30px}
      .row{grid-template-columns:1fr}
      .service-grid{grid-template-columns:1fr}
      .lookbook{padding-top:58px}
      .section-title{font-size:54px}
      .reel-grid{grid-template-columns:1fr 1fr;gap:8px}
      .reel{border-radius:14px}
      .location{margin-top:70px;border-radius:20px}
      .location-copy{padding:30px 22px}
      .location-copy h2{font-size:42px}
      footer{flex-direction:column}
    }
  
    /* Mobile-first refinement */
    .hero{min-height:auto}
    .hero-inner{grid-template-columns:1fr}
    .hero-copy{
      min-height:390px;
      padding:44px 20px 26px;
      justify-content:center;
    }
    .tal{
      font-size:clamp(62px,19vw,94px);
      line-height:.78;
      white-space:normal;
    }
    .booking-side{padding:12px}
    .booking{max-width:none;padding:20px;border-radius:18px}
    .booking h2{font-size:31px}
    .service-grid{grid-template-columns:1fr 1fr}
    .row{grid-template-columns:1fr}
    .lookbook{padding:54px 0 18px}
    .section-title{font-size:clamp(48px,15vw,72px)}
    .reel-grid{
      display:flex;
      gap:10px;
      overflow-x:auto;
      scroll-snap-type:x mandatory;
      padding-bottom:8px;
      scrollbar-width:none;
    }
    .reel-grid::-webkit-scrollbar{display:none}
    .reel{
      flex:0 0 78vw;
      max-width:330px;
      scroll-snap-align:start;
      border-radius:18px;
      transform:none !important;
    }
to{transform:translateY(48px)}
    }

    .location{
      margin-top:68px;
      display:block;
      background:transparent;
      border-radius:22px;
      overflow:visible;
    }
    .map-wrap{
      min-height:330px;
      border-radius:22px;
      overflow:hidden;
      box-shadow:0 18px 48px rgba(0,0,0,.10);
    }
    .map-wrap iframe{min-height:330px}
    .location-action{
      display:flex;
      justify-content:center;
      padding:18px 0 0;
    }
    .nav-btn{
      width:100%;
      max-width:520px;
      min-height:66px;
      font-size:24px;
      padding:20px 26px;
      background:var(--ink);
      color:#fff;
      box-shadow:none;
    }

    @media(min-width:760px){
      .hero-inner{grid-template-columns:1.18fr .82fr}
      .hero-copy{min-height:620px;padding:55px 40px 30px}
      .tal{font-size:clamp(78px,10vw,160px);white-space:nowrap}
      .booking-side{padding:34px}
      .booking{max-width:470px;padding:28px}
      .row{grid-template-columns:1fr 1fr}
      .reel-grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        overflow:visible;
      }
      .reel{max-width:none}
      .reel:nth-child(2),.reel:nth-child(4){transform:translateY(36px)!important}
      .location{margin-top:110px}
      .map-wrap,.map-wrap iframe{min-height:440px}
      .location-action{padding-top:22px}
      .nav-btn{font-size:28px;min-height:74px}
    }

  </style>
</head>
<body>
  <main class="shell">
    <section class="hero">
<div class="topbar">
        <div class="mini-brand">Tal Bitton Barber</div>
        <a href="#book">Book your cut ↙</a>
      </div>

      <div class="hero-inner">
        <div class="hero-copy">
          <div class="eyebrow">Tel Aviv · Barber Studio</div>
          <h1 class="tal"><span class="latin-logo">tal bitton<span class="period">.</span></span></h1>
<div class="scroll-tag">scroll to explore</div>
        </div>

        <div class="booking-side" id="book">
          <div class="booking">
            <div id="formBox">
              <div class="booking-head">
                <div>
                  <h2>קובעים תור</h2>
                  <p class="sub">בחרו שירות, יום ושעה</p>
                </div>
                <div class="num">01</div>
              </div>

              <form id="bookingForm" name="barber-booking" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="barber-booking">
                <p style="display:none"><label>אל תמלאו: <input name="bot-field"></label></p>

                <div class="field">
                  <label>מה תרצו?</label>
                  <div class="service-grid">
                    <label class="service-option">
                      <input type="radio" name="service" value="תספורת" checked required>
                      <span>תספורת</span>
                    </label>
                    <label class="service-option">
                      <input type="radio" name="service" value="תספורת + זקן" required>
                      <span>תספורת + זקן</span>
                    </label>
                  </div>
                </div>

                <div class="field">
                  <label for="name">שם מלא</label>
                  <input id="name" name="name" type="text" autocomplete="name" placeholder="השם שלך" required>
                </div>

                <div class="field">
                  <label for="phone">טלפון</label>
                  <input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="05X-XXXXXXX" required>
                </div>

                <div class="row">
                  <div class="field">
                    <label for="date">יום</label>
                    <input id="date" name="date" type="date" required>
                  </div>
                  <div class="field">
                    <label for="time">שעה</label>
                    <select id="time" name="time" required>
                      <option value="">בחרו שעה</option>
                    </select>
                  </div>
                </div>

                <button class="cta" type="submit">קביעת התור</button>
                <p class="tiny">התור נשלח ישירות למערכת ההזמנות</p>
              </form>
            </div>

            <div class="success" id="successBox">
              <div class="check">✓</div>
              <h3>התור נשלח</h3>
              <p id="successText">קיבלנו את הפרטים שלך.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="marquee">
        <div class="marquee-track">
          <div class="marquee-group">
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
          </div>
          <div class="marquee-group" aria-hidden="true">
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
            <span>TAL BITTON — CUTS — BEARD — TEL AVIV — </span>
          </div>
        </div>
      </div>
    </section>
<section class="lookbook">
      <div class="section-head">
        <div>
          <div class="section-kicker">02 / LOOKBOOK</div>
          <h2 class="section-title">עבודות<br>אחרונות.</h2>
        </div>
        
      </div>

      <div class="reel-grid">
        <article class="reel">
          <!-- החלף את השורה הבאה בוידאו שלך:
          <video src="videos/cut-01.mp4" autoplay muted loop playsinline></video>
          -->
          <div class="placeholder-center">video 01</div>
          <div class="play">▶</div>
          <div class="reel-meta"><strong>Clean fade</strong><span>01</span></div>
        </article>

        <article class="reel">
          <!-- <video src="videos/cut-02.mp4" autoplay muted loop playsinline></video> -->
          <div class="placeholder-center">video 02</div>
          <div class="play">▶</div>
          <div class="reel-meta"><strong>Texture</strong><span>02</span></div>
        </article>

        <article class="reel">
          <!-- <video src="videos/cut-03.mp4" autoplay muted loop playsinline></video> -->
          <div class="placeholder-center">video 03</div>
          <div class="play">▶</div>
          <div class="reel-meta"><strong>Sharp beard</strong><span>03</span></div>
        </article>

        <article class="reel">
          <!-- <video src="videos/cut-04.mp4" autoplay muted loop playsinline></video> -->
          <div class="placeholder-center">video 04</div>
          <div class="play">▶</div>
          <div class="reel-meta"><strong>Fresh cut</strong><span>04</span></div>
        </article>
      </div>
    </section>

    
    <section class="location">
      <div class="map-wrap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.8994022476236!2d34.78045333601136!3d32.071969516875924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b8266306a0d%3A0xe6ea880f447b9453!2sShlomo%20Ibn%20Gabirol%20St%209%2C%20Tel%20Aviv-Jaffa!5e0!3m2!1sen!2sil!4v1789370962857!5m2!1sen!2sil" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <div class="location-action">
        <a class="nav-btn" href="https://www.google.com/maps/dir/?api=1&destination=Shlomo+Ibn+Gabirol+St+9%2C+Tel+Aviv-Jaffa" target="_blank" rel="noopener">נווטו אליי ↗</a>
      </div>
    </section>

    <footer>
      <span>© Tal Bitton Barber</span>
      <span>Tel Aviv · Appointment only</span>
    </footer>
  </main>

  <script>
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const form = document.getElementById('bookingForm');
    const formBox = document.getElementById('formBox');
    const successBox = document.getElementById('successBox');
    const successText = document.getElementById('successText');

    const START_HOUR = 9;
    const END_HOUR = 19;
    const INTERVAL_MINUTES = 30;

    function pad(n){ return String(n).padStart(2,'0'); }

    function setMinDate(){
      const now = new Date();
      dateInput.min = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
    }

    function fillTimes(){
      timeSelect.innerHTML = '<option value="">בחרו שעה</option>';
      for(let h=START_HOUR; h<END_HOUR; h++){
        for(let m=0; m<60; m+=INTERVAL_MINUTES){
          const value = `${pad(h)}:${pad(m)}`;
          const opt = document.createElement('option');
          opt.value = value;
          opt.textContent = value;
          timeSelect.appendChild(opt);
        }
      }
    }

    function encode(data){
      return Object.keys(data)
        .map(key => encodeURIComponent(key)+'='+encodeURIComponent(data[key]))
        .join('&');
    }

    setMinDate();
    fillTimes();

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const payload = {};
      data.forEach((v,k)=>payload[k]=v);

      try{
        const res = await fetch('/', {
          method:'POST',
          headers:{'Content-Type':'application/x-www-form-urlencoded'},
          body:encode(payload)
        });
        if(!res.ok) throw new Error('submit failed');

        successText.textContent = `${payload.service} · ${payload.date} · ${payload.time}`;
        formBox.style.display='none';
        successBox.style.display='block';
      }catch(err){
        alert('לא הצלחנו לשלוח כרגע. נסו שוב בעוד רגע.');
      }
    });
  </script>
</body>
</html>
