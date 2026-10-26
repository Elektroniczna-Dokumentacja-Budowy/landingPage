<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'
import DashboardMockup from './DashboardMockup.vue'
import LogoMark from './LogoMark.vue'
import folderIcon from '../assets/images/icons/01-folder.svg'
import calendarIcon from '../assets/images/icons/02-kalendarz.svg'
import chatIcon from '../assets/images/icons/03-rozmowa.svg'
import chartIcon from '../assets/images/icons/04-wykres.svg'
import cameraIcon from '../assets/images/icons/05-aparat.svg'
import shieldIcon from '../assets/images/icons/06-tarcza.svg'
import { useI18n } from '../i18n.js'

const { copy } = useI18n()
const page = computed(() => copy.value.investor)
const steps = computed(() => page.value.steps.map((item,index) => [[folderIcon,calendarIcon,cameraIcon,shieldIcon][index],...item]))
const tools = computed(() => page.value.tools.map((item,index) => [[folderIcon,calendarIcon,chartIcon,cameraIcon,chatIcon,chartIcon,shieldIcon,folderIcon][index],...item]))
</script>

<template>
  <div class="investor-page">
    <main>
      <section class="hero page-shell">
        <div class="hero-copy">
          <nav class="breadcrumbs"><RouterLink to="/">{{copy.homeLabel}}</RouterLink><span>›</span><span>{{copy.nav.investor}}</span></nav>
          <span class="eyebrow">{{page.eyebrow}}</span>
          <h1>{{page.title}}</h1>
          <p>{{page.intro}}</p>
          <ul><li v-for="item in page.heroBullets" :key="item">{{item}}</li></ul>
          <div class="hero-actions"><a class="primary-button" href="https://app.e-investra.pl/accounts/signup/">{{copy.signup}}</a><a class="secondary-button" href="#"><AppIcon name="calendar" :size="18"/>{{copy.bookDemo}}</a></div>
        </div>
        <div class="hero-visual"><DashboardMockup/><div class="plant"><i></i><i></i><i></i><i></i><span></span></div></div>
      </section>

      <section class="benefits section-shell">
        <h2>{{page.benefitsTitle}}</h2>
        <div class="benefit-grid"><article v-for="benefit in page.benefits" :key="benefit[1]"><span class="round-icon"><AppIcon :name="benefit[0]" :size="30"/></span><h3>{{benefit[1]}}</h3><p>{{benefit[2]}}</p></article></div>
      </section>

      <section class="process">
        <div class="section-shell"><h2>{{page.processTitle}}</h2><div class="steps"><article v-for="(step,i) in steps" :key="step[1]"><span class="step-number">{{i+1}}</span><div class="step-icon"><img :src="step[0]" alt=""></div><h3>{{step[1]}}</h3><p>{{step[2]}}</p><span v-if="i<steps.length-1" class="arrow">⟶</span></article></div></div>
      </section>

      <section class="tools section-shell">
        <h2>{{page.toolsTitle}}</h2>
        <div class="tools-grid"><article v-for="tool in tools" :key="tool[1]"><img :src="tool[0]" alt=""><div><h3>{{tool[1]}}</h3><p>{{tool[2]}}</p></div></article></div>
      </section>

      <section class="opinions section-shell">
        <h2>{{page.opinionsTitle}}</h2>
        <div class="opinion-grid"><article v-for="opinion in page.opinions" :key="opinion[2]"><span class="quote">“</span><p>{{opinion[1]}}</p><div class="author"><span>{{opinion[0]}}</span><div><b>{{opinion[2]}}</b><small>{{opinion[3]}}</small></div></div></article></div>
        <div class="dots"><i></i><i></i><i></i></div>
      </section>

      <section id="cta" class="cta page-shell">
        <div><h2>{{page.ctaTitle}}</h2><p>{{page.ctaText}}</p></div>
        <div class="cta-actions"><a class="primary-button" href="https://app.e-investra.pl/accounts/signup/">{{copy.signup}}</a><a class="secondary-button" href="#">{{copy.bookDemo}}</a></div>
        <div class="cta-devices"><div><span>INVESTRA</span><i></i><i></i><i></i></div><b></b></div>
      </section>
    </main>

    <footer><div class="footer-grid page-shell"><div class="footer-brand"><LogoMark light/><p>{{copy.footerText}}</p><div class="socials"><span>f</span><span>in</span><span>▶</span></div></div><div v-for="group in copy.footerGroups" :key="group[0]"><b>{{group[0]}}</b><a v-for="item in group.slice(1)" :key="item" href="#">{{item}}</a></div></div><div class="copyright page-shell">{{copy.copyright}}</div></footer>
  </div>
</template>

