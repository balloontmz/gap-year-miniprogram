// components/card_content/card_content.ts
const order = ['demo1', 'demo2', 'demo3']

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    barTitle: {
      type: String,
      value: 'bar title'
    }
  },

  /**
   * 组件的初始数据
   */
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

  /**
   * 组件的方法列表
   */
  methods: {
    scroll(e) {
      console.log(e)
    },

    tap() {
      for (let i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toView) {
          this.setData({
            toView: order[i + 1],
            scrollTop: (i + 1) * 200
          })
          break
        }
      }
    },
  }
})
