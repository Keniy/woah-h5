/** 
 * 路由配置
 */

let routes = {
    name: 'bill',
    path: '/bill',
    meta: { title: '2019年终总结' },
    component: (resolve) => require(['@/page/view/bill'], resolve)
}

export default [routes]