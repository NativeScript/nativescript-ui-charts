import { Color } from "@nativescript/core";

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
  const c = new Color(color);
  return new HIColor(c.ios) as any;
}
