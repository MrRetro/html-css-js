/**
 * @author caijianjia
 * @date 2021-06-17 23:13
 */
module.exports = {
    title: '基础组件',
    description: '基础组件',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        nav:[ // 导航栏配置
            {text: '前端基础', link: '/test/' },
            {text: '算法题库', link: '/one/'}
        ],
        sidebar: [
            {
                title: '业务组件',
                collapsable: true, //是否展开
                children: [{
                    title: 'demo',
                    path: '/demo/'
                },]
            },
            ['/test/','测试'],
            ['/one/','组件测试']
        ], // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};
