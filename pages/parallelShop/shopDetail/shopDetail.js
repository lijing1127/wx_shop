
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
    goods: [
      {
        "name": "特医食品",
        "type": -1,
        "foods": [
          {
            "name": "阿拉伯糖（体验装）",
            "price": 96.0,
            "match": 96.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "阿拉伯糖",
            "price": 960.0,
            "match": 960.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "萨奇饮用水",
            "price": 240.0,
            "match": 240.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "萨奇母婴饮用水",
            "price": 450.0,
            "match": 450.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
        ]
      },
      {
        "name": "功能农副",
        "type": 2,
        "foods": [
          {
            "name": "萨奇饮用水",
            "price": 450.0,
            "match": 450.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "萨奇母婴饮用水",
            "price": 450.0,
            "match": 450.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "阿拉伯糖（体验装）",
            "price": 96.0,
            "match": 96.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "阿拉伯",
            "price": 960.0,
            "match": 960.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
        ]
      },
      {
        "name": "优质保健",
        "type": 3,
        "foods": [
          {
            "name": "萨奇饮用水",
            "price": 450.0,
            "match": 450.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "萨奇母婴饮用水",
            "price": 450.0,
            "match": 450.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "阿拉伯糖（体验装）",
            "price": 96.0,
            "match": 96.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
          {
            "name": "阿拉伯",
            "price": 960.0,
            "match": 960.0,
            "Count": 0,
            "image": "../../../images/L-alabo.png",
          },
        ]
      },
    ],
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
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].Count--
    var name = this.data.goods[parentIndex].foods[index].name;
    var num = this.data.goods[parentIndex].foods[index].Count;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.goods[parentIndex].foods[index].price;
    var match = this.data.goods[parentIndex].foods[index].match;
    var obj = { price: price, match: match, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark);
    carArray1.push(obj);
    // console.log(carArray1);
    for (var m = 0; m < carArray1.length; m++) {
      if (carArray1[m].num == 0) {
        carArray1.splice(m, 1);  // splice(a,b); a需要删除的位置,b删除几个  
      }
    }
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
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
    //console.log(count1)  
    if (count1 == carArray1.length) {
      if (num == 0) {
        this.setData({
          cartShow: 'none'
        })
      }
    }
  },
  decreaseShopCart: function (e) {
    console.log('1');
    this.decreaseCart(e);
  },
  //添加到购物车  
  addCart(e) {
    var index = e.currentTarget.dataset.itemIndex;
    var parentIndex = e.currentTarget.dataset.parentindex;
    this.data.goods[parentIndex].foods[index].Count++;
    var mark = 'a' + index + 'b' + parentIndex
    var price = this.data.goods[parentIndex].foods[index].price;
    var match = this.data.goods[parentIndex].foods[index].match;
    var num = this.data.goods[parentIndex].foods[index].Count;
    var name = this.data.goods[parentIndex].foods[index].name;
    var obj = { price: price, match: match, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
    var carArray1 = this.data.carArray.filter(item => item.mark != mark)
    carArray1.push(obj);
    this.setData({
      carArray: carArray1,
      goods: this.data.goods
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
  },

  //购物车  
  toggleList: function () {
    if (!this.data.totalCount) {
      return;
    }
    this.setData({
      fold: !this.data.fold,
    })
    var fold = this.data.fold
    //console.log(this.data.fold);  
    this.cartShow(fold)
  },
  cartShow: function (fold) {
    // console.log(fold);
    if (fold == false) {
      this.setData({
        cartShow: 'block',
      })
    } else {
      this.setData({
        cartShow: 'none',
      })
    }
    // console.log(this.data.cartShow);
  },
  /**    
  * 预览图片   
  */
  togglePopup: function (event) {
    var image_path = event.currentTarget.dataset.id;
    this.setData({
      url: image_path,
      showPopup: !this.data.showPopup
    });
  },

  tabChange: function (e) {
    var showtype = e.target.dataset.type;
    this.setData({
      status: showtype,
    });
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    this.setData({
      payDesc: this.payDesc()
    });
  },
  //平行领配跳转页面
  receiveDetail: function () {
    if (this.go) {
      wx.navigateTo({
        url: '../receiveDetail/receiveDetail',
      })
    }
  }
})
