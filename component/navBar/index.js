// component/navBar/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navbarData: {//navbarData   由父页面传递的数据，变量名字自命名
      type:Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navH: app.globalData.navHeight + app.globalData.ktxStatusHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    search: function(){
      this.triggerEvent('goSearch')
    },
    navBack: function(){
      wx.navigateBack({
        
      })
    }
  }
})
