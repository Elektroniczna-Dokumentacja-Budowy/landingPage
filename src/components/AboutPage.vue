<script setup>
import { ref } from 'vue'
import LogoMark from './LogoMark.vue'
import heroImage from '../assets/images/about-hero.png'
import investmentsIcon from '../assets/images/01-inwestycje.svg'
import documentsIcon from '../assets/images/01-dokumenty-i-plany.svg'
import calendarIcon from '../assets/images/02-kalendarz.svg'
import ideaIcon from '../assets/images/02-pomysl.svg'
import codeIcon from '../assets/images/03-kod.svg'
import shieldIcon from '../assets/images/03-tarcza.svg'
import developmentIcon from '../assets/images/04-rozwoj.svg'
import scalingIcon from '../assets/images/05-skalowanie.svg'
import usersIcon from '../assets/images/05-uzytkownicy.svg'
import handshakeIcon from '../assets/images/uscisk-dloni.svg'
import securityIcon from '../assets/images/bezpieczenstwo-danych.svg'

const menuOpen = ref(false)
const nav = [['Funkcje','/funkcje'],['Dla inwestora','/dla-inwestora'],['Dla wykonawcy','/dla-wykonawcy'],['Cennik','/cennik'],['Blog','/#blog'],['O nas','/o-nas'],['Kontakt','/kontakt']]
const stats = [[investmentsIcon,'250+','aktywnych inwestycji'],[usersIcon,'1200+','zadowolonych użytkowników'],[documentsIcon,'40 000+','przechowywanych dokumentów'],[calendarIcon,'2 lata','nieustannego rozwoju']]
const values = [
  [shieldIcon,'Zrozumienie branży','Sami mamy doświadczenie w budownictwie – wiemy, z czym mierzą się inwestorzy i wykonawcy.'],
  [usersIcon,'Skupienie na użytkowniku','Tworzymy rozwiązanie, z którego sami chcielibyśmy korzystać – proste, intuicyjne i praktyczne.'],
  [securityIcon,'Bezpieczeństwo danych','Twoje dane są bezpieczne – stosujemy nowoczesne technologie i wysokie standardy ochrony.'],
  [scalingIcon,'Ciągły rozwój','Słuchamy naszych klientów i nieustannie rozwijamy produkt, dodając nowe funkcje.'],
  [handshakeIcon,'Partnerstwo','Nie jesteśmy tylko dostawcą oprogramowania – jesteśmy Twoim partnerem w inwestycji.'],
]
const team = [
  ['MB','Michał B.','CEO & Co-Founder','male'],
  ['AK','Anna K.','COO & Co-Founder','female'],
  ['TR','Tomasz R.','CTO','male'],
  ['KW','Katarzyna W.','Product Manager','female'],
  ['PS','Piotr S.','Head of Development','male'],
  ['MŁ','Mateusz Ł.','Customer Success','male'],
]
const history = [
  [ideaIcon,'2021','Początek','Zaczęliśmy od rozmów z inwestorami i wykonawcami. Zidentyfikowaliśmy realne problemy w zarządzaniu budową.'],
  [codeIcon,'2022','Pierwsze wersje','Stworzyliśmy pierwsze prototypy i przetestowaliśmy je w prawdziwych projektach budowlanych.'],
  [developmentIcon,'2023','Rozwój platformy','Wprowadziliśmy kluczowe funkcje, zwiększyliśmy zespół i pozyskaliśmy pierwszych klientów.'],
  [scalingIcon,'2024+','Skalowanie','Rozwijamy Investrę, aby stać się najlepszym narzędziem do zarządzania inwestycjami w Europie.'],
]
</script>

