---
title: 常见问题/服务补救
icon: ask
---

### 网站报错
如下图所示,当网站发生类似错误时，可以在终端中运行以下命令解决：
如果你是docer部署，则需要进入容器终端运行以下命令。
```bash
php CodeFec
```

![83B03EB7EA81C8AF73CCCE01337E6257.png](/images/83B03EB7EA81C8AF73CCCE01337E6257.png)

### 网站502
1. 检查SForum是否正常启动
2. 检查反向代理是否配置正确
3. 上传插件、删除插件、重启服务会有短暂502情况，一般几秒就会恢复（根据机器配置来）。

## 更新报错

### 第一种
只会发生在docker环境下，如果你看到了类似以下错误：

![QQ20230206-200654.png](/images/QQ20230206-200654.png)

在容器终端内运行以下命令：
```bash
rm -rf runtime
```
然后重新执行更新命令即可。

### 第二种
如果你看到了类似以下错误：

![QQ20230215-0.png](/images/QQ20230215-0.png)

```bash
                                               
  An option with shortcut "n" already exists.  
                                               

CodeFec:Upgrading [--enable-event-dispatcher] [-f|--force] [-n|--no-backup]

```

那么在SFourm根目录下运行以下命令即可解决：
:::info 小提示
docker 环境下，进入容器终端就是SForum根目录 (/data/www)
:::

```bash
# 国外服务器
wget https://raw.githubusercontent.com/zhuchunshu/SForum/master/app/Command/CodeFec/Upgrading.php -O ./app/Command/CodeFec/Upgrading.php && composer du -o && php CodeFec

#国内服务器
wget https://gitee.com/zhuchunshu/SForum/raw/master/app/Command/CodeFec/Upgrading.php -O ./app/Command/CodeFec/Upgrading.php && composer du -o && php CodeFec
```

以上命令执行完毕后，重新运行更新命令即可：`php CodeFec CodeFec:U`