---
title: 前言
---

::: info 提示
贴心的为你提供以下安装技术文档
:::

## 服务器

### 系统要求

> 服务器系统要求：Linux 系统
>
> 推荐使用 Debian 10、Debian 11、Debian 12、 Ubuntu 20 Ubuntu 21、Ubuntu 22

### 配置要求

> 服务器配置要求：1 核 1G 以上
>
> 建议配置：2 核 2G 以上

### 一键安装脚本

跟安装宝塔面板一样，运行一行命令，你只管输入 yes 或者 no

Ubuntu/Debian

```bash
wget -O sforum_ubuntu.sh https://ghproxy.typecho.ltd/https://raw.githubusercontent.com/zhuchunshu/sforum-script/main/install/ubuntu.sh && bash ./sforum_ubuntu.sh
```

Centos

```bash
wget -O sforum_centos.sh https://ghproxy.typecho.ltd/https://raw.githubusercontent.com/zhuchunshu/sforum-script/main/install/centos.sh && bash ./sforum_centos.sh
```

获取存放 SForum 服务 docker-compose.yml 文件的目录列表

```bash
wget -O sforum_get_all_services.sh https://ghproxy.typecho.ltd/https://raw.githubusercontent.com/zhuchunshu/sforum-script/main/get_all_services.sh && bash ./sforum_get_all_services.sh
```

自动获取系统信息进行安装

```bash
wget -O sforum_install.sh https://ghproxy.typecho.ltd/https://raw.githubusercontent.com/zhuchunshu/sforum-script/main/install.sh && bash ./sforum_install.sh
```

### docker 部署

如果你图省事，想 3 分钟内安装完毕，可以点击这里：[Docker 部署](/use/docker)

### 反代配置

如果你已经部署完毕并启动了 SForum 服务，需要反向代理 SForum，请点击这里:[反向代理](/use/reverse-proxy.md)

### 遇到问题

当你安装时遇到问题请前往 [论坛](https://www.runpod.cn)反馈 ，或者进 QQ 群 798695907 免费获取技术支持。

在反馈前请善用论坛搜索 ，并查看：[常见问题页面](/use/help)

## 安装视频

因为 B 站上传视频会自动压缩，高清视频教程下载地址：[https://pan.quark.cn/s/696f1b22c484](https://pan.quark.cn/s/696f1b22c484)

B 站：[https://www.bilibili.com/video/BV1ch4y1f7Di/](https://www.bilibili.com/video/BV1ch4y1f7Di/)
