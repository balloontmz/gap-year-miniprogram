// components/headertabbar/headertabbar.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        activeColor: {
            type: String,
            value: '#ffffff'
        },
        normalColor: {
            type: String,
            value: '#e3d9d0'
        },
        active: {
            type: Number,
            value: 2,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTapNavigateTo(e) {
            console.log(e)
            let id = e.currentTarget.dataset.id
            console.log(id, e)

            if (id == 1) {
                wx.navigateTo({
                    url: '/pages/todo/todo',
                })
            } else {
                wx.navigateTo({
                    url: '/pages/index/index',
                })
            }


        },
    },
    // 在组件实例进入页面节点树时执行
    attached() {
        var self = this;
        wx.getSystemInfo({
            success(res) {
                var isIos = res.system.indexOf('iOS') > -1
                var navHeight = isIos ? 44 : 48
                self.setData({
                    headHeight: res.statusBarHeight + navHeight,
                })
            }
        })
    }
})