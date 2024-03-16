//createRouter方法，用于创建路由器实例，可以管理多个路由
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    //路由模式设置
    history: createWebHistory(),
    //管理路由
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/palace',
            component: () => import('@/pages/palace/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ],
    //滚动行为：控制滚动条的位置
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})