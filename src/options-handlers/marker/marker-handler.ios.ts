export function markerHandler(hiOptions, markerOptions) {
  const marker = new HIMarker();

  markerOptions.enabled && (marker.enabled = markerOptions.enabled);

  hiOptions.marker = marker;

  return hiOptions;
}
