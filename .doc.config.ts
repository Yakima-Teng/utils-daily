import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "utils-daily.js",
  description: "utils-daily.js",
  base: `/utils-daily/docs`,
  head: [
    [
      'script',
      {
        src: `/utils-daily/library/utils-daily.min.js?t=${Date.now()}`
      }
    ],
    [
      'script',
      {},
      `console.log('%c 你可以在控制台直接使用window.u变量进行尝试 😃', 'background: #222; color: #EE6A55');`
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '本页目录',
    outline: [2, 6],
    nav: [
      { text: '首页', link: 'https://www.verysystems.com' },
      { text: '发布历史', link: '/changelog' },
      { text: '贡献代码', link: '/contributing' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yakima-Teng/utils-daily' }
    ]
  }
})
