"use strict";
var api = require('../../utils/request/api');
var CONFIRM = 1;
var CANCEL = 2;
Page({
    data: {
        addflag: true,
        addimg: '../../images/activity_add.png',
        searchstr: '',
        listData: new Array(),
        hiddenModalPut: true,
        activeTask: {
            id: 0,
            name: '',
            detail: '',
            showMore: false
        },
        buttons: [{ text: '取消', index: CANCEL }, { text: '确定', index: CONFIRM }],
    },
    onLoad: function () {
        this.loadData();
    },
    onShow: function () {
    },
    tap: function (e) {
        console.log(e);
    },
    addhandle: function () {
        console.log('触发搜索框右侧事件');
    },
    searchList: function (ev) {
        var e = ev.detail;
        this.setData({
            searchstr: e.detail.value
        });
    },
    endsearchList: function (e) {
        console.log('查询数据', e);
    },
    cancelsearch: function () {
        this.setData({
            searchstr: ''
        });
    },
    activity_clear: function (e) {
        console.log(e);
        this.setData({
            searchstr: ''
        });
    },
    loadData: function () {
        var _this = this;
        api.taskList().then(function (res) {
            console.log(res);
            var list = new Array();
            for (var index = 0; index < res.data.length; index++) {
                var element = res.data[index];
                list.push({
                    id: element.id,
                    name: element.name,
                    detail: element.detail,
                    showMore: false
                });
            }
            console.log('赋值完成的 list 为:', list);
            _this.setData({
                listData: list
            });
        });
    },
    tapTaskItem: function (e) {
        console.log('点击了任务卡片,事件为:', e);
        var listData = this.data.listData;
        for (var index = 0; index < listData.length; index++) {
            var element = listData[index];
            if (e.currentTarget.dataset.itemId == element.id) {
                listData[index].showMore = !element.showMore;
            }
        }
        this.setData({
            listData: listData,
        });
    },
    onLeftBtnTap: function (e) {
        console.log('点击左边的按钮事件并且被 catch', e);
        this.setData({
            activeTask: e.currentTarget.dataset.item,
            hiddenModalPut: !this.data.hiddenModalPut
        });
    },
    cancel: function () {
        this.setData({
            hiddenModalPut: true
        });
    },
    confirm: function () {
        this.setData({
            hiddenModalPut: true
        });
    },
    tapDialogButton: function (e) {
        console.log('传入的事件为:', e);
        if (e.detail.item.index == CONFIRM) {
            console.log('当前页面数据为:', this.data.activeTask);
            api.createUserTask({
                name: this.data.activeTask.name,
                detail: this.data.activeTask.detail,
                task_id: this.data.activeTask.id,
            }).then(function (res) {
                console.log('添加用户任务的返回结果为:', res);
            }).catch(function (err) {
                console.log('添加用户任务失败,结果为:', err);
            });
        }
        this.setData({
            hiddenModalPut: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza19saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFza19saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQTtBQVM5QyxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUE7QUFDakIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFBO0FBRWhCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLCtCQUErQjtRQUN2QyxTQUFTLEVBQUUsRUFBRTtRQUNiLFFBQVEsRUFBRSxJQUFJLEtBQUssRUFBWTtRQUcvQixjQUFjLEVBQUUsSUFBSTtRQUNwQixVQUFVLEVBQVk7WUFDcEIsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsUUFBUSxFQUFFLEtBQUs7U0FDaEI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUM7S0FDekU7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFDRCxNQUFNO0lBRU4sQ0FBQztJQUVELEdBQUcsRUFBSCxVQUFJLENBQU07UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hCLENBQUM7SUFHRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBR0QsVUFBVSxFQUFWLFVBQVcsRUFBTztRQUNoQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxTQUFTLEVBQUUs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LElBQUk7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELGVBQWUsRUFBZixVQUFnQixDQUFNO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBRXpCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQzdDLEdBQUcsQ0FBQyxjQUFjLENBQUM7Z0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtnQkFDbkMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7YUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDbkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDbkMsQ0FBQyxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUE7SUFDSixDQUFDO0NBR0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFza19saXN0LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbi8vW+S6i+S7tuS8oOWPgl0oaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vbWluaXByb2dyYW0vZGV2L2ZyYW1ld29yay92aWV3L3d4bWwvZXZlbnQuaHRtbClcbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3JlcXVlc3QvYXBpJylcblxuaW50ZXJmYWNlIFRhc2tJdGVtIHtcbiAgaWQ6IG51bWJlclxuICBuYW1lOiBzdHJpbmdcbiAgZGV0YWlsOiBzdHJpbmdcbiAgc2hvd01vcmU6IGJvb2xlYW5cbn1cblxuY29uc3QgQ09ORklSTSA9IDFcbmNvbnN0IENBTkNFTCA9IDJcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBhZGRmbGFnOiB0cnVlLCAgLy/liKTmlq3mmK/lkKbmmL7npLrmkJzntKLmoYblj7Pkvqfpg6jliIZcbiAgICBhZGRpbWc6ICcuLi8uLi9pbWFnZXMvYWN0aXZpdHlfYWRkLnBuZycsXG4gICAgc2VhcmNoc3RyOiAnJyxcbiAgICBsaXN0RGF0YTogbmV3IEFycmF5PFRhc2tJdGVtPigpLFxuXG4gICAgLy/lj6/ku6XpgJrov4doaWRkZW7mmK/lkKbmjqnol4/lvLnlh7rmoYbnmoTlsZ7mgKfvvIzmnaXmjIflrprpgqPkuKrlvLnlh7rmoYZcbiAgICBoaWRkZW5Nb2RhbFB1dDogdHJ1ZSxcbiAgICBhY3RpdmVUYXNrOiA8VGFza0l0ZW0+e1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRldGFpbDogJycsXG4gICAgICBzaG93TW9yZTogZmFsc2VcbiAgICB9LFxuICAgIGJ1dHRvbnM6IFt7IHRleHQ6ICflj5bmtognLCBpbmRleDogQ0FOQ0VMIH0sIHsgdGV4dDogJ+ehruWumicsIGluZGV4OiBDT05GSVJNIH1dLFxuICB9LFxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmxvYWREYXRhKClcbiAgfSxcbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgdGFwKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gIH0sXG5cbiAgLy8g5pCc57Si5qGG5Y+z5L6nIOS6i+S7tlxuICBhZGRoYW5kbGUoKSB7XG4gICAgY29uc29sZS5sb2coJ+inpuWPkeaQnOe0ouahhuWPs+S+p+S6i+S7ticpXG4gIH0sXG5cbiAgLy/mkJzntKLmoYbovpPlhaXml7bop6blj5FcbiAgc2VhcmNoTGlzdChldjogYW55KSB7XG4gICAgbGV0IGUgPSBldi5kZXRhaWw7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlYXJjaHN0cjogZS5kZXRhaWwudmFsdWVcbiAgICB9KVxuICB9LFxuICAvL+aQnOe0ouWbnuiwg1xuICBlbmRzZWFyY2hMaXN0KGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCfmn6Xor6LmlbDmja4nLCBlKVxuICB9LFxuICAvLyDlj5bmtojmkJzntKJcbiAgY2FuY2Vsc2VhcmNoKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzZWFyY2hzdHI6ICcnXG4gICAgfSlcbiAgfSxcbiAgLy/muIXnqbrmkJzntKLmoYZcbiAgYWN0aXZpdHlfY2xlYXIoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzZWFyY2hzdHI6ICcnXG4gICAgfSlcbiAgfSxcblxuICBsb2FkRGF0YSgpIHtcbiAgICBhcGkudGFza0xpc3QoKS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgbGV0IGxpc3Q6IEFycmF5PFRhc2tJdGVtPiA9IG5ldyBBcnJheSgpXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzLmRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXMuZGF0YVtpbmRleF07XG4gICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgaWQ6IGVsZW1lbnQuaWQsXG4gICAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgIGRldGFpbDogZWxlbWVudC5kZXRhaWwsXG4gICAgICAgICAgc2hvd01vcmU6IGZhbHNlXG4gICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCfotYvlgLzlrozmiJDnmoQgbGlzdCDkuLo6JywgbGlzdClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpc3REYXRhOiBsaXN0XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgdGFwVGFza0l0ZW0oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ+eCueWHu+S6huS7u+WKoeWNoeeJhyzkuovku7bkuLo6JywgZSlcbiAgICBsZXQgbGlzdERhdGEgPSB0aGlzLmRhdGEubGlzdERhdGFcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGlzdERhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbGlzdERhdGFbaW5kZXhdO1xuICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW1JZCA9PSBlbGVtZW50LmlkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfmjInntKLlvJXlj5blh7rnmoTmlbDmja7kuLo6JywgbGlzdERhdGFbaW5kZXhdKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygn5LmL5YmN5oyJ57Si5byV5Y+W5Ye655qE5Li6OicsIGxpc3REYXRhW2luZGV4XSlcbiAgICAgICAgbGlzdERhdGFbaW5kZXhdLnNob3dNb3JlID0gIWVsZW1lbnQuc2hvd01vcmVcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGxpc3REYXRhOiBsaXN0RGF0YSxcbiAgICB9KVxuICB9LFxuXG4gIG9uTGVmdEJ0blRhcChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygn54K55Ye75bem6L6555qE5oyJ6ZKu5LqL5Lu25bm25LiU6KKrIGNhdGNoJywgZSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgYWN0aXZlVGFzazogZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSxcbiAgICAgIGhpZGRlbk1vZGFsUHV0OiAhdGhpcy5kYXRhLmhpZGRlbk1vZGFsUHV0XG4gICAgfSlcbiAgICAvLyB3eC5zaG93TW9kYWwoe1xuICAgIC8vICAgdGl0bGU6ICfmj5DnpLonLFxuICAgIC8vICAgY29udGVudDogJ+i/meaYr+S4gOS4quaooeaAgeW8ueeqlycsXG4gICAgLy8gICBzdWNjZXNzKHJlcykge1xuICAgIC8vICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAvLyAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuXG4gIH0sXG5cbiAgLy/ngrnlh7vmjInpkq7lvLnlh7rmjIflrprnmoRoaWRkZW5Nb2RhbFB1dOW8ueWHuuahhlxuICAvL+W8ueWHuuahhueahOihqOWNlVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL+WPlua2iOaMiemSrlxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGhpZGRlbk1vZGFsUHV0OiB0cnVlXG4gICAgfSk7XG4gIH0sXG4gIC8v56Gu6K6kXG4gIGNvbmZpcm0oKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGhpZGRlbk1vZGFsUHV0OiB0cnVlXG4gICAgfSlcbiAgfSxcblxuICAvL+WvueivneahhueCueWHu+ehruWumuWSjOWPlua2iOWdh+i/m+WFpeatpOWkhCDmoLnmja4gaW5kZXgg6L+b6KGM5Yik5patXG4gIHRhcERpYWxvZ0J1dHRvbihlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygn5Lyg5YWl55qE5LqL5Lu25Li6OicsIGUpXG4gICAgLy/lpoLmnpzngrnlh7vnmoTmmK/noa7orqTmjInpkq5cbiAgICBpZiAoZS5kZXRhaWwuaXRlbS5pbmRleCA9PSBDT05GSVJNKSB7XG4gICAgICBjb25zb2xlLmxvZygn5b2T5YmN6aG16Z2i5pWw5o2u5Li6OicsIHRoaXMuZGF0YS5hY3RpdmVUYXNrKVxuICAgICAgYXBpLmNyZWF0ZVVzZXJUYXNrKHtcbiAgICAgICAgbmFtZTogdGhpcy5kYXRhLmFjdGl2ZVRhc2submFtZSxcbiAgICAgICAgZGV0YWlsOiB0aGlzLmRhdGEuYWN0aXZlVGFzay5kZXRhaWwsXG4gICAgICAgIHRhc2tfaWQ6IHRoaXMuZGF0YS5hY3RpdmVUYXNrLmlkLFxuICAgICAgfSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+a3u+WKoOeUqOaIt+S7u+WKoeeahOi/lOWbnue7k+aenOS4ujonLCByZXMpXG4gICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+a3u+WKoOeUqOaIt+S7u+WKoeWksei0pSznu5PmnpzkuLo6JywgZXJyKVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGhpZGRlbk1vZGFsUHV0OiB0cnVlXG4gICAgfSlcbiAgfVxuXG5cbn0pIl19