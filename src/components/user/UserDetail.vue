<template>
  <section>
    <h2>User Detail Page - UserDetail.vue</h2>
    <hr>
    <p>id: {{ $route.params.id }}</p>
    <b-button
      :to="{ name: 'userEdit', params: { id: $route.params.id } }"
      class="btn btn-info">
      Edit User
    </b-button>
  </section>
</template>
<script>
export default {
  props: ['users']
}
</script>

