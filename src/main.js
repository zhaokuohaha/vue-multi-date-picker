import Vue from 'vue'
import App from './App.vue'

import mDatePicker from './lib'
Vue.use(mDatePicker)

new Vue({
  el: '#app',
  render: h => h(App)
})