<style scoped>
.investor-page{--blue:#0757d9;--ink:#071433;color:var(--ink);background:#fff}.page-shell,.section-shell{width:min(1180px,calc(100% - 40px));margin-inline:auto}.site-header{position:sticky;top:0;z-index:50;border-bottom:1px solid #eef2f7;background:#fffffff2;backdrop-filter:blur(14px)}.header-inner{height:72px;max-width:1440px;margin:auto;padding:0 48px;display:flex;align-items:center;justify-content:space-between;gap:26px}.desktop-nav{display:flex;gap:31px;font-size:13px;font-weight:700}.desktop-nav a{position:relative;color:var(--ink);text-decoration:none;white-space:nowrap}.desktop-nav a:hover,.desktop-nav a.active{color:var(--blue)}.desktop-nav a.active:after{content:"";position:absolute;left:0;right:0;bottom:-12px;height:2px;background:var(--blue)}.header-actions{display:flex;align-items:center;gap:24px;font-size:13px;font-weight:700}.header-actions a{text-decoration:none;color:var(--ink);white-space:nowrap}.primary-button{display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:6px;background:var(--blue);color:#fff!important;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 8px 18px #0757d929}.secondary-button{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:12px 22px;border:1px solid #9baac0;border-radius:6px;background:#fff;color:var(--ink);font-size:13px;font-weight:700;text-decoration:none}.menu-button,.mobile-nav{display:none}.hero{height:540px;display:grid;grid-template-columns:41% 59%;align-items:center}.hero-copy{align-self:start;padding-top:26px;position:relative;z-index:2}.breadcrumbs{display:flex;gap:13px;margin-bottom:28px;color:#748198;font-size:12px}.breadcrumbs a{color:inherit;text-decoration:none}.eyebrow{display:inline-block;padding:5px 8px;border-radius:4px;background:#e9f1ff;color:var(--blue);font-size:10px;font-weight:800}.hero h1{margin:18px 0;font-size:43px;line-height:1.18;letter-spacing:-1.3px}.hero-copy>p{max-width:470px;margin:0;color:#4c5a70;font-size:14px;line-height:1.75}.hero-copy ul{margin:19px 0;padding:0;list-style:none}.hero-copy li{position:relative;margin:10px 0;padding-left:32px;font-size:13px}.hero-copy li:before{content:"✓";position:absolute;left:0;top:-2px;width:21px;height:21px;display:grid;place-items:center;border-radius:50%;background:#dcf6e7;color:#19a35e;font-weight:800}.hero-actions{display:flex;gap:14px;margin-top:22px}.hero-visual{position:relative;height:470px;padding-top:30px;transform:translateX(25px)}.hero-visual>div:first-child{transform:scale(.92);transform-origin:top left}.plant{position:absolute;right:-60px;bottom:30px;width:80px;height:190px}.plant span{position:absolute;bottom:0;left:15px;width:60px;height:80px;border-radius:5px 5px 20px 20px;background:linear-gradient(90deg,#ded9d0,#f7f4ef)}.plant i{position:absolute;bottom:60px;left:35px;width:17px;height:80px;border-radius:100% 0 100% 0;background:#5b8b19;transform:rotate(-28deg);transform-origin:bottom}.plant i:nth-child(2){left:38px;bottom:82px;transform:rotate(35deg);background:#78a62b}.plant i:nth-child(3){left:25px;bottom:96px;height:70px;transform:rotate(-45deg)}.plant i:nth-child(4){left:42px;bottom:112px;height:65px;transform:rotate(43deg)}h2{margin:0;text-align:center;font-size:26px;line-height:1.3}.benefits{padding:28px 0 32px}.benefit-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin-top:22px}.benefit-grid article{min-height:190px;padding:16px 15px;text-align:center;border:1px solid #dfe6ef;border-radius:10px;background:#fff;box-shadow:0 7px 18px #17335e09}.round-icon{width:62px;height:62px;margin:auto;display:grid;place-items:center;border-radius:50%;background:#eef3fc;color:var(--blue)}.benefit-grid h3{margin:13px 0 10px;font-size:13px}.benefit-grid p,.steps p{margin:0;color:#4f5c70;font-size:11px;line-height:1.65}.process{padding:30px 0 36px;background:linear-gradient(90deg,#fbfcff,#f5f8fd,#fbfcff)}.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:74px;margin-top:20px}.steps article{position:relative;text-align:center}.step-icon{width:96px;height:96px;margin:auto;display:grid;place-items:center;border-radius:50%;background:#eef3fc}.step-icon img{width:74px;height:74px}.step-number{position:absolute;top:0;left:calc(50% - 58px);width:25px;height:25px;display:grid;place-items:center;border:3px solid #fff;border-radius:50%;background:var(--blue);color:#fff;font-size:11px;font-weight:800;z-index:2}.steps h3{margin:12px 0 8px;font-size:13px}.arrow{position:absolute;top:38px;left:calc(100% + 17px);color:#a3b5ce;font-size:30px}.tools{padding:32px 0}.tools-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:22px}.tools-grid article{min-height:120px;display:grid;grid-template-columns:58px 1fr;align-items:center;gap:12px;padding:14px;border:1px solid #dce4ee;border-radius:9px;background:#fff}.tools-grid img{width:56px;height:56px}.tools-grid h3{margin:0 0 7px;font-size:13px}.tools-grid p{margin:0;color:#44536a;font-size:10px;line-height:1.6}.opinions{padding:18px 0 38px}.opinion-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:22px}.opinion-grid article{min-height:200px;padding:20px;border:1px solid #dce4ee;border-radius:9px;background:#fff}.quote{display:block;height:25px;color:#c9d8f1;font-family:Georgia,serif;font-size:43px;font-weight:800;line-height:1}.opinion-grid article>p{min-height:82px;margin:10px 0;color:#334157;font-size:11px;line-height:1.7}.author{display:flex;align-items:center;gap:10px}.author>span{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#c6d7e7,#536b83);color:#fff;font-size:10px;font-weight:800}.author b,.author small{display:block;font-size:10px}.author small{margin-top:3px;color:#67758a}.dots{display:flex;justify-content:center;gap:8px;margin-top:17px}.dots i{width:7px;height:7px;border:1px solid #a5b3c5;border-radius:50%}.dots i:first-child{border-color:var(--blue);background:var(--blue)}.cta{min-height:125px;margin-top:3px;padding:25px 35px;display:grid;grid-template-columns:1.1fr .85fr 200px;align-items:center;gap:24px;overflow:hidden;border-radius:10px;background:linear-gradient(110deg,#edf3ff,#f7faff)}.cta h2{text-align:left;color:#0751c7;font-size:20px}.cta p{margin:10px 0 0;color:#4a5970;font-size:11px}.cta-actions{display:flex;gap:12px}.cta-actions a{white-space:nowrap}.cta-devices{position:relative;align-self:end;height:110px}.cta-devices>div{height:100px;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:9px;border:4px solid #1b2c42;border-radius:6px;background:#fff;transform:translateY(17px)}.cta-devices span{grid-column:1/-1;font-size:6px;font-weight:800}.cta-devices i{background:#e6eef9}.cta-devices b{position:absolute;right:3px;bottom:-5px;width:30px;height:65px;border:4px solid #1b2c42;border-radius:6px;background:#fff}footer{margin-top:14px;background:linear-gradient(120deg,#062c5a,#001832);color:#fff}.footer-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:52px;padding-top:34px;padding-bottom:24px}.footer-brand p{max-width:260px;color:#c1cee0;font-size:11px;line-height:1.6}.socials{display:flex;gap:9px;margin-top:15px}.socials span{width:28px;height:28px;display:grid;place-items:center;border:1px solid #50709a;border-radius:50%;font-size:9px}.footer-grid>div:not(.footer-brand)>b{display:block;margin-bottom:12px;font-size:12px}.footer-grid>div:not(.footer-brand)>a{display:block;margin:7px 0;color:#c1cee0;font-size:11px;text-decoration:none}.copyright{padding:12px 0 22px;border-top:1px solid #234669;color:#8ca0ba;text-align:center;font-size:10px}
@media(max-width:1100px){.header-inner{padding:0 24px}.desktop-nav{gap:16px}.header-actions{display:none}.hero{grid-template-columns:45% 55%}.hero h1{font-size:38px}.hero-visual{transform:none}.benefit-grid{gap:10px}.steps{gap:35px}.arrow{left:calc(100% + 3px)}.footer-grid{gap:25px}}
@media(max-width:820px){.desktop-nav{display:none}.menu-button{display:block;border:0;background:none;font-size:25px}.mobile-nav{display:block;padding:10px 20px 18px;border-top:1px solid #eef2f7;background:#fff}.mobile-nav a{display:block;padding:9px;color:var(--ink);font-weight:700;text-decoration:none}.hero{height:auto;display:block;padding-top:25px}.hero-copy{padding:0}.hero-visual{height:390px;margin-top:15px}.hero-visual>div:first-child{transform:scale(.8);transform-origin:top center}.plant{display:none}.benefit-grid{grid-template-columns:repeat(2,1fr)}.benefit-grid article:last-child{grid-column:1/-1}.steps{grid-template-columns:repeat(2,1fr);row-gap:35px}.steps article:nth-child(2) .arrow{display:none}.tools-grid{grid-template-columns:repeat(2,1fr)}.opinion-grid{grid-template-columns:1fr}.opinion-grid article{min-height:auto}.opinion-grid article>p{min-height:auto}.cta{grid-template-columns:1fr 1fr}.cta-devices{display:none}.footer-grid{grid-template-columns:1.5fr repeat(2,1fr)}}
@media(max-width:560px){.page-shell,.section-shell{width:calc(100% - 24px)}.header-inner{height:64px;padding:0 14px}.hero h1{font-size:34px}.hero-actions{flex-direction:column}.hero-visual{height:280px;overflow:hidden}.hero-visual>div:first-child{width:150%;transform:scale(.62);transform-origin:top left}.benefit-grid,.steps,.tools-grid{grid-template-columns:1fr}.benefit-grid article:last-child{grid-column:auto}.steps{gap:28px}.arrow{display:none}.tools-grid article{min-height:105px}.cta{grid-template-columns:1fr;padding:24px 18px;text-align:center}.cta h2{text-align:center}.cta-actions{flex-direction:column}.footer-grid{grid-template-columns:1fr 1fr;gap:30px}.footer-brand{grid-column:1/-1}}
</style>

