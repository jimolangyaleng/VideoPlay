Page({
    data:{
       shopData: "这是购物车页面" 
    },
    onLoad: function () {
        // wx.setNavigationBarTitle({
        //     title:"购物车"
        // })
    },
    navigateBack: function() {
        wx.navigateBack()
    },
});