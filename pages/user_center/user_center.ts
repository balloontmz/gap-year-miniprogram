// pages/user_center/user_center.ts
var startPoint: any

Page({
  data: {

  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    this.getLoginStatus()

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 屏幕宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 高度,宽度 单位为px
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
          buttonTop: res.windowHeight * 0.8
        })
      }
    })
  },

  onShow() {
    this.getLoginStatus()
  },

  getLoginStatus() {
    wx.getStorage({
      key: 'loginStatus',
      success: this.onLoginStatusGetSuccess,
      fail: this.onLoginStatusGetFail,
    })
  },

  onLoginStatusGetSuccess(e: any) {
    console.log('获取登录状态成功回调', e)
    this.setData({
      loginStatus: e.data
    })
  },

  onLoginStatusGetFail(e: any) {
    console.log('获取登录状态失败回调', e)
    wx.setStorage({
      key: 'loginStatus',
      data: false,
    })
    this.setData({
      loginStatus: false
    })
  },

  loginStatusChanged(e: any) {
    console.log('登录状态变更触发的事件回调', e)
    this.getLoginStatus()
  },

  userTaskFetch(e: any) {
    console.log('拉取用户任务回调', e)
    this.setData({
      taskCount: e.detail.count ?? 0
    })
  },


})
