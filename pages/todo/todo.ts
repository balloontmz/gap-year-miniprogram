// todo.ts
// 获取应用实例

Page({
    data: {
        loginStatus: false,
        taskCount: 0,
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

    onTapNavigateBtn(e: any) {
        console.log('点击跳转按钮事件为:', e)
        if (this.data.loginStatus == false) {
            console.log('登录状态为 false,直接忽略')
            wx.showLoading({
                title: '请先登录',
            })
            setTimeout(() => {
                wx.hideLoading()
            }, 2000)
            return
        }
        wx.navigateTo({
            url: e.target.dataset.path,
        })
    },

    onNavigatorToTaskPool() {
        if (this.data.loginStatus == false) {
            console.log('登录状态为 false,直接忽略')

        } else {
            wx.navigateTo({
                url: '/pages/task_list/task_list',
            })
        }
    },

    onNavigatorToMyTask() {
        if (this.data.loginStatus == false) {
            console.log('登录状态为 false,直接忽略')
            return
        }
        wx.navigateTo({
            url: '/pages/user_task_list/user_task_list',
        })
    }
})
