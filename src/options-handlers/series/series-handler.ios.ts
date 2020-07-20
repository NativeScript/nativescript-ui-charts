import { labelHandler } from '../label/label-handler';

export function seriesHandler(hiOptions, seriesOptions) {
  if (seriesOptions instanceof Array) {
    // handle an array of series object
    const seriesArr = [];

    for (const sOpts of seriesOptions) {
      const series = new HISeries();
      sOpts.name && (series.name = sOpts.name);
      sOpts.data && (series.data = new NSArray({
        array: sOpts.data.map(v => {
          if (v instanceof Array) {
            v = v.map(i => i === null ? NSNull.new() : i)
          }

          return v === null ? NSNull.new() : v;
        })
      }));

      seriesArr.push(series);
    }

    hiOptions.series = new NSArray({ array: seriesArr });

    return hiOptions;
  } else {
    // handle a single series object
    const series = new HISeries();
  
    seriesOptions.label && labelHandler(series, seriesOptions.label);
    seriesOptions.pointStart >= 0 && (series.pointStart = seriesOptions.pointStart);
  
    hiOptions.series = series;
    
    return hiOptions;
  }
}
