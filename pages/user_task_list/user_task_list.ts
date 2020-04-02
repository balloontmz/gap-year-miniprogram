// pages/user_task_list/user_task_list.ts
const apiUserTask = require('../../utils/request/api')

interface UserTaskItem {
  id: number
  name: string
  detail: string
  process: Process
  showMore: boolean
}

interface Process {
  id: number
  completed: boolean
  detail: string
  details: Array<Detail>
}

interface Detail {
  description: string
  time: string
}

const CONFIRM_USER_TASK = 1
const CANCEL_USR_TASK = 2

Page({
  data: {
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '../../images/activity_add.png',
    searchstr: '',
    listData: new Array<UserTaskItem>(),

    //可以通过hidden是否掩藏弹出框的属性，来指定那个弹出框
    hiddenModalPut: true,
    activeTask: <UserTaskItem>{
      id: 0,
      name: '',
      detail: '',
      process: {},
      showMore: false
    },
    updateDetail: '',
    existDetails: new Array<Detail>(),
    buttons: [{ text: '取消', index: CANCEL_USR_TASK }, { text: '确定', index: CONFIRM_USER_TASK }],
    radioItems: [
      { name: '未完成', value: 'UNDONE' },
      { name: '完成', value: 'COMPLETED', checked: true },
    ],
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
    apiUserTask.userTaskList().then((res: any) => {
      console.log(res)
      let list: Array<UserTaskItem> = new Array()
      for (let index = 0; index < res.data.length; index++) {
        const element = res.data[index];
        list.push({
          id: element.id,
          name: element.name,
          detail: element.detail,
          process: {
            id: element.process.id,
            detail: element.process.detail,
            completed: false,
            details: element.process.details ?? [],
          },
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

  onRightBtnTap(e: any) {
    console.log('点击右边的按钮事件并且被 catch', e)
    this.setData({
      activeTask: e.currentTarget.dataset.item,
      hiddenModalPut: !this.data.hiddenModalPut,
      existDetails: e.currentTarget.dataset.item.process.details
    })
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

  textInput(e: any) {
    console.log('当前文本输入的事件为:', e)
    this.setData({
      updateDetail: e.detail.value
    })
  },

  //对话框点击确定和取消均进入此处 根据 index 进行判断
  tapDialogButton(e: any) {
    console.log('传入的事件为:', e)
    //如果点击的是确认按钮
    if (e.detail.item.index == CONFIRM_USER_TASK) {
      console.log('当前页面数据为:', this.data.activeTask)
      console.log('当前的 detail 数据为:', this.data.updateDetail)
      apiUserTask.updateProcess({
        process_id: this.data.activeTask.process.id,
        detail: this.data.updateDetail,
        completed: 1,
      }).then((res: any) => {
        console.log('更新用户任务细节返回结果为::', res)
        //更新完成之后重新拉取数据
        this.setData({
          hiddenModalPut: true
        })
        this.loadData()
      }).catch((err: any) => {
        console.log('更新用户任务细节失败,结果为:', err)
        this.setData({
          hiddenModalPut: true
        })
      })
    } else if (e.detail.item.index == CANCEL_USR_TASK) {
      this.setData({
        hiddenModalPut: true
      })
    }

  },

  radioChange(e: any) {
    console.log('点击了切换按钮')
    var items = this.data.radioItems
    for (var i = 0; i < items.length; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }
    console.log(items)

    this.setData({
      radioItems: items
    });
  },


})