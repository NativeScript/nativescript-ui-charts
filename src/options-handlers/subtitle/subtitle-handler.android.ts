import { styleHandler } from "../style/style-handler";

export function subtitleHandler(hiOptions, subtitleOptions) {
  const subtitle = new com.highsoft.highcharts.common.hichartsclasses.HISubtitle();

  subtitleOptions.text && subtitle.setText(subtitleOptions.text);
  subtitleOptions.style && styleHandler(subtitle, subtitleOptions.style);

  hiOptions.setSubtitle(subtitle);

  return hiOptions;
}