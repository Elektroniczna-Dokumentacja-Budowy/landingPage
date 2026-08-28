<script setup>defineProps({ light: Boolean })</script>
<template>
  <a href="#" class="inline-flex items-center gap-2" aria-label="Investra - strona główna">
    <span class="flex h-8 items-end gap-[2px] text-brand">
      <i v-for="h in [12,21,27,19,14]" :key="h" class="block w-[3px] rounded-t bg-current" :style="{height: h + 'px'}"></i>
    </span>
    <strong class="text-xl font-extrabold tracking-tight" :class="light ? 'text-white' : 'text-ink'">INVESTRA</strong>
  </a>
</template>
