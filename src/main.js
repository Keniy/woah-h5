import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import wx from 'weixin-js-sdk'
import 'element-ui/lib/theme-chalk/index.css'
import 'src/assets/css/reset.css'
import 'src/assets/css/index.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

import VueJsonp from 'vue-jsonp'

// import 'normalize.css/normalize.css'
// import 'swiper/dist/css/swiper.css'
// import 'animate.css/animate.min.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueJsonp)
// 微信js-api
Vue.prototype.wx = wx

// Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
 