<template>
  <b-navbar-brand to="/">
    {{ brandTitle }}
  </b-navbar-brand>
</template>
<script>
export default {
  props: {
    brandTitle: {
      type: String,
      default: 'Default'
    }
  }
}
</script>

