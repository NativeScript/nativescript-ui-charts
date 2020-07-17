export function accessibilityHandler(hiOptions, accessibilityOptions) {
  const accessibility = new HIAccessibility();

  accessibilityOptions.rangeDescription && (accessibility.rangeDescription = accessibilityOptions.rangeDescription);

  hiOptions.accessibility = accessibility;
  
  return hiOptions;
}
