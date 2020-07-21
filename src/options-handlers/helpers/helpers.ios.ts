import { accessibilityHandler } from "../accessibility/accessibility-handler";
import { chartHandler } from "../chart/chart-handler";
import { Color } from "@nativescript/core";
import { dataLabelsHandler } from "../dataLabels/dataLabels-handler";
import { dateTimeLabelFormatsHandler } from "../dateTimeLabelFormats/dateTimeLabelFormats-handler";
import { labelHandler } from "../label/label-handler";
import { legendHandler } from "../legend/legend-handler";
import { markerHandler } from "../marker/marker-handler";
import { plotOptionsHandler } from "../plotOptions/plotOptions-handler";
import { seriesHandler } from "../series/series-handler";
import { stackLabelsHandler } from "../stackLabels/stackLabels-handler";
import { styleHandler } from "../style/style-handler";
import { subtitleHandler } from "../subtitle/subtitle-handler";
import { titleHandler } from "../title/title-handler";
import { tooltipHandler } from "../tooltip/tooltip-handler";
import { xAxisHandler } from "../xAxis/xAxis-handler";
import { yAxisHandler } from "../yAxis/yAxis-handler";
import { zAxisHandler } from "../zAxis/zAxis-handler";
import { lineHandler } from "../series/line/line-handler";
import { areaHandler } from "../series/area/area-handler";
import { labelsHandler } from "../labels/labels-handler";
import { statesHandler } from "../states/states-handler";
import { scrollablePlotAreaHandler } from "../scrollablePlotArea/scrollablePlotArea-handler";
import { creditsHandler } from "../credits/credits-handler";
import { barHandler } from "../series/bar/bar-handler";
import { functionHandler } from "../function/function-handler";
import { pointHandler } from "../point/point-handler";
import { splineHandler } from "../series/spline/spline-handler";
import { arearangeHandler } from "../series/arearange/arearange-handler";
import { bellcurveHandler } from "../series/bellcurve/bellcurve-handler";
import { boxplotHandler } from "../series/boxplot/boxplot-handler";
import { areasplineHandler } from "../series/areaspline/areaspline-handler";

export function convertJSArrayToNative(array) {
  // stub
  return array;
}

export function fromJSToNativePrimitive(value) {
  // stub
  return value;
}

export function toArrayList(arr) {
  // stub
  return arr;
}

export function toLinkedList(arr) {
  // stub
  return arr;
}

export function toArrayListRecursive(arr) {
  // stub
  return arr;
}

export function colorToString(color: any) {
  const c = new Color(color);
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a/255})`;
}

export function toHIColor(color) {
  if (color.linearGradient && color.stops) {
    const stops = color.stops.map((stop, index) => [index, colorToString(stop)]);
    return new HIColor({ 
      linearGradient: NSDictionary.dictionaryWithObjectsForKeys(color.linearGradient, ["x1", "y1", "x2", "y2"]), 
      stops: stops
    });
  } else {
    const c = new Color(color);
    return new HIColor(c.ios) as any;
  }
}

export function optionsBuilder(schema, options, containerObject) {
  const schemaKeys = Object.keys(schema);
  const optionsKeys = Object.keys(options);

  const typesMap = {
    'string': (options) => options,
    'number': (options) => options,
    'boolean': (options) => options,
    'NSArray': (options) => new NSArray({ array: options }),
    'HIAccessibility': (options) => accessibilityHandler(options),
    'HIArea': (options) => areaHandler(options),
    // 'HIAnnotations': (options) => annotationsHandler(options),
    'HIBar': (options) => barHandler(options),
    // 'HIBoost': (options) => boostHandler(options),
    // 'HICaption': (options) => captionHandler(options),
    'HIChart': (options) => chartHandler(options),
    'HIColor': (options) => toHIColor(options),
    'HICredits': (options) => creditsHandler(options),
    'HICSSObject': (options) => styleHandler(options),
    'HIDateTimeLabelFormats': (options) => dateTimeLabelFormatsHandler(options),
    'HIDataLabels': (options) => dataLabelsHandler(options),
    // 'HIColorAxis': (options) => colorAxisHandler(options),
    // 'HICredits': (options) => creditsHandler(options),
    // 'HIData': (options) => dataHandler(options),
    // 'HIDefs': (options) => defsHandler(options),
    // 'HIDrilldown': (options) => drilldownHandler(options),
    // 'HIExporting': (options) => exportingHandler(options),
    'HIFunction': (options) => functionHandler(options),
    'HILabel': (options) => labelHandler(options),
    'HILabels': (options) => labelsHandler(options),
    'HILine': (options) => lineHandler(options),
    'HILegend': (options) => legendHandler(options),
    'HIMarker': (options) => markerHandler(options),
    // 'HILoading': (options) => loadingHandler(options),
    // 'HINavigation': (options) => navigationHandler(options),
    // 'HINoData': (options) => noDataHandler(options),
    // 'HIPane': (options) => paneHandler(options),
    'HIPoint': (options) => pointHandler(options),
    'HIPlotOptions': (options) => plotOptionsHandler(options),
    // 'HIResponsive': (options) => responsiveHandler(options),
    'HIScrollablePlotArea': (options) => scrollablePlotAreaHandler(options),
    'HISeries': (options) => seriesHandler(options),
    'HIStackLabels': (options) => stackLabelsHandler(options),
    'HIStates': (options) => statesHandler(options),
    'HISubtitle': (options) => subtitleHandler(options),
    // 'HITime': (options) => timeHandler(options),
    'HITitle': (options) => titleHandler(options),
    'HITooltip': (options) => tooltipHandler(options),
    'HIXAxis': (options) => xAxisHandler(options),
    'HIYAxis': (options) => yAxisHandler(options),
    'HIZAxis': (options) => zAxisHandler(options),

    'HISpline': (options) => splineHandler(options),
    'HIArearange': (options) => arearangeHandler(options),
    'HIAreaspline': (options) => areasplineHandler(options),
    'HIBellcurve': (options) => bellcurveHandler(options),
    'HIBoxplot': (options) => boxplotHandler(options),
  };

  for (const schemaKey of schemaKeys) {
    if ((<any>optionsKeys).includes(schemaKey)) {
      if (typeof typesMap[schema[schemaKey]] === 'function') {
        containerObject[schemaKey] = typesMap[schema[schemaKey]](options[schemaKey]);
      } else {
        console.log('Handler for', schemaKey, schema[schemaKey], 'not implemented');
      }
    }
  }

  return containerObject;
}

