import { fromJSToNativePrimitive, toHIColor } from "../helpers/helpers";

export function legendHandler(hiOptions, legendOptions) {
  const legend = new com.highsoft.highcharts.common.hichartsclasses.HILegend();

  legendOptions.layout && legend.setLayout(legendOptions.layout);
  legendOptions.align && legend.setAlign(legendOptions.align);
  legendOptions.verticalAlign && legend.setVerticalAlign(legendOptions.verticalAlign);
  legendOptions.borderWidth >= 0 && legend.setBorderWidth(fromJSToNativePrimitive(legendOptions.borderWidth));
  legendOptions.borderColor && legend.setBorderColor(toHIColor(legendOptions.borderColor));
  legendOptions.backgroundColor && legend.setBackgroundColor(toHIColor(legendOptions.backgroundColor));
  typeof legendOptions.shadow !== 'undefined' && legend.setShadow(fromJSToNativePrimitive(legendOptions.shadow));
  typeof legendOptions.floating !== 'undefined' && legend.setFloating(fromJSToNativePrimitive(legendOptions.floating));
  legendOptions.x >=0 && legend.setX(fromJSToNativePrimitive(legendOptions.x));
  legendOptions.y >=0 && legend.setY(fromJSToNativePrimitive(legendOptions.y));

  hiOptions.setLegend(legend);
  
  return hiOptions;
}
