"use strict";
var touch = [0, 0];
Component({
    properties: {},
    data: {
        cardData: [
            {
                id: 0,
                title: '壁花少年',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                description: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
            },
            {
                id: 1,
                title: '十面埋伏',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                description: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
                category: '青春 / 成长 / 美国 / 爱情',
            },
            {
                id: 2,
                title: '笑傲江湖',
                image: 'https://movie-1256948132.cos.ap-beijing.myqcloud.com/p1874816818.jpg',
                description: '查理（罗根·勒曼 Logan Lerman 饰）是个害羞和孤独的高中新生，拥有超越年龄的敏感和泪腺，总是默默观察身边的家人和朋友，是个典型的「壁花少年」。他的青春期充满各种挫折，先后经历了阿姨为给他买生日礼物去世、最好朋友自杀、受同侪排挤欺负、单恋没有回应等各种事情。然而查理还不是最惨的，因为和他一样被生活逼入墙角罚站的人实在太多。他幸运的拥有一个开明的老师和两个高年级的好友：叛逆娇俏的少女珊（艾玛·沃森 Emma Watson 饰）和自信满满的同志男生帕特里克（埃兹拉·米勒 Ezra Miller 饰），他们让查理明白了有时候不能永远旁观，必须要参与进来才能拥有属于自己的精彩。 ',
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
            wx.showLoading({
                title: '获取电影列表...',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZF9jYXJvdXNlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmRfY2Fyb3VzZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRW5CLFNBQVMsQ0FBQztJQUlOLFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLHNFQUFzRTtnQkFDN0UsV0FBVyxFQUFFLHdTQUF3UztnQkFDclQsUUFBUSxFQUFFLG1CQUFtQjthQUNoQztZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxzRUFBc0U7Z0JBQzdFLFdBQVcsRUFBRSx3U0FBd1M7Z0JBQ3JULFFBQVEsRUFBRSxtQkFBbUI7YUFDaEM7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixLQUFLLEVBQUUsc0VBQXNFO2dCQUM3RSxXQUFXLEVBQUUsd1NBQXdTO2dCQUNyVCxRQUFRLEVBQUUsbUJBQW1CO2FBQ2hDO1NBQ0o7UUFDRCxjQUFjLEVBQUUsQ0FBQztRQUNqQixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxFQUFFO1FBRWYsWUFBWSxFQUFFLENBQUM7UUFDZixVQUFVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0tBQ2pDO0lBS0QsT0FBTyxFQUFFO1FBRUwsWUFBWSxZQUFDLENBQUM7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRWQsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO1FBQ25DLENBQUM7UUFFRCxVQUFV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QUFBO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBRWxCLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1YsR0FBRyxFQUFFLDBCQUEwQixHQUFHLEVBQUU7YUFDdkMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUNKO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9jYXJkX2Nhcm91c2VsL2NhcmRfY2Fyb3VzZWwudHNcblxudmFyIHRvdWNoID0gWzAsIDBdO1xuXG5Db21wb25lbnQoe1xuICAgIC8qKlxuICAgICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgICAqL1xuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICAgKi9cbiAgICBkYXRhOiB7XG4gICAgICAgIGNhcmREYXRhOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflo4HoirHlsJHlubQnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9tb3ZpZS0xMjU2OTQ4MTMyLmNvcy5hcC1iZWlqaW5nLm15cWNsb3VkLmNvbS9wMTg3NDgxNjgxOC5qcGcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5p+l55CG77yI572X5qC5wrfli5Lmm7wgTG9nYW4gTGVybWFuIOmlsO+8ieaYr+S4quWus+e+nuWSjOWtpOeLrOeahOmrmOS4reaWsOeUn++8jOaLpeaciei2hei2iuW5tOm+hOeahOaVj+aEn+WSjOazquiFuu+8jOaAu+aYr+m7mOm7mOinguWvn+i6q+i+ueeahOWutuS6uuWSjOaci+WPi++8jOaYr+S4quWFuOWei+eahOOAjOWjgeiKseWwkeW5tOOAjeOAguS7lueahOmdkuaYpeacn+WFhea7oeWQhOenjeaMq+aKmO+8jOWFiOWQjue7j+WOhuS6humYv+WnqOS4uue7meS7luS5sOeUn+aXpeekvOeJqeWOu+S4luOAgeacgOWlveaci+WPi+iHquadgOOAgeWPl+WQjOS+quaOkuaMpOasuui0n+OAgeWNleaBi+ayoeacieWbnuW6lOetieWQhOenjeS6i+aDheOAgueEtuiAjOafpeeQhui/mOS4jeaYr+acgOaDqOeahO+8jOWboOS4uuWSjOS7luS4gOagt+iiq+eUn+a0u+mAvOWFpeWimeinkue9muermeeahOS6uuWunuWcqOWkquWkmuOAguS7luW5uOi/kOeahOaLpeacieS4gOS4quW8gOaYjueahOiAgeW4iOWSjOS4pOS4qumrmOW5tOe6p+eahOWlveWPi++8muWPm+mAhuWoh+S/j+eahOWwkeWls+ePiu+8iOiJvueOm8K35rKD5qOuIEVtbWEgV2F0c29uIOmlsO+8ieWSjOiHquS/oea7oea7oeeahOWQjOW/l+eUt+eUn+W4leeJuemHjOWFi++8iOWfg+WFueaLicK357Gz5YuSIEV6cmEgTWlsbGVyIOmlsO+8ie+8jOS7luS7rOiuqeafpeeQhuaYjueZveS6huacieaXtuWAmeS4jeiDveawuOi/nOaXgeingu+8jOW/hemhu+imgeWPguS4jui/m+adpeaJjeiDveaLpeacieWxnuS6juiHquW3seeahOeyvuW9qeOAgiAnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAn6Z2S5pilIC8g5oiQ6ZW/IC8g576O5Zu9IC8g54ix5oOFJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfljYHpnaLln4vkvI8nLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9tb3ZpZS0xMjU2OTQ4MTMyLmNvcy5hcC1iZWlqaW5nLm15cWNsb3VkLmNvbS9wMTg3NDgxNjgxOC5qcGcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5p+l55CG77yI572X5qC5wrfli5Lmm7wgTG9nYW4gTGVybWFuIOmlsO+8ieaYr+S4quWus+e+nuWSjOWtpOeLrOeahOmrmOS4reaWsOeUn++8jOaLpeaciei2hei2iuW5tOm+hOeahOaVj+aEn+WSjOazquiFuu+8jOaAu+aYr+m7mOm7mOinguWvn+i6q+i+ueeahOWutuS6uuWSjOaci+WPi++8jOaYr+S4quWFuOWei+eahOOAjOWjgeiKseWwkeW5tOOAjeOAguS7lueahOmdkuaYpeacn+WFhea7oeWQhOenjeaMq+aKmO+8jOWFiOWQjue7j+WOhuS6humYv+WnqOS4uue7meS7luS5sOeUn+aXpeekvOeJqeWOu+S4luOAgeacgOWlveaci+WPi+iHquadgOOAgeWPl+WQjOS+quaOkuaMpOasuui0n+OAgeWNleaBi+ayoeacieWbnuW6lOetieWQhOenjeS6i+aDheOAgueEtuiAjOafpeeQhui/mOS4jeaYr+acgOaDqOeahO+8jOWboOS4uuWSjOS7luS4gOagt+iiq+eUn+a0u+mAvOWFpeWimeinkue9muermeeahOS6uuWunuWcqOWkquWkmuOAguS7luW5uOi/kOeahOaLpeacieS4gOS4quW8gOaYjueahOiAgeW4iOWSjOS4pOS4qumrmOW5tOe6p+eahOWlveWPi++8muWPm+mAhuWoh+S/j+eahOWwkeWls+ePiu+8iOiJvueOm8K35rKD5qOuIEVtbWEgV2F0c29uIOmlsO+8ieWSjOiHquS/oea7oea7oeeahOWQjOW/l+eUt+eUn+W4leeJuemHjOWFi++8iOWfg+WFueaLicK357Gz5YuSIEV6cmEgTWlsbGVyIOmlsO+8ie+8jOS7luS7rOiuqeafpeeQhuaYjueZveS6huacieaXtuWAmeS4jeiDveawuOi/nOaXgeingu+8jOW/hemhu+imgeWPguS4jui/m+adpeaJjeiDveaLpeacieWxnuS6juiHquW3seeahOeyvuW9qeOAgiAnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAn6Z2S5pilIC8g5oiQ6ZW/IC8g576O5Zu9IC8g54ix5oOFJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnrJHlgrLmsZ/muZYnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9tb3ZpZS0xMjU2OTQ4MTMyLmNvcy5hcC1iZWlqaW5nLm15cWNsb3VkLmNvbS9wMTg3NDgxNjgxOC5qcGcnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn5p+l55CG77yI572X5qC5wrfli5Lmm7wgTG9nYW4gTGVybWFuIOmlsO+8ieaYr+S4quWus+e+nuWSjOWtpOeLrOeahOmrmOS4reaWsOeUn++8jOaLpeaciei2hei2iuW5tOm+hOeahOaVj+aEn+WSjOazquiFuu+8jOaAu+aYr+m7mOm7mOinguWvn+i6q+i+ueeahOWutuS6uuWSjOaci+WPi++8jOaYr+S4quWFuOWei+eahOOAjOWjgeiKseWwkeW5tOOAjeOAguS7lueahOmdkuaYpeacn+WFhea7oeWQhOenjeaMq+aKmO+8jOWFiOWQjue7j+WOhuS6humYv+WnqOS4uue7meS7luS5sOeUn+aXpeekvOeJqeWOu+S4luOAgeacgOWlveaci+WPi+iHquadgOOAgeWPl+WQjOS+quaOkuaMpOasuui0n+OAgeWNleaBi+ayoeacieWbnuW6lOetieWQhOenjeS6i+aDheOAgueEtuiAjOafpeeQhui/mOS4jeaYr+acgOaDqOeahO+8jOWboOS4uuWSjOS7luS4gOagt+iiq+eUn+a0u+mAvOWFpeWimeinkue9muermeeahOS6uuWunuWcqOWkquWkmuOAguS7luW5uOi/kOeahOaLpeacieS4gOS4quW8gOaYjueahOiAgeW4iOWSjOS4pOS4qumrmOW5tOe6p+eahOWlveWPi++8muWPm+mAhuWoh+S/j+eahOWwkeWls+ePiu+8iOiJvueOm8K35rKD5qOuIEVtbWEgV2F0c29uIOmlsO+8ieWSjOiHquS/oea7oea7oeeahOWQjOW/l+eUt+eUn+W4leeJuemHjOWFi++8iOWfg+WFueaLicK357Gz5YuSIEV6cmEgTWlsbGVyIOmlsO+8ie+8jOS7luS7rOiuqeafpeeQhuaYjueZveS6huacieaXtuWAmeS4jeiDveawuOi/nOaXgeingu+8jOW/hemhu+imgeWPguS4jui/m+adpeaJjeiDveaLpeacieWxnuS6juiHquW3seeahOeyvuW9qeOAgiAnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAn6Z2S5pilIC8g5oiQ6ZW/IC8g576O5Zu9IC8g54ix5oOFJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3RDdXJyZW50TmF2OiAwLFxuICAgICAgICBjdXJyZW50SW5kZXg6IDAsXG4gICAgICAgIGN1cnJlbnRDYXJkOiB7fSxcbiAgICAgICAgLy8gbW92aWVBbmltYXRpb25EYXRhOiAnJyxcbiAgICAgICAgY2FyZERpc3RhbmNlOiAwLFxuICAgICAgICBjbGFzc0FycmF5OiBbJ2FjdGl2ZScsICduZXh0J10sIC8vIOWumuS5iWNsYXNz5pWw57uE77yM5a2Y5pS+5qC35byPY2xhc3PvvIxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAgICovXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDlvIDlp4vmu5HliqhcbiAgICAgICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG5cbiAgICAgICAgICAgIHRvdWNoWzBdID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgICAgfSxcbiAgICAgICAgLy8g57uT5p2f5ruR5YqoXG4gICAgICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICAgICAgdG91Y2hbMV0gPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICBpZiAodG91Y2hbMF0gLSB0b3VjaFsxXSA+IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzTmFtZSgnbGVmdCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0b3VjaFsxXSAtIHRvdWNoWzBdID4gNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3NOYW1lKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhZGRDbGFzc05hbWUoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmN1cnJlbnRJbmRleFxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDYXJkID0ge31cbiAgICAgICAgICAgIGxldCBjYXJkRGF0YSA9IHRoaXMuZGF0YS5jYXJkRGF0YVxuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGNhcmREYXRhLmxlbmd0aFxuICAgICAgICAgICAgbGV0IGNsYXNzQXJyYXkgPSBuZXcgQXJyYXkobGVuZ3RoKVxuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHsgIC8vIOWQkeW3pua7keWKqFxuICAgICAgICAgICAgICAgIGlmICgrK2N1cnJlbnRJbmRleCA+PSBsZW5ndGgpIHJldHVyblxuXG4gICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXhdID0gJ2FjdGl2ZSc7XG4gICAgICAgICAgICAgICAgY2xhc3NBcnJheVtjdXJyZW50SW5kZXggLSAxXSA9ICdwcmV2JztcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleCArIDFdID0gJ25leHQnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHsgIC8vIOWQkeWPs+a7keWKqFxuICAgICAgICAgICAgICAgIGlmICgtLWN1cnJlbnRJbmRleCA8IDApIHJldHVyblxuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleCAtIDFdID0gJ3ByZXYnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleF0gPSAnYWN0aXZlJztcbiAgICAgICAgICAgICAgICBjbGFzc0FycmF5W2N1cnJlbnRJbmRleCArIDFdID0gJ25leHQnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYXJkID0gY2FyZERhdGFbY3VycmVudEluZGV4XVxuICAgICAgICAgICAgdGhpcy5tb3ZlQ2FyZChkaXJlY3Rpb24pXG5cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4LFxuICAgICAgICAgICAgICAgIGNsYXNzQXJyYXksXG4gICAgICAgICAgICAgICAgY3VycmVudENhcmQsXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDliJvlu7rlubPnp7vliqjnlLtcbiAgICAgICAgbW92ZUNhcmQoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5kYXRhLmN1cnJlbnRJbmRleCArIDFcbiAgICAgICAgICAgIGxldCBjYXJkRGlzdGFuY2UgPSB0aGlzLmRhdGEuY2FyZERpc3RhbmNlXG5cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIGNhcmREaXN0YW5jZSAtPSA1NDlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgY2FyZERpc3RhbmNlICs9IDU0OVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGNhcmREaXN0YW5jZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOiOt+WPlueUteW9seS/oeaBr1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TW92aWVMaXN0KCkge1xuICAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W55S15b2x5YiX6KGoLi4uJyxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAvLyAgICAgY2FyZERhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50Q2FyZDogZGF0YS5kYXRhWzBdXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9LFxuICAgICAgICAvLyDlrp7njrDpobXpnaLot7PovaxcbiAgICAgICAgb25UYXBOYXZpZ2F0ZVRvKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuICAgICAgICAgICAgY29uc29sZS5sb2coaWQsIGUpXG5cbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsP2lkPScgKyBpZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGF0dGFjaGVkKCkge1xuICAgICAgICB0aGlzLmdldE1vdmllTGlzdCgpO1xuICAgIH1cbn0pIl19