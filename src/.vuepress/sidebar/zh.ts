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
      icon:"proxy",
      text:"反向代理",
      link:"reverse-proxy"
    },
    {
      icon: "exercise",
      text: "SForum使用方法",
      prefix: "instructions/",
      link: "instructions/",
      children: "structure",
    },
    {
      icon: "loop",
      text: "更新",
      prefix: "update/",
      link: "update/",
      children: "structure",
    },
    "help"
  ],
  // 开发
  "/dev/":[
    "",
    {
      icon: "arrow",
      text: "入门文档",
      prefix: "started/",
      link: "started/",
      children: "structure",
    },
    {
      icon: "api",
      text: "API文档",
      prefix: "api/",
      link: "api/",
      children: "structure",
    },
    {
      icon: "plugin",
      text: "插件开发",
      prefix: "plugin/",
      link: "plugin/",
      children: "structure",
    },
    {
      icon: "linter",
      text: "主题开发",
      prefix: "theme/",
      link: "theme/",
      children: "structure",
    },
    {
      icon: "tool",
      text: "工具/函数",
      prefix: "dev-tool/",
      link: "dev-tool/",
      children: "structure",
    },
  ],
});
