/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// createApp(App).use(store).use(router).mount('#app')
new Vue({
  render: h => h(App),
  render: r => r(router)
  
}).$mount('#app')
