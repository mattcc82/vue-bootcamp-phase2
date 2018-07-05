<template>
  <section>
    <h2>User Edit Page - UserEdit.vue</h2>
    <ul class="list-group">
      <li class="list-group-item"><span class="badge badge-secondary">Language:</span> {{ $route.query.lang }}</li>
      <li class="list-group-item"><span class="badge badge-secondary">Time Zone:</span> {{ $route.query.locale }}</li>
    </ul>
  </section>
</template>
