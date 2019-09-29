/** 
 * 路由配置
 */

let routes = {
    name: 'map',
    path: '/map',
    meta: { title: 'map' },
    component: (resolve) => require(['@/page/view/map'], resolve)
}

export default [routes]