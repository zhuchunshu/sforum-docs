import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "使用文档",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "开发文档",
      icon: "note",
      prefix: "dev/",
      children: "structure",
    },
    {
      icon: "discover",
      text: "客户案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
  ],
});
