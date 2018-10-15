let swiperAutoHeight = require("../../../template/swiperProduct/swiper.js"),
  Cart = require("../../../service/cart.js"),
  Product = require("../../../service/product.js"),
  order = require("../../../service/order.js"),
  WxParse = require('../../wxParse/wxParse.js'),
  app = getApp(),
  util = require("../../../utils/util.js")

Page(Object.assign({}, swiperAutoHeight, {
  /**
   * 页面的初始数据
   */
  data: {
    goodsAmount: 1,
    sys: app.globalData.sys, //系统信息
    productData: {}, //数据
    pageLoad: false, //页面加载完成
    hiddenmodalput: true,
    autoFoucs: false
  },
  //点击按钮痰喘指定的hiddenmodalput弹出框
  modalinput: function() {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput,
      autoFoucs: true
    })
  },
  //取消按钮
  cancel: function() {
    this.setData({
      hiddenmodalput: true,
      autoFoucs: false
    });
  },
  //确认
  confirm: function() {
    var phone = this.data.mobile
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
      wx.showToast({
        title: '手机号错误',
        icon: 'none'
      })
    } else {
      this.setData({
        hiddenmodalput: true,
        autoFoucs: false
      })
      wx.showToast({
        title: '报名成功',
        icon: 'success'
      })
    }
  },
  mobile(e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  onLoad: function(options) {
    if (app.globalData.LOGIN_STATUS) {
      this.getData(options)
    } else {
      app.loginOkCallbackList.push(() => {
        this.getData(options)
      })
    }
  },
  goHome() {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  getData(options) {
    let that = this;
    let id = options.id;
    this.data.id = id;
    var extension = options.extension;
    new Product((res) => {
      wx.setNavigationBarTitle({
        title: res.data.info.name
      })
      var introduction = res.data.info.goods_desc
      this.setData({
        productData: res.data,
        introduction: res.data.info.goods_desc,

      })

      if (introduction != null) {
        WxParse.wxParse('introduction', 'html', introduction, that, 5);
      }
      setTimeout(res => {
        this.setData({
          pageLoad: true
        })
      }, 200)
    }).view({
      id: id
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },


}))