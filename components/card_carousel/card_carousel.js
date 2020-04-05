"use strict";
var touch = [0, 0];
var api = require('../../utils/request/api');
Component({
    properties: {
        loginStatus: {
            type: String,
            value: 'false',
        }
    },
    data: {
        cardData: [
            {
                id: 0,
                name: '壁花少年',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                detail: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
                processID: 0,
                processStatus: 0,
            },
            {
                id: 1,
                name: '十面埋伏',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                detail: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
                processID: 0,
                processStatus: 0,
            },
            {
                id: 2,
                name: '笑傲江湖',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                detail: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
                processID: 0,
                processStatus: 0,
            },
        ],
        testCurrentNav: 0,
        currentIndex: 0,
        currentCard: {},
        cardDistance: 0,
        classArray: ['active', 'next'],
    },
    methods: {
        onTouchStart: function (e) {
            console.log(e);
            touch[0] = e.touches[0].clientX;
        },
        onTouchEnd: function (e) {
            touch[1] = e.changedTouches[0].clientX;
            if (touch[0] - touch[1] > 5) {
                this.addClassName('left');
            }
            else if (touch[1] - touch[0] > 5) {
                this.addClassName('right');
            }
        },
        addClassName: function (direction) {
            var currentIndex = this.data.currentIndex;
            var currentCard = {};
            var cardData = this.data.cardData;
            var length = cardData.length;
            var classArray = new Array(length);
            if (direction === 'left') {
                if (++currentIndex >= length)
                    return;
                classArray[currentIndex] = 'active';
                classArray[currentIndex - 1] = 'prev';
                if (currentIndex + 1 < length) {
                    classArray[currentIndex + 1] = 'next';
                }
            }
            else if (direction === 'right') {
                if (--currentIndex < 0)
                    return;
                if (currentIndex - 1 >= 0) {
                    classArray[currentIndex - 1] = 'prev';
                }
                classArray[currentIndex] = 'active';
                classArray[currentIndex + 1] = 'next';
            }
            currentCard = cardData[currentIndex];
            this.moveCard(direction);
            this.setData({
                currentIndex: currentIndex,
                classArray: classArray,
                currentCard: currentCard,
            });
        },
        moveCard: function (direction) {
            var cardDistance = this.data.cardDistance;
            if (direction === 'left') {
                cardDistance -= 549;
            }
            else if (direction === 'right') {
                cardDistance += 549;
            }
            this.setData({
                cardDistance: cardDistance
            });
        },
        getTaskList: function () {
            var _this = this;
            wx.showLoading({
                title: '获取电影列表...',
            });
            console.log('调用 get list');
            api.userTaskList({
                can_complete: 1
            }).then(function (res) {
                console.log(res);
                var list = new Array();
                for (var index = 0; index < res.data.length; index++) {
                    var element = res.data[index];
                    list.push({
                        id: element.id,
                        name: element.name,
                        detail: element.detail,
                        processID: element.process ? element.process.id : 0,
                        processStatus: element.process ? element.process.status : 0
                    });
                }
                console.log('赋值完成的 list 为:', list);
                _this.fetchUpdateCount(res.data.length);
                _this.setData({
                    cardData: list
                });
            }).catch(function (err) {
                console.log('拉取任务失败,返回为:', err);
                _this.fetchUpdateCount(0);
            });
            wx.hideLoading();
        },
        fetchUpdateCount: function (count) {
            var fetchTaskEventDetail = {
                count: count
            };
            var fetchTaskEventOption = {};
            this.triggerEvent('fetchUserUnCompletedTask', fetchTaskEventDetail, fetchTaskEventOption);
        },
        onTapNavigateTo: function (e) {
            console.log(e);
            var id = e.currentTarget.dataset.id;
            console.log(id, e);
        },
        onTapLogin: function (e) {
            console.log(e);
            wx.login({
                success: function (res) {
                    console.log("第一步:授权登录码为:", res.code);
                    wx.setStorage({
                        data: res.code,
                        key: 'temp-auth-code'
                    });
                },
            });
        },
        getUserInfo: function (e) {
            var _this = this;
            console.log('第二步:授权获取到的信息为:', e);
            var code = wx.getStorageSync('temp-auth-code');
            api.wxLogin({
                code: code,
                encrypted_data: e.detail.encryptedData,
                iv: e.detail.iv,
            }).then(function (res) {
                console.log(res);
                _this.setUpUserToken(res);
            }).catch(function (err) {
                console.log(err);
            });
        },
        setUpUserToken: function (res) {
            wx.setStorage({
                data: 'Bearer ' + res.data.access_token,
                key: 'token',
                success: this.setLoginStatus(this.onLoginStatusChanged(this)),
            });
        },
        setLoginStatus: function (callBack) {
            return function (e) {
                console.log('设置 token 成功回调', e);
                wx.setStorage({
                    key: 'loginStatus',
                    data: true,
                    success: callBack
                });
            };
        },
        onLoginStatusChanged: function (self) {
            return function (e) {
                console.log('登录状态变更 回调', e);
                var myEventDetail = {};
                var myEventOption = {};
                self.triggerEvent('loginStatusUpdated', myEventDetail, myEventOption);
            };
        },
        onQuickCompleted: function (e) {
            console.log('点击了快速完成', e);
            api.quickComplete({ process_id: e.target.dataset.processId }).then(function (res) {
                console.log('快速完成任务的返回结果为', res);
            }).catch(function (err) {
                console.log('请求失败的返回结果为:', err);
            });
            this.setData({});
        }
    },
    attached: function () {
        this.getTaskList();
        console.log('当前登录状态为:', this.properties.loginStatus);
    },
    observers: {
        'loginStatus': function (loginStatus) {
            console.log('监听到loginStatus修改', loginStatus);
            if (loginStatus == 'true') {
                this.getTaskList();
            }
            else {
                this.setData({
                    cardData: [
                        {
                            id: 0,
                            name: '壁花少年',
                            image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                            detail: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                            category: '青春 / 成长 / 美国 / 爱情',
                            processID: 0,
                            processStatus: 0,
                        },
                    ]
                });
            }
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZF9jYXJvdXNlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmRfY2Fyb3VzZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUksR0FBRyxHQUF1QixPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQTtBQUVoRSxTQUFTLENBQUM7SUFJTixVQUFVLEVBQUU7UUFDUixXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxPQUFPO1NBQ2pCO0tBQ0o7SUFLRCxJQUFJLEVBQUU7UUFDRixRQUFRLEVBQUU7WUFDTjtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsc0VBQXNFO2dCQUM3RSxNQUFNLEVBQUUsd1NBQXdTO2dCQUNoVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixTQUFTLEVBQUUsQ0FBQztnQkFDWixhQUFhLEVBQUUsQ0FBQzthQUNuQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE1BQU0sRUFBRSx3U0FBd1M7Z0JBQ2hULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFNBQVMsRUFBRSxDQUFDO2dCQUNaLGFBQWEsRUFBRSxDQUFDO2FBQ25CO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLHNFQUFzRTtnQkFDN0UsTUFBTSxFQUFFLHdTQUF3UztnQkFDaFQsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsU0FBUyxFQUFFLENBQUM7Z0JBQ1osYUFBYSxFQUFFLENBQUM7YUFDbkI7U0FDSjtRQUNELGNBQWMsRUFBRSxDQUFDO1FBQ2pCLFlBQVksRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLEVB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Q0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRUQsU0FBUyxFQUFFO1FBQ1AsYUFBYSxFQUFFLFVBQVUsV0FBVztZQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFBO1lBQzVDLElBQUksV0FBVyxJQUFJLE1BQU0sRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO2FBQ3JCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1QsUUFBUSxFQUFFO3dCQUNOOzRCQUNJLEVBQUUsRUFBRSxDQUFDOzRCQUNMLElBQUksRUFBRSxNQUFNOzRCQUNaLEtBQUssRUFBRSxzRUFBc0U7NEJBQzdFLE1BQU0sRUFBRSx3U0FBd1M7NEJBQ2hULFFBQVEsRUFBRSxtQkFBbUI7NEJBQzdCLFNBQVMsRUFBRSxDQUFDOzRCQUNaLGFBQWEsRUFBRSxDQUFDO3lCQUNuQjtxQkFDSjtpQkFDSixDQUFDLENBQUE7YUFDTDtRQUVMLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvY2FyZF9jYXJvdXNlbC9jYXJkX2Nhcm91c2VsLnRzXG5cbnZhciB0b3VjaCA9IFswLCAwXTtcbnZhciBhcGk6IEFwaVJlcXVlc3QuUmVxdWVzdCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QvYXBpJylcblxuQ29tcG9uZW50KHtcbiAgICAvKipcbiAgICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICAgKi9cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxvZ2luU3RhdHVzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2ZhbHNlJyxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICAgKi9cbiAgICBkYXRhOiB7XG4gICAgICAgIGNhcmREYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WjgeiKseWwkeW5tCcsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL21vdmllLTEyNTY5NDgxMzIuY29zLmFwLWJlaWppbmcubXlxY2xvdWQuY29tL3AxODc0ODE2ODE4LmpwZycsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAn5p+l55CG77yI572X5qC5wrfli5Lmm7wgTG9nYW4gTGVybWFuIOmlsO+8ieaYr+S4quWus+e+nuWSjOWtpOeLrOeahOmrmOS4reaWsOeUn++8jOaLpeaciei2hei2iuW5tOm+hOeahOaVj+aEn+WSjOazquiFuu+8jOaAu+aYr+m7mOm7mOinguWvn+i6q+i+ueeahOWutuS6uuWSjOaci+WPi++8jOaYr+S4quWFuOWei+eahOOAjOWjgeiKseWwkeW5tOOAjeOAguS7lueahOmdkuaYpeacn+WFhea7oeWQhOenjeaMq+aKmO+8jOWFiOWQjue7j+WOhuS6humYv+WnqOS4uue7meS7luS5sOeUn+aXpeekvOeJqeWOu+S4luOAgeacgOWlveaci+WPi+iHquadgOOAgeWPl+WQjOS+quaOkuaMpOasuui0n+OAgeWNleaBi+ayoeacieWbnuW6lOetieWQhOenjeS6i+aDheOAgueEtuiAjOafpeeQhui/mOS4jeaYr+acgOaDqOeahO+8jOWboOS4uuWSjOS7luS4gOagt+iiq+eUn+a0u+mAvOWFpeWimeinkue9muermeeahOS6uuWunuWcqOWkquWkmuOAguS7luW5uOi/kOeahOaLpeacieS4gOS4quW8gOaYjueahOiAgeW4iOWSjOS4pOS4qumrmOW5tOe6p+eahOWlveWPi++8muWPm+mAhuWoh+S/j+eahOWwkeWls+ePiu+8iOiJvueOm8K35rKD5qOuIEVtbWEgV2F0c29uIOmlsO+8ieWSjOiHquS/oea7oea7oeeahOWQjOW/l+eUt+eUn+W4leeJuemHjOWFi++8iOWfg+WFueaLicK357Gz5YuSIEV6cmEgTWlsbGVyIOmlsO+8ie+8jOS7luS7rOiuqeafpeeQhuaYjueZveS6huacieaXtuWAmeS4jeiDveawuOi/nOaXgeingu+8jOW/hemhu+imgeWPguS4jui/m+adpeaJjeiDveaLpeacieWxnuS6juiHquW3seeahOeyvuW9qeOAgiAnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAn6Z2S5pilIC8g5oiQ6ZW/IC8g576O5Zu9IC8g54ix5oOFJyxcbiAgICAgICAgICAgICAgICBwcm9jZXNzSUQ6IDAsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1N0YXR1czogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WNgemdouWfi+S8jycsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL21vdmllLTEyNTY5NDgxMzIuY29zLmFwLWJlaWppbmcubXlxY2xvdWQuY29tL3AxODc0ODE2ODE4LmpwZycsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAn5p+l55CG77yI572X5qC5wrfli5Lmm7wgTG9nYW4gTGVybWFuIOmlsO+8ieaYr+S4quWus+e+nuWSjOWtpOeLrOeahOmrmOS4reaWsOeUn++8jOaLpeaciei2hei2iuW5tOm+hOeahOaVj+aEn+WSjOazquiFuu+8jOaAu+aYr+m7mOm7mOinguWvn+i6q+i+ueeahOWutuS6uuWSjOaci+WPi++8jOaYr+S4quWFuOWei+eahOOAjOWjgeiKseWwkeW5tOOAjeOAguS7lueahOmdkuaYpeacn+WFhea7oeWQhOenjeaMq+aKmO+8jOWFiOWQjue7j+WOhuS6humYv+WnqOS4uue7meS7luS5sOeUn+aXpeekvOeJqeWOu+S4luOAgeacgOWlveaci+WPi+iHquadgOOAgeWPl+WQjOS+quaOkuaMpOasuui0n+OAgeWNleaBi+ayoeacieWbnuW6lOetieWQhOenjeS6i+aDheOAgueEtuiAjOafpeeQhui/mOS4jeaYr+acgOaDqOeahO+8jOWboOS4uuWSjOS7luS4gOagt+iiq+eUn+a0u+mAvOWFpeWimeinkue9muermeeahOS6uuWunuWcqOWkquWkmuOAguS7luW5uOi/kOeahOaLpeacieS4gOS4quW8gOaYjueahOiAgeW4iOWSjOS4pOS4qumrmOW5tOe6p+eahOWlveWPi++8muWPm+mAhuWoh+S/j+eahOWwkeWls+ePiu+8iOiJvueOm8K35rKD5qOuIEVtbWEgV2F0c29uIOmlsO+8ieWSjOiHquS/oea7oea7oeeahOWQjOW/l+eUt+eUn+W4leeJuemHjOWFi++8iOWfg+WFueaLicK357Gz5YuSIEV6cmEgTWlsbGVyIOmlsO+8ie+8jOS7luS7rOiuqeafpeeQhuaYjueZveS6huacieaXtuWAmeS4jeiDveawuOi/nOaXgeingu+8jOW/hemhu+imgeWPguS4jui/m+adpeaJjeiDveaLpeacieWxnuS6juiHquW3seeahOeyvuW9qeOAgiAnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAn6Z2S5pilIC8g5oiQ6ZW/IC8g576O5Zu9IC8g54ix5oOFJyxcbiAgICAgICAgICAgICAgICBwcm9jZXNzSUQ6IDAsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1N0YXR1czogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgbmFtZTogJ+eskeWCsuaxn+a5licsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL21vdmllLTEyNTY5NDgxMzIuY29zLmFwLWJlaWppbmcubXlxY2xvdWQuY29tL3AxODc0ODE2ODE4LmpwZycsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAn5p+l55CG77yI572X5qC5wrfli5Lmm7wgTG9nYW4gTGVybWFuIOmlsO+8ieaYr+S4quWus+e+nuWSjOWtpOeLrOeahOmrmOS4reaWsOeUn++8jOaLpeaciei2hei2iuW5tOm+hOeahOaVj+aEn+WSjOazquiFuu+8jOaAu+aYr+m7mOm7mOinguWvn+i6q+i+ueeahOWutuS6uuWSjOaci+WPi++8jOaYr+S4quWFuOWei+eahOOAjOWjgeiKseWwkeW5tOOAjeOAguS7lueahOmdkuaYpeacn+WFhea7oeWQhOenjeaMq+aKmO+8jOWFiOWQjue7j+WOhuS6humYv+WnqOS4uue7meS7luS5sOeUn+aXpeekvOeJqeWOu+S4luOAgeacgOWlveaci+WPi+iHquadgOOAgeWPl+WQjOS+quaOkuaMpOasuui0n+OAgeWNleaBi+ayoeacieWbnuW6lOetieWQhOenjeS6i+aDheOAgueEtuiAjOafpeeQhui/mOS4jeaYr+acgOaDqOeahO+8jOWboOS4uuWSjOS7luS4gOagt+iiq+eUn+a0u+mAvOWFpeWimeinkue9muermeeahOS6uuWunuWcqOWkquWkmuOAguS7luW5uOi/kOeahOaLpeacieS4gOS4quW8gOaYjueahOiAgeW4iOWSjOS4pOS4qumrmOW5tOe6p+eahOWlveWPi++8muWPm+mAhuWoh+S/j+eahOWwkeWls+ePiu+8iOiJvueOm8K35rKD5qOuIEVtbWEgV2F0c29uIOmlsO+8ieWSjOiHquS/oea7oea7oeeahOWQjOW/l+eUt+eUn+W4leeJuemHjOWFi++8iOWfg+WFueaLicK357Gz5YuSIEV6cmEgTWlsbGVyIOmlsO+8ie+8jOS7luS7rOiuqeafpeeQhuaYjueZveS6huacieaXtuWAmeS4jeiDveawuOi/nOaXgeingu+8jOW/hemhu+imgeWPguS4jui/m+adpeaJjeiDveaLpeacieWxnuS6juiHquW3seeahOeyvuW9qeOAgiAnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAn6Z2S5pilIC8g5oiQ6ZW/IC8g576O5Zu9IC8g54ix5oOFJyxcbiAgICAgICAgICAgICAgICBwcm9jZXNzSUQ6IDAsXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1N0YXR1czogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3RDdXJyZW50TmF2OiAwLFxuICAgICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICAgIGN1cnJlbnRDYXJkOiB7fSxcbiAgICAgICAgLy8gbW92aWVBbmltYXRpb25EYXRhOiAnJyxcbiAgICAgICAgY2FyZERpc3RhbmNlOiAwLFxuICAgICAgICBjbGFzc0FycmF5OiBbJ2FjdGl2ZScsICduZXh0J10sIC8vIOWumuS5iWNsYXNz5pWw57uE77yM5a2Y5pS+5qC35byPY2xhc3PvvIxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAgICovXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDlvIDlp4vmu5HliqhcbiAgICAgICAgb25Ub3VjaFN0YXJ0KGU6IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcblxuICAgICAgICAgICAgdG91Y2hbMF0gPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICB9LFxuICAgICAgICAvLyDnu5PmnZ/mu5HliqhcbiAgICAgICAgb25Ub3VjaEVuZChlOiBhbnkpIHtcbiAgICAgICAgICAgIHRvdWNoWzFdID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgaWYgKHRvdWNoWzBdIC0gdG91Y2hbMV0gPiA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ2xlZnQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG91Y2hbMV0gLSB0b3VjaFswXSA+IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSgncmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkQ2xhc3NOYW1lKGRpcmVjdGlvbjogYW55KSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmN1cnJlbnRJbmRleFxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDYXJkID0ge31cbiAgICAgICAgICAgIGxldCBjYXJkRGF0YSA9IHRoaXMuZGF0YS5jYXJkRGF0YVxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGNhcmREYXRhLmxlbmd0aFxuICAgICAgICAgICAgbGV0IGNsYXNzQXJyYXkgPSBuZXcgQXJyYXkobGVuZ3RoKVxuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHsgIC8vIOWQkeW3pua7keWKqFxuICAgICAgICAgICAgICAgIGlmICgrK2N1cnJlbnRJbmRleCA+PSBsZW5ndGgpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXhdID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXggLSAxXSA9ICdwcmV2JztcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleCArIDFdID0gJ25leHQnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHsgIC8vIOWQkeWPs+a7keWKqFxuICAgICAgICAgICAgICAgIGlmICgtLWN1cnJlbnRJbmRleCA8IDApIHJldHVyblxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleCAtIDFdID0gJ3ByZXYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleF0gPSAnYWN0aXZlJztcbiAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleCArIDFdID0gJ25leHQnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYXJkID0gY2FyZERhdGFbY3VycmVudEluZGV4XVxuICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyZChkaXJlY3Rpb24pXG5cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LFxuICAgICAgICAgICAgICAgIGNsYXNzQXJyYXksXG4gICAgICAgICAgICAgICAgY3VycmVudENhcmQsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDliJvlu7rlubPnp7vliqjnlLtcbiAgICAgICAgbW92ZUNhcmQoZGlyZWN0aW9uOiBhbnkpIHtcbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuY3VycmVudEluZGV4ICsgMVxuICAgICAgICAgICAgbGV0IGNhcmREaXN0YW5jZSA9IHRoaXMuZGF0YS5jYXJkRGlzdGFuY2VcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgY2FyZERpc3RhbmNlIC09IDU0OVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBjYXJkRGlzdGFuY2UgKz0gNTQ5XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY2FyZERpc3RhbmNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICog6I635Y+W55S15b2x5L+h5oGvXG4gICAgICAgICAqL1xuICAgICAgICBnZXRUYXNrTGlzdCgpIHtcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+iOt+WPlueUteW9seWIl+ihqC4uLicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+iwg+eUqCBnZXQgbGlzdCcpXG5cbiAgICAgICAgICAgIC8v5ouJ5Y+W5pWw5o2u6L+b6KGM5pi+56S6XG4gICAgICAgICAgICBhcGkudXNlclRhc2tMaXN0KHtcbiAgICAgICAgICAgICAgICBjYW5fY29tcGxldGU6IDFcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gbmV3IEFycmF5KClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXMuZGF0YVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogZWxlbWVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzSUQ6IGVsZW1lbnQucHJvY2VzcyA/IGVsZW1lbnQucHJvY2Vzcy5pZCA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzU3RhdHVzOiBlbGVtZW50LnByb2Nlc3MgPyBlbGVtZW50LnByb2Nlc3Muc3RhdHVzIDogMFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfotYvlgLzlrozmiJDnmoQgbGlzdCDkuLo6JywgbGlzdClcblxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hVcGRhdGVDb3VudChyZXMuZGF0YS5sZW5ndGgpXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZERhdGE6IGxpc3RcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aLieWPluS7u+WKoeWksei0pSzov5Tlm57kuLo6JywgZXJyKVxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hVcGRhdGVDb3VudCgwKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIC8vICAgICBjYXJkRGF0YTogZGF0YS5kYXRhLFxuICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRDYXJkOiBkYXRhLmRhdGFbMF1cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgZmV0Y2hVcGRhdGVDb3VudChjb3VudDogTnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgZmV0Y2hUYXNrRXZlbnREZXRhaWwgPSB7XG4gICAgICAgICAgICAgICAgY291bnQ6IGNvdW50XG4gICAgICAgICAgICB9IC8vIGRldGFpbOWvueixoe+8jOaPkOS+m+e7meS6i+S7tuebkeWQrOWHveaVsFxuICAgICAgICAgICAgdmFyIGZldGNoVGFza0V2ZW50T3B0aW9uID0ge30gLy8g6Kem5Y+R5LqL5Lu255qE6YCJ6aG5XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZmV0Y2hVc2VyVW5Db21wbGV0ZWRUYXNrJywgZmV0Y2hUYXNrRXZlbnREZXRhaWwsIGZldGNoVGFza0V2ZW50T3B0aW9uKVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLy8g5a6e546w6aG16Z2i6Lez6L2sXG4gICAgICAgIG9uVGFwTmF2aWdhdGVUbyhlOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgICAgICAgICAgY29uc29sZS5sb2coaWQsIGUpXG5cbiAgICAgICAgICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgLy8gICAgIHVybDogJy9wYWdlcy9hdXRob3JpemUvYXV0aG9yaXplJyxcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy/ms6jmhI/lhYjosIMgbG9naW4s5YaN6LCDIHVzZXJJbmZvXG4gICAgICAgIC8vaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaXByb2dyYW0vZGV2L2ZyYW1ld29yay9vcGVuLWFiaWxpdHkvc2lnbmF0dXJlLmh0bWwjJUU1JThBJUEwJUU1JUFGJTg2JUU2JTk1JUIwJUU2JThEJUFFJUU4JUE3JUEzJUU1JUFGJTg2JUU3JUFFJTk3JUU2JUIzJTk1XG4gICAgICAgIG9uVGFwTG9naW4oZTogYW55KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuXG4gICAgICAgICAgICAvL+aOiOadgyBjb2RlIOacieaViOacn+WPquaciSA1IOWIhumSny5cbiAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuesrOS4gOatpTrmjojmnYPnmbvlvZXnoIHkuLo6XCIsIHJlcy5jb2RlKVxuICAgICAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlcy5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAndGVtcC1hdXRoLWNvZGUnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC8vIOWPkemAgSByZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgICAgICAgICAvL+W+ruS/oeaCqOaWh+S7tuWtmOWCqFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaXByb2dyYW0vZGV2L2FwaS9zdG9yYWdlL3d4LmdldFN0b3JhZ2VTeW5jLmh0bWxcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnrKzkuozmraU65o6I5p2D6I635Y+W5Yiw55qE5L+h5oGv5Li6OicsIGUpXG4gICAgICAgICAgICB2YXIgY29kZSA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0ZW1wLWF1dGgtY29kZScpXG4gICAgICAgICAgICBhcGkud3hMb2dpbih7XG4gICAgICAgICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICAgICAgICBlbmNyeXB0ZWRfZGF0YTogZS5kZXRhaWwuZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgICAgICAgICBpdjogZS5kZXRhaWwuaXYsXG4gICAgICAgICAgICB9KS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVwVXNlclRva2VuKHJlcylcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldFVwVXNlclRva2VuKHJlczogYW55KSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiAnQmVhcmVyICcgKyByZXMuZGF0YS5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgICAgICAga2V5OiAndG9rZW4nLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRoaXMuc2V0TG9naW5TdGF0dXModGhpcy5vbkxvZ2luU3RhdHVzQ2hhbmdlZCh0aGlzKSksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldExvZ2luU3RhdHVzKGNhbGxCYWNrOiBXZWNoYXRNaW5pcHJvZ3JhbS5TZXRTdG9yYWdlU3VjY2Vzc0NhbGxiYWNrKTogV2VjaGF0TWluaXByb2dyYW0uU2V0U3RvcmFnZVN1Y2Nlc3NDYWxsYmFjayB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGU6IFdlY2hhdE1pbmlwcm9ncmFtLkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCforr7nva4gdG9rZW4g5oiQ5Yqf5Zue6LCDJywgZSlcbiAgICAgICAgICAgICAgICAvL+iuvue9rueZu+W9leaIkOWKn3RhZ1xuICAgICAgICAgICAgICAgIC8vIHd4LnNldFN0b3JhZ2VTeW5jKFxuICAgICAgICAgICAgICAgIC8vICAgICAnbG9naW5TdGF0dXMnLFxuICAgICAgICAgICAgICAgIC8vICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnbG9naW5TdGF0dXMnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBjYWxsQmFja1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Mb2dpblN0YXR1c0NoYW5nZWQoc2VsZik6IFdlY2hhdE1pbmlwcm9ncmFtLlNldFN0b3JhZ2VTdWNjZXNzQ2FsbGJhY2sge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V54q25oCB5Y+Y5pu0IOWbnuiwgycsIGUpXG4gICAgICAgICAgICAgICAgdmFyIG15RXZlbnREZXRhaWwgPSB7fSAvLyBkZXRhaWzlr7nosaHvvIzmj5Dkvpvnu5nkuovku7bnm5HlkKzlh73mlbBcbiAgICAgICAgICAgICAgICB2YXIgbXlFdmVudE9wdGlvbiA9IHt9IC8vIOinpuWPkeS6i+S7tueahOmAiemhuVxuICAgICAgICAgICAgICAgIHNlbGYudHJpZ2dlckV2ZW50KCdsb2dpblN0YXR1c1VwZGF0ZWQnLCBteUV2ZW50RGV0YWlsLCBteUV2ZW50T3B0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uUXVpY2tDb21wbGV0ZWQoZTogYW55KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn54K55Ye75LqG5b+r6YCf5a6M5oiQJywgZSlcbiAgICAgICAgICAgIGFwaS5xdWlja0NvbXBsZXRlKHsgcHJvY2Vzc19pZDogZS50YXJnZXQuZGF0YXNldC5wcm9jZXNzSWQgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5b+r6YCf5a6M5oiQ5Lu75Yqh55qE6L+U5Zue57uT5p6c5Li6JywgcmVzKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ivt+axguWksei0peeahOi/lOWbnue7k+aenOS4ujonLCBlcnIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHt9KVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLmdldFRhc2tMaXN0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCflvZPliY3nmbvlvZXnirbmgIHkuLo6JywgdGhpcy5wcm9wZXJ0aWVzLmxvZ2luU3RhdHVzKVxuICAgIH0sXG5cbiAgICBvYnNlcnZlcnM6IHtcbiAgICAgICAgJ2xvZ2luU3RhdHVzJzogZnVuY3Rpb24gKGxvZ2luU3RhdHVzKSB7XG4gICAgICAgICAgICAvLyDlnKggbnVtYmVyQSDmiJbogIUgbnVtYmVyQiDooqvorr7nva7ml7bvvIzmiafooYzov5nkuKrlh73mlbBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnm5HlkKzliLBsb2dpblN0YXR1c+S/ruaUuScsIGxvZ2luU3RhdHVzKVxuICAgICAgICAgICAgaWYgKGxvZ2luU3RhdHVzID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGFza0xpc3QoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBjYXJkRGF0YTogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICflo4HoirHlsJHlubQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9tb3ZpZS0xMjU2OTQ4MTMyLmNvcy5hcC1iZWlqaW5nLm15cWNsb3VkLmNvbS9wMTg3NDgxNjgxOC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogJ+afpeeQhu+8iOe9l+agucK35YuS5pu8IExvZ2FuIExlcm1hbiDppbDvvInmmK/kuKrlrrPnvp7lkozlraTni6znmoTpq5jkuK3mlrDnlJ/vvIzmi6XmnInotoXotorlubTpvoTnmoTmlY/mhJ/lkozms6rohbrvvIzmgLvmmK/pu5jpu5jop4Llr5/ouqvovrnnmoTlrrbkurrlkozmnIvlj4vvvIzmmK/kuKrlhbjlnovnmoTjgIzlo4HoirHlsJHlubTjgI3jgILku5bnmoTpnZLmmKXmnJ/lhYXmu6HlkITnp43mjKvmipjvvIzlhYjlkI7nu4/ljobkuobpmL/lp6jkuLrnu5nku5bkubDnlJ/ml6XnpLznianljrvkuJbjgIHmnIDlpb3mnIvlj4voh6rmnYDjgIHlj5flkIzkvqrmjpLmjKTmrLrotJ/jgIHljZXmgYvmsqHmnInlm57lupTnrYnlkITnp43kuovmg4XjgILnhLbogIzmn6XnkIbov5jkuI3mmK/mnIDmg6jnmoTvvIzlm6DkuLrlkozku5bkuIDmoLfooqvnlJ/mtLvpgLzlhaXlopnop5LnvZrnq5nnmoTkurrlrp7lnKjlpKrlpJrjgILku5blubjov5DnmoTmi6XmnInkuIDkuKrlvIDmmI7nmoTogIHluIjlkozkuKTkuKrpq5jlubTnuqfnmoTlpb3lj4vvvJrlj5vpgIblqIfkv4/nmoTlsJHlpbPnj4rvvIjoib7njpvCt+ayg+ajriBFbW1hIFdhdHNvbiDppbDvvInlkozoh6rkv6Hmu6Hmu6HnmoTlkIzlv5fnlLfnlJ/luJXnibnph4zlhYvvvIjln4Plhbnmi4nCt+exs+WLkiBFenJhIE1pbGxlciDppbDvvInvvIzku5bku6zorqnmn6XnkIbmmI7nmb3kuobmnInml7blgJnkuI3og73msLjov5zml4Hop4LvvIzlv4XpobvopoHlj4LkuI7ov5vmnaXmiY3og73mi6XmnInlsZ7kuo7oh6rlt7HnmoTnsr7lvanjgIIgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ+mdkuaYpSAvIOaIkOmVvyAvIOe+juWbvSAvIOeIseaDhScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc0lEOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NTdGF0dXM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSxcbn0pIl19