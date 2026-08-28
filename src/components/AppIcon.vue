<script setup>
defineProps({ name: String, size: { type: Number, default: 28 } })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'phone'"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></template>
    <template v-else-if="name === 'folder'"><path d="M3 5h6l2 2h10v12H3z"/></template>
    <template v-else-if="name === 'shield'"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></template>
    <template v-else-if="name === 'users'"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 11a4 4 0 0 0 0-8M23 21v-2a4 4 0 0 0-3-3.9"/></template>
    <template v-else-if="name === 'clock'"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></template>
    <template v-else-if="name === 'calendar'"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></template>
    <template v-else-if="name === 'chat'"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-2-3.5v-5A4 4 0 0 1 5 3h12a4 4 0 0 1 4 4z"/><path d="M7 9h.01M12 9h.01M17 9h.01"/></template>
    <template v-else-if="name === 'camera'"><path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/></template>
    <template v-else-if="name === 'document'"><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 13h6M9 17h6"/></template>
    <template v-else-if="name === 'report'"><path d="M4 3h16v18H4zM8 17v-4M12 17V8M16 17v-7"/></template>
    <template v-else-if="name === 'check'"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 6-7"/></template>
    <template v-else><path d="M9 3h6v3h4v15H5V6h4zM9 12h6M9 16h4"/></template>
  </svg>
</template>
