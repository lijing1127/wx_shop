
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
            image: "../../../images/L-alabo.png",
            num:0
          },
          {
            child_id: 2,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 3,
            name: '萨奇母婴饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 4,
            name: '萨奇饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
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
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 2,
            name: '萨奇母婴',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 3,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 4,
            name: '萨奇母婴饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
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
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 2,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 3,
            name: '萨奇母婴饮用水',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
          },
          {
            child_id: 4,
            name: '阿拉伯糖（体验装）',
            price: '960.0',
            image: "../../../images/L-alabo.png",
            num: 0
          }
        ]
      }
    ],
    curNav: 1,
    curIndex: 0,
  },
  // addClick: function (e) {
  //   console.log(e)
  //   const index = e.currentTarget.dataset.index;
  //   const id = e.currentTarget.dataset.id;
  //   console.log(id)
  //   let goods = this.data.goods;
  //   console.log(goods)
  //   // var num = this.data.cart.list[id] || 0;
  //   // this.data.cart.list[id] = num + 1;
  //   // this.countCart();
  // },

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
