export const stripTags = (str) =>{
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

export const domHtml = (str) => {
    return {__html: str};
}