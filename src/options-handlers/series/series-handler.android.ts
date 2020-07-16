import { fromJSToNativePrimitive, convertJSArrayToNative } from '../helpers/helpers';
import { labelHandler } from '../label/label-handler';

export function seriesHandler(hiOptions, seriesOptions) {
  if (seriesOptions instanceof Array) {
    // handle an array of series object
    const seriesArr = [];

    for (const sOpts of seriesOptions) {
      const series = new com.highsoft.highcharts.common.hichartsclasses.HISeries();
      
      sOpts.name && series.setName(sOpts.name);
      sOpts.data && series.setData(convertJSArrayToNative(sOpts.data));

      seriesArr.push(series);
    }

    hiOptions.setSeries(convertJSArrayToNative(seriesArr));

    return hiOptions;
  } else {
    // handle a single series object
    const series = new com.highsoft.highcharts.common.hichartsclasses.HISeries();
  
    seriesOptions.label && labelHandler(series, seriesOptions.label);
    seriesOptions.pointStart && series.setPointStart(fromJSToNativePrimitive(seriesOptions.pointStart));
  
    hiOptions.setSeries(series);
    
    return hiOptions;
  }
}