<template>
  <div class="about-page">
    <header class="site-header">
      <div class="header-inner">
        <LogoMark/>
        <nav class="desktop-nav"><RouterLink v-for="item in nav" :key="item[0]" :to="item[1]" :class="{active:item[0]==='O nas'}">{{item[0]}}</RouterLink></nav>
        <div class="header-actions"><a href="#">Zaloguj się</a><a class="primary-button" href="#cta">Załóż konto</a></div>
        <button class="menu-button" :aria-expanded="menuOpen" aria-label="Otwórz menu" @click="menuOpen=!menuOpen">{{menuOpen?'×':'☰'}}</button>
      </div>
      <nav v-if="menuOpen" class="mobile-nav"><RouterLink v-for="item in nav" :key="item[0]" :to="item[1]" @click="menuOpen=false">{{item[0]}}</RouterLink></nav>
    </header>

    <main>
      <section class="hero page-shell">
        <div class="hero-copy">
          <nav class="breadcrumbs"><RouterLink to="/">Strona główna</RouterLink><span>›</span><span>O nas</span></nav>
          <span class="eyebrow">O INVESTRZE</span>
          <h1>Tworzymy technologię,<br>która <em>porządkuje</em> proces<br>budowy.</h1>
          <p>Investra powstała z potrzeby uproszczenia komunikacji i zarządzania w inwestycjach budowlanych. Łączymy inwestora, wykonawcę i cały zespół w jednym, bezpiecznym miejscu.</p>
          <div class="hero-actions"><a class="primary-button" href="#historia">Poznaj naszą historię</a><a class="secondary-button" href="/funkcje"><span>▷</span>Zobacz, jak działa Investra</a></div>
        </div>
        <div class="hero-image">
          <img :src="heroImage" alt="Nowoczesny dom w trakcie realizacji">
          <div class="floating-card journal"><b>Dziennik budowy</b><small>15 maj 2024, 10:24</small><i></i><i></i></div>
          <div class="floating-card message"><span>KB</span><p><b>Kierownik budowy</b><small>Proszę o akceptację zmian w projekcie.</small></p><time>10:24</time></div>
          <div class="floating-card invoice"><img :src="documentsIcon" alt=""><p><b>Faktura FV/05/2024</b><small>12 450,00 zł</small></p><em>Opłacona</em></div>
        </div>
      </section>

      <section class="stats page-shell"><div v-for="stat in stats" :key="stat[1]"><img :src="stat[0]" alt=""><p><b>{{stat[1]}}</b><small>{{stat[2]}}</small></p></div></section>

      <section class="mission page-shell">
        <article><h2>Nasza misja</h2><p>Pomagamy inwestorom i firmom budowlanym realizować inwestycje w sposób uporządkowany, przejrzysty i przewidywalny. Dostarczamy narzędzia, które oszczędzają czas, redukują koszty i budują zaufanie między wszystkimi uczestnikami procesu.</p></article>
        <div class="mission-mark"><span><i v-for="h in [25,42,59,45,31]" :key="h" :style="{height:h+'px'}"></i></span></div>
        <article><h2>Nasza wizja</h2><p>Chcemy stać się wiodącą platformą do zarządzania inwestycjami budowlanymi w Polsce i Europie, wyznaczając standard współpracy, transparentności i cyfryzacji w branży budowlanej.</p></article>
      </section>

      <section class="values page-shell">
        <h2>Co nas wyróżnia?</h2>
        <div class="values-grid"><article v-for="value in values" :key="value[1]"><img :src="value[0]" alt=""><h3>{{value[1]}}</h3><p>{{value[2]}}</p></article></div>
      </section>

      <section class="team page-shell">
        <h2>Nasz zespół</h2><p class="section-lead">Jesteśmy zespołem pasjonatów technologii i budownictwa.<br>Łączy nas wspólny cel – tworzyć narzędzia, które realnie ułatwiają pracę tysięcy ludzi każdego dnia.</p>
        <div class="team-grid"><article v-for="(person,i) in team" :key="person[1]"><div class="portrait" :class="[person[3],'portrait-'+i]"><span>{{person[0]}}</span></div><b>{{person[1]}}</b><small>{{person[2]}}</small></article></div>
      </section>

      <section id="historia" class="history page-shell">
        <h2>Nasza historia</h2>
        <div class="history-grid"><article v-for="(item,i) in history" :key="item[1]"><img :src="item[0]" alt=""><div><b>{{item[1]}}</b><h3>{{item[2]}}</h3><p>{{item[3]}}</p></div><i v-if="i<history.length-1">⟶</i></article></div>
      </section>

      <section id="cta" class="cta page-shell">
        <div><h2>Tworzymy Investrę dla Ciebie.</h2><p>Dołącz do inwestorów i wykonawców, którzy już budują lepiej.</p></div>
        <div class="cta-actions"><a class="white-button" href="#">Załóż darmowe konto</a><a class="cta-outline" href="#">Umów prezentację</a></div>
        <div class="cta-devices"><div><span>INVESTRA</span><i></i><i></i><i></i></div><b></b></div>
      </section>
    </main>

    <footer><div class="footer-grid page-shell"><div class="footer-brand"><LogoMark light/><p>Investra to platforma do zarządzania inwestycjami budowlanymi, która łączy inwestora i wykonawcę w jednym miejscu.</p><div class="socials"><span>f</span><span>in</span><span>▶</span></div></div><div v-for="group in [['Produkt','Funkcje','Dla inwestora','Dla wykonawcy','Cennik','Integracje'],['Firma','O nas','Blog','Kariera'],['Pomoc','Centrum pomocy','FAQ','Kontakt'],['Prawne','Regulamin','Polityka prywatności','RODO']]" :key="group[0]"><b>{{group[0]}}</b><a v-for="item in group.slice(1)" :key="item" href="#">{{item}}</a></div></div><div class="copyright page-shell">© 2024 Investra. Wszelkie prawa zastrzeżone.</div></footer>
  </div>
