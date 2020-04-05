"use strict";
Component({
    properties: {
        customBackReturn: {
            type: Boolean,
            value: false
        },
        backIcon: {
            type: String,
            value: '',
        },
        title: {
            type: String,
            value: '标题'
        },
        titleColor: {
            type: String,
            value: 'wheat'
        },
    },
    data: {},
    methods: {
        backClick: function () {
            if (this.data.customBackReturn) {
                this.triggerEvent("customBackReturn");
            }
            else {
                if (getCurrentPages().length == 1) {
                    wx.switchTab({
                        url: '/pages/index/index',
                    });
                }
                else {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }
        }
    },
    attached: function () {
        var self = this;
        wx.getSystemInfo({
            success: function (res) {
                var isIos = res.system.indexOf('iOS') > -1;
                self.setData({
                    statusHeight: res.statusBarHeight,
                    navHeight: isIos ? 44 : 48
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFLVixnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxPQUFPO1NBQ2Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUVMO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUztZQUNQLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2FBQ3RDO2lCQUFNO2dCQUNMLElBQUksZUFBZSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDakMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsb0JBQW9CO3FCQUMxQixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxLQUFLLEVBQUUsQ0FBQztxQkFDVCxDQUFDLENBQUE7aUJBQ0g7YUFDRjtRQUNILENBQUM7S0FDRjtJQUVELFFBQVE7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sWUFBQyxHQUFHO2dCQUNULElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFlBQVksRUFBRSxHQUFHLENBQUMsZUFBZTtvQkFDakMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMzQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbmF2YmFyL25hdmJhci50c1xuQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIOiHquWumuS5iei/lOWbnuS6i+S7tuWkhOeQhlxuICAgICAqIGN1c3RvbUJhY2tSZXR1cm49XCJ7e3RydWV9fVwiIGJpbmQ6Y3VzdG9tQmFja1JldHVybj1cImN1c3RvbUJhY2tSZXR1cm5cIlxuICAgICAqL1xuICAgIGN1c3RvbUJhY2tSZXR1cm46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIGJhY2tJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICfmoIfpopgnXG4gICAgfSxcbiAgICB0aXRsZUNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ3doZWF0J1xuICAgIH0sXG4gIH0sXG4gIGRhdGE6IHtcblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYmFja0NsaWNrKCkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5jdXN0b21CYWNrUmV0dXJuKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiY3VzdG9tQmFja1JldHVyblwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGdldEN1cnJlbnRQYWdlcygpLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyDlnKjnu4Tku7blrp7kvovov5vlhaXpobXpnaLoioLngrnmoJHml7bmiafooYxcbiAgYXR0YWNoZWQoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdmFyIGlzSW9zID0gcmVzLnN5c3RlbS5pbmRleE9mKCdpT1MnKSA+IC0xO1xuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIHN0YXR1c0hlaWdodDogcmVzLnN0YXR1c0JhckhlaWdodCxcbiAgICAgICAgICBuYXZIZWlnaHQ6IGlzSW9zID8gNDQgOiA0OFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn0pXG4iXX0=