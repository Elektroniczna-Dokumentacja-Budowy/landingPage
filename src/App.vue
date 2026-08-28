<script setup>
import { ref } from 'vue'
import AppIcon from './components/AppIcon.vue'
import LogoMark from './components/LogoMark.vue'
import DashboardMockup from './components/DashboardMockup.vue'

const menuOpen = ref(false)
const nav = ['Funkcje','Dla inwestora','Dla wykonawcy','Cennik','Blog','O nas','Kontakt']
const highlights = [['phone','Dostęp z telefonu i komputera'],['folder','Wszystkie dokumenty w jednym miejscu'],['camera','Nieograniczona dokumentacja zdjęciowa'],['users','Współpraca całego zespołu'],['shield','Bezpieczne dane i kopie zapasowe']]
const stats = [['document','250+','Aktywnych inwestycji'],['users','1200+','Zadowolonych użytkowników'],['camera','40 000+','Przechowywanych dokumentów'],['shield','100%','Danych w Polsce (RODO)']]
const gains = [['clock','Oszczędzasz czas','Mniej telefonów i spotkań. Wszystkie informacje w jednym miejscu.'],['folder','Masz porządek','Dokumenty, ustalenia i zdjęcia zawsze uporządkowane i dostępne.'],['shield','Masz dowód wykonanych prac','Zdjęcia i raporty potwierdzają każdy etap – bez sporów.'],['document','Kontrolujesz koszty','Budżet zawsze pod kontrolą, bez nieoczekiwanych wydatków.'],['users','Budujesz zaufanie','Klient widzi postępy i ma pełen dostęp do informacji.']]
const audiences = [
  ['Dla inwestora indywidualnego',['Pełna kontrola inwestycji','Dostęp online z każdego miejsca','Dokumentacja zawsze pod ręką','Mniej stresu, więcej spokoju'],'blue','IN'],
  ['Dla firm wykonawczych',['Profesjonalna obsługa klienta','Mniej telefonów i nieporozumień','Porządek w dokumentacji','Większe zaufanie klientów'],'green','FW'],
  ['Dla kierownika budowy',['Uporządkowana dokumentacja','Łatwa komunikacja z zespołem','Raporty i dziennik budowy','Wszystko zgodnie z przepisami'],'orange','KB'],
]
const opinions = [['„Dzięki Investrze mam pełną kontrolę nad budową domu, nawet będąc za granicą. Wszystko pod ręką.”','Anna K.','Inwestor'],['„Mniej telefonów od klientów, porządek w dokumentach i szybkie raporty. Nie wyobrażam sobie pracy bez Investry.”','Marek P.','Wykonawca'],['„Dziennik budowy i zdjęcia uporządkowane, a raporty robią się praktycznie same.”','Piotr S.','Kierownik budowy']]
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur"><div class="flex h-[72px] w-full items-center justify-between px-5 sm:px-8 lg:px-12"><LogoMark/><nav class="hidden items-center gap-8 text-[15px] font-semibold lg:flex"><a v-for="x in nav" :key="x" href="#funkcje" class="hover:text-brand">{{x}}</a></nav><div class="hidden items-center gap-5 text-[14px] font-bold sm:flex"><a class="text-slate-500" href="#">Zaloguj się</a><a class="btn-primary !px-5 !py-3" href="#cta">Załóż darmowe konto</a></div><button class="text-2xl lg:hidden" @click="menuOpen=!menuOpen" aria-label="Otwórz menu">☰</button></div><nav v-if="menuOpen" class="w-full border-t bg-white px-6 py-4 text-base lg:hidden"><a v-for="x in nav" :key="x" href="#funkcje" @click="menuOpen=false" class="block py-2 font-semibold">{{x}}</a></nav></header>

  <main>
    <section class="min-h-[calc(100vh-72px)] overflow-hidden"><div class="page flex min-h-[calc(100vh-72px)] flex-col py-14 md:py-20"><div class="grid flex-1 items-center gap-12 lg:grid-cols-[.78fr_1.22fr]"><div><span class="inline-block rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-[11px] font-medium tracking-wide text-slate-500 shadow-sm">PLATFORMA DO ZARZĄDZANIA BUDOWĄ</span><h1 class="mt-6 max-w-[520px] text-[42px] font-extrabold leading-[1.08] tracking-tight md:text-[54px]">Wszystko o Twojej budowie <span class="text-brand">w jednym miejscu.</span></h1><p class="mt-6 max-w-[540px] text-[15px] font-medium leading-7 text-slate-700">Komunikacja, dokumenty, harmonogram, koszty i raporty – dla inwestora i wykonawcy. Pełna kontrola inwestycji od pierwszej wyceny do odbioru.</p><div class="mt-8 flex flex-col gap-4 sm:flex-row"><a class="btn-primary !px-8" href="#cta">Załóż darmowe konto</a><a class="btn-secondary !px-8" href="#funkcje"><span class="text-brand">▷</span> Zobacz, jak to działa</a></div></div><DashboardMockup/></div><div class="mt-auto grid grid-cols-2 gap-7 pt-4 md:grid-cols-5"><div v-for="h in highlights" :key="h[1]" class="flex items-center gap-3"><span class="shrink-0"><AppIcon :name="h[0]" :size="28"/></span><b class="text-[13px] leading-5">{{h[1]}}</b></div></div></div></section>

    <section class="w-full bg-gradient-to-r from-slate-50 to-blue-50/40 py-8"><div class="page grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><div v-for="s in stats" :key="s[1]" class="flex items-center justify-center gap-4"><span class="shrink-0 text-brand"><AppIcon :name="s[0]" :size="31"/></span><div><b class="block text-2xl">{{s[1]}}</b><span class="text-[13px] leading-5 text-slate-600">{{s[2]}}</span></div></div></div></section>

    <section id="funkcje" class="py-10"><div class="page"><h2 class="section-title">Zobacz Investrę w praktyce</h2><p class="mt-2 text-center text-xs text-slate-500">Jedna platforma. Pełna kontrola.</p><div class="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <article class="practice-card"><h3>Harmonogram</h3><p>Planuj prace, kontroluj terminy i postępy.</p><div class="mt-7 space-y-4"><i v-for="(w,i) in [58,72,44,35,25]" :key="w" class="block h-2 rounded-full" :class="['bg-blue-500','bg-cyan-500','bg-emerald-500','bg-amber-400','bg-orange-500'][i]" :style="{width:w+'%',marginLeft:i*9+'%'}"></i></div></article>
      <article class="practice-card"><h3>Dokumenty</h3><p>Wszystkie pliki posegregowane i bezpiecznie przechowywane.</p><div class="mt-6 space-y-3"><div v-for="(x,i) in ['Projekt budowlany.pdf','Umowa z wykonawcą.pdf','Kosztorys.xlsx','Dziennik budowy.pdf']" :key="x" class="flex items-center gap-2 border-b pb-2 text-[9px]"><span :class="['text-red-500','text-red-500','text-amber-500','text-green-600'][i]">▣</span>{{x}}<span class="ml-auto">›</span></div></div></article>
      <article class="practice-card"><h3>Budżet i koszty</h3><p>Kontroluj wydatki i porównuj budżet z rzeczywistością.</p><div class="mx-auto mt-5 grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#0757d9_0_28%,#8bcbb0_28%_62%,#dce6ec_62%)]"><div class="grid h-16 w-16 place-items-center rounded-full bg-white text-center text-[9px] font-bold">432 600 zł<br><small class="font-normal text-slate-400">z 500 000 zł</small></div></div></article>
      <article class="practice-card"><h3>Dziennik budowy</h3><p>Zdjęcia z budowy uporządkowane chronologicznie.</p><div class="mt-6 grid grid-cols-2 gap-2"><div v-for="i in 4" :key="i" class="h-[72px] rounded-md bg-gradient-to-br from-amber-100 via-stone-300 to-slate-600"></div></div></article>
      <article class="practice-card"><h3>Komunikacja</h3><p>Cała komunikacja w jednym miejscu – bez chaosu.</p><div class="mt-5 space-y-4"><div v-for="(x,i) in ['Kierownik budowy','Wykonawca','Inwestor (Ty)']" :key="x" class="flex gap-2"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-100 text-[8px] font-bold">{{i+1}}</span><div class="text-[8px]"><b>{{x}}</b><p class="text-slate-400">Nowa wiadomość dotycząca budowy...</p></div></div></div><a class="mt-7 block text-[9px] font-bold text-brand">Zobacz wszystkie →</a></article>
    </div><div class="mt-8 text-center"><a class="btn-primary" href="#">Poznaj wszystkie funkcje　→</a></div></div></section>

    <section class="page py-8"><div class="rounded-xl bg-slate-50/70 px-7 py-11"><h2 class="section-title !text-[30px] md:!text-[34px]">Co zyskujesz dzięki Investrze?</h2><div class="mt-10 grid gap-10 md:grid-cols-3 lg:grid-cols-5"><article v-for="g in gains" :key="g[1]" class="text-center"><div class="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-blue-50 text-brand"><AppIcon :name="g[0]" :size="34"/></div><h3 class="mt-5 text-[15px] font-bold leading-6">{{g[1]}}</h3><p class="mt-3 text-[13px] leading-[22px] text-slate-600">{{g[2]}}</p></article></div>
      <h2 class="section-title mt-16 !text-[32px] md:!text-[36px]">Dla kogo jest Investra?</h2><div class="mt-9 grid gap-5 lg:grid-cols-3"><article v-for="(a,i) in audiences" :key="a[0]" class="overflow-hidden rounded-xl border bg-white" :class="i===0?'border-blue-200':i===1?'border-emerald-200':'border-orange-200'"><div class="grid grid-cols-[40%_60%]"><div class="relative min-h-[295px] overflow-hidden" :class="i===0?'bg-gradient-to-br from-blue-50 to-slate-300':i===1?'bg-gradient-to-br from-emerald-50 to-emerald-300':'bg-gradient-to-br from-orange-50 to-orange-300'"><div class="absolute inset-x-6 bottom-0 h-[72%] rounded-t-[60px] bg-slate-700/70"></div><div class="absolute left-1/2 top-10 grid h-[72px] w-[72px] -translate-x-1/2 place-items-center rounded-full bg-amber-100 text-base font-bold text-slate-600">{{a[3]}}</div></div><div class="p-6"><h3 class="text-lg font-bold leading-7" :class="i===0?'text-brand':i===1?'text-emerald-700':'text-orange-600'">{{a[0]}}</h3><ul class="mt-5 space-y-3"><li v-for="x in a[1]" :key="x" class="flex gap-2 text-[14px] leading-[22px] text-slate-600"><span class="shrink-0">✓</span>{{x}}</li></ul><a href="#" class="mt-5 block text-[13px] font-bold" :class="i===0?'text-brand':i===1?'text-emerald-700':'text-orange-600'">Dowiedz się więcej　→</a></div></div></article></div>
    </div></section>

    <section class="page py-5"><div class="rounded-xl bg-gradient-to-r from-[#002b63] to-[#001b42] px-8 py-12 text-white"><div class="grid gap-9 lg:grid-cols-[1fr_repeat(3,1.25fr)]"><div><h2 class="text-[32px] font-bold leading-[1.25]">Co mówią,<br>użytkownicy?</h2><a href="#" class="mt-8 block text-sm font-semibold">Zobacz wszystkie opinie　→</a></div><article v-for="o in opinions" :key="o[1]" class="border-l border-blue-800 pl-7"><div class="text-5xl font-bold leading-5 text-blue-200/60">“</div><p class="mt-5 text-[15px] leading-7 text-blue-50">{{o[0]}}</p><div class="mt-6 flex items-center gap-3"><span class="grid h-11 w-11 place-items-center rounded-full bg-blue-100 text-xs font-bold text-navy">{{o[1][0]}}</span><div><b class="block text-[13px]">{{o[1]}}</b><span class="text-xs text-blue-200">{{o[2]}}</span></div></div></article></div></div></section>

    <section id="cta" class="page py-5"><div class="overflow-hidden rounded-xl bg-gradient-to-r from-blue-50 to-white px-8 py-10"><div class="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr_.7fr]"><div><h2 class="text-[32px] font-extrabold leading-[1.3]">Gotowy, aby uporządkować<br>swoją budowę?</h2><p class="mt-5 text-[15px] leading-6 text-slate-600">Załóż darmowe konto i przekonaj się,<br>jak łatwo zarządzać inwestycją.</p></div><div><div class="flex flex-col gap-3 sm:flex-row"><a href="#" class="btn-primary !px-8 !text-base">Załóż darmowe konto</a><a href="#" class="btn-secondary !px-8 !text-base">Umów prezentację　→</a></div><div class="mt-6 flex flex-wrap gap-5 text-xs leading-5 text-slate-600"><span>✓　14 dni za darmo</span><span>✓　Bez karty płatniczej</span><span>✓　Anulujesz w każdej chwili</span></div></div><div class="hidden h-32 rotate-[-2deg] rounded-xl border-[5px] border-slate-800 bg-white p-3 shadow-xl lg:block"><div class="grid h-full grid-cols-3 gap-2"><i v-for="i in 6" :key="i" class="rounded bg-blue-50"></i></div></div></div></div></section>
  </main>

  <footer class="mt-3 w-full bg-[#001d40] text-white"><div class="w-full px-5 py-12 sm:px-8 lg:px-12"><div class="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]"><div><LogoMark light/><p class="mt-5 max-w-[310px] text-sm leading-6 text-blue-100/70">Platforma, która łączy inwestora i wykonawcę w jednym miejscu i porządkuje cały proces inwestycji budowlanej.</p><div class="mt-5 flex gap-3"><span v-for="x in ['f','in','▶']" :key="x" class="grid h-9 w-9 place-items-center rounded-full border border-blue-500 text-xs">{{x}}</span></div></div><div v-for="group in [['Produkt','Funkcje','Dla inwestora','Dla wykonawcy','Cennik','Integracje'],['Firma','O nas','Blog','Kariera'],['Pomoc','Centrum pomocy','FAQ','Kontakt'],['Prawne','Regulamin','Polityka prywatności','RODO']]" :key="group[0]"><b class="text-base">{{group[0]}}</b><a v-for="x in group.slice(1)" :key="x" href="#" class="mt-3 block text-sm text-blue-100/75">{{x}}</a></div></div><div class="mt-8 border-t border-blue-900 pt-5 text-center text-xs text-blue-200/50">© 2024 Investra. Wszelkie prawa zastrzeżone.</div></div></footer>
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
</style>
