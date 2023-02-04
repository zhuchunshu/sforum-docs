import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  plugins: [
    searchProPlugin({
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: {
            "/": "分类：$content",
          },
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: {
            "/": "标签：$content",
          },
        },
        {
          name: "updateTime",
          getter: (page) => page.data.git?.updateTime.toLocaleString(),
          formatter: {
            "/": "更新时间：$content",
          },
        },
      ],
    }),
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "SForum",
      description: "SForum 文档,SForum是一个高性能组件化的论坛程序,使用PHP+hypperf开发",
    },
  },

  theme,

  shouldPrefetch: false,
});
