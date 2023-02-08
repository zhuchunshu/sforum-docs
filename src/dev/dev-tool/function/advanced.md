---
title: 高级函数
---
## Itf
\App\CodeFec\Itf\Itf\ItfInterface 接口的实例化，用于在内存中定义上下文。

### get
Itf()->get(string 分类名)，获取相关分类下的所有数据
```php
return Itf()->get('menu');
// {"menu_1":{"name":"app.home","url":"\/","icon":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" class=\"icon icon-tabler icon-tabler-home\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n   <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"><\/path>\n   <polyline points=\"5 12 3 12 12 3 21 12 19 12\"><\/polyline>\n   <path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\"><\/path>\n   <path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\"><\/path>\n<\/svg>"},"menu_101":{"name":"app.tag","url":"\/tags","icon":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" class=\"icon icon-tabler icon-tabler-tag\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n   <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"><\/path>\n   <path d=\"M11 3l9 9a1.5 1.5 0 0 1 0 2l-6 6a1.5 1.5 0 0 1 -2 0l-9 -9v-4a4 4 0 0 1 4 -4h4\"><\/path>\n   <circle cx=\"9\" cy=\"9\" r=\"2\"><\/circle>\n<\/svg>"},"menu_201":{"name":"user.list","url":"\/users","icon":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" class=\"icon icon-tabler icon-tabler-users\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n   <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"><\/path>\n   <circle cx=\"9\" cy=\"7\" r=\"4\"><\/circle>\n   <path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"><\/path>\n   <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"><\/path>\n   <path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\"><\/path>\n<\/svg>","quanxian":{}},"menu_419":{"name":"app.report center","url":"\/report","icon":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" class=\"icon icon-tabler icon-tabler-flag-3\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n   <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"><\/path>\n   <path d=\"M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16\"><\/path>\n<\/svg>","quanxian":{}}}
```
### add
新增一条数据，只能在程序/插件初始化时使用
Itf()->add(string 分类名,int 唯一id,mixed 数据)
```php
<?php
Itf()->add("menu",201,[
    "name" => "前台测试菜单",
    "url" => "/链接",
    "icon" => 'icon 代码',
]);
?>
```

### re
重写一条数据，只能在程序/插件初始化时使用
Itf()->re(string 分类名,int 唯一id,mixed 数据)
```php
<?php
Itf()->re("menu",201,[
    "name" => "前台测试菜单",
    "url" => "/链接",
    "icon" => 'icon 代码',
]);
?>
```

### del
删除一条数据，只能在程序/插件初始化时使用
Itf()->del(string 分类名,int 唯一id)
```php
<?php
Itf()->del("menu",201);
?>
```

### _del
删除一个分类，只能在程序/插件初始化时使用
Itf()->_del(string 分类名)
```php
<?php
Itf()->_del("menu",201,[
    "name" => "前台测试菜单",
    "url" => "/链接",
    "icon" => 'icon 代码',
]);
?>
```



