<template>
  <div class="relative mx-auto w-full max-w-[610px] pb-5 pt-5 lg:pt-0">
    <div class="overflow-hidden rounded-[20px] border-[8px] border-slate-900 bg-white shadow-2xl">
      <div class="flex h-11 items-center justify-between border-b px-4 text-[10px] font-bold">
        <span class="text-brand">▥ <b class="text-ink">INVESTRA</b></span>
        <span>Osiedle Słoneczne — Budynek 4⌄</span><span>◉　⚙</span>
      </div>
      <div class="grid min-h-[360px] grid-cols-[98px_1fr] sm:min-h-[400px]">
        <aside class="border-r bg-slate-50 p-3 text-[9px] font-medium text-slate-500">
          <div v-for="(x,i) in ['Pulpit','Zadania','Harmonogram','Dziennik budowy','Dokumenty','Koszty','Komunikacja','Raporty','Użytkownicy']" :key="x" class="mb-2.5 rounded px-1.5 py-1.5" :class="i===0?'bg-blue-50 font-bold text-brand':''">▣　{{x}}</div>
        </aside>
        <main class="grid grid-cols-2 gap-3 bg-slate-50/40 p-4 text-[10px] leading-relaxed">
          <div class="rounded-lg bg-white p-3 shadow-sm"><b class="text-[11px]">Postęp prac</b><div class="mt-5 flex items-center gap-4"><div class="grid h-16 w-16 place-items-center rounded-full border-[7px] border-cyan-500 text-sm font-bold">72%</div><div class="flex-1 space-y-3"><i v-for="w in ['100%','65%','40%','0%']" :key="w" class="block h-1 rounded bg-blue-100"><em class="block h-full rounded bg-brand" :style="{width:w}"></em></i></div></div></div>
          <div class="rounded-lg bg-white p-3 shadow-sm"><b class="text-[11px]">Budżet</b><div class="mt-7 text-center text-sm font-bold">1 250 000 zł</div><div class="mx-auto mt-3 h-2 w-3/4 rounded bg-gradient-to-r from-cyan-500 via-emerald-400 to-slate-100"></div></div>
          <div class="rounded-lg bg-white p-3 shadow-sm"><b class="text-[11px]">Harmonogram</b><div class="mt-7 space-y-4"><i v-for="(w,i) in [55,62,42,50]" :key="w" class="block h-2 rounded-full" :class="['bg-brand','bg-cyan-500','bg-emerald-500','bg-amber-400'][i]" :style="{width:w+'%',marginLeft:i*12+'%'}"></i></div></div>
          <div class="rounded-lg bg-white p-3 shadow-sm"><b class="text-[11px]">Dziennik budowy</b><div class="mt-4 grid grid-cols-3 gap-1"><div v-for="i in 3" :key="i" class="h-16 rounded bg-gradient-to-br from-amber-100 to-slate-300"></div></div><div class="mt-4 space-y-2"><p v-for="x in 3" :key="x" class="h-2 rounded bg-slate-100"></p></div></div>
        </main>
      </div>
    </div>
    <div class="mx-auto h-4 w-[108%] -translate-x-[4%] rounded-b-[50%] bg-gradient-to-b from-slate-300 to-slate-100 shadow-lg"></div>
    <div class="absolute -bottom-1 right-0 hidden h-[300px] w-[145px] rounded-[26px] border-[7px] border-slate-950 bg-white p-3 shadow-2xl sm:block">
      <div class="mb-5 flex justify-between text-[8px] font-bold"><span>9:41</span><span>● ◔</span></div><b class="text-[11px]">Dziennik budowy</b><div class="mt-4 grid grid-cols-2 gap-2"><div v-for="i in 4" :key="i" class="h-16 rounded bg-gradient-to-br from-amber-100 to-slate-400"></div></div><b class="mt-4 block text-[10px]">Zadania</b><p v-for="x in 4" :key="x" class="mt-3 h-1.5 rounded bg-blue-100"><i class="block h-full rounded bg-emerald-400" :style="{width:(100-x*12)+'%'}"></i></p>
    </div>
  </div>
</template>
