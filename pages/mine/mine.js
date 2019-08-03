//获取应用实例
var app = getApp()
Page({
    data:{
        mineData: "这是我的页面",
        bgImage: 'url(img/27-03.png)',
        myJewel: 0,
        userName:"立即登录",
        userInfo:"",
        mobileNo:"登录后享受更多特权"
    },

//去登陆
    goLogin:function(){
        wx.navigateTo({
          url: '../login/login',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },
//视屏播放
  videoPlay: function(){
    wx.navigateTo({
      url: '../videoDemo/video/video',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
//转盘抽奖
    luckyDraw: function(){
      wx.navigateTo({
        url: '../luckyDraw/luckyDraw',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    },

//选择城市
    switchCity: function(){
        wx.navigateTo({
          url: '../switchCity/switchCity',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },

//扫一扫
    scanClick:function(){
      wx.navigateTo({
        url: '../richScan/richScan',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    },

//二维码生成
    qrcodeBuilder:function(){
        wx.navigateTo({
          url: '../qrcode/qrcode',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    },

//地图显示
    mapClick:function(){
      wx.navigateTo({
          url: '../map/map',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
      })
    },

    //关于我们
    aboutUsClick:function(){
        wx.navigateTo({
          url: '../aboutUs/aboutUs'
          // success: function(res){
          //   // success
          // },
          // fail: function() {
          //   // fail
          // },
          // complete: function() {
          //   // complete
          // }
        })

        // < navigator open- type="navigateTo" />
        // wx.redirectTo   页面重定向    <navigator open-type="redirectTo"/>
    },

    onLoad: function (options) {
      console.log("options", options);
      // 生命周期函数--监听页面加载
        // wx.setNavigationBarTitle({
        //     title:"我的"
        // })
        // this.setData({  
          // bgImage:"url(http://wx.imzhuan.cn/showImageById.ajax?imageName=1480669272004.jpg)"
        // })
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
          console.log("微信登录后返回的数据userInfo=", userInfo)
          var nickName = userInfo.nickName;
          var avatarUrl = userInfo.avatarUrl;
          var gender = userInfo.gender; //性别 0：未知、1：男、2：女 
          var province = userInfo.province;
          var city = userInfo.city;
          var country = userInfo.country;
          //更新数据
          that.setData({
            userName:nickName,
            bgImage:"url("+avatarUrl+")",
            userInfo:userInfo
          });
          // console.log(app.globalData.userInfo)
        })


    },

    onReady:function(){
      // 生命周期函数--监听页面初次渲染完成
    },

    onShow:function(){
      // 生命周期函数--监听页面显示
    },

    onHide:function(){
      // 生命周期函数--监听页面隐藏
    },

    onUnload: function (){
      // 生命周期函数--监听页面卸载
    },

    onPullDownRefresh:function(){
      // 页面相关事件处理函数--监听用户下拉动作
      console.log("监听用户下拉动作测试实现")
      console.log("获取当前页面的路径", Page.prototype)
    },

    onReachBottom: function(){
      // 页面上拉触底事件的处理函数
      console.log("监听用户上拉事件动作测试实现")
    },

    onShareAppMessage:function(){
      // 用户点击右上角转发
      return{
        title:"这是个测试的分享",
        path:"pages/luckyDraw/luckyDraw"

      }
    },

    onPageScroll:function(){
      //页面滚动触发事件的处理函数
    },
    
    navigateBack: function() {
        wx.navigateBack();
        // <navigator open- type="navigateBack" >
    }
});