---
title: 对docker容器的一些操作
---
当我们的服务跑起来时，有时候需要对docker容器进行一些常规操作，如果你是小白，那么这篇文章可以帮助你快速学习。

### 进入容器终端

有些时候我们不得不进入容器终端来执行一些操作，比如：升级，那么接下来我将教你如何进入容器终端。

运行以下命令查看运行中的容器并找到SForum：

```bash
docker container ls
```
![https://www.runpod.cn/upload/topic/202301/27/1_1674830679_0bwvSl66o9.png](https://www.runpod.cn/upload/topic/202301/27/1_1674830679_0bwvSl66o9.png)

复制CONTAINER ID 并运行以下命令进入容器终端：

```bash
docker exec -it [CONTAINER ID] bash
```

例如

```bash
docker exec -it 86b0726eaf0f bash
```
出现类似下图信息则代表你已成功进入容器终端。

![https://www.runpod.cn/upload/topic/202301/27/1_1674830918_SSyriYyJwi.png](https://www.runpod.cn/upload/topic/202301/27/1_1674830918_SSyriYyJwi.png)

退出容器终端

```bash
exit
```

### 重启容器

重启可以解决`90%`的问题，接下来我将教你如何重启容器。

运行以下命令查看运行中的容器并找到SForum：

```bash
docker container ls
```
![https://www.runpod.cn/upload/topic/202301/27/1_1674830679_0bwvSl66o9.png](https://www.runpod.cn/upload/topic/202301/27/1_1674830679_0bwvSl66o9.png)

复制CONTAINER ID 并运行以下命令重启容器：

```bash
docker restart [CONTAINER ID]
```

例如

```bash
docker restart 86b0726eaf0f
```
![2023-02-05141247.png](/images/2023-02-05141247.png)

出现上图提示证明重启完成。