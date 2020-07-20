import { toHIColor } from "../helpers/helpers";

export function legendHandler(hiOptions, legendOptions) {
  const legend = new HILegend();

  legendOptions.layout && (legend.layout = legendOptions.layout);
  legendOptions.align && (legend.align = legendOptions.align);
  legendOptions.verticalAlign && (legend.verticalAlign = legendOptions.verticalAlign);
  legendOptions.borderWidth >= 0 && (legend.borderWidth = legendOptions.borderWidth);
  legendOptions.borderColor && (legend.borderColor = toHIColor(legendOptions.borderColor));
  legendOptions.backgroundColor && (legend.backgroundColor = toHIColor(legendOptions.backgroundColor));
  typeof legendOptions.shadow !== 'undefined' && (legend.shadow = legendOptions.shadow);
  typeof legendOptions.floating !== 'undefined' && (legend.floating = legendOptions.floating);
  legendOptions.x >=0 && (legend.x = legendOptions.x);
  legendOptions.y >=0 && (legend.y = legendOptions.y);

  hiOptions.legend = legend;
  
  return hiOptions;
}
