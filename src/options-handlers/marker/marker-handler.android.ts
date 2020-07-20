import { fromJSToNativePrimitive } from "../helpers/helpers.android";

export function markerHandler(hiOptions, markerOptions) {
  const marker = new com.highsoft.highcharts.common.hichartsclasses.HIMarker();

  typeof markerOptions.enabled !== 'undefined' && marker.setEnabled(fromJSToNativePrimitive(markerOptions.enabled));

  hiOptions.setMarker(marker);

  return hiOptions;
}