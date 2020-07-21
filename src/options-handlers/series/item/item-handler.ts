import { isAndroid } from "@nativescript/core";
import { seriesHandler } from "../series-handler";
import { convertJSArrayToNative, optionsBuilder } from "../../helpers/helpers";

export function itemHandler(itemOptions) {
  const itemSchema = {
    center: isAndroid ? 'ArrayList' : 'NSArray',
    colors: 'HIColor', // array
    endAngle: 'number',
    fillColor: 'HIColor',
    ignoreHiddenPoint: 'number',
    innerSize: 'any',
    itemPadding: 'number',
    layout: 'string',
    minSize: 'any',
    rows: 'number',
    size: 'any',
    startAngle: 'number'
  };

  if (itemOptions instanceof Array) {
    const seriesArr = [];

    for (const opts of itemOptions) {
      const item = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIItem() : new HIItem();
      seriesArr.push(seriesHandler(opts, optionsBuilder(itemSchema, opts, item)));
    }

    return convertJSArrayToNative(seriesArr);
  } else {
    const item = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIItem() : new HIItem();
    return seriesHandler(itemOptions, optionsBuilder(itemSchema, itemOptions, item));
  }
}
