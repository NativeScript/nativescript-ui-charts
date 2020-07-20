import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';
import { dateTimeLabelFormatsHandler } from '../dateTimeLabelFormats/dateTimeLabelFormats-handler';
import { toHIColor } from '../helpers/helpers';

export function yAxisHandler(hiOptions, yAxisOptions) {
  const yaxis = new HIYAxis();

  yAxisOptions.title && titleHandler(yaxis, yAxisOptions.title);
  yAxisOptions.type && (yaxis.type = yAxisOptions.type);
  yAxisOptions.dateTimeLabelFormats && dateTimeLabelFormatsHandler(yaxis, yAxisOptions.dateTimeLabelFormats);
  yAxisOptions.accessibility && accessibilityHandler(yaxis, yAxisOptions.accessibility);
  yAxisOptions.categories && (yaxis.categories = new NSArray({ array: yAxisOptions.categories } ));
  yAxisOptions.min && (yaxis.min = yAxisOptions.min);
  yAxisOptions.max && (yaxis.max = yAxisOptions.max);
  yAxisOptions.tickColor && (yaxis.tickColor = toHIColor(yAxisOptions.tickColor));
  yAxisOptions.tickAmount >= 0 && (yaxis.tickAmount = yAxisOptions.tickAmount);
  yAxisOptions.tickInterval >= 0 && (yaxis.tickInterval = yAxisOptions.tickInterval);
  yAxisOptions.tickLength >= 0 && (yaxis.tickLength = yAxisOptions.tickLength);
  yAxisOptions.tickPixelInterval >= 0 && (yaxis.tickPixelInterval = yAxisOptions.tickPixelInterval);
  yAxisOptions.tickPosition && (yaxis.tickPosition = yAxisOptions.tickPosition);
  yAxisOptions.tickPositions && (yaxis.tickPositions = new NSArray({ array: yAxisOptions.tickPositions }));
  yAxisOptions.tickWidth >= 0 && (yaxis.tickWidth = yAxisOptions.tickWidth);
  yAxisOptions.tickmarkPlacement && (yaxis.tickmarkPlacement = yAxisOptions.tickmarkPlacement);
  yAxisOptions.lineColor && (yaxis.lineColor = toHIColor(yAxisOptions.lineColor));
  yAxisOptions.lineWidth >= 0 && (yaxis.lineWidth = yAxisOptions.lineWidth);
  yAxisOptions.gridLineColor && (yaxis.gridLineColor = toHIColor(yAxisOptions.gridLineColor));
  yAxisOptions.gridLineWidth >= 0 && (yaxis.gridLineWidth = yAxisOptions.gridLineWidth);

  // TODO: implement HIFunction
  // yAxisOptions.tickPositioner && (yaxis.tickPositioner = yAxisOptions.tickPositioner);

  hiOptions.yAxis = new NSArray({ array: [yaxis] });
  
  return hiOptions;
}
