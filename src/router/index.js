import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: '家榮早餐'
    }
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '家榮早餐'
    }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue'),
    meta: {
      title: '家榮早餐'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
    meta: {
      title: '家榮早餐'
    }
  },
  {
    path: '/back-news',
    name: 'Back-news',
    component: () => import(/* webpackChunkName: "back-news" */ '../views/Back-news.vue'),
    meta: {
      login: true,
      title: '最新消息管理'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: '聯絡我們'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Login.vue'),
    meta: {
      login: false,
      title: '管理 | 登入'
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Reg.vue'),
    meta: {
      login: false,
      title: '家榮早餐'
    }
  },
  {
    path: '/backside',
    name: 'Backside',
    component: () => import(/* webpackChunkName: "backside" */ '../views/Backside.vue'),
    meta: {
      title: '家榮早餐',
      login: true
    }
  },
  {
    path: '/infor',
    name: 'Infor',
    component: () => import(/* webpackChunkName: "infor" */ '../views/Infor.vue'),
    meta: {
      title: '家榮早餐'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.user) {
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = (to.name !== 'Backside') ? to.meta.title : '後臺管理'
  // if(to.name !== 'Backside') document.title = to.meta.title
  // else document.title = store.state.user + ' 的相簿'
})

export default router
