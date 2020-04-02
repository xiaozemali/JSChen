module.exports = {
  title: 'JSChen',
  description: 'Just playing around',
  base:'', // 如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"
  head: [
    ['link', { rel: 'icon', href: '/assets/img/LOGO.png' }]
  ],
  themeConfig: {
    logo: '/assets/img/LOGO.png',
    sidebar: 'auto',
    nav: [
      {
        text: '前端架构之路',
        ariaLabel: '前端架构之路',
        items: [
          { 
            text: 'javaScript基础', 
            items: [
              { text: '基础知识', link: '/guide/' },
              { text: '函数', link: 'https://google.com' },
              { text: 'es6', link: 'https://google.com' },
              { text: '异步编程', link: 'https://google.com' },
              { text: '设计模式', link: 'https://google.com' },
            ]
          },
          { 
            text: '计算机网络',
            items: [
              { text: '网络协议', link: 'https://google.com' },
              { text: '网络请求', link: 'https://google.com' },
              { text: '网络安全', link: 'https://google.com' },
              { text: '模块加载', link: 'https://google.com' },
            ]
          },
          { 
            text: 'Vue.js', 
            items: [
              { text: 'Vue.js', link: 'https://google.com' },
              { text: 'Nuxt.js', link: 'https://google.com' },
              { text: 'Vue源码解读', link: 'https://google.com' },
              { text: '组件架构', link: 'https://google.com' },
            ]
          },
          { text: 'React.js', link: 'https://google.com' },
          { 
            text: 'node.js', 
            items: [
              { text: '基础', link: 'https://google.com' },
              { text: 'web服务express', link: 'https://google.com' },
            ]
          },
          { 
            text: '前端工程化', 
            items: [
              { text: 'webpack', link: 'https://google.com' },
              { text: 'babel', link: 'https://google.com' },
              { text: 'CI/CD', link: 'https://google.com' },
              { text: '质量检测', link: 'https://google.com' },
              { text: '编码规范', link: 'https://google.com' },
            ]
          },
        ]
      },
      { 
        text: '面试', 
        items: [
          { text: 'js基础', link: '/面试/js基础/' },
        ]
      },
      { text: '随笔', link: 'https://google.com' },
      { text: 'GitHub', link: 'https://github.com/guestccc' },
    ]
  }
}