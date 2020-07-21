import { Color } from "@nativescript/core";
import { typesMap as _typesMap } from "./_helpers.common";

const typesMap = Object.assign({}, _typesMap, {
  'number': (options) => fromJSToNativePrimitive(options),
  'boolean': (options) => fromJSToNativePrimitive(options),
  'ArrayList': (options) => convertJSArrayToNative(options),
  'LinkedList': (options) => toLinkedList(options),
  'HIColor': (options) => toHIColor(options),
})

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
