Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getId: function (event) {
    var that = this;
    var Id = event.currentTarget.id;
    console.log(Id)
    wx.navigateTo({
      url: '../shopDetail/shopDetail?id=' + Id,
    })
  },
})