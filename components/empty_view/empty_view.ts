// components/empty_view/empty_view.js
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
    headHeight: 64,
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  // 在组件实例进入页面节点树时执行
  attached() {
    var self = this;
    wx.getSystemInfo({
      success(res) {
        var isIos = res.system.indexOf('iOS') > -1
        var navHeight = isIos ? 44 : 48
        console.log('高度分别为:', res.statusBarHeight, navHeight)
        self.setData({
          headHeight: res.statusBarHeight + navHeight,
        })
      }
    })
  },
})
