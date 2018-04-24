// pages/parallelShop/generate/generate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    receive: "0", //营业员输入的金额
    rcode: '', //二维码的链接地址
  },

  //用户点击‘确认生成’
  setRcode: function () {
    var that = this;
    if (this.regPrice(this.data.receive)) {
      //显示loading。。
      wx.showLoading({
        title: '加载二维码中',
      })

      // //请求二维码
      wx.request({
        url: 'http://192.168.1.235:3000/code/get_rcode',
        data: {
          get_price: this.data.receive,
        },
        success: function (res) {
          console.log(res.data);
          if (res.data) {
            wx.hideLoading();
            that.setData({
              rcode: res.data
            });
          }

        }
      })
    } else {
      wx.showToast({
        title: "请输入数字",
        icon: "none"
      })
    }

  },

  //获取输入框的金额
  getPrice: function (e) {
    if (this.regPrice(e.detail.value)) {
      this.setData({
        receive: e.detail.value
      })
    }
  },

  tapScan: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  },

  //正则验证，验证输入的金额为数字
  regPrice: function (regx) {
    var reg_test = /^([1-9][0-9]*)+(.[0-9]{1,3})?$/;
    return reg_test.test(regx);
  } 
})