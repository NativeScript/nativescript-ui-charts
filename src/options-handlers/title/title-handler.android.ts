import { styleHandler } from "../style/style-handler";
import { fromJSToNativePrimitive } from "../helpers/helpers";

export function titleHandler(hiOptions, titleOptions) {
  const title = new com.highsoft.highcharts.common.hichartsclasses.HITitle();

  titleOptions.text && title.setText(titleOptions.text);
  titleOptions.style && styleHandler(title, titleOptions.style);
  titleOptions.verticalAlign && title.setVerticalAlign(titleOptions.verticalAlign);
  titleOptions.textAlign && title.setTextAlign(titleOptions.textAlign);
  titleOptions.position3d && title.setPosition3d(titleOptions.position3d);
  titleOptions.align && title.setAlign(titleOptions.align);
  typeof titleOptions.useHTML !== 'undefined' && title.setUseHTML(titleOptions.useHTML);
  typeof titleOptions.reserveSpace !== 'undefined' && title.setReserveSpace(titleOptions.reserveSpace);
  typeof titleOptions.floating !== 'undefined' && title.setFloating(titleOptions.floating);
  typeof titleOptions.skew3d !== 'undefined' && title.setSkew3d(titleOptions.skew3d);
  titleOptions.y >= 0 && title.setY(fromJSToNativePrimitive(titleOptions.y));
  titleOptions.x >= 0 && title.setX(fromJSToNativePrimitive(titleOptions.x));
  titleOptions.widthAdjust >= 0 && title.setWidthAdjust(fromJSToNativePrimitive(titleOptions.widthAdjust));
  titleOptions.margin >= 0 && title.setMargin(fromJSToNativePrimitive(titleOptions.margin));
  titleOptions.offset >= 0 && title.setOffset(fromJSToNativePrimitive(titleOptions.offset));
  titleOptions.rotation >= 0 && title.setRotation(fromJSToNativePrimitive(titleOptions.rotation));

  hiOptions.setTitle(title);

  return hiOptions;
}