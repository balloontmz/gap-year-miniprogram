// components/card_carousel/card_carousel.ts

var touch = [0, 0];
var api = require('../../utils/request/api')

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
        cardData: [
            {
                id: 0,
                name: '壁花少年',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                detail: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
            },
            {
                id: 1,
                name: '十面埋伏',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                detail: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
            },
            {
                id: 2,
                name: '笑傲江湖',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                detail: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
            },
        ],
        testCurrentNav: 0,
        currentIndex: 0,
        currentCard: {},
        // movieAnimationData: '',
        cardDistance: 0,
        classArray: ['active', 'next'], // 定义class数组，存放样式class，
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 开始滑动
        onTouchStart(e: any) {
            console.log(e)

            touch[0] = e.touches[0].clientX
        },
        // 结束滑动
        onTouchEnd(e: any) {
            touch[1] = e.changedTouches[0].clientX;
            if (touch[0] - touch[1] > 5) {
                this.addClassName('left');
            } else if (touch[1] - touch[0] > 5) {
                this.addClassName('right');
            }
        },
        addClassName(direction: any) {
            let currentIndex = this.data.currentIndex
            let currentCard = {}
            let cardData = this.data.cardData
            let length = cardData.length
            let classArray = new Array(length)

            if (direction === 'left') {  // 向左滑动
                if (++currentIndex >= length) return

                classArray[currentIndex] = 'active';
                classArray[currentIndex - 1] = 'prev';
                if (currentIndex + 1 < length) {
                    classArray[currentIndex + 1] = 'next';
                }

            } else if (direction === 'right') {  // 向右滑动
                if (--currentIndex < 0) return

                if (currentIndex - 1 >= 0) {
                    classArray[currentIndex - 1] = 'prev';
                }
                classArray[currentIndex] = 'active';
                classArray[currentIndex + 1] = 'next';

            }

            currentCard = cardData[currentIndex]
            this.moveCard(direction)

            this.setData({
                currentIndex,
                classArray,
                currentCard,
            })
        },
        // 创建平移动画
        moveCard(direction: any) {
            // let currentIndex = this.data.currentIndex + 1
            let cardDistance = this.data.cardDistance

            if (direction === 'left') {
                cardDistance -= 549
            } else if (direction === 'right') {
                cardDistance += 549
            }

            this.setData({
                cardDistance
            })
        },
        /**
         * 获取电影信息
         */
        getMovieList() {
            wx.showLoading({
                title: '获取电影列表...',
            })

            //拉取数据进行显示
            api.userTaskList().then((res: any) => {
                console.log(res)
                let list = new Array()
                for (let index = 0; index < res.data.length; index++) {
                    const element = res.data[index];
                    list.push({
                        id: element.id,
                        name: element.name,
                        detail: element.detail,
                    })

                }
                console.log('赋值完成的 list 为:', list)
                this.setData({
                    cardData: list
                })
            })

            wx.hideLoading()
            // this.setData({
            //     cardData: data.data,
            //     currentCard: data.data[0]
            // })
        },
        // 实现页面跳转
        onTapNavigateTo(e: any) {
            console.log(e)
            let id = e.currentTarget.dataset.id
            console.log(id, e)

            // wx.navigateTo({
            //     url: '/pages/authorize/authorize',
            // })
        },

        //注意先调 login,再调 userInfo
        //https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95
        onTapLogin(e: any) {
            console.log(e)

            //授权 code 有效期只有 5 分钟.
            wx.login({
                success: res => {
                    console.log("第一步:授权登录码为:", res.code)
                    wx.setStorage({
                        data: res.code,
                        key: 'temp-auth-code'
                    })
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                },
            })
        },

        getUserInfo(e: any) {
            //微信您文件存储
            // https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html
            console.log('第二步:授权获取到的信息为:', e)
            var code = wx.getStorageSync('temp-auth-code')
            api.wxLogin({
                code: code,
                encrypted_data: e.detail.encryptedData,
                iv: e.detail.iv,
            }).then((res: any) => {
                console.log(res)
                wx.setStorage({
                    data: 'Bearer ' + res.data.access_token,
                    key: 'token',
                    success: function (e: any) {
                        console.log('设置 token 成功回调', e)
                        //设置登录成功tag
                        wx.setStorage({
                            data: true,
                            key: 'loginStatus',
                            success: function (e: any) {
                                console.log('设置登录状态为已登录', e)
                                //此时需要重新加载页面???
                            }
                        })
                    }
                })
            }).catch((err: any) => {
                console.log(err)
            });
        }
    },

    attached() {
        this.getMovieList();
    }
})