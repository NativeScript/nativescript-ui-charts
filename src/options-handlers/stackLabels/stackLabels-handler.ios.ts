import { styleHandler } from "../style/style-handler";
import { toHIColor } from "../helpers/helpers";

export function stackLabelsHandler(hiOptions, stackLabelsOptions) {
  const stackLabels = new HIStackLabels();

  stackLabelsOptions.enabled && (stackLabels.enabled = stackLabelsOptions.enabled);
  stackLabelsOptions.style && styleHandler(stackLabels, stackLabelsOptions.style);
  stackLabelsOptions.align && (stackLabels.align = stackLabelsOptions.align);
  typeof stackLabelsOptions.allowOverlap !== 'undefined' && (stackLabels.allowOverlap = stackLabelsOptions.allowOverlap);
  stackLabelsOptions.backgroundColor && (stackLabels.backgroundColor = toHIColor(stackLabelsOptions.backgroundColor));
  stackLabelsOptions.borderColor && (stackLabels.borderColor = toHIColor(stackLabelsOptions.borderColor));
  stackLabelsOptions.borderRadius >= 0 && (stackLabels.borderRadius = stackLabelsOptions.borderRadius);
  stackLabelsOptions.borderWidth >= 0 && (stackLabels.borderWidth = stackLabelsOptions.borderWidth);
  typeof stackLabelsOptions.setCrop !== 'undefined' && (stackLabels.crop = stackLabelsOptions.setCrop);
  stackLabelsOptions.format && (stackLabels.format = stackLabelsOptions.format);
  stackLabelsOptions.overflow && (stackLabels.overflow = stackLabelsOptions.overflow);
  stackLabelsOptions.rotation >= 0 && (stackLabels.rotation = stackLabelsOptions.rotation);
  stackLabelsOptions.textAlign && (stackLabels.textAlign = stackLabelsOptions.textAlign);
  typeof stackLabelsOptions.useHTML !== 'undefined' && (stackLabels.useHTML = stackLabelsOptions.useHTML);
  stackLabelsOptions.verticalAlign && (stackLabels.verticalAlign = stackLabelsOptions.verticalAlign);
  stackLabelsOptions.x >= 0 && (stackLabels.x = stackLabelsOptions.x);
  stackLabelsOptions.y >= 0 && (stackLabels.y = stackLabelsOptions.y);

  // TODO: implement HIFunctions
  // stackLabelsOptions.formatter && (stackLabels.formatter = stackLabelsOptions.formatter);

  hiOptions.stackLabels = stackLabels;

  return hiOptions;
}
