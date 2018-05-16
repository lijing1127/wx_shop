
Page({
  /** * 页面的初始数据 */
  data: {
    shopData: {
      img: "../../../images/capital-1.jpg", name: '深圳市龙岗区天水益茶烟酒商行', address: "深圳市龙岗区街道南联社区二村北坡二巷一号101"
    },//店铺信息
    showModal: false,//是否展示模态框
    quota: 1000,//领配额
    totalPrice: 0,//选择领配产品的总额
    backgroundColor: '#d9d9d9',
    showText: "请选择",
    go: false,
    cateItems: [
      {
        cate_id: 1,
        cate_name: "特医食品",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: 'L-阿拉伯糖（体验装）',
            price:'960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 2,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 3,
            name: '萨奇母婴饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 4,
            name: '萨奇饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "功能农副",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: 'L-阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 2,
            name: '萨奇母婴',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 3,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 4,
            name: '萨奇母婴饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "优质保健",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: 'L-阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 2,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 3,
            name: '萨奇母婴饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          },
          {
            child_id: 4,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "庆通宝",
        ishaveChild: true,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0  
  },

  //计算总额
  getTotalPrice() {
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
  addClick: function (e) {
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
  cutClick: function (e) {
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

  //比较领配额和选中产品的价格的大小出现不同的状态
  comparAmount() {
    let quota = this.data.quota;
    let totalPrice = Number(this.data.totalPrice);
    this.getTotalPrice();
    if (quota < totalPrice) {
      this.setData({
        backgroundColor: '#d9d9d9',
        showText: "超出额度",
      })
    } else if (totalPrice == 0) {
      this.setData({
        backgroundColor: '#d9d9d9',
        showText: "请选择"
      })
    } else {
      this.setData({
        backgroundColor: '#ad0e11',
        showText: "平行领配",
        go: true
      })

    }
  },

  onLoad: function (options) {  
  },

  // 事件处理函数
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
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
