import { optionsBuilder } from "../helpers/helpers";
import { isAndroid } from "@nativescript/core";

export function chartHandler(chartOptions) {
  const chart = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIChart() : new HIChart();
  
  const chartSchema = {
    alignTicks: 'number',
    animation: 'HIAnimationOptionsObject',
    backgroundColor: 'HIColor',
    borderColor: 'HIColor',
    borderRadius: 'number',
    borderWidth: 'number',
    className: 'string',
    colorCount: 'number',
    displayErrors: 'number',
    events: 'HIEvents',
    height: 'any',
    ignoreHiddenSeries: 'number',
    inverted: 'number',
    margin: isAndroid ? 'ArrayList' : 'NSArray<number>',
    marginBottom: 'number',
    marginLeft: 'number',
    marginRight: 'number',
    marginTop: 'number',
    numberFormatter: 'HIFunction',
    options3d: 'HIOptions3d',
    panKey: 'string',
    panning: 'HIPanning',
    parallelAxes: 'HIParallelAxes',
    parallelCoordinates: 'number',
    pinchType: 'string',
    plotBackgroundColor: 'HIColor',
    plotBackgroundImage: 'string',
    plotBorderColor: 'HIColor',
    plotBorderWidth: 'number',
    plotShadow: 'HICSSObject',
    polar: 'number',
    reflow: 'number',
    renderTo: 'string',
    resetZoomButton: 'HIResetZoomButton',
    scrollablePlotArea: 'HIScrollablePlotArea',
    selectionMarkerFill: 'HIColor',
    shadow: 'HICSSObject',
    showAxes: 'number',
    spacing: isAndroid ? 'ArrayList' : 'NSArray<number>',
    spacingBottom: 'number',
    spacingLeft: 'number',
    spacingRight: 'number',
    spacingTop: 'number',
    style: 'HICSSObject',
    styledMode: 'number',
    type: 'string',
    width: 'any',
    zoomKey: 'string',
    zoomType: 'string'
  };

  return optionsBuilder(chartSchema, chartOptions, chart);
}
