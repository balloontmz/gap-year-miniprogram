// todo.ts
// 获取应用实例

Page({
    data: {
        loginStatus: false
    },
    // 事件处理函数
    bindViewTap() {
        wx.navigateTo({
            url: '../logs/logs',
        })
    },
    onLoad() {
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
    },

    loginStatusChanged(e: any) {
        console.log('登录状态变更触发的事件回调', e)
        this.getLoginStatus()
    },
})
