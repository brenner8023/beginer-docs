
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: '新人上手文档',
    lastUpdated: true,
    themeConfig: {
        sidebar: [
          {
            text: '索引',
            items: [
              { text: '效率工具', link: '/tool' },
              { text: '文档模板', link: '/template' },
            ]
          }
        ]
      }
})
  