import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/photos',
    name: 'photos',

    component: () => import(/* webpackChunkName: "photos" */ '../views/Photos'),
  },
  {
    path: '/photos/:id',
    name: 'photoDetails',
    props: true,

    component: () => import(/* webpackChunkName: "photoDetails" */ '../views/DetailsPhotos'),
  },
  {
    path: '/videos',
    name: 'videos',

    component: () => import(/* webpackChunkName: "videos" */ '../views/Videos'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',

    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard'),
  },
  {
    path: '/signin',
    name: 'signin',

    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin'),
  },
  {
    path: '/signup',
    name: 'signup',

    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
