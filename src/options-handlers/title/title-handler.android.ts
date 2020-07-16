export function titleHandler(hiOptions, titleOptions) {
  const title = new com.highsoft.highcharts.common.hichartsclasses.HITitle();

  titleOptions.text && title.setText(titleOptions.text);

  hiOptions.setTitle(title);

  return hiOptions;
}