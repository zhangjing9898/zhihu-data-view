<template>
  <div class="chart-wrapper">
  <chart :options="option"></chart>
  </div>
</template>

<script>
  import answerQuestionsData from '../data/zhihu-data.answerQuestions.json'
export default {
  name: 'HelloWorld',
  data () {
    let option = {
      title: {
        text: '知乎问题数据分析'
      },
      tooltip: {
        trigger: 'axis',
        showDelay: 0,
        axisPointer: {
          show: true,
          type: 'cross',
          lineStyle: {
            type: 'dashed',
            width: 1
          }
        },
        zlevel: 1
      },
      legend: {
        data: [ '回答数-问题数']
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataZoom: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      xAxis: [
        {
          type: 'value',
          scale: true,
          min: 0,
          max: 6
        }
      ],
      yAxis: [
        {
          type: 'value',
          scale: true
        }
      ],
      series: [
        {
          name: '回答数-问题数',
          type: 'scatter',
          large: true,
          symbolSize: 3,
          data: answerQuestionsData.map(i => [Math.log10(i._id), Math.log10(i.count)])
        }
      ]
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
