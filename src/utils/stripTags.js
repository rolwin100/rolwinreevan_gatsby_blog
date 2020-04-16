export const stripTags = (ipStr) => {
  let str = ipStr;
  if ((str === null) || (str === '')) {
    return false;
  }

  str = str.toString();

  return str.replace(/(<([^>]+)>)/ig, '');
};

export const domHtml = (str) => ({ __html: str });
