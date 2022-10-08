
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '新人上手文档',
  lastUpdated: true,
  base: '/beginer-docs/',
  themeConfig: {
    sidebar: [
      {
        text: '索引',
        items: [
          { text: '效率工具', link: '/tool' },
          {
            text: 'checklist',
            items: [
              { text: 'JavaScript', link: '/checklist/js.md' },
              { text: 'TypeScript', link: '/checklist/ts.md' },
              { text: 'CSS', link: '/checklist/css.md' },
              { text: '文件/文件夹命名规范', link: '/checklist/ls.md' },
              { text: 'git提交规范', link: '/checklist/git.md' },
            ],
          },
          { text: '调试技巧', link: '/debug.md' },
          { text: '模板', link: '/template' },
        ],
      },
    ],
  },
})
