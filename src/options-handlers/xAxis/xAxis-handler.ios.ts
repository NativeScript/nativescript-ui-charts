import { titleHandler } from '../title/title-handler';
import { accessibilityHandler } from '../accessibility/accessibility-handler';
import { dateTimeLabelFormatsHandler } from '../dateTimeLabelFormats/dateTimeLabelFormats-handler';
import { toHIColor } from '../helpers/helpers';

export function xAxisHandler(hiOptions, xAxisOptions) {
  const xaxis = new HIXAxis();

  xAxisOptions.title && titleHandler(xaxis, xAxisOptions.title);
  xAxisOptions.type && (xaxis.type = xAxisOptions.type);
  xAxisOptions.dateTimeLabelFormats && dateTimeLabelFormatsHandler(xaxis, xAxisOptions.dateTimeLabelFormats);
  xAxisOptions.accessibility && accessibilityHandler(xaxis, xAxisOptions.accessibility);
  xAxisOptions.categories && (xaxis.categories = new NSArray({ array: xAxisOptions.categories }));
  xAxisOptions.min >= 0 && (xaxis.min = xAxisOptions.min);
  xAxisOptions.max >= 0 && (xaxis.max = xAxisOptions.max);
  xAxisOptions.tickColor && (xaxis.tickColor = toHIColor(xAxisOptions.tickColor));
  xAxisOptions.tickAmount >= 0 && (xaxis.tickAmount = xAxisOptions.tickAmount);
  xAxisOptions.tickInterval >= 0 && (xaxis.tickInterval = xAxisOptions.tickInterval);
  xAxisOptions.tickLength >= 0 && (xaxis.tickLength = xAxisOptions.tickLength);
  xAxisOptions.tickPixelInterval >= 0 && (xaxis.tickPixelInterval = xAxisOptions.tickPixelInterval);
  xAxisOptions.tickPosition && (xaxis.tickPosition = xAxisOptions.tickPosition);
  xAxisOptions.tickPositions && (xaxis.tickPositions = new NSArray({ array: xAxisOptions.tickPositions }));
  xAxisOptions.tickWidth >= 0 && (xaxis.tickWidth = xAxisOptions.tickWidth);
  xAxisOptions.tickmarkPlacement && (xaxis.tickmarkPlacement = xAxisOptions.tickmarkPlacement);
  xAxisOptions.lineColor && (xaxis.lineColor = toHIColor(xAxisOptions.lineColor));
  xAxisOptions.lineWidth >= 0 && (xaxis.lineWidth = xAxisOptions.lineWidth);
  xAxisOptions.gridLineColor && (xaxis.gridLineColor = toHIColor(xAxisOptions.gridLineColor));
  xAxisOptions.gridLineWidth >= 0 && (xaxis.gridLineWidth = xAxisOptions.gridLineWidth);

  // TODO: implement HIFunction
  // xAxisOptions.tickPositioner && (xaxis.tickPositioner = xAxisOptions.tickPositioner);

  hiOptions.xAxis = new NSArray({ array: [xaxis] });
  
  return hiOptions;
}
