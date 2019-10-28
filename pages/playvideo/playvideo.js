// pages/playvideo/playvideo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: "视屏播放",
      backType: '1',//1：返回 2：搜索
      bg: '#000'
    },
    windowWidth: app.globalData.ktxWindowWidth,
    windowHeight: 0,
    videoHeight:0,
    opcityHeight:0,
    videosrc:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    shareAni:"",
    isZan:false,
    slideUp:false,
    bg:1,
    zindex:2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight * app.globalData.pxToRpxScale;
    let videoHeight = wx.getSystemInfoSync().windowHeight * app.globalData.pxToRpxScale - (app.globalData.navHeight + app.globalData.ktxStatusHeight) - 92;
    let opcityHeight = app.globalData.navHeight + app.globalData.ktxStatusHeight;
    this.setData({
      videoHeight: videoHeight,
      windowHeight: windowHeight,
      opcityHeight: opcityHeight
    })

    let circleCount = 0;
    //放大分享按钮动画
    var animationShare = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: '50% 50%',
    });
    setInterval(function () {
      if (circleCount % 2 == 0) {
        animationShare.scale(1.15).step();
      } else {
        animationShare.scale(1.0).step();
      }

      this.setData({
        shareAni: animationShare.export()  //输出动画
      });

      circleCount++;
      if (circleCount == 1000) {
        circleCount = 0;
      }
    }.bind(this), 1000);
    setTimeout(()=>{
      this.setData({
        slideUp:true
      })
    },800);
  },

  //点赞
  zan: function(){
    this.setData({
      isZan: true
    })
  },

  //滚动回调
  scroll: function(e){
    let scrollTop = e.detail.scrollTop;
    let videoHieght = (wx.getSystemInfoSync().windowHeight * app.globalData.pxToRpxScale -92)/2;
    if (scrollTop > 5 && scrollTop < videoHieght){
      this.setData({
        zindex:15
      })
    } else {
    // if (scrollTop > videoHieght || scrollTop <= 5){
      this.setData({
        zindex: 2
      })
    }
    if (scrollTop > 15 && scrollTop < 30){
      this.setData({
        bg:'#999'
      })
    } else if (scrollTop > 30 && scrollTop < 40){
      this.setData({
        bg: '#dddddd'
      })
    } else if (scrollTop > 40){
      this.setData({
        slideUp:false
      })
    }else{
  
      this.setData({
        slideUp: true,
        bg:"#000"
      })
    }
  },

  bindfullscreenchange:function(e){
    console.log(e.detail)
    if (e.detail.direction == 'vertical' && e.detail.fullScreen == false){

    } else if (e.detail.direction == 'horizontal' && e.detail.fullScreen == true){

    }
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