export function labelHandler(hiOptions, labelOptions) {
  const label = new com.highsoft.highcharts.common.hichartsclasses.HILabel();

  labelOptions.text && label.setText(labelOptions.text);
  labelOptions.connectorAllowed && label.setConnectorAllowed(labelOptions.connectorAllowed);

  hiOptions.setLabel(label);
  
  return hiOptions;
}
