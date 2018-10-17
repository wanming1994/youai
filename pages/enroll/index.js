// pages/enroll/index.js
let Cart = require("../../service/cart.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    expectedDate: '',
    birthDate: ''
  },
  //日期选择器
  expectedDate: function(e) {
    var that = this;
    var selectDate = e.detail.value;
    var selectYear = selectDate.split("-")[0];
    var selectMonth = selectDate.split("-")[1];
    var selectDay = selectDate.split("-")[2];
    this.setData({
      expectedDate: selectYear + '-' + selectMonth + '-' + selectDay,
    });
  },
  //日期选择器
  birthDate: function(e) {
    var that = this;
    var selectDate = e.detail.value;
    var selectYear = selectDate.split("-")[0];
    var selectMonth = selectDate.split("-")[1];
    var selectDay = selectDate.split("-")[2];
    this.setData({
      birthDate: selectYear + '-' + selectMonth + '-' + selectDay,
    });
  },
  name(e) {
    this.setData({
      name: e.detail.value
    })
  },
  tel(e) {
    this.setData({
      tel: e.detail.value
    })
  },
  submit() {
    var tel = this.data.tel
    if (!this.data.name) {
      wx.showToast({
        title: '请输入妈妈姓名',
        icon: 'none'
      })
    } else if (!(/^1[3456789]\d{9}$/.test(tel))) {
      wx.showToast({
        title: '请输入正确号码',
        icon: 'none'
      })
    } else if (!this.data.expectedDate && !this.data.birthDate) {
      wx.showToast({
        title: '请选择预产期或宝宝生日',
        icon: 'none'
      })
    } else {
      new Cart(res => {
        wx.showToast({
          title: '报名成功',
          icon: 'success'
        })
        setTimeout(function() {
          wx.navigateBack({

          })
        }, 2000)
      }).add({
        productId: this.data.productId,
        name: this.data.name,
        tel: this.data.tel,
        expectedDate: this.data.expectedDate,
        birthDate: this.data.birthDate,
        extensionId: this.data.extensionId
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      productId: options.id,
      extensionId: options.extension ? options.extension : '-1'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  }

})