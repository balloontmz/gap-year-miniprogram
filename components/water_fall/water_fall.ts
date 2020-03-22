// components/water_fall/water_fall.ts
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
    images: [{
      width: 360,
      height: 540,
      showHeight: 0,
    }, {
      width: 480,
      height: 540,
      showHeight: 0,
    }, {
      width: 540,
      height: 720,
      showHeight: 0,
    }, {
      width: 720,
      height: 960,
      showHeight: 0,
    }, {
      width: 540,
      height: 960,
      showHeight: 0,
    }, {
      width: 360,
      height: 720,
      showHeight: 0,
    }, {
      width: 360,
      height: 960,
      showHeight: 0,
    }, {
      width: 540,
      height: 540,
      showHeight: 0,
    }, {
      width: 540,
      height: 1440,
      showHeight: 0,
    }, {
      width: 960,
      height: 1440,
      showHeight: 0,
    }],
    heightArr: Array<number>(),
    list: Array<any>(),
    col: 2
  },

  /**
   * 组件的方法列表
   */
  methods: {

    initData(col) {
      let images = []
      let scale = 2
      // 模拟图片宽高
      for (let i = 0; i < 10; i++) {
        let image = this.data.images[Math.floor(Math.random() * 10)]
        images.push(image)
      }
      for (let i in images) {
        let height = 165 / images[i].width * images[i].height * scale
        images[i].showHeight = height
        // 第一行的两个盒子
        if (i < col) {
          this.data.list.push([images[i]])
          this.data.heightArr.push(height)
        } else {
          // 选出高度较矮的一列的索引
          let minHeight = Math.min.apply(null, this.data.heightArr)
          let minHeightIndex = this.data.heightArr.indexOf(minHeight)
          this.data.list[minHeightIndex].push(images[i])
          this.data.heightArr[minHeightIndex] += height
        }
      }
      this.setData({
        list: this.data.list
      })
    },
    onReachBottom() {
      this.initData(0)
    }

  },

  attached() {
    this.initData(2)
  },
})
