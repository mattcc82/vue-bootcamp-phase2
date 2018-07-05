<template>
  <b-navbar toggleable="md" :type="bsType" :variant="bsVariant">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <slot name="brand"></slot>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <slot name="links"></slot>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <slot name="search"></slot>
        </b-nav-form>
        <slot name="user"></slot>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'appNavbar',
  props: {
    bsType: { // bootstrap navbar type
      type: String,
      default: 'dark'
    },
    bsVariant: { // bootstrap class varient (primary, info, ...)
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>

</style>
