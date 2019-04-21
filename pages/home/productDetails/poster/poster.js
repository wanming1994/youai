// pages/canvas/canvas.js
var app = getApp()
let util = require('../../../../utils/util.js')
var common = require('../../../../service/common.js')
var product = require('../../../../service/product.js')
var member = require('../../../../service/member.js')
Page(Object.assign({}, {

  /**
   * 页面的初始数据
   */
  data: {
    canvasw: '',
    canvash: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.globalData.LOGIN_STATUS) {
      this.getData(options)
    } else {
      app.loginOkCallbackList.push(() => {
        this.getData(options)
      })
    }

  },
  getData(options) {
    var id = options.id
    var that = this;
    new product(resp => {
      // var res1 = resp.data.info.shareUrl ? resp.data.info.shareUrl : '/resources/images/product/poster.png'
      wx.downloadFile({
        url: resp.data.info.shareUrl ? resp.data.info.shareUrl : '/resources/images/product/poster.png',
        success: function(resB) {
          that.setData({
            resBg: resB.tempFilePath
          })
          var headImg = '',
            picImg = '';
          new product((res) => {
            wx.downloadFile({
              url: res.data,
              success: function(res) {
                that.setData({
                  qrcode: res.tempFilePath
                })
                wx.getSystemInfo({
                  success: function(res) {
                    that.setData({
                      canvasw: res.windowWidth + 'px',
                      canvash: res.windowHeight + 'px'
                    })
                    var w = res.windowWidth;
                    var h = res.windowHeight;
                    const ctx = wx.createCanvasContext('myCanvas')
                    ctx.setFillStyle('rgb(255, 255, 255)')
                    ctx.fillRect(0, 0, w, h)
                    ctx.drawImage(that.data.resBg, 0, 0, w, h) //背景图大
                    ctx.save();
                    ctx.beginPath()
                    ctx.drawImage(that.data.qrcode, 0.1 * w, 0.80 * h, 0.3 * w, 0.3 * w) //小程序二维码
                    ctx.draw();
                    setTimeout(function() {
                      wx.showModal({
                        title: '提示',
                        content: '长按可保存海报至相册，再去分享朋友圈',
                      })
                    }, 500)
                  },
                  fail: function(e) {
                    console.log(e)
                  }
                })
              }
            })
          }).createUserQRCode({
            goodsId: options.id
          })
        }
      })

    }).view({
      id: options.id
    })

  },
  bindlongtap() {
    wx.canvasToTempFilePath({
      //通过id 指定是哪个canvas
      canvasId: 'myCanvas',
      success(res) {
        //成功之后保存到本地
        // console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function(res) {
            wx.showToast({
              title: '图片已保存相册',
              icon: 'success',
              duration: 2000
            })
          },
          fail: function(res) {
            console.log(res)
          }
        })
      }
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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  }
}))