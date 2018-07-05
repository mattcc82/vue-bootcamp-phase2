<template>
  <section>
    <h2>User Page - User.vue</h2>
    <hr>
    <button @click="navHome" class="btn btn-lg btn-primary">Go Home</button>
    <button @click="navBack" class="btn btn-warning"><</button>
    <button @click="navFwd" class="btn btn-warning">></button>
    <hr>
    <router-view :users="users"></router-view>
  </section>
</template>
<script>
import { users } from '../app.config.js'
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      users: users
    }
  },
  methods: {
    navHome () {
      this.$router.push({ path: '/' })
    },
    navBack () {
      this.$router.go(-1)
    },
    navFwd () {
      this.$router.go(1)
    }
  }
}
</script>
