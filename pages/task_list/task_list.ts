// task_list.ts
// 获取应用实例
//[事件传参](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)
var api = require('../../utils/request/api')
interface TaskItem {
  id: number
  name: string
  detail: string
  showMore: boolean
}

const CONFIRM = 1
const CANCEL = 2

Page({
  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '../../images/activity_add.png',
    searchstr: '',
    listData: new Array<TaskItem>(),

    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
    hiddenModalPut: true,
    activeTask: <TaskItem>{
      id: 0,
      name: '',
      detail: '',
      showMore: false
    },
    buttons: [{ text: '取消', index: CANCEL }, { text: '确定', index: CONFIRM }],
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

  onLeftBtnTap(e: any) {
    console.log('点击左边的按钮事件并且被 catch', e)
    this.setData({
      activeTask: e.currentTarget.dataset.item,
      hiddenModalPut: !this.data.hiddenModalPut
    })
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

  },

  //点击按钮弹出指定的hiddenModalPut弹出框
  //弹出框的表单
  // --------------------
  //取消按钮
  cancel() {
    this.setData({
      hiddenModalPut: true
    });
  },
  //确认
  confirm() {
    this.setData({
      hiddenModalPut: true
    })
  },

  //对话框点击确定和取消均进入此处 根据 index 进行判断
  tapDialogButton(e: any) {
    console.log('传入的事件为:', e)
    //如果点击的是确认按钮
    if (e.detail.item.index == CONFIRM) {
      console.log('当前页面数据为:', this.data.activeTask)
      api.createUserTask({
        name: this.data.activeTask.name,
        detail: this.data.activeTask.detail,
        task_id: this.data.activeTask.id,
      }).then((res: any) => {
        console.log('添加用户任务的返回结果为:', res)
      }).catch((err: any) => {
        console.log('添加用户任务失败,结果为:', err)
      })
    }
    this.setData({
      hiddenModalPut: true
    })
  }


})