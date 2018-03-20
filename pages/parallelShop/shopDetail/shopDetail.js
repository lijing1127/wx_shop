
Page({
  /** * 页面的初始数据 */
  data: {
    shopData: [
      { img: '../../../images/capital-1.jpg', title: '科技奶茶', busin: '超市', addr: '深圳市南山区TCL国际E城' },
      // { img: '../../images/capital-1.jpg', title: '北京汇雅美苑文化创意发展有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
      // { img: '../../images/capital-1.jpg', title: '北京红日升商贸有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
    ],
    shopProduct: [],//产品列表
    showModal: false,//是否展示模态框
    quota:1000,//领配额
    totalPrice: 0,//选择领配产品的总额
    backgroundColor: '#d9d9d9',
    showText:"请选择",
  },
  onShow(){
    this.setData({
      shopProduct: [
        { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0', num: '0' },
        { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0', num: '0' },
        { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0', num: '0' },
      ]
    });
  },
  //计算总额
  getTotalPrice(){
    let shopProduct = this.data.shopProduct;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < shopProduct.length; i++) {         // 循环列表得到每个数据// 判断选中才会计算价格
      total += shopProduct[i].num * shopProduct[i].price;     // 所有价格加起来  
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

  //比较领配额和选中产品的价格
  comparAmount(){
    let quota = this.data.quota;
    let totalPrice = Number(this.data.totalPrice);
    this.getTotalPrice();
    if (quota < totalPrice) {
      this.setData({
        backgroundColor:'#d9d9d9',
        showText:"超出额度"
      })
    } else if (totalPrice == 0){
      this.setData({
        backgroundColor: '#d9d9d9',
        showText: "请选择"
      })
    }else{
      this.setData({
        backgroundColor: '#ad0e11',
        showText: "平行领配"
      })
    }
  },
})