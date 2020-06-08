// pages/dataBind/dataBind.js
Page({
  

  _handlerTap: function(){
    console.log(123)
    // 动态修改数据源 testKeyData
    // this.data.testKeyData.push("e")
    this.data.testKeyData.unshift("e")
    this.setData({
      testKeyData:this.data.testKeyData
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    test: function(){
      console.log("test")
    },
    testKeyData:[
      'a',
      'b',
      'c'
    ],
    courseItem:[
      {
        courseImg: "/assets/images/Jellyfish.jpg",
        courseName: "小程序-玩转微信",
        teacher: "TeacherMa",
        stuCount: 2200,
        isStar: false,
        score: 15
      },{
        courseImg: "/assets/images/Koala.jpg",
        courseName: "java-学习编程",
        teacher: "kaibong",
        stuCount: 443,
        isStar: true,
        score: 35
      },{
        courseImg: "/assets/images/Koala.jpg",
        courseName: "python-学习爬虫",
        teacher: "bluequeen",
        stuCount: 553516,
        isStar: true,
        score: 100
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})