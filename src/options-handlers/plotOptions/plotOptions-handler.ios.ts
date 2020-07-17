import { seriesHandler } from '../series/series-handler';

export function plotOptionsHandler(hiOptions, plotOptionsOptions) {
  const plotOptions = new HIPlotOptions();

  plotOptionsOptions.series && seriesHandler(plotOptions, plotOptionsOptions.series);

  hiOptions.plotOptions = plotOptions;
  
  return hiOptions;
}
