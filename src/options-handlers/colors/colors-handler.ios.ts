export function colorsHandler(hiOptions, colorsOptions) {
  hiOptions.colors = new NSArray({ array: colorsOptions });;

  return hiOptions;
}
