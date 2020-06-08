// pages/demo/demo.js
Page({
  _handlerSubmit: function(evt){
    console.log(evt)
  },
  _handlerRememberPwd:function(evt){
    if(evt.detail.value.length === 0 ){
      //取消的时候，应该自动取消自动登录选项
      this.setData({
        autoLogin:false
      })
    }
  },
  _handlerAutoLogin:function(evt){
    if(evt.detail.value.length >0){
      //选中的时候，应该自动选择自动登录选项
      this.setData({
        rememberPwd:true
      })
    }
  },
  _handlerAccountInput: function(evt){
    let account = evt.detail.value;
    this.setData({
      account : account,
      isGood : account.length>=3,
      canLogin : this.data.password.length>=3 && this.data.isGood
    })
  },
  _handlerPwdInput: function(evt){
    let password = evt.detail.value;
    this.setData({
      password : password,
      canLogin : password.length>=3 && this.data.isGood
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    account:"",
    password:"",
    isGood:false,
    canLogin:false,
    autoLogin:false,
    rememberPwd:false
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