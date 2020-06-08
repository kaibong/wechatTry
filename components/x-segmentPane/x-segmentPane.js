// components/x-segmentPane/x-segmentPane.js
Component({
  options:{
    multipleSlots:true
  },
  externalClasses:["segment-cls"],
  /**
   * 组件的属性列表
   */
  properties: {
    segmentItems :{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIdx :0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handlerSelectChange:function(evt){

      let idx = parseInt(evt.detail.currentIdx)
      this.setData({
        currentIdx:idx
      })
    },
    _handlerChange:function(evt){
      // 1.获取分段选择器组件对象
      let segBar =  this.selectComponent('#x-sp-sb')
      // 2.调用对应的方法
      segBar._setCurrentIdx(evt.detail.current)
    }
  }
})
