<script setup>
import { computed, ref } from 'vue'
import LogoMark from './LogoMark.vue'
import { useI18n } from '../i18n.js'

const menuOpen = ref(false)
const languageOpen = ref(false)
const { copy, locale, languages, setLocale } = useI18n()
const navigation = computed(() => [
  [copy.value.nav.features, '/funkcje'],
  [copy.value.nav.investor, '/dla-inwestora'],
  [copy.value.nav.contractor, '/dla-wykonawcy'],
  [copy.value.nav.pricing, '/cennik'],
  [copy.value.nav.blog, '/blog'],
  [copy.value.nav.about, '/o-nas'],
  [copy.value.nav.contact, '/kontakt'],
])

const chooseLanguage = (code) => {
  setLocale(code)
  languageOpen.value = false
}
</script>

<template>
  <header class="global-header">
    <div class="global-header__inner">
      <LogoMark />

      <nav class="global-header__nav" :aria-label="copy.mainNav">
        <RouterLink
          v-for="item in navigation"
          :key="item[0]"
          :to="item[1]"
          active-class="is-active"
        >{{ item[0] }}</RouterLink>
      </nav>

      <div class="global-header__actions">
        <a href="https://app.e-investra.pl/enter/?next=/">{{ copy.login }}</a>
        <div class="language-switcher">
          <button type="button" :aria-label="copy.language" :aria-expanded="languageOpen" @click="languageOpen = !languageOpen">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg>
            <span>{{ locale.toUpperCase() }}</span><i>⌄</i>
          </button>
          <div v-if="languageOpen" class="language-switcher__menu">
            <button v-for="language in languages" :key="language.code" type="button" :class="{active:locale===language.code}" @click="chooseLanguage(language.code)"><b>{{ language.short }}</b>{{ language.label }}</button>
          </div>
        </div>
        <a class="global-header__signup" href="https://app.e-investra.pl/accounts/signup/">{{ copy.signup }}</a>
      </div>

      <button
        class="global-header__menu-button"
        type="button"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? copy.closeMenu : copy.openMenu"
        @click="menuOpen = !menuOpen"
      >{{ menuOpen ? '×' : '☰' }}</button>
    </div>

    <nav v-if="menuOpen" class="global-header__mobile-nav" :aria-label="copy.mobileNav">
      <RouterLink
        v-for="item in navigation"
        :key="item[0]"
        :to="item[1]"
        active-class="is-active"
        @click="menuOpen = false"
      >{{ item[0] }}</RouterLink>
      <div class="global-header__mobile-actions">
        <a href="https://app.e-investra.pl/enter/?next=/">{{ copy.login }}</a>
        <label class="mobile-language"><span>{{ copy.language }}</span><select :value="locale" @change="setLocale($event.target.value)"><option v-for="language in languages" :key="language.code" :value="language.code">{{ language.short }} — {{ language.label }}</option></select></label>
        <a class="global-header__signup" href="https://app.e-investra.pl/accounts/signup/">{{ copy.signup }}</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.global-header{position:sticky;top:0;z-index:100;width:100%;border-bottom:1px solid #e8edf4;background:#fffffff2;box-shadow:0 3px 15px #102c5208;backdrop-filter:blur(14px)}
.global-header__inner{height:72px;max-width:1440px;margin:auto;padding:0 48px;display:flex;align-items:center;justify-content:space-between;gap:28px}
.global-header__nav{height:100%;display:flex;align-items:center;gap:30px}
.global-header__nav a{position:relative;height:100%;display:flex;align-items:center;color:#071433;font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;transition:color .2s ease}
.global-header__nav a:hover,.global-header__nav a.is-active{color:#0757d9}
.global-header__nav a.is-active:after{content:"";position:absolute;right:0;bottom:0;left:0;height:2px;background:#0757d9}
.global-header__actions{display:flex;align-items:center;gap:22px;font-size:13px;font-weight:700}
.global-header__actions a,.global-header__mobile-actions a{color:#071433;text-decoration:none;white-space:nowrap}
.language-switcher{position:relative}
.language-switcher>button{height:38px;padding:0 9px;display:flex;align-items:center;gap:6px;border:1px solid #dce4ee;border-radius:7px;background:#fff;color:#071433;font:inherit;cursor:pointer}
.language-switcher svg{width:18px;height:18px;fill:none;stroke:#0757d9;stroke-width:1.8}
.language-switcher i{color:#7c899b;font-size:10px;font-style:normal}
.language-switcher__menu{position:absolute;right:0;top:46px;width:150px;padding:6px;border:1px solid #dce4ee;border-radius:9px;background:#fff;box-shadow:0 14px 35px #102c5224}
.language-switcher__menu button{width:100%;padding:9px 10px;display:flex;align-items:center;gap:10px;border:0;border-radius:6px;background:transparent;color:#34445c;text-align:left;cursor:pointer}
.language-switcher__menu button:hover,.language-switcher__menu button.active{background:#eef4ff;color:#0757d9}
.language-switcher__menu b{width:24px}
.mobile-language{display:flex;align-items:center;justify-content:space-between;gap:12px;color:#071433}
.mobile-language select{padding:9px 12px;border:1px solid #dce4ee;border-radius:6px;background:#fff;color:#071433}
.global-header__signup{display:inline-flex;align-items:center;justify-content:center;padding:13px 20px;border-radius:6px;background:#0757d9;color:#fff!important;box-shadow:0 8px 18px #0757d929}
.global-header__menu-button{display:none;width:42px;height:42px;border:0;background:transparent;color:#071433;font-size:26px;line-height:1;cursor:pointer}
.global-header__mobile-nav{display:none}
@media(max-width:1120px){
  .global-header__inner{padding:0 24px}
  .global-header__nav,.global-header__actions{display:none}
  .global-header__menu-button{display:block}
  .global-header__mobile-nav{display:block;padding:10px 24px 20px;border-top:1px solid #eef2f7;background:#fff;box-shadow:0 12px 24px #102c5212}
  .global-header__mobile-nav>a{display:block;padding:10px 4px;color:#071433;font-size:14px;font-weight:700;text-decoration:none}
  .global-header__mobile-nav>a.is-active{color:#0757d9}
  .global-header__mobile-actions{margin-top:8px;padding-top:16px;display:flex;align-items:center;gap:18px;border-top:1px solid #eef2f7;font-size:13px;font-weight:700}
}
@media(max-width:560px){
  .global-header__inner{height:64px;padding:0 14px}
  .global-header__mobile-nav{padding-inline:18px}
  .global-header__mobile-actions{align-items:stretch;flex-direction:column}
}
</style>
