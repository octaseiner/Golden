
function $(mainImage)
    {
    return document.getElementById(mainImage);
}

function setSrc(mainImage, src)
    {
    let element = $(mainImage);
    element.src = src;
}