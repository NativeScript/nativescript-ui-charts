import { optionsBuilder } from "../helpers/helpers";
import { isAndroid } from "@nativescript/core";

export function labelsHandler(labelsOptions) {
  const labels = isAndroid ? new com.highsoft.highcharts.common.hichartsclasses.HILabels() : new HILabels();

  const labelsSchema = {
    accessibility: 'HILabelsAccessibility',
    align: 'string',
    allowOverlap: 'number',
    autoRotation: 'Array',
    autoRotationLimit: 'number',
    backgroundColor: 'HIColor',
    borderColor: 'HIColor',
    borderRadius: 'number',
    borderWidth: 'number',
    className: 'string',
    crop: 'number',
    distance: 'number',
    enabled: 'number',
    format: 'string',
    formatter: 'HIFunction',
    overflow: 'string',
    padding: 'number',
    point: 'HIPoint',
    position3d: 'string',
    reserveSpace: 'number',
    rotation: 'number',
    shadow: 'HIShadowOptionsObject',
    shape: 'string',
    skew3d: 'number',
    staggerLines: 'number',
    step: 'number',
    style: 'HICSSObject',
    text: 'string',
    useHTML: 'number',
    verticalAlign: 'string',
    x: 'number',
    y: 'number',
    zIndex: 'number'
  };

  return optionsBuilder(labelsSchema, labelsOptions, labels);
}
