//app.js
App({
  onLaunch: function () {
    var that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录,每次用户登录进来，然后拿到code值去后台去请求，后台去微信API中请求sessionKey，
    // 后台拿到sessionKey之后，再和前端传入的encryptedData，iv一起去去微信API请求unionID；
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        // 获取用户信息
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  console.log(res.encryptedData);
                  console.log(res.iv);
                  console.log(code);
                  wx.request({
                    url: 'http://192.168.1.235:3000/user/get_session_info',
                    data: {
                      code: code,
                      encryptedData: res.encryptedData,
                      iv: res.iv
                    },
                    success: function (res) {
                      // 根据后台返回的信息，跳转不同的页面，1表示该用户是平行店的管理员
                      if (res.data == 1) {
                        console.log("请求成功");
                        that.globalData.has_parallel_shop = true;
                      } else {
                        console.log("请求失败");
                        that.globalData.has_parallel_shop = false;
                      }
                    }
                  })

                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                  }
                }
              })
            }
          }
        })
      }
    })


  },
  globalData: {
    userInfo: null,
    has_parallel_shop: true,
  }
})