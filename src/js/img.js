
var img_info;

/**
 * This function create HTML image element and return as a String format
 * <pre>
 * Example :
 *  
 * createImg(Object);
 *  
 * Object{
 *  MAIN_URL : img/sample.jpg
 *  FIT_TYPE : centerImg
 *  BG_COLOR : green
 * }
 * 
 * Return :
 * &ltdiv class="centerImg" style="background-color:green;"&gt
 *     &ltimg src="img/sample.jpg" /&gt
 * &lt/div&gt
 * </pre>
 * @param {Object} obj Image Object contain URL, Fit and BG Color
 * @returns {HTMLElement} Image Element
 *  
 */
function createImg(obj){

    img_info = obj;

    var div = document.createElement('div');

    var img = document.createElement('img');
   
    img.src = getImgURL();

    div.className = getImgFit();

    if(div.className == "centerImg"){

        div.style = "background-color :"+getImgBgColor();

    }

    handleImgError(img);

    div.appendChild(img);

    return div;
}

/**
 * This function return HTML Element as String
 * 
 * @param {HTMLElement} html_element &ltdiv>&ltimg>&ltp>...
 * @returns {String} html code as string
 * 
 */
function toStringCode(html_element){

    var ele = document.createDocumentFragment();
    ele.appendChild(html_element);
    return ele.firstElementChild.outerHTML;
}

/**
 * @ignore
 * This function return IMAGE URL
 * @returns {String} URL / Image Location
 * 
 */
function getImgURL(){

    if(img_info.THUMB_URL==undefined||img_info.THUMB_URL==""){
        return img_info.MAIN_URL;
    }
    return img_info.THUMB_URL;
}

/**@ignore
 * 
 * This function return specify Fit Type
 * @return {String} Fit Type (stretchImg, fillImg, centerImg)
 * 
 */
function getImgFit(){
    if(img_info.FIT_TYPE==undefined){
        return getDefaultClass();
    }
    else{
        return img_info.FIT_TYPE;
    }
}

/**
 * @ignore
 * This function return specify BG Color
 * @return {String} BG Color 
 * 
 */
function getImgBgColor(){
    if(img_info.BG_COLOR==undefined||img_info.BG_COLOR==""){
        return "white";
    }
    else{
        return img_info.BG_COLOR;
    }
}


/**
 * @ignore
 * This function handle Image Error
 * URL Source not valid -> replace by default error image
 * 
 * @param {img} img HTML <img> Element
 * 
 * 
 */
function handleImgError(img){

    img.onerror = function(){
        console.log("Error Loading - "+img.src);
        img.src = getDefaultErrorImg();
        img.className = getDefaultClass();
    }

}

/**
 * @ignore
 * This function return the default Image Fit Class
 * @returns {string} CSS Class Name for Image Fit
 * @default
 */
function getDefaultClass(){
    return "stretchImg";
}

/**
 * @ignore
 * This function return the default Error Image source
 * @returns {string} Error Image source File
 * @default
 */
function getDefaultErrorImg(){
    return "asset/error/errorimg.jpg";
}