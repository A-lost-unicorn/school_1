/* eslint-disable no-undef */

import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "../bootstrap-5.1.3-dist/css/bootstrap.min.css"
import "../bootstrap-5.1.3-dist/js/bootstrap.min.js"
// import axios from 'axios'


import * as ElementPlusIconsVue from '@element-plus/icons-vue'

console.log( "________")

// Vue.config.productionTip = false
// Vue.prototype.$axios=axios

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app._context.config.$axios=axios
// console.log(app._context);

// import axios from "./plugin/axios.js"

// app.use(axios);


console.log(app);
app.use(ElementPlus).use(store).use(router).mount('#app')




