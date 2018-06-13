<template>
  <div id="app">
    <!-- nav -->
    <section>
      <app-navbar
        :bs-variant="navbarConfig.bsVariant"
        :user-button-content="navbarConfig.userMenu.buttonContent">
        <nav-brand 
          slot="brand"
          v-if="navbarConfig.hasBrand || false"
          :brand-title="navbarConfig.brandTitle">
        </nav-brand>
        <nav-links
          slot="links"
          v-if="navbarConfig.hasLinks || false"
          v-for="link in navbarConfig.navLinks"
          :key="link.text"
          :link-text="link.text"
          :link-href="link.href">
        </nav-links>
        <nav-search slot="search" v-if="navbarConfig.hasSearch || false"></nav-search>
        <nav-user-menu
          slot="user"
          v-if="navbarConfig.hasUser || false"
          :user-menu-items="navbarConfig.userMenu.userMenuItems">
        </nav-user-menu>
      </app-navbar>
    </section>
    <!-- main wrapper -->
    <section>

    </section>
    <!-- footer -->
    <section>

    </section>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import NavBrand from './components/NavBrand.vue'
import NavLinks from './components/NavLinks.vue'
import NavSearch from './components/Search.vue'
import NavUser from './components/UserMenu.vue'
import { navbarConfig } from './navbarConfig.js'

export default {
  name: 'app',
  components: {
    'app-navbar': AppNavbar,
    'nav-brand': NavBrand,
    'nav-links': NavLinks,
    'nav-search': NavSearch,
    'nav-user-menu': NavUser
  },
  data () {
    return {
      navbarConfig: navbarConfig
    }
  }
}
</script>

<style lang="scss">

</style>
