// components/carousel2/carousel2.ts
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
    currentSwiper: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindchange(e: any) {
      // console.log("aa", e.detail.current);
      this.setData({
        currentSwiper: e.detail.current
      })
    },
  },

  attached() {
    var self = this;
    wx.getSystemInfo({
      success(res) {
        var isIos = res.system.indexOf('iOS') > -1
        var navHeight = isIos ? 44 : 48
        self.setData({
          headHeight: res.statusBarHeight + navHeight,
        })
      }
    })
  }
})
