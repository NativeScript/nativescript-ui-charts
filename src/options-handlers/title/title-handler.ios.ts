import { styleHandler } from "../style/style-handler";

export function titleHandler(hiOptions, titleOptions) {
  const title = new HITitle();

  titleOptions.text && (title.text = titleOptions.text);
  titleOptions.style && styleHandler(title, titleOptions.style);
  titleOptions.align && (title.align = titleOptions.align);
  titleOptions.floating && (title.floating = titleOptions.floating);
  titleOptions.margin && (title.margin = titleOptions.margin);
  titleOptions.offset && (title.offset = titleOptions.offset);
  titleOptions.position3d && (title.position3d = titleOptions.position3d);
  titleOptions.reserveSpace && (title.reserveSpace = titleOptions.reserveSpace);
  titleOptions.rotation && (title.rotation = titleOptions.rotation);
  titleOptions.skew3d && (title.skew3d = titleOptions.skew3d);
  titleOptions.textAlign && (title.textAlign = titleOptions.textAlign);
  titleOptions.useHTML && (title.useHTML = titleOptions.useHTML);
  titleOptions.verticalAlign && (title.verticalAlign = titleOptions.verticalAlign);
  titleOptions.widthAdjust && (title.widthAdjust = titleOptions.widthAdjust);
  titleOptions.x && (title.x = titleOptions.x);
  titleOptions.y && (title.y = titleOptions.y);

  hiOptions.title = title;
  
  return hiOptions;
}