</template>

<style scoped>
.about-page{--blue:#0757d9;--ink:#071433;color:var(--ink);background:#fff}.page-shell{width:min(1180px,calc(100% - 40px));margin-inline:auto}.site-header{position:sticky;top:0;z-index:50;border-bottom:1px solid #eef2f7;background:#fffffff2;backdrop-filter:blur(14px)}.header-inner{height:72px;max-width:1440px;margin:auto;padding:0 48px;display:flex;align-items:center;justify-content:space-between;gap:26px}.desktop-nav{display:flex;gap:31px;font-size:13px;font-weight:700}.desktop-nav a{position:relative;color:var(--ink);text-decoration:none;white-space:nowrap}.desktop-nav a:hover,.desktop-nav a.active{color:var(--blue)}.desktop-nav a.active:after{content:"";position:absolute;left:0;right:0;bottom:-12px;height:2px;background:var(--blue)}.header-actions{display:flex;align-items:center;gap:24px;font-size:13px;font-weight:700}.header-actions a{text-decoration:none;color:var(--ink);white-space:nowrap}.primary-button{display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:6px;background:var(--blue);color:#fff!important;font-size:12px;font-weight:700;text-decoration:none;box-shadow:0 8px 18px #0757d929}.secondary-button{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:12px 22px;border:1px solid #9baac0;border-radius:6px;background:#fff;color:var(--ink);font-size:12px;font-weight:700;text-decoration:none}.secondary-button span{color:var(--blue)}.menu-button,.mobile-nav{display:none}.hero{height:430px;display:grid;grid-template-columns:43% 57%;overflow:hidden}.hero-copy{position:relative;z-index:3;padding-top:22px}.breadcrumbs{display:flex;gap:13px;margin-bottom:26px;color:#748198;font-size:12px}.breadcrumbs a{color:inherit;text-decoration:none}.eyebrow{display:inline-block;padding:5px 8px;border-radius:4px;background:#e9f1ff;color:var(--blue);font-size:9px;font-weight:800}.hero h1{margin:16px 0;font-size:39px;line-height:1.18;letter-spacing:-1.1px}.hero h1 em{color:var(--blue);font-style:normal}.hero-copy>p{max-width:470px;margin:0;color:#46556c;font-size:13px;line-height:1.75}.hero-actions{display:flex;gap:13px;margin-top:25px}.hero-image{position:relative;height:410px}.hero-image:before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#fff 0,transparent 26%)}.hero-image>img{width:100%;height:100%;object-fit:cover}.floating-card{position:absolute;z-index:2;border:1px solid #dce4ee;border-radius:8px;background:#fffffff2;box-shadow:0 10px 25px #142e5426;font-size:8px}.floating-card b,.floating-card small{display:block}.floating-card small{margin-top:4px;color:#6c798b}.journal{right:18px;top:165px;width:205px;height:67px;padding:13px}.journal i{position:absolute;right:38px;top:14px;width:34px;height:38px;border-radius:4px;background:linear-gradient(150deg,#84b6cd,#b9884f,#536a38)}.journal i:last-child{right:4px}.message{right:18px;top:240px;width:240px;padding:11px;display:flex;align-items:center;gap:9px}.message>span{width:28px;height:28px;display:grid;place-items:center;border-radius:50%;background:#dce5ee;font-size:8px;font-weight:800}.message p{flex:1;margin:0}.message time{color:#7c8999}.invoice{right:18px;top:310px;width:255px;padding:11px;display:flex;align-items:center;gap:10px}.invoice>svg{color:var(--blue)}.invoice p{flex:1;margin:0}.invoice em{padding:5px 8px;border-radius:10px;background:#e5f8ec;color:#169a50;font-size:7px;font-style:normal}.stats{min-height:90px;margin-top:16px;padding:18px 38px;display:grid;grid-template-columns:repeat(4,1fr);align-items:center;border-radius:8px;background:linear-gradient(90deg,#f7f9fd,#f1f5fc)}.stats>div{display:flex;align-items:center;justify-content:center;gap:14px}.stats>div>span{width:39px;height:39px;display:grid;place-items:center;border-radius:50%;background:#e8effb;color:var(--blue)}.stats p{margin:0}.stats b,.stats small{display:block}.stats b{font-size:23px}.stats small{margin-top:3px;color:#4f5d73;font-size:9px}.mission{padding:45px 45px 38px;display:grid;grid-template-columns:1fr 180px 1fr;align-items:center;gap:38px;text-align:center}.mission h2,.values h2,.team h2,.history h2{margin:0;font-size:25px}.mission p{margin:15px 0 0;color:#46556c;font-size:11px;line-height:1.8}.mission-mark{width:160px;height:160px;display:grid;place-items:center;border-radius:50%;background:radial-gradient(circle,#e1eafa 0 28%,#edf2fb 29% 50%,#f6f8fd 51%)}.mission-mark>span{height:70px;display:flex;align-items:end;gap:4px;color:var(--blue)}.mission-mark i{display:block;width:8px;border-radius:2px 2px 0 0;background:currentColor}.values{padding:28px 18px 30px;border-radius:9px;background:linear-gradient(100deg,#fbfcff,#f5f8fd,#fbfcff)}.values-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:25px}.values-grid article{min-height:175px;padding:17px 13px;text-align:center;border:1px solid #dce4ee;border-radius:8px;background:#fff}.values-grid article>span{width:55px;height:55px;margin:auto;display:grid;place-items:center;border-radius:50%;background:#eef3fc;color:var(--blue)}.values-grid h3{margin:13px 0 9px;font-size:11px}.values-grid p{margin:0;color:#46556c;font-size:9px;line-height:1.65}.team{padding:30px 20px 25px;text-align:center}.section-lead{margin:12px 0 20px;color:#4e5b70;font-size:10px;line-height:1.6}.team-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:16px}.team-grid article{overflow:hidden;padding-bottom:12px;border:1px solid #dce4ee;border-radius:8px;background:#fff}.portrait{height:160px;margin-bottom:10px;display:flex;align-items:flex-end;justify-content:center;overflow:hidden;background:linear-gradient(145deg,#d9e6e8,#99aaa5)}.portrait:before{content:"";width:95px;height:115px;border-radius:50% 50% 15px 15px;background:linear-gradient(#e8b990 0 32%,#f7f8f8 33%);box-shadow:0 8px 25px #132b4755}.portrait.female:before{background:linear-gradient(#aa7253 0 25%,#edbd99 26% 43%,#fafafa 44%)}.portrait-1{background:linear-gradient(145deg,#eef0e9,#b9c0ad)}.portrait-2{background:linear-gradient(145deg,#cad9db,#7a8f92)}.portrait-3{background:linear-gradient(145deg,#e6e2db,#b2aaa0)}.portrait-4{background:linear-gradient(145deg,#d7e2e4,#8fa1a3)}.portrait-5{background:linear-gradient(145deg,#dac9b8,#a89079)}.portrait>span{position:absolute;margin-bottom:55px;color:#1c3650;font-size:15px;font-weight:800}.team-grid b,.team-grid small{display:block;font-size:10px}.team-grid small{margin-top:3px;color:#58667b;font-size:8px}.history{padding:25px 18px 43px}.history>h2{text-align:center}.history-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:45px;margin-top:27px}.history-grid article{position:relative;display:grid;grid-template-columns:52px 1fr;gap:12px}.history-grid article>span{width:48px;height:48px;display:grid;place-items:center;border-radius:50%;background:#edf3fd;color:var(--blue)}.history-grid b{font-size:14px}.history-grid h3{margin:5px 0 10px;font-size:11px}.history-grid p{margin:0;color:#46556c;font-size:9px;line-height:1.65}.history-grid article>i{position:absolute;right:-35px;top:13px;color:#9db0c9;font-size:23px;font-style:normal}.cta{min-height:155px;padding:27px 34px;display:grid;grid-template-columns:1.15fr .7fr 240px;align-items:center;gap:25px;overflow:hidden;border-radius:9px;background:linear-gradient(110deg,#0754d7,#003b9a);color:#fff}.cta h2{margin:0;font-size:24px}.cta p{margin:10px 0 0;color:#e1ebf9;font-size:11px}.cta-actions{display:flex;gap:10px}.cta-actions a{padding:13px 18px;border-radius:5px;text-align:center;font-size:10px;font-weight:700;text-decoration:none;white-space:nowrap}.white-button{background:#fff;color:var(--blue)}.cta-outline{border:1px solid #b8c9df;color:#fff}.cta-devices{position:relative;align-self:end;height:120px}.cta-devices>div{height:115px;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:9px;border:4px solid #1b2c42;border-radius:6px;background:#fff;transform:translateY(18px)}.cta-devices span{grid-column:1/-1;color:#183457;font-size:6px;font-weight:800}.cta-devices i{background:#e6eef9}.cta-devices b{position:absolute;right:2px;bottom:-5px;width:34px;height:73px;border:4px solid #1b2c42;border-radius:6px;background:#fff}footer{margin-top:14px;background:linear-gradient(120deg,#062c5a,#001832);color:#fff}.footer-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:52px;padding-top:34px;padding-bottom:24px}.footer-brand p{max-width:260px;color:#c1cee0;font-size:11px;line-height:1.6}.socials{display:flex;gap:9px;margin-top:15px}.socials span{width:28px;height:28px;display:grid;place-items:center;border:1px solid #50709a;border-radius:50%;font-size:9px}.footer-grid>div:not(.footer-brand)>b{display:block;margin-bottom:12px;font-size:12px}.footer-grid>div:not(.footer-brand)>a{display:block;margin:7px 0;color:#c1cee0;font-size:11px;text-decoration:none}.copyright{padding:12px 0 22px;border-top:1px solid #234669;color:#8ca0ba;text-align:center;font-size:10px}
.invoice>img{width:32px;height:32px}.stats>div>img{width:42px;height:42px;flex:none}.values-grid article>img{width:55px;height:55px;margin:auto;display:block}.history-grid article>img{width:48px;height:48px}@media(max-width:1100px){.header-inner{padding:0 24px}.desktop-nav{gap:16px}.header-actions{display:none}.hero h1{font-size:34px}.mission{padding-inline:20px}.values-grid{gap:8px}.team-grid{gap:8px}.portrait{height:135px}.footer-grid{gap:25px}}
@media(max-width:820px){.desktop-nav{display:none}.menu-button{display:block;border:0;background:none;font-size:25px}.mobile-nav{display:block;padding:10px 20px 18px;border-top:1px solid #eef2f7;background:#fff}.mobile-nav a{display:block;padding:9px;color:var(--ink);font-weight:700;text-decoration:none}.hero{height:auto;display:block;padding-top:24px}.hero-image{height:390px;margin-top:20px}.stats{grid-template-columns:repeat(2,1fr);gap:22px}.mission{grid-template-columns:1fr 130px 1fr}.mission-mark{width:120px;height:120px}.values-grid{grid-template-columns:repeat(2,1fr)}.values-grid article:last-child{grid-column:1/-1}.team-grid{grid-template-columns:repeat(3,1fr)}.portrait{height:160px}.history-grid{grid-template-columns:repeat(2,1fr);row-gap:30px}.history-grid article:nth-child(2) i{display:none}.cta{grid-template-columns:1fr 210px}.cta-devices{display:none}.footer-grid{grid-template-columns:1.5fr repeat(2,1fr)}}
@media(max-width:560px){.page-shell{width:calc(100% - 24px)}.header-inner{height:64px;padding:0 14px}.hero h1{font-size:32px}.hero-actions{flex-direction:column}.hero-image{height:310px}.floating-card{transform:scale(.8);transform-origin:right}.journal{top:105px}.message{top:168px}.invoice{top:228px}.stats{padding:18px 12px}.stats b{font-size:19px}.mission{grid-template-columns:1fr}.mission-mark{grid-row:2;margin:auto}.values-grid{grid-template-columns:1fr}.values-grid article:last-child{grid-column:auto}.team-grid{grid-template-columns:repeat(2,1fr)}.portrait{height:145px}.history-grid{grid-template-columns:1fr}.history-grid article>i{display:none}.cta{grid-template-columns:1fr;padding:24px 18px;text-align:center}.cta-actions{flex-direction:column}.footer-grid{grid-template-columns:1fr 1fr;gap:30px}.footer-brand{grid-column:1/-1}}
</style>

