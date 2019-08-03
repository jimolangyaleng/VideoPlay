// pages/richScan/richScan.js
Page({
  data:{
    scanUrl: ""
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.scanCode({
      success: function(res) {
        console.log(res)
        that.setData({
          scanUrl: res.result
        })
        wx.showModal({
        title: '提示',
        content: res.result,
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})