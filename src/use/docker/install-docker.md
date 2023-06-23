---
title: 安装docker环境
index: true
description: 本文将带领你学习安装docker 和 docker-compose
---
## 安装docker
无论您是什么(linux)系统,都可以通过运行以下命令进行安装docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
然后设置docker开机自启
```bash
systemctl enable docker
```
## 安装docker-compose
在 Linux 上的也安装十分简单，从 官方 GitHub Release 处直接下载编译好的二进制文件即可。
例如，在 Linux 64 位系统上直接下载对应的二进制包。
```bash
sudo curl -L curl -SL https://github.com/docker/compose/releases/download/v2.19.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose > /usr/local/bin/docker-compose
```
国内用户可以使用以下方式加快下载
```bash
sudo curl -L https://download.fastgit.org/docker/compose/releases/download/v2.19.0/docker-compose-linux-x86_64 > /usr/local/bin/docker-compose
```
运行完上面两条中其一命令后运行以下命令：
```bash
sudo chmod +x /usr/local/bin/docker-compose
```

至此，你已经完成了在服务器中部署docker环境。