/** 
 * 路由配置
 */
import Layout from 'components/layout/index.vue'

let routes = {
    path: '/map',
    component: Layout,
    meta: { title: 'map' },
    children: [
    {
        name: 'map-list',
        path: '/map/map-list',
        component: () => import('@/page/view/map/index.vue'),
        meta: { title: 'MapList' }
    }]
}

export default [routes]