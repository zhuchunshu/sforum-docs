---
title: 守护进程
---

## supervisor
### 安装
提供下面几种supervisor安装方法

centos 配置好yum源后，可以直接安装
```bash
yum install supervisor
```
centos 安装成功后，还需运行以下命令：
```bash
systemctl start supervisord.service     //启动supervisor并加载默认配置文件
systemctl enable supervisord.service    //将supervisor加入开机启动项
```

Debian/Ubuntu可通过apt安装
```bash
apt-get install supervisor
```
通过pip安装

```bash
 pip install supervisor
```
通过easy_install安装
```bash
 easy_install supervisor
```
### 配置
首先需要创建子配置文件，我们cd 到 `/etc/supervisord.d/` 目录下。
在此目录下创建一个后缀为.ini的文件，例如: forum.ini，在文件内插入以下内容(记得修改)

```ini
[program:forum]
command=php CodeFec CodeFec
directory=sforum根目录，例如/www/wwwroot/sforum
autorestart=true
startsecs=3
startretries=3
stdout_logfile=sforum根目录/runtime/forum.out.log，例如/www/wwwroot/sforum/runtime/forum.out.log
stderr_logfile=sforum根目录/runtime/forum.err.log，例如/www/wwwroot/sforum/runtime/forum.err.log
stdout_logfile_maxbytes=2MB
stderr_logfile_maxbytes=2MB
user=root
priority=999
numprocs=1
process_name=%(program_name)s_%(process_num)02d
```

### 启动
配置完成后，运行以下命令启动：
```bash
supervisorctl start all
```
## 宝塔面板
宝塔环境，可以安装堡塔应用管理器并添加应用进行如下配置：

![https://www.runpod.cn/upload/topic/202301/08/1_1673192693_9YaoHflCz4.png](https://www.runpod.cn/upload/topic/202301/08/1_1673192693_9YaoHflCz4.png)

启动文件选择sforum目录下的CodeFec文件,执行目录选择sforum目录，启动参数填写: CodeFec

[查看守护进程方法](/use/source/daemon-process.html#宝塔面板)

然后访问 IP:9501 即可如果要绑定域名，请走反向代理的方式反代以下两个端口

> WEB 服务: IP:9501


详细方法请看:

> [使用宝塔面板反代](/use/reverse-proxy.html#使用宝塔面板反代)
