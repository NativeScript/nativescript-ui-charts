import { isAndroid } from "@nativescript/core";

export function functionHandler(functionOptions) {
  const hiFunction = isAndroid ?
    new com.highsoft.highcharts.core.HIFunction(functionOptions.toString()) :
    new HIFunction({ JSFunction: functionOptions.toString() });

  return hiFunction;
}
