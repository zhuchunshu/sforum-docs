---
title: 用host网络模式安装
---
:::info 提示
使用此模式部署可以使用宿主机的mysql和redis。
:::

用docker host网络模式安装SForum，弄清楚docker网络模式：

host模式容器将不会虚拟出自己的网卡，配置自己的IP等，而是使用宿主机的IP和端口范围。如果启动容器的时候使用host模式，那么这个容器将不会获得一个独立的 NetworkNamespace，而是和宿主机共用一个 Network Namespace。容器将不会虚拟出自己的网卡，配置自己的IP等，而是使用宿主机的IP和端口。但是，容器的其他方面，如**文件系统、进程列表等还是和宿主机隔离的**。

使用host模式的容器可以直接使用宿主机的Ip地址与外界通信，容器内部的服务端口也可以使用宿主机的端口，不需要进行NAT，host最大的优势就是网络性能比较好，但是**dockerhost 上已经使用的端口就不能再用了**，网络的隔离性不好。

先创建一个文件夹，并cd进去：
```bash
mkdir SForum && cd SForum
```
然后创建`docker-compose.yml`文件，内容如下：

## 配置
### 使用宿主机mysql和redis
```yml
version: '3'
services:
  web:
    image: zhuchunshu/sforum

    environment:
        # 宿主机mysql地址，默认127.0.0.1
      - DB_HOST=127.0.0.1
        # 宿主机redis地址，默认127.0.0.1
      - REDIS_HOST=127.0.0.1
        # 宿主机mysql数据库名
      - DB_DATABASE=mysql数据库名
        # 宿主机mysql数据库用户名
      - DB_USERNAME=mysql用户名
        # 宿主机mysql数据库密码
      - DB_PASSWORD=123456
        # 宿主机mysql 端口
      #- DB_PORT=3306
        # 宿主机redis端口
      #- REDIS_PORT=6379
        # SForum WEB服务端口号
      #- SERVER_WEB_PORT=9501

    network_mode: host
    volumes:
      - sforum:/data
    restart: always

volumes:
  sforum:
    driver: local

```

## 安装
配置完成后，我们还需要启动服务。
### 启动服务
```bash
docker-compose up -d 
```
运行以上命令如果提示找不到docker-compose，那么可以运行下面的命令试一下
```bash
docker compose up -d 
```
出现**类似下图信息**证明运行成功!

![截图](/images/2023-02-05003334.png)

### 服务运行后
SForum服务运行成功后，会创建一个http 服务并占用9501端口。
那么接下来，我们需要解析域名并反向代理9501端口。

如果你不会，可以看此文章：[反向代理](/use/reverse-proxy)

接下来访问 域名进入 最后安装页面

![2023-02-05152657.png](/images/2023-02-05152657.png)

### 删除服务
如果想彻底删除此站点，可以运行以下命令：
```bash
docker-compose down
```
## 最后

访问域名/admin 进入后台

找到:组件-> 管理

然后点击对所有已启动插件进行数据迁移

![uploadtopic202212091167058073534HloRS8Nv.png](https://www.runpod.cn/upload/topic/202212/09/1_1670580735_34HloRS8Nv.png)
