import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './router'
 
//加载路由中间件 
Vue.use(VueRouter)
 
//定义路由
const router = new VueRouter();

//配置路由参数 
configRouter(router)

//加载路由应用 
const App = Vue.extend(require('./app.vue'))

//路由挂载到dom上
router.start(App, '#app');
