import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const EventBus = new Vue()

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})

export { EventBus }
