<template>
  <div id="app">
    <!-- nav -->
    <section>
      <app-navbar
        :bs-variant="appConfig.bsVariant">
        <nav-brand 
          slot="brand"
          v-if="appConfig.hasBrand || false"
          :brand-title="appConfig.brandTitle">
        </nav-brand>
        <nav-links
          slot="links"
          v-if="appConfig.hasLinks || false"
          v-for="link in appConfig.navLinks"
          :key="link.text"
          :link-text="link.text"
          :link-href="link.href">
        </nav-links>
        <nav-search slot="search" v-if="appConfig.hasSearch || false"></nav-search>
        <nav-user-menu
          slot="user"
          v-if="appConfig.hasUser || false"
          :user-menu-items="appConfig.userMenu.userMenuItems"
          :user-button-content="appConfig.userMenu.buttonContent">
        </nav-user-menu>
      </app-navbar>
    </section>
    <!-- main wrapper -->
    <section class="container fix-top-nav-margin">
      <transition name="fade-slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
    <!-- footer -->
    <section>
      <app-footer></app-footer>
    </section>
  </div>
</template>

<script>
import AppNavbar from './components/nav/AppNavbar.vue'
import NavBrand from './components/nav/NavBrand.vue'
import NavLinks from './components/nav/NavLinks.vue'
import NavSearch from './components/Search.vue'
import NavUser from './components/user/UserMenu.vue'
import Footer from './components/Footer.vue'
import { currentUserId, appConfig } from './app.config.js'

export default {
  name: 'app',
  components: {
    'app-navbar': AppNavbar,
    'app-footer': Footer,
    'nav-brand': NavBrand,
    'nav-links': NavLinks,
    'nav-search': NavSearch,
    'nav-user-menu': NavUser
  },
  data () {
    return {
      appConfig: appConfig,
      currentUserId: currentUserId
    }
  }
}
</script>

<style lang="scss">
.fix-top-nav-margin {
  margin-top: 20px;
}
// fade-slide
.fade-slide-enter {
  transform: translateY(50px);
  opacity: 0;
}
.fade-slide-enter-active {
  transition: all .25s ease-in-out;
}
.fade-slide-leave-active {
  transition: .75s ease-in-out;
  transform: translateY(50px);
  opacity: 0;
}
// slide
.slide-enter {
  transform: translateX(50px);
  opacity: 0;
}
.slide-enter-active {
  transition: all .25s ease-in;
}
.slide-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transform: translateX(50px);
  opacity: 0;
}
</style>
