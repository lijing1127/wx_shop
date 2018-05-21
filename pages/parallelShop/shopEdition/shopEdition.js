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
    circular: true,
    nowAddress: "深圳",
    shopIconBtn: [
      { icon: "data: image / png;base64, iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATJSURBVGhD7ZldUxtVGMeZ8coLL73wE+gHcMYZvfNWL7zxQ9gkhJfBonXKCNQZS96aIIRkd09IoJBUGijlXcJbRN6C0DQhUAgFCrSUN6sU7Fgez3Oy2UDMTKnsJhHzzPxn97 / nsPv / 7Tlnd4G8XOUqV5krz+eeN74v4d4S7X + vbmj4t3Uq4bpBLezrVcKxQU0Gq9TCx2Jz9lccQK8mB1Tg1vLHPUU8WNTCS / R6FRnOaqBUAPMlNtgprWN6fNkGviIue4FeBZCsrAM6C8A2VeBbBwxXOGHtK / uptowDnRVgggLYS53HLCSVSeuArkpX5oFeE4CFt33tgrGWNlgc6YYWoxsMmgwCnQdgJ9wPexGfpOjPGQCSEyBZp4AKFAKSE2B / YQgONmbh8EkIni2PnWpD / QOoQiYgClAkJ8CL3SV4sReVdLQVkQ2Ifin4DAWud8ToiaINH2GHhnz5AZIlB5BRRRDII8ZPlO4S / wWGXKYdlQJI1nmAmgt4MKiEFTF + ouIgqxSEAZQRxQCSdbQ1dzagcgr0ZexGe7Q8zSasi / ETFQcZpMNmE + eh0gDJOhOQmrzsLOTAmS / gOlkT4yeq6hL / Af3cjj8Z / sBtxNcJ22EfdNp + hEdTfQxgNxqAXmcPPNtYYBfffTgHfa5eONyOQT1eCIKvqY9CxsKtBmfA3zIghV2cDMD43WHJh4fHYaZ / VPLTvX4Ij4xKQEONXgj3d7F9oawRR + EQfy3AfDoVcYnxT5dBxb2vU / Gf6tTkszgI3g3cn + 2jYegILIxPMY9bvPD9oTHmNyNB5kfvDDGPgOgRGn08aLutA+qu3JR8U9VtqK / 0SN5R4YHb5ja2jyNkKXZCq9kTB0GAEZrvPZax0P2mGD11VanJJ3jx6MQvsBGeZEHwzuHJl6YCzOMWPR5Hv/XgPvN4t/V0CuyvzTOPo4NvcdxHdfJdYL/ aLHmP0Quu725J3nntFnhr2iVfc7mB / kwHPN + 4B6TcjTNmRIz56oqDPJz5lU2RsH8cDrYesBMf0SkUHhlnW/R4fM4/IU0lnHILY5NSkL3VOQka9XQxFDuv6Dfng/ AodE / ya8FZNj3jPjo9DTvLYbYvlLv / +vcg4gmzQbKAHO0sQbejGyxF9WwqKSmDxsHWzXqIPhnlBgn0 + NlFWk02GKi3KqqfBCvUlAjAlzXJD9JBF6m5UICjRSP8uaS8hhtq2Y07eBJbm7KB4GOzupikvGgqHcyb4OY1DuxXeCbuGx5C3dUp + 6bSaHMM5PfN2PsqYyA4cr2cFdrMNqY7VCt+S8q + qZQ1IOeVoiBG + qJzX7enRTgVFQMx5BNwlXNpkbVUQZALM7UuDIiliMBvIZMskkLTp9vJ44fie0pREDwmlwYctSxwT13dqeMNlXblQUxaGiDFJ8XratBphfUxMwu84jfDYH2t1Bbpjb00c2vkZF14kBsFBAKtNWmR1xRbO1m / 2M8qRUDMhQRWBurSop5aTjkQXCPPg7Vpkd9l/5+DGLXcuzo1aaQdPdgZT+LWe6HNepcJ/xZlpB+ NrQYuLSJXBQbi / aFdymApZv / Keypm9OhURCPGT5ROI3xIGyIUZgml15CoXuNYPimjlqwZC9Ing4asJGeI52MZ1UK1GD9XuVKu8vL + Bs7G6u0XnV / iAAAAAElFTkSuQmCC", text: "仓库管理", navUrl: "../warehouseMana/warehouseMana" },
      { icon: "data:image/png;base64,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", text: "待领配", navUrl: "../generate/generate" },
      { icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM8SURBVGhD7ZbdS1NxGMdPF/0R3UV/QeFt4MUUm+TLYE5Lu+miaG6ULNKkkGbmWzpdomKila8XWiKEL0FE1nyZe3HvZOoqLSuaOd0WRj2d53TUtf2Gm012Ns4DH/bj/J7n2ed7MXaohC1tWtoRfVbWoEksnpoTi6e5BDqhGzqyuuSaTUo6bBSJrBtVVeBTqTiJu7IS9NnZFnRltYPrtUBwwimXu0gLuIRTJnO9Sk09zmoH12RKysllhcJDGuYS6IiurHZwJUwQjUCQby0o+LkolQKXQUd0ZbWDyyASjfq6u8HX389taEd0ZbX/rRn6h75aXu4mDnIQdEVnVn+35iSSaV9vL3GIk9Cu6Mzq/y2tUJj6tbbWRxzgMOiM7kwIoKhD5rNnrb6+PmIzp6Gd0R0zULr09HNravUWsTEOQHfMQOlFouXP9CvJlzgF3TEDpc/MXFsuKoJ4BjNQ5tzcFdK/ZzyBGfggXIIJYsnLe0+69GfpWjED6c6fWPVhBsokkThIl/5Y5ZfBQkO68ydWfeacHDu+KA6tV1QQG5DNmhow3SgDc+lN5kzqQWLVh+76jIzH+LJ4jE604q2rC26srwd7oQwcliWwmxeZMz7jSp+Xfmai3SeTk48yrymzQuFp3Zn8DZdSudOEZ+ulQrCNvoB5NzDg2SqVMXdc6NPm5W/S/+qnmBDb1dg80mZoaAFzcSmDpakN3rz7trNsG3xmVrfGvM/Q2ArVTWM9rP5u3enVNRhWfwQt4CroeuvhbDurv1sJH+TlghsU93VQ0mkMC+zFmcA9VQM2Yv9ehNoXcZAxmwuud72F2pHvYYG9OBO452q7jti/F6H28UFIX0KCDxICPkjgAB8kYA8fhA8SMIBLFB02UD5ZDQvsjUYQ1fg68xm1IDMfvFA9YIfqwTChe3EmcE8kQYYNHvj1G6BnciN6QaJFJEE6JtxgW9mC5ufr8R3EHz5I4EC04IPsJ8gzpwfGnd4DQd6qJYruRUnXPDyY+hS0D11DBhld9MDThYNB1rL/IO2aj0H70JUP8j/wQSINonyku6Aass3dG3YYDwKpWuO6qNJ4IuX83Qnv7T6jI3AfupZ1zlxh9ROlKOoPxZUExkat4eAAAAAASUVORK5CYII=", text: "生成领配码", navUrl: "../generate/generate" },
      { icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN/SURBVGhD7ZpZTxNhFIZ7oX/AS/0RXvgDvJG2WoyIeOESI8KVGI0B4oUYFwidUtZAFMQ1QQWjhgRFg0GjwnRayxJSIGmQxbZCAFmkVCi0x+8M30Btp2VohqFN5kleOnxzejhPp8ukjGa70Bq/7dcWsyM6hg3yMbLDuEZ3JweGMnYfGXxFx1gWdMbOai3D1vDbDOs/ZOrYS8uU4UCdfbfW2HlBW2y5FispDNuoM3KtoSGD45HwZ5Sxe2g7DW5rjRY/vy+sHnuI9f4vZBacibaTjp6xlKSaOX/mA4cvVo6W2wJplV1wps7B53StAwxmW5AM3ENbrZNSzPYazNYg1gj1x6u6AXuI9Q4NzqI3WUy0lXQMJVbuevMYtA4FY+Z8vQMuN45CrT2wnqwnTiAPhJu2WkfPsB7cF1p79ZWb7yHWOzS3WlyAM9FW0jlSwtkK4hQp/DgH5NGDFIYrpe00uK03cVBE9oXWShW5/dYNOBNtJ51wkWkfiCbnaaQIJve1hxwVDshTIojB7TyyFl6HIthDrDdGdpFo5L8YgEsiIhjzFy/kvfHwKf3qFa250jTG94iGYiLPOt2QXtUFN1qn4U7b7JaC90knbxSNFjftFoliIv7VAFS8/wHHym1APiu2FLxPJbkv9oiGYiLbjSoioIrIjCoioIrITNKJBIJBaHdMRXymJJXIymoQipqdkFH5HWa8frq6RtKILPkDUPByEE7V2GFkcpGubqCIyMnqHtFTj9BgjUBb3yTkP++Hed8K/7t3aRVyGxxw7l43/Jr9y6+Fo4hIr2sR2vpnYwZrBKb/LMPFx318XL99kENus+t7YYqsR0MRkXjAo4EieLRQRDg60UhYEQSHr/owzD+1NiOhRbaCKiKgishMUorgW3I4SSfSbB+HwyYOJuaW6MoaSSWC38SQvwft/VN0ZQNFRPKahiD70UDMYI1A3895aOhw8We6CP68/2kUUs1WYJ0z/Fo4iog87JiAwpaxmMEaARRJr7BB2bsh/owXv0ZKK7dBz+g8rYhEEZF4cI574QQ5XcdTFLwd9CzQPeIkrAiCMmfvdometoeT0CIIfZlsSsKLSEUVEVBFZEYVEVBFZEZ2EbF/VCoR2UV2OnGLSL1gQKnEfcEAfwlHqXVZ7HKKnQjOojNyRjqedPACFj3DZukYlkmEaBlL5sGbn3fR8VQSHI3mH7C+TZo8nzXjAAAAAElFTkSuQmCC", text: "全部订单", navUrl: "../generate/generate" },
    ],
    showModal: false,//是否展示模态框
  },


  clickScan: function () {
    var that = this;
    wx.scanCode({
      success: (res) => {
        that.setData({
          showModal: true
        })

      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },
  goShoppingmall: function () {
    wx.redirectTo({
      url: '../shoppingMall/shoppingMall',
    })
  },

  //模态框点击展示功能
  preventTouchMove: function () {
  },

  showDetail() {
    this.setData({
      showModal: true
    });
  },

  hideDetail() {
    this.setData({
      showModal: false
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取当前经纬度（待逆推） 
    wx.getLocation({
      type: 'wgs84', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude + "," + longitude)
      }
    })
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