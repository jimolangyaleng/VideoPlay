//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navbarData:{
      title:"首页",
      backType:'2'//1：返回 2：搜索
    },
    windowWidth: app.globalData.ktxWindowWidth - 46 * app.globalData.pxToRpxScale,
    windowHeight: 0,
    tipsList:[
      {name:"关注"},
      { name: "推荐" },
      { name: "上海" },
      { name: "开心" },
      { name: "广场舞" },
      { name: "祝福" },
      { name: "健康" },
      { name: "妙招" },
      { name: "原创" },
      { name: "佳作" },
    ],
    current:1,
  },
  
 
  onLoad: function () {
    let windowHeight = wx.getSystemInfoSync().windowHeight * app.globalData.pxToRpxScale - (app.globalData.navHeight + app.globalData.ktxStatusHeight) - 46*app.globalData.pxToRpxScale;
    this.setData({
      windowHeight: windowHeight
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //标签切换
  checkTips:function(e){
    console.log(e.currentTarget.dataset.type)
    let tip = e.currentTarget.dataset.type;
    this.setData({
      current: tip
    })
  },

  //滚动
  upper: function(){
    console.log("顶部")
  },

  //滚动
  lower: function(){
    console.log("底部")
  },

  //去搜索页面
  _goSearch: function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },

  //开始播放视屏
  goPlayVideo: function(){
    wx.navigateTo({
      url: '../playvideo/playvideo',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/index/index'
    }
  }
})
