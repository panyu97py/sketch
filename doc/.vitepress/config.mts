import { defineConfig } from 'vitepress'
import packageInfo from '../package.json'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sketchjs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/panyu97py/sketch' }
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: packageInfo.version, link: '/' }
    ],
    sidebar:[]
  }
})
