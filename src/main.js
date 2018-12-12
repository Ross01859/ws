import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
// import './my-theme/index.less'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.config.devTools = true

Vue.use(ElementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
