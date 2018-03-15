// pages/parallelShop/shopEdition/shopEdition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../../images/pingxingdian.jpg',
      '../../../images/makers.jpg',
      '../../../images/199.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    circular:true,
    shopIconBtn: [
      { icon: "../../../images/pingxingdian.png", text:"待领配" },
      { icon: "../../../images/pingxingdian.png", text: "生成领配码" },
      { icon: "../../../images/pingxingdian.png", text: "全部订单" },
    ]
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
  
  }
})