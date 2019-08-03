// pages/map/map.js
var QQMapWX = require('../../common/qqmap-wx-jssdk.js');
var map;var qqmapsdk;
Page({
  data: {
    showLocation:true,
    latitude: 23.099994,
    prLocation: "",
    longitude: 113.324520
  },
  regionchange(e) {
    //视野发生变化时触发
    console.log(e.type)
  },
  markertap(e) {
    //点击标记点时触发
    console.log(e.markerId)
    if(e.markerId == 1){
      return;
    }
    var markerDataArray = this.data.markers;
    var goLocationData = "";
    for(var i=0;i<markerDataArray.length;i++){
      if(markerDataArray[i].id == e.markerId){
        goLocationData = markerDataArray[i];
      }
    }
     wx.openLocation({
        latitude: goLocationData.latitude,
        longitude: goLocationData.longitude,
        name:goLocationData.name,
        address:goLocationData.address,
        scale: 28
      })
  },
  controltap(e) {
    //点击控制件事触发
    console.log(e.controlId)
    switch(e.controlId){
      case 1:{
        map.moveToLocation();
      }
    }



    // wx.chooseLocation({
    //   success: function(res){
    //     // success
    //     var latitude = res.latitude;
    //     var longitude = res.longitude;
    //     var name = res.name;
    //     var address = res.address;
    //   },
    //   fail: function() {
    //     // fail
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })

    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success: function(res) {
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     wx.openLocation({
    //       latitude: latitude,
    //       longitude: longitude,
    //       name:"上海市",
    //       address:"电信园区杨高南路",
    //       scale: 28
    //     })
    //   }
    // })
  },
  onLoad:function(options){
    qqmapsdk = new QQMapWX({
            key: 'F3IBZ-NP3WF-OTMJ7-JWEJ5-MY62T-TQFN3'
        });
    if(!map){
      map = wx.createMapContext('map');
    }
    var that = this;
    var info = wx.getSystemInfoSync();
    // 页面初始化 options为页面跳转所带来的参数
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        // var latitude = res.latitude;
        // var longitude = res.longitude;
        // var speed = res.speed;
        // var accuracy = res.accuracy;
      console.log(res)
        var tempMarkers = [{
            iconPath: "img/wz.png",
            id: 1,
            title:"",
            latitude: res.latitude,
            longitude: res.longitude,
            name:"",
            address:"",
            width: 32,
            height: 32
        }];
        var tempIncludePoints = [{
          latitude: res.latitude,
          longitude: res.longitude
        }];
        var tempCircles = [{
          latitude: res.latitude,
          longitude: res.longitude,
          color:"#000000ff",
          fillColor:"#0079ffa0",
          strokeWidth:0.5,
          radius:30
        }];
        var tempPolyline = [{
          points: [ {
            longitude: res.longitude,
            latitude: res.latitude
          },{
            longitude: 113.3245211,
            latitude: 23.10229
          }],
          color:"#5c95e6ff",
          width: 2,
          dottedLine: false
        }];

        var tempControls = [{
            id: 1,
            iconPath: 'img/back.png',
            position: {
              left: 0,
              top: 500-50,
              width: 32,
              height: 32
            },
            clickable: true
          }];
        that.setData({
          markers:tempMarkers,
          polyline:tempPolyline,
          circles:tempCircles,
          controls:tempControls,
          points:tempIncludePoints,
          longitude: res.longitude,
          latitude: res.latitude
        });
        
      }
    })
  },

  //触发搜索框框
  serLoaction: function(e){
    this.setData({
      prLocation: e.detail.value
    });
  },

  //点击搜索按钮
  serach:function(){
    console.log(this.data.prLocation)
    var that = this;
    // 调用接口
    qqmapsdk.search({
        keyword: this.data.prLocation,
        page_size: 20,
        success: function (res) {
            console.log(res.data);
            if(res.data){
              var locationData = res.data;
              var tempMarkersArray = new Array();
              var tempPointsArray = new Array();
              for(var i=0;i<locationData.length;i++){
                var tempMarkers = {
                      iconPath: "img/wz.png",
                      id: locationData[i].id,
                      title:locationData[i].title,
                      address:locationData[i].address,
                      latitude: locationData[i].location.lat,
                      longitude: locationData[i].location.lng,
                      name:locationData[i].title,
                      width: 32,
                      height: 32
                  }
                  var tempPoints = {
                    latitude: locationData[i].location.lat,
                    longitude: locationData[i].location.lng
                  };
                  tempMarkersArray.push(tempMarkers);
                  tempPointsArray.push(tempPoints);
              }
              that.setData({
                markers:tempMarkersArray,
                points:tempPointsArray
                
              });
            }
        },
        fail: function (res) {
            console.log(res);
            wx.showToast({
              title: res.message,
              icon: 'success',
              duration: 2000
            })
        },
        complete: function (res) {
            console.log(res);
        }
  });

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