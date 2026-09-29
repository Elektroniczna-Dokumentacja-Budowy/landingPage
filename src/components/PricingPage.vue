<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'
import DashboardMockup from './DashboardMockup.vue'
import LogoMark from './LogoMark.vue'
import calendarIcon from '../assets/images/02-kalendarz.svg'
import folderIcon from '../assets/images/01-folder.svg'

const menuOpen = ref(false)
const annual = ref(false)
const nav = [['Funkcje','/funkcje'],['Dla inwestora','/dla-inwestora'],['Dla wykonawcy','/dla-wykonawcy'],['Cennik','/cennik'],['Blog','/#blog'],['O nas','/o-nas'],['Kontakt','/kontakt']]

const plans = [
  {name:'START',subtitle:'Dla inwestorów indywidualnych',monthly:39,yearly:31,description:'Idealny do budowy domu lub mniejszej inwestycji',features:['1 aktywna inwestycja','Nieograniczeni użytkownicy','Dokumenty i plany','Dziennik budowy (zdjęcia)','Komunikator','Harmonogram i zadania','Budżet i koszty','Raporty podstawowe'],support:'Priorytetowe wsparcie'},
  {name:'PRO',subtitle:'Dla wymagających inwestorów i małych firm',monthly:79,yearly:63,description:'Więcej możliwości i pełna kontrola wielu inwestycji',featured:true,features:['Do 5 aktywnych inwestycji','Nieograniczeni użytkownicy','Wszystko z planu START','Raporty zaawansowane','Eksport danych (PDF, Excel)','Akceptacje etapów i protokoły','Role i uprawnienia'],support:'Priorytetowe wsparcie e-mail'},
  {name:'BUSINESS',subtitle:'Dla firm budowlanych i deweloperów',monthly:149,yearly:119,description:'Zaawansowane zarządzanie i pełne bezpieczeństwo danych',features:['Nieograniczona liczba inwestycji','Nieograniczeni użytkownicy','Wszystko z planu PRO','Zaawansowane uprawnienia i role','Integracje i API (wkrótce)','Indywidualne szkolenie','Dedykowany opiekun'],support:'Priorytetowe wsparcie telefoniczne'},
]

const comparison = [
  ['calendar','Aktywne inwestycje','1','do 5','bez limitu'],
  ['users','Nieograniczeni użytkownicy','✓','✓','✓'],
  ['folder','Dokumenty i plany','✓','✓','✓'],
  ['camera','Dziennik budowy (zdjęcia)','✓','✓','✓'],
  ['chat','Komunikator','✓','✓','✓'],
  ['calendar','Harmonogram i zadania','✓','✓','✓'],
  ['report','Budżet i koszty','✓','✓','✓'],
  ['report','Raporty','podstawowe','zaawansowane','zaawansowane'],
  ['document','Eksport danych','—','✓','✓'],
  ['users','Priorytetowe wsparcie','—','e-mail','telefoniczne'],
]

const faqs = [
  ['Czy mogę przetestować Investrę za darmo?','Tak. Każdy plan możesz testować przez 14 dni bez podawania danych karty.'],
  ['Czy wykonawca musi mieć własne konto?','Nie. Możesz zaprosić wykonawcę do swojej inwestycji i nadać mu odpowiedni zakres dostępu.'],
  ['Czy mogę zmienić plan w dowolnym momencie?','Tak. Plan możesz podnieść lub obniżyć w dowolnej chwili.'],
  ['Jakie są formy płatności?','Obsługujemy płatności kartą oraz przelewem dla planów firmowych.'],
  ['Czy mogę zrezygnować w każdej chwili?','Tak. Nie wymagamy umowy długoterminowej ani okresu wypowiedzenia.'],
  ['Czy moje dane są bezpieczne?','Tak. Dane są szyfrowane, regularnie archiwizowane i przechowywane zgodnie z RODO.'],
]
</script>

<template>
  <div class="pricing-page">
    <header class="site-header">
      <div class="header-inner">
        <LogoMark/>
        <nav class="desktop-nav"><RouterLink v-for="item in nav" :key="item[0]" :to="item[1]" :class="{active:item[0]==='Cennik'}">{{item[0]}}</RouterLink></nav>
        <div class="header-actions"><a href="#">Zaloguj się</a><a class="primary-button" href="#plans">Załóż konto</a></div>
        <button class="menu-button" :aria-expanded="menuOpen" aria-label="Otwórz menu" @click="menuOpen=!menuOpen">{{menuOpen?'×':'☰'}}</button>
      </div>
      <nav v-if="menuOpen" class="mobile-nav"><RouterLink v-for="item in nav" :key="item[0]" :to="item[1]" @click="menuOpen=false">{{item[0]}}</RouterLink></nav>
    </header>

    <main>
      <section class="hero page-shell">
        <div class="hero-copy">
          <h1>Prosty cennik.<br><span>Pełna kontrola Twojej<br>inwestycji.</span></h1>
          <p>Wybierz plan dopasowany do Twoich potrzeb. Bez ukrytych kosztów, bez długich umów. Zrezygnuj w dowolnym momencie.</p>
          <div class="hero-perks">
            <div><span><AppIcon name="calendar" :size="27"/></span><b>14 dni za darmo</b><small>Bez zobowiązań</small></div>
            <div><span>▭</span><b>Bez karty płatniczej</b><small>Podczas okresu próbnego</small></div>
            <div><span>×</span><b>Anulujesz w każdej chwili</b><small>Bez dodatkowych opłat</small></div>
          </div>
        </div>
        <div class="hero-visual"><DashboardMockup/></div>
      </section>

      <section id="plans" class="plans page-shell">
        <div class="billing-switch"><span :class="{active:!annual}">Rozliczenie miesięczne</span><button type="button" :class="{annual}" :aria-pressed="annual" @click="annual=!annual"><i></i></button><span :class="{active:annual}">Rozliczenie roczne <b>–20%</b></span></div>
        <div class="plan-grid">
          <article v-for="plan in plans" :key="plan.name" class="plan-card" :class="{featured:plan.featured}">
            <span v-if="plan.featured" class="popular">NAJCZĘŚCIEJ WYBIERANY</span>
            <h2>{{plan.name}}</h2><p class="subtitle">{{plan.subtitle}}</p>
            <div class="price"><b>{{annual?plan.yearly:plan.monthly}}</b><strong>zł</strong><span>/ miesiąc</span></div>
            <p class="description">{{plan.description}}</p>
            <a href="#" :class="plan.featured?'solid-button':'outline-button'">Wypróbuj za darmo</a>
            <ul><li v-for="item in plan.features" :key="item">{{item}}</li><li class="support">{{plan.support}}</li></ul>
          </article>
        </div>
      </section>

      <section class="custom-offer page-shell"><img :src="folderIcon" alt=""><div><h2>Potrzebujesz indywidualnej oferty dla swojej firmy?</h2><p>Skontaktuj się z nami, przygotujemy ofertę dopasowaną do skali Twojej działalności.</p></div><a class="outline-button" href="#">Skontaktuj się z nami</a></section>

      <section class="comparison page-shell">
        <div class="comparison-table">
          <div class="comparison-head"><h2>Porównaj plany</h2><div><b>START</b><small>{{annual?31:39}} zł / miesiąc</small></div><div><b>PRO</b><small>{{annual?63:79}} zł / miesiąc</small></div><div><b>BUSINESS</b><small>{{annual?119:149}} zł / miesiąc</small></div></div>
          <div v-for="row in comparison" :key="row[1]" class="comparison-row"><span><AppIcon :name="row[0]" :size="17"/>{{row[1]}}</span><b :class="{check:row[2]==='✓'}">{{row[2]}}</b><b :class="{check:row[3]==='✓'}">{{row[3]}}</b><b :class="{check:row[4]==='✓'}">{{row[4]}}</b></div>
        </div>
      </section>

      <section class="faq page-shell">
        <h2>Najczęściej zadawane pytania</h2>
        <div class="faq-grid"><details v-for="faq in faqs" :key="faq[0]"><summary>{{faq[0]}}<span>⌄</span></summary><p>{{faq[1]}}</p></details></div>
      </section>

      <section class="cta page-shell">
        <div><h2>Gotowy, aby uporządkować swoją budowę?</h2><p>Dołącz do Investry i zarządzaj inwestycją łatwiej niż kiedykolwiek.</p><ul><li>14 dni za darmo</li><li>Bez karty płatniczej</li><li>Anulujesz w każdej chwili</li></ul></div>
        <div class="cta-actions"><a class="white-button" href="#">Załóż darmowe konto</a><a class="cta-outline" href="#">Umów prezentację</a></div>
        <div class="cta-devices"><div><span>INVESTRA</span><i></i><i></i><i></i></div><b></b></div>
      </section>
    </main>

    <footer><div class="footer-grid page-shell"><div class="footer-brand"><LogoMark light/><p>Investra to platforma do zarządzania inwestycjami budowlanymi, która łączy inwestora i wykonawcę w jednym miejscu.</p><div class="socials"><span>f</span><span>in</span><span>▶</span></div></div><div v-for="group in [['Produkt','Funkcje','Dla inwestora','Dla wykonawcy','Cennik','Integracje'],['Firma','O nas','Blog','Kariera'],['Pomoc','Centrum pomocy','FAQ','Kontakt'],['Prawne','Regulamin','Polityka prywatności','RODO']]" :key="group[0]"><b>{{group[0]}}</b><a v-for="item in group.slice(1)" :key="item" href="#">{{item}}</a></div></div><div class="copyright page-shell">© 2024 Investra. Wszelkie prawa zastrzeżone.</div></footer>
  </div>
