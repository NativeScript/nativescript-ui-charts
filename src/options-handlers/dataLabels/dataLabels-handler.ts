import { optionsBuilder, toArrayList } from "../helpers/helpers";
import { isAndroid } from "@nativescript/core";

export function dataLabelsHandler(dataLabelsOptions) {
  const dataLabels = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HIDataLabels() : new HIDataLabels();

  const dataLabelsSchema = {
    align: 'string',
    alignTo: 'string',
    allowOverlap: 'number',
    alternate: 'number',
    attributes: 'HISVGAttributes',
    backgroundColor: 'string',
    borderColor: 'HIColor',
    borderRadius: 'number',
    borderWidth: 'number',
    className: 'string',
    color: 'HIColor',
    connectorColor: 'HIColor',
    connectorPadding: 'number',
    connectorShape: 'string',
    connectorWidth: 'number',
    crookDistance: 'string',
    crop: 'number',
    defer: 'number',
    distance: 'number',
    enabled: 'number',
    filter: 'HIFilter',
    format: 'string',
    formatter: 'HIFunction',
    inside: 'number',
    linkFormat: 'string',
    linkFormatter: 'HIFunction',
    linkTextPath: 'HILinkTextPath',
    nodeFormat: 'string',
    nodeFormatter: 'HIFunction',
    nullFormat: 'any',
    nullFormatter: 'HIFunction',
    overflow: 'string',
    padding: 'number',
    parentNodeFormat: 'string',
    parentNodeFormatter: 'HIFunction',
    parentNodeTextPath: 'HIParentNodeTextPath',
    position: 'string',
    rotation: 'number',
    rotationMode: 'string',
    shadow: 'HIShadowOptionsObject',
    shape: 'string',
    softConnector: 'number',
    style: 'HIStyle',
    textPath: 'HITextPath',
    useHTML: 'number',
    verticalAlign: 'string',
    width: 'number',
    x: 'number',
    xHigh: 'number',
    xLow: 'number',
    y: 'number',
    yHigh: 'number',
    yLow: 'number',
    z: 'number',
    zIndex: 'number'
  };

  if (isAndroid) {
    return toArrayList([optionsBuilder(dataLabelsSchema, dataLabelsOptions, dataLabels)]);
  } else {
    return new NSArray({ array: [optionsBuilder(dataLabelsSchema, dataLabelsOptions, dataLabels)] });
  }
}