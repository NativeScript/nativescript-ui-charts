import { styleHandler } from "../style/style-handler";

export function subtitleHandler(hiOptions, subtitleOptions) {
  const subtitle = new HISubtitle();

  subtitleOptions.text && (subtitle.text = subtitleOptions.text);
  subtitleOptions.style && styleHandler(subtitle, subtitleOptions.style);

  hiOptions.subtitle = subtitle;
  
  return hiOptions;
}
