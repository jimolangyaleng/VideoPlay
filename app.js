//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    // this.getUserInfo();
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  onShow: function(){
    // 当小程序启动，或从后台进入前台显示，会触发 onShow
  },

  onHide:function(){
    // 当小程序从前台进入后台，会触发 onHide
  },

  onError: function(msg){
    // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    console.log("脚本发生错误",msg)
  },

  networkTimeout: {
    "request": 10000,
    "connectSocket": 10000,
    "uploadFile": 10000,
    "downloadFile": 10000
  },
  globalData:{
    userInfo:null //作为全局变量
  }
})