// pages/parallelShop/receiveDetail/receiveDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [
      { id: "01", name: "II代芯动力", price: "100", count: "2", image: "../../../images/capital-1.jpg" },
      { id: "02", name: "干净", price: "200", count: "2", image: "../../../images/capital-1.jpg" },
      { id: "03", name: "阿拉伯糖", price: "300", count: "2", image: "../../../images/capital-1.jpg" },
      { id: "03", name: "阿拉伯糖", price: "400", count: "2", image: "../../../images/capital-1.jpg" }
      
    ],
    totalPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   // 返回的参数在options中；
   console.log(options);
   
   //计算产品列表中的总价；
   var that = this;
   var total = null;
   var productList = this.data.productList;
   if ( productList.length > 0 ) {
     productList.map(function (list) {
       total += parseFloat(list.price) * parseInt(list.count);
     })
    that.setData({
        totalPrice: total
      })
   }
   
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