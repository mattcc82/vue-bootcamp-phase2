<template>
  <section>
    <h2>User Detail Page - UserDetail.vue</h2>
    <hr>
    <ul class="list-group">
      <li class="list-group-item"><span class="badge badge-secondary">id:</span> {{ $route.params.id }}</li>
      <li class="list-group-item"><span class="badge badge-secondary">handle:</span> {{ currentUser.handle }}</li>
      <li class="list-group-item"><span class="badge badge-secondary">Language:</span> {{ currentUser.lang }}</li>
      <li class="list-group-item"><span class="badge badge-secondary">Time Zone:</span> {{ currentUser.locale }}</li>
    </ul>
    <br><br>
    <b-button
      :to="{ name: 'userEdit', params: { id: $route.params.id }, query: { lang: currentUser.lang, locale: currentUser.locale } }"
      class="btn btn-info">
      Edit User
    </b-button>
  </section>
</template>
<script>
export default {
  props: ['users'],
  computed: {
    currentUser () {
      let self = this
      let user = self.users.filter(function (u) {
        return u.id === parseInt(self.$route.params.id)
      })
      return user[0]
    }
  }
}
</script>

