// todo.ts
// 获取应用实例

var startPoint: any

Page({
    data: {
        loginStatus: false,
        taskCount: 0,

        //拖动按钮相关
        buttonTop: 0,
        buttonLeft: 0,
        windowHeight: 0,
        windowWidth: 0
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
    },

    buttonStart: function (e: any) {
        startPoint = e.touches[0]
    },
    buttonMove: function (e: any) {
        var endPoint = e.touches[e.touches.length - 1]
        var translateX = endPoint.clientX - startPoint.clientX
        var translateY = endPoint.clientY - startPoint.clientY
        startPoint = endPoint
        var buttonTop = this.data.buttonTop + translateY
        var buttonLeft = this.data.buttonLeft + translateX
        //判断是移动否超出屏幕
        if (buttonLeft + 50 >= this.data.windowWidth) {
            buttonLeft = this.data.windowWidth - 50;
        }
        if (buttonLeft <= 0) {
            buttonLeft = 0;
        }
        if (buttonTop <= 0) {
            buttonTop = 0
        }
        if (buttonTop + 50 >= this.data.windowHeight) {
            buttonTop = this.data.windowHeight - 50;
        }
        this.setData({
            buttonTop: buttonTop,
            buttonLeft: buttonLeft
        })
    },
    buttonEnd: function (e: any) {
        console.log("移动结束", e)
        var buttonLeft = this.data.buttonLeft
        if (buttonLeft >= this.data.windowWidth / 2) {
            buttonLeft = this.data.windowWidth - 50;
        }
        if (buttonLeft < this.data.windowWidth / 2) {
            buttonLeft = 0;
        }
        this.setData({
            buttonLeft: buttonLeft
        })
    },
})
