import { convertJSArrayToNative } from "../helpers/helpers.android";

export function colorsHandler(hiOptions, colorsOptions) {
  hiOptions.setColors(convertJSArrayToNative(colorsOptions));

  return hiOptions;
}