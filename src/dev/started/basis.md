---
title: 最基本的
---
安装 [SFdev辅助插件](/dev/dev-tool/)后，运行 `php CodeFec gen:plugin` 命令开始创建一个插件

![/images/QQ20230208-225920.png](/images/QQ20230208-225920.png)

完成创建后，打开插件目录(app/Plugins/插件目录名)，即可看到类似以下信息：

![/images/QQ20230208-230216.png](/images/QQ20230208-230216.png)

### 初始化方法
插件会在程序请求成功后进行初始化，如果你想让程序初始化时运行一些代码，需要写在 插件名.php类 -> handler方法里：

![QQ20230208-230629.png](/images/QQ20230208-230629.png)

### 使用composer包
你会发现,插件目录下有一个 `composer.json`文件，你只需要把引入包的信息写在里面，然后在终端运行：`composer update` 即可。

![QQ20230208-230915.png](/images/QQ20230208-230915.png)

### 创建blade视图
blade.php 视图文件，你应该放在`插件目录/resources/views/`目录下，使用时只需：`插件目录名::视图`即可。

如下图中的视图，使用方法应该是:
```php
return view("One::a")
// or
return view("One::more.b")
```
```blade
@include("One::a")
// or
@include("One::more.b")
```

![QQ20230208-231130.png](/images/QQ20230208-231130.png)

### 静态资源
插件的静态资源应该放到 `public/plugins` 目录下，发布时运行 `php CodeFec CodeFec:A` 命令，将资源发布到插件文件夹内。

