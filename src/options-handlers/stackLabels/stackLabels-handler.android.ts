import { fromJSToNativePrimitive, toHIColor } from "../helpers/helpers";
import { styleHandler } from "../style/style-handler";

export function stackLabelsHandler(hiOptions, stackLabelsOptions) {
  const stackLabels = new com.highsoft.highcharts.common.hichartsclasses.HIStackLabels();

  typeof stackLabelsOptions.enabled !== 'undefined' && stackLabels.setEnabled(fromJSToNativePrimitive(stackLabelsOptions.enabled));
  stackLabelsOptions.style && styleHandler(stackLabels, stackLabelsOptions.style);
  stackLabelsOptions.align && stackLabels.setAlign(stackLabelsOptions.align);
  typeof stackLabelsOptions.allowOverlap !== 'undefined' && stackLabels.setAllowOverlap(fromJSToNativePrimitive(stackLabelsOptions.allowOverlap));
  stackLabelsOptions.backgroundColor && stackLabels.setBackgroundColor(toHIColor(stackLabelsOptions.backgroundColor));
  stackLabelsOptions.borderColor && stackLabels.setBorderColor(toHIColor(stackLabelsOptions.borderColor));
  stackLabelsOptions.borderRadius >= 0 && stackLabels.setBorderRadius(fromJSToNativePrimitive(stackLabelsOptions.borderRadius));
  stackLabelsOptions.borderWidth >= 0 && stackLabels.setBorderWidth(fromJSToNativePrimitive(stackLabelsOptions.borderWidth));
  typeof stackLabelsOptions.setCrop !== 'undefined' && stackLabels.setCrop(fromJSToNativePrimitive(stackLabelsOptions.setCrop));
  stackLabelsOptions.format && stackLabels.setFormat(stackLabelsOptions.format);
  stackLabelsOptions.overflow && stackLabels.setOverflow(stackLabelsOptions.overflow);
  stackLabelsOptions.rotation >= 0 && stackLabels.setRotation(fromJSToNativePrimitive(stackLabelsOptions.rotation));
  stackLabelsOptions.textAlign && stackLabels.setTextAlign(stackLabelsOptions.textAlign);
  typeof stackLabelsOptions.useHTML !== 'undefined' && stackLabels.setUseHTML(fromJSToNativePrimitive(stackLabelsOptions.useHTML));
  stackLabelsOptions.verticalAlign && stackLabels.setVerticalAlign(stackLabelsOptions.verticalAlign);
  stackLabelsOptions.x >= 0 && stackLabels.setX(fromJSToNativePrimitive(stackLabelsOptions.x));
  stackLabelsOptions.y >= 0 && stackLabels.setY(fromJSToNativePrimitive(stackLabelsOptions.y));

  // TODO: implement HIFunctions
  // stackLabelsOptions.formatter && stackLabels.setFormatter(stackLabelsOptions.formatter);

  hiOptions.setStackLabels(stackLabels);

  return hiOptions;
}