---
title: 常用函数
---

### public_path
获取程序public目录路径或目录下的文件绝对路径
```php
<?php

echo public_path();
// /data/www/public

echo public_path("a");
// /data/www/public/a
?>
```

### plugin_path
获取程序app/Plugins目录路径或目录下的文件绝对路径
```php
<?php

echo plugin_path();
// /data/www/app/Plugins

echo plugin_path("a");
// /data/www/app/Plugins/a
?>
```

### arr_has
函数使用「.」符号判断数组中是否存在指定的一个或多个键：

用法:arr_has(array 数组,string 键名)
```php
<?php
$array = ['product' => ['name' => 'Desk', 'price' => 100]];
$contains = arr_has($array, 'product.name');
// true
$contains = arr_has($array, ['product.price', 'product.discount']);
// false
?>
```

### container
容器实例
```php
<?php
// 创建一个Redis实例
$redis = container()->get(Redis::class);
// cache 实例
$cache =  container()->get(Psr\SimpleCache\CacheInterface::class);
?>
```

### response
响应接口的实例化：[https://hyperf.wiki/3.0/#/zh-cn/response](https://hyperf.wiki/3.0/#/zh-cn/response)
```php
<?php
return response()->json(['hello World]);
>
```

### request
请求接口的实例化：[https://hyperf.wiki/3.0/#/zh-cn/request](https://hyperf.wiki/3.0/#/zh-cn/request)
```php
<?php
return request()->query();
?>
```

### view
用于返回渲染后的视图信息,用法: view(string 视图名,array 传入数据,int 网页状态码)
```php
<?php
    // data:渲染视图带入的数据, code: 网页状态码,默认200
    return view("app.index",array $data=[],$code = 200);
    //return view("app.index");
?>
```

### json_api
返回json api数据信息
```php
<?php
return json_api(200,true,['msg' => 'success']):array;
// {"code":200,"success":true,"result":{"msg":"success"},"RequestTime":"2023-02-08 22:11:41"}
?>
```

### session
[https://hyperf.wiki/3.0/#/zh-cn/session](https://hyperf.wiki/3.0/#/zh-cn/session)
session 接口实例化：
```php
<?php
return session()->getId();
// 7B79eJz8P3xf7hz5ZDcDupuaAUe8Baf6X9FwybzF
?>
```

### getPath
获取目录下的所有文件
```php
<?php
return getPath(BASE_PATH);
// [".DS_Store",".dockerignore",".env",".env.example",".git",".gitattributes",".github",".gitignore",".idea",".php-cs-fixer.php","CodeFec","Dockerfile","LICENSE","README.md","app","bin","build-info.php","composer.json","composer.lock","config","docker-compose-test.yml","docker-compose.yml","migrations","node_modules","package-lock.json","package.json","phpstan.neon","plugins.mix.js","public","resources","runtime","storage","test","vendor","webpack.mix.js","yarn.lock"]
?>
```

### admin_abort
返回error页面，用法：admin_abort(array|string 响应信息,int 状态码,string 跳转链接)
```php
<?php
return admin_abort('页面不存在',404,'/');
// return admin_abort(['msg' => '需要登陆'],403,'/login);
?>
```

### deldir
彻底删除一个目录，用法：deldir(string 路径)
```php
<?php
return deldir(BASE_PATH."/runtime/views");
?>
```

### copy_dir
复制目录，用法：copy_dir(string from,string to)
```php
<?php
return copy_dir(BASE_PATH."/runtime/views",BASE_PATH."/runtime");
?>
```

### get_client_ip
获取客户端ip信息
```php
<?php
return get_client_ip();
// 0.0.0.0
?>
```

### make_page
生成分页html代码
```blade
{!! make(\Hyperf\Contract\LengthAwarePaginatorInterface $page,$view="default") !!}
```

### get_options
获取admin_options 表里的单条信息,用法：get_options(string name,string 默认值)
```php
<?php
return get_options("APP_NAME","SForum");
?>
```

### set_options
设置admin_options 表里的单条值,不存在则新建，用法：set_options(string name,string value)
```php
<?php
set_options("APP_NAME","123");
return get_options("APP_NAME","SForum");
// 123
?>
```

### options_clear
清理admin_options 表的缓存

### csrf_token
获取csrf_token信息
```php
return csrf_token();
// asdjashdsauix89432dsa
```

### url
获取网站url信息
```php
return url();
// http://www.sforum.cn
return url('/1');
// // http://www.sforum.cn/1
```

### plugins
插件实例
plugin():\App\CodeFec\Plugins

### http
轻量http请求客户端，用法：http(string $response_type = 'array'):\Overtrue\Http\Client

### captcha
验证码实例,captcha():\App\CodeFec\Captcha

### get_user_agent
获取客户端user agent信息.
```php
<?php
return get_user_agent();
// Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1
?>
```

### get_client_ip_data
获取IP信息,用法：get_client_ip_data(string $ip):array
```php
<?php
return get_client_ip_data('8.8.8.8');
// {"ip":"8.8.8.8","beginip":"8.8.8.8","endip":"8.8.8.8","country":"美国","area":"加利福尼亚州圣克拉拉县山景市谷歌公司DNS服务器","pro":"美国"}
?>
```

### admin_log
admin_log 实例，admin_log():\App\CodeFec\Admin\LogServer

### pay
支付服务实例,pay():App\Plugins\Core\src\Lib\Pay\PayService

