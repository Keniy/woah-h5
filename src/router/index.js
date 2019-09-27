import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './auto-import'

Vue.use(VueRouter)

export const constantRouterMap = [
    { path: '/', redirect: '/map/map-list' },
    ...routers
]

console.log('constantRouterMap', constantRouterMap)

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0}),
    routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
    next()
})

export default router