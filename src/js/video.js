var vd_info;

function createVideo(obj){

    vd_info = obj;

    console.log(vd_info);

    var div = document.createElement('div');

    var vd = document.createElement('video');

    vd.src = getVideoURL();
    
    vd.autoplay = true;

    div.className = getVideoFit();

    if(div.className == "centerImg"){

        div.style = "background-color :"+getVideoBGColor();

    }

    handleVideoError(vd);

    defaultVideoSetting(vd);

    div.appendChild(vd);

    console.log(div);

    return div;

}

function getVideoURL(){
    
    return vd_info.THUMB_URL;
}

function getVideoFit(){

    if(vd_info.FIT_TYPE==undefined||vd_info.FIT_TYPE==""){
        return "stretchImg";
    }
    else{
        return vd_info.FIT_TYPE;
    }
}

function getVideoBGColor(){

    if(vd_info.BG_COLOR==undefined||vd_info.BG_COLOR==""){
        return "white";
    }
    else{
        return vd_info.BG_COLOR;
    }
}

function handleVideoError(video){

    video.onerror = function(){

        video.poster = getDefaultErrorImg();
        console.log(video.error.code);

    };

}

function defaultVideoSetting(video){

    video.autoplay = true;
    video.setAttribute('onplay',"stopslide()");
    video.setAttribute('onended',"startslide()");
    video.setAttribute('onpause',"stopslide()");
    console.log(video);

}

