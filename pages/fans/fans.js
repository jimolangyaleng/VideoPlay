// var util = require('../../utils/util.js')
// console.info(util.formatTime(new Date()))
Page({
    data:{
        fansData: "这是个做测试用的界面",
        view:"view",
        staffA: { firstName: 'Hulk', lastName: 'Hu' },
        staffB: { firstName: 'Shang', lastName: 'You' },
        staffC: { firstName: 'Gideon', lastName: 'Lin' },
        version:"0.0.1",
        animationData:{},
        count: 1   
    },
    onLoad: function () {
        // wx.setNavigationBarTitle({
        //     title:"粉丝"
        // });
        // wx.showNavigationBarLoading();
    },
    add:function(e){
      console.log("点击事件返回参数=",e)
      console.log("dataset=" + e.currentTarget.dataset.alphaBeta)
      console.log("获取小程序的版本号=", wx.getSystemInfoSync().version)
      wx.showLoading({
        title: '加载中',
      })
      this.setData({
        version: wx.getSystemInfoSync().version,
        count:this.data.count + 1
      });
      var headerInfo = {}, bizInfo = {};
      headerInfo.pageNum = '1';
      headerInfo.pageSize = "2";
      headerInfo.sessionId = "";
      wx.request({
        url: 'http://www.winhc.cn/biz.ajax', //仅为示例，并非真实的接口地址
        method:"GET",
        data: {
          'serviceName': "queryCaseList",
          'headerInfo': headerInfo,
          'bizInfo': bizInfo
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log("调用接口成功返回数据=",res.data)
          wx.hideLoading()
        },
        fail:function(res){
          console.log("调用接口失败返回数据=",res);
          wx.hideLoading()
        }
      })
    },

    //点击显示弹出层
    clickOut:function(e){
      // wx.showModal({
      //   title: '只是标题',
      //   content: '这是内容',
      //   cancelText:'关闭',//默认显示取消
      //   cancelColor:'#ccc',
      //   confirmText:'确认',//默认显示确认
      //   confirmColor:'blue',
      //   success: function (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })

      //显示菜单操作
      wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: function (res) {
          console.log(res.tapIndex)
        },
        fail: function (res) {
          console.log(res.errMsg)
        }
      })
    },


    // 冒泡事件测试
    handleTap1:function(e){
      console.log("outer")
      // wx.showToast({
      //   title: 'outer',
      //   icon: 'success',
      //   duration: 1000
      // })  
    },
    handleTap2:function(e){
      console.log("middle")
      // wx.showToast({
      //   title: 'middle',
      //   icon: 'success',
      //   duration: 1000
      // }) 
    },
    handleTap3:function(e){
      console.log("inner")
      // wx.showToast({
      //   title: 'inner',
      //   icon: 'success',
      //   duration: 1000
      // }) 
    },

    onShow:function(){
      // console.log("动画")
      // var animation = wx.createAnimation({
      //   transformOrigin: "50% 50%",
      //   duration: 1000,
      //   timingFunction: "ease",
      //   delay: 0
      // })
    },

    //点击显示动画
    animationClick: function(e){
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease-in-out',
      })

      this.animation = animation

      animation.scale(2, 2).rotate(45).step()

      this.setData({
        animationData: animation.export()
      })

      setTimeout(function () {
        // animation.translate(300).step()
        // this.setData({
        //   animationData: animation.export()
        // })
        this.rotateAndScale();
      }.bind(this), 1000)
    },

    rotateAndScale: function () {
      // 旋转同时放大
      this.animation.rotate(-45).scale(1, 1).step()
      this.setData({
        animationData: this.animation.export()
      })
    },
    rotateThenScale: function () {
      // 先旋转后放大
      this.animation.rotate(45).step()
      this.animation.scale(2, 2).step()
      this.setData({
        animationData: this.animation.export()
      })
    },
    rotateAndScaleThenTranslate: function () {
      // 先旋转同时放大，然后平移
      this.animation.rotate(45).scale(2, 2).step()
      this.animation.translate(100, 100).step({ duration: 1000 })
      this.setData({
        animationData: this.animation.export()
      })
    },

    //点击滚动到顶部
    scrollTop: function(e){
      wx.pageScrollTo({
        scrollTop: 0
      })
    },
    
    navigateBack: function() {
        wx.navigateBack()
    },
});