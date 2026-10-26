<script setup>
import { computed } from 'vue'
import AppIcon from './components/AppIcon.vue'
import LogoMark from './components/LogoMark.vue'
import DashboardMockup from './components/DashboardMockup.vue'
import investorAudienceImage from './assets/images/dlaInvestora.png'
import contractorAudienceImage from './assets/images/dlaWykonawcy.png'
import { useI18n } from './i18n.js'

const { copy } = useI18n()
const page = computed(() => copy.value.home)
const audiences = computed(() => page.value.audiences.map((audience, index) => ({ ...audience, image: [investorAudienceImage, contractorAudienceImage][index], href: ['/dla-inwestora','/dla-wykonawcy'][index], theme: ['investor','contractor'][index] })))
</script>

<template>
  <main>
    <section class="min-h-[calc(100vh-72px)] overflow-hidden"><div class="page flex min-h-[calc(100vh-72px)] flex-col py-14 md:py-20"><div class="grid flex-1 items-center gap-12 lg:grid-cols-[.78fr_1.22fr]"><div><span class="inline-block rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-[11px] font-medium tracking-wide text-slate-500 shadow-sm">{{page.badge}}</span><h1 class="mt-6 max-w-[520px] text-[42px] font-extrabold leading-[1.08] tracking-tight md:text-[54px]">{{page.heroA}} <span class="text-brand">{{page.heroB}}</span></h1><p class="mt-6 max-w-[540px] text-[15px] font-medium leading-7 text-slate-700">{{page.heroText}}</p><div class="mt-8 flex flex-col gap-4 sm:flex-row"><a class="btn-primary !px-8" href="https://app.e-investra.pl/accounts/signup/">{{copy.signup}}</a><a class="btn-secondary !px-8" href="/funkcje"><span class="text-brand">▷</span> {{page.seeHow}}</a></div></div><DashboardMockup/></div><div class="mt-auto grid grid-cols-2 gap-7 pt-4 md:grid-cols-5"><div v-for="h in page.highlights" :key="h[1]" class="flex items-center gap-3"><span class="shrink-0"><AppIcon :name="h[0]" :size="28"/></span><b class="text-[13px] leading-5">{{h[1]}}</b></div></div></div></section>

    <section class="w-full bg-gradient-to-r from-slate-50 to-blue-50/40 py-8"><div class="page grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><div v-for="s in page.stats" :key="s[1]" class="flex items-center justify-center gap-4"><span class="shrink-0 text-brand"><AppIcon :name="s[0]" :size="31"/></span><div><b class="block text-2xl">{{s[1]}}</b><span class="text-[13px] leading-5 text-slate-600">{{s[2]}}</span></div></div></div></section>

    <section id="funkcje" class="py-10"><div class="page"><h2 class="section-title">{{page.practiceTitle}}</h2><p class="mt-2 text-center text-xs text-slate-500">{{page.practiceLead}}</p><div class="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <article class="practice-card"><h3>{{page.practice[0][0]}}</h3><p>{{page.practice[0][1]}}</p><div class="mt-7 space-y-4"><i v-for="(w,i) in [58,72,44,35,25]" :key="w" class="block h-2 rounded-full" :class="['bg-blue-500','bg-cyan-500','bg-emerald-500','bg-amber-400','bg-orange-500'][i]" :style="{width:w+'%',marginLeft:i*9+'%'}"></i></div></article>
      <article class="practice-card"><h3>{{page.practice[1][0]}}</h3><p>{{page.practice[1][1]}}</p><div class="mt-6 space-y-3"><div v-for="(x,i) in page.files" :key="x" class="flex items-center gap-2 border-b pb-2 text-[9px]"><span :class="['text-red-500','text-red-500','text-amber-500','text-green-600'][i]">▣</span>{{x}}<span class="ml-auto">›</span></div></div></article>
      <article class="practice-card"><h3>{{page.practice[2][0]}}</h3><p>{{page.practice[2][1]}}</p><div class="mx-auto mt-5 grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#0757d9_0_28%,#8bcbb0_28%_62%,#dce6ec_62%)]"><div class="grid h-16 w-16 place-items-center rounded-full bg-white text-center text-[9px] font-bold">432 600 {{copy.currency}}<br><small class="font-normal text-slate-400">500 000 {{copy.currency}}</small></div></div></article>
      <article class="practice-card"><h3>{{page.practice[3][0]}}</h3><p>{{page.practice[3][1]}}</p><div class="mt-6 grid grid-cols-2 gap-2"><div v-for="i in 4" :key="i" class="h-[72px] rounded-md bg-gradient-to-br from-amber-100 via-stone-300 to-slate-600"></div></div></article>
      <article class="practice-card"><h3>{{page.practice[4][0]}}</h3><p>{{page.practice[4][1]}}</p><div class="mt-5 space-y-4"><div v-for="(x,i) in page.people" :key="x" class="flex gap-2"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-100 text-[8px] font-bold">{{i+1}}</span><div class="text-[8px]"><b>{{x}}</b><p class="text-slate-400">{{page.newMessage}}</p></div></div></div><a class="mt-7 block text-[9px] font-bold text-brand">{{page.seeAll}} →</a></article>
    </div><div class="mt-8 text-center"><a class="btn-primary" href="/funkcje">{{page.allFeatures}}　→</a></div></div></section>

    <section class="page py-8"><div class="rounded-xl bg-slate-50/70 px-7 py-11"><h2 class="section-title !text-[30px] md:!text-[34px]">{{page.gainsTitle}}</h2><div class="mt-10 grid gap-10 md:grid-cols-3 lg:grid-cols-5"><article v-for="g in page.gains" :key="g[1]" class="text-center"><div class="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-blue-50 text-brand"><AppIcon :name="g[0]" :size="34"/></div><h3 class="mt-5 text-[15px] font-bold leading-6">{{g[1]}}</h3><p class="mt-3 text-[13px] leading-[22px] text-slate-600">{{g[2]}}</p></article></div>
      <h2 class="section-title mt-16 !text-[32px] md:!text-[36px]">{{page.audienceTitle}}</h2><div class="audience-grid"><article v-for="audience in audiences" :key="audience.title" class="audience-card" :class="audience.theme"><div class="audience-copy"><div class="audience-heading"><span class="audience-person-icon"><AppIcon name="users" :size="27"/></span><h3>{{ audience.title }}</h3></div><ul><li v-for="benefit in audience.benefits" :key="benefit"><span>✓</span>{{ benefit }}</li></ul><a :href="audience.href">{{page.learnMore}} <span>→</span></a></div><img :src="audience.image" :alt="audience.title"></article></div>
    </div></section>

    <section class="page py-5"><div class="rounded-xl bg-gradient-to-r from-[#002b63] to-[#001b42] px-8 py-12 text-white"><div class="grid gap-9 lg:grid-cols-[1fr_repeat(3,1.25fr)]"><div><h2 class="text-[32px] font-bold leading-[1.25]">{{page.opinionsTitle}}</h2><a href="#" class="mt-8 block text-sm font-semibold">{{page.allOpinions}}　→</a></div><article v-for="o in page.opinions" :key="o[1]" class="border-l border-blue-800 pl-7"><div class="text-5xl font-bold leading-5 text-blue-200/60">“</div><p class="mt-5 text-[15px] leading-7 text-blue-50">{{o[0]}}</p><div class="mt-6 flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-full bg-blue-100 text-xs font-bold text-navy">{{o[1][0]}}</span><div><b class="block text-[13px]">{{o[1]}}</b><span class="text-xs text-blue-200">{{o[2]}}</span></div></div></article></div></div></section>

    <section id="cta" class="page py-5"><div class="overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-white px-8 py-10"><div class="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr_.7fr]"><div><h2 class="text-[32px] font-extrabold leading-[1.3]">{{page.ctaTitle}}</h2><p class="mt-5 text-[15px] leading-6 text-slate-600">{{page.ctaText}}</p></div><div><div class="flex flex-col gap-3 sm:flex-row"><a href="https://app.e-investra.pl/accounts/signup/" class="btn-primary !px-8 !text-base">{{copy.signup}}</a><a href="#" class="btn-secondary !px-8 !text-base">{{copy.bookDemo}}　→</a></div><div class="mt-6 flex flex-wrap gap-5 text-xs leading-5 text-slate-600"><span v-for="item in copy.trial" :key="item">✓　{{item}}</span></div></div><div class="hidden h-32 rotate-[-2deg] rounded-xl border-[5px] border-slate-800 bg-white p-3 shadow-xl lg:block"><div class="grid h-full grid-cols-3 gap-2"><i v-for="i in 6" :key="i" class="rounded bg-blue-50"></i></div></div></div></div></section>
  </main>

  <footer class="mt-3 w-full bg-[#001d40] text-white"><div class="w-full px-5 py-12 sm:px-8 lg:px-12"><div class="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]"><div><LogoMark light/><p class="mt-5 max-w-[310px] text-sm leading-6 text-blue-100/70">{{page.footerText}}</p><div class="mt-5 flex gap-3"><span v-for="x in ['f','in','▶']" :key="x" class="grid h-9 w-9 place-items-center rounded-full border border-blue-500 text-xs">{{x}}</span></div></div><div v-for="group in copy.footerGroups" :key="group[0]"><b class="text-base">{{group[0]}}</b><a v-for="x in group.slice(1)" :key="x" href="#" class="mt-3 block text-sm text-blue-100/75">{{x}}</a></div></div><div class="mt-8 border-t border-blue-900 pt-5 text-center text-xs text-blue-200/50">{{copy.copyright}}</div></div></footer>
