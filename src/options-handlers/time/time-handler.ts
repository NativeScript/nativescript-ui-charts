import { optionsBuilder } from "../helpers/helpers";
import { isAndroid } from "@nativescript/core";

export function timeHandler(timeOptions) {
  const time = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HITime() : new HITime();

  const timeSchema = {
    Date: 'string',
    getTimezoneOffset: 'HIFunction',
    timezone: 'string',
    timezoneOffset: 'number',
    useUTC: 'number',
  };

  return optionsBuilder(timeSchema, timeOptions, time);
} 