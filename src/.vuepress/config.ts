import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  plugins: [
    searchProPlugin({

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
