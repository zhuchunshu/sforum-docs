import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "使用文档",
    icon: "creative",
    link: "/guide/",
  },
  {
    text: "开发文档",
    icon: "note",
    link: "/dev/",
  },
  { text: "论坛", icon: "community", link: "https://www.runpod.cn" },
  { text: "案例", icon: "discover", link: "/demo/" },
]);
