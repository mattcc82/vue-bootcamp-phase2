<template>
  <b-nav-item :href="linkHref">{{ linkText }}</b-nav-item>
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
      default: '#'
    }
  }
}
</script>
