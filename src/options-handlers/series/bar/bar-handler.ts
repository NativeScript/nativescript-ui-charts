import { isAndroid } from "@nativescript/core";
import { seriesHandler } from "../series-handler";
import { optionsBuilder } from "../../helpers/helpers";

export function barHandler(barOptions) {
  const bar = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIBar() : new HIBar();

  const barSchema = {
    borderColor: 'HIColor',
    borderRadius: 'number',
    borderWidth: 'number',
    centerInCategory: 'number',
    colorByPoint: 'number',
    colors: 'HIColor', // array
    depth: 'number',
    edgeColor: 'HIColor',
    edgeWidth: 'number',
    groupPadding: 'number',
    groupZPadding: 'number',
    grouping: 'number',
    maxPointWidth: 'number',
    minPointLength: 'number',
    pointPadding: 'number',
    pointRange: 'number',
    pointWidth: 'number'
  };

  return seriesHandler(barOptions, optionsBuilder(barSchema, barOptions, bar));
}
