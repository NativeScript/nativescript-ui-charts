export function legendHandler(hiOptions, legendOptions) {
  const legend = new HILegend();

  legendOptions.layout && (legend.layout = legendOptions.layout);
  legendOptions.align && (legend.align = legendOptions.align);
  legendOptions.verticalAlign && (legend.verticalAlign = legendOptions.verticalAlign);

  hiOptions.legend = legend;
  
  return hiOptions;
}
