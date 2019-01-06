

// 线性图
$(function(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".echarts_left"));

  // 指定图表的配置项和数据
  var option = {
    // 大标题
    title: {
      text: '2019年注册人数'
    },
    tooltip: {},
    legend: {
      data:['人数','销量']
    },
    // X轴 
    xAxis: {
      data: ["一月","二月","三月","四月","五月","六月"]
    },
    // Y轴
    yAxis: {},
    // 
    series: [{
      name: '人数',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    },
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
$(function(){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".echarts_right"));

  // 指定图表的配置项和数据
  var option = {
    title : {
        text: '热门品牌销售',
        subtext: '2019年1月',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['特步','阿迪','老奶奶','老北京','361']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'特步'},
                {value:310, name:'阿迪'},
                {value:234, name:'老奶奶'},
                {value:135, name:'老北京'},
                {value:1548, name:'361'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})

// 饼状图


