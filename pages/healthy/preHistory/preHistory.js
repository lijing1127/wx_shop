// pages/healthy/preHistory/preHistory.js
var wxCharts = require('../../../style/wxcharts-min.js');
Page({
  data: {
    measureData: [
      { systolic: 110, diastolic: 70, date: "2018-05-14" },
      { systolic: 110, diastolic: 70, date: "2018-05-14" },
      { systolic: 110, diastolic: 70, date: "2018-05-14" },
      { systolic: 110, diastolic: 70, date: "2018-05-14" },
      { systolic: 110, diastolic: 70, date: "2018-05-14" },
      { systolic: 110, diastolic: 70, date: "2018-05-14" },
    ]
  },

  onLoad: function (options) {
    new wxCharts({
      canvasId: 'lineCanvas',
      animation: true,
      type: 'line',
      categories: ['', '', '', ''],
      series: [{
        name: '收缩压（90~139）',
        data: [90, 115, 108, 128],
        format: function (val) {
          return val;
        }
      }, {
        name: '舒张压（60~89）',
        data: [70, 80, 80, 85],
        format: function (val) {
          return val.toFixed(1);
        }
      }],
      yAxis: {
        format: function (val) {
          return val;
        },
        min: 40
      },
      width: 320,
      height: 200
    });
  },
})