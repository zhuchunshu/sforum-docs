import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "使用教程",
    icon: "creative",
    prefix: "/use/",
    children: [
      { text: "一键安装脚本", link: "https://www.runpod.cn/715.html" },
      { text: "使用docker部署", link: "docker/README.md" },
      { text: "常见问题", link: "help"},
    ],
  },
  {
    text: "开发文档",
    icon: "code",
    prefix: "/dev/",
    children: [
      { text: "入门文档", link: "README.md" },
      { text: "API文档", link: "api/README.md" },
      { text: "插件开发", link: "plugin/README.md"},
      { text: "主题开发", link: "theme/README.md"},
      { text: "工具/函数", link: "dev-tool"},
    ],
  },
  { text: "论坛", icon: "community", link: "https://www.runpod.cn" },
  { text: "案例", icon: "discover", link: "/demo/" },
]);
