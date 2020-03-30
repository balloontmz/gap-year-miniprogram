// task_list.ts
// 获取应用实例
//[事件传参](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)
const api = require('../../utils/request/api')

interface TaskItem {
  id: number
  name: string
  detail: string
  showMore: boolean
}

Page({
  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '../../images/activity_add.png',
    searchstr: '',
    listData: new Array<TaskItem>(),
  },
  onLoad() {
    this.loadData()
  },
  onShow() {

  },

  tap(e: any) {
    console.log(e)
  },

  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
  },

  //搜索框输入时触发
  searchList(ev: any) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
  },
  //搜索回调
  endsearchList(e: any) {
    console.log('查询数据', e)
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
  },
  //清空搜索框
  activity_clear(e: any) {
    console.log(e)

    this.setData({
      searchstr: ''
    })
  },

  loadData() {
    api.taskList().then((res: any) => {
      console.log(res)
      let list: Array<TaskItem> = new Array()
      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];
        list.push({
          id: element.id,
          name: element.name,
          detail: element.detail,
          showMore: false
        })

      }
      console.log('赋值完成的 list 为:', list)
      this.setData({
        listData: list
      })
    })
  },

  tapTaskItem(e: any) {
    console.log('点击了任务卡片,事件为:', e)
    let listData = this.data.listData
    for (let index = 0; index < listData.length; index++) {
      const element = listData[index];
      if (e.currentTarget.dataset.itemId == element.id) {
        // console.log('按索引取出的数据为:', listData[index])
        // console.log('之前按索引取出的为:', listData[index])
        listData[index].showMore = !element.showMore
      }
    }
    this.setData({
      listData: listData,
    })
  },


})