<template>
  <div class="chart-wrapper">
    <chart :options="option"></chart>
  </div>
</template>

<script>
  import data from '../data/wordcloud.json'
  let t=[]
  for(let i in data){
      t.push({
        name:i,
        value:data[i]
      })
  }
  export default {
    name: 'wordCloud',
    data () {
      let option = {
        title: {
          text: 'wordCloud',
//          link: 'http://www.google.com/trends/hottrends'
        },
        tooltip: {
          show: true
        },
        textStyle: {
          normal: {
            fontFamily: '微软雅黑',
            fontWeight: 'bold',
            color: function () {
              return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')';
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        series: [{
          name: 'Google Trends',
          type: 'wordCloud',
          size: ['80%', '80%'],
          textRotation : [0, 45, 90, -45],
          textPadding: 0,
          autoSize: {
            enable: true,
            minSize: 14
          },
          data: t
        }]
      }
      return {
        option
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .chart-wrapper{
    display: flex;
    justify-content: center

  }
  .echarts {
    width: 800px;
    height: 600px;
  }
</style>
