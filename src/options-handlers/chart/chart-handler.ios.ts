export function chartHandler(hiOptions, chartOptions) {
  const chart = new HIChart();
  
  chartOptions.type && (chart.type = chartOptions.type);

  hiOptions.chart = chart;
  
  return hiOptions;
}
