---
title: 从0开始,不使用面板
---
此方法在ubuntu 20中测试通过,centos7-8 也都可用，其他系统并未测试。

使用过程中遇到问题请前往：[论坛反馈](https://www.runpod.cn/topic/create?basis[tag]=10)

## 搭建环境
耐心看吧，复制粘贴跑命令。
### 安装 PHP
```bash
wget -c http://mirrors.linuxeye.com/oneinstack-full.tar.gz && tar xzf oneinstack-full.tar.gz && ./oneinstack/install.sh --php_option 10 --phpcache_option 1 --php_extensions fileinfo,redis --phpmyadmin  --pureftpd  --redis  --memcached  --reboot 
```
![截图](https://www.runpod.cn/upload/topic/202212/09/1_1670569894_9bYbreSI3l.png)

`如果`出现下图提示直接回车就好

![截图](https://www.runpod.cn/upload/topic/202212/09/1_1670571116_ujapx0Ev51.png)

### 安装 swoole 扩展

```bash
cd /usr/local/php/include/php/ext
```

```bash
wget https://wenda-1252906962.file.myqcloud.com/dist/swoole-src-5.0.1.tar.gz -O swoole.tar.gz && tar zxvf swoole.tar.gz && rm -rf swoole.tar.gz && mv swoole-src* swoole-src && cd swoole-src
```

```bash
/usr/local/php/bin/phpize&& ./configure --enable-openssl --enable-swoole-curl --enable-http2 --with-php-config=/usr/local/php/bin/php-config
```

```bash
sudo make && make install
```

### 修改 php ini

```bash
echo "[swoole]" >> /usr/local/php/etc/php.ini

echo "extension = /usr/local/php/lib/php/extensions/no-debug-non-zts-20200930/swoole.so" >> /usr/local/php/etc/php.ini

sed -i 's/disable_functions =.*/disable_functions =/g' /usr/local/php/etc/php.ini


echo "swoole.use_shortname='Off'" >> /usr/local/php/etc/php.ini
```

### 安装 Mysql
如果你已安装 mysql 请跳过此步。
```bash
cd ~ && wget -c http://mirrors.linuxeye.com/oneinstack-full.tar.gz && tar xzf oneinstack-full.tar.gz && ./oneinstack/install.sh --db_option 2 --dbinstallmethod 1 --dbrootpwd sforum.cn --reboot 
```
默认 root密码为 sforum.cn

### 重置 mysql root 密码
```bash
cd ~/oneinstack
```
```bash
./reset_db_root_password.sh
```
出现下图提示，输入新的密码然后回车即可。

![截图](https://www.runpod.cn/upload/topic/202212/09/1_1670574991_dVH4IfQUDL.png)

### 安装 composer
```bash
wget https://mirrors.tencent.com/composer/composer.phar
sudo mv composer.phar  /usr/local/bin/composer
```
国内服务器加速:
```bash
composer config -g repos.packagist composer https://mirrors.tencent.com/composer/
```
国外服务器加速:
```bash
composer config -g repo.packagist composer https://packagist.org
```

## 正式安装
加油！ 很快了。
### 创建数据库
先运行以下命令登陆数据库
```bash
mysql -u root -p
```
如下图所示，然后输入 mysql root 密码后回车

![截图](https://www.runpod.cn/upload/topic/202212/09/1_1670575888_d65Sr1dPk8.png)

创建数据库：
```bash
create DATABASE 数据库名;
```
创建数据库用户
```bash
CREATE USER '用户名'@'localhost'  IDENTIFIED BY '密码';
```
赋予权限
```bash
GRANT ALL ON 数据库名.* TO '用户名'@'localhost';
```
### 安装程序
```bash
cd ~ && composer create-project zhuchunshu/sforum
```
如果出现下图提示,输入`yes`并回车即可。

![截图](https://www.runpod.cn/upload/topic/202208/22/1_1661161289_qDCJRnVZAc.png)

如果出现以上提示，输入 y 然后回车即可

![截图](https://www.runpod.cn/upload/topic/202208/22/1_1661161302_NNSuc5V8gy.png)

### 完成安装
以上任务完成后,我们 cd 到程序目录下进行最后几步安装
```bash
cd ~/super-forum
```
执行程序启动命令

```bash
php CodeFec CodeFec
```
然后根据提示配置相关信息并重新运行启动命令。

### 守护进程
![截图](https://www.runpod.cn/upload/topic/202208/22/1_1661161315_O3NXbO5K5T.png)
一直到最后一步出现如上图提示时，我们把命令守护起来：

## 最后

访问域名/admin 进入后台

找到:组件-> 管理

然后点击对所有已启动插件进行数据迁移

![uploadtopic202212091167058073534HloRS8Nv.png](https://www.runpod.cn/upload/topic/202212/09/1_1670580735_34HloRS8Nv.png)
