"use strict";
var order = ['demo1', 'demo2', 'demo3'];
Component({
    properties: {
        barTitle: {
            type: String,
            value: 'bar title'
        }
    },
    data: {
        toView: 'green',
        items: [
            { url: '../../assets/carousel/carousel1.jpg', color: 'red' },
            { url: '../../assets/carousel/carousel2.jpg', color: 'green' },
            { url: '../../assets/carousel/carousel3.jpg', color: 'white' },
            { url: '../../assets/carousel/carousel4.jpg', color: 'red' },
            { url: '../../assets/carousel/carousel4.jpg', color: 'blue' },
            { url: '../../assets/carousel/carousel4.jpg', color: 'yellow' }
        ],
    },
    methods: {
        scroll: function (e) {
            console.log(e);
        },
        tap: function () {
            for (var i = 0; i < order.length; ++i) {
                if (order[i] === this.data.toView) {
                    this.setData({
                        toView: order[i + 1],
                        scrollTop: (i + 1) * 200
                    });
                    break;
                }
            }
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZF9jb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZF9jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFFekMsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsV0FBVztTQUNuQjtLQUNGO0lBS0QsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLE9BQU87UUFDZixLQUFLLEVBQUU7WUFDTCxFQUFFLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzVELEVBQUUsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7WUFDOUQsRUFBRSxHQUFHLEVBQUUscUNBQXFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtZQUM5RCxFQUFFLEdBQUcsRUFBRSxxQ0FBcUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1lBQzVELEVBQUUsR0FBRyxFQUFFLHFDQUFxQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDN0QsRUFBRSxHQUFHLEVBQUUscUNBQXFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtTQUNoRTtLQUNGO0lBS0QsT0FBTyxFQUFFO1FBQ1AsTUFBTSxZQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLENBQUM7UUFFRCxHQUFHO1lBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDcEIsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUc7cUJBQ3pCLENBQUMsQ0FBQTtvQkFDRixNQUFLO2lCQUNOO2FBQ0Y7UUFDSCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2NhcmRfY29udGVudC9jYXJkX2NvbnRlbnQudHNcbmNvbnN0IG9yZGVyID0gWydkZW1vMScsICdkZW1vMicsICdkZW1vMyddXG5cbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBiYXJUaXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdiYXIgdGl0bGUnXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB0b1ZpZXc6ICdncmVlbicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdXJsOiAnLi4vLi4vYXNzZXRzL2Nhcm91c2VsL2Nhcm91c2VsMS5qcGcnLCBjb2xvcjogJ3JlZCcgfSxcbiAgICAgIHsgdXJsOiAnLi4vLi4vYXNzZXRzL2Nhcm91c2VsL2Nhcm91c2VsMi5qcGcnLCBjb2xvcjogJ2dyZWVuJyB9LFxuICAgICAgeyB1cmw6ICcuLi8uLi9hc3NldHMvY2Fyb3VzZWwvY2Fyb3VzZWwzLmpwZycsIGNvbG9yOiAnd2hpdGUnIH0sXG4gICAgICB7IHVybDogJy4uLy4uL2Fzc2V0cy9jYXJvdXNlbC9jYXJvdXNlbDQuanBnJywgY29sb3I6ICdyZWQnIH0sXG4gICAgICB7IHVybDogJy4uLy4uL2Fzc2V0cy9jYXJvdXNlbC9jYXJvdXNlbDQuanBnJywgY29sb3I6ICdibHVlJyB9LFxuICAgICAgeyB1cmw6ICcuLi8uLi9hc3NldHMvY2Fyb3VzZWwvY2Fyb3VzZWw0LmpwZycsIGNvbG9yOiAneWVsbG93JyB9XG4gICAgXSxcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgc2Nyb2xsKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfSxcblxuICAgIHRhcCgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKG9yZGVyW2ldID09PSB0aGlzLmRhdGEudG9WaWV3KSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHRvVmlldzogb3JkZXJbaSArIDFdLFxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAoaSArIDEpICogMjAwXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfVxufSlcbiJdfQ==