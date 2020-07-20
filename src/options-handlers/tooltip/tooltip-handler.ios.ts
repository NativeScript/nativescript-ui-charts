export function tooltipHandler(hiOptions, tooltipOptions) {
  const tooltip = new HITooltip();

  tooltipOptions.headerFormat && (tooltip.headerFormat = tooltipOptions.headerFormat);
  tooltipOptions.pointFormat && (tooltip.pointFormat = tooltipOptions.pointFormat);

  hiOptions.tooltip = tooltip;

  return hiOptions;
}
