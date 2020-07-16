export function accessibilityHandler(hiOptions, accessibilityOptions) {
  const accessibility = new com.highsoft.highcharts.common.hichartsclasses.HIAccessibility();

  accessibilityOptions.rangeDescription && accessibility.setRangeDescription(accessibilityOptions.rangeDescription);

  hiOptions.setAccessibility(accessibility);

  return hiOptions;
}
