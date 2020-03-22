// components/carousel/carousel.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
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

  /**
   * 组件的方法列表
   */
  methods: {
    // changeIndicatorDots() {
    //   console.log("切换显示")
    //   this.setData({
    //     indicatorDots: !this.data.indicatorDots
    //   })
    // },

    bindchange(e: any) {
      // console.log("aa", e.detail.current);
      this.setData({
        currentSwiper: e.detail.current
      })
    },
  },

  // 在组件实例进入页面节点树时执行
  attached() {
    // var self = this;
    // wx.getSystemInfo({
    //   success(res) {
    //     var isIos = res.system.indexOf('iOS') > -1
    //     var navHeight = isIos ? 44 : 48
    //     self.setData({
    //       headHeight: res.statusBarHeight + navHeight,
    //     })
    //   }
    // })
  }
})