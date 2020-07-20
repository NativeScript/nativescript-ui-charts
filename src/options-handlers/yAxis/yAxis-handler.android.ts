import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';
import { convertJSArrayToNative, fromJSToNativePrimitive, toHIColor } from '../helpers/helpers';
import { dateTimeLabelFormatsHandler } from '../dateTimeLabelFormats/dateTimeLabelFormats-handler';

export function yAxisHandler(hiOptions, yAxisOptions) {
  let yaxis = new com.highsoft.highcharts.common.hichartsclasses.HIYAxis();

  yAxisOptions.title && titleHandler(yaxis, yAxisOptions.title);
  yAxisOptions.type && yaxis.setType(yAxisOptions.type);
  yAxisOptions.dateTimeLabelFormats && dateTimeLabelFormatsHandler(yaxis, yAxisOptions.dateTimeLabelFormats);
  yAxisOptions.accessibility && accessibilityHandler(yaxis, yAxisOptions.accessibility);
  yAxisOptions.categories && yaxis.setCategories(convertJSArrayToNative(yAxisOptions.categories));
  yAxisOptions.min && yaxis.setMin(fromJSToNativePrimitive(yAxisOptions.min));
  yAxisOptions.max && yaxis.setMax(fromJSToNativePrimitive(yAxisOptions.max));
  yAxisOptions.tickColor && yaxis.setTickColor(toHIColor(yAxisOptions.tickColor));
  yAxisOptions.tickAmount >= 0 && yaxis.setTickAmount(fromJSToNativePrimitive(yAxisOptions.tickAmount));
  yAxisOptions.tickInterval >= 0 && yaxis.setTickInterval(yAxisOptions.tickInterval);
  yAxisOptions.tickLength >= 0 && yaxis.setTickLength(fromJSToNativePrimitive(yAxisOptions.tickLength));
  yAxisOptions.tickPixelInterval >= 0 && yaxis.setTickPixelInterval(fromJSToNativePrimitive(yAxisOptions.tickPixelInterval));
  yAxisOptions.tickPosition && yaxis.setTickPosition(fromJSToNativePrimitive(yAxisOptions.tickPosition));
  yAxisOptions.tickPositions && yaxis.setTickPositions(convertJSArrayToNative(yAxisOptions.tickPositions));
  yAxisOptions.tickWidth >= 0 && yaxis.setTickWidth(fromJSToNativePrimitive(yAxisOptions.tickWidth));
  yAxisOptions.tickmarkPlacement && yaxis.setTickmarkPlacement(yAxisOptions.tickmarkPlacement);
  yAxisOptions.lineColor && yaxis.setLineColor(toHIColor(yAxisOptions.lineColor));
  yAxisOptions.lineWidth >= 0 && yaxis.setLineWidth(fromJSToNativePrimitive(yAxisOptions.lineWidth));
  yAxisOptions.gridLineColor && yaxis.setGridLineColor(toHIColor(yAxisOptions.gridLineColor));
  yAxisOptions.gridLineWidth >= 0 && yaxis.setGridLineWidth(fromJSToNativePrimitive(yAxisOptions.gridLineWidth));

  // TODO: implement HIFunction
  // yAxisOptions.tickPositioner && yaxis.setTickPositioner(yAxisOptions.tickPositioner);

  hiOptions.setYAxis(convertJSArrayToNative([yaxis]));

  return hiOptions;
}