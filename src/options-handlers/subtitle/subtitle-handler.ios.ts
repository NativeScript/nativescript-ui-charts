export function subtitleHandler(hiOptions, subtitleOptions) {
  const subtitle = new HISubtitle();

  subtitleOptions.text && (subtitle.text = subtitleOptions.text);

  hiOptions.subtitle = subtitle;
  
  return hiOptions;
}
