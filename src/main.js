import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'normalize.css/normalize.css'
import 'swiper/dist/css/swiper.css'
import 'animate.css/animate.min.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
