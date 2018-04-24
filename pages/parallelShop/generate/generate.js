// pages/parallelShop/generate/generate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    receive: "0", //营业员输入的金额
    rcode: '', //二维码的链接地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  //用户点击‘确认生成’
  setRcode: function() {
    var that = this;
    if ( this.regPrice(this.data.receive) ) {
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
        success: function(res) {
          console.log(res.data);
          if (res.data) {
            wx.hideLoading();
            that.setData({
              rcode: res.data
            });
          }

        }
      })
    }else {
      wx.showToast({
        title: "请输入数字",
        icon: "none"
      })
    }
    
  },

   //获取输入框的金额
  getPrice: function(e) {
    if (this.regPrice(e.detail.value)) {
      this.setData({
        receive: e.detail.value
      })
    }
  },

  //正则验证，验证输入的金额为数字
  regPrice: function(regx) {
    var reg_test = /^([1-9][0-9]*)+(.[0-9]{1,3})?$/;
    return reg_test.test(regx);
  tapScan:function(){
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
      }
    })
  }

})