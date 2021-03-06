"use strict";
Component({
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
    data: {},
    methods: {
        onTapNavigateTo: function (e) {
            console.log(e);
            var id = e.currentTarget.dataset.id;
            console.log(id, e);
            if (id == 1) {
                wx.navigateTo({
                    url: '/pages/todo/todo',
                });
            }
            else {
                wx.navigateTo({
                    url: '/pages/index/index',
                });
            }
        },
    },
    attached: function () {
        var self = this;
        wx.getSystemInfo({
            success: function (res) {
                var isIos = res.system.indexOf('iOS') > -1;
                var navHeight = isIos ? 44 : 48;
                self.setData({
                    headHeight: res.statusBarHeight + navHeight,
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVydGFiYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVydGFiYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJTixVQUFVLEVBQUU7UUFDUixXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxTQUFTO1NBQ25CO1FBQ0QsV0FBVyxFQUFFO1lBQ1QsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsU0FBUztTQUNuQjtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDTCxlQUFlLFlBQUMsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUE7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFFbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ1YsR0FBRyxFQUFFLGtCQUFrQjtpQkFDMUIsQ0FBQyxDQUFBO2FBQ0w7aUJBQU07Z0JBQ0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDVixHQUFHLEVBQUUsb0JBQW9CO2lCQUM1QixDQUFDLENBQUE7YUFDTDtRQUdMLENBQUM7S0FDSjtJQUVELFFBQVE7UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNiLE9BQU8sWUFBQyxHQUFHO2dCQUNQLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUMxQyxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNULFVBQVUsRUFBRSxHQUFHLENBQUMsZUFBZSxHQUFHLFNBQVM7aUJBQzlDLENBQUMsQ0FBQTtZQUNOLENBQUM7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9oZWFkZXJ0YWJiYXIvaGVhZGVydGFiYmFyLnRzXG5Db21wb25lbnQoe1xuICAgIC8qKlxuICAgICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgICAqL1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYWN0aXZlQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2ZmZmZmZidcbiAgICAgICAgfSxcbiAgICAgICAgbm9ybWFsQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2UzZDlkMCdcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICAgKi9cbiAgICBkYXRhOiB7XG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAgICovXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvblRhcE5hdmlnYXRlVG8oZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZCwgZSlcblxuICAgICAgICAgICAgaWYgKGlkID09IDEpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3RvZG8vdG9kbycsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICAvLyDlnKjnu4Tku7blrp7kvovov5vlhaXpobXpnaLoioLngrnmoJHml7bmiafooYxcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzSW9zID0gcmVzLnN5c3RlbS5pbmRleE9mKCdpT1MnKSA+IC0xXG4gICAgICAgICAgICAgICAgdmFyIG5hdkhlaWdodCA9IGlzSW9zID8gNDQgOiA0OFxuICAgICAgICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRIZWlnaHQ6IHJlcy5zdGF0dXNCYXJIZWlnaHQgKyBuYXZIZWlnaHQsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59KSJdfQ==