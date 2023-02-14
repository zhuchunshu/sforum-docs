---
title: 更新SForum
---
:::info
遇到问题不要慌,点击这里查看一些解决方法：[服务补救](/use/help.html#更新报错)，如果服务补救没能帮到你，请前往QQ群或论坛反馈。
:::
### 执行更新

如果你当前 super-forum >= V2.2.0 可以在 super-forum 根目录下直接运行以下命令进行升级

```bash
php CodeFec CodeFec:U && php CodeFec
```

### 杀死super-forum服务
确保内存缓存刷新，可以进行如下操作
```bash
php CodeFec CodeFec:K && php CodeFec
```
杀死后再重启就好，如果你用 supervisor 守护的 super-forum 进程，则运行以下命令重启。

```bash
sudo supervisorctl restart all
```
如果用的其他方式守护 super-forum，想必你自己知道该怎么重启

### 更新完成后
更新完成后在网站根目录下运行以下命令：
```bash
composer update && php CodeFec CodeFec:K && php CodeFec ClearCache && && php CodeFec
```
然后重启守护进程即可,（堡塔应用管理器应该先停止再启动）
