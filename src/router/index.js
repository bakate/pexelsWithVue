/* eslint-disable no-unused-vars */
import { auth } from '@/firebase'
import store from '@/store'
import NProgress from 'nprogress'
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
    props: true,

    component: () => import(/* webpackChunkName: "photos" */ '../views/Photos'),
  },
  {
    path: '/photos/:id',
    name: 'photoDetails',
    props: true,
    beforeEnter: (to, from, next) => {
      store
        .dispatch('photos/getSinglePhoto', to.params.id)
        .then(photo => {
          to.params.singlePhoto = photo
          next()
        })
        .catch(error => {
          if (error.response && error.response.status == 404) {
            next({
              name: '404',
              params: { resource: 'photos' },
            })
          } else {
            next({ name: 'network-issue' })
          }
        })
    },

    component: () => import(/* webpackChunkName: "photoDetails" */ '../views/PhotoDetails'),
  },
  {
    path: '/videos',
    name: 'videos',

    component: () => import(/* webpackChunkName: "videos" */ '../views/Videos'),
  },
  {
    path: '/videos/:id',
    name: 'videoDetails',
    props: true,
    beforeEnter: (to, from, next) => {
      store.dispatch('videos/getSingleVideo', to.params.id).then(video => {
        to.params.singleVideo = video
        next()
      })
    },
    component: () => import(/* webpackChunkName: "videoDetails" */ '../views/VideoDetails'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/authentication',
    name: 'signUser',
    props: true,
    component: () => import(/* webpackChunkName: "signUser" */ '../views/Signup'),
    beforeEnter: (to, from, next) => {
      store.dispatch('user/authAction').then(() => {
        console.log('running from router authhhh')

        next()
      })
    },
  },
  {
    path: '/notFound',
    name: '404',
    props: true,
    component: () => import(/* webpackChunkName: "notFound" */ '../views/404'),
  },
  {
    path: '/newtwork-issue',
    name: 'network-issue',
    component: () => import(/* webpackChunkName: "newtwork-issue" */ '../views/NetworkIssue'),
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    auth.onAuthStateChanged(user => {
      if (!user) {
        next({ name: 'signUser', redirect: to.fullPath })
      } else {
        store.dispatch('user/authAction').then(() => next())
      }
    })
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
