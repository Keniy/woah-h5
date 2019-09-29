import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './auto-import'

Vue.use(VueRouter)

export const constantRouterMap = [
    { path: '/', name: 'home', redirect: '/map' },
    ...routers
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0}),
    routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach((to, from) => {
})

export default router