
import { optionsBuilder } from "../helpers/helpers";
import { isAndroid } from "@nativescript/core";

export function panningHandler(exportingOptions) {
  const exporting = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIPanning() : new HIPanning();

  const exportingSchema = {
    enabled:  isAndroid ? 'boolean' : 'number',
    type: 'string',
  };

  return optionsBuilder(exportingSchema, exportingOptions, exporting);
}
