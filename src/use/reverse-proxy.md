---
title: 反向代理
icon: proxy
description: 本文将带领你学习使用反向代理服务
---

SForum WEB服务启动后，默认会占用(宿)主机9501端口。所以我们服务器绑定域名后，只需开启反向代理到9501端口即可访问SForum。

如果你配置了其他端口，那么你就要像之前一样灵活的反代你所配置的端口。

## 使用宝塔面板反代
请确保你的宝塔面板使用的服务器软件为:nginx。因为apache等软件反代效果不是很好，或者说根本不支持反代。

我们新建一个网站，域名输入你要绑定的域名，PHP版本选择纯静态：

![QQ20230205-144633.png](/images/QQ20230205-144633.png)

网站创建完成后点击域名进入站点修改：

![QQ20230205-144936.png](/images/QQ20230205-144936.png)

左侧点击反向代理，并点击添加反向代理

![QQ20230205-145211.png](/images/QQ20230205-145211.png)

代理名称随意(英文)。
目标url 填写 你要反代的url，例如`http://127.0.0.1:9501`(默认)。
填完后点击提交即可。
![QQ20230205-145303.png](/images/QQ20230205-145303.png)

## 使用caddy反代
看到这里，想必你不是个小白，那么就不教你caddy的安装和使用了

Caddyfile配置文件:

```Caddyfile
域名 {
    encode zstd gzip
    reverse_proxy 127.0.0.1:9501
}

```
## nginx反向代理配置
如果你了解nginx如何使用，并且会对nginx网站进行配置，那么可以参考以下配置信息添加到nginx网站配置文件内。

```nginx

#PROXY-START/

location /
{
    proxy_pass http://127.0.0.1:9501;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection $connection_upgrade;
    proxy_http_version 1.1;
    # proxy_hide_header Upgrade;

    add_header X-Cache $upstream_cache_status;

    #Set Nginx Cache
    
    
    set $static_fileKCYSoGCO 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
    	set $static_fileKCYSoGCO 1;
    	expires 1m;
        }
    if ( $static_fileKCYSoGCO = 0 )
    {
    add_header Cache-Control no-cache;
    }
}

#PROXY-END/
```

## 反代完成后
接下来访问 域名进入 最后安装页面

![2023-02-05152657.png](/images/2023-02-05152657.png)

## 安装完成后

访问域名/admin 进入后台

找到:组件-> 管理

然后点击对所有已启动插件进行数据迁移

![uploadtopic202212091167058073534HloRS8Nv.png](https://www.runpod.cn/upload/topic/202212/09/1_1670580735_34HloRS8Nv.png)
