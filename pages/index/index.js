//index.js
//获取应用实例
// var app = getApp()
// Page({
//   data: {
//     motto: 'This is the first WeChat Applet',
//     msg: '点我',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },

//   //点击button事件处理
//   changeName: function(){
//     if(this.data.motto == 'This is the first WeChat Applet'){
//         this.setData({
//           motto: '这是第一个小程序',
//           msg:'返回'
//         })
//     }else{
//         this.setData({
//           motto: 'This is the first WeChat Applet',
//           msg:'点我'
//         })
//     }
    
//   },

//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//     //调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//     })
//   }
// })


// navigateBack: function() {
//   wx.navigateBack()
//  },
//  onReady:function(){
//   // 页面渲染完成
//  },
//  onShow:function(){
//   // 页面显示
//  },
//  onHide:function(){
//   // 页面隐藏
//  },
//  onUnload:function(){
//   // 页面关闭
//  }

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://mis.imzhuan.com:8021/adspub/1483074470352.jpg',
      'http://mis.imzhuan.com:8021/adspub/1482414606630.jpg'
    ],
    hotImgUrls: [
      'http://mis.imzhuan.com:8021/adspub/1483970087546.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1483074470352.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1482417357808.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1482414606630.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1481037609147.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1481037653730.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1480500171103.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1480424982606.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1479460744253.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1479460711774.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1478668462282.jpg',
	    'http://mis.imzhuan.com:8021/adspub/1478668375528.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

//下拉刷新事件
  onPullDownRefresh: function(){
    console.log("执行了一次下拉刷新")
    wx.stopPullDownRefresh();
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  bindLoadingTap: function(){
    wx.showLoading({
      title: '加载中',
    }),

    setTimeout(function(){
      wx.hideLoading()
    },2000)
  }
  // changeIndicatorDots: function(e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },
  // changeAutoplay: function(e) {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },
  // intervalChange: function(e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange: function(e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // }
})
