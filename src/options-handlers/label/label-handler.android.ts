import { styleHandler } from "../style/style-handler";
import { fromJSToNativePrimitive } from "../helpers/helpers";

export function labelHandler(hiOptions, labelOptions) {
  const label = new com.highsoft.highcharts.common.hichartsclasses.HILabel();

  labelOptions.text && label.setText(labelOptions.text);
  typeof labelOptions.connectorAllowed !== 'undefined' && label.setConnectorAllowed(fromJSToNativePrimitive(labelOptions.connectorAllowed));
  labelOptions.style && styleHandler(label, labelOptions.style);

  hiOptions.setLabel(label);
  
  return hiOptions;
}
