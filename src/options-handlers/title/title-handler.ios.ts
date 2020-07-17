export function titleHandler(hiOptions, titleOptions) {
  const title = new HITitle();

  titleOptions.text && (title.text = titleOptions.text);

  hiOptions.title = title;
  
  return hiOptions;
}
