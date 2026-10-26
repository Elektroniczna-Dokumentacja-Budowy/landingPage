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
const page = computed(() => copy.value.contractor)
const workflow = computed(() => page.value.workflow.map((item,index) => [[chatIcon,calendarIcon,cameraIcon,shieldIcon][index],...item]))
const tools = computed(() => page.value.tools.map((item,index) => [[calendarIcon,chatIcon,cameraIcon,folderIcon,calendarIcon,chartIcon,chatIcon,folderIcon][index],...item]))
</script>

<template>
  <div class="contractor-page">
    <main>
      <section class="hero page-shell">
        <div class="hero-copy">
          <nav class="breadcrumbs"><RouterLink to="/">{{copy.homeLabel}}</RouterLink><span>›</span><span>{{copy.nav.contractor}}</span></nav>
          <span class="eyebrow">{{page.eyebrow}}</span>
          <h1>{{page.title}}</h1>
          <p>{{page.intro}}</p>
          <ul><li v-for="item in page.heroBullets" :key="item">{{item}}</li></ul>
          <div class="hero-actions"><a class="primary-button" href="https://app.e-investra.pl/accounts/signup/">{{copy.signup}}</a><a class="secondary-button" href="#"><AppIcon name="calendar" :size="18"/>{{copy.bookDemo}}</a></div>
        </div>
        <div class="hero-visual"><DashboardMockup/></div>
      </section>

      <section class="benefits section-shell">
        <h2>{{page.benefitsTitle}}</h2>
        <div class="benefit-grid"><article v-for="benefit in page.benefits" :key="benefit[1]"><span class="round-icon"><AppIcon :name="benefit[0]" :size="31"/></span><h3>{{benefit[1]}}</h3><p>{{benefit[2]}}</p></article></div>
      </section>

      <section class="workflow">
        <div class="section-shell"><h2>{{page.workflowTitle}}</h2><div class="workflow-grid"><article v-for="(step,i) in workflow" :key="step[1]"><div class="step-visual"><span>{{i+1}}</span><img :src="step[0]" alt=""></div><div><h3>{{step[1]}}</h3><p>{{step[2]}}</p></div><i v-if="i<workflow.length-1">⟶</i></article></div></div>
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
        <div><h2>{{page.ctaTitle}}</h2><p>{{page.ctaText}}</p><ul><li v-for="item in copy.trial" :key="item">{{item}}</li></ul></div>
        <div class="cta-actions"><a class="white-button" href="https://app.e-investra.pl/accounts/signup/">{{copy.signup}}</a><a class="outline-button" href="#">{{copy.bookDemo}}&nbsp; →</a></div>
        <div class="cta-devices"><div><span>INVESTRA</span><i></i><i></i><i></i></div><b></b></div>
      </section>
    </main>

    <footer><div class="footer-grid page-shell"><div class="footer-brand"><LogoMark light/><p>{{copy.footerText}}</p><div class="socials"><span>f</span><span>in</span><span>▶</span></div></div><div v-for="group in copy.footerGroups" :key="group[0]"><b>{{group[0]}}</b><a v-for="item in group.slice(1)" :key="item" href="#">{{item}}</a></div></div><div class="copyright page-shell">{{copy.copyright}}</div></footer>
  </div>
</template>

