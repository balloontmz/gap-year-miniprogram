"use strict";
Component({
    properties: {
        customBackReturn: {
            type: Boolean,
            value: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFLVixnQkFBZ0IsRUFBRTtZQUNoQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2I7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxVQUFVLEVBQUU7WUFDVixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxPQUFPO1NBQ2Y7S0FDRjtJQUNELElBQUksRUFBRSxFQUVMO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUztZQUNQLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2FBQ3RDO2lCQUFNO2dCQUNMLElBQUksZUFBZSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDakMsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsb0JBQW9CO3FCQUMxQixDQUFDLENBQUE7aUJBQ0g7cUJBQU07b0JBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQzt3QkFDZCxLQUFLLEVBQUUsQ0FBQztxQkFDVCxDQUFDLENBQUE7aUJBQ0g7YUFDRjtRQUNILENBQUM7S0FDRjtJQUVELFFBQVE7UUFDTixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sWUFBQyxHQUFHO2dCQUNULElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFlBQVksRUFBRSxHQUFHLENBQUMsZUFBZTtvQkFDakMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO2lCQUMzQixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvbmF2YmFyL25hdmJhci50c1xuQ29tcG9uZW50KHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIOiHquWumuS5iei/lOWbnuS6i+S7tuWkhOeQhlxuICAgICAqIGN1c3RvbUJhY2tSZXR1cm49XCJ7e3RydWV9fVwiIGJpbmQ6Y3VzdG9tQmFja1JldHVybj1cImN1c3RvbUJhY2tSZXR1cm5cIlxuICAgICAqL1xuICAgIGN1c3RvbUJhY2tSZXR1cm46IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ+agh+mimCdcbiAgICB9LFxuICAgIHRpdGxlQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnd2hlYXQnXG4gICAgfSxcbiAgfSxcbiAgZGF0YToge1xuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiYWNrQ2xpY2soKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmN1c3RvbUJhY2tSZXR1cm4pIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoXCJjdXN0b21CYWNrUmV0dXJuXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZ2V0Q3VycmVudFBhZ2VzKCkubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4JyxcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vIOWcqOe7hOS7tuWunuS+i+i/m+WFpemhtemdouiKgueCueagkeaXtuaJp+ihjFxuICBhdHRhY2hlZCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB2YXIgaXNJb3MgPSByZXMuc3lzdGVtLmluZGV4T2YoJ2lPUycpID4gLTE7XG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgc3RhdHVzSGVpZ2h0OiByZXMuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgIG5hdkhlaWdodDogaXNJb3MgPyA0NCA6IDQ4XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiJdfQ==