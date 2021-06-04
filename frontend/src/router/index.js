import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/destination',
    name: 'Destination',
    component: Destination
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
