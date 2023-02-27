---
title: 用外部mysql服务安装
---
如果你想使用远程mysql服务，例如：阿里云mysql、腾讯云mysql，那么这篇文章可以帮到你。

## 开始
先创建一个文件夹，并cd进去：
```bash
mkdir SForum && cd SForum
```
然后创建`docker-compose.yml`文件，内容如下：

## 配置
```yml
version: '3'
services:
  web:
    image: zhuchunshu/sforum
    ports:
      - "9501:9501"
    environment:
        #mysql服务器地址，例如: 64.6.6.6
      - DB_HOST=mysql主机地址
      - REDIS_HOST=redis
        #mysql数据库名
      - DB_DATABASE=database
        #mysql数据库用户名
      - DB_USERNAME=username
        #mysql数据库密码
      - DB_PASSWORD=password
    depends_on:
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

networks:
  sf:
    external: false

volumes:
  sforum:
    driver: local
  redis:
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

如果你不会，可以看此文章：[反向代理](/use/reverse-proxy.md)

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
