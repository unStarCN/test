import Vue from 'vue'
// import App from './App.vue'
// import App from './components/day1/01-test.vue'
// import App from './components/day1/02-插值.vue'
// import App from './components/day1//05-v-module使用.vue'
// import App from './components/day1/practice.vue'
// import App from './components/day2/03-practice.vue'
// import App from './components/day2/04-test.vue'
import App from './components/day2/05-fliter使用.vue'

// 引入样式文件
import './styles/reset.css'
import './styles/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
