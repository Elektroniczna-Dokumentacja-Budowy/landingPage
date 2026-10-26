<script setup>
import { computed, ref } from 'vue'
import LogoMark from './LogoMark.vue'
import { useI18n } from '../i18n.js'

const query = ref('')
const activeCategory = ref(0)
const { copy, locale } = useI18n()
const page = computed(() => copy.value.blog)
const nav = computed(() => [[copy.value.nav.features,'/funkcje'],[copy.value.nav.investor,'/dla-inwestora'],[copy.value.nav.contractor,'/dla-wykonawcy'],[copy.value.nav.pricing,'/cennik'],[copy.value.nav.about,'/o-nas'],[copy.value.nav.blog,'/blog'],[copy.value.nav.contact,'/kontakt']])

const filteredArticles = () => page.value.articles.filter((article) => {
  const matchesCategory = activeCategory.value === 0 || article.category === page.value.categories[activeCategory.value]
  const phrase = query.value.trim().toLocaleLowerCase(locale.value)
  return matchesCategory && (!phrase || `${article.title} ${article.text}`.toLocaleLowerCase(locale.value).includes(phrase))
})
</script>

<template>
  <div class="blog-page">
    <main>
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-copy">
            <nav class="breadcrumbs"><RouterLink to="/">{{copy.homeLabel}}</RouterLink><span>/</span><span>{{copy.nav.blog}}</span></nav>
            <p class="eyebrow"><i></i> {{page.eyebrow}}</p>
            <h1>{{page.titleA}}<br><span>{{page.titleB}}</span></h1>
            <p class="intro">{{page.intro}}</p>
            <a class="topics-link" href="#tematy">{{page.topics}} <span>↓</span></a>
          </div>
          <div class="hero-art" aria-hidden="true">
            <div class="blueprint">
              <div class="paper-title"><b>▥</b> {{page.blueprintTitle}}</div>
              <span class="measure">12,50 m</span>
              <div class="plan"><i class="wall wall-a"></i><i class="wall wall-b"></i><i class="wall wall-c"></i><i class="wall wall-d"></i><i class="wall wall-e"></i><i class="room room-a"></i><i class="room room-b"></i><i class="room room-c"></i><i class="door"></i></div>
              <small>{{page.control}}</small><em>01 / 03</em>
            </div>
            <div class="floating-card plan-card"><span>✓</span><div><b>{{page.goodPlan}}</b><small>{{page.fromIdea}}</small></div></div>
            <div class="floating-card budget-card"><span class="bars">▥</span><div><b>{{page.budgetControl}}</b><small>{{page.conscious}}</small></div></div>
          </div>
        </div>
      </section>

      <section id="tematy" class="articles-shell">
        <div class="section-kicker">{{page.kicker}}</div>
        <div class="section-heading"><h2>{{page.sectionTitle}}</h2><span>{{page.sample}}</span></div>
        <div class="filters">
          <div class="categories"><button v-for="(category,index) in page.categories" :key="category" :class="{active:activeCategory===index}" @click="activeCategory=index">{{category}}</button></div>
          <label class="search"><span>⌕</span><input v-model="query" type="search" :placeholder="page.search"><kbd>/</kbd></label>
        </div>
        <div class="article-grid">
          <article v-for="article in filteredArticles()" :key="article.title">
            <div class="article-image" :class="article.tone"><span></span><i></i><b></b></div>
            <div class="article-body"><span>{{article.category}}</span><h3>{{article.title}}</h3><p>{{article.text}}</p><a href="#">{{page.readMore}} <b>→</b></a></div>
          </article>
        </div>
      </section>

      <section class="app-cta-shell" aria-labelledby="app-cta-title">
        <div class="app-cta">
          <div class="app-cta-copy">
            <p>{{page.knowledgeAction}}</p>
            <h2 id="app-cta-title">{{page.ctaTitle}}</h2>
            <span>{{page.ctaText}}</span>
            <RouterLink to="/funkcje">{{page.discover}} <b aria-hidden="true">→</b></RouterLink>
          </div>

          <div class="app-preview" aria-hidden="true">
            <div class="app-preview-topbar">
              <strong><i>▥</i> INVESTRA</strong>
              <span>{{page.yourProject}}</span>
            </div>
            <div class="app-preview-body">
              <aside><i></i><i></i><i></i><i></i></aside>
              <div class="app-preview-content">
                <b>{{page.planControl}}</b>
                <div class="app-preview-cards">
                  <div class="document-card">
                    <small>{{page.documents}}</small>
                    <span class="document-icon"><i></i><b></b><b></b></span>
                  </div>
                  <div class="tasks-card">
                    <small>{{page.tasks}}</small>
                    <span v-for="i in 3" :key="i"><b>✓</b><i></i></span>
                  </div>
                </div>
                <small class="app-preview-caption">{{page.atHand}}</small>
                <em>✓</em>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer><div class="footer-inner"><div><LogoMark light/><p>{{page.footerText}}</p></div><nav><RouterLink v-for="item in nav" :key="item[0]" :to="item[1]">{{item[0]}}</RouterLink></nav></div><div class="copyright">{{copy.copyright}}</div></footer>
  </div>
