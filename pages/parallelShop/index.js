Page({
  data: {
    imgUrls: [
      '../../images/199.jpg',
      '../../images/makers.jpg',
      '../../images/pingxingdian.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000, 
    circular: true,
    iconGroup: [
      { img: '../../images/allocated.png', text:'待领配', url: "./waitReceive/waitReceive"}, 
      { img: '../../images/assign.png', text: '已领配'}, 
      { img: '../../images/evaluated.png', text: '待评价'}, 
    ],
    parallel: [
      { img: '../../images/capital-1.jpg', title: '科技奶茶',busin:'超市',addr:'深圳市南山区TCL国际E城'},
      { img: '../../images/capital-1.jpg', title: '北京汇雅美苑文化创意发展有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
      { img: '../../images/capital-1.jpg', title: '北京红日升商贸有限公司', busin: '超市', addr: '深圳市南山区TCL国际E城' },
    ],
  }, 
})