import { demoBlockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock';

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ]
}
const config = {
  title: "Vite-UI",
  description: "基于 Vite 从 0 开始动手搭建的工程化组件库",
  themeConfig: {
    sidebar,
  },

  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
}
export default config