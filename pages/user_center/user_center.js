"use strict";
var startPoint;
Page({
    data: {},
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        this.getLoginStatus();
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                console.log(res);
                console.log('height=' + res.windowHeight);
                console.log('width=' + res.windowWidth);
                that.setData({
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth,
                    buttonTop: res.windowHeight * 0.8
                });
            }
        });
    },
    onShow: function () {
        this.getLoginStatus();
    },
    getLoginStatus: function () {
        wx.getStorage({
            key: 'loginStatus',
            success: this.onLoginStatusGetSuccess,
            fail: this.onLoginStatusGetFail,
        });
    },
    onLoginStatusGetSuccess: function (e) {
        console.log('获取登录状态成功回调', e);
        this.setData({
            loginStatus: e.data
        });
    },
    onLoginStatusGetFail: function (e) {
        console.log('获取登录状态失败回调', e);
        wx.setStorage({
            key: 'loginStatus',
            data: false,
        });
        this.setData({
            loginStatus: false
        });
    },
    loginStatusChanged: function (e) {
        console.log('登录状态变更触发的事件回调', e);
        this.getLoginStatus();
    },
    userTaskFetch: function (e) {
        var _a;
        console.log('拉取用户任务回调', e);
        this.setData({
            taskCount: (_a = e.detail.count) !== null && _a !== void 0 ? _a : 0
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcl9jZW50ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyX2NlbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSSxVQUFlLENBQUE7QUFFbkIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFLEVBRUw7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBRXJCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXhDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO29CQUM5QixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7b0JBQzVCLFNBQVMsRUFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUc7aUJBQ2xDLENBQUMsQ0FBQTtZQUNKLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsY0FBYztRQUNaLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsYUFBYTtZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtTQUNoQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsdUJBQXVCLEVBQXZCLFVBQXdCLENBQU07UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSTtTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsb0JBQW9CLEVBQXBCLFVBQXFCLENBQU07UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDNUIsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLElBQUksRUFBRSxLQUFLO1NBQ1osQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQkFBa0IsRUFBbEIsVUFBbUIsQ0FBTTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVELGFBQWEsRUFBYixVQUFjLENBQU07O1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLFFBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLG1DQUFJLENBQUM7U0FDL0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUdGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL3VzZXJfY2VudGVyL3VzZXJfY2VudGVyLnRzXG52YXIgc3RhcnRQb2ludDogYW55XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG5cbiAgfSxcbiAgLy8g5LqL5Lu25aSE55CG5Ye95pWwXG4gIGJpbmRWaWV3VGFwKCkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiAnLi4vbG9ncy9sb2dzJyxcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nZXRMb2dpblN0YXR1cygpXG5cbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOWxj+W5leWuveW6puOAgemrmOW6plxuICAgICAgICBjb25zb2xlLmxvZygnaGVpZ2h0PScgKyByZXMud2luZG93SGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3dpZHRoPScgKyByZXMud2luZG93V2lkdGgpO1xuICAgICAgICAvLyDpq5jluqYs5a695bqmIOWNleS9jeS4unB4XG4gICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgd2luZG93SGVpZ2h0OiByZXMud2luZG93SGVpZ2h0LFxuICAgICAgICAgIHdpbmRvd1dpZHRoOiByZXMud2luZG93V2lkdGgsXG4gICAgICAgICAgYnV0dG9uVG9wOiByZXMud2luZG93SGVpZ2h0ICogMC44XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBvblNob3coKSB7XG4gICAgdGhpcy5nZXRMb2dpblN0YXR1cygpXG4gIH0sXG5cbiAgZ2V0TG9naW5TdGF0dXMoKSB7XG4gICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICBrZXk6ICdsb2dpblN0YXR1cycsXG4gICAgICBzdWNjZXNzOiB0aGlzLm9uTG9naW5TdGF0dXNHZXRTdWNjZXNzLFxuICAgICAgZmFpbDogdGhpcy5vbkxvZ2luU3RhdHVzR2V0RmFpbCxcbiAgICB9KVxuICB9LFxuXG4gIG9uTG9naW5TdGF0dXNHZXRTdWNjZXNzKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCfojrflj5bnmbvlvZXnirbmgIHmiJDlip/lm57osIMnLCBlKVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2dpblN0YXR1czogZS5kYXRhXG4gICAgfSlcbiAgfSxcblxuICBvbkxvZ2luU3RhdHVzR2V0RmFpbChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygn6I635Y+W55m75b2V54q25oCB5aSx6LSl5Zue6LCDJywgZSlcbiAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgIGtleTogJ2xvZ2luU3RhdHVzJyxcbiAgICAgIGRhdGE6IGZhbHNlLFxuICAgIH0pXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxvZ2luU3RhdHVzOiBmYWxzZVxuICAgIH0pXG4gIH0sXG5cbiAgbG9naW5TdGF0dXNDaGFuZ2VkKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCfnmbvlvZXnirbmgIHlj5jmm7Top6blj5HnmoTkuovku7blm57osIMnLCBlKVxuICAgIHRoaXMuZ2V0TG9naW5TdGF0dXMoKVxuICB9LFxuXG4gIHVzZXJUYXNrRmV0Y2goZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ+aLieWPlueUqOaIt+S7u+WKoeWbnuiwgycsIGUpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHRhc2tDb3VudDogZS5kZXRhaWwuY291bnQgPz8gMFxuICAgIH0pXG4gIH0sXG5cblxufSlcbiJdfQ==