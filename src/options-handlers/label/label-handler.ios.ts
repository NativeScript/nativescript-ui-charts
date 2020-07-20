import { styleHandler } from "../style/style-handler";

export function labelHandler(hiOptions, labelOptions) {
  const label = new HILabel();

  labelOptions.text && (label.text = labelOptions.text);
  typeof labelOptions.connectorAllowed !== 'undefined' && (label.connectorAllowed = labelOptions.connectorAllowed);
  labelOptions.style && styleHandler(label, labelOptions.style);

  hiOptions.label = label;
  
  return hiOptions;
}
