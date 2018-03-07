import Vue from 'vue'
import ElementUI from 'element-ui'
// import VueAxios from 'vue-axios'
import router from './router/index.js'
import App from './App'
// import 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.config.devtools = true

Vue.use(ElementUI)
// Vue.use(VueRouter)
// Vue.use(VueAxios)

// Vue.http.options.emulateJSON = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
