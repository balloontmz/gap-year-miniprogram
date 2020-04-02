"use strict";
var touch = [0, 0];
var cardApi = require('../../utils/request/api');
Component({
    properties: {},
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
        getMovieList: function () {
            var _this = this;
            wx.showLoading({
                title: '获取电影列表...',
            });
            cardApi.userTaskList().then(function (res) {
                console.log(res);
                var list = new Array();
                for (var index = 0; index < res.data.length; index++) {
                    var element = res.data[index];
                    list.push({
                        id: element.id,
                        name: element.name,
                        detail: element.detail,
                    });
                }
                console.log('赋值完成的 list 为:', list);
                _this.setData({
                    cardData: list
                });
            });
            wx.hideLoading();
        },
        onTapNavigateTo: function (e) {
            console.log(e);
            var id = e.currentTarget.dataset.id;
            console.log(id, e);
            wx.navigateTo({
                url: '/pages/detail/detail?id=' + id,
            });
        },
    },
    attached: function () {
        this.getMovieList();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZF9jYXJvdXNlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmRfY2Fyb3VzZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0FBRWxELFNBQVMsQ0FBQztJQUlOLFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFLHNFQUFzRTtnQkFDN0UsTUFBTSxFQUFFLHdTQUF3UztnQkFDaFQsUUFBUSxFQUFFLG1CQUFtQjthQUNoQztZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLE1BQU0sRUFBRSx3U0FBd1M7Z0JBQ2hULFFBQVEsRUFBRSxtQkFBbUI7YUFDaEM7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsc0VBQXNFO2dCQUM3RSxNQUFNLEVBQUUsd1NBQXdTO2dCQUNoVCxRQUFRLEVBQUUsbUJBQW1CO2FBQ2hDO1NBQ0o7UUFDRCxjQUFjLEVBQUUsQ0FBQztRQUNqQixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxFQUFFO1FBRWYsWUFBWSxFQUFFLENBQUM7UUFDZixVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0tBQ2pDO0lBS0QsT0FBTyxFQUFFO1FBRUwsWUFBWSxFQUFaLFVBQWEsQ0FBTTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFZCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9B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cy9jYXJkX2Nhcm91c2VsL2NhcmRfY2Fyb3VzZWwudHNcblxudmFyIHRvdWNoID0gWzAsIDBdO1xuY29uc3QgY2FyZEFwaSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QvYXBpJylcblxuQ29tcG9uZW50KHtcbiAgICAvKipcbiAgICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICAgKi9cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAgICovXG4gICAgZGF0YToge1xuICAgICAgICBjYXJkRGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIG5hbWU6ICflo4HoirHlsJHlubQnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9tb3ZpZS0xMjU2OTQ4MTMyLmNvcy5hcC1iZWlqaW5nLm15cWNsb3VkLmNvbS9wMTg3NDgxNjgxOC5qcGcnLFxuICAgICAgICAgICAgICAgIGRldGFpbDogJ+afpeeQhu+8iOe9l+agucK35YuS5pu8IExvZ2FuIExlcm1hbiDppbDvvInmmK/kuKrlrrPnvp7lkozlraTni6znmoTpq5jkuK3mlrDnlJ/vvIzmi6XmnInotoXotorlubTpvoTnmoTmlY/mhJ/lkozms6rohbrvvIzmgLvmmK/pu5jpu5jop4Llr5/ouqvovrnnmoTlrrbkurrlkozmnIvlj4vvvIzmmK/kuKrlhbjlnovnmoTjgIzlo4HoirHlsJHlubTjgI3jgILku5bnmoTpnZLmmKXmnJ/lhYXmu6HlkITnp43mjKvmipjvvIzlhYjlkI7nu4/ljobkuobpmL/lp6jkuLrnu5nku5bkubDnlJ/ml6XnpLznianljrvkuJbjgIHmnIDlpb3mnIvlj4voh6rmnYDjgIHlj5flkIzkvqrmjpLmjKTmrLrotJ/jgIHljZXmgYvmsqHmnInlm57lupTnrYnlkITnp43kuovmg4XjgILnhLbogIzmn6XnkIbov5jkuI3mmK/mnIDmg6jnmoTvvIzlm6DkuLrlkozku5bkuIDmoLfooqvnlJ/mtLvpgLzlhaXlopnop5LnvZrnq5nnmoTkurrlrp7lnKjlpKrlpJrjgILku5blubjov5DnmoTmi6XmnInkuIDkuKrlvIDmmI7nmoTogIHluIjlkozkuKTkuKrpq5jlubTnuqfnmoTlpb3lj4vvvJrlj5vpgIblqIfkv4/nmoTlsJHlpbPnj4rvvIjoib7njpvCt+ayg+ajriBFbW1hIFdhdHNvbiDppbDvvInlkozoh6rkv6Hmu6Hmu6HnmoTlkIzlv5fnlLfnlJ/luJXnibnph4zlhYvvvIjln4Plhbnmi4nCt+exs+WLkiBFenJhIE1pbGxlciDppbDvvInvvIzku5bku6zorqnmn6XnkIbmmI7nmb3kuobmnInml7blgJnkuI3og73msLjov5zml4Hop4LvvIzlv4XpobvopoHlj4LkuI7ov5vmnaXmiY3og73mi6XmnInlsZ7kuo7oh6rlt7HnmoTnsr7lvanjgIIgJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ+mdkuaYpSAvIOaIkOmVvyAvIOe+juWbvSAvIOeIseaDhScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfljYHpnaLln4vkvI8nLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9tb3ZpZS0xMjU2OTQ4MTMyLmNvcy5hcC1iZWlqaW5nLm15cWNsb3VkLmNvbS9wMTg3NDgxNjgxOC5qcGcnLFxuICAgICAgICAgICAgICAgIGRldGFpbDogJ+afpeeQhu+8iOe9l+agucK35YuS5pu8IExvZ2FuIExlcm1hbiDppbDvvInmmK/kuKrlrrPnvp7lkozlraTni6znmoTpq5jkuK3mlrDnlJ/vvIzmi6XmnInotoXotorlubTpvoTnmoTmlY/mhJ/lkozms6rohbrvvIzmgLvmmK/pu5jpu5jop4Llr5/ouqvovrnnmoTlrrbkurrlkozmnIvlj4vvvIzmmK/kuKrlhbjlnovnmoTjgIzlo4HoirHlsJHlubTjgI3jgILku5bnmoTpnZLmmKXmnJ/lhYXmu6HlkITnp43mjKvmipjvvIzlhYjlkI7nu4/ljobkuobpmL/lp6jkuLrnu5nku5bkubDnlJ/ml6XnpLznianljrvkuJbjgIHmnIDlpb3mnIvlj4voh6rmnYDjgIHlj5flkIzkvqrmjpLmjKTmrLrotJ/jgIHljZXmgYvmsqHmnInlm57lupTnrYnlkITnp43kuovmg4XjgILnhLbogIzmn6XnkIbov5jkuI3mmK/mnIDmg6jnmoTvvIzlm6DkuLrlkozku5bkuIDmoLfooqvnlJ/mtLvpgLzlhaXlopnop5LnvZrnq5nnmoTkurrlrp7lnKjlpKrlpJrjgILku5blubjov5DnmoTmi6XmnInkuIDkuKrlvIDmmI7nmoTogIHluIjlkozkuKTkuKrpq5jlubTnuqfnmoTlpb3lj4vvvJrlj5vpgIblqIfkv4/nmoTlsJHlpbPnj4rvvIjoib7njpvCt+ayg+ajriBFbW1hIFdhdHNvbiDppbDvvInlkozoh6rkv6Hmu6Hmu6HnmoTlkIzlv5fnlLfnlJ/luJXnibnph4zlhYvvvIjln4Plhbnmi4nCt+exs+WLkiBFenJhIE1pbGxlciDppbDvvInvvIzku5bku6zorqnmn6XnkIbmmI7nmb3kuobmnInml7blgJnkuI3og73msLjov5zml4Hop4LvvIzlv4XpobvopoHlj4LkuI7ov5vmnaXmiY3og73mi6XmnInlsZ7kuo7oh6rlt7HnmoTnsr7lvanjgIIgJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ+mdkuaYpSAvIOaIkOmVvyAvIOe+juWbvSAvIOeIseaDhScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfnrJHlgrLmsZ/muZYnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9tb3ZpZS0xMjU2OTQ4MTMyLmNvcy5hcC1iZWlqaW5nLm15cWNsb3VkLmNvbS9wMTg3NDgxNjgxOC5qcGcnLFxuICAgICAgICAgICAgICAgIGRldGFpbDogJ+afpeeQhu+8iOe9l+agucK35YuS5pu8IExvZ2FuIExlcm1hbiDppbDvvInmmK/kuKrlrrPnvp7lkozlraTni6znmoTpq5jkuK3mlrDnlJ/vvIzmi6XmnInotoXotorlubTpvoTnmoTmlY/mhJ/lkozms6rohbrvvIzmgLvmmK/pu5jpu5jop4Llr5/ouqvovrnnmoTlrrbkurrlkozmnIvlj4vvvIzmmK/kuKrlhbjlnovnmoTjgIzlo4HoirHlsJHlubTjgI3jgILku5bnmoTpnZLmmKXmnJ/lhYXmu6HlkITnp43mjKvmipjvvIzlhYjlkI7nu4/ljobkuobpmL/lp6jkuLrnu5nku5bkubDnlJ/ml6XnpLznianljrvkuJbjgIHmnIDlpb3mnIvlj4voh6rmnYDjgIHlj5flkIzkvqrmjpLmjKTmrLrotJ/jgIHljZXmgYvmsqHmnInlm57lupTnrYnlkITnp43kuovmg4XjgILnhLbogIzmn6XnkIbov5jkuI3mmK/mnIDmg6jnmoTvvIzlm6DkuLrlkozku5bkuIDmoLfooqvnlJ/mtLvpgLzlhaXlopnop5LnvZrnq5nnmoTkurrlrp7lnKjlpKrlpJrjgILku5blubjov5DnmoTmi6XmnInkuIDkuKrlvIDmmI7nmoTogIHluIjlkozkuKTkuKrpq5jlubTnuqfnmoTlpb3lj4vvvJrlj5vpgIblqIfkv4/nmoTlsJHlpbPnj4rvvIjoib7njpvCt+ayg+ajriBFbW1hIFdhdHNvbiDppbDvvInlkozoh6rkv6Hmu6Hmu6HnmoTlkIzlv5fnlLfnlJ/luJXnibnph4zlhYvvvIjln4Plhbnmi4nCt+exs+WLkiBFenJhIE1pbGxlciDppbDvvInvvIzku5bku6zorqnmn6XnkIbmmI7nmb3kuobmnInml7blgJnkuI3og73msLjov5zml4Hop4LvvIzlv4XpobvopoHlj4LkuI7ov5vmnaXmiY3og73mi6XmnInlsZ7kuo7oh6rlt7HnmoTnsr7lvanjgIIgJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ+mdkuaYpSAvIOaIkOmVvyAvIOe+juWbvSAvIOeIseaDhScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZXN0Q3VycmVudE5hdjogMCxcbiAgICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgICBjdXJyZW50Q2FyZDoge30sXG4gICAgICAgIC8vIG1vdmllQW5pbWF0aW9uRGF0YTogJycsXG4gICAgICAgIGNhcmREaXN0YW5jZTogMCxcbiAgICAgICAgY2xhc3NBcnJheTogWydhY3RpdmUnLCAnbmV4dCddLCAvLyDlrprkuYljbGFzc+aVsOe7hO+8jOWtmOaUvuagt+W8j2NsYXNz77yMXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgICAqL1xuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g5byA5aeL5ruR5YqoXG4gICAgICAgIG9uVG91Y2hTdGFydChlOiBhbnkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG5cbiAgICAgICAgICAgIHRvdWNoWzBdID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgfSxcbiAgICAgICAgLy8g57uT5p2f5ruR5YqoXG4gICAgICAgIG9uVG91Y2hFbmQoZTogYW55KSB7XG4gICAgICAgICAgICB0b3VjaFsxXSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIGlmICh0b3VjaFswXSAtIHRvdWNoWzFdID4gNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdsZWZ0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvdWNoWzFdIC0gdG91Y2hbMF0gPiA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzc05hbWUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENsYXNzTmFtZShkaXJlY3Rpb246IGFueSkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuZGF0YS5jdXJyZW50SW5kZXhcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2FyZCA9IHt9XG4gICAgICAgICAgICBsZXQgY2FyZERhdGEgPSB0aGlzLmRhdGEuY2FyZERhdGFcbiAgICAgICAgICAgIGxldCBsZW5ndGggPSBjYXJkRGF0YS5sZW5ndGhcbiAgICAgICAgICAgIGxldCBjbGFzc0FycmF5ID0gbmV3IEFycmF5KGxlbmd0aClcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7ICAvLyDlkJHlt6bmu5HliqhcbiAgICAgICAgICAgICAgICBpZiAoKytjdXJyZW50SW5kZXggPj0gbGVuZ3RoKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGNsYXNzQXJyYXlbY3VycmVudEluZGV4XSA9ICdhY3RpdmUnO1xuICAgICAgICAgICAgICAgIGNsYXNzQXJyYXlbY3VycmVudEluZGV4IC0gMV0gPSAncHJldic7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCArIDEgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXggKyAxXSA9ICduZXh0JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7ICAvLyDlkJHlj7Pmu5HliqhcbiAgICAgICAgICAgICAgICBpZiAoLS1jdXJyZW50SW5kZXggPCAwKSByZXR1cm5cblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXggLSAxXSA9ICdwcmV2JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXhdID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXggKyAxXSA9ICduZXh0JztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50Q2FyZCA9IGNhcmREYXRhW2N1cnJlbnRJbmRleF1cbiAgICAgICAgICAgIHRoaXMubW92ZUNhcmQoZGlyZWN0aW9uKVxuXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCxcbiAgICAgICAgICAgICAgICBjbGFzc0FycmF5LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g5Yib5bu65bmz56e75Yqo55S7XG4gICAgICAgIG1vdmVDYXJkKGRpcmVjdGlvbjogYW55KSB7XG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmN1cnJlbnRJbmRleCArIDFcbiAgICAgICAgICAgIGxldCBjYXJkRGlzdGFuY2UgPSB0aGlzLmRhdGEuY2FyZERpc3RhbmNlXG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGNhcmREaXN0YW5jZSAtPSA1NDlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgY2FyZERpc3RhbmNlICs9IDU0OVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGNhcmREaXN0YW5jZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPlueUteW9seS/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TW92aWVMaXN0KCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W55S15b2x5YiX6KGoLi4uJyxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8v5ouJ5Y+W5pWw5o2u6L+b6KGM5pi+56S6XG4gICAgICAgICAgICBjYXJkQXBpLnVzZXJUYXNrTGlzdCgpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gbmV3IEFycmF5KClcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXMuZGF0YVtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGVsZW1lbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDogZWxlbWVudC5kZXRhaWwsXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i1i+WAvOWujOaIkOeahCBsaXN0IOS4ujonLCBsaXN0KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGNhcmREYXRhOiBsaXN0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAvLyAgICAgY2FyZERhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50Q2FyZDogZGF0YS5kYXRhWzBdXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDlrp7njrDpobXpnaLot7PovaxcbiAgICAgICAgb25UYXBOYXZpZ2F0ZVRvKGU6IGFueSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZCwgZSlcblxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWw/aWQ9JyArIGlkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0TW92aWVMaXN0KCk7XG4gICAgfVxufSkiXX0=