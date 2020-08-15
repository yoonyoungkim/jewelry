import Vue from 'vue'
import { MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(MdField);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
