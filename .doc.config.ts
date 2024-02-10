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
      `console.log('%c You can try to use window.u (e.g. u.add([1, 2, 3, 4])) in the console 😃', 'background: #222; color: #EE6A55');`
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: 'Table of Content',
    outline: [2, 6],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Change Log', link: '/changelog' },
      { text: 'Contribute', link: '/contributing' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yakima-Teng/utils-daily' }
    ]
  }
})
