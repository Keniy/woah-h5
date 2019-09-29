/** 
 * 路由配置
 */

let routes = {
    name: 'user',
    path: '/user',
    meta: { title: 'user' },
    component: (resolve) => require(['@/page/view/user'], resolve)
}

export default [routes]