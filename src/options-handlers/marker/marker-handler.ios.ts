export function markerHandler(hiOptions, markerOptions) {
  const marker = new HIMarker();

  typeof markerOptions.enabled !== 'undefined' && (marker.enabled = markerOptions.enabled);

  hiOptions.marker = marker;

  return hiOptions;
}
