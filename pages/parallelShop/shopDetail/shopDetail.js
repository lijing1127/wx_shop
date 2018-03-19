
Page({
  /** * 页面的初始数据 */
  data: {
    shopData: [
      { img: '../../../images/capital-1.jpg', title: '科技奶茶', busin: '超市', addr: '深圳市南山区TCL国际E城' },
      // { img: '../../images/capital-1.jpg', title: '北京汇雅美苑文化创意发展有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
      // { img: '../../images/capital-1.jpg', title: '北京红日升商贸有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
    ],
    shopProduct: [],
    totalPrice: 0,
    showModal: false,
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
  addClick: function(e){
    const index = e.currentTarget.dataset.index;
    console.log(index);
    let shopProduct = this.data.shopProduct; 
    let num = parseInt(shopProduct[index].num);
    num = num + 1;
    shopProduct[index].num = num;
    this.setData({
      shopProduct: shopProduct
    });
    this.getTotalPrice();
    
  },
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
  },
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
  }
})