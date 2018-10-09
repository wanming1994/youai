// pages/home/home.js

let swiperAutoHeight = require("../../template/swiper/swiper.js"),
  Product = require("../../service/product.js"),
  Cart = require("../../service/cart.js"),
  Coupon = require("../../service/coupon.js"),
  member = require("../../service/member.js"),
  Tenant = require("../../service/tenant.js"),
  Ad = require("../../service/ad.js"),
  app = getApp(),
  util = require("../../utils/util.js")

Page(Object.assign({}, swiperAutoHeight, {

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://www.sincereglobe.com/IMAGE/BANNER1.jpg',
      'https://www.sincereglobe.com/IMAGE/BANNER2.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    page: 1
  },

  //邀请
  joinUs: function () {
    new member(function (res) {
      if (res.data.userIsMember == 1) {
        util.navigateTo({
          url: '/pages/member/share/share'
        })
      } else {
        util.navigateTo({
          url: 'join/join'
        })
      }
    }).view()
  },

  //视频
  goVideo: function () {
    util.navigateTo({
      url: '/pages/home/video/video',
    })
  },

  //商品详情
  goProductDeatil: function (e) {
    var id = e.currentTarget.dataset.id;
    util.navigateTo({
      url: '/pages/home/productDetails/productDetails?id=' + id,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (app.globalData.LOGIN_STATUS) {
    //   this.getData(options)
    // } else {
    //   app.loginOkCallbackList.push(() => {
    //     this.getData(options)
    //   })
    // }
    this.getData(options)
  },

  getData: function (options) {
    var that = this;
    if (options.extension) {
      wx.setStorageSync('extension', options.extension)
    }
    new Product(function (data) {
      that.setData({
        productHotList: data.data.data
      })
      // console.log(data)
    }).list()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onReachBottom() {
    var that = this;
    var page = this.data.page;
    var productHotList = this.data.productHotList;
    new Product((res) => {
      if (res.data.data.length == 0) {
        that.setData({
          tips: '没有更多啦~',
          showtips: false
        })
      } else {
        productHotList = productHotList.concat(res.data.data)
        that.setData({
          productHotList: productHotList,
          loading: false,
          tips: res.data.data.length < 10 ? '没有更多啦' : '正在加载...',
          showtips: false,
          page: page
        })
      }
    }).list({
      size: 10,
      page: ++page
    });
  },

  //分享
  onShareAppMessage: function (res) {
    var that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮

    }
    return {
      title: '邀请您加入大王纸尿裤',
      path: 'pages/home/home?extension=' + app.globalData.memberInfo.userId,
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
          icon: 'success'
        })
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
}))