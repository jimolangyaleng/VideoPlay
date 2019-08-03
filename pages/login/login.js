// pages/login/login.js
var md5 = require("../../common/md5.js");
var des = require("../../common/des.js");
Page({
  data:{
    mobileNo:"",
    pwd:""
  },

  login:function(){
    // console.log(this.data.mobileNo +"____"+this.data.pwd)
    // var md5Ciphertext =  md5.hex_md5(this.data.mobileNo);
    // // console.log(md5Ciphertext)
    // console.log(des.des("123456","123456",1,0))

    // wx.request({
    //   url: 'http://139.196.87.116:8030/bizAction.htm', //仅为示例，并非真实的接口地址
    //   data: {
    //     sign:"76d1150ad2fa2b54443cbcb60fb8370e",
    //     body:{loginType:"password",mobileNo:"18516155726",mobilecheckNo:"",password:"b60c0901fb1cacba0b713e21f9497c6d",thirdLoginId:""},
    //     sessionId:"",
    //     signType:"MD5",
    //     pageSize:"",
    //     pageNum:"",
    //     version:"1.0",
    //     serviceName:"userLogin"
    //   },
    //   header: {
    //       'content-type': 'application/json'
    //   },
    //   success: function(res) {
    //     console.log(res.data)
    //   },
    //   fail: function(res) {
    //     console.log(res.data)
    //   }
    // })

    //交互反馈
    //(1)alert弹框
    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // })

    //(2)loading弹框
    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading',
    //   duration: 10000
    // })
    // setTimeout(function(){
    //   wx.hideToast()
    // },2000)

    //(3)confirm确认框
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function(res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     }
    //   }
    // })

    //(4)显示菜单操作
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function(res) {
        console.log(res.tapIndex)
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })

  },
  loginNo: function(e) {
    this.setData({
      mobileNo: e.detail.value
    })
  },
  loginPwd:function(e){
    this.setData({
      pwd: e.detail.value
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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