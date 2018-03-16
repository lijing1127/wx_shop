// pages/parallelShop/shopDetail/shopDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopData: [
      { img: '../../../images/capital-1.jpg', title: '科技奶茶', busin: '超市', addr: '深圳市南山区TCL国际E城' },
      // { img: '../../images/capital-1.jpg', title: '北京汇雅美苑文化创意发展有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
      // { img: '../../images/capital-1.jpg', title: '北京红日升商贸有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
    ],
    shopProduct: [
      { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0' },
      { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0'},
      { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0'},
      { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0' },
      { img: '../../../images/L-alabo.png', name: '阿拉伯糖', price: '980.0' },
    ],
    allPrice:0,
    arr:[]
  },
  addClick:{
    
  },
  cutClick:{

  }
})