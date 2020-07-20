import { toLinkedList, fromJSToNativePrimitive, toHIColor } from "../helpers/helpers";
import { styleHandler } from "../style/style-handler";

export function chartHandler(hiOptions, chartOptions) {
  const chart = new com.highsoft.highcharts.common.hichartsclasses.HIChart();
  
  chartOptions.type && chart.setType(chartOptions.type);

  if (chartOptions.backgroundColor) {
    if (chartOptions.backgroundColor.linearGradient && chartOptions.backgroundColor.stops) {
      const grad = chartOptions.backgroundColor.linearGradient;
      const gradient = new com.highsoft.highcharts.common.HIGradient(grad[0], grad[1], grad[2], grad[3]);
      const stops = chartOptions.backgroundColor.stops.map((stop, i) => new com.highsoft.highcharts.common.HIStop(i, toHIColor(stop)))
      const stopslist = toLinkedList(stops);
      chart.setBackgroundColor(com.highsoft.highcharts.common.HIColor.initWithLinearGradient(gradient, stopslist));
    } else {
      chart.setBackgroundColor(toHIColor(chartOptions.backgroundColor));
    }
  }

  chartOptions.borderRadius >= 0 && chart.setBorderRadius(fromJSToNativePrimitive(chartOptions.borderRadius));
  chartOptions.borderWidth >= 0 && chart.setBorderWidth(fromJSToNativePrimitive(chartOptions.borderWidth));
  if (chartOptions.borderColor) {
    chart.setBorderColor(toHIColor(chartOptions.borderColor));
  }
  chartOptions.style && styleHandler(chart, chartOptions.style);

  hiOptions.setChart(chart);
  
  return hiOptions;
}
