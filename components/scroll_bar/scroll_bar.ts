// components/scroll_bar/scroll_bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    msgList: [
      { url: "url", title: "公告：多地首套房贷利率上浮 热点城市渐迎零折扣时代" },
      { url: "url", title: "公告：悦如公寓三周年生日趴邀你免费吃喝欢唱" },
      { url: "url", title: "公告：你想和一群有志青年一起过生日嘛？" }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  // 在组件实例刚刚被创建时执行
  //创建时添加数据无法第一时间渲染！！！
  created() {
  }
})
