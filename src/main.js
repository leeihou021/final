import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuesax from 'vuesax'
import VueWow from 'vue-wow'
import animate from 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneSquareAlt, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLine } from '@fortawesome/free-brands-svg-icons'

import './plugins/bootstrap-vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import '../css/style.css'
import './registerServiceWorker'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

library.add(faClock, faPhoneSquareAlt, faEnvelope, faFacebookSquare, faLine, faDatabase)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
Vue.use(Vuesax)
Vue.use(VueWow)
Vue.use(animate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
