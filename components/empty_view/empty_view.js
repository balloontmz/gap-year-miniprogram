"use strict";
Component({
    properties: {},
    data: {
        headHeight: 64,
    },
    methods: {},
    attached: function () {
        var self = this;
        wx.getSystemInfo({
            success: function (res) {
                var isIos = res.system.indexOf('iOS') > -1;
                var navHeight = isIos ? 44 : 48;
                console.log('高度分别为:', res.statusBarHeight, navHeight);
                self.setData({
                    headHeight: res.statusBarHeight + navHeight,
                });
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHlfdmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVtcHR5X3ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRSxFQUVYO0lBS0QsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLEVBQUU7S0FDZjtJQUtELE9BQU8sRUFBRSxFQUNSO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQzFDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUE7Z0JBQ3JELElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxlQUFlLEdBQUcsU0FBUztpQkFDNUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2VtcHR5X3ZpZXcvZW1wdHlfdmlldy5qc1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGhlYWRIZWlnaHQ6IDY0LFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgfSxcbiAgLy8g5Zyo57uE5Lu25a6e5L6L6L+b5YWl6aG16Z2i6IqC54K55qCR5pe25omn6KGMXG4gIGF0dGFjaGVkKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHZhciBpc0lvcyA9IHJlcy5zeXN0ZW0uaW5kZXhPZignaU9TJykgPiAtMVxuICAgICAgICB2YXIgbmF2SGVpZ2h0ID0gaXNJb3MgPyA0NCA6IDQ4XG4gICAgICAgIGNvbnNvbGUubG9nKCfpq5jluqbliIbliKvkuLo6JywgcmVzLnN0YXR1c0JhckhlaWdodCwgbmF2SGVpZ2h0KVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGhlYWRIZWlnaHQ6IHJlcy5zdGF0dXNCYXJIZWlnaHQgKyBuYXZIZWlnaHQsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=