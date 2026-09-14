<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0b0b0b">
<title>Tal Bitton</title>
<meta name="description" content="קביעת תור אצל Tal Bitton">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@500;600&family=Frank+Ruhl+Libre:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--ink:#0b0b0b;--paper:#f2efe8;--muted:#777168;--line:#d7d0c5;--lime:#c7ff3d}
*{box-sizing:border-box} html{scroll-behavior:smooth}
body{margin:0;background:var(--paper);color:var(--ink);font-family:"Assistant",Arial,sans-serif;overflow-x:hidden}
a{color:inherit}.shell{width:min(1500px,calc(100% - 14px));margin:0 auto;padding:7px 0 36px}
.hero{background:var(--ink);color:#fff;border-radius:22px;overflow:hidden;min-height:100svh;display:flex;flex-direction:column}
.hero-brand{padding:36px 20px 24px;display:flex;align-items:center;justify-content:center;text-align:center;min-height:270px}
.brand-title{margin:0;font-family:"Cormorant Garamond",serif;font-weight:600;font-size:clamp(72px,21vw,150px);line-height:.78;letter-spacing:-.065em;direction:ltr;unicode-bidi:isolate;text-transform:lowercase}
.brand-title .dot{color:var(--lime)}
.booking-area{background:linear-gradient(160deg,#ece6da 0%,#f7f4ee 100%);padding:14px;flex:1;display:flex;align-items:center;justify-content:center}
.booking-card{width:100%;max-width:560px;background:rgba(255,255,255,.94);border:1px solid rgba(0,0,0,.06);border-radius:24px;padding:22px;box-shadow:0 20px 50px rgba(24,18,10,.10)}
.booking-card h2{margin:0 0 5px;font-family:"Frank Ruhl Libre",serif;font-size:34px;letter-spacing:-.03em}
.booking-card .sub{margin:0 0 22px;color:var(--muted);font-size:14px}
.field{margin-bottom:15px} label{display:block;margin:0 0 7px;font-weight:700;font-size:13px}
input,select{width:100%;appearance:none;border:1px solid var(--line);background:#fbfaf7;border-radius:14px;padding:15px 14px;font:inherit;font-size:16px;color:var(--ink);outline:none;transition:.2s}
input:focus,select:focus{border-color:var(--ink);background:#fff;box-shadow:0 0 0 4px rgba(11,11,11,.05)}
.service-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.service-option input{display:none}
.service-option span{display:flex;align-items:center;justify-content:center;min-height:58px;padding:12px;border:1px solid var(--line);background:#fbfaf7;border-radius:14px;font-weight:700;cursor:pointer;transition:.2s;text-align:center}
.service-option input:checked + span{background:var(--ink);border-color:var(--ink);color:#fff;box-shadow:0 8px 18px rgba(0,0,0,.12)}
.row{display:grid;grid-template-columns:1fr;gap:0}
.submit{width:100%;border:0;border-radius:15px;background:var(--ink);color:#fff;min-height:58px;padding:16px 20px;font-size:18px;font-weight:800;cursor:pointer;transition:.2s;margin-top:3px}
.submit:hover{transform:translateY(-1px);background:#242424}
.success{display:none;padding:36px 12px;text-align:center}.success .check{width:62px;height:62px;border-radius:50%;background:var(--lime);display:grid;place-items:center;margin:0 auto 18px;font-size:28px;font-weight:800}
.success h3{margin:0 0 8px;font-family:"Frank Ruhl Libre",serif;font-size:30px}.success p{margin:0;color:var(--muted)}
.lookbook{padding:58px 0 18px}.section-kicker{font-size:12px;color:var(--muted);margin-bottom:8px}
.section-title{margin:0 0 24px;font-family:"Frank Ruhl Libre",serif;font-size:clamp(52px,15vw,88px);line-height:.92;letter-spacing:-.05em}
.reel-grid{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding-bottom:8px}.reel-grid::-webkit-scrollbar{display:none}
.reel{flex:0 0 78vw;max-width:340px;aspect-ratio:9/16;position:relative;overflow:hidden;border-radius:18px;background:linear-gradient(160deg,#242424,#0d0d0d 72%);color:#fff;scroll-snap-align:start}
.reel video{width:100%;height:100%;object-fit:cover;display:block}.placeholder{position:absolute;inset:0;display:grid;place-items:center;color:#707070;font-size:12px}
.instagram{margin-top:28px;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:#fff}
.instagram a{text-decoration:none;display:flex;align-items:center;justify-content:space-between;gap:14px;padding:18px 20px;font-weight:700;font-size:18px}
.ig-icon{width:42px;height:42px;border-radius:12px;border:1px solid var(--line);display:grid;place-items:center;font-size:20px;flex:0 0 auto}
.location{margin-top:28px}.map-wrap{min-height:330px;border-radius:22px;overflow:hidden;box-shadow:0 18px 48px rgba(0,0,0,.08);background:#ddd}
.map-wrap iframe{width:100%;height:100%;min-height:330px;border:0;display:block}.location-action{padding-top:16px}
.nav-btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:66px;border-radius:16px;background:var(--ink);color:#fff;text-decoration:none;font-size:23px;font-weight:800}
footer{padding:22px 4px 0;color:#918a7f;font-size:12px;text-align:center}
@media(min-width:760px){
.shell{width:min(1500px,calc(100% - 30px));padding-top:15px}.hero{min-height:760px;display:grid;grid-template-columns:1.05fr .95fr;border-radius:30px}
.hero-brand{min-height:760px;padding:40px}.brand-title{font-size:clamp(100px,11vw,175px)}.booking-area{padding:34px}.booking-card{padding:30px}
.row{grid-template-columns:1fr 1fr;gap:10px}.reel-grid{display:grid;grid-template-columns:repeat(4,1fr);overflow:visible}.reel{max-width:none}
.lookbook{padding-top:82px}.instagram a{padding:22px 26px}.map-wrap,.map-wrap iframe{min-height:440px}.nav-btn{max-width:520px;margin:0 auto;min-height:72px;font-size:27px}}
</style>
</head>
<body>
<main class="shell">
<section class="hero">
  <div class="hero-brand"><h1 class="brand-title">tal bitton<span class="dot">.</span></h1></div>
  <div class="booking-area">
    <div class="booking-card">
      <div id="formBox">
        <h2>קביעת תור</h2>
        <p class="sub">בחרו שירות, יום ושעה</p>
        <form id="bookingForm" name="barber-booking" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="barber-booking">
          <p style="display:none"><label>אל תמלאו: <input name="bot-field"></label></p>
          <div class="field">
            <label>מה תרצו?</label>
            <div class="service-grid">
              <label class="service-option"><input type="radio" name="service" value="תספורת" checked required><span>תספורת</span></label>
              <label class="service-option"><input type="radio" name="service" value="תספורת + זקן" required><span>תספורת + זקן</span></label>
            </div>
          </div>
          <div class="field"><label for="name">שם מלא</label><input id="name" name="name" type="text" autocomplete="name" placeholder="השם שלך" required></div>
          <div class="field"><label for="phone">טלפון</label><input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="05X-XXXXXXX" required></div>
          <div class="row">
            <div class="field"><label for="date">יום</label><input id="date" name="date" type="date" required></div>
            <div class="field"><label for="time">שעה</label><select id="time" name="time" required><option value="">בחרו שעה</option></select></div>
          </div>
          <button class="submit" type="submit">קביעת התור</button>
        </form>
      </div>
      <div class="success" id="successBox"><div class="check">✓</div><h3>התור נשלח</h3><p id="successText">קיבלנו את הפרטים שלך.</p></div>
    </div>
  </div>
</section>

<section class="lookbook">
  <div class="section-kicker">עבודות אחרונות</div>
  <h2 class="section-title">עבודות<br>אחרונות.</h2>
  <div class="reel-grid">
    <article class="reel"><div class="placeholder">וידאו 01</div></article>
    <article class="reel"><div class="placeholder">וידאו 02</div></article>
    <article class="reel"><div class="placeholder">וידאו 03</div></article>
    <article class="reel"><div class="placeholder">וידאו 04</div></article>
  </div>
</section>

<section class="instagram">
  <a href="https://www.instagram.com/talbitton91?stkn=MW1qemF3YThzMW85ZA==" target="_blank" rel="noopener"><span>לאינסטגרם של Tal</span><span class="ig-icon">◎</span></a>
</section>

<section class="location">
  <div class="map-wrap"><iframe src="https://embed.waze.com/iframe?zoom=16&lat=32.071900&lon=34.781689&ct=livemap" width="600" height="450" allowfullscreen></iframe></div>
  <div class="location-action"><a class="nav-btn" href="https://www.waze.com/ul?ll=32.071900%2C34.781689&navigate=yes" target="_blank" rel="noopener">נווטו אליי</a></div>
</section>

<footer>Tal Bitton</footer>
</main>

<script>
const dateInput=document.getElementById('date');
const timeSelect=document.getElementById('time');
const form=document.getElementById('bookingForm');
const formBox=document.getElementById('formBox');
const successBox=document.getElementById('successBox');
const successText=document.getElementById('successText');
const START_HOUR=9, END_HOUR=19, INTERVAL_MINUTES=30;
function pad(n){return String(n).padStart(2,'0')}
function setMinDate(){const now=new Date();dateInput.min=`${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`}
function fillTimes(){timeSelect.innerHTML='<option value="">בחרו שעה</option>';for(let h=START_HOUR;h<END_HOUR;h++){for(let m=0;m<60;m+=INTERVAL_MINUTES){const value=`${pad(h)}:${pad(m)}`;const opt=document.createElement('option');opt.value=value;opt.textContent=value;timeSelect.appendChild(opt)}}}
function encode(data){return Object.keys(data).map(key=>encodeURIComponent(key)+'='+encodeURIComponent(data[key])).join('&')}
setMinDate();fillTimes();
form.addEventListener('submit',async(e)=>{e.preventDefault();const data=new FormData(form);const payload={};data.forEach((v,k)=>payload[k]=v);
try{const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:encode(payload)});if(!res.ok)throw new Error('submit failed');
successText.textContent=`${payload.service} · ${payload.date} · ${payload.time}`;formBox.style.display='none';successBox.style.display='block';
}catch(err){alert('לא הצלחנו לשלוח כרגע. נסו שוב בעוד רגע.')}})
</script>
</body>
</html>
