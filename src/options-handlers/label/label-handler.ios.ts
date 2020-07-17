export function labelHandler(hiOptions, labelOptions) {
  const label = new HILabel();

  labelOptions.text && (label.text = labelOptions.text);
  labelOptions.connectorAllowed && (label.connectorAllowed = labelOptions.connectorAllowed);

  hiOptions.label = label;
  
  return hiOptions;
}
