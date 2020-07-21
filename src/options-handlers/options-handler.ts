import { isAndroid } from "@nativescript/core";
import { optionsBuilder } from "./helpers/helpers";

export function optionsHandler(options) {
  const hiOptions = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIOptions() : new HIOptions();

  const hiOptionsSchema = {
    accessibility: 'HIAccessibility',
    // additionalOptions: 'NSDictionary<any, any>',
    annotations: 'HIAnnotations', // array
    boost: 'HIBoost',
    caption: 'HICaption',
    chart: 'HIChart',
    colorAxis: 'HIColorAxis', // array
    colors: isAndroid ? 'ArrayList' : 'NSArray',
    credits: 'HICredits',
    data: 'HIData',
    defs: 'HIDefs',
    drilldown: 'HIDrilldown',
    exporting: 'HIExporting',
    legend: 'HILegend',
    loading: 'HILoading',
    navigation: 'HINavigation',
    noData: 'HINoData',
    pane: 'HIPane',
    plotOptions: 'HIPlotOptions',
    responsive: 'HIResponsive',
    series: 'HISeries', // array
    subtitle: 'HISubtitle',
    time: 'HITime',
    title: 'HITitle',
    tooltip: 'HITooltip',
    xAxis: 'HIXAxis', // array
    yAxis: 'HIYAxis', // array
    zAxis: 'HIZAxis' // array
  };

  return optionsBuilder(hiOptionsSchema, options, hiOptions);
}
