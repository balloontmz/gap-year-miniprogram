// task_list.ts
// 获取应用实例

Page({
    data: {
      addflag:true,  //判断是否显示搜索框右侧部分
      addimg:'../../images/activity_add.png',
      searchstr:'',
    },
    onLoad(){
  
    },
    onShow(){
     
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
  
  
  })