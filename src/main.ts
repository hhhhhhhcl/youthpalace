//vue3框架提供的createAPP方法，可以用来创建应用实例方法
import { createApp } from 'vue'
//引入清除默认样式
import '@/style/reset.scss'
//引入根组件APP
import App from '@/App.vue'
//引入全局组件顶部、底部
import PalaceTop from '@/components/palace_top/index.vue';
import PalaceBottom from '@/components/palace_bottom/index.vue';
//引入vue-router核心插件并安装
import router from '@/router';
//引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//国际化文件
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//利用createAPP方法创建应用实例，并将应用实例挂载到挂载点上
const app = createApp(App);
app.component('PalaceTop', PalaceTop);
app.component('PalaceBottom', PalaceBottom);
//安装vue-router
app.use(router);
//安装element-plus插件
app.use(ElementPlus, {
    locale: zhCn,
})
//挂载
app.mount('#app');
