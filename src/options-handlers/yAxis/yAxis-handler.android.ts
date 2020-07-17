import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';
import { convertJSArrayToNative } from '../helpers/helpers.android';

export function yAxisHandler(hiOptions, yAxisOptions) {
  let yaxis = new com.highsoft.highcharts.common.hichartsclasses.HIYAxis();

  yAxisOptions.title && titleHandler(yaxis, yAxisOptions.title)
  yAxisOptions.accessibility && accessibilityHandler(yaxis, yAxisOptions.accessibility);
  yAxisOptions.categories && yaxis.setCategories(convertJSArrayToNative(yAxisOptions.categories));

  hiOptions.setYAxis(convertJSArrayToNative([yaxis]));

  return hiOptions;
}