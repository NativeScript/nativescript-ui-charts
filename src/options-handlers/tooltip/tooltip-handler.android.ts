export function tooltipHandler(hiOptions, tooltipOptions) {
  const tooltip = new com.highsoft.highcharts.common.hichartsclasses.HITooltip();

  tooltipOptions.headerFormat && tooltip.setHeaderFormat(tooltipOptions.headerFormat);
  tooltipOptions.pointFormat && tooltip.setPointFormat(tooltipOptions.pointFormat);

  hiOptions.setTooltip(tooltip);

  return hiOptions;
}