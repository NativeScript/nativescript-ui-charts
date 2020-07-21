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

export function convertJSArrayToNative(jsArray: Array<any>): java.util.ArrayList<any> {
  const nativeArray = new java.util.ArrayList<any>();
  for (let i = 0, l = jsArray.length; i < l; i++) {
      nativeArray.add(fromJSToNativePrimitive(jsArray[i]));
  }

  return nativeArray;
}

export function fromJSToNativePrimitive(value: any): any {
  
  if (typeof value === 'boolean' || value === 'false' || value === 'true') return new java.lang.Boolean(value);
  if (typeof value === 'string') return value;

  if (Number.isInteger(value)) {
      return new java.lang.Double(value);
  }

  if (!isNaN(Number(value)) && value !== null) {
      return new java.lang.Double(value.toString());
  }

  return value;
}

export function toArrayList(arr, isNumber = false) {
  const arrayList = new java.util.ArrayList<any>();
  arr.forEach(item => {
      arrayList.add(item);
  })
  return arrayList;
}

export function toLinkedList(arr, isNumber = false) {
  const linkedList = new java.util.LinkedList<any>();
  arr.forEach((item, i) => {
      linkedList.add(i, item);
  })
  return linkedList;
}

export function toArrayListRecursive(arr, isNumber = false) {
  const arrayList = new java.util.ArrayList<any>();
  arr.forEach(item => {
      if (item.length) {
          arrayList.add(toArrayListRecursive(item, isNumber));
      } else {
        if (isNumber) {
          arrayList.add(fromJSToNativePrimitive(item));
        } else {
          arrayList.add(item);
        }
      }
  })
  return arrayList;
}

export function colorToString(color: any) {
  const c = new Color(color);
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a/255})`;
}

export function toHIColor(color) {
  if (color.linearGradient && color.stops) {
    const grad = color.linearGradient;
    const gradient = new com.highsoft.highcharts.common.HIGradient(grad[0], grad[1], grad[2], grad[3]);
    const stops = color.stops.map((stop, i) => new com.highsoft.highcharts.common.HIStop(i, toHIColor(stop)))
    const stopslist = toLinkedList(stops);

    return com.highsoft.highcharts.common.HIColor.initWithLinearGradient(gradient, stopslist);
  } else {
    const c = new Color(color);
    return com.highsoft.highcharts.common.HIColor.initWithRGBA(c.r, c.g, c.b, c.a/255) as any;
  }
}

export function optionsBuilder(schema, options, containerObject) {
  const schemaKeys = Object.keys(schema);
  const optionsKeys = Object.keys(options);

  const typesMap = {
    'string': (options) => options,
    'number': (options) => fromJSToNativePrimitive(options),
    'boolean': (options) => fromJSToNativePrimitive(options),
    'ArrayList': (options) => convertJSArrayToNative(options),
    'LinkedList': (options) => toLinkedList(options),
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
  };

  for (const schemaKey of schemaKeys) {
    if ((<any>optionsKeys).includes(schemaKey)) {
      if (typeof typesMap[schema[schemaKey]] === 'function') {
        containerObject['set' + schemaKey[0].toUpperCase() + schemaKey.slice(1)](typesMap[schema[schemaKey]](options[schemaKey]));
      } else {
        console.log('Handler for', schemaKey, schema[schemaKey], 'not implemented');
      }
    }
  }

  return containerObject;
}
