import { Color } from "@nativescript/core";
import { typesMap as _typesMap } from "./_helpers.common";

const typesMap = Object.assign({}, _typesMap, {
  'number': (options) => fromJSToNativePrimitive(options),
  'boolean': (options) => fromJSToNativePrimitive(options),
  'NSArray': (options) => convertJSArrayToNative(options),
  'HIColor': (options) => toHIColor(options),
})

export function convertJSArrayToNative(array) {
  return new NSArray({ array: array });;
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

