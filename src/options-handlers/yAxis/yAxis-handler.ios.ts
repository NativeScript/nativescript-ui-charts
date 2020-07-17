import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';

export function yAxisHandler(hiOptions, yAxisOptions) {
  const yaxis = new HIYAxis();

  yAxisOptions.title && titleHandler(yaxis, yAxisOptions.title)
  yAxisOptions.accessibility && accessibilityHandler(yaxis, yAxisOptions.accessibility);
  yAxisOptions.categories && (yaxis.categories = new NSArray({ array: yAxisOptions.categories } ));

  hiOptions.yAxis = new NSArray({ array: [yaxis] });
  
  return hiOptions;
}
