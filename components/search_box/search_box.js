"use strict";
Component({
    properties: {
        addflag: {
            type: Boolean,
            value: false,
        },
        addimg: {
            type: String,
            value: ''
        },
        searchstr: {
            type: String,
            value: '值'
        },
        searchflag: {
            type: Boolean,
            value: false,
        }
    },
    data: {},
    methods: {
        getfocus: function () {
            this.setData({
                searchflag: true,
            });
        },
        addhandle: function () {
            this.triggerEvent("addhandle");
        },
        searchList: function (e) {
            this.triggerEvent("searchList", e);
        },
        endsearchList: function (e) {
            console.log(e);
            this.triggerEvent("endsearchList");
        },
        blursearch: function () {
        },
        cancelsearch: function () {
            this.setData({
                searchflag: false,
            });
            this.triggerEvent("cancelsearch");
        },
        activity_clear: function (e) {
            console.log(e);
            this.triggerEvent("activity_clear");
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoX2JveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaF9ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUVSLFVBQVUsRUFBRTtRQUVWLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FJYjtRQUNELE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNELFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDYjtLQUVGO0lBS0QsSUFBSSxFQUFFLEVBRUw7SUFNRCxPQUFPLEVBQUU7UUFHUCxRQUFRO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsU0FBUztZQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVELFVBQVUsWUFBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELGFBQWEsRUFBYixVQUFjLENBQU07WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUVELFVBQVU7UUFHVixDQUFDO1FBRUQsWUFBWTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsY0FBYyxFQUFkLFVBQWUsQ0FBTTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FFRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvc2VhcmNoX2JveC9zZWFyY2hfYm94LnRzXG5Db21wb25lbnQoe1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIGFkZGZsYWc6IHsgICAgLy/mmL7npLrmkJzntKLmoYblj7Pkvqfpg6jliIZcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAvLyBvYnNlcnZlcihuZXdWYWwsIG9sZFZhbCwgY2hhbmdlZFBhdGgpIHtcblxuICAgICAgLy8gfVxuICAgIH0sXG4gICAgYWRkaW1nOiB7ICAgICAgIC8v5pi+56S65pCc57Si5qGG5Y+z5L6n6YOo5YiGaWNvblxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBzZWFyY2hzdHI6IHsgICAgIC8vaW5wdXQgIOWAvFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICflgLwnXG4gICAgfSxcbiAgICBzZWFyY2hmbGFnOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH1cblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcblxuICAgKi9cbiAgbWV0aG9kczoge1xuXG4gICAgLy/ojrflvpfnhKbngrlcbiAgICBnZXRmb2N1cygpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNlYXJjaGZsYWc6IHRydWUsXG4gICAgICB9KVxuICAgIH0sXG4gICAgLy/mkJzntKLmoYblj7PkvqfmjInpkq7kuovku7ZcbiAgICBhZGRoYW5kbGUoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcImFkZGhhbmRsZVwiKTtcbiAgICB9LFxuICAgIC8v5pCc57Si6L6T5YWlXG4gICAgc2VhcmNoTGlzdChlKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcInNlYXJjaExpc3RcIiwgZSk7XG4gICAgfSxcbiAgICAvL+afpeivolxuICAgIGVuZHNlYXJjaExpc3QoZTogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoXCJlbmRzZWFyY2hMaXN0XCIpO1xuICAgIH0sXG4gICAgLy/lpLHljrvnhKbngrlcbiAgICBibHVyc2VhcmNoKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ+WkseWOu+eEpueCuScpXG5cbiAgICB9LFxuICAgIC8vIOWPlua2iFxuICAgIGNhbmNlbHNlYXJjaCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNlYXJjaGZsYWc6IGZhbHNlLFxuICAgICAgfSlcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KFwiY2FuY2Vsc2VhcmNoXCIpO1xuICAgIH0sXG4gICAgLy/muIXnqbrmkJzntKLmoYZcbiAgICBhY3Rpdml0eV9jbGVhcihlOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcImFjdGl2aXR5X2NsZWFyXCIpO1xuICAgIH0sXG5cbiAgfVxufSkiXX0=