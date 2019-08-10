// pages/start/start.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: "简介",
      backType: ''//1：返回 2：搜索
    },
    userInfo: {},
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  goToIndex: function () {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
        }
      })
    }
  },

  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 获取手机系统信息
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) { angle = 14; }
      else if (angle < -14) { angle = -14; }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    let userInfo = app.globalData.userInfo
    if (!userInfo) {
      // 获取用户信息
      let _that = this;
      wx.getSetting({
        success: res => {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              this.setData({
                userInfo: res.userInfo,
              })
            },
            fail: res => {
              wx.navigateTo({
                url: "/pages/authorize/authorize"
              })
            }
          })
        },
        fail: function () {
          wx.navigateTo({
            url: "/pages/authorize/authorize"
          })
        }
      })
    } else {
      that.setData({
        userInfo: userInfo
      })
    }
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