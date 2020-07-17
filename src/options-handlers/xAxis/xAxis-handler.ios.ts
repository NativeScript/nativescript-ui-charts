import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';

export function xAxisHandler(hiOptions, xAxisOptions) {
  const xaxis = new HIXAxis();

  xAxisOptions.title && titleHandler(xaxis, xAxisOptions.title)
  xAxisOptions.accessibility && accessibilityHandler(xaxis, xAxisOptions.accessibility);
  xAxisOptions.categories && (xaxis.categories = new NSArray({ array: xAxisOptions.categories } ));

  hiOptions.xAxis = new NSArray({ array: [xaxis] });
  
  return hiOptions;
}
