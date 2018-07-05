import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import User from './views/User'
import UserStart from './components/user/UserStart'
import UserDetail from './components/user/UserDetail'
import UserEdit from './components/user/UserEdit'
import _404 from './views/404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/about', name: 'about', component: About },
    {
      path: '/user',
      component: User,
      props: true,
      children: [{
        path: ':id',
        component: UserDetail
      }, {
        path: ':id/edit',
        name: 'userEdit',
        component: UserEdit
      }, {
        path: '',
        name: 'user',
        component: UserStart
      }]
    },
    { path: '/', name: 'home', component: Home },
    { path: '*', name: '404', component: _404 }
  ]
})

export default router
