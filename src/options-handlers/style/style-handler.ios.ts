export function styleHandler(hiOptions, styleOptions) {
  const style = new HICSSObject();

  styleOptions.background && (style.background = styleOptions.background);
  styleOptions.backgroundColor && (style.backgroundColor = styleOptions.backgroundColor);
  styleOptions.border && (style.border = styleOptions.border);
  styleOptions.borderRadius && (style.borderRadius = styleOptions.borderRadius);
  styleOptions.color && (style.color = styleOptions.color);
  styleOptions.cursor && (style.cursor = styleOptions.cursor);
  styleOptions.fontFamily && (style.fontFamily = styleOptions.fontFamily);
  styleOptions.fontSize && (style.fontSize = styleOptions.fontSize);
  styleOptions.fontWeight && (style.fontWeight = styleOptions.fontWeight);
  styleOptions.height && (style.height = styleOptions.height);
  styleOptions.lineWidth && (style.lineWidth = styleOptions.lineWidth);
  styleOptions.opacity && (style.opacity = styleOptions.opacity);
  styleOptions.padding && (style.padding = styleOptions.padding);
  styleOptions.pointerEvents && (style.pointerEvents = styleOptions.pointerEvents);
  styleOptions.position && (style.position = styleOptions.position);
  styleOptions.textAlign && (style.textAlign = styleOptions.textAlign);
  styleOptions.textDecoration && (style.textDecoration = styleOptions.textDecoration);
  styleOptions.textOutline && (style.textOutline = styleOptions.textOutline);
  styleOptions.textOverflow && (style.textOverflow = styleOptions.textOverflow);
  styleOptions.top && (style.top = styleOptions.top);
  styleOptions.transition && (style.transition = styleOptions.transition);
  styleOptions.whiteSpace && (style.whiteSpace = styleOptions.whiteSpace);
  styleOptions.width && (style.width = styleOptions.width);

  hiOptions.style = style;
  
  return hiOptions;
}
