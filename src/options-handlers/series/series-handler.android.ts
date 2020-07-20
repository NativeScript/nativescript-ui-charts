import { fromJSToNativePrimitive, convertJSArrayToNative, toArrayListRecursive } from '../helpers/helpers';
import { labelHandler } from '../label/label-handler';
import { markerHandler } from '../marker/marker-handler';
import { toArrayList } from '../helpers/helpers.android';

export function seriesHandler(hiOptions, seriesOptions) {
  if (seriesOptions instanceof Array) {
    // handle an array of series object
    const seriesArr = [];

    for (const sOpts of seriesOptions) {
      const series = new com.highsoft.highcharts.common.hichartsclasses.HISeries();
      
      sOpts.name && series.setName(sOpts.name);
      if (sOpts.data) {
        if (sOpts.data[0].length) {
          const data = sOpts.data.map(item => {
            return toArrayList([new java.lang.Long(item[0]), new java.lang.Double(item[1])]);
          })
          series.setData(toArrayList(data));
        } else {
          series.setData(convertJSArrayToNative(sOpts.data));
        }
      } 

      seriesArr.push(series);
    }

    hiOptions.setSeries(convertJSArrayToNative(seriesArr));

    return hiOptions;
  } else {
    // handle a single series object
    const series = new com.highsoft.highcharts.common.hichartsclasses.HISeries();
    
    seriesOptions.label && labelHandler(series, seriesOptions.label);
    seriesOptions.pointStart && series.setPointStart(fromJSToNativePrimitive(seriesOptions.pointStart));
    seriesOptions.marker && markerHandler(series, seriesOptions.marker);
  
    hiOptions.setSeries(series);
    
    return hiOptions;
  }
}
