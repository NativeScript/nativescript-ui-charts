import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';
import { convertJSArrayToNative, fromJSToNativePrimitive, toHIColor } from '../helpers/helpers';
import { dateTimeLabelFormatsHandler } from '../dateTimeLabelFormats/dateTimeLabelFormats-handler';

export function xAxisHandler(hiOptions, xAxisOptions) {
  const xaxis = new com.highsoft.highcharts.common.hichartsclasses.HIXAxis();

  xAxisOptions.title && titleHandler(xaxis, xAxisOptions.title);
  xAxisOptions.type && xaxis.setType(xAxisOptions.type);
  xAxisOptions.dateTimeLabelFormats && dateTimeLabelFormatsHandler(xaxis, xAxisOptions.dateTimeLabelFormats);
  xAxisOptions.accessibility && accessibilityHandler(xaxis, xAxisOptions.accessibility);
  xAxisOptions.categories && xaxis.setCategories(convertJSArrayToNative(xAxisOptions.categories));
  xAxisOptions.min >= 0 && xaxis.setMin(fromJSToNativePrimitive(xAxisOptions.min));
  xAxisOptions.max >= 0 && xaxis.setMax(fromJSToNativePrimitive(xAxisOptions.max));
  xAxisOptions.tickColor && xaxis.setTickColor(toHIColor(xAxisOptions.tickColor));
  xAxisOptions.tickAmount >= 0 && xaxis.setTickAmount(fromJSToNativePrimitive(xAxisOptions.tickAmount));
  xAxisOptions.tickInterval >= 0 && xaxis.setTickInterval(xAxisOptions.tickInterval);
  xAxisOptions.tickLength >= 0 && xaxis.setTickLength(fromJSToNativePrimitive(xAxisOptions.tickLength));
  xAxisOptions.tickPixelInterval >= 0 && xaxis.setTickPixelInterval(fromJSToNativePrimitive(xAxisOptions.tickPixelInterval));
  xAxisOptions.tickPosition && xaxis.setTickPosition(fromJSToNativePrimitive(xAxisOptions.tickPosition));
  xAxisOptions.tickPositions && xaxis.setTickPositions(convertJSArrayToNative(xAxisOptions.tickPositions));
  xAxisOptions.tickWidth >= 0 && xaxis.setTickWidth(fromJSToNativePrimitive(xAxisOptions.tickWidth));
  xAxisOptions.tickmarkPlacement && xaxis.setTickmarkPlacement(xAxisOptions.tickmarkPlacement);
  xAxisOptions.lineColor && xaxis.setLineColor(toHIColor(xAxisOptions.lineColor));
  xAxisOptions.lineWidth >= 0 && xaxis.setLineWidth(fromJSToNativePrimitive(xAxisOptions.lineWidth));
  xAxisOptions.gridLineColor && xaxis.setGridLineColor(toHIColor(xAxisOptions.gridLineColor));
  xAxisOptions.gridLineWidth >= 0 && xaxis.setGridLineWidth(fromJSToNativePrimitive(xAxisOptions.gridLineWidth));

  // TODO: implement HIFunction
  // xAxisOptions.tickPositioner && xaxis.setTickPositioner(xAxisOptions.tickPositioner);

  hiOptions.setXAxis(convertJSArrayToNative([xaxis]));

  return hiOptions;
}