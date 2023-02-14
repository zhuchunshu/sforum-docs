---
title: 使用docker-compose安装SForum
---
如果你还没有安装docker环境，请查看此文章：[安装docker环境](/use/docker/install-docker)
### 开始部署
打开终端(ssh工具)，创建一个目录并cd进去，例如
```bash
cd ~ && mkdir SForum && cd SForum
```
### 然后下载SForum的docker-compose.yml模板:

国内服务器
```bash
wget https://gitee.com/zhuchunshu/SForum/raw/master/docker-compose.yml
```

国外服务器
```bash
wget https://raw.githubusercontent.com/zhuchunshu/SForum/master/docker-compose.yml
```
### 修改默认端口号
如果你想使用别的端口或者说你想部署多个SForum，需要修改docker-compose.yml文件，把下文代码示例中的端口号修改为你想使用的端口：
```yml
version: '3'
services:
  web:
    #zhuchunshu/sforum:v2 or ghcr.io/zhuchunshu/sforum:v2
    image: zhuchunshu/sforum
    ports:
      - "端口号:9501"

    environment:
      - DB_HOST=db
      - REDIS_HOST=redis
      - DB_DATABASE=sforum
      - DB_USERNAME=sforum
      - DB_PASSWORD=sforum

    depends_on:
      - db
      - redis
    networks:
      - sf
    volumes:
      - sforum:/data
    restart: always

  redis:
    image: redis:7.0
    restart: always
    networks:
      - sf
    volumes:
      - redis:/data
      - redis:/usr/local/etc/redis/redis.conf
      - redis:/logs

  db:
    image: mariadb:10.5.18
    restart: always
    environment:
      MARIADB_ROOT_PASSWORD: sforum
      MARIADB_DATABASE: sforum
      MARIADB_USER: sforum
      MARIADB_PASSWORD: sforum
    networks:
      - sf
    volumes:
      - db:/var/lib/mysql

networks:
  sf:
    external: false

volumes:
  sforum:
    driver: local
  db:
    driver: local
  redis:
    driver: local
```

### 启动服务
```bash
docker-compose up -d 
```
运行以上命令如果提示找不到docker-compose，那么可以运行下面的命令试一下
```bash
docker compose up -d 
```
出现下图信息证明运行成功!

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
