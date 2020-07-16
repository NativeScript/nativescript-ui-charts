export function subtitleHandler(hiOptions, subtitleOptions) {
  const subtitle = new com.highsoft.highcharts.common.hichartsclasses.HISubtitle();

  subtitleOptions.text && subtitle.setText(subtitleOptions.text);

  hiOptions.setSubtitle(subtitle);

  return hiOptions;
}