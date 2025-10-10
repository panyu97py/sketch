import { defineConfig } from 'vitepress'
import packageInfo from '../package.json'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Sketchjs',
  description: 'A VitePress Site',
  base: '/sketch/',
  markdown: {
    config: (md) => md.use(groupIconMdPlugin)
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
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
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    sidebar: [
      {
        text: '简介',
        base: '/guide/',
        items: [
          {
            text: '什么是 Sketchjs？',
            link: 'what-is-sketchjs'
          },
          {
            text: '快速开始',
            items: [
              {
                text: 'react',
                link: 'getting-started-react'
              },
              {
                text: 'vue',
                link: 'getting-started-vue'
              },
              {
                text: 'H5',
                link: 'getting-started-H5'
              },
            ]
          }
        ]
      },
      {
        text: '组件API',
        base: '/reference/',
        items: [
          {
            text: 'Stylesheet',
            link: 'stylesheet'
          },
          {
            text: 'Sketch.Element',
            link: 'sketch-element'
          },
          {
            text: 'Sketch.Root',
            link: 'sketch-root'
          },
          {
            text: 'Sketch.View',
            link: 'sketch-view'
          },
          {
            text: 'Sketch.Image',
            link: 'sketch-image'
          },
          {
            text: 'Sketch.Text',
            link: 'sketch-text'
          },
        ]
      }
    ]
  }
})
