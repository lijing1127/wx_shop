// pages/parallelShop/warehouseMana/warehouseMana.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ary: ['请选择', '深圳总仓库', '新疆总仓库',],
    objectAry: [
      {
        id: 0,
        name: '请选择'
      }, {
        id: 1,
        name: '深圳总仓库'
      }, {
        id: 2,
        name: '新疆总仓库'
      }
    ],
    idx: 0,
    array: ['请选择', '入库', '出库', '调拨', '批量'],
    objectArray: [
      {
        id: 0,
        name: '请选择'
      }, {
        id: 1,
        name: '入库'
      }, {
        id: 2,
        name: '出库'
      }, {
        id: 3,
        name: '调拨'
      }, {
        id: 4,
        name: '批量'
      }
    ],
    index: 0,
    listData: [
      { name: "CG20180409642989", money: "96000", status: "未受理", url: "../stockOrder/stockOrder" },
      { name: "CG20180409642989", money: "8500", status: "未受理" },
      { name: "CG20180409642989", money: "3000", status: "已受理" },
      { name: "CG20180409642989", money: "6300", status: "已受理" },
      { name: "CG20180409642989", money: "10000", status: "已受理" },
      { name: "CG20180409642989", money: "2500", status: "已受理" },
      { name: "CG20180409642989", money: "80000", status: "已受理" }
    ],
    warehouse: '深圳总仓库'
  },

  bindPicker1Change: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    // if (e.detail.value == 0) {
    //   this.setData({ reply: false })
    // } else {
    //   console.log(e.detail.value)
    //   this.setData({ reply: true })
    // }

    this.setData({
      idx: e.detail.value
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    if (e.detail.value == 0) {
      this.setData({ reply: false })
    } else {
      console.log(e.detail.value)
      this.setData({ reply: true })
    }

    this.setData({
      index: e.detail.value
    })
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