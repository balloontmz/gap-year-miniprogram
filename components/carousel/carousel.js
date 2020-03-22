"use strict";
Component({
    properties: {},
    data: {
        movies: [
            { url: '../../assets/carousel/carousel1.jpg' },
            { url: '../../assets/carousel/carousel2.jpg' },
            { url: '../../assets/carousel/carousel3.jpg' },
            { url: '../../assets/carousel/carousel4.jpg' }
        ],
        indicatorDots: false,
        autoplay: true,
        vertical: false,
        circular: false,
        currentSwiper: '',
    },
    methods: {
        bindchange: function (e) {
            this.setData({
                currentSwiper: e.detail.current
            });
        },
    },
    attached: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFLEVBRVg7SUFLRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUU7WUFDTixFQUFFLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRTtZQUM5QyxFQUFFLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRTtZQUM5QyxFQUFFLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRTtZQUM5QyxFQUFFLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRTtTQUMvQztRQUNELGFBQWEsRUFBRSxLQUFLO1FBQ3BCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLGFBQWEsRUFBRSxFQUFFO0tBQ2xCO0lBS0QsT0FBTyxFQUFFO1FBUVAsVUFBVSxFQUFWLFVBQVcsQ0FBTTtZQUVmLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsYUFBYSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTzthQUNoQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFHRCxRQUFRO0lBV1IsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwudHNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBtb3ZpZXM6IFtcbiAgICAgIHsgdXJsOiAnLi4vLi4vYXNzZXRzL2Nhcm91c2VsL2Nhcm91c2VsMS5qcGcnIH0sXG4gICAgICB7IHVybDogJy4uLy4uL2Fzc2V0cy9jYXJvdXNlbC9jYXJvdXNlbDIuanBnJyB9LFxuICAgICAgeyB1cmw6ICcuLi8uLi9hc3NldHMvY2Fyb3VzZWwvY2Fyb3VzZWwzLmpwZycgfSxcbiAgICAgIHsgdXJsOiAnLi4vLi4vYXNzZXRzL2Nhcm91c2VsL2Nhcm91c2VsNC5qcGcnIH1cbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IGZhbHNlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICBjaXJjdWxhcjogZmFsc2UsXG4gICAgY3VycmVudFN3aXBlcjogJycsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIC8vIGNoYW5nZUluZGljYXRvckRvdHMoKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIuWIh+aNouaYvuekulwiKVxuICAgIC8vICAgdGhpcy5zZXREYXRhKHtcbiAgICAvLyAgICAgaW5kaWNhdG9yRG90czogIXRoaXMuZGF0YS5pbmRpY2F0b3JEb3RzXG4gICAgLy8gICB9KVxuICAgIC8vIH0sXG5cbiAgICBiaW5kY2hhbmdlKGU6IGFueSkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJhYVwiLCBlLmRldGFpbC5jdXJyZW50KTtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGN1cnJlbnRTd2lwZXI6IGUuZGV0YWlsLmN1cnJlbnRcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcblxuICAvLyDlnKjnu4Tku7blrp7kvovov5vlhaXpobXpnaLoioLngrnmoJHml7bmiafooYxcbiAgYXR0YWNoZWQoKSB7XG4gICAgLy8gdmFyIHNlbGYgPSB0aGlzO1xuICAgIC8vIHd4LmdldFN5c3RlbUluZm8oe1xuICAgIC8vICAgc3VjY2VzcyhyZXMpIHtcbiAgICAvLyAgICAgdmFyIGlzSW9zID0gcmVzLnN5c3RlbS5pbmRleE9mKCdpT1MnKSA+IC0xXG4gICAgLy8gICAgIHZhciBuYXZIZWlnaHQgPSBpc0lvcyA/IDQ0IDogNDhcbiAgICAvLyAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAvLyAgICAgICBoZWFkSGVpZ2h0OiByZXMuc3RhdHVzQmFySGVpZ2h0ICsgbmF2SGVpZ2h0LFxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cbn0pIl19