<template>
  <b-navbar-brand href="#">
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

