<template>
  <b-nav-item-dropdown right>
    <template slot="button-content">
      <span class="badge badge-pill">{{ userButtonContent }}</span>
    </template>
    <b-dropdown-item
      v-for="item in userMenuItems"
      :key="item.text"
      :href="item.link">
      {{ item.text }}
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>
<script>
export default {
  props: {
    userButtonContent: {
      type: String,
      default: 'User'
    },
    userMenuItems: {
      type: Array,
      default: [
        { text: 'Profile', link: '#' },
        { text: 'Sign Out', link: '#' }
      ]
    }
  }
}
</script>
