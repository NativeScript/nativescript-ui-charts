import { fromJSToNativePrimitive } from "../helpers/helpers";

export function styleHandler(hiOptions, styleOptions) {
  const style = new com.highsoft.highcharts.common.hichartsclasses.HICSSObject();

  styleOptions.textOverflow && style.setTextOverflow(styleOptions.textOverflow);
  styleOptions.opacity >= 0 && style.setOpacity(fromJSToNativePrimitive(styleOptions.opacity));
  styleOptions.backgroundColor && style.setBackgroundColor(styleOptions.backgroundColor);
  styleOptions.borderRadius >= 0 && style.setBorderRadius(fromJSToNativePrimitive(styleOptions.borderRadius));
  styleOptions.cursor && style.setCursor(styleOptions.cursor);
  styleOptions.textDecoration && style.setTextDecoration(styleOptions.textDecoration);
  styleOptions.width >= 0 && style.setWidth(fromJSToNativePrimitive(styleOptions.width));
  styleOptions.top && style.setTop(styleOptions.top);
  styleOptions.transition && style.setTransition(styleOptions.transition);
  styleOptions.position && style.setPosition(styleOptions.position);
  styleOptions.background && style.setBackground(styleOptions.background);
  styleOptions.color && style.setColor(styleOptions.color);
  styleOptions.fontSize && style.setFontSize(styleOptions.fontSize);
  styleOptions.fontWeight && style.setFontWeight(styleOptions.fontWeight);
  styleOptions.lineWidth >= 0 && style.setLineWidth(fromJSToNativePrimitive(styleOptions.lineWidth));
  styleOptions.pointerEvents && style.setPointerEvents(styleOptions.pointerEvents);
  styleOptions.textAlign && style.setTextAlign(styleOptions.textAlign);
  styleOptions.border && style.setBorder(styleOptions.border);
  styleOptions.whiteSpace && style.setWhiteSpace(styleOptions.whiteSpace);
  styleOptions.height >= 0 && style.setHeight(fromJSToNativePrimitive(styleOptions.height));
  styleOptions.fontFamily && style.setFontFamily(styleOptions.fontFamily);
  styleOptions.padding && style.setPadding(styleOptions.padding);
  styleOptions.textOutline && style.setTextOutline(styleOptions.textOutline);

  hiOptions.setStyle(style);

  return hiOptions;
}