---
title: 插件的使用
---
## 安装插件
后台路径：组件->上传

![](/images/QQ20230320-172649.png)
上传插件后，打开终端运行以下命令来刷新缓存并启用插件：
```bash
composer update -o
```
跑完以上命令后重启SForum服务即可。
## 卸载插件
后台路径：组件->管理，找到对应插件后点击卸载即可。

![](/images/QQ20230320-173146.png)
卸载插件后，打开终端运行以下命令来刷新缓存：
```bash
composer update -o
```
跑完以上命令后重启SForum服务即可。
