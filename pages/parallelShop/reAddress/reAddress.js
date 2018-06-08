// pages/parallelShop/reAddress/reAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { id: '0', address: '广东省深圳市南山区TCL国际E城1111654456415456fsvgjriuufoerfi广东省深圳市南山区TCL国际E城vcfrdvefrv', name: '刘二丫', phone: '15940619301' },
      { id: '1', address: '广东省深圳市南山区TCL国际E城222广东省深圳市南山区TCL国际E城222', name: '王女士', phone: '15940619301' },
      { id: '2', address: '广东省深圳市南山区TCL国际E城333', name: '赵先生', phone: '15940619301' },
      { id: '3', address: '广东省深圳市南山区TCL国际E城444', name: '小仙女', phone: '15940619301' },
      { id: '4', address: '广东省深圳市南山区TCL国际E城555', name: '粽子', phone: '15940619301' },
      { id: '5', address: '广东省深圳市南山区TCL国际E城666', name: '猹', phone: '15940619301' },
    ],
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  addAddress: function () {
    this.setData({
      isShow: true
    })
  },

  hideNew: function () {
    this.setData({
      isShow: false
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var recipient = e.detail.value.recipient;
    var phone = e.detail.value.phone;
    var goodsAddress = e.detail.value.goodsAddress;
    var that = this;
    if (recipient == '' || phone == '' || goodsAddress == '') {
      wx.showToast({
        title: '请完整输入信息',
        icon: 'none',
        duration: 500
      })
    } else {
      that.hideNew();
      wx.startPullDownRefresh();
      setTimeout(function () {
        wx.stopPullDownRefresh();
      }, 1000)
    }
  },

})