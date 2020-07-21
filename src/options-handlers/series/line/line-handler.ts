import { isAndroid } from "@nativescript/core";
import { seriesHandler } from "../series-handler";

export function lineHandler(lineOptions) {
  const line = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILine() : new HILine();

  return seriesHandler(lineOptions, line);
}
