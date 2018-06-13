// pages/register/register.js
var app = getApp(); 
Page({
  data: {
    mobile:'',
    disable:true,
  },
  onLoad: function (options) {
    
  },
  blur_mobile: function (e) {
    var val= e.detail.value;
    var that = this;
    that.setData({
      mobile: val
    })
  },

  getVcode:function(){
    var mobile = this.data.mobile;
    if (mobile.length == 0) {
      wx.showModal({
        title: '',
        content: '请输入手机号！',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
      return false;
    }
    if (mobile.length != 11) {
      wx.showModal({
        title: '',
        content: '手机号长度有误！',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      wx.showModal({
        title: '',
        content: '手机号有误！',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
      return false;
    } 
    app.clientFetch(app.globalData.hostUrl + '/users/verify_code?telphone=' + mobile,
      'POST',
      function (res) {
        if (res.data.status == 400) {
          wx.showModal({
            title: '',
            content: '请输入真实有效号码',
            showCancel: false, //不显示取消按钮
            confirmText: '确定'
          })
        }else{
          console.log('success')
        }
      },
      function (res) {
        console.log(res.data, 'fail')
      }
    )
    return true;
  },


  blur_code:function(){
    var that = this;
    that.setData({
      disable: false
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var phone = e.detail.value.phone;
    var vCode = e.detail.value.vCode;
    if (phone == "" || vCode == "" || phone.length != 11 || vCode.length != 4) {
      console.log('')
    } else {
      app.clientFetch(app.globalData.hostUrl+'/users/verify?telphone='+phone+'&verify_code='+vCode,
        'POST',
        function (res) {
          var token = res.data.authentication_token;
          app.globalData.token = token;
          wx.setStorage({
            key: "token",
            data: app.globalData.token
          })
          if (app.globalData.token) {
            wx.switchTab({
              url: '../parallelShop/index/index',
            })
          }
        },
        function (res) {
          console.log(res)
        }
      )
    }
  }
})
