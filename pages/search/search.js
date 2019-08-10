// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      title: "关键词搜索",
      backType: '1'//1：返回 2：搜索
    },
    focus: true,
    searchValue: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //获取输入框值
  getSearchVal: function(e){
    var value = e.detail.value;
    this.setData({
      searchValue:value
    })
  },

  //清空
  clear: function(){
    this.setData({
      searchValue:""
    })
  },

  //开始查询
  startsearch: function(){
    console.log("开始查询")
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