</template>

<style scoped>
main > section:first-child > .page { position: relative; }
@media (min-width: 1024px) {
  main > section:first-child > .page {
    top: 0;
    justify-content: center;
  }
  main > section:first-child > .page > .grid:first-child {
    flex: none;
    width: 100%;
  }
  main > section:first-child > .page > .grid:last-child {
    width: 100%;
    margin-top: 64px;
  }
}
.section-title {
  font-family: Poppins, ui-sans-serif, system-ui, sans-serif;
  font-size: 32px !important;
  font-weight: 700;
  line-height: 1.34;
}
@media (min-width: 768px) {
  .section-title { font-size: 48px !important; }
}
.practice-card { @apply min-h-[295px] rounded-xl border border-slate-200 bg-white p-5 shadow-soft; }
.practice-card h3 { @apply text-lg font-bold leading-7 text-brand; }
.practice-card > p { @apply mt-3 text-[15px] leading-6 text-slate-600; }
.audience-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 28px;
}
.audience-card {
  position: relative;
  min-height: 275px;
  overflow: hidden;
  border: 1px solid #cfe0fa;
  border-radius: 12px;
  background: linear-gradient(105deg, #eef5ff 0%, #f8fbff 60%, #e7effb 100%);
}
.audience-card.contractor {
  border-color: #ccebdc;
  background: linear-gradient(105deg, #f1fbf7 0%, #fbfefd 60%, #e9f5ee 100%);
}
.audience-copy {
  position: relative;
  z-index: 2;
  width: 59%;
  padding: 32px 0 24px 28px;
}
.audience-heading { display: flex; align-items: center; gap: 12px; }
.audience-person-icon {
  display: grid;
  width: 38px;
  height: 38px;
  flex: none;
  place-items: center;
  border-radius: 10px;
  color: #0757d9;
}
.audience-card.contractor .audience-person-icon { color: #15985d; }
.audience-heading h3 { margin: 0; color: #0757d9; font-size: 19px; line-height: 1.3; }
.audience-card.contractor .audience-heading h3 { color: #138554; }
.audience-copy ul { margin: 20px 0 0; padding: 0; list-style: none; }
.audience-copy li { display: flex; gap: 10px; margin: 11px 0; color: #33435b; font-size: 12px; line-height: 1.45; }
.audience-copy li span { flex: none; color: #0757d9; font-weight: 800; }
.audience-card.contractor .audience-copy li span { color: #15985d; }
.audience-copy > a { display: inline-flex; gap: 12px; margin-top: 8px; color: #0757d9; font-size: 11px; font-weight: 800; text-decoration: none; }
.audience-card.contractor .audience-copy > a { color: #138554; }
.audience-card > img {
  position: absolute;
  right: -2%;
  bottom: 0;
  width: 53%;
  height: 96%;
  object-fit: contain;
  object-position: right bottom;
}
@media (max-width: 900px) {
  .audience-grid { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .audience-card { min-height: 430px; }
  .audience-copy { width: auto; padding: 24px 22px; }
  .audience-card > img { right: 0; width: 58%; height: 52%; }
}
</style>
