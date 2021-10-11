# 使用VuePress

> 安装vuepress前，请确保你的 Node.js 版本 >= 8 .[参考](https://segmentfault.com/a/1190000017242116)  
> **备注:**[官网地址](https://vuepress.vuejs.org/zh/guide/getting-started.html)

```cmd
# 将 vuepress 作为一个本地依赖安装
npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 预览网站
npx vuepress dev docs
```

接着，在 **package.json** 里加一些脚本:

```js
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

预览网站

```cmd
npm run docs:dev
```

```js
// .vuepress/config.js
module.exports = {
    title: '基础组件',
    description: '基础组件',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号 好像没什么效果
    },
    themeConfig: {
        nav:[ // 顶部导航栏配置
            {text: '前端基础', link: '/test/' },
            {text: '算法题库', link: '/one/'}
        ],
        sidebar: // 左侧边栏配置
        [
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
        ], 
        sidebarDepth: 2, // 侧边栏显示2级 好像没什么效果
    }
};
```

### 在markdown中使用Vue

在.vuepress中创建components文件夹。
所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件。

如果需要引入静态文件，可以在.vuepress下新建public文件夹，里面可以放静态文件。

```js
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      └─ Icon
         └─ vi-icon.vue
```
可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）
```js
<demo-1/>
<Icon-vi-icon/> //文件名和组件名之间同`-`连接
```

<comments />
