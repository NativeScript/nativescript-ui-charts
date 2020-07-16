import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';
import { convertJSArrayToNative } from '../helpers/helpers.android';

export function xAxisHandler(hiOptions, xAxisOptions) {
  const xaxis = new com.highsoft.highcharts.common.hichartsclasses.HIXAxis();

  xAxisOptions.title && titleHandler(xaxis, xAxisOptions.title)
  xAxisOptions.accessibility && accessibilityHandler(xaxis, xAxisOptions.accessibility);
  xAxisOptions.categories && xaxis.setCategories(convertJSArrayToNative(xAxisOptions.categories));

  hiOptions.setXAxis(convertJSArrayToNative([xaxis]));

  return hiOptions;
}