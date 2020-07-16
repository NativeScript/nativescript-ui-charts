export function chartHandler(hiOptions, chartOptions) {
  const chart = new com.highsoft.highcharts.common.hichartsclasses.HIChart();
  
  chartOptions.type && chart.setType(chartOptions.type);

  hiOptions.setChart(chart);
  
  return hiOptions;
}
