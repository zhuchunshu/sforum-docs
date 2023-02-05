---
title: 使用docker-compose进阶配置
---
SForum 在其 Docker Hub 组织内提供自动更新的 Docker 镜像。可以始终使用最新的稳定标签或使用其他服务来拉取 Docker 镜像。


## 基本
最简单的设置只是创建一个卷和一个网络，然后将 zhuchunshu/sforum:latest 镜像作为服务启动。创建一个类似 sforum 的目录，并将以下内容粘贴到名为 docker-compose.yml 的文件中。另请注意，标签 :latest 将安装当前的开发版本。

```yml
version: '3'
services:
  web:
    image: zhuchunshu/sforum
    ports:
      - "9501:9501"

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
## 端口
按照以上配置 SForum docker服务启动后默认会占用宿主机9501端口，如果你不想使用此端口可以对web - ports做出调整

```yml
version: '3'
services:
  web:
    image: zhuchunshu/sforum
    ports:
    #在这里做出调整
      #- "9501:9501"
      #使用9502作为Web服务端口
      - "9502:9501"

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
