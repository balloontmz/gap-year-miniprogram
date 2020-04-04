"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        if (!wx.getStorageSync('loginStatus')) {
            console.log('没有查询到登录状态  直接设为 false');
            wx.setStorageSync('loginStatus', false);
        }
        wx.login({
            success: function (res) {
                console.log("授权登录码为:", res.code);
            },
        });
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
                else {
                    console.log('没有授权用户信息');
                }
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFBUixpQkFzQ0M7UUFwQ0MsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDcEMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDeEM7UUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUEsR0FBRztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFbEMsQ0FBQztTQUNGLENBQUMsQ0FBQTtRQUVGLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQSxHQUFHO2dCQUNWLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUVyQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7NEJBRVYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFJdkMsSUFBSSxLQUFJLENBQUMscUJBQXFCLEVBQUU7Z0NBQzlCLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTs2QkFDaEM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtpQkFDeEI7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuQXBwPElBcHBPcHRpb24+KHtcbiAgZ2xvYmFsRGF0YToge30sXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIGNvbnN0IGxvZ3MgPSB3eC5nZXRTdG9yYWdlU3luYygnbG9ncycpIHx8IFtdXG4gICAgbG9ncy51bnNoaWZ0KERhdGUubm93KCkpXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xvZ3MnLCBsb2dzKVxuICAgIGlmICghd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ2luU3RhdHVzJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfmsqHmnInmn6Xor6LliLDnmbvlvZXnirbmgIEgIOebtOaOpeiuvuS4uiBmYWxzZScpXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9naW5TdGF0dXMnLCBmYWxzZSlcbiAgICB9XG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCLmjojmnYPnmbvlvZXnoIHkuLo6XCIsIHJlcy5jb2RlKVxuICAgICAgICAvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgfSxcbiAgICB9KVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXG4gICAgICAgICAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAgICAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ+ayoeacieaOiOadg+eUqOaIt+S/oeaBrycpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSlcbiAgfSxcbn0pIl19