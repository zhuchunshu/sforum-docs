---
title: 使用宝塔面板安装
---
### 环境要求
宝塔面板安装完成之后，需要安装以下软件

| 软件名 | 版本号              |
| -------- | --------------------- |
| Mysql  | 5.6 以上 , 推荐 5.7 |
| Redis  | 5.* 以上版本        |
| PHP    | 8.0                 |
| Nginx  | 推荐 1.18 以上版本  |

以上软件安装完成之后，安装 PHP 扩展

可以一键安装 fileinfo 和 redis 扩展

![uploadtopic2022082211661161377iRT1vP81Zj.png](https://www.runpod.cn/upload/topic/202208/22/1_1661161377_iRT1vP81Zj.png)

还有 swoole 扩展需要我们手动编译安装,(不手动编译安装没法用,宝塔太拉了)

### 编译安装 swoole

```shell
cd /www/server/php/80/src/ext
wget https://wenda-1252906962.file.myqcloud.com/dist/swoole-src-5.0.1.tar.gz -O swoole.tar.gz
tar zxvf swoole.tar.gz && rm -rf swoole.tar.gz
mv swoole-src* swoole-src
cd swoole-src
/www/server/php/80/bin/phpize && ./configure --enable-openssl --enable-swoole-curl --enable-http2 --with-php-config=/www/server/php/80/bin/php-config
sudo make && make install
echo "[swoole]" >> /www/server/php/80/etc/php.ini
echo "extension = /www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930/swoole.so" >> /www/server/php/80/etc/php.ini
echo "[swoole]" >> /www/server/php/80/etc/php-cli.ini
echo "extension = /www/server/php/80/lib/php/extensions/no-debug-non-zts-20200930/swoole.so" >> /www/server/php/80/etc/php-cli.ini
```

### 修改 php 配置文件

```shell
sed -i 's/disable_functions =.*/disable_functions =/g' /www/server/php/80/etc/php.ini
echo "swoole.use_shortname='Off'" >> /www/server/php/80/etc/php.ini
sed -i 's/disable_functions =.*/disable_functions =/g' /www/server/php/80/etc/php-cli.ini
echo "swoole.use_shortname='Off'" >> /www/server/php/80/etc/php-cli.ini
```

### 设置命令行 PHP 版本

![uploadtopic2022083011661867307DIUpMasydw.png](https://www.runpod.cn/upload/topic/202208/30/1_1661867307_DIUpMasydw.png)

### 确保所有 PHP 禁用函数被解除

![uploadtopic2022083011661867757NNQIvp0bC8.png](https://www.runpod.cn/upload/topic/202208/30/1_1661867757_NNQIvp0bC8.png)

### 创建数据库

![uploadtopic2022082211661161422EPlPtzFJSz.png](https://www.runpod.cn/upload/topic/202208/22/1_1661161422_EPlPtzFJSz.png)

### 创建网站项目

```shell
cd /www/wwwroot && composer create-project zhuchunshu/sforum SForum
```

![uploadtopic2022082211661161445O2eSKGqaON.png](https://www.runpod.cn/upload/topic/202208/22/1_1661161445_O2eSKGqaON.png)

出现这个提示输入 yes 之后回车出现上图提示输入 yes 之后回车即可

![uploadtopic2022082211661161466EmGyKVxFGS.png](https://www.runpod.cn/upload/topic/202208/22/1_1661161466_EmGyKVxFGS.png)

出现此提示输入 y 然后回车出现以上提示，输入 y 然后回车即可

### 完成安装

以上任务完成后,我们 cd 到程序目录下进行最后几步安装

```shell
cd /www/wwwroot/SForum
```

执行程序启动命令

```shell
php CodeFec CodeFec
```

然后根据提示配置相关信息并重新运行启动命令

![uploadtopic2022082211661161483HXF8Q7cZbL.png](https://www.runpod.cn/upload/topic/202208/22/1_1661161483_HXF8Q7cZbL.png)

一直到最后一步出现如上图提示时，我们开始守护进程

[查看守护进程方法](/use/source/daemon-process.html#宝塔面板)

然后访问 IP:9501 即可如果要绑定域名，请走反向代理的方式反代以下两个端口

> WEB 服务: IP:9501


详细方法请看:

> [使用宝塔面板反代](/use/reverse-proxy.html#使用宝塔面板反代)

### 最后

访问域名/admin 进入后台

找到:组件-> 管理

然后点击对所有已启动插件进行数据迁移

![uploadtopic202212091167058073534HloRS8Nv.png](https://www.runpod.cn/upload/topic/202212/09/1_1670580735_34HloRS8Nv.png)
