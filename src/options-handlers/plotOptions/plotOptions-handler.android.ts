import { seriesHandler } from '../series/series-handler';

export function plotOptionsHandler(hiOptions, plotOptionsOptions) {
  const plotOptions = new com.highsoft.highcharts.common.hichartsclasses.HIPlotOptions();

  plotOptionsOptions.series && seriesHandler(plotOptions, plotOptionsOptions.series);

  hiOptions.setPlotOptions(plotOptions);
  
  return hiOptions;
}
