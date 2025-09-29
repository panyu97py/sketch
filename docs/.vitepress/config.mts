import { defineConfig } from 'vitepress'
import packageInfo from '../package.json'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sketchjs',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/panyu97py/sketch'
      }
    ],
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: packageInfo.version,
        link: '/'
      }
    ],
    editLink: {
      pattern: 'https://github.com/panyu97py/sketch/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于'
    },
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2025-至今 潘宇'
    },
    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: '简介',
            collapsed: false,
            items: [
              {
                text: '什么是 Sketchjs？',
                link: 'what-is-sketchjs'
              },
              {
                text: '快速开始',
                base: '/guide/getting-started-',
                items: [
                  {
                    text: 'react',
                    link: 'react'
                  },
                  {
                    text: 'vue',
                    link: 'vue'
                  },
                  {
                    text: 'H5',
                    link: 'H5'
                  },
                ]
              }
            ]
          },
        ]
      },
    }

  }
})
