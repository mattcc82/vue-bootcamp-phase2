<template>
  <b-nav-item :to="linkHref" :exact="exact">{{ linkText }}</b-nav-item>
</template>
<script>
export default {
  props: {
    linkText: {
      type: String,
      default: 'Link'
    },
    linkHref: {
      type: String,
      default: '/'
    }
  },
  computed: {
    exact () {
      return this.linkHref === '/'
    }
  }
}
</script>
