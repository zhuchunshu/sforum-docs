import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "使用教程",
      icon: "creative",
      link: "use/",
    },
    {
      text: "开发文档",
      icon: "note",
      link: "dev/",
    },
    {
      icon: "discover",
      text: "客户案例",
      prefix: "demo/",
      link: "demo/",
    },
  ],
  "/use/":[
    "",
    {
      icon: "launch",
      text: "docker部署",
      prefix: "docker/",
      link: "docker/",
      children: "structure",
    },
    {
      icon: "arrow",
      text: "原生部署",
      prefix: "source/",
      link: "source/",
      children: "structure",
    },
    {
      icon:"proxy",
      text:"反向代理",
      link:"reverse-proxy"
    },
    "update",
    "help"
  ]
});
