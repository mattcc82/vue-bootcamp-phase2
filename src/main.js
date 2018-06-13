import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const EventBus = new Vue()

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})

export { EventBus }
