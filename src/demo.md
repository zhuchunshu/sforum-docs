---
title: 客户案例
icon: splotch

docs:
  - name: RunPod
    desc: 程序员站长交流社区
    logo: https://www.runpod.cn/upload/admin/202301/23/1_1674480447_fRDsJ5uoCs.png
    url: https://www.runpod.cn
    # repo: https://github.com/dromara/fast-request
    preview: https://www.runpod.cn/upload/topic/202302/04/1_1675507621_Vj7H0nWMag.png

---

为尊重用户隐私，我们看不到使用者信息，故我们不会主动将您的站点信息添加到此页面。如需上榜可通过Github Pr 或论坛发帖

<SiteInfo
  v-for="item in $frontmatter.docs"
  :key="item.link"
  v-bind="item"
/>
