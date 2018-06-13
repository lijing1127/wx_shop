var app = getApp();
var classifyList = function (that) {
  app.clientFetch(app.globalData.hostUrl + '/contents_categories',
    'GET',
    function (res) {
      var res_obj;
      var datas = res.data.data;
      for (var i = 0; i < datas.length; i++) {
        var second = datas[i].second_category.data;
        for (var j = 0; j < second.length; j++) {
          var product = second[j].product.data;  
          for (var k = 0; k < product.length; k++) {
            var currArr = [];
            res_obj = Object.assign(product[k], { Count: 0 });
            currArr.push(res_obj)
          }
        } 
      }
      that.setData({
        classify: datas,
      });
    },
    function (res) {
      console.log(res.data, 'fail')
    }
  )
}
Page({
  /** * 页面的初始数据 */
  data: {
    shopData: {
      img: "../../../images/capital-1.jpg", name: '深圳市龙岗区天水益茶烟酒商行', address: "深圳市龙岗区街道南联社区二村北坡二巷一号101"
    },//店铺信息
    quota: 1000,//领配额
    // backgroundColor: '#d9d9d9',
    // showText: "请选择",
    go: false,
    classify: [],
    toView: '0',
    scrollTop: 100,
    foodCounts: 0,
    totalPrice: 0,// 总价格  
    totalMatch: 0,//总配领值
    totalCount: 0, // 总商品数  
    carArray: [],
    minPrice: 15,//起送價格  
    payDesc: '请选择',
    fold: true,
    selectFoods: [{ price: 20, count: 2 }],
    cartShow: 'none',
    status: 0,
    url: "",
    showPopup: false,
    Count: 0,
  },
  scanCode: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  onLoad: function (options) {
    var that = this;
    classifyList(that)
    this.setData({
      payDesc: this.receiveDetail()
    });
  },
  selectMenu: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    this.setData({
      toView: 'order' + index.toString()
    })
    // console.log(this.data.toView);
  },
  //移除商品  
  decreaseCart: function (e) {
    var index = e.currentTarget.dataset.itemIndex;
    var firstIndex = e.currentTarget.dataset.firstindex;
    var secondIndex = e.currentTarget.dataset.secondindex;
    this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].Count--;
    var mark = 'a' + index + 'b' + firstIndex + 'c' + secondIndex;
    var price = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].now_product_price;
    var match = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].match;
    var num = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].Count;
    var name = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].name;
    var obj = { price: price, match: match, num: num, mark: mark, name: name, index: index, firstIndex: firstIndex, secondIndex: secondIndex };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark);
    carArray1.push(obj);
    for (var m = 0; m < carArray1.length; m++) {
      if (carArray1[m].num == 0) {
        carArray1.splice(m, 1);  // splice(a,b); a需要删除的位置,b删除几个  
      }
    }
    this.setData({
      carArray: carArray1,
      classify: this.data.classify
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc(),
    })
    //关闭弹起  
    var count1 = 0
    for (let i = 0; i < carArray1.length; i++) {
      if (carArray1[i].num == 0) {
        count1++;
      }
    }
    if (count1 == carArray1.length) {
      if (num == 0) {
        this.setData({
          cartShow: 'none'
        })
      }
    }
  },
  decreaseShopCart: function (e) {
    this.decreaseCart(e);
  },
  //添加到购物车  
  addCart(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var firstIndex = e.currentTarget.dataset.firstindex;
    var secondIndex = e.currentTarget.dataset.secondindex;
    this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].Count++;
    var mark = 'a' + index + 'b' + firstIndex + 'c' + secondIndex;
    var price = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].now_product_price;
    var match = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].match;
    var num = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].Count;
    var name = this.data.classify[firstIndex].second_category.data[secondIndex].product.data[index].name;
    var obj = { price: price, match: match, num: num, mark: mark, name: name, index: index, firstIndex: firstIndex, secondIndex: secondIndex };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    carArray1.push(obj);
    this.setData({
      carArray: carArray1,
      classify: this.data.classify
    })
    this.calTotalPrice();
    this.setData({
      payDesc: this.payDesc()
    })
  },
  addShopCart: function (e) {
    this.addCart(e);
  },
  //计算总价  
  calTotalPrice: function () {
    var carArray = this.data.carArray;
    var totalPrice = 0;
    var totalMatch = 0;
    var totalCount = 0;
    for (var i = 0; i < carArray.length; i++) {
      totalPrice += carArray[i].price * carArray[i].num;
      totalMatch += carArray[i].match * carArray[i].num;
      totalCount += carArray[i].num
    }
    this.setData({
      totalPrice: totalPrice,
      totalMatch: totalMatch,
      totalCount: totalCount,
      payDesc: this.payDesc()
    });
  },

  //购物车  
  toggleList: function () {
    if (!this.data.totalCount) {
      return;
    }
    this.setData({
      fold: !this.data.fold,
    })
    var fold = this.data.fold;
    this.cartShow(fold)
  },
  cartShow: function (fold) {
    if (fold == false) {
      this.setData({
        cartShow: 'block',
      })
    } else {
      this.setData({
        cartShow: 'none',
      })
    }
  },

  tabChange: function (e) {
    var showtype = e.target.dataset.type;
    this.setData({
      status: showtype,
    });
  },

  //平行领配跳转页面
  receiveDetail: function () {
    if (this.data.totalPrice !== 0 || this.data.totalMatch !== 0) {
      this.setData({
        payDesc: "去结算",
      })
      wx.navigateTo({
        url: '../receiveDetail/receiveDetail',
      })
    } else {
      this.setData({
        payDesc: "请选择",
      })
    }
  },
  //差几元起送
  payDesc() {
    if (this.data.totalPrice === 0 && this.data.totalMatch === 0) {
      // return `￥${this.data.minPrice}元起送`;
      return '请选择';
    } else if (this.data.totalPrice < this.data.minPrice) {
      let diff = this.data.minPrice - this.data.totalPrice;
      return '还差' + diff + '元起送';
    } else {
      return '去结算';
    }
  }
})
