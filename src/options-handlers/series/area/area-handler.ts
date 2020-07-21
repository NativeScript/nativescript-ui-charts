import { isAndroid } from "@nativescript/core";
import { seriesHandler } from "../series-handler";
import { optionsBuilder } from "../../helpers/helpers";

export function areaHandler(areaOptions) {
  const area = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIArea() : new HIArea();

  const areaSchema = {
    fillColor: 'HIColor',
    fillOpacity: 'number',
    lineColor: 'HIColor',
    negativeFillColor: 'HIColor',
    trackByArea: 'number'
  };

  return seriesHandler(areaOptions, optionsBuilder(areaSchema, areaOptions, area));
}