</template>

<style scoped>
.pricing-page{--blue:#0757d9;--ink:#071433;color:var(--ink);background:#fff}.page-shell{width:min(1180px,calc(100% - 40px));margin-inline:auto}.site-header{position:sticky;top:0;z-index:50;border-bottom:1px solid #eef2f7;background:#fffffff2;backdrop-filter:blur(14px)}.header-inner{height:72px;max-width:1440px;margin:auto;padding:0 48px;display:flex;align-items:center;justify-content:space-between;gap:26px}.desktop-nav{display:flex;gap:31px;font-size:13px;font-weight:700}.desktop-nav a{position:relative;color:var(--ink);text-decoration:none;white-space:nowrap}.desktop-nav a:hover,.desktop-nav a.active{color:var(--blue)}.desktop-nav a.active:after{content:"";position:absolute;left:0;right:0;bottom:-12px;height:2px;background:var(--blue)}.header-actions{display:flex;align-items:center;gap:24px;font-size:13px;font-weight:700}.header-actions a{text-decoration:none;color:var(--ink);white-space:nowrap}.primary-button,.solid-button{display:inline-flex;justify-content:center;padding:13px 24px;border-radius:6px;background:var(--blue);color:#fff!important;font-size:12px;font-weight:700;text-decoration:none;box-shadow:0 8px 18px #0757d929}.menu-button,.mobile-nav{display:none}.hero{height:410px;display:grid;grid-template-columns:41% 59%;align-items:center}.hero-copy{padding-top:12px}.hero h1{margin:0;font-size:40px;line-height:1.18;letter-spacing:-1.1px}.hero h1 span{color:#0756d1}.hero-copy>p{max-width:475px;margin:22px 0 0;color:#45536a;font-size:13px;line-height:1.75}.hero-perks{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:42px}.hero-perks div{display:grid;grid-template-rows:35px auto auto}.hero-perks span{width:28px;height:28px;display:grid;place-items:center;color:var(--blue);font-size:26px}.hero-perks b{font-size:10px}.hero-perks small{margin-top:5px;color:#5c687a;font-size:9px}.hero-visual{height:390px;padding-top:25px;transform:translateX(20px)}.hero-visual>div{transform:scale(.8);transform-origin:top left}.billing-switch{display:flex;align-items:center;justify-content:center;gap:18px;margin:0 0 24px;color:#58667a;font-size:11px;font-weight:600}.billing-switch span.active{color:var(--ink)}.billing-switch span b{color:#16a45b}.billing-switch button{width:38px;height:21px;padding:3px;border:0;border-radius:20px;background:#123a79;cursor:pointer}.billing-switch button i{display:block;width:15px;height:15px;border-radius:50%;background:#fff;transition:.2s}.billing-switch button.annual i{transform:translateX(17px)}.plan-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.plan-card{position:relative;min-height:465px;padding:29px 30px 23px;border:1px solid #d7e0ec;border-radius:8px;background:#fff}.plan-card.featured{border:2px solid var(--blue);padding:28px 29px 22px}.popular{position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:6px 20px;border-radius:20px;background:var(--blue);color:#fff;font-size:8px;font-weight:800;white-space:nowrap}.plan-card h2{margin:0;font-size:15px;letter-spacing:1px}.subtitle{min-height:30px;margin:2px 0;color:#44536b;font-size:10px}.price{display:flex;align-items:baseline;margin:6px 0}.price b{font-size:39px;line-height:1}.price strong{margin-left:8px;font-size:16px}.price span{margin-left:5px;color:#56647a;font-size:9px}.description{min-height:33px;margin:9px 0 16px;color:#39485f;font-size:10px;line-height:1.5}.plan-card>a{width:100%;box-sizing:border-box}.outline-button{display:inline-flex;justify-content:center;padding:10px 18px;border:1px solid #8498b4;border-radius:5px;color:var(--blue);font-size:10px;font-weight:700;text-decoration:none}.plan-card ul{margin:18px 0 0;padding:0;list-style:none}.plan-card li{position:relative;margin:8px 0;padding-left:24px;color:#35435a;font-size:10px}.plan-card li:before{content:"✓";position:absolute;left:0;width:14px;height:14px;display:grid;place-items:center;border-radius:50%;background:#e4f8eb;color:#149d51;font-size:9px;font-weight:800}.plan-card li.support:before{content:"—";background:#f0f2f5;color:#586477}.custom-offer{min-height:72px;margin-top:20px;padding:13px 30px;display:grid;grid-template-columns:70px 1fr auto;align-items:center;gap:16px;border:1px solid #d8e1ec;border-radius:8px}.custom-offer img{width:58px;height:58px}.custom-offer h2{margin:0;font-size:13px}.custom-offer p{margin:5px 0 0;color:#526077;font-size:10px}.comparison{padding-top:20px}.comparison-table{overflow:hidden;border:1px solid #d8e1ec;border-radius:8px}.comparison-head,.comparison-row{display:grid;grid-template-columns:1.4fr repeat(3,1fr);align-items:center}.comparison-head{min-height:62px}.comparison-head h2{margin:0;padding-left:26px;font-size:16px}.comparison-head div{text-align:center}.comparison-head b,.comparison-head small{display:block}.comparison-head b{font-size:12px}.comparison-head small{margin-top:3px;font-size:9px}.comparison-row{min-height:25px;border-top:1px solid #e4e9f0}.comparison-row>span{display:flex;align-items:center;gap:12px;padding-left:26px;font-size:10px}.comparison-row>span svg{color:var(--blue)}.comparison-row>b{height:100%;display:grid;place-items:center;border-left:1px solid #e4e9f0;font-size:9px;font-weight:500}.comparison-row>b.check{color:#159b4e;font-size:13px}.faq{padding:38px 8px 30px}.faq h2{margin:0 0 17px;font-size:18px}.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 35px}.faq details{border:1px solid #d8e1ec;border-radius:5px;margin-bottom:2px;background:#fff}.faq summary{padding:12px 18px;display:flex;justify-content:space-between;list-style:none;font-size:10px;font-weight:700;cursor:pointer}.faq summary::-webkit-details-marker{display:none}.faq summary span{font-size:16px}.faq details p{margin:0;padding:0 18px 14px;color:#526077;font-size:10px;line-height:1.6}.cta{min-height:145px;padding:24px 34px;display:grid;grid-template-columns:1.1fr .75fr 210px;align-items:center;gap:25px;overflow:hidden;border-radius:9px;background:linear-gradient(110deg,#073b78,#00244f);color:#fff}.cta h2{margin:0;font-size:22px}.cta p{margin:10px 0 20px;color:#d5e2f2;font-size:11px}.cta ul{display:flex;gap:25px;margin:0;padding:0;list-style:none}.cta li{position:relative;padding-left:22px;color:#d5e2f2;font-size:9px}.cta li:before{content:"✓";position:absolute;left:0;width:15px;height:15px;display:grid;place-items:center;border:1px solid #3ea1ff;border-radius:50%;color:#54bdff}.cta-actions a{display:block;margin:9px 0;padding:13px 18px;border-radius:5px;text-align:center;font-size:10px;font-weight:700;text-decoration:none}.white-button{background:#fff;color:var(--blue)}.cta-outline{border:1px solid #b8c9df;color:#fff}.cta-devices{position:relative;align-self:end;height:110px}.cta-devices>div{height:105px;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:9px;border:4px solid #1b2c42;border-radius:6px;background:#fff;transform:translateY(18px)}.cta-devices span{grid-column:1/-1;color:#183457;font-size:6px;font-weight:800}.cta-devices i{background:#e6eef9}.cta-devices b{position:absolute;right:2px;bottom:-5px;width:32px;height:67px;border:4px solid #1b2c42;border-radius:6px;background:#fff}footer{margin-top:14px;background:linear-gradient(120deg,#062c5a,#001832);color:#fff}.footer-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:52px;padding-top:34px;padding-bottom:24px}.footer-brand p{max-width:260px;color:#c1cee0;font-size:11px;line-height:1.6}.socials{display:flex;gap:9px;margin-top:15px}.socials span{width:28px;height:28px;display:grid;place-items:center;border:1px solid #50709a;border-radius:50%;font-size:9px}.footer-grid>div:not(.footer-brand)>b{display:block;margin-bottom:12px;font-size:12px}.footer-grid>div:not(.footer-brand)>a{display:block;margin:7px 0;color:#c1cee0;font-size:11px;text-decoration:none}.copyright{padding:12px 0 22px;border-top:1px solid #234669;color:#8ca0ba;text-align:center;font-size:10px}
@media(max-width:1100px){.header-inner{padding:0 24px}.desktop-nav{gap:16px}.header-actions{display:none}.hero h1{font-size:35px}.plan-card{padding-left:22px;padding-right:22px}.footer-grid{gap:25px}}
@media(max-width:820px){.desktop-nav{display:none}.menu-button{display:block;border:0;background:none;font-size:25px}.mobile-nav{display:block;padding:10px 20px 18px;border-top:1px solid #eef2f7;background:#fff}.mobile-nav a{display:block;padding:9px;color:var(--ink);font-weight:700;text-decoration:none}.hero{height:auto;display:block;padding-top:42px}.hero-visual{height:330px}.hero-visual>div{transform:scale(.7);transform-origin:top center}.plan-grid{grid-template-columns:1fr}.plan-card{min-height:auto}.custom-offer{grid-template-columns:60px 1fr}.custom-offer>a{grid-column:2}.comparison{overflow-x:auto}.comparison-table{min-width:720px}.cta{grid-template-columns:1fr 190px}.cta-devices{display:none}.footer-grid{grid-template-columns:1.5fr repeat(2,1fr)}}
@media(max-width:560px){.page-shell{width:calc(100% - 24px)}.header-inner{height:64px;padding:0 14px}.hero h1{font-size:33px}.hero-perks{grid-template-columns:1fr;margin-top:28px}.hero-perks div{grid-template-columns:40px 1fr;grid-template-rows:auto auto}.hero-perks span{grid-row:1/3}.hero-visual{height:250px;overflow:hidden}.hero-visual>div{width:155%;transform:scale(.57);transform-origin:top left}.billing-switch{gap:9px;font-size:9px}.custom-offer{padding:15px;grid-template-columns:50px 1fr}.custom-offer img{width:48px;height:48px}.custom-offer>a{grid-column:1/-1}.faq-grid{grid-template-columns:1fr}.cta{grid-template-columns:1fr;padding:24px 18px;text-align:center}.cta ul{justify-content:center;flex-wrap:wrap}.footer-grid{grid-template-columns:1fr 1fr;gap:30px}.footer-brand{grid-column:1/-1}}
</style>

