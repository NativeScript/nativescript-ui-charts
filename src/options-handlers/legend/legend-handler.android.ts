export function legendHandler(hiOptions, legendOptions) {
  const legend = new com.highsoft.highcharts.common.hichartsclasses.HILegend();

  legendOptions.layout && legend.setLayout(legendOptions.layout);
  legendOptions.align && legend.setAlign(legendOptions.align);
  legendOptions.verticalAlign && legend.setVerticalAlign(legendOptions.verticalAlign);

  hiOptions.setLegend(legend);
  
  return hiOptions;
}
