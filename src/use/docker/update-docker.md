---
title: 在docker环境中升级SForum
index: true
---
### 进入容器终端

首先需要进入容器终端，如果你不会，请阅读这篇文章：[对docker容器的一些操作](/use/docker/operate-container.html#进入容器终端)

### 执行升级命令
进入容器终端后执行以下命令来进行更新:
```bash
php CodeFec CodeFec:U && php CodeFec
```
更新完成后运行以下命令退出容器终端
```bash
exit
```
### 重启容器
退出容器终端后我们确保程序程序缓存能得到有效的清理，可以通过重启容器来解决，如果你不会，请阅读：[对docker容器的一些操作](/use/docker/operate-container.html#重启容器)