<style scoped>
.contractor-page{--blue:#0757d9;--ink:#071433;color:var(--ink);background:#fff}.page-shell,.section-shell{width:min(1180px,calc(100% - 40px));margin-inline:auto}.site-header{position:sticky;top:0;z-index:50;border-bottom:1px solid #eef2f7;background:#fffffff2;backdrop-filter:blur(14px)}.header-inner{height:72px;max-width:1440px;margin:auto;padding:0 48px;display:flex;align-items:center;justify-content:space-between;gap:26px}.desktop-nav{display:flex;gap:31px;font-size:13px;font-weight:700}.desktop-nav a{position:relative;color:var(--ink);text-decoration:none;white-space:nowrap}.desktop-nav a:hover,.desktop-nav a.active{color:var(--blue)}.desktop-nav a.active:after{content:"";position:absolute;left:0;right:0;bottom:-12px;height:2px;background:var(--blue)}.header-actions{display:flex;align-items:center;gap:24px;font-size:13px;font-weight:700}.header-actions a{text-decoration:none;color:var(--ink);white-space:nowrap}.primary-button{display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:6px;background:var(--blue);color:#fff!important;font-size:13px;font-weight:700;text-decoration:none;box-shadow:0 8px 18px #0757d929}.secondary-button{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:12px 22px;border:1px solid #9baac0;border-radius:6px;background:#fff;color:var(--ink);font-size:13px;font-weight:700;text-decoration:none}.menu-button,.mobile-nav{display:none}.hero{height:540px;display:grid;grid-template-columns:41% 59%;align-items:center}.hero-copy{align-self:start;padding-top:26px;position:relative;z-index:2}.breadcrumbs{display:flex;gap:13px;margin-bottom:28px;color:#748198;font-size:12px}.breadcrumbs a{color:inherit;text-decoration:none}.eyebrow{display:inline-block;padding:5px 8px;border-radius:4px;background:#e9f1ff;color:var(--blue);font-size:10px;font-weight:800}.hero h1{margin:18px 0;font-size:41px;line-height:1.2;letter-spacing:-1.2px}.hero-copy>p{max-width:470px;margin:0;color:#4c5a70;font-size:14px;line-height:1.75}.hero-copy ul{margin:17px 0;padding:0;list-style:none}.hero-copy li{position:relative;margin:8px 0;padding-left:32px;font-size:12px}.hero-copy li:before{content:"✓";position:absolute;left:0;top:-2px;width:21px;height:21px;display:grid;place-items:center;border-radius:50%;background:#dcf6e7;color:#19a35e;font-weight:800}.hero-actions{display:flex;gap:14px;margin-top:20px}.hero-visual{height:475px;padding-top:28px;transform:translateX(25px)}.hero-visual>div{transform:scale(.92);transform-origin:top left}h2{margin:0;text-align:center;font-size:25px;line-height:1.3}.benefits{padding:28px 0 35px}.benefit-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:22px}.benefit-grid article{min-height:205px;padding:16px 14px;text-align:center;border:1px solid #dfe6ef;border-radius:9px;background:#fff;box-shadow:0 7px 18px #17335e09}.round-icon{width:62px;height:62px;margin:auto;display:grid;place-items:center;border-radius:50%;background:#eef3fc;color:var(--blue)}.benefit-grid h3{max-width:150px;margin:13px auto 10px;font-size:13px;line-height:1.4}.benefit-grid p,.workflow-grid p{margin:0;color:#4f5c70;font-size:10px;line-height:1.7}.workflow{padding:28px 0 37px;background:linear-gradient(90deg,#fbfcff,#f5f8fd,#fbfcff)}.workflow-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;margin-top:24px}.workflow-grid article{position:relative;display:grid;grid-template-columns:82px 1fr;align-items:center;gap:12px}.step-visual{position:relative;width:82px;height:82px;display:grid;place-items:center;border-radius:50%;background:#edf3fd}.step-visual img{width:64px;height:64px}.step-visual span{position:absolute;top:-3px;left:-3px;width:24px;height:24px;display:grid;place-items:center;border:3px solid #fff;border-radius:50%;background:var(--blue);color:#fff;font-size:10px;font-weight:800}.workflow-grid h3{margin:0 0 8px;font-size:12px;line-height:1.45}.workflow-grid article>i{position:absolute;right:-24px;top:31px;color:#a3b5ce;font-size:24px;font-style:normal}.tools{padding:30px 0}.tools-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin-top:21px}.tools-grid article{min-height:116px;display:grid;grid-template-columns:58px 1fr;align-items:center;gap:12px;padding:14px;border:1px solid #dce4ee;border-radius:9px;background:#fff}.tools-grid img{width:56px;height:56px}.tools-grid h3{margin:0 0 7px;font-size:12px}.tools-grid p{margin:0;color:#44536a;font-size:10px;line-height:1.6}.opinions{padding:17px 0 34px}.opinion-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:21px}.opinion-grid article{min-height:195px;padding:19px;border:1px solid #dce4ee;border-radius:9px;background:#fff}.quote{display:block;height:24px;color:#c9d8f1;font-family:Georgia,serif;font-size:43px;font-weight:800;line-height:1}.opinion-grid article>p{min-height:78px;margin:10px 0;color:#334157;font-size:10px;line-height:1.7}.author{display:flex;align-items:center;gap:10px}.author>span{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#e6c8a9,#2a455e);color:#fff;font-size:10px;font-weight:800}.author b,.author small{display:block;font-size:10px}.author small{margin-top:3px;color:#67758a}.dots{display:flex;justify-content:center;gap:8px;margin-top:16px}.dots i{width:7px;height:7px;border:1px solid #a5b3c5;border-radius:50%}.dots i:first-child{border-color:var(--blue);background:var(--blue)}.cta{min-height:170px;margin-top:3px;padding:27px 35px;display:grid;grid-template-columns:1.1fr .55fr 260px;align-items:center;gap:28px;overflow:hidden;border-radius:10px;background:linear-gradient(110deg,#073b78,#00244f);color:#fff}.cta h2{text-align:left;font-size:24px}.cta p{margin:10px 0 20px;color:#d5e2f2;font-size:12px}.cta ul{display:flex;gap:25px;margin:0;padding:0;list-style:none}.cta li{position:relative;padding-left:22px;color:#d5e2f2;font-size:9px}.cta li:before{content:"✓";position:absolute;left:0;width:15px;height:15px;display:grid;place-items:center;border:1px solid #3ea1ff;border-radius:50%;color:#54bdff}.cta-actions a{display:block;margin:9px 0;padding:13px 18px;border-radius:5px;text-align:center;font-size:11px;font-weight:700;text-decoration:none}.white-button{background:#fff;color:var(--blue)}.outline-button{border:1px solid #b8c9df;color:#fff}.cta-devices{position:relative;align-self:end;height:130px}.cta-devices>div{height:125px;display:grid;grid-template-columns:repeat(3,1fr);gap:4px;padding:10px;border:4px solid #1b2c42;border-radius:7px;background:#fff;transform:translateY(18px)}.cta-devices span{grid-column:1/-1;color:#183457;font-size:6px;font-weight:800}.cta-devices i{background:#e6eef9}.cta-devices b{position:absolute;right:4px;bottom:-6px;width:37px;height:78px;border:4px solid #1b2c42;border-radius:7px;background:#fff}footer{margin-top:14px;background:linear-gradient(120deg,#062c5a,#001832);color:#fff}.footer-grid{display:grid;grid-template-columns:1.4fr repeat(4,1fr);gap:52px;padding-top:34px;padding-bottom:24px}.footer-brand p{max-width:260px;color:#c1cee0;font-size:11px;line-height:1.6}.socials{display:flex;gap:9px;margin-top:15px}.socials span{width:28px;height:28px;display:grid;place-items:center;border:1px solid #50709a;border-radius:50%;font-size:9px}.footer-grid>div:not(.footer-brand)>b{display:block;margin-bottom:12px;font-size:12px}.footer-grid>div:not(.footer-brand)>a{display:block;margin:7px 0;color:#c1cee0;font-size:11px;text-decoration:none}.copyright{padding:12px 0 22px;border-top:1px solid #234669;color:#8ca0ba;text-align:center;font-size:10px}
@media(max-width:1100px){.header-inner{padding:0 24px}.desktop-nav{gap:16px}.header-actions{display:none}.hero{grid-template-columns:45% 55%}.hero h1{font-size:37px}.hero-visual{transform:none}.workflow-grid{gap:16px}.workflow-grid article{grid-template-columns:67px 1fr}.step-visual{width:67px;height:67px}.step-visual img{width:54px;height:54px}.workflow-grid article>i{display:none}.footer-grid{gap:25px}}
@media(max-width:820px){.desktop-nav{display:none}.menu-button{display:block;border:0;background:none;font-size:25px}.mobile-nav{display:block;padding:10px 20px 18px;border-top:1px solid #eef2f7;background:#fff}.mobile-nav a{display:block;padding:9px;color:var(--ink);font-weight:700;text-decoration:none}.hero{height:auto;display:block;padding-top:25px}.hero-copy{padding:0}.hero-visual{height:390px;margin-top:15px}.hero-visual>div{transform:scale(.8);transform-origin:top center}.benefit-grid{grid-template-columns:repeat(2,1fr)}.benefit-grid article:last-child{grid-column:1/-1}.workflow-grid,.tools-grid{grid-template-columns:repeat(2,1fr)}.opinion-grid{grid-template-columns:1fr}.opinion-grid article{min-height:auto}.opinion-grid article>p{min-height:auto}.cta{grid-template-columns:1fr 200px}.cta-devices{display:none}.cta ul{flex-wrap:wrap}.footer-grid{grid-template-columns:1.5fr repeat(2,1fr)}}
@media(max-width:560px){.page-shell,.section-shell{width:calc(100% - 24px)}.header-inner{height:64px;padding:0 14px}.hero h1{font-size:33px}.hero-actions{flex-direction:column}.hero-visual{height:280px;overflow:hidden}.hero-visual>div{width:150%;transform:scale(.62);transform-origin:top left}.benefit-grid,.workflow-grid,.tools-grid{grid-template-columns:1fr}.benefit-grid article:last-child{grid-column:auto}.tools-grid article{min-height:105px}.cta{grid-template-columns:1fr;padding:24px 18px;text-align:center}.cta h2{text-align:center}.cta ul{justify-content:center}.footer-grid{grid-template-columns:1fr 1fr;gap:30px}.footer-brand{grid-column:1/-1}}
</style>

<style scoped>
.benefits { padding-top: 96px; }
@media (max-width: 820px) {
  .benefits { padding-top: 64px; }
}
</style>