</template>

<style scoped>
.blog-page{overflow-x:clip}
.blog-page{--blue:#0862d7;--ink:#071633;color:var(--ink);background:#fff}.site-header{position:sticky;top:0;z-index:50;border-bottom:1px solid #e9edf3;background:#fffffff2;backdrop-filter:blur(14px)}.header-inner{height:76px;max-width:1200px;margin:auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;gap:30px}.desktop-nav{display:flex;align-items:center;gap:30px;height:100%;font-size:13px;font-weight:700}.desktop-nav a,.header-actions a{color:var(--ink);text-decoration:none;white-space:nowrap}.desktop-nav a{height:100%;display:flex;align-items:center;position:relative}.desktop-nav a.active{color:var(--blue)}.desktop-nav a.active:after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--blue)}.header-actions{display:flex;align-items:center;gap:24px;font-size:13px;font-weight:700}.demo-button{padding:14px 20px;border-radius:7px;background:var(--blue);color:#fff!important;box-shadow:0 10px 22px #0757d92b}.demo-button span{margin-left:12px}.menu-button,.mobile-nav{display:none}.hero{background:linear-gradient(105deg,#fff 0 45%,#f7faff 70%,#eef5ff 100%);border-bottom:1px solid #edf1f6}.hero-inner{max-width:1200px;min-height:438px;margin:auto;padding:44px 32px 30px;display:grid;grid-template-columns:1fr 1fr;align-items:center}.breadcrumbs{display:flex;gap:15px;margin-bottom:36px;color:#8b96a8;font-size:12px}.breadcrumbs a{color:inherit;text-decoration:none}.eyebrow{display:flex;align-items:center;gap:10px;margin:0 0 22px;color:#2570ca;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase}.eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--blue)}.hero h1{margin:0;font-size:47px;line-height:1.2;letter-spacing:-1.7px}.hero h1 span{color:var(--blue)}.intro{margin:24px 0 0;color:#647084;font-size:16px;line-height:1.85}.topics-link{display:inline-flex;gap:28px;margin-top:25px;color:var(--blue);font-size:13px;font-weight:800;text-decoration:none}.hero-art{position:relative;height:350px}.hero-art:before{content:"";position:absolute;inset:5px 10px 10px 20px;border-radius:52% 48% 52% 48%;background:#e8f1ff;transform:rotate(-8deg)}.blueprint{position:absolute;left:55px;top:35px;width:390px;height:285px;padding:25px 28px;border:1px solid #dce5ef;border-radius:8px;background:#fff;box-shadow:0 20px 45px #224c8c1c;transform:rotate(-6deg)}.paper-title{font-size:10px;font-weight:800;letter-spacing:1.5px}.paper-title b{color:var(--blue);font-size:17px}.measure{position:absolute;top:57px;left:145px;color:#9aa5b5;font-size:7px}.plan{position:relative;width:255px;height:145px;margin:28px auto 12px;border:4px solid var(--blue)}.wall{position:absolute;display:block;background:var(--blue)}.wall-a{left:48%;top:0;width:4px;height:100%}.wall-b{left:0;top:48%;width:48%;height:4px}.wall-c{right:0;top:44%;width:52%;height:4px}.wall-d{left:25%;bottom:0;width:4px;height:52%}.wall-e{right:25%;top:0;width:4px;height:44%}.room{position:absolute;border:2px solid var(--blue);width:34px;height:24px}.room-a{left:22px;top:20px}.room-b{left:87px;top:22px}.room-c{right:30px;bottom:25px}.door{position:absolute;left:48%;top:47%;width:22px;height:22px;border:2px solid var(--blue);border-left:0;border-bottom:0;border-radius:0 100% 0 0}.blueprint small{color:#adb5c2;font-size:7px}.blueprint em{float:right;color:#98a4b5;font-size:8px;font-style:normal}.floating-card{position:absolute;display:flex;align-items:center;gap:13px;padding:14px 18px;border:1px solid #e1e6ed;border-radius:9px;background:#fff;box-shadow:0 12px 26px #1b477f15}.floating-card b,.floating-card small{display:block}.floating-card b{font-size:11px}.floating-card small{margin-top:4px;color:#98a3b3;font-size:8px}.plan-card{right:-6px;top:10px}.plan-card>span{width:30px;height:30px;display:grid;place-items:center;border-radius:50%;background:#e6f8f3;color:#1aaa7a}.budget-card{left:125px;bottom:2px}.bars{color:var(--blue);font-size:26px}.articles-shell{max-width:1200px;margin:auto;padding:50px 32px 62px}.section-kicker{color:var(--blue);font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase}.section-heading{display:flex;align-items:end;justify-content:space-between;margin-top:13px}.section-heading h2{margin:0;font-size:31px}.section-heading span{color:#a0a8b5;font-size:11px}.filters{display:flex;align-items:center;justify-content:space-between;gap:25px;margin-top:30px}.categories{display:flex;flex-wrap:wrap;gap:7px}.categories button{padding:12px 15px;border:0;border-radius:6px;background:transparent;color:#657084;font-size:11px;cursor:pointer}.categories button.active{background:var(--blue);color:#fff;font-weight:700}.search{width:208px;height:42px;padding:0 12px;display:flex;align-items:center;gap:9px;border:1px solid #e1e6ed;border-radius:7px;color:#96a1b2}.search input{min-width:0;flex:1;border:0;outline:0;font:inherit;font-size:11px}.search kbd{padding:1px 4px;border:1px solid #e0e4ea;border-radius:3px;background:#fff;color:#9aa4b2}.article-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:28px}.article-grid article{overflow:hidden;border:1px solid #e1e7ef;border-radius:11px;background:#fff;box-shadow:0 10px 25px #1c416e0a}.article-image{position:relative;height:175px;overflow:hidden;background:linear-gradient(145deg,#dfeeff,#9fc7ec)}.article-image:before{content:"";position:absolute;left:12%;right:12%;bottom:0;height:62%;clip-path:polygon(0 100%,20% 28%,40% 48%,55% 0,72% 42%,100% 18%,100% 100%);background:#315b7a}.article-image span{position:absolute;left:42%;bottom:0;width:25%;height:50%;background:#e8bc73;clip-path:polygon(50% 0,100% 35%,100% 100%,0 100%,0 35%)}.article-image.green{background:linear-gradient(145deg,#e1f4ec,#89cdb1)}.article-image.orange{background:linear-gradient(145deg,#fff0dc,#e7b472)}.article-body{padding:20px}.article-body>span{color:var(--blue);font-size:10px;font-weight:800;text-transform:uppercase}.article-body h3{margin:10px 0;font-size:19px;line-height:1.4}.article-body p{margin:0;color:#667287;font-size:13px;line-height:1.7}.article-body a{display:inline-flex;gap:10px;margin-top:18px;color:var(--blue);font-size:12px;font-weight:800;text-decoration:none}.app-cta-shell{max-width:1200px;margin:0 auto;padding:0 32px 72px}.app-cta{min-height:278px;display:grid;grid-template-columns:46% 54%;align-items:center;overflow:hidden;border:1px solid #d6e3f5;border-radius:12px;background:linear-gradient(105deg,#edf4ff 0%,#f2f7ff 55%,#f8fbff 100%)}.app-cta-copy{position:relative;z-index:2;padding:42px}.app-cta-copy>p{margin:0 0 17px;color:var(--blue);font-size:10px;font-weight:800;letter-spacing:1.7px;text-transform:uppercase}.app-cta-copy h2{margin:0;font-size:29px;line-height:1.3;letter-spacing:-.7px}.app-cta-copy>span{display:block;margin-top:17px;color:#687994;font-size:13px}.app-cta-copy>a{display:inline-flex;align-items:center;gap:24px;margin-top:20px;padding:14px 20px;border-radius:6px;background:var(--blue);box-shadow:0 9px 18px #0757d92b;color:#fff;font-size:11px;font-weight:800;text-decoration:none;transition:transform .2s ease,background .2s ease}.app-cta-copy>a:hover{background:#0754bb;transform:translateY(-2px)}.app-cta-copy>a:focus-visible{outline:3px solid #87b5f4;outline-offset:3px}.app-cta-copy>a b{font-size:14px}.app-preview{width:620px;height:223px;overflow:hidden;border:1px solid #cdd9ea;border-radius:8px;background:#fff;box-shadow:0 17px 40px #173d7119;transform:translate(16px,4px) rotate(-3deg)}.app-preview-topbar{height:42px;padding:0 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #dde5f0;color:#8d9bae;font-size:7px}.app-preview-topbar strong{color:var(--blue);font-size:8px}.app-preview-topbar strong i{font-style:normal}.app-preview-body{height:181px;display:grid;grid-template-columns:58px 1fr}.app-preview-body aside{padding:25px 15px;border-right:1px solid #e5ebf3;background:#fbfcfe}.app-preview-body aside i{width:28px;height:5px;margin-bottom:13px;display:block;border-radius:4px;background:#e3eaf4}.app-preview-body aside i:first-child{background:#659cea}.app-preview-content{position:relative;padding:22px 26px}.app-preview-content>b{font-size:10px}.app-preview-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}.app-preview-cards>div{height:82px;padding:12px;border:1px solid #dae4f1;border-radius:5px}.app-preview-cards small{display:block;color:#8290a4;font-size:7px}.document-icon{position:relative;width:28px;height:34px;margin:10px auto 0;display:block;border:2px solid var(--blue)}.document-icon:after{content:"";position:absolute;right:-2px;top:-2px;width:9px;height:9px;border-left:2px solid var(--blue);border-bottom:2px solid var(--blue);background:#fff;transform:skew(0deg) rotate(0deg)}.document-icon i,.document-icon b{position:absolute;left:8px;width:11px;height:2px;background:var(--blue)}.document-icon i{top:16px}.document-icon b:first-of-type{top:22px}.document-icon b:last-of-type{display:none}.tasks-card>span{height:15px;display:flex;align-items:center;gap:7px}.tasks-card>span b{color:#41c69e;font-size:7px}.tasks-card>span i{width:75%;height:4px;border-radius:5px;background:#e8eef6}.app-preview-caption{position:absolute;left:26px;bottom:10px;color:#9aa6b6;font-size:6px}.app-preview-content>em{position:absolute;right:20px;bottom:10px;color:#31bd8f;font-size:8px;font-style:normal}footer{background:#001d40;color:#fff}.footer-inner{max-width:1200px;margin:auto;padding:40px 32px 28px;display:flex;justify-content:space-between;gap:50px}.footer-inner p{max-width:360px;color:#bdcadb;font-size:12px;line-height:1.7}.footer-inner nav{display:flex;flex-wrap:wrap;align-content:start;justify-content:flex-end;gap:18px 28px}.footer-inner nav a{color:#c8d4e4;font-size:12px;text-decoration:none}.copyright{max-width:1136px;margin:auto;padding:15px 0 24px;border-top:1px solid #24486f;color:#8298b3;text-align:center;font-size:10px}
@media(max-width:950px){.desktop-nav,.header-actions{display:none}.menu-button{display:block;border:0;background:none;font-size:25px}.mobile-nav{display:block;padding:10px 22px 18px;background:#fff}.mobile-nav a{display:block;padding:9px;color:var(--ink);font-weight:700;text-decoration:none}.hero-inner{grid-template-columns:1fr;gap:30px}.hero-art{max-width:560px;width:100%;margin:auto}.article-grid{grid-template-columns:repeat(2,1fr)}.app-cta{grid-template-columns:1fr}.app-cta-copy{padding-bottom:26px}.app-preview{justify-self:center;margin-bottom:32px;transform:rotate(-2deg)}}
@media(max-width:620px){.header-inner{height:66px;padding:0 18px}.hero-inner{padding:28px 20px}.breadcrumbs{margin-bottom:25px}.hero h1{font-size:38px}.intro br{display:none}.hero-art{height:285px;transform:scale(.8);transform-origin:top left;width:125%}.articles-shell{padding:42px 20px 48px}.section-heading{align-items:start;flex-direction:column;gap:8px}.filters{align-items:stretch;flex-direction:column}.search{width:100%}.article-grid{grid-template-columns:1fr}.app-cta-shell{padding:0 20px 52px}.app-cta-copy{padding:32px 24px 24px}.app-cta-copy h2{font-size:25px}.app-cta-copy>span{line-height:1.6}.app-cta-copy>a{width:100%;justify-content:space-between;box-sizing:border-box}.app-preview{width:535px;margin:0 0 24px;transform:translateX(95px) rotate(-2deg) scale(.78);transform-origin:bottom center}.footer-inner{padding-inline:20px;flex-direction:column}.footer-inner nav{justify-content:flex-start}.copyright{margin-inline:20px}}
</style>
