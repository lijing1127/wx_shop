
Page({
  /** * 页面的初始数据 */
  data: {
    shopData: [],//店铺信息
    shopProduct: [],//产品列表
    showModal: false,//是否展示模态框
    quota:1000,//领配额
    totalPrice: 0,//选择领配产品的总额
    backgroundColor: '#d9d9d9',
    showText:"请选择",
    go:false
  },

  //计算总额
  getTotalPrice(){
    let shopProduct = this.data.shopProduct;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < shopProduct.length; i++) {         // 循环列表得到每个数据// 判断选中才会计算价格
      total += shopProduct[i].num * shopProduct[i].now_product_price;     // 所有价格加起来  
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      shopProduct: shopProduct,
      totalPrice: total.toFixed(2)
    });
  },
  //增加数量
  addClick: function(e){
    const index = e.currentTarget.dataset.index;
    let shopProduct = this.data.shopProduct; 
    let num = parseInt(shopProduct[index].num);
    num = num + 1;
    shopProduct[index].num = num;  
    this.setData({
      shopProduct: shopProduct,
    });
    this.getTotalPrice();
    this.comparAmount();
  },
  //减少数量
  cutClick: function(e){
    const index = e.currentTarget.dataset.index;
    let shopProduct = this.data.shopProduct;
    let num = parseInt(shopProduct[index].num);
    if (num < 1) {
      return false;
    }
    num = num - 1;
    shopProduct[index].num = num;
    this.setData({
      shopProduct: shopProduct
    });
    this.getTotalPrice();
    this.comparAmount();
  },

  //模态框点击展示功能
  preventTouchMove: function () {
  },

  showDetail(){
    this.setData({
      showModal:true
    });
  },

  hideDetail(){
    this.setData({
      showModal: false
    });
  },

  //比较领配额和选中产品的价格的大小出现不同的状态
  comparAmount(){
    let quota = this.data.quota;
    let totalPrice = Number(this.data.totalPrice);
    this.getTotalPrice();
    if (quota < totalPrice) {
      this.setData({
        backgroundColor:'#d9d9d9',
        showText:"超出额度",
      })
    } else if (totalPrice == 0){
      this.setData({
        backgroundColor: '#d9d9d9',
        showText: "请选择"
      })
    }else{
      this.setData({
        backgroundColor: '#ad0e11',
        showText: "平行领配",
        go:true
      })
      
    }
  },

  onLoad:function(options){
    var shopId = options.id;
    console.log(shopId)
    var that = this;
    wx.request({
      url: 'http://192.168.1.235:3000/parallel_shop/shopdata_products?id='+shopId,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var arr = [];
        var res_obj;
        var datas = res.data.product_info;
        for (var i = 0; i < datas.length; i++) {
          res_obj = Object.assign({}, res.data.product_info[i], {num: 0});
          arr.push(res_obj);
        }
        that.setData({ shopData: res.data, shopProduct: arr });            
      }
    })     
  },

  //平行领配跳转页面
  receiveDetail: function() {
    if (this.go){
      wx.navigateTo({
        url: '../receiveDetail/receiveDetail',
      })
    }
  }
})
