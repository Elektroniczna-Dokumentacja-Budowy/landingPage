import { createApp } from 'vue'
import { createRouter, createWebHistory, RouterView } from 'vue-router'
import App from './App.vue'
import FunctionsPage from './components/FunctionsPage.vue'
import InvestorPage from './components/InvestorPage.vue'
import ContractorPage from './components/ContractorPage.vue'
import PricingPage from './components/PricingPage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', name: 'home', component: App },
    { path: '/funkcje', name: 'functions', component: FunctionsPage },
    { path: '/dla-inwestora', name: 'investor', component: InvestorPage },
    { path: '/dla-wykonawcy', name: 'contractor', component: ContractorPage },
    { path: '/cennik', name: 'pricing', component: PricingPage },
    { path: '/o-nas', name: 'about', component: AboutPage },
    { path: '/kontakt', name: 'contact', component: ContactPage },
  ],
})

createApp(RouterView).use(router).mount('#app')
