import Layout from 'components/layout/'
/** 
 * 路由配置
 */

let routes = {
    name: 'user',
    path: '/user',
    meta: { title: 'user' },
    component: Layout,
    redirect: '/user/list',
    children: [
        {
            name: 'list',
            path: 'list',
            component: (resolve) => require(['@/views/page/user'], resolve)
        }
    ]
}

export default [routes]