import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(ElementUI)   //新添加
Vue.config.productionTip = false


// 完整版 vue.esm.js，是预编译 + 运行时，也就是模板字符串和现在最常用的单文件组件 .vue 文件，
// 需要经过它预编译转化成纯 javascrit，然后再运行，适用于开发环境，Vue-cli 2.x 用此方式来运行。
// 但 Vue-cli 4.x / Vue-cli 3.x，则不一样，默认是使用 render + $mount 直接启动项目，不走预编译，
// 使用的是非完整版的 vue.runtime.esm.js 。生产环境用的也是 vue.runtime.esm.js，比完整版小 30% 左右，前端性能更优。
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
