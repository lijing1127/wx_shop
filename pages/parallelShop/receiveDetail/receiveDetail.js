// pages/parallelShop/receiveDetail/receiveDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consignee:"朱女士",
    userPhone:"15940619301",
    receivingAddress:"深圳市南山区t桃园地铁站路口一楼",
    productList: [
      { id: "01", name: "II代芯动力", price: "100", count: "1", image: "../../../images/L-alabo.png" },
      { id: "02", name: "甘净", price: "200", count: "2", image: "../../../images/L-alabo.png" },
      { id: "03", name: "阿拉伯糖", price: "300", count: "3", image: "../../../images/L-alabo.png" },
      { id: "04", name: "健康水", price: "400", count: "4", image: "../../../images/L-alabo.png" },
      { id: "05", name: "合晶能修复按摩膏", price: "400", count: "5", image: "../../../images/L-alabo.png" },
      { id: "06", name: "高钙米", price: "400", count: "6", image: "../../../images/L-alabo.png" }
      
    ],
    totalPrice: 0,
    array: ['线下领配', '线上领配'],
    index:0
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

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }


})