import Vue from 'vue'
// import App from './App.vue'
import App from './components/day1/01-test.vue'

// 引入样式文件
import './styles/style.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
