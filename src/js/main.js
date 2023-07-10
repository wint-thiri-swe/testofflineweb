var happeningsArray;
var tenantArray;
var displayonDirectorytenant = new Array();
var timeout;
var shoppingArray = new Array();
var diningArray = new Array();
var unfilteredcategoryArray;
var categoryArray = new Array();
// hard code for shopping subcategory
var subcategoryArray;
var diningsubcategory;
var kioskArray;
var channelArray;
var mediaArray;
var mapArray;
var sequenceArray;
var contentArray;
var pylistArray;
var press_count = 0; //Hidden button
var staticArray = new Array();
var refreshScreenSaverTime = new Array();
var startProgramTime = new Date().getTime();
var countTimer = 0;
var screenOut = false;
var tenantImageArray = new Array();
var happeningImageArray = new Array();
var endshopId;
var endshopentityname;
var isatFloorGuide = false;
var iswfresulthidden = false;
var loadjsontimeout;
var pauseonVideoTimeleft; // for screensaver time
var currentImageIndex = 0;
var fittype;
var screensavertimeout;
var screensaverautoplaytimeout;
var media;

// floorguide variables
var currentLevel;
var newcurrentLevel;
var kioskInfo;
var wfsteps;
var wfstepsArray;
var route;
var wfstepsArray;
var tween;
var wayfindvalue;

var SwiperHome;
var SwiperDirectory;
var SwiperHappenings;
var SwiperDining;
var SwiperShopping;
var SwiperScreenSaver;
var SwiperCategory;
var SwiperSubCategory;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


loadImages();
swiperSetting();
setAllEventListener();
onclickNavBtn('wgHome');
onclickTransportBtn('btnbus');

function swiperSetting() {

    SwiperScreenSaver = new Swiper('#swiperScreensaver', {
        init: false,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 0,
        effect: 'fade',
        //loop: $('#wgScreenSaver #SwiperScreenSaver .swiper-wrapper .swiper-slide').length <= 1 ? true : false,
        autoplay: {
            disableOnInteraction: false,
            stopOnLastSlide: false
        },
        autoplayDisableOnInteraction : false,
        fadeEffect: {
            crossFade: true
        },
        on: {
            init: function () {

                // if the slide is only one (1 video)

                if(this.slides.length != 0) {
                // stats
                    var dataSet = new Object();
                    dataSet.media = this.slides[this.activeIndex].children[0].children[0].id;
                    dataSet.date = new Date();
                    dataSet.airtime = Number(SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].dataset.swiperAutoplay)/ 1000;
                    dataSet.appearTime = 1;

                    staticArray.push(dataSet);
                }

                if (this.slides[this.activeIndex].children[0].children[0].tagName == "VIDEO") {
                    this.slides[this.activeIndex].children[0].children[0].play();
                }

                // if(this.activeIndex == this.slides.length -1) {
                //     moveSlideToNext(0, Number(this.slides[this.activeIndex].dataSet.swiperAutoplay)/ 1000);
                // }
                // else {
                //     moveSlideToNext(this.activeIndex + 1, Number(this.slides[this.activeIndex].dataset.swiperAutoplay) / 1000);
                // }

                // save stats for 1 image screen swiper
                if(this.slides.length == 1){
                    var currentmedia = window.SwiperScreenSaver.slides[window.SwiperScreenSaver.activeIndex].children[0].children[0].id;
        
                    var interval = setInterval(function() {
                        
                        for(var i=0; i<staticArray.length; i++) {
        
                        //The Media Already Exist in Static Arr
                        if(staticArray[i].media == currentmedia){

                            staticArray[i].airtime = Number(staticArray[i].airtime) + Number(window.SwiperScreenSaver.slides[window.SwiperScreenSaver.activeIndex].dataset.swiperAutoplay) / 1000;
                            staticArray[i].appear_time = Number(staticArray[i].appear_time) + 1;
        
                            break;
        
                        }
                    }
                    }, Number(window.SwiperScreenSaver.slides[window.SwiperScreenSaver.activeIndex].dataset.swiperAutoplay));
                
                };

            },
            afterInit: function() {
                if(this.slides.length == 1) {
                    console.log('after init');
                    var cloneslide = $('#wgScreenSaver #SwiperScreenSaver .swiper-wrapper .swiper-slide').clone();
                    $('#wgScreenSaver #SwiperScreenSaver .swiper-wrapper').append(cloneslide);
                    SwiperScreenSaver.update();
                }
            },
            slideChangeTransitionStart : function ()  {

                this.autoplay.resume();

                // if(pauseonVideoTimeleft === undefined) {
                //     this.autoplay.resume();
                //     this.update();
                // }
                // else {
                //     this.autoplay.timeLeft = pauseonVideoTimeleft;
                //     this.autoplay.resume();
                //     this.update();
                // }
                var currentmedia = SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].id;

                for(var i=0;i<staticArray.length;i++){

                    //The Media Already Exist in Static Arr
                    if(staticArray[i].media == currentmedia){

                        staticArray[i].airtime = Number(staticArray[i].airtime) +  Number(SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].dataset.swiperAutoplay) / 1000;
                        staticArray[i].appearTime = Number(staticArray[i].appearTime) + 1;
                        break;
                    }

                    //Last Index, Media Not Found in Static Arr
                    if(i==staticArray.length-1){

                        var dataSet = new Object();
                        dataSet.media = SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].id;
                        dataSet.date = new Date();
                        dataSet.airtime = Number(SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].dataset.swiperAutoplay) / 1000;
                        dataSet.appearTime = 1;

                        staticArray.push(dataSet);
                        break;
                    }

                }

                //console.log(this.activeIndex)
        
                // if (this.activeIndex == this.slides.length - 1) {
                //     moveSlideToNext(0, Number(this.slides[this.activeIndex].dataset.swiperAutoplay) / 1000);
                // }
                // else {
                //     moveSlideToNext(this.activeIndex + 1, Number(this.slides[this.activeIndex].dataset.swiperAutoplay) / 1000);
                // }
            },
            autoplayStart : function () {
                console.log('autoplay start')
            },
            autoplayResume :function() {
                if (this.slides[this.activeIndex].children[0].children[0].tagName == "VIDEO") {
                    this.slides[this.activeIndex].children[0].children[0].play();
                }
            },
            autoplayPause : function () {
                if (this.slides[this.activeIndex].children[0].children[0].tagName == "VIDEO") {
                    this.slides[this.activeIndex].children[0].children[0].pause();
                }
            }
        }
    });


    SwiperHome = new Swiper('#swiperHome', {
        init: false,
        slidesPerView: 1,
        allowTouchMove: false,
        spaceBetween: 0,
        centeredSlides: true, 
        // loop: happeningsArray.length == 1 ? true : false,
        // autoplay : happeningsArray.length == 1 ? true : false,
        loop : true,
        autoplay: {
            delay: 10000,
            disableOnInteraction : false
        },
    });

    SwiperHappenings = new Swiper ('#swiperHappenings', {
        watchOverflow: false,
        initialSlide: 0,
        spaceBetween: 88,
        pagination : {
            el : ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });


    SwiperDirectory = new Swiper ('#swiperDirectory', {
        centeredSlides: true,
        pagination : {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    SwiperDining = new Swiper ('#swiperDining', {
        centeredSlides: true,
        pagination : {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    SwiperShopping = new Swiper ('#swiperShopping', {
        centeredSlides: true,
        pagination : {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    SwiperCategory = new Swiper ('#swiperCategory', {
        watchOverflow: false,
        initialSlide: 0,
        spaceBetween: 88,
        pagination : {
            el : ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
        
    });

    SwiperSubCategory = new Swiper ('#swiperSubCategory', {
        watchOverflow: false,
        initialSlide: 0,
        spaceBetween: 88,
        pagination : {
            el : ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
        
    });


}

function clearWayfindingtimeout() {
    clearTimeout(timeout);
}

function setAllEventListener()
{
    //Directory Page - menu button
    $('#wgDirectory .menuDirectory .navgroup .btnDirectorymenu').on('click',function(e){

        $('#wgDirectory .menuDirectory .btnDirectorymenu').css("background-color","#FFFFFF");
        $('#wgDirectory .menuDirectory .btnDirectorymenu .btntxt').css({"color":"#222222","border-left":"6px solid #BBE3FA","border-right":"0"});

        $('#wgDirectory .menuDirectory #'+this.id).css("background-color","#006EB8");
        $('#wgDirectory .menuDirectory #'+this.id+' .btntxt').css({"color":"#FFFFFF","border-left":"0","border-right":"6px solid #BBE3FA"});

        //Hide all sub-menu
        $('#wgDirectory .menuCategory').hide();
        $('#wgDirectory .menuLevel').hide();

        switch(this.id)
        {
            case 'btnall':{ 
                $('#wgDirectory #SwiperDirectoryPage').css('height', 'auto');
                createDirectorySwiper(displayonDirectorytenant,5); 
                break;
            }

            case 'btncat':{
                // reset style
                SwiperCategory.slideTo(0);
                $('#wgDirectory #SwiperDirectoryPage').css('height', 'auto');
                $("#wgDirectory #swiperCategory .catcol > div").css('background', '#FFFFFF');
                $("#wgDirectory #swiperCategory .catcol > div .cattxt").css('color', '#222222');
                createDirectorySwiper(displayonDirectorytenant,4); 
                $('#wgDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper').css('min-height', '936px');
                $('#wgDirectory .menuCategory').fadeIn('fast'); 
                break;
            }
            
            case 'btnlvl':{ 
                $("#wgDirectory .menuLevel .lvlgroup > div").css('background-color', '#FFFFFF');
                $("#wgDirectory .menuLevel .lvlgroup > div .lvltxt").css('color', '#222222');
                $('#wgDirectory #SwiperDirectoryPage').css('height', '100%');
                onclickLvlBtn('wgDirectory', 'B2');
                $('#wgDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper .swiper-slide').css('min-height', '1030px');
                $('#wgDirectory .menuLevel').fadeIn('fast');
                break;
            }
        }

    });

    //Directory Page - search
    $('#wgDirectory #searchDirectory').on('input', resizeInput);
    resizeInput.call($('#searchDirectory')[0]);

    //Directory Page - searchbar
    $('#wgDirectory .search').on('click',()=>{

        $('#wgDirectory .keyboard .kyrow .keybox').css('background', '#fff');

        $('#wgDirectory .keyboard .kyrow .keybox .key').css('color', '#000');
        
        $('#wgDirectory .menuCategory').hide();
        $('#wgDirectory .menuLevel').hide();

        $('.navmenu').css('box-shadow', 'none');

        createDirectorySwiper(displayonDirectorytenant,4);

        $('#wgDirectory .menuDirectory').hide();
        gsap.to('#wgDirectory .searchBarBox',{top:'1170px',duration:0.2, onComplete:()=>{ $('#wgDirectory .keyboard').fadeIn('fast'); }});

    });

    //Directory Page - keyboard close button
    $('#wgDirectory .keyboard .closebtnholder').on('click',()=>{

        $('#wgDirectory .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');

        $('#wgDirectory #searchDirectory').val("");

        $('#wgDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper').html("");

        $('#wgDirectory #swiperDirectory').css({'height':'100%'});

        $('#wgDirectory .menuDirectory #btnall').trigger('click');

        $('#wgDirectory .keyboard').hide();

        gsap.to('#wgDirectory .searchBarBox',{'top' :'',duration: 0.2, ease:'power3'});

        $('#wgDirectory .menuDirectory').show();

    });

    // Directory Page - keyboard search
    $("#wgDirectory .keybox").on("click", function(){

        resizeInput.call($('#searchDirectory')[0]);

        $('#wgDirectory .keyboard .kyrow .keybox').css('background-color', 'white');
        $('#wgDirectory .keyboard .kyrow .keybox .key').css('color', '');
        $('#wgDirectory .keyboard .kyrow .keybox .keyspacetxt').css('color', '');
        $('#wgDirectory .keyboard .kyrow .keycleartxt').css('color', '#000');
        $('#wgDirectory .keyboard .kyrow #delete svg path').attr('fill', '#222222');
        this.style.backgroundColor = '#0077C1';
        $(this).find(".key").css('color', 'white');

        var keyword = $("#searchDirectory").val();
        var key = $(this).attr('id');
    
        if (key == "delete") {
    
            if (keyword == "") {
            }
            else {
                keyword = keyword.substring(0, keyword.length - 1);
                $('#wgDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
            }
        }
        else if (key == "clear") {
            keyword = "";
            $('#wgDirectory .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');
            $('#wgDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else if (key == "space") {
            keyword = keyword + ' ';
            console.log(keyword);
            $('#wgDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else {
            keyword = keyword + key;
            $('#wgDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }

        // Filter by keyword search
        var filtered_tenant = filterTenantbyKeyword(displayonDirectorytenant,keyword);

        if (filtered_tenant.length != 0) {
            createDirectorySwiper(filtered_tenant,4);
            SwiperDirectory.update();
        }
        else {
            createDirectorySwiper(filtered_tenant,4);
            SwiperDirectory.update();
            $('#wgDirectory #swiperDirectory').css({'height':'936px'});
        }

    });

    //Dining Page - menu button
    $('#wgDining .menuDirectory .navgroup .btnDirectorymenu').on('click',function(e){

        $('#wgDining .menuDirectory .btnDirectorymenu').css("background-color","#FFFFFF");
        $('#wgDining .menuDirectory .btnDirectorymenu .btntxt').css({"color":"#222222","border-left":"6px solid #BBE3FA","border-right":"0"});

        $('#wgDining .menuDirectory #'+this.id).css("background-color","#006EB8");
        $('#wgDining .menuDirectory #'+this.id+' .btntxt').css({"color":"#FFFFFF","border-left":"0","border-right":"6px solid #BBE3FA"});

        //Hide all sub-menu
        $('#wgDining .menuCategory').hide();
        $('#wgDining .menuLevel').hide();

        switch(this.id)
        {
            case 'btnall':{ 
                $('#wgDining #SwiperDiningPage').css('height', 'auto');
                createDiningSwiper(diningArray,5);
                // $('#wgDining #SwiperDiningPage #swiperDining .swiper-wrapper .swiper-slide').css('min-height', '1070px');
                break;}

            case 'btncat':{
                SwiperSubCategory.slideTo(0);
                $('#wgDining #SwiperDiningPage').css('height', 'auto');
                $("#wgDining #swiperSubCategory .catcol > div").css('background', '#FFFFFF');
                $("#wgDining #swiperSubCategory .catcol > div .cattxt").css('color', '#222222');
                createDiningSwiper(diningArray,4); 
                $('#wgDining #SwiperDiningPage #swiperDining .swiper-wrapper').css('min-height', '936px');
                $('#wgDining .menuCategory').fadeIn('fast'); 
                break;
            }
            
            case 'btnlvl':{ 
                $("#wgDining .menuLevel .lvlgroup > div").css('background-color', '#FFFFFF');
                $("#wgDining .menuLevel .lvlgroup > div .lvltxt").css('color', '#222222');
                $('#wgDining #SwiperDiningPage').css('height', '100%');
                onclickLvlBtn('wgDining','B2');
                $('#wgDining #SwiperDiningPage #swiperDining .swiper-wrapper .swiper-slide').css('min-height', '1030px');
                $('#wgDining .menuLevel').fadeIn('fast');
                break;
            }
        }

    });

    //Dining Page - search
    $('#wgDining #searchDining').on('input', resizeInput);
    resizeInput.call($('#searchDining')[0]);

    //Dining Page - searchbar
    $('#wgDining .search').on('click',()=>{

        $('#wgDining .keyboard .kyrow .keybox').css('background', '#fff');

        $('#wgDining .keyboard .kyrow .keybox .key').css('color', '#000');
        
        $('#wgDining .menuCategory').hide();
        $('#wgDining .menuLevel').hide();

        $('.navmenu').css('box-shadow', 'none');

        createDiningSwiper(diningArray,4);

        $('#wgDining .menuDirectory').hide();
        gsap.to('#wgDining .searchBarBox',{top:'1170px',duration:0.2, onComplete:()=>{ $('#wgDining .keyboard').fadeIn('fast'); }});

    });

    //Dining Page - keyboard close button
    $('#wgDining .keyboard .closebtnholder').on('click',()=>{

        $('#wgDining .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');

        $('#wgDining #searchDining').val("");

        $('#wgDining #SwiperDiningPage #swiperDining .swiper-wrapper').html("");

        $('#wgDining #swiperDining').css({'height':'100%'});

        $('#wgDining .menuDirectory #btnall').trigger('click');

        $('#wgDining .keyboard').hide();

        gsap.to('#wgDining .searchBarBox',{'top' :'',duration: 0.2, ease:'power3'});

        $('#wgDining .menuDirectory').show();

    });

    // Dining Page - keyboard search
    $("#wgDining .keybox").on("click", function(){

        resizeInput.call($('#searchDining')[0]);

        $('#wgDining .keyboard .kyrow .keybox').css('background-color', 'white');
        $('#wgDining .keyboard .kyrow .keybox .key').css('color', '');
        $('#wgDining .keyboard .kyrow .keybox .keyspacetxt').css('color', '');
        $('#wgDining .keyboard .kyrow .keycleartxt').css('color', '#000');
        $('#wgDining .keyboard .kyrow #delete svg path').attr('fill', '#222222');
        this.style.backgroundColor = '#0077C1';
        $(this).find(".key").css('color', 'white');

        var keyword = $("#searchDining").val();
        var key = $(this).attr('id');
    
        if (key == "delete") {
    
            if (keyword == "") {
            }
            else {
                keyword = keyword.substring(0, keyword.length - 1);
                $('#wgDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
            }
        }
        else if (key == "clear") {
            keyword = "";
            $("#wgDining .searchBarBox .searchbar .search .searchclass input").css('width', '9ch');
            $('#wgDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else if (key == "space") {
            keyword = keyword + ' ';
            console.log(keyword);
            $('#wgDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else {
            keyword = keyword + key;
            $('#wgDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }

        // Filter by keyword search
        var filtered_tenant = filterTenantbyKeyword(diningArray,keyword);

        if (filtered_tenant.length != 0) {
            createDiningSwiper(filtered_tenant,4);
            SwiperDining.update();
        }
        else {
            createDiningSwiper(filtered_tenant,4);
            SwiperDining.update();
            $('#wgDining #swiperDining').css({'height':'936px'});
        }

    
    });

    //Floor Guide Page - lvl btn
    $('#wgFloorGuide .lvlbtn').on('click',function(e){

        $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
        $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
        $('#wgFloorGuide .lvlbtngroup #'+this.id).css("background-color","#006EB8");
        $('#wgFloorGuide .lvlbtngroup #'+this.id+' .lvltxt').css("color","white");
        onclickLevelBtn(this.id);
        resetIconbtn();

    });
    
    // wayfind result
    $('#wgWayfindresult .wfresult #wfhideicon').on('click', function() {

        iswfresulthidden = true;

        tween = gsap.to('#wgWayfindresult .wfresult', {x: 200, duration: 1,
            onUpdate: () => {
                $(this).css('pointer-events', 'none');
            },

            onComplete:() => {
                $('#wgWayfindresult .wfresult #wfhideicon').hide();
                $('#wgWayfindresult .wfresult #wfshowicon').show();
                $('#wgWayfindresult .wfresult #wfshowicon').css('pointer-events','visible');
            }

        });
        
    });

    $('#wgWayfindresult .wfresult #wfshowicon').on('click', function() {

        iswfresulthidden = false;

        tween = gsap.to('#wgWayfindresult .wfresult', {x: 0, duration: 1,
            onUpdate: () => {
                $(this).css('pointer-events', 'none');
            },

            onComplete:() => {
                $('#wgWayfindresult .wfresult #wfshowicon').hide();
                $('#wgWayfindresult .wfresult #wfhideicon').show();
                $('#wgWayfindresult .wfresult #wfhideicon').css('pointer-events','visible');
            }

        })

        // tween.reverse();
            // $('#wgWayfindresult .wfresult #wfshowicon').hide();
            // // $('#wgWayfindresult .wfresult #wfhideicon').css('pointer-events','visible');
            // $('#wgWayfindresult .wfresult #wfhideicon').show();
            // $('#wgWayfindresult .wfresult #wfhideicon').css('pointer-events','visible');


        }
    );

}

function initialSetting()
{

    filterTenantObj(tenantArray); // by home & furnishing cat id
    filterDiningTenant(displayonDirectorytenant, '6396eec07871f34f48f09f5d'); // by food and beverage category id
    diningsubcategory = getSubcategorybyCategoryId(subcategoryArray, '6396eec07871f34f48f09f5d' ) // filter subcategory by food and beverage category ID
    createHomeSwiper(happeningsArray);
    createDirectorySwiper(displayonDirectorytenant, 5);
    $('#sourcelocation').text('Your Location | ' + kioskInfo[0].kioskFloor);
    createHappeningSwiper(happeningsArray,3,3);
    if(channelArray != null) {
        createScreenSaverSwiper(channelArray[0]);
        initialScreenSaverRefresh();
    }
}

function resetNavBtnDefaultSvg()
{
    $('.navmenu #navHome .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M68.5101 10.1101C49.2501 10.1101 30.8501 16.4701 13.8101 28.9901C5.75013 58.7501 10.7201 85.3201 29.0001 110.17C37.6346 112.55 46.5439 113.787 55.5001 113.85C74.7601 113.85 93.1501 107.51 110.19 94.9701C118.25 65.2201 113.29 38.6301 95.0001 13.7901C86.3692 11.4095 77.4631 10.1723 68.5101 10.1101Z" fill="white"/>'+
        '<path d="M101.05 5L99.42 4.52997C89.3783 1.58569 78.9742 0.0609374 68.51 0C46.51 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6038 122.443 45.0068 123.964 55.4699 124.03C77.4699 124.03 98.47 116.64 117.64 102.09L119 101.09L119.46 99.47C129.12 65.69 123.25 34.38 102.04 6.40997L101.05 5ZM110.19 95C93.19 107.54 74.76 113.88 55.5 113.88C46.5437 113.817 37.6344 112.58 29 110.2C10.72 85.35 5.74997 58.78 13.81 29.02C30.81 16.5 49.25 10.14 68.51 10.14C77.463 10.2022 86.369 11.4394 95 13.82C113.29 38.65 118.25 65.24 110.19 94.99V95Z" fill="#006EB8"/></svg>'
    );

    $('.navmenu #navHome .navlogo').html('<svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M0 16.7622L16.7274 0.51198C17.4303 -0.17066 18.5697 -0.17066 19.2726 0.51198L36 16.7622H32.4V30.7514C32.4 31.7171 31.5941 32.5 30.6 32.5H21.6V20.2595H14.4V32.5H5.4C4.40589 32.5 3.6 31.7171 3.6 30.7514V16.7622H0Z" fill="#006EB8"/>'+
        '</svg>'
    );

    $('.navmenu #navFloorGuide .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M68.5101 10.1101C49.2501 10.1101 30.8501 16.4701 13.8101 28.9901C5.75013 58.7501 10.7201 85.3201 29.0001 110.17C37.6346 112.55 46.5439 113.787 55.5001 113.85C74.7601 113.85 93.1501 107.51 110.19 94.9701C118.25 65.2201 113.29 38.6301 95.0001 13.7901C86.3692 11.4095 77.4631 10.1723 68.5101 10.1101Z" fill="white"/>'+
        '<path d="M101.05 5L99.42 4.52997C89.3783 1.58569 78.9742 0.0609374 68.51 0C46.51 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6038 122.443 45.0068 123.964 55.4699 124.03C77.4699 124.03 98.47 116.64 117.64 102.09L119 101.09L119.46 99.47C129.12 65.69 123.25 34.38 102.04 6.40997L101.05 5ZM110.19 95C93.19 107.54 74.76 113.88 55.5 113.88C46.5437 113.817 37.6344 112.58 29 110.2C10.72 85.35 5.74997 58.78 13.81 29.02C30.81 16.5 49.25 10.14 68.51 10.14C77.463 10.2022 86.369 11.4394 95 13.82C113.29 38.65 118.25 65.24 110.19 94.99V95Z" fill="#CAD401"/></svg>'
    );

    $('.navmenu #navFloorGuide .navlogo').html('<svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5714 1C28.5714 0.447715 29.0191 0 29.5714 0H31.8571H39C39.5523 0 40 0.447715 40 1V3.17391C40 3.7262 39.5523 4.17391 39 4.17391H34.3571H32.8571V5.67391V7.93951L32.8573 7.95649V10.1304C32.8573 10.5319 32.6207 10.8781 32.2793 11.0373C32.2098 11.0697 32.1359 11.0943 32.0588 11.1101C31.9937 11.1234 31.9262 11.1304 31.8571 11.1304H29.5714L29.5631 11.1304H27.2144H25.7144V12.6304V17.0869C25.7144 17.6392 25.2666 18.0869 24.7144 18.0869H22.4286L22.4203 18.0869H20.0713H18.5713V19.5869V21.8428C18.5715 21.8516 18.5716 21.8605 18.5716 21.8695V24.0434C18.5716 24.5477 18.1984 24.9648 17.713 25.0335C17.6918 25.0365 17.6703 25.0388 17.6486 25.0405C17.6231 25.0424 17.5973 25.0434 17.5713 25.0434H15.2856L15.2772 25.0434H12.9287H11.4287V26.5434V30.9999C11.4287 31.2071 11.3657 31.3996 11.2578 31.5592C11.2488 31.5725 11.2395 31.5856 11.2299 31.5984C11.0475 31.8423 10.7565 32.0001 10.4286 32.0001H1C0.447716 32.0001 0 31.5524 0 31.0001V28.8262C0 28.2739 0.447715 27.8262 1 27.8262H5.643H7.143V26.3262V21.8695C7.143 21.3872 7.48435 20.9847 7.9386 20.8904C7.97209 20.8834 8.0062 20.8781 8.04082 20.8746C8.07442 20.8712 8.1085 20.8695 8.143 20.8695H8.14307H10.4287H12.7856H14.2856V19.3695V14.913C14.2856 14.3941 14.6808 13.9675 15.1866 13.9178C15.215 13.915 15.2437 13.9134 15.2727 13.9131L15.2856 13.913H15.2856H17.5713H19.9286H21.4286V12.413V7.95649C21.4286 7.47322 21.7715 7.07002 22.2272 6.9768C22.2882 6.96432 22.3513 6.95739 22.4158 6.95657L22.4286 6.95649H22.4287H24.7144H27.0714H28.5714V5.45649V3.17589L28.5714 3.17391V1Z" fill="#006EB8"/>'+
        '</svg>'
    );

    $('.navmenu #navDirectory .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M68.5101 10.1101C49.2501 10.1101 30.8501 16.4701 13.8101 28.9901C5.75013 58.7501 10.7201 85.3201 29.0001 110.17C37.6346 112.55 46.5439 113.787 55.5001 113.85C74.7601 113.85 93.1501 107.51 110.19 94.9701C118.25 65.2201 113.29 38.6301 95.0001 13.7901C86.3692 11.4095 77.4631 10.1723 68.5101 10.1101Z" fill="white"/>'+
        '<path d="M101.05 5L99.42 4.52997C89.3783 1.58569 78.9742 0.0609374 68.51 0C46.51 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6038 122.443 45.0068 123.964 55.4699 124.03C77.4699 124.03 98.47 116.64 117.64 102.09L119 101.09L119.46 99.47C129.12 65.69 123.25 34.38 102.04 6.40997L101.05 5ZM110.19 95C93.19 107.54 74.76 113.88 55.5 113.88C46.5437 113.817 37.6344 112.58 29 110.2C10.72 85.35 5.74997 58.78 13.81 29.02C30.81 16.5 49.25 10.14 68.51 10.14C77.463 10.2022 86.369 11.4394 95 13.82C113.29 38.65 118.25 65.24 110.19 94.99V95Z" fill="#FCCC7C"/></svg>'
    );

    $('.navmenu #navDirectory .navlogo').html('<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8923 0C10.5597 0 6.52299 1.86321 3.71473 5.05017C1.33613 7.75012 0 11.2198 0 14.8923C0 23.1166 6.66798 29.7846 14.8923 29.7846C18.6717 29.7846 22.1223 28.3764 24.7482 26.0561C24.5179 26.7632 24.6837 27.571 25.2455 28.1328L34.5147 37.4023L34.6445 37.5215C35.4464 38.1971 36.646 38.1575 37.4012 37.4024C38.1983 36.6054 38.1984 35.3132 37.4013 34.5161L28.1322 25.2467L28.0024 25.1274C27.4502 24.6622 26.7094 24.5361 26.055 24.7493C28.3754 22.1232 29.7836 18.6721 29.7836 14.8923C29.7836 6.66785 23.1165 0 14.8923 0ZM14.892 4.09955C20.852 4.09955 25.6839 8.93195 25.6839 14.8925C25.6839 20.853 20.852 25.6854 14.892 25.6854C8.93166 25.6854 4.09903 20.8528 4.09903 14.8925C4.09903 12.2273 5.06515 9.71848 6.7902 7.76037C8.82804 5.44773 11.7489 4.09955 14.892 4.09955Z" fill="#006EB8"/>'+
        '</svg>'
    );

    $('.navmenu #navDining .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M68.5101 10.1101C49.2501 10.1101 30.8501 16.4701 13.8101 28.9901C5.75013 58.7501 10.7201 85.3201 29.0001 110.17C37.6346 112.55 46.5439 113.787 55.5001 113.85C74.7601 113.85 93.1501 107.51 110.19 94.9701C118.25 65.2201 113.29 38.6301 95.0001 13.7901C86.3692 11.4095 77.4631 10.1723 68.5101 10.1101Z" fill="white"/>'+
        '<path d="M101.05 5L99.42 4.52997C89.3783 1.58569 78.9742 0.0609374 68.51 0C46.51 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6038 122.443 45.0068 123.964 55.4699 124.03C77.4699 124.03 98.47 116.64 117.64 102.09L119 101.09L119.46 99.47C129.12 65.69 123.25 34.38 102.04 6.40997L101.05 5ZM110.19 95C93.19 107.54 74.76 113.88 55.5 113.88C46.5437 113.817 37.6344 112.58 29 110.2C10.72 85.35 5.74997 58.78 13.81 29.02C30.81 16.5 49.25 10.14 68.51 10.14C77.463 10.2022 86.369 11.4394 95 13.82C113.29 38.65 118.25 65.24 110.19 94.99V95Z" fill="#F18F00"/></svg>'
    );

    $('.navmenu #navDining .navlogo').html('<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C8.93716 0 10.7351 1.06771 12.0621 3.00587C13.3118 4.83131 14 7.23914 14 9.78474C14 12.3303 13.3118 14.7382 12.0621 16.5636C11.2796 17.7072 10.3327 18.5472 9.2901 19.0442L9.84937 36.8704C9.90316 38.5816 8.61147 40 7 40C5.38853 40 4.09684 38.5816 4.15063 36.8704L4.70989 19.0442C3.66726 18.5472 2.72042 17.7072 1.93789 16.5636C0.68821 14.7382 0 12.3311 0 9.78474C0 7.23836 0.68821 4.83131 1.93789 3.00587C3.26495 1.06771 5.06284 0 7 0ZM29.6006 1.17188C29.6006 0.525 30.1383 0 30.8007 0C31.4632 0 32.0008 0.525 32 1.17188V15.5211C32 16.8078 31.3416 18.0094 30.2455 18.7227C29.1046 19.4648 28.4414 20.7336 28.4942 22.0719L29.0774 36.8773C29.1446 38.582 27.7477 40 26.0004 40C24.2531 40 22.8562 38.582 22.9234 36.8773L23.5066 22.0719C23.5586 20.7336 22.8954 19.4656 21.7545 18.7227C20.6584 18.0094 20 16.8078 20 15.5211V1.17188C20 0.525 20.5376 0 21.2001 0C21.8625 0 22.4002 0.525 22.4002 1.17188V12.2656H24.8003V1.17188C24.8003 0.525 25.338 0 26.0004 0C26.6628 0 27.2005 0.525 27.2005 1.17188V12.2656H29.6006V1.17188Z" fill="#006EB8"/>'+
        '</svg>'
    );

    $('.navmenu #navHappenings .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M68.5101 10.1101C49.2501 10.1101 30.8501 16.4701 13.8101 28.9901C5.75013 58.7501 10.7201 85.3201 29.0001 110.17C37.6346 112.55 46.5439 113.787 55.5001 113.85C74.7601 113.85 93.1501 107.51 110.19 94.9701C118.25 65.2201 113.29 38.6301 95.0001 13.7901C86.3692 11.4095 77.4631 10.1723 68.5101 10.1101Z" fill="white"/>'+
        '<path d="M101.05 5L99.42 4.52997C89.3783 1.58569 78.9742 0.0609374 68.51 0C46.51 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6038 122.443 45.0068 123.964 55.4699 124.03C77.4699 124.03 98.47 116.64 117.64 102.09L119 101.09L119.46 99.47C129.12 65.69 123.25 34.38 102.04 6.40997L101.05 5ZM110.19 95C93.19 107.54 74.76 113.88 55.5 113.88C46.5437 113.817 37.6344 112.58 29 110.2C10.72 85.35 5.74997 58.78 13.81 29.02C30.81 16.5 49.25 10.14 68.51 10.14C77.463 10.2022 86.369 11.4394 95 13.82C113.29 38.65 118.25 65.24 110.19 94.99V95Z" fill="#C67AAE"/></svg>'
    );

    $('.navmenu #navHappenings .navlogo').html('<svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M32 40H4C1.79086 40 0 38.2091 0 36V8C0 5.79086 1.79086 4 4 4H8V0H12V4H24V0H28V4H32C34.2091 4 36 5.79086 36 8V36C36 38.2091 34.2091 40 32 40ZM4 16V36H32V16H4ZM4 8V12H32V8H4ZM28 32H24V28H28V32ZM20 32H16V28H20V32ZM12 32H8V28H12V32ZM28 24H24V20H28V24ZM20 24H16V20H20V24ZM12 24H8V20H12V24Z" fill="#006EB8"/>'+
        '</svg>'
    );

    $('.navmenu #navTransport .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M68.5101 10.1101C49.2501 10.1101 30.8501 16.4701 13.8101 28.9901C5.75013 58.7501 10.7201 85.3201 29.0001 110.17C37.6346 112.55 46.5439 113.787 55.5001 113.85C74.7601 113.85 93.1501 107.51 110.19 94.9701C118.25 65.2201 113.29 38.6301 95.0001 13.7901C86.3692 11.4095 77.4631 10.1723 68.5101 10.1101Z" fill="white"/>'+
        '<path d="M101.05 5L99.42 4.52997C89.3783 1.58569 78.9742 0.0609374 68.51 0C46.51 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6038 122.443 45.0068 123.964 55.4699 124.03C77.4699 124.03 98.47 116.64 117.64 102.09L119 101.09L119.46 99.47C129.12 65.69 123.25 34.38 102.04 6.40997L101.05 5ZM110.19 95C93.19 107.54 74.76 113.88 55.5 113.88C46.5437 113.817 37.6344 112.58 29 110.2C10.72 85.35 5.74997 58.78 13.81 29.02C30.81 16.5 49.25 10.14 68.51 10.14C77.463 10.2022 86.369 11.4394 95 13.82C113.29 38.65 118.25 65.24 110.19 94.99V95Z" fill="#C1C0C0"/></svg>'
    );

    $('.navmenu #navTransport .navlogo').html('<svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.88451 20.9246H30.8042V7.99292H5.88451V20.9246ZM27.4707 32.2794C26.0239 32.2794 24.8465 31.1165 24.8465 29.683C24.8465 28.2515 26.0218 27.0906 27.4707 27.0906C28.9195 27.0906 30.0928 28.2515 30.0928 29.683C30.0928 31.1165 28.9195 32.2794 27.4707 32.2794ZM9.38472 32.2794C7.9359 32.2794 6.76052 31.1165 6.76052 29.683C6.76052 28.2515 7.9359 27.0906 9.38472 27.0906C10.8315 27.0906 12.0069 28.2515 12.0069 29.683C12.0069 31.1165 10.8315 32.2794 9.38472 32.2794ZM9.12152 6.46024H27.5705V3.69824H9.12152V6.46024ZM35.1247 9.78154C34.7941 6.58748 34.2697 4.10208 33.4371 3.12488C30.0069 -0.892938 5.98097 -1.18771 3.2527 3.12488C2.58339 4.18082 2.11609 6.65814 1.80388 9.78558C0.789709 9.9047 0 10.7486 0 11.7824V15.6932C0 16.5634 0.557081 17.2963 1.33455 17.583C1.14885 23.743 1.29986 30.1715 1.57534 33.3676C1.57534 35.8328 3.2527 35.4249 3.2527 35.4249H4.82192V38.09C4.82192 39.146 5.92179 40 7.27675 40C8.63578 40 9.73566 39.146 9.73566 38.09V35.4249H28.0051V38.09C28.0051 39.146 29.107 40 30.464 40C31.821 40 32.9209 39.146 32.9209 38.09V35.4249H33.4371C33.4371 35.4249 35.4083 35.6935 35.5349 34.5305C35.5349 31.3425 35.7389 24.278 35.5716 17.6092C36.398 17.3528 37 16.5997 37 15.6932V11.7824C37.002 10.7244 36.1736 9.86634 35.1247 9.78154Z" fill="#006EB8"/>'+
        '</svg>'
    );

    $('.navmenu #navConcierge .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M68.5101 10.1101C49.2501 10.1101 30.8501 16.4701 13.8101 28.9901C5.75013 58.7501 10.7201 85.3201 29.0001 110.17C37.6346 112.55 46.5439 113.787 55.5001 113.85C74.7601 113.85 93.1501 107.51 110.19 94.9701C118.25 65.2201 113.29 38.6301 95.0001 13.7901C86.3692 11.4095 77.4631 10.1723 68.5101 10.1101Z" fill="white"/>'+
        '<path d="M101.05 5L99.42 4.52997C89.3783 1.58569 78.9742 0.0609374 68.51 0C46.51 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6038 122.443 45.0068 123.964 55.4699 124.03C77.4699 124.03 98.47 116.64 117.64 102.09L119 101.09L119.46 99.47C129.12 65.69 123.25 34.38 102.04 6.40997L101.05 5ZM110.19 95C93.19 107.54 74.76 113.88 55.5 113.88C46.5437 113.817 37.6344 112.58 29 110.2C10.72 85.35 5.74997 58.78 13.81 29.02C30.81 16.5 49.25 10.14 68.51 10.14C77.463 10.2022 86.369 11.4394 95 13.82C113.29 38.65 118.25 65.24 110.19 94.99V95Z" fill="#858484"/></svg>'
    );

    $('.navmenu #navConcierge .navlogo').html('<svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
        '<path d="M8.78648 5.4846C9.25984 7.27608 11.2197 8.65441 13.3074 8.6666C14.3242 8.67147 15.2856 8.37411 16.1328 7.79036C18.2008 6.36572 18.625 3.61879 17.0328 1.71886C15.834 0.28934 14.2602 -0.217635 12.427 0.0833812C9.77501 0.517234 8.12378 2.98142 8.78648 5.4846Z" fill="#006EB8"/>'+
        '<path d="M15.84 35.6633C15.7951 35.8607 15.752 36.0528 15.7097 36.2409C15.593 36.7599 15.4832 37.2486 15.3648 37.7343C15.3406 37.8332 15.2594 37.9584 15.1782 37.9914C14.7031 38.1782 14.2338 38.3844 13.7645 38.5906C12.5648 39.1177 11.3653 39.6447 10.0707 39.8475C8.37388 40.1138 6.67947 40.0993 5.10747 39.2464C3.4676 38.3565 2.53919 36.9065 2.47738 34.8711C2.42041 32.9609 2.86886 31.143 3.33065 29.3251C3.42811 28.9413 3.52582 28.5575 3.62354 28.1737C4.19651 25.9233 4.76975 23.6719 5.29049 21.4064C5.46623 20.6391 5.48563 19.806 5.45169 19.0084C5.39109 17.6467 4.79477 17.0732 3.53427 16.9981C2.63131 16.944 1.75016 17.0535 0.896899 17.3909C0.70633 17.4662 0.512749 17.5343 0.292365 17.6118C0.20018 17.6442 0.103305 17.6783 0 17.7152C0.0418352 17.5277 0.0826534 17.3432 0.122953 17.1611C0.247234 16.5993 0.366697 16.0594 0.495718 15.523C0.513899 15.4452 0.615709 15.3608 0.695702 15.3331C1.17305 15.1625 1.64906 14.9857 2.12512 14.8088C3.33765 14.3582 4.55073 13.9075 5.78742 13.5601C7.11216 13.1896 8.4866 13.2964 9.82468 13.7117C12.1166 14.4235 13.4268 16.5538 13.2729 19.1759C13.1638 21.0596 12.736 22.8578 12.2608 24.6532C12.157 25.0461 12.0522 25.4387 11.9474 25.8313C11.5118 27.4632 11.0763 29.0946 10.707 30.7449C10.4586 31.8536 10.3107 33.0097 10.2804 34.1513C10.2416 35.5355 10.8391 36.126 12.1057 36.3172C13.0281 36.4556 13.9141 36.3225 14.7916 36.0338C15.0122 35.9618 15.2312 35.8826 15.4723 35.7954C15.5886 35.7533 15.7107 35.7092 15.84 35.6633Z" fill="#006EB8"/></svg>'
    );
}

function onclickNavBtn(id)
{
    $('.content .wgPage').hide();

    // SwiperScreenSaver.autoplay.stop();

    $('.content #'+id).fadeIn('fast');

    $('.navmenu').css('box-shadow', '0px -4px 16px rgb(209 184 179 / 20%)');
    
    hideWayfindingResult();
    resetNavBtnDefaultSvg();

    $('.navmenu .navgroup .navbox > .navbtn').css('pointer-events', 'visible');

    isatFloorGuide = false;
    
    switch(id)
    {
        case "wgScreenSaver" : {

            SwiperHome.autoplay.stop();

            myGameInstance.SendMessage('MainCamera', 'QuickReset');

            $('.navmenu').hide();
            $('#wgHome').hide();

            hideWayfindingResult();

            screenOut = false;

            if(!SwiperScreenSaver.initialized) {
                SwiperScreenSaver.init();
                SwiperScreenSaver.autoplay.start();
            }
            else {
                SwiperScreenSaver.autoplay.resume();
            }
            // if (SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].tagName == "VIDEO") {
            //     SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].play();
            // }

            break;
        }

        case "wgHome": {

            $('.wgModal').hide();
            $('#wgWayfindresult').hide();
            SwiperHome.autoplay.start();

            $('.navmenu .navgroup .navbox #navHome').css('pointer-events', 'none');

            $('.header').css({"background":"#F5F5F5"});

            $('.header #pageTitle').html('');
            $('.header .hright').hide();

            $('.header .hleft').css({'width': '100%', 'height': 'auto'});

            $('.header .hleft .logoholder').css({'padding': '60px 34px 0px 60px', 'width': '100%'});
            
            $('.header .hleft .logoholder img').css({'width': '170px', 'height': '160px'});

            $('.navmenu #navHome .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M102.07 6.34998L101.07 5L99.44 4.53003C89.3919 1.5839 78.9808 0.0590723 68.5099 0C46.5099 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6149 122.435 45.0282 123.947 55.5 124C77.5 124 98.45 116.61 117.67 102.06L119.03 101.06L119.49 99.44C129.15 65.63 123.29 34.32 102.07 6.34998Z" fill="#006EB8"/>'+
                '</svg>'
            );

            $('.navmenu #navHome .navlogo').html('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M2 20.7622L18.7274 4.51198C19.4303 3.82934 20.5697 3.82934 21.2726 4.51198L38 20.7622H34.4V34.7514C34.4 35.7171 33.5941 36.5 32.6 36.5H23.6V24.2595H16.4V36.5H7.4C6.40589 36.5 5.6 35.7171 5.6 34.7514V20.7622H2Z" fill="white"/>'+
                '</svg>'
            );

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            break;
        }

        case 'wgFloorGuide': {
            
            isatFloorGuide = true;

            SwiperHome.autoplay.stop();

            $('.navmenu .navgroup .navbox #navFloorGuide').css('pointer-events', 'none');

            $('.header').css({"background":"rgba(202, 212, 1,0.4)"});

            $('.header #pageTitle').html('Floor Guide');

            $('.header .hright').show();

            $('.header .hleft').css({'width': '50%', 'height': '100%'});

            $('.header .hleft .logoholder').css({'padding': '35px 0px 0px 34px', 'width' : ""});
            
            $('.header .hleft .logoholder img').css({'height': '113px', 'width': '120px'});

            $('.navmenu #navFloorGuide .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M102.07 6.34998L101.07 5L99.44 4.53003C89.3919 1.5839 78.9808 0.0590723 68.5099 0C46.5099 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6149 122.435 45.0282 123.947 55.5 124C77.5 124 98.45 116.61 117.67 102.06L119.03 101.06L119.49 99.44C129.15 65.63 123.29 34.32 102.07 6.34998Z" fill="#CAD401"/>'+
                '</svg>'
            );

            $('.navmenu #navFloorGuide .navlogo').html('<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5714 5C28.5714 4.44772 29.0191 4 29.5714 4H31.8571H39C39.5523 4 40 4.44772 40 5V7.17391C40 7.7262 39.5523 8.17391 39 8.17391H34.3571H32.8571V9.67391V11.9395L32.8573 11.9565V14.1304C32.8573 14.5319 32.6207 14.8781 32.2793 15.0373C32.2098 15.0697 32.1359 15.0943 32.0588 15.1101C31.9937 15.1234 31.9262 15.1304 31.8571 15.1304H29.5714L29.5631 15.1304H27.2144H25.7144V16.6304V21.0869C25.7144 21.6392 25.2666 22.0869 24.7144 22.0869H22.4286L22.4203 22.0869H20.0713H18.5713V23.5869V25.8428C18.5715 25.8516 18.5716 25.8605 18.5716 25.8695V28.0434C18.5716 28.5477 18.1984 28.9648 17.713 29.0335C17.6918 29.0365 17.6703 29.0388 17.6486 29.0405C17.6231 29.0424 17.5973 29.0434 17.5713 29.0434H15.2856L15.2772 29.0434H12.9287H11.4287V30.5434V34.9999C11.4287 35.2071 11.3657 35.3996 11.2578 35.5592C11.2488 35.5725 11.2395 35.5856 11.2299 35.5984C11.0475 35.8423 10.7565 36.0001 10.4286 36.0001H1C0.447716 36.0001 0 35.5524 0 35.0001V32.8262C0 32.2739 0.447715 31.8262 1 31.8262H5.643H7.143V30.3262V25.8695C7.143 25.3872 7.48435 24.9847 7.9386 24.8904C7.97209 24.8834 8.0062 24.8781 8.04082 24.8746C8.07442 24.8712 8.1085 24.8695 8.143 24.8695H8.14307H10.4287H12.7856H14.2856V23.3695V18.913C14.2856 18.3941 14.6808 17.9675 15.1866 17.9178C15.215 17.915 15.2437 17.9134 15.2727 17.9131L15.2856 17.913H15.2856H17.5713H19.9286H21.4286V16.413V11.9565C21.4286 11.4732 21.7715 11.07 22.2272 10.9768C22.2882 10.9643 22.3513 10.9574 22.4158 10.9566L22.4286 10.9565H22.4287H24.7144H27.0714H28.5714V9.45649V7.17589L28.5714 7.17391V5Z" fill="white"/>'+
                '</svg>'
            );

            $('#wgFloorGuide .bottomlayout .updownicon').hide();

            $('#wgFloorGuide .bottomlayout .lvlbtngroup').show();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            currentLevel = kioskInfo[0].kioskFloor;
            changeLevelDisplay(currentLevel);
            selectFloorlvlbtn(currentLevel);
            showIconsbtn();

            break;
        }

        case 'wgDirectory': {

            //myGameInstance.SendMessage('MainCamera', 'QuickReset');
            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            $('.navmenu .navgroup .navbox #navDirectory').css('pointer-events', 'none');

            $('.header').css({"background":"rgba(252, 204, 124,0.4)"});

            $('.header #pageTitle').html('Directory');

            $('.header .hright').show();

            $('.header .hleft').css({'width': '50%', 'height': '100%'});

            $('.header .hleft .logoholder').css({'padding': '35px 0px 0px 34px', 'width' : ""});
            
            $('.header .hleft .logoholder img').css({'height': '113px', 'width': '120px'});

            $('.navmenu #navDirectory .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M102.07 6.34998L101.07 5L99.44 4.53003C89.3919 1.5839 78.9808 0.0590723 68.5099 0C46.5099 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6149 122.435 45.0282 123.947 55.5 124C77.5 124 98.45 116.61 117.67 102.06L119.03 101.06L119.49 99.44C129.15 65.63 123.29 34.32 102.07 6.34998Z" fill="#FCCC7C"/>'+
                '</svg>'
            );

            $('.navmenu #navDirectory .navlogo').html('<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8923 0C10.5597 0 6.52299 1.86321 3.71473 5.05017C1.33613 7.75012 0 11.2198 0 14.8923C0 23.1166 6.66798 29.7846 14.8923 29.7846C18.6717 29.7846 22.1223 28.3764 24.7482 26.0561C24.5179 26.7632 24.6837 27.571 25.2455 28.1328L34.5147 37.4023L34.6445 37.5215C35.4464 38.1971 36.646 38.1575 37.4012 37.4024C38.1983 36.6054 38.1984 35.3132 37.4013 34.5161L28.1322 25.2467L28.0024 25.1274C27.4502 24.6622 26.7094 24.5361 26.055 24.7493C28.3754 22.1232 29.7836 18.6721 29.7836 14.8923C29.7836 6.66785 23.1165 0 14.8923 0ZM14.892 4.09955C20.852 4.09955 25.6839 8.93195 25.6839 14.8925C25.6839 20.853 20.852 25.6854 14.892 25.6854C8.93166 25.6854 4.09903 20.8528 4.09903 14.8925C4.09903 12.2273 5.06515 9.71848 6.7902 7.76037C8.82804 5.44773 11.7489 4.09955 14.892 4.09955Z" fill="white"/>'+
                '</svg>'
            );
            
            $('#wgDirectory .keyboard .closebtnholder').trigger('click'); // reset keyboard

            $('#wgDirectory .menuDirectory #btnall').trigger('click'); // default selection

            $('#wgDirectory .searchBarBox .closebtn').hide();

            createCategorybtn('wgDirectory', categoryArray, 3);

            break;
        }

        case 'wgDining': {

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }
            $('.navmenu .navgroup .navbox #navDining ').css('pointer-events', 'none');

            $('.header').css({"background":"rgba(241, 143, 0,0.4)"});

            $('.header #pageTitle').html('Dining');

            $('.header .hright').show();

            $('.header .hleft').css({'width': '50%', 'height': '100%'});

            $('.header .hleft .logoholder').css({'padding': '35px 0px 0px 34px', 'width' : ""});
            
            $('.header .hleft .logoholder img').css({'height': '113px', 'width': '120px'});

            $('.navmenu #navDining .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M102.07 6.34998L101.07 5L99.44 4.53003C89.3919 1.5839 78.9808 0.0590723 68.5099 0C46.5099 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6149 122.435 45.0282 123.947 55.5 124C77.5 124 98.45 116.61 117.67 102.06L119.03 101.06L119.49 99.44C129.15 65.63 123.29 34.32 102.07 6.34998Z" fill="#F18F00"/>'+
                '</svg>'
            );

            $('.navmenu #navDining .navlogo').html('<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C8.93716 0 10.7351 1.06771 12.0621 3.00587C13.3118 4.83131 14 7.23914 14 9.78474C14 12.3303 13.3118 14.7382 12.0621 16.5636C11.2796 17.7072 10.3327 18.5472 9.2901 19.0442L9.84937 36.8704C9.90316 38.5816 8.61147 40 7 40C5.38853 40 4.09684 38.5816 4.15063 36.8704L4.70989 19.0442C3.66726 18.5472 2.72042 17.7072 1.93789 16.5636C0.68821 14.7382 0 12.3311 0 9.78474C0 7.23836 0.68821 4.83131 1.93789 3.00587C3.26495 1.06771 5.06284 0 7 0ZM29.6006 1.17188C29.6006 0.525 30.1383 0 30.8007 0C31.4632 0 32.0008 0.525 32 1.17188V15.5211C32 16.8078 31.3416 18.0094 30.2455 18.7227C29.1046 19.4648 28.4414 20.7336 28.4942 22.0719L29.0774 36.8773C29.1446 38.582 27.7477 40 26.0004 40C24.2531 40 22.8562 38.582 22.9234 36.8773L23.5066 22.0719C23.5586 20.7336 22.8954 19.4656 21.7545 18.7227C20.6584 18.0094 20 16.8078 20 15.5211V1.17188C20 0.525 20.5376 0 21.2001 0C21.8625 0 22.4002 0.525 22.4002 1.17188V12.2656H24.8003V1.17188C24.8003 0.525 25.338 0 26.0004 0C26.6628 0 27.2005 0.525 27.2005 1.17188V12.2656H29.6006V1.17188Z" fill="white"/>'+
                '</svg>'
            );

            $('#wgDining .keyboard .closebtnholder').trigger('click'); // reset keyboard

            createSubCategorybtn('wgDining', diningsubcategory, 3);

            break;
        }

        case 'wgHappenings': {

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            $('.navmenu .navgroup .navbox #navHappenings').css('pointer-events', 'none');

            $('.header').css({"background":"rgba(198, 122, 174,0.4)"});

            $('.header #pageTitle').html('Happenings');

            $('.header .hright').show();

            $('.header .hleft').css({'width': '50%', 'height': '100%'});

            $('.header .hleft .logoholder').css({'padding': '35px 0px 0px 34px', 'width' : ""});
            
            $('.header .hleft .logoholder img').css({'height': '113px', 'width': '120px'});

            $('.navmenu #navHappenings .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M102.07 6.34998L101.07 5L99.44 4.53003C89.3919 1.5839 78.9808 0.0590723 68.5099 0C46.5099 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6149 122.435 45.0282 123.947 55.5 124C77.5 124 98.45 116.61 117.67 102.06L119.03 101.06L119.49 99.44C129.15 65.63 123.29 34.32 102.07 6.34998Z" fill="#C67AAE"/>'+
                '</svg>'
            );

            $('.navmenu #navHappenings .navlogo').html('<svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M32 40H4C1.79086 40 0 38.2091 0 36V8C0 5.79086 1.79086 4 4 4H8V0H12V4H24V0H28V4H32C34.2091 4 36 5.79086 36 8V36C36 38.2091 34.2091 40 32 40ZM4 16V36H32V16H4ZM4 8V12H32V8H4ZM28 32H24V28H28V32ZM20 32H16V28H20V32ZM12 32H8V28H12V32ZM28 24H24V20H28V24ZM20 24H16V20H20V24ZM12 24H8V20H12V24Z" fill="white"/>'+
                '</svg>'
            );

            onclickHappeningsBtn('all');

            break;
        }

        case 'wgTransport': {

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            $('.navmenu .navgroup .navbox #navTransport').css('pointer-events', 'none');

            $('.header').css({"background":"rgba(193, 192, 192,0.4)"});

            $('.header #pageTitle').html('Transport');
            
            $('.header .hright').show();

            $('.header .hleft').css({'width': '50%', 'height': '100%'});

            $('.header .hleft .logoholder').css({'padding': '35px 0px 0px 34px', 'width' : ""});
            
            $('.header .hleft .logoholder img').css({'height': '113px', 'width': '120px'});

            $('.navmenu #navTransport .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M102.07 6.34998L101.07 5L99.44 4.53003C89.3919 1.5839 78.9808 0.0590723 68.5099 0C46.5099 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6149 122.435 45.0282 123.947 55.5 124C77.5 124 98.45 116.61 117.67 102.06L119.03 101.06L119.49 99.44C129.15 65.63 123.29 34.32 102.07 6.34998Z" fill="#C1C0C0"/>'+
                '</svg>'
            );

            $('.navmenu #navTransport .navlogo').html('<svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.88451 20.9246H30.8042V7.99292H5.88451V20.9246ZM27.4707 32.2794C26.0239 32.2794 24.8465 31.1165 24.8465 29.683C24.8465 28.2515 26.0218 27.0906 27.4707 27.0906C28.9195 27.0906 30.0928 28.2515 30.0928 29.683C30.0928 31.1165 28.9195 32.2794 27.4707 32.2794ZM9.38472 32.2794C7.9359 32.2794 6.76052 31.1165 6.76052 29.683C6.76052 28.2515 7.9359 27.0906 9.38472 27.0906C10.8315 27.0906 12.0069 28.2515 12.0069 29.683C12.0069 31.1165 10.8315 32.2794 9.38472 32.2794ZM9.12152 6.46024H27.5705V3.69824H9.12152V6.46024ZM35.1247 9.78154C34.7941 6.58748 34.2697 4.10208 33.4371 3.12488C30.0069 -0.892938 5.98097 -1.18771 3.2527 3.12488C2.58339 4.18082 2.11609 6.65814 1.80388 9.78558C0.789709 9.9047 0 10.7486 0 11.7824V15.6932C0 16.5634 0.557081 17.2963 1.33455 17.583C1.14885 23.743 1.29986 30.1715 1.57534 33.3676C1.57534 35.8328 3.2527 35.4249 3.2527 35.4249H4.82192V38.09C4.82192 39.146 5.92179 40 7.27675 40C8.63578 40 9.73566 39.146 9.73566 38.09V35.4249H28.0051V38.09C28.0051 39.146 29.107 40 30.464 40C31.821 40 32.9209 39.146 32.9209 38.09V35.4249H33.4371C33.4371 35.4249 35.4083 35.6935 35.5349 34.5305C35.5349 31.3425 35.7389 24.278 35.5716 17.6092C36.398 17.3528 37 16.5997 37 15.6932V11.7824C37.002 10.7244 36.1736 9.86634 35.1247 9.78154Z" fill="white"/>'+
                '</svg>'
            );

            onclickTransportBtn('btnbus');

            break;
        }

        case 'wgConcierge': {

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            $('.navmenu .navgroup .navbox #wgConcierge').css('pointer-events', 'none');

            $('.header').css({"background":"rgba(133, 132, 132,0.4)"});

            $('.header #pageTitle').html('Information');
            
            $('.header .hright').show();

            $('.header .hleft').css({'width': '50%', 'height': '100%'});

            $('.header .hleft .logoholder').css({'padding': '35px 0px 0px 34px', 'width' : ""});
            
            $('.header .hleft .logoholder img').css({'height': '113px', 'width': '120px'});

            $('.navmenu #navConcierge .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M102.07 6.34998L101.07 5L99.44 4.53003C89.3919 1.5839 78.9808 0.0590723 68.5099 0C46.5099 0 25.51 7.38 6.32996 22L4.97995 23L4.51996 24.62C-5.14004 58.38 0.719965 89.71 21.93 117.69L22.93 119.04L24.56 119.51C34.6149 122.435 45.0282 123.947 55.5 124C77.5 124 98.45 116.61 117.67 102.06L119.03 101.06L119.49 99.44C129.15 65.63 123.29 34.32 102.07 6.34998Z" fill="#858484"/>'+
                '</svg>'
            );

            $('.navmenu #navConcierge .navlogo').html('<svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M8.78648 5.4846C9.25984 7.27608 11.2197 8.65441 13.3074 8.6666C14.3242 8.67147 15.2856 8.37411 16.1328 7.79036C18.2008 6.36572 18.625 3.61879 17.0328 1.71886C15.834 0.28934 14.2602 -0.217635 12.427 0.0833812C9.77501 0.517234 8.12378 2.98142 8.78648 5.4846Z" fill="white"/>'+
                '<path d="M15.84 35.6633C15.7951 35.8607 15.752 36.0528 15.7097 36.2409C15.593 36.7599 15.4832 37.2486 15.3648 37.7343C15.3406 37.8332 15.2594 37.9584 15.1782 37.9914C14.7031 38.1782 14.2338 38.3844 13.7645 38.5906C12.5648 39.1177 11.3653 39.6447 10.0707 39.8475C8.37388 40.1138 6.67947 40.0993 5.10747 39.2464C3.4676 38.3565 2.53919 36.9065 2.47738 34.8711C2.42041 32.9609 2.86886 31.143 3.33065 29.3251C3.42811 28.9413 3.52582 28.5575 3.62354 28.1737C4.19651 25.9233 4.76975 23.6719 5.29049 21.4064C5.46623 20.6391 5.48563 19.806 5.45169 19.0084C5.39109 17.6467 4.79477 17.0732 3.53427 16.9981C2.63131 16.944 1.75016 17.0535 0.896899 17.3909C0.70633 17.4662 0.512749 17.5343 0.292365 17.6118C0.20018 17.6442 0.103305 17.6783 0 17.7152C0.0418352 17.5277 0.0826534 17.3432 0.122953 17.1611C0.247234 16.5993 0.366697 16.0594 0.495718 15.523C0.513899 15.4452 0.615709 15.3608 0.695702 15.3331C1.17305 15.1625 1.64906 14.9857 2.12512 14.8088C3.33765 14.3582 4.55073 13.9075 5.78742 13.5601C7.11216 13.1896 8.4866 13.2964 9.82468 13.7117C12.1166 14.4235 13.4268 16.5538 13.2729 19.1759C13.1638 21.0596 12.736 22.8578 12.2608 24.6532C12.157 25.0461 12.0522 25.4387 11.9474 25.8313C11.5118 27.4632 11.0763 29.0946 10.707 30.7449C10.4586 31.8536 10.3107 33.0097 10.2804 34.1513C10.2416 35.5355 10.8391 36.126 12.1057 36.3172C13.0281 36.4556 13.9141 36.3225 14.7916 36.0338C15.0122 35.9618 15.2312 35.8826 15.4723 35.7954C15.5886 35.7533 15.7107 35.7092 15.84 35.6633Z" fill="white"/>'+
                '</svg>'
            );

            $('#wgConcierge #infoContainer .infoRow .wayfindingbtn .btnholder').css('background', '#CAD401');

            break;
        }
    }

}

function createCategorybtn(content, categoryArray, numRow) {

    $('#' + content+ ' .menuCategory  #swiperCategory .swiper-wrapper').html('');

    if(categoryArray.length == 0) {
        return "Empty category";
    }

    var totalBox = numRow * 4;
    var numslides  = Math.floor(categoryArray.length / totalBox);
    var numLeftCat = categoryArray.length % totalBox;
    var catIndex = 0;

    if(numslides > 0) {

        for(var i=1; i<=numslides; i++) {

        var slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        for(catIndex; catIndex<totalBox*i; catIndex++) {

            if(catIndex % 4 == 0) {
                var catrow = document.createElement('div');
                catrow.className = 'catrow';
            }

            var catcol = document.createElement('div');
            catcol.className = "catcol";

            var catcard = document.createElement('div');
            catcard.className = 'catCard';
            catcard.setAttribute('id', categoryArray[catIndex].id);
            catcard.setAttribute("onclick", "onclickCatBtn(\""+content+"\", \""+categoryArray[catIndex].id+"\")");

            var cattext = document.createElement('p');
            cattext.className = 'cattxt';
            cattext.innerHTML = categoryArray[catIndex].catName;

            catcard.appendChild(cattext);
            catcol.appendChild(catcard);
            catrow.appendChild(catcol);

            // console.log(catrow);

            if((catIndex + 1) % 4 == 0) {
                slide.appendChild(catrow);
            }

        }
        
        $('#' + content+ ' .menuCategory  #swiperCategory .swiper-wrapper').append(slide);
        
        }

    }

    if(numLeftCat!=0){

        //Create slide for left over category
        var slide = document.createElement("div");
        slide.className = "swiper-slide";

        for(var j=0;j<numLeftCat;j++)
        {
            if (catIndex % 4 == 0) {

                if (j != 0) {
                    slide.appendChild(catrow);
                }

                var catrow = document.createElement("div");
                catrow.className = "catrow";

            }

            var catcol = document.createElement("div");
            catcol.className = "catcol";

            var catcard = document.createElement("div");
            catcard.className = "catCard";
            catcard.setAttribute('id', categoryArray[catIndex].id);
            catcard.setAttribute("onclick", "onclickCatBtn(\""+content+"\", \""+categoryArray[catIndex].id+"\")");

            var cattext = document.createElement('p');
            cattext.className = 'cattxt';
            
            cattext.innerHTML = categoryArray[catIndex].catName;

            catcard.appendChild(cattext);
            catcol.appendChild(catcard);
            catrow.appendChild(catcol);

            catIndex++;

        }

        slide.appendChild(catrow);

        //Fill in empty space
        var blankRow = numRow-Math.floor(numLeftCat/4)-(numLeftCat%4);

        if(blankRow!=0)
        {
            for(var num=0;num<blankRow;num++)
            {
                var catrow = document.createElement("div");
                catrow.className = "catrow";

                var catcol = document.createElement("div");
                catcol.className = "catcol";

                catrow.appendChild(catcol);

                slide.appendChild(catrow);
            }
        }

        $('#' + content+ ' .menuCategory  #swiperCategory .swiper-wrapper').append(slide);

    }

    // SwiperCategory.init();
    // SwiperCategory.update();

}

// create subcategory button for dining
function createSubCategorybtn(content, categoryArray, numRow) {

    $('#' + content+ ' .menuCategory  #swiperSubCategory .swiper-wrapper').html('');

    if(categoryArray.length == 0) {
        return "Empty category";
    }

    var totalBox = numRow * 4;
    var numslides  = Math.floor(categoryArray.length / totalBox);
    var numLeftCat = categoryArray.length % totalBox;
    var catIndex = 0;

    if(numslides > 0) {

        for(var i=1; i<=numslides; i++) {

        var slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        for(catIndex; catIndex<totalBox*i; catIndex++) {

            if(catIndex % 4 == 0) {
                var catrow = document.createElement('div');
                catrow.className = 'catrow';
            }

            var catcol = document.createElement('div');
            catcol.className = "catcol";

            var catcard = document.createElement('div');
            catcard.className = 'catCard';
            catcard.setAttribute('id', categoryArray[catIndex].id);
            catcard.setAttribute("onclick", "onclickCatBtn(\""+content+"\", \""+categoryArray[catIndex].id+"\")");

            var cattext = document.createElement('p');
            cattext.className = 'cattxt';
            // var string = categoryArray[catIndex].name.split('and');
            // if(string.length > 1) {
            //     var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1) + ' & ' + string[1].charAt(0).toUpperCase() + string[1].slice(1);
            // }
            // else {
            //     var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1);
            // }
            
            cattext.innerHTML = categoryArray[catIndex].name;

            catcard.appendChild(cattext);
            catcol.appendChild(catcard);
            catrow.appendChild(catcol);

            if((catIndex + 1) % 4 == 0) {
                slide.appendChild(catrow);
            }

        }
        $('#' + content+ ' .menuCategory  #swiperSubCategory .swiper-wrapper').append(slide);

    }

    }

    if(numLeftCat!=0){

        //Create slide for left over category
        var slide = document.createElement("div");
        slide.className = "swiper-slide";

        for(var j=0;j<numLeftCat;j++)
        {
            if (catIndex % 4 == 0) {

                if (j != 0) {
                    slide.appendChild(catrow);
                }

                var catrow = document.createElement("div");
                catrow.className = "catrow";

            }

            var catcol = document.createElement("div");
            catcol.className = "catcol";

            var catcard = document.createElement("div");
            catcard.className = "catCard";
            catcard.setAttribute('id', categoryArray[catIndex].id);
            catcard.setAttribute("onclick", "onclickCatBtn(\""+content+"\", \""+categoryArray[catIndex].id+"\")");

            var cattext = document.createElement('p');
            cattext.className = 'cattxt';
            
            cattext.innerHTML = categoryArray[catIndex].name;

            catcard.appendChild(cattext);
            catcol.appendChild(catcard);
            catrow.appendChild(catcol);

            catIndex++;

        }

        slide.appendChild(catrow);

        //Fill in empty space
        var blankRow = numRow-Math.floor(numLeftCat/4)-(numLeftCat%4);

        if(blankRow!=0)
        {
            for(var num=0;num<blankRow;num++)
            {
                var catrow = document.createElement("div");
                catrow.className = "catrow";

                var catcol = document.createElement("div");
                catcol.className = "catcol";

                catrow.appendChild(catcol);

                slide.appendChild(catrow);
            }
        }

        $('#' + content+ ' .menuCategory  #swiperSubCategory .swiper-wrapper').append(slide);

    }


}

// All Swiper
function createScreenSaverSwiper(channelArray) {

    //var swiperwrapper = document.querySelector('#skScreenSaver #SwiperScreenSaver #swiperScreensaver .swiper-wrapper');
    for(var c=0; c<channelArray.chnZone.length; c++){

        $('#wgScreenSaver #SwiperScreenSaver .swiper-wrapper').html("");
        var swiperwrapper = document.querySelector('#wgScreenSaver #SwiperScreenSaver .swiper-wrapper');

        // get channel data 
        fittype = channelArray.chnZone[c].zoneFitType;
        var bgColor = channelArray.chnZone[c].zoneBgColor;

        var sequence = new Array();

        for(var j=0; j< channelArray.chnZone[c].zoneSequence.length;j++) {
            sequence.push(getSequencebyId(channelArray.chnZone[c].zoneSequence[j]));
        }

        sequence.sort(sortByOrder);

        for(var i=0; i<sequence.length; i++) {
    
            if(checkDateRange(sequence[i].startDate, sequence[i].endDate)) {
                
                if(checkDaysRange(sequence[i].days)) {
    
                    if(checkTimeRange(sequence[i].startTime, sequence[i].endTime)) {
    
                        var pylist = getPlaylistbyId(sequence[i].playlist);
                        var ctnArray = new Array();
    
                        for(var j=0; j<pylist.pylistSeq.length; j++) {
                            ctnArray.push(getContentbyId(pylist.pylistSeq[j]));
                        }

                        ctnArray.sort(sortContentByOrder);
    
                        for(var k=0; k<ctnArray.length; k++) {
    
                            var media = getMediabyId(ctnArray[k].media);
    
                            var swiperslide = document.createElement('div');
                            swiperslide.className = 'swiper-slide';
                            swiperslide.style = "background-color:" + bgColor;
                            swiperslide.style = "width:100%";

                            var img = document.createElement('img');
    
                            if( media.mediaType.substr(0,5) == "image") {
                                swiperslide.setAttribute('data-swiper-autoplay', ctnArray[k].contentDuration * 1000);
                            }
                            else {
                                swiperslide.setAttribute('data-swiper-autoplay', ctnArray[k].contentDuration * 1000);
                            }
    
                            var divimg = document.createElement('div');
                            divimg.className = fittype + 'Img';
    
                            var mediaName = media.mediaServerUrl.split("/");
    
                            if(media.mediaType.substr(0,5) == "image") {
                                var img = document.createElement('img');
                                img.id = media.id;
                                img.src = '../commonfile/media/' + mediaName[mediaName.length - 1];
                                img.dataset.delay = ctnArray[k].contentDuration * 1000;
                                if(k === 0) {
                                    img.classList.add('active');
                                    img.style.opacity = 1;
                                }
                                divimg.appendChild(img);
    
                            }
                            else {
                                var video = document.createElement('video');
                                video.id = media.id;
                                video.src = '../commonfile/media/' + mediaName[mediaName.length - 1];
                                video.dataset.delay = ctnArray[k].contentDuration * 1000;
                                if(k === 0) {
                                    video.classList.add('active');
                                    video.style.opacity = 1;
                                }
                                divimg.appendChild(video);
                            }
    
                            // divimg.appendChild(img);

                            swiperslide.append(divimg);
                            swiperwrapper.appendChild(swiperslide);
                        }
    
                    }
                }
            }
        }
    }
}

function createHomeSwiper(happeningsArray)
{
    //Loop thru all Happenings
    $('#swiperHome .swiper-wrapper').html("");

    for(var i=0; i<happeningsArray.length; i++) {

        var slide = document.createElement("div");
        slide.className = "swiper-slide";

        var itemHome = document.createElement("div");
        itemHome.className = "itemHome";

        var imgholder = document.createElement("div");
        imgholder.className = "imgholder";
        var img = document.createElement("img");
        if (happeningsArray[i].hpnImgUrl != null || happeningsArray[i].hpnImgUrl != '') {
            var imgurl = happeningsArray[i].hpnImgUrl.split('/');
            var imgname = imgurl[imgurl.length - 1];
            var imgdetail = getHappeningsImage(imgname);
            if(imgdetail == undefined){
                img.src = './asset/error/errorimg.jpg';
            }
            else {
                img.src = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
            }
        }
        else {
            img.src = './asset/error/errorimg.jpg';
        }

        var titleholder = document.createElement("div");
        titleholder.className = "titleholder";

        var title = document.createElement("p");
        title.className = "title";
        title.innerHTML = happeningsArray[i].hpnTitle;

        var detailholder = document.createElement("div");
        detailholder.className = "detailholder";

        var datelocationbox = document.createElement("div");
        datelocationbox.className = "datelocationbox";

        var dateholder = document.createElement("div");
        dateholder.className = 'dateholder';
        dateholder.innerHTML = '<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                                '<path d="M24.8889 30H3.11111C1.39289 30 0 28.6569 0 27V6C0 4.34315 1.39289 3 3.11111 3H6.22222V0H9.33333V3H18.6667V0H21.7778V3H24.8889C26.6071 3 28 4.34315 28 6V27C28 28.6569 26.6071 30 24.8889 30ZM3.11111 12V27H24.8889V12H3.11111ZM3.11111 6V9H24.8889V6H3.11111Z" fill="#222222"/>'+'</svg>'
        
        var daterange = document.createElement("p");
        daterange.className = 'daterange';

        if(happeningsArray[i].hpnStartDate == "" && happeningsArray[i].hpnEndDate == "") {
            daterange.innerHTML = " - ";
        }
        else if(happeningsArray[i].hpnStartDate == "") {
            var hpnEndDate = convertToMonth(Number(happeningsArray[i].hpnEndDate));
            daterange.innerHTML = hpnEndDate;
        }
        else if(happeningsArray[i].hpnEndDate == "") {
            var hpnStartDate = convertToMonth(Number(happeningsArray[i].hpnStartDate));
            daterange.innerHTML =  hpnStartDate;
        }
        else {
            var hpnStartDate = convertToMonth(Number(happeningsArray[i].hpnStartDate));
            var hpnEndDate = convertToMonth(Number(happeningsArray[i].hpnEndDate));
            daterange.innerHTML = hpnStartDate + ' - ' + hpnEndDate;
        }

        var descriptionholder = document.createElement('div');
        descriptionholder.className = "descriptionholder";
        descriptionholder.innerHTML = decodeHTML(happeningsArray[i].hpnDescription);

        var qrcodeholder = document.createElement("div");
        qrcodeholder.className = 'qrcodeholder';

        var qrholder = document.createElement("div");
        qrholder.className = "qrholder";

        var qrcode = document.createElement("div");
        qrcode.className ="qrcode";

        new QRCode(qrcode, {
            text: happeningsArray[i].hpnQrCode,
            width: 80,
            height: 80,
        })

        var qrtext = document.createElement("p");
        qrtext.className = "qrtext";
        qrtext.innerHTML = "FIND OUT MORE";

        qrholder.appendChild(qrcode);
        qrcodeholder.appendChild(qrholder);
        qrcodeholder.appendChild(qrtext);
        // locationholder.appendChild(location);
        dateholder.appendChild(daterange);
        datelocationbox.appendChild(dateholder);
        // datelocationbox.appendChild(locationholder);
        detailholder.appendChild(datelocationbox);
        if(happeningsArray[i].hpnTypes == "event") {
            if(happeningsArray[i].hpnQrCode == null || happeningsArray[i].hpnQrCode == ""){
            
            }
            else {
                detailholder.appendChild(qrcodeholder);
            }
        }
        titleholder.appendChild(title);
        imgholder.appendChild(img);
        itemHome.appendChild(imgholder);
        itemHome.appendChild(titleholder);
        itemHome.appendChild(detailholder);
        itemHome.appendChild(descriptionholder);
        slide.appendChild(itemHome);

        $('#swiperHome .swiper-wrapper').append(slide);
    }

    SwiperHome.init();
    SwiperHome.update();
}

function createDirectorySwiper(tenantArray, numRow)
{
    $('#wgDirectory #swiperDirectory .swiper-wrapper').html("");

    if(tenantArray.length==0)
    {
        return "No tenant is found";
    }

    var totalBox = numRow*2;
    var numSlides = Math.floor(tenantArray.length/totalBox);
    var numLeftTenant = tenantArray.length % totalBox;
    var tenantIndex = 0;

    //Create slide for full tenant in page
    if(numSlides>0)
    {
        for(var i=1; i<=numSlides; i++)
        {
            var slide = document.createElement("div");
            slide.className = "swiper-slide";

            for(tenantIndex; tenantIndex<totalBox*i; tenantIndex++)
            {
                if(tenantIndex % 2 == 0)
                {
                    var drow = document.createElement("div");
                    drow.className = "drow";
                }

                var dcol = document.createElement("div");
                dcol.className = "dcol";

                var dcard = document.createElement("div");
                dcard.className = "dcard";
                dcard.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenantIndex].id+"\")");

                var dcardleft = document.createElement("div");
                dcardleft.className = "dcardleft";

                var newobj = new Object();
                newobj.FIT_TYPE = "stretchImg";
                //Tenant Thumbnail URL
                if (tenantArray[tenantIndex].storeThumbnailUrl !="" || tenantArray[tenantIndex].storeThumbnailUrl != null) {
                    var imgurl = tenantArray[tenantIndex].storeThumbnailUrl.split('/');
                    var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
                    newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
                }
                else {
                    newobj.MAIN_URL = './asset/error/errorimg.jpg';
                }

                // dcardleft.appendChild(createImg(newobj));

                var dcardright = document.createElement("div");
                dcardright.className = "dcardright";

                var shopnameholder = document.createElement("div");
                shopnameholder.className = "shopnameholder";

                var nametxt = document.createElement("p");
                nametxt.className = "nametxt";
                //Tenant Name (Store Name)
                nametxt.innerHTML = tenantArray[tenantIndex].storeNameEng;

                var shopdetail = document.createElement("div");
                shopdetail.className = "shopdetail";

                var shopunitholder = document.createElement("div");
                shopunitholder.className = "shopunitholder";

                // hala icon 
                var halalicon = document.createElement('div');
                halalicon.className = "halalicon";
                halalicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none"><g clip-path="url(#clip0_2162_5811)">'
                + '<path d="M17.2796 3.15443C17.2522 3.18024 17.2235 3.20605 17.1948 3.23186L17.1732 3.25194C17.1459 3.27631 17.1186 3.30069 17.0913 3.32363H17.0899C17.064 3.34801 17.0367 3.36951 17.0108 3.39246L16.9864 3.41253C16.9576 3.43691 16.9289 3.45985 16.8987 3.48279C16.8729 3.50286 16.847 3.52294 16.8211 3.54301L16.7852 3.57025L16.7679 3.58316C16.7478 3.59893 16.7263 3.6147 16.7061 3.62904L16.6702 3.65485C16.6444 3.67349 16.6199 3.6907 16.5941 3.70934L16.5811 3.71794C16.5524 3.73802 16.5222 3.75809 16.492 3.77816C16.4719 3.79107 16.4518 3.80541 16.4317 3.81831C16.413 3.83122 16.3943 3.84269 16.3742 3.85559H16.3699C16.3497 3.87137 16.3296 3.88284 16.3081 3.89574C16.265 3.92298 16.2218 3.94879 16.1773 3.9746C16.1586 3.98607 16.1399 3.99611 16.1212 4.00758C15.9933 4.08071 15.8626 4.15097 15.7289 4.21549C15.7131 4.22266 15.6987 4.22983 15.6829 4.23843C15.6686 4.2456 15.6528 4.25277 15.6384 4.25994C15.6211 4.26855 15.6025 4.27572 15.5852 4.28432C14.7431 3.54158 13.842 3.12002 12.9999 3.12002C12.1577 3.12002 11.2567 3.54158 10.4145 4.28432C10.3958 4.27715 10.3786 4.26855 10.3599 4.25994C10.222 4.19542 10.0869 4.12803 9.95466 4.05347C9.93885 4.04486 9.92448 4.03626 9.90867 4.02766L9.87562 4.00902C9.85837 3.99898 9.84112 3.98894 9.82244 3.97891C9.77789 3.9531 9.73334 3.92585 9.68879 3.89861C9.64712 3.8728 9.60688 3.84699 9.56664 3.82118C9.54652 3.80828 9.5264 3.79537 9.50628 3.78103C9.4761 3.76096 9.44736 3.74088 9.41718 3.72081L9.40425 3.71221C9.37838 3.695 9.35251 3.67636 9.32808 3.65772L9.29215 3.63191C9.2706 3.61757 9.25048 3.6018 9.23036 3.58603L9.21311 3.57312L9.17719 3.54588C9.15132 3.5258 9.12545 3.50573 9.09958 3.48566C9.0694 3.46271 9.04066 3.43834 9.01192 3.4154L8.98749 3.39532C8.96162 3.37382 8.93432 3.35087 8.90845 3.32937H8.90701C8.87971 3.30356 8.85096 3.28061 8.8251 3.25624L8.80354 3.23616C8.7748 3.21035 8.74749 3.18455 8.71875 3.15874C10.0265 2.57946 11.4751 2.25684 12.9984 2.25684C14.5218 2.25684 15.9704 2.57946 17.2781 3.15874L17.2796 3.15443Z" fill="#C5E5D0"/>'
                + '<path d="M7.1049 14.865C7.08478 14.8794 7.0661 14.8951 7.04598 14.9095C7.02586 14.9238 7.00718 14.9396 6.98706 14.9539C6.94826 14.984 6.90946 15.0141 6.87066 15.0443L6.86491 15.0486C6.82754 15.0772 6.79162 15.1073 6.75569 15.1375C6.71832 15.169 6.67952 15.2005 6.64216 15.2321C6.60767 15.2622 6.57318 15.2909 6.53869 15.321C6.49557 15.3583 6.4539 15.3955 6.41222 15.4328C6.37773 15.4629 6.34468 15.493 6.31163 15.5246C6.27713 15.5561 6.24264 15.5891 6.20815 15.6221C6.19378 15.6364 6.17798 15.6508 6.1636 15.6651C6.14636 15.6809 6.12911 15.6981 6.11187 15.7153L6.0975 15.7296C6.06301 15.764 6.02708 15.7985 5.99403 15.8329C5.95954 15.8673 5.92648 15.9017 5.89343 15.9361C5.87044 15.9605 5.84601 15.9849 5.82301 16.0107C5.80864 16.025 5.79571 16.0408 5.78134 16.0551C5.75834 16.0809 5.73535 16.1053 5.71092 16.1311C5.63619 16.2128 5.56433 16.296 5.49248 16.3792C5.47667 16.3978 5.4623 16.415 5.44649 16.4337C5.43068 16.4523 5.41631 16.4709 5.4005 16.4882C5.3732 16.5211 5.34733 16.5541 5.32003 16.5857C5.30278 16.6072 5.28554 16.6287 5.26829 16.6502L5.25105 16.6703C5.2338 16.6932 5.21656 16.7147 5.19931 16.7376C5.17632 16.7678 5.15332 16.7979 5.13033 16.828C5.11165 16.8524 5.0944 16.8767 5.07572 16.9011C5.00387 16.9972 4.93488 17.0961 4.86734 17.195C4.84578 17.2266 4.82423 17.2581 4.80267 17.2911C4.79405 17.304 4.78543 17.3169 4.7768 17.3313L4.75237 17.3685C4.72794 17.4058 4.70351 17.4445 4.67908 17.4833C4.6604 17.5119 4.64315 17.5406 4.62591 17.5693C4.60435 17.6037 4.58423 17.6367 4.56411 17.6711C4.54399 17.7055 4.52387 17.7385 4.50375 17.7729C4.4937 17.7887 4.48507 17.8059 4.47501 17.8216C4.46495 17.8388 4.45489 17.8561 4.44483 17.8733C4.4319 17.8948 4.4204 17.9177 4.40747 17.9392L4.40028 17.9521C4.38735 17.9751 4.37442 17.998 4.36148 18.021C4.34711 18.0453 4.33418 18.0711 4.32124 18.0955C4.31118 18.1156 4.29969 18.1342 4.28963 18.1543C4.28244 18.1686 4.27382 18.183 4.26663 18.1973C4.25657 18.216 4.24795 18.2346 4.23789 18.2532C4.22783 18.2733 4.21633 18.2934 4.20771 18.3135C4.19478 18.3378 4.18328 18.3608 4.17178 18.3852C4.1646 18.3981 4.15885 18.4124 4.15167 18.4253C4.14304 18.4411 4.13586 18.4583 4.12723 18.4755C3.06378 16.8323 2.44727 14.8751 2.44727 12.7759H6.96838C6.96838 12.7988 6.96838 12.8218 6.96838 12.8447C6.96838 13.5373 7.01293 14.214 7.09916 14.8665L7.1049 14.865Z" fill="#C5E5D0"/>'
                + '<path d="M7.6297 8.76228C7.26324 9.87209 7.02755 11.0952 6.983 12.3842H2.46045C2.46332 12.3154 2.4662 12.2451 2.47051 12.1763C2.47338 12.1333 2.47626 12.0903 2.47913 12.0473C2.48201 12.0042 2.48488 11.9612 2.48919 11.9182C2.49638 11.8322 2.50356 11.7461 2.51362 11.6616C2.5165 11.6271 2.52081 11.5927 2.52512 11.5597C2.52943 11.5253 2.53374 11.4909 2.53805 11.4579C2.54668 11.3891 2.5553 11.3217 2.56536 11.2529C2.56823 11.2357 2.56967 11.2199 2.57254 11.2027C2.57542 11.1855 2.57829 11.1697 2.57973 11.1525C2.58548 11.1181 2.58979 11.0851 2.59554 11.0522C2.60128 11.0192 2.60703 10.9848 2.61278 10.9518C2.61853 10.9188 2.62428 10.8873 2.63003 10.8543C2.6329 10.8385 2.63578 10.8213 2.63865 10.8055C2.64152 10.7855 2.64583 10.7668 2.65015 10.7467C2.65446 10.7224 2.65877 10.698 2.66452 10.6751V10.6708L2.66883 10.655V10.6521C2.67458 10.6234 2.68176 10.5933 2.68751 10.5646C2.69613 10.5245 2.70476 10.4829 2.71482 10.4428C2.722 10.4127 2.72919 10.3811 2.73637 10.351C2.74356 10.3209 2.75074 10.2908 2.75793 10.2592C2.76655 10.2234 2.77517 10.1875 2.78523 10.1503C2.79242 10.1216 2.7996 10.0929 2.80823 10.0628C2.81685 10.0298 2.82547 9.99827 2.83409 9.96529C2.83984 9.94522 2.84559 9.92514 2.85134 9.90507C2.85709 9.88499 2.86284 9.86492 2.86859 9.84485C2.87433 9.82477 2.88008 9.8047 2.88583 9.78462C2.89158 9.76455 2.89733 9.74448 2.90451 9.7244C2.91601 9.68425 2.92894 9.64411 2.94188 9.60539C2.94763 9.58532 2.95481 9.56524 2.96056 9.54517C2.97637 9.49642 2.99218 9.4491 3.00798 9.40035C3.01804 9.37167 3.02667 9.34299 3.03673 9.31432C3.04679 9.28707 3.05541 9.25983 3.06547 9.23259C3.07553 9.20534 3.08415 9.1781 3.09565 9.15086C3.10571 9.12361 3.11577 9.0978 3.12583 9.07056C3.14595 9.01607 3.16606 8.96302 3.18762 8.90997C3.19768 8.88272 3.20918 8.85692 3.21924 8.82967C3.2566 8.7379 3.2954 8.64614 3.33564 8.5558C3.34283 8.5386 3.35001 8.52283 3.3572 8.50562C3.36438 8.48841 3.37157 8.47264 3.38019 8.45543C3.40606 8.39808 3.43193 8.34216 3.45923 8.2848C3.4736 8.25469 3.48798 8.22458 3.50235 8.1959C3.51672 8.16579 3.53109 8.13712 3.54546 8.107C3.56702 8.06256 3.59001 8.01811 3.61157 7.97509C3.62306 7.95358 3.63456 7.93064 3.64606 7.90913C3.65755 7.88762 3.66905 7.86468 3.68055 7.84317C3.71073 7.78582 3.74234 7.72703 3.7754 7.66968C3.78689 7.64817 3.79839 7.62809 3.81132 7.60659C3.83 7.57217 3.85012 7.53919 3.86881 7.50622C3.87599 7.49331 3.88461 7.47897 3.8918 7.46607C3.9191 7.41875 3.94641 7.37287 3.97515 7.32698C3.99096 7.29974 4.00821 7.27393 4.02401 7.24669C4.03982 7.22088 4.05563 7.19507 4.07287 7.16926C4.09156 7.13915 4.11024 7.11047 4.13036 7.08036C4.14473 7.05742 4.16054 7.03304 4.17635 7.0101C4.19359 6.98429 4.21084 6.95705 4.22808 6.93124C4.25826 6.88535 4.28988 6.8409 4.32149 6.79502C4.33586 6.77351 4.35167 6.75344 4.36604 6.73193C4.38472 6.70612 4.40197 6.68031 4.42065 6.6545C4.44652 6.61722 4.47383 6.58137 4.49969 6.54553C4.52556 6.50968 4.55287 6.47383 4.58017 6.43799C4.63765 6.49821 4.69514 6.55843 4.75262 6.61865C4.76987 6.63586 4.78711 6.6545 4.80436 6.67171C4.85753 6.72619 4.91214 6.77925 4.96675 6.8323C4.98256 6.84807 4.99837 6.86385 5.01417 6.87818C5.04579 6.9083 5.07741 6.93841 5.10902 6.96852C5.16507 7.02157 5.22112 7.07319 5.2786 7.12481C5.29728 7.14201 5.3174 7.15922 5.33608 7.17643C5.38926 7.22374 5.44243 7.26963 5.4956 7.31551C5.52722 7.34276 5.56027 7.37143 5.59189 7.39724C5.63069 7.43022 5.66949 7.4632 5.70973 7.49475C5.73991 7.52055 5.77153 7.54493 5.80314 7.56931C5.83332 7.59368 5.8635 7.61806 5.89512 7.641C5.9253 7.66537 5.95547 7.68832 5.98709 7.71269C6.04889 7.76001 6.11212 7.80733 6.17391 7.85321C6.18972 7.86468 6.20553 7.87615 6.2199 7.88762C6.24433 7.90483 6.26732 7.92204 6.29176 7.93924C6.31762 7.95788 6.34493 7.97652 6.3708 7.99516C6.41678 8.02671 6.46277 8.05969 6.50876 8.0898C6.52888 8.10414 6.55043 8.11848 6.57055 8.13138L6.58349 8.13998C6.60361 8.15432 6.62516 8.16723 6.64528 8.18157H6.64672C6.67546 8.20164 6.70564 8.22171 6.73438 8.24035C6.75881 8.25613 6.78324 8.2719 6.80767 8.28767C6.83354 8.30488 6.86085 8.32208 6.88815 8.33786C6.9054 8.34933 6.92408 8.3608 6.94132 8.37084C6.95857 8.38231 6.97725 8.39234 6.9945 8.40381C7.01174 8.41529 7.02899 8.42532 7.04623 8.43536C7.06348 8.4454 7.08072 8.45687 7.09797 8.4669C7.13102 8.48698 7.16407 8.50562 7.19713 8.52569L7.21294 8.5343C7.24455 8.55294 7.27617 8.57158 7.30778 8.58878C7.3782 8.62893 7.44862 8.66765 7.51904 8.70636C7.55497 8.725 7.59089 8.74507 7.62538 8.76371L7.6297 8.76228Z" fill="#C5E5D0"/>'
                + '<path d="M23.5381 12.3842H19.0156C18.9696 11.0952 18.7354 9.87212 18.3689 8.76231C18.5126 8.68775 18.6534 8.60889 18.7928 8.52859C18.8316 8.50708 18.8704 8.48414 18.9078 8.4612C18.938 8.44256 18.9696 8.42392 19.0012 8.40528C19.0357 8.38377 19.0702 8.3637 19.1047 8.34219C19.1722 8.30061 19.2412 8.25616 19.3073 8.21171C19.3318 8.19594 19.3547 8.18016 19.3792 8.16439L19.3892 8.15722C19.4079 8.14432 19.4266 8.13285 19.4467 8.11994C19.464 8.10847 19.4812 8.097 19.497 8.08553L19.5056 8.07979H19.5071C19.5401 8.05542 19.5732 8.03247 19.6062 8.00953C19.6393 7.98659 19.6723 7.96365 19.704 7.94071C19.7298 7.9235 19.7543 7.90486 19.7801 7.88622C19.7945 7.87618 19.8089 7.86615 19.8232 7.85468L19.8405 7.84177C19.8664 7.82313 19.8922 7.80449 19.9167 7.78585C19.9411 7.76721 19.9655 7.75 19.9885 7.73136C20.0129 7.71416 20.0359 7.69552 20.0604 7.67688C20.0949 7.64963 20.1308 7.62239 20.1638 7.59515C20.1926 7.57221 20.2228 7.54926 20.2515 7.52489C20.2817 7.50051 20.3119 7.47614 20.342 7.45033L20.3794 7.41878L20.3952 7.40588C20.4153 7.38867 20.4354 7.3729 20.4556 7.35426L20.4728 7.33992C20.5044 7.31411 20.5346 7.28687 20.5662 7.25962C20.5792 7.24815 20.5921 7.23668 20.605 7.22521C20.6582 7.17789 20.7128 7.13058 20.7645 7.08182C20.789 7.05888 20.8148 7.03594 20.8393 7.013C20.891 6.96425 20.9442 6.9155 20.9945 6.86531C21.0088 6.85241 21.0232 6.83807 21.0376 6.82373C21.0563 6.80652 21.0735 6.78788 21.0922 6.77068C21.1109 6.75347 21.1281 6.73483 21.1454 6.71762C21.1597 6.70328 21.1741 6.68895 21.187 6.67461C21.2115 6.65023 21.2359 6.62586 21.2589 6.60148C21.2761 6.58427 21.292 6.5685 21.3078 6.55129L21.3394 6.51832C21.3638 6.49251 21.3897 6.4667 21.4141 6.43945C21.4429 6.47673 21.4716 6.51545 21.4989 6.55273C21.5176 6.57854 21.5363 6.60291 21.5549 6.62872C21.5693 6.6488 21.5851 6.66887 21.5995 6.69038C21.6167 6.71475 21.634 6.73913 21.6512 6.76351C21.6742 6.79505 21.6958 6.82803 21.7173 6.85958C21.7389 6.89112 21.7605 6.92266 21.7806 6.95421C21.7978 6.98002 21.8151 7.00583 21.8323 7.03164C21.8582 7.07179 21.884 7.11194 21.9099 7.15208C21.9674 7.24098 22.022 7.33132 22.0766 7.42308C22.0953 7.45463 22.114 7.48474 22.1312 7.51628C22.147 7.54353 22.1628 7.57077 22.1786 7.59945C22.1916 7.62239 22.2045 7.6439 22.216 7.66684C22.2347 7.70125 22.2534 7.73423 22.2721 7.76864C22.2893 7.80162 22.308 7.8346 22.3252 7.86615L22.3454 7.90486C22.3626 7.93927 22.3813 7.97369 22.3985 8.0081C22.4086 8.02817 22.4201 8.04825 22.4301 8.06976C22.4517 8.11134 22.4718 8.15149 22.4919 8.19307C22.5063 8.22318 22.5207 8.25186 22.535 8.28197C22.548 8.31064 22.5624 8.33932 22.5753 8.368C22.5825 8.38521 22.5911 8.40098 22.5983 8.41818C22.6227 8.47267 22.6471 8.52716 22.6716 8.58164C22.6802 8.60172 22.6888 8.62323 22.6989 8.6433C22.7118 8.67341 22.7247 8.70352 22.7362 8.73363C22.7492 8.76374 22.7621 8.79529 22.7736 8.8254C22.7851 8.85264 22.7952 8.87989 22.8067 8.90713C22.8239 8.95158 22.8411 8.99603 22.8584 9.04048C22.8656 9.06199 22.8742 9.0835 22.8828 9.10357C22.8943 9.13512 22.9058 9.16666 22.9173 9.19677C22.9245 9.21541 22.9302 9.23405 22.9374 9.25126C22.9446 9.2699 22.9504 9.28854 22.9576 9.30718C22.9676 9.33442 22.9762 9.36167 22.9863 9.39034V9.39321C22.9964 9.41902 23.005 9.44626 23.0136 9.47351C23.0352 9.53803 23.0553 9.60255 23.0754 9.66851C23.0855 9.70149 23.0955 9.73304 23.1056 9.76602C23.1156 9.79899 23.1243 9.83197 23.1343 9.86352C23.1429 9.89506 23.153 9.92804 23.1616 9.95959C23.1702 9.99257 23.1789 10.0241 23.1875 10.0571C23.1947 10.0858 23.2033 10.1144 23.2105 10.1446C23.2205 10.1804 23.2292 10.2162 23.2378 10.2535C23.245 10.2836 23.2522 10.3123 23.2593 10.3424C23.2651 10.3668 23.2708 10.3912 23.2766 10.4141L23.2795 10.4256C23.2838 10.4414 23.2866 10.4571 23.2895 10.4729V10.4829C23.2981 10.5088 23.3025 10.5346 23.3082 10.5604C23.314 10.5891 23.3211 10.6192 23.3269 10.6478V10.6564L23.3355 10.6894V10.6923C23.3398 10.7081 23.3427 10.7238 23.3456 10.7382C23.3528 10.7755 23.3599 10.8127 23.3671 10.8514C23.3729 10.883 23.3786 10.9145 23.3844 10.9461C23.3872 10.9633 23.3901 10.9791 23.393 10.9963C23.3959 11.0135 23.3987 11.0292 23.4016 11.0465C23.4074 11.0794 23.4131 11.1138 23.4174 11.1468C23.4203 11.164 23.4232 11.1798 23.4246 11.197C23.4275 11.2128 23.4289 11.23 23.4318 11.2472C23.4419 11.316 23.4505 11.3834 23.4591 11.4522C23.4634 11.4867 23.4677 11.5196 23.472 11.554C23.4763 11.5885 23.4807 11.6214 23.4835 11.6558C23.4936 11.7419 23.5008 11.8265 23.508 11.9125C23.5108 11.9555 23.5151 11.9985 23.518 12.0416C23.5209 12.0846 23.5238 12.1276 23.5252 12.1706C23.5295 12.2394 23.5324 12.3097 23.5353 12.3785L23.5381 12.3842Z" fill="#C5E5D0"/>'
                + '<path d="M23.5454 12.7759C23.5454 14.8765 22.9289 16.8337 21.8655 18.4755C21.8497 18.4411 21.8324 18.4081 21.8166 18.3751C21.8037 18.3493 21.7922 18.3249 21.7793 18.2991C21.7649 18.2704 21.7505 18.2418 21.7361 18.2145L21.7318 18.2074C21.7203 18.1858 21.7103 18.1643 21.6988 18.1428C21.6873 18.1213 21.6758 18.0998 21.6643 18.0783C21.6456 18.0425 21.6255 18.0066 21.6054 17.9708L21.5867 17.9378L21.568 17.9048C21.5551 17.8804 21.5407 17.8561 21.5263 17.8317C21.5105 17.8044 21.4947 17.7772 21.4789 17.7514C21.4588 17.717 21.4387 17.684 21.4185 17.6496C21.3553 17.5435 21.2892 17.4402 21.2202 17.337C21.2015 17.3098 21.1829 17.2811 21.1642 17.2538C21.1512 17.2352 21.1383 17.2151 21.1254 17.195C21.0938 17.1477 21.0607 17.1018 21.0276 17.0545C21.0075 17.0258 20.9874 16.9986 20.9673 16.9699C20.9472 16.9427 20.927 16.9154 20.9069 16.8868C20.8868 16.8595 20.8667 16.8323 20.8451 16.805C20.8236 16.7749 20.8006 16.7462 20.7776 16.7176C20.7589 16.6932 20.7402 16.6703 20.7215 16.6459C20.6842 16.5986 20.6468 16.5512 20.608 16.5039C20.5893 16.481 20.5706 16.458 20.5505 16.4351C20.5247 16.4036 20.4988 16.3734 20.4729 16.3433C20.4499 16.3161 20.4269 16.2903 20.4039 16.263C20.3738 16.2286 20.345 16.1956 20.3148 16.1627C20.2789 16.1225 20.243 16.0838 20.2071 16.0451C20.1826 16.0178 20.1582 15.992 20.1323 15.9662C20.0547 15.8845 19.9757 15.8042 19.8952 15.7239C19.865 15.6938 19.8334 15.6637 19.8018 15.6336C19.7831 15.6164 19.7644 15.5977 19.7458 15.5805C19.7271 15.5619 19.707 15.5432 19.6868 15.526C19.6538 15.4945 19.6207 15.4644 19.5862 15.4343C19.5546 15.4056 19.523 15.3769 19.49 15.3482C19.4698 15.331 19.4497 15.3124 19.4282 15.2952C19.408 15.278 19.3865 15.2593 19.3664 15.2421C19.3247 15.2063 19.283 15.1719 19.2413 15.1375C19.1565 15.0672 19.0689 14.9984 18.9812 14.931C18.9525 14.908 18.9223 14.8865 18.8936 14.865C18.9783 14.2126 19.0243 13.5373 19.0243 12.8447C19.0243 12.8218 19.0243 12.7988 19.0243 12.7759H23.5454Z" fill="#C5E5D0"/>'
                + '<path d="M10.0123 4.66579C9.13131 5.57199 8.34091 6.82805 7.78762 8.3121L7.77325 8.3035C7.75026 8.29059 7.72583 8.27912 7.70283 8.26478L7.69565 8.26048C7.68128 8.25331 7.66691 8.24471 7.65254 8.23611H7.64966C7.63242 8.22463 7.61373 8.2146 7.59649 8.20456C7.48871 8.14434 7.38092 8.08268 7.27602 8.01816C7.26021 8.00955 7.24584 7.99952 7.23003 7.99091C7.16392 7.95077 7.09782 7.90918 7.03315 7.8676C7.00584 7.8504 6.97854 7.83319 6.95123 7.81455C6.92536 7.79734 6.8995 7.78014 6.87363 7.76436C6.84632 7.74716 6.82046 7.72852 6.79315 7.70988C6.76585 7.69124 6.73998 7.67403 6.71267 7.65539C6.67531 7.62958 6.63938 7.60521 6.60345 7.5794C6.5704 7.55645 6.53735 7.53351 6.50573 7.50914C6.48992 7.49767 6.47268 7.4862 6.45687 7.47472C6.43962 7.46182 6.42094 7.44891 6.4037 7.43458C6.38501 7.42167 6.36633 7.40733 6.34765 7.39299C6.3304 7.38009 6.31316 7.36718 6.29448 7.35285C6.27723 7.33994 6.25999 7.32704 6.24274 7.3127C6.22981 7.30266 6.21687 7.29262 6.20394 7.28259C6.17807 7.26251 6.1522 7.241 6.12634 7.22093L6.09759 7.19799L6.07173 7.17791C6.04586 7.15641 6.01999 7.13633 5.99412 7.11482L5.98837 7.10909C5.95388 7.08185 5.92083 7.05317 5.88778 7.02593C5.85472 6.99868 5.82311 6.97144 5.79006 6.94276C5.76706 6.92412 5.74551 6.90405 5.72395 6.88541C5.70096 6.86677 5.6794 6.84669 5.65784 6.82662C5.63629 6.80798 5.61329 6.7879 5.59174 6.76783C5.57018 6.74776 5.54862 6.72912 5.52707 6.70904C5.5012 6.68467 5.47389 6.66029 5.44803 6.63591C5.41641 6.6058 5.38479 6.57569 5.35318 6.54558L5.33018 6.52407C5.30575 6.4997 5.27988 6.47532 5.25545 6.45095C5.22671 6.42227 5.19797 6.39359 5.16923 6.36491C5.14049 6.33624 5.11318 6.30756 5.08444 6.27888L5.05857 6.25164C5.02983 6.22296 5.00252 6.19428 4.97522 6.16417C4.9436 6.13119 4.91199 6.09678 4.88037 6.06237C5.7958 4.95973 6.93399 4.04636 8.2245 3.38965C8.25755 3.42263 8.29061 3.45417 8.32366 3.48572L8.36246 3.52156L8.37683 3.5359C8.39264 3.55024 8.40845 3.56458 8.42426 3.57892C8.45587 3.6076 8.48749 3.63627 8.52054 3.66495C8.53779 3.67929 8.5536 3.69363 8.57084 3.70797L8.59671 3.72947L8.62258 3.75098C8.63982 3.76532 8.65707 3.77966 8.67431 3.79543C8.70018 3.81694 8.72605 3.83845 8.75335 3.85996C8.77922 3.88146 8.80653 3.90154 8.83383 3.92305C8.86688 3.94886 8.89994 3.97323 8.93299 3.99904C8.95311 4.01338 8.97179 4.02915 8.99191 4.04206C9.01634 4.0607 9.04221 4.0779 9.06664 4.09654C9.09107 4.11375 9.1155 4.13096 9.13993 4.14816C9.16005 4.1625 9.18017 4.17684 9.20173 4.18974C9.27646 4.23993 9.35119 4.28868 9.42879 4.336L9.44316 4.3446C9.47909 4.36611 9.51502 4.38905 9.55094 4.40913C9.57825 4.4249 9.60555 4.4421 9.6343 4.45788C9.65298 4.46935 9.67166 4.47938 9.69178 4.48942C9.71046 4.50089 9.73058 4.51093 9.74926 4.52097C9.77369 4.53387 9.79669 4.54678 9.82112 4.55968C9.84699 4.57402 9.87285 4.58692 9.89872 4.59983C9.93896 4.62134 9.9792 4.64141 10.0194 4.66148L10.0123 4.66579Z" fill="#C5E5D0"/>'
                + '<path d="M21.1254 6.06679C21.0996 6.09547 21.0722 6.12272 21.0464 6.15139C21.0291 6.17003 21.0119 6.18724 20.9946 6.20588C20.9803 6.22022 20.9659 6.23599 20.9515 6.25033C20.9386 6.26323 20.9257 6.27757 20.9127 6.29048C20.8941 6.31055 20.8754 6.33063 20.8552 6.34927C20.8222 6.38224 20.7891 6.41522 20.7561 6.44677L20.7202 6.48118C20.6914 6.50842 20.6641 6.53567 20.6354 6.56291C20.6023 6.59446 20.5678 6.62743 20.5333 6.65755C20.4744 6.71203 20.4155 6.76652 20.3551 6.81957C20.3365 6.83678 20.3178 6.85255 20.2991 6.86976L20.2948 6.87263C20.279 6.88696 20.2617 6.9013 20.2445 6.91564L20.2315 6.92711L20.1999 6.95436C20.1396 7.00597 20.0778 7.05759 20.016 7.10778L19.9815 7.13646L19.9772 7.14076C19.9513 7.16227 19.9254 7.18234 19.8996 7.20385C19.8636 7.23253 19.8263 7.2612 19.7904 7.28988C19.7602 7.31425 19.7286 7.3372 19.6984 7.36014L19.6625 7.38738L19.6481 7.39742C19.6323 7.40889 19.6165 7.42179 19.6007 7.43327L19.5892 7.44187C19.569 7.45621 19.5489 7.47198 19.5288 7.48632L19.5144 7.49636L19.4756 7.52503C19.4397 7.55084 19.4038 7.57665 19.3679 7.60246C19.3449 7.61823 19.3219 7.63401 19.2989 7.64978C19.2687 7.67129 19.2385 7.69136 19.2069 7.71287C19.1422 7.75732 19.0761 7.80033 19.01 7.84335C18.9827 7.86056 18.9554 7.8792 18.9267 7.8964C18.8965 7.91648 18.8663 7.93512 18.8361 7.95376H18.8347L18.8045 7.97383C18.7743 7.99247 18.7456 8.00968 18.7168 8.02832C18.6838 8.04839 18.6507 8.06847 18.6177 8.08854C18.5516 8.12726 18.484 8.16597 18.4165 8.20468C18.3906 8.21902 18.3648 8.23336 18.3389 8.2477L18.3044 8.26634L18.2656 8.28785C18.2483 8.29788 18.2297 8.30792 18.2124 8.31653C17.6577 6.83248 16.8673 5.57498 15.9878 4.67021C16.0093 4.66017 16.0295 4.65014 16.0496 4.63867C16.0711 4.62863 16.0913 4.61716 16.1114 4.60712C16.1286 4.59852 16.1444 4.58992 16.1602 4.58131C16.1933 4.56411 16.2264 4.54547 16.2594 4.52826C16.2838 4.51535 16.3068 4.50245 16.3313 4.48811C16.3657 4.46947 16.3988 4.4494 16.4319 4.43076L16.4649 4.41068C16.4893 4.39634 16.5123 4.38201 16.5368 4.36767C16.5598 4.35333 16.5828 4.34042 16.6043 4.32608C16.6618 4.29024 16.7193 4.25296 16.7753 4.21568C16.8098 4.19274 16.8443 4.16836 16.8788 4.14398C16.9004 4.12965 16.9205 4.11531 16.942 4.09953C16.9593 4.08663 16.978 4.07372 16.9952 4.06082C17.0081 4.05078 17.0211 4.04218 17.034 4.03214L17.0728 4.00347C17.0929 3.98913 17.113 3.97335 17.1332 3.95758L17.1447 3.94898C17.1705 3.9289 17.1964 3.90883 17.2223 3.88732L17.2424 3.87155C17.2711 3.84861 17.2999 3.82567 17.3272 3.80272C17.3415 3.79125 17.3573 3.77835 17.3717 3.76544C17.4033 3.7382 17.435 3.71239 17.4666 3.68515C17.547 3.61489 17.6246 3.54463 17.7008 3.47007C17.7267 3.44569 17.7526 3.41988 17.7784 3.39551C19.0689 4.05222 20.2071 4.96559 21.1225 6.06823L21.1254 6.06679Z" fill="#C5E5D0"/>'
                + '<path d="M15.1874 4.44645C15.0078 4.51384 14.8238 4.57263 14.637 4.62282C14.6155 4.62855 14.5939 4.63429 14.5724 4.64002C14.558 4.64432 14.5422 4.64719 14.5264 4.65149C14.5106 4.65579 14.4933 4.6601 14.4775 4.66296C14.3166 4.70168 14.1542 4.73466 13.9875 4.76047C13.963 4.76477 13.9386 4.76763 13.9127 4.77194C13.8883 4.7748 13.8624 4.77911 13.838 4.78197C13.8136 4.78484 13.7877 4.78914 13.7633 4.79201C13.7388 4.79488 13.713 4.79775 13.6885 4.80061L13.6382 4.80635C13.6181 4.80778 13.5994 4.81065 13.5793 4.81209C13.5233 4.81782 13.4672 4.82212 13.4112 4.82499C13.3939 4.82499 13.3781 4.82642 13.3609 4.82786H13.3508C13.3293 4.82929 13.3077 4.83073 13.2862 4.83216C13.2387 4.83359 13.1913 4.83646 13.1424 4.83789C13.095 4.83789 13.0462 4.83789 12.9987 4.83789C12.9513 4.83789 12.9024 4.83789 12.855 4.83789C12.8076 4.83789 12.7602 4.83503 12.7113 4.83216C12.6898 4.83216 12.6682 4.83073 12.6466 4.82929H12.6366C12.6193 4.82786 12.6035 4.82642 12.5863 4.82642C12.5302 4.82356 12.4742 4.81782 12.4181 4.81352C12.398 4.81208 12.3793 4.81065 12.3592 4.80778L12.3089 4.80205C12.2845 4.79918 12.2586 4.79631 12.2342 4.79344C12.2098 4.79058 12.1839 4.78771 12.1595 4.78341C12.135 4.78054 12.1092 4.77624 12.0847 4.77337C12.0603 4.7705 12.0344 4.7662 12.01 4.7619C11.8447 4.73609 11.6809 4.70311 11.52 4.6644C11.5042 4.6601 11.4869 4.65579 11.4711 4.65293C11.4553 4.64862 11.4409 4.64576 11.4251 4.64146C11.4036 4.63572 11.382 4.62998 11.359 4.62425C11.1722 4.57406 10.9882 4.51528 10.8086 4.44788C11.5286 3.85713 12.2859 3.52734 12.9959 3.52734C13.7058 3.52734 14.4631 3.85857 15.1831 4.44788L15.1874 4.44645Z" fill="#C5E5D0"/>'
                + '<path d="M17.8617 8.49259C17.8387 8.50406 17.8157 8.51553 17.7927 8.52557C17.7697 8.53704 17.7467 8.54708 17.7237 8.55855C17.6777 8.58006 17.6317 8.60156 17.5857 8.62307C17.5397 8.64458 17.4923 8.66609 17.4449 8.68616C17.3975 8.70624 17.35 8.72631 17.3041 8.74638C17.2811 8.75642 17.2566 8.76646 17.2322 8.7765C17.2078 8.78653 17.1848 8.79657 17.1603 8.80517C17.1388 8.81378 17.1158 8.82238 17.0942 8.83242C17.0684 8.84245 17.0425 8.85249 17.0181 8.86253C16.9865 8.87543 16.9534 8.8869 16.9218 8.89981C16.8586 8.92418 16.7939 8.94856 16.7292 8.9715C16.6818 8.98871 16.6329 9.00448 16.5855 9.02169C16.5453 9.03459 16.505 9.04893 16.4648 9.06183C16.4447 9.06757 16.426 9.07474 16.4059 9.08047L16.3944 9.08334C16.38 9.08764 16.3671 9.09195 16.3527 9.09625L16.3426 9.09911C16.3182 9.10772 16.2938 9.11489 16.2679 9.12206C16.186 9.14787 16.1055 9.17081 16.0236 9.19518C15.9834 9.20665 15.9417 9.21813 15.9015 9.2296C15.8411 9.24537 15.7807 9.26258 15.7189 9.27691C15.7046 9.28122 15.6902 9.28408 15.6758 9.28838H15.6672C15.6255 9.30129 15.5839 9.31133 15.5436 9.31993L15.5307 9.3228C15.5077 9.32853 15.4833 9.33427 15.4603 9.33857L15.4488 9.34144C15.4301 9.34574 15.4114 9.35004 15.3927 9.35434L15.3755 9.35721C15.3525 9.36151 15.3295 9.36725 15.3079 9.37155C15.2792 9.37728 15.2519 9.38302 15.2231 9.38876C15.203 9.39306 15.1843 9.39736 15.1642 9.40023C15.1211 9.40883 15.078 9.41743 15.0334 9.4246C15.009 9.4289 14.9846 9.43321 14.9601 9.43751L14.9472 9.44037C14.93 9.44324 14.9142 9.44611 14.8969 9.44898C14.8667 9.45471 14.838 9.45901 14.8078 9.46332C14.7891 9.46618 14.769 9.47049 14.7503 9.47335L14.723 9.47765C14.6914 9.48339 14.6598 9.48769 14.6282 9.49199H14.6253C14.5779 9.49916 14.5305 9.50633 14.483 9.51207C14.4442 9.5178 14.4054 9.5221 14.3652 9.52641H14.3508C14.3307 9.53071 14.3106 9.53358 14.2905 9.53501L14.2689 9.53788C14.256 9.53788 14.243 9.54075 14.2301 9.54218H14.2215C14.187 9.54648 14.1539 9.55078 14.1209 9.55365C14.0921 9.55652 14.0648 9.55939 14.0361 9.56225C14.0088 9.56512 13.98 9.56799 13.9513 9.56942C13.9283 9.57086 13.9053 9.57372 13.8838 9.57516H13.8723C13.8521 9.57802 13.8306 9.57946 13.8105 9.58089H13.8047C13.7803 9.58233 13.7544 9.58519 13.7286 9.58663C13.6466 9.59236 13.5647 9.59666 13.4814 9.59953C13.4641 9.59953 13.4469 9.60097 13.4296 9.60097H13.3995C13.3678 9.60383 13.3348 9.60383 13.3032 9.60527C13.2586 9.60527 13.2141 9.60814 13.171 9.60814H13.1293C13.0876 9.60814 13.0459 9.60814 13.0028 9.60814C12.9597 9.60814 12.9195 9.60814 12.8764 9.60814H12.8347C12.7901 9.60814 12.7456 9.6067 12.7025 9.60527C12.6694 9.60527 12.6378 9.60384 12.6062 9.6024H12.576C12.5588 9.60097 12.5415 9.59953 12.5243 9.59953C12.4912 9.5981 12.4582 9.59667 12.4237 9.59523C12.4079 9.59523 12.3921 9.5938 12.3762 9.59236H12.3647C12.336 9.59093 12.3087 9.58806 12.28 9.58663C12.2656 9.58663 12.2527 9.58519 12.2383 9.58376H12.2225C12.1894 9.58089 12.1578 9.57802 12.1248 9.57516H12.0989C12.0644 9.57086 12.0299 9.56655 11.9954 9.56369L11.9624 9.56082C11.9207 9.55652 11.879 9.55222 11.8373 9.54791H11.8172L11.7798 9.54218C11.7425 9.53788 11.7037 9.53358 11.6663 9.52927C11.6189 9.52354 11.5715 9.5178 11.5226 9.51063C11.4809 9.5049 11.4393 9.49916 11.3976 9.49343C11.3343 9.48482 11.2726 9.47479 11.2093 9.46475C11.1777 9.45901 11.1447 9.45471 11.113 9.44898L11.0814 9.44324C11.0441 9.43607 11.0053 9.43034 10.9679 9.42317C10.955 9.4203 10.942 9.41743 10.9291 9.416C10.8874 9.4074 10.8457 9.40023 10.8041 9.39162C10.7681 9.38445 10.7336 9.37728 10.6977 9.37011C10.679 9.36581 10.6589 9.36295 10.6402 9.35721H10.6302C10.5942 9.34717 10.5569 9.34 10.5209 9.3314C10.4821 9.3228 10.4419 9.31276 10.4031 9.30416L10.3873 9.29986C10.3672 9.29555 10.3471 9.28982 10.3284 9.28552H10.3241C10.3111 9.28122 10.2982 9.27835 10.2853 9.27548L10.2766 9.27261C10.2508 9.26688 10.2263 9.25971 10.2005 9.25254C10.1789 9.2468 10.1574 9.24107 10.1344 9.23533C10.1143 9.2296 10.0941 9.2253 10.074 9.21956C10.0453 9.21239 10.0165 9.20379 9.98779 9.19662C9.95904 9.18801 9.9303 9.18085 9.90156 9.17224C9.86994 9.16364 9.83976 9.15504 9.80959 9.145C9.76935 9.13353 9.72911 9.12062 9.68887 9.10772C9.64288 9.09338 9.59833 9.07904 9.55234 9.0647C9.50636 9.05036 9.46181 9.03459 9.41726 9.01882C9.38277 9.00735 9.34684 8.99444 9.31235 8.98154C9.29942 8.97724 9.28648 8.9715 9.27355 8.9672C9.19594 8.93996 9.11834 8.91128 9.04217 8.88117C9.01631 8.87113 8.989 8.86109 8.96313 8.85106C8.94301 8.84389 8.92289 8.83528 8.90134 8.82668C8.88122 8.81808 8.85966 8.81091 8.83954 8.80231C8.79787 8.78653 8.75763 8.76933 8.71739 8.75212H8.71452L8.68721 8.73922H8.6829V8.73635C8.65703 8.72631 8.63116 8.71484 8.6053 8.70337C8.53632 8.67469 8.46877 8.64458 8.40123 8.61304C8.36961 8.5987 8.338 8.58436 8.30638 8.56859L8.29488 8.56285L8.27333 8.55281H8.26902V8.54995C8.24746 8.53991 8.22734 8.53131 8.20722 8.52127C8.18566 8.51123 8.16267 8.49976 8.14111 8.48972C8.69296 6.97413 9.4963 5.70659 10.3859 4.8305L10.4002 4.83624C10.4204 4.84484 10.4405 4.85345 10.4592 4.86062C10.5483 4.89646 10.6374 4.93088 10.7279 4.96242C10.7509 4.97102 10.7739 4.97819 10.7969 4.9868C10.8199 4.9954 10.8429 5.00257 10.8659 5.00974C10.9118 5.02551 10.9578 5.03985 11.0053 5.05419C11.0311 5.06279 11.0584 5.06996 11.0843 5.07856C11.1375 5.09434 11.1906 5.10867 11.2438 5.12301C11.2682 5.12875 11.2927 5.13592 11.3171 5.14165C11.3387 5.14739 11.3602 5.15312 11.3818 5.15743C11.3976 5.16173 11.4148 5.16603 11.4306 5.1689C11.4536 5.17463 11.4766 5.18037 11.5011 5.18467C11.5485 5.19614 11.5945 5.20618 11.6419 5.21478C11.6721 5.22052 11.7022 5.22769 11.7339 5.23199C11.8373 5.25206 11.9408 5.26927 12.0457 5.28361C12.0586 5.28504 12.073 5.28791 12.086 5.28934C12.0989 5.29077 12.1133 5.29364 12.1262 5.29508L12.1607 5.29938H12.1736C12.1923 5.30368 12.211 5.30511 12.2297 5.30798C12.2455 5.30942 12.2627 5.31228 12.28 5.31372C12.2943 5.31515 12.3087 5.31658 12.3231 5.31802C12.3446 5.32089 12.3662 5.32232 12.3877 5.32375C12.4093 5.32519 12.4309 5.32805 12.4524 5.32949C12.4682 5.32949 12.4826 5.33236 12.4984 5.33236C12.5171 5.33236 12.5358 5.33522 12.5544 5.33666H12.5861C12.6565 5.34383 12.7283 5.3467 12.8002 5.34813C12.8232 5.34813 12.8462 5.34813 12.8692 5.34956H12.9209C12.9496 5.34956 12.9784 5.34956 13.0071 5.34956C13.0359 5.34956 13.0646 5.34956 13.0934 5.34956C13.1106 5.34956 13.1278 5.34956 13.1451 5.34956C13.1681 5.34956 13.1911 5.34956 13.2141 5.34813C13.2859 5.3467 13.3578 5.34239 13.4282 5.33809H13.4598C13.4785 5.33522 13.4972 5.33379 13.5159 5.33236C13.5317 5.33236 13.546 5.32949 13.5619 5.32949C13.5834 5.32805 13.605 5.32662 13.6265 5.32375C13.6481 5.32232 13.6696 5.31945 13.6898 5.31802C13.7041 5.31802 13.7185 5.31515 13.7329 5.31372C13.7501 5.31228 13.7659 5.31085 13.7832 5.30798C13.8018 5.30655 13.8205 5.30368 13.8392 5.30225H13.8521L13.8866 5.29651C13.8996 5.29651 13.9139 5.29364 13.9269 5.29077C13.9398 5.28934 13.9542 5.28791 13.9671 5.28504C14.0102 5.2793 14.0519 5.27213 14.0936 5.26497C14.1079 5.26353 14.1223 5.26066 14.1367 5.2578C14.1496 5.25636 14.164 5.25349 14.1769 5.25063C14.1899 5.24919 14.2042 5.24632 14.2172 5.24346C14.256 5.23629 14.2948 5.22912 14.3336 5.22195C14.3523 5.21908 14.3709 5.21478 14.3882 5.21048C14.4097 5.20618 14.4313 5.20188 14.4543 5.19614C14.4845 5.1904 14.5132 5.18323 14.5434 5.17607C14.5736 5.1689 14.6037 5.16173 14.6339 5.15456C14.6569 5.14882 14.6814 5.14309 14.7043 5.13735C14.7273 5.13162 14.7518 5.12588 14.7748 5.11871H14.7762C14.8006 5.11154 14.8251 5.10581 14.8495 5.09864C14.8754 5.09147 14.9012 5.0843 14.9271 5.0757C14.953 5.06853 14.9803 5.05992 15.0061 5.05132L15.0248 5.04558C15.0478 5.03841 15.0708 5.03125 15.0938 5.02408C15.1427 5.0083 15.1915 4.9911 15.2404 4.97532L15.2763 4.96242C15.3151 4.94952 15.3539 4.93518 15.3927 4.9194C15.4143 4.9108 15.4358 4.90363 15.4574 4.89503C15.4861 4.88499 15.5134 4.87352 15.5407 4.86205C15.5637 4.85201 15.5867 4.84341 15.6112 4.83337L15.6241 4.82764C16.5122 5.70373 17.3156 6.97126 17.8688 8.48686L17.8617 8.49259Z" fill="#C5E5D0"/>'
                + '<path d="M18.6162 12.3841H7.38379C7.4269 11.1596 7.64534 9.99673 7.9845 8.94141L7.99599 8.94571C8.03911 8.96722 8.08366 8.98872 8.12821 9.0088C8.17563 9.03174 8.22449 9.05325 8.27335 9.07476C8.31503 9.09483 8.35814 9.11347 8.40126 9.13068L8.42712 9.14215C8.47024 9.16079 8.51191 9.17943 8.55502 9.19663L8.56796 9.20237C8.61538 9.22101 8.66281 9.24108 8.71023 9.25972C8.7361 9.26976 8.76197 9.2798 8.78784 9.28984C8.86113 9.31851 8.93442 9.34576 9.00771 9.373L9.04508 9.3859L9.07813 9.39737C9.11118 9.40885 9.14424 9.42175 9.17729 9.43322C9.20603 9.44326 9.23334 9.4533 9.26208 9.46333C9.2822 9.4705 9.30088 9.47624 9.321 9.48341C9.34974 9.49344 9.37704 9.50205 9.40579 9.51208C9.42447 9.51782 9.44315 9.52355 9.46183 9.53072H9.46471C9.49201 9.54076 9.51932 9.54936 9.54662 9.55797C9.58255 9.56944 9.61848 9.58091 9.65441 9.59095C9.68746 9.60098 9.71907 9.61102 9.75213 9.61962C9.82542 9.64113 9.89871 9.6612 9.972 9.68128C9.98925 9.68558 10.0065 9.69132 10.0237 9.69562C10.0568 9.70422 10.0884 9.71282 10.1215 9.72143C10.1459 9.7286 10.1718 9.73433 10.1962 9.74007H10.1991C10.212 9.74437 10.2249 9.74724 10.2393 9.7501L10.2551 9.75441C10.2867 9.76301 10.3183 9.77018 10.3514 9.77735C10.3686 9.78165 10.3859 9.78595 10.4046 9.79025C10.4218 9.79455 10.4391 9.79886 10.4577 9.80172H10.4621C10.4965 9.81033 10.531 9.8175 10.5655 9.82467C10.5856 9.82897 10.6072 9.83327 10.6273 9.83757C10.7006 9.85334 10.7725 9.86768 10.8458 9.88202C10.8601 9.88489 10.8745 9.88776 10.8889 9.89062L10.9162 9.89493C10.9521 9.90209 10.988 9.90783 11.0225 9.91357C11.0728 9.92217 11.1217 9.93077 11.172 9.93794C11.2194 9.94511 11.2654 9.95228 11.3128 9.95945C11.3617 9.96662 11.4105 9.97379 11.4594 9.97952L11.4968 9.98526C11.5384 9.99099 11.5801 9.9953 11.6204 10.001C11.6707 10.0068 11.721 10.0125 11.7713 10.0182C11.8675 10.0283 11.9653 10.0383 12.063 10.0455H12.0817C12.1736 10.0541 12.2656 10.0598 12.3576 10.0656C12.3763 10.0656 12.3964 10.067 12.4151 10.0684C12.4984 10.0727 12.5832 10.0756 12.668 10.0785C12.6867 10.0785 12.7054 10.0785 12.7226 10.0799C12.7542 10.0799 12.7873 10.0813 12.8189 10.0813C12.8347 10.0813 12.8505 10.0813 12.8678 10.0813C12.9123 10.0813 12.9569 10.0813 13.0014 10.0813C13.046 10.0813 13.0905 10.0813 13.1351 10.0813C13.1509 10.0813 13.1681 10.0813 13.1839 10.0813C13.2155 10.0813 13.2486 10.0813 13.2802 10.0799C13.2989 10.0799 13.3176 10.0799 13.3348 10.0785C13.4196 10.077 13.503 10.0727 13.5877 10.0684C13.6064 10.0684 13.6265 10.067 13.6452 10.0656C13.6797 10.0641 13.7142 10.0613 13.7487 10.0598C13.7659 10.0598 13.7846 10.057 13.8019 10.057C13.8824 10.0512 13.9628 10.0455 14.0433 10.0369H14.0447C14.0591 10.0369 14.0749 10.034 14.0893 10.0326H14.1065C14.1267 10.0297 14.1468 10.0268 14.1655 10.0254L14.1899 10.0225C14.2086 10.0211 14.2287 10.0182 14.2474 10.0168C14.2919 10.0125 14.3365 10.0068 14.381 10.0025C14.4198 9.99816 14.4572 9.99386 14.496 9.98813H14.5104C14.5233 9.98526 14.5377 9.98382 14.5506 9.98096L14.5693 9.97809C14.5865 9.97665 14.6038 9.97379 14.6196 9.97092L14.6555 9.96518C14.6756 9.96232 14.6957 9.95945 14.7159 9.95658C14.7389 9.95371 14.7604 9.94941 14.7834 9.94654C14.8064 9.94368 14.828 9.93938 14.851 9.93651H14.861C14.8998 9.92934 14.9386 9.92217 14.9789 9.915C15.0148 9.90926 15.0507 9.90209 15.0852 9.89636C15.1039 9.89349 15.1226 9.88919 15.1427 9.88632C15.1729 9.88059 15.203 9.87485 15.2318 9.86912C15.2548 9.86481 15.2763 9.86051 15.2993 9.85621C15.3295 9.85048 15.3611 9.84331 15.3927 9.83757C15.4143 9.83327 15.4359 9.82897 15.4588 9.82323C15.512 9.81176 15.5638 9.80029 15.6169 9.78739C15.6701 9.77591 15.7218 9.76301 15.7736 9.7501C15.7937 9.7458 15.8138 9.74007 15.8339 9.73577C15.8541 9.73146 15.8742 9.72573 15.8943 9.71999C15.9245 9.71282 15.9546 9.70422 15.9863 9.69562C16.0006 9.69275 16.0136 9.68845 16.0279 9.68415C16.1055 9.66264 16.1817 9.64256 16.2579 9.61962C16.2794 9.61389 16.2996 9.60672 16.3211 9.60098H16.324C16.3427 9.59381 16.3628 9.58951 16.3815 9.58234L16.3944 9.57804C16.4145 9.57231 16.4332 9.56657 16.4533 9.5594C16.472 9.55367 16.4907 9.54793 16.5094 9.5422L16.5194 9.53933H16.5209C16.5453 9.53072 16.5697 9.52355 16.5942 9.51495C16.6258 9.50491 16.656 9.49488 16.6876 9.48341C16.7206 9.47194 16.7551 9.46046 16.7882 9.44899L16.8083 9.44182C16.8356 9.43322 16.8615 9.42318 16.8888 9.41315C16.9649 9.3859 17.0411 9.35866 17.1173 9.32855C17.1302 9.32281 17.1446 9.31851 17.1589 9.31278C17.1862 9.30274 17.2135 9.2927 17.2409 9.28123C17.2595 9.27406 17.2768 9.26689 17.2955 9.25972C17.3443 9.23965 17.3932 9.21958 17.442 9.1995C17.465 9.18947 17.4895 9.17943 17.5125 9.17082L17.5829 9.14071C17.6447 9.1149 17.705 9.08766 17.7654 9.06042C17.7941 9.04751 17.8214 9.03461 17.8502 9.0217C17.9077 8.99589 17.9652 8.96865 18.0212 8.94141C18.3604 9.99673 18.5774 11.1596 18.6219 12.3841H18.6162Z" fill="#C5E5D0"/>'
                + '<path d="M18.6247 12.8433C18.6247 13.4441 18.5902 14.0306 18.5256 14.5998L18.5169 14.5941C18.4882 14.5754 18.4609 14.5568 18.4322 14.5367C18.4005 14.5166 18.3689 14.4951 18.3373 14.4751C18.3186 14.4636 18.3014 14.4521 18.2827 14.4392C18.2554 14.422 18.2281 14.4048 18.2008 14.3876C18.1735 14.3704 18.1462 14.3532 18.1189 14.3374C18.0111 14.2715 17.9033 14.2084 17.7941 14.1467C17.7582 14.1266 17.7222 14.1066 17.6849 14.0865L17.6518 14.0693L17.6216 14.0535C17.5368 14.0091 17.4521 13.9646 17.3673 13.923C17.3385 13.9087 17.3112 13.8958 17.2825 13.8814C17.2537 13.8671 17.225 13.8542 17.1977 13.8413C17.1675 13.827 17.1388 13.8141 17.1086 13.7997C17.0525 13.7739 16.9951 13.7481 16.939 13.7237C16.9175 13.7137 16.8945 13.7051 16.8729 13.695C16.847 13.6836 16.8197 13.6721 16.7939 13.6606C16.7407 13.6391 16.6875 13.6162 16.6343 13.5961C16.6085 13.5861 16.5812 13.5746 16.5539 13.5646C16.5266 13.5545 16.5007 13.5445 16.4734 13.533C16.4188 13.5129 16.3656 13.4929 16.311 13.4728C16.2564 13.4527 16.2018 13.4341 16.1472 13.4154C16.1155 13.4054 16.0854 13.3939 16.0538 13.3839C16.0135 13.371 15.9747 13.3581 15.9345 13.3452C15.9086 13.3366 15.8842 13.3294 15.8583 13.3222C15.8267 13.3122 15.7965 13.3036 15.7649 13.295C15.7419 13.2878 15.7175 13.2807 15.6945 13.2749C15.6514 13.262 15.6083 13.2505 15.5637 13.2391C15.5479 13.2348 15.5321 13.2305 15.5163 13.2262C15.4832 13.2176 15.4502 13.209 15.4171 13.2004C15.3812 13.1918 15.3453 13.1832 15.3093 13.1746C15.2648 13.1631 15.2202 13.153 15.1742 13.143C15.1513 13.1373 15.1268 13.1315 15.1024 13.1272C15.0277 13.1115 14.9529 13.0957 14.8782 13.0814C14.8624 13.0785 14.8466 13.0756 14.8308 13.0727H14.825C14.7934 13.0656 14.7632 13.0598 14.7316 13.0555C14.7058 13.0512 14.6799 13.0469 14.654 13.0426C14.6296 13.0383 14.6037 13.034 14.5779 13.0297C14.5031 13.0168 14.427 13.0068 14.3508 12.9953C14.3134 12.991 14.2775 12.9853 14.2401 12.981C14.2042 12.9767 14.1697 12.9724 14.1338 12.9681C14.1007 12.9638 14.0691 12.9609 14.0375 12.958C14.0073 12.9552 13.9757 12.9509 13.9455 12.9494C13.9168 12.9466 13.888 12.9437 13.8593 12.9408C13.8277 12.938 13.7961 12.9351 13.7645 12.9337C13.7228 12.9308 13.6811 12.9279 13.6394 12.9251C13.5863 12.9222 13.5331 12.9179 13.4813 12.9165C13.4627 12.9165 13.444 12.915 13.4267 12.9136C13.329 12.9093 13.2299 12.9064 13.1307 12.905C13.1134 12.905 13.0976 12.905 13.0804 12.905C13.0545 12.905 13.0287 12.905 13.0028 12.905C12.9769 12.905 12.9511 12.905 12.9252 12.905C12.9079 12.905 12.8921 12.905 12.8749 12.905C12.7757 12.905 12.678 12.9093 12.5788 12.9136C12.5602 12.9136 12.5415 12.915 12.5242 12.9165C12.4711 12.9193 12.4179 12.9222 12.3662 12.9251C12.3245 12.9279 12.2828 12.9308 12.2411 12.9337C12.2095 12.9365 12.1779 12.938 12.1463 12.9408C12.1175 12.9437 12.0888 12.9451 12.0601 12.9494C12.0356 12.9523 12.0098 12.9537 11.9853 12.9566C11.958 12.9595 11.9307 12.9623 11.902 12.9652C11.8545 12.9695 11.8086 12.9752 11.7626 12.981C11.7425 12.9839 11.7209 12.9867 11.7008 12.9896C11.6778 12.9925 11.6548 12.9953 11.6318 12.9996C11.5872 13.0054 11.5427 13.0125 11.4967 13.0197C11.478 13.0226 11.4593 13.0254 11.4407 13.0283C11.4234 13.0312 11.4047 13.034 11.3875 13.0369C11.3501 13.0426 11.3113 13.0498 11.274 13.057C11.2409 13.0627 11.2079 13.0684 11.1748 13.0756C11.1389 13.0828 11.1015 13.09 11.0656 13.0971C11.0469 13.1014 11.0268 13.1043 11.0081 13.1086C10.9736 13.1158 10.9391 13.1229 10.9046 13.1301C10.8845 13.1344 10.863 13.1387 10.8443 13.143C10.8069 13.1516 10.771 13.1602 10.735 13.1688C10.7135 13.1731 10.6919 13.1789 10.6704 13.1846C10.6273 13.1946 10.5842 13.2061 10.541 13.2176C10.5281 13.2204 10.5152 13.2247 10.5022 13.2276C10.4548 13.2405 10.4074 13.2534 10.36 13.2663C10.3327 13.2735 10.3039 13.2821 10.2766 13.2907C10.2507 13.2979 10.2234 13.305 10.1976 13.3136C10.1401 13.3308 10.0826 13.3481 10.0266 13.3667C9.98488 13.3796 9.94321 13.3939 9.90297 13.4068C9.87998 13.414 9.85842 13.4212 9.83686 13.4298C9.7607 13.4556 9.68597 13.4814 9.6098 13.5101C9.58106 13.5201 9.55088 13.5316 9.52214 13.5431C9.49196 13.5545 9.46178 13.566 9.4316 13.5775C9.40429 13.5889 9.37555 13.599 9.34825 13.6104C9.331 13.6176 9.31232 13.6248 9.29508 13.632C9.24334 13.6535 9.1916 13.675 9.13987 13.6965C9.11688 13.7065 9.09388 13.7166 9.07089 13.7266L9.04789 13.7366C8.97748 13.7667 8.90706 13.7997 8.83664 13.8327C8.80502 13.847 8.77485 13.8614 8.74467 13.8771C8.71305 13.8929 8.68 13.9087 8.64838 13.9245C8.61676 13.9402 8.58371 13.956 8.55209 13.9718C8.53198 13.9818 8.51186 13.9933 8.4903 14.0033C8.44719 14.0248 8.40407 14.0478 8.36096 14.0707C8.31066 14.098 8.26036 14.1252 8.2115 14.1524C8.17989 14.1697 8.14827 14.1883 8.11809 14.2055C8.08791 14.2227 8.0563 14.2413 8.02612 14.2586C8.00456 14.2715 7.98444 14.2829 7.96288 14.2958C7.93414 14.313 7.90684 14.3302 7.87953 14.346C7.85654 14.3589 7.83498 14.3733 7.81199 14.3876C7.75019 14.4263 7.6884 14.465 7.62804 14.5052C7.60361 14.521 7.58062 14.5367 7.55762 14.5525C7.53175 14.5697 7.50589 14.5869 7.48002 14.6041C7.41391 14.0349 7.38086 13.4484 7.38086 12.8476C7.38086 12.8247 7.38086 12.8018 7.38086 12.7788H18.629C18.629 12.8018 18.629 12.8247 18.629 12.8476L18.6247 12.8433Z" fill="#C5E5D0"/>'
                + '<path d="M25.9971 12.7757C25.9971 12.6452 25.9914 12.5148 25.9856 12.3843C25.852 9.39037 24.7009 6.66173 22.87 4.53101C22.7637 4.40626 22.6544 4.28295 22.5409 4.1625C21.5594 3.10431 20.4039 2.20958 19.1177 1.52563C18.9654 1.4439 18.8102 1.36504 18.655 1.29048C16.9463 0.463138 15.0277 0 13 0C10.9723 0 9.05373 0.463138 7.34358 1.28904C7.18693 1.3636 7.03316 1.44247 6.88083 1.5242C5.59606 2.20958 4.4392 3.10431 3.45766 4.1625C3.34557 4.28295 3.23635 4.40626 3.12857 4.53101C1.2977 6.66029 0.146584 9.39037 0.0129339 12.3843C0.0071855 12.5148 0.0028742 12.6452 0.0014371 12.7757C0.0014371 12.8402 0 12.9062 0 12.9707C0 16.2557 1.22441 19.2553 3.24066 21.5395C3.78388 22.1561 4.38603 22.7196 5.03703 23.2243V21.627H20.9601V23.2243C21.6111 22.721 22.2132 22.1561 22.7565 21.5395C24.7742 19.2539 25.9971 16.2543 25.9971 12.9707C25.9971 12.9062 25.9971 12.8402 25.9957 12.7757H25.9971ZM21.1915 6.67463C21.2159 6.65026 21.2403 6.62588 21.2633 6.60151C21.2806 6.5843 21.2964 6.56853 21.3122 6.55132L21.3438 6.51834C21.3682 6.49253 21.3941 6.46672 21.4185 6.43948C21.4473 6.47676 21.476 6.51547 21.5033 6.55275C21.522 6.57856 21.5407 6.60294 21.5594 6.62875C21.5737 6.64882 21.5895 6.6689 21.6039 6.6904C21.6212 6.71478 21.6384 6.73916 21.6556 6.76353C21.6786 6.79508 21.7002 6.82806 21.7218 6.8596C21.7433 6.89115 21.7649 6.92269 21.785 6.95424C21.8022 6.98005 21.8195 7.00586 21.8367 7.03166C21.8626 7.07181 21.8885 7.11196 21.9143 7.15211C21.9718 7.24101 22.0264 7.33134 22.081 7.42311C22.0997 7.45465 22.1184 7.48477 22.1356 7.51631C22.1514 7.54355 22.1673 7.5708 22.1831 7.59947C22.196 7.62242 22.2089 7.64392 22.2204 7.66687C22.2391 7.70128 22.2578 7.73426 22.2765 7.76867C22.2937 7.80165 22.3124 7.83463 22.3296 7.86617L22.3498 7.90489C22.367 7.9393 22.3857 7.97371 22.4029 8.00813C22.413 8.0282 22.4245 8.04827 22.4346 8.06978C22.4561 8.11136 22.4762 8.15151 22.4964 8.19309C22.5107 8.2232 22.5251 8.25188 22.5395 8.28199C22.5524 8.31067 22.5668 8.33935 22.5797 8.36802C22.5869 8.38523 22.5955 8.401 22.6027 8.41821C22.6271 8.4727 22.6516 8.52718 22.676 8.58167C22.6846 8.60174 22.6932 8.62325 22.7033 8.64333C22.7162 8.67344 22.7292 8.70355 22.7407 8.73366C22.7536 8.76377 22.7665 8.79532 22.778 8.82543C22.7895 8.85267 22.7996 8.87991 22.8111 8.90716C22.8283 8.95161 22.8456 8.99606 22.8628 9.04051C22.87 9.06201 22.8786 9.08352 22.8872 9.1036C22.8987 9.13514 22.9102 9.16669 22.9217 9.1968C22.9289 9.21544 22.9347 9.23408 22.9419 9.25128C22.949 9.26992 22.9548 9.28857 22.962 9.30721C22.972 9.33445 22.9807 9.36169 22.9907 9.39037V9.39324C23.0008 9.41905 23.0094 9.44629 23.018 9.47353C23.0396 9.53806 23.0597 9.60258 23.0798 9.66854C23.0899 9.70152 23.0999 9.73306 23.11 9.76604C23.1201 9.79902 23.1287 9.832 23.1387 9.86354C23.1474 9.89509 23.1574 9.92807 23.166 9.95961C23.1747 9.99259 23.1833 10.0241 23.1919 10.0571C23.1991 10.0858 23.2077 10.1145 23.2149 10.1446C23.225 10.1804 23.2336 10.2163 23.2422 10.2536C23.2494 10.2837 23.2566 10.3123 23.2638 10.3425C23.2695 10.3668 23.2753 10.3912 23.281 10.4141L23.2839 10.4256C23.2882 10.4414 23.2911 10.4572 23.2939 10.4729V10.483C23.3026 10.5088 23.3069 10.5346 23.3126 10.5604C23.3184 10.5891 23.3256 10.6192 23.3313 10.6479V10.6565L23.3399 10.6894V10.6923C23.3442 10.7081 23.3471 10.7239 23.35 10.7382C23.3572 10.7755 23.3644 10.8128 23.3715 10.8515C23.3773 10.883 23.383 10.9146 23.3888 10.9461C23.3917 10.9633 23.3945 10.9791 23.3974 10.9963C23.4003 11.0135 23.4032 11.0293 23.406 11.0465C23.4118 11.0795 23.4175 11.1139 23.4218 11.1469C23.4247 11.1641 23.4276 11.1798 23.429 11.197C23.4319 11.2128 23.4333 11.23 23.4362 11.2472C23.4463 11.316 23.4549 11.3834 23.4635 11.4523C23.4678 11.4867 23.4721 11.5197 23.4765 11.5541C23.4808 11.5885 23.4851 11.6215 23.488 11.6559C23.498 11.7419 23.5052 11.8265 23.5124 11.9125C23.5153 11.9556 23.5196 11.9986 23.5224 12.0416C23.5253 12.0846 23.5282 12.1276 23.5296 12.1706C23.5339 12.2395 23.5368 12.3097 23.5397 12.3785H19.0171C18.9711 11.0895 18.7369 9.86641 18.3704 8.7566C18.5142 8.68204 18.655 8.60318 18.7944 8.52288C18.8332 8.50137 18.872 8.47843 18.9094 8.45549C18.9395 8.43685 18.9711 8.41821 19.0028 8.39957C19.0373 8.37806 19.0717 8.35799 19.1062 8.33648C19.1738 8.2949 19.2428 8.25045 19.3089 8.206C19.3333 8.19023 19.3563 8.17445 19.3807 8.15868L19.3908 8.15151C19.4095 8.13861 19.4281 8.12714 19.4483 8.11423C19.4655 8.10276 19.4828 8.09129 19.4986 8.07982L19.5072 8.07408H19.5086C19.5417 8.04971 19.5747 8.02676 19.6078 8.00382C19.6408 7.98088 19.6739 7.95794 19.7055 7.935C19.7314 7.91779 19.7558 7.89915 19.7817 7.88051C19.796 7.87047 19.8104 7.86044 19.8248 7.84897L19.842 7.83606C19.8679 7.81742 19.8938 7.79878 19.9182 7.78014C19.9426 7.7615 19.9671 7.74429 19.9901 7.72565C20.0145 7.70845 20.0375 7.68981 20.0619 7.67117C20.0964 7.64392 20.1323 7.61668 20.1654 7.58944C20.1941 7.5665 20.2243 7.54355 20.253 7.51918C20.2832 7.4948 20.3134 7.47043 20.3436 7.44462L20.3809 7.41307L20.3967 7.40017C20.4169 7.38296 20.437 7.36719 20.4571 7.34855L20.4744 7.33421C20.506 7.3084 20.5361 7.28116 20.5678 7.25391C20.5807 7.24244 20.5936 7.23097 20.6066 7.2195C20.6597 7.17218 20.7143 7.12487 20.7661 7.07611C20.7905 7.05317 20.8164 7.03023 20.8408 7.00729C20.8925 6.95854 20.9457 6.90979 20.996 6.8596C21.0104 6.84526 21.0248 6.83236 21.0391 6.81802C21.0578 6.80081 21.0751 6.78217 21.0937 6.76497C21.1124 6.74776 21.1297 6.72912 21.1469 6.71191C21.1613 6.69757 21.1757 6.68324 21.1886 6.6689L21.1915 6.67463ZM13.1954 5.35261H13.2069C13.2788 5.34974 13.3507 5.34688 13.4211 5.34257H13.4527C13.4714 5.33971 13.4901 5.33827 13.5087 5.33684C13.5245 5.33684 13.5389 5.33397 13.5547 5.33397C13.5763 5.33254 13.5978 5.3311 13.6194 5.32824C13.6409 5.3268 13.6625 5.32393 13.6826 5.3225C13.697 5.3225 13.7114 5.31963 13.7257 5.3182C13.743 5.31676 13.7588 5.31533 13.776 5.31246C13.7947 5.31103 13.8134 5.30816 13.8321 5.30673H13.845L13.8795 5.30099C13.8924 5.30099 13.9068 5.29812 13.9197 5.29526C13.9327 5.29382 13.947 5.29239 13.96 5.28952C14.0031 5.28379 14.0448 5.27662 14.0864 5.26945C14.1008 5.26801 14.1152 5.26515 14.1296 5.26228C14.1425 5.26084 14.1569 5.25798 14.1698 5.25511C14.1827 5.25367 14.1971 5.25081 14.21 5.24794C14.2488 5.24077 14.2876 5.2336 14.3264 5.22643C14.3451 5.22356 14.3638 5.21926 14.3811 5.21496C14.4026 5.21066 14.4242 5.20636 14.4472 5.20062C14.4773 5.19489 14.5061 5.18772 14.5363 5.18055C14.5664 5.17338 14.5966 5.16621 14.6268 5.15904C14.6498 5.1533 14.6742 5.14757 14.6972 5.14183C14.7202 5.1361 14.7446 5.13036 14.7676 5.12319H14.7691C14.7935 5.11602 14.8179 5.11029 14.8424 5.10312C14.8682 5.09595 14.8941 5.08878 14.92 5.08018C14.9458 5.07301 14.9731 5.0644 14.999 5.0558L15.0177 5.05007C15.0407 5.0429 15.0637 5.03573 15.0867 5.02856C15.1355 5.01278 15.1844 4.99558 15.2333 4.97981L15.2692 4.9669C15.308 4.954 15.3468 4.93966 15.3856 4.92389C15.4071 4.91528 15.4287 4.90811 15.4503 4.89951C15.479 4.88947 15.5063 4.878 15.5336 4.86653C15.5566 4.85649 15.5796 4.84789 15.604 4.83785L15.617 4.83212C16.5051 5.70821 17.3084 6.97574 17.8617 8.49134C17.8387 8.50281 17.8157 8.51428 17.7927 8.52432C17.7697 8.53579 17.7467 8.54582 17.7237 8.55729C17.6778 8.5788 17.6318 8.60031 17.5858 8.62182C17.5398 8.64333 17.4924 8.66483 17.4449 8.68491C17.3975 8.70498 17.3501 8.72506 17.3041 8.74513C17.2811 8.75517 17.2567 8.7652 17.2323 8.77524C17.2078 8.78528 17.1848 8.79532 17.1604 8.80392C17.1388 8.81252 17.1159 8.82113 17.0943 8.83116C17.0684 8.8412 17.0426 8.85124 17.0181 8.86127C16.9865 8.87418 16.9535 8.88565 16.9218 8.89855C16.8586 8.92293 16.7939 8.94731 16.7293 8.97025C16.6818 8.98745 16.633 9.00323 16.5856 9.02043C16.5453 9.03334 16.5051 9.04768 16.4648 9.06058C16.4447 9.06632 16.426 9.07349 16.4059 9.07922L16.3944 9.08209C16.3801 9.08639 16.3671 9.09069 16.3528 9.09499L16.3427 9.09786C16.3183 9.10646 16.2938 9.11363 16.268 9.1208C16.186 9.14661 16.1056 9.16955 16.0237 9.19393C15.9834 9.2054 15.9417 9.21687 15.9015 9.22834C15.8411 9.24411 15.7808 9.26132 15.719 9.27566C15.7046 9.27996 15.6903 9.28283 15.6759 9.28713H15.6673C15.6256 9.30004 15.5839 9.31007 15.5437 9.31868L15.5307 9.32154C15.5077 9.32728 15.4833 9.33301 15.4603 9.33732L15.4488 9.34018C15.4301 9.34449 15.4115 9.34879 15.3928 9.35309L15.3755 9.35596C15.3525 9.36026 15.3295 9.36599 15.308 9.37029C15.2792 9.37603 15.2519 9.38177 15.2232 9.3875C15.2031 9.3918 15.1844 9.3961 15.1643 9.39897C15.1212 9.40758 15.078 9.41618 15.0335 9.42335C15.0091 9.42765 14.9846 9.43195 14.9602 9.43625L14.9473 9.43912C14.93 9.44199 14.9142 9.44486 14.897 9.44772C14.8668 9.45346 14.838 9.45776 14.8079 9.46206C14.7892 9.46493 14.7691 9.46923 14.7504 9.4721L14.7231 9.4764C14.6915 9.48214 14.6599 9.48644 14.6282 9.49074H14.6254C14.5779 9.49791 14.5305 9.50508 14.4831 9.51081C14.4443 9.51655 14.4055 9.52085 14.3652 9.52515H14.3509C14.3308 9.52945 14.3106 9.53232 14.2905 9.53376L14.269 9.53662C14.256 9.53662 14.2431 9.53949 14.2302 9.54093H14.2215C14.187 9.54523 14.154 9.54953 14.1209 9.5524C14.0922 9.55526 14.0649 9.55813 14.0361 9.561C14.0088 9.56387 13.9801 9.56673 13.9514 9.56817C13.9284 9.5696 13.9054 9.57247 13.8838 9.5739H13.8723C13.8522 9.57677 13.8306 9.57821 13.8105 9.57964H13.8048C13.7803 9.58107 13.7545 9.58394 13.7286 9.58537C13.6467 9.59111 13.5648 9.59541 13.4814 9.59828C13.4642 9.59828 13.4469 9.59971 13.4297 9.59971H13.3995C13.3679 9.60258 13.3348 9.60258 13.3032 9.60402C13.2687 9.60402 13.2342 9.60545 13.1998 9.60688V5.34831L13.1954 5.35261ZM14.6369 4.62277C14.6153 4.62851 14.5937 4.63425 14.5722 4.63998C14.5578 4.64428 14.542 4.64715 14.5262 4.65145C14.5104 4.65575 14.4931 4.66006 14.4773 4.66292C14.3164 4.70164 14.154 4.73462 13.9873 4.76043C13.9629 4.76473 13.9384 4.76759 13.9126 4.7719C13.8881 4.77476 13.8623 4.77907 13.8378 4.78193C13.8134 4.7848 13.7875 4.7891 13.7631 4.79197C13.7387 4.79484 13.7128 4.79771 13.6884 4.80057L13.6381 4.80631C13.618 4.80774 13.5993 4.81061 13.5792 4.81204C13.5231 4.81778 13.4671 4.82208 13.411 4.82495C13.3938 4.82495 13.378 4.82638 13.3607 4.82782H13.3507C13.3291 4.82925 13.3075 4.83068 13.286' 
                + '4.83212C13.2558 4.83212 13.2256 4.83499 13.1954 4.83499V3.53447C13.8479 3.58896 14.5334 3.91158 15.1873 4.44784C15.0076 4.51523 14.8237 4.57402 14.6369 4.62421V4.62277ZM12.8031 4.83499C12.7729 4.83499 12.7428 4.83355 12.7126 4.83212C12.691 4.83212 12.6695 4.83068 12.6479 4.82925H12.6379C12.6206 4.82782 12.6048 4.82638 12.5876 4.82638C12.5315 4.82352 12.4755 4.81778 12.4194 4.81348C12.3993 4.81204 12.3806 4.81061 12.3605 4.80774L12.3102 4.80201C12.2858 4.79914 12.2599 4.79627 12.2355 4.7934C12.211 4.79054 12.1852 4.78767 12.1607 4.78337C12.1363 4.7805 12.1104 4.7762 12.086 4.77333C12.0616 4.77046 12.0357 4.76616 12.0113 4.76186C11.846 4.73605 11.6822 4.70307 11.5212 4.66436C11.5054 4.66005 11.4882 4.65575 11.4724 4.65289C11.4566 4.64858 11.4422 4.64572 11.4264 4.64141C11.4048 4.63568 11.3833 4.62994 11.3603 4.62421C11.1734 4.57402 10.9895 4.51523 10.8099 4.44784C11.4637 3.91158 12.1492 3.58896 12.8017 3.53447V4.83499H12.8031ZM10.8602 5.01422C10.9061 5.02999 10.9521 5.04433 10.9996 5.05867C11.0254 5.06727 11.0527 5.07444 11.0786 5.08304C11.1318 5.09882 11.1849 5.11316 11.2381 5.12749C11.2625 5.13323 11.287 5.1404 11.3114 5.14613C11.333 5.15187 11.3545 5.15761 11.3761 5.16191C11.3919 5.16621 11.4091 5.17051 11.4249 5.17338C11.4479 5.17911 11.4709 5.18485 11.4954 5.18915C11.5428 5.20062 11.5888 5.21066 11.6362 5.21926C11.6664 5.225 11.6966 5.23217 11.7282 5.23647C11.8316 5.25654 11.9351 5.27375 12.04 5.28809C12.053 5.28952 12.0673 5.29239 12.0803 5.29382C12.0932 5.29526 12.1076 5.29812 12.1205 5.29956L12.155 5.30386H12.1679C12.1866 5.30816 12.2053 5.30959 12.224 5.31246C12.2398 5.3139 12.257 5.31676 12.2743 5.3182C12.2886 5.31963 12.303 5.32107 12.3174 5.3225C12.3389 5.32537 12.3605 5.3268 12.382 5.32824C12.4036 5.32967 12.4252 5.33254 12.4467 5.33397C12.4625 5.33397 12.4769 5.33684 12.4927 5.33684C12.5114 5.33684 12.5301 5.33971 12.5488 5.34114H12.5804C12.6508 5.34831 12.7226 5.35118 12.7945 5.35261H12.806V9.61262C12.7715 9.61262 12.737 9.61262 12.7025 9.60975C12.6695 9.60975 12.6379 9.60832 12.6062 9.60688H12.5761C12.5588 9.60545 12.5416 9.60402 12.5243 9.60402C12.4913 9.60258 12.4582 9.60115 12.4237 9.59971C12.4079 9.59971 12.3921 9.59828 12.3763 9.59685H12.3648C12.3361 9.59541 12.3088 9.59254 12.28 9.59111C12.2656 9.59111 12.2527 9.58968 12.2383 9.58824H12.2225C12.1895 9.58537 12.1579 9.58251 12.1248 9.57964H12.0989C12.0644 9.57534 12.03 9.57247 11.9955 9.56817L11.9624 9.5653C11.9207 9.561 11.8791 9.5567 11.8374 9.5524H11.8173L11.7799 9.54666C11.7425 9.54236 11.7037 9.53806 11.6664 9.53376C11.6189 9.52802 11.5715 9.52228 11.5227 9.51511C11.481 9.50938 11.4393 9.50364 11.3976 9.49791C11.3344 9.48931 11.2726 9.47927 11.2094 9.46923C11.1778 9.4635 11.1447 9.45919 11.1131 9.45346L11.0815 9.44772C11.0441 9.44055 11.0053 9.43482 10.9679 9.42765C10.955 9.42478 10.9421 9.42191 10.9291 9.42048C10.8875 9.41188 10.8458 9.40471 10.8041 9.3961C10.7682 9.38894 10.7337 9.38177 10.6978 9.3746C10.6791 9.37029 10.659 9.36743 10.6403 9.36169H10.6302C10.5943 9.35166 10.5569 9.34449 10.521 9.33588C10.4822 9.32728 10.442 9.31724 10.4032 9.30864L10.3874 9.30434C10.3672 9.30004 10.3471 9.2943 10.3284 9.29H10.3241C10.3112 9.2857 10.2983 9.28283 10.2853 9.27996L10.2767 9.27709C10.2508 9.27136 10.2264 9.26419 10.2005 9.25702C10.179 9.25128 10.1574 9.24555 10.1344 9.23981C10.1143 9.23408 10.0942 9.22978 10.0741 9.22404C10.0453 9.21687 10.0166 9.20827 9.98784 9.2011C9.9591 9.1925 9.93036 9.18533 9.90161 9.17672C9.87 9.16812 9.83982 9.15952 9.80964 9.14948C9.7694 9.13801 9.72916 9.1251 9.68892 9.1122C9.64294 9.09786 9.59839 9.08352 9.5524 9.06918C9.50641 9.05484 9.46186 9.03907 9.41731 9.0233C9.38282 9.01183 9.34689 8.99892 9.3124 8.98602C9.29947 8.98172 9.28654 8.97598 9.2736 8.97168C9.196 8.94444 9.11839 8.91576 9.04223 8.88565C9.01636 8.87561 8.98906 8.86557 8.96319 8.85554C8.94307 8.84837 8.92295 8.83977 8.90139 8.83116C8.88127 8.82256 8.85972 8.81539 8.8396 8.80679C8.79792 8.79101 8.75768 8.77381 8.71744 8.7566H8.71457L8.68727 8.7437H8.68295V8.74083C8.65709 8.73079 8.63122 8.71932 8.60535 8.70785C8.53637 8.67917 8.46883 8.64906 8.40128 8.61752C8.36967 8.60318 8.33805 8.58884 8.30643 8.57307L8.29494 8.56733L8.27338 8.55729H8.26907V8.55443C8.24751 8.54439 8.22739 8.53579 8.20727 8.52575C8.18572 8.51571 8.16272 8.50424 8.14117 8.4942C8.69301 6.97861 9.49635 5.71108 10.3859 4.83499L10.4003 4.84072C10.4204 4.84932 10.4405 4.85793 10.4592 4.8651C10.5483 4.90094 10.6374 4.93536 10.7279 4.9669C10.7509 4.9755 10.7739 4.98267 10.7969 4.99128C10.8199 4.99988 10.8429 5.00705 10.8659 5.01422H10.8602ZM8.27051 9.07635C8.31218 9.09643 8.3553 9.11507 8.39841 9.13227L8.42428 9.14374C8.46739 9.16238 8.50906 9.18103 8.55218 9.19823L8.56511 9.20397C8.61254 9.22261 8.65996 9.24268 8.70738 9.26132C8.73325 9.27136 8.75912 9.2814 8.78499 9.29143C8.85828 9.32011 8.93157 9.34735 9.00486 9.3746L9.04223 9.3875L9.07528 9.39897C9.10834 9.41044 9.14139 9.42335 9.17444 9.43482C9.20318 9.44486 9.23049 9.45489 9.25923 9.46493C9.27935 9.4721 9.29803 9.47783 9.31815 9.485C9.34689 9.49504 9.3742 9.50364 9.40294 9.51368C9.42162 9.51942 9.4403 9.52515 9.45899 9.53232H9.46186C9.48917 9.54236 9.51647 9.55096 9.54378 9.55956C9.5797 9.57104 9.61563 9.58251 9.65156 9.59254C9.68461 9.60258 9.71623 9.61262 9.74928 9.62122C9.82257 9.64273 9.89587 9.6628 9.96916 9.68288C9.9864 9.68718 10.0036 9.69291 10.0209 9.69722C10.0539 9.70582 10.0856 9.71442 10.1186 9.72303C10.143 9.73019 10.1689 9.73593 10.1933 9.74167H10.1962C10.2092 9.74597 10.2221 9.74884 10.2365 9.7517L10.2523 9.756C10.2839 9.76461 10.3155 9.77178 10.3486 9.77895C10.3658 9.78325 10.383 9.78755 10.4017 9.79185C10.419 9.79615 10.4362 9.80045 10.4549 9.80332H10.4592C10.4937 9.81192 10.5282 9.81909 10.5627 9.82626C10.5828 9.83056 10.6044 9.83487 10.6245 9.83917C10.6978 9.85494 10.7696 9.86928 10.8429 9.88362C10.8573 9.88649 10.8717 9.88935 10.886 9.89222L10.9133 9.89652C10.9493 9.90369 10.9852 9.90943 11.0197 9.91516C11.07 9.92377 11.1188 9.93237 11.1691 9.93954C11.2166 9.94671 11.2625 9.95388 11.31 9.96105C11.3588 9.96822 11.4077 9.97539 11.4566 9.98112L11.4939 9.98686C11.5356 9.99259 11.5773 9.99689 11.6175 10.0026C11.6678 10.0084 11.7181 10.0141 11.7684 10.0198C11.8647 10.0299 11.9624 10.0399 12.0601 10.0471H12.0788C12.1708 10.0557 12.2628 10.0614 12.3547 10.0672C12.3734 10.0672 12.3935 10.0686 12.4122 10.07C12.4956 10.0743 12.5804 10.0772 12.6652 10.0801C12.6838 10.0801 12.7025 10.0801 12.7198 10.0815C12.7471 10.0815 12.7744 10.0815 12.8017 10.0829V12.3857H7.38382C7.42693 11.1612 7.64537 9.99833 7.98452 8.943L7.99602 8.94731C8.03913 8.96881 8.08368 8.99032 8.12823 9.0104C8.17566 9.03334 8.22452 9.05484 8.27338 9.07635H8.27051ZM13.1954 10.0829C13.2228 10.0829 13.2501 10.0829 13.2774 10.0815C13.296 10.0815 13.3147 10.0815 13.332 10.0801C13.4168 10.0786 13.5001 10.0743 13.5849 10.07C13.6036 10.07 13.6237 10.0686 13.6424 10.0672C13.6769 10.0657 13.7114 10.0629 13.7459 10.0614C13.7631 10.0614 13.7818 10.0585 13.799 10.0585C13.8795 10.0528 13.96 10.0471 14.0405 10.0385H14.0419C14.0563 10.0385 14.0721 10.0356 14.0864 10.0342H14.1037C14.1238 10.0313 14.1439 10.0284 14.1626 10.027L14.187 10.0241C14.2057 10.0227 14.2258 10.0198 14.2445 10.0184C14.2891 10.0141 14.3336 10.0084 14.3782 10.0041C14.417 9.99976 14.4543 9.99546 14.4931 9.98972H14.5075C14.5205 9.98686 14.5348 9.98542 14.5478 9.98255L14.5664 9.97969C14.5837 9.97825 14.6009 9.97539 14.6167 9.97252L14.6527 9.96678C14.6728 9.96391 14.6929 9.96105 14.713 9.95818C14.736 9.95531 14.7576 9.95101 14.7806 9.94814C14.8036 9.94527 14.8251 9.94097 14.8481 9.9381H14.8582C14.897 9.93093 14.9358 9.92377 14.976 9.9166C15.0119 9.91086 15.0479 9.90369 15.0824 9.89796C15.101 9.89509 15.1197 9.89079 15.1398 9.88792C15.17 9.88218 15.2002 9.87645 15.2289 9.87071C15.2519 9.86641 15.2735 9.86211 15.2965 9.85781C15.3267 9.85207 15.3583 9.8449 15.3899 9.83917C15.4115 9.83487 15.433 9.83056 15.456 9.82483C15.5092 9.81336 15.5609 9.80189 15.6141 9.78898C15.6673 9.77751 15.719 9.76461 15.7707 9.7517C15.7908 9.7474 15.811 9.74167 15.8311 9.73736C15.8512 9.73306 15.8713 9.72733 15.8914 9.72159C15.9216 9.71442 15.9518 9.70582 15.9834 9.69722C15.9978 9.69435 16.0107 9.69005 16.0251 9.68575C16.1027 9.66424 16.1789 9.64416 16.255 9.62122C16.2766 9.61549 16.2967 9.60832 16.3183 9.60258H16.3211C16.3398 9.59541 16.3599 9.59111 16.3786 9.58394L16.3916 9.57964C16.4117 9.5739 16.4304 9.56817 16.4505 9.561C16.4692 9.55526 16.4878 9.54953 16.5065 9.54379L16.5166 9.54093H16.518C16.5424 9.53232 16.5669 9.52515 16.5913 9.51655C16.6229 9.50651 16.6531 9.49648 16.6847 9.485C16.7178 9.47353 16.7523 9.46206 16.7853 9.45059L16.8054 9.44342C16.8327 9.43482 16.8586 9.42478 16.8859 9.41475C16.9621 9.3875 17.0382 9.36026 17.1144 9.33015C17.1273 9.32441 17.1417 9.32011 17.1561 9.31437C17.1834 9.30434 17.2107 9.2943 17.238 9.28283C17.2567 9.27566 17.2739 9.26849 17.2926 9.26132C17.3415 9.24125 17.3903 9.22117 17.4392 9.2011C17.4622 9.19106 17.4866 9.18103 17.5096 9.17242L17.58 9.14231C17.6418 9.1165 17.7022 9.08926 17.7625 9.06201C17.7913 9.04911 17.8186 9.03621 17.8473 9.0233C17.9048 8.99749 17.9623 8.97025 18.0184 8.943C18.3575 9.99833 18.5745 11.1612 18.6191 12.3857H13.1983V10.0829H13.1954ZM17.3731 3.76532C17.4047 3.73808 17.4363 3.71227 17.4679 3.68503C17.5484 3.61477 17.626 3.54451 17.7022 3.46995C17.7281 3.44557 17.7539 3.41976 17.7798 3.39539C19.0703 4.0521 20.2085 4.96547 21.1239 6.06811C21.0981 6.09679 21.0707 6.12403 21.0449 6.15271C21.0276 6.17135 21.0104 6.18855 20.9931 6.20719C20.9788 6.22153 20.9644 6.2373 20.95 6.25164C20.9371 6.26455 20.9242 6.27889 20.9112 6.29179C20.8925 6.31187 20.8739 6.33194 20.8537 6.35058C20.8207 6.38356 20.7876 6.41654 20.7546 6.44808L20.7187 6.48249C20.6899 6.50974 20.6626 6.53698 20.6339 6.56422C20.6008 6.5972 20.5663 6.62875 20.5318 6.65886C20.4729 6.71335 20.414 6.76783 20.3536 6.82089C20.335 6.83809 20.3163 6.85387 20.2976 6.87107L20.2933 6.87394C20.2775 6.88828 20.2602 6.90262 20.243 6.91696L20.23 6.92843L20.1984 6.95567C20.1381 7.00729 20.0763 7.05891 20.0145 7.10909L19.98 7.13777L19.9757 7.14207C19.9498 7.16358 19.9239 7.18365 19.8981 7.20516C19.8622 7.23384 19.8248 7.26252 19.7889 7.29119C19.7587 7.31557 19.7271 7.33851 19.6969 7.36145L19.661 7.3887L19.6466 7.39873C19.6308 7.4102 19.615 7.42311 19.5992 7.43458L19.5877 7.44318C19.5675 7.45752 19.5474 7.47329 19.5273 7.48763L19.5129 7.49767L19.4741 7.52635C19.4382 7.55216 19.4023 7.57797 19.3663 7.60378C19.3434 7.61955 19.3204 7.63532 19.2974 7.65109C19.2672 7.6726 19.237 7.69268 19.2054 7.71418C19.1407 7.75863 19.0746 7.80165 19.0085 7.84466C18.9812 7.86187 18.9539 7.88051 18.9252 7.89772C18.895 7.91779 18.8648 7.93643 18.8346 7.95507H18.8332L18.803 7.97515C18.7728 7.99379 18.7441 8.01099 18.7153 8.02963C18.6823 8.04971 18.6492 8.06978 18.6162 8.08986C18.5501 8.12857 18.4825 8.16728 18.415 8.206C18.3891 8.22034 18.3633 8.23468 18.3374 8.24901L18.3029 8.26765L18.2641 8.28916C18.2468 8.2992 18.2282 8.30924 18.2109 8.31784C17.6562 6.83379 16.8658 5.57629 15.9863 4.67153C16.0078 4.66149 16.028 4.65145 16.0481 4.63998C16.0696 4.62994 16.0898 4.61847 16.1099 4.60844C16.1271 4.59983 16.1429 4.59123 16.1587 4.58263C16.1918 4.56542 16.2248 4.54678 16.2579 4.52957C16.2823 4.51667 16.3053 4.50376 16.3298 4.48943C16.3628 4.47078 16.3973 4.45071 16.4304 4.43207L16.4634 4.412C16.4878 4.39766 16.5108 4.38332 16.5353 4.36898C16.5583 4.35464 16.5813 4.34174 16.6028 4.3274C16.6603 4.29155 16.7178 4.25427 16.7738 4.21699C16.8083 4.19405 16.8428 4.16967 16.8773 4.1453C16.8989 4.13096 16.919 4.11662 16.9405 4.10085C16.9578 4.08794 16.9765 4.07504 16.9937 4.06213C17.0066 4.0521 17.0196 4.04349 17.0325 4.03346L17.0713 4.00478C17.0914 3.99044 17.1115 3.97467 17.1317 3.9589L17.1432 3.95029C17.169 3.93022 17.1949 3.91014 17.2208 3.88864L17.2409 3.87286C17.2696 3.84992 17.2984 3.82698 17.3257 3.80404C17.34 3.79257 17.3558 3.77966 17.3702 3.76676L17.3731 3.76532ZM17.1935 3.23336L17.1719 3.25344C17.1446 3.27781 17.1173 3.30219 17.09 3.32513H17.0885C17.0627 3.3495 17.0354 3.37101 17.0095 3.39395L16.9851 3.41403C16.9563 3.4384 16.9276 3.46135 16.8974 3.48429C16.8715 3.50436 16.8457 3.52444 16.8198 3.54451L16.7839 3.57175L16.7666 3.58466C16.7465 3.60043 16.725 3.6162 16.7048 3.63054L16.6689 3.65635C16.643 3.67499 16.6186 3.6922 16.5927 3.71084L16.5798 3.71944C16.5511 3.73951 16.5209 3.75959 16.4907 3.77966C16.4706 3.79257 16.4505 3.80691 16.4304 3.81981C16.4117 3.83272 16.393 3.84419 16.3729 3.85709H16.3686C16.3484 3.87286 16.3283 3.88434 16.3068 3.89724C16.2637 3.92448 16.2205 3.95029 16.176 3.9761C16.1573 3.98757 16.1386 3.99761 16.1199 4.00908C15.992 4.08221 15.8613 4.15247 15.7276 4.21699C15.7118 4.22416 15.6974 4.23133 15.6816 4.23993C15.6673 4.2471 15.6514 4.25427 15.6371 4.26144C15.6198 4.27004 15.6012 4.27865 15.5839 4.28582C14.8064 3.60186 13.9801 3.18891 13.1954 3.13012V2.25833C14.6469 2.28414 16.028 2.6039 17.2782 3.1588C17.2509 3.18461 17.2222 3.21042 17.1935 3.23623V3.23336ZM12.8031 2.25547V3.12726C12.0185 3.18748 11.1907 3.599 10.4147 4.28438C10.396 4.27721 10.3787 4.26861 10.36 4.26001C10.2221 4.19548 10.087 4.12809 9.95479 4.05353C9.93898 4.04493 9.92461 4.03632 9.9088 4.02772L9.87575 4.00908C9.8585 3.99904 9.84126 3.98901 9.82257 3.97897C9.77802 3.95316 9.73347 3.92592 9.68892 3.89867C9.64725 3.87286 9.60701 3.84705 9.56677 3.82124C9.54665 3.80834 9.52653 3.79544 9.50641 3.7811C9.47623 3.76102 9.44749 3.74095 9.41731 3.72087L9.40438 3.71227C9.37851 3.69507 9.35264 3.67642 9.32821 3.65778L9.29228 3.63198C9.27217 3.61764 9.25061 3.60186 9.23049 3.58609L9.21324 3.57319L9.17732 3.54594C9.15145 3.52587 9.12558 3.5058 9.09971 3.48572C9.06953 3.46278 9.04079 3.4384 9.01205 3.41546L8.98762 3.39539C8.96175 3.37388 8.93445 3.35094 8.90858 3.32943H8.90714C8.87984 3.30362 8.85109 3.28068 8.82523 3.2563L8.80367 3.23623C8.77493 3.21042 8.74762 3.18461 8.71888 3.1588C9.97059 2.6039 11.3502 2.28414 12.8017 2.25833L12.8031 2.25547ZM8.21877 3.39395C8.25182 3.42693 8.28488 3.45848 8.31793 3.49002L8.35673 3.52587L8.3711 3.54021C8.38691 3.55455 8.40272 3.56889 8.41853 3.58322C8.45014 3.6119 8.48176 3.64058 8.51481 3.66926C8.53206 3.68359 8.54787 3.69793 8.56511 3.71227L8.59098 3.73378L8.61685 3.75529C8.63409 3.76963 8.65134 3.78396 8.66858 3.79974C8.69445 3.82124 8.72032 3.84275 8.74762 3.86426C8.77349 3.88577 8.8008 3.90584 8.8281 3.92735C8.86115 3.95316 8.89421 3.97754 8.92726 4.00335C8.94738 4.01768 8.96606 4.03202 8.98618 4.04636C9.01061 4.065 9.03648 4.08221 9.06091 4.10085C9.08534 4.11805 9.10977 4.13526 9.1342 4.15247C9.15432 4.16681 9.17444 4.17971 9.196 4.19405C9.27073 4.24423 9.34546 4.29299 9.42306 4.3403L9.43743 4.34891C9.47336 4.37041 9.50929 4.39336 9.54521 4.41343C9.57252 4.4292 9.59982 4.44641 9.62856 4.46218C9.64725 4.47365 9.66593 4.48369 9.68605 4.49373C9.70473 4.5052 9.72485 4.51523 9.74353 4.52527C9.76796 4.53818 9.79096 4.55108 9.81539 4.56399C9.84126 4.57832 9.86712 4.59123 9.89299 4.60413C9.93323 4.62564 9.97347 4.64572 10.0137 4.66579C9.13277 5.57199 8.34236 6.82806 7.78908 8.3121L7.77471 8.3035C7.75171 8.2906 7.72728 8.27913 7.70429 8.26479L7.6971 8.26048C7.68273 8.25332 7.66836 8.24471 7.65399 8.23611H7.65112C7.63387 8.22464 7.61519 8.2146 7.59794 8.20456C7.49016 8.14434 7.38238 8.08269 7.27747 8.01816C7.26166 8.00956 7.24729 7.99952 7.23148 7.99092C7.16538 7.95077 7.09927 7.90919 7.0346 7.86761C7.0073 7.8504 6.97999 7.83319 6.95269 7.81455C6.92682 7.79878 6.90095 7.78157 6.87508 7.76437C6.84778 7.74716 6.82191 7.72852 6.79461 7.70988C6.7673 7.69268 6.74143 7.67404 6.71413 7.65539C6.67676 7.63102 6.64084 7.60521 6.60491 7.5794C6.57186 7.55646 6.5388 7.53352 6.50719 7.50914C6.49138 7.49767 6.47413 7.4862 6.45832 7.47473C6.44108 7.46182 6.4224 7.44892 6.40515 7.43458C6.38647 7.42167 6.36779 7.40734 6.3491 7.393C6.33186 7.38009 6.31461 7.36719 6.29593 7.35285C6.27869 7.33994 6.26144 7.32704 6.2442 7.3127C6.23126 7.30266 6.21833 7.29263 6.20539 7.28259C6.17953 7.26252 6.15366 7.24101 6.12779 7.22093L6.09905 7.19799L6.07318 7.17792C6.04731 7.15641 6.02145 7.13634 5.99558 7.11483L5.98983 7.10909C5.95534 7.08185 5.92229 7.05317 5.88923 7.02593C5.85618 6.99869 5.82456 6.97144 5.79151 6.94276C5.76852 6.92412 5.74696 6.90548 5.7254 6.88541C5.70241 6.86677 5.68085 6.8467 5.6593 6.82662C5.63774 6.80798 5.61475 6.78791 5.59319 6.76783C5.57163 6.74776 5.55008 6.72912 5.52852 6.70905C5.50265 6.68467 5.47535 6.66029 5.44948 6.63592C5.41786 6.60581 5.38625 6.5757 5.35463 6.54559L5.33164 6.52408C5.30577 6.4997 5.28134 6.47533 5.25691 6.45095C5.22817 6.42227 5.19943 6.3936 5.17068 6.36492C5.14194 6.33624 5.11464 6.30756 5.08589 6.27889L5.06003 6.25164C5.03128 6.22297 5.00398 6.19429 4.97668 6.16418C4.94506 6.1312 4.91344 6.09679 4.88183 6.06237C5.79726 4.95973 6.93544 4.04636 8.22596 3.38965L8.21877 3.39395ZM2.47037 12.1749C2.47325 12.1319 2.47612 12.0889 2.479 12.0459C2.48187 12.0029 2.48474 11.9599 2.48906 11.9168C2.49624 11.8308 2.50343 11.7448 2.51349 11.6602C2.51636 11.6258 2.52067 11.5913 2.52498 11.5584C2.52929 11.524 2.53361 11.4895 2.53792 11.4566C2.54654 11.3877 2.55516 11.3203 2.56522 11.2515C2.5681 11.2343 2.56953 11.2185 2.57241 11.2013C2.57528 11.1841 2.57816 11.1684 2.57959 11.1512C2.58534 11.1167 2.58965 11.0838 2.5954 11.0508C2.60115 11.0178 2.6069 10.9834 2.61265 10.9504C2.61839 10.9174 2.62414 10.8859 2.62989 10.8529C2.63277 10.8371 2.63564 10.8199 2.63851 10.8042C2.64139 10.7841 2.6457 10.7654 2.65001 10.7454C2.65432 10.721 2.65863 10.6966 2.66438 10.6737V10.6694L2.66869 10.6536V10.6507C2.67444 10.6221 2.68163 10.5919 2.68738 10.5633C2.696 10.5231 2.70462 10.4815 2.71468 10.4414C2.72187 10.4113 2.72905 10.3797 2.73624 10.3496C2.74342 10.3195 2.75061 10.2894 2.75779 10.2579C2.76642 10.222 2.77504 10.1862 2.7851 10.1489C2.79228 10.1202 2.79947 10.0915 2.80809 10.0614C2.81671 10.0284 2.82534 9.99689 2.83396 9.96391C2.83971 9.94384 2.84546 9.92377 2.8512 9.90369C2.85695 9.88362 2.8627 9.86354 2.86845 9.84347C2.8742 9.8234 2.87995 9.80332 2.8857 9.78325C2.89144 9.76317 2.89719 9.7431 2.90438 9.72303C2.91587 9.68288 2.92881 9.64273 2.94174 9.60402C2.94749 9.58394 2.95468 9.56387 2.96042 9.54379C2.97623 9.49504 2.99204 9.44772 3.00785 9.39897C3.01791 9.3703 3.02653 9.34162 3.03659 9.31294C3.04665 9.2857 3.05527 9.25845 3.06533 9.23121C3.07539 9.20397 3.08402 9.17672 3.09551 9.14948C3.10557 9.12224 3.11563 9.09643 3.12569 9.06918C3.14581 9.0147 3.16593 8.96164 3.18749 8.90859C3.19755 8.88135 3.20904 8.85554 3.2191 8.82829C3.25647 8.73653 3.29527 8.64476 3.33551 8.55443C3.34269 8.53722 3.34988 8.52145 3.35706 8.50424C3.36425 8.48704 3.37143 8.47126 3.38006 8.45406C3.40593 8.3967 3.43179 8.34078 3.4591 8.28343C3.47347 8.25332 3.48784 8.2232 3.50221 8.19453C3.51658 8.16442 3.53095 8.13574 3.54532 8.10563C3.56688 8.06118 3.58987 8.01673 3.61143 7.97371C3.62293 7.9522 3.63442 7.92926 3.64592 7.90775C3.65742 7.88625 3.66891 7.8633 3.68041 7.8418C3.71059 7.78444 3.74221 7.72565 3.77526 7.6683C3.78676 7.64679 3.79825 7.62672 3.81119 7.60521C3.82987 7.5708 3.84999 7.53782 3.86867 7.50484C3.87586 7.49193 3.88448 7.4776 3.89166 7.46469C3.91897 7.41737 3.94627 7.37149 3.97502 7.32561C3.99082 7.29836 4.00807 7.27255 4.02388 7.24531C4.03969 7.2195 4.05549 7.19369 4.07274 7.16788C4.09142 7.13777 4.1101 7.10909 4.13022 7.07898C4.14459 7.05604 4.1604 7.03166 4.17621 7.00872C4.19346 6.98291 4.2107 6.95567 4.22795 6.92986C4.25813 6.88398 4.28974 6.83953 4.32136 6.79364C4.33573 6.77214 4.35154 6.75206 4.36591 6.73055C4.38459 6.70474 4.40183 6.67893 4.42052 6.65312C4.44639 6.61584 4.47369 6.58 4.49956 6.54415C4.52543 6.5083 4.55273 6.47246 4.58004 6.43661C4.63752 6.49683 4.695 6.55706 4.75249 6.61728C4.76973 6.63448 4.78698 6.65312 4.80422 6.67033C4.8574 6.72482 4.91201 6.77787 4.96662 6.83092C4.98242 6.8467 4.99823 6.86247 5.01404 6.87681C5.04566 6.90692 5.07727 6.93703 5.10889 6.96714C5.16493 7.02019 5.22098 7.07181 5.27847 7.12343C5.29715 7.14064 5.31727 7.15784 5.33595 7.17505C5.38912 7.22237 5.4423 7.26825 5.49547 7.31414C5.52708 7.34138 5.56014 7.36862 5.59175 7.39587C5.63056 7.42884 5.66936 7.46182 5.7096 7.49337C5.73977 7.51918 5.77139 7.54355 5.80301 7.56793C5.83319 7.5923 5.86337 7.61668 5.89498 7.63962C5.92516 7.664 5.95534 7.68694 5.98696 7.71132C6.04875 7.75863 6.11198 7.80595 6.17378 7.85183C6.18959 7.8633 6.20539 7.87478 6.21977 7.88625C6.2442 7.90345 6.26719 7.92066 6.29162 7.93787C6.31749 7.95651 6.34479 7.97515 6.37066 7.99379C6.41665 8.02533 6.46264 8.05831 6.50862 8.08842C6.52874 8.10276 6.5503 8.11566 6.57042 8.13L6.58335 8.13861C6.60347 8.15294 6.62503 8.16585 6.64515 8.18019H6.64658C6.67533 8.20026 6.70551 8.22034 6.73425 8.23898C6.75868 8.25475 6.78311 8.27052 6.80754 8.28629C6.83341 8.3035 6.86071 8.32071 6.88802 8.33648C6.90526 8.34795 6.92394 8.35942 6.94119 8.36946C6.95843 8.38093 6.97712 8.39097 6.99436 8.40244C7.01161 8.41391 7.02885 8.42395 7.0461 8.43398C7.06334 8.44402 7.08059 8.45549 7.09783 8.46553C7.13089 8.4856 7.16394 8.50424 7.19699 8.52432L7.2128 8.53292C7.24442 8.55156 7.27603 8.56877 7.30765 8.58741C7.37807 8.62755 7.44849 8.66627 7.5189 8.70498C7.55483 8.72362 7.59076 8.7437 7.62525 8.76234C7.25879 9.87215 7.0231 11.0952 6.97855 12.3843H2.46031C2.46319 12.3154 2.46606 12.2452 2.47037 12.1764V12.1749ZM7.0461 14.9093C7.02598 14.9236 7.0073 14.9394 6.98718 14.9538C6.94837 14.9839 6.90957 15.014 6.87077 15.0441L6.86502 15.0484C6.82766 15.0771 6.79173 15.1072 6.7558 15.1373C6.71844 15.1688 6.67964 15.2004 6.64227 15.2319C6.60778 15.262 6.57329 15.2907 6.5388 15.3208C6.49569 15.3581 6.45401 15.3954 6.41234 15.4327C6.37785 15.4628 6.34479 15.4943 6.31174 15.5244C6.27725 15.5574 6.24276 15.589 6.20827 15.6219C6.1939 15.6363 6.17809 15.6506 6.16372 15.665C6.14647 15.6807 6.12923 15.6979 6.11198 15.7151L6.09761 15.7295C6.06312 15.7639 6.02719 15.7983 5.99414 15.8327C5.95965 15.8671 5.9266 15.9015 5.89354 15.936C5.87055 15.9603 5.84612 15.9847 5.82313 16.0105C5.80876 16.0249 5.79582 16.0406 5.78145 16.055C5.75846 16.0808 5.73546 16.1052 5.71103 16.131C5.6363 16.2127 5.56445 16.2959 5.49259 16.379C5.47679 16.3977 5.46241 16.4149 5.44661 16.4335C5.4308 16.4521 5.41643 16.4708 5.40062 16.488C5.37331 16.521 5.34745 16.5539 5.32014 16.5855C5.3029 16.607 5.28565 16.6285 5.26841 16.65L5.25116 16.6701C5.23392 16.693 5.21667 16.7145 5.19943 16.7375C5.17643 16.7676 5.15344 16.7977 5.13044 16.8278C5.11176 16.8522 5.09452 16.8766 5.07583 16.9009C5.00398 16.997 4.935 17.0959 4.86746 17.1949C4.8459 17.2264 4.82434 17.258 4.80279 17.291C4.79416 17.3039 4.78554 17.3168 4.77692 17.3311L4.75249 17.3684C4.72806 17.4057 4.70363 17.4444 4.6792 17.4831C4.66051 17.5118 4.64327 17.5404 4.62602 17.5691C4.60447 17.6035 4.58435 17.6365 4.56423 17.6709C4.54411 17.7053 4.52399 17.7383 4.50387 17.7727C4.49381 17.7885 4.48519 17.8057 4.47513 17.8215C4.46507 17.8387 4.45501 17.8559 4.44495 17.8731C4.43201 17.8946 4.42052 17.9176 4.40758 17.9391L4.4004 17.952C4.38746 17.9749 4.37453 17.9978 4.3616 18.0208C4.34723 18.0452 4.33429 18.071 4.32136 18.0954C4.3113 18.1154 4.2998 18.1341 4.28974 18.1541C4.28256 18.1685 4.27393 18.1828 4.26675 18.1972C4.25669 18.2158 4.24807 18.2344 4.23801 18.2531C4.22795 18.2732 4.21645 18.2932 4.20783 18.3133C4.19489 18.3377 4.1834 18.3606 4.1719 18.385C4.16471 18.3979 4.15897 18.4122 4.15178 18.4251C4.14316 18.4409 4.13597 18.4581 4.12735 18.4753C3.0639 16.8321 2.44738 14.8749 2.44738 12.7757H6.96849C6.96849 12.7987 6.96849 12.8216 6.96849 12.8445C6.96849 13.5371 7.01304 14.2139 7.09927 14.8663C7.07915 14.8806 7.06047 14.8964 7.04035 14.9107L7.0461 14.9093ZM12.5229 12.9177C12.4697 12.9205 12.4165 12.9234 12.3648 12.9263C12.3231 12.9291 12.2815 12.932 12.2398 12.9349C12.2082 12.9377 12.1765 12.9392 12.1449 12.942C12.1162 12.9449 12.0874 12.9463 12.0587 12.9507C12.0343 12.9535 12.0084 12.955 11.984 12.9578C11.9567 12.9607 11.9294 12.9636 11.9006 12.9664C11.8532 12.9707 11.8072 12.9765 11.7612 12.9822C11.7411 12.9851 11.7195 12.9879 11.6994 12.9908C11.6764 12.9937 11.6534 12.9965 11.6304 13.0008C11.5859 13.0066 11.5413 13.0137 11.4954 13.0209C11.4767 13.0238 11.458 13.0266 11.4393 13.0295C11.4221 13.0324 11.4034 13.0352 11.3861 13.0381C11.3488 13.0439 11.31 13.051 11.2726 13.0582C11.2396 13.0639 11.2065 13.0697 11.1734 13.0768C11.1375 13.084 11.1002 13.0912 11.0642 13.0983C11.0455 13.1026 11.0254 13.1055 11.0067 13.1098C10.9723 13.117 10.9378 13.1241 10.9033 13.1313C10.8832 13.1356 10.8616 13.1399 10.8429 13.1442C10.8055 13.1528 10.7696 13.1614 10.7337 13.17C10.7121 13.1743 10.6906 13.1801 10.669 13.1858C10.6259 13.1958 10.5828 13.2073 10.5397 13.2188C10.5268 13.2217 10.5138 13.226 10.5009 13.2288C10.4535 13.2417 10.406 13.2546 10.3586 13.2675C10.3313 13.2747 10.3026 13.2833 10.2753 13.2919C10.2494 13.2991 10.2221 13.3062 10.1962 13.3149C10.1387 13.3321 10.0813 13.3493 10.0252 13.3679C9.98353 13.3808 9.94185 13.3951 9.90161 13.4081C9.87862 13.4152 9.85706 13.4224 9.83551 13.431C9.75934 13.4568 9.68461 13.4826 9.60845 13.5113C9.5797 13.5213 9.54952 13.5328 9.52078 13.5443C9.4906 13.5557 9.46043 13.5672 9.43025 13.5787C9.40294 13.5902 9.3742 13.6002 9.34689 13.6117C9.32965 13.6188 9.31097 13.626 9.29372 13.6332C9.24199 13.6547 9.19025 13.6762 9.13851 13.6977C9.11552 13.7077 9.09253 13.7178 9.06953 13.7278L9.04654 13.7378C8.97612 13.768 8.9057 13.8009 8.83529 13.8339C8.80367 13.8482 8.77349 13.8626 8.74331 13.8784C8.7117 13.8941 8.67864 13.9099 8.64703 13.9257C8.61541 13.9415 8.58236 13.9572 8.55074 13.973C8.53062 13.983 8.5105 13.9945 8.48895 14.0045C8.44583 14.026 8.40272 14.049 8.35961 14.0719C8.30931 14.0992 8.25901 14.1264 8.21015 14.1537C8.17853 14.1709 8.14692 14.1895 8.11674 14.2067C8.08656 14.2239 8.05494 14.2426 8.02476 14.2598C8.00321 14.2727 7.98309 14.2841 7.96153 14.297C7.93279 14.3143 7.90548 14.3315 7.87818 14.3472C7.85518 14.3601 7.83363 14.3745 7.81063 14.3888C7.74884 14.4275 7.68704 14.4662 7.62669 14.5064C7.60226 14.5222 7.57926 14.5379 7.55627 14.5537C7.5304 14.5709 7.50453 14.5881 7.47866 14.6053C7.41256 14.0361 7.3795 13.4496 7.3795 12.8488C7.3795 12.8259 7.3795 12.803 7.3795 12.78H12.8074V12.9134C12.7313 12.9134 12.6565 12.9162 12.5818 12.9205C12.5631 12.9205 12.5444 12.922 12.5272 12.9234L12.5229 12.9177ZM18.5256 14.601L18.517 14.5953C18.4883 14.5767 18.461 14.558 18.4322 14.5379C18.4006 14.5179 18.369 14.4964 18.3374 14.4763C18.3187 14.4648 18.3015 14.4533 18.2828 14.4404C18.2555 14.4232 18.2282 14.406 18.2009 14.3888C18.1736 14.3716 18.1463 14.3544 18.1189 14.3386C18.0112 14.2727 17.9034 14.2096 17.7942 14.1479C17.7582 14.1279 17.7223 14.1078 17.6849 14.0877L17.6519 14.0705L17.6217 14.0547C17.5369 14.0103 17.4521 13.9658 17.3673 13.9242C17.3386 13.9099 17.3113 13.897 17.2826 13.8827C17.2538 13.8683 17.2251 13.8554 17.1978 13.8425C17.1676 13.8282 17.1388 13.8153 17.1087 13.8009C17.0526 13.7751 16.9951 13.7493 16.9391 13.7249C16.9175 13.7149 16.8945 13.7063 16.873 13.6963C16.8471 13.6848 16.8198 13.6733 16.7939 13.6618C16.7408 13.6403 16.6876 13.6174 16.6344 13.5973C16.6086 13.5873 16.5813 13.5758 16.5539 13.5658C16.5266 13.5557 16.5008 13.5457 16.4735 13.5342C16.4189 13.5142 16.3657 13.4941 16.3111 13.474C16.2565 13.4539 16.2019 13.4353 16.1472 13.4167C16.1156 13.4066 16.0855 13.3951 16.0538 13.3851C16.0136 13.3722 15.9748 13.3593 15.9346 13.3464C15.9087 13.3378 15.8843 13.3306 15.8584 13.3235C15.8268 13.3134 15.7966 13.3048 15.765 13.2962C15.742 13.289 15.7176 13.2819 15.6946 13.2761C15.6514 13.2632 15.6083 13.2518 15.5638 13.2403C15.548 13.236 15.5322 13.2317 15.5164 13.2274C15.4833 13.2188 15.4503 13.2102 15.4172 13.2016C15.3813 13.193 15.3453 13.1844 15.3094 13.1758C15.2649 13.1643 15.2203 13.1543 15.1743 13.1442C15.1513 13.1385 15.1269 13.1328 15.1025 13.1284C15.0277 13.1127 14.953 13.0969 14.8783 13.0826C14.8625 13.0797 14.8467 13.0768 14.8309 13.074H14.8251C14.7935 13.0668 14.7633 13.0611 14.7317 13.0568C14.7058 13.0525 14.68 13.0482 14.6541 13.0439C14.6297 13.0396 14.6038 13.0352 14.5779 13.0309C14.5032 13.018 14.427 13.008 14.3509 12.9965C14.3135 12.9922 14.2776 12.9865 14.2402 12.9822C14.2043 12.9779 14.1698 12.9736 14.1339 12.9693C14.1008 12.965 14.0692 12.9621 14.0376 12.9593C14.0074 12.9564 13.9758 12.9521 13.9456 12.9507C13.9169 12.9478 13.8881 12.9449 13.8594 12.942C13.8278 12.9392 13.7962 12.9363 13.7645 12.9349C13.7229 12.932 13.6812 12.9291 13.6395 12.9263C13.5863 12.9234 13.5332 12.9191 13.4814 12.9177C13.4627 12.9177 13.4441 12.9162 13.4268 12.9148C13.3521 12.9119 13.2759 12.9091 13.2012 12.9076V12.7743H18.6291C18.6291 12.7972 18.6291 12.8202 18.6291 12.8431C18.6291 13.4439 18.5946 14.0303 18.53 14.5996L18.5256 14.601ZM21.8669 18.4768C21.8511 18.4423 21.8339 18.4094 21.818 18.3764C21.8051 18.3506 21.7936 18.3262 21.7807 18.3004C21.7663 18.2717 21.7519 18.243 21.7376 18.2158L21.7333 18.2086C21.7218 18.1871 21.7117 18.1656 21.7002 18.1441C21.6887 18.1226 21.6772 18.1011 21.6657 18.0796C21.647 18.0437 21.6269 18.0079 21.6068 17.972L21.5881 17.9391L21.5694 17.9061C21.5565 17.8817 21.5421 17.8573 21.5277 17.833C21.5119 17.8057 21.4961 17.7785 21.4803 17.7527C21.4602 17.7182 21.4401 17.6853 21.42 17.6509C21.3567 17.5447 21.2906 17.4415 21.2216 17.3383C21.203 17.311 21.1843 17.2824 21.1656 17.2551C21.1527 17.2365 21.1397 17.2164 21.1268 17.1963C21.0952 17.149 21.0621 17.1031 21.0291 17.0558C21.009 17.0271 20.9888 16.9999 20.9687 16.9712C20.9486 16.944 20.9285 16.9167 20.9084 16.888C20.8882 16.8608 20.8681 16.8336 20.8466 16.8063C20.825 16.7762 20.802 16.7475 20.779 16.7188C20.7603 16.6945 20.7417 16.6715 20.723 16.6472C20.6856 16.5998 20.6482 16.5525 20.6094 16.5052C20.5908 16.4823 20.5721 16.4593 20.552 16.4364C20.5261 16.4048 20.5002 16.3747 20.4744 16.3446C20.4514 16.3174 20.4284 16.2916 20.4054 16.2643C20.3752 16.2299 20.3465 16.1969 20.3163 16.1639C20.2803 16.1238 20.2444 16.0851 20.2085 16.0464C20.1841 16.0191 20.1596 15.9933 20.1338 15.9675C20.0562 15.8858 19.9771 15.8055 19.8966 15.7252C19.8665 15.6951 19.8348 15.665 19.8032 15.6348C19.7845 15.6176 19.7659 15.599 19.7472 15.5818C19.7285 15.5631 19.7084 15.5445 19.6883 15.5273C19.6552 15.4958 19.6222 15.4656 19.5877 15.4355C19.556 15.4069 19.5244 15.3782 19.4914 15.3495C19.4713 15.3323 19.4511 15.3137 19.4296 15.2965C19.4095 15.2792 19.3879 15.2606 19.3678 15.2434C19.3261 15.209 19.2844 15.1731 19.2428 15.1387C19.158 15.0685 19.0703 14.9996 18.9826 14.9323C18.9539 14.9093 18.9237 14.8878 18.895 14.8663C18.8662 14.8448 18.8375 14.8247 18.8102 14.8032C18.8389 14.8247 18.8677 14.8448 18.895 14.8663C18.9798 14.2139 19.0258 13.5385 19.0258 12.846C19.0258 12.823 19.0258 12.8001 19.0258 12.7772H23.5469C23.5469 14.8778 22.9304 16.835 21.8669 18.4768Z" fill="#1A1A1A"/>'
                + '<path d="M16.0768 1.20898L16.416 1.31079L16.3887 1.79687L16.3901 1.7983L16.6387 1.37818L16.9764 1.47998L16.7436 2.24997L16.518 2.18258L16.6675 1.68789H16.666L16.3829 2.141L16.2047 2.08794L16.2205 1.55311H16.2191L16.0696 2.04636L15.844 1.97897L16.0768 1.20898Z" fill="white"/>'
                + '<path d="M17.3371 1.62012L17.5627 1.70902L17.5411 2.56503L17.3011 2.47183L17.3112 2.35282L17.0726 2.25962L16.9965 2.35282L16.7637 2.26249L17.3342 1.62155L17.3371 1.62012ZM17.3299 2.17215L17.3529 1.91549H17.3514L17.1876 2.11623L17.3299 2.17215Z" fill="white"/>'
                + '<path d="M18.1778 2.54529C18.0844 2.74603 17.9565 2.78187 17.7725 2.69728C17.5872 2.61124 17.5527 2.46929 17.6274 2.31013L17.6561 2.24848L17.8588 2.34311L17.8387 2.38469C17.8128 2.44061 17.7884 2.49223 17.8487 2.52091C17.9076 2.54815 17.9364 2.47646 17.9507 2.44348L18.1706 1.97461L18.3962 2.07928L18.1778 2.54529Z" fill="white"/>'
                + '<path d="M18.5514 2.15674L18.7698 2.27575L18.4824 2.80054L18.7957 2.97117L18.698 3.15184L18.1663 2.86363L18.5514 2.15674Z" fill="white"/>'
                + '<path d="M19.2053 2.51963L18.7866 3.20703L18.9991 3.33587L19.4178 2.64847L19.2053 2.51963Z" fill="white"/>'
                + '<path d="M19.4223 3.28774C19.4108 3.30494 19.4036 3.32071 19.3993 3.33649C19.3878 3.38667 19.4266 3.42539 19.464 3.4512C19.497 3.47414 19.5559 3.49708 19.5904 3.44833C19.6134 3.41392 19.5904 3.38524 19.4985 3.27483C19.4137 3.17303 19.3116 3.06262 19.4036 2.92927C19.5085 2.77585 19.6853 2.79879 19.8218 2.89056C19.9669 2.98806 20.0575 3.13001 19.9526 3.29634L19.7586 3.16442C19.7787 3.14148 19.7801 3.11711 19.7701 3.09416C19.7614 3.07122 19.7413 3.04971 19.7212 3.03681C19.6925 3.01817 19.6422 2.99379 19.6163 3.03107C19.5876 3.08126 19.6767 3.15582 19.7528 3.24615C19.829 3.33649 19.8937 3.44259 19.8103 3.56591C19.6925 3.7394 19.4941 3.68778 19.3461 3.58741C19.27 3.53579 19.0731 3.36373 19.2153 3.15009L19.4208 3.28917L19.4223 3.28774Z" fill="white"/>'
                + '<path d="M20.7876 4.28146C20.6439 4.45209 20.483 4.4564 20.2933 4.29867C20.105 4.14095 20.0806 3.98035 20.2243 3.80972L20.5419 3.43262L20.7316 3.59178L20.4485 3.9273C20.3953 3.99039 20.3292 4.06925 20.4226 4.14668C20.5117 4.22268 20.5778 4.14381 20.631 4.08072L20.9141 3.7452L21.1038 3.90436L20.7862 4.2829L20.7876 4.28146Z" fill="white"/>'
                + '<path d="M21.1554 4.95265C21.0663 4.96555 20.983 4.92684 20.9212 4.86518C20.7502 4.69885 20.7746 4.46513 20.9356 4.30167C21.1497 4.08229 21.3911 4.14538 21.5205 4.27156C21.667 4.41495 21.6829 4.58558 21.5751 4.74617L21.4041 4.57984C21.4386 4.53109 21.4328 4.46657 21.3897 4.42642C21.2675 4.30741 21.1468 4.43932 21.108 4.47947C21.0548 4.53396 20.9844 4.64867 21.0922 4.75477C21.1339 4.79492 21.1957 4.81499 21.2474 4.78058L21.1684 4.70459L21.2891 4.58127L21.5248 4.81069L21.2144 5.12758L21.1023 5.0186L21.154 4.95408L21.1554 4.95265Z" fill="white"/>'
                + '<path d="M22.0954 4.89941L22.2549 5.08151L21.841 5.83143L21.6714 5.63785L21.7361 5.53748L21.5679 5.34535L21.4573 5.3941L21.2935 5.20626L22.0954 4.90085V4.89941ZM21.8338 5.38693L21.9732 5.16898L21.7346 5.27222L21.8352 5.38693H21.8338Z" fill="white"/>'
                + '<path d="M22.5207 5.38965L22.7305 5.67212L22.4172 6.04636L22.4186 6.04779L22.8684 5.85996L23.0783 6.14386L22.4301 6.62134L22.2907 6.43207L22.706 6.12665L22.7046 6.12379L22.2059 6.31736L22.0953 6.16967L22.4287 5.75098L22.4273 5.74811L22.0105 6.05496L21.8711 5.86712L22.5207 5.38965Z" fill="white"/>'
                + '<path d="M23.2953 6.48975L23.4232 6.69622L22.8915 7.3687L22.7564 7.15076L22.8369 7.06186L22.7018 6.84391L22.5854 6.87402L22.4546 6.66181L23.2967 6.49118L23.2953 6.48975ZM22.9576 6.92707L23.1315 6.73494L22.88 6.79659L22.9604 6.92564L22.9576 6.92707Z" fill="white"/>'
                + '<path d="M23.8019 7.36493L23.0833 7.72949L23.1959 7.95061L23.9146 7.58605L23.8019 7.36493Z" fill="white"/>'
                + '<path d="M23.5628 8.09139C23.5441 8.09999 23.5297 8.11003 23.5182 8.1215C23.4808 8.15734 23.4952 8.21183 23.5139 8.25341C23.5311 8.29069 23.5685 8.34088 23.6231 8.3165C23.6605 8.2993 23.6576 8.26345 23.6361 8.12006C23.6159 7.98958 23.5886 7.84189 23.7367 7.77594C23.9062 7.69994 24.0456 7.81178 24.1132 7.96234C24.185 8.1215 24.1879 8.28926 24.0126 8.37673L23.9163 8.16308C23.9465 8.15448 23.9594 8.1344 23.9623 8.11003C23.9666 8.08565 23.9608 8.05697 23.9508 8.03547C23.9364 8.00536 23.9062 7.95804 23.8646 7.97668C23.8143 8.00392 23.8502 8.11433 23.8689 8.23047C23.8875 8.34661 23.8847 8.47136 23.7496 8.53302C23.5584 8.61905 23.4176 8.47136 23.3429 8.3079C23.3055 8.22474 23.2279 7.97381 23.4622 7.86627L23.5642 8.09282L23.5628 8.09139Z" fill="white"/>'
                + '<path d="M24.3187 8.48828L24.4049 8.72057L23.843 8.92848L23.9666 9.26257L23.7726 9.33426L23.5627 8.76788L24.3187 8.48828Z" fill="white"/>'
                + '<path d="M24.6419 9.41627L24.7109 9.64856L24.0211 10.1576L23.9478 9.91096L24.0484 9.84643L23.9765 9.60124H23.8558L23.7854 9.36035L24.6419 9.41627ZM24.2007 9.74893L24.4192 9.60984V9.60698L24.1576 9.60267L24.2007 9.74893Z" fill="white"/>'
                + '<path d="M24.8229 10.04L24.8948 10.3842L24.4536 10.5935L24.455 10.5949L24.9422 10.6122L25.014 10.9577L24.2236 11.1197L24.1762 10.8903L24.6835 10.7856L24.6821 10.7842L24.1475 10.7512L24.1101 10.5706L24.5887 10.3297V10.3268L24.0814 10.4315L24.0339 10.2021L24.8229 10.04Z" fill="white"/>'
                + '<path d="M24.5743 11.7633C24.5542 11.7647 24.5369 11.7705 24.5226 11.7776C24.4751 11.8006 24.4708 11.8551 24.4751 11.9009C24.4794 11.9411 24.4981 12.0013 24.5585 11.9956C24.6002 11.9913 24.6073 11.9554 24.6347 11.8149C24.6591 11.6844 24.6806 11.5367 24.8416 11.5224C25.027 11.5052 25.1218 11.6557 25.1376 11.8206C25.1534 11.9941 25.1017 12.1547 24.9077 12.1791L24.8861 11.9454C24.9163 11.9468 24.9364 11.9311 24.9479 11.911C24.9609 11.8895 24.9637 11.8608 24.9609 11.8364C24.958 11.8034 24.9436 11.749 24.8991 11.7533C24.8416 11.7633 24.8402 11.878 24.82 11.9956C24.7985 12.1117 24.7568 12.2293 24.6102 12.2422C24.4004 12.2623 24.3156 12.0759 24.2984 11.8981C24.2897 11.8077 24.2984 11.5453 24.5542 11.5195L24.5772 11.7662L24.5743 11.7633Z" fill="white"/>'
                + '<path d="M25.154 12.3029L24.3486 12.3389L24.3597 12.5867L25.1651 12.5507L25.154 12.3029Z" fill="white"/>'
                + '<path d="M25.1766 12.7253L25.1723 12.9791L24.7368 13.2057V13.2085L25.168 13.2143L25.1651 13.4494L24.3589 13.4365L24.3632 13.1956L24.8073 12.9562V12.9533L24.3675 12.9461L24.3704 12.7124L25.1766 12.7253Z" fill="white"/>'
                + '<path d="M24.3905 14.1322C24.3244 14.072 24.3014 13.9831 24.3086 13.8956C24.3287 13.659 24.5242 13.5285 24.7527 13.5472C25.0588 13.5715 25.1637 13.7967 25.1493 13.9773C25.132 14.1809 25.0099 14.3014 24.8188 14.3215L24.8389 14.0849C24.8978 14.0806 24.9438 14.0347 24.9481 13.9759C24.9625 13.8067 24.7828 13.7967 24.7282 13.7924C24.6535 13.7866 24.5184 13.8053 24.5069 13.9558C24.5026 14.0132 24.527 14.0734 24.5845 14.0906L24.5931 13.9816L24.7656 13.996L24.7383 14.3243L24.2957 14.2885L24.3086 14.1322H24.3919H24.3905Z" fill="white"/>'
                + '<path d="M25.0343 14.799L24.9955 15.0385L24.1533 15.199L24.1936 14.9453L24.3128 14.9295L24.3531 14.6771L24.2453 14.6226L24.2855 14.3774L25.0343 14.7976V14.799ZM24.491 14.9094L24.7483 14.8779V14.875L24.5155 14.7588L24.491 14.9094Z" fill="white"/>'
                + '<path d="M24.9164 15.477L24.8201 15.8799C24.7698 16.0921 24.5959 16.1294 24.4838 16.1036C24.2941 16.0577 24.2352 15.91 24.2783 15.7308L24.3128 15.5888L24.0757 15.5329L24.1332 15.292L24.9178 15.4784L24.9164 15.477ZM24.4982 15.6318L24.4752 15.725C24.4608 15.7867 24.4493 15.8541 24.5284 15.8727C24.6002 15.8899 24.6175 15.8354 24.6318 15.7766L24.6577 15.6691L24.4982 15.6304V15.6318Z" fill="white"/>'
                + '<path d="M24.0067 16.8882C23.794 16.8194 23.7293 16.6731 23.8041 16.4394C23.8788 16.2057 24.0182 16.1225 24.2309 16.1914L24.7022 16.3419L24.6261 16.5785L24.2079 16.4452C24.1288 16.4208 24.0311 16.3892 23.9952 16.5039C23.9593 16.6158 24.057 16.6473 24.136 16.6717L24.5542 16.8051L24.4781 17.0416L24.0067 16.8911V16.8882Z" fill="white"/>'
                + '<path d="M24.4149 17.2078L24.2367 17.6451C24.1835 17.7756 24.0657 17.8588 23.9248 17.8014C23.8472 17.7699 23.7797 17.701 23.7825 17.6136C23.7337 17.6666 23.6489 17.6767 23.5512 17.648C23.5138 17.6365 23.4247 17.6007 23.3816 17.6078L23.475 17.3784C23.5167 17.3827 23.5584 17.3942 23.5972 17.4057C23.6704 17.4286 23.7481 17.4515 23.784 17.3612L23.8343 17.2393L23.5742 17.1332L23.6676 16.9038L24.4149 17.2064V17.2078ZM23.9952 17.3053L23.9464 17.4257C23.9291 17.4688 23.9119 17.5304 23.9794 17.5562C24.0268 17.5749 24.0642 17.5605 24.1001 17.4731L24.1433 17.3655L23.9952 17.3053Z" fill="white"/>'
                + '<path d="M23.9448 18.2917L23.8371 18.5082L22.9849 18.4107L23.0998 18.1813L23.2177 18.2028L23.3326 17.9748L23.2464 17.8917L23.3585 17.6694L23.9463 18.2946L23.9448 18.2917ZM23.3944 18.2344L23.6488 18.2803L23.462 18.0982L23.3944 18.2344Z" fill="white"/>'
                + '<path d="M18.895 14.8647L18.9022 14.8561C18.8734 14.8346 18.8447 14.8145 18.8174 14.793L18.8044 14.8116C18.8332 14.8331 18.8619 14.8532 18.8892 14.8747L18.8964 14.8661L18.9036 14.8575C18.8749 14.836 18.8461 14.8145 18.8188 14.7944L18.8059 14.813C18.8346 14.8346 18.8634 14.8546 18.8907 14.8761L18.9079 14.889V14.8604L18.9036 14.8575L18.8964 14.8661L18.895 14.8647Z" fill="#EC008C"/>'
                + '<path d="M20.6955 21.8877H5.3042V23.9998H20.6955V21.8877Z" fill="black"/>'
                + '<path d="M10.1245 23.1136H9.52953V23.6055H9.13721V22.4297H9.52953V22.8498H10.1245V22.4297H10.5183V23.6055H10.1245V23.1136Z" fill="white"/>'
                + '<path d="M11.3993 22.4297H11.8793L12.3852 23.6055H11.9641L11.8937 23.4148H11.3792L11.3088 23.6055H10.8877L11.3993 22.4297ZM11.6393 22.7265H11.6364L11.4726 23.171H11.8031L11.6393 22.7265Z" fill="white"/>'
                + '<path d="M12.6565 22.4297H13.0488V23.333H13.7659V23.6055H12.6565V22.4297Z" fill="white"/>'
                + '<path d="M14.6195 22.4297H15.0995L15.6068 23.6055H15.1858L15.1153 23.4148H14.6009L14.5304 23.6055H14.1094L14.621 22.4297H14.6195ZM14.8581 22.7265H14.8552L14.6914 23.171H15.0219L14.8581 22.7265Z" fill="white"/>'
                + '<path d="M15.877 22.4297H16.2693V23.333H16.9864V23.6055H15.877V22.4297Z" fill="white"/>'
                + '<path d="M9.57091 1.00532C9.53786 0.90782 9.47319 0.80028 9.46888 0.735757C9.46457 0.671233 9.39415 0.605275 9.33379 0.735757C9.27343 0.866238 9.30649 1.02826 9.35679 1.14011C9.40852 1.25195 9.57091 1.61041 9.62265 1.74089C9.67439 1.87138 9.71319 2.05204 9.706 2.11513C9.69738 2.17822 9.81953 2.2198 9.84684 2.11513C9.87414 2.01046 9.89857 1.76384 9.84684 1.63192C9.7951 1.50001 9.57235 1.00676 9.57235 1.00676L9.57091 1.00532Z" fill="white"/>'
                + '<path d="M8.42835 1.31763C8.42835 1.31763 8.32632 1.31763 8.32057 1.26171C8.31626 1.20579 8.32345 1.03373 8.34788 1.01509C8.37231 0.996447 8.54045 1.04233 8.58212 1.06671C8.6238 1.08965 8.62811 1.14127 8.6238 1.20149C8.61949 1.26171 8.73158 1.45242 8.74452 1.46245C8.75889 1.47106 8.84655 1.45815 8.89828 1.46245C8.95002 1.46675 8.92703 1.53271 8.92703 1.60154C8.92703 1.67036 8.91266 1.74636 8.84368 1.74636C8.77469 1.74636 8.69853 1.74206 8.62667 1.80228C8.55482 1.8625 8.4571 1.94136 8.58212 1.93276C8.70859 1.92272 8.81493 1.87684 8.85661 1.8496C8.89829 1.82235 9.08511 1.7607 9.13684 1.73775C9.18858 1.71481 9.1972 1.74206 9.1972 1.82092C9.1972 1.89978 9.17421 1.99298 9.08942 2.06754C9.00607 2.1421 8.8408 2.29553 8.78332 2.43748C8.72583 2.57943 8.65973 2.61241 8.57637 2.67263C8.49302 2.73285 8.36656 2.79881 8.28752 2.79881C8.20848 2.79881 8.10501 2.73572 8.10501 2.73572C8.10501 2.73572 8.11363 2.86764 7.99004 2.94363C7.86645 3.01963 7.77591 3.07411 7.72849 3.08272C7.68106 3.09132 7.56466 3.05547 7.56466 3.05547C7.56466 3.05547 7.56466 3.13434 7.48131 3.18596C7.39795 3.23757 7.36921 3.26052 7.34622 3.23184C7.32322 3.2046 7.2643 3.10996 7.25568 3.18452C7.2485 3.25908 7.27293 3.34225 7.25568 3.4039C7.23844 3.46412 7.2758 3.72509 7.14502 3.83119C7.01425 3.93873 6.72539 4.16672 6.58599 4.19396C6.44659 4.22264 6.28276 4.17962 6.20516 4.05918C6.12756 3.93873 6.08301 3.81255 6.08301 3.65053C6.08301 3.4885 6.12037 3.3996 6.16636 3.3996C6.21235 3.3996 6.23678 3.42254 6.24109 3.55302C6.2454 3.68351 6.3345 3.84123 6.48827 3.84123C6.64204 3.84123 6.78144 3.75233 6.85617 3.69211C6.9309 3.63189 7.07748 3.50857 7.02 3.43688C6.96108 3.36375 6.86623 3.26912 6.83317 3.23757C6.80012 3.2046 6.80012 3.06551 6.81449 2.99095C6.82886 2.91639 6.87916 2.86477 6.91221 2.92643C6.94527 2.98808 6.99557 3.00529 7.0473 3.02393C7.09904 3.04257 7.1364 3.00099 7.1364 2.94507C7.1364 2.88915 7.15077 2.78161 7.19245 2.7687C7.23412 2.75436 7.26287 2.78734 7.28586 2.84756C7.30885 2.90779 7.40226 2.89345 7.41664 2.82462C7.43101 2.75436 7.39077 2.63248 7.47268 2.63392C7.5546 2.63535 7.57472 2.68554 7.57472 2.73572C7.57472 2.78591 7.5934 2.80025 7.72417 2.71708C7.85495 2.63392 7.95699 2.63822 7.94836 2.56366C7.9383 2.4891 7.60346 1.88831 7.55172 1.79081C7.49999 1.6933 7.48131 1.60871 7.49568 1.51694C7.51005 1.42374 7.57472 1.43378 7.60346 1.494C7.63076 1.55422 7.84202 1.90408 7.87363 1.98294C7.90669 2.06181 8.06046 2.33137 8.09351 2.37869C8.12656 2.42457 8.14524 2.49914 8.25159 2.46185C8.35937 2.42457 8.47578 2.35431 8.53614 2.31273C8.59649 2.27115 8.68559 2.16935 8.60655 2.18225C8.52751 2.19516 8.42979 2.21093 8.39243 2.25681C8.35506 2.3027 8.23434 2.26972 8.23434 2.12203C8.23434 1.97434 8.30476 1.80515 8.36943 1.71768C8.4341 1.62878 8.51889 1.56856 8.51889 1.53128C8.51889 1.494 8.42979 1.32193 8.42979 1.32193L8.42835 1.31763Z" fill="white"/>'
                + '<path d="M4.91349 4.02914C4.80427 3.93307 4.62463 3.78395 4.57577 3.72086C4.52691 3.65777 4.50679 3.58895 4.46799 3.58321C4.42919 3.57891 4.35015 3.57891 4.36452 3.72086C4.37889 3.86282 4.48236 3.94168 4.59014 4.02914C4.69792 4.11661 5.05145 4.46504 5.12905 4.54247C5.20809 4.62133 5.26702 4.69446 5.27133 4.75755C5.27564 4.82064 5.42366 4.84071 5.41791 4.70306C5.4136 4.56541 5.06582 4.16106 4.91205 4.02771L4.91349 4.02914Z" fill="white"/>'
                + '<path d="M5.02678 4.85641C4.98223 4.79762 4.70343 4.51801 4.66894 4.45923C4.63445 4.40044 4.56547 4.204 4.50224 4.12657C4.43901 4.04771 4.3456 3.91149 4.29673 3.88712C4.24787 3.86274 4.19326 3.78961 4.13003 3.81399C4.0668 3.83836 4.06105 3.89715 4.09123 3.96598C4.12141 4.0348 4.12572 4.09789 4.14584 4.15668C4.16596 4.21547 4.18033 4.18106 4.26368 4.23554C4.34703 4.29003 4.5123 4.48217 4.4505 4.4707C4.43613 4.46783 4.16596 4.41191 3.97482 4.38323C3.78369 4.35455 3.6328 4.31441 3.59256 4.38323C3.55232 4.45206 3.72333 4.50654 3.72333 4.58971C3.72333 4.67287 3.79806 4.74026 3.92022 4.74026C4.04237 4.74026 4.06249 4.72019 4.13578 4.68148C4.20907 4.64276 4.22057 4.66714 4.36428 4.70585C4.50799 4.74457 4.62583 4.81913 4.61146 4.91663C4.59709 5.01413 4.56691 5.05428 4.51805 5.10303C4.46919 5.15178 4.50368 5.24498 4.57697 5.30807C4.65026 5.37116 4.69481 5.38694 4.7681 5.35682C4.8414 5.32815 4.99373 5.13171 5.02822 5.06288C5.06271 4.99406 5.07277 4.91663 5.02822 4.85784L5.02678 4.85641ZM4.82128 4.88078C4.80116 4.9195 4.72355 4.92953 4.72786 4.90516C4.73218 4.88078 4.7523 4.76751 4.7523 4.76751C4.7523 4.76751 4.83996 4.84063 4.82128 4.87935V4.88078Z" fill="white"/>'
                + '<path d="M2.35411 6.06528C2.35411 6.06528 2.85422 6.46676 2.96775 6.55423C3.08128 6.64169 3.24224 6.75067 3.33134 6.75927C3.42044 6.76931 3.45205 6.79368 3.5857 6.70478C3.71935 6.61732 3.76821 6.54276 3.76821 6.49974C3.76821 6.45673 3.73372 6.35779 3.86594 6.33341C3.99815 6.30904 3.98522 6.17999 3.98809 6.11833C3.99096 6.05668 3.9924 6.03517 4.07144 6.02083C4.15048 6.00649 4.19934 5.8545 4.15048 5.74123C4.10162 5.62795 3.98809 5.51611 3.89468 5.44729C3.80127 5.37846 3.69348 5.39853 3.68917 5.47596C3.68486 5.55483 3.75815 5.61792 3.81708 5.6724C3.876 5.72689 3.89037 5.79428 3.83719 5.78568C3.78258 5.77564 3.74378 5.69821 3.69923 5.67814C3.65468 5.65806 3.59145 5.69821 3.62594 5.77564C3.66043 5.8545 3.71935 5.89322 3.71935 5.96634C3.71935 6.03947 3.63025 6.05955 3.61157 6.05381C3.59145 6.04951 3.54834 5.97065 3.51385 5.95057C3.47936 5.9305 3.37589 5.95057 3.42044 6.05811C3.46499 6.16565 3.52822 6.17569 3.50379 6.28323C3.47936 6.39077 3.41612 6.42948 3.37157 6.46963C3.32702 6.50834 3.23936 6.4897 3.15601 6.42518C3.07266 6.36209 2.51219 5.87744 2.45614 5.84733C2.4001 5.81866 2.3656 5.80288 2.35555 5.89608C2.34549 5.98929 2.35555 6.06241 2.35555 6.06241L2.35411 6.06528Z" fill="white"/>'
                + '<path d="M2.99944 6.58023C2.91609 6.5157 2.65598 6.48129 2.45335 6.47269C2.25071 6.46265 2.00497 6.47269 1.95611 6.52718C1.90725 6.58023 1.97048 6.63471 2.04952 6.71788C2.12856 6.80104 2.18173 6.80534 2.21191 6.84549C2.24209 6.88421 2.38293 6.85983 2.45478 6.80104C2.52664 6.74225 2.46197 6.70784 2.66891 6.71358C2.87442 6.71788 2.9822 6.71358 3.04687 6.83546C3.1101 6.95733 3.1101 7.10502 3.04687 7.21686C2.98364 7.33014 2.89022 7.45632 2.88448 7.50507C2.88016 7.55382 2.89885 7.56242 3.02675 7.53088C3.15465 7.49933 3.30123 7.2355 3.33572 7.18245C3.37022 7.12796 3.28974 6.95303 3.25956 6.83976C3.22938 6.72648 3.0325 6.60604 2.99944 6.58023Z" fill="white"/>'
                + '<path d="M2.06358 7.66992C2.06358 7.66992 2.01472 7.86492 2.06358 7.94952C2.11244 8.03269 2.21016 8.17464 2.2892 8.23343C2.36825 8.29222 2.46022 8.351 2.50477 8.23343C2.54932 8.11585 2.59243 8.0628 2.6183 8.05276C2.64273 8.04272 2.69447 8.03555 2.67722 8.14596C2.65998 8.25637 2.64273 8.46858 2.58381 8.58616C2.52489 8.70373 2.43723 8.7912 2.31938 8.79694C2.20154 8.80124 2.10957 8.77686 2.04202 8.68509C1.97592 8.59189 1.86813 8.54744 1.85807 8.62631C1.84802 8.70517 1.9558 8.7826 2.06933 8.89014C2.18286 8.99768 2.26046 9.08658 2.41711 9.09088C2.57375 9.09518 2.65279 9.02779 2.73614 8.92025C2.81949 8.81271 2.91291 8.6177 2.92297 8.38255C2.93303 8.1474 2.93303 8.07427 2.87842 7.92228C2.82381 7.77029 2.7074 7.70146 2.6571 7.67279C2.60824 7.64411 2.56944 7.62404 2.48034 7.72154C2.39268 7.81904 2.35819 7.95096 2.31795 7.91224C2.27914 7.87353 2.24465 7.67279 2.25903 7.6183C2.2734 7.56381 2.38549 7.49642 2.39124 7.41756C2.39699 7.3387 2.39124 7.27991 2.32226 7.22686C2.25328 7.17237 2.19004 7.0806 2.12106 7.16377C2.05208 7.24693 1.91556 7.33009 1.89113 7.39318C1.8667 7.45627 1.88682 7.48639 1.93712 7.54948C1.98885 7.61257 2.06214 7.67135 2.06214 7.67135L2.06358 7.66992Z" fill="white"/>'
                + '<path d="M0.93564 9.87231C0.842228 9.86227 0.705704 9.81782 0.685585 9.87231C0.665465 9.92679 0.803427 10.0974 0.847977 10.1462C0.892527 10.1949 0.945699 10.1849 1.2015 10.205C1.45731 10.225 1.73179 10.2336 1.88413 10.3225C2.03646 10.41 2.18879 10.4502 2.21753 10.3856C2.24627 10.3225 2.11406 10.1318 1.90424 10.063C1.69299 9.99419 0.938514 9.87231 0.938514 9.87231H0.93564Z" fill="white"/>'
                + '<path d="M0.938498 10.8558C0.938498 10.8558 0.919816 10.9762 0.836464 10.9719C0.753112 10.9676 0.709999 10.8558 0.649641 10.8228C0.589283 10.7898 0.61084 10.721 0.684132 10.7023C0.757424 10.6837 0.780417 10.6134 0.832153 10.6005C0.883888 10.5862 0.921253 10.6565 0.921253 10.6794C0.921253 10.6794 1.62687 10.6794 1.74615 10.6837C1.86543 10.6866 1.99764 10.7439 2.04506 10.8285C2.09105 10.9117 2.07812 11.0465 2.07237 11.1497C2.06806 11.2515 2.03501 11.2945 2.0077 11.3132C1.9804 11.3318 1.90567 11.3691 1.97465 11.4207C2.04506 11.4723 2.06375 11.5655 2.02638 11.6028C1.98902 11.6401 1.88124 11.6731 1.93297 11.7046C1.98471 11.7376 2.035 11.7878 2.01632 11.858C1.99764 11.9283 1.93297 11.9555 1.90423 11.9699C1.87692 11.9842 1.90423 12.0301 1.95022 12.053C1.99764 12.076 1.99764 12.1506 1.99189 12.2065C1.98758 12.2624 1.97321 12.476 1.96315 12.5277C1.95453 12.5793 1.89273 12.5922 1.87405 12.6108C1.85537 12.6295 1.88842 12.6567 1.92579 12.6997C1.96315 12.7413 1.97752 12.813 1.97752 12.9076C1.97752 13.0023 1.95884 13.1973 1.94447 13.2675C1.9301 13.3378 1.87405 13.3937 1.83669 13.421C1.79932 13.4482 1.80938 13.4668 1.841 13.5371C1.87405 13.6074 1.92004 13.6532 1.9071 13.811C1.89273 13.9687 1.81082 14.102 1.75764 14.178C1.70447 14.254 1.62687 14.2526 1.57513 14.2669C1.5234 14.2813 0.927001 14.244 0.856584 14.244C0.786166 14.244 0.740179 14.2497 0.717185 14.2698C0.694191 14.2899 0.623774 14.2712 0.526051 14.2254C0.428328 14.1795 0.35791 14.049 0.35791 14.026C0.35791 14.0031 0.459944 13.9931 0.557667 13.9988C0.65539 14.0031 1.23454 14.0217 1.35095 14.026C1.46735 14.0303 1.5234 13.9802 1.55214 13.887C1.57944 13.7938 1.62687 13.6031 1.57513 13.6446C1.5234 13.6862 1.48172 13.7522 1.44867 13.7794C1.41562 13.8067 1.27191 13.7049 1.21586 13.6446C1.15981 13.5844 1.14975 13.3521 1.26616 13.2403C1.38256 13.1284 1.49466 13.1571 1.52196 13.203C1.5507 13.2489 1.5895 13.2489 1.61106 13.1801C1.63118 13.1098 1.62831 12.9578 1.63118 12.8689C1.63262 12.7786 1.63118 12.7055 1.56507 12.6639C1.5004 12.6223 1.45298 12.6366 1.41562 12.5836C1.37825 12.5291 1.36963 12.4646 1.4616 12.4603C1.55501 12.456 1.67573 12.4789 1.68579 12.3298C1.69441 12.1807 1.71597 12.0416 1.69441 12.0086C1.67429 11.9756 1.5737 11.9254 1.49897 11.8968C1.42424 11.8695 1.41562 11.7993 1.52771 11.7892C1.6398 11.7792 1.80507 11.7577 1.70591 11.6645C1.60675 11.5713 1.50328 11.5526 1.46448 11.524C1.42567 11.4967 1.49466 11.4537 1.56076 11.4537C1.62687 11.4537 1.73178 11.4652 1.73609 11.4308C1.7404 11.3978 1.76196 11.3548 1.67286 11.3232C1.58376 11.2902 1.53777 11.2673 1.53346 11.2343C1.52915 11.2013 1.5119 11.1598 1.63262 11.1555C1.75333 11.1511 1.81225 11.101 1.79932 11.0278C1.78639 10.9547 1.77202 10.9088 1.77202 10.9088L0.937061 10.8572L0.938498 10.8558Z" fill="white"/>'
                + '<path d="M0.506444 14.8513L0.431247 14.9263C0.395328 14.9622 0.395328 15.0203 0.431247 15.0561L0.506444 15.1311C0.542362 15.167 0.600597 15.167 0.636515 15.1311L0.711713 15.0561C0.747631 15.0203 0.747631 14.9622 0.711713 14.9263L0.636515 14.8513C0.600597 14.8155 0.542362 14.8155 0.506444 14.8513Z" fill="white"/>'
                + '<path d="M0.692479 13.1975L0.617282 13.2725C0.581364 13.3084 0.581363 13.3665 0.617282 13.4023L0.692479 13.4773C0.728397 13.5132 0.786632 13.5132 0.82255 13.4773L0.897748 13.4023C0.933666 13.3665 0.933666 13.3084 0.897748 13.2725L0.822551 13.1975C0.786632 13.1616 0.728397 13.1616 0.692479 13.1975Z" fill="white"/>'
                + '<path d="M0.946947 12.4983L0.87171 12.5733C0.835773 12.6091 0.835743 12.6673 0.871642 12.7031L0.946801 12.7782C0.9827 12.814 1.04094 12.8141 1.07687 12.7782L1.15211 12.7033C1.18805 12.6674 1.18808 12.6093 1.15218 12.5735L1.07702 12.4984C1.04112 12.4626 0.982884 12.4625 0.946947 12.4983Z" fill="white"/>'
                + '<path d="M2.87521 8.78899L2.96901 8.74212C3.01399 8.71965 3.06991 8.73821 3.09243 8.78309L3.13941 8.87668C3.16193 8.92155 3.14333 8.97735 3.09835 8.99982L3.00455 9.04669C2.95829 9.0698 2.90365 9.0506 2.88112 9.00573L2.83415 8.91213C2.81099 8.86598 2.83023 8.81146 2.87521 8.78899Z" fill="white"/>'
                + '<path d="M2.97963 8.47342L3.07335 8.42638C3.11957 8.40319 3.17424 8.4223 3.19684 8.46713L3.24398 8.56064C3.26658 8.60548 3.24807 8.66131 3.20314 8.68386L3.10942 8.73089C3.06448 8.75344 3.00852 8.73498 2.98592 8.69014L2.93879 8.59663C2.91619 8.5518 2.93469 8.49596 2.97963 8.47342Z" fill="white"/>'
                + '<path d="M9.02525 2.71251L9.0652 2.61572C9.08435 2.56931 9.13875 2.5467 9.18526 2.56581L9.28227 2.60566C9.32878 2.62477 9.35145 2.67905 9.3323 2.72545L9.29235 2.82224C9.2732 2.86865 9.2188 2.89126 9.17229 2.87216L9.07528 2.8323C9.02877 2.8132 9.0061 2.75891 9.02525 2.71251Z" fill="white"/>'
                + '<path d="M3.0342 17.5915L3.08267 17.4986C3.10591 17.4541 3.16213 17.4365 3.20674 17.4597L3.29977 17.508C3.34566 17.5319 3.36208 17.5873 3.33884 17.6318L3.29037 17.7246C3.26713 17.7691 3.21091 17.7868 3.1663 17.7636L3.07327 17.7153C3.02866 17.6921 3.01096 17.636 3.0342 17.5915Z" fill="white"/>'
                + '<path d="M3.1548 17.9196L3.20328 17.8268C3.22652 17.7823 3.28273 17.7646 3.32734 17.7878L3.42038 17.8361C3.46499 17.8593 3.48269 17.9154 3.45945 17.9599L3.41098 18.0528C3.38773 18.0973 3.33152 18.1149 3.28691 18.0917L3.19387 18.0434C3.14926 18.0202 3.13156 17.9641 3.1548 17.9196Z" fill="white"/>'
                + '<path d="M2.53202 15.3766C2.32508 15.2203 1.99598 15.2562 1.99598 15.2562C1.99598 15.2562 1.98017 15.0339 1.97299 14.9321C1.9658 14.8303 1.89538 14.6597 1.76605 14.5765C1.63671 14.4948 1.38665 14.5263 1.1869 14.5765C0.987138 14.6267 0.91672 14.8188 0.905224 14.8733C0.893727 14.9278 0.99145 15.0526 1.07336 15.0884C1.15528 15.1243 1.31192 15.1515 1.38953 15.1271C1.46713 15.1042 1.58066 15.0253 1.58497 14.9278C1.58928 14.8303 1.49443 14.7371 1.49443 14.7371C1.45132 14.6396 1.58785 14.7299 1.6324 14.8231C1.67695 14.9178 1.67838 15.0139 1.68269 15.1071C1.68701 15.2003 1.70569 15.2978 1.6324 15.3135C1.5591 15.3293 1.43264 15.4311 1.37659 15.5587C1.32198 15.6878 1.49012 15.824 1.6324 15.8441C1.77467 15.8641 1.98305 15.8555 2.03766 15.715C2.09227 15.5745 2.03047 15.4297 2.03047 15.4297C2.03047 15.4297 2.28053 15.4497 2.39837 15.5774C2.51621 15.7064 2.57801 15.8928 2.5737 16.0376C2.56938 16.1824 2.63262 16.2169 2.66423 16.1896C2.69585 16.1624 2.80076 16.0104 2.79645 15.8656C2.79213 15.7207 2.73753 15.53 2.53058 15.3738L2.53202 15.3766ZM1.25013 14.9522C1.21133 14.9522 1.17971 14.9207 1.17971 14.8819C1.17971 14.8432 1.21133 14.8117 1.25013 14.8117C1.28893 14.8117 1.32055 14.8432 1.32055 14.8819C1.32055 14.9207 1.28893 14.9522 1.25013 14.9522ZM1.72581 15.6562C1.68701 15.6562 1.65539 15.6247 1.65539 15.586C1.65539 15.5472 1.68701 15.5157 1.72581 15.5157C1.76461 15.5157 1.79623 15.5472 1.79623 15.586C1.79623 15.6247 1.76461 15.6562 1.72581 15.6562Z" fill="white"/>'
                + '<path d="M1.92274 16.3488C1.92274 16.3488 1.80202 16.4506 1.73161 16.4936C1.66119 16.5366 1.53616 16.5094 1.45424 16.4936C1.37233 16.4779 1.39964 16.4305 1.48155 16.3488C1.56346 16.2671 1.66406 16.1495 1.85232 16.1452C2.04058 16.1409 2.36393 16.2155 2.45447 16.3058C2.545 16.3947 2.63841 16.485 2.65853 16.6528C2.67865 16.8205 2.64273 16.9768 2.63123 17.0313C2.61973 17.0858 2.545 17.1059 2.48321 16.9453C2.41998 16.7847 2.31507 16.3287 1.92418 16.3488H1.92274Z" fill="white"/>'
                + '<path d="M2.16157 17.691C2.16157 17.691 1.98625 17.5777 1.94601 17.539C1.90721 17.5003 1.89571 17.496 1.94601 17.4687C1.99631 17.4415 1.99918 17.3483 1.91152 17.3124C1.82385 17.2766 1.70457 17.3081 1.63416 17.4028C1.5623 17.496 1.61691 17.5504 1.72326 17.6365C1.82817 17.7225 2.03654 17.8788 2.16157 17.9089C2.2866 17.9405 2.50216 17.9247 2.49067 17.7483C2.47917 17.5734 2.42744 17.4114 2.49067 17.4286C2.55534 17.4458 2.68899 17.6006 2.75222 17.744C2.81545 17.8888 2.87725 18.0595 2.82264 18.1971C2.76803 18.3333 2.67031 18.3763 2.51797 18.3878C2.36564 18.3993 2.30241 18.3806 2.30241 18.4624C2.30241 18.5441 2.46624 18.5599 2.66456 18.5556C2.86144 18.5513 3.1 18.3534 3.15173 18.2315C3.20203 18.1111 3.08994 17.8759 2.99078 17.6809C2.89306 17.4859 2.74935 17.3196 2.59558 17.2479C2.44181 17.1748 2.17738 17.1733 2.14576 17.3182C2.11415 17.463 2.22768 17.701 2.16157 17.6881V17.691Z" fill="white"/>'
                + '<path d="M11.1344 13.0124C11.1344 13.0124 11.2379 17.9306 11.2221 18.1657C11.2077 18.4009 11.031 19.1866 10.3095 19.905C9.58811 20.6248 8.82357 21.1754 7.83772 21.4908C6.85187 21.8063 5.57142 21.2858 5.54267 19.8978C5.51393 18.5098 6.4035 17.5563 6.54289 17.4086C6.68229 17.2624 6.77283 17.1935 6.83175 17.1491C6.89067 17.1046 6.94528 17.1147 6.97402 17.1491C7.00277 17.1835 6.99414 17.2767 6.93522 17.3197C6.8763 17.3642 6.54289 17.7255 6.5084 18.4754C6.47391 19.2239 6.64637 20.0756 6.86624 20.2864C7.08756 20.4972 7.69976 20.8442 8.66118 20.4527C9.6226 20.0613 10.104 19.7085 10.2506 19.0475L10.1989 14.7947C10.1989 14.7947 10.0882 14.5638 9.93014 14.538C9.77206 14.5122 9.8008 14.4463 9.87122 14.376C9.94163 14.3057 10.5366 13.5759 10.6731 13.3408C10.8096 13.1056 11.0453 12.7729 11.1474 12.7729C11.2494 12.7729 11.2135 12.8676 11.133 13.0095L11.1344 13.0124Z" fill="white"/>'
                + '<path d="M12.5659 12.995C12.5372 12.8674 12.4826 12.6423 12.369 13.0194C12.2555 13.3965 11.9724 14.2525 11.8143 14.6053C11.6577 14.958 11.4608 15.2032 11.4076 15.2663C11.3544 15.3294 11.3199 15.4326 11.4708 15.4283C11.6232 15.424 11.7899 15.4484 11.9911 15.6735C12.1923 15.8986 12.9726 16.7647 13.3175 17.8071C13.6638 18.8495 13.9067 19.5836 13.9656 20.1557C13.9656 20.1557 13.9628 20.3952 14.0662 20.3952C14.1697 20.3952 14.2962 19.6223 14.2962 19.0789C14.2962 18.5355 14.2272 17.5863 13.8406 16.5338C13.4526 15.4813 13.1235 14.7128 12.9985 14.3658C12.8734 14.0188 12.599 13.3764 12.5645 12.995H12.5659Z" fill="white"/>'
                + '<path d="M15.242 20.5231C15.242 20.5231 14.0894 21.673 13.1898 22.1161C13.1898 22.1161 13.128 22.1519 12.9053 22.0731C12.6825 21.9942 11.8159 21.5497 11.4409 21.4608C11.0658 21.3719 10.9292 21.3977 10.8272 21.3232C10.7266 21.2486 10.7913 21.2084 11.0198 21.2127C11.2483 21.2185 12.3448 21.2414 13.2042 20.8987C14.0621 20.556 14.647 20.2678 14.8382 19.3917C14.8382 19.3917 14.8065 14.7747 14.8065 14.7303C14.8065 14.6858 14.6916 14.518 14.6183 14.4679C14.545 14.4191 14.4415 14.3947 14.5694 14.2872C14.6973 14.1796 15.2908 13.3767 15.3598 13.2448C15.4288 13.1129 15.6343 12.872 15.7378 12.8117C15.8413 12.7501 15.9002 12.8089 15.8757 13.0197C15.8513 13.2304 15.8513 14.3904 15.8556 14.6155C15.8599 14.8407 15.8815 19.7301 15.8815 19.7301C15.8815 19.7301 16.3026 20.1761 17.1605 20.1416C18.0185 20.1072 18.1018 19.7746 18.2929 19.7402C18.2929 19.7402 17.7971 19.3631 17.1691 19.3731C16.5411 19.3831 16.2523 19.6269 16.1732 19.6957C16.0942 19.7645 15.9821 19.7 16.0511 19.5495C16.1201 19.3975 16.4635 18.4827 16.5325 18.3508C16.6015 18.2188 16.7682 18.1056 17.2726 18.1156C17.7785 18.1256 18.224 18.3895 18.6264 18.6633C19.0287 18.9372 19.6165 19.2311 20.1957 19.3932C20.7748 19.5552 20.7461 19.5781 20.897 19.5781C21.0479 19.5781 21.1844 19.624 20.9631 19.7731C20.7403 19.9237 20.4773 20.0757 20.3207 20.2879C20.164 20.5001 20.085 20.6005 19.789 20.5904C19.4915 20.579 18.9713 20.5403 18.405 20.7912C17.8388 21.0421 17.4019 21.1826 16.8645 21.2041C16.327 21.2271 15.6286 21.0163 15.2434 20.5231H15.242Z" fill="white"/>'
                + '<path d="M13.7716 1.89284C13.8162 1.84839 13.8852 1.781 13.8061 1.69067C13.7372 1.61181 13.6581 1.60177 13.6581 1.55732C13.6581 1.60177 13.5791 1.61181 13.5101 1.69067C13.4311 1.781 13.5 1.84839 13.5489 1.89284L13.5015 3.38119H13.2227L13.1695 1.18595C13.2327 1.12286 13.3319 1.02536 13.2198 0.896308C13.1206 0.783033 13.0071 0.770128 13.0071 0.705604C13.0071 0.768694 12.8936 0.783033 12.7944 0.896308C12.6823 1.02536 12.78 1.12286 12.8447 1.18595H12.8505L12.7815 3.38119H12.4926L12.4567 1.89284C12.5013 1.84839 12.5702 1.781 12.4912 1.69067C12.4222 1.61181 12.3432 1.60177 12.3432 1.55732C12.3432 1.60177 12.2641 1.61181 12.1952 1.69067C12.1161 1.781 12.1851 1.84839 12.234 1.89284L12.1865 3.38119H11.9221L11.8689 1.18595C11.9322 1.12286 12.0313 1.02536 11.9192 0.896308C11.8201 0.783033 11.7065 0.770128 11.7065 0.705604C11.7065 0.768694 11.593 0.783033 11.4938 0.896308C11.3818 1.02536 11.4795 1.12286 11.5427 1.18595H11.5485L11.4651 3.83286H14.5347L14.4715 1.18595C14.5347 1.12286 14.6339 1.02536 14.5204 0.896308C14.4212 0.783033 14.3077 0.770128 14.3077 0.705604C14.3077 0.768694 14.1942 0.783033 14.095 0.896308C13.9829 1.02536 14.0806 1.12286 14.1439 1.18595H14.1496L14.0806 3.38119H13.8061L13.7702 1.89284H13.7716ZM10.998 0.255371H15.0018V4.25011H10.998V0.255371Z" fill="#308240"/>'
                + '<path d="M13.7719 1.8928C13.8164 1.84836 13.8854 1.78096 13.8064 1.69063C13.7374 1.61177 13.6583 1.60173 13.6583 1.55728C13.6583 1.60173 13.5793 1.61177 13.5103 1.69063C13.4313 1.78096 13.5003 1.84836 13.5491 1.8928L13.5017 3.38115H13.2229L13.1697 1.18591C13.233 1.12282 13.3321 1.02532 13.22 0.89627C13.1209 0.782995 13.0073 0.77009 13.0073 0.705566C13.0073 0.768656 12.8938 0.782995 12.7947 0.89627C12.6826 1.02532 12.7803 1.12282 12.8449 1.18591H12.8507L12.7817 3.38115H12.4929L12.4569 1.8928C12.5015 1.84836 12.5705 1.78096 12.4914 1.69063C12.4224 1.61177 12.3434 1.60173 12.3434 1.55728C12.3434 1.60173 12.2644 1.61177 12.1954 1.69063C12.1163 1.78096 12.1853 1.84836 12.2342 1.8928L12.1868 3.38115H11.9223L11.8692 1.18591C11.9324 1.12282 12.0316 1.02532 11.9195 0.89627C11.8203 0.782995 11.7068 0.77009 11.7068 0.705566C11.7068 0.768656 11.5932 0.782995 11.4941 0.89627C11.382 1.02532 11.4797 1.12282 11.5429 1.18591H11.5487L11.4653 3.83282H14.535L14.4717 1.18591C14.535 1.12282 14.6341 1.02532 14.5206 0.89627C14.4214 0.782995 14.3079 0.77009 14.3079 0.705566C14.3079 0.768656 14.1944 0.782995 14.0952 0.89627C13.9831 1.02532 14.0809 1.12282 14.1441 1.18591H14.1498L14.0809 3.38115H13.8064L13.7704 1.8928H13.7719Z" fill="white"/>'
                + '</g><defs><clipPath id="clip0_2162_5811"><rect width="26" height="24" fill="white"/></clipPath></defs></svg>'

                var unittxt = document.createElement("p");
                unittxt.className = "unittxt";
                //Tenant Unit Number
                unittxt.innerText = tenantArray[tenantIndex].storeUnitNum;

                var wayfindingbtn = document.createElement("div");
                wayfindingbtn.className = "wayfindingbtn";

                var btnholder = document.createElement("div");
                btnholder.className = "btnholder";
                btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenantIndex].storeUnitNum+"\",\""+tenantArray[tenantIndex].id+"\")");

                $(btnholder).html('<svg width="17" height="34" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.05146 33.906C4.04036 34.2388 5.10416 33.6595 5.41664 32.6128L7.94979 24.2368L5.65422 22.1361C5.35309 21.8654 5.09886 21.5818 4.89079 21.2989L1.84239 31.3872C1.52461 32.4339 2.06861 33.5676 3.05146 33.906ZM9.90489 18.5883C9.81258 19.3031 9.93969 19.6229 10.4542 20.0975L12.8602 22.315C13.3982 22.8138 13.7735 23.5898 13.8264 24.3472L14.3523 31.8489C14.4272 32.9456 13.6464 33.9125 12.6174 33.9923C11.5876 34.0728 10.6797 33.2477 10.6048 32.1446L10.1069 25.074L6.18007 21.4835C4.9831 20.3868 4.67667 19.2845 4.90214 17.5594L5.59596 12.3307L4.58436 12.8972L3.05751 18.2C2.80253 19.075 1.92334 19.5682 1.10241 19.3031C0.280729 19.0323 -0.181564 18.0952 0.0673631 17.2209L1.64037 11.7763C1.84844 11.0495 2.36899 10.3783 2.99925 10.027L6.05296 8.31475C6.78158 7.9022 7.545 7.39698 8.37198 7.32929C9.93364 7.19956 11.2063 8.75229 10.9861 10.3969L9.90489 18.5883ZM9.82923 0C11.4892 0 12.8375 1.43508 12.8375 3.20294C12.8375 4.97 11.4892 6.40588 9.82923 6.40588C8.16392 6.40588 6.82243 4.97 6.82243 3.20294C6.82243 1.43508 8.16392 0 9.82923 0ZM11.605 11.9061L16.3883 15.8108C17.0708 16.3709 17.204 17.4184 16.6774 18.1452C16.1568 18.872 15.1732 19.0073 14.4915 18.453L11.1079 15.6932L11.605 11.9061Z" fill="white"/></svg>'
                );

                wayfindingbtn.appendChild(btnholder);
                if(tenantArray[tenantIndex].isHalal) {
                    shopunitholder.appendChild(halalicon);
                }
                else {
                }
                shopunitholder.appendChild(unittxt);
                shopdetail.appendChild(shopunitholder);
                shopdetail.appendChild(wayfindingbtn);
                shopnameholder.appendChild(nametxt);
                dcardright.appendChild(shopnameholder);
                dcardright.appendChild(shopdetail);
                dcardleft.appendChild(createImg(newobj));
                dcard.appendChild(dcardleft);
                dcard.appendChild(dcardright);
                dcol.appendChild(dcard);
                drow.appendChild(dcol);

                if((tenantIndex+1)%2==0)
                {
                    slide.appendChild(drow);
                }
            }

            $('#swiperDirectory .swiper-wrapper').append(slide);
        }
    }

    //Check whether got left over tenant
    if(numLeftTenant!=0)
    {
        //Create slide for left over tenant
        var slide = document.createElement("div");
        slide.className = "swiper-slide";

        for(var j=0;j<numLeftTenant;j++)
        {
            if (tenantIndex % 2 == 0) {

                if (j != 0) {
                    slide.appendChild(drow);
                }

                var drow = document.createElement("div");
                drow.className = "drow";

            }

            var dcol = document.createElement("div");
            dcol.className = "dcol";

            var dcard = document.createElement("div");
            dcard.className = "dcard";
            dcard.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenantIndex].id+"\")");

            var dcardleft = document.createElement("div");
            dcardleft.className = "dcardleft";

            var newobj = new Object();
            newobj.FIT_TYPE = "stretchImg";
            //Tenant Thumbnail URL
            if (tenantArray[tenantIndex].storeThumbnailUrl !="" || tenantArray[tenantIndex].storeThumbnailUrl != null) {
                var imgurl = tenantArray[tenantIndex].storeThumbnailUrl.split('/');
                var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
                newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
            }
            else {
                newobj.MAIN_URL = './asset/error/errorimg.jpg';
            }

            // dcardleft.appendChild(createImg(newobj));

            var dcardright = document.createElement("div");
            dcardright.className = "dcardright";

            var shopnameholder = document.createElement("div");
            shopnameholder.className = "shopnameholder";

            var nametxt = document.createElement("p");
            nametxt.className = "nametxt";
            //Tenant Name (Store Name)
            nametxt.innerHTML = tenantArray[tenantIndex].storeNameEng;

            var shopdetail = document.createElement("div");
            shopdetail.className = "shopdetail";

            var shopunitholder = document.createElement("div");
            shopunitholder.className = "shopunitholder";

            var halalicon = document.createElement('div');
            halalicon.className = "halalicon";
            halalicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none"><g clip-path="url(#clip0_2162_5811)">'
            + '<path d="M17.2796 3.15443C17.2522 3.18024 17.2235 3.20605 17.1948 3.23186L17.1732 3.25194C17.1459 3.27631 17.1186 3.30069 17.0913 3.32363H17.0899C17.064 3.34801 17.0367 3.36951 17.0108 3.39246L16.9864 3.41253C16.9576 3.43691 16.9289 3.45985 16.8987 3.48279C16.8729 3.50286 16.847 3.52294 16.8211 3.54301L16.7852 3.57025L16.7679 3.58316C16.7478 3.59893 16.7263 3.6147 16.7061 3.62904L16.6702 3.65485C16.6444 3.67349 16.6199 3.6907 16.5941 3.70934L16.5811 3.71794C16.5524 3.73802 16.5222 3.75809 16.492 3.77816C16.4719 3.79107 16.4518 3.80541 16.4317 3.81831C16.413 3.83122 16.3943 3.84269 16.3742 3.85559H16.3699C16.3497 3.87137 16.3296 3.88284 16.3081 3.89574C16.265 3.92298 16.2218 3.94879 16.1773 3.9746C16.1586 3.98607 16.1399 3.99611 16.1212 4.00758C15.9933 4.08071 15.8626 4.15097 15.7289 4.21549C15.7131 4.22266 15.6987 4.22983 15.6829 4.23843C15.6686 4.2456 15.6528 4.25277 15.6384 4.25994C15.6211 4.26855 15.6025 4.27572 15.5852 4.28432C14.7431 3.54158 13.842 3.12002 12.9999 3.12002C12.1577 3.12002 11.2567 3.54158 10.4145 4.28432C10.3958 4.27715 10.3786 4.26855 10.3599 4.25994C10.222 4.19542 10.0869 4.12803 9.95466 4.05347C9.93885 4.04486 9.92448 4.03626 9.90867 4.02766L9.87562 4.00902C9.85837 3.99898 9.84112 3.98894 9.82244 3.97891C9.77789 3.9531 9.73334 3.92585 9.68879 3.89861C9.64712 3.8728 9.60688 3.84699 9.56664 3.82118C9.54652 3.80828 9.5264 3.79537 9.50628 3.78103C9.4761 3.76096 9.44736 3.74088 9.41718 3.72081L9.40425 3.71221C9.37838 3.695 9.35251 3.67636 9.32808 3.65772L9.29215 3.63191C9.2706 3.61757 9.25048 3.6018 9.23036 3.58603L9.21311 3.57312L9.17719 3.54588C9.15132 3.5258 9.12545 3.50573 9.09958 3.48566C9.0694 3.46271 9.04066 3.43834 9.01192 3.4154L8.98749 3.39532C8.96162 3.37382 8.93432 3.35087 8.90845 3.32937H8.90701C8.87971 3.30356 8.85096 3.28061 8.8251 3.25624L8.80354 3.23616C8.7748 3.21035 8.74749 3.18455 8.71875 3.15874C10.0265 2.57946 11.4751 2.25684 12.9984 2.25684C14.5218 2.25684 15.9704 2.57946 17.2781 3.15874L17.2796 3.15443Z" fill="#C5E5D0"/>'
            + '<path d="M7.1049 14.865C7.08478 14.8794 7.0661 14.8951 7.04598 14.9095C7.02586 14.9238 7.00718 14.9396 6.98706 14.9539C6.94826 14.984 6.90946 15.0141 6.87066 15.0443L6.86491 15.0486C6.82754 15.0772 6.79162 15.1073 6.75569 15.1375C6.71832 15.169 6.67952 15.2005 6.64216 15.2321C6.60767 15.2622 6.57318 15.2909 6.53869 15.321C6.49557 15.3583 6.4539 15.3955 6.41222 15.4328C6.37773 15.4629 6.34468 15.493 6.31163 15.5246C6.27713 15.5561 6.24264 15.5891 6.20815 15.6221C6.19378 15.6364 6.17798 15.6508 6.1636 15.6651C6.14636 15.6809 6.12911 15.6981 6.11187 15.7153L6.0975 15.7296C6.06301 15.764 6.02708 15.7985 5.99403 15.8329C5.95954 15.8673 5.92648 15.9017 5.89343 15.9361C5.87044 15.9605 5.84601 15.9849 5.82301 16.0107C5.80864 16.025 5.79571 16.0408 5.78134 16.0551C5.75834 16.0809 5.73535 16.1053 5.71092 16.1311C5.63619 16.2128 5.56433 16.296 5.49248 16.3792C5.47667 16.3978 5.4623 16.415 5.44649 16.4337C5.43068 16.4523 5.41631 16.4709 5.4005 16.4882C5.3732 16.5211 5.34733 16.5541 5.32003 16.5857C5.30278 16.6072 5.28554 16.6287 5.26829 16.6502L5.25105 16.6703C5.2338 16.6932 5.21656 16.7147 5.19931 16.7376C5.17632 16.7678 5.15332 16.7979 5.13033 16.828C5.11165 16.8524 5.0944 16.8767 5.07572 16.9011C5.00387 16.9972 4.93488 17.0961 4.86734 17.195C4.84578 17.2266 4.82423 17.2581 4.80267 17.2911C4.79405 17.304 4.78543 17.3169 4.7768 17.3313L4.75237 17.3685C4.72794 17.4058 4.70351 17.4445 4.67908 17.4833C4.6604 17.5119 4.64315 17.5406 4.62591 17.5693C4.60435 17.6037 4.58423 17.6367 4.56411 17.6711C4.54399 17.7055 4.52387 17.7385 4.50375 17.7729C4.4937 17.7887 4.48507 17.8059 4.47501 17.8216C4.46495 17.8388 4.45489 17.8561 4.44483 17.8733C4.4319 17.8948 4.4204 17.9177 4.40747 17.9392L4.40028 17.9521C4.38735 17.9751 4.37442 17.998 4.36148 18.021C4.34711 18.0453 4.33418 18.0711 4.32124 18.0955C4.31118 18.1156 4.29969 18.1342 4.28963 18.1543C4.28244 18.1686 4.27382 18.183 4.26663 18.1973C4.25657 18.216 4.24795 18.2346 4.23789 18.2532C4.22783 18.2733 4.21633 18.2934 4.20771 18.3135C4.19478 18.3378 4.18328 18.3608 4.17178 18.3852C4.1646 18.3981 4.15885 18.4124 4.15167 18.4253C4.14304 18.4411 4.13586 18.4583 4.12723 18.4755C3.06378 16.8323 2.44727 14.8751 2.44727 12.7759H6.96838C6.96838 12.7988 6.96838 12.8218 6.96838 12.8447C6.96838 13.5373 7.01293 14.214 7.09916 14.8665L7.1049 14.865Z" fill="#C5E5D0"/>'
            + '<path d="M7.6297 8.76228C7.26324 9.87209 7.02755 11.0952 6.983 12.3842H2.46045C2.46332 12.3154 2.4662 12.2451 2.47051 12.1763C2.47338 12.1333 2.47626 12.0903 2.47913 12.0473C2.48201 12.0042 2.48488 11.9612 2.48919 11.9182C2.49638 11.8322 2.50356 11.7461 2.51362 11.6616C2.5165 11.6271 2.52081 11.5927 2.52512 11.5597C2.52943 11.5253 2.53374 11.4909 2.53805 11.4579C2.54668 11.3891 2.5553 11.3217 2.56536 11.2529C2.56823 11.2357 2.56967 11.2199 2.57254 11.2027C2.57542 11.1855 2.57829 11.1697 2.57973 11.1525C2.58548 11.1181 2.58979 11.0851 2.59554 11.0522C2.60128 11.0192 2.60703 10.9848 2.61278 10.9518C2.61853 10.9188 2.62428 10.8873 2.63003 10.8543C2.6329 10.8385 2.63578 10.8213 2.63865 10.8055C2.64152 10.7855 2.64583 10.7668 2.65015 10.7467C2.65446 10.7224 2.65877 10.698 2.66452 10.6751V10.6708L2.66883 10.655V10.6521C2.67458 10.6234 2.68176 10.5933 2.68751 10.5646C2.69613 10.5245 2.70476 10.4829 2.71482 10.4428C2.722 10.4127 2.72919 10.3811 2.73637 10.351C2.74356 10.3209 2.75074 10.2908 2.75793 10.2592C2.76655 10.2234 2.77517 10.1875 2.78523 10.1503C2.79242 10.1216 2.7996 10.0929 2.80823 10.0628C2.81685 10.0298 2.82547 9.99827 2.83409 9.96529C2.83984 9.94522 2.84559 9.92514 2.85134 9.90507C2.85709 9.88499 2.86284 9.86492 2.86859 9.84485C2.87433 9.82477 2.88008 9.8047 2.88583 9.78462C2.89158 9.76455 2.89733 9.74448 2.90451 9.7244C2.91601 9.68425 2.92894 9.64411 2.94188 9.60539C2.94763 9.58532 2.95481 9.56524 2.96056 9.54517C2.97637 9.49642 2.99218 9.4491 3.00798 9.40035C3.01804 9.37167 3.02667 9.34299 3.03673 9.31432C3.04679 9.28707 3.05541 9.25983 3.06547 9.23259C3.07553 9.20534 3.08415 9.1781 3.09565 9.15086C3.10571 9.12361 3.11577 9.0978 3.12583 9.07056C3.14595 9.01607 3.16606 8.96302 3.18762 8.90997C3.19768 8.88272 3.20918 8.85692 3.21924 8.82967C3.2566 8.7379 3.2954 8.64614 3.33564 8.5558C3.34283 8.5386 3.35001 8.52283 3.3572 8.50562C3.36438 8.48841 3.37157 8.47264 3.38019 8.45543C3.40606 8.39808 3.43193 8.34216 3.45923 8.2848C3.4736 8.25469 3.48798 8.22458 3.50235 8.1959C3.51672 8.16579 3.53109 8.13712 3.54546 8.107C3.56702 8.06256 3.59001 8.01811 3.61157 7.97509C3.62306 7.95358 3.63456 7.93064 3.64606 7.90913C3.65755 7.88762 3.66905 7.86468 3.68055 7.84317C3.71073 7.78582 3.74234 7.72703 3.7754 7.66968C3.78689 7.64817 3.79839 7.62809 3.81132 7.60659C3.83 7.57217 3.85012 7.53919 3.86881 7.50622C3.87599 7.49331 3.88461 7.47897 3.8918 7.46607C3.9191 7.41875 3.94641 7.37287 3.97515 7.32698C3.99096 7.29974 4.00821 7.27393 4.02401 7.24669C4.03982 7.22088 4.05563 7.19507 4.07287 7.16926C4.09156 7.13915 4.11024 7.11047 4.13036 7.08036C4.14473 7.05742 4.16054 7.03304 4.17635 7.0101C4.19359 6.98429 4.21084 6.95705 4.22808 6.93124C4.25826 6.88535 4.28988 6.8409 4.32149 6.79502C4.33586 6.77351 4.35167 6.75344 4.36604 6.73193C4.38472 6.70612 4.40197 6.68031 4.42065 6.6545C4.44652 6.61722 4.47383 6.58137 4.49969 6.54553C4.52556 6.50968 4.55287 6.47383 4.58017 6.43799C4.63765 6.49821 4.69514 6.55843 4.75262 6.61865C4.76987 6.63586 4.78711 6.6545 4.80436 6.67171C4.85753 6.72619 4.91214 6.77925 4.96675 6.8323C4.98256 6.84807 4.99837 6.86385 5.01417 6.87818C5.04579 6.9083 5.07741 6.93841 5.10902 6.96852C5.16507 7.02157 5.22112 7.07319 5.2786 7.12481C5.29728 7.14201 5.3174 7.15922 5.33608 7.17643C5.38926 7.22374 5.44243 7.26963 5.4956 7.31551C5.52722 7.34276 5.56027 7.37143 5.59189 7.39724C5.63069 7.43022 5.66949 7.4632 5.70973 7.49475C5.73991 7.52055 5.77153 7.54493 5.80314 7.56931C5.83332 7.59368 5.8635 7.61806 5.89512 7.641C5.9253 7.66537 5.95547 7.68832 5.98709 7.71269C6.04889 7.76001 6.11212 7.80733 6.17391 7.85321C6.18972 7.86468 6.20553 7.87615 6.2199 7.88762C6.24433 7.90483 6.26732 7.92204 6.29176 7.93924C6.31762 7.95788 6.34493 7.97652 6.3708 7.99516C6.41678 8.02671 6.46277 8.05969 6.50876 8.0898C6.52888 8.10414 6.55043 8.11848 6.57055 8.13138L6.58349 8.13998C6.60361 8.15432 6.62516 8.16723 6.64528 8.18157H6.64672C6.67546 8.20164 6.70564 8.22171 6.73438 8.24035C6.75881 8.25613 6.78324 8.2719 6.80767 8.28767C6.83354 8.30488 6.86085 8.32208 6.88815 8.33786C6.9054 8.34933 6.92408 8.3608 6.94132 8.37084C6.95857 8.38231 6.97725 8.39234 6.9945 8.40381C7.01174 8.41529 7.02899 8.42532 7.04623 8.43536C7.06348 8.4454 7.08072 8.45687 7.09797 8.4669C7.13102 8.48698 7.16407 8.50562 7.19713 8.52569L7.21294 8.5343C7.24455 8.55294 7.27617 8.57158 7.30778 8.58878C7.3782 8.62893 7.44862 8.66765 7.51904 8.70636C7.55497 8.725 7.59089 8.74507 7.62538 8.76371L7.6297 8.76228Z" fill="#C5E5D0"/>'
            + '<path d="M23.5381 12.3842H19.0156C18.9696 11.0952 18.7354 9.87212 18.3689 8.76231C18.5126 8.68775 18.6534 8.60889 18.7928 8.52859C18.8316 8.50708 18.8704 8.48414 18.9078 8.4612C18.938 8.44256 18.9696 8.42392 19.0012 8.40528C19.0357 8.38377 19.0702 8.3637 19.1047 8.34219C19.1722 8.30061 19.2412 8.25616 19.3073 8.21171C19.3318 8.19594 19.3547 8.18016 19.3792 8.16439L19.3892 8.15722C19.4079 8.14432 19.4266 8.13285 19.4467 8.11994C19.464 8.10847 19.4812 8.097 19.497 8.08553L19.5056 8.07979H19.5071C19.5401 8.05542 19.5732 8.03247 19.6062 8.00953C19.6393 7.98659 19.6723 7.96365 19.704 7.94071C19.7298 7.9235 19.7543 7.90486 19.7801 7.88622C19.7945 7.87618 19.8089 7.86615 19.8232 7.85468L19.8405 7.84177C19.8664 7.82313 19.8922 7.80449 19.9167 7.78585C19.9411 7.76721 19.9655 7.75 19.9885 7.73136C20.0129 7.71416 20.0359 7.69552 20.0604 7.67688C20.0949 7.64963 20.1308 7.62239 20.1638 7.59515C20.1926 7.57221 20.2228 7.54926 20.2515 7.52489C20.2817 7.50051 20.3119 7.47614 20.342 7.45033L20.3794 7.41878L20.3952 7.40588C20.4153 7.38867 20.4354 7.3729 20.4556 7.35426L20.4728 7.33992C20.5044 7.31411 20.5346 7.28687 20.5662 7.25962C20.5792 7.24815 20.5921 7.23668 20.605 7.22521C20.6582 7.17789 20.7128 7.13058 20.7645 7.08182C20.789 7.05888 20.8148 7.03594 20.8393 7.013C20.891 6.96425 20.9442 6.9155 20.9945 6.86531C21.0088 6.85241 21.0232 6.83807 21.0376 6.82373C21.0563 6.80652 21.0735 6.78788 21.0922 6.77068C21.1109 6.75347 21.1281 6.73483 21.1454 6.71762C21.1597 6.70328 21.1741 6.68895 21.187 6.67461C21.2115 6.65023 21.2359 6.62586 21.2589 6.60148C21.2761 6.58427 21.292 6.5685 21.3078 6.55129L21.3394 6.51832C21.3638 6.49251 21.3897 6.4667 21.4141 6.43945C21.4429 6.47673 21.4716 6.51545 21.4989 6.55273C21.5176 6.57854 21.5363 6.60291 21.5549 6.62872C21.5693 6.6488 21.5851 6.66887 21.5995 6.69038C21.6167 6.71475 21.634 6.73913 21.6512 6.76351C21.6742 6.79505 21.6958 6.82803 21.7173 6.85958C21.7389 6.89112 21.7605 6.92266 21.7806 6.95421C21.7978 6.98002 21.8151 7.00583 21.8323 7.03164C21.8582 7.07179 21.884 7.11194 21.9099 7.15208C21.9674 7.24098 22.022 7.33132 22.0766 7.42308C22.0953 7.45463 22.114 7.48474 22.1312 7.51628C22.147 7.54353 22.1628 7.57077 22.1786 7.59945C22.1916 7.62239 22.2045 7.6439 22.216 7.66684C22.2347 7.70125 22.2534 7.73423 22.2721 7.76864C22.2893 7.80162 22.308 7.8346 22.3252 7.86615L22.3454 7.90486C22.3626 7.93927 22.3813 7.97369 22.3985 8.0081C22.4086 8.02817 22.4201 8.04825 22.4301 8.06976C22.4517 8.11134 22.4718 8.15149 22.4919 8.19307C22.5063 8.22318 22.5207 8.25186 22.535 8.28197C22.548 8.31064 22.5624 8.33932 22.5753 8.368C22.5825 8.38521 22.5911 8.40098 22.5983 8.41818C22.6227 8.47267 22.6471 8.52716 22.6716 8.58164C22.6802 8.60172 22.6888 8.62323 22.6989 8.6433C22.7118 8.67341 22.7247 8.70352 22.7362 8.73363C22.7492 8.76374 22.7621 8.79529 22.7736 8.8254C22.7851 8.85264 22.7952 8.87989 22.8067 8.90713C22.8239 8.95158 22.8411 8.99603 22.8584 9.04048C22.8656 9.06199 22.8742 9.0835 22.8828 9.10357C22.8943 9.13512 22.9058 9.16666 22.9173 9.19677C22.9245 9.21541 22.9302 9.23405 22.9374 9.25126C22.9446 9.2699 22.9504 9.28854 22.9576 9.30718C22.9676 9.33442 22.9762 9.36167 22.9863 9.39034V9.39321C22.9964 9.41902 23.005 9.44626 23.0136 9.47351C23.0352 9.53803 23.0553 9.60255 23.0754 9.66851C23.0855 9.70149 23.0955 9.73304 23.1056 9.76602C23.1156 9.79899 23.1243 9.83197 23.1343 9.86352C23.1429 9.89506 23.153 9.92804 23.1616 9.95959C23.1702 9.99257 23.1789 10.0241 23.1875 10.0571C23.1947 10.0858 23.2033 10.1144 23.2105 10.1446C23.2205 10.1804 23.2292 10.2162 23.2378 10.2535C23.245 10.2836 23.2522 10.3123 23.2593 10.3424C23.2651 10.3668 23.2708 10.3912 23.2766 10.4141L23.2795 10.4256C23.2838 10.4414 23.2866 10.4571 23.2895 10.4729V10.4829C23.2981 10.5088 23.3025 10.5346 23.3082 10.5604C23.314 10.5891 23.3211 10.6192 23.3269 10.6478V10.6564L23.3355 10.6894V10.6923C23.3398 10.7081 23.3427 10.7238 23.3456 10.7382C23.3528 10.7755 23.3599 10.8127 23.3671 10.8514C23.3729 10.883 23.3786 10.9145 23.3844 10.9461C23.3872 10.9633 23.3901 10.9791 23.393 10.9963C23.3959 11.0135 23.3987 11.0292 23.4016 11.0465C23.4074 11.0794 23.4131 11.1138 23.4174 11.1468C23.4203 11.164 23.4232 11.1798 23.4246 11.197C23.4275 11.2128 23.4289 11.23 23.4318 11.2472C23.4419 11.316 23.4505 11.3834 23.4591 11.4522C23.4634 11.4867 23.4677 11.5196 23.472 11.554C23.4763 11.5885 23.4807 11.6214 23.4835 11.6558C23.4936 11.7419 23.5008 11.8265 23.508 11.9125C23.5108 11.9555 23.5151 11.9985 23.518 12.0416C23.5209 12.0846 23.5238 12.1276 23.5252 12.1706C23.5295 12.2394 23.5324 12.3097 23.5353 12.3785L23.5381 12.3842Z" fill="#C5E5D0"/>'
            + '<path d="M23.5454 12.7759C23.5454 14.8765 22.9289 16.8337 21.8655 18.4755C21.8497 18.4411 21.8324 18.4081 21.8166 18.3751C21.8037 18.3493 21.7922 18.3249 21.7793 18.2991C21.7649 18.2704 21.7505 18.2418 21.7361 18.2145L21.7318 18.2074C21.7203 18.1858 21.7103 18.1643 21.6988 18.1428C21.6873 18.1213 21.6758 18.0998 21.6643 18.0783C21.6456 18.0425 21.6255 18.0066 21.6054 17.9708L21.5867 17.9378L21.568 17.9048C21.5551 17.8804 21.5407 17.8561 21.5263 17.8317C21.5105 17.8044 21.4947 17.7772 21.4789 17.7514C21.4588 17.717 21.4387 17.684 21.4185 17.6496C21.3553 17.5435 21.2892 17.4402 21.2202 17.337C21.2015 17.3098 21.1829 17.2811 21.1642 17.2538C21.1512 17.2352 21.1383 17.2151 21.1254 17.195C21.0938 17.1477 21.0607 17.1018 21.0276 17.0545C21.0075 17.0258 20.9874 16.9986 20.9673 16.9699C20.9472 16.9427 20.927 16.9154 20.9069 16.8868C20.8868 16.8595 20.8667 16.8323 20.8451 16.805C20.8236 16.7749 20.8006 16.7462 20.7776 16.7176C20.7589 16.6932 20.7402 16.6703 20.7215 16.6459C20.6842 16.5986 20.6468 16.5512 20.608 16.5039C20.5893 16.481 20.5706 16.458 20.5505 16.4351C20.5247 16.4036 20.4988 16.3734 20.4729 16.3433C20.4499 16.3161 20.4269 16.2903 20.4039 16.263C20.3738 16.2286 20.345 16.1956 20.3148 16.1627C20.2789 16.1225 20.243 16.0838 20.2071 16.0451C20.1826 16.0178 20.1582 15.992 20.1323 15.9662C20.0547 15.8845 19.9757 15.8042 19.8952 15.7239C19.865 15.6938 19.8334 15.6637 19.8018 15.6336C19.7831 15.6164 19.7644 15.5977 19.7458 15.5805C19.7271 15.5619 19.707 15.5432 19.6868 15.526C19.6538 15.4945 19.6207 15.4644 19.5862 15.4343C19.5546 15.4056 19.523 15.3769 19.49 15.3482C19.4698 15.331 19.4497 15.3124 19.4282 15.2952C19.408 15.278 19.3865 15.2593 19.3664 15.2421C19.3247 15.2063 19.283 15.1719 19.2413 15.1375C19.1565 15.0672 19.0689 14.9984 18.9812 14.931C18.9525 14.908 18.9223 14.8865 18.8936 14.865C18.9783 14.2126 19.0243 13.5373 19.0243 12.8447C19.0243 12.8218 19.0243 12.7988 19.0243 12.7759H23.5454Z" fill="#C5E5D0"/>'
            + '<path d="M10.0123 4.66579C9.13131 5.57199 8.34091 6.82805 7.78762 8.3121L7.77325 8.3035C7.75026 8.29059 7.72583 8.27912 7.70283 8.26478L7.69565 8.26048C7.68128 8.25331 7.66691 8.24471 7.65254 8.23611H7.64966C7.63242 8.22463 7.61373 8.2146 7.59649 8.20456C7.48871 8.14434 7.38092 8.08268 7.27602 8.01816C7.26021 8.00955 7.24584 7.99952 7.23003 7.99091C7.16392 7.95077 7.09782 7.90918 7.03315 7.8676C7.00584 7.8504 6.97854 7.83319 6.95123 7.81455C6.92536 7.79734 6.8995 7.78014 6.87363 7.76436C6.84632 7.74716 6.82046 7.72852 6.79315 7.70988C6.76585 7.69124 6.73998 7.67403 6.71267 7.65539C6.67531 7.62958 6.63938 7.60521 6.60345 7.5794C6.5704 7.55645 6.53735 7.53351 6.50573 7.50914C6.48992 7.49767 6.47268 7.4862 6.45687 7.47472C6.43962 7.46182 6.42094 7.44891 6.4037 7.43458C6.38501 7.42167 6.36633 7.40733 6.34765 7.39299C6.3304 7.38009 6.31316 7.36718 6.29448 7.35285C6.27723 7.33994 6.25999 7.32704 6.24274 7.3127C6.22981 7.30266 6.21687 7.29262 6.20394 7.28259C6.17807 7.26251 6.1522 7.241 6.12634 7.22093L6.09759 7.19799L6.07173 7.17791C6.04586 7.15641 6.01999 7.13633 5.99412 7.11482L5.98837 7.10909C5.95388 7.08185 5.92083 7.05317 5.88778 7.02593C5.85472 6.99868 5.82311 6.97144 5.79006 6.94276C5.76706 6.92412 5.74551 6.90405 5.72395 6.88541C5.70096 6.86677 5.6794 6.84669 5.65784 6.82662C5.63629 6.80798 5.61329 6.7879 5.59174 6.76783C5.57018 6.74776 5.54862 6.72912 5.52707 6.70904C5.5012 6.68467 5.47389 6.66029 5.44803 6.63591C5.41641 6.6058 5.38479 6.57569 5.35318 6.54558L5.33018 6.52407C5.30575 6.4997 5.27988 6.47532 5.25545 6.45095C5.22671 6.42227 5.19797 6.39359 5.16923 6.36491C5.14049 6.33624 5.11318 6.30756 5.08444 6.27888L5.05857 6.25164C5.02983 6.22296 5.00252 6.19428 4.97522 6.16417C4.9436 6.13119 4.91199 6.09678 4.88037 6.06237C5.7958 4.95973 6.93399 4.04636 8.2245 3.38965C8.25755 3.42263 8.29061 3.45417 8.32366 3.48572L8.36246 3.52156L8.37683 3.5359C8.39264 3.55024 8.40845 3.56458 8.42426 3.57892C8.45587 3.6076 8.48749 3.63627 8.52054 3.66495C8.53779 3.67929 8.5536 3.69363 8.57084 3.70797L8.59671 3.72947L8.62258 3.75098C8.63982 3.76532 8.65707 3.77966 8.67431 3.79543C8.70018 3.81694 8.72605 3.83845 8.75335 3.85996C8.77922 3.88146 8.80653 3.90154 8.83383 3.92305C8.86688 3.94886 8.89994 3.97323 8.93299 3.99904C8.95311 4.01338 8.97179 4.02915 8.99191 4.04206C9.01634 4.0607 9.04221 4.0779 9.06664 4.09654C9.09107 4.11375 9.1155 4.13096 9.13993 4.14816C9.16005 4.1625 9.18017 4.17684 9.20173 4.18974C9.27646 4.23993 9.35119 4.28868 9.42879 4.336L9.44316 4.3446C9.47909 4.36611 9.51502 4.38905 9.55094 4.40913C9.57825 4.4249 9.60555 4.4421 9.6343 4.45788C9.65298 4.46935 9.67166 4.47938 9.69178 4.48942C9.71046 4.50089 9.73058 4.51093 9.74926 4.52097C9.77369 4.53387 9.79669 4.54678 9.82112 4.55968C9.84699 4.57402 9.87285 4.58692 9.89872 4.59983C9.93896 4.62134 9.9792 4.64141 10.0194 4.66148L10.0123 4.66579Z" fill="#C5E5D0"/>'
            + '<path d="M21.1254 6.06679C21.0996 6.09547 21.0722 6.12272 21.0464 6.15139C21.0291 6.17003 21.0119 6.18724 20.9946 6.20588C20.9803 6.22022 20.9659 6.23599 20.9515 6.25033C20.9386 6.26323 20.9257 6.27757 20.9127 6.29048C20.8941 6.31055 20.8754 6.33063 20.8552 6.34927C20.8222 6.38224 20.7891 6.41522 20.7561 6.44677L20.7202 6.48118C20.6914 6.50842 20.6641 6.53567 20.6354 6.56291C20.6023 6.59446 20.5678 6.62743 20.5333 6.65755C20.4744 6.71203 20.4155 6.76652 20.3551 6.81957C20.3365 6.83678 20.3178 6.85255 20.2991 6.86976L20.2948 6.87263C20.279 6.88696 20.2617 6.9013 20.2445 6.91564L20.2315 6.92711L20.1999 6.95436C20.1396 7.00597 20.0778 7.05759 20.016 7.10778L19.9815 7.13646L19.9772 7.14076C19.9513 7.16227 19.9254 7.18234 19.8996 7.20385C19.8636 7.23253 19.8263 7.2612 19.7904 7.28988C19.7602 7.31425 19.7286 7.3372 19.6984 7.36014L19.6625 7.38738L19.6481 7.39742C19.6323 7.40889 19.6165 7.42179 19.6007 7.43327L19.5892 7.44187C19.569 7.45621 19.5489 7.47198 19.5288 7.48632L19.5144 7.49636L19.4756 7.52503C19.4397 7.55084 19.4038 7.57665 19.3679 7.60246C19.3449 7.61823 19.3219 7.63401 19.2989 7.64978C19.2687 7.67129 19.2385 7.69136 19.2069 7.71287C19.1422 7.75732 19.0761 7.80033 19.01 7.84335C18.9827 7.86056 18.9554 7.8792 18.9267 7.8964C18.8965 7.91648 18.8663 7.93512 18.8361 7.95376H18.8347L18.8045 7.97383C18.7743 7.99247 18.7456 8.00968 18.7168 8.02832C18.6838 8.04839 18.6507 8.06847 18.6177 8.08854C18.5516 8.12726 18.484 8.16597 18.4165 8.20468C18.3906 8.21902 18.3648 8.23336 18.3389 8.2477L18.3044 8.26634L18.2656 8.28785C18.2483 8.29788 18.2297 8.30792 18.2124 8.31653C17.6577 6.83248 16.8673 5.57498 15.9878 4.67021C16.0093 4.66017 16.0295 4.65014 16.0496 4.63867C16.0711 4.62863 16.0913 4.61716 16.1114 4.60712C16.1286 4.59852 16.1444 4.58992 16.1602 4.58131C16.1933 4.56411 16.2264 4.54547 16.2594 4.52826C16.2838 4.51535 16.3068 4.50245 16.3313 4.48811C16.3657 4.46947 16.3988 4.4494 16.4319 4.43076L16.4649 4.41068C16.4893 4.39634 16.5123 4.38201 16.5368 4.36767C16.5598 4.35333 16.5828 4.34042 16.6043 4.32608C16.6618 4.29024 16.7193 4.25296 16.7753 4.21568C16.8098 4.19274 16.8443 4.16836 16.8788 4.14398C16.9004 4.12965 16.9205 4.11531 16.942 4.09953C16.9593 4.08663 16.978 4.07372 16.9952 4.06082C17.0081 4.05078 17.0211 4.04218 17.034 4.03214L17.0728 4.00347C17.0929 3.98913 17.113 3.97335 17.1332 3.95758L17.1447 3.94898C17.1705 3.9289 17.1964 3.90883 17.2223 3.88732L17.2424 3.87155C17.2711 3.84861 17.2999 3.82567 17.3272 3.80272C17.3415 3.79125 17.3573 3.77835 17.3717 3.76544C17.4033 3.7382 17.435 3.71239 17.4666 3.68515C17.547 3.61489 17.6246 3.54463 17.7008 3.47007C17.7267 3.44569 17.7526 3.41988 17.7784 3.39551C19.0689 4.05222 20.2071 4.96559 21.1225 6.06823L21.1254 6.06679Z" fill="#C5E5D0"/>'
            + '<path d="M15.1874 4.44645C15.0078 4.51384 14.8238 4.57263 14.637 4.62282C14.6155 4.62855 14.5939 4.63429 14.5724 4.64002C14.558 4.64432 14.5422 4.64719 14.5264 4.65149C14.5106 4.65579 14.4933 4.6601 14.4775 4.66296C14.3166 4.70168 14.1542 4.73466 13.9875 4.76047C13.963 4.76477 13.9386 4.76763 13.9127 4.77194C13.8883 4.7748 13.8624 4.77911 13.838 4.78197C13.8136 4.78484 13.7877 4.78914 13.7633 4.79201C13.7388 4.79488 13.713 4.79775 13.6885 4.80061L13.6382 4.80635C13.6181 4.80778 13.5994 4.81065 13.5793 4.81209C13.5233 4.81782 13.4672 4.82212 13.4112 4.82499C13.3939 4.82499 13.3781 4.82642 13.3609 4.82786H13.3508C13.3293 4.82929 13.3077 4.83073 13.2862 4.83216C13.2387 4.83359 13.1913 4.83646 13.1424 4.83789C13.095 4.83789 13.0462 4.83789 12.9987 4.83789C12.9513 4.83789 12.9024 4.83789 12.855 4.83789C12.8076 4.83789 12.7602 4.83503 12.7113 4.83216C12.6898 4.83216 12.6682 4.83073 12.6466 4.82929H12.6366C12.6193 4.82786 12.6035 4.82642 12.5863 4.82642C12.5302 4.82356 12.4742 4.81782 12.4181 4.81352C12.398 4.81208 12.3793 4.81065 12.3592 4.80778L12.3089 4.80205C12.2845 4.79918 12.2586 4.79631 12.2342 4.79344C12.2098 4.79058 12.1839 4.78771 12.1595 4.78341C12.135 4.78054 12.1092 4.77624 12.0847 4.77337C12.0603 4.7705 12.0344 4.7662 12.01 4.7619C11.8447 4.73609 11.6809 4.70311 11.52 4.6644C11.5042 4.6601 11.4869 4.65579 11.4711 4.65293C11.4553 4.64862 11.4409 4.64576 11.4251 4.64146C11.4036 4.63572 11.382 4.62998 11.359 4.62425C11.1722 4.57406 10.9882 4.51528 10.8086 4.44788C11.5286 3.85713 12.2859 3.52734 12.9959 3.52734C13.7058 3.52734 14.4631 3.85857 15.1831 4.44788L15.1874 4.44645Z" fill="#C5E5D0"/>'
            + '<path d="M17.8617 8.49259C17.8387 8.50406 17.8157 8.51553 17.7927 8.52557C17.7697 8.53704 17.7467 8.54708 17.7237 8.55855C17.6777 8.58006 17.6317 8.60156 17.5857 8.62307C17.5397 8.64458 17.4923 8.66609 17.4449 8.68616C17.3975 8.70624 17.35 8.72631 17.3041 8.74638C17.2811 8.75642 17.2566 8.76646 17.2322 8.7765C17.2078 8.78653 17.1848 8.79657 17.1603 8.80517C17.1388 8.81378 17.1158 8.82238 17.0942 8.83242C17.0684 8.84245 17.0425 8.85249 17.0181 8.86253C16.9865 8.87543 16.9534 8.8869 16.9218 8.89981C16.8586 8.92418 16.7939 8.94856 16.7292 8.9715C16.6818 8.98871 16.6329 9.00448 16.5855 9.02169C16.5453 9.03459 16.505 9.04893 16.4648 9.06183C16.4447 9.06757 16.426 9.07474 16.4059 9.08047L16.3944 9.08334C16.38 9.08764 16.3671 9.09195 16.3527 9.09625L16.3426 9.09911C16.3182 9.10772 16.2938 9.11489 16.2679 9.12206C16.186 9.14787 16.1055 9.17081 16.0236 9.19518C15.9834 9.20665 15.9417 9.21813 15.9015 9.2296C15.8411 9.24537 15.7807 9.26258 15.7189 9.27691C15.7046 9.28122 15.6902 9.28408 15.6758 9.28838H15.6672C15.6255 9.30129 15.5839 9.31133 15.5436 9.31993L15.5307 9.3228C15.5077 9.32853 15.4833 9.33427 15.4603 9.33857L15.4488 9.34144C15.4301 9.34574 15.4114 9.35004 15.3927 9.35434L15.3755 9.35721C15.3525 9.36151 15.3295 9.36725 15.3079 9.37155C15.2792 9.37728 15.2519 9.38302 15.2231 9.38876C15.203 9.39306 15.1843 9.39736 15.1642 9.40023C15.1211 9.40883 15.078 9.41743 15.0334 9.4246C15.009 9.4289 14.9846 9.43321 14.9601 9.43751L14.9472 9.44037C14.93 9.44324 14.9142 9.44611 14.8969 9.44898C14.8667 9.45471 14.838 9.45901 14.8078 9.46332C14.7891 9.46618 14.769 9.47049 14.7503 9.47335L14.723 9.47765C14.6914 9.48339 14.6598 9.48769 14.6282 9.49199H14.6253C14.5779 9.49916 14.5305 9.50633 14.483 9.51207C14.4442 9.5178 14.4054 9.5221 14.3652 9.52641H14.3508C14.3307 9.53071 14.3106 9.53358 14.2905 9.53501L14.2689 9.53788C14.256 9.53788 14.243 9.54075 14.2301 9.54218H14.2215C14.187 9.54648 14.1539 9.55078 14.1209 9.55365C14.0921 9.55652 14.0648 9.55939 14.0361 9.56225C14.0088 9.56512 13.98 9.56799 13.9513 9.56942C13.9283 9.57086 13.9053 9.57372 13.8838 9.57516H13.8723C13.8521 9.57802 13.8306 9.57946 13.8105 9.58089H13.8047C13.7803 9.58233 13.7544 9.58519 13.7286 9.58663C13.6466 9.59236 13.5647 9.59666 13.4814 9.59953C13.4641 9.59953 13.4469 9.60097 13.4296 9.60097H13.3995C13.3678 9.60383 13.3348 9.60383 13.3032 9.60527C13.2586 9.60527 13.2141 9.60814 13.171 9.60814H13.1293C13.0876 9.60814 13.0459 9.60814 13.0028 9.60814C12.9597 9.60814 12.9195 9.60814 12.8764 9.60814H12.8347C12.7901 9.60814 12.7456 9.6067 12.7025 9.60527C12.6694 9.60527 12.6378 9.60384 12.6062 9.6024H12.576C12.5588 9.60097 12.5415 9.59953 12.5243 9.59953C12.4912 9.5981 12.4582 9.59667 12.4237 9.59523C12.4079 9.59523 12.3921 9.5938 12.3762 9.59236H12.3647C12.336 9.59093 12.3087 9.58806 12.28 9.58663C12.2656 9.58663 12.2527 9.58519 12.2383 9.58376H12.2225C12.1894 9.58089 12.1578 9.57802 12.1248 9.57516H12.0989C12.0644 9.57086 12.0299 9.56655 11.9954 9.56369L11.9624 9.56082C11.9207 9.55652 11.879 9.55222 11.8373 9.54791H11.8172L11.7798 9.54218C11.7425 9.53788 11.7037 9.53358 11.6663 9.52927C11.6189 9.52354 11.5715 9.5178 11.5226 9.51063C11.4809 9.5049 11.4393 9.49916 11.3976 9.49343C11.3343 9.48482 11.2726 9.47479 11.2093 9.46475C11.1777 9.45901 11.1447 9.45471 11.113 9.44898L11.0814 9.44324C11.0441 9.43607 11.0053 9.43034 10.9679 9.42317C10.955 9.4203 10.942 9.41743 10.9291 9.416C10.8874 9.4074 10.8457 9.40023 10.8041 9.39162C10.7681 9.38445 10.7336 9.37728 10.6977 9.37011C10.679 9.36581 10.6589 9.36295 10.6402 9.35721H10.6302C10.5942 9.34717 10.5569 9.34 10.5209 9.3314C10.4821 9.3228 10.4419 9.31276 10.4031 9.30416L10.3873 9.29986C10.3672 9.29555 10.3471 9.28982 10.3284 9.28552H10.3241C10.3111 9.28122 10.2982 9.27835 10.2853 9.27548L10.2766 9.27261C10.2508 9.26688 10.2263 9.25971 10.2005 9.25254C10.1789 9.2468 10.1574 9.24107 10.1344 9.23533C10.1143 9.2296 10.0941 9.2253 10.074 9.21956C10.0453 9.21239 10.0165 9.20379 9.98779 9.19662C9.95904 9.18801 9.9303 9.18085 9.90156 9.17224C9.86994 9.16364 9.83976 9.15504 9.80959 9.145C9.76935 9.13353 9.72911 9.12062 9.68887 9.10772C9.64288 9.09338 9.59833 9.07904 9.55234 9.0647C9.50636 9.05036 9.46181 9.03459 9.41726 9.01882C9.38277 9.00735 9.34684 8.99444 9.31235 8.98154C9.29942 8.97724 9.28648 8.9715 9.27355 8.9672C9.19594 8.93996 9.11834 8.91128 9.04217 8.88117C9.01631 8.87113 8.989 8.86109 8.96313 8.85106C8.94301 8.84389 8.92289 8.83528 8.90134 8.82668C8.88122 8.81808 8.85966 8.81091 8.83954 8.80231C8.79787 8.78653 8.75763 8.76933 8.71739 8.75212H8.71452L8.68721 8.73922H8.6829V8.73635C8.65703 8.72631 8.63116 8.71484 8.6053 8.70337C8.53632 8.67469 8.46877 8.64458 8.40123 8.61304C8.36961 8.5987 8.338 8.58436 8.30638 8.56859L8.29488 8.56285L8.27333 8.55281H8.26902V8.54995C8.24746 8.53991 8.22734 8.53131 8.20722 8.52127C8.18566 8.51123 8.16267 8.49976 8.14111 8.48972C8.69296 6.97413 9.4963 5.70659 10.3859 4.8305L10.4002 4.83624C10.4204 4.84484 10.4405 4.85345 10.4592 4.86062C10.5483 4.89646 10.6374 4.93088 10.7279 4.96242C10.7509 4.97102 10.7739 4.97819 10.7969 4.9868C10.8199 4.9954 10.8429 5.00257 10.8659 5.00974C10.9118 5.02551 10.9578 5.03985 11.0053 5.05419C11.0311 5.06279 11.0584 5.06996 11.0843 5.07856C11.1375 5.09434 11.1906 5.10867 11.2438 5.12301C11.2682 5.12875 11.2927 5.13592 11.3171 5.14165C11.3387 5.14739 11.3602 5.15312 11.3818 5.15743C11.3976 5.16173 11.4148 5.16603 11.4306 5.1689C11.4536 5.17463 11.4766 5.18037 11.5011 5.18467C11.5485 5.19614 11.5945 5.20618 11.6419 5.21478C11.6721 5.22052 11.7022 5.22769 11.7339 5.23199C11.8373 5.25206 11.9408 5.26927 12.0457 5.28361C12.0586 5.28504 12.073 5.28791 12.086 5.28934C12.0989 5.29077 12.1133 5.29364 12.1262 5.29508L12.1607 5.29938H12.1736C12.1923 5.30368 12.211 5.30511 12.2297 5.30798C12.2455 5.30942 12.2627 5.31228 12.28 5.31372C12.2943 5.31515 12.3087 5.31658 12.3231 5.31802C12.3446 5.32089 12.3662 5.32232 12.3877 5.32375C12.4093 5.32519 12.4309 5.32805 12.4524 5.32949C12.4682 5.32949 12.4826 5.33236 12.4984 5.33236C12.5171 5.33236 12.5358 5.33522 12.5544 5.33666H12.5861C12.6565 5.34383 12.7283 5.3467 12.8002 5.34813C12.8232 5.34813 12.8462 5.34813 12.8692 5.34956H12.9209C12.9496 5.34956 12.9784 5.34956 13.0071 5.34956C13.0359 5.34956 13.0646 5.34956 13.0934 5.34956C13.1106 5.34956 13.1278 5.34956 13.1451 5.34956C13.1681 5.34956 13.1911 5.34956 13.2141 5.34813C13.2859 5.3467 13.3578 5.34239 13.4282 5.33809H13.4598C13.4785 5.33522 13.4972 5.33379 13.5159 5.33236C13.5317 5.33236 13.546 5.32949 13.5619 5.32949C13.5834 5.32805 13.605 5.32662 13.6265 5.32375C13.6481 5.32232 13.6696 5.31945 13.6898 5.31802C13.7041 5.31802 13.7185 5.31515 13.7329 5.31372C13.7501 5.31228 13.7659 5.31085 13.7832 5.30798C13.8018 5.30655 13.8205 5.30368 13.8392 5.30225H13.8521L13.8866 5.29651C13.8996 5.29651 13.9139 5.29364 13.9269 5.29077C13.9398 5.28934 13.9542 5.28791 13.9671 5.28504C14.0102 5.2793 14.0519 5.27213 14.0936 5.26497C14.1079 5.26353 14.1223 5.26066 14.1367 5.2578C14.1496 5.25636 14.164 5.25349 14.1769 5.25063C14.1899 5.24919 14.2042 5.24632 14.2172 5.24346C14.256 5.23629 14.2948 5.22912 14.3336 5.22195C14.3523 5.21908 14.3709 5.21478 14.3882 5.21048C14.4097 5.20618 14.4313 5.20188 14.4543 5.19614C14.4845 5.1904 14.5132 5.18323 14.5434 5.17607C14.5736 5.1689 14.6037 5.16173 14.6339 5.15456C14.6569 5.14882 14.6814 5.14309 14.7043 5.13735C14.7273 5.13162 14.7518 5.12588 14.7748 5.11871H14.7762C14.8006 5.11154 14.8251 5.10581 14.8495 5.09864C14.8754 5.09147 14.9012 5.0843 14.9271 5.0757C14.953 5.06853 14.9803 5.05992 15.0061 5.05132L15.0248 5.04558C15.0478 5.03841 15.0708 5.03125 15.0938 5.02408C15.1427 5.0083 15.1915 4.9911 15.2404 4.97532L15.2763 4.96242C15.3151 4.94952 15.3539 4.93518 15.3927 4.9194C15.4143 4.9108 15.4358 4.90363 15.4574 4.89503C15.4861 4.88499 15.5134 4.87352 15.5407 4.86205C15.5637 4.85201 15.5867 4.84341 15.6112 4.83337L15.6241 4.82764C16.5122 5.70373 17.3156 6.97126 17.8688 8.48686L17.8617 8.49259Z" fill="#C5E5D0"/>'
            + '<path d="M18.6162 12.3841H7.38379C7.4269 11.1596 7.64534 9.99673 7.9845 8.94141L7.99599 8.94571C8.03911 8.96722 8.08366 8.98872 8.12821 9.0088C8.17563 9.03174 8.22449 9.05325 8.27335 9.07476C8.31503 9.09483 8.35814 9.11347 8.40126 9.13068L8.42712 9.14215C8.47024 9.16079 8.51191 9.17943 8.55502 9.19663L8.56796 9.20237C8.61538 9.22101 8.66281 9.24108 8.71023 9.25972C8.7361 9.26976 8.76197 9.2798 8.78784 9.28984C8.86113 9.31851 8.93442 9.34576 9.00771 9.373L9.04508 9.3859L9.07813 9.39737C9.11118 9.40885 9.14424 9.42175 9.17729 9.43322C9.20603 9.44326 9.23334 9.4533 9.26208 9.46333C9.2822 9.4705 9.30088 9.47624 9.321 9.48341C9.34974 9.49344 9.37704 9.50205 9.40579 9.51208C9.42447 9.51782 9.44315 9.52355 9.46183 9.53072H9.46471C9.49201 9.54076 9.51932 9.54936 9.54662 9.55797C9.58255 9.56944 9.61848 9.58091 9.65441 9.59095C9.68746 9.60098 9.71907 9.61102 9.75213 9.61962C9.82542 9.64113 9.89871 9.6612 9.972 9.68128C9.98925 9.68558 10.0065 9.69132 10.0237 9.69562C10.0568 9.70422 10.0884 9.71282 10.1215 9.72143C10.1459 9.7286 10.1718 9.73433 10.1962 9.74007H10.1991C10.212 9.74437 10.2249 9.74724 10.2393 9.7501L10.2551 9.75441C10.2867 9.76301 10.3183 9.77018 10.3514 9.77735C10.3686 9.78165 10.3859 9.78595 10.4046 9.79025C10.4218 9.79455 10.4391 9.79886 10.4577 9.80172H10.4621C10.4965 9.81033 10.531 9.8175 10.5655 9.82467C10.5856 9.82897 10.6072 9.83327 10.6273 9.83757C10.7006 9.85334 10.7725 9.86768 10.8458 9.88202C10.8601 9.88489 10.8745 9.88776 10.8889 9.89062L10.9162 9.89493C10.9521 9.90209 10.988 9.90783 11.0225 9.91357C11.0728 9.92217 11.1217 9.93077 11.172 9.93794C11.2194 9.94511 11.2654 9.95228 11.3128 9.95945C11.3617 9.96662 11.4105 9.97379 11.4594 9.97952L11.4968 9.98526C11.5384 9.99099 11.5801 9.9953 11.6204 10.001C11.6707 10.0068 11.721 10.0125 11.7713 10.0182C11.8675 10.0283 11.9653 10.0383 12.063 10.0455H12.0817C12.1736 10.0541 12.2656 10.0598 12.3576 10.0656C12.3763 10.0656 12.3964 10.067 12.4151 10.0684C12.4984 10.0727 12.5832 10.0756 12.668 10.0785C12.6867 10.0785 12.7054 10.0785 12.7226 10.0799C12.7542 10.0799 12.7873 10.0813 12.8189 10.0813C12.8347 10.0813 12.8505 10.0813 12.8678 10.0813C12.9123 10.0813 12.9569 10.0813 13.0014 10.0813C13.046 10.0813 13.0905 10.0813 13.1351 10.0813C13.1509 10.0813 13.1681 10.0813 13.1839 10.0813C13.2155 10.0813 13.2486 10.0813 13.2802 10.0799C13.2989 10.0799 13.3176 10.0799 13.3348 10.0785C13.4196 10.077 13.503 10.0727 13.5877 10.0684C13.6064 10.0684 13.6265 10.067 13.6452 10.0656C13.6797 10.0641 13.7142 10.0613 13.7487 10.0598C13.7659 10.0598 13.7846 10.057 13.8019 10.057C13.8824 10.0512 13.9628 10.0455 14.0433 10.0369H14.0447C14.0591 10.0369 14.0749 10.034 14.0893 10.0326H14.1065C14.1267 10.0297 14.1468 10.0268 14.1655 10.0254L14.1899 10.0225C14.2086 10.0211 14.2287 10.0182 14.2474 10.0168C14.2919 10.0125 14.3365 10.0068 14.381 10.0025C14.4198 9.99816 14.4572 9.99386 14.496 9.98813H14.5104C14.5233 9.98526 14.5377 9.98382 14.5506 9.98096L14.5693 9.97809C14.5865 9.97665 14.6038 9.97379 14.6196 9.97092L14.6555 9.96518C14.6756 9.96232 14.6957 9.95945 14.7159 9.95658C14.7389 9.95371 14.7604 9.94941 14.7834 9.94654C14.8064 9.94368 14.828 9.93938 14.851 9.93651H14.861C14.8998 9.92934 14.9386 9.92217 14.9789 9.915C15.0148 9.90926 15.0507 9.90209 15.0852 9.89636C15.1039 9.89349 15.1226 9.88919 15.1427 9.88632C15.1729 9.88059 15.203 9.87485 15.2318 9.86912C15.2548 9.86481 15.2763 9.86051 15.2993 9.85621C15.3295 9.85048 15.3611 9.84331 15.3927 9.83757C15.4143 9.83327 15.4359 9.82897 15.4588 9.82323C15.512 9.81176 15.5638 9.80029 15.6169 9.78739C15.6701 9.77591 15.7218 9.76301 15.7736 9.7501C15.7937 9.7458 15.8138 9.74007 15.8339 9.73577C15.8541 9.73146 15.8742 9.72573 15.8943 9.71999C15.9245 9.71282 15.9546 9.70422 15.9863 9.69562C16.0006 9.69275 16.0136 9.68845 16.0279 9.68415C16.1055 9.66264 16.1817 9.64256 16.2579 9.61962C16.2794 9.61389 16.2996 9.60672 16.3211 9.60098H16.324C16.3427 9.59381 16.3628 9.58951 16.3815 9.58234L16.3944 9.57804C16.4145 9.57231 16.4332 9.56657 16.4533 9.5594C16.472 9.55367 16.4907 9.54793 16.5094 9.5422L16.5194 9.53933H16.5209C16.5453 9.53072 16.5697 9.52355 16.5942 9.51495C16.6258 9.50491 16.656 9.49488 16.6876 9.48341C16.7206 9.47194 16.7551 9.46046 16.7882 9.44899L16.8083 9.44182C16.8356 9.43322 16.8615 9.42318 16.8888 9.41315C16.9649 9.3859 17.0411 9.35866 17.1173 9.32855C17.1302 9.32281 17.1446 9.31851 17.1589 9.31278C17.1862 9.30274 17.2135 9.2927 17.2409 9.28123C17.2595 9.27406 17.2768 9.26689 17.2955 9.25972C17.3443 9.23965 17.3932 9.21958 17.442 9.1995C17.465 9.18947 17.4895 9.17943 17.5125 9.17082L17.5829 9.14071C17.6447 9.1149 17.705 9.08766 17.7654 9.06042C17.7941 9.04751 17.8214 9.03461 17.8502 9.0217C17.9077 8.99589 17.9652 8.96865 18.0212 8.94141C18.3604 9.99673 18.5774 11.1596 18.6219 12.3841H18.6162Z" fill="#C5E5D0"/>'
            + '<path d="M18.6247 12.8433C18.6247 13.4441 18.5902 14.0306 18.5256 14.5998L18.5169 14.5941C18.4882 14.5754 18.4609 14.5568 18.4322 14.5367C18.4005 14.5166 18.3689 14.4951 18.3373 14.4751C18.3186 14.4636 18.3014 14.4521 18.2827 14.4392C18.2554 14.422 18.2281 14.4048 18.2008 14.3876C18.1735 14.3704 18.1462 14.3532 18.1189 14.3374C18.0111 14.2715 17.9033 14.2084 17.7941 14.1467C17.7582 14.1266 17.7222 14.1066 17.6849 14.0865L17.6518 14.0693L17.6216 14.0535C17.5368 14.0091 17.4521 13.9646 17.3673 13.923C17.3385 13.9087 17.3112 13.8958 17.2825 13.8814C17.2537 13.8671 17.225 13.8542 17.1977 13.8413C17.1675 13.827 17.1388 13.8141 17.1086 13.7997C17.0525 13.7739 16.9951 13.7481 16.939 13.7237C16.9175 13.7137 16.8945 13.7051 16.8729 13.695C16.847 13.6836 16.8197 13.6721 16.7939 13.6606C16.7407 13.6391 16.6875 13.6162 16.6343 13.5961C16.6085 13.5861 16.5812 13.5746 16.5539 13.5646C16.5266 13.5545 16.5007 13.5445 16.4734 13.533C16.4188 13.5129 16.3656 13.4929 16.311 13.4728C16.2564 13.4527 16.2018 13.4341 16.1472 13.4154C16.1155 13.4054 16.0854 13.3939 16.0538 13.3839C16.0135 13.371 15.9747 13.3581 15.9345 13.3452C15.9086 13.3366 15.8842 13.3294 15.8583 13.3222C15.8267 13.3122 15.7965 13.3036 15.7649 13.295C15.7419 13.2878 15.7175 13.2807 15.6945 13.2749C15.6514 13.262 15.6083 13.2505 15.5637 13.2391C15.5479 13.2348 15.5321 13.2305 15.5163 13.2262C15.4832 13.2176 15.4502 13.209 15.4171 13.2004C15.3812 13.1918 15.3453 13.1832 15.3093 13.1746C15.2648 13.1631 15.2202 13.153 15.1742 13.143C15.1513 13.1373 15.1268 13.1315 15.1024 13.1272C15.0277 13.1115 14.9529 13.0957 14.8782 13.0814C14.8624 13.0785 14.8466 13.0756 14.8308 13.0727H14.825C14.7934 13.0656 14.7632 13.0598 14.7316 13.0555C14.7058 13.0512 14.6799 13.0469 14.654 13.0426C14.6296 13.0383 14.6037 13.034 14.5779 13.0297C14.5031 13.0168 14.427 13.0068 14.3508 12.9953C14.3134 12.991 14.2775 12.9853 14.2401 12.981C14.2042 12.9767 14.1697 12.9724 14.1338 12.9681C14.1007 12.9638 14.0691 12.9609 14.0375 12.958C14.0073 12.9552 13.9757 12.9509 13.9455 12.9494C13.9168 12.9466 13.888 12.9437 13.8593 12.9408C13.8277 12.938 13.7961 12.9351 13.7645 12.9337C13.7228 12.9308 13.6811 12.9279 13.6394 12.9251C13.5863 12.9222 13.5331 12.9179 13.4813 12.9165C13.4627 12.9165 13.444 12.915 13.4267 12.9136C13.329 12.9093 13.2299 12.9064 13.1307 12.905C13.1134 12.905 13.0976 12.905 13.0804 12.905C13.0545 12.905 13.0287 12.905 13.0028 12.905C12.9769 12.905 12.9511 12.905 12.9252 12.905C12.9079 12.905 12.8921 12.905 12.8749 12.905C12.7757 12.905 12.678 12.9093 12.5788 12.9136C12.5602 12.9136 12.5415 12.915 12.5242 12.9165C12.4711 12.9193 12.4179 12.9222 12.3662 12.9251C12.3245 12.9279 12.2828 12.9308 12.2411 12.9337C12.2095 12.9365 12.1779 12.938 12.1463 12.9408C12.1175 12.9437 12.0888 12.9451 12.0601 12.9494C12.0356 12.9523 12.0098 12.9537 11.9853 12.9566C11.958 12.9595 11.9307 12.9623 11.902 12.9652C11.8545 12.9695 11.8086 12.9752 11.7626 12.981C11.7425 12.9839 11.7209 12.9867 11.7008 12.9896C11.6778 12.9925 11.6548 12.9953 11.6318 12.9996C11.5872 13.0054 11.5427 13.0125 11.4967 13.0197C11.478 13.0226 11.4593 13.0254 11.4407 13.0283C11.4234 13.0312 11.4047 13.034 11.3875 13.0369C11.3501 13.0426 11.3113 13.0498 11.274 13.057C11.2409 13.0627 11.2079 13.0684 11.1748 13.0756C11.1389 13.0828 11.1015 13.09 11.0656 13.0971C11.0469 13.1014 11.0268 13.1043 11.0081 13.1086C10.9736 13.1158 10.9391 13.1229 10.9046 13.1301C10.8845 13.1344 10.863 13.1387 10.8443 13.143C10.8069 13.1516 10.771 13.1602 10.735 13.1688C10.7135 13.1731 10.6919 13.1789 10.6704 13.1846C10.6273 13.1946 10.5842 13.2061 10.541 13.2176C10.5281 13.2204 10.5152 13.2247 10.5022 13.2276C10.4548 13.2405 10.4074 13.2534 10.36 13.2663C10.3327 13.2735 10.3039 13.2821 10.2766 13.2907C10.2507 13.2979 10.2234 13.305 10.1976 13.3136C10.1401 13.3308 10.0826 13.3481 10.0266 13.3667C9.98488 13.3796 9.94321 13.3939 9.90297 13.4068C9.87998 13.414 9.85842 13.4212 9.83686 13.4298C9.7607 13.4556 9.68597 13.4814 9.6098 13.5101C9.58106 13.5201 9.55088 13.5316 9.52214 13.5431C9.49196 13.5545 9.46178 13.566 9.4316 13.5775C9.40429 13.5889 9.37555 13.599 9.34825 13.6104C9.331 13.6176 9.31232 13.6248 9.29508 13.632C9.24334 13.6535 9.1916 13.675 9.13987 13.6965C9.11688 13.7065 9.09388 13.7166 9.07089 13.7266L9.04789 13.7366C8.97748 13.7667 8.90706 13.7997 8.83664 13.8327C8.80502 13.847 8.77485 13.8614 8.74467 13.8771C8.71305 13.8929 8.68 13.9087 8.64838 13.9245C8.61676 13.9402 8.58371 13.956 8.55209 13.9718C8.53198 13.9818 8.51186 13.9933 8.4903 14.0033C8.44719 14.0248 8.40407 14.0478 8.36096 14.0707C8.31066 14.098 8.26036 14.1252 8.2115 14.1524C8.17989 14.1697 8.14827 14.1883 8.11809 14.2055C8.08791 14.2227 8.0563 14.2413 8.02612 14.2586C8.00456 14.2715 7.98444 14.2829 7.96288 14.2958C7.93414 14.313 7.90684 14.3302 7.87953 14.346C7.85654 14.3589 7.83498 14.3733 7.81199 14.3876C7.75019 14.4263 7.6884 14.465 7.62804 14.5052C7.60361 14.521 7.58062 14.5367 7.55762 14.5525C7.53175 14.5697 7.50589 14.5869 7.48002 14.6041C7.41391 14.0349 7.38086 13.4484 7.38086 12.8476C7.38086 12.8247 7.38086 12.8018 7.38086 12.7788H18.629C18.629 12.8018 18.629 12.8247 18.629 12.8476L18.6247 12.8433Z" fill="#C5E5D0"/>'
            + '<path d="M25.9971 12.7757C25.9971 12.6452 25.9914 12.5148 25.9856 12.3843C25.852 9.39037 24.7009 6.66173 22.87 4.53101C22.7637 4.40626 22.6544 4.28295 22.5409 4.1625C21.5594 3.10431 20.4039 2.20958 19.1177 1.52563C18.9654 1.4439 18.8102 1.36504 18.655 1.29048C16.9463 0.463138 15.0277 0 13 0C10.9723 0 9.05373 0.463138 7.34358 1.28904C7.18693 1.3636 7.03316 1.44247 6.88083 1.5242C5.59606 2.20958 4.4392 3.10431 3.45766 4.1625C3.34557 4.28295 3.23635 4.40626 3.12857 4.53101C1.2977 6.66029 0.146584 9.39037 0.0129339 12.3843C0.0071855 12.5148 0.0028742 12.6452 0.0014371 12.7757C0.0014371 12.8402 0 12.9062 0 12.9707C0 16.2557 1.22441 19.2553 3.24066 21.5395C3.78388 22.1561 4.38603 22.7196 5.03703 23.2243V21.627H20.9601V23.2243C21.6111 22.721 22.2132 22.1561 22.7565 21.5395C24.7742 19.2539 25.9971 16.2543 25.9971 12.9707C25.9971 12.9062 25.9971 12.8402 25.9957 12.7757H25.9971ZM21.1915 6.67463C21.2159 6.65026 21.2403 6.62588 21.2633 6.60151C21.2806 6.5843 21.2964 6.56853 21.3122 6.55132L21.3438 6.51834C21.3682 6.49253 21.3941 6.46672 21.4185 6.43948C21.4473 6.47676 21.476 6.51547 21.5033 6.55275C21.522 6.57856 21.5407 6.60294 21.5594 6.62875C21.5737 6.64882 21.5895 6.6689 21.6039 6.6904C21.6212 6.71478 21.6384 6.73916 21.6556 6.76353C21.6786 6.79508 21.7002 6.82806 21.7218 6.8596C21.7433 6.89115 21.7649 6.92269 21.785 6.95424C21.8022 6.98005 21.8195 7.00586 21.8367 7.03166C21.8626 7.07181 21.8885 7.11196 21.9143 7.15211C21.9718 7.24101 22.0264 7.33134 22.081 7.42311C22.0997 7.45465 22.1184 7.48477 22.1356 7.51631C22.1514 7.54355 22.1673 7.5708 22.1831 7.59947C22.196 7.62242 22.2089 7.64392 22.2204 7.66687C22.2391 7.70128 22.2578 7.73426 22.2765 7.76867C22.2937 7.80165 22.3124 7.83463 22.3296 7.86617L22.3498 7.90489C22.367 7.9393 22.3857 7.97371 22.4029 8.00813C22.413 8.0282 22.4245 8.04827 22.4346 8.06978C22.4561 8.11136 22.4762 8.15151 22.4964 8.19309C22.5107 8.2232 22.5251 8.25188 22.5395 8.28199C22.5524 8.31067 22.5668 8.33935 22.5797 8.36802C22.5869 8.38523 22.5955 8.401 22.6027 8.41821C22.6271 8.4727 22.6516 8.52718 22.676 8.58167C22.6846 8.60174 22.6932 8.62325 22.7033 8.64333C22.7162 8.67344 22.7292 8.70355 22.7407 8.73366C22.7536 8.76377 22.7665 8.79532 22.778 8.82543C22.7895 8.85267 22.7996 8.87991 22.8111 8.90716C22.8283 8.95161 22.8456 8.99606 22.8628 9.04051C22.87 9.06201 22.8786 9.08352 22.8872 9.1036C22.8987 9.13514 22.9102 9.16669 22.9217 9.1968C22.9289 9.21544 22.9347 9.23408 22.9419 9.25128C22.949 9.26992 22.9548 9.28857 22.962 9.30721C22.972 9.33445 22.9807 9.36169 22.9907 9.39037V9.39324C23.0008 9.41905 23.0094 9.44629 23.018 9.47353C23.0396 9.53806 23.0597 9.60258 23.0798 9.66854C23.0899 9.70152 23.0999 9.73306 23.11 9.76604C23.1201 9.79902 23.1287 9.832 23.1387 9.86354C23.1474 9.89509 23.1574 9.92807 23.166 9.95961C23.1747 9.99259 23.1833 10.0241 23.1919 10.0571C23.1991 10.0858 23.2077 10.1145 23.2149 10.1446C23.225 10.1804 23.2336 10.2163 23.2422 10.2536C23.2494 10.2837 23.2566 10.3123 23.2638 10.3425C23.2695 10.3668 23.2753 10.3912 23.281 10.4141L23.2839 10.4256C23.2882 10.4414 23.2911 10.4572 23.2939 10.4729V10.483C23.3026 10.5088 23.3069 10.5346 23.3126 10.5604C23.3184 10.5891 23.3256 10.6192 23.3313 10.6479V10.6565L23.3399 10.6894V10.6923C23.3442 10.7081 23.3471 10.7239 23.35 10.7382C23.3572 10.7755 23.3644 10.8128 23.3715 10.8515C23.3773 10.883 23.383 10.9146 23.3888 10.9461C23.3917 10.9633 23.3945 10.9791 23.3974 10.9963C23.4003 11.0135 23.4032 11.0293 23.406 11.0465C23.4118 11.0795 23.4175 11.1139 23.4218 11.1469C23.4247 11.1641 23.4276 11.1798 23.429 11.197C23.4319 11.2128 23.4333 11.23 23.4362 11.2472C23.4463 11.316 23.4549 11.3834 23.4635 11.4523C23.4678 11.4867 23.4721 11.5197 23.4765 11.5541C23.4808 11.5885 23.4851 11.6215 23.488 11.6559C23.498 11.7419 23.5052 11.8265 23.5124 11.9125C23.5153 11.9556 23.5196 11.9986 23.5224 12.0416C23.5253 12.0846 23.5282 12.1276 23.5296 12.1706C23.5339 12.2395 23.5368 12.3097 23.5397 12.3785H19.0171C18.9711 11.0895 18.7369 9.86641 18.3704 8.7566C18.5142 8.68204 18.655 8.60318 18.7944 8.52288C18.8332 8.50137 18.872 8.47843 18.9094 8.45549C18.9395 8.43685 18.9711 8.41821 19.0028 8.39957C19.0373 8.37806 19.0717 8.35799 19.1062 8.33648C19.1738 8.2949 19.2428 8.25045 19.3089 8.206C19.3333 8.19023 19.3563 8.17445 19.3807 8.15868L19.3908 8.15151C19.4095 8.13861 19.4281 8.12714 19.4483 8.11423C19.4655 8.10276 19.4828 8.09129 19.4986 8.07982L19.5072 8.07408H19.5086C19.5417 8.04971 19.5747 8.02676 19.6078 8.00382C19.6408 7.98088 19.6739 7.95794 19.7055 7.935C19.7314 7.91779 19.7558 7.89915 19.7817 7.88051C19.796 7.87047 19.8104 7.86044 19.8248 7.84897L19.842 7.83606C19.8679 7.81742 19.8938 7.79878 19.9182 7.78014C19.9426 7.7615 19.9671 7.74429 19.9901 7.72565C20.0145 7.70845 20.0375 7.68981 20.0619 7.67117C20.0964 7.64392 20.1323 7.61668 20.1654 7.58944C20.1941 7.5665 20.2243 7.54355 20.253 7.51918C20.2832 7.4948 20.3134 7.47043 20.3436 7.44462L20.3809 7.41307L20.3967 7.40017C20.4169 7.38296 20.437 7.36719 20.4571 7.34855L20.4744 7.33421C20.506 7.3084 20.5361 7.28116 20.5678 7.25391C20.5807 7.24244 20.5936 7.23097 20.6066 7.2195C20.6597 7.17218 20.7143 7.12487 20.7661 7.07611C20.7905 7.05317 20.8164 7.03023 20.8408 7.00729C20.8925 6.95854 20.9457 6.90979 20.996 6.8596C21.0104 6.84526 21.0248 6.83236 21.0391 6.81802C21.0578 6.80081 21.0751 6.78217 21.0937 6.76497C21.1124 6.74776 21.1297 6.72912 21.1469 6.71191C21.1613 6.69757 21.1757 6.68324 21.1886 6.6689L21.1915 6.67463ZM13.1954 5.35261H13.2069C13.2788 5.34974 13.3507 5.34688 13.4211 5.34257H13.4527C13.4714 5.33971 13.4901 5.33827 13.5087 5.33684C13.5245 5.33684 13.5389 5.33397 13.5547 5.33397C13.5763 5.33254 13.5978 5.3311 13.6194 5.32824C13.6409 5.3268 13.6625 5.32393 13.6826 5.3225C13.697 5.3225 13.7114 5.31963 13.7257 5.3182C13.743 5.31676 13.7588 5.31533 13.776 5.31246C13.7947 5.31103 13.8134 5.30816 13.8321 5.30673H13.845L13.8795 5.30099C13.8924 5.30099 13.9068 5.29812 13.9197 5.29526C13.9327 5.29382 13.947 5.29239 13.96 5.28952C14.0031 5.28379 14.0448 5.27662 14.0864 5.26945C14.1008 5.26801 14.1152 5.26515 14.1296 5.26228C14.1425 5.26084 14.1569 5.25798 14.1698 5.25511C14.1827 5.25367 14.1971 5.25081 14.21 5.24794C14.2488 5.24077 14.2876 5.2336 14.3264 5.22643C14.3451 5.22356 14.3638 5.21926 14.3811 5.21496C14.4026 5.21066 14.4242 5.20636 14.4472 5.20062C14.4773 5.19489 14.5061 5.18772 14.5363 5.18055C14.5664 5.17338 14.5966 5.16621 14.6268 5.15904C14.6498 5.1533 14.6742 5.14757 14.6972 5.14183C14.7202 5.1361 14.7446 5.13036 14.7676 5.12319H14.7691C14.7935 5.11602 14.8179 5.11029 14.8424 5.10312C14.8682 5.09595 14.8941 5.08878 14.92 5.08018C14.9458 5.07301 14.9731 5.0644 14.999 5.0558L15.0177 5.05007C15.0407 5.0429 15.0637 5.03573 15.0867 5.02856C15.1355 5.01278 15.1844 4.99558 15.2333 4.97981L15.2692 4.9669C15.308 4.954 15.3468 4.93966 15.3856 4.92389C15.4071 4.91528 15.4287 4.90811 15.4503 4.89951C15.479 4.88947 15.5063 4.878 15.5336 4.86653C15.5566 4.85649 15.5796 4.84789 15.604 4.83785L15.617 4.83212C16.5051 5.70821 17.3084 6.97574 17.8617 8.49134C17.8387 8.50281 17.8157 8.51428 17.7927 8.52432C17.7697 8.53579 17.7467 8.54582 17.7237 8.55729C17.6778 8.5788 17.6318 8.60031 17.5858 8.62182C17.5398 8.64333 17.4924 8.66483 17.4449 8.68491C17.3975 8.70498 17.3501 8.72506 17.3041 8.74513C17.2811 8.75517 17.2567 8.7652 17.2323 8.77524C17.2078 8.78528 17.1848 8.79532 17.1604 8.80392C17.1388 8.81252 17.1159 8.82113 17.0943 8.83116C17.0684 8.8412 17.0426 8.85124 17.0181 8.86127C16.9865 8.87418 16.9535 8.88565 16.9218 8.89855C16.8586 8.92293 16.7939 8.94731 16.7293 8.97025C16.6818 8.98745 16.633 9.00323 16.5856 9.02043C16.5453 9.03334 16.5051 9.04768 16.4648 9.06058C16.4447 9.06632 16.426 9.07349 16.4059 9.07922L16.3944 9.08209C16.3801 9.08639 16.3671 9.09069 16.3528 9.09499L16.3427 9.09786C16.3183 9.10646 16.2938 9.11363 16.268 9.1208C16.186 9.14661 16.1056 9.16955 16.0237 9.19393C15.9834 9.2054 15.9417 9.21687 15.9015 9.22834C15.8411 9.24411 15.7808 9.26132 15.719 9.27566C15.7046 9.27996 15.6903 9.28283 15.6759 9.28713H15.6673C15.6256 9.30004 15.5839 9.31007 15.5437 9.31868L15.5307 9.32154C15.5077 9.32728 15.4833 9.33301 15.4603 9.33732L15.4488 9.34018C15.4301 9.34449 15.4115 9.34879 15.3928 9.35309L15.3755 9.35596C15.3525 9.36026 15.3295 9.36599 15.308 9.37029C15.2792 9.37603 15.2519 9.38177 15.2232 9.3875C15.2031 9.3918 15.1844 9.3961 15.1643 9.39897C15.1212 9.40758 15.078 9.41618 15.0335 9.42335C15.0091 9.42765 14.9846 9.43195 14.9602 9.43625L14.9473 9.43912C14.93 9.44199 14.9142 9.44486 14.897 9.44772C14.8668 9.45346 14.838 9.45776 14.8079 9.46206C14.7892 9.46493 14.7691 9.46923 14.7504 9.4721L14.7231 9.4764C14.6915 9.48214 14.6599 9.48644 14.6282 9.49074H14.6254C14.5779 9.49791 14.5305 9.50508 14.4831 9.51081C14.4443 9.51655 14.4055 9.52085 14.3652 9.52515H14.3509C14.3308 9.52945 14.3106 9.53232 14.2905 9.53376L14.269 9.53662C14.256 9.53662 14.2431 9.53949 14.2302 9.54093H14.2215C14.187 9.54523 14.154 9.54953 14.1209 9.5524C14.0922 9.55526 14.0649 9.55813 14.0361 9.561C14.0088 9.56387 13.9801 9.56673 13.9514 9.56817C13.9284 9.5696 13.9054 9.57247 13.8838 9.5739H13.8723C13.8522 9.57677 13.8306 9.57821 13.8105 9.57964H13.8048C13.7803 9.58107 13.7545 9.58394 13.7286 9.58537C13.6467 9.59111 13.5648 9.59541 13.4814 9.59828C13.4642 9.59828 13.4469 9.59971 13.4297 9.59971H13.3995C13.3679 9.60258 13.3348 9.60258 13.3032 9.60402C13.2687 9.60402 13.2342 9.60545 13.1998 9.60688V5.34831L13.1954 5.35261ZM14.6369 4.62277C14.6153 4.62851 14.5937 4.63425 14.5722 4.63998C14.5578 4.64428 14.542 4.64715 14.5262 4.65145C14.5104 4.65575 14.4931 4.66006 14.4773 4.66292C14.3164 4.70164 14.154 4.73462 13.9873 4.76043C13.9629 4.76473 13.9384 4.76759 13.9126 4.7719C13.8881 4.77476 13.8623 4.77907 13.8378 4.78193C13.8134 4.7848 13.7875 4.7891 13.7631 4.79197C13.7387 4.79484 13.7128 4.79771 13.6884 4.80057L13.6381 4.80631C13.618 4.80774 13.5993 4.81061 13.5792 4.81204C13.5231 4.81778 13.4671 4.82208 13.411 4.82495C13.3938 4.82495 13.378 4.82638 13.3607 4.82782H13.3507C13.3291 4.82925 13.3075 4.83068 13.286' 
            + '4.83212C13.2558 4.83212 13.2256 4.83499 13.1954 4.83499V3.53447C13.8479 3.58896 14.5334 3.91158 15.1873 4.44784C15.0076 4.51523 14.8237 4.57402 14.6369 4.62421V4.62277ZM12.8031 4.83499C12.7729 4.83499 12.7428 4.83355 12.7126 4.83212C12.691 4.83212 12.6695 4.83068 12.6479 4.82925H12.6379C12.6206 4.82782 12.6048 4.82638 12.5876 4.82638C12.5315 4.82352 12.4755 4.81778 12.4194 4.81348C12.3993 4.81204 12.3806 4.81061 12.3605 4.80774L12.3102 4.80201C12.2858 4.79914 12.2599 4.79627 12.2355 4.7934C12.211 4.79054 12.1852 4.78767 12.1607 4.78337C12.1363 4.7805 12.1104 4.7762 12.086 4.77333C12.0616 4.77046 12.0357 4.76616 12.0113 4.76186C11.846 4.73605 11.6822 4.70307 11.5212 4.66436C11.5054 4.66005 11.4882 4.65575 11.4724 4.65289C11.4566 4.64858 11.4422 4.64572 11.4264 4.64141C11.4048 4.63568 11.3833 4.62994 11.3603 4.62421C11.1734 4.57402 10.9895 4.51523 10.8099 4.44784C11.4637 3.91158 12.1492 3.58896 12.8017 3.53447V4.83499H12.8031ZM10.8602 5.01422C10.9061 5.02999 10.9521 5.04433 10.9996 5.05867C11.0254 5.06727 11.0527 5.07444 11.0786 5.08304C11.1318 5.09882 11.1849 5.11316 11.2381 5.12749C11.2625 5.13323 11.287 5.1404 11.3114 5.14613C11.333 5.15187 11.3545 5.15761 11.3761 5.16191C11.3919 5.16621 11.4091 5.17051 11.4249 5.17338C11.4479 5.17911 11.4709 5.18485 11.4954 5.18915C11.5428 5.20062 11.5888 5.21066 11.6362 5.21926C11.6664 5.225 11.6966 5.23217 11.7282 5.23647C11.8316 5.25654 11.9351 5.27375 12.04 5.28809C12.053 5.28952 12.0673 5.29239 12.0803 5.29382C12.0932 5.29526 12.1076 5.29812 12.1205 5.29956L12.155 5.30386H12.1679C12.1866 5.30816 12.2053 5.30959 12.224 5.31246C12.2398 5.3139 12.257 5.31676 12.2743 5.3182C12.2886 5.31963 12.303 5.32107 12.3174 5.3225C12.3389 5.32537 12.3605 5.3268 12.382 5.32824C12.4036 5.32967 12.4252 5.33254 12.4467 5.33397C12.4625 5.33397 12.4769 5.33684 12.4927 5.33684C12.5114 5.33684 12.5301 5.33971 12.5488 5.34114H12.5804C12.6508 5.34831 12.7226 5.35118 12.7945 5.35261H12.806V9.61262C12.7715 9.61262 12.737 9.61262 12.7025 9.60975C12.6695 9.60975 12.6379 9.60832 12.6062 9.60688H12.5761C12.5588 9.60545 12.5416 9.60402 12.5243 9.60402C12.4913 9.60258 12.4582 9.60115 12.4237 9.59971C12.4079 9.59971 12.3921 9.59828 12.3763 9.59685H12.3648C12.3361 9.59541 12.3088 9.59254 12.28 9.59111C12.2656 9.59111 12.2527 9.58968 12.2383 9.58824H12.2225C12.1895 9.58537 12.1579 9.58251 12.1248 9.57964H12.0989C12.0644 9.57534 12.03 9.57247 11.9955 9.56817L11.9624 9.5653C11.9207 9.561 11.8791 9.5567 11.8374 9.5524H11.8173L11.7799 9.54666C11.7425 9.54236 11.7037 9.53806 11.6664 9.53376C11.6189 9.52802 11.5715 9.52228 11.5227 9.51511C11.481 9.50938 11.4393 9.50364 11.3976 9.49791C11.3344 9.48931 11.2726 9.47927 11.2094 9.46923C11.1778 9.4635 11.1447 9.45919 11.1131 9.45346L11.0815 9.44772C11.0441 9.44055 11.0053 9.43482 10.9679 9.42765C10.955 9.42478 10.9421 9.42191 10.9291 9.42048C10.8875 9.41188 10.8458 9.40471 10.8041 9.3961C10.7682 9.38894 10.7337 9.38177 10.6978 9.3746C10.6791 9.37029 10.659 9.36743 10.6403 9.36169H10.6302C10.5943 9.35166 10.5569 9.34449 10.521 9.33588C10.4822 9.32728 10.442 9.31724 10.4032 9.30864L10.3874 9.30434C10.3672 9.30004 10.3471 9.2943 10.3284 9.29H10.3241C10.3112 9.2857 10.2983 9.28283 10.2853 9.27996L10.2767 9.27709C10.2508 9.27136 10.2264 9.26419 10.2005 9.25702C10.179 9.25128 10.1574 9.24555 10.1344 9.23981C10.1143 9.23408 10.0942 9.22978 10.0741 9.22404C10.0453 9.21687 10.0166 9.20827 9.98784 9.2011C9.9591 9.1925 9.93036 9.18533 9.90161 9.17672C9.87 9.16812 9.83982 9.15952 9.80964 9.14948C9.7694 9.13801 9.72916 9.1251 9.68892 9.1122C9.64294 9.09786 9.59839 9.08352 9.5524 9.06918C9.50641 9.05484 9.46186 9.03907 9.41731 9.0233C9.38282 9.01183 9.34689 8.99892 9.3124 8.98602C9.29947 8.98172 9.28654 8.97598 9.2736 8.97168C9.196 8.94444 9.11839 8.91576 9.04223 8.88565C9.01636 8.87561 8.98906 8.86557 8.96319 8.85554C8.94307 8.84837 8.92295 8.83977 8.90139 8.83116C8.88127 8.82256 8.85972 8.81539 8.8396 8.80679C8.79792 8.79101 8.75768 8.77381 8.71744 8.7566H8.71457L8.68727 8.7437H8.68295V8.74083C8.65709 8.73079 8.63122 8.71932 8.60535 8.70785C8.53637 8.67917 8.46883 8.64906 8.40128 8.61752C8.36967 8.60318 8.33805 8.58884 8.30643 8.57307L8.29494 8.56733L8.27338 8.55729H8.26907V8.55443C8.24751 8.54439 8.22739 8.53579 8.20727 8.52575C8.18572 8.51571 8.16272 8.50424 8.14117 8.4942C8.69301 6.97861 9.49635 5.71108 10.3859 4.83499L10.4003 4.84072C10.4204 4.84932 10.4405 4.85793 10.4592 4.8651C10.5483 4.90094 10.6374 4.93536 10.7279 4.9669C10.7509 4.9755 10.7739 4.98267 10.7969 4.99128C10.8199 4.99988 10.8429 5.00705 10.8659 5.01422H10.8602ZM8.27051 9.07635C8.31218 9.09643 8.3553 9.11507 8.39841 9.13227L8.42428 9.14374C8.46739 9.16238 8.50906 9.18103 8.55218 9.19823L8.56511 9.20397C8.61254 9.22261 8.65996 9.24268 8.70738 9.26132C8.73325 9.27136 8.75912 9.2814 8.78499 9.29143C8.85828 9.32011 8.93157 9.34735 9.00486 9.3746L9.04223 9.3875L9.07528 9.39897C9.10834 9.41044 9.14139 9.42335 9.17444 9.43482C9.20318 9.44486 9.23049 9.45489 9.25923 9.46493C9.27935 9.4721 9.29803 9.47783 9.31815 9.485C9.34689 9.49504 9.3742 9.50364 9.40294 9.51368C9.42162 9.51942 9.4403 9.52515 9.45899 9.53232H9.46186C9.48917 9.54236 9.51647 9.55096 9.54378 9.55956C9.5797 9.57104 9.61563 9.58251 9.65156 9.59254C9.68461 9.60258 9.71623 9.61262 9.74928 9.62122C9.82257 9.64273 9.89587 9.6628 9.96916 9.68288C9.9864 9.68718 10.0036 9.69291 10.0209 9.69722C10.0539 9.70582 10.0856 9.71442 10.1186 9.72303C10.143 9.73019 10.1689 9.73593 10.1933 9.74167H10.1962C10.2092 9.74597 10.2221 9.74884 10.2365 9.7517L10.2523 9.756C10.2839 9.76461 10.3155 9.77178 10.3486 9.77895C10.3658 9.78325 10.383 9.78755 10.4017 9.79185C10.419 9.79615 10.4362 9.80045 10.4549 9.80332H10.4592C10.4937 9.81192 10.5282 9.81909 10.5627 9.82626C10.5828 9.83056 10.6044 9.83487 10.6245 9.83917C10.6978 9.85494 10.7696 9.86928 10.8429 9.88362C10.8573 9.88649 10.8717 9.88935 10.886 9.89222L10.9133 9.89652C10.9493 9.90369 10.9852 9.90943 11.0197 9.91516C11.07 9.92377 11.1188 9.93237 11.1691 9.93954C11.2166 9.94671 11.2625 9.95388 11.31 9.96105C11.3588 9.96822 11.4077 9.97539 11.4566 9.98112L11.4939 9.98686C11.5356 9.99259 11.5773 9.99689 11.6175 10.0026C11.6678 10.0084 11.7181 10.0141 11.7684 10.0198C11.8647 10.0299 11.9624 10.0399 12.0601 10.0471H12.0788C12.1708 10.0557 12.2628 10.0614 12.3547 10.0672C12.3734 10.0672 12.3935 10.0686 12.4122 10.07C12.4956 10.0743 12.5804 10.0772 12.6652 10.0801C12.6838 10.0801 12.7025 10.0801 12.7198 10.0815C12.7471 10.0815 12.7744 10.0815 12.8017 10.0829V12.3857H7.38382C7.42693 11.1612 7.64537 9.99833 7.98452 8.943L7.99602 8.94731C8.03913 8.96881 8.08368 8.99032 8.12823 9.0104C8.17566 9.03334 8.22452 9.05484 8.27338 9.07635H8.27051ZM13.1954 10.0829C13.2228 10.0829 13.2501 10.0829 13.2774 10.0815C13.296 10.0815 13.3147 10.0815 13.332 10.0801C13.4168 10.0786 13.5001 10.0743 13.5849 10.07C13.6036 10.07 13.6237 10.0686 13.6424 10.0672C13.6769 10.0657 13.7114 10.0629 13.7459 10.0614C13.7631 10.0614 13.7818 10.0585 13.799 10.0585C13.8795 10.0528 13.96 10.0471 14.0405 10.0385H14.0419C14.0563 10.0385 14.0721 10.0356 14.0864 10.0342H14.1037C14.1238 10.0313 14.1439 10.0284 14.1626 10.027L14.187 10.0241C14.2057 10.0227 14.2258 10.0198 14.2445 10.0184C14.2891 10.0141 14.3336 10.0084 14.3782 10.0041C14.417 9.99976 14.4543 9.99546 14.4931 9.98972H14.5075C14.5205 9.98686 14.5348 9.98542 14.5478 9.98255L14.5664 9.97969C14.5837 9.97825 14.6009 9.97539 14.6167 9.97252L14.6527 9.96678C14.6728 9.96391 14.6929 9.96105 14.713 9.95818C14.736 9.95531 14.7576 9.95101 14.7806 9.94814C14.8036 9.94527 14.8251 9.94097 14.8481 9.9381H14.8582C14.897 9.93093 14.9358 9.92377 14.976 9.9166C15.0119 9.91086 15.0479 9.90369 15.0824 9.89796C15.101 9.89509 15.1197 9.89079 15.1398 9.88792C15.17 9.88218 15.2002 9.87645 15.2289 9.87071C15.2519 9.86641 15.2735 9.86211 15.2965 9.85781C15.3267 9.85207 15.3583 9.8449 15.3899 9.83917C15.4115 9.83487 15.433 9.83056 15.456 9.82483C15.5092 9.81336 15.5609 9.80189 15.6141 9.78898C15.6673 9.77751 15.719 9.76461 15.7707 9.7517C15.7908 9.7474 15.811 9.74167 15.8311 9.73736C15.8512 9.73306 15.8713 9.72733 15.8914 9.72159C15.9216 9.71442 15.9518 9.70582 15.9834 9.69722C15.9978 9.69435 16.0107 9.69005 16.0251 9.68575C16.1027 9.66424 16.1789 9.64416 16.255 9.62122C16.2766 9.61549 16.2967 9.60832 16.3183 9.60258H16.3211C16.3398 9.59541 16.3599 9.59111 16.3786 9.58394L16.3916 9.57964C16.4117 9.5739 16.4304 9.56817 16.4505 9.561C16.4692 9.55526 16.4878 9.54953 16.5065 9.54379L16.5166 9.54093H16.518C16.5424 9.53232 16.5669 9.52515 16.5913 9.51655C16.6229 9.50651 16.6531 9.49648 16.6847 9.485C16.7178 9.47353 16.7523 9.46206 16.7853 9.45059L16.8054 9.44342C16.8327 9.43482 16.8586 9.42478 16.8859 9.41475C16.9621 9.3875 17.0382 9.36026 17.1144 9.33015C17.1273 9.32441 17.1417 9.32011 17.1561 9.31437C17.1834 9.30434 17.2107 9.2943 17.238 9.28283C17.2567 9.27566 17.2739 9.26849 17.2926 9.26132C17.3415 9.24125 17.3903 9.22117 17.4392 9.2011C17.4622 9.19106 17.4866 9.18103 17.5096 9.17242L17.58 9.14231C17.6418 9.1165 17.7022 9.08926 17.7625 9.06201C17.7913 9.04911 17.8186 9.03621 17.8473 9.0233C17.9048 8.99749 17.9623 8.97025 18.0184 8.943C18.3575 9.99833 18.5745 11.1612 18.6191 12.3857H13.1983V10.0829H13.1954ZM17.3731 3.76532C17.4047 3.73808 17.4363 3.71227 17.4679 3.68503C17.5484 3.61477 17.626 3.54451 17.7022 3.46995C17.7281 3.44557 17.7539 3.41976 17.7798 3.39539C19.0703 4.0521 20.2085 4.96547 21.1239 6.06811C21.0981 6.09679 21.0707 6.12403 21.0449 6.15271C21.0276 6.17135 21.0104 6.18855 20.9931 6.20719C20.9788 6.22153 20.9644 6.2373 20.95 6.25164C20.9371 6.26455 20.9242 6.27889 20.9112 6.29179C20.8925 6.31187 20.8739 6.33194 20.8537 6.35058C20.8207 6.38356 20.7876 6.41654 20.7546 6.44808L20.7187 6.48249C20.6899 6.50974 20.6626 6.53698 20.6339 6.56422C20.6008 6.5972 20.5663 6.62875 20.5318 6.65886C20.4729 6.71335 20.414 6.76783 20.3536 6.82089C20.335 6.83809 20.3163 6.85387 20.2976 6.87107L20.2933 6.87394C20.2775 6.88828 20.2602 6.90262 20.243 6.91696L20.23 6.92843L20.1984 6.95567C20.1381 7.00729 20.0763 7.05891 20.0145 7.10909L19.98 7.13777L19.9757 7.14207C19.9498 7.16358 19.9239 7.18365 19.8981 7.20516C19.8622 7.23384 19.8248 7.26252 19.7889 7.29119C19.7587 7.31557 19.7271 7.33851 19.6969 7.36145L19.661 7.3887L19.6466 7.39873C19.6308 7.4102 19.615 7.42311 19.5992 7.43458L19.5877 7.44318C19.5675 7.45752 19.5474 7.47329 19.5273 7.48763L19.5129 7.49767L19.4741 7.52635C19.4382 7.55216 19.4023 7.57797 19.3663 7.60378C19.3434 7.61955 19.3204 7.63532 19.2974 7.65109C19.2672 7.6726 19.237 7.69268 19.2054 7.71418C19.1407 7.75863 19.0746 7.80165 19.0085 7.84466C18.9812 7.86187 18.9539 7.88051 18.9252 7.89772C18.895 7.91779 18.8648 7.93643 18.8346 7.95507H18.8332L18.803 7.97515C18.7728 7.99379 18.7441 8.01099 18.7153 8.02963C18.6823 8.04971 18.6492 8.06978 18.6162 8.08986C18.5501 8.12857 18.4825 8.16728 18.415 8.206C18.3891 8.22034 18.3633 8.23468 18.3374 8.24901L18.3029 8.26765L18.2641 8.28916C18.2468 8.2992 18.2282 8.30924 18.2109 8.31784C17.6562 6.83379 16.8658 5.57629 15.9863 4.67153C16.0078 4.66149 16.028 4.65145 16.0481 4.63998C16.0696 4.62994 16.0898 4.61847 16.1099 4.60844C16.1271 4.59983 16.1429 4.59123 16.1587 4.58263C16.1918 4.56542 16.2248 4.54678 16.2579 4.52957C16.2823 4.51667 16.3053 4.50376 16.3298 4.48943C16.3628 4.47078 16.3973 4.45071 16.4304 4.43207L16.4634 4.412C16.4878 4.39766 16.5108 4.38332 16.5353 4.36898C16.5583 4.35464 16.5813 4.34174 16.6028 4.3274C16.6603 4.29155 16.7178 4.25427 16.7738 4.21699C16.8083 4.19405 16.8428 4.16967 16.8773 4.1453C16.8989 4.13096 16.919 4.11662 16.9405 4.10085C16.9578 4.08794 16.9765 4.07504 16.9937 4.06213C17.0066 4.0521 17.0196 4.04349 17.0325 4.03346L17.0713 4.00478C17.0914 3.99044 17.1115 3.97467 17.1317 3.9589L17.1432 3.95029C17.169 3.93022 17.1949 3.91014 17.2208 3.88864L17.2409 3.87286C17.2696 3.84992 17.2984 3.82698 17.3257 3.80404C17.34 3.79257 17.3558 3.77966 17.3702 3.76676L17.3731 3.76532ZM17.1935 3.23336L17.1719 3.25344C17.1446 3.27781 17.1173 3.30219 17.09 3.32513H17.0885C17.0627 3.3495 17.0354 3.37101 17.0095 3.39395L16.9851 3.41403C16.9563 3.4384 16.9276 3.46135 16.8974 3.48429C16.8715 3.50436 16.8457 3.52444 16.8198 3.54451L16.7839 3.57175L16.7666 3.58466C16.7465 3.60043 16.725 3.6162 16.7048 3.63054L16.6689 3.65635C16.643 3.67499 16.6186 3.6922 16.5927 3.71084L16.5798 3.71944C16.5511 3.73951 16.5209 3.75959 16.4907 3.77966C16.4706 3.79257 16.4505 3.80691 16.4304 3.81981C16.4117 3.83272 16.393 3.84419 16.3729 3.85709H16.3686C16.3484 3.87286 16.3283 3.88434 16.3068 3.89724C16.2637 3.92448 16.2205 3.95029 16.176 3.9761C16.1573 3.98757 16.1386 3.99761 16.1199 4.00908C15.992 4.08221 15.8613 4.15247 15.7276 4.21699C15.7118 4.22416 15.6974 4.23133 15.6816 4.23993C15.6673 4.2471 15.6514 4.25427 15.6371 4.26144C15.6198 4.27004 15.6012 4.27865 15.5839 4.28582C14.8064 3.60186 13.9801 3.18891 13.1954 3.13012V2.25833C14.6469 2.28414 16.028 2.6039 17.2782 3.1588C17.2509 3.18461 17.2222 3.21042 17.1935 3.23623V3.23336ZM12.8031 2.25547V3.12726C12.0185 3.18748 11.1907 3.599 10.4147 4.28438C10.396 4.27721 10.3787 4.26861 10.36 4.26001C10.2221 4.19548 10.087 4.12809 9.95479 4.05353C9.93898 4.04493 9.92461 4.03632 9.9088 4.02772L9.87575 4.00908C9.8585 3.99904 9.84126 3.98901 9.82257 3.97897C9.77802 3.95316 9.73347 3.92592 9.68892 3.89867C9.64725 3.87286 9.60701 3.84705 9.56677 3.82124C9.54665 3.80834 9.52653 3.79544 9.50641 3.7811C9.47623 3.76102 9.44749 3.74095 9.41731 3.72087L9.40438 3.71227C9.37851 3.69507 9.35264 3.67642 9.32821 3.65778L9.29228 3.63198C9.27217 3.61764 9.25061 3.60186 9.23049 3.58609L9.21324 3.57319L9.17732 3.54594C9.15145 3.52587 9.12558 3.5058 9.09971 3.48572C9.06953 3.46278 9.04079 3.4384 9.01205 3.41546L8.98762 3.39539C8.96175 3.37388 8.93445 3.35094 8.90858 3.32943H8.90714C8.87984 3.30362 8.85109 3.28068 8.82523 3.2563L8.80367 3.23623C8.77493 3.21042 8.74762 3.18461 8.71888 3.1588C9.97059 2.6039 11.3502 2.28414 12.8017 2.25833L12.8031 2.25547ZM8.21877 3.39395C8.25182 3.42693 8.28488 3.45848 8.31793 3.49002L8.35673 3.52587L8.3711 3.54021C8.38691 3.55455 8.40272 3.56889 8.41853 3.58322C8.45014 3.6119 8.48176 3.64058 8.51481 3.66926C8.53206 3.68359 8.54787 3.69793 8.56511 3.71227L8.59098 3.73378L8.61685 3.75529C8.63409 3.76963 8.65134 3.78396 8.66858 3.79974C8.69445 3.82124 8.72032 3.84275 8.74762 3.86426C8.77349 3.88577 8.8008 3.90584 8.8281 3.92735C8.86115 3.95316 8.89421 3.97754 8.92726 4.00335C8.94738 4.01768 8.96606 4.03202 8.98618 4.04636C9.01061 4.065 9.03648 4.08221 9.06091 4.10085C9.08534 4.11805 9.10977 4.13526 9.1342 4.15247C9.15432 4.16681 9.17444 4.17971 9.196 4.19405C9.27073 4.24423 9.34546 4.29299 9.42306 4.3403L9.43743 4.34891C9.47336 4.37041 9.50929 4.39336 9.54521 4.41343C9.57252 4.4292 9.59982 4.44641 9.62856 4.46218C9.64725 4.47365 9.66593 4.48369 9.68605 4.49373C9.70473 4.5052 9.72485 4.51523 9.74353 4.52527C9.76796 4.53818 9.79096 4.55108 9.81539 4.56399C9.84126 4.57832 9.86712 4.59123 9.89299 4.60413C9.93323 4.62564 9.97347 4.64572 10.0137 4.66579C9.13277 5.57199 8.34236 6.82806 7.78908 8.3121L7.77471 8.3035C7.75171 8.2906 7.72728 8.27913 7.70429 8.26479L7.6971 8.26048C7.68273 8.25332 7.66836 8.24471 7.65399 8.23611H7.65112C7.63387 8.22464 7.61519 8.2146 7.59794 8.20456C7.49016 8.14434 7.38238 8.08269 7.27747 8.01816C7.26166 8.00956 7.24729 7.99952 7.23148 7.99092C7.16538 7.95077 7.09927 7.90919 7.0346 7.86761C7.0073 7.8504 6.97999 7.83319 6.95269 7.81455C6.92682 7.79878 6.90095 7.78157 6.87508 7.76437C6.84778 7.74716 6.82191 7.72852 6.79461 7.70988C6.7673 7.69268 6.74143 7.67404 6.71413 7.65539C6.67676 7.63102 6.64084 7.60521 6.60491 7.5794C6.57186 7.55646 6.5388 7.53352 6.50719 7.50914C6.49138 7.49767 6.47413 7.4862 6.45832 7.47473C6.44108 7.46182 6.4224 7.44892 6.40515 7.43458C6.38647 7.42167 6.36779 7.40734 6.3491 7.393C6.33186 7.38009 6.31461 7.36719 6.29593 7.35285C6.27869 7.33994 6.26144 7.32704 6.2442 7.3127C6.23126 7.30266 6.21833 7.29263 6.20539 7.28259C6.17953 7.26252 6.15366 7.24101 6.12779 7.22093L6.09905 7.19799L6.07318 7.17792C6.04731 7.15641 6.02145 7.13634 5.99558 7.11483L5.98983 7.10909C5.95534 7.08185 5.92229 7.05317 5.88923 7.02593C5.85618 6.99869 5.82456 6.97144 5.79151 6.94276C5.76852 6.92412 5.74696 6.90548 5.7254 6.88541C5.70241 6.86677 5.68085 6.8467 5.6593 6.82662C5.63774 6.80798 5.61475 6.78791 5.59319 6.76783C5.57163 6.74776 5.55008 6.72912 5.52852 6.70905C5.50265 6.68467 5.47535 6.66029 5.44948 6.63592C5.41786 6.60581 5.38625 6.5757 5.35463 6.54559L5.33164 6.52408C5.30577 6.4997 5.28134 6.47533 5.25691 6.45095C5.22817 6.42227 5.19943 6.3936 5.17068 6.36492C5.14194 6.33624 5.11464 6.30756 5.08589 6.27889L5.06003 6.25164C5.03128 6.22297 5.00398 6.19429 4.97668 6.16418C4.94506 6.1312 4.91344 6.09679 4.88183 6.06237C5.79726 4.95973 6.93544 4.04636 8.22596 3.38965L8.21877 3.39395ZM2.47037 12.1749C2.47325 12.1319 2.47612 12.0889 2.479 12.0459C2.48187 12.0029 2.48474 11.9599 2.48906 11.9168C2.49624 11.8308 2.50343 11.7448 2.51349 11.6602C2.51636 11.6258 2.52067 11.5913 2.52498 11.5584C2.52929 11.524 2.53361 11.4895 2.53792 11.4566C2.54654 11.3877 2.55516 11.3203 2.56522 11.2515C2.5681 11.2343 2.56953 11.2185 2.57241 11.2013C2.57528 11.1841 2.57816 11.1684 2.57959 11.1512C2.58534 11.1167 2.58965 11.0838 2.5954 11.0508C2.60115 11.0178 2.6069 10.9834 2.61265 10.9504C2.61839 10.9174 2.62414 10.8859 2.62989 10.8529C2.63277 10.8371 2.63564 10.8199 2.63851 10.8042C2.64139 10.7841 2.6457 10.7654 2.65001 10.7454C2.65432 10.721 2.65863 10.6966 2.66438 10.6737V10.6694L2.66869 10.6536V10.6507C2.67444 10.6221 2.68163 10.5919 2.68738 10.5633C2.696 10.5231 2.70462 10.4815 2.71468 10.4414C2.72187 10.4113 2.72905 10.3797 2.73624 10.3496C2.74342 10.3195 2.75061 10.2894 2.75779 10.2579C2.76642 10.222 2.77504 10.1862 2.7851 10.1489C2.79228 10.1202 2.79947 10.0915 2.80809 10.0614C2.81671 10.0284 2.82534 9.99689 2.83396 9.96391C2.83971 9.94384 2.84546 9.92377 2.8512 9.90369C2.85695 9.88362 2.8627 9.86354 2.86845 9.84347C2.8742 9.8234 2.87995 9.80332 2.8857 9.78325C2.89144 9.76317 2.89719 9.7431 2.90438 9.72303C2.91587 9.68288 2.92881 9.64273 2.94174 9.60402C2.94749 9.58394 2.95468 9.56387 2.96042 9.54379C2.97623 9.49504 2.99204 9.44772 3.00785 9.39897C3.01791 9.3703 3.02653 9.34162 3.03659 9.31294C3.04665 9.2857 3.05527 9.25845 3.06533 9.23121C3.07539 9.20397 3.08402 9.17672 3.09551 9.14948C3.10557 9.12224 3.11563 9.09643 3.12569 9.06918C3.14581 9.0147 3.16593 8.96164 3.18749 8.90859C3.19755 8.88135 3.20904 8.85554 3.2191 8.82829C3.25647 8.73653 3.29527 8.64476 3.33551 8.55443C3.34269 8.53722 3.34988 8.52145 3.35706 8.50424C3.36425 8.48704 3.37143 8.47126 3.38006 8.45406C3.40593 8.3967 3.43179 8.34078 3.4591 8.28343C3.47347 8.25332 3.48784 8.2232 3.50221 8.19453C3.51658 8.16442 3.53095 8.13574 3.54532 8.10563C3.56688 8.06118 3.58987 8.01673 3.61143 7.97371C3.62293 7.9522 3.63442 7.92926 3.64592 7.90775C3.65742 7.88625 3.66891 7.8633 3.68041 7.8418C3.71059 7.78444 3.74221 7.72565 3.77526 7.6683C3.78676 7.64679 3.79825 7.62672 3.81119 7.60521C3.82987 7.5708 3.84999 7.53782 3.86867 7.50484C3.87586 7.49193 3.88448 7.4776 3.89166 7.46469C3.91897 7.41737 3.94627 7.37149 3.97502 7.32561C3.99082 7.29836 4.00807 7.27255 4.02388 7.24531C4.03969 7.2195 4.05549 7.19369 4.07274 7.16788C4.09142 7.13777 4.1101 7.10909 4.13022 7.07898C4.14459 7.05604 4.1604 7.03166 4.17621 7.00872C4.19346 6.98291 4.2107 6.95567 4.22795 6.92986C4.25813 6.88398 4.28974 6.83953 4.32136 6.79364C4.33573 6.77214 4.35154 6.75206 4.36591 6.73055C4.38459 6.70474 4.40183 6.67893 4.42052 6.65312C4.44639 6.61584 4.47369 6.58 4.49956 6.54415C4.52543 6.5083 4.55273 6.47246 4.58004 6.43661C4.63752 6.49683 4.695 6.55706 4.75249 6.61728C4.76973 6.63448 4.78698 6.65312 4.80422 6.67033C4.8574 6.72482 4.91201 6.77787 4.96662 6.83092C4.98242 6.8467 4.99823 6.86247 5.01404 6.87681C5.04566 6.90692 5.07727 6.93703 5.10889 6.96714C5.16493 7.02019 5.22098 7.07181 5.27847 7.12343C5.29715 7.14064 5.31727 7.15784 5.33595 7.17505C5.38912 7.22237 5.4423 7.26825 5.49547 7.31414C5.52708 7.34138 5.56014 7.36862 5.59175 7.39587C5.63056 7.42884 5.66936 7.46182 5.7096 7.49337C5.73977 7.51918 5.77139 7.54355 5.80301 7.56793C5.83319 7.5923 5.86337 7.61668 5.89498 7.63962C5.92516 7.664 5.95534 7.68694 5.98696 7.71132C6.04875 7.75863 6.11198 7.80595 6.17378 7.85183C6.18959 7.8633 6.20539 7.87478 6.21977 7.88625C6.2442 7.90345 6.26719 7.92066 6.29162 7.93787C6.31749 7.95651 6.34479 7.97515 6.37066 7.99379C6.41665 8.02533 6.46264 8.05831 6.50862 8.08842C6.52874 8.10276 6.5503 8.11566 6.57042 8.13L6.58335 8.13861C6.60347 8.15294 6.62503 8.16585 6.64515 8.18019H6.64658C6.67533 8.20026 6.70551 8.22034 6.73425 8.23898C6.75868 8.25475 6.78311 8.27052 6.80754 8.28629C6.83341 8.3035 6.86071 8.32071 6.88802 8.33648C6.90526 8.34795 6.92394 8.35942 6.94119 8.36946C6.95843 8.38093 6.97712 8.39097 6.99436 8.40244C7.01161 8.41391 7.02885 8.42395 7.0461 8.43398C7.06334 8.44402 7.08059 8.45549 7.09783 8.46553C7.13089 8.4856 7.16394 8.50424 7.19699 8.52432L7.2128 8.53292C7.24442 8.55156 7.27603 8.56877 7.30765 8.58741C7.37807 8.62755 7.44849 8.66627 7.5189 8.70498C7.55483 8.72362 7.59076 8.7437 7.62525 8.76234C7.25879 9.87215 7.0231 11.0952 6.97855 12.3843H2.46031C2.46319 12.3154 2.46606 12.2452 2.47037 12.1764V12.1749ZM7.0461 14.9093C7.02598 14.9236 7.0073 14.9394 6.98718 14.9538C6.94837 14.9839 6.90957 15.014 6.87077 15.0441L6.86502 15.0484C6.82766 15.0771 6.79173 15.1072 6.7558 15.1373C6.71844 15.1688 6.67964 15.2004 6.64227 15.2319C6.60778 15.262 6.57329 15.2907 6.5388 15.3208C6.49569 15.3581 6.45401 15.3954 6.41234 15.4327C6.37785 15.4628 6.34479 15.4943 6.31174 15.5244C6.27725 15.5574 6.24276 15.589 6.20827 15.6219C6.1939 15.6363 6.17809 15.6506 6.16372 15.665C6.14647 15.6807 6.12923 15.6979 6.11198 15.7151L6.09761 15.7295C6.06312 15.7639 6.02719 15.7983 5.99414 15.8327C5.95965 15.8671 5.9266 15.9015 5.89354 15.936C5.87055 15.9603 5.84612 15.9847 5.82313 16.0105C5.80876 16.0249 5.79582 16.0406 5.78145 16.055C5.75846 16.0808 5.73546 16.1052 5.71103 16.131C5.6363 16.2127 5.56445 16.2959 5.49259 16.379C5.47679 16.3977 5.46241 16.4149 5.44661 16.4335C5.4308 16.4521 5.41643 16.4708 5.40062 16.488C5.37331 16.521 5.34745 16.5539 5.32014 16.5855C5.3029 16.607 5.28565 16.6285 5.26841 16.65L5.25116 16.6701C5.23392 16.693 5.21667 16.7145 5.19943 16.7375C5.17643 16.7676 5.15344 16.7977 5.13044 16.8278C5.11176 16.8522 5.09452 16.8766 5.07583 16.9009C5.00398 16.997 4.935 17.0959 4.86746 17.1949C4.8459 17.2264 4.82434 17.258 4.80279 17.291C4.79416 17.3039 4.78554 17.3168 4.77692 17.3311L4.75249 17.3684C4.72806 17.4057 4.70363 17.4444 4.6792 17.4831C4.66051 17.5118 4.64327 17.5404 4.62602 17.5691C4.60447 17.6035 4.58435 17.6365 4.56423 17.6709C4.54411 17.7053 4.52399 17.7383 4.50387 17.7727C4.49381 17.7885 4.48519 17.8057 4.47513 17.8215C4.46507 17.8387 4.45501 17.8559 4.44495 17.8731C4.43201 17.8946 4.42052 17.9176 4.40758 17.9391L4.4004 17.952C4.38746 17.9749 4.37453 17.9978 4.3616 18.0208C4.34723 18.0452 4.33429 18.071 4.32136 18.0954C4.3113 18.1154 4.2998 18.1341 4.28974 18.1541C4.28256 18.1685 4.27393 18.1828 4.26675 18.1972C4.25669 18.2158 4.24807 18.2344 4.23801 18.2531C4.22795 18.2732 4.21645 18.2932 4.20783 18.3133C4.19489 18.3377 4.1834 18.3606 4.1719 18.385C4.16471 18.3979 4.15897 18.4122 4.15178 18.4251C4.14316 18.4409 4.13597 18.4581 4.12735 18.4753C3.0639 16.8321 2.44738 14.8749 2.44738 12.7757H6.96849C6.96849 12.7987 6.96849 12.8216 6.96849 12.8445C6.96849 13.5371 7.01304 14.2139 7.09927 14.8663C7.07915 14.8806 7.06047 14.8964 7.04035 14.9107L7.0461 14.9093ZM12.5229 12.9177C12.4697 12.9205 12.4165 12.9234 12.3648 12.9263C12.3231 12.9291 12.2815 12.932 12.2398 12.9349C12.2082 12.9377 12.1765 12.9392 12.1449 12.942C12.1162 12.9449 12.0874 12.9463 12.0587 12.9507C12.0343 12.9535 12.0084 12.955 11.984 12.9578C11.9567 12.9607 11.9294 12.9636 11.9006 12.9664C11.8532 12.9707 11.8072 12.9765 11.7612 12.9822C11.7411 12.9851 11.7195 12.9879 11.6994 12.9908C11.6764 12.9937 11.6534 12.9965 11.6304 13.0008C11.5859 13.0066 11.5413 13.0137 11.4954 13.0209C11.4767 13.0238 11.458 13.0266 11.4393 13.0295C11.4221 13.0324 11.4034 13.0352 11.3861 13.0381C11.3488 13.0439 11.31 13.051 11.2726 13.0582C11.2396 13.0639 11.2065 13.0697 11.1734 13.0768C11.1375 13.084 11.1002 13.0912 11.0642 13.0983C11.0455 13.1026 11.0254 13.1055 11.0067 13.1098C10.9723 13.117 10.9378 13.1241 10.9033 13.1313C10.8832 13.1356 10.8616 13.1399 10.8429 13.1442C10.8055 13.1528 10.7696 13.1614 10.7337 13.17C10.7121 13.1743 10.6906 13.1801 10.669 13.1858C10.6259 13.1958 10.5828 13.2073 10.5397 13.2188C10.5268 13.2217 10.5138 13.226 10.5009 13.2288C10.4535 13.2417 10.406 13.2546 10.3586 13.2675C10.3313 13.2747 10.3026 13.2833 10.2753 13.2919C10.2494 13.2991 10.2221 13.3062 10.1962 13.3149C10.1387 13.3321 10.0813 13.3493 10.0252 13.3679C9.98353 13.3808 9.94185 13.3951 9.90161 13.4081C9.87862 13.4152 9.85706 13.4224 9.83551 13.431C9.75934 13.4568 9.68461 13.4826 9.60845 13.5113C9.5797 13.5213 9.54952 13.5328 9.52078 13.5443C9.4906 13.5557 9.46043 13.5672 9.43025 13.5787C9.40294 13.5902 9.3742 13.6002 9.34689 13.6117C9.32965 13.6188 9.31097 13.626 9.29372 13.6332C9.24199 13.6547 9.19025 13.6762 9.13851 13.6977C9.11552 13.7077 9.09253 13.7178 9.06953 13.7278L9.04654 13.7378C8.97612 13.768 8.9057 13.8009 8.83529 13.8339C8.80367 13.8482 8.77349 13.8626 8.74331 13.8784C8.7117 13.8941 8.67864 13.9099 8.64703 13.9257C8.61541 13.9415 8.58236 13.9572 8.55074 13.973C8.53062 13.983 8.5105 13.9945 8.48895 14.0045C8.44583 14.026 8.40272 14.049 8.35961 14.0719C8.30931 14.0992 8.25901 14.1264 8.21015 14.1537C8.17853 14.1709 8.14692 14.1895 8.11674 14.2067C8.08656 14.2239 8.05494 14.2426 8.02476 14.2598C8.00321 14.2727 7.98309 14.2841 7.96153 14.297C7.93279 14.3143 7.90548 14.3315 7.87818 14.3472C7.85518 14.3601 7.83363 14.3745 7.81063 14.3888C7.74884 14.4275 7.68704 14.4662 7.62669 14.5064C7.60226 14.5222 7.57926 14.5379 7.55627 14.5537C7.5304 14.5709 7.50453 14.5881 7.47866 14.6053C7.41256 14.0361 7.3795 13.4496 7.3795 12.8488C7.3795 12.8259 7.3795 12.803 7.3795 12.78H12.8074V12.9134C12.7313 12.9134 12.6565 12.9162 12.5818 12.9205C12.5631 12.9205 12.5444 12.922 12.5272 12.9234L12.5229 12.9177ZM18.5256 14.601L18.517 14.5953C18.4883 14.5767 18.461 14.558 18.4322 14.5379C18.4006 14.5179 18.369 14.4964 18.3374 14.4763C18.3187 14.4648 18.3015 14.4533 18.2828 14.4404C18.2555 14.4232 18.2282 14.406 18.2009 14.3888C18.1736 14.3716 18.1463 14.3544 18.1189 14.3386C18.0112 14.2727 17.9034 14.2096 17.7942 14.1479C17.7582 14.1279 17.7223 14.1078 17.6849 14.0877L17.6519 14.0705L17.6217 14.0547C17.5369 14.0103 17.4521 13.9658 17.3673 13.9242C17.3386 13.9099 17.3113 13.897 17.2826 13.8827C17.2538 13.8683 17.2251 13.8554 17.1978 13.8425C17.1676 13.8282 17.1388 13.8153 17.1087 13.8009C17.0526 13.7751 16.9951 13.7493 16.9391 13.7249C16.9175 13.7149 16.8945 13.7063 16.873 13.6963C16.8471 13.6848 16.8198 13.6733 16.7939 13.6618C16.7408 13.6403 16.6876 13.6174 16.6344 13.5973C16.6086 13.5873 16.5813 13.5758 16.5539 13.5658C16.5266 13.5557 16.5008 13.5457 16.4735 13.5342C16.4189 13.5142 16.3657 13.4941 16.3111 13.474C16.2565 13.4539 16.2019 13.4353 16.1472 13.4167C16.1156 13.4066 16.0855 13.3951 16.0538 13.3851C16.0136 13.3722 15.9748 13.3593 15.9346 13.3464C15.9087 13.3378 15.8843 13.3306 15.8584 13.3235C15.8268 13.3134 15.7966 13.3048 15.765 13.2962C15.742 13.289 15.7176 13.2819 15.6946 13.2761C15.6514 13.2632 15.6083 13.2518 15.5638 13.2403C15.548 13.236 15.5322 13.2317 15.5164 13.2274C15.4833 13.2188 15.4503 13.2102 15.4172 13.2016C15.3813 13.193 15.3453 13.1844 15.3094 13.1758C15.2649 13.1643 15.2203 13.1543 15.1743 13.1442C15.1513 13.1385 15.1269 13.1328 15.1025 13.1284C15.0277 13.1127 14.953 13.0969 14.8783 13.0826C14.8625 13.0797 14.8467 13.0768 14.8309 13.074H14.8251C14.7935 13.0668 14.7633 13.0611 14.7317 13.0568C14.7058 13.0525 14.68 13.0482 14.6541 13.0439C14.6297 13.0396 14.6038 13.0352 14.5779 13.0309C14.5032 13.018 14.427 13.008 14.3509 12.9965C14.3135 12.9922 14.2776 12.9865 14.2402 12.9822C14.2043 12.9779 14.1698 12.9736 14.1339 12.9693C14.1008 12.965 14.0692 12.9621 14.0376 12.9593C14.0074 12.9564 13.9758 12.9521 13.9456 12.9507C13.9169 12.9478 13.8881 12.9449 13.8594 12.942C13.8278 12.9392 13.7962 12.9363 13.7645 12.9349C13.7229 12.932 13.6812 12.9291 13.6395 12.9263C13.5863 12.9234 13.5332 12.9191 13.4814 12.9177C13.4627 12.9177 13.4441 12.9162 13.4268 12.9148C13.3521 12.9119 13.2759 12.9091 13.2012 12.9076V12.7743H18.6291C18.6291 12.7972 18.6291 12.8202 18.6291 12.8431C18.6291 13.4439 18.5946 14.0303 18.53 14.5996L18.5256 14.601ZM21.8669 18.4768C21.8511 18.4423 21.8339 18.4094 21.818 18.3764C21.8051 18.3506 21.7936 18.3262 21.7807 18.3004C21.7663 18.2717 21.7519 18.243 21.7376 18.2158L21.7333 18.2086C21.7218 18.1871 21.7117 18.1656 21.7002 18.1441C21.6887 18.1226 21.6772 18.1011 21.6657 18.0796C21.647 18.0437 21.6269 18.0079 21.6068 17.972L21.5881 17.9391L21.5694 17.9061C21.5565 17.8817 21.5421 17.8573 21.5277 17.833C21.5119 17.8057 21.4961 17.7785 21.4803 17.7527C21.4602 17.7182 21.4401 17.6853 21.42 17.6509C21.3567 17.5447 21.2906 17.4415 21.2216 17.3383C21.203 17.311 21.1843 17.2824 21.1656 17.2551C21.1527 17.2365 21.1397 17.2164 21.1268 17.1963C21.0952 17.149 21.0621 17.1031 21.0291 17.0558C21.009 17.0271 20.9888 16.9999 20.9687 16.9712C20.9486 16.944 20.9285 16.9167 20.9084 16.888C20.8882 16.8608 20.8681 16.8336 20.8466 16.8063C20.825 16.7762 20.802 16.7475 20.779 16.7188C20.7603 16.6945 20.7417 16.6715 20.723 16.6472C20.6856 16.5998 20.6482 16.5525 20.6094 16.5052C20.5908 16.4823 20.5721 16.4593 20.552 16.4364C20.5261 16.4048 20.5002 16.3747 20.4744 16.3446C20.4514 16.3174 20.4284 16.2916 20.4054 16.2643C20.3752 16.2299 20.3465 16.1969 20.3163 16.1639C20.2803 16.1238 20.2444 16.0851 20.2085 16.0464C20.1841 16.0191 20.1596 15.9933 20.1338 15.9675C20.0562 15.8858 19.9771 15.8055 19.8966 15.7252C19.8665 15.6951 19.8348 15.665 19.8032 15.6348C19.7845 15.6176 19.7659 15.599 19.7472 15.5818C19.7285 15.5631 19.7084 15.5445 19.6883 15.5273C19.6552 15.4958 19.6222 15.4656 19.5877 15.4355C19.556 15.4069 19.5244 15.3782 19.4914 15.3495C19.4713 15.3323 19.4511 15.3137 19.4296 15.2965C19.4095 15.2792 19.3879 15.2606 19.3678 15.2434C19.3261 15.209 19.2844 15.1731 19.2428 15.1387C19.158 15.0685 19.0703 14.9996 18.9826 14.9323C18.9539 14.9093 18.9237 14.8878 18.895 14.8663C18.8662 14.8448 18.8375 14.8247 18.8102 14.8032C18.8389 14.8247 18.8677 14.8448 18.895 14.8663C18.9798 14.2139 19.0258 13.5385 19.0258 12.846C19.0258 12.823 19.0258 12.8001 19.0258 12.7772H23.5469C23.5469 14.8778 22.9304 16.835 21.8669 18.4768Z" fill="#1A1A1A"/>'
            + '<path d="M16.0768 1.20898L16.416 1.31079L16.3887 1.79687L16.3901 1.7983L16.6387 1.37818L16.9764 1.47998L16.7436 2.24997L16.518 2.18258L16.6675 1.68789H16.666L16.3829 2.141L16.2047 2.08794L16.2205 1.55311H16.2191L16.0696 2.04636L15.844 1.97897L16.0768 1.20898Z" fill="white"/>'
            + '<path d="M17.3371 1.62012L17.5627 1.70902L17.5411 2.56503L17.3011 2.47183L17.3112 2.35282L17.0726 2.25962L16.9965 2.35282L16.7637 2.26249L17.3342 1.62155L17.3371 1.62012ZM17.3299 2.17215L17.3529 1.91549H17.3514L17.1876 2.11623L17.3299 2.17215Z" fill="white"/>'
            + '<path d="M18.1778 2.54529C18.0844 2.74603 17.9565 2.78187 17.7725 2.69728C17.5872 2.61124 17.5527 2.46929 17.6274 2.31013L17.6561 2.24848L17.8588 2.34311L17.8387 2.38469C17.8128 2.44061 17.7884 2.49223 17.8487 2.52091C17.9076 2.54815 17.9364 2.47646 17.9507 2.44348L18.1706 1.97461L18.3962 2.07928L18.1778 2.54529Z" fill="white"/>'
            + '<path d="M18.5514 2.15674L18.7698 2.27575L18.4824 2.80054L18.7957 2.97117L18.698 3.15184L18.1663 2.86363L18.5514 2.15674Z" fill="white"/>'
            + '<path d="M19.2053 2.51963L18.7866 3.20703L18.9991 3.33587L19.4178 2.64847L19.2053 2.51963Z" fill="white"/>'
            + '<path d="M19.4223 3.28774C19.4108 3.30494 19.4036 3.32071 19.3993 3.33649C19.3878 3.38667 19.4266 3.42539 19.464 3.4512C19.497 3.47414 19.5559 3.49708 19.5904 3.44833C19.6134 3.41392 19.5904 3.38524 19.4985 3.27483C19.4137 3.17303 19.3116 3.06262 19.4036 2.92927C19.5085 2.77585 19.6853 2.79879 19.8218 2.89056C19.9669 2.98806 20.0575 3.13001 19.9526 3.29634L19.7586 3.16442C19.7787 3.14148 19.7801 3.11711 19.7701 3.09416C19.7614 3.07122 19.7413 3.04971 19.7212 3.03681C19.6925 3.01817 19.6422 2.99379 19.6163 3.03107C19.5876 3.08126 19.6767 3.15582 19.7528 3.24615C19.829 3.33649 19.8937 3.44259 19.8103 3.56591C19.6925 3.7394 19.4941 3.68778 19.3461 3.58741C19.27 3.53579 19.0731 3.36373 19.2153 3.15009L19.4208 3.28917L19.4223 3.28774Z" fill="white"/>'
            + '<path d="M20.7876 4.28146C20.6439 4.45209 20.483 4.4564 20.2933 4.29867C20.105 4.14095 20.0806 3.98035 20.2243 3.80972L20.5419 3.43262L20.7316 3.59178L20.4485 3.9273C20.3953 3.99039 20.3292 4.06925 20.4226 4.14668C20.5117 4.22268 20.5778 4.14381 20.631 4.08072L20.9141 3.7452L21.1038 3.90436L20.7862 4.2829L20.7876 4.28146Z" fill="white"/>'
            + '<path d="M21.1554 4.95265C21.0663 4.96555 20.983 4.92684 20.9212 4.86518C20.7502 4.69885 20.7746 4.46513 20.9356 4.30167C21.1497 4.08229 21.3911 4.14538 21.5205 4.27156C21.667 4.41495 21.6829 4.58558 21.5751 4.74617L21.4041 4.57984C21.4386 4.53109 21.4328 4.46657 21.3897 4.42642C21.2675 4.30741 21.1468 4.43932 21.108 4.47947C21.0548 4.53396 20.9844 4.64867 21.0922 4.75477C21.1339 4.79492 21.1957 4.81499 21.2474 4.78058L21.1684 4.70459L21.2891 4.58127L21.5248 4.81069L21.2144 5.12758L21.1023 5.0186L21.154 4.95408L21.1554 4.95265Z" fill="white"/>'
            + '<path d="M22.0954 4.89941L22.2549 5.08151L21.841 5.83143L21.6714 5.63785L21.7361 5.53748L21.5679 5.34535L21.4573 5.3941L21.2935 5.20626L22.0954 4.90085V4.89941ZM21.8338 5.38693L21.9732 5.16898L21.7346 5.27222L21.8352 5.38693H21.8338Z" fill="white"/>'
            + '<path d="M22.5207 5.38965L22.7305 5.67212L22.4172 6.04636L22.4186 6.04779L22.8684 5.85996L23.0783 6.14386L22.4301 6.62134L22.2907 6.43207L22.706 6.12665L22.7046 6.12379L22.2059 6.31736L22.0953 6.16967L22.4287 5.75098L22.4273 5.74811L22.0105 6.05496L21.8711 5.86712L22.5207 5.38965Z" fill="white"/>'
            + '<path d="M23.2953 6.48975L23.4232 6.69622L22.8915 7.3687L22.7564 7.15076L22.8369 7.06186L22.7018 6.84391L22.5854 6.87402L22.4546 6.66181L23.2967 6.49118L23.2953 6.48975ZM22.9576 6.92707L23.1315 6.73494L22.88 6.79659L22.9604 6.92564L22.9576 6.92707Z" fill="white"/>'
            + '<path d="M23.8019 7.36493L23.0833 7.72949L23.1959 7.95061L23.9146 7.58605L23.8019 7.36493Z" fill="white"/>'
            + '<path d="M23.5628 8.09139C23.5441 8.09999 23.5297 8.11003 23.5182 8.1215C23.4808 8.15734 23.4952 8.21183 23.5139 8.25341C23.5311 8.29069 23.5685 8.34088 23.6231 8.3165C23.6605 8.2993 23.6576 8.26345 23.6361 8.12006C23.6159 7.98958 23.5886 7.84189 23.7367 7.77594C23.9062 7.69994 24.0456 7.81178 24.1132 7.96234C24.185 8.1215 24.1879 8.28926 24.0126 8.37673L23.9163 8.16308C23.9465 8.15448 23.9594 8.1344 23.9623 8.11003C23.9666 8.08565 23.9608 8.05697 23.9508 8.03547C23.9364 8.00536 23.9062 7.95804 23.8646 7.97668C23.8143 8.00392 23.8502 8.11433 23.8689 8.23047C23.8875 8.34661 23.8847 8.47136 23.7496 8.53302C23.5584 8.61905 23.4176 8.47136 23.3429 8.3079C23.3055 8.22474 23.2279 7.97381 23.4622 7.86627L23.5642 8.09282L23.5628 8.09139Z" fill="white"/>'
            + '<path d="M24.3187 8.48828L24.4049 8.72057L23.843 8.92848L23.9666 9.26257L23.7726 9.33426L23.5627 8.76788L24.3187 8.48828Z" fill="white"/>'
            + '<path d="M24.6419 9.41627L24.7109 9.64856L24.0211 10.1576L23.9478 9.91096L24.0484 9.84643L23.9765 9.60124H23.8558L23.7854 9.36035L24.6419 9.41627ZM24.2007 9.74893L24.4192 9.60984V9.60698L24.1576 9.60267L24.2007 9.74893Z" fill="white"/>'
            + '<path d="M24.8229 10.04L24.8948 10.3842L24.4536 10.5935L24.455 10.5949L24.9422 10.6122L25.014 10.9577L24.2236 11.1197L24.1762 10.8903L24.6835 10.7856L24.6821 10.7842L24.1475 10.7512L24.1101 10.5706L24.5887 10.3297V10.3268L24.0814 10.4315L24.0339 10.2021L24.8229 10.04Z" fill="white"/>'
            + '<path d="M24.5743 11.7633C24.5542 11.7647 24.5369 11.7705 24.5226 11.7776C24.4751 11.8006 24.4708 11.8551 24.4751 11.9009C24.4794 11.9411 24.4981 12.0013 24.5585 11.9956C24.6002 11.9913 24.6073 11.9554 24.6347 11.8149C24.6591 11.6844 24.6806 11.5367 24.8416 11.5224C25.027 11.5052 25.1218 11.6557 25.1376 11.8206C25.1534 11.9941 25.1017 12.1547 24.9077 12.1791L24.8861 11.9454C24.9163 11.9468 24.9364 11.9311 24.9479 11.911C24.9609 11.8895 24.9637 11.8608 24.9609 11.8364C24.958 11.8034 24.9436 11.749 24.8991 11.7533C24.8416 11.7633 24.8402 11.878 24.82 11.9956C24.7985 12.1117 24.7568 12.2293 24.6102 12.2422C24.4004 12.2623 24.3156 12.0759 24.2984 11.8981C24.2897 11.8077 24.2984 11.5453 24.5542 11.5195L24.5772 11.7662L24.5743 11.7633Z" fill="white"/>'
            + '<path d="M25.154 12.3029L24.3486 12.3389L24.3597 12.5867L25.1651 12.5507L25.154 12.3029Z" fill="white"/>'
            + '<path d="M25.1766 12.7253L25.1723 12.9791L24.7368 13.2057V13.2085L25.168 13.2143L25.1651 13.4494L24.3589 13.4365L24.3632 13.1956L24.8073 12.9562V12.9533L24.3675 12.9461L24.3704 12.7124L25.1766 12.7253Z" fill="white"/>'
            + '<path d="M24.3905 14.1322C24.3244 14.072 24.3014 13.9831 24.3086 13.8956C24.3287 13.659 24.5242 13.5285 24.7527 13.5472C25.0588 13.5715 25.1637 13.7967 25.1493 13.9773C25.132 14.1809 25.0099 14.3014 24.8188 14.3215L24.8389 14.0849C24.8978 14.0806 24.9438 14.0347 24.9481 13.9759C24.9625 13.8067 24.7828 13.7967 24.7282 13.7924C24.6535 13.7866 24.5184 13.8053 24.5069 13.9558C24.5026 14.0132 24.527 14.0734 24.5845 14.0906L24.5931 13.9816L24.7656 13.996L24.7383 14.3243L24.2957 14.2885L24.3086 14.1322H24.3919H24.3905Z" fill="white"/>'
            + '<path d="M25.0343 14.799L24.9955 15.0385L24.1533 15.199L24.1936 14.9453L24.3128 14.9295L24.3531 14.6771L24.2453 14.6226L24.2855 14.3774L25.0343 14.7976V14.799ZM24.491 14.9094L24.7483 14.8779V14.875L24.5155 14.7588L24.491 14.9094Z" fill="white"/>'
            + '<path d="M24.9164 15.477L24.8201 15.8799C24.7698 16.0921 24.5959 16.1294 24.4838 16.1036C24.2941 16.0577 24.2352 15.91 24.2783 15.7308L24.3128 15.5888L24.0757 15.5329L24.1332 15.292L24.9178 15.4784L24.9164 15.477ZM24.4982 15.6318L24.4752 15.725C24.4608 15.7867 24.4493 15.8541 24.5284 15.8727C24.6002 15.8899 24.6175 15.8354 24.6318 15.7766L24.6577 15.6691L24.4982 15.6304V15.6318Z" fill="white"/>'
            + '<path d="M24.0067 16.8882C23.794 16.8194 23.7293 16.6731 23.8041 16.4394C23.8788 16.2057 24.0182 16.1225 24.2309 16.1914L24.7022 16.3419L24.6261 16.5785L24.2079 16.4452C24.1288 16.4208 24.0311 16.3892 23.9952 16.5039C23.9593 16.6158 24.057 16.6473 24.136 16.6717L24.5542 16.8051L24.4781 17.0416L24.0067 16.8911V16.8882Z" fill="white"/>'
            + '<path d="M24.4149 17.2078L24.2367 17.6451C24.1835 17.7756 24.0657 17.8588 23.9248 17.8014C23.8472 17.7699 23.7797 17.701 23.7825 17.6136C23.7337 17.6666 23.6489 17.6767 23.5512 17.648C23.5138 17.6365 23.4247 17.6007 23.3816 17.6078L23.475 17.3784C23.5167 17.3827 23.5584 17.3942 23.5972 17.4057C23.6704 17.4286 23.7481 17.4515 23.784 17.3612L23.8343 17.2393L23.5742 17.1332L23.6676 16.9038L24.4149 17.2064V17.2078ZM23.9952 17.3053L23.9464 17.4257C23.9291 17.4688 23.9119 17.5304 23.9794 17.5562C24.0268 17.5749 24.0642 17.5605 24.1001 17.4731L24.1433 17.3655L23.9952 17.3053Z" fill="white"/>'
            + '<path d="M23.9448 18.2917L23.8371 18.5082L22.9849 18.4107L23.0998 18.1813L23.2177 18.2028L23.3326 17.9748L23.2464 17.8917L23.3585 17.6694L23.9463 18.2946L23.9448 18.2917ZM23.3944 18.2344L23.6488 18.2803L23.462 18.0982L23.3944 18.2344Z" fill="white"/>'
            + '<path d="M18.895 14.8647L18.9022 14.8561C18.8734 14.8346 18.8447 14.8145 18.8174 14.793L18.8044 14.8116C18.8332 14.8331 18.8619 14.8532 18.8892 14.8747L18.8964 14.8661L18.9036 14.8575C18.8749 14.836 18.8461 14.8145 18.8188 14.7944L18.8059 14.813C18.8346 14.8346 18.8634 14.8546 18.8907 14.8761L18.9079 14.889V14.8604L18.9036 14.8575L18.8964 14.8661L18.895 14.8647Z" fill="#EC008C"/>'
            + '<path d="M20.6955 21.8877H5.3042V23.9998H20.6955V21.8877Z" fill="black"/>'
            + '<path d="M10.1245 23.1136H9.52953V23.6055H9.13721V22.4297H9.52953V22.8498H10.1245V22.4297H10.5183V23.6055H10.1245V23.1136Z" fill="white"/>'
            + '<path d="M11.3993 22.4297H11.8793L12.3852 23.6055H11.9641L11.8937 23.4148H11.3792L11.3088 23.6055H10.8877L11.3993 22.4297ZM11.6393 22.7265H11.6364L11.4726 23.171H11.8031L11.6393 22.7265Z" fill="white"/>'
            + '<path d="M12.6565 22.4297H13.0488V23.333H13.7659V23.6055H12.6565V22.4297Z" fill="white"/>'
            + '<path d="M14.6195 22.4297H15.0995L15.6068 23.6055H15.1858L15.1153 23.4148H14.6009L14.5304 23.6055H14.1094L14.621 22.4297H14.6195ZM14.8581 22.7265H14.8552L14.6914 23.171H15.0219L14.8581 22.7265Z" fill="white"/>'
            + '<path d="M15.877 22.4297H16.2693V23.333H16.9864V23.6055H15.877V22.4297Z" fill="white"/>'
            + '<path d="M9.57091 1.00532C9.53786 0.90782 9.47319 0.80028 9.46888 0.735757C9.46457 0.671233 9.39415 0.605275 9.33379 0.735757C9.27343 0.866238 9.30649 1.02826 9.35679 1.14011C9.40852 1.25195 9.57091 1.61041 9.62265 1.74089C9.67439 1.87138 9.71319 2.05204 9.706 2.11513C9.69738 2.17822 9.81953 2.2198 9.84684 2.11513C9.87414 2.01046 9.89857 1.76384 9.84684 1.63192C9.7951 1.50001 9.57235 1.00676 9.57235 1.00676L9.57091 1.00532Z" fill="white"/>'
            + '<path d="M8.42835 1.31763C8.42835 1.31763 8.32632 1.31763 8.32057 1.26171C8.31626 1.20579 8.32345 1.03373 8.34788 1.01509C8.37231 0.996447 8.54045 1.04233 8.58212 1.06671C8.6238 1.08965 8.62811 1.14127 8.6238 1.20149C8.61949 1.26171 8.73158 1.45242 8.74452 1.46245C8.75889 1.47106 8.84655 1.45815 8.89828 1.46245C8.95002 1.46675 8.92703 1.53271 8.92703 1.60154C8.92703 1.67036 8.91266 1.74636 8.84368 1.74636C8.77469 1.74636 8.69853 1.74206 8.62667 1.80228C8.55482 1.8625 8.4571 1.94136 8.58212 1.93276C8.70859 1.92272 8.81493 1.87684 8.85661 1.8496C8.89829 1.82235 9.08511 1.7607 9.13684 1.73775C9.18858 1.71481 9.1972 1.74206 9.1972 1.82092C9.1972 1.89978 9.17421 1.99298 9.08942 2.06754C9.00607 2.1421 8.8408 2.29553 8.78332 2.43748C8.72583 2.57943 8.65973 2.61241 8.57637 2.67263C8.49302 2.73285 8.36656 2.79881 8.28752 2.79881C8.20848 2.79881 8.10501 2.73572 8.10501 2.73572C8.10501 2.73572 8.11363 2.86764 7.99004 2.94363C7.86645 3.01963 7.77591 3.07411 7.72849 3.08272C7.68106 3.09132 7.56466 3.05547 7.56466 3.05547C7.56466 3.05547 7.56466 3.13434 7.48131 3.18596C7.39795 3.23757 7.36921 3.26052 7.34622 3.23184C7.32322 3.2046 7.2643 3.10996 7.25568 3.18452C7.2485 3.25908 7.27293 3.34225 7.25568 3.4039C7.23844 3.46412 7.2758 3.72509 7.14502 3.83119C7.01425 3.93873 6.72539 4.16672 6.58599 4.19396C6.44659 4.22264 6.28276 4.17962 6.20516 4.05918C6.12756 3.93873 6.08301 3.81255 6.08301 3.65053C6.08301 3.4885 6.12037 3.3996 6.16636 3.3996C6.21235 3.3996 6.23678 3.42254 6.24109 3.55302C6.2454 3.68351 6.3345 3.84123 6.48827 3.84123C6.64204 3.84123 6.78144 3.75233 6.85617 3.69211C6.9309 3.63189 7.07748 3.50857 7.02 3.43688C6.96108 3.36375 6.86623 3.26912 6.83317 3.23757C6.80012 3.2046 6.80012 3.06551 6.81449 2.99095C6.82886 2.91639 6.87916 2.86477 6.91221 2.92643C6.94527 2.98808 6.99557 3.00529 7.0473 3.02393C7.09904 3.04257 7.1364 3.00099 7.1364 2.94507C7.1364 2.88915 7.15077 2.78161 7.19245 2.7687C7.23412 2.75436 7.26287 2.78734 7.28586 2.84756C7.30885 2.90779 7.40226 2.89345 7.41664 2.82462C7.43101 2.75436 7.39077 2.63248 7.47268 2.63392C7.5546 2.63535 7.57472 2.68554 7.57472 2.73572C7.57472 2.78591 7.5934 2.80025 7.72417 2.71708C7.85495 2.63392 7.95699 2.63822 7.94836 2.56366C7.9383 2.4891 7.60346 1.88831 7.55172 1.79081C7.49999 1.6933 7.48131 1.60871 7.49568 1.51694C7.51005 1.42374 7.57472 1.43378 7.60346 1.494C7.63076 1.55422 7.84202 1.90408 7.87363 1.98294C7.90669 2.06181 8.06046 2.33137 8.09351 2.37869C8.12656 2.42457 8.14524 2.49914 8.25159 2.46185C8.35937 2.42457 8.47578 2.35431 8.53614 2.31273C8.59649 2.27115 8.68559 2.16935 8.60655 2.18225C8.52751 2.19516 8.42979 2.21093 8.39243 2.25681C8.35506 2.3027 8.23434 2.26972 8.23434 2.12203C8.23434 1.97434 8.30476 1.80515 8.36943 1.71768C8.4341 1.62878 8.51889 1.56856 8.51889 1.53128C8.51889 1.494 8.42979 1.32193 8.42979 1.32193L8.42835 1.31763Z" fill="white"/>'
            + '<path d="M4.91349 4.02914C4.80427 3.93307 4.62463 3.78395 4.57577 3.72086C4.52691 3.65777 4.50679 3.58895 4.46799 3.58321C4.42919 3.57891 4.35015 3.57891 4.36452 3.72086C4.37889 3.86282 4.48236 3.94168 4.59014 4.02914C4.69792 4.11661 5.05145 4.46504 5.12905 4.54247C5.20809 4.62133 5.26702 4.69446 5.27133 4.75755C5.27564 4.82064 5.42366 4.84071 5.41791 4.70306C5.4136 4.56541 5.06582 4.16106 4.91205 4.02771L4.91349 4.02914Z" fill="white"/>'
            + '<path d="M5.02678 4.85641C4.98223 4.79762 4.70343 4.51801 4.66894 4.45923C4.63445 4.40044 4.56547 4.204 4.50224 4.12657C4.43901 4.04771 4.3456 3.91149 4.29673 3.88712C4.24787 3.86274 4.19326 3.78961 4.13003 3.81399C4.0668 3.83836 4.06105 3.89715 4.09123 3.96598C4.12141 4.0348 4.12572 4.09789 4.14584 4.15668C4.16596 4.21547 4.18033 4.18106 4.26368 4.23554C4.34703 4.29003 4.5123 4.48217 4.4505 4.4707C4.43613 4.46783 4.16596 4.41191 3.97482 4.38323C3.78369 4.35455 3.6328 4.31441 3.59256 4.38323C3.55232 4.45206 3.72333 4.50654 3.72333 4.58971C3.72333 4.67287 3.79806 4.74026 3.92022 4.74026C4.04237 4.74026 4.06249 4.72019 4.13578 4.68148C4.20907 4.64276 4.22057 4.66714 4.36428 4.70585C4.50799 4.74457 4.62583 4.81913 4.61146 4.91663C4.59709 5.01413 4.56691 5.05428 4.51805 5.10303C4.46919 5.15178 4.50368 5.24498 4.57697 5.30807C4.65026 5.37116 4.69481 5.38694 4.7681 5.35682C4.8414 5.32815 4.99373 5.13171 5.02822 5.06288C5.06271 4.99406 5.07277 4.91663 5.02822 4.85784L5.02678 4.85641ZM4.82128 4.88078C4.80116 4.9195 4.72355 4.92953 4.72786 4.90516C4.73218 4.88078 4.7523 4.76751 4.7523 4.76751C4.7523 4.76751 4.83996 4.84063 4.82128 4.87935V4.88078Z" fill="white"/>'
            + '<path d="M2.35411 6.06528C2.35411 6.06528 2.85422 6.46676 2.96775 6.55423C3.08128 6.64169 3.24224 6.75067 3.33134 6.75927C3.42044 6.76931 3.45205 6.79368 3.5857 6.70478C3.71935 6.61732 3.76821 6.54276 3.76821 6.49974C3.76821 6.45673 3.73372 6.35779 3.86594 6.33341C3.99815 6.30904 3.98522 6.17999 3.98809 6.11833C3.99096 6.05668 3.9924 6.03517 4.07144 6.02083C4.15048 6.00649 4.19934 5.8545 4.15048 5.74123C4.10162 5.62795 3.98809 5.51611 3.89468 5.44729C3.80127 5.37846 3.69348 5.39853 3.68917 5.47596C3.68486 5.55483 3.75815 5.61792 3.81708 5.6724C3.876 5.72689 3.89037 5.79428 3.83719 5.78568C3.78258 5.77564 3.74378 5.69821 3.69923 5.67814C3.65468 5.65806 3.59145 5.69821 3.62594 5.77564C3.66043 5.8545 3.71935 5.89322 3.71935 5.96634C3.71935 6.03947 3.63025 6.05955 3.61157 6.05381C3.59145 6.04951 3.54834 5.97065 3.51385 5.95057C3.47936 5.9305 3.37589 5.95057 3.42044 6.05811C3.46499 6.16565 3.52822 6.17569 3.50379 6.28323C3.47936 6.39077 3.41612 6.42948 3.37157 6.46963C3.32702 6.50834 3.23936 6.4897 3.15601 6.42518C3.07266 6.36209 2.51219 5.87744 2.45614 5.84733C2.4001 5.81866 2.3656 5.80288 2.35555 5.89608C2.34549 5.98929 2.35555 6.06241 2.35555 6.06241L2.35411 6.06528Z" fill="white"/>'
            + '<path d="M2.99944 6.58023C2.91609 6.5157 2.65598 6.48129 2.45335 6.47269C2.25071 6.46265 2.00497 6.47269 1.95611 6.52718C1.90725 6.58023 1.97048 6.63471 2.04952 6.71788C2.12856 6.80104 2.18173 6.80534 2.21191 6.84549C2.24209 6.88421 2.38293 6.85983 2.45478 6.80104C2.52664 6.74225 2.46197 6.70784 2.66891 6.71358C2.87442 6.71788 2.9822 6.71358 3.04687 6.83546C3.1101 6.95733 3.1101 7.10502 3.04687 7.21686C2.98364 7.33014 2.89022 7.45632 2.88448 7.50507C2.88016 7.55382 2.89885 7.56242 3.02675 7.53088C3.15465 7.49933 3.30123 7.2355 3.33572 7.18245C3.37022 7.12796 3.28974 6.95303 3.25956 6.83976C3.22938 6.72648 3.0325 6.60604 2.99944 6.58023Z" fill="white"/>'
            + '<path d="M2.06358 7.66992C2.06358 7.66992 2.01472 7.86492 2.06358 7.94952C2.11244 8.03269 2.21016 8.17464 2.2892 8.23343C2.36825 8.29222 2.46022 8.351 2.50477 8.23343C2.54932 8.11585 2.59243 8.0628 2.6183 8.05276C2.64273 8.04272 2.69447 8.03555 2.67722 8.14596C2.65998 8.25637 2.64273 8.46858 2.58381 8.58616C2.52489 8.70373 2.43723 8.7912 2.31938 8.79694C2.20154 8.80124 2.10957 8.77686 2.04202 8.68509C1.97592 8.59189 1.86813 8.54744 1.85807 8.62631C1.84802 8.70517 1.9558 8.7826 2.06933 8.89014C2.18286 8.99768 2.26046 9.08658 2.41711 9.09088C2.57375 9.09518 2.65279 9.02779 2.73614 8.92025C2.81949 8.81271 2.91291 8.6177 2.92297 8.38255C2.93303 8.1474 2.93303 8.07427 2.87842 7.92228C2.82381 7.77029 2.7074 7.70146 2.6571 7.67279C2.60824 7.64411 2.56944 7.62404 2.48034 7.72154C2.39268 7.81904 2.35819 7.95096 2.31795 7.91224C2.27914 7.87353 2.24465 7.67279 2.25903 7.6183C2.2734 7.56381 2.38549 7.49642 2.39124 7.41756C2.39699 7.3387 2.39124 7.27991 2.32226 7.22686C2.25328 7.17237 2.19004 7.0806 2.12106 7.16377C2.05208 7.24693 1.91556 7.33009 1.89113 7.39318C1.8667 7.45627 1.88682 7.48639 1.93712 7.54948C1.98885 7.61257 2.06214 7.67135 2.06214 7.67135L2.06358 7.66992Z" fill="white"/>'
            + '<path d="M0.93564 9.87231C0.842228 9.86227 0.705704 9.81782 0.685585 9.87231C0.665465 9.92679 0.803427 10.0974 0.847977 10.1462C0.892527 10.1949 0.945699 10.1849 1.2015 10.205C1.45731 10.225 1.73179 10.2336 1.88413 10.3225C2.03646 10.41 2.18879 10.4502 2.21753 10.3856C2.24627 10.3225 2.11406 10.1318 1.90424 10.063C1.69299 9.99419 0.938514 9.87231 0.938514 9.87231H0.93564Z" fill="white"/>'
            + '<path d="M0.938498 10.8558C0.938498 10.8558 0.919816 10.9762 0.836464 10.9719C0.753112 10.9676 0.709999 10.8558 0.649641 10.8228C0.589283 10.7898 0.61084 10.721 0.684132 10.7023C0.757424 10.6837 0.780417 10.6134 0.832153 10.6005C0.883888 10.5862 0.921253 10.6565 0.921253 10.6794C0.921253 10.6794 1.62687 10.6794 1.74615 10.6837C1.86543 10.6866 1.99764 10.7439 2.04506 10.8285C2.09105 10.9117 2.07812 11.0465 2.07237 11.1497C2.06806 11.2515 2.03501 11.2945 2.0077 11.3132C1.9804 11.3318 1.90567 11.3691 1.97465 11.4207C2.04506 11.4723 2.06375 11.5655 2.02638 11.6028C1.98902 11.6401 1.88124 11.6731 1.93297 11.7046C1.98471 11.7376 2.035 11.7878 2.01632 11.858C1.99764 11.9283 1.93297 11.9555 1.90423 11.9699C1.87692 11.9842 1.90423 12.0301 1.95022 12.053C1.99764 12.076 1.99764 12.1506 1.99189 12.2065C1.98758 12.2624 1.97321 12.476 1.96315 12.5277C1.95453 12.5793 1.89273 12.5922 1.87405 12.6108C1.85537 12.6295 1.88842 12.6567 1.92579 12.6997C1.96315 12.7413 1.97752 12.813 1.97752 12.9076C1.97752 13.0023 1.95884 13.1973 1.94447 13.2675C1.9301 13.3378 1.87405 13.3937 1.83669 13.421C1.79932 13.4482 1.80938 13.4668 1.841 13.5371C1.87405 13.6074 1.92004 13.6532 1.9071 13.811C1.89273 13.9687 1.81082 14.102 1.75764 14.178C1.70447 14.254 1.62687 14.2526 1.57513 14.2669C1.5234 14.2813 0.927001 14.244 0.856584 14.244C0.786166 14.244 0.740179 14.2497 0.717185 14.2698C0.694191 14.2899 0.623774 14.2712 0.526051 14.2254C0.428328 14.1795 0.35791 14.049 0.35791 14.026C0.35791 14.0031 0.459944 13.9931 0.557667 13.9988C0.65539 14.0031 1.23454 14.0217 1.35095 14.026C1.46735 14.0303 1.5234 13.9802 1.55214 13.887C1.57944 13.7938 1.62687 13.6031 1.57513 13.6446C1.5234 13.6862 1.48172 13.7522 1.44867 13.7794C1.41562 13.8067 1.27191 13.7049 1.21586 13.6446C1.15981 13.5844 1.14975 13.3521 1.26616 13.2403C1.38256 13.1284 1.49466 13.1571 1.52196 13.203C1.5507 13.2489 1.5895 13.2489 1.61106 13.1801C1.63118 13.1098 1.62831 12.9578 1.63118 12.8689C1.63262 12.7786 1.63118 12.7055 1.56507 12.6639C1.5004 12.6223 1.45298 12.6366 1.41562 12.5836C1.37825 12.5291 1.36963 12.4646 1.4616 12.4603C1.55501 12.456 1.67573 12.4789 1.68579 12.3298C1.69441 12.1807 1.71597 12.0416 1.69441 12.0086C1.67429 11.9756 1.5737 11.9254 1.49897 11.8968C1.42424 11.8695 1.41562 11.7993 1.52771 11.7892C1.6398 11.7792 1.80507 11.7577 1.70591 11.6645C1.60675 11.5713 1.50328 11.5526 1.46448 11.524C1.42567 11.4967 1.49466 11.4537 1.56076 11.4537C1.62687 11.4537 1.73178 11.4652 1.73609 11.4308C1.7404 11.3978 1.76196 11.3548 1.67286 11.3232C1.58376 11.2902 1.53777 11.2673 1.53346 11.2343C1.52915 11.2013 1.5119 11.1598 1.63262 11.1555C1.75333 11.1511 1.81225 11.101 1.79932 11.0278C1.78639 10.9547 1.77202 10.9088 1.77202 10.9088L0.937061 10.8572L0.938498 10.8558Z" fill="white"/>'
            + '<path d="M0.506444 14.8513L0.431247 14.9263C0.395328 14.9622 0.395328 15.0203 0.431247 15.0561L0.506444 15.1311C0.542362 15.167 0.600597 15.167 0.636515 15.1311L0.711713 15.0561C0.747631 15.0203 0.747631 14.9622 0.711713 14.9263L0.636515 14.8513C0.600597 14.8155 0.542362 14.8155 0.506444 14.8513Z" fill="white"/>'
            + '<path d="M0.692479 13.1975L0.617282 13.2725C0.581364 13.3084 0.581363 13.3665 0.617282 13.4023L0.692479 13.4773C0.728397 13.5132 0.786632 13.5132 0.82255 13.4773L0.897748 13.4023C0.933666 13.3665 0.933666 13.3084 0.897748 13.2725L0.822551 13.1975C0.786632 13.1616 0.728397 13.1616 0.692479 13.1975Z" fill="white"/>'
            + '<path d="M0.946947 12.4983L0.87171 12.5733C0.835773 12.6091 0.835743 12.6673 0.871642 12.7031L0.946801 12.7782C0.9827 12.814 1.04094 12.8141 1.07687 12.7782L1.15211 12.7033C1.18805 12.6674 1.18808 12.6093 1.15218 12.5735L1.07702 12.4984C1.04112 12.4626 0.982884 12.4625 0.946947 12.4983Z" fill="white"/>'
            + '<path d="M2.87521 8.78899L2.96901 8.74212C3.01399 8.71965 3.06991 8.73821 3.09243 8.78309L3.13941 8.87668C3.16193 8.92155 3.14333 8.97735 3.09835 8.99982L3.00455 9.04669C2.95829 9.0698 2.90365 9.0506 2.88112 9.00573L2.83415 8.91213C2.81099 8.86598 2.83023 8.81146 2.87521 8.78899Z" fill="white"/>'
            + '<path d="M2.97963 8.47342L3.07335 8.42638C3.11957 8.40319 3.17424 8.4223 3.19684 8.46713L3.24398 8.56064C3.26658 8.60548 3.24807 8.66131 3.20314 8.68386L3.10942 8.73089C3.06448 8.75344 3.00852 8.73498 2.98592 8.69014L2.93879 8.59663C2.91619 8.5518 2.93469 8.49596 2.97963 8.47342Z" fill="white"/>'
            + '<path d="M9.02525 2.71251L9.0652 2.61572C9.08435 2.56931 9.13875 2.5467 9.18526 2.56581L9.28227 2.60566C9.32878 2.62477 9.35145 2.67905 9.3323 2.72545L9.29235 2.82224C9.2732 2.86865 9.2188 2.89126 9.17229 2.87216L9.07528 2.8323C9.02877 2.8132 9.0061 2.75891 9.02525 2.71251Z" fill="white"/>'
            + '<path d="M3.0342 17.5915L3.08267 17.4986C3.10591 17.4541 3.16213 17.4365 3.20674 17.4597L3.29977 17.508C3.34566 17.5319 3.36208 17.5873 3.33884 17.6318L3.29037 17.7246C3.26713 17.7691 3.21091 17.7868 3.1663 17.7636L3.07327 17.7153C3.02866 17.6921 3.01096 17.636 3.0342 17.5915Z" fill="white"/>'
            + '<path d="M3.1548 17.9196L3.20328 17.8268C3.22652 17.7823 3.28273 17.7646 3.32734 17.7878L3.42038 17.8361C3.46499 17.8593 3.48269 17.9154 3.45945 17.9599L3.41098 18.0528C3.38773 18.0973 3.33152 18.1149 3.28691 18.0917L3.19387 18.0434C3.14926 18.0202 3.13156 17.9641 3.1548 17.9196Z" fill="white"/>'
            + '<path d="M2.53202 15.3766C2.32508 15.2203 1.99598 15.2562 1.99598 15.2562C1.99598 15.2562 1.98017 15.0339 1.97299 14.9321C1.9658 14.8303 1.89538 14.6597 1.76605 14.5765C1.63671 14.4948 1.38665 14.5263 1.1869 14.5765C0.987138 14.6267 0.91672 14.8188 0.905224 14.8733C0.893727 14.9278 0.99145 15.0526 1.07336 15.0884C1.15528 15.1243 1.31192 15.1515 1.38953 15.1271C1.46713 15.1042 1.58066 15.0253 1.58497 14.9278C1.58928 14.8303 1.49443 14.7371 1.49443 14.7371C1.45132 14.6396 1.58785 14.7299 1.6324 14.8231C1.67695 14.9178 1.67838 15.0139 1.68269 15.1071C1.68701 15.2003 1.70569 15.2978 1.6324 15.3135C1.5591 15.3293 1.43264 15.4311 1.37659 15.5587C1.32198 15.6878 1.49012 15.824 1.6324 15.8441C1.77467 15.8641 1.98305 15.8555 2.03766 15.715C2.09227 15.5745 2.03047 15.4297 2.03047 15.4297C2.03047 15.4297 2.28053 15.4497 2.39837 15.5774C2.51621 15.7064 2.57801 15.8928 2.5737 16.0376C2.56938 16.1824 2.63262 16.2169 2.66423 16.1896C2.69585 16.1624 2.80076 16.0104 2.79645 15.8656C2.79213 15.7207 2.73753 15.53 2.53058 15.3738L2.53202 15.3766ZM1.25013 14.9522C1.21133 14.9522 1.17971 14.9207 1.17971 14.8819C1.17971 14.8432 1.21133 14.8117 1.25013 14.8117C1.28893 14.8117 1.32055 14.8432 1.32055 14.8819C1.32055 14.9207 1.28893 14.9522 1.25013 14.9522ZM1.72581 15.6562C1.68701 15.6562 1.65539 15.6247 1.65539 15.586C1.65539 15.5472 1.68701 15.5157 1.72581 15.5157C1.76461 15.5157 1.79623 15.5472 1.79623 15.586C1.79623 15.6247 1.76461 15.6562 1.72581 15.6562Z" fill="white"/>'
            + '<path d="M1.92274 16.3488C1.92274 16.3488 1.80202 16.4506 1.73161 16.4936C1.66119 16.5366 1.53616 16.5094 1.45424 16.4936C1.37233 16.4779 1.39964 16.4305 1.48155 16.3488C1.56346 16.2671 1.66406 16.1495 1.85232 16.1452C2.04058 16.1409 2.36393 16.2155 2.45447 16.3058C2.545 16.3947 2.63841 16.485 2.65853 16.6528C2.67865 16.8205 2.64273 16.9768 2.63123 17.0313C2.61973 17.0858 2.545 17.1059 2.48321 16.9453C2.41998 16.7847 2.31507 16.3287 1.92418 16.3488H1.92274Z" fill="white"/>'
            + '<path d="M2.16157 17.691C2.16157 17.691 1.98625 17.5777 1.94601 17.539C1.90721 17.5003 1.89571 17.496 1.94601 17.4687C1.99631 17.4415 1.99918 17.3483 1.91152 17.3124C1.82385 17.2766 1.70457 17.3081 1.63416 17.4028C1.5623 17.496 1.61691 17.5504 1.72326 17.6365C1.82817 17.7225 2.03654 17.8788 2.16157 17.9089C2.2866 17.9405 2.50216 17.9247 2.49067 17.7483C2.47917 17.5734 2.42744 17.4114 2.49067 17.4286C2.55534 17.4458 2.68899 17.6006 2.75222 17.744C2.81545 17.8888 2.87725 18.0595 2.82264 18.1971C2.76803 18.3333 2.67031 18.3763 2.51797 18.3878C2.36564 18.3993 2.30241 18.3806 2.30241 18.4624C2.30241 18.5441 2.46624 18.5599 2.66456 18.5556C2.86144 18.5513 3.1 18.3534 3.15173 18.2315C3.20203 18.1111 3.08994 17.8759 2.99078 17.6809C2.89306 17.4859 2.74935 17.3196 2.59558 17.2479C2.44181 17.1748 2.17738 17.1733 2.14576 17.3182C2.11415 17.463 2.22768 17.701 2.16157 17.6881V17.691Z" fill="white"/>'
            + '<path d="M11.1344 13.0124C11.1344 13.0124 11.2379 17.9306 11.2221 18.1657C11.2077 18.4009 11.031 19.1866 10.3095 19.905C9.58811 20.6248 8.82357 21.1754 7.83772 21.4908C6.85187 21.8063 5.57142 21.2858 5.54267 19.8978C5.51393 18.5098 6.4035 17.5563 6.54289 17.4086C6.68229 17.2624 6.77283 17.1935 6.83175 17.1491C6.89067 17.1046 6.94528 17.1147 6.97402 17.1491C7.00277 17.1835 6.99414 17.2767 6.93522 17.3197C6.8763 17.3642 6.54289 17.7255 6.5084 18.4754C6.47391 19.2239 6.64637 20.0756 6.86624 20.2864C7.08756 20.4972 7.69976 20.8442 8.66118 20.4527C9.6226 20.0613 10.104 19.7085 10.2506 19.0475L10.1989 14.7947C10.1989 14.7947 10.0882 14.5638 9.93014 14.538C9.77206 14.5122 9.8008 14.4463 9.87122 14.376C9.94163 14.3057 10.5366 13.5759 10.6731 13.3408C10.8096 13.1056 11.0453 12.7729 11.1474 12.7729C11.2494 12.7729 11.2135 12.8676 11.133 13.0095L11.1344 13.0124Z" fill="white"/>'
            + '<path d="M12.5659 12.995C12.5372 12.8674 12.4826 12.6423 12.369 13.0194C12.2555 13.3965 11.9724 14.2525 11.8143 14.6053C11.6577 14.958 11.4608 15.2032 11.4076 15.2663C11.3544 15.3294 11.3199 15.4326 11.4708 15.4283C11.6232 15.424 11.7899 15.4484 11.9911 15.6735C12.1923 15.8986 12.9726 16.7647 13.3175 17.8071C13.6638 18.8495 13.9067 19.5836 13.9656 20.1557C13.9656 20.1557 13.9628 20.3952 14.0662 20.3952C14.1697 20.3952 14.2962 19.6223 14.2962 19.0789C14.2962 18.5355 14.2272 17.5863 13.8406 16.5338C13.4526 15.4813 13.1235 14.7128 12.9985 14.3658C12.8734 14.0188 12.599 13.3764 12.5645 12.995H12.5659Z" fill="white"/>'
            + '<path d="M15.242 20.5231C15.242 20.5231 14.0894 21.673 13.1898 22.1161C13.1898 22.1161 13.128 22.1519 12.9053 22.0731C12.6825 21.9942 11.8159 21.5497 11.4409 21.4608C11.0658 21.3719 10.9292 21.3977 10.8272 21.3232C10.7266 21.2486 10.7913 21.2084 11.0198 21.2127C11.2483 21.2185 12.3448 21.2414 13.2042 20.8987C14.0621 20.556 14.647 20.2678 14.8382 19.3917C14.8382 19.3917 14.8065 14.7747 14.8065 14.7303C14.8065 14.6858 14.6916 14.518 14.6183 14.4679C14.545 14.4191 14.4415 14.3947 14.5694 14.2872C14.6973 14.1796 15.2908 13.3767 15.3598 13.2448C15.4288 13.1129 15.6343 12.872 15.7378 12.8117C15.8413 12.7501 15.9002 12.8089 15.8757 13.0197C15.8513 13.2304 15.8513 14.3904 15.8556 14.6155C15.8599 14.8407 15.8815 19.7301 15.8815 19.7301C15.8815 19.7301 16.3026 20.1761 17.1605 20.1416C18.0185 20.1072 18.1018 19.7746 18.2929 19.7402C18.2929 19.7402 17.7971 19.3631 17.1691 19.3731C16.5411 19.3831 16.2523 19.6269 16.1732 19.6957C16.0942 19.7645 15.9821 19.7 16.0511 19.5495C16.1201 19.3975 16.4635 18.4827 16.5325 18.3508C16.6015 18.2188 16.7682 18.1056 17.2726 18.1156C17.7785 18.1256 18.224 18.3895 18.6264 18.6633C19.0287 18.9372 19.6165 19.2311 20.1957 19.3932C20.7748 19.5552 20.7461 19.5781 20.897 19.5781C21.0479 19.5781 21.1844 19.624 20.9631 19.7731C20.7403 19.9237 20.4773 20.0757 20.3207 20.2879C20.164 20.5001 20.085 20.6005 19.789 20.5904C19.4915 20.579 18.9713 20.5403 18.405 20.7912C17.8388 21.0421 17.4019 21.1826 16.8645 21.2041C16.327 21.2271 15.6286 21.0163 15.2434 20.5231H15.242Z" fill="white"/>'
            + '<path d="M13.7716 1.89284C13.8162 1.84839 13.8852 1.781 13.8061 1.69067C13.7372 1.61181 13.6581 1.60177 13.6581 1.55732C13.6581 1.60177 13.5791 1.61181 13.5101 1.69067C13.4311 1.781 13.5 1.84839 13.5489 1.89284L13.5015 3.38119H13.2227L13.1695 1.18595C13.2327 1.12286 13.3319 1.02536 13.2198 0.896308C13.1206 0.783033 13.0071 0.770128 13.0071 0.705604C13.0071 0.768694 12.8936 0.783033 12.7944 0.896308C12.6823 1.02536 12.78 1.12286 12.8447 1.18595H12.8505L12.7815 3.38119H12.4926L12.4567 1.89284C12.5013 1.84839 12.5702 1.781 12.4912 1.69067C12.4222 1.61181 12.3432 1.60177 12.3432 1.55732C12.3432 1.60177 12.2641 1.61181 12.1952 1.69067C12.1161 1.781 12.1851 1.84839 12.234 1.89284L12.1865 3.38119H11.9221L11.8689 1.18595C11.9322 1.12286 12.0313 1.02536 11.9192 0.896308C11.8201 0.783033 11.7065 0.770128 11.7065 0.705604C11.7065 0.768694 11.593 0.783033 11.4938 0.896308C11.3818 1.02536 11.4795 1.12286 11.5427 1.18595H11.5485L11.4651 3.83286H14.5347L14.4715 1.18595C14.5347 1.12286 14.6339 1.02536 14.5204 0.896308C14.4212 0.783033 14.3077 0.770128 14.3077 0.705604C14.3077 0.768694 14.1942 0.783033 14.095 0.896308C13.9829 1.02536 14.0806 1.12286 14.1439 1.18595H14.1496L14.0806 3.38119H13.8061L13.7702 1.89284H13.7716ZM10.998 0.255371H15.0018V4.25011H10.998V0.255371Z" fill="#308240"/>'
            + '<path d="M13.7719 1.8928C13.8164 1.84836 13.8854 1.78096 13.8064 1.69063C13.7374 1.61177 13.6583 1.60173 13.6583 1.55728C13.6583 1.60173 13.5793 1.61177 13.5103 1.69063C13.4313 1.78096 13.5003 1.84836 13.5491 1.8928L13.5017 3.38115H13.2229L13.1697 1.18591C13.233 1.12282 13.3321 1.02532 13.22 0.89627C13.1209 0.782995 13.0073 0.77009 13.0073 0.705566C13.0073 0.768656 12.8938 0.782995 12.7947 0.89627C12.6826 1.02532 12.7803 1.12282 12.8449 1.18591H12.8507L12.7817 3.38115H12.4929L12.4569 1.8928C12.5015 1.84836 12.5705 1.78096 12.4914 1.69063C12.4224 1.61177 12.3434 1.60173 12.3434 1.55728C12.3434 1.60173 12.2644 1.61177 12.1954 1.69063C12.1163 1.78096 12.1853 1.84836 12.2342 1.8928L12.1868 3.38115H11.9223L11.8692 1.18591C11.9324 1.12282 12.0316 1.02532 11.9195 0.89627C11.8203 0.782995 11.7068 0.77009 11.7068 0.705566C11.7068 0.768656 11.5932 0.782995 11.4941 0.89627C11.382 1.02532 11.4797 1.12282 11.5429 1.18591H11.5487L11.4653 3.83282H14.535L14.4717 1.18591C14.535 1.12282 14.6341 1.02532 14.5206 0.89627C14.4214 0.782995 14.3079 0.77009 14.3079 0.705566C14.3079 0.768656 14.1944 0.782995 14.0952 0.89627C13.9831 1.02532 14.0809 1.12282 14.1441 1.18591H14.1498L14.0809 3.38115H13.8064L13.7704 1.8928H13.7719Z" fill="white"/>'
            + '</g><defs><clipPath id="clip0_2162_5811"><rect width="26" height="24" fill="white"/></clipPath></defs></svg>'

            var unittxt = document.createElement("p");
            unittxt.className = "unittxt";
            //Tenant Unit Number
            unittxt.innerText = tenantArray[tenantIndex].storeUnitNum;

            var wayfindingbtn = document.createElement("div");
            wayfindingbtn.className = "wayfindingbtn";

            var btnholder = document.createElement("div");
            btnholder.className = "btnholder";
            btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenantIndex].storeUnitNum+"\",\""+tenantArray[tenantIndex].id+"\")");

            $(btnholder).html('<svg width="17" height="34" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.05146 33.906C4.04036 34.2388 5.10416 33.6595 5.41664 32.6128L7.94979 24.2368L5.65422 22.1361C5.35309 21.8654 5.09886 21.5818 4.89079 21.2989L1.84239 31.3872C1.52461 32.4339 2.06861 33.5676 3.05146 33.906ZM9.90489 18.5883C9.81258 19.3031 9.93969 19.6229 10.4542 20.0975L12.8602 22.315C13.3982 22.8138 13.7735 23.5898 13.8264 24.3472L14.3523 31.8489C14.4272 32.9456 13.6464 33.9125 12.6174 33.9923C11.5876 34.0728 10.6797 33.2477 10.6048 32.1446L10.1069 25.074L6.18007 21.4835C4.9831 20.3868 4.67667 19.2845 4.90214 17.5594L5.59596 12.3307L4.58436 12.8972L3.05751 18.2C2.80253 19.075 1.92334 19.5682 1.10241 19.3031C0.280729 19.0323 -0.181564 18.0952 0.0673631 17.2209L1.64037 11.7763C1.84844 11.0495 2.36899 10.3783 2.99925 10.027L6.05296 8.31475C6.78158 7.9022 7.545 7.39698 8.37198 7.32929C9.93364 7.19956 11.2063 8.75229 10.9861 10.3969L9.90489 18.5883ZM9.82923 0C11.4892 0 12.8375 1.43508 12.8375 3.20294C12.8375 4.97 11.4892 6.40588 9.82923 6.40588C8.16392 6.40588 6.82243 4.97 6.82243 3.20294C6.82243 1.43508 8.16392 0 9.82923 0ZM11.605 11.9061L16.3883 15.8108C17.0708 16.3709 17.204 17.4184 16.6774 18.1452C16.1568 18.872 15.1732 19.0073 14.4915 18.453L11.1079 15.6932L11.605 11.9061Z" fill="white"/></svg>'
            );

            wayfindingbtn.appendChild(btnholder);
            if(tenantArray[tenantIndex].isHalal) {
                shopunitholder.appendChild(halalicon);
            }
            else {
            }
            shopunitholder.appendChild(unittxt);
            shopdetail.appendChild(shopunitholder);
            shopdetail.appendChild(wayfindingbtn);
            shopnameholder.appendChild(nametxt);
            dcardright.appendChild(shopnameholder);
            dcardright.appendChild(shopdetail);
            dcardleft.appendChild(createImg(newobj));
            dcard.appendChild(dcardleft);
            dcard.appendChild(dcardright);
            dcol.appendChild(dcard);
            drow.appendChild(dcol);

            tenantIndex++;

        }

        slide.appendChild(drow);

        //Fill in empty space
        var blankRow = numRow-Math.floor(numLeftTenant/2)-(numLeftTenant%2);

        if(blankRow!=0)
        {
            for(var num=0;num<blankRow;num++)
            {
                var drow = document.createElement("div");
                drow.className = "drow";

                var dcol = document.createElement("div");
                dcol.className = "dcol";

                drow.appendChild(dcol);

                slide.appendChild(drow);
            }
        }

        $('#swiperDirectory .swiper-wrapper').append(slide);

    }

    SwiperDirectory.update();
    SwiperDirectory.slideTo(0,1,false);

}

function createHappeningSwiper (happeningsArray, num_row, num_column) {

    if(happeningsArray.length == 0) {
        return "No happenings found"
    }

    var total_box = num_row * num_column;
    var num_slides = Math.floor(happeningsArray.length/ total_box);
    var num_left_happenings = happeningsArray.length % total_box;
    var happening_index = 0;

    //create slide for 9 happenings 
    if (num_slides > 0) {
        for(let i=1; i<= num_slides; i++) {
            var slide = document.createElement("div");
            slide.className = "swiper-slide";

            for (happening_index; happening_index<total_box * i; happening_index++) {
                if(happening_index % num_column == 0) {

                    var row = document.createElement("div");
                    row.classList = "row";
                }

                var col = document.createElement("div");
                col.className = "col";

                var happening = document.createElement("div"); 
                happening.className = "happening";
                // happening.setAttribute("onclick", "onclickHappening(620e0e3638150a1e86e0001e)");
                happening.setAttribute("onclick", "onclickHappening(\""+ happeningsArray[happening_index].id + "\")");

                var happening_logo = document.createElement('div');
                happening_logo.className = "happening_logo";

                var newobj = new Object();
                newobj.FIT_TYPE = "centerImg";
                if (happeningsArray[happening_index].hpnImgUrl != null || happeningsArray[happening_index].hpnImgUrl != '') {
                    var imgurl = happeningsArray[happening_index].hpnImgUrl.split('/');
                    var imgdetail = getHappeningsImage(imgurl[imgurl.length - 1]);
                    newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
                }
                else {
                    newobj.MAIN_URL = './asset/error/errorimg.jpg';
                }
                happening_logo.appendChild(createImg(newobj));

                var happening_title = document.createElement('div');
                happening_title.className = "happening_title";
                
                var name = document.createElement("p");
                name.className = "happening_name";
                name.innerHTML = happeningsArray[happening_index].hpnTitle;

                var happening_detail = document.createElement('div');
                happening_detail.className = "happening_detail";

                var happening_date = document.createElement("div");
                happening_date.className = "happening_date";

                if(happeningsArray[happening_index].hpnStartDate == "" && happeningsArray[happening_index].hpnEndDate == "") {
                    happening_date.innerHTML = " - ";
                }
                else if(happeningsArray[happening_index].hpnStartDate == "") {
                    var hpnEndDate = convertToMonth(Number(happeningsArray[happening_index].hpnEndDate));
                    happening_date.innerHTML = hpnEndDate;
                }
                else if(happeningsArray[happening_index].hpnEndDate == "") {
                    var hpnStartDate = convertToMonth(Number(happeningsArray[happening_index].hpnStartDate));
                    happening_date.innerHTML =  hpnStartDate ;
                }
                else {
                    var hpnStartDate = convertToMonth(Number(happeningsArray[happening_index].hpnStartDate));
                    var hpnEndDate = convertToMonth(Number(happeningsArray[happening_index].hpnEndDate));
                    happening_date.innerHTML = hpnStartDate + ' - ' + hpnEndDate;
                }

                // var happening_location = document.createElement("div");
                // happening_location.className = "happening_location";
                // happening_location.innerHTML = "Location | " + happeningsArray[happening_index].hpnLocation;

                happening_detail.appendChild(happening_date);
                // happening_detail.appendChild(happening_location);
                happening_title.appendChild(name);
                happening.appendChild(happening_logo);
                happening.appendChild(happening_title);
                happening.appendChild(happening_detail);
                col.appendChild(happening);
                row.appendChild(col);

                if ((happening_index + 1) % 3 == 0) {
                    slide.appendChild(row);
                }
            }

            $("#swiperHappenings .swiper-wrapper").append(slide);
        }
    }

    if (num_left_happenings != 0) {

        // create slide for remaining happenings 
        var slide = document.createElement('div');
        slide.className = "swiper-slide";

        for(var j=0; j<num_left_happenings; j++) {
            if (happening_index % num_column == 0) {

                if (j!= 0) {
                    slide.appendChild(row);
                }
                var row = document.createElement("div");
                row.className = 'row';
            }

            var col = document.createElement("div");
            col.className = "col";

            var happening = document.createElement('div');
            happening.className = "happening";
            happening.setAttribute("onclick", "onclickHappening(\""+ happeningsArray[happening_index].id + "\")");
            
            var happening_logo = document.createElement('div');
            happening_logo.className = "happening_logo";

            var newobj = new Object();
            newobj.FIT_TYPE = "centerImg";
            if (happeningsArray[happening_index].hpnImgUrl != null || happeningsArray[happening_index].hpnImgUrl != '') {
                var imgurl = happeningsArray[happening_index].hpnImgUrl.split('/');
                var imgdetail = getHappeningsImage(imgurl[imgurl.length - 1]);
                newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
            }
            else {
                newobj.MAIN_URL = './asset/error/errorimg.jpg';
            }
            happening_logo.appendChild(createImg(newobj));

            var happening_title = document.createElement('div');
            happening_title.className = "happening_title";
            
            var name = document.createElement("p");
            name.className = "happening_name";
            name.innerHTML = happeningsArray[happening_index].hpnTitle;

            var happening_detail = document.createElement('div');
            happening_detail.className = "happening_detail";

            var happening_date = document.createElement("div");
            happening_date.className = "happening_date";

            if(happeningsArray[happening_index].hpnStartDate == "" && happeningsArray[happening_index].hpnEndDate == "") {
                happening_date.innerHTML = " - ";
            }
            else if(happeningsArray[happening_index].hpnStartDate == "") {
                var hpnEndDate = convertToMonth(Number(happeningsArray[happening_index].hpnEndDate));
                happening_date.innerHTML = hpnEndDate;
            }
            else if(happeningsArray[happening_index].hpnEndDate == "") {
                var hpnStartDate = convertToMonth(Number(happeningsArray[happening_index].hpnStartDate));
                happening_date.innerHTML =  hpnStartDate ;
            }
            else {
                var hpnStartDate = convertToMonth(Number(happeningsArray[happening_index].hpnStartDate));
                var hpnEndDate = convertToMonth(Number(happeningsArray[happening_index].hpnEndDate));
                happening_date.innerHTML = hpnStartDate + ' - ' + hpnEndDate;
            }

            // var happening_location = document.createElement("div");
            // happening_location.className = "happening_location";
            // happening_location.innerHTML = "Location | " + happeningsArray[happening_index].hpnLocation;

            happening_detail.appendChild(happening_date);
            // happening_detail.appendChild(happening_location);
            happening_title.appendChild(name);
            happening.appendChild(happening_logo);
            happening.appendChild(happening_title);
            happening.appendChild(happening_detail);
            col.appendChild(happening);
            row.appendChild(col);

            happening_index++;
        }

        var blank_col = num_column - (num_left_happenings % num_column);

        if (blank_col % num_column != 0) {
            
            for(var num=0; num < blank_col; num++) {
                
                var col = document.createElement("div");
                col.className = "col";
                row.appendChild(col);
            }
        }
        
        slide.appendChild(row);
        $("#swiperHappenings .swiper-wrapper").append(slide);
    }
}

function createDiningSwiper(tenantArray, numRow)
{
    $('#wgDining #swiperDining .swiper-wrapper').html("");

    if(tenantArray.length==0)
    {
        return "No tenant is found";
    }

    var totalBox = numRow*2;
    var numSlides = Math.floor(tenantArray.length/totalBox);
    var numLeftTenant = tenantArray.length % totalBox;
    var tenantIndex = 0;

    //Create slide for full tenant in page
    if(numSlides>0)
    {
        for(var i=1; i<=numSlides; i++)
        {
            var slide = document.createElement("div");
            slide.className = "swiper-slide";

            for(tenantIndex; tenantIndex<totalBox*i; tenantIndex++)
            {
                if(tenantIndex % 2 == 0)
                {
                    var drow = document.createElement("div");
                    drow.className = "drow";
                }

                var dcol = document.createElement("div");
                dcol.className = "dcol";

                var dcard = document.createElement("div");
                dcard.className = "dcard";
                dcard.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenantIndex].id+"\")");

                var dcardleft = document.createElement("div");
                dcardleft.className = "dcardleft";

                var newobj = new Object();
                newobj.FIT_TYPE = "stretchImg";
                //Tenant Thumbnail URL
                if (tenantArray[tenantIndex].storeThumbnailUrl !="" || tenantArray[tenantIndex].storeThumbnailUrl != null) {
                    var imgurl = tenantArray[tenantIndex].storeThumbnailUrl.split('/');
                    var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
                    newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
                }
                else {
                    newobj.MAIN_URL = './asset/error/errorimg.jpg';
                }

                // dcardleft.appendChild(createImg(newobj));

                var dcardright = document.createElement("div");
                dcardright.className = "dcardright";

                var shopnameholder = document.createElement("div");
                shopnameholder.className = "shopnameholder";

                var nametxt = document.createElement("p");
                nametxt.className = "nametxt";
                //Tenant Name (Store Name)
                nametxt.innerHTML = tenantArray[tenantIndex].storeNameEng;

                var shopdetail = document.createElement("div");
                shopdetail.className = "shopdetail";

                var shopunitholder = document.createElement("div");
                shopunitholder.className = "shopunitholder";

                var halalicon = document.createElement('div');
                halalicon.className = "halalicon";
                halalicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none"><g clip-path="url(#clip0_2162_5811)">'
                + '<path d="M17.2796 3.15443C17.2522 3.18024 17.2235 3.20605 17.1948 3.23186L17.1732 3.25194C17.1459 3.27631 17.1186 3.30069 17.0913 3.32363H17.0899C17.064 3.34801 17.0367 3.36951 17.0108 3.39246L16.9864 3.41253C16.9576 3.43691 16.9289 3.45985 16.8987 3.48279C16.8729 3.50286 16.847 3.52294 16.8211 3.54301L16.7852 3.57025L16.7679 3.58316C16.7478 3.59893 16.7263 3.6147 16.7061 3.62904L16.6702 3.65485C16.6444 3.67349 16.6199 3.6907 16.5941 3.70934L16.5811 3.71794C16.5524 3.73802 16.5222 3.75809 16.492 3.77816C16.4719 3.79107 16.4518 3.80541 16.4317 3.81831C16.413 3.83122 16.3943 3.84269 16.3742 3.85559H16.3699C16.3497 3.87137 16.3296 3.88284 16.3081 3.89574C16.265 3.92298 16.2218 3.94879 16.1773 3.9746C16.1586 3.98607 16.1399 3.99611 16.1212 4.00758C15.9933 4.08071 15.8626 4.15097 15.7289 4.21549C15.7131 4.22266 15.6987 4.22983 15.6829 4.23843C15.6686 4.2456 15.6528 4.25277 15.6384 4.25994C15.6211 4.26855 15.6025 4.27572 15.5852 4.28432C14.7431 3.54158 13.842 3.12002 12.9999 3.12002C12.1577 3.12002 11.2567 3.54158 10.4145 4.28432C10.3958 4.27715 10.3786 4.26855 10.3599 4.25994C10.222 4.19542 10.0869 4.12803 9.95466 4.05347C9.93885 4.04486 9.92448 4.03626 9.90867 4.02766L9.87562 4.00902C9.85837 3.99898 9.84112 3.98894 9.82244 3.97891C9.77789 3.9531 9.73334 3.92585 9.68879 3.89861C9.64712 3.8728 9.60688 3.84699 9.56664 3.82118C9.54652 3.80828 9.5264 3.79537 9.50628 3.78103C9.4761 3.76096 9.44736 3.74088 9.41718 3.72081L9.40425 3.71221C9.37838 3.695 9.35251 3.67636 9.32808 3.65772L9.29215 3.63191C9.2706 3.61757 9.25048 3.6018 9.23036 3.58603L9.21311 3.57312L9.17719 3.54588C9.15132 3.5258 9.12545 3.50573 9.09958 3.48566C9.0694 3.46271 9.04066 3.43834 9.01192 3.4154L8.98749 3.39532C8.96162 3.37382 8.93432 3.35087 8.90845 3.32937H8.90701C8.87971 3.30356 8.85096 3.28061 8.8251 3.25624L8.80354 3.23616C8.7748 3.21035 8.74749 3.18455 8.71875 3.15874C10.0265 2.57946 11.4751 2.25684 12.9984 2.25684C14.5218 2.25684 15.9704 2.57946 17.2781 3.15874L17.2796 3.15443Z" fill="#C5E5D0"/>'
                + '<path d="M7.1049 14.865C7.08478 14.8794 7.0661 14.8951 7.04598 14.9095C7.02586 14.9238 7.00718 14.9396 6.98706 14.9539C6.94826 14.984 6.90946 15.0141 6.87066 15.0443L6.86491 15.0486C6.82754 15.0772 6.79162 15.1073 6.75569 15.1375C6.71832 15.169 6.67952 15.2005 6.64216 15.2321C6.60767 15.2622 6.57318 15.2909 6.53869 15.321C6.49557 15.3583 6.4539 15.3955 6.41222 15.4328C6.37773 15.4629 6.34468 15.493 6.31163 15.5246C6.27713 15.5561 6.24264 15.5891 6.20815 15.6221C6.19378 15.6364 6.17798 15.6508 6.1636 15.6651C6.14636 15.6809 6.12911 15.6981 6.11187 15.7153L6.0975 15.7296C6.06301 15.764 6.02708 15.7985 5.99403 15.8329C5.95954 15.8673 5.92648 15.9017 5.89343 15.9361C5.87044 15.9605 5.84601 15.9849 5.82301 16.0107C5.80864 16.025 5.79571 16.0408 5.78134 16.0551C5.75834 16.0809 5.73535 16.1053 5.71092 16.1311C5.63619 16.2128 5.56433 16.296 5.49248 16.3792C5.47667 16.3978 5.4623 16.415 5.44649 16.4337C5.43068 16.4523 5.41631 16.4709 5.4005 16.4882C5.3732 16.5211 5.34733 16.5541 5.32003 16.5857C5.30278 16.6072 5.28554 16.6287 5.26829 16.6502L5.25105 16.6703C5.2338 16.6932 5.21656 16.7147 5.19931 16.7376C5.17632 16.7678 5.15332 16.7979 5.13033 16.828C5.11165 16.8524 5.0944 16.8767 5.07572 16.9011C5.00387 16.9972 4.93488 17.0961 4.86734 17.195C4.84578 17.2266 4.82423 17.2581 4.80267 17.2911C4.79405 17.304 4.78543 17.3169 4.7768 17.3313L4.75237 17.3685C4.72794 17.4058 4.70351 17.4445 4.67908 17.4833C4.6604 17.5119 4.64315 17.5406 4.62591 17.5693C4.60435 17.6037 4.58423 17.6367 4.56411 17.6711C4.54399 17.7055 4.52387 17.7385 4.50375 17.7729C4.4937 17.7887 4.48507 17.8059 4.47501 17.8216C4.46495 17.8388 4.45489 17.8561 4.44483 17.8733C4.4319 17.8948 4.4204 17.9177 4.40747 17.9392L4.40028 17.9521C4.38735 17.9751 4.37442 17.998 4.36148 18.021C4.34711 18.0453 4.33418 18.0711 4.32124 18.0955C4.31118 18.1156 4.29969 18.1342 4.28963 18.1543C4.28244 18.1686 4.27382 18.183 4.26663 18.1973C4.25657 18.216 4.24795 18.2346 4.23789 18.2532C4.22783 18.2733 4.21633 18.2934 4.20771 18.3135C4.19478 18.3378 4.18328 18.3608 4.17178 18.3852C4.1646 18.3981 4.15885 18.4124 4.15167 18.4253C4.14304 18.4411 4.13586 18.4583 4.12723 18.4755C3.06378 16.8323 2.44727 14.8751 2.44727 12.7759H6.96838C6.96838 12.7988 6.96838 12.8218 6.96838 12.8447C6.96838 13.5373 7.01293 14.214 7.09916 14.8665L7.1049 14.865Z" fill="#C5E5D0"/>'
                + '<path d="M7.6297 8.76228C7.26324 9.87209 7.02755 11.0952 6.983 12.3842H2.46045C2.46332 12.3154 2.4662 12.2451 2.47051 12.1763C2.47338 12.1333 2.47626 12.0903 2.47913 12.0473C2.48201 12.0042 2.48488 11.9612 2.48919 11.9182C2.49638 11.8322 2.50356 11.7461 2.51362 11.6616C2.5165 11.6271 2.52081 11.5927 2.52512 11.5597C2.52943 11.5253 2.53374 11.4909 2.53805 11.4579C2.54668 11.3891 2.5553 11.3217 2.56536 11.2529C2.56823 11.2357 2.56967 11.2199 2.57254 11.2027C2.57542 11.1855 2.57829 11.1697 2.57973 11.1525C2.58548 11.1181 2.58979 11.0851 2.59554 11.0522C2.60128 11.0192 2.60703 10.9848 2.61278 10.9518C2.61853 10.9188 2.62428 10.8873 2.63003 10.8543C2.6329 10.8385 2.63578 10.8213 2.63865 10.8055C2.64152 10.7855 2.64583 10.7668 2.65015 10.7467C2.65446 10.7224 2.65877 10.698 2.66452 10.6751V10.6708L2.66883 10.655V10.6521C2.67458 10.6234 2.68176 10.5933 2.68751 10.5646C2.69613 10.5245 2.70476 10.4829 2.71482 10.4428C2.722 10.4127 2.72919 10.3811 2.73637 10.351C2.74356 10.3209 2.75074 10.2908 2.75793 10.2592C2.76655 10.2234 2.77517 10.1875 2.78523 10.1503C2.79242 10.1216 2.7996 10.0929 2.80823 10.0628C2.81685 10.0298 2.82547 9.99827 2.83409 9.96529C2.83984 9.94522 2.84559 9.92514 2.85134 9.90507C2.85709 9.88499 2.86284 9.86492 2.86859 9.84485C2.87433 9.82477 2.88008 9.8047 2.88583 9.78462C2.89158 9.76455 2.89733 9.74448 2.90451 9.7244C2.91601 9.68425 2.92894 9.64411 2.94188 9.60539C2.94763 9.58532 2.95481 9.56524 2.96056 9.54517C2.97637 9.49642 2.99218 9.4491 3.00798 9.40035C3.01804 9.37167 3.02667 9.34299 3.03673 9.31432C3.04679 9.28707 3.05541 9.25983 3.06547 9.23259C3.07553 9.20534 3.08415 9.1781 3.09565 9.15086C3.10571 9.12361 3.11577 9.0978 3.12583 9.07056C3.14595 9.01607 3.16606 8.96302 3.18762 8.90997C3.19768 8.88272 3.20918 8.85692 3.21924 8.82967C3.2566 8.7379 3.2954 8.64614 3.33564 8.5558C3.34283 8.5386 3.35001 8.52283 3.3572 8.50562C3.36438 8.48841 3.37157 8.47264 3.38019 8.45543C3.40606 8.39808 3.43193 8.34216 3.45923 8.2848C3.4736 8.25469 3.48798 8.22458 3.50235 8.1959C3.51672 8.16579 3.53109 8.13712 3.54546 8.107C3.56702 8.06256 3.59001 8.01811 3.61157 7.97509C3.62306 7.95358 3.63456 7.93064 3.64606 7.90913C3.65755 7.88762 3.66905 7.86468 3.68055 7.84317C3.71073 7.78582 3.74234 7.72703 3.7754 7.66968C3.78689 7.64817 3.79839 7.62809 3.81132 7.60659C3.83 7.57217 3.85012 7.53919 3.86881 7.50622C3.87599 7.49331 3.88461 7.47897 3.8918 7.46607C3.9191 7.41875 3.94641 7.37287 3.97515 7.32698C3.99096 7.29974 4.00821 7.27393 4.02401 7.24669C4.03982 7.22088 4.05563 7.19507 4.07287 7.16926C4.09156 7.13915 4.11024 7.11047 4.13036 7.08036C4.14473 7.05742 4.16054 7.03304 4.17635 7.0101C4.19359 6.98429 4.21084 6.95705 4.22808 6.93124C4.25826 6.88535 4.28988 6.8409 4.32149 6.79502C4.33586 6.77351 4.35167 6.75344 4.36604 6.73193C4.38472 6.70612 4.40197 6.68031 4.42065 6.6545C4.44652 6.61722 4.47383 6.58137 4.49969 6.54553C4.52556 6.50968 4.55287 6.47383 4.58017 6.43799C4.63765 6.49821 4.69514 6.55843 4.75262 6.61865C4.76987 6.63586 4.78711 6.6545 4.80436 6.67171C4.85753 6.72619 4.91214 6.77925 4.96675 6.8323C4.98256 6.84807 4.99837 6.86385 5.01417 6.87818C5.04579 6.9083 5.07741 6.93841 5.10902 6.96852C5.16507 7.02157 5.22112 7.07319 5.2786 7.12481C5.29728 7.14201 5.3174 7.15922 5.33608 7.17643C5.38926 7.22374 5.44243 7.26963 5.4956 7.31551C5.52722 7.34276 5.56027 7.37143 5.59189 7.39724C5.63069 7.43022 5.66949 7.4632 5.70973 7.49475C5.73991 7.52055 5.77153 7.54493 5.80314 7.56931C5.83332 7.59368 5.8635 7.61806 5.89512 7.641C5.9253 7.66537 5.95547 7.68832 5.98709 7.71269C6.04889 7.76001 6.11212 7.80733 6.17391 7.85321C6.18972 7.86468 6.20553 7.87615 6.2199 7.88762C6.24433 7.90483 6.26732 7.92204 6.29176 7.93924C6.31762 7.95788 6.34493 7.97652 6.3708 7.99516C6.41678 8.02671 6.46277 8.05969 6.50876 8.0898C6.52888 8.10414 6.55043 8.11848 6.57055 8.13138L6.58349 8.13998C6.60361 8.15432 6.62516 8.16723 6.64528 8.18157H6.64672C6.67546 8.20164 6.70564 8.22171 6.73438 8.24035C6.75881 8.25613 6.78324 8.2719 6.80767 8.28767C6.83354 8.30488 6.86085 8.32208 6.88815 8.33786C6.9054 8.34933 6.92408 8.3608 6.94132 8.37084C6.95857 8.38231 6.97725 8.39234 6.9945 8.40381C7.01174 8.41529 7.02899 8.42532 7.04623 8.43536C7.06348 8.4454 7.08072 8.45687 7.09797 8.4669C7.13102 8.48698 7.16407 8.50562 7.19713 8.52569L7.21294 8.5343C7.24455 8.55294 7.27617 8.57158 7.30778 8.58878C7.3782 8.62893 7.44862 8.66765 7.51904 8.70636C7.55497 8.725 7.59089 8.74507 7.62538 8.76371L7.6297 8.76228Z" fill="#C5E5D0"/>'
                + '<path d="M23.5381 12.3842H19.0156C18.9696 11.0952 18.7354 9.87212 18.3689 8.76231C18.5126 8.68775 18.6534 8.60889 18.7928 8.52859C18.8316 8.50708 18.8704 8.48414 18.9078 8.4612C18.938 8.44256 18.9696 8.42392 19.0012 8.40528C19.0357 8.38377 19.0702 8.3637 19.1047 8.34219C19.1722 8.30061 19.2412 8.25616 19.3073 8.21171C19.3318 8.19594 19.3547 8.18016 19.3792 8.16439L19.3892 8.15722C19.4079 8.14432 19.4266 8.13285 19.4467 8.11994C19.464 8.10847 19.4812 8.097 19.497 8.08553L19.5056 8.07979H19.5071C19.5401 8.05542 19.5732 8.03247 19.6062 8.00953C19.6393 7.98659 19.6723 7.96365 19.704 7.94071C19.7298 7.9235 19.7543 7.90486 19.7801 7.88622C19.7945 7.87618 19.8089 7.86615 19.8232 7.85468L19.8405 7.84177C19.8664 7.82313 19.8922 7.80449 19.9167 7.78585C19.9411 7.76721 19.9655 7.75 19.9885 7.73136C20.0129 7.71416 20.0359 7.69552 20.0604 7.67688C20.0949 7.64963 20.1308 7.62239 20.1638 7.59515C20.1926 7.57221 20.2228 7.54926 20.2515 7.52489C20.2817 7.50051 20.3119 7.47614 20.342 7.45033L20.3794 7.41878L20.3952 7.40588C20.4153 7.38867 20.4354 7.3729 20.4556 7.35426L20.4728 7.33992C20.5044 7.31411 20.5346 7.28687 20.5662 7.25962C20.5792 7.24815 20.5921 7.23668 20.605 7.22521C20.6582 7.17789 20.7128 7.13058 20.7645 7.08182C20.789 7.05888 20.8148 7.03594 20.8393 7.013C20.891 6.96425 20.9442 6.9155 20.9945 6.86531C21.0088 6.85241 21.0232 6.83807 21.0376 6.82373C21.0563 6.80652 21.0735 6.78788 21.0922 6.77068C21.1109 6.75347 21.1281 6.73483 21.1454 6.71762C21.1597 6.70328 21.1741 6.68895 21.187 6.67461C21.2115 6.65023 21.2359 6.62586 21.2589 6.60148C21.2761 6.58427 21.292 6.5685 21.3078 6.55129L21.3394 6.51832C21.3638 6.49251 21.3897 6.4667 21.4141 6.43945C21.4429 6.47673 21.4716 6.51545 21.4989 6.55273C21.5176 6.57854 21.5363 6.60291 21.5549 6.62872C21.5693 6.6488 21.5851 6.66887 21.5995 6.69038C21.6167 6.71475 21.634 6.73913 21.6512 6.76351C21.6742 6.79505 21.6958 6.82803 21.7173 6.85958C21.7389 6.89112 21.7605 6.92266 21.7806 6.95421C21.7978 6.98002 21.8151 7.00583 21.8323 7.03164C21.8582 7.07179 21.884 7.11194 21.9099 7.15208C21.9674 7.24098 22.022 7.33132 22.0766 7.42308C22.0953 7.45463 22.114 7.48474 22.1312 7.51628C22.147 7.54353 22.1628 7.57077 22.1786 7.59945C22.1916 7.62239 22.2045 7.6439 22.216 7.66684C22.2347 7.70125 22.2534 7.73423 22.2721 7.76864C22.2893 7.80162 22.308 7.8346 22.3252 7.86615L22.3454 7.90486C22.3626 7.93927 22.3813 7.97369 22.3985 8.0081C22.4086 8.02817 22.4201 8.04825 22.4301 8.06976C22.4517 8.11134 22.4718 8.15149 22.4919 8.19307C22.5063 8.22318 22.5207 8.25186 22.535 8.28197C22.548 8.31064 22.5624 8.33932 22.5753 8.368C22.5825 8.38521 22.5911 8.40098 22.5983 8.41818C22.6227 8.47267 22.6471 8.52716 22.6716 8.58164C22.6802 8.60172 22.6888 8.62323 22.6989 8.6433C22.7118 8.67341 22.7247 8.70352 22.7362 8.73363C22.7492 8.76374 22.7621 8.79529 22.7736 8.8254C22.7851 8.85264 22.7952 8.87989 22.8067 8.90713C22.8239 8.95158 22.8411 8.99603 22.8584 9.04048C22.8656 9.06199 22.8742 9.0835 22.8828 9.10357C22.8943 9.13512 22.9058 9.16666 22.9173 9.19677C22.9245 9.21541 22.9302 9.23405 22.9374 9.25126C22.9446 9.2699 22.9504 9.28854 22.9576 9.30718C22.9676 9.33442 22.9762 9.36167 22.9863 9.39034V9.39321C22.9964 9.41902 23.005 9.44626 23.0136 9.47351C23.0352 9.53803 23.0553 9.60255 23.0754 9.66851C23.0855 9.70149 23.0955 9.73304 23.1056 9.76602C23.1156 9.79899 23.1243 9.83197 23.1343 9.86352C23.1429 9.89506 23.153 9.92804 23.1616 9.95959C23.1702 9.99257 23.1789 10.0241 23.1875 10.0571C23.1947 10.0858 23.2033 10.1144 23.2105 10.1446C23.2205 10.1804 23.2292 10.2162 23.2378 10.2535C23.245 10.2836 23.2522 10.3123 23.2593 10.3424C23.2651 10.3668 23.2708 10.3912 23.2766 10.4141L23.2795 10.4256C23.2838 10.4414 23.2866 10.4571 23.2895 10.4729V10.4829C23.2981 10.5088 23.3025 10.5346 23.3082 10.5604C23.314 10.5891 23.3211 10.6192 23.3269 10.6478V10.6564L23.3355 10.6894V10.6923C23.3398 10.7081 23.3427 10.7238 23.3456 10.7382C23.3528 10.7755 23.3599 10.8127 23.3671 10.8514C23.3729 10.883 23.3786 10.9145 23.3844 10.9461C23.3872 10.9633 23.3901 10.9791 23.393 10.9963C23.3959 11.0135 23.3987 11.0292 23.4016 11.0465C23.4074 11.0794 23.4131 11.1138 23.4174 11.1468C23.4203 11.164 23.4232 11.1798 23.4246 11.197C23.4275 11.2128 23.4289 11.23 23.4318 11.2472C23.4419 11.316 23.4505 11.3834 23.4591 11.4522C23.4634 11.4867 23.4677 11.5196 23.472 11.554C23.4763 11.5885 23.4807 11.6214 23.4835 11.6558C23.4936 11.7419 23.5008 11.8265 23.508 11.9125C23.5108 11.9555 23.5151 11.9985 23.518 12.0416C23.5209 12.0846 23.5238 12.1276 23.5252 12.1706C23.5295 12.2394 23.5324 12.3097 23.5353 12.3785L23.5381 12.3842Z" fill="#C5E5D0"/>'
                + '<path d="M23.5454 12.7759C23.5454 14.8765 22.9289 16.8337 21.8655 18.4755C21.8497 18.4411 21.8324 18.4081 21.8166 18.3751C21.8037 18.3493 21.7922 18.3249 21.7793 18.2991C21.7649 18.2704 21.7505 18.2418 21.7361 18.2145L21.7318 18.2074C21.7203 18.1858 21.7103 18.1643 21.6988 18.1428C21.6873 18.1213 21.6758 18.0998 21.6643 18.0783C21.6456 18.0425 21.6255 18.0066 21.6054 17.9708L21.5867 17.9378L21.568 17.9048C21.5551 17.8804 21.5407 17.8561 21.5263 17.8317C21.5105 17.8044 21.4947 17.7772 21.4789 17.7514C21.4588 17.717 21.4387 17.684 21.4185 17.6496C21.3553 17.5435 21.2892 17.4402 21.2202 17.337C21.2015 17.3098 21.1829 17.2811 21.1642 17.2538C21.1512 17.2352 21.1383 17.2151 21.1254 17.195C21.0938 17.1477 21.0607 17.1018 21.0276 17.0545C21.0075 17.0258 20.9874 16.9986 20.9673 16.9699C20.9472 16.9427 20.927 16.9154 20.9069 16.8868C20.8868 16.8595 20.8667 16.8323 20.8451 16.805C20.8236 16.7749 20.8006 16.7462 20.7776 16.7176C20.7589 16.6932 20.7402 16.6703 20.7215 16.6459C20.6842 16.5986 20.6468 16.5512 20.608 16.5039C20.5893 16.481 20.5706 16.458 20.5505 16.4351C20.5247 16.4036 20.4988 16.3734 20.4729 16.3433C20.4499 16.3161 20.4269 16.2903 20.4039 16.263C20.3738 16.2286 20.345 16.1956 20.3148 16.1627C20.2789 16.1225 20.243 16.0838 20.2071 16.0451C20.1826 16.0178 20.1582 15.992 20.1323 15.9662C20.0547 15.8845 19.9757 15.8042 19.8952 15.7239C19.865 15.6938 19.8334 15.6637 19.8018 15.6336C19.7831 15.6164 19.7644 15.5977 19.7458 15.5805C19.7271 15.5619 19.707 15.5432 19.6868 15.526C19.6538 15.4945 19.6207 15.4644 19.5862 15.4343C19.5546 15.4056 19.523 15.3769 19.49 15.3482C19.4698 15.331 19.4497 15.3124 19.4282 15.2952C19.408 15.278 19.3865 15.2593 19.3664 15.2421C19.3247 15.2063 19.283 15.1719 19.2413 15.1375C19.1565 15.0672 19.0689 14.9984 18.9812 14.931C18.9525 14.908 18.9223 14.8865 18.8936 14.865C18.9783 14.2126 19.0243 13.5373 19.0243 12.8447C19.0243 12.8218 19.0243 12.7988 19.0243 12.7759H23.5454Z" fill="#C5E5D0"/>'
                + '<path d="M10.0123 4.66579C9.13131 5.57199 8.34091 6.82805 7.78762 8.3121L7.77325 8.3035C7.75026 8.29059 7.72583 8.27912 7.70283 8.26478L7.69565 8.26048C7.68128 8.25331 7.66691 8.24471 7.65254 8.23611H7.64966C7.63242 8.22463 7.61373 8.2146 7.59649 8.20456C7.48871 8.14434 7.38092 8.08268 7.27602 8.01816C7.26021 8.00955 7.24584 7.99952 7.23003 7.99091C7.16392 7.95077 7.09782 7.90918 7.03315 7.8676C7.00584 7.8504 6.97854 7.83319 6.95123 7.81455C6.92536 7.79734 6.8995 7.78014 6.87363 7.76436C6.84632 7.74716 6.82046 7.72852 6.79315 7.70988C6.76585 7.69124 6.73998 7.67403 6.71267 7.65539C6.67531 7.62958 6.63938 7.60521 6.60345 7.5794C6.5704 7.55645 6.53735 7.53351 6.50573 7.50914C6.48992 7.49767 6.47268 7.4862 6.45687 7.47472C6.43962 7.46182 6.42094 7.44891 6.4037 7.43458C6.38501 7.42167 6.36633 7.40733 6.34765 7.39299C6.3304 7.38009 6.31316 7.36718 6.29448 7.35285C6.27723 7.33994 6.25999 7.32704 6.24274 7.3127C6.22981 7.30266 6.21687 7.29262 6.20394 7.28259C6.17807 7.26251 6.1522 7.241 6.12634 7.22093L6.09759 7.19799L6.07173 7.17791C6.04586 7.15641 6.01999 7.13633 5.99412 7.11482L5.98837 7.10909C5.95388 7.08185 5.92083 7.05317 5.88778 7.02593C5.85472 6.99868 5.82311 6.97144 5.79006 6.94276C5.76706 6.92412 5.74551 6.90405 5.72395 6.88541C5.70096 6.86677 5.6794 6.84669 5.65784 6.82662C5.63629 6.80798 5.61329 6.7879 5.59174 6.76783C5.57018 6.74776 5.54862 6.72912 5.52707 6.70904C5.5012 6.68467 5.47389 6.66029 5.44803 6.63591C5.41641 6.6058 5.38479 6.57569 5.35318 6.54558L5.33018 6.52407C5.30575 6.4997 5.27988 6.47532 5.25545 6.45095C5.22671 6.42227 5.19797 6.39359 5.16923 6.36491C5.14049 6.33624 5.11318 6.30756 5.08444 6.27888L5.05857 6.25164C5.02983 6.22296 5.00252 6.19428 4.97522 6.16417C4.9436 6.13119 4.91199 6.09678 4.88037 6.06237C5.7958 4.95973 6.93399 4.04636 8.2245 3.38965C8.25755 3.42263 8.29061 3.45417 8.32366 3.48572L8.36246 3.52156L8.37683 3.5359C8.39264 3.55024 8.40845 3.56458 8.42426 3.57892C8.45587 3.6076 8.48749 3.63627 8.52054 3.66495C8.53779 3.67929 8.5536 3.69363 8.57084 3.70797L8.59671 3.72947L8.62258 3.75098C8.63982 3.76532 8.65707 3.77966 8.67431 3.79543C8.70018 3.81694 8.72605 3.83845 8.75335 3.85996C8.77922 3.88146 8.80653 3.90154 8.83383 3.92305C8.86688 3.94886 8.89994 3.97323 8.93299 3.99904C8.95311 4.01338 8.97179 4.02915 8.99191 4.04206C9.01634 4.0607 9.04221 4.0779 9.06664 4.09654C9.09107 4.11375 9.1155 4.13096 9.13993 4.14816C9.16005 4.1625 9.18017 4.17684 9.20173 4.18974C9.27646 4.23993 9.35119 4.28868 9.42879 4.336L9.44316 4.3446C9.47909 4.36611 9.51502 4.38905 9.55094 4.40913C9.57825 4.4249 9.60555 4.4421 9.6343 4.45788C9.65298 4.46935 9.67166 4.47938 9.69178 4.48942C9.71046 4.50089 9.73058 4.51093 9.74926 4.52097C9.77369 4.53387 9.79669 4.54678 9.82112 4.55968C9.84699 4.57402 9.87285 4.58692 9.89872 4.59983C9.93896 4.62134 9.9792 4.64141 10.0194 4.66148L10.0123 4.66579Z" fill="#C5E5D0"/>'
                + '<path d="M21.1254 6.06679C21.0996 6.09547 21.0722 6.12272 21.0464 6.15139C21.0291 6.17003 21.0119 6.18724 20.9946 6.20588C20.9803 6.22022 20.9659 6.23599 20.9515 6.25033C20.9386 6.26323 20.9257 6.27757 20.9127 6.29048C20.8941 6.31055 20.8754 6.33063 20.8552 6.34927C20.8222 6.38224 20.7891 6.41522 20.7561 6.44677L20.7202 6.48118C20.6914 6.50842 20.6641 6.53567 20.6354 6.56291C20.6023 6.59446 20.5678 6.62743 20.5333 6.65755C20.4744 6.71203 20.4155 6.76652 20.3551 6.81957C20.3365 6.83678 20.3178 6.85255 20.2991 6.86976L20.2948 6.87263C20.279 6.88696 20.2617 6.9013 20.2445 6.91564L20.2315 6.92711L20.1999 6.95436C20.1396 7.00597 20.0778 7.05759 20.016 7.10778L19.9815 7.13646L19.9772 7.14076C19.9513 7.16227 19.9254 7.18234 19.8996 7.20385C19.8636 7.23253 19.8263 7.2612 19.7904 7.28988C19.7602 7.31425 19.7286 7.3372 19.6984 7.36014L19.6625 7.38738L19.6481 7.39742C19.6323 7.40889 19.6165 7.42179 19.6007 7.43327L19.5892 7.44187C19.569 7.45621 19.5489 7.47198 19.5288 7.48632L19.5144 7.49636L19.4756 7.52503C19.4397 7.55084 19.4038 7.57665 19.3679 7.60246C19.3449 7.61823 19.3219 7.63401 19.2989 7.64978C19.2687 7.67129 19.2385 7.69136 19.2069 7.71287C19.1422 7.75732 19.0761 7.80033 19.01 7.84335C18.9827 7.86056 18.9554 7.8792 18.9267 7.8964C18.8965 7.91648 18.8663 7.93512 18.8361 7.95376H18.8347L18.8045 7.97383C18.7743 7.99247 18.7456 8.00968 18.7168 8.02832C18.6838 8.04839 18.6507 8.06847 18.6177 8.08854C18.5516 8.12726 18.484 8.16597 18.4165 8.20468C18.3906 8.21902 18.3648 8.23336 18.3389 8.2477L18.3044 8.26634L18.2656 8.28785C18.2483 8.29788 18.2297 8.30792 18.2124 8.31653C17.6577 6.83248 16.8673 5.57498 15.9878 4.67021C16.0093 4.66017 16.0295 4.65014 16.0496 4.63867C16.0711 4.62863 16.0913 4.61716 16.1114 4.60712C16.1286 4.59852 16.1444 4.58992 16.1602 4.58131C16.1933 4.56411 16.2264 4.54547 16.2594 4.52826C16.2838 4.51535 16.3068 4.50245 16.3313 4.48811C16.3657 4.46947 16.3988 4.4494 16.4319 4.43076L16.4649 4.41068C16.4893 4.39634 16.5123 4.38201 16.5368 4.36767C16.5598 4.35333 16.5828 4.34042 16.6043 4.32608C16.6618 4.29024 16.7193 4.25296 16.7753 4.21568C16.8098 4.19274 16.8443 4.16836 16.8788 4.14398C16.9004 4.12965 16.9205 4.11531 16.942 4.09953C16.9593 4.08663 16.978 4.07372 16.9952 4.06082C17.0081 4.05078 17.0211 4.04218 17.034 4.03214L17.0728 4.00347C17.0929 3.98913 17.113 3.97335 17.1332 3.95758L17.1447 3.94898C17.1705 3.9289 17.1964 3.90883 17.2223 3.88732L17.2424 3.87155C17.2711 3.84861 17.2999 3.82567 17.3272 3.80272C17.3415 3.79125 17.3573 3.77835 17.3717 3.76544C17.4033 3.7382 17.435 3.71239 17.4666 3.68515C17.547 3.61489 17.6246 3.54463 17.7008 3.47007C17.7267 3.44569 17.7526 3.41988 17.7784 3.39551C19.0689 4.05222 20.2071 4.96559 21.1225 6.06823L21.1254 6.06679Z" fill="#C5E5D0"/>'
                + '<path d="M15.1874 4.44645C15.0078 4.51384 14.8238 4.57263 14.637 4.62282C14.6155 4.62855 14.5939 4.63429 14.5724 4.64002C14.558 4.64432 14.5422 4.64719 14.5264 4.65149C14.5106 4.65579 14.4933 4.6601 14.4775 4.66296C14.3166 4.70168 14.1542 4.73466 13.9875 4.76047C13.963 4.76477 13.9386 4.76763 13.9127 4.77194C13.8883 4.7748 13.8624 4.77911 13.838 4.78197C13.8136 4.78484 13.7877 4.78914 13.7633 4.79201C13.7388 4.79488 13.713 4.79775 13.6885 4.80061L13.6382 4.80635C13.6181 4.80778 13.5994 4.81065 13.5793 4.81209C13.5233 4.81782 13.4672 4.82212 13.4112 4.82499C13.3939 4.82499 13.3781 4.82642 13.3609 4.82786H13.3508C13.3293 4.82929 13.3077 4.83073 13.2862 4.83216C13.2387 4.83359 13.1913 4.83646 13.1424 4.83789C13.095 4.83789 13.0462 4.83789 12.9987 4.83789C12.9513 4.83789 12.9024 4.83789 12.855 4.83789C12.8076 4.83789 12.7602 4.83503 12.7113 4.83216C12.6898 4.83216 12.6682 4.83073 12.6466 4.82929H12.6366C12.6193 4.82786 12.6035 4.82642 12.5863 4.82642C12.5302 4.82356 12.4742 4.81782 12.4181 4.81352C12.398 4.81208 12.3793 4.81065 12.3592 4.80778L12.3089 4.80205C12.2845 4.79918 12.2586 4.79631 12.2342 4.79344C12.2098 4.79058 12.1839 4.78771 12.1595 4.78341C12.135 4.78054 12.1092 4.77624 12.0847 4.77337C12.0603 4.7705 12.0344 4.7662 12.01 4.7619C11.8447 4.73609 11.6809 4.70311 11.52 4.6644C11.5042 4.6601 11.4869 4.65579 11.4711 4.65293C11.4553 4.64862 11.4409 4.64576 11.4251 4.64146C11.4036 4.63572 11.382 4.62998 11.359 4.62425C11.1722 4.57406 10.9882 4.51528 10.8086 4.44788C11.5286 3.85713 12.2859 3.52734 12.9959 3.52734C13.7058 3.52734 14.4631 3.85857 15.1831 4.44788L15.1874 4.44645Z" fill="#C5E5D0"/>'
                + '<path d="M17.8617 8.49259C17.8387 8.50406 17.8157 8.51553 17.7927 8.52557C17.7697 8.53704 17.7467 8.54708 17.7237 8.55855C17.6777 8.58006 17.6317 8.60156 17.5857 8.62307C17.5397 8.64458 17.4923 8.66609 17.4449 8.68616C17.3975 8.70624 17.35 8.72631 17.3041 8.74638C17.2811 8.75642 17.2566 8.76646 17.2322 8.7765C17.2078 8.78653 17.1848 8.79657 17.1603 8.80517C17.1388 8.81378 17.1158 8.82238 17.0942 8.83242C17.0684 8.84245 17.0425 8.85249 17.0181 8.86253C16.9865 8.87543 16.9534 8.8869 16.9218 8.89981C16.8586 8.92418 16.7939 8.94856 16.7292 8.9715C16.6818 8.98871 16.6329 9.00448 16.5855 9.02169C16.5453 9.03459 16.505 9.04893 16.4648 9.06183C16.4447 9.06757 16.426 9.07474 16.4059 9.08047L16.3944 9.08334C16.38 9.08764 16.3671 9.09195 16.3527 9.09625L16.3426 9.09911C16.3182 9.10772 16.2938 9.11489 16.2679 9.12206C16.186 9.14787 16.1055 9.17081 16.0236 9.19518C15.9834 9.20665 15.9417 9.21813 15.9015 9.2296C15.8411 9.24537 15.7807 9.26258 15.7189 9.27691C15.7046 9.28122 15.6902 9.28408 15.6758 9.28838H15.6672C15.6255 9.30129 15.5839 9.31133 15.5436 9.31993L15.5307 9.3228C15.5077 9.32853 15.4833 9.33427 15.4603 9.33857L15.4488 9.34144C15.4301 9.34574 15.4114 9.35004 15.3927 9.35434L15.3755 9.35721C15.3525 9.36151 15.3295 9.36725 15.3079 9.37155C15.2792 9.37728 15.2519 9.38302 15.2231 9.38876C15.203 9.39306 15.1843 9.39736 15.1642 9.40023C15.1211 9.40883 15.078 9.41743 15.0334 9.4246C15.009 9.4289 14.9846 9.43321 14.9601 9.43751L14.9472 9.44037C14.93 9.44324 14.9142 9.44611 14.8969 9.44898C14.8667 9.45471 14.838 9.45901 14.8078 9.46332C14.7891 9.46618 14.769 9.47049 14.7503 9.47335L14.723 9.47765C14.6914 9.48339 14.6598 9.48769 14.6282 9.49199H14.6253C14.5779 9.49916 14.5305 9.50633 14.483 9.51207C14.4442 9.5178 14.4054 9.5221 14.3652 9.52641H14.3508C14.3307 9.53071 14.3106 9.53358 14.2905 9.53501L14.2689 9.53788C14.256 9.53788 14.243 9.54075 14.2301 9.54218H14.2215C14.187 9.54648 14.1539 9.55078 14.1209 9.55365C14.0921 9.55652 14.0648 9.55939 14.0361 9.56225C14.0088 9.56512 13.98 9.56799 13.9513 9.56942C13.9283 9.57086 13.9053 9.57372 13.8838 9.57516H13.8723C13.8521 9.57802 13.8306 9.57946 13.8105 9.58089H13.8047C13.7803 9.58233 13.7544 9.58519 13.7286 9.58663C13.6466 9.59236 13.5647 9.59666 13.4814 9.59953C13.4641 9.59953 13.4469 9.60097 13.4296 9.60097H13.3995C13.3678 9.60383 13.3348 9.60383 13.3032 9.60527C13.2586 9.60527 13.2141 9.60814 13.171 9.60814H13.1293C13.0876 9.60814 13.0459 9.60814 13.0028 9.60814C12.9597 9.60814 12.9195 9.60814 12.8764 9.60814H12.8347C12.7901 9.60814 12.7456 9.6067 12.7025 9.60527C12.6694 9.60527 12.6378 9.60384 12.6062 9.6024H12.576C12.5588 9.60097 12.5415 9.59953 12.5243 9.59953C12.4912 9.5981 12.4582 9.59667 12.4237 9.59523C12.4079 9.59523 12.3921 9.5938 12.3762 9.59236H12.3647C12.336 9.59093 12.3087 9.58806 12.28 9.58663C12.2656 9.58663 12.2527 9.58519 12.2383 9.58376H12.2225C12.1894 9.58089 12.1578 9.57802 12.1248 9.57516H12.0989C12.0644 9.57086 12.0299 9.56655 11.9954 9.56369L11.9624 9.56082C11.9207 9.55652 11.879 9.55222 11.8373 9.54791H11.8172L11.7798 9.54218C11.7425 9.53788 11.7037 9.53358 11.6663 9.52927C11.6189 9.52354 11.5715 9.5178 11.5226 9.51063C11.4809 9.5049 11.4393 9.49916 11.3976 9.49343C11.3343 9.48482 11.2726 9.47479 11.2093 9.46475C11.1777 9.45901 11.1447 9.45471 11.113 9.44898L11.0814 9.44324C11.0441 9.43607 11.0053 9.43034 10.9679 9.42317C10.955 9.4203 10.942 9.41743 10.9291 9.416C10.8874 9.4074 10.8457 9.40023 10.8041 9.39162C10.7681 9.38445 10.7336 9.37728 10.6977 9.37011C10.679 9.36581 10.6589 9.36295 10.6402 9.35721H10.6302C10.5942 9.34717 10.5569 9.34 10.5209 9.3314C10.4821 9.3228 10.4419 9.31276 10.4031 9.30416L10.3873 9.29986C10.3672 9.29555 10.3471 9.28982 10.3284 9.28552H10.3241C10.3111 9.28122 10.2982 9.27835 10.2853 9.27548L10.2766 9.27261C10.2508 9.26688 10.2263 9.25971 10.2005 9.25254C10.1789 9.2468 10.1574 9.24107 10.1344 9.23533C10.1143 9.2296 10.0941 9.2253 10.074 9.21956C10.0453 9.21239 10.0165 9.20379 9.98779 9.19662C9.95904 9.18801 9.9303 9.18085 9.90156 9.17224C9.86994 9.16364 9.83976 9.15504 9.80959 9.145C9.76935 9.13353 9.72911 9.12062 9.68887 9.10772C9.64288 9.09338 9.59833 9.07904 9.55234 9.0647C9.50636 9.05036 9.46181 9.03459 9.41726 9.01882C9.38277 9.00735 9.34684 8.99444 9.31235 8.98154C9.29942 8.97724 9.28648 8.9715 9.27355 8.9672C9.19594 8.93996 9.11834 8.91128 9.04217 8.88117C9.01631 8.87113 8.989 8.86109 8.96313 8.85106C8.94301 8.84389 8.92289 8.83528 8.90134 8.82668C8.88122 8.81808 8.85966 8.81091 8.83954 8.80231C8.79787 8.78653 8.75763 8.76933 8.71739 8.75212H8.71452L8.68721 8.73922H8.6829V8.73635C8.65703 8.72631 8.63116 8.71484 8.6053 8.70337C8.53632 8.67469 8.46877 8.64458 8.40123 8.61304C8.36961 8.5987 8.338 8.58436 8.30638 8.56859L8.29488 8.56285L8.27333 8.55281H8.26902V8.54995C8.24746 8.53991 8.22734 8.53131 8.20722 8.52127C8.18566 8.51123 8.16267 8.49976 8.14111 8.48972C8.69296 6.97413 9.4963 5.70659 10.3859 4.8305L10.4002 4.83624C10.4204 4.84484 10.4405 4.85345 10.4592 4.86062C10.5483 4.89646 10.6374 4.93088 10.7279 4.96242C10.7509 4.97102 10.7739 4.97819 10.7969 4.9868C10.8199 4.9954 10.8429 5.00257 10.8659 5.00974C10.9118 5.02551 10.9578 5.03985 11.0053 5.05419C11.0311 5.06279 11.0584 5.06996 11.0843 5.07856C11.1375 5.09434 11.1906 5.10867 11.2438 5.12301C11.2682 5.12875 11.2927 5.13592 11.3171 5.14165C11.3387 5.14739 11.3602 5.15312 11.3818 5.15743C11.3976 5.16173 11.4148 5.16603 11.4306 5.1689C11.4536 5.17463 11.4766 5.18037 11.5011 5.18467C11.5485 5.19614 11.5945 5.20618 11.6419 5.21478C11.6721 5.22052 11.7022 5.22769 11.7339 5.23199C11.8373 5.25206 11.9408 5.26927 12.0457 5.28361C12.0586 5.28504 12.073 5.28791 12.086 5.28934C12.0989 5.29077 12.1133 5.29364 12.1262 5.29508L12.1607 5.29938H12.1736C12.1923 5.30368 12.211 5.30511 12.2297 5.30798C12.2455 5.30942 12.2627 5.31228 12.28 5.31372C12.2943 5.31515 12.3087 5.31658 12.3231 5.31802C12.3446 5.32089 12.3662 5.32232 12.3877 5.32375C12.4093 5.32519 12.4309 5.32805 12.4524 5.32949C12.4682 5.32949 12.4826 5.33236 12.4984 5.33236C12.5171 5.33236 12.5358 5.33522 12.5544 5.33666H12.5861C12.6565 5.34383 12.7283 5.3467 12.8002 5.34813C12.8232 5.34813 12.8462 5.34813 12.8692 5.34956H12.9209C12.9496 5.34956 12.9784 5.34956 13.0071 5.34956C13.0359 5.34956 13.0646 5.34956 13.0934 5.34956C13.1106 5.34956 13.1278 5.34956 13.1451 5.34956C13.1681 5.34956 13.1911 5.34956 13.2141 5.34813C13.2859 5.3467 13.3578 5.34239 13.4282 5.33809H13.4598C13.4785 5.33522 13.4972 5.33379 13.5159 5.33236C13.5317 5.33236 13.546 5.32949 13.5619 5.32949C13.5834 5.32805 13.605 5.32662 13.6265 5.32375C13.6481 5.32232 13.6696 5.31945 13.6898 5.31802C13.7041 5.31802 13.7185 5.31515 13.7329 5.31372C13.7501 5.31228 13.7659 5.31085 13.7832 5.30798C13.8018 5.30655 13.8205 5.30368 13.8392 5.30225H13.8521L13.8866 5.29651C13.8996 5.29651 13.9139 5.29364 13.9269 5.29077C13.9398 5.28934 13.9542 5.28791 13.9671 5.28504C14.0102 5.2793 14.0519 5.27213 14.0936 5.26497C14.1079 5.26353 14.1223 5.26066 14.1367 5.2578C14.1496 5.25636 14.164 5.25349 14.1769 5.25063C14.1899 5.24919 14.2042 5.24632 14.2172 5.24346C14.256 5.23629 14.2948 5.22912 14.3336 5.22195C14.3523 5.21908 14.3709 5.21478 14.3882 5.21048C14.4097 5.20618 14.4313 5.20188 14.4543 5.19614C14.4845 5.1904 14.5132 5.18323 14.5434 5.17607C14.5736 5.1689 14.6037 5.16173 14.6339 5.15456C14.6569 5.14882 14.6814 5.14309 14.7043 5.13735C14.7273 5.13162 14.7518 5.12588 14.7748 5.11871H14.7762C14.8006 5.11154 14.8251 5.10581 14.8495 5.09864C14.8754 5.09147 14.9012 5.0843 14.9271 5.0757C14.953 5.06853 14.9803 5.05992 15.0061 5.05132L15.0248 5.04558C15.0478 5.03841 15.0708 5.03125 15.0938 5.02408C15.1427 5.0083 15.1915 4.9911 15.2404 4.97532L15.2763 4.96242C15.3151 4.94952 15.3539 4.93518 15.3927 4.9194C15.4143 4.9108 15.4358 4.90363 15.4574 4.89503C15.4861 4.88499 15.5134 4.87352 15.5407 4.86205C15.5637 4.85201 15.5867 4.84341 15.6112 4.83337L15.6241 4.82764C16.5122 5.70373 17.3156 6.97126 17.8688 8.48686L17.8617 8.49259Z" fill="#C5E5D0"/>'
                + '<path d="M18.6162 12.3841H7.38379C7.4269 11.1596 7.64534 9.99673 7.9845 8.94141L7.99599 8.94571C8.03911 8.96722 8.08366 8.98872 8.12821 9.0088C8.17563 9.03174 8.22449 9.05325 8.27335 9.07476C8.31503 9.09483 8.35814 9.11347 8.40126 9.13068L8.42712 9.14215C8.47024 9.16079 8.51191 9.17943 8.55502 9.19663L8.56796 9.20237C8.61538 9.22101 8.66281 9.24108 8.71023 9.25972C8.7361 9.26976 8.76197 9.2798 8.78784 9.28984C8.86113 9.31851 8.93442 9.34576 9.00771 9.373L9.04508 9.3859L9.07813 9.39737C9.11118 9.40885 9.14424 9.42175 9.17729 9.43322C9.20603 9.44326 9.23334 9.4533 9.26208 9.46333C9.2822 9.4705 9.30088 9.47624 9.321 9.48341C9.34974 9.49344 9.37704 9.50205 9.40579 9.51208C9.42447 9.51782 9.44315 9.52355 9.46183 9.53072H9.46471C9.49201 9.54076 9.51932 9.54936 9.54662 9.55797C9.58255 9.56944 9.61848 9.58091 9.65441 9.59095C9.68746 9.60098 9.71907 9.61102 9.75213 9.61962C9.82542 9.64113 9.89871 9.6612 9.972 9.68128C9.98925 9.68558 10.0065 9.69132 10.0237 9.69562C10.0568 9.70422 10.0884 9.71282 10.1215 9.72143C10.1459 9.7286 10.1718 9.73433 10.1962 9.74007H10.1991C10.212 9.74437 10.2249 9.74724 10.2393 9.7501L10.2551 9.75441C10.2867 9.76301 10.3183 9.77018 10.3514 9.77735C10.3686 9.78165 10.3859 9.78595 10.4046 9.79025C10.4218 9.79455 10.4391 9.79886 10.4577 9.80172H10.4621C10.4965 9.81033 10.531 9.8175 10.5655 9.82467C10.5856 9.82897 10.6072 9.83327 10.6273 9.83757C10.7006 9.85334 10.7725 9.86768 10.8458 9.88202C10.8601 9.88489 10.8745 9.88776 10.8889 9.89062L10.9162 9.89493C10.9521 9.90209 10.988 9.90783 11.0225 9.91357C11.0728 9.92217 11.1217 9.93077 11.172 9.93794C11.2194 9.94511 11.2654 9.95228 11.3128 9.95945C11.3617 9.96662 11.4105 9.97379 11.4594 9.97952L11.4968 9.98526C11.5384 9.99099 11.5801 9.9953 11.6204 10.001C11.6707 10.0068 11.721 10.0125 11.7713 10.0182C11.8675 10.0283 11.9653 10.0383 12.063 10.0455H12.0817C12.1736 10.0541 12.2656 10.0598 12.3576 10.0656C12.3763 10.0656 12.3964 10.067 12.4151 10.0684C12.4984 10.0727 12.5832 10.0756 12.668 10.0785C12.6867 10.0785 12.7054 10.0785 12.7226 10.0799C12.7542 10.0799 12.7873 10.0813 12.8189 10.0813C12.8347 10.0813 12.8505 10.0813 12.8678 10.0813C12.9123 10.0813 12.9569 10.0813 13.0014 10.0813C13.046 10.0813 13.0905 10.0813 13.1351 10.0813C13.1509 10.0813 13.1681 10.0813 13.1839 10.0813C13.2155 10.0813 13.2486 10.0813 13.2802 10.0799C13.2989 10.0799 13.3176 10.0799 13.3348 10.0785C13.4196 10.077 13.503 10.0727 13.5877 10.0684C13.6064 10.0684 13.6265 10.067 13.6452 10.0656C13.6797 10.0641 13.7142 10.0613 13.7487 10.0598C13.7659 10.0598 13.7846 10.057 13.8019 10.057C13.8824 10.0512 13.9628 10.0455 14.0433 10.0369H14.0447C14.0591 10.0369 14.0749 10.034 14.0893 10.0326H14.1065C14.1267 10.0297 14.1468 10.0268 14.1655 10.0254L14.1899 10.0225C14.2086 10.0211 14.2287 10.0182 14.2474 10.0168C14.2919 10.0125 14.3365 10.0068 14.381 10.0025C14.4198 9.99816 14.4572 9.99386 14.496 9.98813H14.5104C14.5233 9.98526 14.5377 9.98382 14.5506 9.98096L14.5693 9.97809C14.5865 9.97665 14.6038 9.97379 14.6196 9.97092L14.6555 9.96518C14.6756 9.96232 14.6957 9.95945 14.7159 9.95658C14.7389 9.95371 14.7604 9.94941 14.7834 9.94654C14.8064 9.94368 14.828 9.93938 14.851 9.93651H14.861C14.8998 9.92934 14.9386 9.92217 14.9789 9.915C15.0148 9.90926 15.0507 9.90209 15.0852 9.89636C15.1039 9.89349 15.1226 9.88919 15.1427 9.88632C15.1729 9.88059 15.203 9.87485 15.2318 9.86912C15.2548 9.86481 15.2763 9.86051 15.2993 9.85621C15.3295 9.85048 15.3611 9.84331 15.3927 9.83757C15.4143 9.83327 15.4359 9.82897 15.4588 9.82323C15.512 9.81176 15.5638 9.80029 15.6169 9.78739C15.6701 9.77591 15.7218 9.76301 15.7736 9.7501C15.7937 9.7458 15.8138 9.74007 15.8339 9.73577C15.8541 9.73146 15.8742 9.72573 15.8943 9.71999C15.9245 9.71282 15.9546 9.70422 15.9863 9.69562C16.0006 9.69275 16.0136 9.68845 16.0279 9.68415C16.1055 9.66264 16.1817 9.64256 16.2579 9.61962C16.2794 9.61389 16.2996 9.60672 16.3211 9.60098H16.324C16.3427 9.59381 16.3628 9.58951 16.3815 9.58234L16.3944 9.57804C16.4145 9.57231 16.4332 9.56657 16.4533 9.5594C16.472 9.55367 16.4907 9.54793 16.5094 9.5422L16.5194 9.53933H16.5209C16.5453 9.53072 16.5697 9.52355 16.5942 9.51495C16.6258 9.50491 16.656 9.49488 16.6876 9.48341C16.7206 9.47194 16.7551 9.46046 16.7882 9.44899L16.8083 9.44182C16.8356 9.43322 16.8615 9.42318 16.8888 9.41315C16.9649 9.3859 17.0411 9.35866 17.1173 9.32855C17.1302 9.32281 17.1446 9.31851 17.1589 9.31278C17.1862 9.30274 17.2135 9.2927 17.2409 9.28123C17.2595 9.27406 17.2768 9.26689 17.2955 9.25972C17.3443 9.23965 17.3932 9.21958 17.442 9.1995C17.465 9.18947 17.4895 9.17943 17.5125 9.17082L17.5829 9.14071C17.6447 9.1149 17.705 9.08766 17.7654 9.06042C17.7941 9.04751 17.8214 9.03461 17.8502 9.0217C17.9077 8.99589 17.9652 8.96865 18.0212 8.94141C18.3604 9.99673 18.5774 11.1596 18.6219 12.3841H18.6162Z" fill="#C5E5D0"/>'
                + '<path d="M18.6247 12.8433C18.6247 13.4441 18.5902 14.0306 18.5256 14.5998L18.5169 14.5941C18.4882 14.5754 18.4609 14.5568 18.4322 14.5367C18.4005 14.5166 18.3689 14.4951 18.3373 14.4751C18.3186 14.4636 18.3014 14.4521 18.2827 14.4392C18.2554 14.422 18.2281 14.4048 18.2008 14.3876C18.1735 14.3704 18.1462 14.3532 18.1189 14.3374C18.0111 14.2715 17.9033 14.2084 17.7941 14.1467C17.7582 14.1266 17.7222 14.1066 17.6849 14.0865L17.6518 14.0693L17.6216 14.0535C17.5368 14.0091 17.4521 13.9646 17.3673 13.923C17.3385 13.9087 17.3112 13.8958 17.2825 13.8814C17.2537 13.8671 17.225 13.8542 17.1977 13.8413C17.1675 13.827 17.1388 13.8141 17.1086 13.7997C17.0525 13.7739 16.9951 13.7481 16.939 13.7237C16.9175 13.7137 16.8945 13.7051 16.8729 13.695C16.847 13.6836 16.8197 13.6721 16.7939 13.6606C16.7407 13.6391 16.6875 13.6162 16.6343 13.5961C16.6085 13.5861 16.5812 13.5746 16.5539 13.5646C16.5266 13.5545 16.5007 13.5445 16.4734 13.533C16.4188 13.5129 16.3656 13.4929 16.311 13.4728C16.2564 13.4527 16.2018 13.4341 16.1472 13.4154C16.1155 13.4054 16.0854 13.3939 16.0538 13.3839C16.0135 13.371 15.9747 13.3581 15.9345 13.3452C15.9086 13.3366 15.8842 13.3294 15.8583 13.3222C15.8267 13.3122 15.7965 13.3036 15.7649 13.295C15.7419 13.2878 15.7175 13.2807 15.6945 13.2749C15.6514 13.262 15.6083 13.2505 15.5637 13.2391C15.5479 13.2348 15.5321 13.2305 15.5163 13.2262C15.4832 13.2176 15.4502 13.209 15.4171 13.2004C15.3812 13.1918 15.3453 13.1832 15.3093 13.1746C15.2648 13.1631 15.2202 13.153 15.1742 13.143C15.1513 13.1373 15.1268 13.1315 15.1024 13.1272C15.0277 13.1115 14.9529 13.0957 14.8782 13.0814C14.8624 13.0785 14.8466 13.0756 14.8308 13.0727H14.825C14.7934 13.0656 14.7632 13.0598 14.7316 13.0555C14.7058 13.0512 14.6799 13.0469 14.654 13.0426C14.6296 13.0383 14.6037 13.034 14.5779 13.0297C14.5031 13.0168 14.427 13.0068 14.3508 12.9953C14.3134 12.991 14.2775 12.9853 14.2401 12.981C14.2042 12.9767 14.1697 12.9724 14.1338 12.9681C14.1007 12.9638 14.0691 12.9609 14.0375 12.958C14.0073 12.9552 13.9757 12.9509 13.9455 12.9494C13.9168 12.9466 13.888 12.9437 13.8593 12.9408C13.8277 12.938 13.7961 12.9351 13.7645 12.9337C13.7228 12.9308 13.6811 12.9279 13.6394 12.9251C13.5863 12.9222 13.5331 12.9179 13.4813 12.9165C13.4627 12.9165 13.444 12.915 13.4267 12.9136C13.329 12.9093 13.2299 12.9064 13.1307 12.905C13.1134 12.905 13.0976 12.905 13.0804 12.905C13.0545 12.905 13.0287 12.905 13.0028 12.905C12.9769 12.905 12.9511 12.905 12.9252 12.905C12.9079 12.905 12.8921 12.905 12.8749 12.905C12.7757 12.905 12.678 12.9093 12.5788 12.9136C12.5602 12.9136 12.5415 12.915 12.5242 12.9165C12.4711 12.9193 12.4179 12.9222 12.3662 12.9251C12.3245 12.9279 12.2828 12.9308 12.2411 12.9337C12.2095 12.9365 12.1779 12.938 12.1463 12.9408C12.1175 12.9437 12.0888 12.9451 12.0601 12.9494C12.0356 12.9523 12.0098 12.9537 11.9853 12.9566C11.958 12.9595 11.9307 12.9623 11.902 12.9652C11.8545 12.9695 11.8086 12.9752 11.7626 12.981C11.7425 12.9839 11.7209 12.9867 11.7008 12.9896C11.6778 12.9925 11.6548 12.9953 11.6318 12.9996C11.5872 13.0054 11.5427 13.0125 11.4967 13.0197C11.478 13.0226 11.4593 13.0254 11.4407 13.0283C11.4234 13.0312 11.4047 13.034 11.3875 13.0369C11.3501 13.0426 11.3113 13.0498 11.274 13.057C11.2409 13.0627 11.2079 13.0684 11.1748 13.0756C11.1389 13.0828 11.1015 13.09 11.0656 13.0971C11.0469 13.1014 11.0268 13.1043 11.0081 13.1086C10.9736 13.1158 10.9391 13.1229 10.9046 13.1301C10.8845 13.1344 10.863 13.1387 10.8443 13.143C10.8069 13.1516 10.771 13.1602 10.735 13.1688C10.7135 13.1731 10.6919 13.1789 10.6704 13.1846C10.6273 13.1946 10.5842 13.2061 10.541 13.2176C10.5281 13.2204 10.5152 13.2247 10.5022 13.2276C10.4548 13.2405 10.4074 13.2534 10.36 13.2663C10.3327 13.2735 10.3039 13.2821 10.2766 13.2907C10.2507 13.2979 10.2234 13.305 10.1976 13.3136C10.1401 13.3308 10.0826 13.3481 10.0266 13.3667C9.98488 13.3796 9.94321 13.3939 9.90297 13.4068C9.87998 13.414 9.85842 13.4212 9.83686 13.4298C9.7607 13.4556 9.68597 13.4814 9.6098 13.5101C9.58106 13.5201 9.55088 13.5316 9.52214 13.5431C9.49196 13.5545 9.46178 13.566 9.4316 13.5775C9.40429 13.5889 9.37555 13.599 9.34825 13.6104C9.331 13.6176 9.31232 13.6248 9.29508 13.632C9.24334 13.6535 9.1916 13.675 9.13987 13.6965C9.11688 13.7065 9.09388 13.7166 9.07089 13.7266L9.04789 13.7366C8.97748 13.7667 8.90706 13.7997 8.83664 13.8327C8.80502 13.847 8.77485 13.8614 8.74467 13.8771C8.71305 13.8929 8.68 13.9087 8.64838 13.9245C8.61676 13.9402 8.58371 13.956 8.55209 13.9718C8.53198 13.9818 8.51186 13.9933 8.4903 14.0033C8.44719 14.0248 8.40407 14.0478 8.36096 14.0707C8.31066 14.098 8.26036 14.1252 8.2115 14.1524C8.17989 14.1697 8.14827 14.1883 8.11809 14.2055C8.08791 14.2227 8.0563 14.2413 8.02612 14.2586C8.00456 14.2715 7.98444 14.2829 7.96288 14.2958C7.93414 14.313 7.90684 14.3302 7.87953 14.346C7.85654 14.3589 7.83498 14.3733 7.81199 14.3876C7.75019 14.4263 7.6884 14.465 7.62804 14.5052C7.60361 14.521 7.58062 14.5367 7.55762 14.5525C7.53175 14.5697 7.50589 14.5869 7.48002 14.6041C7.41391 14.0349 7.38086 13.4484 7.38086 12.8476C7.38086 12.8247 7.38086 12.8018 7.38086 12.7788H18.629C18.629 12.8018 18.629 12.8247 18.629 12.8476L18.6247 12.8433Z" fill="#C5E5D0"/>'
                + '<path d="M25.9971 12.7757C25.9971 12.6452 25.9914 12.5148 25.9856 12.3843C25.852 9.39037 24.7009 6.66173 22.87 4.53101C22.7637 4.40626 22.6544 4.28295 22.5409 4.1625C21.5594 3.10431 20.4039 2.20958 19.1177 1.52563C18.9654 1.4439 18.8102 1.36504 18.655 1.29048C16.9463 0.463138 15.0277 0 13 0C10.9723 0 9.05373 0.463138 7.34358 1.28904C7.18693 1.3636 7.03316 1.44247 6.88083 1.5242C5.59606 2.20958 4.4392 3.10431 3.45766 4.1625C3.34557 4.28295 3.23635 4.40626 3.12857 4.53101C1.2977 6.66029 0.146584 9.39037 0.0129339 12.3843C0.0071855 12.5148 0.0028742 12.6452 0.0014371 12.7757C0.0014371 12.8402 0 12.9062 0 12.9707C0 16.2557 1.22441 19.2553 3.24066 21.5395C3.78388 22.1561 4.38603 22.7196 5.03703 23.2243V21.627H20.9601V23.2243C21.6111 22.721 22.2132 22.1561 22.7565 21.5395C24.7742 19.2539 25.9971 16.2543 25.9971 12.9707C25.9971 12.9062 25.9971 12.8402 25.9957 12.7757H25.9971ZM21.1915 6.67463C21.2159 6.65026 21.2403 6.62588 21.2633 6.60151C21.2806 6.5843 21.2964 6.56853 21.3122 6.55132L21.3438 6.51834C21.3682 6.49253 21.3941 6.46672 21.4185 6.43948C21.4473 6.47676 21.476 6.51547 21.5033 6.55275C21.522 6.57856 21.5407 6.60294 21.5594 6.62875C21.5737 6.64882 21.5895 6.6689 21.6039 6.6904C21.6212 6.71478 21.6384 6.73916 21.6556 6.76353C21.6786 6.79508 21.7002 6.82806 21.7218 6.8596C21.7433 6.89115 21.7649 6.92269 21.785 6.95424C21.8022 6.98005 21.8195 7.00586 21.8367 7.03166C21.8626 7.07181 21.8885 7.11196 21.9143 7.15211C21.9718 7.24101 22.0264 7.33134 22.081 7.42311C22.0997 7.45465 22.1184 7.48477 22.1356 7.51631C22.1514 7.54355 22.1673 7.5708 22.1831 7.59947C22.196 7.62242 22.2089 7.64392 22.2204 7.66687C22.2391 7.70128 22.2578 7.73426 22.2765 7.76867C22.2937 7.80165 22.3124 7.83463 22.3296 7.86617L22.3498 7.90489C22.367 7.9393 22.3857 7.97371 22.4029 8.00813C22.413 8.0282 22.4245 8.04827 22.4346 8.06978C22.4561 8.11136 22.4762 8.15151 22.4964 8.19309C22.5107 8.2232 22.5251 8.25188 22.5395 8.28199C22.5524 8.31067 22.5668 8.33935 22.5797 8.36802C22.5869 8.38523 22.5955 8.401 22.6027 8.41821C22.6271 8.4727 22.6516 8.52718 22.676 8.58167C22.6846 8.60174 22.6932 8.62325 22.7033 8.64333C22.7162 8.67344 22.7292 8.70355 22.7407 8.73366C22.7536 8.76377 22.7665 8.79532 22.778 8.82543C22.7895 8.85267 22.7996 8.87991 22.8111 8.90716C22.8283 8.95161 22.8456 8.99606 22.8628 9.04051C22.87 9.06201 22.8786 9.08352 22.8872 9.1036C22.8987 9.13514 22.9102 9.16669 22.9217 9.1968C22.9289 9.21544 22.9347 9.23408 22.9419 9.25128C22.949 9.26992 22.9548 9.28857 22.962 9.30721C22.972 9.33445 22.9807 9.36169 22.9907 9.39037V9.39324C23.0008 9.41905 23.0094 9.44629 23.018 9.47353C23.0396 9.53806 23.0597 9.60258 23.0798 9.66854C23.0899 9.70152 23.0999 9.73306 23.11 9.76604C23.1201 9.79902 23.1287 9.832 23.1387 9.86354C23.1474 9.89509 23.1574 9.92807 23.166 9.95961C23.1747 9.99259 23.1833 10.0241 23.1919 10.0571C23.1991 10.0858 23.2077 10.1145 23.2149 10.1446C23.225 10.1804 23.2336 10.2163 23.2422 10.2536C23.2494 10.2837 23.2566 10.3123 23.2638 10.3425C23.2695 10.3668 23.2753 10.3912 23.281 10.4141L23.2839 10.4256C23.2882 10.4414 23.2911 10.4572 23.2939 10.4729V10.483C23.3026 10.5088 23.3069 10.5346 23.3126 10.5604C23.3184 10.5891 23.3256 10.6192 23.3313 10.6479V10.6565L23.3399 10.6894V10.6923C23.3442 10.7081 23.3471 10.7239 23.35 10.7382C23.3572 10.7755 23.3644 10.8128 23.3715 10.8515C23.3773 10.883 23.383 10.9146 23.3888 10.9461C23.3917 10.9633 23.3945 10.9791 23.3974 10.9963C23.4003 11.0135 23.4032 11.0293 23.406 11.0465C23.4118 11.0795 23.4175 11.1139 23.4218 11.1469C23.4247 11.1641 23.4276 11.1798 23.429 11.197C23.4319 11.2128 23.4333 11.23 23.4362 11.2472C23.4463 11.316 23.4549 11.3834 23.4635 11.4523C23.4678 11.4867 23.4721 11.5197 23.4765 11.5541C23.4808 11.5885 23.4851 11.6215 23.488 11.6559C23.498 11.7419 23.5052 11.8265 23.5124 11.9125C23.5153 11.9556 23.5196 11.9986 23.5224 12.0416C23.5253 12.0846 23.5282 12.1276 23.5296 12.1706C23.5339 12.2395 23.5368 12.3097 23.5397 12.3785H19.0171C18.9711 11.0895 18.7369 9.86641 18.3704 8.7566C18.5142 8.68204 18.655 8.60318 18.7944 8.52288C18.8332 8.50137 18.872 8.47843 18.9094 8.45549C18.9395 8.43685 18.9711 8.41821 19.0028 8.39957C19.0373 8.37806 19.0717 8.35799 19.1062 8.33648C19.1738 8.2949 19.2428 8.25045 19.3089 8.206C19.3333 8.19023 19.3563 8.17445 19.3807 8.15868L19.3908 8.15151C19.4095 8.13861 19.4281 8.12714 19.4483 8.11423C19.4655 8.10276 19.4828 8.09129 19.4986 8.07982L19.5072 8.07408H19.5086C19.5417 8.04971 19.5747 8.02676 19.6078 8.00382C19.6408 7.98088 19.6739 7.95794 19.7055 7.935C19.7314 7.91779 19.7558 7.89915 19.7817 7.88051C19.796 7.87047 19.8104 7.86044 19.8248 7.84897L19.842 7.83606C19.8679 7.81742 19.8938 7.79878 19.9182 7.78014C19.9426 7.7615 19.9671 7.74429 19.9901 7.72565C20.0145 7.70845 20.0375 7.68981 20.0619 7.67117C20.0964 7.64392 20.1323 7.61668 20.1654 7.58944C20.1941 7.5665 20.2243 7.54355 20.253 7.51918C20.2832 7.4948 20.3134 7.47043 20.3436 7.44462L20.3809 7.41307L20.3967 7.40017C20.4169 7.38296 20.437 7.36719 20.4571 7.34855L20.4744 7.33421C20.506 7.3084 20.5361 7.28116 20.5678 7.25391C20.5807 7.24244 20.5936 7.23097 20.6066 7.2195C20.6597 7.17218 20.7143 7.12487 20.7661 7.07611C20.7905 7.05317 20.8164 7.03023 20.8408 7.00729C20.8925 6.95854 20.9457 6.90979 20.996 6.8596C21.0104 6.84526 21.0248 6.83236 21.0391 6.81802C21.0578 6.80081 21.0751 6.78217 21.0937 6.76497C21.1124 6.74776 21.1297 6.72912 21.1469 6.71191C21.1613 6.69757 21.1757 6.68324 21.1886 6.6689L21.1915 6.67463ZM13.1954 5.35261H13.2069C13.2788 5.34974 13.3507 5.34688 13.4211 5.34257H13.4527C13.4714 5.33971 13.4901 5.33827 13.5087 5.33684C13.5245 5.33684 13.5389 5.33397 13.5547 5.33397C13.5763 5.33254 13.5978 5.3311 13.6194 5.32824C13.6409 5.3268 13.6625 5.32393 13.6826 5.3225C13.697 5.3225 13.7114 5.31963 13.7257 5.3182C13.743 5.31676 13.7588 5.31533 13.776 5.31246C13.7947 5.31103 13.8134 5.30816 13.8321 5.30673H13.845L13.8795 5.30099C13.8924 5.30099 13.9068 5.29812 13.9197 5.29526C13.9327 5.29382 13.947 5.29239 13.96 5.28952C14.0031 5.28379 14.0448 5.27662 14.0864 5.26945C14.1008 5.26801 14.1152 5.26515 14.1296 5.26228C14.1425 5.26084 14.1569 5.25798 14.1698 5.25511C14.1827 5.25367 14.1971 5.25081 14.21 5.24794C14.2488 5.24077 14.2876 5.2336 14.3264 5.22643C14.3451 5.22356 14.3638 5.21926 14.3811 5.21496C14.4026 5.21066 14.4242 5.20636 14.4472 5.20062C14.4773 5.19489 14.5061 5.18772 14.5363 5.18055C14.5664 5.17338 14.5966 5.16621 14.6268 5.15904C14.6498 5.1533 14.6742 5.14757 14.6972 5.14183C14.7202 5.1361 14.7446 5.13036 14.7676 5.12319H14.7691C14.7935 5.11602 14.8179 5.11029 14.8424 5.10312C14.8682 5.09595 14.8941 5.08878 14.92 5.08018C14.9458 5.07301 14.9731 5.0644 14.999 5.0558L15.0177 5.05007C15.0407 5.0429 15.0637 5.03573 15.0867 5.02856C15.1355 5.01278 15.1844 4.99558 15.2333 4.97981L15.2692 4.9669C15.308 4.954 15.3468 4.93966 15.3856 4.92389C15.4071 4.91528 15.4287 4.90811 15.4503 4.89951C15.479 4.88947 15.5063 4.878 15.5336 4.86653C15.5566 4.85649 15.5796 4.84789 15.604 4.83785L15.617 4.83212C16.5051 5.70821 17.3084 6.97574 17.8617 8.49134C17.8387 8.50281 17.8157 8.51428 17.7927 8.52432C17.7697 8.53579 17.7467 8.54582 17.7237 8.55729C17.6778 8.5788 17.6318 8.60031 17.5858 8.62182C17.5398 8.64333 17.4924 8.66483 17.4449 8.68491C17.3975 8.70498 17.3501 8.72506 17.3041 8.74513C17.2811 8.75517 17.2567 8.7652 17.2323 8.77524C17.2078 8.78528 17.1848 8.79532 17.1604 8.80392C17.1388 8.81252 17.1159 8.82113 17.0943 8.83116C17.0684 8.8412 17.0426 8.85124 17.0181 8.86127C16.9865 8.87418 16.9535 8.88565 16.9218 8.89855C16.8586 8.92293 16.7939 8.94731 16.7293 8.97025C16.6818 8.98745 16.633 9.00323 16.5856 9.02043C16.5453 9.03334 16.5051 9.04768 16.4648 9.06058C16.4447 9.06632 16.426 9.07349 16.4059 9.07922L16.3944 9.08209C16.3801 9.08639 16.3671 9.09069 16.3528 9.09499L16.3427 9.09786C16.3183 9.10646 16.2938 9.11363 16.268 9.1208C16.186 9.14661 16.1056 9.16955 16.0237 9.19393C15.9834 9.2054 15.9417 9.21687 15.9015 9.22834C15.8411 9.24411 15.7808 9.26132 15.719 9.27566C15.7046 9.27996 15.6903 9.28283 15.6759 9.28713H15.6673C15.6256 9.30004 15.5839 9.31007 15.5437 9.31868L15.5307 9.32154C15.5077 9.32728 15.4833 9.33301 15.4603 9.33732L15.4488 9.34018C15.4301 9.34449 15.4115 9.34879 15.3928 9.35309L15.3755 9.35596C15.3525 9.36026 15.3295 9.36599 15.308 9.37029C15.2792 9.37603 15.2519 9.38177 15.2232 9.3875C15.2031 9.3918 15.1844 9.3961 15.1643 9.39897C15.1212 9.40758 15.078 9.41618 15.0335 9.42335C15.0091 9.42765 14.9846 9.43195 14.9602 9.43625L14.9473 9.43912C14.93 9.44199 14.9142 9.44486 14.897 9.44772C14.8668 9.45346 14.838 9.45776 14.8079 9.46206C14.7892 9.46493 14.7691 9.46923 14.7504 9.4721L14.7231 9.4764C14.6915 9.48214 14.6599 9.48644 14.6282 9.49074H14.6254C14.5779 9.49791 14.5305 9.50508 14.4831 9.51081C14.4443 9.51655 14.4055 9.52085 14.3652 9.52515H14.3509C14.3308 9.52945 14.3106 9.53232 14.2905 9.53376L14.269 9.53662C14.256 9.53662 14.2431 9.53949 14.2302 9.54093H14.2215C14.187 9.54523 14.154 9.54953 14.1209 9.5524C14.0922 9.55526 14.0649 9.55813 14.0361 9.561C14.0088 9.56387 13.9801 9.56673 13.9514 9.56817C13.9284 9.5696 13.9054 9.57247 13.8838 9.5739H13.8723C13.8522 9.57677 13.8306 9.57821 13.8105 9.57964H13.8048C13.7803 9.58107 13.7545 9.58394 13.7286 9.58537C13.6467 9.59111 13.5648 9.59541 13.4814 9.59828C13.4642 9.59828 13.4469 9.59971 13.4297 9.59971H13.3995C13.3679 9.60258 13.3348 9.60258 13.3032 9.60402C13.2687 9.60402 13.2342 9.60545 13.1998 9.60688V5.34831L13.1954 5.35261ZM14.6369 4.62277C14.6153 4.62851 14.5937 4.63425 14.5722 4.63998C14.5578 4.64428 14.542 4.64715 14.5262 4.65145C14.5104 4.65575 14.4931 4.66006 14.4773 4.66292C14.3164 4.70164 14.154 4.73462 13.9873 4.76043C13.9629 4.76473 13.9384 4.76759 13.9126 4.7719C13.8881 4.77476 13.8623 4.77907 13.8378 4.78193C13.8134 4.7848 13.7875 4.7891 13.7631 4.79197C13.7387 4.79484 13.7128 4.79771 13.6884 4.80057L13.6381 4.80631C13.618 4.80774 13.5993 4.81061 13.5792 4.81204C13.5231 4.81778 13.4671 4.82208 13.411 4.82495C13.3938 4.82495 13.378 4.82638 13.3607 4.82782H13.3507C13.3291 4.82925 13.3075 4.83068 13.286' 
                + '4.83212C13.2558 4.83212 13.2256 4.83499 13.1954 4.83499V3.53447C13.8479 3.58896 14.5334 3.91158 15.1873 4.44784C15.0076 4.51523 14.8237 4.57402 14.6369 4.62421V4.62277ZM12.8031 4.83499C12.7729 4.83499 12.7428 4.83355 12.7126 4.83212C12.691 4.83212 12.6695 4.83068 12.6479 4.82925H12.6379C12.6206 4.82782 12.6048 4.82638 12.5876 4.82638C12.5315 4.82352 12.4755 4.81778 12.4194 4.81348C12.3993 4.81204 12.3806 4.81061 12.3605 4.80774L12.3102 4.80201C12.2858 4.79914 12.2599 4.79627 12.2355 4.7934C12.211 4.79054 12.1852 4.78767 12.1607 4.78337C12.1363 4.7805 12.1104 4.7762 12.086 4.77333C12.0616 4.77046 12.0357 4.76616 12.0113 4.76186C11.846 4.73605 11.6822 4.70307 11.5212 4.66436C11.5054 4.66005 11.4882 4.65575 11.4724 4.65289C11.4566 4.64858 11.4422 4.64572 11.4264 4.64141C11.4048 4.63568 11.3833 4.62994 11.3603 4.62421C11.1734 4.57402 10.9895 4.51523 10.8099 4.44784C11.4637 3.91158 12.1492 3.58896 12.8017 3.53447V4.83499H12.8031ZM10.8602 5.01422C10.9061 5.02999 10.9521 5.04433 10.9996 5.05867C11.0254 5.06727 11.0527 5.07444 11.0786 5.08304C11.1318 5.09882 11.1849 5.11316 11.2381 5.12749C11.2625 5.13323 11.287 5.1404 11.3114 5.14613C11.333 5.15187 11.3545 5.15761 11.3761 5.16191C11.3919 5.16621 11.4091 5.17051 11.4249 5.17338C11.4479 5.17911 11.4709 5.18485 11.4954 5.18915C11.5428 5.20062 11.5888 5.21066 11.6362 5.21926C11.6664 5.225 11.6966 5.23217 11.7282 5.23647C11.8316 5.25654 11.9351 5.27375 12.04 5.28809C12.053 5.28952 12.0673 5.29239 12.0803 5.29382C12.0932 5.29526 12.1076 5.29812 12.1205 5.29956L12.155 5.30386H12.1679C12.1866 5.30816 12.2053 5.30959 12.224 5.31246C12.2398 5.3139 12.257 5.31676 12.2743 5.3182C12.2886 5.31963 12.303 5.32107 12.3174 5.3225C12.3389 5.32537 12.3605 5.3268 12.382 5.32824C12.4036 5.32967 12.4252 5.33254 12.4467 5.33397C12.4625 5.33397 12.4769 5.33684 12.4927 5.33684C12.5114 5.33684 12.5301 5.33971 12.5488 5.34114H12.5804C12.6508 5.34831 12.7226 5.35118 12.7945 5.35261H12.806V9.61262C12.7715 9.61262 12.737 9.61262 12.7025 9.60975C12.6695 9.60975 12.6379 9.60832 12.6062 9.60688H12.5761C12.5588 9.60545 12.5416 9.60402 12.5243 9.60402C12.4913 9.60258 12.4582 9.60115 12.4237 9.59971C12.4079 9.59971 12.3921 9.59828 12.3763 9.59685H12.3648C12.3361 9.59541 12.3088 9.59254 12.28 9.59111C12.2656 9.59111 12.2527 9.58968 12.2383 9.58824H12.2225C12.1895 9.58537 12.1579 9.58251 12.1248 9.57964H12.0989C12.0644 9.57534 12.03 9.57247 11.9955 9.56817L11.9624 9.5653C11.9207 9.561 11.8791 9.5567 11.8374 9.5524H11.8173L11.7799 9.54666C11.7425 9.54236 11.7037 9.53806 11.6664 9.53376C11.6189 9.52802 11.5715 9.52228 11.5227 9.51511C11.481 9.50938 11.4393 9.50364 11.3976 9.49791C11.3344 9.48931 11.2726 9.47927 11.2094 9.46923C11.1778 9.4635 11.1447 9.45919 11.1131 9.45346L11.0815 9.44772C11.0441 9.44055 11.0053 9.43482 10.9679 9.42765C10.955 9.42478 10.9421 9.42191 10.9291 9.42048C10.8875 9.41188 10.8458 9.40471 10.8041 9.3961C10.7682 9.38894 10.7337 9.38177 10.6978 9.3746C10.6791 9.37029 10.659 9.36743 10.6403 9.36169H10.6302C10.5943 9.35166 10.5569 9.34449 10.521 9.33588C10.4822 9.32728 10.442 9.31724 10.4032 9.30864L10.3874 9.30434C10.3672 9.30004 10.3471 9.2943 10.3284 9.29H10.3241C10.3112 9.2857 10.2983 9.28283 10.2853 9.27996L10.2767 9.27709C10.2508 9.27136 10.2264 9.26419 10.2005 9.25702C10.179 9.25128 10.1574 9.24555 10.1344 9.23981C10.1143 9.23408 10.0942 9.22978 10.0741 9.22404C10.0453 9.21687 10.0166 9.20827 9.98784 9.2011C9.9591 9.1925 9.93036 9.18533 9.90161 9.17672C9.87 9.16812 9.83982 9.15952 9.80964 9.14948C9.7694 9.13801 9.72916 9.1251 9.68892 9.1122C9.64294 9.09786 9.59839 9.08352 9.5524 9.06918C9.50641 9.05484 9.46186 9.03907 9.41731 9.0233C9.38282 9.01183 9.34689 8.99892 9.3124 8.98602C9.29947 8.98172 9.28654 8.97598 9.2736 8.97168C9.196 8.94444 9.11839 8.91576 9.04223 8.88565C9.01636 8.87561 8.98906 8.86557 8.96319 8.85554C8.94307 8.84837 8.92295 8.83977 8.90139 8.83116C8.88127 8.82256 8.85972 8.81539 8.8396 8.80679C8.79792 8.79101 8.75768 8.77381 8.71744 8.7566H8.71457L8.68727 8.7437H8.68295V8.74083C8.65709 8.73079 8.63122 8.71932 8.60535 8.70785C8.53637 8.67917 8.46883 8.64906 8.40128 8.61752C8.36967 8.60318 8.33805 8.58884 8.30643 8.57307L8.29494 8.56733L8.27338 8.55729H8.26907V8.55443C8.24751 8.54439 8.22739 8.53579 8.20727 8.52575C8.18572 8.51571 8.16272 8.50424 8.14117 8.4942C8.69301 6.97861 9.49635 5.71108 10.3859 4.83499L10.4003 4.84072C10.4204 4.84932 10.4405 4.85793 10.4592 4.8651C10.5483 4.90094 10.6374 4.93536 10.7279 4.9669C10.7509 4.9755 10.7739 4.98267 10.7969 4.99128C10.8199 4.99988 10.8429 5.00705 10.8659 5.01422H10.8602ZM8.27051 9.07635C8.31218 9.09643 8.3553 9.11507 8.39841 9.13227L8.42428 9.14374C8.46739 9.16238 8.50906 9.18103 8.55218 9.19823L8.56511 9.20397C8.61254 9.22261 8.65996 9.24268 8.70738 9.26132C8.73325 9.27136 8.75912 9.2814 8.78499 9.29143C8.85828 9.32011 8.93157 9.34735 9.00486 9.3746L9.04223 9.3875L9.07528 9.39897C9.10834 9.41044 9.14139 9.42335 9.17444 9.43482C9.20318 9.44486 9.23049 9.45489 9.25923 9.46493C9.27935 9.4721 9.29803 9.47783 9.31815 9.485C9.34689 9.49504 9.3742 9.50364 9.40294 9.51368C9.42162 9.51942 9.4403 9.52515 9.45899 9.53232H9.46186C9.48917 9.54236 9.51647 9.55096 9.54378 9.55956C9.5797 9.57104 9.61563 9.58251 9.65156 9.59254C9.68461 9.60258 9.71623 9.61262 9.74928 9.62122C9.82257 9.64273 9.89587 9.6628 9.96916 9.68288C9.9864 9.68718 10.0036 9.69291 10.0209 9.69722C10.0539 9.70582 10.0856 9.71442 10.1186 9.72303C10.143 9.73019 10.1689 9.73593 10.1933 9.74167H10.1962C10.2092 9.74597 10.2221 9.74884 10.2365 9.7517L10.2523 9.756C10.2839 9.76461 10.3155 9.77178 10.3486 9.77895C10.3658 9.78325 10.383 9.78755 10.4017 9.79185C10.419 9.79615 10.4362 9.80045 10.4549 9.80332H10.4592C10.4937 9.81192 10.5282 9.81909 10.5627 9.82626C10.5828 9.83056 10.6044 9.83487 10.6245 9.83917C10.6978 9.85494 10.7696 9.86928 10.8429 9.88362C10.8573 9.88649 10.8717 9.88935 10.886 9.89222L10.9133 9.89652C10.9493 9.90369 10.9852 9.90943 11.0197 9.91516C11.07 9.92377 11.1188 9.93237 11.1691 9.93954C11.2166 9.94671 11.2625 9.95388 11.31 9.96105C11.3588 9.96822 11.4077 9.97539 11.4566 9.98112L11.4939 9.98686C11.5356 9.99259 11.5773 9.99689 11.6175 10.0026C11.6678 10.0084 11.7181 10.0141 11.7684 10.0198C11.8647 10.0299 11.9624 10.0399 12.0601 10.0471H12.0788C12.1708 10.0557 12.2628 10.0614 12.3547 10.0672C12.3734 10.0672 12.3935 10.0686 12.4122 10.07C12.4956 10.0743 12.5804 10.0772 12.6652 10.0801C12.6838 10.0801 12.7025 10.0801 12.7198 10.0815C12.7471 10.0815 12.7744 10.0815 12.8017 10.0829V12.3857H7.38382C7.42693 11.1612 7.64537 9.99833 7.98452 8.943L7.99602 8.94731C8.03913 8.96881 8.08368 8.99032 8.12823 9.0104C8.17566 9.03334 8.22452 9.05484 8.27338 9.07635H8.27051ZM13.1954 10.0829C13.2228 10.0829 13.2501 10.0829 13.2774 10.0815C13.296 10.0815 13.3147 10.0815 13.332 10.0801C13.4168 10.0786 13.5001 10.0743 13.5849 10.07C13.6036 10.07 13.6237 10.0686 13.6424 10.0672C13.6769 10.0657 13.7114 10.0629 13.7459 10.0614C13.7631 10.0614 13.7818 10.0585 13.799 10.0585C13.8795 10.0528 13.96 10.0471 14.0405 10.0385H14.0419C14.0563 10.0385 14.0721 10.0356 14.0864 10.0342H14.1037C14.1238 10.0313 14.1439 10.0284 14.1626 10.027L14.187 10.0241C14.2057 10.0227 14.2258 10.0198 14.2445 10.0184C14.2891 10.0141 14.3336 10.0084 14.3782 10.0041C14.417 9.99976 14.4543 9.99546 14.4931 9.98972H14.5075C14.5205 9.98686 14.5348 9.98542 14.5478 9.98255L14.5664 9.97969C14.5837 9.97825 14.6009 9.97539 14.6167 9.97252L14.6527 9.96678C14.6728 9.96391 14.6929 9.96105 14.713 9.95818C14.736 9.95531 14.7576 9.95101 14.7806 9.94814C14.8036 9.94527 14.8251 9.94097 14.8481 9.9381H14.8582C14.897 9.93093 14.9358 9.92377 14.976 9.9166C15.0119 9.91086 15.0479 9.90369 15.0824 9.89796C15.101 9.89509 15.1197 9.89079 15.1398 9.88792C15.17 9.88218 15.2002 9.87645 15.2289 9.87071C15.2519 9.86641 15.2735 9.86211 15.2965 9.85781C15.3267 9.85207 15.3583 9.8449 15.3899 9.83917C15.4115 9.83487 15.433 9.83056 15.456 9.82483C15.5092 9.81336 15.5609 9.80189 15.6141 9.78898C15.6673 9.77751 15.719 9.76461 15.7707 9.7517C15.7908 9.7474 15.811 9.74167 15.8311 9.73736C15.8512 9.73306 15.8713 9.72733 15.8914 9.72159C15.9216 9.71442 15.9518 9.70582 15.9834 9.69722C15.9978 9.69435 16.0107 9.69005 16.0251 9.68575C16.1027 9.66424 16.1789 9.64416 16.255 9.62122C16.2766 9.61549 16.2967 9.60832 16.3183 9.60258H16.3211C16.3398 9.59541 16.3599 9.59111 16.3786 9.58394L16.3916 9.57964C16.4117 9.5739 16.4304 9.56817 16.4505 9.561C16.4692 9.55526 16.4878 9.54953 16.5065 9.54379L16.5166 9.54093H16.518C16.5424 9.53232 16.5669 9.52515 16.5913 9.51655C16.6229 9.50651 16.6531 9.49648 16.6847 9.485C16.7178 9.47353 16.7523 9.46206 16.7853 9.45059L16.8054 9.44342C16.8327 9.43482 16.8586 9.42478 16.8859 9.41475C16.9621 9.3875 17.0382 9.36026 17.1144 9.33015C17.1273 9.32441 17.1417 9.32011 17.1561 9.31437C17.1834 9.30434 17.2107 9.2943 17.238 9.28283C17.2567 9.27566 17.2739 9.26849 17.2926 9.26132C17.3415 9.24125 17.3903 9.22117 17.4392 9.2011C17.4622 9.19106 17.4866 9.18103 17.5096 9.17242L17.58 9.14231C17.6418 9.1165 17.7022 9.08926 17.7625 9.06201C17.7913 9.04911 17.8186 9.03621 17.8473 9.0233C17.9048 8.99749 17.9623 8.97025 18.0184 8.943C18.3575 9.99833 18.5745 11.1612 18.6191 12.3857H13.1983V10.0829H13.1954ZM17.3731 3.76532C17.4047 3.73808 17.4363 3.71227 17.4679 3.68503C17.5484 3.61477 17.626 3.54451 17.7022 3.46995C17.7281 3.44557 17.7539 3.41976 17.7798 3.39539C19.0703 4.0521 20.2085 4.96547 21.1239 6.06811C21.0981 6.09679 21.0707 6.12403 21.0449 6.15271C21.0276 6.17135 21.0104 6.18855 20.9931 6.20719C20.9788 6.22153 20.9644 6.2373 20.95 6.25164C20.9371 6.26455 20.9242 6.27889 20.9112 6.29179C20.8925 6.31187 20.8739 6.33194 20.8537 6.35058C20.8207 6.38356 20.7876 6.41654 20.7546 6.44808L20.7187 6.48249C20.6899 6.50974 20.6626 6.53698 20.6339 6.56422C20.6008 6.5972 20.5663 6.62875 20.5318 6.65886C20.4729 6.71335 20.414 6.76783 20.3536 6.82089C20.335 6.83809 20.3163 6.85387 20.2976 6.87107L20.2933 6.87394C20.2775 6.88828 20.2602 6.90262 20.243 6.91696L20.23 6.92843L20.1984 6.95567C20.1381 7.00729 20.0763 7.05891 20.0145 7.10909L19.98 7.13777L19.9757 7.14207C19.9498 7.16358 19.9239 7.18365 19.8981 7.20516C19.8622 7.23384 19.8248 7.26252 19.7889 7.29119C19.7587 7.31557 19.7271 7.33851 19.6969 7.36145L19.661 7.3887L19.6466 7.39873C19.6308 7.4102 19.615 7.42311 19.5992 7.43458L19.5877 7.44318C19.5675 7.45752 19.5474 7.47329 19.5273 7.48763L19.5129 7.49767L19.4741 7.52635C19.4382 7.55216 19.4023 7.57797 19.3663 7.60378C19.3434 7.61955 19.3204 7.63532 19.2974 7.65109C19.2672 7.6726 19.237 7.69268 19.2054 7.71418C19.1407 7.75863 19.0746 7.80165 19.0085 7.84466C18.9812 7.86187 18.9539 7.88051 18.9252 7.89772C18.895 7.91779 18.8648 7.93643 18.8346 7.95507H18.8332L18.803 7.97515C18.7728 7.99379 18.7441 8.01099 18.7153 8.02963C18.6823 8.04971 18.6492 8.06978 18.6162 8.08986C18.5501 8.12857 18.4825 8.16728 18.415 8.206C18.3891 8.22034 18.3633 8.23468 18.3374 8.24901L18.3029 8.26765L18.2641 8.28916C18.2468 8.2992 18.2282 8.30924 18.2109 8.31784C17.6562 6.83379 16.8658 5.57629 15.9863 4.67153C16.0078 4.66149 16.028 4.65145 16.0481 4.63998C16.0696 4.62994 16.0898 4.61847 16.1099 4.60844C16.1271 4.59983 16.1429 4.59123 16.1587 4.58263C16.1918 4.56542 16.2248 4.54678 16.2579 4.52957C16.2823 4.51667 16.3053 4.50376 16.3298 4.48943C16.3628 4.47078 16.3973 4.45071 16.4304 4.43207L16.4634 4.412C16.4878 4.39766 16.5108 4.38332 16.5353 4.36898C16.5583 4.35464 16.5813 4.34174 16.6028 4.3274C16.6603 4.29155 16.7178 4.25427 16.7738 4.21699C16.8083 4.19405 16.8428 4.16967 16.8773 4.1453C16.8989 4.13096 16.919 4.11662 16.9405 4.10085C16.9578 4.08794 16.9765 4.07504 16.9937 4.06213C17.0066 4.0521 17.0196 4.04349 17.0325 4.03346L17.0713 4.00478C17.0914 3.99044 17.1115 3.97467 17.1317 3.9589L17.1432 3.95029C17.169 3.93022 17.1949 3.91014 17.2208 3.88864L17.2409 3.87286C17.2696 3.84992 17.2984 3.82698 17.3257 3.80404C17.34 3.79257 17.3558 3.77966 17.3702 3.76676L17.3731 3.76532ZM17.1935 3.23336L17.1719 3.25344C17.1446 3.27781 17.1173 3.30219 17.09 3.32513H17.0885C17.0627 3.3495 17.0354 3.37101 17.0095 3.39395L16.9851 3.41403C16.9563 3.4384 16.9276 3.46135 16.8974 3.48429C16.8715 3.50436 16.8457 3.52444 16.8198 3.54451L16.7839 3.57175L16.7666 3.58466C16.7465 3.60043 16.725 3.6162 16.7048 3.63054L16.6689 3.65635C16.643 3.67499 16.6186 3.6922 16.5927 3.71084L16.5798 3.71944C16.5511 3.73951 16.5209 3.75959 16.4907 3.77966C16.4706 3.79257 16.4505 3.80691 16.4304 3.81981C16.4117 3.83272 16.393 3.84419 16.3729 3.85709H16.3686C16.3484 3.87286 16.3283 3.88434 16.3068 3.89724C16.2637 3.92448 16.2205 3.95029 16.176 3.9761C16.1573 3.98757 16.1386 3.99761 16.1199 4.00908C15.992 4.08221 15.8613 4.15247 15.7276 4.21699C15.7118 4.22416 15.6974 4.23133 15.6816 4.23993C15.6673 4.2471 15.6514 4.25427 15.6371 4.26144C15.6198 4.27004 15.6012 4.27865 15.5839 4.28582C14.8064 3.60186 13.9801 3.18891 13.1954 3.13012V2.25833C14.6469 2.28414 16.028 2.6039 17.2782 3.1588C17.2509 3.18461 17.2222 3.21042 17.1935 3.23623V3.23336ZM12.8031 2.25547V3.12726C12.0185 3.18748 11.1907 3.599 10.4147 4.28438C10.396 4.27721 10.3787 4.26861 10.36 4.26001C10.2221 4.19548 10.087 4.12809 9.95479 4.05353C9.93898 4.04493 9.92461 4.03632 9.9088 4.02772L9.87575 4.00908C9.8585 3.99904 9.84126 3.98901 9.82257 3.97897C9.77802 3.95316 9.73347 3.92592 9.68892 3.89867C9.64725 3.87286 9.60701 3.84705 9.56677 3.82124C9.54665 3.80834 9.52653 3.79544 9.50641 3.7811C9.47623 3.76102 9.44749 3.74095 9.41731 3.72087L9.40438 3.71227C9.37851 3.69507 9.35264 3.67642 9.32821 3.65778L9.29228 3.63198C9.27217 3.61764 9.25061 3.60186 9.23049 3.58609L9.21324 3.57319L9.17732 3.54594C9.15145 3.52587 9.12558 3.5058 9.09971 3.48572C9.06953 3.46278 9.04079 3.4384 9.01205 3.41546L8.98762 3.39539C8.96175 3.37388 8.93445 3.35094 8.90858 3.32943H8.90714C8.87984 3.30362 8.85109 3.28068 8.82523 3.2563L8.80367 3.23623C8.77493 3.21042 8.74762 3.18461 8.71888 3.1588C9.97059 2.6039 11.3502 2.28414 12.8017 2.25833L12.8031 2.25547ZM8.21877 3.39395C8.25182 3.42693 8.28488 3.45848 8.31793 3.49002L8.35673 3.52587L8.3711 3.54021C8.38691 3.55455 8.40272 3.56889 8.41853 3.58322C8.45014 3.6119 8.48176 3.64058 8.51481 3.66926C8.53206 3.68359 8.54787 3.69793 8.56511 3.71227L8.59098 3.73378L8.61685 3.75529C8.63409 3.76963 8.65134 3.78396 8.66858 3.79974C8.69445 3.82124 8.72032 3.84275 8.74762 3.86426C8.77349 3.88577 8.8008 3.90584 8.8281 3.92735C8.86115 3.95316 8.89421 3.97754 8.92726 4.00335C8.94738 4.01768 8.96606 4.03202 8.98618 4.04636C9.01061 4.065 9.03648 4.08221 9.06091 4.10085C9.08534 4.11805 9.10977 4.13526 9.1342 4.15247C9.15432 4.16681 9.17444 4.17971 9.196 4.19405C9.27073 4.24423 9.34546 4.29299 9.42306 4.3403L9.43743 4.34891C9.47336 4.37041 9.50929 4.39336 9.54521 4.41343C9.57252 4.4292 9.59982 4.44641 9.62856 4.46218C9.64725 4.47365 9.66593 4.48369 9.68605 4.49373C9.70473 4.5052 9.72485 4.51523 9.74353 4.52527C9.76796 4.53818 9.79096 4.55108 9.81539 4.56399C9.84126 4.57832 9.86712 4.59123 9.89299 4.60413C9.93323 4.62564 9.97347 4.64572 10.0137 4.66579C9.13277 5.57199 8.34236 6.82806 7.78908 8.3121L7.77471 8.3035C7.75171 8.2906 7.72728 8.27913 7.70429 8.26479L7.6971 8.26048C7.68273 8.25332 7.66836 8.24471 7.65399 8.23611H7.65112C7.63387 8.22464 7.61519 8.2146 7.59794 8.20456C7.49016 8.14434 7.38238 8.08269 7.27747 8.01816C7.26166 8.00956 7.24729 7.99952 7.23148 7.99092C7.16538 7.95077 7.09927 7.90919 7.0346 7.86761C7.0073 7.8504 6.97999 7.83319 6.95269 7.81455C6.92682 7.79878 6.90095 7.78157 6.87508 7.76437C6.84778 7.74716 6.82191 7.72852 6.79461 7.70988C6.7673 7.69268 6.74143 7.67404 6.71413 7.65539C6.67676 7.63102 6.64084 7.60521 6.60491 7.5794C6.57186 7.55646 6.5388 7.53352 6.50719 7.50914C6.49138 7.49767 6.47413 7.4862 6.45832 7.47473C6.44108 7.46182 6.4224 7.44892 6.40515 7.43458C6.38647 7.42167 6.36779 7.40734 6.3491 7.393C6.33186 7.38009 6.31461 7.36719 6.29593 7.35285C6.27869 7.33994 6.26144 7.32704 6.2442 7.3127C6.23126 7.30266 6.21833 7.29263 6.20539 7.28259C6.17953 7.26252 6.15366 7.24101 6.12779 7.22093L6.09905 7.19799L6.07318 7.17792C6.04731 7.15641 6.02145 7.13634 5.99558 7.11483L5.98983 7.10909C5.95534 7.08185 5.92229 7.05317 5.88923 7.02593C5.85618 6.99869 5.82456 6.97144 5.79151 6.94276C5.76852 6.92412 5.74696 6.90548 5.7254 6.88541C5.70241 6.86677 5.68085 6.8467 5.6593 6.82662C5.63774 6.80798 5.61475 6.78791 5.59319 6.76783C5.57163 6.74776 5.55008 6.72912 5.52852 6.70905C5.50265 6.68467 5.47535 6.66029 5.44948 6.63592C5.41786 6.60581 5.38625 6.5757 5.35463 6.54559L5.33164 6.52408C5.30577 6.4997 5.28134 6.47533 5.25691 6.45095C5.22817 6.42227 5.19943 6.3936 5.17068 6.36492C5.14194 6.33624 5.11464 6.30756 5.08589 6.27889L5.06003 6.25164C5.03128 6.22297 5.00398 6.19429 4.97668 6.16418C4.94506 6.1312 4.91344 6.09679 4.88183 6.06237C5.79726 4.95973 6.93544 4.04636 8.22596 3.38965L8.21877 3.39395ZM2.47037 12.1749C2.47325 12.1319 2.47612 12.0889 2.479 12.0459C2.48187 12.0029 2.48474 11.9599 2.48906 11.9168C2.49624 11.8308 2.50343 11.7448 2.51349 11.6602C2.51636 11.6258 2.52067 11.5913 2.52498 11.5584C2.52929 11.524 2.53361 11.4895 2.53792 11.4566C2.54654 11.3877 2.55516 11.3203 2.56522 11.2515C2.5681 11.2343 2.56953 11.2185 2.57241 11.2013C2.57528 11.1841 2.57816 11.1684 2.57959 11.1512C2.58534 11.1167 2.58965 11.0838 2.5954 11.0508C2.60115 11.0178 2.6069 10.9834 2.61265 10.9504C2.61839 10.9174 2.62414 10.8859 2.62989 10.8529C2.63277 10.8371 2.63564 10.8199 2.63851 10.8042C2.64139 10.7841 2.6457 10.7654 2.65001 10.7454C2.65432 10.721 2.65863 10.6966 2.66438 10.6737V10.6694L2.66869 10.6536V10.6507C2.67444 10.6221 2.68163 10.5919 2.68738 10.5633C2.696 10.5231 2.70462 10.4815 2.71468 10.4414C2.72187 10.4113 2.72905 10.3797 2.73624 10.3496C2.74342 10.3195 2.75061 10.2894 2.75779 10.2579C2.76642 10.222 2.77504 10.1862 2.7851 10.1489C2.79228 10.1202 2.79947 10.0915 2.80809 10.0614C2.81671 10.0284 2.82534 9.99689 2.83396 9.96391C2.83971 9.94384 2.84546 9.92377 2.8512 9.90369C2.85695 9.88362 2.8627 9.86354 2.86845 9.84347C2.8742 9.8234 2.87995 9.80332 2.8857 9.78325C2.89144 9.76317 2.89719 9.7431 2.90438 9.72303C2.91587 9.68288 2.92881 9.64273 2.94174 9.60402C2.94749 9.58394 2.95468 9.56387 2.96042 9.54379C2.97623 9.49504 2.99204 9.44772 3.00785 9.39897C3.01791 9.3703 3.02653 9.34162 3.03659 9.31294C3.04665 9.2857 3.05527 9.25845 3.06533 9.23121C3.07539 9.20397 3.08402 9.17672 3.09551 9.14948C3.10557 9.12224 3.11563 9.09643 3.12569 9.06918C3.14581 9.0147 3.16593 8.96164 3.18749 8.90859C3.19755 8.88135 3.20904 8.85554 3.2191 8.82829C3.25647 8.73653 3.29527 8.64476 3.33551 8.55443C3.34269 8.53722 3.34988 8.52145 3.35706 8.50424C3.36425 8.48704 3.37143 8.47126 3.38006 8.45406C3.40593 8.3967 3.43179 8.34078 3.4591 8.28343C3.47347 8.25332 3.48784 8.2232 3.50221 8.19453C3.51658 8.16442 3.53095 8.13574 3.54532 8.10563C3.56688 8.06118 3.58987 8.01673 3.61143 7.97371C3.62293 7.9522 3.63442 7.92926 3.64592 7.90775C3.65742 7.88625 3.66891 7.8633 3.68041 7.8418C3.71059 7.78444 3.74221 7.72565 3.77526 7.6683C3.78676 7.64679 3.79825 7.62672 3.81119 7.60521C3.82987 7.5708 3.84999 7.53782 3.86867 7.50484C3.87586 7.49193 3.88448 7.4776 3.89166 7.46469C3.91897 7.41737 3.94627 7.37149 3.97502 7.32561C3.99082 7.29836 4.00807 7.27255 4.02388 7.24531C4.03969 7.2195 4.05549 7.19369 4.07274 7.16788C4.09142 7.13777 4.1101 7.10909 4.13022 7.07898C4.14459 7.05604 4.1604 7.03166 4.17621 7.00872C4.19346 6.98291 4.2107 6.95567 4.22795 6.92986C4.25813 6.88398 4.28974 6.83953 4.32136 6.79364C4.33573 6.77214 4.35154 6.75206 4.36591 6.73055C4.38459 6.70474 4.40183 6.67893 4.42052 6.65312C4.44639 6.61584 4.47369 6.58 4.49956 6.54415C4.52543 6.5083 4.55273 6.47246 4.58004 6.43661C4.63752 6.49683 4.695 6.55706 4.75249 6.61728C4.76973 6.63448 4.78698 6.65312 4.80422 6.67033C4.8574 6.72482 4.91201 6.77787 4.96662 6.83092C4.98242 6.8467 4.99823 6.86247 5.01404 6.87681C5.04566 6.90692 5.07727 6.93703 5.10889 6.96714C5.16493 7.02019 5.22098 7.07181 5.27847 7.12343C5.29715 7.14064 5.31727 7.15784 5.33595 7.17505C5.38912 7.22237 5.4423 7.26825 5.49547 7.31414C5.52708 7.34138 5.56014 7.36862 5.59175 7.39587C5.63056 7.42884 5.66936 7.46182 5.7096 7.49337C5.73977 7.51918 5.77139 7.54355 5.80301 7.56793C5.83319 7.5923 5.86337 7.61668 5.89498 7.63962C5.92516 7.664 5.95534 7.68694 5.98696 7.71132C6.04875 7.75863 6.11198 7.80595 6.17378 7.85183C6.18959 7.8633 6.20539 7.87478 6.21977 7.88625C6.2442 7.90345 6.26719 7.92066 6.29162 7.93787C6.31749 7.95651 6.34479 7.97515 6.37066 7.99379C6.41665 8.02533 6.46264 8.05831 6.50862 8.08842C6.52874 8.10276 6.5503 8.11566 6.57042 8.13L6.58335 8.13861C6.60347 8.15294 6.62503 8.16585 6.64515 8.18019H6.64658C6.67533 8.20026 6.70551 8.22034 6.73425 8.23898C6.75868 8.25475 6.78311 8.27052 6.80754 8.28629C6.83341 8.3035 6.86071 8.32071 6.88802 8.33648C6.90526 8.34795 6.92394 8.35942 6.94119 8.36946C6.95843 8.38093 6.97712 8.39097 6.99436 8.40244C7.01161 8.41391 7.02885 8.42395 7.0461 8.43398C7.06334 8.44402 7.08059 8.45549 7.09783 8.46553C7.13089 8.4856 7.16394 8.50424 7.19699 8.52432L7.2128 8.53292C7.24442 8.55156 7.27603 8.56877 7.30765 8.58741C7.37807 8.62755 7.44849 8.66627 7.5189 8.70498C7.55483 8.72362 7.59076 8.7437 7.62525 8.76234C7.25879 9.87215 7.0231 11.0952 6.97855 12.3843H2.46031C2.46319 12.3154 2.46606 12.2452 2.47037 12.1764V12.1749ZM7.0461 14.9093C7.02598 14.9236 7.0073 14.9394 6.98718 14.9538C6.94837 14.9839 6.90957 15.014 6.87077 15.0441L6.86502 15.0484C6.82766 15.0771 6.79173 15.1072 6.7558 15.1373C6.71844 15.1688 6.67964 15.2004 6.64227 15.2319C6.60778 15.262 6.57329 15.2907 6.5388 15.3208C6.49569 15.3581 6.45401 15.3954 6.41234 15.4327C6.37785 15.4628 6.34479 15.4943 6.31174 15.5244C6.27725 15.5574 6.24276 15.589 6.20827 15.6219C6.1939 15.6363 6.17809 15.6506 6.16372 15.665C6.14647 15.6807 6.12923 15.6979 6.11198 15.7151L6.09761 15.7295C6.06312 15.7639 6.02719 15.7983 5.99414 15.8327C5.95965 15.8671 5.9266 15.9015 5.89354 15.936C5.87055 15.9603 5.84612 15.9847 5.82313 16.0105C5.80876 16.0249 5.79582 16.0406 5.78145 16.055C5.75846 16.0808 5.73546 16.1052 5.71103 16.131C5.6363 16.2127 5.56445 16.2959 5.49259 16.379C5.47679 16.3977 5.46241 16.4149 5.44661 16.4335C5.4308 16.4521 5.41643 16.4708 5.40062 16.488C5.37331 16.521 5.34745 16.5539 5.32014 16.5855C5.3029 16.607 5.28565 16.6285 5.26841 16.65L5.25116 16.6701C5.23392 16.693 5.21667 16.7145 5.19943 16.7375C5.17643 16.7676 5.15344 16.7977 5.13044 16.8278C5.11176 16.8522 5.09452 16.8766 5.07583 16.9009C5.00398 16.997 4.935 17.0959 4.86746 17.1949C4.8459 17.2264 4.82434 17.258 4.80279 17.291C4.79416 17.3039 4.78554 17.3168 4.77692 17.3311L4.75249 17.3684C4.72806 17.4057 4.70363 17.4444 4.6792 17.4831C4.66051 17.5118 4.64327 17.5404 4.62602 17.5691C4.60447 17.6035 4.58435 17.6365 4.56423 17.6709C4.54411 17.7053 4.52399 17.7383 4.50387 17.7727C4.49381 17.7885 4.48519 17.8057 4.47513 17.8215C4.46507 17.8387 4.45501 17.8559 4.44495 17.8731C4.43201 17.8946 4.42052 17.9176 4.40758 17.9391L4.4004 17.952C4.38746 17.9749 4.37453 17.9978 4.3616 18.0208C4.34723 18.0452 4.33429 18.071 4.32136 18.0954C4.3113 18.1154 4.2998 18.1341 4.28974 18.1541C4.28256 18.1685 4.27393 18.1828 4.26675 18.1972C4.25669 18.2158 4.24807 18.2344 4.23801 18.2531C4.22795 18.2732 4.21645 18.2932 4.20783 18.3133C4.19489 18.3377 4.1834 18.3606 4.1719 18.385C4.16471 18.3979 4.15897 18.4122 4.15178 18.4251C4.14316 18.4409 4.13597 18.4581 4.12735 18.4753C3.0639 16.8321 2.44738 14.8749 2.44738 12.7757H6.96849C6.96849 12.7987 6.96849 12.8216 6.96849 12.8445C6.96849 13.5371 7.01304 14.2139 7.09927 14.8663C7.07915 14.8806 7.06047 14.8964 7.04035 14.9107L7.0461 14.9093ZM12.5229 12.9177C12.4697 12.9205 12.4165 12.9234 12.3648 12.9263C12.3231 12.9291 12.2815 12.932 12.2398 12.9349C12.2082 12.9377 12.1765 12.9392 12.1449 12.942C12.1162 12.9449 12.0874 12.9463 12.0587 12.9507C12.0343 12.9535 12.0084 12.955 11.984 12.9578C11.9567 12.9607 11.9294 12.9636 11.9006 12.9664C11.8532 12.9707 11.8072 12.9765 11.7612 12.9822C11.7411 12.9851 11.7195 12.9879 11.6994 12.9908C11.6764 12.9937 11.6534 12.9965 11.6304 13.0008C11.5859 13.0066 11.5413 13.0137 11.4954 13.0209C11.4767 13.0238 11.458 13.0266 11.4393 13.0295C11.4221 13.0324 11.4034 13.0352 11.3861 13.0381C11.3488 13.0439 11.31 13.051 11.2726 13.0582C11.2396 13.0639 11.2065 13.0697 11.1734 13.0768C11.1375 13.084 11.1002 13.0912 11.0642 13.0983C11.0455 13.1026 11.0254 13.1055 11.0067 13.1098C10.9723 13.117 10.9378 13.1241 10.9033 13.1313C10.8832 13.1356 10.8616 13.1399 10.8429 13.1442C10.8055 13.1528 10.7696 13.1614 10.7337 13.17C10.7121 13.1743 10.6906 13.1801 10.669 13.1858C10.6259 13.1958 10.5828 13.2073 10.5397 13.2188C10.5268 13.2217 10.5138 13.226 10.5009 13.2288C10.4535 13.2417 10.406 13.2546 10.3586 13.2675C10.3313 13.2747 10.3026 13.2833 10.2753 13.2919C10.2494 13.2991 10.2221 13.3062 10.1962 13.3149C10.1387 13.3321 10.0813 13.3493 10.0252 13.3679C9.98353 13.3808 9.94185 13.3951 9.90161 13.4081C9.87862 13.4152 9.85706 13.4224 9.83551 13.431C9.75934 13.4568 9.68461 13.4826 9.60845 13.5113C9.5797 13.5213 9.54952 13.5328 9.52078 13.5443C9.4906 13.5557 9.46043 13.5672 9.43025 13.5787C9.40294 13.5902 9.3742 13.6002 9.34689 13.6117C9.32965 13.6188 9.31097 13.626 9.29372 13.6332C9.24199 13.6547 9.19025 13.6762 9.13851 13.6977C9.11552 13.7077 9.09253 13.7178 9.06953 13.7278L9.04654 13.7378C8.97612 13.768 8.9057 13.8009 8.83529 13.8339C8.80367 13.8482 8.77349 13.8626 8.74331 13.8784C8.7117 13.8941 8.67864 13.9099 8.64703 13.9257C8.61541 13.9415 8.58236 13.9572 8.55074 13.973C8.53062 13.983 8.5105 13.9945 8.48895 14.0045C8.44583 14.026 8.40272 14.049 8.35961 14.0719C8.30931 14.0992 8.25901 14.1264 8.21015 14.1537C8.17853 14.1709 8.14692 14.1895 8.11674 14.2067C8.08656 14.2239 8.05494 14.2426 8.02476 14.2598C8.00321 14.2727 7.98309 14.2841 7.96153 14.297C7.93279 14.3143 7.90548 14.3315 7.87818 14.3472C7.85518 14.3601 7.83363 14.3745 7.81063 14.3888C7.74884 14.4275 7.68704 14.4662 7.62669 14.5064C7.60226 14.5222 7.57926 14.5379 7.55627 14.5537C7.5304 14.5709 7.50453 14.5881 7.47866 14.6053C7.41256 14.0361 7.3795 13.4496 7.3795 12.8488C7.3795 12.8259 7.3795 12.803 7.3795 12.78H12.8074V12.9134C12.7313 12.9134 12.6565 12.9162 12.5818 12.9205C12.5631 12.9205 12.5444 12.922 12.5272 12.9234L12.5229 12.9177ZM18.5256 14.601L18.517 14.5953C18.4883 14.5767 18.461 14.558 18.4322 14.5379C18.4006 14.5179 18.369 14.4964 18.3374 14.4763C18.3187 14.4648 18.3015 14.4533 18.2828 14.4404C18.2555 14.4232 18.2282 14.406 18.2009 14.3888C18.1736 14.3716 18.1463 14.3544 18.1189 14.3386C18.0112 14.2727 17.9034 14.2096 17.7942 14.1479C17.7582 14.1279 17.7223 14.1078 17.6849 14.0877L17.6519 14.0705L17.6217 14.0547C17.5369 14.0103 17.4521 13.9658 17.3673 13.9242C17.3386 13.9099 17.3113 13.897 17.2826 13.8827C17.2538 13.8683 17.2251 13.8554 17.1978 13.8425C17.1676 13.8282 17.1388 13.8153 17.1087 13.8009C17.0526 13.7751 16.9951 13.7493 16.9391 13.7249C16.9175 13.7149 16.8945 13.7063 16.873 13.6963C16.8471 13.6848 16.8198 13.6733 16.7939 13.6618C16.7408 13.6403 16.6876 13.6174 16.6344 13.5973C16.6086 13.5873 16.5813 13.5758 16.5539 13.5658C16.5266 13.5557 16.5008 13.5457 16.4735 13.5342C16.4189 13.5142 16.3657 13.4941 16.3111 13.474C16.2565 13.4539 16.2019 13.4353 16.1472 13.4167C16.1156 13.4066 16.0855 13.3951 16.0538 13.3851C16.0136 13.3722 15.9748 13.3593 15.9346 13.3464C15.9087 13.3378 15.8843 13.3306 15.8584 13.3235C15.8268 13.3134 15.7966 13.3048 15.765 13.2962C15.742 13.289 15.7176 13.2819 15.6946 13.2761C15.6514 13.2632 15.6083 13.2518 15.5638 13.2403C15.548 13.236 15.5322 13.2317 15.5164 13.2274C15.4833 13.2188 15.4503 13.2102 15.4172 13.2016C15.3813 13.193 15.3453 13.1844 15.3094 13.1758C15.2649 13.1643 15.2203 13.1543 15.1743 13.1442C15.1513 13.1385 15.1269 13.1328 15.1025 13.1284C15.0277 13.1127 14.953 13.0969 14.8783 13.0826C14.8625 13.0797 14.8467 13.0768 14.8309 13.074H14.8251C14.7935 13.0668 14.7633 13.0611 14.7317 13.0568C14.7058 13.0525 14.68 13.0482 14.6541 13.0439C14.6297 13.0396 14.6038 13.0352 14.5779 13.0309C14.5032 13.018 14.427 13.008 14.3509 12.9965C14.3135 12.9922 14.2776 12.9865 14.2402 12.9822C14.2043 12.9779 14.1698 12.9736 14.1339 12.9693C14.1008 12.965 14.0692 12.9621 14.0376 12.9593C14.0074 12.9564 13.9758 12.9521 13.9456 12.9507C13.9169 12.9478 13.8881 12.9449 13.8594 12.942C13.8278 12.9392 13.7962 12.9363 13.7645 12.9349C13.7229 12.932 13.6812 12.9291 13.6395 12.9263C13.5863 12.9234 13.5332 12.9191 13.4814 12.9177C13.4627 12.9177 13.4441 12.9162 13.4268 12.9148C13.3521 12.9119 13.2759 12.9091 13.2012 12.9076V12.7743H18.6291C18.6291 12.7972 18.6291 12.8202 18.6291 12.8431C18.6291 13.4439 18.5946 14.0303 18.53 14.5996L18.5256 14.601ZM21.8669 18.4768C21.8511 18.4423 21.8339 18.4094 21.818 18.3764C21.8051 18.3506 21.7936 18.3262 21.7807 18.3004C21.7663 18.2717 21.7519 18.243 21.7376 18.2158L21.7333 18.2086C21.7218 18.1871 21.7117 18.1656 21.7002 18.1441C21.6887 18.1226 21.6772 18.1011 21.6657 18.0796C21.647 18.0437 21.6269 18.0079 21.6068 17.972L21.5881 17.9391L21.5694 17.9061C21.5565 17.8817 21.5421 17.8573 21.5277 17.833C21.5119 17.8057 21.4961 17.7785 21.4803 17.7527C21.4602 17.7182 21.4401 17.6853 21.42 17.6509C21.3567 17.5447 21.2906 17.4415 21.2216 17.3383C21.203 17.311 21.1843 17.2824 21.1656 17.2551C21.1527 17.2365 21.1397 17.2164 21.1268 17.1963C21.0952 17.149 21.0621 17.1031 21.0291 17.0558C21.009 17.0271 20.9888 16.9999 20.9687 16.9712C20.9486 16.944 20.9285 16.9167 20.9084 16.888C20.8882 16.8608 20.8681 16.8336 20.8466 16.8063C20.825 16.7762 20.802 16.7475 20.779 16.7188C20.7603 16.6945 20.7417 16.6715 20.723 16.6472C20.6856 16.5998 20.6482 16.5525 20.6094 16.5052C20.5908 16.4823 20.5721 16.4593 20.552 16.4364C20.5261 16.4048 20.5002 16.3747 20.4744 16.3446C20.4514 16.3174 20.4284 16.2916 20.4054 16.2643C20.3752 16.2299 20.3465 16.1969 20.3163 16.1639C20.2803 16.1238 20.2444 16.0851 20.2085 16.0464C20.1841 16.0191 20.1596 15.9933 20.1338 15.9675C20.0562 15.8858 19.9771 15.8055 19.8966 15.7252C19.8665 15.6951 19.8348 15.665 19.8032 15.6348C19.7845 15.6176 19.7659 15.599 19.7472 15.5818C19.7285 15.5631 19.7084 15.5445 19.6883 15.5273C19.6552 15.4958 19.6222 15.4656 19.5877 15.4355C19.556 15.4069 19.5244 15.3782 19.4914 15.3495C19.4713 15.3323 19.4511 15.3137 19.4296 15.2965C19.4095 15.2792 19.3879 15.2606 19.3678 15.2434C19.3261 15.209 19.2844 15.1731 19.2428 15.1387C19.158 15.0685 19.0703 14.9996 18.9826 14.9323C18.9539 14.9093 18.9237 14.8878 18.895 14.8663C18.8662 14.8448 18.8375 14.8247 18.8102 14.8032C18.8389 14.8247 18.8677 14.8448 18.895 14.8663C18.9798 14.2139 19.0258 13.5385 19.0258 12.846C19.0258 12.823 19.0258 12.8001 19.0258 12.7772H23.5469C23.5469 14.8778 22.9304 16.835 21.8669 18.4768Z" fill="#1A1A1A"/>'
                + '<path d="M16.0768 1.20898L16.416 1.31079L16.3887 1.79687L16.3901 1.7983L16.6387 1.37818L16.9764 1.47998L16.7436 2.24997L16.518 2.18258L16.6675 1.68789H16.666L16.3829 2.141L16.2047 2.08794L16.2205 1.55311H16.2191L16.0696 2.04636L15.844 1.97897L16.0768 1.20898Z" fill="white"/>'
                + '<path d="M17.3371 1.62012L17.5627 1.70902L17.5411 2.56503L17.3011 2.47183L17.3112 2.35282L17.0726 2.25962L16.9965 2.35282L16.7637 2.26249L17.3342 1.62155L17.3371 1.62012ZM17.3299 2.17215L17.3529 1.91549H17.3514L17.1876 2.11623L17.3299 2.17215Z" fill="white"/>'
                + '<path d="M18.1778 2.54529C18.0844 2.74603 17.9565 2.78187 17.7725 2.69728C17.5872 2.61124 17.5527 2.46929 17.6274 2.31013L17.6561 2.24848L17.8588 2.34311L17.8387 2.38469C17.8128 2.44061 17.7884 2.49223 17.8487 2.52091C17.9076 2.54815 17.9364 2.47646 17.9507 2.44348L18.1706 1.97461L18.3962 2.07928L18.1778 2.54529Z" fill="white"/>'
                + '<path d="M18.5514 2.15674L18.7698 2.27575L18.4824 2.80054L18.7957 2.97117L18.698 3.15184L18.1663 2.86363L18.5514 2.15674Z" fill="white"/>'
                + '<path d="M19.2053 2.51963L18.7866 3.20703L18.9991 3.33587L19.4178 2.64847L19.2053 2.51963Z" fill="white"/>'
                + '<path d="M19.4223 3.28774C19.4108 3.30494 19.4036 3.32071 19.3993 3.33649C19.3878 3.38667 19.4266 3.42539 19.464 3.4512C19.497 3.47414 19.5559 3.49708 19.5904 3.44833C19.6134 3.41392 19.5904 3.38524 19.4985 3.27483C19.4137 3.17303 19.3116 3.06262 19.4036 2.92927C19.5085 2.77585 19.6853 2.79879 19.8218 2.89056C19.9669 2.98806 20.0575 3.13001 19.9526 3.29634L19.7586 3.16442C19.7787 3.14148 19.7801 3.11711 19.7701 3.09416C19.7614 3.07122 19.7413 3.04971 19.7212 3.03681C19.6925 3.01817 19.6422 2.99379 19.6163 3.03107C19.5876 3.08126 19.6767 3.15582 19.7528 3.24615C19.829 3.33649 19.8937 3.44259 19.8103 3.56591C19.6925 3.7394 19.4941 3.68778 19.3461 3.58741C19.27 3.53579 19.0731 3.36373 19.2153 3.15009L19.4208 3.28917L19.4223 3.28774Z" fill="white"/>'
                + '<path d="M20.7876 4.28146C20.6439 4.45209 20.483 4.4564 20.2933 4.29867C20.105 4.14095 20.0806 3.98035 20.2243 3.80972L20.5419 3.43262L20.7316 3.59178L20.4485 3.9273C20.3953 3.99039 20.3292 4.06925 20.4226 4.14668C20.5117 4.22268 20.5778 4.14381 20.631 4.08072L20.9141 3.7452L21.1038 3.90436L20.7862 4.2829L20.7876 4.28146Z" fill="white"/>'
                + '<path d="M21.1554 4.95265C21.0663 4.96555 20.983 4.92684 20.9212 4.86518C20.7502 4.69885 20.7746 4.46513 20.9356 4.30167C21.1497 4.08229 21.3911 4.14538 21.5205 4.27156C21.667 4.41495 21.6829 4.58558 21.5751 4.74617L21.4041 4.57984C21.4386 4.53109 21.4328 4.46657 21.3897 4.42642C21.2675 4.30741 21.1468 4.43932 21.108 4.47947C21.0548 4.53396 20.9844 4.64867 21.0922 4.75477C21.1339 4.79492 21.1957 4.81499 21.2474 4.78058L21.1684 4.70459L21.2891 4.58127L21.5248 4.81069L21.2144 5.12758L21.1023 5.0186L21.154 4.95408L21.1554 4.95265Z" fill="white"/>'
                + '<path d="M22.0954 4.89941L22.2549 5.08151L21.841 5.83143L21.6714 5.63785L21.7361 5.53748L21.5679 5.34535L21.4573 5.3941L21.2935 5.20626L22.0954 4.90085V4.89941ZM21.8338 5.38693L21.9732 5.16898L21.7346 5.27222L21.8352 5.38693H21.8338Z" fill="white"/>'
                + '<path d="M22.5207 5.38965L22.7305 5.67212L22.4172 6.04636L22.4186 6.04779L22.8684 5.85996L23.0783 6.14386L22.4301 6.62134L22.2907 6.43207L22.706 6.12665L22.7046 6.12379L22.2059 6.31736L22.0953 6.16967L22.4287 5.75098L22.4273 5.74811L22.0105 6.05496L21.8711 5.86712L22.5207 5.38965Z" fill="white"/>'
                + '<path d="M23.2953 6.48975L23.4232 6.69622L22.8915 7.3687L22.7564 7.15076L22.8369 7.06186L22.7018 6.84391L22.5854 6.87402L22.4546 6.66181L23.2967 6.49118L23.2953 6.48975ZM22.9576 6.92707L23.1315 6.73494L22.88 6.79659L22.9604 6.92564L22.9576 6.92707Z" fill="white"/>'
                + '<path d="M23.8019 7.36493L23.0833 7.72949L23.1959 7.95061L23.9146 7.58605L23.8019 7.36493Z" fill="white"/>'
                + '<path d="M23.5628 8.09139C23.5441 8.09999 23.5297 8.11003 23.5182 8.1215C23.4808 8.15734 23.4952 8.21183 23.5139 8.25341C23.5311 8.29069 23.5685 8.34088 23.6231 8.3165C23.6605 8.2993 23.6576 8.26345 23.6361 8.12006C23.6159 7.98958 23.5886 7.84189 23.7367 7.77594C23.9062 7.69994 24.0456 7.81178 24.1132 7.96234C24.185 8.1215 24.1879 8.28926 24.0126 8.37673L23.9163 8.16308C23.9465 8.15448 23.9594 8.1344 23.9623 8.11003C23.9666 8.08565 23.9608 8.05697 23.9508 8.03547C23.9364 8.00536 23.9062 7.95804 23.8646 7.97668C23.8143 8.00392 23.8502 8.11433 23.8689 8.23047C23.8875 8.34661 23.8847 8.47136 23.7496 8.53302C23.5584 8.61905 23.4176 8.47136 23.3429 8.3079C23.3055 8.22474 23.2279 7.97381 23.4622 7.86627L23.5642 8.09282L23.5628 8.09139Z" fill="white"/>'
                + '<path d="M24.3187 8.48828L24.4049 8.72057L23.843 8.92848L23.9666 9.26257L23.7726 9.33426L23.5627 8.76788L24.3187 8.48828Z" fill="white"/>'
                + '<path d="M24.6419 9.41627L24.7109 9.64856L24.0211 10.1576L23.9478 9.91096L24.0484 9.84643L23.9765 9.60124H23.8558L23.7854 9.36035L24.6419 9.41627ZM24.2007 9.74893L24.4192 9.60984V9.60698L24.1576 9.60267L24.2007 9.74893Z" fill="white"/>'
                + '<path d="M24.8229 10.04L24.8948 10.3842L24.4536 10.5935L24.455 10.5949L24.9422 10.6122L25.014 10.9577L24.2236 11.1197L24.1762 10.8903L24.6835 10.7856L24.6821 10.7842L24.1475 10.7512L24.1101 10.5706L24.5887 10.3297V10.3268L24.0814 10.4315L24.0339 10.2021L24.8229 10.04Z" fill="white"/>'
                + '<path d="M24.5743 11.7633C24.5542 11.7647 24.5369 11.7705 24.5226 11.7776C24.4751 11.8006 24.4708 11.8551 24.4751 11.9009C24.4794 11.9411 24.4981 12.0013 24.5585 11.9956C24.6002 11.9913 24.6073 11.9554 24.6347 11.8149C24.6591 11.6844 24.6806 11.5367 24.8416 11.5224C25.027 11.5052 25.1218 11.6557 25.1376 11.8206C25.1534 11.9941 25.1017 12.1547 24.9077 12.1791L24.8861 11.9454C24.9163 11.9468 24.9364 11.9311 24.9479 11.911C24.9609 11.8895 24.9637 11.8608 24.9609 11.8364C24.958 11.8034 24.9436 11.749 24.8991 11.7533C24.8416 11.7633 24.8402 11.878 24.82 11.9956C24.7985 12.1117 24.7568 12.2293 24.6102 12.2422C24.4004 12.2623 24.3156 12.0759 24.2984 11.8981C24.2897 11.8077 24.2984 11.5453 24.5542 11.5195L24.5772 11.7662L24.5743 11.7633Z" fill="white"/>'
                + '<path d="M25.154 12.3029L24.3486 12.3389L24.3597 12.5867L25.1651 12.5507L25.154 12.3029Z" fill="white"/>'
                + '<path d="M25.1766 12.7253L25.1723 12.9791L24.7368 13.2057V13.2085L25.168 13.2143L25.1651 13.4494L24.3589 13.4365L24.3632 13.1956L24.8073 12.9562V12.9533L24.3675 12.9461L24.3704 12.7124L25.1766 12.7253Z" fill="white"/>'
                + '<path d="M24.3905 14.1322C24.3244 14.072 24.3014 13.9831 24.3086 13.8956C24.3287 13.659 24.5242 13.5285 24.7527 13.5472C25.0588 13.5715 25.1637 13.7967 25.1493 13.9773C25.132 14.1809 25.0099 14.3014 24.8188 14.3215L24.8389 14.0849C24.8978 14.0806 24.9438 14.0347 24.9481 13.9759C24.9625 13.8067 24.7828 13.7967 24.7282 13.7924C24.6535 13.7866 24.5184 13.8053 24.5069 13.9558C24.5026 14.0132 24.527 14.0734 24.5845 14.0906L24.5931 13.9816L24.7656 13.996L24.7383 14.3243L24.2957 14.2885L24.3086 14.1322H24.3919H24.3905Z" fill="white"/>'
                + '<path d="M25.0343 14.799L24.9955 15.0385L24.1533 15.199L24.1936 14.9453L24.3128 14.9295L24.3531 14.6771L24.2453 14.6226L24.2855 14.3774L25.0343 14.7976V14.799ZM24.491 14.9094L24.7483 14.8779V14.875L24.5155 14.7588L24.491 14.9094Z" fill="white"/>'
                + '<path d="M24.9164 15.477L24.8201 15.8799C24.7698 16.0921 24.5959 16.1294 24.4838 16.1036C24.2941 16.0577 24.2352 15.91 24.2783 15.7308L24.3128 15.5888L24.0757 15.5329L24.1332 15.292L24.9178 15.4784L24.9164 15.477ZM24.4982 15.6318L24.4752 15.725C24.4608 15.7867 24.4493 15.8541 24.5284 15.8727C24.6002 15.8899 24.6175 15.8354 24.6318 15.7766L24.6577 15.6691L24.4982 15.6304V15.6318Z" fill="white"/>'
                + '<path d="M24.0067 16.8882C23.794 16.8194 23.7293 16.6731 23.8041 16.4394C23.8788 16.2057 24.0182 16.1225 24.2309 16.1914L24.7022 16.3419L24.6261 16.5785L24.2079 16.4452C24.1288 16.4208 24.0311 16.3892 23.9952 16.5039C23.9593 16.6158 24.057 16.6473 24.136 16.6717L24.5542 16.8051L24.4781 17.0416L24.0067 16.8911V16.8882Z" fill="white"/>'
                + '<path d="M24.4149 17.2078L24.2367 17.6451C24.1835 17.7756 24.0657 17.8588 23.9248 17.8014C23.8472 17.7699 23.7797 17.701 23.7825 17.6136C23.7337 17.6666 23.6489 17.6767 23.5512 17.648C23.5138 17.6365 23.4247 17.6007 23.3816 17.6078L23.475 17.3784C23.5167 17.3827 23.5584 17.3942 23.5972 17.4057C23.6704 17.4286 23.7481 17.4515 23.784 17.3612L23.8343 17.2393L23.5742 17.1332L23.6676 16.9038L24.4149 17.2064V17.2078ZM23.9952 17.3053L23.9464 17.4257C23.9291 17.4688 23.9119 17.5304 23.9794 17.5562C24.0268 17.5749 24.0642 17.5605 24.1001 17.4731L24.1433 17.3655L23.9952 17.3053Z" fill="white"/>'
                + '<path d="M23.9448 18.2917L23.8371 18.5082L22.9849 18.4107L23.0998 18.1813L23.2177 18.2028L23.3326 17.9748L23.2464 17.8917L23.3585 17.6694L23.9463 18.2946L23.9448 18.2917ZM23.3944 18.2344L23.6488 18.2803L23.462 18.0982L23.3944 18.2344Z" fill="white"/>'
                + '<path d="M18.895 14.8647L18.9022 14.8561C18.8734 14.8346 18.8447 14.8145 18.8174 14.793L18.8044 14.8116C18.8332 14.8331 18.8619 14.8532 18.8892 14.8747L18.8964 14.8661L18.9036 14.8575C18.8749 14.836 18.8461 14.8145 18.8188 14.7944L18.8059 14.813C18.8346 14.8346 18.8634 14.8546 18.8907 14.8761L18.9079 14.889V14.8604L18.9036 14.8575L18.8964 14.8661L18.895 14.8647Z" fill="#EC008C"/>'
                + '<path d="M20.6955 21.8877H5.3042V23.9998H20.6955V21.8877Z" fill="black"/>'
                + '<path d="M10.1245 23.1136H9.52953V23.6055H9.13721V22.4297H9.52953V22.8498H10.1245V22.4297H10.5183V23.6055H10.1245V23.1136Z" fill="white"/>'
                + '<path d="M11.3993 22.4297H11.8793L12.3852 23.6055H11.9641L11.8937 23.4148H11.3792L11.3088 23.6055H10.8877L11.3993 22.4297ZM11.6393 22.7265H11.6364L11.4726 23.171H11.8031L11.6393 22.7265Z" fill="white"/>'
                + '<path d="M12.6565 22.4297H13.0488V23.333H13.7659V23.6055H12.6565V22.4297Z" fill="white"/>'
                + '<path d="M14.6195 22.4297H15.0995L15.6068 23.6055H15.1858L15.1153 23.4148H14.6009L14.5304 23.6055H14.1094L14.621 22.4297H14.6195ZM14.8581 22.7265H14.8552L14.6914 23.171H15.0219L14.8581 22.7265Z" fill="white"/>'
                + '<path d="M15.877 22.4297H16.2693V23.333H16.9864V23.6055H15.877V22.4297Z" fill="white"/>'
                + '<path d="M9.57091 1.00532C9.53786 0.90782 9.47319 0.80028 9.46888 0.735757C9.46457 0.671233 9.39415 0.605275 9.33379 0.735757C9.27343 0.866238 9.30649 1.02826 9.35679 1.14011C9.40852 1.25195 9.57091 1.61041 9.62265 1.74089C9.67439 1.87138 9.71319 2.05204 9.706 2.11513C9.69738 2.17822 9.81953 2.2198 9.84684 2.11513C9.87414 2.01046 9.89857 1.76384 9.84684 1.63192C9.7951 1.50001 9.57235 1.00676 9.57235 1.00676L9.57091 1.00532Z" fill="white"/>'
                + '<path d="M8.42835 1.31763C8.42835 1.31763 8.32632 1.31763 8.32057 1.26171C8.31626 1.20579 8.32345 1.03373 8.34788 1.01509C8.37231 0.996447 8.54045 1.04233 8.58212 1.06671C8.6238 1.08965 8.62811 1.14127 8.6238 1.20149C8.61949 1.26171 8.73158 1.45242 8.74452 1.46245C8.75889 1.47106 8.84655 1.45815 8.89828 1.46245C8.95002 1.46675 8.92703 1.53271 8.92703 1.60154C8.92703 1.67036 8.91266 1.74636 8.84368 1.74636C8.77469 1.74636 8.69853 1.74206 8.62667 1.80228C8.55482 1.8625 8.4571 1.94136 8.58212 1.93276C8.70859 1.92272 8.81493 1.87684 8.85661 1.8496C8.89829 1.82235 9.08511 1.7607 9.13684 1.73775C9.18858 1.71481 9.1972 1.74206 9.1972 1.82092C9.1972 1.89978 9.17421 1.99298 9.08942 2.06754C9.00607 2.1421 8.8408 2.29553 8.78332 2.43748C8.72583 2.57943 8.65973 2.61241 8.57637 2.67263C8.49302 2.73285 8.36656 2.79881 8.28752 2.79881C8.20848 2.79881 8.10501 2.73572 8.10501 2.73572C8.10501 2.73572 8.11363 2.86764 7.99004 2.94363C7.86645 3.01963 7.77591 3.07411 7.72849 3.08272C7.68106 3.09132 7.56466 3.05547 7.56466 3.05547C7.56466 3.05547 7.56466 3.13434 7.48131 3.18596C7.39795 3.23757 7.36921 3.26052 7.34622 3.23184C7.32322 3.2046 7.2643 3.10996 7.25568 3.18452C7.2485 3.25908 7.27293 3.34225 7.25568 3.4039C7.23844 3.46412 7.2758 3.72509 7.14502 3.83119C7.01425 3.93873 6.72539 4.16672 6.58599 4.19396C6.44659 4.22264 6.28276 4.17962 6.20516 4.05918C6.12756 3.93873 6.08301 3.81255 6.08301 3.65053C6.08301 3.4885 6.12037 3.3996 6.16636 3.3996C6.21235 3.3996 6.23678 3.42254 6.24109 3.55302C6.2454 3.68351 6.3345 3.84123 6.48827 3.84123C6.64204 3.84123 6.78144 3.75233 6.85617 3.69211C6.9309 3.63189 7.07748 3.50857 7.02 3.43688C6.96108 3.36375 6.86623 3.26912 6.83317 3.23757C6.80012 3.2046 6.80012 3.06551 6.81449 2.99095C6.82886 2.91639 6.87916 2.86477 6.91221 2.92643C6.94527 2.98808 6.99557 3.00529 7.0473 3.02393C7.09904 3.04257 7.1364 3.00099 7.1364 2.94507C7.1364 2.88915 7.15077 2.78161 7.19245 2.7687C7.23412 2.75436 7.26287 2.78734 7.28586 2.84756C7.30885 2.90779 7.40226 2.89345 7.41664 2.82462C7.43101 2.75436 7.39077 2.63248 7.47268 2.63392C7.5546 2.63535 7.57472 2.68554 7.57472 2.73572C7.57472 2.78591 7.5934 2.80025 7.72417 2.71708C7.85495 2.63392 7.95699 2.63822 7.94836 2.56366C7.9383 2.4891 7.60346 1.88831 7.55172 1.79081C7.49999 1.6933 7.48131 1.60871 7.49568 1.51694C7.51005 1.42374 7.57472 1.43378 7.60346 1.494C7.63076 1.55422 7.84202 1.90408 7.87363 1.98294C7.90669 2.06181 8.06046 2.33137 8.09351 2.37869C8.12656 2.42457 8.14524 2.49914 8.25159 2.46185C8.35937 2.42457 8.47578 2.35431 8.53614 2.31273C8.59649 2.27115 8.68559 2.16935 8.60655 2.18225C8.52751 2.19516 8.42979 2.21093 8.39243 2.25681C8.35506 2.3027 8.23434 2.26972 8.23434 2.12203C8.23434 1.97434 8.30476 1.80515 8.36943 1.71768C8.4341 1.62878 8.51889 1.56856 8.51889 1.53128C8.51889 1.494 8.42979 1.32193 8.42979 1.32193L8.42835 1.31763Z" fill="white"/>'
                + '<path d="M4.91349 4.02914C4.80427 3.93307 4.62463 3.78395 4.57577 3.72086C4.52691 3.65777 4.50679 3.58895 4.46799 3.58321C4.42919 3.57891 4.35015 3.57891 4.36452 3.72086C4.37889 3.86282 4.48236 3.94168 4.59014 4.02914C4.69792 4.11661 5.05145 4.46504 5.12905 4.54247C5.20809 4.62133 5.26702 4.69446 5.27133 4.75755C5.27564 4.82064 5.42366 4.84071 5.41791 4.70306C5.4136 4.56541 5.06582 4.16106 4.91205 4.02771L4.91349 4.02914Z" fill="white"/>'
                + '<path d="M5.02678 4.85641C4.98223 4.79762 4.70343 4.51801 4.66894 4.45923C4.63445 4.40044 4.56547 4.204 4.50224 4.12657C4.43901 4.04771 4.3456 3.91149 4.29673 3.88712C4.24787 3.86274 4.19326 3.78961 4.13003 3.81399C4.0668 3.83836 4.06105 3.89715 4.09123 3.96598C4.12141 4.0348 4.12572 4.09789 4.14584 4.15668C4.16596 4.21547 4.18033 4.18106 4.26368 4.23554C4.34703 4.29003 4.5123 4.48217 4.4505 4.4707C4.43613 4.46783 4.16596 4.41191 3.97482 4.38323C3.78369 4.35455 3.6328 4.31441 3.59256 4.38323C3.55232 4.45206 3.72333 4.50654 3.72333 4.58971C3.72333 4.67287 3.79806 4.74026 3.92022 4.74026C4.04237 4.74026 4.06249 4.72019 4.13578 4.68148C4.20907 4.64276 4.22057 4.66714 4.36428 4.70585C4.50799 4.74457 4.62583 4.81913 4.61146 4.91663C4.59709 5.01413 4.56691 5.05428 4.51805 5.10303C4.46919 5.15178 4.50368 5.24498 4.57697 5.30807C4.65026 5.37116 4.69481 5.38694 4.7681 5.35682C4.8414 5.32815 4.99373 5.13171 5.02822 5.06288C5.06271 4.99406 5.07277 4.91663 5.02822 4.85784L5.02678 4.85641ZM4.82128 4.88078C4.80116 4.9195 4.72355 4.92953 4.72786 4.90516C4.73218 4.88078 4.7523 4.76751 4.7523 4.76751C4.7523 4.76751 4.83996 4.84063 4.82128 4.87935V4.88078Z" fill="white"/>'
                + '<path d="M2.35411 6.06528C2.35411 6.06528 2.85422 6.46676 2.96775 6.55423C3.08128 6.64169 3.24224 6.75067 3.33134 6.75927C3.42044 6.76931 3.45205 6.79368 3.5857 6.70478C3.71935 6.61732 3.76821 6.54276 3.76821 6.49974C3.76821 6.45673 3.73372 6.35779 3.86594 6.33341C3.99815 6.30904 3.98522 6.17999 3.98809 6.11833C3.99096 6.05668 3.9924 6.03517 4.07144 6.02083C4.15048 6.00649 4.19934 5.8545 4.15048 5.74123C4.10162 5.62795 3.98809 5.51611 3.89468 5.44729C3.80127 5.37846 3.69348 5.39853 3.68917 5.47596C3.68486 5.55483 3.75815 5.61792 3.81708 5.6724C3.876 5.72689 3.89037 5.79428 3.83719 5.78568C3.78258 5.77564 3.74378 5.69821 3.69923 5.67814C3.65468 5.65806 3.59145 5.69821 3.62594 5.77564C3.66043 5.8545 3.71935 5.89322 3.71935 5.96634C3.71935 6.03947 3.63025 6.05955 3.61157 6.05381C3.59145 6.04951 3.54834 5.97065 3.51385 5.95057C3.47936 5.9305 3.37589 5.95057 3.42044 6.05811C3.46499 6.16565 3.52822 6.17569 3.50379 6.28323C3.47936 6.39077 3.41612 6.42948 3.37157 6.46963C3.32702 6.50834 3.23936 6.4897 3.15601 6.42518C3.07266 6.36209 2.51219 5.87744 2.45614 5.84733C2.4001 5.81866 2.3656 5.80288 2.35555 5.89608C2.34549 5.98929 2.35555 6.06241 2.35555 6.06241L2.35411 6.06528Z" fill="white"/>'
                + '<path d="M2.99944 6.58023C2.91609 6.5157 2.65598 6.48129 2.45335 6.47269C2.25071 6.46265 2.00497 6.47269 1.95611 6.52718C1.90725 6.58023 1.97048 6.63471 2.04952 6.71788C2.12856 6.80104 2.18173 6.80534 2.21191 6.84549C2.24209 6.88421 2.38293 6.85983 2.45478 6.80104C2.52664 6.74225 2.46197 6.70784 2.66891 6.71358C2.87442 6.71788 2.9822 6.71358 3.04687 6.83546C3.1101 6.95733 3.1101 7.10502 3.04687 7.21686C2.98364 7.33014 2.89022 7.45632 2.88448 7.50507C2.88016 7.55382 2.89885 7.56242 3.02675 7.53088C3.15465 7.49933 3.30123 7.2355 3.33572 7.18245C3.37022 7.12796 3.28974 6.95303 3.25956 6.83976C3.22938 6.72648 3.0325 6.60604 2.99944 6.58023Z" fill="white"/>'
                + '<path d="M2.06358 7.66992C2.06358 7.66992 2.01472 7.86492 2.06358 7.94952C2.11244 8.03269 2.21016 8.17464 2.2892 8.23343C2.36825 8.29222 2.46022 8.351 2.50477 8.23343C2.54932 8.11585 2.59243 8.0628 2.6183 8.05276C2.64273 8.04272 2.69447 8.03555 2.67722 8.14596C2.65998 8.25637 2.64273 8.46858 2.58381 8.58616C2.52489 8.70373 2.43723 8.7912 2.31938 8.79694C2.20154 8.80124 2.10957 8.77686 2.04202 8.68509C1.97592 8.59189 1.86813 8.54744 1.85807 8.62631C1.84802 8.70517 1.9558 8.7826 2.06933 8.89014C2.18286 8.99768 2.26046 9.08658 2.41711 9.09088C2.57375 9.09518 2.65279 9.02779 2.73614 8.92025C2.81949 8.81271 2.91291 8.6177 2.92297 8.38255C2.93303 8.1474 2.93303 8.07427 2.87842 7.92228C2.82381 7.77029 2.7074 7.70146 2.6571 7.67279C2.60824 7.64411 2.56944 7.62404 2.48034 7.72154C2.39268 7.81904 2.35819 7.95096 2.31795 7.91224C2.27914 7.87353 2.24465 7.67279 2.25903 7.6183C2.2734 7.56381 2.38549 7.49642 2.39124 7.41756C2.39699 7.3387 2.39124 7.27991 2.32226 7.22686C2.25328 7.17237 2.19004 7.0806 2.12106 7.16377C2.05208 7.24693 1.91556 7.33009 1.89113 7.39318C1.8667 7.45627 1.88682 7.48639 1.93712 7.54948C1.98885 7.61257 2.06214 7.67135 2.06214 7.67135L2.06358 7.66992Z" fill="white"/>'
                + '<path d="M0.93564 9.87231C0.842228 9.86227 0.705704 9.81782 0.685585 9.87231C0.665465 9.92679 0.803427 10.0974 0.847977 10.1462C0.892527 10.1949 0.945699 10.1849 1.2015 10.205C1.45731 10.225 1.73179 10.2336 1.88413 10.3225C2.03646 10.41 2.18879 10.4502 2.21753 10.3856C2.24627 10.3225 2.11406 10.1318 1.90424 10.063C1.69299 9.99419 0.938514 9.87231 0.938514 9.87231H0.93564Z" fill="white"/>'
                + '<path d="M0.938498 10.8558C0.938498 10.8558 0.919816 10.9762 0.836464 10.9719C0.753112 10.9676 0.709999 10.8558 0.649641 10.8228C0.589283 10.7898 0.61084 10.721 0.684132 10.7023C0.757424 10.6837 0.780417 10.6134 0.832153 10.6005C0.883888 10.5862 0.921253 10.6565 0.921253 10.6794C0.921253 10.6794 1.62687 10.6794 1.74615 10.6837C1.86543 10.6866 1.99764 10.7439 2.04506 10.8285C2.09105 10.9117 2.07812 11.0465 2.07237 11.1497C2.06806 11.2515 2.03501 11.2945 2.0077 11.3132C1.9804 11.3318 1.90567 11.3691 1.97465 11.4207C2.04506 11.4723 2.06375 11.5655 2.02638 11.6028C1.98902 11.6401 1.88124 11.6731 1.93297 11.7046C1.98471 11.7376 2.035 11.7878 2.01632 11.858C1.99764 11.9283 1.93297 11.9555 1.90423 11.9699C1.87692 11.9842 1.90423 12.0301 1.95022 12.053C1.99764 12.076 1.99764 12.1506 1.99189 12.2065C1.98758 12.2624 1.97321 12.476 1.96315 12.5277C1.95453 12.5793 1.89273 12.5922 1.87405 12.6108C1.85537 12.6295 1.88842 12.6567 1.92579 12.6997C1.96315 12.7413 1.97752 12.813 1.97752 12.9076C1.97752 13.0023 1.95884 13.1973 1.94447 13.2675C1.9301 13.3378 1.87405 13.3937 1.83669 13.421C1.79932 13.4482 1.80938 13.4668 1.841 13.5371C1.87405 13.6074 1.92004 13.6532 1.9071 13.811C1.89273 13.9687 1.81082 14.102 1.75764 14.178C1.70447 14.254 1.62687 14.2526 1.57513 14.2669C1.5234 14.2813 0.927001 14.244 0.856584 14.244C0.786166 14.244 0.740179 14.2497 0.717185 14.2698C0.694191 14.2899 0.623774 14.2712 0.526051 14.2254C0.428328 14.1795 0.35791 14.049 0.35791 14.026C0.35791 14.0031 0.459944 13.9931 0.557667 13.9988C0.65539 14.0031 1.23454 14.0217 1.35095 14.026C1.46735 14.0303 1.5234 13.9802 1.55214 13.887C1.57944 13.7938 1.62687 13.6031 1.57513 13.6446C1.5234 13.6862 1.48172 13.7522 1.44867 13.7794C1.41562 13.8067 1.27191 13.7049 1.21586 13.6446C1.15981 13.5844 1.14975 13.3521 1.26616 13.2403C1.38256 13.1284 1.49466 13.1571 1.52196 13.203C1.5507 13.2489 1.5895 13.2489 1.61106 13.1801C1.63118 13.1098 1.62831 12.9578 1.63118 12.8689C1.63262 12.7786 1.63118 12.7055 1.56507 12.6639C1.5004 12.6223 1.45298 12.6366 1.41562 12.5836C1.37825 12.5291 1.36963 12.4646 1.4616 12.4603C1.55501 12.456 1.67573 12.4789 1.68579 12.3298C1.69441 12.1807 1.71597 12.0416 1.69441 12.0086C1.67429 11.9756 1.5737 11.9254 1.49897 11.8968C1.42424 11.8695 1.41562 11.7993 1.52771 11.7892C1.6398 11.7792 1.80507 11.7577 1.70591 11.6645C1.60675 11.5713 1.50328 11.5526 1.46448 11.524C1.42567 11.4967 1.49466 11.4537 1.56076 11.4537C1.62687 11.4537 1.73178 11.4652 1.73609 11.4308C1.7404 11.3978 1.76196 11.3548 1.67286 11.3232C1.58376 11.2902 1.53777 11.2673 1.53346 11.2343C1.52915 11.2013 1.5119 11.1598 1.63262 11.1555C1.75333 11.1511 1.81225 11.101 1.79932 11.0278C1.78639 10.9547 1.77202 10.9088 1.77202 10.9088L0.937061 10.8572L0.938498 10.8558Z" fill="white"/>'
                + '<path d="M0.506444 14.8513L0.431247 14.9263C0.395328 14.9622 0.395328 15.0203 0.431247 15.0561L0.506444 15.1311C0.542362 15.167 0.600597 15.167 0.636515 15.1311L0.711713 15.0561C0.747631 15.0203 0.747631 14.9622 0.711713 14.9263L0.636515 14.8513C0.600597 14.8155 0.542362 14.8155 0.506444 14.8513Z" fill="white"/>'
                + '<path d="M0.692479 13.1975L0.617282 13.2725C0.581364 13.3084 0.581363 13.3665 0.617282 13.4023L0.692479 13.4773C0.728397 13.5132 0.786632 13.5132 0.82255 13.4773L0.897748 13.4023C0.933666 13.3665 0.933666 13.3084 0.897748 13.2725L0.822551 13.1975C0.786632 13.1616 0.728397 13.1616 0.692479 13.1975Z" fill="white"/>'
                + '<path d="M0.946947 12.4983L0.87171 12.5733C0.835773 12.6091 0.835743 12.6673 0.871642 12.7031L0.946801 12.7782C0.9827 12.814 1.04094 12.8141 1.07687 12.7782L1.15211 12.7033C1.18805 12.6674 1.18808 12.6093 1.15218 12.5735L1.07702 12.4984C1.04112 12.4626 0.982884 12.4625 0.946947 12.4983Z" fill="white"/>'
                + '<path d="M2.87521 8.78899L2.96901 8.74212C3.01399 8.71965 3.06991 8.73821 3.09243 8.78309L3.13941 8.87668C3.16193 8.92155 3.14333 8.97735 3.09835 8.99982L3.00455 9.04669C2.95829 9.0698 2.90365 9.0506 2.88112 9.00573L2.83415 8.91213C2.81099 8.86598 2.83023 8.81146 2.87521 8.78899Z" fill="white"/>'
                + '<path d="M2.97963 8.47342L3.07335 8.42638C3.11957 8.40319 3.17424 8.4223 3.19684 8.46713L3.24398 8.56064C3.26658 8.60548 3.24807 8.66131 3.20314 8.68386L3.10942 8.73089C3.06448 8.75344 3.00852 8.73498 2.98592 8.69014L2.93879 8.59663C2.91619 8.5518 2.93469 8.49596 2.97963 8.47342Z" fill="white"/>'
                + '<path d="M9.02525 2.71251L9.0652 2.61572C9.08435 2.56931 9.13875 2.5467 9.18526 2.56581L9.28227 2.60566C9.32878 2.62477 9.35145 2.67905 9.3323 2.72545L9.29235 2.82224C9.2732 2.86865 9.2188 2.89126 9.17229 2.87216L9.07528 2.8323C9.02877 2.8132 9.0061 2.75891 9.02525 2.71251Z" fill="white"/>'
                + '<path d="M3.0342 17.5915L3.08267 17.4986C3.10591 17.4541 3.16213 17.4365 3.20674 17.4597L3.29977 17.508C3.34566 17.5319 3.36208 17.5873 3.33884 17.6318L3.29037 17.7246C3.26713 17.7691 3.21091 17.7868 3.1663 17.7636L3.07327 17.7153C3.02866 17.6921 3.01096 17.636 3.0342 17.5915Z" fill="white"/>'
                + '<path d="M3.1548 17.9196L3.20328 17.8268C3.22652 17.7823 3.28273 17.7646 3.32734 17.7878L3.42038 17.8361C3.46499 17.8593 3.48269 17.9154 3.45945 17.9599L3.41098 18.0528C3.38773 18.0973 3.33152 18.1149 3.28691 18.0917L3.19387 18.0434C3.14926 18.0202 3.13156 17.9641 3.1548 17.9196Z" fill="white"/>'
                + '<path d="M2.53202 15.3766C2.32508 15.2203 1.99598 15.2562 1.99598 15.2562C1.99598 15.2562 1.98017 15.0339 1.97299 14.9321C1.9658 14.8303 1.89538 14.6597 1.76605 14.5765C1.63671 14.4948 1.38665 14.5263 1.1869 14.5765C0.987138 14.6267 0.91672 14.8188 0.905224 14.8733C0.893727 14.9278 0.99145 15.0526 1.07336 15.0884C1.15528 15.1243 1.31192 15.1515 1.38953 15.1271C1.46713 15.1042 1.58066 15.0253 1.58497 14.9278C1.58928 14.8303 1.49443 14.7371 1.49443 14.7371C1.45132 14.6396 1.58785 14.7299 1.6324 14.8231C1.67695 14.9178 1.67838 15.0139 1.68269 15.1071C1.68701 15.2003 1.70569 15.2978 1.6324 15.3135C1.5591 15.3293 1.43264 15.4311 1.37659 15.5587C1.32198 15.6878 1.49012 15.824 1.6324 15.8441C1.77467 15.8641 1.98305 15.8555 2.03766 15.715C2.09227 15.5745 2.03047 15.4297 2.03047 15.4297C2.03047 15.4297 2.28053 15.4497 2.39837 15.5774C2.51621 15.7064 2.57801 15.8928 2.5737 16.0376C2.56938 16.1824 2.63262 16.2169 2.66423 16.1896C2.69585 16.1624 2.80076 16.0104 2.79645 15.8656C2.79213 15.7207 2.73753 15.53 2.53058 15.3738L2.53202 15.3766ZM1.25013 14.9522C1.21133 14.9522 1.17971 14.9207 1.17971 14.8819C1.17971 14.8432 1.21133 14.8117 1.25013 14.8117C1.28893 14.8117 1.32055 14.8432 1.32055 14.8819C1.32055 14.9207 1.28893 14.9522 1.25013 14.9522ZM1.72581 15.6562C1.68701 15.6562 1.65539 15.6247 1.65539 15.586C1.65539 15.5472 1.68701 15.5157 1.72581 15.5157C1.76461 15.5157 1.79623 15.5472 1.79623 15.586C1.79623 15.6247 1.76461 15.6562 1.72581 15.6562Z" fill="white"/>'
                + '<path d="M1.92274 16.3488C1.92274 16.3488 1.80202 16.4506 1.73161 16.4936C1.66119 16.5366 1.53616 16.5094 1.45424 16.4936C1.37233 16.4779 1.39964 16.4305 1.48155 16.3488C1.56346 16.2671 1.66406 16.1495 1.85232 16.1452C2.04058 16.1409 2.36393 16.2155 2.45447 16.3058C2.545 16.3947 2.63841 16.485 2.65853 16.6528C2.67865 16.8205 2.64273 16.9768 2.63123 17.0313C2.61973 17.0858 2.545 17.1059 2.48321 16.9453C2.41998 16.7847 2.31507 16.3287 1.92418 16.3488H1.92274Z" fill="white"/>'
                + '<path d="M2.16157 17.691C2.16157 17.691 1.98625 17.5777 1.94601 17.539C1.90721 17.5003 1.89571 17.496 1.94601 17.4687C1.99631 17.4415 1.99918 17.3483 1.91152 17.3124C1.82385 17.2766 1.70457 17.3081 1.63416 17.4028C1.5623 17.496 1.61691 17.5504 1.72326 17.6365C1.82817 17.7225 2.03654 17.8788 2.16157 17.9089C2.2866 17.9405 2.50216 17.9247 2.49067 17.7483C2.47917 17.5734 2.42744 17.4114 2.49067 17.4286C2.55534 17.4458 2.68899 17.6006 2.75222 17.744C2.81545 17.8888 2.87725 18.0595 2.82264 18.1971C2.76803 18.3333 2.67031 18.3763 2.51797 18.3878C2.36564 18.3993 2.30241 18.3806 2.30241 18.4624C2.30241 18.5441 2.46624 18.5599 2.66456 18.5556C2.86144 18.5513 3.1 18.3534 3.15173 18.2315C3.20203 18.1111 3.08994 17.8759 2.99078 17.6809C2.89306 17.4859 2.74935 17.3196 2.59558 17.2479C2.44181 17.1748 2.17738 17.1733 2.14576 17.3182C2.11415 17.463 2.22768 17.701 2.16157 17.6881V17.691Z" fill="white"/>'
                + '<path d="M11.1344 13.0124C11.1344 13.0124 11.2379 17.9306 11.2221 18.1657C11.2077 18.4009 11.031 19.1866 10.3095 19.905C9.58811 20.6248 8.82357 21.1754 7.83772 21.4908C6.85187 21.8063 5.57142 21.2858 5.54267 19.8978C5.51393 18.5098 6.4035 17.5563 6.54289 17.4086C6.68229 17.2624 6.77283 17.1935 6.83175 17.1491C6.89067 17.1046 6.94528 17.1147 6.97402 17.1491C7.00277 17.1835 6.99414 17.2767 6.93522 17.3197C6.8763 17.3642 6.54289 17.7255 6.5084 18.4754C6.47391 19.2239 6.64637 20.0756 6.86624 20.2864C7.08756 20.4972 7.69976 20.8442 8.66118 20.4527C9.6226 20.0613 10.104 19.7085 10.2506 19.0475L10.1989 14.7947C10.1989 14.7947 10.0882 14.5638 9.93014 14.538C9.77206 14.5122 9.8008 14.4463 9.87122 14.376C9.94163 14.3057 10.5366 13.5759 10.6731 13.3408C10.8096 13.1056 11.0453 12.7729 11.1474 12.7729C11.2494 12.7729 11.2135 12.8676 11.133 13.0095L11.1344 13.0124Z" fill="white"/>'
                + '<path d="M12.5659 12.995C12.5372 12.8674 12.4826 12.6423 12.369 13.0194C12.2555 13.3965 11.9724 14.2525 11.8143 14.6053C11.6577 14.958 11.4608 15.2032 11.4076 15.2663C11.3544 15.3294 11.3199 15.4326 11.4708 15.4283C11.6232 15.424 11.7899 15.4484 11.9911 15.6735C12.1923 15.8986 12.9726 16.7647 13.3175 17.8071C13.6638 18.8495 13.9067 19.5836 13.9656 20.1557C13.9656 20.1557 13.9628 20.3952 14.0662 20.3952C14.1697 20.3952 14.2962 19.6223 14.2962 19.0789C14.2962 18.5355 14.2272 17.5863 13.8406 16.5338C13.4526 15.4813 13.1235 14.7128 12.9985 14.3658C12.8734 14.0188 12.599 13.3764 12.5645 12.995H12.5659Z" fill="white"/>'
                + '<path d="M15.242 20.5231C15.242 20.5231 14.0894 21.673 13.1898 22.1161C13.1898 22.1161 13.128 22.1519 12.9053 22.0731C12.6825 21.9942 11.8159 21.5497 11.4409 21.4608C11.0658 21.3719 10.9292 21.3977 10.8272 21.3232C10.7266 21.2486 10.7913 21.2084 11.0198 21.2127C11.2483 21.2185 12.3448 21.2414 13.2042 20.8987C14.0621 20.556 14.647 20.2678 14.8382 19.3917C14.8382 19.3917 14.8065 14.7747 14.8065 14.7303C14.8065 14.6858 14.6916 14.518 14.6183 14.4679C14.545 14.4191 14.4415 14.3947 14.5694 14.2872C14.6973 14.1796 15.2908 13.3767 15.3598 13.2448C15.4288 13.1129 15.6343 12.872 15.7378 12.8117C15.8413 12.7501 15.9002 12.8089 15.8757 13.0197C15.8513 13.2304 15.8513 14.3904 15.8556 14.6155C15.8599 14.8407 15.8815 19.7301 15.8815 19.7301C15.8815 19.7301 16.3026 20.1761 17.1605 20.1416C18.0185 20.1072 18.1018 19.7746 18.2929 19.7402C18.2929 19.7402 17.7971 19.3631 17.1691 19.3731C16.5411 19.3831 16.2523 19.6269 16.1732 19.6957C16.0942 19.7645 15.9821 19.7 16.0511 19.5495C16.1201 19.3975 16.4635 18.4827 16.5325 18.3508C16.6015 18.2188 16.7682 18.1056 17.2726 18.1156C17.7785 18.1256 18.224 18.3895 18.6264 18.6633C19.0287 18.9372 19.6165 19.2311 20.1957 19.3932C20.7748 19.5552 20.7461 19.5781 20.897 19.5781C21.0479 19.5781 21.1844 19.624 20.9631 19.7731C20.7403 19.9237 20.4773 20.0757 20.3207 20.2879C20.164 20.5001 20.085 20.6005 19.789 20.5904C19.4915 20.579 18.9713 20.5403 18.405 20.7912C17.8388 21.0421 17.4019 21.1826 16.8645 21.2041C16.327 21.2271 15.6286 21.0163 15.2434 20.5231H15.242Z" fill="white"/>'
                + '<path d="M13.7716 1.89284C13.8162 1.84839 13.8852 1.781 13.8061 1.69067C13.7372 1.61181 13.6581 1.60177 13.6581 1.55732C13.6581 1.60177 13.5791 1.61181 13.5101 1.69067C13.4311 1.781 13.5 1.84839 13.5489 1.89284L13.5015 3.38119H13.2227L13.1695 1.18595C13.2327 1.12286 13.3319 1.02536 13.2198 0.896308C13.1206 0.783033 13.0071 0.770128 13.0071 0.705604C13.0071 0.768694 12.8936 0.783033 12.7944 0.896308C12.6823 1.02536 12.78 1.12286 12.8447 1.18595H12.8505L12.7815 3.38119H12.4926L12.4567 1.89284C12.5013 1.84839 12.5702 1.781 12.4912 1.69067C12.4222 1.61181 12.3432 1.60177 12.3432 1.55732C12.3432 1.60177 12.2641 1.61181 12.1952 1.69067C12.1161 1.781 12.1851 1.84839 12.234 1.89284L12.1865 3.38119H11.9221L11.8689 1.18595C11.9322 1.12286 12.0313 1.02536 11.9192 0.896308C11.8201 0.783033 11.7065 0.770128 11.7065 0.705604C11.7065 0.768694 11.593 0.783033 11.4938 0.896308C11.3818 1.02536 11.4795 1.12286 11.5427 1.18595H11.5485L11.4651 3.83286H14.5347L14.4715 1.18595C14.5347 1.12286 14.6339 1.02536 14.5204 0.896308C14.4212 0.783033 14.3077 0.770128 14.3077 0.705604C14.3077 0.768694 14.1942 0.783033 14.095 0.896308C13.9829 1.02536 14.0806 1.12286 14.1439 1.18595H14.1496L14.0806 3.38119H13.8061L13.7702 1.89284H13.7716ZM10.998 0.255371H15.0018V4.25011H10.998V0.255371Z" fill="#308240"/>'
                + '<path d="M13.7719 1.8928C13.8164 1.84836 13.8854 1.78096 13.8064 1.69063C13.7374 1.61177 13.6583 1.60173 13.6583 1.55728C13.6583 1.60173 13.5793 1.61177 13.5103 1.69063C13.4313 1.78096 13.5003 1.84836 13.5491 1.8928L13.5017 3.38115H13.2229L13.1697 1.18591C13.233 1.12282 13.3321 1.02532 13.22 0.89627C13.1209 0.782995 13.0073 0.77009 13.0073 0.705566C13.0073 0.768656 12.8938 0.782995 12.7947 0.89627C12.6826 1.02532 12.7803 1.12282 12.8449 1.18591H12.8507L12.7817 3.38115H12.4929L12.4569 1.8928C12.5015 1.84836 12.5705 1.78096 12.4914 1.69063C12.4224 1.61177 12.3434 1.60173 12.3434 1.55728C12.3434 1.60173 12.2644 1.61177 12.1954 1.69063C12.1163 1.78096 12.1853 1.84836 12.2342 1.8928L12.1868 3.38115H11.9223L11.8692 1.18591C11.9324 1.12282 12.0316 1.02532 11.9195 0.89627C11.8203 0.782995 11.7068 0.77009 11.7068 0.705566C11.7068 0.768656 11.5932 0.782995 11.4941 0.89627C11.382 1.02532 11.4797 1.12282 11.5429 1.18591H11.5487L11.4653 3.83282H14.535L14.4717 1.18591C14.535 1.12282 14.6341 1.02532 14.5206 0.89627C14.4214 0.782995 14.3079 0.77009 14.3079 0.705566C14.3079 0.768656 14.1944 0.782995 14.0952 0.89627C13.9831 1.02532 14.0809 1.12282 14.1441 1.18591H14.1498L14.0809 3.38115H13.8064L13.7704 1.8928H13.7719Z" fill="white"/>'
                + '</g><defs><clipPath id="clip0_2162_5811"><rect width="26" height="24" fill="white"/></clipPath></defs></svg>';

                var unittxt = document.createElement("p");
                unittxt.className = "unittxt";
                //Tenant Unit Number
                unittxt.innerText = tenantArray[tenantIndex].storeUnitNum;

                var wayfindingbtn = document.createElement("div");
                wayfindingbtn.className = "wayfindingbtn";

                var btnholder = document.createElement("div");
                btnholder.className = "btnholder";
                btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenantIndex].storeUnitNum+"\",\""+tenantArray[tenantIndex].id+"\")");

                $(btnholder).html('<svg width="17" height="34" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.05146 33.906C4.04036 34.2388 5.10416 33.6595 5.41664 32.6128L7.94979 24.2368L5.65422 22.1361C5.35309 21.8654 5.09886 21.5818 4.89079 21.2989L1.84239 31.3872C1.52461 32.4339 2.06861 33.5676 3.05146 33.906ZM9.90489 18.5883C9.81258 19.3031 9.93969 19.6229 10.4542 20.0975L12.8602 22.315C13.3982 22.8138 13.7735 23.5898 13.8264 24.3472L14.3523 31.8489C14.4272 32.9456 13.6464 33.9125 12.6174 33.9923C11.5876 34.0728 10.6797 33.2477 10.6048 32.1446L10.1069 25.074L6.18007 21.4835C4.9831 20.3868 4.67667 19.2845 4.90214 17.5594L5.59596 12.3307L4.58436 12.8972L3.05751 18.2C2.80253 19.075 1.92334 19.5682 1.10241 19.3031C0.280729 19.0323 -0.181564 18.0952 0.0673631 17.2209L1.64037 11.7763C1.84844 11.0495 2.36899 10.3783 2.99925 10.027L6.05296 8.31475C6.78158 7.9022 7.545 7.39698 8.37198 7.32929C9.93364 7.19956 11.2063 8.75229 10.9861 10.3969L9.90489 18.5883ZM9.82923 0C11.4892 0 12.8375 1.43508 12.8375 3.20294C12.8375 4.97 11.4892 6.40588 9.82923 6.40588C8.16392 6.40588 6.82243 4.97 6.82243 3.20294C6.82243 1.43508 8.16392 0 9.82923 0ZM11.605 11.9061L16.3883 15.8108C17.0708 16.3709 17.204 17.4184 16.6774 18.1452C16.1568 18.872 15.1732 19.0073 14.4915 18.453L11.1079 15.6932L11.605 11.9061Z" fill="white"/></svg>'
                );

                wayfindingbtn.appendChild(btnholder);
                if(tenantArray[tenantIndex].isHalal) {
                    shopunitholder.appendChild(halalicon);
                }
                else {

                }
                shopunitholder.appendChild(unittxt);
                shopdetail.appendChild(shopunitholder);
                shopdetail.appendChild(wayfindingbtn);
                shopnameholder.appendChild(nametxt);
                dcardright.appendChild(shopnameholder);
                dcardright.appendChild(shopdetail);
                dcardleft.appendChild(createImg(newobj));
                dcard.appendChild(dcardleft);
                dcard.appendChild(dcardright);
                dcol.appendChild(dcard);
                drow.appendChild(dcol);

                if((tenantIndex+1)%2==0)
                {
                    slide.appendChild(drow);
                }
            }

            $('#swiperDining .swiper-wrapper').append(slide);
        }
    }

    //Check whether got left over tenant
    if(numLeftTenant!=0)
    {
        //Create slide for left over tenant
        var slide = document.createElement("div");
        slide.className = "swiper-slide";

        for(var j=0;j<numLeftTenant;j++)
        {
            if (tenantIndex % 2 == 0) {

                if (j != 0) {
                    slide.appendChild(drow);
                }

                var drow = document.createElement("div");
                drow.className = "drow";

            }

            var dcol = document.createElement("div");
            dcol.className = "dcol";

            var dcard = document.createElement("div");
            dcard.className = "dcard";
            dcard.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenantIndex].id+"\")");

            var dcardleft = document.createElement("div");
            dcardleft.className = "dcardleft";

            var newobj = new Object();
            newobj.FIT_TYPE = "stretchImg";
            //Tenant Thumbnail URL
            if (tenantArray[tenantIndex].storeThumbnailUrl !="" || tenantArray[tenantIndex].storeThumbnailUrl != null) {
                var imgurl = tenantArray[tenantIndex].storeThumbnailUrl.split('/');
                var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
                newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
            }
            else {
                newobj.MAIN_URL = './asset/error/errorimg.jpg';
            }

            // dcardleft.appendChild(createImg(newobj));

            var dcardright = document.createElement("div");
            dcardright.className = "dcardright";

            var shopnameholder = document.createElement("div");
            shopnameholder.className = "shopnameholder";

            var nametxt = document.createElement("p");
            nametxt.className = "nametxt";
            //Tenant Name (Store Name)
            nametxt.innerHTML = tenantArray[tenantIndex].storeNameEng;

            var shopdetail = document.createElement("div");
            shopdetail.className = "shopdetail";

            var shopunitholder = document.createElement("div");
            shopunitholder.className = "shopunitholder";

            var halalicon = document.createElement('div');
            halalicon.className = "halalicon";
            halalicon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none"><g clip-path="url(#clip0_2162_5811)">'
            + '<path d="M17.2796 3.15443C17.2522 3.18024 17.2235 3.20605 17.1948 3.23186L17.1732 3.25194C17.1459 3.27631 17.1186 3.30069 17.0913 3.32363H17.0899C17.064 3.34801 17.0367 3.36951 17.0108 3.39246L16.9864 3.41253C16.9576 3.43691 16.9289 3.45985 16.8987 3.48279C16.8729 3.50286 16.847 3.52294 16.8211 3.54301L16.7852 3.57025L16.7679 3.58316C16.7478 3.59893 16.7263 3.6147 16.7061 3.62904L16.6702 3.65485C16.6444 3.67349 16.6199 3.6907 16.5941 3.70934L16.5811 3.71794C16.5524 3.73802 16.5222 3.75809 16.492 3.77816C16.4719 3.79107 16.4518 3.80541 16.4317 3.81831C16.413 3.83122 16.3943 3.84269 16.3742 3.85559H16.3699C16.3497 3.87137 16.3296 3.88284 16.3081 3.89574C16.265 3.92298 16.2218 3.94879 16.1773 3.9746C16.1586 3.98607 16.1399 3.99611 16.1212 4.00758C15.9933 4.08071 15.8626 4.15097 15.7289 4.21549C15.7131 4.22266 15.6987 4.22983 15.6829 4.23843C15.6686 4.2456 15.6528 4.25277 15.6384 4.25994C15.6211 4.26855 15.6025 4.27572 15.5852 4.28432C14.7431 3.54158 13.842 3.12002 12.9999 3.12002C12.1577 3.12002 11.2567 3.54158 10.4145 4.28432C10.3958 4.27715 10.3786 4.26855 10.3599 4.25994C10.222 4.19542 10.0869 4.12803 9.95466 4.05347C9.93885 4.04486 9.92448 4.03626 9.90867 4.02766L9.87562 4.00902C9.85837 3.99898 9.84112 3.98894 9.82244 3.97891C9.77789 3.9531 9.73334 3.92585 9.68879 3.89861C9.64712 3.8728 9.60688 3.84699 9.56664 3.82118C9.54652 3.80828 9.5264 3.79537 9.50628 3.78103C9.4761 3.76096 9.44736 3.74088 9.41718 3.72081L9.40425 3.71221C9.37838 3.695 9.35251 3.67636 9.32808 3.65772L9.29215 3.63191C9.2706 3.61757 9.25048 3.6018 9.23036 3.58603L9.21311 3.57312L9.17719 3.54588C9.15132 3.5258 9.12545 3.50573 9.09958 3.48566C9.0694 3.46271 9.04066 3.43834 9.01192 3.4154L8.98749 3.39532C8.96162 3.37382 8.93432 3.35087 8.90845 3.32937H8.90701C8.87971 3.30356 8.85096 3.28061 8.8251 3.25624L8.80354 3.23616C8.7748 3.21035 8.74749 3.18455 8.71875 3.15874C10.0265 2.57946 11.4751 2.25684 12.9984 2.25684C14.5218 2.25684 15.9704 2.57946 17.2781 3.15874L17.2796 3.15443Z" fill="#C5E5D0"/>'
            + '<path d="M7.1049 14.865C7.08478 14.8794 7.0661 14.8951 7.04598 14.9095C7.02586 14.9238 7.00718 14.9396 6.98706 14.9539C6.94826 14.984 6.90946 15.0141 6.87066 15.0443L6.86491 15.0486C6.82754 15.0772 6.79162 15.1073 6.75569 15.1375C6.71832 15.169 6.67952 15.2005 6.64216 15.2321C6.60767 15.2622 6.57318 15.2909 6.53869 15.321C6.49557 15.3583 6.4539 15.3955 6.41222 15.4328C6.37773 15.4629 6.34468 15.493 6.31163 15.5246C6.27713 15.5561 6.24264 15.5891 6.20815 15.6221C6.19378 15.6364 6.17798 15.6508 6.1636 15.6651C6.14636 15.6809 6.12911 15.6981 6.11187 15.7153L6.0975 15.7296C6.06301 15.764 6.02708 15.7985 5.99403 15.8329C5.95954 15.8673 5.92648 15.9017 5.89343 15.9361C5.87044 15.9605 5.84601 15.9849 5.82301 16.0107C5.80864 16.025 5.79571 16.0408 5.78134 16.0551C5.75834 16.0809 5.73535 16.1053 5.71092 16.1311C5.63619 16.2128 5.56433 16.296 5.49248 16.3792C5.47667 16.3978 5.4623 16.415 5.44649 16.4337C5.43068 16.4523 5.41631 16.4709 5.4005 16.4882C5.3732 16.5211 5.34733 16.5541 5.32003 16.5857C5.30278 16.6072 5.28554 16.6287 5.26829 16.6502L5.25105 16.6703C5.2338 16.6932 5.21656 16.7147 5.19931 16.7376C5.17632 16.7678 5.15332 16.7979 5.13033 16.828C5.11165 16.8524 5.0944 16.8767 5.07572 16.9011C5.00387 16.9972 4.93488 17.0961 4.86734 17.195C4.84578 17.2266 4.82423 17.2581 4.80267 17.2911C4.79405 17.304 4.78543 17.3169 4.7768 17.3313L4.75237 17.3685C4.72794 17.4058 4.70351 17.4445 4.67908 17.4833C4.6604 17.5119 4.64315 17.5406 4.62591 17.5693C4.60435 17.6037 4.58423 17.6367 4.56411 17.6711C4.54399 17.7055 4.52387 17.7385 4.50375 17.7729C4.4937 17.7887 4.48507 17.8059 4.47501 17.8216C4.46495 17.8388 4.45489 17.8561 4.44483 17.8733C4.4319 17.8948 4.4204 17.9177 4.40747 17.9392L4.40028 17.9521C4.38735 17.9751 4.37442 17.998 4.36148 18.021C4.34711 18.0453 4.33418 18.0711 4.32124 18.0955C4.31118 18.1156 4.29969 18.1342 4.28963 18.1543C4.28244 18.1686 4.27382 18.183 4.26663 18.1973C4.25657 18.216 4.24795 18.2346 4.23789 18.2532C4.22783 18.2733 4.21633 18.2934 4.20771 18.3135C4.19478 18.3378 4.18328 18.3608 4.17178 18.3852C4.1646 18.3981 4.15885 18.4124 4.15167 18.4253C4.14304 18.4411 4.13586 18.4583 4.12723 18.4755C3.06378 16.8323 2.44727 14.8751 2.44727 12.7759H6.96838C6.96838 12.7988 6.96838 12.8218 6.96838 12.8447C6.96838 13.5373 7.01293 14.214 7.09916 14.8665L7.1049 14.865Z" fill="#C5E5D0"/>'
            + '<path d="M7.6297 8.76228C7.26324 9.87209 7.02755 11.0952 6.983 12.3842H2.46045C2.46332 12.3154 2.4662 12.2451 2.47051 12.1763C2.47338 12.1333 2.47626 12.0903 2.47913 12.0473C2.48201 12.0042 2.48488 11.9612 2.48919 11.9182C2.49638 11.8322 2.50356 11.7461 2.51362 11.6616C2.5165 11.6271 2.52081 11.5927 2.52512 11.5597C2.52943 11.5253 2.53374 11.4909 2.53805 11.4579C2.54668 11.3891 2.5553 11.3217 2.56536 11.2529C2.56823 11.2357 2.56967 11.2199 2.57254 11.2027C2.57542 11.1855 2.57829 11.1697 2.57973 11.1525C2.58548 11.1181 2.58979 11.0851 2.59554 11.0522C2.60128 11.0192 2.60703 10.9848 2.61278 10.9518C2.61853 10.9188 2.62428 10.8873 2.63003 10.8543C2.6329 10.8385 2.63578 10.8213 2.63865 10.8055C2.64152 10.7855 2.64583 10.7668 2.65015 10.7467C2.65446 10.7224 2.65877 10.698 2.66452 10.6751V10.6708L2.66883 10.655V10.6521C2.67458 10.6234 2.68176 10.5933 2.68751 10.5646C2.69613 10.5245 2.70476 10.4829 2.71482 10.4428C2.722 10.4127 2.72919 10.3811 2.73637 10.351C2.74356 10.3209 2.75074 10.2908 2.75793 10.2592C2.76655 10.2234 2.77517 10.1875 2.78523 10.1503C2.79242 10.1216 2.7996 10.0929 2.80823 10.0628C2.81685 10.0298 2.82547 9.99827 2.83409 9.96529C2.83984 9.94522 2.84559 9.92514 2.85134 9.90507C2.85709 9.88499 2.86284 9.86492 2.86859 9.84485C2.87433 9.82477 2.88008 9.8047 2.88583 9.78462C2.89158 9.76455 2.89733 9.74448 2.90451 9.7244C2.91601 9.68425 2.92894 9.64411 2.94188 9.60539C2.94763 9.58532 2.95481 9.56524 2.96056 9.54517C2.97637 9.49642 2.99218 9.4491 3.00798 9.40035C3.01804 9.37167 3.02667 9.34299 3.03673 9.31432C3.04679 9.28707 3.05541 9.25983 3.06547 9.23259C3.07553 9.20534 3.08415 9.1781 3.09565 9.15086C3.10571 9.12361 3.11577 9.0978 3.12583 9.07056C3.14595 9.01607 3.16606 8.96302 3.18762 8.90997C3.19768 8.88272 3.20918 8.85692 3.21924 8.82967C3.2566 8.7379 3.2954 8.64614 3.33564 8.5558C3.34283 8.5386 3.35001 8.52283 3.3572 8.50562C3.36438 8.48841 3.37157 8.47264 3.38019 8.45543C3.40606 8.39808 3.43193 8.34216 3.45923 8.2848C3.4736 8.25469 3.48798 8.22458 3.50235 8.1959C3.51672 8.16579 3.53109 8.13712 3.54546 8.107C3.56702 8.06256 3.59001 8.01811 3.61157 7.97509C3.62306 7.95358 3.63456 7.93064 3.64606 7.90913C3.65755 7.88762 3.66905 7.86468 3.68055 7.84317C3.71073 7.78582 3.74234 7.72703 3.7754 7.66968C3.78689 7.64817 3.79839 7.62809 3.81132 7.60659C3.83 7.57217 3.85012 7.53919 3.86881 7.50622C3.87599 7.49331 3.88461 7.47897 3.8918 7.46607C3.9191 7.41875 3.94641 7.37287 3.97515 7.32698C3.99096 7.29974 4.00821 7.27393 4.02401 7.24669C4.03982 7.22088 4.05563 7.19507 4.07287 7.16926C4.09156 7.13915 4.11024 7.11047 4.13036 7.08036C4.14473 7.05742 4.16054 7.03304 4.17635 7.0101C4.19359 6.98429 4.21084 6.95705 4.22808 6.93124C4.25826 6.88535 4.28988 6.8409 4.32149 6.79502C4.33586 6.77351 4.35167 6.75344 4.36604 6.73193C4.38472 6.70612 4.40197 6.68031 4.42065 6.6545C4.44652 6.61722 4.47383 6.58137 4.49969 6.54553C4.52556 6.50968 4.55287 6.47383 4.58017 6.43799C4.63765 6.49821 4.69514 6.55843 4.75262 6.61865C4.76987 6.63586 4.78711 6.6545 4.80436 6.67171C4.85753 6.72619 4.91214 6.77925 4.96675 6.8323C4.98256 6.84807 4.99837 6.86385 5.01417 6.87818C5.04579 6.9083 5.07741 6.93841 5.10902 6.96852C5.16507 7.02157 5.22112 7.07319 5.2786 7.12481C5.29728 7.14201 5.3174 7.15922 5.33608 7.17643C5.38926 7.22374 5.44243 7.26963 5.4956 7.31551C5.52722 7.34276 5.56027 7.37143 5.59189 7.39724C5.63069 7.43022 5.66949 7.4632 5.70973 7.49475C5.73991 7.52055 5.77153 7.54493 5.80314 7.56931C5.83332 7.59368 5.8635 7.61806 5.89512 7.641C5.9253 7.66537 5.95547 7.68832 5.98709 7.71269C6.04889 7.76001 6.11212 7.80733 6.17391 7.85321C6.18972 7.86468 6.20553 7.87615 6.2199 7.88762C6.24433 7.90483 6.26732 7.92204 6.29176 7.93924C6.31762 7.95788 6.34493 7.97652 6.3708 7.99516C6.41678 8.02671 6.46277 8.05969 6.50876 8.0898C6.52888 8.10414 6.55043 8.11848 6.57055 8.13138L6.58349 8.13998C6.60361 8.15432 6.62516 8.16723 6.64528 8.18157H6.64672C6.67546 8.20164 6.70564 8.22171 6.73438 8.24035C6.75881 8.25613 6.78324 8.2719 6.80767 8.28767C6.83354 8.30488 6.86085 8.32208 6.88815 8.33786C6.9054 8.34933 6.92408 8.3608 6.94132 8.37084C6.95857 8.38231 6.97725 8.39234 6.9945 8.40381C7.01174 8.41529 7.02899 8.42532 7.04623 8.43536C7.06348 8.4454 7.08072 8.45687 7.09797 8.4669C7.13102 8.48698 7.16407 8.50562 7.19713 8.52569L7.21294 8.5343C7.24455 8.55294 7.27617 8.57158 7.30778 8.58878C7.3782 8.62893 7.44862 8.66765 7.51904 8.70636C7.55497 8.725 7.59089 8.74507 7.62538 8.76371L7.6297 8.76228Z" fill="#C5E5D0"/>'
            + '<path d="M23.5381 12.3842H19.0156C18.9696 11.0952 18.7354 9.87212 18.3689 8.76231C18.5126 8.68775 18.6534 8.60889 18.7928 8.52859C18.8316 8.50708 18.8704 8.48414 18.9078 8.4612C18.938 8.44256 18.9696 8.42392 19.0012 8.40528C19.0357 8.38377 19.0702 8.3637 19.1047 8.34219C19.1722 8.30061 19.2412 8.25616 19.3073 8.21171C19.3318 8.19594 19.3547 8.18016 19.3792 8.16439L19.3892 8.15722C19.4079 8.14432 19.4266 8.13285 19.4467 8.11994C19.464 8.10847 19.4812 8.097 19.497 8.08553L19.5056 8.07979H19.5071C19.5401 8.05542 19.5732 8.03247 19.6062 8.00953C19.6393 7.98659 19.6723 7.96365 19.704 7.94071C19.7298 7.9235 19.7543 7.90486 19.7801 7.88622C19.7945 7.87618 19.8089 7.86615 19.8232 7.85468L19.8405 7.84177C19.8664 7.82313 19.8922 7.80449 19.9167 7.78585C19.9411 7.76721 19.9655 7.75 19.9885 7.73136C20.0129 7.71416 20.0359 7.69552 20.0604 7.67688C20.0949 7.64963 20.1308 7.62239 20.1638 7.59515C20.1926 7.57221 20.2228 7.54926 20.2515 7.52489C20.2817 7.50051 20.3119 7.47614 20.342 7.45033L20.3794 7.41878L20.3952 7.40588C20.4153 7.38867 20.4354 7.3729 20.4556 7.35426L20.4728 7.33992C20.5044 7.31411 20.5346 7.28687 20.5662 7.25962C20.5792 7.24815 20.5921 7.23668 20.605 7.22521C20.6582 7.17789 20.7128 7.13058 20.7645 7.08182C20.789 7.05888 20.8148 7.03594 20.8393 7.013C20.891 6.96425 20.9442 6.9155 20.9945 6.86531C21.0088 6.85241 21.0232 6.83807 21.0376 6.82373C21.0563 6.80652 21.0735 6.78788 21.0922 6.77068C21.1109 6.75347 21.1281 6.73483 21.1454 6.71762C21.1597 6.70328 21.1741 6.68895 21.187 6.67461C21.2115 6.65023 21.2359 6.62586 21.2589 6.60148C21.2761 6.58427 21.292 6.5685 21.3078 6.55129L21.3394 6.51832C21.3638 6.49251 21.3897 6.4667 21.4141 6.43945C21.4429 6.47673 21.4716 6.51545 21.4989 6.55273C21.5176 6.57854 21.5363 6.60291 21.5549 6.62872C21.5693 6.6488 21.5851 6.66887 21.5995 6.69038C21.6167 6.71475 21.634 6.73913 21.6512 6.76351C21.6742 6.79505 21.6958 6.82803 21.7173 6.85958C21.7389 6.89112 21.7605 6.92266 21.7806 6.95421C21.7978 6.98002 21.8151 7.00583 21.8323 7.03164C21.8582 7.07179 21.884 7.11194 21.9099 7.15208C21.9674 7.24098 22.022 7.33132 22.0766 7.42308C22.0953 7.45463 22.114 7.48474 22.1312 7.51628C22.147 7.54353 22.1628 7.57077 22.1786 7.59945C22.1916 7.62239 22.2045 7.6439 22.216 7.66684C22.2347 7.70125 22.2534 7.73423 22.2721 7.76864C22.2893 7.80162 22.308 7.8346 22.3252 7.86615L22.3454 7.90486C22.3626 7.93927 22.3813 7.97369 22.3985 8.0081C22.4086 8.02817 22.4201 8.04825 22.4301 8.06976C22.4517 8.11134 22.4718 8.15149 22.4919 8.19307C22.5063 8.22318 22.5207 8.25186 22.535 8.28197C22.548 8.31064 22.5624 8.33932 22.5753 8.368C22.5825 8.38521 22.5911 8.40098 22.5983 8.41818C22.6227 8.47267 22.6471 8.52716 22.6716 8.58164C22.6802 8.60172 22.6888 8.62323 22.6989 8.6433C22.7118 8.67341 22.7247 8.70352 22.7362 8.73363C22.7492 8.76374 22.7621 8.79529 22.7736 8.8254C22.7851 8.85264 22.7952 8.87989 22.8067 8.90713C22.8239 8.95158 22.8411 8.99603 22.8584 9.04048C22.8656 9.06199 22.8742 9.0835 22.8828 9.10357C22.8943 9.13512 22.9058 9.16666 22.9173 9.19677C22.9245 9.21541 22.9302 9.23405 22.9374 9.25126C22.9446 9.2699 22.9504 9.28854 22.9576 9.30718C22.9676 9.33442 22.9762 9.36167 22.9863 9.39034V9.39321C22.9964 9.41902 23.005 9.44626 23.0136 9.47351C23.0352 9.53803 23.0553 9.60255 23.0754 9.66851C23.0855 9.70149 23.0955 9.73304 23.1056 9.76602C23.1156 9.79899 23.1243 9.83197 23.1343 9.86352C23.1429 9.89506 23.153 9.92804 23.1616 9.95959C23.1702 9.99257 23.1789 10.0241 23.1875 10.0571C23.1947 10.0858 23.2033 10.1144 23.2105 10.1446C23.2205 10.1804 23.2292 10.2162 23.2378 10.2535C23.245 10.2836 23.2522 10.3123 23.2593 10.3424C23.2651 10.3668 23.2708 10.3912 23.2766 10.4141L23.2795 10.4256C23.2838 10.4414 23.2866 10.4571 23.2895 10.4729V10.4829C23.2981 10.5088 23.3025 10.5346 23.3082 10.5604C23.314 10.5891 23.3211 10.6192 23.3269 10.6478V10.6564L23.3355 10.6894V10.6923C23.3398 10.7081 23.3427 10.7238 23.3456 10.7382C23.3528 10.7755 23.3599 10.8127 23.3671 10.8514C23.3729 10.883 23.3786 10.9145 23.3844 10.9461C23.3872 10.9633 23.3901 10.9791 23.393 10.9963C23.3959 11.0135 23.3987 11.0292 23.4016 11.0465C23.4074 11.0794 23.4131 11.1138 23.4174 11.1468C23.4203 11.164 23.4232 11.1798 23.4246 11.197C23.4275 11.2128 23.4289 11.23 23.4318 11.2472C23.4419 11.316 23.4505 11.3834 23.4591 11.4522C23.4634 11.4867 23.4677 11.5196 23.472 11.554C23.4763 11.5885 23.4807 11.6214 23.4835 11.6558C23.4936 11.7419 23.5008 11.8265 23.508 11.9125C23.5108 11.9555 23.5151 11.9985 23.518 12.0416C23.5209 12.0846 23.5238 12.1276 23.5252 12.1706C23.5295 12.2394 23.5324 12.3097 23.5353 12.3785L23.5381 12.3842Z" fill="#C5E5D0"/>'
            + '<path d="M23.5454 12.7759C23.5454 14.8765 22.9289 16.8337 21.8655 18.4755C21.8497 18.4411 21.8324 18.4081 21.8166 18.3751C21.8037 18.3493 21.7922 18.3249 21.7793 18.2991C21.7649 18.2704 21.7505 18.2418 21.7361 18.2145L21.7318 18.2074C21.7203 18.1858 21.7103 18.1643 21.6988 18.1428C21.6873 18.1213 21.6758 18.0998 21.6643 18.0783C21.6456 18.0425 21.6255 18.0066 21.6054 17.9708L21.5867 17.9378L21.568 17.9048C21.5551 17.8804 21.5407 17.8561 21.5263 17.8317C21.5105 17.8044 21.4947 17.7772 21.4789 17.7514C21.4588 17.717 21.4387 17.684 21.4185 17.6496C21.3553 17.5435 21.2892 17.4402 21.2202 17.337C21.2015 17.3098 21.1829 17.2811 21.1642 17.2538C21.1512 17.2352 21.1383 17.2151 21.1254 17.195C21.0938 17.1477 21.0607 17.1018 21.0276 17.0545C21.0075 17.0258 20.9874 16.9986 20.9673 16.9699C20.9472 16.9427 20.927 16.9154 20.9069 16.8868C20.8868 16.8595 20.8667 16.8323 20.8451 16.805C20.8236 16.7749 20.8006 16.7462 20.7776 16.7176C20.7589 16.6932 20.7402 16.6703 20.7215 16.6459C20.6842 16.5986 20.6468 16.5512 20.608 16.5039C20.5893 16.481 20.5706 16.458 20.5505 16.4351C20.5247 16.4036 20.4988 16.3734 20.4729 16.3433C20.4499 16.3161 20.4269 16.2903 20.4039 16.263C20.3738 16.2286 20.345 16.1956 20.3148 16.1627C20.2789 16.1225 20.243 16.0838 20.2071 16.0451C20.1826 16.0178 20.1582 15.992 20.1323 15.9662C20.0547 15.8845 19.9757 15.8042 19.8952 15.7239C19.865 15.6938 19.8334 15.6637 19.8018 15.6336C19.7831 15.6164 19.7644 15.5977 19.7458 15.5805C19.7271 15.5619 19.707 15.5432 19.6868 15.526C19.6538 15.4945 19.6207 15.4644 19.5862 15.4343C19.5546 15.4056 19.523 15.3769 19.49 15.3482C19.4698 15.331 19.4497 15.3124 19.4282 15.2952C19.408 15.278 19.3865 15.2593 19.3664 15.2421C19.3247 15.2063 19.283 15.1719 19.2413 15.1375C19.1565 15.0672 19.0689 14.9984 18.9812 14.931C18.9525 14.908 18.9223 14.8865 18.8936 14.865C18.9783 14.2126 19.0243 13.5373 19.0243 12.8447C19.0243 12.8218 19.0243 12.7988 19.0243 12.7759H23.5454Z" fill="#C5E5D0"/>'
            + '<path d="M10.0123 4.66579C9.13131 5.57199 8.34091 6.82805 7.78762 8.3121L7.77325 8.3035C7.75026 8.29059 7.72583 8.27912 7.70283 8.26478L7.69565 8.26048C7.68128 8.25331 7.66691 8.24471 7.65254 8.23611H7.64966C7.63242 8.22463 7.61373 8.2146 7.59649 8.20456C7.48871 8.14434 7.38092 8.08268 7.27602 8.01816C7.26021 8.00955 7.24584 7.99952 7.23003 7.99091C7.16392 7.95077 7.09782 7.90918 7.03315 7.8676C7.00584 7.8504 6.97854 7.83319 6.95123 7.81455C6.92536 7.79734 6.8995 7.78014 6.87363 7.76436C6.84632 7.74716 6.82046 7.72852 6.79315 7.70988C6.76585 7.69124 6.73998 7.67403 6.71267 7.65539C6.67531 7.62958 6.63938 7.60521 6.60345 7.5794C6.5704 7.55645 6.53735 7.53351 6.50573 7.50914C6.48992 7.49767 6.47268 7.4862 6.45687 7.47472C6.43962 7.46182 6.42094 7.44891 6.4037 7.43458C6.38501 7.42167 6.36633 7.40733 6.34765 7.39299C6.3304 7.38009 6.31316 7.36718 6.29448 7.35285C6.27723 7.33994 6.25999 7.32704 6.24274 7.3127C6.22981 7.30266 6.21687 7.29262 6.20394 7.28259C6.17807 7.26251 6.1522 7.241 6.12634 7.22093L6.09759 7.19799L6.07173 7.17791C6.04586 7.15641 6.01999 7.13633 5.99412 7.11482L5.98837 7.10909C5.95388 7.08185 5.92083 7.05317 5.88778 7.02593C5.85472 6.99868 5.82311 6.97144 5.79006 6.94276C5.76706 6.92412 5.74551 6.90405 5.72395 6.88541C5.70096 6.86677 5.6794 6.84669 5.65784 6.82662C5.63629 6.80798 5.61329 6.7879 5.59174 6.76783C5.57018 6.74776 5.54862 6.72912 5.52707 6.70904C5.5012 6.68467 5.47389 6.66029 5.44803 6.63591C5.41641 6.6058 5.38479 6.57569 5.35318 6.54558L5.33018 6.52407C5.30575 6.4997 5.27988 6.47532 5.25545 6.45095C5.22671 6.42227 5.19797 6.39359 5.16923 6.36491C5.14049 6.33624 5.11318 6.30756 5.08444 6.27888L5.05857 6.25164C5.02983 6.22296 5.00252 6.19428 4.97522 6.16417C4.9436 6.13119 4.91199 6.09678 4.88037 6.06237C5.7958 4.95973 6.93399 4.04636 8.2245 3.38965C8.25755 3.42263 8.29061 3.45417 8.32366 3.48572L8.36246 3.52156L8.37683 3.5359C8.39264 3.55024 8.40845 3.56458 8.42426 3.57892C8.45587 3.6076 8.48749 3.63627 8.52054 3.66495C8.53779 3.67929 8.5536 3.69363 8.57084 3.70797L8.59671 3.72947L8.62258 3.75098C8.63982 3.76532 8.65707 3.77966 8.67431 3.79543C8.70018 3.81694 8.72605 3.83845 8.75335 3.85996C8.77922 3.88146 8.80653 3.90154 8.83383 3.92305C8.86688 3.94886 8.89994 3.97323 8.93299 3.99904C8.95311 4.01338 8.97179 4.02915 8.99191 4.04206C9.01634 4.0607 9.04221 4.0779 9.06664 4.09654C9.09107 4.11375 9.1155 4.13096 9.13993 4.14816C9.16005 4.1625 9.18017 4.17684 9.20173 4.18974C9.27646 4.23993 9.35119 4.28868 9.42879 4.336L9.44316 4.3446C9.47909 4.36611 9.51502 4.38905 9.55094 4.40913C9.57825 4.4249 9.60555 4.4421 9.6343 4.45788C9.65298 4.46935 9.67166 4.47938 9.69178 4.48942C9.71046 4.50089 9.73058 4.51093 9.74926 4.52097C9.77369 4.53387 9.79669 4.54678 9.82112 4.55968C9.84699 4.57402 9.87285 4.58692 9.89872 4.59983C9.93896 4.62134 9.9792 4.64141 10.0194 4.66148L10.0123 4.66579Z" fill="#C5E5D0"/>'
            + '<path d="M21.1254 6.06679C21.0996 6.09547 21.0722 6.12272 21.0464 6.15139C21.0291 6.17003 21.0119 6.18724 20.9946 6.20588C20.9803 6.22022 20.9659 6.23599 20.9515 6.25033C20.9386 6.26323 20.9257 6.27757 20.9127 6.29048C20.8941 6.31055 20.8754 6.33063 20.8552 6.34927C20.8222 6.38224 20.7891 6.41522 20.7561 6.44677L20.7202 6.48118C20.6914 6.50842 20.6641 6.53567 20.6354 6.56291C20.6023 6.59446 20.5678 6.62743 20.5333 6.65755C20.4744 6.71203 20.4155 6.76652 20.3551 6.81957C20.3365 6.83678 20.3178 6.85255 20.2991 6.86976L20.2948 6.87263C20.279 6.88696 20.2617 6.9013 20.2445 6.91564L20.2315 6.92711L20.1999 6.95436C20.1396 7.00597 20.0778 7.05759 20.016 7.10778L19.9815 7.13646L19.9772 7.14076C19.9513 7.16227 19.9254 7.18234 19.8996 7.20385C19.8636 7.23253 19.8263 7.2612 19.7904 7.28988C19.7602 7.31425 19.7286 7.3372 19.6984 7.36014L19.6625 7.38738L19.6481 7.39742C19.6323 7.40889 19.6165 7.42179 19.6007 7.43327L19.5892 7.44187C19.569 7.45621 19.5489 7.47198 19.5288 7.48632L19.5144 7.49636L19.4756 7.52503C19.4397 7.55084 19.4038 7.57665 19.3679 7.60246C19.3449 7.61823 19.3219 7.63401 19.2989 7.64978C19.2687 7.67129 19.2385 7.69136 19.2069 7.71287C19.1422 7.75732 19.0761 7.80033 19.01 7.84335C18.9827 7.86056 18.9554 7.8792 18.9267 7.8964C18.8965 7.91648 18.8663 7.93512 18.8361 7.95376H18.8347L18.8045 7.97383C18.7743 7.99247 18.7456 8.00968 18.7168 8.02832C18.6838 8.04839 18.6507 8.06847 18.6177 8.08854C18.5516 8.12726 18.484 8.16597 18.4165 8.20468C18.3906 8.21902 18.3648 8.23336 18.3389 8.2477L18.3044 8.26634L18.2656 8.28785C18.2483 8.29788 18.2297 8.30792 18.2124 8.31653C17.6577 6.83248 16.8673 5.57498 15.9878 4.67021C16.0093 4.66017 16.0295 4.65014 16.0496 4.63867C16.0711 4.62863 16.0913 4.61716 16.1114 4.60712C16.1286 4.59852 16.1444 4.58992 16.1602 4.58131C16.1933 4.56411 16.2264 4.54547 16.2594 4.52826C16.2838 4.51535 16.3068 4.50245 16.3313 4.48811C16.3657 4.46947 16.3988 4.4494 16.4319 4.43076L16.4649 4.41068C16.4893 4.39634 16.5123 4.38201 16.5368 4.36767C16.5598 4.35333 16.5828 4.34042 16.6043 4.32608C16.6618 4.29024 16.7193 4.25296 16.7753 4.21568C16.8098 4.19274 16.8443 4.16836 16.8788 4.14398C16.9004 4.12965 16.9205 4.11531 16.942 4.09953C16.9593 4.08663 16.978 4.07372 16.9952 4.06082C17.0081 4.05078 17.0211 4.04218 17.034 4.03214L17.0728 4.00347C17.0929 3.98913 17.113 3.97335 17.1332 3.95758L17.1447 3.94898C17.1705 3.9289 17.1964 3.90883 17.2223 3.88732L17.2424 3.87155C17.2711 3.84861 17.2999 3.82567 17.3272 3.80272C17.3415 3.79125 17.3573 3.77835 17.3717 3.76544C17.4033 3.7382 17.435 3.71239 17.4666 3.68515C17.547 3.61489 17.6246 3.54463 17.7008 3.47007C17.7267 3.44569 17.7526 3.41988 17.7784 3.39551C19.0689 4.05222 20.2071 4.96559 21.1225 6.06823L21.1254 6.06679Z" fill="#C5E5D0"/>'
            + '<path d="M15.1874 4.44645C15.0078 4.51384 14.8238 4.57263 14.637 4.62282C14.6155 4.62855 14.5939 4.63429 14.5724 4.64002C14.558 4.64432 14.5422 4.64719 14.5264 4.65149C14.5106 4.65579 14.4933 4.6601 14.4775 4.66296C14.3166 4.70168 14.1542 4.73466 13.9875 4.76047C13.963 4.76477 13.9386 4.76763 13.9127 4.77194C13.8883 4.7748 13.8624 4.77911 13.838 4.78197C13.8136 4.78484 13.7877 4.78914 13.7633 4.79201C13.7388 4.79488 13.713 4.79775 13.6885 4.80061L13.6382 4.80635C13.6181 4.80778 13.5994 4.81065 13.5793 4.81209C13.5233 4.81782 13.4672 4.82212 13.4112 4.82499C13.3939 4.82499 13.3781 4.82642 13.3609 4.82786H13.3508C13.3293 4.82929 13.3077 4.83073 13.2862 4.83216C13.2387 4.83359 13.1913 4.83646 13.1424 4.83789C13.095 4.83789 13.0462 4.83789 12.9987 4.83789C12.9513 4.83789 12.9024 4.83789 12.855 4.83789C12.8076 4.83789 12.7602 4.83503 12.7113 4.83216C12.6898 4.83216 12.6682 4.83073 12.6466 4.82929H12.6366C12.6193 4.82786 12.6035 4.82642 12.5863 4.82642C12.5302 4.82356 12.4742 4.81782 12.4181 4.81352C12.398 4.81208 12.3793 4.81065 12.3592 4.80778L12.3089 4.80205C12.2845 4.79918 12.2586 4.79631 12.2342 4.79344C12.2098 4.79058 12.1839 4.78771 12.1595 4.78341C12.135 4.78054 12.1092 4.77624 12.0847 4.77337C12.0603 4.7705 12.0344 4.7662 12.01 4.7619C11.8447 4.73609 11.6809 4.70311 11.52 4.6644C11.5042 4.6601 11.4869 4.65579 11.4711 4.65293C11.4553 4.64862 11.4409 4.64576 11.4251 4.64146C11.4036 4.63572 11.382 4.62998 11.359 4.62425C11.1722 4.57406 10.9882 4.51528 10.8086 4.44788C11.5286 3.85713 12.2859 3.52734 12.9959 3.52734C13.7058 3.52734 14.4631 3.85857 15.1831 4.44788L15.1874 4.44645Z" fill="#C5E5D0"/>'
            + '<path d="M17.8617 8.49259C17.8387 8.50406 17.8157 8.51553 17.7927 8.52557C17.7697 8.53704 17.7467 8.54708 17.7237 8.55855C17.6777 8.58006 17.6317 8.60156 17.5857 8.62307C17.5397 8.64458 17.4923 8.66609 17.4449 8.68616C17.3975 8.70624 17.35 8.72631 17.3041 8.74638C17.2811 8.75642 17.2566 8.76646 17.2322 8.7765C17.2078 8.78653 17.1848 8.79657 17.1603 8.80517C17.1388 8.81378 17.1158 8.82238 17.0942 8.83242C17.0684 8.84245 17.0425 8.85249 17.0181 8.86253C16.9865 8.87543 16.9534 8.8869 16.9218 8.89981C16.8586 8.92418 16.7939 8.94856 16.7292 8.9715C16.6818 8.98871 16.6329 9.00448 16.5855 9.02169C16.5453 9.03459 16.505 9.04893 16.4648 9.06183C16.4447 9.06757 16.426 9.07474 16.4059 9.08047L16.3944 9.08334C16.38 9.08764 16.3671 9.09195 16.3527 9.09625L16.3426 9.09911C16.3182 9.10772 16.2938 9.11489 16.2679 9.12206C16.186 9.14787 16.1055 9.17081 16.0236 9.19518C15.9834 9.20665 15.9417 9.21813 15.9015 9.2296C15.8411 9.24537 15.7807 9.26258 15.7189 9.27691C15.7046 9.28122 15.6902 9.28408 15.6758 9.28838H15.6672C15.6255 9.30129 15.5839 9.31133 15.5436 9.31993L15.5307 9.3228C15.5077 9.32853 15.4833 9.33427 15.4603 9.33857L15.4488 9.34144C15.4301 9.34574 15.4114 9.35004 15.3927 9.35434L15.3755 9.35721C15.3525 9.36151 15.3295 9.36725 15.3079 9.37155C15.2792 9.37728 15.2519 9.38302 15.2231 9.38876C15.203 9.39306 15.1843 9.39736 15.1642 9.40023C15.1211 9.40883 15.078 9.41743 15.0334 9.4246C15.009 9.4289 14.9846 9.43321 14.9601 9.43751L14.9472 9.44037C14.93 9.44324 14.9142 9.44611 14.8969 9.44898C14.8667 9.45471 14.838 9.45901 14.8078 9.46332C14.7891 9.46618 14.769 9.47049 14.7503 9.47335L14.723 9.47765C14.6914 9.48339 14.6598 9.48769 14.6282 9.49199H14.6253C14.5779 9.49916 14.5305 9.50633 14.483 9.51207C14.4442 9.5178 14.4054 9.5221 14.3652 9.52641H14.3508C14.3307 9.53071 14.3106 9.53358 14.2905 9.53501L14.2689 9.53788C14.256 9.53788 14.243 9.54075 14.2301 9.54218H14.2215C14.187 9.54648 14.1539 9.55078 14.1209 9.55365C14.0921 9.55652 14.0648 9.55939 14.0361 9.56225C14.0088 9.56512 13.98 9.56799 13.9513 9.56942C13.9283 9.57086 13.9053 9.57372 13.8838 9.57516H13.8723C13.8521 9.57802 13.8306 9.57946 13.8105 9.58089H13.8047C13.7803 9.58233 13.7544 9.58519 13.7286 9.58663C13.6466 9.59236 13.5647 9.59666 13.4814 9.59953C13.4641 9.59953 13.4469 9.60097 13.4296 9.60097H13.3995C13.3678 9.60383 13.3348 9.60383 13.3032 9.60527C13.2586 9.60527 13.2141 9.60814 13.171 9.60814H13.1293C13.0876 9.60814 13.0459 9.60814 13.0028 9.60814C12.9597 9.60814 12.9195 9.60814 12.8764 9.60814H12.8347C12.7901 9.60814 12.7456 9.6067 12.7025 9.60527C12.6694 9.60527 12.6378 9.60384 12.6062 9.6024H12.576C12.5588 9.60097 12.5415 9.59953 12.5243 9.59953C12.4912 9.5981 12.4582 9.59667 12.4237 9.59523C12.4079 9.59523 12.3921 9.5938 12.3762 9.59236H12.3647C12.336 9.59093 12.3087 9.58806 12.28 9.58663C12.2656 9.58663 12.2527 9.58519 12.2383 9.58376H12.2225C12.1894 9.58089 12.1578 9.57802 12.1248 9.57516H12.0989C12.0644 9.57086 12.0299 9.56655 11.9954 9.56369L11.9624 9.56082C11.9207 9.55652 11.879 9.55222 11.8373 9.54791H11.8172L11.7798 9.54218C11.7425 9.53788 11.7037 9.53358 11.6663 9.52927C11.6189 9.52354 11.5715 9.5178 11.5226 9.51063C11.4809 9.5049 11.4393 9.49916 11.3976 9.49343C11.3343 9.48482 11.2726 9.47479 11.2093 9.46475C11.1777 9.45901 11.1447 9.45471 11.113 9.44898L11.0814 9.44324C11.0441 9.43607 11.0053 9.43034 10.9679 9.42317C10.955 9.4203 10.942 9.41743 10.9291 9.416C10.8874 9.4074 10.8457 9.40023 10.8041 9.39162C10.7681 9.38445 10.7336 9.37728 10.6977 9.37011C10.679 9.36581 10.6589 9.36295 10.6402 9.35721H10.6302C10.5942 9.34717 10.5569 9.34 10.5209 9.3314C10.4821 9.3228 10.4419 9.31276 10.4031 9.30416L10.3873 9.29986C10.3672 9.29555 10.3471 9.28982 10.3284 9.28552H10.3241C10.3111 9.28122 10.2982 9.27835 10.2853 9.27548L10.2766 9.27261C10.2508 9.26688 10.2263 9.25971 10.2005 9.25254C10.1789 9.2468 10.1574 9.24107 10.1344 9.23533C10.1143 9.2296 10.0941 9.2253 10.074 9.21956C10.0453 9.21239 10.0165 9.20379 9.98779 9.19662C9.95904 9.18801 9.9303 9.18085 9.90156 9.17224C9.86994 9.16364 9.83976 9.15504 9.80959 9.145C9.76935 9.13353 9.72911 9.12062 9.68887 9.10772C9.64288 9.09338 9.59833 9.07904 9.55234 9.0647C9.50636 9.05036 9.46181 9.03459 9.41726 9.01882C9.38277 9.00735 9.34684 8.99444 9.31235 8.98154C9.29942 8.97724 9.28648 8.9715 9.27355 8.9672C9.19594 8.93996 9.11834 8.91128 9.04217 8.88117C9.01631 8.87113 8.989 8.86109 8.96313 8.85106C8.94301 8.84389 8.92289 8.83528 8.90134 8.82668C8.88122 8.81808 8.85966 8.81091 8.83954 8.80231C8.79787 8.78653 8.75763 8.76933 8.71739 8.75212H8.71452L8.68721 8.73922H8.6829V8.73635C8.65703 8.72631 8.63116 8.71484 8.6053 8.70337C8.53632 8.67469 8.46877 8.64458 8.40123 8.61304C8.36961 8.5987 8.338 8.58436 8.30638 8.56859L8.29488 8.56285L8.27333 8.55281H8.26902V8.54995C8.24746 8.53991 8.22734 8.53131 8.20722 8.52127C8.18566 8.51123 8.16267 8.49976 8.14111 8.48972C8.69296 6.97413 9.4963 5.70659 10.3859 4.8305L10.4002 4.83624C10.4204 4.84484 10.4405 4.85345 10.4592 4.86062C10.5483 4.89646 10.6374 4.93088 10.7279 4.96242C10.7509 4.97102 10.7739 4.97819 10.7969 4.9868C10.8199 4.9954 10.8429 5.00257 10.8659 5.00974C10.9118 5.02551 10.9578 5.03985 11.0053 5.05419C11.0311 5.06279 11.0584 5.06996 11.0843 5.07856C11.1375 5.09434 11.1906 5.10867 11.2438 5.12301C11.2682 5.12875 11.2927 5.13592 11.3171 5.14165C11.3387 5.14739 11.3602 5.15312 11.3818 5.15743C11.3976 5.16173 11.4148 5.16603 11.4306 5.1689C11.4536 5.17463 11.4766 5.18037 11.5011 5.18467C11.5485 5.19614 11.5945 5.20618 11.6419 5.21478C11.6721 5.22052 11.7022 5.22769 11.7339 5.23199C11.8373 5.25206 11.9408 5.26927 12.0457 5.28361C12.0586 5.28504 12.073 5.28791 12.086 5.28934C12.0989 5.29077 12.1133 5.29364 12.1262 5.29508L12.1607 5.29938H12.1736C12.1923 5.30368 12.211 5.30511 12.2297 5.30798C12.2455 5.30942 12.2627 5.31228 12.28 5.31372C12.2943 5.31515 12.3087 5.31658 12.3231 5.31802C12.3446 5.32089 12.3662 5.32232 12.3877 5.32375C12.4093 5.32519 12.4309 5.32805 12.4524 5.32949C12.4682 5.32949 12.4826 5.33236 12.4984 5.33236C12.5171 5.33236 12.5358 5.33522 12.5544 5.33666H12.5861C12.6565 5.34383 12.7283 5.3467 12.8002 5.34813C12.8232 5.34813 12.8462 5.34813 12.8692 5.34956H12.9209C12.9496 5.34956 12.9784 5.34956 13.0071 5.34956C13.0359 5.34956 13.0646 5.34956 13.0934 5.34956C13.1106 5.34956 13.1278 5.34956 13.1451 5.34956C13.1681 5.34956 13.1911 5.34956 13.2141 5.34813C13.2859 5.3467 13.3578 5.34239 13.4282 5.33809H13.4598C13.4785 5.33522 13.4972 5.33379 13.5159 5.33236C13.5317 5.33236 13.546 5.32949 13.5619 5.32949C13.5834 5.32805 13.605 5.32662 13.6265 5.32375C13.6481 5.32232 13.6696 5.31945 13.6898 5.31802C13.7041 5.31802 13.7185 5.31515 13.7329 5.31372C13.7501 5.31228 13.7659 5.31085 13.7832 5.30798C13.8018 5.30655 13.8205 5.30368 13.8392 5.30225H13.8521L13.8866 5.29651C13.8996 5.29651 13.9139 5.29364 13.9269 5.29077C13.9398 5.28934 13.9542 5.28791 13.9671 5.28504C14.0102 5.2793 14.0519 5.27213 14.0936 5.26497C14.1079 5.26353 14.1223 5.26066 14.1367 5.2578C14.1496 5.25636 14.164 5.25349 14.1769 5.25063C14.1899 5.24919 14.2042 5.24632 14.2172 5.24346C14.256 5.23629 14.2948 5.22912 14.3336 5.22195C14.3523 5.21908 14.3709 5.21478 14.3882 5.21048C14.4097 5.20618 14.4313 5.20188 14.4543 5.19614C14.4845 5.1904 14.5132 5.18323 14.5434 5.17607C14.5736 5.1689 14.6037 5.16173 14.6339 5.15456C14.6569 5.14882 14.6814 5.14309 14.7043 5.13735C14.7273 5.13162 14.7518 5.12588 14.7748 5.11871H14.7762C14.8006 5.11154 14.8251 5.10581 14.8495 5.09864C14.8754 5.09147 14.9012 5.0843 14.9271 5.0757C14.953 5.06853 14.9803 5.05992 15.0061 5.05132L15.0248 5.04558C15.0478 5.03841 15.0708 5.03125 15.0938 5.02408C15.1427 5.0083 15.1915 4.9911 15.2404 4.97532L15.2763 4.96242C15.3151 4.94952 15.3539 4.93518 15.3927 4.9194C15.4143 4.9108 15.4358 4.90363 15.4574 4.89503C15.4861 4.88499 15.5134 4.87352 15.5407 4.86205C15.5637 4.85201 15.5867 4.84341 15.6112 4.83337L15.6241 4.82764C16.5122 5.70373 17.3156 6.97126 17.8688 8.48686L17.8617 8.49259Z" fill="#C5E5D0"/>'
            + '<path d="M18.6162 12.3841H7.38379C7.4269 11.1596 7.64534 9.99673 7.9845 8.94141L7.99599 8.94571C8.03911 8.96722 8.08366 8.98872 8.12821 9.0088C8.17563 9.03174 8.22449 9.05325 8.27335 9.07476C8.31503 9.09483 8.35814 9.11347 8.40126 9.13068L8.42712 9.14215C8.47024 9.16079 8.51191 9.17943 8.55502 9.19663L8.56796 9.20237C8.61538 9.22101 8.66281 9.24108 8.71023 9.25972C8.7361 9.26976 8.76197 9.2798 8.78784 9.28984C8.86113 9.31851 8.93442 9.34576 9.00771 9.373L9.04508 9.3859L9.07813 9.39737C9.11118 9.40885 9.14424 9.42175 9.17729 9.43322C9.20603 9.44326 9.23334 9.4533 9.26208 9.46333C9.2822 9.4705 9.30088 9.47624 9.321 9.48341C9.34974 9.49344 9.37704 9.50205 9.40579 9.51208C9.42447 9.51782 9.44315 9.52355 9.46183 9.53072H9.46471C9.49201 9.54076 9.51932 9.54936 9.54662 9.55797C9.58255 9.56944 9.61848 9.58091 9.65441 9.59095C9.68746 9.60098 9.71907 9.61102 9.75213 9.61962C9.82542 9.64113 9.89871 9.6612 9.972 9.68128C9.98925 9.68558 10.0065 9.69132 10.0237 9.69562C10.0568 9.70422 10.0884 9.71282 10.1215 9.72143C10.1459 9.7286 10.1718 9.73433 10.1962 9.74007H10.1991C10.212 9.74437 10.2249 9.74724 10.2393 9.7501L10.2551 9.75441C10.2867 9.76301 10.3183 9.77018 10.3514 9.77735C10.3686 9.78165 10.3859 9.78595 10.4046 9.79025C10.4218 9.79455 10.4391 9.79886 10.4577 9.80172H10.4621C10.4965 9.81033 10.531 9.8175 10.5655 9.82467C10.5856 9.82897 10.6072 9.83327 10.6273 9.83757C10.7006 9.85334 10.7725 9.86768 10.8458 9.88202C10.8601 9.88489 10.8745 9.88776 10.8889 9.89062L10.9162 9.89493C10.9521 9.90209 10.988 9.90783 11.0225 9.91357C11.0728 9.92217 11.1217 9.93077 11.172 9.93794C11.2194 9.94511 11.2654 9.95228 11.3128 9.95945C11.3617 9.96662 11.4105 9.97379 11.4594 9.97952L11.4968 9.98526C11.5384 9.99099 11.5801 9.9953 11.6204 10.001C11.6707 10.0068 11.721 10.0125 11.7713 10.0182C11.8675 10.0283 11.9653 10.0383 12.063 10.0455H12.0817C12.1736 10.0541 12.2656 10.0598 12.3576 10.0656C12.3763 10.0656 12.3964 10.067 12.4151 10.0684C12.4984 10.0727 12.5832 10.0756 12.668 10.0785C12.6867 10.0785 12.7054 10.0785 12.7226 10.0799C12.7542 10.0799 12.7873 10.0813 12.8189 10.0813C12.8347 10.0813 12.8505 10.0813 12.8678 10.0813C12.9123 10.0813 12.9569 10.0813 13.0014 10.0813C13.046 10.0813 13.0905 10.0813 13.1351 10.0813C13.1509 10.0813 13.1681 10.0813 13.1839 10.0813C13.2155 10.0813 13.2486 10.0813 13.2802 10.0799C13.2989 10.0799 13.3176 10.0799 13.3348 10.0785C13.4196 10.077 13.503 10.0727 13.5877 10.0684C13.6064 10.0684 13.6265 10.067 13.6452 10.0656C13.6797 10.0641 13.7142 10.0613 13.7487 10.0598C13.7659 10.0598 13.7846 10.057 13.8019 10.057C13.8824 10.0512 13.9628 10.0455 14.0433 10.0369H14.0447C14.0591 10.0369 14.0749 10.034 14.0893 10.0326H14.1065C14.1267 10.0297 14.1468 10.0268 14.1655 10.0254L14.1899 10.0225C14.2086 10.0211 14.2287 10.0182 14.2474 10.0168C14.2919 10.0125 14.3365 10.0068 14.381 10.0025C14.4198 9.99816 14.4572 9.99386 14.496 9.98813H14.5104C14.5233 9.98526 14.5377 9.98382 14.5506 9.98096L14.5693 9.97809C14.5865 9.97665 14.6038 9.97379 14.6196 9.97092L14.6555 9.96518C14.6756 9.96232 14.6957 9.95945 14.7159 9.95658C14.7389 9.95371 14.7604 9.94941 14.7834 9.94654C14.8064 9.94368 14.828 9.93938 14.851 9.93651H14.861C14.8998 9.92934 14.9386 9.92217 14.9789 9.915C15.0148 9.90926 15.0507 9.90209 15.0852 9.89636C15.1039 9.89349 15.1226 9.88919 15.1427 9.88632C15.1729 9.88059 15.203 9.87485 15.2318 9.86912C15.2548 9.86481 15.2763 9.86051 15.2993 9.85621C15.3295 9.85048 15.3611 9.84331 15.3927 9.83757C15.4143 9.83327 15.4359 9.82897 15.4588 9.82323C15.512 9.81176 15.5638 9.80029 15.6169 9.78739C15.6701 9.77591 15.7218 9.76301 15.7736 9.7501C15.7937 9.7458 15.8138 9.74007 15.8339 9.73577C15.8541 9.73146 15.8742 9.72573 15.8943 9.71999C15.9245 9.71282 15.9546 9.70422 15.9863 9.69562C16.0006 9.69275 16.0136 9.68845 16.0279 9.68415C16.1055 9.66264 16.1817 9.64256 16.2579 9.61962C16.2794 9.61389 16.2996 9.60672 16.3211 9.60098H16.324C16.3427 9.59381 16.3628 9.58951 16.3815 9.58234L16.3944 9.57804C16.4145 9.57231 16.4332 9.56657 16.4533 9.5594C16.472 9.55367 16.4907 9.54793 16.5094 9.5422L16.5194 9.53933H16.5209C16.5453 9.53072 16.5697 9.52355 16.5942 9.51495C16.6258 9.50491 16.656 9.49488 16.6876 9.48341C16.7206 9.47194 16.7551 9.46046 16.7882 9.44899L16.8083 9.44182C16.8356 9.43322 16.8615 9.42318 16.8888 9.41315C16.9649 9.3859 17.0411 9.35866 17.1173 9.32855C17.1302 9.32281 17.1446 9.31851 17.1589 9.31278C17.1862 9.30274 17.2135 9.2927 17.2409 9.28123C17.2595 9.27406 17.2768 9.26689 17.2955 9.25972C17.3443 9.23965 17.3932 9.21958 17.442 9.1995C17.465 9.18947 17.4895 9.17943 17.5125 9.17082L17.5829 9.14071C17.6447 9.1149 17.705 9.08766 17.7654 9.06042C17.7941 9.04751 17.8214 9.03461 17.8502 9.0217C17.9077 8.99589 17.9652 8.96865 18.0212 8.94141C18.3604 9.99673 18.5774 11.1596 18.6219 12.3841H18.6162Z" fill="#C5E5D0"/>'
            + '<path d="M18.6247 12.8433C18.6247 13.4441 18.5902 14.0306 18.5256 14.5998L18.5169 14.5941C18.4882 14.5754 18.4609 14.5568 18.4322 14.5367C18.4005 14.5166 18.3689 14.4951 18.3373 14.4751C18.3186 14.4636 18.3014 14.4521 18.2827 14.4392C18.2554 14.422 18.2281 14.4048 18.2008 14.3876C18.1735 14.3704 18.1462 14.3532 18.1189 14.3374C18.0111 14.2715 17.9033 14.2084 17.7941 14.1467C17.7582 14.1266 17.7222 14.1066 17.6849 14.0865L17.6518 14.0693L17.6216 14.0535C17.5368 14.0091 17.4521 13.9646 17.3673 13.923C17.3385 13.9087 17.3112 13.8958 17.2825 13.8814C17.2537 13.8671 17.225 13.8542 17.1977 13.8413C17.1675 13.827 17.1388 13.8141 17.1086 13.7997C17.0525 13.7739 16.9951 13.7481 16.939 13.7237C16.9175 13.7137 16.8945 13.7051 16.8729 13.695C16.847 13.6836 16.8197 13.6721 16.7939 13.6606C16.7407 13.6391 16.6875 13.6162 16.6343 13.5961C16.6085 13.5861 16.5812 13.5746 16.5539 13.5646C16.5266 13.5545 16.5007 13.5445 16.4734 13.533C16.4188 13.5129 16.3656 13.4929 16.311 13.4728C16.2564 13.4527 16.2018 13.4341 16.1472 13.4154C16.1155 13.4054 16.0854 13.3939 16.0538 13.3839C16.0135 13.371 15.9747 13.3581 15.9345 13.3452C15.9086 13.3366 15.8842 13.3294 15.8583 13.3222C15.8267 13.3122 15.7965 13.3036 15.7649 13.295C15.7419 13.2878 15.7175 13.2807 15.6945 13.2749C15.6514 13.262 15.6083 13.2505 15.5637 13.2391C15.5479 13.2348 15.5321 13.2305 15.5163 13.2262C15.4832 13.2176 15.4502 13.209 15.4171 13.2004C15.3812 13.1918 15.3453 13.1832 15.3093 13.1746C15.2648 13.1631 15.2202 13.153 15.1742 13.143C15.1513 13.1373 15.1268 13.1315 15.1024 13.1272C15.0277 13.1115 14.9529 13.0957 14.8782 13.0814C14.8624 13.0785 14.8466 13.0756 14.8308 13.0727H14.825C14.7934 13.0656 14.7632 13.0598 14.7316 13.0555C14.7058 13.0512 14.6799 13.0469 14.654 13.0426C14.6296 13.0383 14.6037 13.034 14.5779 13.0297C14.5031 13.0168 14.427 13.0068 14.3508 12.9953C14.3134 12.991 14.2775 12.9853 14.2401 12.981C14.2042 12.9767 14.1697 12.9724 14.1338 12.9681C14.1007 12.9638 14.0691 12.9609 14.0375 12.958C14.0073 12.9552 13.9757 12.9509 13.9455 12.9494C13.9168 12.9466 13.888 12.9437 13.8593 12.9408C13.8277 12.938 13.7961 12.9351 13.7645 12.9337C13.7228 12.9308 13.6811 12.9279 13.6394 12.9251C13.5863 12.9222 13.5331 12.9179 13.4813 12.9165C13.4627 12.9165 13.444 12.915 13.4267 12.9136C13.329 12.9093 13.2299 12.9064 13.1307 12.905C13.1134 12.905 13.0976 12.905 13.0804 12.905C13.0545 12.905 13.0287 12.905 13.0028 12.905C12.9769 12.905 12.9511 12.905 12.9252 12.905C12.9079 12.905 12.8921 12.905 12.8749 12.905C12.7757 12.905 12.678 12.9093 12.5788 12.9136C12.5602 12.9136 12.5415 12.915 12.5242 12.9165C12.4711 12.9193 12.4179 12.9222 12.3662 12.9251C12.3245 12.9279 12.2828 12.9308 12.2411 12.9337C12.2095 12.9365 12.1779 12.938 12.1463 12.9408C12.1175 12.9437 12.0888 12.9451 12.0601 12.9494C12.0356 12.9523 12.0098 12.9537 11.9853 12.9566C11.958 12.9595 11.9307 12.9623 11.902 12.9652C11.8545 12.9695 11.8086 12.9752 11.7626 12.981C11.7425 12.9839 11.7209 12.9867 11.7008 12.9896C11.6778 12.9925 11.6548 12.9953 11.6318 12.9996C11.5872 13.0054 11.5427 13.0125 11.4967 13.0197C11.478 13.0226 11.4593 13.0254 11.4407 13.0283C11.4234 13.0312 11.4047 13.034 11.3875 13.0369C11.3501 13.0426 11.3113 13.0498 11.274 13.057C11.2409 13.0627 11.2079 13.0684 11.1748 13.0756C11.1389 13.0828 11.1015 13.09 11.0656 13.0971C11.0469 13.1014 11.0268 13.1043 11.0081 13.1086C10.9736 13.1158 10.9391 13.1229 10.9046 13.1301C10.8845 13.1344 10.863 13.1387 10.8443 13.143C10.8069 13.1516 10.771 13.1602 10.735 13.1688C10.7135 13.1731 10.6919 13.1789 10.6704 13.1846C10.6273 13.1946 10.5842 13.2061 10.541 13.2176C10.5281 13.2204 10.5152 13.2247 10.5022 13.2276C10.4548 13.2405 10.4074 13.2534 10.36 13.2663C10.3327 13.2735 10.3039 13.2821 10.2766 13.2907C10.2507 13.2979 10.2234 13.305 10.1976 13.3136C10.1401 13.3308 10.0826 13.3481 10.0266 13.3667C9.98488 13.3796 9.94321 13.3939 9.90297 13.4068C9.87998 13.414 9.85842 13.4212 9.83686 13.4298C9.7607 13.4556 9.68597 13.4814 9.6098 13.5101C9.58106 13.5201 9.55088 13.5316 9.52214 13.5431C9.49196 13.5545 9.46178 13.566 9.4316 13.5775C9.40429 13.5889 9.37555 13.599 9.34825 13.6104C9.331 13.6176 9.31232 13.6248 9.29508 13.632C9.24334 13.6535 9.1916 13.675 9.13987 13.6965C9.11688 13.7065 9.09388 13.7166 9.07089 13.7266L9.04789 13.7366C8.97748 13.7667 8.90706 13.7997 8.83664 13.8327C8.80502 13.847 8.77485 13.8614 8.74467 13.8771C8.71305 13.8929 8.68 13.9087 8.64838 13.9245C8.61676 13.9402 8.58371 13.956 8.55209 13.9718C8.53198 13.9818 8.51186 13.9933 8.4903 14.0033C8.44719 14.0248 8.40407 14.0478 8.36096 14.0707C8.31066 14.098 8.26036 14.1252 8.2115 14.1524C8.17989 14.1697 8.14827 14.1883 8.11809 14.2055C8.08791 14.2227 8.0563 14.2413 8.02612 14.2586C8.00456 14.2715 7.98444 14.2829 7.96288 14.2958C7.93414 14.313 7.90684 14.3302 7.87953 14.346C7.85654 14.3589 7.83498 14.3733 7.81199 14.3876C7.75019 14.4263 7.6884 14.465 7.62804 14.5052C7.60361 14.521 7.58062 14.5367 7.55762 14.5525C7.53175 14.5697 7.50589 14.5869 7.48002 14.6041C7.41391 14.0349 7.38086 13.4484 7.38086 12.8476C7.38086 12.8247 7.38086 12.8018 7.38086 12.7788H18.629C18.629 12.8018 18.629 12.8247 18.629 12.8476L18.6247 12.8433Z" fill="#C5E5D0"/>'
            + '<path d="M25.9971 12.7757C25.9971 12.6452 25.9914 12.5148 25.9856 12.3843C25.852 9.39037 24.7009 6.66173 22.87 4.53101C22.7637 4.40626 22.6544 4.28295 22.5409 4.1625C21.5594 3.10431 20.4039 2.20958 19.1177 1.52563C18.9654 1.4439 18.8102 1.36504 18.655 1.29048C16.9463 0.463138 15.0277 0 13 0C10.9723 0 9.05373 0.463138 7.34358 1.28904C7.18693 1.3636 7.03316 1.44247 6.88083 1.5242C5.59606 2.20958 4.4392 3.10431 3.45766 4.1625C3.34557 4.28295 3.23635 4.40626 3.12857 4.53101C1.2977 6.66029 0.146584 9.39037 0.0129339 12.3843C0.0071855 12.5148 0.0028742 12.6452 0.0014371 12.7757C0.0014371 12.8402 0 12.9062 0 12.9707C0 16.2557 1.22441 19.2553 3.24066 21.5395C3.78388 22.1561 4.38603 22.7196 5.03703 23.2243V21.627H20.9601V23.2243C21.6111 22.721 22.2132 22.1561 22.7565 21.5395C24.7742 19.2539 25.9971 16.2543 25.9971 12.9707C25.9971 12.9062 25.9971 12.8402 25.9957 12.7757H25.9971ZM21.1915 6.67463C21.2159 6.65026 21.2403 6.62588 21.2633 6.60151C21.2806 6.5843 21.2964 6.56853 21.3122 6.55132L21.3438 6.51834C21.3682 6.49253 21.3941 6.46672 21.4185 6.43948C21.4473 6.47676 21.476 6.51547 21.5033 6.55275C21.522 6.57856 21.5407 6.60294 21.5594 6.62875C21.5737 6.64882 21.5895 6.6689 21.6039 6.6904C21.6212 6.71478 21.6384 6.73916 21.6556 6.76353C21.6786 6.79508 21.7002 6.82806 21.7218 6.8596C21.7433 6.89115 21.7649 6.92269 21.785 6.95424C21.8022 6.98005 21.8195 7.00586 21.8367 7.03166C21.8626 7.07181 21.8885 7.11196 21.9143 7.15211C21.9718 7.24101 22.0264 7.33134 22.081 7.42311C22.0997 7.45465 22.1184 7.48477 22.1356 7.51631C22.1514 7.54355 22.1673 7.5708 22.1831 7.59947C22.196 7.62242 22.2089 7.64392 22.2204 7.66687C22.2391 7.70128 22.2578 7.73426 22.2765 7.76867C22.2937 7.80165 22.3124 7.83463 22.3296 7.86617L22.3498 7.90489C22.367 7.9393 22.3857 7.97371 22.4029 8.00813C22.413 8.0282 22.4245 8.04827 22.4346 8.06978C22.4561 8.11136 22.4762 8.15151 22.4964 8.19309C22.5107 8.2232 22.5251 8.25188 22.5395 8.28199C22.5524 8.31067 22.5668 8.33935 22.5797 8.36802C22.5869 8.38523 22.5955 8.401 22.6027 8.41821C22.6271 8.4727 22.6516 8.52718 22.676 8.58167C22.6846 8.60174 22.6932 8.62325 22.7033 8.64333C22.7162 8.67344 22.7292 8.70355 22.7407 8.73366C22.7536 8.76377 22.7665 8.79532 22.778 8.82543C22.7895 8.85267 22.7996 8.87991 22.8111 8.90716C22.8283 8.95161 22.8456 8.99606 22.8628 9.04051C22.87 9.06201 22.8786 9.08352 22.8872 9.1036C22.8987 9.13514 22.9102 9.16669 22.9217 9.1968C22.9289 9.21544 22.9347 9.23408 22.9419 9.25128C22.949 9.26992 22.9548 9.28857 22.962 9.30721C22.972 9.33445 22.9807 9.36169 22.9907 9.39037V9.39324C23.0008 9.41905 23.0094 9.44629 23.018 9.47353C23.0396 9.53806 23.0597 9.60258 23.0798 9.66854C23.0899 9.70152 23.0999 9.73306 23.11 9.76604C23.1201 9.79902 23.1287 9.832 23.1387 9.86354C23.1474 9.89509 23.1574 9.92807 23.166 9.95961C23.1747 9.99259 23.1833 10.0241 23.1919 10.0571C23.1991 10.0858 23.2077 10.1145 23.2149 10.1446C23.225 10.1804 23.2336 10.2163 23.2422 10.2536C23.2494 10.2837 23.2566 10.3123 23.2638 10.3425C23.2695 10.3668 23.2753 10.3912 23.281 10.4141L23.2839 10.4256C23.2882 10.4414 23.2911 10.4572 23.2939 10.4729V10.483C23.3026 10.5088 23.3069 10.5346 23.3126 10.5604C23.3184 10.5891 23.3256 10.6192 23.3313 10.6479V10.6565L23.3399 10.6894V10.6923C23.3442 10.7081 23.3471 10.7239 23.35 10.7382C23.3572 10.7755 23.3644 10.8128 23.3715 10.8515C23.3773 10.883 23.383 10.9146 23.3888 10.9461C23.3917 10.9633 23.3945 10.9791 23.3974 10.9963C23.4003 11.0135 23.4032 11.0293 23.406 11.0465C23.4118 11.0795 23.4175 11.1139 23.4218 11.1469C23.4247 11.1641 23.4276 11.1798 23.429 11.197C23.4319 11.2128 23.4333 11.23 23.4362 11.2472C23.4463 11.316 23.4549 11.3834 23.4635 11.4523C23.4678 11.4867 23.4721 11.5197 23.4765 11.5541C23.4808 11.5885 23.4851 11.6215 23.488 11.6559C23.498 11.7419 23.5052 11.8265 23.5124 11.9125C23.5153 11.9556 23.5196 11.9986 23.5224 12.0416C23.5253 12.0846 23.5282 12.1276 23.5296 12.1706C23.5339 12.2395 23.5368 12.3097 23.5397 12.3785H19.0171C18.9711 11.0895 18.7369 9.86641 18.3704 8.7566C18.5142 8.68204 18.655 8.60318 18.7944 8.52288C18.8332 8.50137 18.872 8.47843 18.9094 8.45549C18.9395 8.43685 18.9711 8.41821 19.0028 8.39957C19.0373 8.37806 19.0717 8.35799 19.1062 8.33648C19.1738 8.2949 19.2428 8.25045 19.3089 8.206C19.3333 8.19023 19.3563 8.17445 19.3807 8.15868L19.3908 8.15151C19.4095 8.13861 19.4281 8.12714 19.4483 8.11423C19.4655 8.10276 19.4828 8.09129 19.4986 8.07982L19.5072 8.07408H19.5086C19.5417 8.04971 19.5747 8.02676 19.6078 8.00382C19.6408 7.98088 19.6739 7.95794 19.7055 7.935C19.7314 7.91779 19.7558 7.89915 19.7817 7.88051C19.796 7.87047 19.8104 7.86044 19.8248 7.84897L19.842 7.83606C19.8679 7.81742 19.8938 7.79878 19.9182 7.78014C19.9426 7.7615 19.9671 7.74429 19.9901 7.72565C20.0145 7.70845 20.0375 7.68981 20.0619 7.67117C20.0964 7.64392 20.1323 7.61668 20.1654 7.58944C20.1941 7.5665 20.2243 7.54355 20.253 7.51918C20.2832 7.4948 20.3134 7.47043 20.3436 7.44462L20.3809 7.41307L20.3967 7.40017C20.4169 7.38296 20.437 7.36719 20.4571 7.34855L20.4744 7.33421C20.506 7.3084 20.5361 7.28116 20.5678 7.25391C20.5807 7.24244 20.5936 7.23097 20.6066 7.2195C20.6597 7.17218 20.7143 7.12487 20.7661 7.07611C20.7905 7.05317 20.8164 7.03023 20.8408 7.00729C20.8925 6.95854 20.9457 6.90979 20.996 6.8596C21.0104 6.84526 21.0248 6.83236 21.0391 6.81802C21.0578 6.80081 21.0751 6.78217 21.0937 6.76497C21.1124 6.74776 21.1297 6.72912 21.1469 6.71191C21.1613 6.69757 21.1757 6.68324 21.1886 6.6689L21.1915 6.67463ZM13.1954 5.35261H13.2069C13.2788 5.34974 13.3507 5.34688 13.4211 5.34257H13.4527C13.4714 5.33971 13.4901 5.33827 13.5087 5.33684C13.5245 5.33684 13.5389 5.33397 13.5547 5.33397C13.5763 5.33254 13.5978 5.3311 13.6194 5.32824C13.6409 5.3268 13.6625 5.32393 13.6826 5.3225C13.697 5.3225 13.7114 5.31963 13.7257 5.3182C13.743 5.31676 13.7588 5.31533 13.776 5.31246C13.7947 5.31103 13.8134 5.30816 13.8321 5.30673H13.845L13.8795 5.30099C13.8924 5.30099 13.9068 5.29812 13.9197 5.29526C13.9327 5.29382 13.947 5.29239 13.96 5.28952C14.0031 5.28379 14.0448 5.27662 14.0864 5.26945C14.1008 5.26801 14.1152 5.26515 14.1296 5.26228C14.1425 5.26084 14.1569 5.25798 14.1698 5.25511C14.1827 5.25367 14.1971 5.25081 14.21 5.24794C14.2488 5.24077 14.2876 5.2336 14.3264 5.22643C14.3451 5.22356 14.3638 5.21926 14.3811 5.21496C14.4026 5.21066 14.4242 5.20636 14.4472 5.20062C14.4773 5.19489 14.5061 5.18772 14.5363 5.18055C14.5664 5.17338 14.5966 5.16621 14.6268 5.15904C14.6498 5.1533 14.6742 5.14757 14.6972 5.14183C14.7202 5.1361 14.7446 5.13036 14.7676 5.12319H14.7691C14.7935 5.11602 14.8179 5.11029 14.8424 5.10312C14.8682 5.09595 14.8941 5.08878 14.92 5.08018C14.9458 5.07301 14.9731 5.0644 14.999 5.0558L15.0177 5.05007C15.0407 5.0429 15.0637 5.03573 15.0867 5.02856C15.1355 5.01278 15.1844 4.99558 15.2333 4.97981L15.2692 4.9669C15.308 4.954 15.3468 4.93966 15.3856 4.92389C15.4071 4.91528 15.4287 4.90811 15.4503 4.89951C15.479 4.88947 15.5063 4.878 15.5336 4.86653C15.5566 4.85649 15.5796 4.84789 15.604 4.83785L15.617 4.83212C16.5051 5.70821 17.3084 6.97574 17.8617 8.49134C17.8387 8.50281 17.8157 8.51428 17.7927 8.52432C17.7697 8.53579 17.7467 8.54582 17.7237 8.55729C17.6778 8.5788 17.6318 8.60031 17.5858 8.62182C17.5398 8.64333 17.4924 8.66483 17.4449 8.68491C17.3975 8.70498 17.3501 8.72506 17.3041 8.74513C17.2811 8.75517 17.2567 8.7652 17.2323 8.77524C17.2078 8.78528 17.1848 8.79532 17.1604 8.80392C17.1388 8.81252 17.1159 8.82113 17.0943 8.83116C17.0684 8.8412 17.0426 8.85124 17.0181 8.86127C16.9865 8.87418 16.9535 8.88565 16.9218 8.89855C16.8586 8.92293 16.7939 8.94731 16.7293 8.97025C16.6818 8.98745 16.633 9.00323 16.5856 9.02043C16.5453 9.03334 16.5051 9.04768 16.4648 9.06058C16.4447 9.06632 16.426 9.07349 16.4059 9.07922L16.3944 9.08209C16.3801 9.08639 16.3671 9.09069 16.3528 9.09499L16.3427 9.09786C16.3183 9.10646 16.2938 9.11363 16.268 9.1208C16.186 9.14661 16.1056 9.16955 16.0237 9.19393C15.9834 9.2054 15.9417 9.21687 15.9015 9.22834C15.8411 9.24411 15.7808 9.26132 15.719 9.27566C15.7046 9.27996 15.6903 9.28283 15.6759 9.28713H15.6673C15.6256 9.30004 15.5839 9.31007 15.5437 9.31868L15.5307 9.32154C15.5077 9.32728 15.4833 9.33301 15.4603 9.33732L15.4488 9.34018C15.4301 9.34449 15.4115 9.34879 15.3928 9.35309L15.3755 9.35596C15.3525 9.36026 15.3295 9.36599 15.308 9.37029C15.2792 9.37603 15.2519 9.38177 15.2232 9.3875C15.2031 9.3918 15.1844 9.3961 15.1643 9.39897C15.1212 9.40758 15.078 9.41618 15.0335 9.42335C15.0091 9.42765 14.9846 9.43195 14.9602 9.43625L14.9473 9.43912C14.93 9.44199 14.9142 9.44486 14.897 9.44772C14.8668 9.45346 14.838 9.45776 14.8079 9.46206C14.7892 9.46493 14.7691 9.46923 14.7504 9.4721L14.7231 9.4764C14.6915 9.48214 14.6599 9.48644 14.6282 9.49074H14.6254C14.5779 9.49791 14.5305 9.50508 14.4831 9.51081C14.4443 9.51655 14.4055 9.52085 14.3652 9.52515H14.3509C14.3308 9.52945 14.3106 9.53232 14.2905 9.53376L14.269 9.53662C14.256 9.53662 14.2431 9.53949 14.2302 9.54093H14.2215C14.187 9.54523 14.154 9.54953 14.1209 9.5524C14.0922 9.55526 14.0649 9.55813 14.0361 9.561C14.0088 9.56387 13.9801 9.56673 13.9514 9.56817C13.9284 9.5696 13.9054 9.57247 13.8838 9.5739H13.8723C13.8522 9.57677 13.8306 9.57821 13.8105 9.57964H13.8048C13.7803 9.58107 13.7545 9.58394 13.7286 9.58537C13.6467 9.59111 13.5648 9.59541 13.4814 9.59828C13.4642 9.59828 13.4469 9.59971 13.4297 9.59971H13.3995C13.3679 9.60258 13.3348 9.60258 13.3032 9.60402C13.2687 9.60402 13.2342 9.60545 13.1998 9.60688V5.34831L13.1954 5.35261ZM14.6369 4.62277C14.6153 4.62851 14.5937 4.63425 14.5722 4.63998C14.5578 4.64428 14.542 4.64715 14.5262 4.65145C14.5104 4.65575 14.4931 4.66006 14.4773 4.66292C14.3164 4.70164 14.154 4.73462 13.9873 4.76043C13.9629 4.76473 13.9384 4.76759 13.9126 4.7719C13.8881 4.77476 13.8623 4.77907 13.8378 4.78193C13.8134 4.7848 13.7875 4.7891 13.7631 4.79197C13.7387 4.79484 13.7128 4.79771 13.6884 4.80057L13.6381 4.80631C13.618 4.80774 13.5993 4.81061 13.5792 4.81204C13.5231 4.81778 13.4671 4.82208 13.411 4.82495C13.3938 4.82495 13.378 4.82638 13.3607 4.82782H13.3507C13.3291 4.82925 13.3075 4.83068 13.286' 
            + '4.83212C13.2558 4.83212 13.2256 4.83499 13.1954 4.83499V3.53447C13.8479 3.58896 14.5334 3.91158 15.1873 4.44784C15.0076 4.51523 14.8237 4.57402 14.6369 4.62421V4.62277ZM12.8031 4.83499C12.7729 4.83499 12.7428 4.83355 12.7126 4.83212C12.691 4.83212 12.6695 4.83068 12.6479 4.82925H12.6379C12.6206 4.82782 12.6048 4.82638 12.5876 4.82638C12.5315 4.82352 12.4755 4.81778 12.4194 4.81348C12.3993 4.81204 12.3806 4.81061 12.3605 4.80774L12.3102 4.80201C12.2858 4.79914 12.2599 4.79627 12.2355 4.7934C12.211 4.79054 12.1852 4.78767 12.1607 4.78337C12.1363 4.7805 12.1104 4.7762 12.086 4.77333C12.0616 4.77046 12.0357 4.76616 12.0113 4.76186C11.846 4.73605 11.6822 4.70307 11.5212 4.66436C11.5054 4.66005 11.4882 4.65575 11.4724 4.65289C11.4566 4.64858 11.4422 4.64572 11.4264 4.64141C11.4048 4.63568 11.3833 4.62994 11.3603 4.62421C11.1734 4.57402 10.9895 4.51523 10.8099 4.44784C11.4637 3.91158 12.1492 3.58896 12.8017 3.53447V4.83499H12.8031ZM10.8602 5.01422C10.9061 5.02999 10.9521 5.04433 10.9996 5.05867C11.0254 5.06727 11.0527 5.07444 11.0786 5.08304C11.1318 5.09882 11.1849 5.11316 11.2381 5.12749C11.2625 5.13323 11.287 5.1404 11.3114 5.14613C11.333 5.15187 11.3545 5.15761 11.3761 5.16191C11.3919 5.16621 11.4091 5.17051 11.4249 5.17338C11.4479 5.17911 11.4709 5.18485 11.4954 5.18915C11.5428 5.20062 11.5888 5.21066 11.6362 5.21926C11.6664 5.225 11.6966 5.23217 11.7282 5.23647C11.8316 5.25654 11.9351 5.27375 12.04 5.28809C12.053 5.28952 12.0673 5.29239 12.0803 5.29382C12.0932 5.29526 12.1076 5.29812 12.1205 5.29956L12.155 5.30386H12.1679C12.1866 5.30816 12.2053 5.30959 12.224 5.31246C12.2398 5.3139 12.257 5.31676 12.2743 5.3182C12.2886 5.31963 12.303 5.32107 12.3174 5.3225C12.3389 5.32537 12.3605 5.3268 12.382 5.32824C12.4036 5.32967 12.4252 5.33254 12.4467 5.33397C12.4625 5.33397 12.4769 5.33684 12.4927 5.33684C12.5114 5.33684 12.5301 5.33971 12.5488 5.34114H12.5804C12.6508 5.34831 12.7226 5.35118 12.7945 5.35261H12.806V9.61262C12.7715 9.61262 12.737 9.61262 12.7025 9.60975C12.6695 9.60975 12.6379 9.60832 12.6062 9.60688H12.5761C12.5588 9.60545 12.5416 9.60402 12.5243 9.60402C12.4913 9.60258 12.4582 9.60115 12.4237 9.59971C12.4079 9.59971 12.3921 9.59828 12.3763 9.59685H12.3648C12.3361 9.59541 12.3088 9.59254 12.28 9.59111C12.2656 9.59111 12.2527 9.58968 12.2383 9.58824H12.2225C12.1895 9.58537 12.1579 9.58251 12.1248 9.57964H12.0989C12.0644 9.57534 12.03 9.57247 11.9955 9.56817L11.9624 9.5653C11.9207 9.561 11.8791 9.5567 11.8374 9.5524H11.8173L11.7799 9.54666C11.7425 9.54236 11.7037 9.53806 11.6664 9.53376C11.6189 9.52802 11.5715 9.52228 11.5227 9.51511C11.481 9.50938 11.4393 9.50364 11.3976 9.49791C11.3344 9.48931 11.2726 9.47927 11.2094 9.46923C11.1778 9.4635 11.1447 9.45919 11.1131 9.45346L11.0815 9.44772C11.0441 9.44055 11.0053 9.43482 10.9679 9.42765C10.955 9.42478 10.9421 9.42191 10.9291 9.42048C10.8875 9.41188 10.8458 9.40471 10.8041 9.3961C10.7682 9.38894 10.7337 9.38177 10.6978 9.3746C10.6791 9.37029 10.659 9.36743 10.6403 9.36169H10.6302C10.5943 9.35166 10.5569 9.34449 10.521 9.33588C10.4822 9.32728 10.442 9.31724 10.4032 9.30864L10.3874 9.30434C10.3672 9.30004 10.3471 9.2943 10.3284 9.29H10.3241C10.3112 9.2857 10.2983 9.28283 10.2853 9.27996L10.2767 9.27709C10.2508 9.27136 10.2264 9.26419 10.2005 9.25702C10.179 9.25128 10.1574 9.24555 10.1344 9.23981C10.1143 9.23408 10.0942 9.22978 10.0741 9.22404C10.0453 9.21687 10.0166 9.20827 9.98784 9.2011C9.9591 9.1925 9.93036 9.18533 9.90161 9.17672C9.87 9.16812 9.83982 9.15952 9.80964 9.14948C9.7694 9.13801 9.72916 9.1251 9.68892 9.1122C9.64294 9.09786 9.59839 9.08352 9.5524 9.06918C9.50641 9.05484 9.46186 9.03907 9.41731 9.0233C9.38282 9.01183 9.34689 8.99892 9.3124 8.98602C9.29947 8.98172 9.28654 8.97598 9.2736 8.97168C9.196 8.94444 9.11839 8.91576 9.04223 8.88565C9.01636 8.87561 8.98906 8.86557 8.96319 8.85554C8.94307 8.84837 8.92295 8.83977 8.90139 8.83116C8.88127 8.82256 8.85972 8.81539 8.8396 8.80679C8.79792 8.79101 8.75768 8.77381 8.71744 8.7566H8.71457L8.68727 8.7437H8.68295V8.74083C8.65709 8.73079 8.63122 8.71932 8.60535 8.70785C8.53637 8.67917 8.46883 8.64906 8.40128 8.61752C8.36967 8.60318 8.33805 8.58884 8.30643 8.57307L8.29494 8.56733L8.27338 8.55729H8.26907V8.55443C8.24751 8.54439 8.22739 8.53579 8.20727 8.52575C8.18572 8.51571 8.16272 8.50424 8.14117 8.4942C8.69301 6.97861 9.49635 5.71108 10.3859 4.83499L10.4003 4.84072C10.4204 4.84932 10.4405 4.85793 10.4592 4.8651C10.5483 4.90094 10.6374 4.93536 10.7279 4.9669C10.7509 4.9755 10.7739 4.98267 10.7969 4.99128C10.8199 4.99988 10.8429 5.00705 10.8659 5.01422H10.8602ZM8.27051 9.07635C8.31218 9.09643 8.3553 9.11507 8.39841 9.13227L8.42428 9.14374C8.46739 9.16238 8.50906 9.18103 8.55218 9.19823L8.56511 9.20397C8.61254 9.22261 8.65996 9.24268 8.70738 9.26132C8.73325 9.27136 8.75912 9.2814 8.78499 9.29143C8.85828 9.32011 8.93157 9.34735 9.00486 9.3746L9.04223 9.3875L9.07528 9.39897C9.10834 9.41044 9.14139 9.42335 9.17444 9.43482C9.20318 9.44486 9.23049 9.45489 9.25923 9.46493C9.27935 9.4721 9.29803 9.47783 9.31815 9.485C9.34689 9.49504 9.3742 9.50364 9.40294 9.51368C9.42162 9.51942 9.4403 9.52515 9.45899 9.53232H9.46186C9.48917 9.54236 9.51647 9.55096 9.54378 9.55956C9.5797 9.57104 9.61563 9.58251 9.65156 9.59254C9.68461 9.60258 9.71623 9.61262 9.74928 9.62122C9.82257 9.64273 9.89587 9.6628 9.96916 9.68288C9.9864 9.68718 10.0036 9.69291 10.0209 9.69722C10.0539 9.70582 10.0856 9.71442 10.1186 9.72303C10.143 9.73019 10.1689 9.73593 10.1933 9.74167H10.1962C10.2092 9.74597 10.2221 9.74884 10.2365 9.7517L10.2523 9.756C10.2839 9.76461 10.3155 9.77178 10.3486 9.77895C10.3658 9.78325 10.383 9.78755 10.4017 9.79185C10.419 9.79615 10.4362 9.80045 10.4549 9.80332H10.4592C10.4937 9.81192 10.5282 9.81909 10.5627 9.82626C10.5828 9.83056 10.6044 9.83487 10.6245 9.83917C10.6978 9.85494 10.7696 9.86928 10.8429 9.88362C10.8573 9.88649 10.8717 9.88935 10.886 9.89222L10.9133 9.89652C10.9493 9.90369 10.9852 9.90943 11.0197 9.91516C11.07 9.92377 11.1188 9.93237 11.1691 9.93954C11.2166 9.94671 11.2625 9.95388 11.31 9.96105C11.3588 9.96822 11.4077 9.97539 11.4566 9.98112L11.4939 9.98686C11.5356 9.99259 11.5773 9.99689 11.6175 10.0026C11.6678 10.0084 11.7181 10.0141 11.7684 10.0198C11.8647 10.0299 11.9624 10.0399 12.0601 10.0471H12.0788C12.1708 10.0557 12.2628 10.0614 12.3547 10.0672C12.3734 10.0672 12.3935 10.0686 12.4122 10.07C12.4956 10.0743 12.5804 10.0772 12.6652 10.0801C12.6838 10.0801 12.7025 10.0801 12.7198 10.0815C12.7471 10.0815 12.7744 10.0815 12.8017 10.0829V12.3857H7.38382C7.42693 11.1612 7.64537 9.99833 7.98452 8.943L7.99602 8.94731C8.03913 8.96881 8.08368 8.99032 8.12823 9.0104C8.17566 9.03334 8.22452 9.05484 8.27338 9.07635H8.27051ZM13.1954 10.0829C13.2228 10.0829 13.2501 10.0829 13.2774 10.0815C13.296 10.0815 13.3147 10.0815 13.332 10.0801C13.4168 10.0786 13.5001 10.0743 13.5849 10.07C13.6036 10.07 13.6237 10.0686 13.6424 10.0672C13.6769 10.0657 13.7114 10.0629 13.7459 10.0614C13.7631 10.0614 13.7818 10.0585 13.799 10.0585C13.8795 10.0528 13.96 10.0471 14.0405 10.0385H14.0419C14.0563 10.0385 14.0721 10.0356 14.0864 10.0342H14.1037C14.1238 10.0313 14.1439 10.0284 14.1626 10.027L14.187 10.0241C14.2057 10.0227 14.2258 10.0198 14.2445 10.0184C14.2891 10.0141 14.3336 10.0084 14.3782 10.0041C14.417 9.99976 14.4543 9.99546 14.4931 9.98972H14.5075C14.5205 9.98686 14.5348 9.98542 14.5478 9.98255L14.5664 9.97969C14.5837 9.97825 14.6009 9.97539 14.6167 9.97252L14.6527 9.96678C14.6728 9.96391 14.6929 9.96105 14.713 9.95818C14.736 9.95531 14.7576 9.95101 14.7806 9.94814C14.8036 9.94527 14.8251 9.94097 14.8481 9.9381H14.8582C14.897 9.93093 14.9358 9.92377 14.976 9.9166C15.0119 9.91086 15.0479 9.90369 15.0824 9.89796C15.101 9.89509 15.1197 9.89079 15.1398 9.88792C15.17 9.88218 15.2002 9.87645 15.2289 9.87071C15.2519 9.86641 15.2735 9.86211 15.2965 9.85781C15.3267 9.85207 15.3583 9.8449 15.3899 9.83917C15.4115 9.83487 15.433 9.83056 15.456 9.82483C15.5092 9.81336 15.5609 9.80189 15.6141 9.78898C15.6673 9.77751 15.719 9.76461 15.7707 9.7517C15.7908 9.7474 15.811 9.74167 15.8311 9.73736C15.8512 9.73306 15.8713 9.72733 15.8914 9.72159C15.9216 9.71442 15.9518 9.70582 15.9834 9.69722C15.9978 9.69435 16.0107 9.69005 16.0251 9.68575C16.1027 9.66424 16.1789 9.64416 16.255 9.62122C16.2766 9.61549 16.2967 9.60832 16.3183 9.60258H16.3211C16.3398 9.59541 16.3599 9.59111 16.3786 9.58394L16.3916 9.57964C16.4117 9.5739 16.4304 9.56817 16.4505 9.561C16.4692 9.55526 16.4878 9.54953 16.5065 9.54379L16.5166 9.54093H16.518C16.5424 9.53232 16.5669 9.52515 16.5913 9.51655C16.6229 9.50651 16.6531 9.49648 16.6847 9.485C16.7178 9.47353 16.7523 9.46206 16.7853 9.45059L16.8054 9.44342C16.8327 9.43482 16.8586 9.42478 16.8859 9.41475C16.9621 9.3875 17.0382 9.36026 17.1144 9.33015C17.1273 9.32441 17.1417 9.32011 17.1561 9.31437C17.1834 9.30434 17.2107 9.2943 17.238 9.28283C17.2567 9.27566 17.2739 9.26849 17.2926 9.26132C17.3415 9.24125 17.3903 9.22117 17.4392 9.2011C17.4622 9.19106 17.4866 9.18103 17.5096 9.17242L17.58 9.14231C17.6418 9.1165 17.7022 9.08926 17.7625 9.06201C17.7913 9.04911 17.8186 9.03621 17.8473 9.0233C17.9048 8.99749 17.9623 8.97025 18.0184 8.943C18.3575 9.99833 18.5745 11.1612 18.6191 12.3857H13.1983V10.0829H13.1954ZM17.3731 3.76532C17.4047 3.73808 17.4363 3.71227 17.4679 3.68503C17.5484 3.61477 17.626 3.54451 17.7022 3.46995C17.7281 3.44557 17.7539 3.41976 17.7798 3.39539C19.0703 4.0521 20.2085 4.96547 21.1239 6.06811C21.0981 6.09679 21.0707 6.12403 21.0449 6.15271C21.0276 6.17135 21.0104 6.18855 20.9931 6.20719C20.9788 6.22153 20.9644 6.2373 20.95 6.25164C20.9371 6.26455 20.9242 6.27889 20.9112 6.29179C20.8925 6.31187 20.8739 6.33194 20.8537 6.35058C20.8207 6.38356 20.7876 6.41654 20.7546 6.44808L20.7187 6.48249C20.6899 6.50974 20.6626 6.53698 20.6339 6.56422C20.6008 6.5972 20.5663 6.62875 20.5318 6.65886C20.4729 6.71335 20.414 6.76783 20.3536 6.82089C20.335 6.83809 20.3163 6.85387 20.2976 6.87107L20.2933 6.87394C20.2775 6.88828 20.2602 6.90262 20.243 6.91696L20.23 6.92843L20.1984 6.95567C20.1381 7.00729 20.0763 7.05891 20.0145 7.10909L19.98 7.13777L19.9757 7.14207C19.9498 7.16358 19.9239 7.18365 19.8981 7.20516C19.8622 7.23384 19.8248 7.26252 19.7889 7.29119C19.7587 7.31557 19.7271 7.33851 19.6969 7.36145L19.661 7.3887L19.6466 7.39873C19.6308 7.4102 19.615 7.42311 19.5992 7.43458L19.5877 7.44318C19.5675 7.45752 19.5474 7.47329 19.5273 7.48763L19.5129 7.49767L19.4741 7.52635C19.4382 7.55216 19.4023 7.57797 19.3663 7.60378C19.3434 7.61955 19.3204 7.63532 19.2974 7.65109C19.2672 7.6726 19.237 7.69268 19.2054 7.71418C19.1407 7.75863 19.0746 7.80165 19.0085 7.84466C18.9812 7.86187 18.9539 7.88051 18.9252 7.89772C18.895 7.91779 18.8648 7.93643 18.8346 7.95507H18.8332L18.803 7.97515C18.7728 7.99379 18.7441 8.01099 18.7153 8.02963C18.6823 8.04971 18.6492 8.06978 18.6162 8.08986C18.5501 8.12857 18.4825 8.16728 18.415 8.206C18.3891 8.22034 18.3633 8.23468 18.3374 8.24901L18.3029 8.26765L18.2641 8.28916C18.2468 8.2992 18.2282 8.30924 18.2109 8.31784C17.6562 6.83379 16.8658 5.57629 15.9863 4.67153C16.0078 4.66149 16.028 4.65145 16.0481 4.63998C16.0696 4.62994 16.0898 4.61847 16.1099 4.60844C16.1271 4.59983 16.1429 4.59123 16.1587 4.58263C16.1918 4.56542 16.2248 4.54678 16.2579 4.52957C16.2823 4.51667 16.3053 4.50376 16.3298 4.48943C16.3628 4.47078 16.3973 4.45071 16.4304 4.43207L16.4634 4.412C16.4878 4.39766 16.5108 4.38332 16.5353 4.36898C16.5583 4.35464 16.5813 4.34174 16.6028 4.3274C16.6603 4.29155 16.7178 4.25427 16.7738 4.21699C16.8083 4.19405 16.8428 4.16967 16.8773 4.1453C16.8989 4.13096 16.919 4.11662 16.9405 4.10085C16.9578 4.08794 16.9765 4.07504 16.9937 4.06213C17.0066 4.0521 17.0196 4.04349 17.0325 4.03346L17.0713 4.00478C17.0914 3.99044 17.1115 3.97467 17.1317 3.9589L17.1432 3.95029C17.169 3.93022 17.1949 3.91014 17.2208 3.88864L17.2409 3.87286C17.2696 3.84992 17.2984 3.82698 17.3257 3.80404C17.34 3.79257 17.3558 3.77966 17.3702 3.76676L17.3731 3.76532ZM17.1935 3.23336L17.1719 3.25344C17.1446 3.27781 17.1173 3.30219 17.09 3.32513H17.0885C17.0627 3.3495 17.0354 3.37101 17.0095 3.39395L16.9851 3.41403C16.9563 3.4384 16.9276 3.46135 16.8974 3.48429C16.8715 3.50436 16.8457 3.52444 16.8198 3.54451L16.7839 3.57175L16.7666 3.58466C16.7465 3.60043 16.725 3.6162 16.7048 3.63054L16.6689 3.65635C16.643 3.67499 16.6186 3.6922 16.5927 3.71084L16.5798 3.71944C16.5511 3.73951 16.5209 3.75959 16.4907 3.77966C16.4706 3.79257 16.4505 3.80691 16.4304 3.81981C16.4117 3.83272 16.393 3.84419 16.3729 3.85709H16.3686C16.3484 3.87286 16.3283 3.88434 16.3068 3.89724C16.2637 3.92448 16.2205 3.95029 16.176 3.9761C16.1573 3.98757 16.1386 3.99761 16.1199 4.00908C15.992 4.08221 15.8613 4.15247 15.7276 4.21699C15.7118 4.22416 15.6974 4.23133 15.6816 4.23993C15.6673 4.2471 15.6514 4.25427 15.6371 4.26144C15.6198 4.27004 15.6012 4.27865 15.5839 4.28582C14.8064 3.60186 13.9801 3.18891 13.1954 3.13012V2.25833C14.6469 2.28414 16.028 2.6039 17.2782 3.1588C17.2509 3.18461 17.2222 3.21042 17.1935 3.23623V3.23336ZM12.8031 2.25547V3.12726C12.0185 3.18748 11.1907 3.599 10.4147 4.28438C10.396 4.27721 10.3787 4.26861 10.36 4.26001C10.2221 4.19548 10.087 4.12809 9.95479 4.05353C9.93898 4.04493 9.92461 4.03632 9.9088 4.02772L9.87575 4.00908C9.8585 3.99904 9.84126 3.98901 9.82257 3.97897C9.77802 3.95316 9.73347 3.92592 9.68892 3.89867C9.64725 3.87286 9.60701 3.84705 9.56677 3.82124C9.54665 3.80834 9.52653 3.79544 9.50641 3.7811C9.47623 3.76102 9.44749 3.74095 9.41731 3.72087L9.40438 3.71227C9.37851 3.69507 9.35264 3.67642 9.32821 3.65778L9.29228 3.63198C9.27217 3.61764 9.25061 3.60186 9.23049 3.58609L9.21324 3.57319L9.17732 3.54594C9.15145 3.52587 9.12558 3.5058 9.09971 3.48572C9.06953 3.46278 9.04079 3.4384 9.01205 3.41546L8.98762 3.39539C8.96175 3.37388 8.93445 3.35094 8.90858 3.32943H8.90714C8.87984 3.30362 8.85109 3.28068 8.82523 3.2563L8.80367 3.23623C8.77493 3.21042 8.74762 3.18461 8.71888 3.1588C9.97059 2.6039 11.3502 2.28414 12.8017 2.25833L12.8031 2.25547ZM8.21877 3.39395C8.25182 3.42693 8.28488 3.45848 8.31793 3.49002L8.35673 3.52587L8.3711 3.54021C8.38691 3.55455 8.40272 3.56889 8.41853 3.58322C8.45014 3.6119 8.48176 3.64058 8.51481 3.66926C8.53206 3.68359 8.54787 3.69793 8.56511 3.71227L8.59098 3.73378L8.61685 3.75529C8.63409 3.76963 8.65134 3.78396 8.66858 3.79974C8.69445 3.82124 8.72032 3.84275 8.74762 3.86426C8.77349 3.88577 8.8008 3.90584 8.8281 3.92735C8.86115 3.95316 8.89421 3.97754 8.92726 4.00335C8.94738 4.01768 8.96606 4.03202 8.98618 4.04636C9.01061 4.065 9.03648 4.08221 9.06091 4.10085C9.08534 4.11805 9.10977 4.13526 9.1342 4.15247C9.15432 4.16681 9.17444 4.17971 9.196 4.19405C9.27073 4.24423 9.34546 4.29299 9.42306 4.3403L9.43743 4.34891C9.47336 4.37041 9.50929 4.39336 9.54521 4.41343C9.57252 4.4292 9.59982 4.44641 9.62856 4.46218C9.64725 4.47365 9.66593 4.48369 9.68605 4.49373C9.70473 4.5052 9.72485 4.51523 9.74353 4.52527C9.76796 4.53818 9.79096 4.55108 9.81539 4.56399C9.84126 4.57832 9.86712 4.59123 9.89299 4.60413C9.93323 4.62564 9.97347 4.64572 10.0137 4.66579C9.13277 5.57199 8.34236 6.82806 7.78908 8.3121L7.77471 8.3035C7.75171 8.2906 7.72728 8.27913 7.70429 8.26479L7.6971 8.26048C7.68273 8.25332 7.66836 8.24471 7.65399 8.23611H7.65112C7.63387 8.22464 7.61519 8.2146 7.59794 8.20456C7.49016 8.14434 7.38238 8.08269 7.27747 8.01816C7.26166 8.00956 7.24729 7.99952 7.23148 7.99092C7.16538 7.95077 7.09927 7.90919 7.0346 7.86761C7.0073 7.8504 6.97999 7.83319 6.95269 7.81455C6.92682 7.79878 6.90095 7.78157 6.87508 7.76437C6.84778 7.74716 6.82191 7.72852 6.79461 7.70988C6.7673 7.69268 6.74143 7.67404 6.71413 7.65539C6.67676 7.63102 6.64084 7.60521 6.60491 7.5794C6.57186 7.55646 6.5388 7.53352 6.50719 7.50914C6.49138 7.49767 6.47413 7.4862 6.45832 7.47473C6.44108 7.46182 6.4224 7.44892 6.40515 7.43458C6.38647 7.42167 6.36779 7.40734 6.3491 7.393C6.33186 7.38009 6.31461 7.36719 6.29593 7.35285C6.27869 7.33994 6.26144 7.32704 6.2442 7.3127C6.23126 7.30266 6.21833 7.29263 6.20539 7.28259C6.17953 7.26252 6.15366 7.24101 6.12779 7.22093L6.09905 7.19799L6.07318 7.17792C6.04731 7.15641 6.02145 7.13634 5.99558 7.11483L5.98983 7.10909C5.95534 7.08185 5.92229 7.05317 5.88923 7.02593C5.85618 6.99869 5.82456 6.97144 5.79151 6.94276C5.76852 6.92412 5.74696 6.90548 5.7254 6.88541C5.70241 6.86677 5.68085 6.8467 5.6593 6.82662C5.63774 6.80798 5.61475 6.78791 5.59319 6.76783C5.57163 6.74776 5.55008 6.72912 5.52852 6.70905C5.50265 6.68467 5.47535 6.66029 5.44948 6.63592C5.41786 6.60581 5.38625 6.5757 5.35463 6.54559L5.33164 6.52408C5.30577 6.4997 5.28134 6.47533 5.25691 6.45095C5.22817 6.42227 5.19943 6.3936 5.17068 6.36492C5.14194 6.33624 5.11464 6.30756 5.08589 6.27889L5.06003 6.25164C5.03128 6.22297 5.00398 6.19429 4.97668 6.16418C4.94506 6.1312 4.91344 6.09679 4.88183 6.06237C5.79726 4.95973 6.93544 4.04636 8.22596 3.38965L8.21877 3.39395ZM2.47037 12.1749C2.47325 12.1319 2.47612 12.0889 2.479 12.0459C2.48187 12.0029 2.48474 11.9599 2.48906 11.9168C2.49624 11.8308 2.50343 11.7448 2.51349 11.6602C2.51636 11.6258 2.52067 11.5913 2.52498 11.5584C2.52929 11.524 2.53361 11.4895 2.53792 11.4566C2.54654 11.3877 2.55516 11.3203 2.56522 11.2515C2.5681 11.2343 2.56953 11.2185 2.57241 11.2013C2.57528 11.1841 2.57816 11.1684 2.57959 11.1512C2.58534 11.1167 2.58965 11.0838 2.5954 11.0508C2.60115 11.0178 2.6069 10.9834 2.61265 10.9504C2.61839 10.9174 2.62414 10.8859 2.62989 10.8529C2.63277 10.8371 2.63564 10.8199 2.63851 10.8042C2.64139 10.7841 2.6457 10.7654 2.65001 10.7454C2.65432 10.721 2.65863 10.6966 2.66438 10.6737V10.6694L2.66869 10.6536V10.6507C2.67444 10.6221 2.68163 10.5919 2.68738 10.5633C2.696 10.5231 2.70462 10.4815 2.71468 10.4414C2.72187 10.4113 2.72905 10.3797 2.73624 10.3496C2.74342 10.3195 2.75061 10.2894 2.75779 10.2579C2.76642 10.222 2.77504 10.1862 2.7851 10.1489C2.79228 10.1202 2.79947 10.0915 2.80809 10.0614C2.81671 10.0284 2.82534 9.99689 2.83396 9.96391C2.83971 9.94384 2.84546 9.92377 2.8512 9.90369C2.85695 9.88362 2.8627 9.86354 2.86845 9.84347C2.8742 9.8234 2.87995 9.80332 2.8857 9.78325C2.89144 9.76317 2.89719 9.7431 2.90438 9.72303C2.91587 9.68288 2.92881 9.64273 2.94174 9.60402C2.94749 9.58394 2.95468 9.56387 2.96042 9.54379C2.97623 9.49504 2.99204 9.44772 3.00785 9.39897C3.01791 9.3703 3.02653 9.34162 3.03659 9.31294C3.04665 9.2857 3.05527 9.25845 3.06533 9.23121C3.07539 9.20397 3.08402 9.17672 3.09551 9.14948C3.10557 9.12224 3.11563 9.09643 3.12569 9.06918C3.14581 9.0147 3.16593 8.96164 3.18749 8.90859C3.19755 8.88135 3.20904 8.85554 3.2191 8.82829C3.25647 8.73653 3.29527 8.64476 3.33551 8.55443C3.34269 8.53722 3.34988 8.52145 3.35706 8.50424C3.36425 8.48704 3.37143 8.47126 3.38006 8.45406C3.40593 8.3967 3.43179 8.34078 3.4591 8.28343C3.47347 8.25332 3.48784 8.2232 3.50221 8.19453C3.51658 8.16442 3.53095 8.13574 3.54532 8.10563C3.56688 8.06118 3.58987 8.01673 3.61143 7.97371C3.62293 7.9522 3.63442 7.92926 3.64592 7.90775C3.65742 7.88625 3.66891 7.8633 3.68041 7.8418C3.71059 7.78444 3.74221 7.72565 3.77526 7.6683C3.78676 7.64679 3.79825 7.62672 3.81119 7.60521C3.82987 7.5708 3.84999 7.53782 3.86867 7.50484C3.87586 7.49193 3.88448 7.4776 3.89166 7.46469C3.91897 7.41737 3.94627 7.37149 3.97502 7.32561C3.99082 7.29836 4.00807 7.27255 4.02388 7.24531C4.03969 7.2195 4.05549 7.19369 4.07274 7.16788C4.09142 7.13777 4.1101 7.10909 4.13022 7.07898C4.14459 7.05604 4.1604 7.03166 4.17621 7.00872C4.19346 6.98291 4.2107 6.95567 4.22795 6.92986C4.25813 6.88398 4.28974 6.83953 4.32136 6.79364C4.33573 6.77214 4.35154 6.75206 4.36591 6.73055C4.38459 6.70474 4.40183 6.67893 4.42052 6.65312C4.44639 6.61584 4.47369 6.58 4.49956 6.54415C4.52543 6.5083 4.55273 6.47246 4.58004 6.43661C4.63752 6.49683 4.695 6.55706 4.75249 6.61728C4.76973 6.63448 4.78698 6.65312 4.80422 6.67033C4.8574 6.72482 4.91201 6.77787 4.96662 6.83092C4.98242 6.8467 4.99823 6.86247 5.01404 6.87681C5.04566 6.90692 5.07727 6.93703 5.10889 6.96714C5.16493 7.02019 5.22098 7.07181 5.27847 7.12343C5.29715 7.14064 5.31727 7.15784 5.33595 7.17505C5.38912 7.22237 5.4423 7.26825 5.49547 7.31414C5.52708 7.34138 5.56014 7.36862 5.59175 7.39587C5.63056 7.42884 5.66936 7.46182 5.7096 7.49337C5.73977 7.51918 5.77139 7.54355 5.80301 7.56793C5.83319 7.5923 5.86337 7.61668 5.89498 7.63962C5.92516 7.664 5.95534 7.68694 5.98696 7.71132C6.04875 7.75863 6.11198 7.80595 6.17378 7.85183C6.18959 7.8633 6.20539 7.87478 6.21977 7.88625C6.2442 7.90345 6.26719 7.92066 6.29162 7.93787C6.31749 7.95651 6.34479 7.97515 6.37066 7.99379C6.41665 8.02533 6.46264 8.05831 6.50862 8.08842C6.52874 8.10276 6.5503 8.11566 6.57042 8.13L6.58335 8.13861C6.60347 8.15294 6.62503 8.16585 6.64515 8.18019H6.64658C6.67533 8.20026 6.70551 8.22034 6.73425 8.23898C6.75868 8.25475 6.78311 8.27052 6.80754 8.28629C6.83341 8.3035 6.86071 8.32071 6.88802 8.33648C6.90526 8.34795 6.92394 8.35942 6.94119 8.36946C6.95843 8.38093 6.97712 8.39097 6.99436 8.40244C7.01161 8.41391 7.02885 8.42395 7.0461 8.43398C7.06334 8.44402 7.08059 8.45549 7.09783 8.46553C7.13089 8.4856 7.16394 8.50424 7.19699 8.52432L7.2128 8.53292C7.24442 8.55156 7.27603 8.56877 7.30765 8.58741C7.37807 8.62755 7.44849 8.66627 7.5189 8.70498C7.55483 8.72362 7.59076 8.7437 7.62525 8.76234C7.25879 9.87215 7.0231 11.0952 6.97855 12.3843H2.46031C2.46319 12.3154 2.46606 12.2452 2.47037 12.1764V12.1749ZM7.0461 14.9093C7.02598 14.9236 7.0073 14.9394 6.98718 14.9538C6.94837 14.9839 6.90957 15.014 6.87077 15.0441L6.86502 15.0484C6.82766 15.0771 6.79173 15.1072 6.7558 15.1373C6.71844 15.1688 6.67964 15.2004 6.64227 15.2319C6.60778 15.262 6.57329 15.2907 6.5388 15.3208C6.49569 15.3581 6.45401 15.3954 6.41234 15.4327C6.37785 15.4628 6.34479 15.4943 6.31174 15.5244C6.27725 15.5574 6.24276 15.589 6.20827 15.6219C6.1939 15.6363 6.17809 15.6506 6.16372 15.665C6.14647 15.6807 6.12923 15.6979 6.11198 15.7151L6.09761 15.7295C6.06312 15.7639 6.02719 15.7983 5.99414 15.8327C5.95965 15.8671 5.9266 15.9015 5.89354 15.936C5.87055 15.9603 5.84612 15.9847 5.82313 16.0105C5.80876 16.0249 5.79582 16.0406 5.78145 16.055C5.75846 16.0808 5.73546 16.1052 5.71103 16.131C5.6363 16.2127 5.56445 16.2959 5.49259 16.379C5.47679 16.3977 5.46241 16.4149 5.44661 16.4335C5.4308 16.4521 5.41643 16.4708 5.40062 16.488C5.37331 16.521 5.34745 16.5539 5.32014 16.5855C5.3029 16.607 5.28565 16.6285 5.26841 16.65L5.25116 16.6701C5.23392 16.693 5.21667 16.7145 5.19943 16.7375C5.17643 16.7676 5.15344 16.7977 5.13044 16.8278C5.11176 16.8522 5.09452 16.8766 5.07583 16.9009C5.00398 16.997 4.935 17.0959 4.86746 17.1949C4.8459 17.2264 4.82434 17.258 4.80279 17.291C4.79416 17.3039 4.78554 17.3168 4.77692 17.3311L4.75249 17.3684C4.72806 17.4057 4.70363 17.4444 4.6792 17.4831C4.66051 17.5118 4.64327 17.5404 4.62602 17.5691C4.60447 17.6035 4.58435 17.6365 4.56423 17.6709C4.54411 17.7053 4.52399 17.7383 4.50387 17.7727C4.49381 17.7885 4.48519 17.8057 4.47513 17.8215C4.46507 17.8387 4.45501 17.8559 4.44495 17.8731C4.43201 17.8946 4.42052 17.9176 4.40758 17.9391L4.4004 17.952C4.38746 17.9749 4.37453 17.9978 4.3616 18.0208C4.34723 18.0452 4.33429 18.071 4.32136 18.0954C4.3113 18.1154 4.2998 18.1341 4.28974 18.1541C4.28256 18.1685 4.27393 18.1828 4.26675 18.1972C4.25669 18.2158 4.24807 18.2344 4.23801 18.2531C4.22795 18.2732 4.21645 18.2932 4.20783 18.3133C4.19489 18.3377 4.1834 18.3606 4.1719 18.385C4.16471 18.3979 4.15897 18.4122 4.15178 18.4251C4.14316 18.4409 4.13597 18.4581 4.12735 18.4753C3.0639 16.8321 2.44738 14.8749 2.44738 12.7757H6.96849C6.96849 12.7987 6.96849 12.8216 6.96849 12.8445C6.96849 13.5371 7.01304 14.2139 7.09927 14.8663C7.07915 14.8806 7.06047 14.8964 7.04035 14.9107L7.0461 14.9093ZM12.5229 12.9177C12.4697 12.9205 12.4165 12.9234 12.3648 12.9263C12.3231 12.9291 12.2815 12.932 12.2398 12.9349C12.2082 12.9377 12.1765 12.9392 12.1449 12.942C12.1162 12.9449 12.0874 12.9463 12.0587 12.9507C12.0343 12.9535 12.0084 12.955 11.984 12.9578C11.9567 12.9607 11.9294 12.9636 11.9006 12.9664C11.8532 12.9707 11.8072 12.9765 11.7612 12.9822C11.7411 12.9851 11.7195 12.9879 11.6994 12.9908C11.6764 12.9937 11.6534 12.9965 11.6304 13.0008C11.5859 13.0066 11.5413 13.0137 11.4954 13.0209C11.4767 13.0238 11.458 13.0266 11.4393 13.0295C11.4221 13.0324 11.4034 13.0352 11.3861 13.0381C11.3488 13.0439 11.31 13.051 11.2726 13.0582C11.2396 13.0639 11.2065 13.0697 11.1734 13.0768C11.1375 13.084 11.1002 13.0912 11.0642 13.0983C11.0455 13.1026 11.0254 13.1055 11.0067 13.1098C10.9723 13.117 10.9378 13.1241 10.9033 13.1313C10.8832 13.1356 10.8616 13.1399 10.8429 13.1442C10.8055 13.1528 10.7696 13.1614 10.7337 13.17C10.7121 13.1743 10.6906 13.1801 10.669 13.1858C10.6259 13.1958 10.5828 13.2073 10.5397 13.2188C10.5268 13.2217 10.5138 13.226 10.5009 13.2288C10.4535 13.2417 10.406 13.2546 10.3586 13.2675C10.3313 13.2747 10.3026 13.2833 10.2753 13.2919C10.2494 13.2991 10.2221 13.3062 10.1962 13.3149C10.1387 13.3321 10.0813 13.3493 10.0252 13.3679C9.98353 13.3808 9.94185 13.3951 9.90161 13.4081C9.87862 13.4152 9.85706 13.4224 9.83551 13.431C9.75934 13.4568 9.68461 13.4826 9.60845 13.5113C9.5797 13.5213 9.54952 13.5328 9.52078 13.5443C9.4906 13.5557 9.46043 13.5672 9.43025 13.5787C9.40294 13.5902 9.3742 13.6002 9.34689 13.6117C9.32965 13.6188 9.31097 13.626 9.29372 13.6332C9.24199 13.6547 9.19025 13.6762 9.13851 13.6977C9.11552 13.7077 9.09253 13.7178 9.06953 13.7278L9.04654 13.7378C8.97612 13.768 8.9057 13.8009 8.83529 13.8339C8.80367 13.8482 8.77349 13.8626 8.74331 13.8784C8.7117 13.8941 8.67864 13.9099 8.64703 13.9257C8.61541 13.9415 8.58236 13.9572 8.55074 13.973C8.53062 13.983 8.5105 13.9945 8.48895 14.0045C8.44583 14.026 8.40272 14.049 8.35961 14.0719C8.30931 14.0992 8.25901 14.1264 8.21015 14.1537C8.17853 14.1709 8.14692 14.1895 8.11674 14.2067C8.08656 14.2239 8.05494 14.2426 8.02476 14.2598C8.00321 14.2727 7.98309 14.2841 7.96153 14.297C7.93279 14.3143 7.90548 14.3315 7.87818 14.3472C7.85518 14.3601 7.83363 14.3745 7.81063 14.3888C7.74884 14.4275 7.68704 14.4662 7.62669 14.5064C7.60226 14.5222 7.57926 14.5379 7.55627 14.5537C7.5304 14.5709 7.50453 14.5881 7.47866 14.6053C7.41256 14.0361 7.3795 13.4496 7.3795 12.8488C7.3795 12.8259 7.3795 12.803 7.3795 12.78H12.8074V12.9134C12.7313 12.9134 12.6565 12.9162 12.5818 12.9205C12.5631 12.9205 12.5444 12.922 12.5272 12.9234L12.5229 12.9177ZM18.5256 14.601L18.517 14.5953C18.4883 14.5767 18.461 14.558 18.4322 14.5379C18.4006 14.5179 18.369 14.4964 18.3374 14.4763C18.3187 14.4648 18.3015 14.4533 18.2828 14.4404C18.2555 14.4232 18.2282 14.406 18.2009 14.3888C18.1736 14.3716 18.1463 14.3544 18.1189 14.3386C18.0112 14.2727 17.9034 14.2096 17.7942 14.1479C17.7582 14.1279 17.7223 14.1078 17.6849 14.0877L17.6519 14.0705L17.6217 14.0547C17.5369 14.0103 17.4521 13.9658 17.3673 13.9242C17.3386 13.9099 17.3113 13.897 17.2826 13.8827C17.2538 13.8683 17.2251 13.8554 17.1978 13.8425C17.1676 13.8282 17.1388 13.8153 17.1087 13.8009C17.0526 13.7751 16.9951 13.7493 16.9391 13.7249C16.9175 13.7149 16.8945 13.7063 16.873 13.6963C16.8471 13.6848 16.8198 13.6733 16.7939 13.6618C16.7408 13.6403 16.6876 13.6174 16.6344 13.5973C16.6086 13.5873 16.5813 13.5758 16.5539 13.5658C16.5266 13.5557 16.5008 13.5457 16.4735 13.5342C16.4189 13.5142 16.3657 13.4941 16.3111 13.474C16.2565 13.4539 16.2019 13.4353 16.1472 13.4167C16.1156 13.4066 16.0855 13.3951 16.0538 13.3851C16.0136 13.3722 15.9748 13.3593 15.9346 13.3464C15.9087 13.3378 15.8843 13.3306 15.8584 13.3235C15.8268 13.3134 15.7966 13.3048 15.765 13.2962C15.742 13.289 15.7176 13.2819 15.6946 13.2761C15.6514 13.2632 15.6083 13.2518 15.5638 13.2403C15.548 13.236 15.5322 13.2317 15.5164 13.2274C15.4833 13.2188 15.4503 13.2102 15.4172 13.2016C15.3813 13.193 15.3453 13.1844 15.3094 13.1758C15.2649 13.1643 15.2203 13.1543 15.1743 13.1442C15.1513 13.1385 15.1269 13.1328 15.1025 13.1284C15.0277 13.1127 14.953 13.0969 14.8783 13.0826C14.8625 13.0797 14.8467 13.0768 14.8309 13.074H14.8251C14.7935 13.0668 14.7633 13.0611 14.7317 13.0568C14.7058 13.0525 14.68 13.0482 14.6541 13.0439C14.6297 13.0396 14.6038 13.0352 14.5779 13.0309C14.5032 13.018 14.427 13.008 14.3509 12.9965C14.3135 12.9922 14.2776 12.9865 14.2402 12.9822C14.2043 12.9779 14.1698 12.9736 14.1339 12.9693C14.1008 12.965 14.0692 12.9621 14.0376 12.9593C14.0074 12.9564 13.9758 12.9521 13.9456 12.9507C13.9169 12.9478 13.8881 12.9449 13.8594 12.942C13.8278 12.9392 13.7962 12.9363 13.7645 12.9349C13.7229 12.932 13.6812 12.9291 13.6395 12.9263C13.5863 12.9234 13.5332 12.9191 13.4814 12.9177C13.4627 12.9177 13.4441 12.9162 13.4268 12.9148C13.3521 12.9119 13.2759 12.9091 13.2012 12.9076V12.7743H18.6291C18.6291 12.7972 18.6291 12.8202 18.6291 12.8431C18.6291 13.4439 18.5946 14.0303 18.53 14.5996L18.5256 14.601ZM21.8669 18.4768C21.8511 18.4423 21.8339 18.4094 21.818 18.3764C21.8051 18.3506 21.7936 18.3262 21.7807 18.3004C21.7663 18.2717 21.7519 18.243 21.7376 18.2158L21.7333 18.2086C21.7218 18.1871 21.7117 18.1656 21.7002 18.1441C21.6887 18.1226 21.6772 18.1011 21.6657 18.0796C21.647 18.0437 21.6269 18.0079 21.6068 17.972L21.5881 17.9391L21.5694 17.9061C21.5565 17.8817 21.5421 17.8573 21.5277 17.833C21.5119 17.8057 21.4961 17.7785 21.4803 17.7527C21.4602 17.7182 21.4401 17.6853 21.42 17.6509C21.3567 17.5447 21.2906 17.4415 21.2216 17.3383C21.203 17.311 21.1843 17.2824 21.1656 17.2551C21.1527 17.2365 21.1397 17.2164 21.1268 17.1963C21.0952 17.149 21.0621 17.1031 21.0291 17.0558C21.009 17.0271 20.9888 16.9999 20.9687 16.9712C20.9486 16.944 20.9285 16.9167 20.9084 16.888C20.8882 16.8608 20.8681 16.8336 20.8466 16.8063C20.825 16.7762 20.802 16.7475 20.779 16.7188C20.7603 16.6945 20.7417 16.6715 20.723 16.6472C20.6856 16.5998 20.6482 16.5525 20.6094 16.5052C20.5908 16.4823 20.5721 16.4593 20.552 16.4364C20.5261 16.4048 20.5002 16.3747 20.4744 16.3446C20.4514 16.3174 20.4284 16.2916 20.4054 16.2643C20.3752 16.2299 20.3465 16.1969 20.3163 16.1639C20.2803 16.1238 20.2444 16.0851 20.2085 16.0464C20.1841 16.0191 20.1596 15.9933 20.1338 15.9675C20.0562 15.8858 19.9771 15.8055 19.8966 15.7252C19.8665 15.6951 19.8348 15.665 19.8032 15.6348C19.7845 15.6176 19.7659 15.599 19.7472 15.5818C19.7285 15.5631 19.7084 15.5445 19.6883 15.5273C19.6552 15.4958 19.6222 15.4656 19.5877 15.4355C19.556 15.4069 19.5244 15.3782 19.4914 15.3495C19.4713 15.3323 19.4511 15.3137 19.4296 15.2965C19.4095 15.2792 19.3879 15.2606 19.3678 15.2434C19.3261 15.209 19.2844 15.1731 19.2428 15.1387C19.158 15.0685 19.0703 14.9996 18.9826 14.9323C18.9539 14.9093 18.9237 14.8878 18.895 14.8663C18.8662 14.8448 18.8375 14.8247 18.8102 14.8032C18.8389 14.8247 18.8677 14.8448 18.895 14.8663C18.9798 14.2139 19.0258 13.5385 19.0258 12.846C19.0258 12.823 19.0258 12.8001 19.0258 12.7772H23.5469C23.5469 14.8778 22.9304 16.835 21.8669 18.4768Z" fill="#1A1A1A"/>'
            + '<path d="M16.0768 1.20898L16.416 1.31079L16.3887 1.79687L16.3901 1.7983L16.6387 1.37818L16.9764 1.47998L16.7436 2.24997L16.518 2.18258L16.6675 1.68789H16.666L16.3829 2.141L16.2047 2.08794L16.2205 1.55311H16.2191L16.0696 2.04636L15.844 1.97897L16.0768 1.20898Z" fill="white"/>'
            + '<path d="M17.3371 1.62012L17.5627 1.70902L17.5411 2.56503L17.3011 2.47183L17.3112 2.35282L17.0726 2.25962L16.9965 2.35282L16.7637 2.26249L17.3342 1.62155L17.3371 1.62012ZM17.3299 2.17215L17.3529 1.91549H17.3514L17.1876 2.11623L17.3299 2.17215Z" fill="white"/>'
            + '<path d="M18.1778 2.54529C18.0844 2.74603 17.9565 2.78187 17.7725 2.69728C17.5872 2.61124 17.5527 2.46929 17.6274 2.31013L17.6561 2.24848L17.8588 2.34311L17.8387 2.38469C17.8128 2.44061 17.7884 2.49223 17.8487 2.52091C17.9076 2.54815 17.9364 2.47646 17.9507 2.44348L18.1706 1.97461L18.3962 2.07928L18.1778 2.54529Z" fill="white"/>'
            + '<path d="M18.5514 2.15674L18.7698 2.27575L18.4824 2.80054L18.7957 2.97117L18.698 3.15184L18.1663 2.86363L18.5514 2.15674Z" fill="white"/>'
            + '<path d="M19.2053 2.51963L18.7866 3.20703L18.9991 3.33587L19.4178 2.64847L19.2053 2.51963Z" fill="white"/>'
            + '<path d="M19.4223 3.28774C19.4108 3.30494 19.4036 3.32071 19.3993 3.33649C19.3878 3.38667 19.4266 3.42539 19.464 3.4512C19.497 3.47414 19.5559 3.49708 19.5904 3.44833C19.6134 3.41392 19.5904 3.38524 19.4985 3.27483C19.4137 3.17303 19.3116 3.06262 19.4036 2.92927C19.5085 2.77585 19.6853 2.79879 19.8218 2.89056C19.9669 2.98806 20.0575 3.13001 19.9526 3.29634L19.7586 3.16442C19.7787 3.14148 19.7801 3.11711 19.7701 3.09416C19.7614 3.07122 19.7413 3.04971 19.7212 3.03681C19.6925 3.01817 19.6422 2.99379 19.6163 3.03107C19.5876 3.08126 19.6767 3.15582 19.7528 3.24615C19.829 3.33649 19.8937 3.44259 19.8103 3.56591C19.6925 3.7394 19.4941 3.68778 19.3461 3.58741C19.27 3.53579 19.0731 3.36373 19.2153 3.15009L19.4208 3.28917L19.4223 3.28774Z" fill="white"/>'
            + '<path d="M20.7876 4.28146C20.6439 4.45209 20.483 4.4564 20.2933 4.29867C20.105 4.14095 20.0806 3.98035 20.2243 3.80972L20.5419 3.43262L20.7316 3.59178L20.4485 3.9273C20.3953 3.99039 20.3292 4.06925 20.4226 4.14668C20.5117 4.22268 20.5778 4.14381 20.631 4.08072L20.9141 3.7452L21.1038 3.90436L20.7862 4.2829L20.7876 4.28146Z" fill="white"/>'
            + '<path d="M21.1554 4.95265C21.0663 4.96555 20.983 4.92684 20.9212 4.86518C20.7502 4.69885 20.7746 4.46513 20.9356 4.30167C21.1497 4.08229 21.3911 4.14538 21.5205 4.27156C21.667 4.41495 21.6829 4.58558 21.5751 4.74617L21.4041 4.57984C21.4386 4.53109 21.4328 4.46657 21.3897 4.42642C21.2675 4.30741 21.1468 4.43932 21.108 4.47947C21.0548 4.53396 20.9844 4.64867 21.0922 4.75477C21.1339 4.79492 21.1957 4.81499 21.2474 4.78058L21.1684 4.70459L21.2891 4.58127L21.5248 4.81069L21.2144 5.12758L21.1023 5.0186L21.154 4.95408L21.1554 4.95265Z" fill="white"/>'
            + '<path d="M22.0954 4.89941L22.2549 5.08151L21.841 5.83143L21.6714 5.63785L21.7361 5.53748L21.5679 5.34535L21.4573 5.3941L21.2935 5.20626L22.0954 4.90085V4.89941ZM21.8338 5.38693L21.9732 5.16898L21.7346 5.27222L21.8352 5.38693H21.8338Z" fill="white"/>'
            + '<path d="M22.5207 5.38965L22.7305 5.67212L22.4172 6.04636L22.4186 6.04779L22.8684 5.85996L23.0783 6.14386L22.4301 6.62134L22.2907 6.43207L22.706 6.12665L22.7046 6.12379L22.2059 6.31736L22.0953 6.16967L22.4287 5.75098L22.4273 5.74811L22.0105 6.05496L21.8711 5.86712L22.5207 5.38965Z" fill="white"/>'
            + '<path d="M23.2953 6.48975L23.4232 6.69622L22.8915 7.3687L22.7564 7.15076L22.8369 7.06186L22.7018 6.84391L22.5854 6.87402L22.4546 6.66181L23.2967 6.49118L23.2953 6.48975ZM22.9576 6.92707L23.1315 6.73494L22.88 6.79659L22.9604 6.92564L22.9576 6.92707Z" fill="white"/>'
            + '<path d="M23.8019 7.36493L23.0833 7.72949L23.1959 7.95061L23.9146 7.58605L23.8019 7.36493Z" fill="white"/>'
            + '<path d="M23.5628 8.09139C23.5441 8.09999 23.5297 8.11003 23.5182 8.1215C23.4808 8.15734 23.4952 8.21183 23.5139 8.25341C23.5311 8.29069 23.5685 8.34088 23.6231 8.3165C23.6605 8.2993 23.6576 8.26345 23.6361 8.12006C23.6159 7.98958 23.5886 7.84189 23.7367 7.77594C23.9062 7.69994 24.0456 7.81178 24.1132 7.96234C24.185 8.1215 24.1879 8.28926 24.0126 8.37673L23.9163 8.16308C23.9465 8.15448 23.9594 8.1344 23.9623 8.11003C23.9666 8.08565 23.9608 8.05697 23.9508 8.03547C23.9364 8.00536 23.9062 7.95804 23.8646 7.97668C23.8143 8.00392 23.8502 8.11433 23.8689 8.23047C23.8875 8.34661 23.8847 8.47136 23.7496 8.53302C23.5584 8.61905 23.4176 8.47136 23.3429 8.3079C23.3055 8.22474 23.2279 7.97381 23.4622 7.86627L23.5642 8.09282L23.5628 8.09139Z" fill="white"/>'
            + '<path d="M24.3187 8.48828L24.4049 8.72057L23.843 8.92848L23.9666 9.26257L23.7726 9.33426L23.5627 8.76788L24.3187 8.48828Z" fill="white"/>'
            + '<path d="M24.6419 9.41627L24.7109 9.64856L24.0211 10.1576L23.9478 9.91096L24.0484 9.84643L23.9765 9.60124H23.8558L23.7854 9.36035L24.6419 9.41627ZM24.2007 9.74893L24.4192 9.60984V9.60698L24.1576 9.60267L24.2007 9.74893Z" fill="white"/>'
            + '<path d="M24.8229 10.04L24.8948 10.3842L24.4536 10.5935L24.455 10.5949L24.9422 10.6122L25.014 10.9577L24.2236 11.1197L24.1762 10.8903L24.6835 10.7856L24.6821 10.7842L24.1475 10.7512L24.1101 10.5706L24.5887 10.3297V10.3268L24.0814 10.4315L24.0339 10.2021L24.8229 10.04Z" fill="white"/>'
            + '<path d="M24.5743 11.7633C24.5542 11.7647 24.5369 11.7705 24.5226 11.7776C24.4751 11.8006 24.4708 11.8551 24.4751 11.9009C24.4794 11.9411 24.4981 12.0013 24.5585 11.9956C24.6002 11.9913 24.6073 11.9554 24.6347 11.8149C24.6591 11.6844 24.6806 11.5367 24.8416 11.5224C25.027 11.5052 25.1218 11.6557 25.1376 11.8206C25.1534 11.9941 25.1017 12.1547 24.9077 12.1791L24.8861 11.9454C24.9163 11.9468 24.9364 11.9311 24.9479 11.911C24.9609 11.8895 24.9637 11.8608 24.9609 11.8364C24.958 11.8034 24.9436 11.749 24.8991 11.7533C24.8416 11.7633 24.8402 11.878 24.82 11.9956C24.7985 12.1117 24.7568 12.2293 24.6102 12.2422C24.4004 12.2623 24.3156 12.0759 24.2984 11.8981C24.2897 11.8077 24.2984 11.5453 24.5542 11.5195L24.5772 11.7662L24.5743 11.7633Z" fill="white"/>'
            + '<path d="M25.154 12.3029L24.3486 12.3389L24.3597 12.5867L25.1651 12.5507L25.154 12.3029Z" fill="white"/>'
            + '<path d="M25.1766 12.7253L25.1723 12.9791L24.7368 13.2057V13.2085L25.168 13.2143L25.1651 13.4494L24.3589 13.4365L24.3632 13.1956L24.8073 12.9562V12.9533L24.3675 12.9461L24.3704 12.7124L25.1766 12.7253Z" fill="white"/>'
            + '<path d="M24.3905 14.1322C24.3244 14.072 24.3014 13.9831 24.3086 13.8956C24.3287 13.659 24.5242 13.5285 24.7527 13.5472C25.0588 13.5715 25.1637 13.7967 25.1493 13.9773C25.132 14.1809 25.0099 14.3014 24.8188 14.3215L24.8389 14.0849C24.8978 14.0806 24.9438 14.0347 24.9481 13.9759C24.9625 13.8067 24.7828 13.7967 24.7282 13.7924C24.6535 13.7866 24.5184 13.8053 24.5069 13.9558C24.5026 14.0132 24.527 14.0734 24.5845 14.0906L24.5931 13.9816L24.7656 13.996L24.7383 14.3243L24.2957 14.2885L24.3086 14.1322H24.3919H24.3905Z" fill="white"/>'
            + '<path d="M25.0343 14.799L24.9955 15.0385L24.1533 15.199L24.1936 14.9453L24.3128 14.9295L24.3531 14.6771L24.2453 14.6226L24.2855 14.3774L25.0343 14.7976V14.799ZM24.491 14.9094L24.7483 14.8779V14.875L24.5155 14.7588L24.491 14.9094Z" fill="white"/>'
            + '<path d="M24.9164 15.477L24.8201 15.8799C24.7698 16.0921 24.5959 16.1294 24.4838 16.1036C24.2941 16.0577 24.2352 15.91 24.2783 15.7308L24.3128 15.5888L24.0757 15.5329L24.1332 15.292L24.9178 15.4784L24.9164 15.477ZM24.4982 15.6318L24.4752 15.725C24.4608 15.7867 24.4493 15.8541 24.5284 15.8727C24.6002 15.8899 24.6175 15.8354 24.6318 15.7766L24.6577 15.6691L24.4982 15.6304V15.6318Z" fill="white"/>'
            + '<path d="M24.0067 16.8882C23.794 16.8194 23.7293 16.6731 23.8041 16.4394C23.8788 16.2057 24.0182 16.1225 24.2309 16.1914L24.7022 16.3419L24.6261 16.5785L24.2079 16.4452C24.1288 16.4208 24.0311 16.3892 23.9952 16.5039C23.9593 16.6158 24.057 16.6473 24.136 16.6717L24.5542 16.8051L24.4781 17.0416L24.0067 16.8911V16.8882Z" fill="white"/>'
            + '<path d="M24.4149 17.2078L24.2367 17.6451C24.1835 17.7756 24.0657 17.8588 23.9248 17.8014C23.8472 17.7699 23.7797 17.701 23.7825 17.6136C23.7337 17.6666 23.6489 17.6767 23.5512 17.648C23.5138 17.6365 23.4247 17.6007 23.3816 17.6078L23.475 17.3784C23.5167 17.3827 23.5584 17.3942 23.5972 17.4057C23.6704 17.4286 23.7481 17.4515 23.784 17.3612L23.8343 17.2393L23.5742 17.1332L23.6676 16.9038L24.4149 17.2064V17.2078ZM23.9952 17.3053L23.9464 17.4257C23.9291 17.4688 23.9119 17.5304 23.9794 17.5562C24.0268 17.5749 24.0642 17.5605 24.1001 17.4731L24.1433 17.3655L23.9952 17.3053Z" fill="white"/>'
            + '<path d="M23.9448 18.2917L23.8371 18.5082L22.9849 18.4107L23.0998 18.1813L23.2177 18.2028L23.3326 17.9748L23.2464 17.8917L23.3585 17.6694L23.9463 18.2946L23.9448 18.2917ZM23.3944 18.2344L23.6488 18.2803L23.462 18.0982L23.3944 18.2344Z" fill="white"/>'
            + '<path d="M18.895 14.8647L18.9022 14.8561C18.8734 14.8346 18.8447 14.8145 18.8174 14.793L18.8044 14.8116C18.8332 14.8331 18.8619 14.8532 18.8892 14.8747L18.8964 14.8661L18.9036 14.8575C18.8749 14.836 18.8461 14.8145 18.8188 14.7944L18.8059 14.813C18.8346 14.8346 18.8634 14.8546 18.8907 14.8761L18.9079 14.889V14.8604L18.9036 14.8575L18.8964 14.8661L18.895 14.8647Z" fill="#EC008C"/>'
            + '<path d="M20.6955 21.8877H5.3042V23.9998H20.6955V21.8877Z" fill="black"/>'
            + '<path d="M10.1245 23.1136H9.52953V23.6055H9.13721V22.4297H9.52953V22.8498H10.1245V22.4297H10.5183V23.6055H10.1245V23.1136Z" fill="white"/>'
            + '<path d="M11.3993 22.4297H11.8793L12.3852 23.6055H11.9641L11.8937 23.4148H11.3792L11.3088 23.6055H10.8877L11.3993 22.4297ZM11.6393 22.7265H11.6364L11.4726 23.171H11.8031L11.6393 22.7265Z" fill="white"/>'
            + '<path d="M12.6565 22.4297H13.0488V23.333H13.7659V23.6055H12.6565V22.4297Z" fill="white"/>'
            + '<path d="M14.6195 22.4297H15.0995L15.6068 23.6055H15.1858L15.1153 23.4148H14.6009L14.5304 23.6055H14.1094L14.621 22.4297H14.6195ZM14.8581 22.7265H14.8552L14.6914 23.171H15.0219L14.8581 22.7265Z" fill="white"/>'
            + '<path d="M15.877 22.4297H16.2693V23.333H16.9864V23.6055H15.877V22.4297Z" fill="white"/>'
            + '<path d="M9.57091 1.00532C9.53786 0.90782 9.47319 0.80028 9.46888 0.735757C9.46457 0.671233 9.39415 0.605275 9.33379 0.735757C9.27343 0.866238 9.30649 1.02826 9.35679 1.14011C9.40852 1.25195 9.57091 1.61041 9.62265 1.74089C9.67439 1.87138 9.71319 2.05204 9.706 2.11513C9.69738 2.17822 9.81953 2.2198 9.84684 2.11513C9.87414 2.01046 9.89857 1.76384 9.84684 1.63192C9.7951 1.50001 9.57235 1.00676 9.57235 1.00676L9.57091 1.00532Z" fill="white"/>'
            + '<path d="M8.42835 1.31763C8.42835 1.31763 8.32632 1.31763 8.32057 1.26171C8.31626 1.20579 8.32345 1.03373 8.34788 1.01509C8.37231 0.996447 8.54045 1.04233 8.58212 1.06671C8.6238 1.08965 8.62811 1.14127 8.6238 1.20149C8.61949 1.26171 8.73158 1.45242 8.74452 1.46245C8.75889 1.47106 8.84655 1.45815 8.89828 1.46245C8.95002 1.46675 8.92703 1.53271 8.92703 1.60154C8.92703 1.67036 8.91266 1.74636 8.84368 1.74636C8.77469 1.74636 8.69853 1.74206 8.62667 1.80228C8.55482 1.8625 8.4571 1.94136 8.58212 1.93276C8.70859 1.92272 8.81493 1.87684 8.85661 1.8496C8.89829 1.82235 9.08511 1.7607 9.13684 1.73775C9.18858 1.71481 9.1972 1.74206 9.1972 1.82092C9.1972 1.89978 9.17421 1.99298 9.08942 2.06754C9.00607 2.1421 8.8408 2.29553 8.78332 2.43748C8.72583 2.57943 8.65973 2.61241 8.57637 2.67263C8.49302 2.73285 8.36656 2.79881 8.28752 2.79881C8.20848 2.79881 8.10501 2.73572 8.10501 2.73572C8.10501 2.73572 8.11363 2.86764 7.99004 2.94363C7.86645 3.01963 7.77591 3.07411 7.72849 3.08272C7.68106 3.09132 7.56466 3.05547 7.56466 3.05547C7.56466 3.05547 7.56466 3.13434 7.48131 3.18596C7.39795 3.23757 7.36921 3.26052 7.34622 3.23184C7.32322 3.2046 7.2643 3.10996 7.25568 3.18452C7.2485 3.25908 7.27293 3.34225 7.25568 3.4039C7.23844 3.46412 7.2758 3.72509 7.14502 3.83119C7.01425 3.93873 6.72539 4.16672 6.58599 4.19396C6.44659 4.22264 6.28276 4.17962 6.20516 4.05918C6.12756 3.93873 6.08301 3.81255 6.08301 3.65053C6.08301 3.4885 6.12037 3.3996 6.16636 3.3996C6.21235 3.3996 6.23678 3.42254 6.24109 3.55302C6.2454 3.68351 6.3345 3.84123 6.48827 3.84123C6.64204 3.84123 6.78144 3.75233 6.85617 3.69211C6.9309 3.63189 7.07748 3.50857 7.02 3.43688C6.96108 3.36375 6.86623 3.26912 6.83317 3.23757C6.80012 3.2046 6.80012 3.06551 6.81449 2.99095C6.82886 2.91639 6.87916 2.86477 6.91221 2.92643C6.94527 2.98808 6.99557 3.00529 7.0473 3.02393C7.09904 3.04257 7.1364 3.00099 7.1364 2.94507C7.1364 2.88915 7.15077 2.78161 7.19245 2.7687C7.23412 2.75436 7.26287 2.78734 7.28586 2.84756C7.30885 2.90779 7.40226 2.89345 7.41664 2.82462C7.43101 2.75436 7.39077 2.63248 7.47268 2.63392C7.5546 2.63535 7.57472 2.68554 7.57472 2.73572C7.57472 2.78591 7.5934 2.80025 7.72417 2.71708C7.85495 2.63392 7.95699 2.63822 7.94836 2.56366C7.9383 2.4891 7.60346 1.88831 7.55172 1.79081C7.49999 1.6933 7.48131 1.60871 7.49568 1.51694C7.51005 1.42374 7.57472 1.43378 7.60346 1.494C7.63076 1.55422 7.84202 1.90408 7.87363 1.98294C7.90669 2.06181 8.06046 2.33137 8.09351 2.37869C8.12656 2.42457 8.14524 2.49914 8.25159 2.46185C8.35937 2.42457 8.47578 2.35431 8.53614 2.31273C8.59649 2.27115 8.68559 2.16935 8.60655 2.18225C8.52751 2.19516 8.42979 2.21093 8.39243 2.25681C8.35506 2.3027 8.23434 2.26972 8.23434 2.12203C8.23434 1.97434 8.30476 1.80515 8.36943 1.71768C8.4341 1.62878 8.51889 1.56856 8.51889 1.53128C8.51889 1.494 8.42979 1.32193 8.42979 1.32193L8.42835 1.31763Z" fill="white"/>'
            + '<path d="M4.91349 4.02914C4.80427 3.93307 4.62463 3.78395 4.57577 3.72086C4.52691 3.65777 4.50679 3.58895 4.46799 3.58321C4.42919 3.57891 4.35015 3.57891 4.36452 3.72086C4.37889 3.86282 4.48236 3.94168 4.59014 4.02914C4.69792 4.11661 5.05145 4.46504 5.12905 4.54247C5.20809 4.62133 5.26702 4.69446 5.27133 4.75755C5.27564 4.82064 5.42366 4.84071 5.41791 4.70306C5.4136 4.56541 5.06582 4.16106 4.91205 4.02771L4.91349 4.02914Z" fill="white"/>'
            + '<path d="M5.02678 4.85641C4.98223 4.79762 4.70343 4.51801 4.66894 4.45923C4.63445 4.40044 4.56547 4.204 4.50224 4.12657C4.43901 4.04771 4.3456 3.91149 4.29673 3.88712C4.24787 3.86274 4.19326 3.78961 4.13003 3.81399C4.0668 3.83836 4.06105 3.89715 4.09123 3.96598C4.12141 4.0348 4.12572 4.09789 4.14584 4.15668C4.16596 4.21547 4.18033 4.18106 4.26368 4.23554C4.34703 4.29003 4.5123 4.48217 4.4505 4.4707C4.43613 4.46783 4.16596 4.41191 3.97482 4.38323C3.78369 4.35455 3.6328 4.31441 3.59256 4.38323C3.55232 4.45206 3.72333 4.50654 3.72333 4.58971C3.72333 4.67287 3.79806 4.74026 3.92022 4.74026C4.04237 4.74026 4.06249 4.72019 4.13578 4.68148C4.20907 4.64276 4.22057 4.66714 4.36428 4.70585C4.50799 4.74457 4.62583 4.81913 4.61146 4.91663C4.59709 5.01413 4.56691 5.05428 4.51805 5.10303C4.46919 5.15178 4.50368 5.24498 4.57697 5.30807C4.65026 5.37116 4.69481 5.38694 4.7681 5.35682C4.8414 5.32815 4.99373 5.13171 5.02822 5.06288C5.06271 4.99406 5.07277 4.91663 5.02822 4.85784L5.02678 4.85641ZM4.82128 4.88078C4.80116 4.9195 4.72355 4.92953 4.72786 4.90516C4.73218 4.88078 4.7523 4.76751 4.7523 4.76751C4.7523 4.76751 4.83996 4.84063 4.82128 4.87935V4.88078Z" fill="white"/>'
            + '<path d="M2.35411 6.06528C2.35411 6.06528 2.85422 6.46676 2.96775 6.55423C3.08128 6.64169 3.24224 6.75067 3.33134 6.75927C3.42044 6.76931 3.45205 6.79368 3.5857 6.70478C3.71935 6.61732 3.76821 6.54276 3.76821 6.49974C3.76821 6.45673 3.73372 6.35779 3.86594 6.33341C3.99815 6.30904 3.98522 6.17999 3.98809 6.11833C3.99096 6.05668 3.9924 6.03517 4.07144 6.02083C4.15048 6.00649 4.19934 5.8545 4.15048 5.74123C4.10162 5.62795 3.98809 5.51611 3.89468 5.44729C3.80127 5.37846 3.69348 5.39853 3.68917 5.47596C3.68486 5.55483 3.75815 5.61792 3.81708 5.6724C3.876 5.72689 3.89037 5.79428 3.83719 5.78568C3.78258 5.77564 3.74378 5.69821 3.69923 5.67814C3.65468 5.65806 3.59145 5.69821 3.62594 5.77564C3.66043 5.8545 3.71935 5.89322 3.71935 5.96634C3.71935 6.03947 3.63025 6.05955 3.61157 6.05381C3.59145 6.04951 3.54834 5.97065 3.51385 5.95057C3.47936 5.9305 3.37589 5.95057 3.42044 6.05811C3.46499 6.16565 3.52822 6.17569 3.50379 6.28323C3.47936 6.39077 3.41612 6.42948 3.37157 6.46963C3.32702 6.50834 3.23936 6.4897 3.15601 6.42518C3.07266 6.36209 2.51219 5.87744 2.45614 5.84733C2.4001 5.81866 2.3656 5.80288 2.35555 5.89608C2.34549 5.98929 2.35555 6.06241 2.35555 6.06241L2.35411 6.06528Z" fill="white"/>'
            + '<path d="M2.99944 6.58023C2.91609 6.5157 2.65598 6.48129 2.45335 6.47269C2.25071 6.46265 2.00497 6.47269 1.95611 6.52718C1.90725 6.58023 1.97048 6.63471 2.04952 6.71788C2.12856 6.80104 2.18173 6.80534 2.21191 6.84549C2.24209 6.88421 2.38293 6.85983 2.45478 6.80104C2.52664 6.74225 2.46197 6.70784 2.66891 6.71358C2.87442 6.71788 2.9822 6.71358 3.04687 6.83546C3.1101 6.95733 3.1101 7.10502 3.04687 7.21686C2.98364 7.33014 2.89022 7.45632 2.88448 7.50507C2.88016 7.55382 2.89885 7.56242 3.02675 7.53088C3.15465 7.49933 3.30123 7.2355 3.33572 7.18245C3.37022 7.12796 3.28974 6.95303 3.25956 6.83976C3.22938 6.72648 3.0325 6.60604 2.99944 6.58023Z" fill="white"/>'
            + '<path d="M2.06358 7.66992C2.06358 7.66992 2.01472 7.86492 2.06358 7.94952C2.11244 8.03269 2.21016 8.17464 2.2892 8.23343C2.36825 8.29222 2.46022 8.351 2.50477 8.23343C2.54932 8.11585 2.59243 8.0628 2.6183 8.05276C2.64273 8.04272 2.69447 8.03555 2.67722 8.14596C2.65998 8.25637 2.64273 8.46858 2.58381 8.58616C2.52489 8.70373 2.43723 8.7912 2.31938 8.79694C2.20154 8.80124 2.10957 8.77686 2.04202 8.68509C1.97592 8.59189 1.86813 8.54744 1.85807 8.62631C1.84802 8.70517 1.9558 8.7826 2.06933 8.89014C2.18286 8.99768 2.26046 9.08658 2.41711 9.09088C2.57375 9.09518 2.65279 9.02779 2.73614 8.92025C2.81949 8.81271 2.91291 8.6177 2.92297 8.38255C2.93303 8.1474 2.93303 8.07427 2.87842 7.92228C2.82381 7.77029 2.7074 7.70146 2.6571 7.67279C2.60824 7.64411 2.56944 7.62404 2.48034 7.72154C2.39268 7.81904 2.35819 7.95096 2.31795 7.91224C2.27914 7.87353 2.24465 7.67279 2.25903 7.6183C2.2734 7.56381 2.38549 7.49642 2.39124 7.41756C2.39699 7.3387 2.39124 7.27991 2.32226 7.22686C2.25328 7.17237 2.19004 7.0806 2.12106 7.16377C2.05208 7.24693 1.91556 7.33009 1.89113 7.39318C1.8667 7.45627 1.88682 7.48639 1.93712 7.54948C1.98885 7.61257 2.06214 7.67135 2.06214 7.67135L2.06358 7.66992Z" fill="white"/>'
            + '<path d="M0.93564 9.87231C0.842228 9.86227 0.705704 9.81782 0.685585 9.87231C0.665465 9.92679 0.803427 10.0974 0.847977 10.1462C0.892527 10.1949 0.945699 10.1849 1.2015 10.205C1.45731 10.225 1.73179 10.2336 1.88413 10.3225C2.03646 10.41 2.18879 10.4502 2.21753 10.3856C2.24627 10.3225 2.11406 10.1318 1.90424 10.063C1.69299 9.99419 0.938514 9.87231 0.938514 9.87231H0.93564Z" fill="white"/>'
            + '<path d="M0.938498 10.8558C0.938498 10.8558 0.919816 10.9762 0.836464 10.9719C0.753112 10.9676 0.709999 10.8558 0.649641 10.8228C0.589283 10.7898 0.61084 10.721 0.684132 10.7023C0.757424 10.6837 0.780417 10.6134 0.832153 10.6005C0.883888 10.5862 0.921253 10.6565 0.921253 10.6794C0.921253 10.6794 1.62687 10.6794 1.74615 10.6837C1.86543 10.6866 1.99764 10.7439 2.04506 10.8285C2.09105 10.9117 2.07812 11.0465 2.07237 11.1497C2.06806 11.2515 2.03501 11.2945 2.0077 11.3132C1.9804 11.3318 1.90567 11.3691 1.97465 11.4207C2.04506 11.4723 2.06375 11.5655 2.02638 11.6028C1.98902 11.6401 1.88124 11.6731 1.93297 11.7046C1.98471 11.7376 2.035 11.7878 2.01632 11.858C1.99764 11.9283 1.93297 11.9555 1.90423 11.9699C1.87692 11.9842 1.90423 12.0301 1.95022 12.053C1.99764 12.076 1.99764 12.1506 1.99189 12.2065C1.98758 12.2624 1.97321 12.476 1.96315 12.5277C1.95453 12.5793 1.89273 12.5922 1.87405 12.6108C1.85537 12.6295 1.88842 12.6567 1.92579 12.6997C1.96315 12.7413 1.97752 12.813 1.97752 12.9076C1.97752 13.0023 1.95884 13.1973 1.94447 13.2675C1.9301 13.3378 1.87405 13.3937 1.83669 13.421C1.79932 13.4482 1.80938 13.4668 1.841 13.5371C1.87405 13.6074 1.92004 13.6532 1.9071 13.811C1.89273 13.9687 1.81082 14.102 1.75764 14.178C1.70447 14.254 1.62687 14.2526 1.57513 14.2669C1.5234 14.2813 0.927001 14.244 0.856584 14.244C0.786166 14.244 0.740179 14.2497 0.717185 14.2698C0.694191 14.2899 0.623774 14.2712 0.526051 14.2254C0.428328 14.1795 0.35791 14.049 0.35791 14.026C0.35791 14.0031 0.459944 13.9931 0.557667 13.9988C0.65539 14.0031 1.23454 14.0217 1.35095 14.026C1.46735 14.0303 1.5234 13.9802 1.55214 13.887C1.57944 13.7938 1.62687 13.6031 1.57513 13.6446C1.5234 13.6862 1.48172 13.7522 1.44867 13.7794C1.41562 13.8067 1.27191 13.7049 1.21586 13.6446C1.15981 13.5844 1.14975 13.3521 1.26616 13.2403C1.38256 13.1284 1.49466 13.1571 1.52196 13.203C1.5507 13.2489 1.5895 13.2489 1.61106 13.1801C1.63118 13.1098 1.62831 12.9578 1.63118 12.8689C1.63262 12.7786 1.63118 12.7055 1.56507 12.6639C1.5004 12.6223 1.45298 12.6366 1.41562 12.5836C1.37825 12.5291 1.36963 12.4646 1.4616 12.4603C1.55501 12.456 1.67573 12.4789 1.68579 12.3298C1.69441 12.1807 1.71597 12.0416 1.69441 12.0086C1.67429 11.9756 1.5737 11.9254 1.49897 11.8968C1.42424 11.8695 1.41562 11.7993 1.52771 11.7892C1.6398 11.7792 1.80507 11.7577 1.70591 11.6645C1.60675 11.5713 1.50328 11.5526 1.46448 11.524C1.42567 11.4967 1.49466 11.4537 1.56076 11.4537C1.62687 11.4537 1.73178 11.4652 1.73609 11.4308C1.7404 11.3978 1.76196 11.3548 1.67286 11.3232C1.58376 11.2902 1.53777 11.2673 1.53346 11.2343C1.52915 11.2013 1.5119 11.1598 1.63262 11.1555C1.75333 11.1511 1.81225 11.101 1.79932 11.0278C1.78639 10.9547 1.77202 10.9088 1.77202 10.9088L0.937061 10.8572L0.938498 10.8558Z" fill="white"/>'
            + '<path d="M0.506444 14.8513L0.431247 14.9263C0.395328 14.9622 0.395328 15.0203 0.431247 15.0561L0.506444 15.1311C0.542362 15.167 0.600597 15.167 0.636515 15.1311L0.711713 15.0561C0.747631 15.0203 0.747631 14.9622 0.711713 14.9263L0.636515 14.8513C0.600597 14.8155 0.542362 14.8155 0.506444 14.8513Z" fill="white"/>'
            + '<path d="M0.692479 13.1975L0.617282 13.2725C0.581364 13.3084 0.581363 13.3665 0.617282 13.4023L0.692479 13.4773C0.728397 13.5132 0.786632 13.5132 0.82255 13.4773L0.897748 13.4023C0.933666 13.3665 0.933666 13.3084 0.897748 13.2725L0.822551 13.1975C0.786632 13.1616 0.728397 13.1616 0.692479 13.1975Z" fill="white"/>'
            + '<path d="M0.946947 12.4983L0.87171 12.5733C0.835773 12.6091 0.835743 12.6673 0.871642 12.7031L0.946801 12.7782C0.9827 12.814 1.04094 12.8141 1.07687 12.7782L1.15211 12.7033C1.18805 12.6674 1.18808 12.6093 1.15218 12.5735L1.07702 12.4984C1.04112 12.4626 0.982884 12.4625 0.946947 12.4983Z" fill="white"/>'
            + '<path d="M2.87521 8.78899L2.96901 8.74212C3.01399 8.71965 3.06991 8.73821 3.09243 8.78309L3.13941 8.87668C3.16193 8.92155 3.14333 8.97735 3.09835 8.99982L3.00455 9.04669C2.95829 9.0698 2.90365 9.0506 2.88112 9.00573L2.83415 8.91213C2.81099 8.86598 2.83023 8.81146 2.87521 8.78899Z" fill="white"/>'
            + '<path d="M2.97963 8.47342L3.07335 8.42638C3.11957 8.40319 3.17424 8.4223 3.19684 8.46713L3.24398 8.56064C3.26658 8.60548 3.24807 8.66131 3.20314 8.68386L3.10942 8.73089C3.06448 8.75344 3.00852 8.73498 2.98592 8.69014L2.93879 8.59663C2.91619 8.5518 2.93469 8.49596 2.97963 8.47342Z" fill="white"/>'
            + '<path d="M9.02525 2.71251L9.0652 2.61572C9.08435 2.56931 9.13875 2.5467 9.18526 2.56581L9.28227 2.60566C9.32878 2.62477 9.35145 2.67905 9.3323 2.72545L9.29235 2.82224C9.2732 2.86865 9.2188 2.89126 9.17229 2.87216L9.07528 2.8323C9.02877 2.8132 9.0061 2.75891 9.02525 2.71251Z" fill="white"/>'
            + '<path d="M3.0342 17.5915L3.08267 17.4986C3.10591 17.4541 3.16213 17.4365 3.20674 17.4597L3.29977 17.508C3.34566 17.5319 3.36208 17.5873 3.33884 17.6318L3.29037 17.7246C3.26713 17.7691 3.21091 17.7868 3.1663 17.7636L3.07327 17.7153C3.02866 17.6921 3.01096 17.636 3.0342 17.5915Z" fill="white"/>'
            + '<path d="M3.1548 17.9196L3.20328 17.8268C3.22652 17.7823 3.28273 17.7646 3.32734 17.7878L3.42038 17.8361C3.46499 17.8593 3.48269 17.9154 3.45945 17.9599L3.41098 18.0528C3.38773 18.0973 3.33152 18.1149 3.28691 18.0917L3.19387 18.0434C3.14926 18.0202 3.13156 17.9641 3.1548 17.9196Z" fill="white"/>'
            + '<path d="M2.53202 15.3766C2.32508 15.2203 1.99598 15.2562 1.99598 15.2562C1.99598 15.2562 1.98017 15.0339 1.97299 14.9321C1.9658 14.8303 1.89538 14.6597 1.76605 14.5765C1.63671 14.4948 1.38665 14.5263 1.1869 14.5765C0.987138 14.6267 0.91672 14.8188 0.905224 14.8733C0.893727 14.9278 0.99145 15.0526 1.07336 15.0884C1.15528 15.1243 1.31192 15.1515 1.38953 15.1271C1.46713 15.1042 1.58066 15.0253 1.58497 14.9278C1.58928 14.8303 1.49443 14.7371 1.49443 14.7371C1.45132 14.6396 1.58785 14.7299 1.6324 14.8231C1.67695 14.9178 1.67838 15.0139 1.68269 15.1071C1.68701 15.2003 1.70569 15.2978 1.6324 15.3135C1.5591 15.3293 1.43264 15.4311 1.37659 15.5587C1.32198 15.6878 1.49012 15.824 1.6324 15.8441C1.77467 15.8641 1.98305 15.8555 2.03766 15.715C2.09227 15.5745 2.03047 15.4297 2.03047 15.4297C2.03047 15.4297 2.28053 15.4497 2.39837 15.5774C2.51621 15.7064 2.57801 15.8928 2.5737 16.0376C2.56938 16.1824 2.63262 16.2169 2.66423 16.1896C2.69585 16.1624 2.80076 16.0104 2.79645 15.8656C2.79213 15.7207 2.73753 15.53 2.53058 15.3738L2.53202 15.3766ZM1.25013 14.9522C1.21133 14.9522 1.17971 14.9207 1.17971 14.8819C1.17971 14.8432 1.21133 14.8117 1.25013 14.8117C1.28893 14.8117 1.32055 14.8432 1.32055 14.8819C1.32055 14.9207 1.28893 14.9522 1.25013 14.9522ZM1.72581 15.6562C1.68701 15.6562 1.65539 15.6247 1.65539 15.586C1.65539 15.5472 1.68701 15.5157 1.72581 15.5157C1.76461 15.5157 1.79623 15.5472 1.79623 15.586C1.79623 15.6247 1.76461 15.6562 1.72581 15.6562Z" fill="white"/>'
            + '<path d="M1.92274 16.3488C1.92274 16.3488 1.80202 16.4506 1.73161 16.4936C1.66119 16.5366 1.53616 16.5094 1.45424 16.4936C1.37233 16.4779 1.39964 16.4305 1.48155 16.3488C1.56346 16.2671 1.66406 16.1495 1.85232 16.1452C2.04058 16.1409 2.36393 16.2155 2.45447 16.3058C2.545 16.3947 2.63841 16.485 2.65853 16.6528C2.67865 16.8205 2.64273 16.9768 2.63123 17.0313C2.61973 17.0858 2.545 17.1059 2.48321 16.9453C2.41998 16.7847 2.31507 16.3287 1.92418 16.3488H1.92274Z" fill="white"/>'
            + '<path d="M2.16157 17.691C2.16157 17.691 1.98625 17.5777 1.94601 17.539C1.90721 17.5003 1.89571 17.496 1.94601 17.4687C1.99631 17.4415 1.99918 17.3483 1.91152 17.3124C1.82385 17.2766 1.70457 17.3081 1.63416 17.4028C1.5623 17.496 1.61691 17.5504 1.72326 17.6365C1.82817 17.7225 2.03654 17.8788 2.16157 17.9089C2.2866 17.9405 2.50216 17.9247 2.49067 17.7483C2.47917 17.5734 2.42744 17.4114 2.49067 17.4286C2.55534 17.4458 2.68899 17.6006 2.75222 17.744C2.81545 17.8888 2.87725 18.0595 2.82264 18.1971C2.76803 18.3333 2.67031 18.3763 2.51797 18.3878C2.36564 18.3993 2.30241 18.3806 2.30241 18.4624C2.30241 18.5441 2.46624 18.5599 2.66456 18.5556C2.86144 18.5513 3.1 18.3534 3.15173 18.2315C3.20203 18.1111 3.08994 17.8759 2.99078 17.6809C2.89306 17.4859 2.74935 17.3196 2.59558 17.2479C2.44181 17.1748 2.17738 17.1733 2.14576 17.3182C2.11415 17.463 2.22768 17.701 2.16157 17.6881V17.691Z" fill="white"/>'
            + '<path d="M11.1344 13.0124C11.1344 13.0124 11.2379 17.9306 11.2221 18.1657C11.2077 18.4009 11.031 19.1866 10.3095 19.905C9.58811 20.6248 8.82357 21.1754 7.83772 21.4908C6.85187 21.8063 5.57142 21.2858 5.54267 19.8978C5.51393 18.5098 6.4035 17.5563 6.54289 17.4086C6.68229 17.2624 6.77283 17.1935 6.83175 17.1491C6.89067 17.1046 6.94528 17.1147 6.97402 17.1491C7.00277 17.1835 6.99414 17.2767 6.93522 17.3197C6.8763 17.3642 6.54289 17.7255 6.5084 18.4754C6.47391 19.2239 6.64637 20.0756 6.86624 20.2864C7.08756 20.4972 7.69976 20.8442 8.66118 20.4527C9.6226 20.0613 10.104 19.7085 10.2506 19.0475L10.1989 14.7947C10.1989 14.7947 10.0882 14.5638 9.93014 14.538C9.77206 14.5122 9.8008 14.4463 9.87122 14.376C9.94163 14.3057 10.5366 13.5759 10.6731 13.3408C10.8096 13.1056 11.0453 12.7729 11.1474 12.7729C11.2494 12.7729 11.2135 12.8676 11.133 13.0095L11.1344 13.0124Z" fill="white"/>'
            + '<path d="M12.5659 12.995C12.5372 12.8674 12.4826 12.6423 12.369 13.0194C12.2555 13.3965 11.9724 14.2525 11.8143 14.6053C11.6577 14.958 11.4608 15.2032 11.4076 15.2663C11.3544 15.3294 11.3199 15.4326 11.4708 15.4283C11.6232 15.424 11.7899 15.4484 11.9911 15.6735C12.1923 15.8986 12.9726 16.7647 13.3175 17.8071C13.6638 18.8495 13.9067 19.5836 13.9656 20.1557C13.9656 20.1557 13.9628 20.3952 14.0662 20.3952C14.1697 20.3952 14.2962 19.6223 14.2962 19.0789C14.2962 18.5355 14.2272 17.5863 13.8406 16.5338C13.4526 15.4813 13.1235 14.7128 12.9985 14.3658C12.8734 14.0188 12.599 13.3764 12.5645 12.995H12.5659Z" fill="white"/>'
            + '<path d="M15.242 20.5231C15.242 20.5231 14.0894 21.673 13.1898 22.1161C13.1898 22.1161 13.128 22.1519 12.9053 22.0731C12.6825 21.9942 11.8159 21.5497 11.4409 21.4608C11.0658 21.3719 10.9292 21.3977 10.8272 21.3232C10.7266 21.2486 10.7913 21.2084 11.0198 21.2127C11.2483 21.2185 12.3448 21.2414 13.2042 20.8987C14.0621 20.556 14.647 20.2678 14.8382 19.3917C14.8382 19.3917 14.8065 14.7747 14.8065 14.7303C14.8065 14.6858 14.6916 14.518 14.6183 14.4679C14.545 14.4191 14.4415 14.3947 14.5694 14.2872C14.6973 14.1796 15.2908 13.3767 15.3598 13.2448C15.4288 13.1129 15.6343 12.872 15.7378 12.8117C15.8413 12.7501 15.9002 12.8089 15.8757 13.0197C15.8513 13.2304 15.8513 14.3904 15.8556 14.6155C15.8599 14.8407 15.8815 19.7301 15.8815 19.7301C15.8815 19.7301 16.3026 20.1761 17.1605 20.1416C18.0185 20.1072 18.1018 19.7746 18.2929 19.7402C18.2929 19.7402 17.7971 19.3631 17.1691 19.3731C16.5411 19.3831 16.2523 19.6269 16.1732 19.6957C16.0942 19.7645 15.9821 19.7 16.0511 19.5495C16.1201 19.3975 16.4635 18.4827 16.5325 18.3508C16.6015 18.2188 16.7682 18.1056 17.2726 18.1156C17.7785 18.1256 18.224 18.3895 18.6264 18.6633C19.0287 18.9372 19.6165 19.2311 20.1957 19.3932C20.7748 19.5552 20.7461 19.5781 20.897 19.5781C21.0479 19.5781 21.1844 19.624 20.9631 19.7731C20.7403 19.9237 20.4773 20.0757 20.3207 20.2879C20.164 20.5001 20.085 20.6005 19.789 20.5904C19.4915 20.579 18.9713 20.5403 18.405 20.7912C17.8388 21.0421 17.4019 21.1826 16.8645 21.2041C16.327 21.2271 15.6286 21.0163 15.2434 20.5231H15.242Z" fill="white"/>'
            + '<path d="M13.7716 1.89284C13.8162 1.84839 13.8852 1.781 13.8061 1.69067C13.7372 1.61181 13.6581 1.60177 13.6581 1.55732C13.6581 1.60177 13.5791 1.61181 13.5101 1.69067C13.4311 1.781 13.5 1.84839 13.5489 1.89284L13.5015 3.38119H13.2227L13.1695 1.18595C13.2327 1.12286 13.3319 1.02536 13.2198 0.896308C13.1206 0.783033 13.0071 0.770128 13.0071 0.705604C13.0071 0.768694 12.8936 0.783033 12.7944 0.896308C12.6823 1.02536 12.78 1.12286 12.8447 1.18595H12.8505L12.7815 3.38119H12.4926L12.4567 1.89284C12.5013 1.84839 12.5702 1.781 12.4912 1.69067C12.4222 1.61181 12.3432 1.60177 12.3432 1.55732C12.3432 1.60177 12.2641 1.61181 12.1952 1.69067C12.1161 1.781 12.1851 1.84839 12.234 1.89284L12.1865 3.38119H11.9221L11.8689 1.18595C11.9322 1.12286 12.0313 1.02536 11.9192 0.896308C11.8201 0.783033 11.7065 0.770128 11.7065 0.705604C11.7065 0.768694 11.593 0.783033 11.4938 0.896308C11.3818 1.02536 11.4795 1.12286 11.5427 1.18595H11.5485L11.4651 3.83286H14.5347L14.4715 1.18595C14.5347 1.12286 14.6339 1.02536 14.5204 0.896308C14.4212 0.783033 14.3077 0.770128 14.3077 0.705604C14.3077 0.768694 14.1942 0.783033 14.095 0.896308C13.9829 1.02536 14.0806 1.12286 14.1439 1.18595H14.1496L14.0806 3.38119H13.8061L13.7702 1.89284H13.7716ZM10.998 0.255371H15.0018V4.25011H10.998V0.255371Z" fill="#308240"/>'
            + '<path d="M13.7719 1.8928C13.8164 1.84836 13.8854 1.78096 13.8064 1.69063C13.7374 1.61177 13.6583 1.60173 13.6583 1.55728C13.6583 1.60173 13.5793 1.61177 13.5103 1.69063C13.4313 1.78096 13.5003 1.84836 13.5491 1.8928L13.5017 3.38115H13.2229L13.1697 1.18591C13.233 1.12282 13.3321 1.02532 13.22 0.89627C13.1209 0.782995 13.0073 0.77009 13.0073 0.705566C13.0073 0.768656 12.8938 0.782995 12.7947 0.89627C12.6826 1.02532 12.7803 1.12282 12.8449 1.18591H12.8507L12.7817 3.38115H12.4929L12.4569 1.8928C12.5015 1.84836 12.5705 1.78096 12.4914 1.69063C12.4224 1.61177 12.3434 1.60173 12.3434 1.55728C12.3434 1.60173 12.2644 1.61177 12.1954 1.69063C12.1163 1.78096 12.1853 1.84836 12.2342 1.8928L12.1868 3.38115H11.9223L11.8692 1.18591C11.9324 1.12282 12.0316 1.02532 11.9195 0.89627C11.8203 0.782995 11.7068 0.77009 11.7068 0.705566C11.7068 0.768656 11.5932 0.782995 11.4941 0.89627C11.382 1.02532 11.4797 1.12282 11.5429 1.18591H11.5487L11.4653 3.83282H14.535L14.4717 1.18591C14.535 1.12282 14.6341 1.02532 14.5206 0.89627C14.4214 0.782995 14.3079 0.77009 14.3079 0.705566C14.3079 0.768656 14.1944 0.782995 14.0952 0.89627C13.9831 1.02532 14.0809 1.12282 14.1441 1.18591H14.1498L14.0809 3.38115H13.8064L13.7704 1.8928H13.7719Z" fill="white"/>'
            + '</g><defs><clipPath id="clip0_2162_5811"><rect width="26" height="24" fill="white"/></clipPath></defs></svg>';

            var unittxt = document.createElement("p");
            unittxt.className = "unittxt";
            //Tenant Unit Number
            unittxt.innerText = tenantArray[tenantIndex].storeUnitNum;

            var wayfindingbtn = document.createElement("div");
            wayfindingbtn.className = "wayfindingbtn";

            var btnholder = document.createElement("div");
            btnholder.className = "btnholder";
            btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenantIndex].storeUnitNum+"\",\""+tenantArray[tenantIndex].id+"\")");

            $(btnholder).html('<svg width="17" height="34" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.05146 33.906C4.04036 34.2388 5.10416 33.6595 5.41664 32.6128L7.94979 24.2368L5.65422 22.1361C5.35309 21.8654 5.09886 21.5818 4.89079 21.2989L1.84239 31.3872C1.52461 32.4339 2.06861 33.5676 3.05146 33.906ZM9.90489 18.5883C9.81258 19.3031 9.93969 19.6229 10.4542 20.0975L12.8602 22.315C13.3982 22.8138 13.7735 23.5898 13.8264 24.3472L14.3523 31.8489C14.4272 32.9456 13.6464 33.9125 12.6174 33.9923C11.5876 34.0728 10.6797 33.2477 10.6048 32.1446L10.1069 25.074L6.18007 21.4835C4.9831 20.3868 4.67667 19.2845 4.90214 17.5594L5.59596 12.3307L4.58436 12.8972L3.05751 18.2C2.80253 19.075 1.92334 19.5682 1.10241 19.3031C0.280729 19.0323 -0.181564 18.0952 0.0673631 17.2209L1.64037 11.7763C1.84844 11.0495 2.36899 10.3783 2.99925 10.027L6.05296 8.31475C6.78158 7.9022 7.545 7.39698 8.37198 7.32929C9.93364 7.19956 11.2063 8.75229 10.9861 10.3969L9.90489 18.5883ZM9.82923 0C11.4892 0 12.8375 1.43508 12.8375 3.20294C12.8375 4.97 11.4892 6.40588 9.82923 6.40588C8.16392 6.40588 6.82243 4.97 6.82243 3.20294C6.82243 1.43508 8.16392 0 9.82923 0ZM11.605 11.9061L16.3883 15.8108C17.0708 16.3709 17.204 17.4184 16.6774 18.1452C16.1568 18.872 15.1732 19.0073 14.4915 18.453L11.1079 15.6932L11.605 11.9061Z" fill="white"/></svg>'
            );

            wayfindingbtn.appendChild(btnholder);
            if(tenantArray[tenantIndex].isHalal) {
                shopunitholder.appendChild(halalicon);
            }
            else {
            }
            shopunitholder.appendChild(unittxt);
            shopdetail.appendChild(shopunitholder);
            shopdetail.appendChild(wayfindingbtn);
            shopnameholder.appendChild(nametxt);
            dcardright.appendChild(shopnameholder);
            dcardright.appendChild(shopdetail);
            dcardleft.appendChild(createImg(newobj));
            dcard.appendChild(dcardleft);
            dcard.appendChild(dcardright);
            dcol.appendChild(dcard);
            drow.appendChild(dcol);

            tenantIndex++;

        }

        slide.appendChild(drow);

        //Fill in empty space
        var blankRow = numRow-Math.floor(numLeftTenant/2)-(numLeftTenant%2);

        if(blankRow!=0)
        {
            for(var num=0;num<blankRow;num++)
            {
                var drow = document.createElement("div");
                drow.className = "drow";

                var dcol = document.createElement("div");
                dcol.className = "dcol";

                drow.appendChild(dcol);

                slide.appendChild(drow);
            }
        }

        $('#swiperDining .swiper-wrapper').append(slide);

    }

    SwiperDining.update();
    SwiperDining.slideTo(0,1,false);

}

// Screensaver Page
function initialScreenSaverRefresh() {

    for(var i=0; i< sequenceArray.length; i++) {

        if(sequenceArray[i].startTime != '0:00' && sequenceArray[i].endTime != '0:00') {
            refreshScreenSaverTime.push(sequenceArray[i].startTime); 
            refreshScreenSaverTime.push(sequenceArray[i].endTime); 
        }
    }
}

function onclickScreenSaver() {
    console.log('touch screen');

    SwiperScreenSaver.autoplay.pause();

     //Record to Json file
     var fName = "statads_" + ('0' + (new Date().getDate())).slice(-2) + ('0' + (new Date().getMonth() + 1)).slice(-2) + (new Date().getFullYear()) + "_" + startProgramTime;

    screenOut = true;

    // clearTimeout(screensavertimeout);
    // clearTimeout(screensaverautoplaytimeout);

       // stop video
    // if(SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].tagName == "VIDEO") {
    //     SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].pause();
    //     pauseonVideoTimeleft = Number(SwiperScreenSaver.autoplay.timeLeft);
    //     SwiperScreenSaver.autoplay.delay = 0;
    // }

    onclickNavBtn('wgHome');
    $('.navmenu').show();

}

function download(content, fileName, contentType) {

    var a = document.createElement('a');
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();

}

//FloorGuide
function levelGoingup(currentlevel,targetlevel)
{
    var currentIndex = getLevelIndex(currentlevel);
    var targetIndex = getLevelIndex(targetlevel);

    if(currentIndex>targetIndex)
    {
        return false; //Going down
    }
    else
    {
        return true; //Going up
        
    }
}

function getLevelIndex(level)
{
    switch(level)
    {
        case 'B2': { return 1; }
        case 'B1': { return 2; }
        case 'L1': { return 3; }
        case 'L2': { return 4; }
        case 'L3': { return 5; }
        case 'L4': { return 6; }
        case 'L5': { return 7; }
        default : { return 0; }

    }
}

//Unity call JS
function UnityLoadingComplete()
{
    console.log("3D ready");
}

function onSwitchFloorComplete()
{
    $('#wgFloorGuide .bottomlayout .updownicon').hide();
    $('#wgFloorGuide .bottomlayout .lvlbtngroup').fadeIn('fast');
    console.log("SF completed");
}

function changeLevelDisplay(level)
{
    $('#wgFloorGuide #floorleveltxt').text(level);
}

function onclickLevelBtn(id)
{
    if(currentLevel == id)
    {
        return;
    }

    if(levelGoingup(currentLevel,id))
    {
        $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/up.gif');
    }
    else{
        $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/down.gif');
    }

    $('#wgFloorGuide .bottomlayout .lvlbtngroup').hide();
    $('#wgFloorGuide .bottomlayout .updownicon').fadeIn('fast');

    currentLevel = id;

    myGameInstance.SendMessage('MainCamera','SwitchToFloor',id.toString());
}

function unlockSwitchFloor() {
    // $('.webgl-wrapper .btnToggle').css({"display":""});
    // $('.webgl-wrapper .lvlbutton').css({"display":""});
}

function onclickIcon(value) {

    resetIconbtn();
    selectIconbtn(value);

    value = value + '|' + currentLevel;

    myGameInstance.SendMessage('WayfindingObject','IconOnClick', value.toString());


    // if(currentLevel == newcurrentLevel) {
    //     myGameInstance.SendMessage('WayfindingObject','IconOnClick', value.toString());
    // }
    // else {

    //     if(levelGoingup(currentLevel,newcurrentLevel))
    //     {
    //         $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/up.gif');
            
    //     }
    //     else{
    //         $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/down.gif');
            
    //     }

    //     $('#wgFloorGuide .bottomlayout .lvlbtngroup').hide();
    //     $('#wgFloorGuide .bottomlayout .updownicon').fadeIn('fast');
    // }

    selectFloorlvlbtn(newcurrentLevel);

    currentLevel = newcurrentLevel;
    
}

function selectIconbtn(icon) {
    //console.log(icon);
    $('.amenities #' + icon).css('background', '#0077C1');
    // $('.amenities #' + icon + ' svg circle').attr('fill', '#0077C1');
    $('.amenities #' + icon + ' svg path').attr('fill', '#FFFFFF');
}

function resetIconbtn() {
    $('.amenities .iconholder').css('background', '#ffffff');
    $('.amenities .iconholder svg path').attr('fill', '#0077C1');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn svg path').attr('fill', '#0077C1');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn svg circle').attr('stroke', '#A3CEE9');
    $('.amenities .iconholder svg rect').attr('fill', '#0077C1');

}

function selectFloorlvlbtn(desfloor) {
    
    switch(desfloor)
    {
        case 'L1': {
            $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
            $('#wgFloorGuide .lvlbtngroup #L1').css("background-color","#006EB8");
            $('#wgFloorGuide .lvlbtngroup #L1 .lvltxt').css("color","white");
            break;
        }

        case 'L2' : {
            $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
            $('#wgFloorGuide .lvlbtngroup #L2').css("background-color","#006EB8");
            $('#wgFloorGuide .lvlbtngroup #L2 .lvltxt').css("color","white");
            break;
        }

        case 'L3': {
            $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
            $('#wgFloorGuide .lvlbtngroup #L3').css("background-color","#006EB8");
            $('#wgFloorGuide .lvlbtngroup #L3 .lvltxt').css("color","white");
            break;
        }
        case 'L4': {
            $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
            $('#wgFloorGuide .lvlbtngroup #L4').css("background-color","#006EB8");
            $('#wgFloorGuide .lvlbtngroup #L4 .lvltxt').css("color","white");
            break;
        }
        case 'L5': {
            $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
            $('#wgFloorGuide .lvlbtngroup #L5').css("background-color","#006EB8");
            $('#wgFloorGuide .lvlbtngroup #L5 .lvltxt').css("color","white");
            break;
        }
        case 'B1' : {
            $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
            $('#wgFloorGuide .lvlbtngroup #B1').css("background-color","#006EB8");
            $('#wgFloorGuide .lvlbtngroup #B1 .lvltxt').css("color","white");
            break;
        }
        case 'B2' : {
            $('#wgFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#wgFloorGuide .lvlbtn .lvltxt').css({"color":"#222222"});
            $('#wgFloorGuide .lvlbtngroup #B2').css("background-color","#006EB8");
            $('#wgFloorGuide .lvlbtngroup #B2 .lvltxt').css("color","white");
            break;
        }
    }
    
}

function updownAnimation(floorvalue) {

    currentfloor = floorvalue.split('|')[0];
    desfloor = floorvalue.split('|')[1];

    if(currentfloor == desfloor) {
        return;
    }

    if(levelGoingup(currentfloor,desfloor))
    {
        $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/up.gif');
    }
    else{
        $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/down.gif');
    }
    
    currentfloor = desfloor;
    currentLevel = currentfloor;

    $('#wgFloorGuide .bottomlayout .lvlbtngroup').hide();
    $('#wgFloorGuide .bottomlayout .updownicon').fadeIn('fast');
}

function hideIconsbtn() {
    // disable icons
    $('.wgModal').hide();
    $('#wgDirectorymodal .modalbox .btnholder').css('pointer-events', 'none');
    $('#wgFloorGuide .webgl-wrapper .webgl-content #unityContainer #unity-canvas').css('pointer-events', 'none');
    $('.middlelayout').css('pointer-events','none');
    $('.bottomlayout').css('pointer-events', 'none');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn').css('pointer-events', 'none');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn svg path').attr('fill', '#AAAAAA');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn svg circle').attr('stroke', '#AAAAAA');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btntext').css('color', '#AAAAAA');
    $('.amenities .iconholder svg path').attr('fill', '#AAAAAA');
    $('.amenities .iconholder').css('border', '2px solid #AAAAAA');
    $('.amenities .amenitiestxt').css('color', '#AAAAAA');
}

function showIconsbtn() {
    $('#wgDirectorymodal .modalbox .btnholder').css('pointer-events', 'visible');
    $('#wgFloorGuide .webgl-wrapper .webgl-content #unityContainer #unity-canvas').css('pointer-events', 'visible');
    $('.middlelayout').css('pointer-events','visible');
    $('.bottomlayout').css('pointer-events','visible');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn').css('pointer-events', 'visible');
    resetIconbtn();
    $('.amenities .iconholder svg path').attr('fill', '#006EB8');
    $('.amenities .iconholder').css('border', '2px solid #BBE3FA');
    $('.amenities .amenitiestxt').css('color', '#000000');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btntext').css('color', '#000000');
}

function updateCurrentlevel(currentlvl){
    newcurrentLevel = currentlvl;
    currentLevel = newcurrentLevel;
}

function onclickResetBtn()
{
    hideWayfindingResult();

    if(currentLevel == kioskInfo[0].kioskFloor) {
        $('.lvlbtngroup').css('display', 'flex');
        myGameInstance.SendMessage('MainCamera','Restore');
        $('#wgFloorGuide .bottomlayout .updownicon').css('display', 'none');
        return;
    }
    else {
        myGameInstance.SendMessage('MainCamera','Restore');
    }
    
    // if(levelGoingup(currentLevel,kioskInfo[0].kioskFloor))
    // {
    //     $('#wgFloorGuide .bottomlayout .lvlbtngroup').hide();
    //     $('#wgFloorGuide .bottomlayout .updownicon').css('display', '');
    //     $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/up.gif');
        
    // }
    // else{
    //     $('#wgFloorGuide .bottomlayout .lvlbtngroup').hide();
    //     $('#wgFloorGuide .bottomlayout .updownicon').css('display', '');
    //     $('#wgFloorGuide .bottomlayout .updownicon img').attr('src','asset/down.gif');
        
    // }

    // $('#wgFloorGuide .bottomlayout .lvlbtngroup').hide();
    // $('#wgFloorGuide .bottomlayout .updownicon').fadeIn('fast');

    currentLevel = kioskInfo[0].kioskFloor;

}

function showWayfindingResult(wfsteps){

    if (wfsteps.length == 0 ) {
        wfsteps += kioskInfo[0].kioskFloor;
        wfsteps += ',' + finaldes;
    }

    wfstepsArray = wfsteps.toString().split(',');

    if(iswfresulthidden) {
        $('#wgWayfindresult .wfresult #wfshowicon').trigger('click');
    }

    $('#wgWayfindresult').fadeIn('fast');

    $('#destinationlocation').text('Destination | ' + wfstepsArray[wfstepsArray.length - 1]);
    $('.destination').show();

    $('#wgFloorGuide .toplayout .mobileqrcode .qrcode').html('');
    
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn').html('<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="27" fill="white" stroke="#BBE3FA" stroke-width="2"/><path d="M38.8902 18.9678C37.9653 17.8814 36.8747 16.9355 35.6511 16.1662C33.3966 14.7491 30.7887 14 28.1093 14C24.3406 14 20.7972 15.4561 18.1327 18.1007C15.4681 20.7453 14 24.2607 14 27.9997C14 31.7387 15.4675 35.2553 18.1327 37.8993C20.7979 40.5433 24.3406 42 28.1093 42C31.0048 42 33.7876 41.136 36.1572 39.5002C38.4708 37.9035 40.2339 35.6879 41.2555 33.0922L38.0472 31.8487C36.4368 35.939 32.5357 38.5824 28.1093 38.5824C22.2284 38.5824 17.4442 33.8352 17.4442 27.9997C17.4442 22.1642 22.2284 17.417 28.1087 17.417C31.0855 17.417 33.8375 18.6171 35.8149 20.6739L32.0665 22.7539L36.9553 25.6441L41.8442 28.5344L41.9218 22.8883L42 17.2422L38.8902 18.9678Z" fill="#006EB8"/></svg>')

    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn').attr('onclick', 'onclickReplay()');
    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btntext').text('Replay');

    generateWayfindsteps(wfstepsArray);

    var startshopId = kioskInfo[0].kioskLocation + '_' + kioskInfo[0].kioskFloor; // kiosk pos and floor as startpoint

    var mblink = "https://maps.capitaland.com/westgate/?start=" + startshopId + '&end=' + endshopentityname + '&route=' + route;

    new QRCode(document.querySelector("#wgFloorGuide .toplayout .mobileqrcode .qrcode"), {
        text: mblink,
        width: 80,
        height: 80,
    });

    $('#wgFloorGuide .toplayout .mobileqrcode').show();

}

function onclickReplay() {
    currentLevel = kioskInfo[0].kioskFloor;
    changeLevelDisplay(currentLevel);
    selectFloorlvlbtn(currentLevel);
    $("#wgWayfindresult").hide();
    myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
}


function hideWayfindingResult() {
    clearWayfindingtimeout();
    $('#wgWayfindresult').css('display','none');
    $('.destination').hide();

    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn').html('<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="27" fill="white" stroke="#A3CEE9" stroke-width="2"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M11 26.8605L41 15L29.1395 45L25.5985 30.4015L11 26.8605ZM28.4419 27.5581C29.2125 28.3288 30.4619 28.3288 31.2326 27.5581C32.0032 26.7875 32.0032 25.5381 31.2326 24.7674C30.4619 23.9968 29.2125 23.9968 28.4419 24.7674C27.6712 25.5381 27.6712 26.7875 28.4419 27.5581Z" fill="#0077C1"></path></svg>');

    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btn').attr('onclick', 'onclickResetBtn()');
    $('#wgFloorGuide .toplayout .mobileqrcode').hide();

    $('#wgFloorGuide .toplayout .yourlocation .buttongroup .btntext').text('Your location');
}


function generateWayfindsteps (wfsteps) {
    $('#wgWayfindresult .wfresult .wffloorcontainer').html('');

    $('#wgWayfindresult .wfdetail #lvlbtncontainer').html('');

    for(var i=0; i< wfsteps.length ; i++) {

        var wffloorstep = document.createElement('div');
        wffloorstep.setAttribute('id', 'wffloorstep');

        var floor = document.createElement('div');
        floor.setAttribute('id', 'floor');
        floor.innerText = wfsteps[i];

        var wfdesc = document.createElement('div');
        wfdesc.setAttribute('id', 'wfdesc');

        var wficon = document.createElement('div');
        wficon.setAttribute('id', 'wficon');

        var wfdownarrow = document.createElement('div');
        wfdownarrow.setAttribute('id', 'wfdownarrow');
        wfdownarrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none"><path d="M10 10L20 0L0 0L10 10Z" fill="#222222"></path></svg>';

        if( i == 0 ) {
            wficon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.15398 23.9337C2.85203 24.1686 3.60295 23.7597 3.82353 23.0208L5.61163 17.1083L3.99123 15.6255C3.77866 15.4344 3.59921 15.2342 3.45234 15.0346L1.30052 22.1557C1.07621 22.8945 1.46021 23.6948 2.15398 23.9337V23.9337ZM6.99169 13.1212C6.92653 13.6257 7.01625 13.8515 7.37943 14.1865L9.07781 15.7518C9.45754 16.1039 9.72245 16.6516 9.75983 17.1862L10.131 22.4816C10.1839 23.2557 9.63272 23.9382 8.90637 23.9945C8.17948 24.0514 7.53859 23.469 7.48571 22.6903L7.13429 17.6993L4.3624 15.1648C3.51748 14.3907 3.30118 13.6126 3.46034 12.3948L3.95009 8.70404L3.23602 9.10389L2.15824 12.847C1.97826 13.4647 1.35765 13.8128 0.778175 13.6257C0.198162 13.4346 -0.128163 12.7731 0.0475504 12.156L1.15791 8.31272C1.30478 7.79968 1.67223 7.32589 2.11712 7.0779L4.27267 5.86924C4.787 5.57803 5.32588 5.2214 5.90964 5.17362C7.01198 5.08205 7.91031 6.17809 7.75489 7.33897L6.99169 13.1212ZM6.93826 0C8.11004 0 9.06177 1.013 9.06177 2.2609C9.06177 3.50823 8.11004 4.5218 6.93826 4.5218C5.76275 4.5218 4.81582 3.50823 4.81582 2.2609C4.81582 1.013 5.76275 0 6.93826 0V0ZM8.19176 8.4043L11.5682 11.1606C12.05 11.5559 12.144 12.2953 11.7722 12.8084C11.4048 13.3214 10.7105 13.417 10.2293 13.0256L7.84087 11.0776L8.19176 8.4043Z" fill="#1C485C"></path></svg>';
            wfdesc.appendChild(wficon);
            wfdesc.innerHTML += 'Your location'; 
        }
        else if ( i == wfsteps.length - 1) {
            wficon.innerHTML = '<svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18.0037C5.73693 16.9263 4.56619 15.7452 3.5 14.4727C1.9 12.5617 8.83662e-07 9.71571 8.83662e-07 7.00371C-0.00141728 4.17126 1.70425 1.6171 4.32107 0.53311C6.93789 -0.550883 9.95007 0.0489528 11.952 2.05271C13.2685 3.36332 14.0059 5.1461 14 7.00371C14 9.71571 12.1 12.5617 10.5 14.4727C9.43382 15.7452 8.26307 16.9263 7 18.0037ZM7 4.00371C5.92821 4.00371 4.93782 4.57551 4.40193 5.50371C3.86603 6.43192 3.86603 7.57551 4.40193 8.50371C4.93782 9.43192 5.92821 10.0037 7 10.0037C8.65686 10.0037 10 8.66057 10 7.00371C10 5.34686 8.65686 4.00371 7 4.00371Z" fill="#B30000"></path></svg>'
            wfdesc.appendChild(wficon);
            wfdesc.innerHTML += "Destination";
            wfdownarrow.innerHTML = '';
        }
        else {
            if(route == 'esc') {
                wficon.innerHTML = '<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7795 5.18457C13.2935 5.18457 14.5257 4.02191 14.5257 2.59228C14.5257 1.16399 13.2949 0.00133485 11.7808 0.00133485L11.7795 0C11.7788 0 11.7784 0.000333831 11.7781 0.000667603C11.7778 0.00100126 11.7774 0.00133485 11.7768 0.00133485C10.264 0.00133485 9.03328 1.16399 9.03328 2.59228C9.03328 4.02191 10.2654 5.18457 11.7795 5.18457ZM11.8377 5.856C11.0733 5.84399 10.3779 6.13765 9.87096 6.6142C9.35452 7.09741 9.03328 7.77018 9.03328 8.50301V13.6969L14.5473 8.45763C14.5473 7.73681 14.2342 7.0854 13.73 6.6142C13.242 6.15634 12.5751 5.86801 11.8377 5.856ZM22.7543 6.61393H26.3124H28V13.3536H26.3558H22.7543H22.4954H21.9993L13.4693 21.5229L10.04 24.808C9.24975 25.5648 8.15181 25.9987 7.02541 26H7.02135H5.24432H1.68756H0V19.2617H1.08573H1.64419H5.24432H5.48831L17.4476 7.80729C18.2392 7.04909 19.3399 6.61393 20.4676 6.61393H22.4954H22.7543Z" fill="#006EB8"></path></svg>';
                wfdesc.appendChild(wficon);
                wfdesc.innerHTML += 'Take Escalator';
                }
            else {
                wficon.innerHTML = '<svg width="20" height="31" viewBox="0 0 20 31" fill="none" xmlns="http://www.w3.org/2000/svg">'
                + '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.91273 10.0547V3.13487L8.86244 6.24265V3.87857L5.01111 0L1.15728 3.87857V6.24635L4.11076 3.13487L4.1095 10.0547H5.91273ZM18.1641 27.8959C18.1641 28.5744 17.6392 29.1272 16.9963 29.1272H2.9698C2.32561 29.1272 1.80197 28.5744 1.80197 27.8959V14.9686C1.80197 14.2914 2.32561 13.7373 2.9698 13.7373H16.9963C17.6392 13.7373 18.1641 14.2914 18.1641 14.9686V27.8959ZM19.9987 14.2384C19.995 12.9246 18.9741 11.8497 17.7234 11.8497H2.27413C1.02342 11.8497 0 12.9283 0 14.2446V28.6064C0 29.9226 1.02342 31 2.27413 31H17.7234C18.9741 31 19.995 29.9263 19.9987 28.6138C19.9987 28.6113 20 28.6088 20 28.6064V14.2446C20 14.2431 19.9996 14.2417 19.9992 14.2405L19.9989 14.2396L19.9987 14.2384ZM18.841 3.81282V6.1769L14.9909 10.0542L11.1358 6.1769V3.80913L14.0893 6.9206L14.088 0.000738775H15.8887V6.9206L18.841 3.81282ZM6.79136 17.9469C6.89307 17.9469 6.98851 17.9248 7.07892 17.8928C7.40918 17.7746 7.64651 17.4667 7.64777 17.101C7.64902 16.7341 7.41044 16.4226 7.07892 16.3044C6.98725 16.2712 6.88931 '
                + '16.2515 6.78508 16.2515C6.31167 16.2539 5.92993 16.6307 5.92867 17.0961C5.92867 17.5677 6.31544 17.9494 6.79136 17.9469ZM5.42174 22.2208C5.42174 22.4079 5.32881 22.5397 5.15427 22.6148C4.98474 22.6887 4.80768 22.6653 4.68211 22.5384C4.60551 22.4621 4.5377 22.3451 4.53645 22.2479C4.53501 21.9897 4.53686 21.7319 4.5387 21.474C4.54009 21.2806 4.54147 21.0871 4.54147 20.8934C4.54184 20.7348 4.54167 20.5763 4.54149 20.4178V20.4178C4.54108 20.0375 4.54066 19.6574 4.54775 19.2767C4.55654 18.6636 5.00107 18.2856 5.67037 18.2843C5.95117 18.2835 6.23196 18.2838 6.51276 18.284H6.51422L6.93615 18.2843H7.92315C7.99849 18.2843 8.06881 18.2917 8.13788 18.3016C8.69291 18.3791 9.03949 18.751 9.04075 19.3051C9.04158 19.6572 9.04131 20.0105 9.04103 20.3637L9.04075 20.8934C9.04075 21.3379 9.04075 21.7812 9.042 22.2269C9.042 22.4116 8.95159 22.5434 8.76826 22.616C8.58743 22.6874 8.42418 22.6468 8.28229 22.5298C8.17053 22.435 8.14918 22.3106 8.14918 22.1789C8.15044 21.7504 8.15044 21.3219 8.15044 20.8934H8.13788H7.97338L7.97561 22.6059C7.97701 23.7459 7.9784 24.8863 7.98091 26.0267C7.98091 26.1941 7.94952 26.3456 7.80762 26.465C7.6494 26.5968 7.46606 26.6313 7.27017 26.5685C7.09186 26.5118 6.97507 26.3961 6.93615 26.2286C6.93501 26.223 6.9331 26.2177 6.93112 26.2122C6.92872 26.2055 6.92622 26.1985 6.92484 26.1904C6.9148 26.1264 6.90852 26.0599 6.90852 25.9934C6.90768 25.1883 6.90796 24.3821 6.90824 '
                + '23.5763V23.5755L6.90852 22.3673V22.2048H6.685V22.3562L6.68525 23.1705V23.1707C6.68568 24.1207 6.68612 25.0709 6.68123 26.0218C6.67998 26.1387 6.64607 26.2705 6.5858 26.3727C6.47278 26.5635 6.22666 26.6374 6.00188 26.5808C5.79469 26.5291 5.63647 26.3517 5.61637 26.1474C5.61219 26.1022 5.61236 26.057 5.61254 26.0126V26.0125L5.61261 25.9861L5.60884 20.8934H5.42802C5.42739 21.1141 5.42614 21.3348 5.42488 21.5557V21.5558V21.5559C5.42362 21.7773 5.42237 21.9989 5.42174 22.2208ZM10.4102 22.0978C10.5886 22.1335 10.787 22.046 10.8661 21.8712C10.8861 21.8275 10.9032 21.7819 10.9204 21.7362C10.9314 21.7072 10.9423 21.6782 10.954 21.6496C10.9713 21.6048 10.989 21.5602 11.0067 21.5154L11.0068 21.5152C11.0378 21.4371 11.0689 21.3588 11.0984 21.2789C11.1323 21.1915 11.1662 21.1029 11.1988 21.0155H11.4199L11.2978 21.6002L11.2976 21.6012C11.2162 21.9908 11.1347 22.3804 11.0544 22.77C11.0105 22.9818 11.1072 23.0926 11.342 23.0951C11.3994 23.0959 11.4568 23.0957 11.5157 23.0954L11.607 23.0951V23.2626C11.607 24.1552 11.607 25.0467 11.6082 25.9369C11.6082 26.0034 11.612 26.0711 11.6283 26.1327C11.7212 26.5009 12.167 26.6326 12.4696 26.3974C12.4751 26.3927 12.481 26.3891 12.4871 26.3854C12.4921 26.3823 12.4972 26.3792 12.5023 26.3753C12.6279 26.262 12.663 26.1142 12.663 25.9566C12.6618 25.0516 12.6618 24.1491 12.6618 23.2453V23.1037H12.879V23.2502V25.9234C12.879 25.9352 12.8788 25.9469 12.8785 25.9585C12.8778 '
                + '25.993 12.8771 26.0269 12.8828 26.0601C12.9104 26.2645 13.0171 26.4184 13.2306 26.4873C13.4378 26.5563 13.6262 26.5119 13.7806 26.3666C13.9024 26.2509 13.9301 26.1019 13.9301 25.9443V23.2576V23.0951C13.9651 23.0951 13.9983 23.0953 14.0303 23.0955C14.1061 23.096 14.1747 23.0965 14.2427 23.0939C14.4261 23.084 14.5253 22.9683 14.4914 22.8008L14.4371 22.5411L14.4368 22.5397C14.3306 22.0318 14.2244 21.5232 14.1172 21.0155H14.3357C14.4336 21.2802 14.5328 21.5449 14.6333 21.8096C14.7199 22.0387 14.9384 22.1507 15.1632 22.0854C15.4206 22.0103 15.5349 21.8096 15.4545 21.5597C15.4199 21.4542 15.3797 21.3501 15.3397 21.2464C15.326 21.2108 15.3123 21.1753 15.2988 21.1398C15.2825 21.0979 15.2662 21.0561 15.2511 21.0155C15.1771 20.8191 15.1037 20.6225 15.0303 20.4258C14.8458 19.9317 14.6612 19.4371 14.4663 18.9456C14.308 18.5479 14.0192 18.2697 13.527 18.261C13.2457 18.2561 12.9637 18.2575 12.6815 18.2589H12.6814L12.4696 18.2598C12.3651 18.2606 12.2611 18.2604 12.1569 18.2601H12.1568L12 18.2598C11.9297 18.2598 11.8581 18.2684 11.7903 18.2844C11.4035 18.3756 11.1838 18.6329 11.0582 18.9604C11.0364 19.0151 11.0159 19.0711 10.9954 19.1271C10.9817 19.1644 10.968 19.2018 10.954 19.2387C10.7431 19.7871 10.5365 20.3376 10.3303 20.8872L10.2822 21.0155C10.2355 21.1415 10.1882 21.2663 10.1407 21.3917L10.08 21.5523C10.0624 21.6015 10.0486 21.6557 10.0499 21.7087C10.0561 21.9057 10.1955 22.0534 10.4102 22.0978ZM12.7598 18.069C12.6292 18.069 12.5062 18.0406 12.3944 17.9926C12.0704 17.8523 11.8419 17.5334 11.8406 17.1652C11.8394 16.7884 12.0667 16.4671 12.3944 16.3267C12.5074 16.2787 12.6305 16.2516 12.7611 16.2516C13.2734 16.2503 13.6903 16.6591 13.6891 17.1603C13.6878 17.6589 13.2659 18.0714 12.7598 18.069Z" fill="#006EB8"></path></svg>'
                wfdesc.appendChild(wficon);
                wfdesc.innerHTML += 'Take Lift';
                }
        }
        
        wffloorstep.appendChild(floor);
        wffloorstep.appendChild(wfdesc);
        wffloorstep.appendChild(wfdownarrow);

        $('#wgWayfindresult .wfresult .wffloorcontainer').append(wffloorstep);

    }

    wfstepsSet = [...new Set(wfsteps)];

    for(var j=0; j<wfstepsSet.length; j++) {
        var lvlbtn = document.createElement('div');
        lvlbtn.className = 'lvlbtn';
        lvlbtn.setAttribute('id', wfstepsSet[j]);
        lvlbtn.setAttribute("onclick", "onclickLevelBtn("+this.id+")");

        var p = document.createElement('p');
        p.innerText = wfstepsSet[j];

        lvlbtn.appendChild(p);
        $('#wgWayfindresult .wfdetail #lvlbtncontainer').append(lvlbtn);
    }

}

// Directory Page
function onclickDirectory(tenant_id){
    endshopentityname = "";
    
    var tenant = getTenantObj(tenant_id);

    if(tenant != undefined) {
    
    endshopentityname = tenant.storeEntityName;

    $("#wgDirectorymodal").fadeIn('fast');
    
    $("#wgDirectorymodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");

    if (tenant.storeImageUrl == '' || tenant.storeImageUrl == null) {
        $("#wgDirectorymodal .modalbox .modalimgholder img").attr('src', './asset/error/errorimg.jpg');
    }
    else {
        var imgurl = tenant.storeImageUrl.split('/');
        // console.log(imgurl);
        var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
        // console.log(imgdetail.file_path);
        $("#wgDirectorymodal .modalbox .modalimgholder img").attr('src', `../${imgdetail.file_path}/${imgdetail.file_name}`);
    }

    $("#wgDirectorymodal .modalbox .modaldetail #tenantName").html(tenant.storeNameEng);

    if(tenant.isHalal) {
        $('#wgDirectorymodal .modalbox .modaldetail .modaltitle .halaliconholder').html('<svg xmlns="http://www.w3.org/2000/svg" width="54" height="50" viewBox="0 0 54 50" fill="none"><g clip-path="url(#clip0_2173_5869)">'
        + '<path d="M35.8885 6.57166C35.8318 6.62543 35.7721 6.6792 35.7124 6.73297L35.6677 6.77479C35.6109 6.82557 35.5542 6.87635 35.4975 6.92415H35.4945C35.4408 6.97493 35.3841 7.01974 35.3304 7.06753L35.2796 7.10935C35.2199 7.16014 35.1602 7.20793 35.0976 7.25573C35.0438 7.29755 34.9901 7.33937 34.9364 7.38119L34.8618 7.43795L34.826 7.46483C34.7842 7.49769 34.7394 7.53055 34.6976 7.56042L34.623 7.61419C34.5693 7.65303 34.5185 7.68888 34.4648 7.72771L34.4379 7.74563C34.3782 7.78745 34.3156 7.82927 34.2529 7.87109C34.2111 7.89798 34.1693 7.92785 34.1275 7.95474C34.0887 7.98162 34.0499 8.00552 34.0081 8.0324H33.9992C33.9574 8.06526 33.9156 8.08916 33.8708 8.11605C33.7813 8.1728 33.6918 8.22657 33.5992 8.28034C33.5604 8.30424 33.5216 8.32515 33.4828 8.34905C33.2172 8.5014 32.9456 8.64777 32.668 8.7822C32.6352 8.79713 32.6053 8.81207 32.5725 8.82999C32.5426 8.84493 32.5098 8.85986 32.4799 8.8748C32.4441 8.89272 32.4053 8.90766 32.3695 8.92558C30.6204 7.3782 28.749 6.49996 27 6.49996C25.2509 6.49996 23.3795 7.3782 21.6304 8.92558C21.5916 8.91065 21.5558 8.89272 21.517 8.8748C21.2304 8.74037 20.9499 8.59998 20.6753 8.44464C20.6424 8.42672 20.6126 8.40879 20.5798 8.39087L20.5111 8.35204C20.4753 8.33113 20.4395 8.31022 20.4007 8.2893C20.3082 8.23554 20.2156 8.17878 20.1231 8.12202C20.0365 8.06825 19.953 8.01448 19.8694 7.96071C19.8276 7.93383 19.7858 7.90694 19.744 7.87707C19.6814 7.83525 19.6217 7.79343 19.559 7.75161L19.5321 7.73368C19.4784 7.69784 19.4247 7.659 19.3739 7.62017L19.2993 7.5664C19.2545 7.53653 19.2128 7.50367 19.171 7.47081L19.1352 7.44392L19.0605 7.38717C19.0068 7.34535 18.9531 7.30352 18.8994 7.2617C18.8367 7.21391 18.777 7.16313 18.7173 7.11533L18.6665 7.07351C18.6128 7.0287 18.5561 6.9809 18.5024 6.9361H18.4994C18.4427 6.88233 18.383 6.83453 18.3293 6.78375L18.2845 6.74193C18.2248 6.68816 18.1681 6.63439 18.1084 6.58062C20.8245 5.37378 23.8331 4.70166 26.997 4.70166C30.1608 4.70166 33.1694 5.37378 35.8855 6.58062L35.8885 6.57166Z" fill="#C5E5D0"/>'
        + '<path d="M14.7566 30.9686C14.7148 30.9985 14.676 31.0313 14.6342 31.0612C14.5924 31.0911 14.5536 31.1239 14.5118 31.1538C14.4312 31.2165 14.3506 31.2793 14.2701 31.342L14.2581 31.3509C14.1805 31.4107 14.1059 31.4734 14.0313 31.5362C13.9537 31.6019 13.8731 31.6676 13.7955 31.7333C13.7238 31.796 13.6522 31.8558 13.5806 31.9185C13.491 31.9962 13.4045 32.0739 13.3179 32.1515C13.2463 32.2143 13.1776 32.277 13.109 32.3427C13.0374 32.4084 12.9657 32.4771 12.8941 32.5458C12.8642 32.5757 12.8314 32.6056 12.8016 32.6354C12.7657 32.6683 12.7299 32.7042 12.6941 32.74L12.6643 32.7699C12.5926 32.8416 12.518 32.9133 12.4494 32.985C12.3777 33.0566 12.3091 33.1283 12.2404 33.2C12.1927 33.2508 12.1419 33.3016 12.0942 33.3554C12.0643 33.3852 12.0375 33.4181 12.0076 33.448C11.9599 33.5017 11.9121 33.5525 11.8614 33.6063C11.7062 33.7766 11.5569 33.9498 11.4077 34.1231C11.3748 34.1619 11.345 34.1978 11.3122 34.2366C11.2793 34.2754 11.2495 34.3143 11.2167 34.3501C11.1599 34.4188 11.1062 34.4875 11.0495 34.5532C11.0137 34.598 10.9779 34.6429 10.9421 34.6877L10.9062 34.7295C10.8704 34.7773 10.8346 34.8221 10.7988 34.8699C10.751 34.9326 10.7033 34.9953 10.6555 35.0581C10.6167 35.1089 10.5809 35.1596 10.5421 35.2104C10.3929 35.4106 10.2496 35.6167 10.1093 35.8228C10.0645 35.8885 10.0198 35.9542 9.975 36.0229C9.9571 36.0498 9.93919 36.0767 9.92128 36.1066L9.87054 36.1843C9.8198 36.2619 9.76906 36.3426 9.71832 36.4232C9.67951 36.483 9.6437 36.5427 9.60788 36.6025C9.56311 36.6742 9.52132 36.7429 9.47954 36.8146C9.43775 36.8863 9.39596 36.955 9.35418 37.0267C9.33328 37.0595 9.31538 37.0954 9.29448 37.1282C9.27359 37.1641 9.2527 37.1999 9.2318 37.2358C9.20494 37.2806 9.18106 37.3284 9.1542 37.3732L9.13928 37.4001C9.11241 37.4479 9.08555 37.4956 9.05869 37.5434C9.02884 37.5942 9.00198 37.648 8.97511 37.6988C8.95422 37.7406 8.93034 37.7794 8.90945 37.8213C8.89453 37.8511 8.87662 37.881 8.86169 37.9109C8.8408 37.9497 8.82289 37.9885 8.802 38.0274C8.78111 38.0692 8.75723 38.111 8.73932 38.1528C8.71246 38.2036 8.68858 38.2514 8.6647 38.3022C8.64978 38.3291 8.63784 38.359 8.62291 38.3858C8.60501 38.4187 8.59008 38.4545 8.57217 38.4904C6.36346 35.067 5.08301 30.9895 5.08301 26.6162H14.473C14.473 26.664 14.473 26.7118 14.473 26.7596C14.473 28.2024 14.5655 29.6124 14.7446 30.9716L14.7566 30.9686Z" fill="#C5E5D0"/>'
        + '<path d="M15.846 18.2549C15.0849 20.567 14.5954 23.1151 14.5029 25.8006H5.10986C5.11583 25.6572 5.1218 25.5108 5.13076 25.3674C5.13673 25.2778 5.1427 25.1882 5.14866 25.0986C5.15463 25.009 5.1606 24.9193 5.16956 24.8297C5.18448 24.6505 5.19941 24.4713 5.2203 24.295C5.22627 24.2233 5.23522 24.1516 5.24418 24.0829C5.25313 24.0112 5.26208 23.9395 5.27104 23.8708C5.28895 23.7275 5.30686 23.5871 5.32775 23.4437C5.33372 23.4078 5.3367 23.375 5.34267 23.3391C5.34864 23.3033 5.35461 23.2704 5.3576 23.2346C5.36954 23.1629 5.37849 23.0942 5.39043 23.0255C5.40237 22.9567 5.41431 22.8851 5.42625 22.8163C5.43819 22.7476 5.45012 22.6819 5.46206 22.6132C5.46803 22.5804 5.474 22.5445 5.47997 22.5117C5.48594 22.4698 5.4949 22.431 5.50385 22.3892C5.5128 22.3384 5.52176 22.2876 5.5337 22.2398V22.2309L5.54265 22.198V22.192C5.55459 22.1323 5.56951 22.0695 5.58145 22.0098C5.59936 21.9262 5.61727 21.8395 5.63816 21.7559C5.65309 21.6932 5.66801 21.6274 5.68293 21.5647C5.69786 21.502 5.71278 21.4392 5.72771 21.3735C5.74561 21.2988 5.76352 21.2242 5.78442 21.1465C5.79934 21.0868 5.81426 21.027 5.83217 20.9643C5.85008 20.8956 5.86799 20.8299 5.8859 20.7611C5.89784 20.7193 5.90977 20.6775 5.92171 20.6357C5.93365 20.5939 5.94559 20.552 5.95753 20.5102C5.96947 20.4684 5.98141 20.4266 5.99335 20.3848C6.00529 20.3429 6.01723 20.3011 6.03215 20.2593C6.05603 20.1757 6.08289 20.092 6.10975 20.0114C6.12169 19.9695 6.13662 19.9277 6.14855 19.8859C6.18139 19.7843 6.21422 19.6857 6.24705 19.5842C6.26794 19.5244 6.28585 19.4647 6.30675 19.405C6.32764 19.3482 6.34555 19.2914 6.36644 19.2347C6.38733 19.1779 6.40524 19.1212 6.42912 19.0644C6.45001 19.0077 6.47091 18.9539 6.4918 18.8971C6.53359 18.7836 6.57537 18.6731 6.62014 18.5626C6.64104 18.5058 6.66491 18.452 6.68581 18.3953C6.76341 18.2041 6.844 18.0129 6.92757 17.8247C6.9425 17.7889 6.95742 17.756 6.97234 17.7202C6.98727 17.6843 7.00219 17.6515 7.0201 17.6156C7.07383 17.4961 7.12755 17.3796 7.18426 17.2601C7.21411 17.1974 7.24396 17.1347 7.2738 17.0749C7.30365 17.0122 7.3335 16.9524 7.36335 16.8897C7.40812 16.7971 7.45587 16.7045 7.50064 16.6149C7.52452 16.5701 7.5484 16.5223 7.57228 16.4775C7.59616 16.4327 7.62003 16.3849 7.64391 16.3401C7.70659 16.2206 7.77226 16.0981 7.8409 15.9786C7.86478 15.9338 7.88866 15.892 7.91552 15.8472C7.95432 15.7755 7.99611 15.7068 8.03491 15.6381C8.04984 15.6112 8.06774 15.5813 8.08267 15.5544C8.13938 15.4559 8.19609 15.3603 8.25578 15.2647C8.28862 15.2079 8.32443 15.1541 8.35727 15.0974C8.3901 15.0436 8.42293 14.9898 8.45875 14.9361C8.49755 14.8733 8.53635 14.8136 8.57814 14.7509C8.60798 14.7031 8.64082 14.6523 8.67365 14.6045C8.70946 14.5507 8.74528 14.494 8.7811 14.4402C8.84378 14.3446 8.90944 14.252 8.97511 14.1564C9.00495 14.1116 9.03779 14.0698 9.06763 14.025C9.10644 13.9712 9.14225 13.9174 9.18105 13.8637C9.23478 13.786 9.29149 13.7113 9.34522 13.6366C9.39894 13.562 9.45565 13.4873 9.51236 13.4126C9.63175 13.5381 9.75114 13.6635 9.87053 13.789C9.90635 13.8248 9.94216 13.8637 9.97798 13.8995C10.0884 14.013 10.2018 14.1236 10.3153 14.2341C10.3481 14.2669 10.3809 14.2998 10.4138 14.3297C10.4794 14.3924 10.5451 14.4551 10.6107 14.5179C10.7272 14.6284 10.8436 14.7359 10.9629 14.8435C11.0017 14.8793 11.0435 14.9152 11.0823 14.951C11.1928 15.0496 11.3032 15.1452 11.4136 15.2408C11.4793 15.2975 11.548 15.3573 11.6136 15.411C11.6942 15.4797 11.7748 15.5485 11.8584 15.6142C11.9211 15.6679 11.9867 15.7187 12.0524 15.7695C12.1151 15.8203 12.1777 15.8711 12.2434 15.9189C12.3061 15.9697 12.3688 16.0174 12.4344 16.0682C12.5628 16.1668 12.6941 16.2654 12.8224 16.361C12.8553 16.3849 12.8881 16.4088 12.918 16.4327C12.9687 16.4685 13.0165 16.5044 13.0672 16.5402C13.1209 16.579 13.1776 16.6179 13.2314 16.6567C13.3269 16.7224 13.4224 16.7911 13.5179 16.8539C13.5597 16.8837 13.6044 16.9136 13.6462 16.9405L13.6731 16.9584C13.7149 16.9883 13.7597 17.0152 13.8014 17.0451H13.8044C13.8641 17.0869 13.9268 17.1287 13.9865 17.1675C14.0372 17.2004 14.088 17.2332 14.1387 17.2661C14.1924 17.302 14.2492 17.3378 14.3059 17.3707C14.3417 17.3946 14.3805 17.4185 14.4163 17.4394C14.4521 17.4633 14.4909 17.4842 14.5267 17.5081C14.5625 17.532 14.5984 17.5529 14.6342 17.5738C14.67 17.5947 14.7058 17.6186 14.7416 17.6395C14.8103 17.6813 14.8789 17.7202 14.9476 17.762L14.9804 17.7799C15.0461 17.8187 15.1117 17.8576 15.1774 17.8934C15.3237 17.9771 15.4699 18.0577 15.6162 18.1384C15.6908 18.1772 15.7654 18.219 15.837 18.2579L15.846 18.2549Z" fill="#C5E5D0"/>'
        + '<path d="M48.887 25.8005H39.494C39.3985 23.115 38.912 20.5669 38.1509 18.2548C38.4494 18.0995 38.7419 17.9352 39.0314 17.7679C39.112 17.7231 39.1926 17.6753 39.2702 17.6275C39.3328 17.5887 39.3985 17.5498 39.4642 17.511C39.5358 17.4662 39.6074 17.4244 39.6791 17.3796C39.8194 17.2929 39.9626 17.2003 40.0999 17.1077C40.1507 17.0749 40.1984 17.042 40.2492 17.0091L40.27 16.9942C40.3088 16.9673 40.3477 16.9434 40.3894 16.9165C40.4253 16.8926 40.4611 16.8687 40.4939 16.8448L40.5118 16.8329H40.5148C40.5834 16.7821 40.6521 16.7343 40.7207 16.6865C40.7894 16.6387 40.858 16.5909 40.9237 16.5431C40.9774 16.5073 41.0282 16.4685 41.0819 16.4296C41.1117 16.4087 41.1416 16.3878 41.1714 16.3639L41.2073 16.337C41.261 16.2982 41.3147 16.2594 41.3654 16.2205C41.4162 16.1817 41.4669 16.1458 41.5147 16.107C41.5654 16.0712 41.6132 16.0323 41.6639 15.9935C41.7356 15.9367 41.8102 15.88 41.8788 15.8232C41.9385 15.7754 42.0012 15.7276 42.0609 15.6768C42.1236 15.6261 42.1863 15.5753 42.2489 15.5215L42.3265 15.4558L42.3594 15.4289C42.4012 15.3931 42.4429 15.3602 42.4847 15.3214L42.5205 15.2915C42.5862 15.2377 42.6489 15.181 42.7146 15.1242C42.7414 15.1003 42.7683 15.0764 42.7951 15.0525C42.9056 14.9539 43.019 14.8554 43.1265 14.7538C43.1772 14.706 43.2309 14.6582 43.2817 14.6104C43.3891 14.5088 43.4995 14.4073 43.604 14.3027C43.6339 14.2758 43.6637 14.246 43.6936 14.2161C43.7324 14.1803 43.7682 14.1414 43.807 14.1056C43.8458 14.0697 43.8816 14.0309 43.9174 13.995C43.9473 13.9652 43.9771 13.9353 44.004 13.9054C44.0547 13.8546 44.1054 13.8039 44.1532 13.7531C44.189 13.7172 44.2219 13.6844 44.2547 13.6485L44.3203 13.5798C44.3711 13.5261 44.4248 13.4723 44.4756 13.4155C44.5352 13.4932 44.5949 13.5738 44.6517 13.6515C44.6905 13.7053 44.7293 13.7561 44.7681 13.8098C44.7979 13.8517 44.8307 13.8935 44.8606 13.9383C44.8964 13.9891 44.9322 14.0399 44.968 14.0906C45.0158 14.1564 45.0606 14.2251 45.1053 14.2908C45.1501 14.3565 45.1949 14.4222 45.2367 14.4879C45.2725 14.5417 45.3083 14.5955 45.3441 14.6492C45.3978 14.7329 45.4516 14.8165 45.5053 14.9002C45.6247 15.0854 45.7381 15.2736 45.8515 15.4648C45.8903 15.5305 45.9291 15.5932 45.9649 15.6589C45.9978 15.7157 46.0306 15.7724 46.0634 15.8322C46.0903 15.88 46.1172 15.9248 46.141 15.9726C46.1798 16.0443 46.2186 16.113 46.2574 16.1847C46.2933 16.2534 46.3321 16.3221 46.3679 16.3878L46.4097 16.4685C46.4455 16.5402 46.4843 16.6118 46.5201 16.6835C46.541 16.7254 46.5649 16.7672 46.5858 16.812C46.6305 16.8986 46.6723 16.9823 46.7141 17.0689C46.744 17.1316 46.7738 17.1914 46.8037 17.2541C46.8305 17.3138 46.8604 17.3736 46.8872 17.4333C46.9022 17.4692 46.9201 17.502 46.935 17.5379C46.9857 17.6514 47.0365 17.7649 47.0872 17.8784C47.1051 17.9202 47.123 17.9651 47.1439 18.0069C47.1708 18.0696 47.1976 18.1323 47.2215 18.1951C47.2484 18.2578 47.2752 18.3235 47.2991 18.3863C47.323 18.443 47.3439 18.4998 47.3678 18.5565C47.4036 18.6491 47.4394 18.7417 47.4752 18.8343C47.4901 18.8791 47.5081 18.924 47.526 18.9658C47.5498 19.0315 47.5737 19.0972 47.5976 19.1599C47.6125 19.1988 47.6245 19.2376 47.6394 19.2735C47.6543 19.3123 47.6662 19.3511 47.6812 19.39C47.7021 19.4467 47.72 19.5035 47.7409 19.5632V19.5692C47.7618 19.623 47.7797 19.6797 47.7976 19.7365C47.8423 19.8709 47.8841 20.0053 47.9259 20.1427C47.9468 20.2114 47.9677 20.2772 47.9886 20.3459C48.0095 20.4146 48.0274 20.4833 48.0483 20.549C48.0662 20.6147 48.0871 20.6834 48.105 20.7491C48.1229 20.8178 48.1408 20.8836 48.1587 20.9523C48.1737 21.012 48.1916 21.0718 48.2065 21.1345C48.2274 21.2092 48.2453 21.2839 48.2632 21.3615C48.2781 21.4242 48.293 21.484 48.308 21.5467C48.3199 21.5975 48.3318 21.6483 48.3438 21.6961L48.3498 21.72C48.3587 21.7528 48.3647 21.7857 48.3706 21.8186V21.8395C48.3886 21.8932 48.3975 21.947 48.4094 22.0008C48.4214 22.0605 48.4363 22.1233 48.4483 22.183V22.2009L48.4662 22.2696V22.2756C48.4751 22.3085 48.4811 22.3413 48.4871 22.3712C48.502 22.4489 48.5169 22.5265 48.5318 22.6072C48.5438 22.6729 48.5557 22.7386 48.5676 22.8043C48.5736 22.8402 48.5796 22.873 48.5855 22.9089C48.5915 22.9447 48.5975 22.9776 48.6035 23.0134C48.6154 23.0822 48.6273 23.1538 48.6363 23.2226C48.6423 23.2584 48.6482 23.2913 48.6512 23.3271C48.6572 23.36 48.6602 23.3958 48.6661 23.4317C48.687 23.575 48.7049 23.7154 48.7228 23.8588C48.7318 23.9305 48.7408 23.9992 48.7497 24.0709C48.7587 24.1426 48.7676 24.2113 48.7736 24.283C48.7945 24.4622 48.8094 24.6385 48.8243 24.8177C48.8303 24.9073 48.8392 24.997 48.8452 25.0866C48.8512 25.1762 48.8572 25.2658 48.8601 25.3554C48.8691 25.4988 48.8751 25.6452 48.881 25.7886L48.887 25.8005Z" fill="#C5E5D0"/>'
        + '<path d="M48.9019 26.6162C48.9019 30.9925 47.6214 35.07 45.4127 38.4904C45.3799 38.4187 45.344 38.35 45.3112 38.2813C45.2843 38.2275 45.2605 38.1767 45.2336 38.123C45.2038 38.0632 45.1739 38.0035 45.1441 37.9467L45.1351 37.9318C45.1112 37.887 45.0903 37.8422 45.0665 37.7974C45.0426 37.7525 45.0187 37.7077 44.9948 37.6629C44.956 37.5883 44.9142 37.5136 44.8724 37.4389L44.8336 37.3702L44.7948 37.3015C44.768 37.2507 44.7381 37.1999 44.7083 37.1491C44.6755 37.0924 44.6426 37.0356 44.6098 36.9818C44.568 36.9102 44.5262 36.8414 44.4844 36.7698C44.3531 36.5487 44.2158 36.3336 44.0725 36.1185C44.0337 36.0618 43.9949 36.002 43.9561 35.9453C43.9293 35.9064 43.9024 35.8646 43.8755 35.8228C43.8099 35.7242 43.7412 35.6286 43.6726 35.5301C43.6308 35.4703 43.589 35.4136 43.5472 35.3538C43.5054 35.2971 43.4636 35.2403 43.4219 35.1806C43.3801 35.1238 43.3383 35.067 43.2935 35.0103C43.2487 34.9476 43.201 34.8878 43.1532 34.8281C43.1144 34.7773 43.0756 34.7295 43.0368 34.6787C42.9592 34.5801 42.8816 34.4815 42.801 34.383C42.7622 34.3352 42.7234 34.2874 42.6816 34.2396C42.6279 34.1739 42.5742 34.1111 42.5205 34.0484C42.4727 33.9916 42.425 33.9379 42.3772 33.8811C42.3145 33.8094 42.2548 33.7407 42.1921 33.672C42.1175 33.5884 42.0429 33.5077 41.9683 33.4271C41.9176 33.3703 41.8668 33.3165 41.8131 33.2628C41.6519 33.0925 41.4877 32.9252 41.3206 32.7579C41.2579 32.6952 41.1923 32.6325 41.1266 32.5697C41.0878 32.5339 41.049 32.4951 41.0102 32.4592C40.9714 32.4204 40.9296 32.3815 40.8878 32.3457C40.8192 32.28 40.7505 32.2172 40.6789 32.1545C40.6132 32.0948 40.5476 32.035 40.4789 31.9753C40.4371 31.9394 40.3953 31.9006 40.3506 31.8647C40.3088 31.8289 40.264 31.7901 40.2222 31.7542C40.1357 31.6795 40.0491 31.6078 39.9625 31.5362C39.7864 31.3898 39.6044 31.2464 39.4223 31.106C39.3626 31.0582 39.2999 31.0134 39.2402 30.9686C39.4163 29.6094 39.5118 28.2024 39.5118 26.7596C39.5118 26.7118 39.5118 26.664 39.5118 26.6162H48.9019Z" fill="#C5E5D0"/>'
        + '<path d="M20.7948 9.72063C18.9651 11.6086 17.3235 14.2254 16.1744 17.3171L16.1445 17.2992C16.0968 17.2723 16.046 17.2484 15.9983 17.2185L15.9833 17.2096C15.9535 17.1946 15.9237 17.1767 15.8938 17.1588H15.8878C15.852 17.1349 15.8132 17.114 15.7774 17.0931C15.5535 16.9676 15.3297 16.8392 15.1118 16.7047C15.079 16.6868 15.0491 16.6659 15.0163 16.648C14.879 16.5643 14.7417 16.4777 14.6074 16.3911C14.5507 16.3552 14.494 16.3194 14.4372 16.2806C14.3835 16.2447 14.3298 16.2089 14.2761 16.176C14.2194 16.1402 14.1656 16.1013 14.1089 16.0625C14.0522 16.0237 13.9985 15.9878 13.9418 15.949C13.8642 15.8952 13.7896 15.8444 13.7149 15.7907C13.6463 15.7429 13.5776 15.6951 13.512 15.6443C13.4791 15.6204 13.4433 15.5965 13.4105 15.5726C13.3747 15.5457 13.3359 15.5188 13.3001 15.4889C13.2613 15.4621 13.2225 15.4322 13.1837 15.4023C13.1478 15.3754 13.112 15.3485 13.0732 15.3187C13.0374 15.2918 13.0016 15.2649 12.9658 15.235C12.9389 15.2141 12.912 15.1932 12.8852 15.1723C12.8315 15.1305 12.7777 15.0857 12.724 15.0438L12.6643 14.9961L12.6106 14.9542C12.5569 14.9094 12.5031 14.8676 12.4494 14.8228L12.4375 14.8108C12.3658 14.7541 12.2972 14.6943 12.2285 14.6376C12.1599 14.5808 12.0942 14.5241 12.0256 14.4643C11.9778 14.4255 11.933 14.3837 11.8883 14.3448C11.8405 14.306 11.7957 14.2642 11.751 14.2224C11.7062 14.1835 11.6585 14.1417 11.6137 14.0999C11.5689 14.0581 11.5241 14.0192 11.4794 13.9774C11.4256 13.9266 11.3689 13.8758 11.3152 13.8251C11.2495 13.7623 11.1839 13.6996 11.1182 13.6369L11.0705 13.5921C11.0197 13.5413 10.966 13.4905 10.9152 13.4397C10.8556 13.38 10.7959 13.3202 10.7362 13.2605C10.6765 13.2007 10.6198 13.141 10.5601 13.0812L10.5063 13.0245C10.4466 12.9647 10.3899 12.905 10.3332 12.8423C10.2676 12.7736 10.2019 12.7019 10.1362 12.6302C12.0375 10.333 14.4014 8.43016 17.0817 7.06201C17.1504 7.13072 17.219 7.19644 17.2877 7.26216L17.3683 7.33684L17.3981 7.36671C17.4309 7.39658 17.4638 7.42645 17.4966 7.45632C17.5623 7.51607 17.6279 7.57581 17.6966 7.63556C17.7324 7.66543 17.7652 7.6953 17.8011 7.72517L17.8548 7.76998L17.9085 7.81479C17.9443 7.84466 17.9801 7.87453 18.016 7.90739C18.0697 7.9522 18.1234 7.99701 18.1801 8.04182C18.2338 8.08663 18.2906 8.12845 18.3473 8.17326C18.4159 8.22703 18.4846 8.27781 18.5532 8.33158C18.595 8.36145 18.6338 8.39431 18.6756 8.42119C18.7263 8.46003 18.7801 8.49587 18.8308 8.53471C18.8815 8.57056 18.9323 8.6064 18.983 8.64225C19.0248 8.67212 19.0666 8.70199 19.1114 8.72888C19.2666 8.83343 19.4218 8.935 19.5829 9.03357L19.6128 9.0515C19.6874 9.0963 19.762 9.1441 19.8367 9.18592C19.8934 9.21878 19.9501 9.25463 20.0098 9.28749C20.0486 9.31138 20.0874 9.33229 20.1292 9.35321C20.168 9.3771 20.2097 9.39801 20.2485 9.41892C20.2993 9.44581 20.347 9.47269 20.3978 9.49958C20.4515 9.52945 20.5052 9.55634 20.559 9.58322C20.6425 9.62803 20.7261 9.66985 20.8097 9.71167L20.7948 9.72063Z" fill="#C5E5D0"/>'
        + '<path d="M43.8755 12.6389C43.8218 12.6987 43.7651 12.7554 43.7114 12.8152C43.6756 12.854 43.6397 12.8898 43.6039 12.9287C43.5741 12.9585 43.5442 12.9914 43.5144 13.0213C43.4875 13.0482 43.4607 13.078 43.4338 13.1049C43.395 13.1467 43.3562 13.1886 43.3144 13.2274C43.2458 13.2961 43.1771 13.3648 43.1085 13.4305L43.0338 13.5022C42.9741 13.559 42.9174 13.6157 42.8577 13.6725C42.7891 13.7382 42.7175 13.8069 42.6458 13.8696C42.5235 13.9832 42.4011 14.0967 42.2757 14.2072C42.2369 14.243 42.1981 14.2759 42.1593 14.3118L42.1504 14.3177C42.1175 14.3476 42.0817 14.3775 42.0459 14.4073L42.019 14.4312L41.9534 14.488C41.828 14.5955 41.6997 14.7031 41.5713 14.8076L41.4997 14.8674L41.4907 14.8763C41.437 14.9211 41.3833 14.963 41.3296 15.0078C41.2549 15.0675 41.1773 15.1273 41.1027 15.187C41.04 15.2378 40.9744 15.2856 40.9117 15.3334L40.8371 15.3901L40.8072 15.411C40.7744 15.4349 40.7416 15.4618 40.7087 15.4857L40.6848 15.5037C40.6431 15.5335 40.6013 15.5664 40.5595 15.5963L40.5296 15.6172L40.4491 15.6769C40.3744 15.7307 40.2998 15.7844 40.2252 15.8382C40.1774 15.8711 40.1297 15.9039 40.0819 15.9368C40.0192 15.9816 39.9566 16.0234 39.8909 16.0682C39.7566 16.1608 39.6193 16.2505 39.482 16.3401C39.4253 16.3759 39.3686 16.4148 39.3089 16.4506C39.2462 16.4924 39.1835 16.5313 39.1208 16.5701H39.1179L39.0552 16.6119C38.9925 16.6507 38.9328 16.6866 38.8731 16.7254C38.8045 16.7672 38.7358 16.8091 38.6672 16.8509C38.5299 16.9315 38.3896 17.0122 38.2493 17.0928C38.1956 17.1227 38.1418 17.1526 38.0881 17.1825L38.0165 17.2213L37.9359 17.2661C37.9001 17.287 37.8613 17.3079 37.8255 17.3259C36.6734 14.2341 35.0317 11.6143 33.2051 9.72936C33.2498 9.70845 33.2916 9.68754 33.3334 9.66365C33.3782 9.64273 33.42 9.61884 33.4618 9.59793C33.4976 9.58 33.5304 9.56208 33.5632 9.54416C33.6319 9.50831 33.7005 9.46948 33.7692 9.43363C33.8199 9.40674 33.8677 9.37986 33.9184 9.34999C33.9901 9.31115 34.0587 9.26933 34.1274 9.2305L34.196 9.18868C34.2468 9.15881 34.2945 9.12893 34.3453 9.09906C34.393 9.06919 34.4408 9.0423 34.4855 9.01243C34.6049 8.93775 34.7243 8.86008 34.8407 8.78242C34.9124 8.73462 34.984 8.68384 35.0556 8.63306C35.1004 8.60318 35.1422 8.57331 35.1869 8.54045C35.2228 8.51357 35.2616 8.48668 35.2974 8.4598C35.3242 8.43889 35.3511 8.42096 35.378 8.40005L35.4586 8.34031C35.5003 8.31044 35.5421 8.27758 35.5839 8.24472L35.6078 8.2268C35.6615 8.18497 35.7152 8.14315 35.769 8.09835L35.8108 8.06549C35.8705 8.01769 35.9302 7.96989 35.9869 7.9221C36.0167 7.8982 36.0495 7.87132 36.0794 7.84443C36.1451 7.78767 36.2107 7.73391 36.2764 7.67715C36.4435 7.53077 36.6047 7.3844 36.7629 7.22907C36.8166 7.17828 36.8703 7.12451 36.9241 7.07373C39.6044 8.44187 41.9683 10.3447 43.8696 12.6419L43.8755 12.6389Z" fill="#C5E5D0"/>'
        + '<path d="M31.5428 9.26344C31.1697 9.40384 30.7876 9.52631 30.3996 9.63087C30.3548 9.64281 30.3101 9.65476 30.2653 9.66671C30.2354 9.67567 30.2026 9.68165 30.1698 9.69061C30.1369 9.69957 30.1011 9.70853 30.0683 9.71451C29.734 9.79516 29.3967 9.86387 29.0505 9.91764C28.9998 9.9266 28.949 9.93257 28.8953 9.94153C28.8446 9.94751 28.7908 9.95647 28.7401 9.96245C28.6893 9.96842 28.6356 9.97738 28.5849 9.98336C28.5341 9.98933 28.4804 9.9953 28.4297 10.0013L28.3252 10.0132C28.2834 10.0162 28.2446 10.0222 28.2028 10.0252C28.0864 10.0371 27.97 10.0461 27.8536 10.0521C27.8178 10.0521 27.785 10.055 27.7491 10.058H27.7283C27.6835 10.061 27.6387 10.064 27.5939 10.067C27.4954 10.07 27.3969 10.076 27.2955 10.0789C27.197 10.0789 27.0955 10.0789 26.997 10.0789C26.8985 10.0789 26.797 10.0789 26.6985 10.0789C26.6 10.0789 26.5015 10.073 26.4 10.067C26.3553 10.067 26.3105 10.064 26.2657 10.061H26.2448C26.209 10.058 26.1762 10.055 26.1404 10.055C26.024 10.0491 25.9076 10.0371 25.7912 10.0282C25.7494 10.0252 25.7106 10.0222 25.6688 10.0162L25.5643 10.0043C25.5136 9.99829 25.4598 9.99232 25.4091 9.98634C25.3584 9.98037 25.3046 9.97439 25.2539 9.96543C25.2032 9.95946 25.1494 9.9505 25.0987 9.94452C25.048 9.93855 24.9942 9.92959 24.9435 9.92062C24.6002 9.86685 24.26 9.79815 23.9257 9.71749C23.8929 9.70853 23.857 9.69957 23.8242 9.6936C23.7914 9.68463 23.7615 9.67866 23.7287 9.6697C23.6839 9.65775 23.6392 9.6458 23.5914 9.63385C23.2034 9.5293 22.8213 9.40682 22.4482 9.26642C23.9436 8.03569 25.5166 7.34863 26.991 7.34863C28.4655 7.34863 30.0384 8.03868 31.5338 9.26642L31.5428 9.26344Z" fill="#C5E5D0"/>'
        + '<path d="M37.0975 17.6934C37.0497 17.7173 37.002 17.7412 36.9542 17.7621C36.9065 17.786 36.8587 17.8069 36.811 17.8308C36.7155 17.8756 36.6199 17.9205 36.5244 17.9653C36.4289 18.0101 36.3304 18.0549 36.2319 18.0967C36.1334 18.1385 36.0349 18.1803 35.9394 18.2222C35.8917 18.2431 35.8409 18.264 35.7902 18.2849C35.7394 18.3058 35.6917 18.3267 35.641 18.3446C35.5962 18.3626 35.5484 18.3805 35.5037 18.4014C35.4499 18.4223 35.3962 18.4432 35.3455 18.4641C35.2798 18.491 35.2111 18.5149 35.1455 18.5418C35.0142 18.5926 34.8798 18.6434 34.7455 18.6912C34.647 18.727 34.5455 18.7599 34.4471 18.7957C34.3635 18.8226 34.2799 18.8525 34.1963 18.8794C34.1545 18.8913 34.1157 18.9062 34.074 18.9182L34.0501 18.9242C34.0202 18.9331 33.9934 18.9421 33.9635 18.951L33.9426 18.957C33.8919 18.9749 33.8411 18.9899 33.7874 19.0048C33.6173 19.0586 33.4501 19.1064 33.28 19.1572C33.1964 19.1811 33.1099 19.205 33.0263 19.2289C32.901 19.2617 32.7756 19.2976 32.6473 19.3274C32.6174 19.3364 32.5876 19.3424 32.5577 19.3513H32.5398C32.4532 19.3782 32.3667 19.3991 32.2831 19.417L32.2562 19.423C32.2085 19.435 32.1578 19.4469 32.11 19.4559L32.0861 19.4619C32.0473 19.4708 32.0085 19.4798 31.9697 19.4887L31.9339 19.4947C31.8861 19.5037 31.8384 19.5156 31.7936 19.5246C31.7339 19.5365 31.6772 19.5485 31.6175 19.5604C31.5757 19.5694 31.5369 19.5784 31.4951 19.5843C31.4056 19.6023 31.3161 19.6202 31.2235 19.6351C31.1728 19.6441 31.122 19.653 31.0713 19.662L31.0444 19.668C31.0086 19.6739 30.9758 19.6799 30.94 19.6859C30.8773 19.6978 30.8176 19.7068 30.7549 19.7158C30.7161 19.7217 30.6743 19.7307 30.6355 19.7367L30.5788 19.7456C30.5132 19.7576 30.4475 19.7666 30.3818 19.7755H30.3759C30.2774 19.7905 30.1789 19.8054 30.0804 19.8173C29.9998 19.8293 29.9192 19.8382 29.8356 19.8472H29.8058C29.764 19.8562 29.7222 19.8621 29.6804 19.8651L29.6356 19.8711C29.6088 19.8711 29.5819 19.8771 29.5551 19.8801H29.5371C29.4655 19.889 29.3969 19.898 29.3282 19.904C29.2685 19.9099 29.2118 19.9159 29.1521 19.9219C29.0954 19.9279 29.0357 19.9338 28.976 19.9368C28.9283 19.9398 28.8805 19.9458 28.8357 19.9488H28.8119C28.7701 19.9547 28.7253 19.9577 28.6835 19.9607H28.6716C28.6208 19.9637 28.5671 19.9697 28.5134 19.9727C28.3432 19.9846 28.1731 19.9936 28 19.9996C27.9642 19.9996 27.9284 20.0025 27.8926 20.0025H27.8299C27.7642 20.0085 27.6956 20.0085 27.6299 20.0115C27.5374 20.0115 27.4448 20.0175 27.3553 20.0175H27.2687C27.1822 20.0175 27.0956 20.0175 27.0061 20.0175C26.9165 20.0175 26.833 20.0175 26.7434 20.0175H26.6569C26.5643 20.0175 26.4718 20.0145 26.3823 20.0115C26.3136 20.0115 26.248 20.0085 26.1823 20.0055H26.1196C26.0838 20.0025 26.048 19.9996 26.0122 19.9996C25.9435 19.9966 25.8749 19.9936 25.8032 19.9906C25.7704 19.9906 25.7376 19.9876 25.7047 19.9846H25.6809C25.6212 19.9816 25.5645 19.9757 25.5048 19.9727C25.4749 19.9727 25.448 19.9697 25.4182 19.9667H25.3854C25.3167 19.9607 25.2511 19.9547 25.1824 19.9488H25.1287C25.057 19.9398 24.9854 19.9308 24.9138 19.9249L24.8451 19.9189C24.7586 19.9099 24.672 19.901 24.5855 19.892H24.5437L24.4661 19.8801C24.3885 19.8711 24.3079 19.8621 24.2303 19.8532C24.1318 19.8412 24.0333 19.8293 23.9318 19.8143C23.8452 19.8024 23.7587 19.7905 23.6721 19.7785C23.5408 19.7606 23.4125 19.7397 23.2811 19.7188C23.2155 19.7068 23.1468 19.6978 23.0811 19.6859L23.0155 19.674C22.9379 19.659 22.8573 19.6471 22.7797 19.6321C22.7528 19.6262 22.726 19.6202 22.6991 19.6172C22.6125 19.5993 22.526 19.5843 22.4394 19.5664C22.3648 19.5515 22.2932 19.5365 22.2186 19.5216C22.1798 19.5126 22.138 19.5067 22.0992 19.4947H22.0783C22.0037 19.4738 21.926 19.4589 21.8514 19.4409C21.7708 19.423 21.6873 19.4021 21.6067 19.3842L21.5738 19.3752C21.5321 19.3663 21.4903 19.3543 21.4515 19.3454H21.4425C21.4157 19.3364 21.3888 19.3304 21.3619 19.3244L21.344 19.3185C21.2903 19.3065 21.2396 19.2916 21.1858 19.2767C21.1411 19.2647 21.0963 19.2528 21.0485 19.2408C21.0067 19.2289 20.965 19.2199 20.9232 19.2079C20.8635 19.193 20.8038 19.1751 20.7441 19.1601C20.6844 19.1422 20.6247 19.1273 20.565 19.1094C20.4993 19.0914 20.4367 19.0735 20.374 19.0526C20.2904 19.0287 20.2068 19.0018 20.1233 18.9749C20.0277 18.9451 19.9352 18.9152 19.8397 18.8853C19.7442 18.8555 19.6517 18.8226 19.5591 18.7897C19.4875 18.7658 19.4129 18.739 19.3413 18.7121C19.3144 18.7031 19.2875 18.6912 19.2607 18.6822C19.0995 18.6254 18.9383 18.5657 18.7801 18.503C18.7264 18.4821 18.6697 18.4611 18.616 18.4402C18.5742 18.4253 18.5324 18.4074 18.4876 18.3894C18.4458 18.3715 18.4011 18.3566 18.3593 18.3387C18.2727 18.3058 18.1891 18.27 18.1056 18.2341H18.0996L18.0429 18.2072H18.0339V18.2013C17.9802 18.1803 17.9265 18.1564 17.8728 18.1325C17.7295 18.0728 17.5892 18.0101 17.4489 17.9444C17.3833 17.9145 17.3176 17.8846 17.2519 17.8517L17.2281 17.8398L17.1833 17.8189H17.1743V17.8129C17.1296 17.792 17.0878 17.7741 17.046 17.7532C17.0012 17.7323 16.9535 17.7084 16.9087 17.6875C18.0548 14.53 19.7233 11.8893 21.5709 10.0641L21.6007 10.076C21.6425 10.094 21.6843 10.1119 21.7231 10.1268C21.9081 10.2015 22.0932 10.2732 22.2812 10.3389C22.329 10.3568 22.3767 10.3718 22.4245 10.3897C22.4723 10.4076 22.52 10.4225 22.5678 10.4375C22.6633 10.4703 22.7588 10.5002 22.8573 10.5301C22.911 10.548 22.9677 10.5629 23.0214 10.5809C23.1319 10.6137 23.2423 10.6436 23.3528 10.6735C23.4035 10.6854 23.4542 10.7004 23.505 10.7123C23.5497 10.7243 23.5945 10.7362 23.6393 10.7452C23.6721 10.7541 23.7079 10.7631 23.7408 10.7691C23.7885 10.781 23.8363 10.793 23.887 10.8019C23.9855 10.8258 24.081 10.8467 24.1795 10.8647C24.2422 10.8766 24.3049 10.8915 24.3706 10.9005C24.5855 10.9423 24.8004 10.9782 25.0182 11.008C25.0451 11.011 25.075 11.017 25.1018 11.02C25.1287 11.023 25.1585 11.029 25.1854 11.0319L25.257 11.0409H25.2839C25.3227 11.0499 25.3615 11.0528 25.4003 11.0588C25.4331 11.0618 25.4689 11.0678 25.5048 11.0708C25.5346 11.0738 25.5645 11.0767 25.5943 11.0797C25.6391 11.0857 25.6838 11.0887 25.7286 11.0917C25.7734 11.0947 25.8182 11.1006 25.8629 11.1036C25.8958 11.1036 25.9256 11.1096 25.9584 11.1096C25.9972 11.1096 26.036 11.1156 26.0748 11.1186H26.1405C26.2868 11.1335 26.436 11.1395 26.5852 11.1425C26.633 11.1425 26.6807 11.1425 26.7285 11.1455H26.836C26.8956 11.1455 26.9553 11.1455 27.015 11.1455C27.0747 11.1455 27.1344 11.1455 27.1941 11.1455C27.2299 11.1455 27.2658 11.1455 27.3016 11.1455C27.3493 11.1455 27.3971 11.1455 27.4448 11.1425C27.5941 11.1395 27.7433 11.1305 27.8896 11.1216H27.9552C27.994 11.1156 28.0328 11.1126 28.0716 11.1096C28.1045 11.1096 28.1343 11.1036 28.1671 11.1036C28.2119 11.1006 28.2567 11.0977 28.3015 11.0917C28.3462 11.0887 28.391 11.0827 28.4328 11.0797C28.4626 11.0797 28.4925 11.0738 28.5223 11.0708C28.5581 11.0678 28.591 11.0648 28.6268 11.0588C28.6656 11.0558 28.7044 11.0499 28.7432 11.0469H28.7701L28.8417 11.0349C28.8686 11.0349 28.8984 11.029 28.9253 11.023C28.9521 11.02 28.982 11.017 29.0088 11.011C29.0984 10.9991 29.1849 10.9841 29.2715 10.9692C29.3014 10.9662 29.3312 10.9602 29.361 10.9543C29.3879 10.9513 29.4178 10.9453 29.4446 10.9393C29.4715 10.9363 29.5013 10.9304 29.5282 10.9244C29.6088 10.9095 29.6894 10.8945 29.77 10.8796C29.8088 10.8736 29.8476 10.8647 29.8834 10.8557C29.9281 10.8467 29.9729 10.8378 30.0207 10.8258C30.0834 10.8139 30.143 10.7989 30.2057 10.784C30.2684 10.7691 30.3311 10.7541 30.3938 10.7392C30.4415 10.7272 30.4923 10.7153 30.54 10.7033C30.5878 10.6914 30.6385 10.6794 30.6863 10.6645H30.6893C30.74 10.6496 30.7907 10.6376 30.8415 10.6227C30.8952 10.6078 30.9489 10.5928 31.0027 10.5749C31.0564 10.56 31.1131 10.542 31.1668 10.5241L31.2056 10.5122C31.2534 10.4972 31.3011 10.4823 31.3489 10.4674C31.4504 10.4345 31.5519 10.3986 31.6533 10.3658L31.728 10.3389C31.8085 10.312 31.8891 10.2821 31.9697 10.2493C32.0145 10.2314 32.0593 10.2164 32.104 10.1985C32.1637 10.1776 32.2204 10.1537 32.2771 10.1298C32.3249 10.1089 32.3727 10.091 32.4234 10.0701L32.4503 10.0581C34.2948 11.8833 35.9633 14.524 37.1124 17.6815L37.0975 17.6934Z" fill="#C5E5D0"/>'
        + '<path d="M38.6642 25.8007H15.3354C15.425 23.2496 15.8787 20.827 16.5831 18.6284L16.6069 18.6374C16.6965 18.6822 16.789 18.727 16.8815 18.7688C16.98 18.8166 17.0815 18.8614 17.183 18.9062C17.2696 18.9481 17.3591 18.9869 17.4486 19.0227L17.5024 19.0466C17.5919 19.0855 17.6785 19.1243 17.768 19.1601L17.7949 19.1721C17.8934 19.2109 17.9919 19.2527 18.0904 19.2916C18.1441 19.3125 18.1978 19.3334 18.2515 19.3543C18.4038 19.4141 18.556 19.4708 18.7082 19.5276L18.7858 19.5545L18.8545 19.5784C18.9231 19.6023 18.9918 19.6291 19.0604 19.653C19.1201 19.6739 19.1768 19.6949 19.2365 19.7158C19.2783 19.7307 19.3171 19.7426 19.3589 19.7576C19.4186 19.7785 19.4753 19.7964 19.535 19.8173C19.5738 19.8293 19.6126 19.8412 19.6514 19.8562H19.6574C19.7141 19.8771 19.7708 19.895 19.8275 19.9129C19.9021 19.9368 19.9767 19.9607 20.0513 19.9816C20.12 20.0025 20.1857 20.0234 20.2543 20.0414C20.4065 20.0862 20.5588 20.128 20.711 20.1698C20.7468 20.1788 20.7826 20.1907 20.8184 20.1997C20.8871 20.2176 20.9527 20.2355 21.0214 20.2535C21.0721 20.2684 21.1259 20.2803 21.1766 20.2923H21.1826C21.2094 20.3013 21.2363 20.3072 21.2661 20.3132L21.299 20.3222C21.3646 20.3401 21.4303 20.355 21.4989 20.37C21.5348 20.3789 21.5706 20.3879 21.6094 20.3968C21.6452 20.4058 21.681 20.4148 21.7198 20.4207H21.7288C21.8004 20.4387 21.872 20.4536 21.9437 20.4685C21.9855 20.4775 22.0302 20.4865 22.072 20.4954C22.2242 20.5283 22.3735 20.5582 22.5257 20.588C22.5555 20.594 22.5854 20.6 22.6152 20.606L22.672 20.6149C22.7466 20.6299 22.8212 20.6418 22.8928 20.6537C22.9973 20.6717 23.0988 20.6896 23.2032 20.7045C23.3017 20.7195 23.3972 20.7344 23.4957 20.7493C23.5972 20.7643 23.6987 20.7792 23.8002 20.7912L23.8778 20.8031C23.9643 20.8151 24.0509 20.824 24.1345 20.836C24.2389 20.8479 24.3434 20.8599 24.4479 20.8718C24.6479 20.8927 24.8508 20.9136 25.0538 20.9286H25.0926C25.2836 20.9465 25.4746 20.9584 25.6656 20.9704C25.7044 20.9704 25.7462 20.9734 25.785 20.9764C25.9582 20.9853 26.1343 20.9913 26.3104 20.9973C26.3492 20.9973 26.388 20.9973 26.4238 21.0003C26.4894 21.0003 26.5581 21.0033 26.6238 21.0033C26.6566 21.0033 26.6894 21.0033 26.7252 21.0033C26.8178 21.0033 26.9103 21.0033 27.0028 21.0033C27.0953 21.0033 27.1879 21.0033 27.2804 21.0033C27.3132 21.0033 27.349 21.0033 27.3819 21.0033C27.4475 21.0033 27.5162 21.0033 27.5819 21.0003C27.6207 21.0003 27.6595 21.0003 27.6953 20.9973C27.8714 20.9943 28.0445 20.9853 28.2206 20.9764C28.2594 20.9764 28.3012 20.9734 28.34 20.9704C28.4116 20.9674 28.4832 20.9614 28.5549 20.9584C28.5907 20.9584 28.6295 20.9525 28.6653 20.9525C28.8325 20.9405 28.9996 20.9286 29.1668 20.9106H29.1697C29.1996 20.9106 29.2324 20.9047 29.2623 20.9017H29.2981C29.3399 20.8957 29.3817 20.8897 29.4205 20.8868L29.4712 20.8808C29.51 20.8778 29.5518 20.8718 29.5906 20.8688C29.6831 20.8599 29.7756 20.8479 29.8682 20.839C29.9488 20.83 30.0264 20.821 30.1069 20.8091H30.1368C30.1637 20.8031 30.1935 20.8001 30.2204 20.7941L30.2592 20.7882C30.295 20.7852 30.3308 20.7792 30.3636 20.7732L30.4383 20.7613C30.48 20.7553 30.5218 20.7493 30.5636 20.7434C30.6114 20.7374 30.6561 20.7284 30.7039 20.7225C30.7517 20.7165 30.7964 20.7075 30.8442 20.7015H30.8651C30.9457 20.6866 31.0263 20.6717 31.1098 20.6567C31.1844 20.6448 31.2591 20.6299 31.3307 20.6179C31.3695 20.6119 31.4083 20.603 31.4501 20.597C31.5128 20.585 31.5754 20.5731 31.6351 20.5611C31.6829 20.5522 31.7277 20.5432 31.7754 20.5343C31.8381 20.5223 31.9038 20.5074 31.9694 20.4954C32.0142 20.4865 32.059 20.4775 32.1067 20.4656C32.2172 20.4417 32.3246 20.4178 32.435 20.3909C32.5455 20.367 32.6529 20.3401 32.7604 20.3132C32.8022 20.3042 32.844 20.2923 32.8857 20.2833C32.9275 20.2744 32.9693 20.2624 33.0111 20.2505C33.0738 20.2355 33.1365 20.2176 33.2021 20.1997C33.232 20.1937 33.2588 20.1848 33.2887 20.1758C33.4499 20.131 33.6081 20.0892 33.7662 20.0414C33.811 20.0294 33.8528 20.0145 33.8976 20.0025H33.9035C33.9423 19.9876 33.9841 19.9786 34.0229 19.9637L34.0498 19.9547C34.0916 19.9428 34.1304 19.9308 34.1722 19.9159C34.211 19.904 34.2498 19.892 34.2886 19.8801L34.3095 19.8741H34.3125C34.3632 19.8562 34.4139 19.8412 34.4647 19.8233C34.5303 19.8024 34.593 19.7815 34.6587 19.7576C34.7273 19.7337 34.799 19.7098 34.8676 19.6859L34.9094 19.671C34.9661 19.653 35.0198 19.6321 35.0765 19.6112C35.2347 19.5545 35.3929 19.4977 35.5511 19.435C35.578 19.423 35.6078 19.4141 35.6377 19.4021C35.6944 19.3812 35.7511 19.3603 35.8078 19.3364C35.8466 19.3215 35.8824 19.3065 35.9212 19.2916C36.0227 19.2498 36.1242 19.2079 36.2257 19.1661C36.2734 19.1452 36.3242 19.1243 36.3719 19.1064L36.5182 19.0436C36.6465 18.9899 36.7719 18.9331 36.8972 18.8764C36.9569 18.8495 37.0136 18.8226 37.0733 18.7957C37.1927 18.7419 37.3121 18.6852 37.4285 18.6284C38.1329 20.827 38.5836 23.2496 38.6761 25.8007H38.6642Z" fill="#C5E5D0"/>'
        + '<path d="M38.6822 26.7565C38.6822 28.0081 38.6106 29.2299 38.4763 30.4158L38.4584 30.4039C38.3987 30.365 38.342 30.3262 38.2823 30.2844C38.2166 30.2426 38.1509 30.1978 38.0853 30.1559C38.0465 30.132 38.0107 30.1081 37.9719 30.0813C37.9152 30.0454 37.8584 30.0096 37.8017 29.9737C37.745 29.9379 37.6883 29.902 37.6316 29.8692C37.4077 29.7318 37.1839 29.6003 36.957 29.4719C36.8824 29.4301 36.8078 29.3882 36.7302 29.3464L36.6616 29.3106L36.5989 29.2777C36.4228 29.1851 36.2467 29.0925 36.0706 29.0059C36.0109 28.976 35.9542 28.9491 35.8945 28.9192C35.8348 28.8894 35.7751 28.8625 35.7184 28.8356C35.6557 28.8057 35.596 28.7788 35.5333 28.749C35.4169 28.6952 35.2975 28.6414 35.1811 28.5906C35.1364 28.5697 35.0886 28.5518 35.0438 28.5309C34.9901 28.507 34.9334 28.4831 34.8797 28.4592C34.7692 28.4144 34.6588 28.3666 34.5484 28.3248C34.4946 28.3039 34.4379 28.28 34.3812 28.2591C34.3245 28.2382 34.2708 28.2172 34.2141 28.1933C34.1006 28.1515 33.9902 28.1097 33.8768 28.0679C33.7634 28.0261 33.65 27.9872 33.5365 27.9484C33.4709 27.9275 33.4082 27.9036 33.3425 27.8827C33.259 27.8558 33.1784 27.8289 33.0948 27.802C33.0411 27.7841 32.9903 27.7692 32.9366 27.7542C32.8709 27.7333 32.8083 27.7154 32.7426 27.6975C32.6948 27.6825 32.6441 27.6676 32.5963 27.6556C32.5068 27.6288 32.4173 27.6049 32.3247 27.581C32.2919 27.572 32.2591 27.563 32.2262 27.5541C32.1576 27.5362 32.0889 27.5182 32.0203 27.5003C31.9457 27.4824 31.871 27.4645 31.7964 27.4465C31.7039 27.4226 31.6114 27.4017 31.5159 27.3808C31.4681 27.3689 31.4174 27.3569 31.3666 27.348C31.2114 27.3151 31.0562 27.2822 30.901 27.2524C30.8682 27.2464 30.8353 27.2404 30.8025 27.2344H30.7906C30.7249 27.2195 30.6622 27.2076 30.5966 27.1986C30.5428 27.1896 30.4891 27.1807 30.4354 27.1717C30.3846 27.1628 30.3309 27.1538 30.2772 27.1448C30.122 27.1179 29.9638 27.097 29.8056 27.0731C29.728 27.0642 29.6534 27.0522 29.5758 27.0433C29.5012 27.0343 29.4295 27.0253 29.3549 27.0164C29.2863 27.0074 29.2206 27.0014 29.1549 26.9955C29.0922 26.9895 29.0266 26.9805 28.9639 26.9775C28.9042 26.9716 28.8445 26.9656 28.7848 26.9596C28.7192 26.9537 28.6535 26.9477 28.5878 26.9447C28.5013 26.9387 28.4147 26.9327 28.3282 26.9268C28.2177 26.9208 28.1073 26.9118 27.9998 26.9088C27.961 26.9088 27.9222 26.9059 27.8864 26.9029C27.6834 26.8939 27.4775 26.8879 27.2716 26.8849C27.2357 26.8849 27.2029 26.8849 27.1671 26.8849C27.1134 26.8849 27.0596 26.8849 27.0059 26.8849C26.9522 26.8849 26.8985 26.8849 26.8447 26.8849C26.8089 26.8849 26.7761 26.8849 26.7403 26.8849C26.5343 26.8849 26.3314 26.8939 26.1254 26.9029C26.0866 26.9029 26.0478 26.9059 26.012 26.9088C25.9016 26.9148 25.7911 26.9208 25.6837 26.9268C25.5971 26.9327 25.5106 26.9387 25.424 26.9447C25.3583 26.9507 25.2927 26.9537 25.227 26.9596C25.1673 26.9656 25.1076 26.9686 25.0479 26.9775C24.9972 26.9835 24.9435 26.9865 24.8927 26.9925C24.836 26.9985 24.7793 27.0044 24.7196 27.0104C24.6211 27.0194 24.5256 27.0313 24.4301 27.0433C24.3883 27.0492 24.3435 27.0552 24.3017 27.0612C24.254 27.0672 24.2062 27.0731 24.1585 27.0821C24.0659 27.0941 23.9734 27.109 23.8779 27.1239C23.8391 27.1299 23.8003 27.1359 23.7615 27.1418C23.7257 27.1478 23.6869 27.1538 23.6511 27.1598C23.5735 27.1717 23.4929 27.1867 23.4153 27.2016C23.3466 27.2135 23.278 27.2255 23.2093 27.2404C23.1347 27.2554 23.0571 27.2703 22.9825 27.2852C22.9437 27.2942 22.9019 27.3002 22.8631 27.3091C22.7915 27.3241 22.7198 27.339 22.6482 27.3539C22.6064 27.3629 22.5616 27.3719 22.5228 27.3808C22.4452 27.3987 22.3706 27.4167 22.296 27.4346C22.2512 27.4436 22.2064 27.4555 22.1617 27.4675C22.0721 27.4884 21.9826 27.5123 21.893 27.5362C21.8662 27.5421 21.8393 27.5511 21.8125 27.5571C21.714 27.584 21.6155 27.6108 21.517 27.6377C21.4603 27.6527 21.4006 27.6706 21.3439 27.6885C21.2901 27.7034 21.2334 27.7184 21.1797 27.7363C21.0603 27.7721 20.9409 27.808 20.8245 27.8468C20.7379 27.8737 20.6514 27.9036 20.5678 27.9305C20.5201 27.9454 20.4753 27.9603 20.4305 27.9783C20.2723 28.032 20.1171 28.0858 19.9589 28.1455C19.8992 28.1665 19.8366 28.1904 19.7769 28.2143C19.7142 28.2382 19.6515 28.2621 19.5888 28.2859C19.5321 28.3098 19.4724 28.3308 19.4157 28.3547C19.3799 28.3696 19.3411 28.3845 19.3053 28.3995C19.1978 28.4443 19.0904 28.4891 18.9829 28.5339C18.9352 28.5548 18.8874 28.5757 18.8396 28.5966L18.7919 28.6175C18.6456 28.6803 18.4994 28.749 18.3531 28.8177C18.2875 28.8475 18.2248 28.8774 18.1621 28.9103C18.0964 28.9431 18.0278 28.976 17.9621 29.0089C17.8965 29.0417 17.8278 29.0746 17.7622 29.1074C17.7204 29.1283 17.6786 29.1522 17.6338 29.1732C17.5443 29.218 17.4547 29.2658 17.3652 29.3135C17.2607 29.3703 17.1563 29.4271 17.0548 29.4838C16.9891 29.5197 16.9234 29.5585 16.8608 29.5943C16.7981 29.6302 16.7324 29.669 16.6697 29.7049C16.625 29.7318 16.5832 29.7557 16.5384 29.7825C16.4787 29.8184 16.422 29.8542 16.3653 29.8871C16.3175 29.914 16.2728 29.9439 16.225 29.9737C16.0967 30.0544 15.9683 30.135 15.843 30.2187C15.7922 30.2515 15.7445 30.2844 15.6967 30.3173C15.643 30.3531 15.5893 30.3889 15.5355 30.4248C15.3982 29.2389 15.3296 28.0171 15.3296 26.7655C15.3296 26.7177 15.3296 26.6699 15.3296 26.6221H38.6912C38.6912 26.6699 38.6912 26.7177 38.6912 26.7655L38.6822 26.7565Z" fill="#C5E5D0"/>'
        + '<path d="M53.994 26.6161C53.994 26.3442 53.9821 26.0724 53.9702 25.8006C53.6926 19.5633 51.3018 13.8786 47.4992 9.4396C47.2784 9.17971 47.0515 8.92281 46.8157 8.67188C44.7771 6.46732 42.3774 4.6033 39.7061 3.1784C39.3897 3.00813 39.0673 2.84383 38.745 2.68849C35.1961 0.96487 31.2115 0 27 0C22.7885 0 18.8039 0.96487 15.252 2.68551C14.9267 2.84084 14.6073 3.00514 14.291 3.17541C11.6226 4.6033 9.21988 6.46732 7.1813 8.67188C6.94849 8.92281 6.72164 9.17971 6.49779 9.4396C2.69522 13.8756 0.304444 19.5633 0.0268627 25.8006C0.0149237 26.0724 0.00596949 26.3442 0.00298474 26.6161C0.00298474 26.7505 0 26.8879 0 27.0223C0 33.8661 2.543 40.1153 6.7306 44.8739C7.85883 46.1584 9.10944 47.3324 10.4615 48.3839V45.0562H43.5325V48.3839C44.8846 47.3354 46.1352 46.1584 47.2634 44.8739C51.454 40.1123 53.994 33.8631 53.994 27.0223C53.994 26.8879 53.994 26.7505 53.991 26.6161H53.994ZM44.013 13.9055C44.0638 13.8547 44.1145 13.8039 44.1623 13.7531C44.1981 13.7173 44.2309 13.6844 44.2638 13.6486L44.3294 13.5799C44.3802 13.5261 44.4339 13.4723 44.4846 13.4156C44.5443 13.4932 44.604 13.5739 44.6607 13.6516C44.6995 13.7053 44.7383 13.7561 44.7771 13.8099C44.807 13.8517 44.8398 13.8935 44.8697 13.9383C44.9055 13.9891 44.9413 14.0399 44.9771 14.0907C45.0249 14.1564 45.0696 14.2251 45.1144 14.2908C45.1592 14.3566 45.204 14.4223 45.2457 14.488C45.2816 14.5418 45.3174 14.5955 45.3532 14.6493C45.4069 14.7329 45.4606 14.8166 45.5144 14.9002C45.6338 15.0854 45.7472 15.2736 45.8606 15.4648C45.8994 15.5305 45.9382 15.5933 45.974 15.659C46.0069 15.7157 46.0397 15.7725 46.0725 15.8322C46.0994 15.88 46.1262 15.9248 46.1501 15.9726C46.1889 16.0443 46.2277 16.113 46.2665 16.1847C46.3023 16.2534 46.3411 16.3221 46.377 16.3879L46.4188 16.4685C46.4546 16.5402 46.4934 16.6119 46.5292 16.6836C46.5501 16.7254 46.574 16.7672 46.5948 16.812C46.6396 16.8987 46.6814 16.9823 46.7232 17.0689C46.753 17.1317 46.7829 17.1914 46.8127 17.2542C46.8396 17.3139 46.8694 17.3736 46.8963 17.4334C46.9112 17.4692 46.9291 17.5021 46.9441 17.5379C46.9948 17.6515 47.0455 17.765 47.0963 17.8785C47.1142 17.9203 47.1321 17.9651 47.153 18.0069C47.1799 18.0697 47.2067 18.1324 47.2306 18.1951C47.2575 18.2579 47.2843 18.3236 47.3082 18.3863C47.3321 18.4431 47.353 18.4998 47.3769 18.5566C47.4127 18.6492 47.4485 18.7418 47.4843 18.8344C47.4992 18.8792 47.5171 18.924 47.535 18.9658C47.5589 19.0315 47.5828 19.0973 47.6067 19.16C47.6216 19.1988 47.6335 19.2377 47.6485 19.2735C47.6634 19.3123 47.6753 19.3512 47.6903 19.39C47.7111 19.4468 47.729 19.5035 47.7499 19.5633V19.5692C47.7708 19.623 47.7887 19.6798 47.8067 19.7365C47.8514 19.871 47.8932 20.0054 47.935 20.1428C47.9559 20.2115 47.9768 20.2772 47.9977 20.3459C48.0186 20.4146 48.0365 20.4833 48.0574 20.549C48.0753 20.6148 48.0962 20.6835 48.1141 20.7492C48.132 20.8179 48.1499 20.8836 48.1678 20.9523C48.1827 21.0121 48.2006 21.0718 48.2156 21.1345C48.2365 21.2092 48.2544 21.2839 48.2723 21.3616C48.2872 21.4243 48.3021 21.484 48.317 21.5468C48.329 21.5976 48.3409 21.6483 48.3529 21.6961L48.3588 21.72C48.3678 21.7529 48.3738 21.7858 48.3797 21.8186V21.8395C48.3976 21.8933 48.4066 21.9471 48.4185 22.0008C48.4305 22.0606 48.4454 22.1233 48.4573 22.1831V22.201L48.4752 22.2697V22.2757C48.4842 22.3085 48.4902 22.3414 48.4961 22.3713C48.5111 22.4489 48.526 22.5266 48.5409 22.6072C48.5528 22.673 48.5648 22.7387 48.5767 22.8044C48.5827 22.8402 48.5887 22.8731 48.5946 22.9089C48.6006 22.9448 48.6066 22.9777 48.6125 23.0135C48.6245 23.0822 48.6364 23.1539 48.6454 23.2226C48.6513 23.2585 48.6573 23.2913 48.6603 23.3272C48.6663 23.36 48.6692 23.3959 48.6752 23.4317C48.6961 23.5751 48.714 23.7155 48.7319 23.8589C48.7409 23.9306 48.7498 23.9993 48.7588 24.071C48.7677 24.1427 48.7767 24.2114 48.7827 24.2831C48.8036 24.4623 48.8185 24.6385 48.8334 24.8178C48.8394 24.9074 48.8483 24.997 48.8543 25.0866C48.8603 25.1762 48.8662 25.2659 48.8692 25.3555C48.8782 25.4989 48.8841 25.6452 48.8901 25.7886H39.4971C39.4016 23.1031 38.9151 20.555 38.154 18.2429C38.4525 18.0876 38.745 17.9233 39.0345 17.756C39.1151 17.7112 39.1957 17.6634 39.2733 17.6156C39.3359 17.5768 39.4016 17.5379 39.4673 17.4991C39.5389 17.4543 39.6105 17.4125 39.6822 17.3677C39.8225 17.281 39.9657 17.1884 40.103 17.0958C40.1538 17.063 40.2015 17.0301 40.2523 16.9973L40.2732 16.9823C40.312 16.9554 40.3508 16.9315 40.3925 16.9046C40.4284 16.8808 40.4642 16.8569 40.497 16.833L40.5149 16.821H40.5179C40.5866 16.7702 40.6552 16.7224 40.7239 16.6746C40.7925 16.6268 40.8612 16.579 40.9268 16.5312C40.9805 16.4954 41.0313 16.4566 41.085 16.4177C41.1149 16.3968 41.1447 16.3759 41.1745 16.352L41.2104 16.3251C41.2641 16.2863 41.3178 16.2475 41.3686 16.2086C41.4193 16.1698 41.47 16.1339 41.5178 16.0951C41.5685 16.0593 41.6163 16.0204 41.667 15.9816C41.7387 15.9248 41.8133 15.8681 41.8819 15.8113C41.9416 15.7635 42.0043 15.7157 42.064 15.665C42.1267 15.6142 42.1894 15.5634 42.252 15.5096L42.3297 15.4439L42.3625 15.417C42.4043 15.3812 42.4461 15.3483 42.4878 15.3095L42.5237 15.2796C42.5893 15.2258 42.652 15.1691 42.7177 15.1123C42.7445 15.0884 42.7714 15.0645 42.7983 15.0406C42.9087 14.942 43.0221 14.8435 43.1296 14.7419C43.1803 14.6941 43.234 14.6463 43.2848 14.5985C43.3922 14.497 43.5027 14.3954 43.6071 14.2908C43.637 14.261 43.6668 14.2341 43.6967 14.2042C43.7355 14.1684 43.7713 14.1295 43.8101 14.0937C43.8489 14.0578 43.8847 14.019 43.9205 13.9832C43.9504 13.9533 43.9802 13.9234 44.0071 13.8935L44.013 13.9055ZM27.4059 11.1513H27.4298C27.579 11.1453 27.7283 11.1393 27.8745 11.1304H27.9402C27.979 11.1244 28.0178 11.1214 28.0566 11.1184C28.0894 11.1184 28.1193 11.1124 28.1521 11.1124C28.1969 11.1095 28.2417 11.1065 28.2864 11.1005C28.3312 11.0975 28.376 11.0915 28.4178 11.0885C28.4476 11.0885 28.4774 11.0826 28.5073 11.0796C28.5431 11.0766 28.5759 11.0736 28.6118 11.0676C28.6506 11.0646 28.6894 11.0587 28.7282 11.0557H28.755L28.8267 11.0437C28.8535 11.0437 28.8834 11.0378 28.9102 11.0318C28.9371 11.0288 28.9669 11.0258 28.9938 11.0198C29.0834 11.0079 29.1699 10.9929 29.2565 10.978C29.2863 10.975 29.3162 10.9691 29.346 10.9631C29.3729 10.9601 29.4027 10.9541 29.4296 10.9481C29.4564 10.9452 29.4863 10.9392 29.5132 10.9332C29.5937 10.9183 29.6743 10.9033 29.7549 10.8884C29.7937 10.8824 29.8325 10.8735 29.8683 10.8645C29.9131 10.8555 29.9579 10.8466 30.0056 10.8346C30.0683 10.8227 30.128 10.8077 30.1907 10.7928C30.2534 10.7779 30.3161 10.7629 30.3787 10.748C30.4265 10.736 30.4772 10.7241 30.525 10.7122C30.5727 10.7002 30.6235 10.6883 30.6712 10.6733H30.6742C30.725 10.6584 30.7757 10.6464 30.8264 10.6315C30.8802 10.6166 30.9339 10.6016 30.9876 10.5837C31.0413 10.5688 31.0981 10.5508 31.1518 10.5329L31.1906 10.521C31.2383 10.506 31.2861 10.4911 31.3338 10.4762C31.4353 10.4433 31.5368 10.4075 31.6383 10.3746L31.7129 10.3477C31.7935 10.3208 31.8741 10.291 31.9547 10.2581C31.9994 10.2402 32.0442 10.2252 32.089 10.2073C32.1487 10.1864 32.2054 10.1625 32.2621 10.1386C32.3099 10.1177 32.3576 10.0998 32.4084 10.0789L32.4352 10.0669C34.2798 11.8921 35.9483 14.5328 37.0974 17.6903C37.0496 17.7142 37.0019 17.7381 36.9541 17.759C36.9064 17.7829 36.8586 17.8038 36.8109 17.8277C36.7153 17.8725 36.6198 17.9173 36.5243 17.9621C36.4288 18.0069 36.3303 18.0517 36.2318 18.0936C36.1333 18.1354 36.0348 18.1772 35.9393 18.219C35.8916 18.2399 35.8408 18.2608 35.7901 18.2818C35.7393 18.3027 35.6916 18.3236 35.6408 18.3415C35.5961 18.3594 35.5483 18.3773 35.5035 18.3983C35.4498 18.4192 35.3961 18.4401 35.3453 18.461C35.2797 18.4879 35.211 18.5118 35.1454 18.5387C35.014 18.5894 34.8797 18.6402 34.7454 18.688C34.6469 18.7239 34.5454 18.7567 34.4469 18.7926C34.3634 18.8195 34.2798 18.8493 34.1962 18.8762C34.1544 18.8882 34.1156 18.9031 34.0738 18.915L34.05 18.921C34.0201 18.93 33.9933 18.9389 33.9634 18.9479L33.9425 18.9539C33.8918 18.9718 33.841 18.9867 33.7873 19.0017C33.6172 19.0554 33.45 19.1032 33.2799 19.154C33.1963 19.1779 33.1098 19.2018 33.0262 19.2257C32.9008 19.2586 32.7755 19.2944 32.6471 19.3243C32.6173 19.3333 32.5874 19.3392 32.5576 19.3482H32.5397C32.4531 19.3751 32.3666 19.396 32.283 19.4139L32.2561 19.4199C32.2084 19.4318 32.1576 19.4438 32.1099 19.4527L32.086 19.4587C32.0472 19.4677 32.0084 19.4766 31.9696 19.4856L31.9338 19.4916C31.886 19.5005 31.8383 19.5125 31.7935 19.5214C31.7338 19.5334 31.6771 19.5453 31.6174 19.5573C31.5756 19.5663 31.5368 19.5752 31.495 19.5812C31.4055 19.5991 31.3159 19.617 31.2234 19.632C31.1727 19.6409 31.1219 19.6499 31.0712 19.6589L31.0443 19.6648C31.0085 19.6708 30.9757 19.6768 30.9399 19.6828C30.8772 19.6947 30.8175 19.7037 30.7548 19.7126C30.716 19.7186 30.6742 19.7276 30.6354 19.7335L30.5787 19.7425C30.513 19.7544 30.4474 19.7634 30.3817 19.7724H30.3757C30.2772 19.7873 30.1788 19.8022 30.0803 19.8142C29.9997 19.8261 29.9191 19.8351 29.8355 19.8441H29.8057C29.7639 19.853 29.7221 19.859 29.6803 19.862L29.6355 19.868C29.6087 19.868 29.5818 19.8739 29.5549 19.8769H29.537C29.4654 19.8859 29.3967 19.8948 29.3281 19.9008C29.2684 19.9068 29.2117 19.9128 29.152 19.9187C29.0953 19.9247 29.0356 19.9307 28.9759 19.9337C28.9281 19.9367 28.8804 19.9426 28.8356 19.9456H28.8117C28.77 19.9516 28.7252 19.9546 28.6834 19.9576H28.6715C28.6207 19.9606 28.567 19.9665 28.5133 19.9695C28.3431 19.9815 28.173 19.9904 27.9999 19.9964C27.9641 19.9964 27.9283 19.9994 27.8924 19.9994H27.8298C27.7641 20.0054 27.6954 20.0054 27.6298 20.0084C27.5581 20.0084 27.4865 20.0114 27.4149 20.0143V11.1423L27.4059 11.1513ZM30.3996 9.63078C30.3549 9.64273 30.3101 9.65468 30.2653 9.66663C30.2355 9.67559 30.2026 9.68156 30.1698 9.69052C30.137 9.69949 30.1011 9.70845 30.0683 9.71442C29.734 9.79508 29.3967 9.86378 29.0505 9.91755C28.9998 9.92651 28.949 9.93249 28.8953 9.94145C28.8446 9.94742 28.7908 9.95639 28.7401 9.96236C28.6894 9.96834 28.6356 9.9773 28.5849 9.98327C28.5342 9.98925 28.4804 9.99522 28.4297 10.0012L28.3252 10.0131C28.2834 10.0161 28.2446 10.0221 28.2029 10.0251C28.0864 10.037 27.97 10.046 27.8536 10.052C27.8178 10.052 27.785 10.055 27.7492 10.058H27.7283C27.6835 10.0609 27.6387 10.0639 27.594 10.0669C27.5313 10.0669 27.4686 10.0729 27.4059 10.0729V7.36348C28.761 7.477 30.1847 8.14912 31.5428 9.26634C31.1697 9.40674 30.7876 9.52921 30.3996 9.63377V9.63078ZM26.5911 10.0729C26.5284 10.0729 26.4657 10.0699 26.4031 10.0669C26.3583 10.0669 26.3135 10.0639 26.2687 10.0609H26.2478C26.212 10.058 26.1792 10.055 26.1434 10.055C26.027 10.049 25.9106 10.037 25.7942 10.0281C25.7524 10.0251 25.7136 10.0221 25.6718 10.0161L25.5673 10.0042C25.5166 9.99821 25.4629 9.99223 25.4121 9.98626C25.3614 9.98028 25.3076 9.97431 25.2569 9.96535C25.2062 9.95937 25.1524 9.95041 25.1017 9.94444C25.051 9.93846 24.9972 9.9295 24.9465 9.92054C24.6033 9.86677 24.263 9.79806 23.9287 9.71741C23.8959 9.70845 23.86 9.69949 23.8272 9.69351C23.7944 9.68455 23.7645 9.67858 23.7317 9.66961C23.6869 9.65766 23.6422 9.64572 23.5944 9.63377C23.2064 9.52921 22.8243 9.40674 22.4513 9.26634C23.8093 8.14912 25.233 7.477 26.5881 7.36348V10.0729H26.5911ZM22.5557 10.4463C22.6512 10.4791 22.7467 10.509 22.8452 10.5389C22.899 10.5568 22.9557 10.5718 23.0094 10.5897C23.1198 10.6225 23.2303 10.6524 23.3407 10.6823C23.3914 10.6942 23.4422 10.7092 23.4929 10.7211C23.5377 10.7331 23.5825 10.745 23.6272 10.754C23.6601 10.7629 23.6959 10.7719 23.7287 10.7779C23.7765 10.7898 23.8242 10.8018 23.875 10.8107C23.9735 10.8346 24.069 10.8555 24.1675 10.8735C24.2302 10.8854 24.2928 10.9003 24.3585 10.9093C24.5734 10.9511 24.7883 10.987 25.0062 11.0168C25.0331 11.0198 25.0629 11.0258 25.0898 11.0288C25.1166 11.0318 25.1465 11.0378 25.1733 11.0407L25.245 11.0497H25.2718C25.3106 11.0587 25.3494 11.0617 25.3882 11.0676C25.4211 11.0706 25.4569 11.0766 25.4927 11.0796C25.5226 11.0826 25.5524 11.0856 25.5822 11.0885C25.627 11.0945 25.6718 11.0975 25.7166 11.1005C25.7613 11.1035 25.8061 11.1095 25.8509 11.1124C25.8837 11.1124 25.9136 11.1184 25.9464 11.1184C25.9852 11.1184 26.024 11.1244 26.0628 11.1274H26.1285C26.2747 11.1423 26.4239 11.1483 26.5732 11.1513H26.5971V20.0263C26.5254 20.0263 26.4538 20.0263 26.3822 20.0203C26.3135 20.0203 26.2478 20.0173 26.1822 20.0143H26.1195C26.0837 20.0114 26.0479 20.0084 26.0121 20.0084C25.9434 20.0054 25.8748 20.0024 25.8031 19.9994C25.7703 19.9994 25.7375 19.9964 25.7046 19.9934H25.6807C25.621 19.9904 25.5643 19.9845 25.5046 19.9815C25.4748 19.9815 25.4479 19.9785 25.4181 19.9755H25.3853C25.3166 19.9695 25.2509 19.9636 25.1823 19.9576H25.1286C25.0569 19.9486 24.9853 19.9426 24.9137 19.9337L24.845 19.9277C24.7585 19.9187 24.6719 19.9098 24.5853 19.9008H24.5436L24.466 19.8889C24.3883 19.8799 24.3078 19.871 24.2302 19.862C24.1317 19.85 24.0332 19.8381 23.9317 19.8232C23.8451 19.8112 23.7586 19.7993 23.672 19.7873C23.5407 19.7694 23.4123 19.7485 23.281 19.7276C23.2153 19.7156 23.1467 19.7067 23.081 19.6947L23.0154 19.6828C22.9378 19.6678 22.8572 19.6559 22.7796 19.6409C22.7527 19.635 22.7258 19.629 22.699 19.626C22.6124 19.6081 22.5259 19.5931 22.4393 19.5752C22.3647 19.5603 22.2931 19.5453 22.2184 19.5304C22.1796 19.5214 22.1379 19.5155 22.099 19.5035H22.0782C22.0035 19.4826 21.9259 19.4677 21.8513 19.4498C21.7707 19.4318 21.6872 19.4109 21.6066 19.393L21.5737 19.384C21.5319 19.3751 21.4902 19.3631 21.4514 19.3542H21.4424C21.4155 19.3452 21.3887 19.3392 21.3618 19.3333L21.3439 19.3273C21.2902 19.3153 21.2394 19.3004 21.1857 19.2855C21.1409 19.2735 21.0962 19.2616 21.0484 19.2496C21.0066 19.2377 20.9648 19.2287 20.9231 19.2168C20.8634 19.2018 20.8037 19.1839 20.744 19.169C20.6843 19.151 20.6246 19.1361 20.5649 19.1182C20.4992 19.1003 20.4365 19.0823 20.3739 19.0614C20.2903 19.0375 20.2067 19.0106 20.1231 18.9837C20.0276 18.9539 19.9351 18.924 19.8396 18.8941C19.7441 18.8643 19.6516 18.8314 19.559 18.7985C19.4874 18.7746 19.4128 18.7478 19.3411 18.7209C19.3143 18.7119 19.2874 18.7 19.2606 18.691C19.0994 18.6342 18.9382 18.5745 18.78 18.5118C18.7263 18.4909 18.6696 18.4699 18.6159 18.449C18.5741 18.4341 18.5323 18.4162 18.4875 18.3983C18.4457 18.3803 18.4009 18.3654 18.3592 18.3475C18.2726 18.3146 18.189 18.2788 18.1055 18.2429H18.0995L18.0428 18.216H18.0338V18.2101C17.9801 18.1891 17.9264 18.1653 17.8727 18.1414C17.7294 18.0816 17.5891 18.0189 17.4488 17.9532C17.3832 17.9233 17.3175 17.8934 17.2518 17.8606L17.2279 17.8486L17.1832 17.8277H17.1742V17.8217C17.1294 17.8008 17.0877 17.7829 17.0459 17.762C17.0011 17.7411 16.9534 17.7172 16.9086 17.6963C18.0547 14.5388 19.7232 11.8981 21.5707 10.0729L21.6006 10.0848C21.6424 10.1028 21.6842 10.1207 21.723 10.1356C21.908 10.2103 22.0931 10.282 22.2811 10.3477C22.3289 10.3656 22.3766 10.3806 22.4244 10.3985C22.4721 10.4164 22.5199 10.4314 22.5677 10.4463H22.5557ZM17.1772 18.9091C17.2638 18.9509 17.3533 18.9897 17.4428 19.0256L17.4966 19.0495C17.5861 19.0883 17.6727 19.1271 17.7622 19.163L17.7891 19.1749C17.8876 19.2138 17.9861 19.2556 18.0846 19.2944C18.1383 19.3153 18.192 19.3362 18.2457 19.3572C18.398 19.4169 18.5502 19.4737 18.7024 19.5304L18.78 19.5573L18.8487 19.5812C18.9173 19.6051 18.986 19.632 19.0546 19.6559C19.1143 19.6768 19.171 19.6977 19.2307 19.7186C19.2725 19.7335 19.3113 19.7455 19.3531 19.7604C19.4128 19.7813 19.4695 19.7993 19.5292 19.8202C19.568 19.8321 19.6068 19.8441 19.6456 19.859H19.6516C19.7083 19.8799 19.765 19.8978 19.8217 19.9158C19.8963 19.9397 19.9709 19.9636 20.0455 19.9845C20.1142 20.0054 20.1799 20.0263 20.2485 20.0442C20.4007 20.089 20.553 20.1308 20.7052 20.1727C20.741 20.1816 20.7768 20.1936 20.8126 20.2025C20.8813 20.2205 20.9469 20.2384 21.0156 20.2563C21.0663 20.2712 21.1201 20.2832 21.1708 20.2951H21.1768C21.2036 20.3041 21.2305 20.3101 21.2603 20.316L21.2932 20.325C21.3588 20.3429 21.4245 20.3579 21.4931 20.3728C21.529 20.3818 21.5648 20.3907 21.6036 20.3997C21.6394 20.4087 21.6752 20.4176 21.714 20.4236H21.723C21.7946 20.4415 21.8662 20.4564 21.9379 20.4714C21.9797 20.4803 22.0244 20.4893 22.0662 20.4983C22.2184 20.5311 22.3677 20.561 22.5199 20.5909C22.5497 20.5968 22.5796 20.6028 22.6094 20.6088L22.6662 20.6178C22.7408 20.6327 22.8154 20.6446 22.887 20.6566C22.9915 20.6745 23.093 20.6924 23.1974 20.7074C23.2959 20.7223 23.3914 20.7372 23.4899 20.7522C23.5914 20.7671 23.6929 20.7821 23.7944 20.794L23.872 20.806C23.9585 20.8179 24.0451 20.8269 24.1287 20.8388C24.2331 20.8508 24.3376 20.8627 24.4421 20.8747C24.6421 20.8956 24.845 20.9165 25.048 20.9314H25.0868C25.2778 20.9493 25.4688 20.9613 25.6598 20.9732C25.6987 20.9732 25.7404 20.9762 25.7792 20.9792C25.9524 20.9882 26.1285 20.9941 26.3046 21.0001C26.3434 21.0001 26.3822 21.0001 26.418 21.0031C26.4747 21.0031 26.5314 21.0031 26.5881 21.0061V25.8036H15.3356C15.4252 23.2525 15.8788 20.8298 16.5832 18.6313L16.6071 18.6402C16.6967 18.685 16.7892 18.7298 16.8817 18.7717C16.9802 18.8195 17.0817 18.8643 17.1832 18.9091H17.1772ZM27.4059 21.0061C27.4626 21.0061 27.5193 21.0061 27.5761 21.0031C27.6149 21.0031 27.6537 21.0031 27.6895 21.0001C27.8656 20.9971 28.0387 20.9882 28.2148 20.9792C28.2536 20.9792 28.2954 20.9762 28.3342 20.9732C28.4058 20.9702 28.4774 20.9643 28.5491 20.9613C28.5849 20.9613 28.6237 20.9553 28.6595 20.9553C28.8267 20.9434 28.9938 20.9314 29.161 20.9135H29.1639C29.1938 20.9135 29.2266 20.9075 29.2565 20.9045H29.2923C29.3341 20.8986 29.3759 20.8926 29.4147 20.8896L29.4654 20.8836C29.5042 20.8806 29.546 20.8747 29.5848 20.8717C29.6773 20.8627 29.7698 20.8508 29.8624 20.8418C29.943 20.8328 30.0206 20.8239 30.1011 20.8119H30.131C30.1579 20.806 30.1877 20.803 30.2146 20.797L30.2534 20.791C30.2892 20.788 30.325 20.7821 30.3578 20.7761L30.4325 20.7641C30.4742 20.7582 30.516 20.7522 30.5578 20.7462C30.6056 20.7402 30.6503 20.7313 30.6981 20.7253C30.7459 20.7193 30.7906 20.7104 30.8384 20.7044H30.8593C30.9399 20.6894 31.0205 20.6745 31.104 20.6596C31.1786 20.6476 31.2533 20.6327 31.3249 20.6207C31.3637 20.6148 31.4025 20.6058 31.4443 20.5998C31.507 20.5879 31.5696 20.5759 31.6293 20.564C31.6771 20.555 31.7219 20.5461 31.7696 20.5371C31.8323 20.5252 31.898 20.5102 31.9636 20.4983C32.0084 20.4893 32.0532 20.4803 32.1009 20.4684C32.2114 20.4445 32.3188 20.4206 32.4292 20.3937C32.5397 20.3698 32.6471 20.3429 32.7546 20.316C32.7964 20.3071 32.8382 20.2951 32.8799 20.2862C32.9217 20.2772 32.9635 20.2653 33.0053 20.2533C33.068 20.2384 33.1307 20.2205 33.1963 20.2025C33.2262 20.1966 33.253 20.1876 33.2829 20.1786C33.4441 20.1338 33.6023 20.092 33.7604 20.0442C33.8052 20.0323 33.847 20.0173 33.8918 20.0054H33.8977C33.9365 19.9904 33.9783 19.9815 34.0171 19.9665L34.044 19.9576C34.0858 19.9456 34.1246 19.9337 34.1664 19.9187C34.2052 19.9068 34.244 19.8948 34.2828 19.8829L34.3037 19.8769H34.3067C34.3574 19.859 34.4081 19.8441 34.4589 19.8261C34.5245 19.8052 34.5872 19.7843 34.6529 19.7604C34.7215 19.7365 34.7932 19.7126 34.8618 19.6887L34.9036 19.6738C34.9603 19.6559 35.014 19.635 35.0707 19.6141C35.2289 19.5573 35.3871 19.5005 35.5453 19.4378C35.5722 19.4259 35.602 19.4169 35.6319 19.4049C35.6886 19.384 35.7453 19.3631 35.802 19.3392C35.8408 19.3243 35.8766 19.3094 35.9154 19.2944C36.0169 19.2526 36.1184 19.2108 36.2199 19.169C36.2676 19.148 36.3184 19.1271 36.3661 19.1092L36.5124 19.0465C36.6407 18.9927 36.7661 18.936 36.8914 18.8792C36.9511 18.8523 37.0079 18.8254 37.0675 18.7985C37.1869 18.7448 37.3063 18.688 37.4227 18.6313C38.1271 20.8298 38.5778 23.2525 38.6703 25.8036H27.4119V21.0061H27.4059ZM36.0826 7.84443C36.1482 7.78767 36.2139 7.7339 36.2796 7.67714C36.4467 7.53077 36.6079 7.38439 36.7661 7.22906C36.8198 7.17828 36.8735 7.12451 36.9273 7.07372C39.6076 8.44187 41.9715 10.3447 43.8728 12.6419C43.819 12.7016 43.7623 12.7584 43.7086 12.8181C43.6728 12.857 43.637 12.8928 43.6012 12.9317C43.5713 12.9615 43.5415 12.9944 43.5116 13.0243C43.4847 13.0511 43.4579 13.081 43.431 13.1079C43.3922 13.1497 43.3534 13.1915 43.3116 13.2304C43.243 13.2991 43.1743 13.3678 43.1057 13.4335L43.0311 13.5052C42.9714 13.562 42.9147 13.6187 42.855 13.6755C42.7863 13.7442 42.7147 13.8099 42.643 13.8726C42.5207 13.9861 42.3983 14.0997 42.2729 14.2102C42.2341 14.246 42.1953 14.2789 42.1565 14.3147L42.1476 14.3207C42.1147 14.3506 42.0789 14.3805 42.0431 14.4103L42.0163 14.4342L41.9506 14.491C41.8252 14.5985 41.6969 14.7061 41.5685 14.8106L41.4969 14.8704L41.4879 14.8793C41.4342 14.9241 41.3805 14.9659 41.3268 15.0108C41.2522 15.0705 41.1745 15.1302 41.0999 15.19C41.0373 15.2408 40.9716 15.2886 40.9089 15.3364L40.8343 15.3931L40.8044 15.414C40.7716 15.4379 40.7388 15.4648 40.7059 15.4887L40.6821 15.5066C40.6403 15.5365 40.5985 15.5694 40.5567 15.5992L40.5269 15.6201L40.4463 15.6799C40.3717 15.7337 40.297 15.7874 40.2224 15.8412C40.1747 15.8741 40.1269 15.9069 40.0792 15.9398C40.0165 15.9846 39.9538 16.0264 39.8881 16.0712C39.7538 16.1638 39.6165 16.2534 39.4792 16.3431C39.4225 16.3789 39.3658 16.4177 39.3061 16.4536C39.2434 16.4954 39.1807 16.5342 39.1181 16.5731H39.1151L39.0524 16.6149C38.9897 16.6537 38.93 16.6896 38.8703 16.7284C38.8017 16.7702 38.733 16.812 38.6644 16.8539C38.5271 16.9345 38.3868 17.0152 38.2465 17.0958C38.1928 17.1257 38.1391 17.1556 38.0853 17.1854L38.0137 17.2243L37.9331 17.2691C37.8973 17.29 37.8585 17.3109 37.8227 17.3288C36.6706 14.2371 35.029 11.6173 33.2023 9.73235C33.2471 9.71144 33.2889 9.69052 33.3306 9.66663C33.3754 9.64572 33.4172 9.62182 33.459 9.60091C33.4948 9.58298 33.5276 9.56506 33.5605 9.54714C33.6291 9.51129 33.6978 9.47246 33.7664 9.43661C33.8172 9.40973 33.8649 9.38284 33.9157 9.35297C33.9843 9.31413 34.0559 9.27231 34.1246 9.23348L34.1932 9.19166C34.244 9.16179 34.2917 9.13192 34.3425 9.10204C34.3902 9.07217 34.438 9.04529 34.4828 9.01541C34.6021 8.94073 34.7215 8.86307 34.8379 8.7854C34.9096 8.7376 34.9812 8.68682 35.0528 8.63604C35.0976 8.60616 35.1394 8.57629 35.1842 8.54343C35.22 8.51655 35.2588 8.48966 35.2946 8.46278C35.3215 8.44187 35.3483 8.42395 35.3752 8.40303L35.4558 8.34329C35.4976 8.31342 35.5394 8.28056 35.5811 8.2477L35.605 8.22978C35.6587 8.18795 35.7125 8.14613 35.7662 8.10133L35.808 8.06847C35.8677 8.02067 35.9274 7.97288 35.9841 7.92508C36.0139 7.90118 36.0468 7.8743 36.0766 7.84741L36.0826 7.84443ZM35.7095 6.73617L35.6647 6.77799C35.608 6.82877 35.5513 6.87956 35.4946 6.92735H35.4916C35.4379 6.97813 35.3812 7.02294 35.3274 7.07074L35.2767 7.11256C35.217 7.16334 35.1573 7.21114 35.0946 7.25893C35.0409 7.30075 34.9872 7.34257 34.9335 7.38439L34.8588 7.44115L34.823 7.46804C34.7812 7.5009 34.7365 7.53376 34.6947 7.56363L34.6201 7.6174C34.5663 7.65623 34.5156 7.69208 34.4619 7.73091L34.435 7.74884C34.3753 7.79066 34.3126 7.83248 34.2499 7.8743C34.2082 7.90118 34.1664 7.93105 34.1246 7.95794C34.0858 7.98482 34.047 8.00872 34.0052 8.03561H33.9962C33.9545 8.06847 33.9127 8.09236 33.8679 8.11925C33.7784 8.17601 33.6888 8.22978 33.5963 8.28355C33.5575 8.30744 33.5187 8.32835 33.4799 8.35225C33.2142 8.5046 32.9426 8.65097 32.665 8.7854C32.6322 8.80033 32.6024 8.81527 32.5695 8.83319C32.5397 8.84813 32.5069 8.86307 32.477 8.878C32.4412 8.89592 32.4024 8.91385 32.3666 8.92878C30.7518 7.50388 29.0356 6.64357 27.4059 6.52109V4.70486C30.4205 4.75863 33.2889 5.42478 35.8856 6.58083C35.8289 6.6346 35.7692 6.68837 35.7095 6.74214V6.73617ZM26.5911 4.69889V6.51511C24.9614 6.64058 23.2422 7.49791 21.6304 8.9258C21.5916 8.91086 21.5558 8.89294 21.517 8.87501C21.2305 8.74059 20.9499 8.60019 20.6753 8.44486C20.6425 8.42693 20.6126 8.40901 20.5798 8.39109L20.5112 8.35225C20.4753 8.33134 20.4395 8.31043 20.4007 8.28952C20.3082 8.23575 20.2157 8.17899 20.1231 8.12224C20.0366 8.06847 19.953 8.0147 19.8694 7.96093C19.8277 7.93404 19.7859 7.90716 19.7441 7.87729C19.6814 7.83546 19.6217 7.79364 19.559 7.75182L19.5322 7.7339C19.4784 7.69805 19.4247 7.65922 19.374 7.62038L19.2994 7.56661C19.2576 7.53674 19.2128 7.50388 19.171 7.47102L19.1352 7.44414L19.0606 7.38738C19.0069 7.34556 18.9531 7.30374 18.8994 7.26192C18.8367 7.21412 18.777 7.16334 18.7173 7.11555L18.6666 7.07372C18.6129 7.02892 18.5562 6.98112 18.5024 6.93631H18.4994C18.4427 6.88254 18.383 6.83475 18.3293 6.78396L18.2845 6.74214C18.2248 6.68837 18.1681 6.6346 18.1084 6.58083C20.7082 5.42478 23.5735 4.75863 26.5881 4.70486L26.5911 4.69889ZM17.0698 7.07074C17.1384 7.13944 17.2071 7.20516 17.2757 7.27088L17.3563 7.34556L17.3861 7.37543C17.419 7.40531 17.4518 7.43518 17.4846 7.46505C17.5503 7.52479 17.616 7.58454 17.6846 7.64428C17.7204 7.67415 17.7533 7.70403 17.7891 7.7339L17.8428 7.77871L17.8965 7.82352C17.9323 7.85339 17.9682 7.88326 18.004 7.91612C18.0577 7.96093 18.1114 8.00574 18.1681 8.05054C18.2219 8.09535 18.2786 8.13717 18.3353 8.18198C18.4039 8.23575 18.4726 8.28653 18.5412 8.3403C18.583 8.37018 18.6218 8.40005 18.6636 8.42992C18.7143 8.46875 18.7681 8.5046 18.8188 8.54343C18.8696 8.57928 18.9203 8.61513 18.971 8.65097C19.0128 8.68085 19.0546 8.70773 19.0994 8.7376C19.2546 8.84216 19.4098 8.94372 19.571 9.0423L19.6008 9.06022C19.6754 9.10503 19.7501 9.15283 19.8247 9.19465C19.8814 9.22751 19.9381 9.26335 19.9978 9.29621C20.0366 9.32011 20.0754 9.34102 20.1172 9.36193C20.156 9.38583 20.1978 9.40674 20.2366 9.42765C20.2873 9.45453 20.3351 9.48142 20.3858 9.5083C20.4395 9.53818 20.4933 9.56506 20.547 9.59195C20.6306 9.63675 20.7141 9.67858 20.7977 9.7204C18.9681 11.6083 17.3264 14.2251 16.1773 17.3169L16.1475 17.299C16.0997 17.2721 16.049 17.2482 16.0012 17.2183L15.9863 17.2093C15.9564 17.1944 15.9266 17.1765 15.8967 17.1586H15.8908C15.855 17.1347 15.8162 17.1138 15.7803 17.0928C15.5565 16.9674 15.3326 16.8389 15.1147 16.7045C15.0819 16.6866 15.0521 16.6657 15.0192 16.6477C14.8819 16.5641 14.7446 16.4775 14.6103 16.3908C14.5536 16.355 14.4969 16.3192 14.4402 16.2803C14.3865 16.2475 14.3327 16.2116 14.279 16.1758C14.2223 16.1399 14.1686 16.1011 14.1119 16.0623C14.0552 16.0264 14.0014 15.9876 13.9447 15.9487C13.8671 15.898 13.7925 15.8442 13.7179 15.7904C13.6492 15.7426 13.5806 15.6948 13.5149 15.644C13.4821 15.6201 13.4463 15.5962 13.4134 15.5724C13.3776 15.5455 13.3388 15.5186 13.303 15.4887C13.2642 15.4618 13.2254 15.432 13.1866 15.4021C13.1508 15.3752 13.115 15.3483 13.0762 15.3184C13.0403 15.2916 13.0045 15.2647 12.9687 15.2348C12.9419 15.2139 12.915 15.193 12.8881 15.1721C12.8344 15.1302 12.7807 15.0854 12.727 15.0436L12.6673 14.9958L12.6135 14.954C12.5598 14.9092 12.5061 14.8674 12.4524 14.8226L12.4404 14.8106C12.3688 14.7539 12.3001 14.6941 12.2315 14.6374C12.1628 14.5806 12.0972 14.5238 12.0285 14.4641C11.9808 14.4253 11.936 14.3864 11.8912 14.3446C11.8435 14.3058 11.7987 14.264 11.7539 14.2221C11.7092 14.1833 11.6614 14.1415 11.6166 14.0997C11.5719 14.0578 11.5271 14.019 11.4823 13.9772C11.4286 13.9264 11.3719 13.8756 11.3182 13.8248C11.2525 13.7621 11.1868 13.6994 11.1212 13.6366L11.0734 13.5918C11.0197 13.541 10.9689 13.4903 10.9182 13.4395C10.8585 13.3797 10.7988 13.32 10.7391 13.2602C10.6794 13.2005 10.6227 13.1408 10.563 13.081L10.5093 13.0243C10.4496 12.9645 10.3929 12.9048 10.3362 12.842C10.2705 12.7733 10.2048 12.7016 10.1392 12.6299C12.0405 10.3328 14.4044 8.42992 17.0847 7.06178L17.0698 7.07074ZM5.13078 25.3644C5.13675 25.2748 5.14271 25.1852 5.14868 25.0956C5.15465 25.006 5.16062 24.9164 5.16958 24.8267C5.1845 24.6475 5.19943 24.4683 5.22032 24.292C5.22629 24.2203 5.23524 24.1486 5.2442 24.0799C5.25315 24.0082 5.2621 23.9366 5.27106 23.8678C5.28897 23.7245 5.30688 23.5841 5.32777 23.4407C5.33374 23.4048 5.33672 23.372 5.34269 23.3361C5.34866 23.3003 5.35463 23.2674 5.35762 23.2316C5.36956 23.1599 5.37851 23.0912 5.39045 23.0225C5.40239 22.9538 5.41433 22.8821 5.42627 22.8134C5.4382 22.7447 5.45014 22.6789 5.46208 22.6102C5.46805 22.5774 5.47402 22.5415 5.47999 22.5087C5.48596 22.4668 5.49492 22.428 5.50387 22.3862C5.51282 22.3354 5.52178 22.2846 5.53372 22.2368V22.2279L5.54267 22.195V22.189C5.55461 22.1293 5.56953 22.0666 5.58147 22.0068C5.59938 21.9232 5.61729 21.8365 5.63818 21.7529C5.65311 21.6902 5.66803 21.6244 5.68295 21.5617C5.69788 21.499 5.7128 21.4363 5.72773 21.3705C5.74563 21.2959 5.76354 21.2212 5.78443 21.1435C5.79936 21.0838 5.81428 21.024 5.83219 20.9613C5.8501 20.8926 5.86801 20.8269 5.88592 20.7582C5.89786 20.7163 5.90979 20.6745 5.92173 20.6327C5.93367 20.5909 5.94561 20.549 5.95755 20.5072C5.96949 20.4654 5.98143 20.4236 5.99337 20.3818C6.00531 20.3399 6.01724 20.2981 6.03217 20.2563C6.05605 20.1727 6.08291 20.089 6.10977 20.0084C6.12171 19.9665 6.13663 19.9247 6.14857 19.8829C6.18141 19.7813 6.21424 19.6828 6.24707 19.5812C6.26796 19.5214 6.28587 19.4617 6.30677 19.402C6.32766 19.3452 6.34557 19.2884 6.36646 19.2317C6.38735 19.1749 6.40526 19.1182 6.42914 19.0614C6.45003 19.0047 6.47093 18.9509 6.49182 18.8941C6.53361 18.7806 6.57539 18.6701 6.62016 18.5596C6.64106 18.5028 6.66493 18.449 6.68583 18.3923C6.76343 18.2011 6.84402 18.0099 6.92759 17.8217C6.94252 17.7859 6.95744 17.753 6.97236 17.7172C6.98729 17.6813 7.00221 17.6485 7.02012 17.6126C7.07384 17.4931 7.12757 17.3766 7.18428 17.2571C7.21413 17.1944 7.24398 17.1317 7.27382 17.0719C7.30367 17.0092 7.33352 16.9495 7.36337 16.8867C7.40814 16.7941 7.45589 16.7015 7.50066 16.6119C7.52454 16.5671 7.54842 16.5193 7.5723 16.4745C7.59618 16.4297 7.62005 16.3819 7.64393 16.3371C7.70661 16.2176 7.77227 16.0951 7.84092 15.9756C7.8648 15.9308 7.88868 15.889 7.91554 15.8442C7.95434 15.7725 7.99613 15.7038 8.03493 15.6351C8.04986 15.6082 8.06776 15.5783 8.08269 15.5514C8.1394 15.4529 8.19611 15.3573 8.2558 15.2617C8.28864 15.2049 8.32445 15.1512 8.35728 15.0944C8.39012 15.0406 8.42295 14.9869 8.45877 14.9331C8.49757 14.8704 8.53637 14.8106 8.57816 14.7479C8.608 14.7001 8.64084 14.6493 8.67367 14.6015C8.70949 14.5477 8.7453 14.491 8.78112 14.4372C8.8438 14.3416 8.90946 14.249 8.97513 14.1534C9.00497 14.1086 9.03781 14.0668 9.06765 14.022C9.10646 13.9682 9.14227 13.9144 9.18107 13.8607C9.2348 13.783 9.29151 13.7083 9.34523 13.6336C9.39896 13.559 9.45567 13.4843 9.51238 13.4096C9.63177 13.5351 9.75116 13.6605 9.87055 13.786C9.90637 13.8218 9.94218 13.8607 9.978 13.8965C10.0884 14.01 10.2019 14.1206 10.3153 14.2311C10.3481 14.2639 10.3809 14.2968 10.4138 14.3267C10.4794 14.3894 10.5451 14.4521 10.6108 14.5149C10.7272 14.6254 10.8436 14.7329 10.963 14.8405C11.0018 14.8763 11.0436 14.9122 11.0824 14.948C11.1928 15.0466 11.3032 15.1422 11.4137 15.2378C11.4793 15.2945 11.548 15.3513 11.6136 15.4081C11.6942 15.4768 11.7748 15.5455 11.8584 15.6112C11.9211 15.665 11.9867 15.7157 12.0524 15.7665C12.1151 15.8173 12.1778 15.8681 12.2434 15.9159C12.3061 15.9667 12.3688 16.0145 12.4344 16.0652C12.5628 16.1638 12.6941 16.2624 12.8225 16.358C12.8553 16.3819 12.8881 16.4058 12.918 16.4297C12.9687 16.4655 13.0165 16.5014 13.0672 16.5372C13.1209 16.5761 13.1776 16.6149 13.2314 16.6537C13.3269 16.7194 13.4224 16.7881 13.5179 16.8509C13.5597 16.8808 13.6045 16.9076 13.6463 16.9375L13.6731 16.9554C13.7149 16.9853 13.7597 17.0122 13.8015 17.0421H13.8044C13.8641 17.0839 13.9268 17.1257 13.9865 17.1645C14.0373 17.1974 14.088 17.2303 14.1387 17.2631C14.1925 17.299 14.2492 17.3348 14.3059 17.3677C14.3417 17.3916 14.3805 17.4155 14.4163 17.4364C14.4521 17.4603 14.4909 17.4812 14.5268 17.5051C14.5626 17.529 14.5984 17.5499 14.6342 17.5708C14.67 17.5917 14.7058 17.6156 14.7417 17.6365C14.8103 17.6783 14.879 17.7172 14.9476 17.759L14.9804 17.7769C15.0461 17.8157 15.1118 17.8516 15.1774 17.8904C15.3237 17.9741 15.4699 18.0547 15.6162 18.1354C15.6908 18.1742 15.7654 18.216 15.8371 18.2549C15.0759 20.567 14.5864 23.1151 14.4939 25.8006H5.10988C5.11585 25.6572 5.12182 25.5108 5.13078 25.3674V25.3644ZM14.6342 31.0611C14.5924 31.0909 14.5536 31.1238 14.5118 31.1537C14.4312 31.2164 14.3507 31.2791 14.2701 31.3419L14.2581 31.3508C14.1805 31.4106 14.1059 31.4733 14.0313 31.536C13.9537 31.6017 13.8731 31.6675 13.7955 31.7332C13.7239 31.7959 13.6522 31.8557 13.5806 31.9184C13.491 31.9961 13.4045 32.0737 13.3179 32.1514C13.2463 32.2141 13.1776 32.2798 13.109 32.3426C13.0374 32.4113 12.9657 32.477 12.8941 32.5457C12.8642 32.5756 12.8314 32.6054 12.8016 32.6353C12.7658 32.6682 12.7299 32.704 12.6941 32.7399L12.6643 32.7697C12.5926 32.8414 12.518 32.9131 12.4494 32.9848C12.3777 33.0565 12.3091 33.1282 12.2404 33.1999C12.1927 33.2507 12.1419 33.3015 12.0942 33.3552C12.0643 33.3851 12.0375 33.418 12.0076 33.4478C11.9599 33.5016 11.9121 33.5524 11.8614 33.6062C11.7062 33.7764 11.5569 33.9497 11.4077 34.123C11.3749 34.1618 11.345 34.1976 11.3122 34.2365C11.2794 34.2753 11.2495 34.3141 11.2167 34.35C11.16 34.4187 11.1062 34.4874 11.0495 34.5531C11.0137 34.5979 10.9779 34.6427 10.9421 34.6875L10.9063 34.7294C10.8704 34.7772 10.8346 34.822 10.7988 34.8698C10.751 34.9325 10.7033 34.9952 10.6555 35.058C10.6167 35.1087 10.5809 35.1595 10.5421 35.2103C10.3929 35.4104 10.2496 35.6166 10.1093 35.8227C10.0646 35.8884 10.0198 35.9541 9.97502 36.0228C9.95711 36.0497 9.9392 36.0766 9.92129 36.1065L9.87055 36.1841C9.81981 36.2618 9.76907 36.3425 9.71833 36.4231C9.67953 36.4829 9.64371 36.5426 9.60789 36.6023C9.56312 36.674 9.52134 36.7427 9.47955 36.8144C9.43776 36.8861 9.39598 36.9548 9.35419 37.0265C9.3333 37.0594 9.31539 37.0952 9.29449 37.1281C9.2736 37.1639 9.25271 37.1998 9.23182 37.2356C9.20495 37.2804 9.18107 37.3282 9.15421 37.373L9.13929 37.3999C9.11243 37.4477 9.08556 37.4955 9.0587 37.5433C9.02885 37.5941 9.00199 37.6479 8.97513 37.6986C8.95423 37.7405 8.93036 37.7793 8.90946 37.8211C8.89454 37.851 8.87663 37.8809 8.86171 37.9107C8.84081 37.9496 8.8229 37.9884 8.80201 38.0272C8.78112 38.0691 8.75724 38.1109 8.73933 38.1527C8.71247 38.2035 8.68859 38.2513 8.66471 38.3021C8.64979 38.329 8.63785 38.3588 8.62293 38.3857C8.60502 38.4186 8.59009 38.4544 8.57219 38.4903C6.36348 35.0669 5.08302 30.9894 5.08302 26.6161H14.473C14.473 26.6639 14.473 26.7117 14.473 26.7595C14.473 28.2023 14.5656 29.6123 14.7446 30.9714C14.7029 31.0013 14.6641 31.0342 14.6223 31.064L14.6342 31.0611ZM26.0091 26.9118C25.8986 26.9178 25.7882 26.9238 25.6807 26.9297C25.5942 26.9357 25.5076 26.9417 25.4211 26.9477C25.3554 26.9536 25.2897 26.9566 25.2241 26.9626C25.1644 26.9686 25.1047 26.9716 25.045 26.9805C24.9943 26.9865 24.9405 26.9895 24.8898 26.9955C24.8331 27.0014 24.7764 27.0074 24.7167 27.0134C24.6182 27.0223 24.5227 27.0343 24.4271 27.0462C24.3854 27.0522 24.3406 27.0582 24.2988 27.0642C24.2511 27.0701 24.2033 27.0761 24.1555 27.0851C24.063 27.097 23.9705 27.112 23.875 27.1269C23.8362 27.1329 23.7974 27.1388 23.7586 27.1448C23.7227 27.1508 23.6839 27.1568 23.6481 27.1627C23.5705 27.1747 23.4899 27.1896 23.4123 27.2046C23.3437 27.2165 23.275 27.2285 23.2064 27.2434C23.1318 27.2583 23.0542 27.2733 22.9795 27.2882C22.9407 27.2972 22.899 27.3031 22.8602 27.3121C22.7885 27.327 22.7169 27.342 22.6453 27.3569C22.6035 27.3659 22.5587 27.3748 22.5199 27.3838C22.4423 27.4017 22.3677 27.4196 22.2931 27.4376C22.2483 27.4465 22.2035 27.4585 22.1587 27.4704C22.0692 27.4913 21.9797 27.5152 21.8901 27.5391C21.8633 27.5451 21.8364 27.5541 21.8095 27.56C21.711 27.5869 21.6125 27.6138 21.514 27.6407C21.4573 27.6556 21.3976 27.6736 21.3409 27.6915C21.2872 27.7064 21.2305 27.7214 21.1768 27.7393C21.0574 27.7751 20.938 27.811 20.8216 27.8498C20.735 27.8767 20.6485 27.9066 20.5649 27.9334C20.5171 27.9484 20.4724 27.9633 20.4276 27.9812C20.2694 28.035 20.1142 28.0888 19.956 28.1485C19.8963 28.1694 19.8336 28.1933 19.7739 28.2172C19.7113 28.2411 19.6486 28.265 19.5859 28.2889C19.5292 28.3128 19.4695 28.3337 19.4128 28.3576C19.377 28.3726 19.3382 28.3875 19.3023 28.4024C19.1949 28.4472 19.0874 28.4921 18.98 28.5369C18.9322 28.5578 18.8845 28.5787 18.8367 28.5996L18.789 28.6205C18.6427 28.6832 18.4965 28.7519 18.3502 28.8206C18.2845 28.8505 18.2219 28.8804 18.1592 28.9132C18.0935 28.9461 18.0249 28.979 17.9592 29.0118C17.8935 29.0447 17.8249 29.0775 17.7592 29.1104C17.7174 29.1313 17.6757 29.1552 17.6309 29.1761C17.5413 29.2209 17.4518 29.2687 17.3623 29.3165C17.2578 29.3733 17.1533 29.43 17.0518 29.4868C16.9862 29.5226 16.9205 29.5615 16.8578 29.5973C16.7952 29.6332 16.7295 29.672 16.6668 29.7078C16.622 29.7347 16.5803 29.7586 16.5355 29.7855C16.4758 29.8214 16.4191 29.8572 16.3624 29.8901C16.3146 29.917 16.2698 29.9468 16.2221 29.9767C16.0937 30.0574 15.9654 30.138 15.84 30.2216C15.7893 30.2545 15.7415 30.2874 15.6938 30.3202C15.6401 30.3561 15.5863 30.3919 15.5326 30.4278C15.3953 29.2418 15.3267 28.0201 15.3267 26.7684C15.3267 26.7206 15.3267 26.6728 15.3267 26.625H26.6V26.9029C26.4419 26.9029 26.2866 26.9088 26.1314 26.9178C26.0926 26.9178 26.0538 26.9208 26.018 26.9238L26.0091 26.9118ZM38.4763 30.4188L38.4584 30.4069C38.3987 30.368 38.342 30.3292 38.2823 30.2874C38.2167 30.2455 38.151 30.2007 38.0853 30.1589C38.0465 30.135 38.0107 30.1111 37.9719 30.0842C37.9152 30.0484 37.8585 30.0125 37.8018 29.9767C37.7451 29.9409 37.6884 29.905 37.6317 29.8721C37.4078 29.7347 37.1839 29.6033 36.9571 29.4748C36.8825 29.433 36.8079 29.3912 36.7303 29.3494L36.6616 29.3135L36.5989 29.2807C36.4228 29.1881 36.2467 29.0955 36.0706 29.0088C36.0109 28.979 35.9542 28.9521 35.8945 28.9222C35.8348 28.8923 35.7751 28.8655 35.7184 28.8386C35.6558 28.8087 35.5961 28.7818 35.5334 28.7519C35.417 28.6982 35.2976 28.6444 35.1812 28.5936C35.1364 28.5727 35.0887 28.5548 35.0439 28.5339C34.9902 28.51 34.9335 28.4861 34.8797 28.4622C34.7693 28.4174 34.6589 28.3696 34.5484 28.3278C34.4947 28.3068 34.438 28.2829 34.3813 28.262C34.3246 28.2411 34.2708 28.2202 34.2141 28.1963C34.1007 28.1545 33.9903 28.1127 33.8769 28.0709C33.7634 28.029 33.65 27.9902 33.5366 27.9514C33.4709 27.9305 33.4082 27.9066 33.3426 27.8856C33.259 27.8588 33.1784 27.8319 33.0948 27.805C33.0411 27.7871 32.9904 27.7721 32.9367 27.7572C32.871 27.7363 32.8083 27.7184 32.7426 27.7004C32.6949 27.6855 32.6441 27.6706 32.5964 27.6586C32.5069 27.6317 32.4173 27.6078 32.3248 27.5839C32.292 27.575 32.2591 27.566 32.2263 27.5571C32.1576 27.5391 32.089 27.5212 32.0203 27.5033C31.9457 27.4854 31.8711 27.4674 31.7965 27.4495C31.704 27.4256 31.6114 27.4047 31.5159 27.3838C31.4682 27.3718 31.4174 27.3599 31.3667 27.3509C31.2115 27.3181 31.0563 27.2852 30.9011 27.2553C30.8682 27.2494 30.8354 27.2434 30.8026 27.2374H30.7906C30.725 27.2225 30.6623 27.2105 30.5966 27.2016C30.5429 27.1926 30.4892 27.1837 30.4354 27.1747C30.3847 27.1657 30.331 27.1568 30.2773 27.1478C30.122 27.1209 29.9639 27.1 29.8057 27.0761C29.7281 27.0672 29.6534 27.0552 29.5758 27.0462C29.5012 27.0373 29.4296 27.0283 29.355 27.0194C29.2863 27.0104 29.2206 27.0044 29.155 26.9984C29.0923 26.9925 29.0266 26.9835 28.964 26.9805C28.9043 26.9745 28.8446 26.9686 28.7849 26.9626C28.7192 26.9566 28.6535 26.9506 28.5879 26.9477C28.5013 26.9417 28.4148 26.9357 28.3282 26.9297C28.2178 26.9238 28.1073 26.9148 27.9999 26.9118C27.9611 26.9118 27.9223 26.9088 27.8865 26.9058C27.7313 26.8999 27.5731 26.8939 27.4179 26.8909V26.6131H38.6912C38.6912 26.6609 38.6912 26.7087 38.6912 26.7565C38.6912 28.0081 38.6196 29.2299 38.4853 30.4158L38.4763 30.4188ZM45.4159 38.4932C45.383 38.4216 45.3472 38.3528 45.3144 38.2841C45.2875 38.2304 45.2637 38.1796 45.2368 38.1258C45.2069 38.0661 45.1771 38.0063 45.1472 37.9496L45.1383 37.9346C45.1144 37.8898 45.0935 37.845 45.0696 37.8002C45.0458 37.7554 45.0219 37.7106 44.998 37.6658C44.9592 37.5911 44.9174 37.5164 44.8756 37.4417L44.8368 37.373L44.798 37.3043C44.7712 37.2536 44.7413 37.2028 44.7115 37.152C44.6786 37.0952 44.6458 37.0385 44.613 36.9847C44.5712 36.913 44.5294 36.8443 44.4876 36.7726C44.3563 36.5516 44.219 36.3365 44.0757 36.1214C44.0369 36.0646 43.9981 36.0049 43.9593 35.9481C43.9325 35.9093 43.9056 35.8675 43.8787 35.8257C43.8131 35.7271 43.7444 35.6315 43.6758 35.5329C43.634 35.4732 43.5922 35.4164 43.5504 35.3567C43.5086 35.2999 43.4668 35.2432 43.4251 35.1834C43.3833 35.1267 43.3415 35.0699 43.2967 35.0131C43.2519 34.9504 43.2042 34.8907 43.1564 34.8309C43.1176 34.7801 43.0788 34.7323 43.04 34.6816C42.9624 34.583 42.8848 34.4844 42.8042 34.3858C42.7654 34.338 42.7266 34.2902 42.6848 34.2424C42.6311 34.1767 42.5774 34.114 42.5237 34.0513C42.4759 33.9945 42.4281 33.9407 42.3804 33.884C42.3177 33.8123 42.258 33.7436 42.1953 33.6749C42.1207 33.5912 42.0461 33.5106 41.9715 33.4299C41.9207 33.3732 41.87 33.3194 41.8163 33.2656C41.6551 33.0954 41.4909 32.9281 41.3238 32.7608C41.2611 32.6981 41.1954 32.6353 41.1298 32.5726C41.091 32.5367 41.0522 32.4979 41.0134 32.4621C40.9746 32.4232 40.9328 32.3844 40.891 32.3485C40.8224 32.2828 40.7537 32.2201 40.6821 32.1574C40.6164 32.0976 40.5507 32.0379 40.4821 31.9781C40.4403 31.9423 40.3985 31.9035 40.3537 31.8676C40.312 31.8318 40.2672 31.7929 40.2254 31.7571C40.1388 31.6854 40.0523 31.6107 39.9657 31.539C39.7896 31.3926 39.6076 31.2493 39.4255 31.1089C39.3658 31.0611 39.3031 31.0162 39.2434 30.9714C39.1837 30.9266 39.124 30.8848 39.0673 30.84C39.127 30.8848 39.1867 30.9266 39.2434 30.9714C39.4195 29.6123 39.515 28.2053 39.515 26.7625C39.515 26.7147 39.515 26.6669 39.515 26.6191H48.905C48.905 30.9953 47.6246 35.0729 45.4159 38.4932Z" fill="#1A1A1A"/>'
        + '<path d="M33.3903 2.51807L34.0947 2.73016L34.038 3.74282L34.0409 3.74581L34.5573 2.87056L35.2587 3.08265L34.7752 4.68678L34.3066 4.54639L34.617 3.5158H34.614L34.026 4.45976L33.6559 4.34923L33.6887 3.235H33.6858L33.3753 4.2626L32.9067 4.1222L33.3903 2.51807Z" fill="white"/>'
        + '<path d="M36.0078 3.37549L36.4764 3.5607L36.4316 5.34406L35.9332 5.14989L35.9541 4.90195L35.4586 4.70779L35.3004 4.90195L34.8169 4.71376L36.0018 3.37848L36.0078 3.37549ZM35.9929 4.52557L36.0406 3.99085H36.0377L35.6974 4.40906L35.9929 4.52557Z" fill="white"/>'
        + '<path d="M37.7538 5.30219C37.5598 5.7204 37.2942 5.79508 36.9121 5.61884C36.5271 5.4396 36.4555 5.14387 36.6107 4.81229L36.6704 4.68384L37.0912 4.881L37.0494 4.96762C36.9957 5.08413 36.945 5.19167 37.0703 5.25141C37.1927 5.30817 37.2524 5.15881 37.2822 5.0901L37.7389 4.11328L38.2075 4.33135L37.7538 5.30219Z" fill="white"/>'
        + '<path d="M38.5299 4.49268L38.9836 4.74061L38.3866 5.83394L39.0373 6.18941L38.8343 6.5658L37.73 5.96537L38.5299 4.49268Z" fill="white"/>'
        + '<path d="M39.8877 5.24859L39.0181 6.68066L39.4593 6.94907L40.329 5.51699L39.8877 5.24859Z" fill="white"/>'
        + '<path d="M40.339 6.84949C40.3151 6.88534 40.3002 6.9182 40.2912 6.95106C40.2673 7.05561 40.3479 7.13626 40.4255 7.19003C40.4942 7.23783 40.6166 7.28562 40.6882 7.18406C40.7359 7.11237 40.6882 7.05262 40.4972 6.82261C40.3211 6.61051 40.1091 6.3805 40.3002 6.10269C40.5181 5.78306 40.8852 5.83085 41.1687 6.02203C41.4702 6.22516 41.6582 6.5209 41.4403 6.86741L41.0374 6.59259C41.0792 6.54479 41.0822 6.49401 41.0613 6.44622C41.0434 6.39842 41.0016 6.35361 40.9598 6.32673C40.9001 6.28789 40.7956 6.23711 40.7419 6.31478C40.6822 6.41933 40.8673 6.57467 41.0255 6.76286C41.1837 6.95106 41.318 7.17211 41.1449 7.42901C40.9001 7.79046 40.4882 7.68292 40.1808 7.47382C40.0226 7.36628 39.6137 7.00781 39.9092 6.56272L40.336 6.85248L40.339 6.84949Z" fill="white"/>'
        + '<path d="M43.1746 8.9198C42.8761 9.27528 42.5418 9.28424 42.1478 8.95564C41.7568 8.62705 41.7061 8.29248 42.0045 7.937L42.6642 7.15137L43.0581 7.48295L42.4702 8.18196C42.3597 8.31339 42.2224 8.47769 42.4164 8.639C42.6015 8.79732 42.7388 8.63303 42.8492 8.50159L43.4372 7.80258L43.8312 8.13416L43.1716 8.92279L43.1746 8.9198Z" fill="white"/>'
        + '<path d="M43.9385 10.3178C43.7535 10.3447 43.5804 10.264 43.452 10.1356C43.0968 9.78907 43.1476 9.30215 43.4819 8.96161C43.9266 8.50457 44.428 8.63601 44.6967 8.89888C45.0011 9.1976 45.0339 9.55308 44.8101 9.88765L44.4549 9.54113C44.5265 9.43957 44.5146 9.30514 44.4251 9.2215C44.1714 8.97356 43.9206 9.24838 43.84 9.33203C43.7296 9.44554 43.5834 9.68452 43.8072 9.90557C43.8938 9.98921 44.0221 10.031 44.1296 9.95934L43.9654 9.80102L44.2161 9.54412L44.7056 10.0221L44.0609 10.6822L43.8281 10.4552L43.9356 10.3208L43.9385 10.3178Z" fill="white"/>'
        + '<path d="M45.8906 10.2075L46.2219 10.5869L45.3623 12.1492L45.0101 11.7459L45.1444 11.5368L44.7952 11.1365L44.5654 11.2381L44.2251 10.8468L45.8906 10.2105V10.2075ZM45.3474 11.2232L45.6369 10.7691L45.1414 10.9842L45.3503 11.2232H45.3474Z" fill="white"/>'
        + '<path d="M46.7739 11.229L47.2097 11.8175L46.559 12.5971L46.562 12.6001L47.4962 12.2088L47.932 12.8003L46.5859 13.795L46.2963 13.4007L47.1589 12.7644L47.156 12.7585L46.1203 13.1617L45.8904 12.854L46.5829 11.9818L46.5799 11.9758L45.7143 12.6151L45.4248 12.2237L46.7739 11.229Z" fill="white"/>'
        + '<path d="M48.3828 13.52L48.6484 13.9502L47.5441 15.3512L47.2635 14.8971L47.4307 14.7119L47.1501 14.2579L46.9083 14.3206L46.6367 13.8785L48.3858 13.523L48.3828 13.52ZM47.6814 14.4311L48.0425 14.0308L47.5202 14.1593L47.6874 14.4281L47.6814 14.4311Z" fill="white"/>'
        + '<path d="M49.4345 15.344L47.9419 16.1035L48.1759 16.5642L49.6685 15.8047L49.4345 15.344Z" fill="white"/>'
        + '<path d="M48.9377 16.8566C48.8989 16.8745 48.8691 16.8954 48.8452 16.9193C48.7676 16.994 48.7974 17.1075 48.8362 17.1942C48.8721 17.2718 48.9497 17.3764 49.0631 17.3256C49.1407 17.2898 49.1347 17.2151 49.0899 16.9164C49.0482 16.6445 48.9914 16.3368 49.2989 16.1994C49.6511 16.0411 49.9406 16.2741 50.0809 16.5878C50.2301 16.9193 50.2361 17.2688 49.8719 17.4511L49.672 17.006C49.7347 16.988 49.7615 16.9462 49.7675 16.8954C49.7764 16.8447 49.7645 16.7849 49.7436 16.7401C49.7138 16.6774 49.6511 16.5788 49.5645 16.6176C49.4601 16.6744 49.5347 16.9044 49.5735 17.1464C49.6123 17.3883 49.6063 17.6482 49.3257 17.7767C48.9288 17.9559 48.6363 17.6482 48.4811 17.3077C48.4035 17.1344 48.2423 16.6117 48.7288 16.3876L48.9407 16.8596L48.9377 16.8566Z" fill="white"/>'
        + '<path d="M50.508 17.6841L50.687 18.168L49.52 18.6012L49.7767 19.2972L49.3738 19.4465L48.938 18.2666L50.508 17.6841Z" fill="white"/>'
        + '<path d="M51.1793 19.617L51.3226 20.1009L49.8899 21.1614L49.7377 20.6476L49.9466 20.5132L49.7974 20.0023H49.5466L49.4004 19.5005L51.1793 19.617ZM50.263 20.31L50.7167 20.0203V20.0143L50.1734 20.0053L50.263 20.31Z" fill="white"/>'
        + '<path d="M51.5556 20.9165L51.7049 21.6334L50.7885 22.0696L50.7915 22.0726L51.8033 22.1084L51.9526 22.8283L50.311 23.1659L50.2125 22.6879L51.2661 22.4699L51.2631 22.4669L50.1528 22.3982L50.0752 22.0218L51.0691 21.5199V21.5139L50.0155 21.732L49.917 21.2541L51.5556 20.9165Z" fill="white"/>'
        + '<path d="M51.0391 24.5073C50.9973 24.5103 50.9615 24.5223 50.9317 24.5372C50.8332 24.585 50.8242 24.6985 50.8332 24.7941C50.8421 24.8778 50.8809 25.0032 51.0063 24.9913C51.0928 24.9823 51.1078 24.9076 51.1645 24.6149C51.2152 24.343 51.26 24.0354 51.5943 24.0055C51.9793 23.9696 52.1763 24.2833 52.2091 24.6268C52.242 24.9883 52.1345 25.3228 51.7316 25.3736L51.6868 24.8867C51.7495 24.8897 51.7913 24.8568 51.8151 24.815C51.842 24.7702 51.848 24.7105 51.842 24.6597C51.836 24.591 51.8062 24.4775 51.7137 24.4864C51.5943 24.5073 51.5913 24.7463 51.5495 24.9913C51.5047 25.2332 51.4182 25.4782 51.1137 25.5051C50.678 25.5469 50.5019 25.1586 50.466 24.7881C50.4481 24.5999 50.466 24.0533 50.9973 23.9995L51.0451 24.5133L51.0391 24.5073Z" fill="white"/>'
        + '<path d="M52.2431 25.6317L50.5703 25.7065L50.5934 26.2228L52.2661 26.148L52.2431 25.6317Z" fill="white"/>'
        + '<path d="M52.2896 26.5117L52.2807 27.0405L51.3763 27.5125V27.5184L52.2717 27.5304L52.2658 28.0203L50.5913 27.9934L50.6003 27.4916L51.5225 26.9927V26.9867L50.6092 26.9718L50.6152 26.4849L52.2896 26.5117Z" fill="white"/>'
        + '<path d="M50.657 29.4422C50.5197 29.3167 50.4719 29.1315 50.4868 28.9493C50.5286 28.4564 50.9345 28.1846 51.4091 28.2234C52.0449 28.2742 52.2627 28.7432 52.2329 29.1196C52.1971 29.5437 51.9434 29.7947 51.5464 29.8365L51.5882 29.3436C51.7106 29.3346 51.8061 29.239 51.815 29.1166C51.8449 28.7641 51.4718 28.7432 51.3584 28.7342C51.2032 28.7223 50.9226 28.7611 50.8987 29.0747C50.8898 29.1942 50.9405 29.3197 51.0599 29.3555L51.0778 29.1285L51.436 29.1584L51.3793 29.8425L50.46 29.7678L50.4868 29.4422H50.6599H50.657Z" fill="white"/>'
        + '<path d="M51.9942 30.8309L51.9136 31.3297L50.1646 31.6643L50.2481 31.1356L50.4959 31.1027L50.5794 30.577L50.3556 30.4635L50.4391 29.9526L51.9942 30.8279V30.8309ZM50.866 31.0609L51.4002 30.9952V30.9892L50.9167 30.7472L50.866 31.0609Z" fill="white"/>'
        + '<path d="M51.7495 32.2442L51.5495 33.0836C51.4451 33.5258 51.0839 33.6034 50.8511 33.5496C50.4571 33.4541 50.3347 33.1464 50.4243 32.773L50.4959 32.4772L50.0034 32.3607L50.1228 31.8589L51.7525 32.2472L51.7495 32.2442ZM50.8809 32.5669L50.8332 32.761C50.8033 32.8895 50.7794 33.0299 50.9436 33.0687C51.0928 33.1046 51.1287 32.991 51.1585 32.8686L51.2122 32.6445L50.8809 32.5639V32.5669Z" fill="white"/>'
        + '<path d="M49.8604 35.1836C49.4186 35.0402 49.2843 34.7355 49.4395 34.2486C49.5947 33.7617 49.8842 33.5885 50.326 33.7318L51.305 34.0455L51.1468 34.5384L50.2782 34.2606C50.1141 34.2098 49.9111 34.1441 49.8365 34.3831C49.7619 34.6161 49.9648 34.6818 50.129 34.7326L50.9975 35.0104L50.8393 35.5033L49.8604 35.1896V35.1836Z" fill="white"/>'
        + '<path d="M50.708 35.8496L50.3379 36.7607C50.2275 37.0325 49.9827 37.2058 49.6902 37.0863C49.5291 37.0206 49.3888 36.8772 49.3948 36.695C49.2933 36.8055 49.1172 36.8264 48.9142 36.7667C48.8366 36.7428 48.6516 36.6681 48.562 36.683L48.756 36.2051C48.8426 36.214 48.9291 36.2379 49.0097 36.2618C49.1619 36.3096 49.3231 36.3574 49.3977 36.1692L49.5022 35.9153L48.962 35.6943L49.156 35.2163L50.708 35.8466V35.8496ZM49.8365 36.0527L49.735 36.3037C49.6992 36.3933 49.6634 36.5217 49.8037 36.5755C49.9022 36.6143 49.9798 36.5845 50.0544 36.4022L50.1439 36.1782L49.8365 36.0527Z" fill="white"/>'
        + '<path d="M49.7316 38.108L49.5077 38.559L47.7378 38.3559L47.9766 37.878L48.2213 37.9228L48.4601 37.4478L48.281 37.2745L48.5138 36.8115L49.7346 38.1139L49.7316 38.108ZM48.5884 37.9885L49.1167 38.0841L48.7287 37.7047L48.5884 37.9885Z" fill="white"/>'
        + '<path d="M39.2432 30.9687L39.2581 30.9508C39.1984 30.906 39.1387 30.8641 39.082 30.8193L39.0552 30.8582C39.1149 30.903 39.1746 30.9448 39.2313 30.9896L39.2462 30.9717L39.2611 30.9538C39.2014 30.909 39.1417 30.8641 39.085 30.8223L39.0582 30.8612C39.1179 30.906 39.1775 30.9478 39.2343 30.9926L39.2701 31.0195V30.9597L39.2611 30.9538L39.2462 30.9717L39.2432 30.9687Z" fill="#EC008C"/>'
        + '<path d="M42.9832 45.5996H11.0166V49.9998H42.9832V45.5996Z" fill="black"/>'
        + '<path d="M21.0276 48.1539H19.7919V49.1785H18.9771V46.729H19.7919V47.6043H21.0276V46.729H21.8454V49.1785H21.0276V48.1539Z" fill="white"/>'
        + '<path d="M23.6749 46.729H24.6718L25.7224 49.1785H24.8479L24.7016 48.7812H23.6331L23.4868 49.1785H22.6123L23.6749 46.729ZM24.1733 47.3474H24.1674L23.8271 48.2734H24.5136L24.1733 47.3474Z" fill="white"/>'
        + '<path d="M26.2866 46.729H27.1015V48.6109H28.5908V49.1785H26.2866V46.729Z" fill="white"/>'
        + '<path d="M30.3638 46.729H31.3607L32.4143 49.1785H31.5398L31.3935 48.7812H30.325L30.1787 49.1785H29.3042L30.3668 46.729H30.3638ZM30.8593 47.3474H30.8533L30.513 48.2734H31.1995L30.8593 47.3474Z" fill="white"/>'
        + '<path d="M32.9756 46.729H33.7904V48.6109H35.2798V49.1785H32.9756V46.729Z" fill="white"/>'
        + '<path d="M19.8784 2.09406C19.8097 1.89093 19.6754 1.66688 19.6665 1.53246C19.6575 1.39804 19.5113 1.26062 19.3859 1.53246C19.2605 1.8043 19.3292 2.14185 19.4337 2.37485C19.5411 2.60786 19.8784 3.35466 19.9858 3.6265C20.0933 3.89833 20.1739 4.27472 20.159 4.40616C20.141 4.5376 20.3948 4.62423 20.4515 4.40616C20.5082 4.18809 20.5589 3.67429 20.4515 3.39947C20.344 3.12465 19.8814 2.09704 19.8814 2.09704L19.8784 2.09406Z" fill="white"/>'
        + '<path d="M17.5054 2.74531C17.5054 2.74531 17.2935 2.74531 17.2815 2.62881C17.2726 2.51231 17.2875 2.15384 17.3382 2.11501C17.389 2.07617 17.7382 2.17177 17.8247 2.22255C17.9113 2.27034 17.9203 2.37788 17.9113 2.50335C17.9024 2.62881 18.1352 3.02611 18.162 3.04702C18.1919 3.06494 18.3739 3.03806 18.4814 3.04702C18.5888 3.05598 18.5411 3.19339 18.5411 3.33678C18.5411 3.48017 18.5112 3.63849 18.368 3.63849C18.2247 3.63849 18.0665 3.62953 17.9173 3.75499C17.768 3.88045 17.5651 4.04475 17.8247 4.02683C18.0874 4.00592 18.3083 3.91032 18.3948 3.85357C18.4814 3.79681 18.8694 3.66836 18.9769 3.62056C19.0843 3.57277 19.1022 3.62953 19.1022 3.79382C19.1022 3.95812 19.0545 4.15229 18.8784 4.30762C18.7052 4.46296 18.362 4.78259 18.2426 5.07833C18.1232 5.37406 17.9859 5.44277 17.8128 5.56823C17.6397 5.69369 17.377 5.8311 17.2129 5.8311C17.0487 5.8311 16.8338 5.69967 16.8338 5.69967C16.8338 5.69967 16.8517 5.97449 16.595 6.13281C16.3383 6.29113 16.1503 6.40465 16.0518 6.42257C15.9533 6.4405 15.7115 6.36581 15.7115 6.36581C15.7115 6.36581 15.7115 6.53011 15.5384 6.63765C15.3653 6.74519 15.3056 6.79299 15.2579 6.73324C15.2101 6.67649 15.0877 6.47933 15.0698 6.63466C15.0549 6.79 15.1056 6.96326 15.0698 7.09171C15.034 7.21717 15.1116 7.76084 14.84 7.9819C14.5684 8.20594 13.9685 8.68091 13.6789 8.73766C13.3894 8.79741 13.0492 8.70779 12.888 8.45686C12.7268 8.20594 12.6343 7.94306 12.6343 7.60551C12.6343 7.26795 12.7119 7.08275 12.8074 7.08275C12.9029 7.08275 12.9536 7.13054 12.9626 7.40238C12.9716 7.67421 13.1566 8.00281 13.476 8.00281C13.7953 8.00281 14.0849 7.8176 14.2401 7.69214C14.3953 7.56668 14.6997 7.30977 14.5803 7.16041C14.458 7.00807 14.261 6.81091 14.1923 6.74519C14.1237 6.67649 14.1237 6.38673 14.1535 6.23139C14.1834 6.07606 14.2878 5.96852 14.3565 6.09697C14.4251 6.22542 14.5296 6.26126 14.637 6.3001C14.7445 6.33893 14.8221 6.2523 14.8221 6.1358C14.8221 6.0193 14.8519 5.79526 14.9385 5.76837C15.0251 5.7385 15.0848 5.80721 15.1325 5.93267C15.1803 6.05813 15.3743 6.02826 15.4041 5.88487C15.434 5.7385 15.3504 5.48459 15.5205 5.48757C15.6907 5.49056 15.7324 5.59511 15.7324 5.69967C15.7324 5.80422 15.7712 5.83409 16.0429 5.66083C16.3145 5.48757 16.5264 5.49654 16.5085 5.3412C16.4876 5.18586 15.7921 3.93422 15.6847 3.73109C15.5772 3.52796 15.5384 3.35172 15.5683 3.16053C15.5981 2.96636 15.7324 2.98728 15.7921 3.11274C15.8488 3.2382 16.2876 3.96708 16.3533 4.13138C16.4219 4.29568 16.7413 4.85727 16.8099 4.95585C16.8786 5.05144 16.9174 5.20678 17.1383 5.12911C17.3621 5.05144 17.6039 4.90507 17.7292 4.81844C17.8546 4.73181 18.0396 4.51972 17.8755 4.5466C17.7113 4.57349 17.5084 4.60635 17.4308 4.70194C17.3532 4.79753 17.1024 4.72882 17.1024 4.42114C17.1024 4.11346 17.2487 3.76096 17.383 3.57874C17.5173 3.39354 17.6934 3.26807 17.6934 3.19041C17.6934 3.11274 17.5084 2.75427 17.5084 2.75427L17.5054 2.74531Z" fill="white"/>'
        + '<path d="M10.2048 8.39389C9.97795 8.19374 9.60486 7.88307 9.50337 7.75164C9.40189 7.6202 9.36011 7.47681 9.27952 7.46486C9.19893 7.4559 9.03477 7.4559 9.06462 7.75164C9.09446 8.04737 9.30937 8.21167 9.53322 8.39389C9.75708 8.57611 10.4913 9.302 10.6525 9.46331C10.8167 9.62761 10.939 9.77995 10.948 9.91139C10.9569 10.0428 11.2644 10.0846 11.2524 9.79788C11.2435 9.5111 10.5212 8.66871 10.2018 8.3909L10.2048 8.39389Z" fill="white"/>'
        + '<path d="M10.4407 10.1175C10.3482 9.995 9.76916 9.41249 9.69753 9.29001C9.62589 9.16754 9.48262 8.75829 9.35129 8.59698C9.21997 8.43268 9.02596 8.1489 8.92448 8.09812C8.823 8.04733 8.70957 7.89499 8.57825 7.94577C8.44692 7.99655 8.43498 8.11903 8.49766 8.26241C8.56034 8.4058 8.56929 8.53724 8.61108 8.65971C8.65286 8.78219 8.68271 8.71049 8.85583 8.82401C9.02894 8.93752 9.37219 9.33781 9.24384 9.31391C9.214 9.30794 8.65286 9.19144 8.25589 9.13169C7.85892 9.07195 7.54552 8.98831 7.46195 9.13169C7.37838 9.27508 7.73356 9.38859 7.73356 9.56185C7.73356 9.73511 7.88877 9.87551 8.14247 9.87551C8.39618 9.87551 8.43796 9.83369 8.59019 9.75303C8.74241 9.67238 8.76629 9.72316 9.06476 9.80381C9.36323 9.88447 9.60798 10.0398 9.57814 10.2429C9.54829 10.4461 9.48561 10.5297 9.38413 10.6313C9.28265 10.7328 9.35428 10.927 9.5065 11.0584C9.65872 11.1899 9.75125 11.2227 9.90347 11.16C10.0557 11.1003 10.3721 10.691 10.4437 10.5476C10.5153 10.4042 10.5362 10.2429 10.4437 10.1205L10.4407 10.1175ZM10.0139 10.1683C9.97212 10.2489 9.81095 10.2698 9.8199 10.219C9.82885 10.1683 9.87064 9.93227 9.87064 9.93227C9.87064 9.93227 10.0527 10.0846 10.0139 10.1653V10.1683Z" fill="white"/>'
        + '<path d="M4.88911 12.6358C4.88911 12.6358 5.9278 13.4722 6.1636 13.6544C6.39939 13.8366 6.73369 14.0636 6.91874 14.0816C7.10379 14.1025 7.16946 14.1533 7.44704 13.9681C7.72462 13.7858 7.8261 13.6305 7.8261 13.5409C7.8261 13.4513 7.75447 13.2451 8.02906 13.1944C8.30366 13.1436 8.2768 12.8747 8.28277 12.7463C8.28874 12.6178 8.29172 12.573 8.45588 12.5432C8.62004 12.5133 8.72153 12.1966 8.62004 11.9606C8.51856 11.7247 8.28277 11.4917 8.08876 11.3483C7.89475 11.2049 7.6709 11.2467 7.66194 11.408C7.65299 11.5723 7.80521 11.7037 7.92758 11.8173C8.04996 11.9308 8.07981 12.0712 7.96937 12.0532C7.85595 12.0323 7.77536 11.871 7.68283 11.8292C7.59031 11.7874 7.45898 11.871 7.53061 12.0323C7.60225 12.1966 7.72462 12.2773 7.72462 12.4296C7.72462 12.582 7.53957 12.6238 7.50077 12.6119C7.45898 12.6029 7.36944 12.4386 7.2978 12.3968C7.22617 12.355 7.01127 12.3968 7.10379 12.6208C7.19632 12.8449 7.32765 12.8658 7.27691 13.0898C7.22617 13.3139 7.09484 13.3945 7.00231 13.4782C6.90979 13.5588 6.72772 13.52 6.5546 13.3855C6.38149 13.2541 5.21744 12.2444 5.10103 12.1817C4.98463 12.122 4.91299 12.0891 4.8921 12.2833C4.87121 12.4774 4.8921 12.6298 4.8921 12.6298L4.88911 12.6358Z" fill="white"/>'
        + '<path d="M6.22939 13.7083C6.05627 13.5739 5.51603 13.5022 5.09519 13.4842C4.67434 13.4633 4.16394 13.4842 4.06246 13.5978C3.96098 13.7083 4.09231 13.8218 4.25647 13.9951C4.42063 14.1683 4.53107 14.1773 4.59375 14.2609C4.65643 14.3416 4.94893 14.2908 5.09817 14.1683C5.24741 14.0458 5.11309 13.9741 5.5429 13.9861C5.96972 13.9951 6.19357 13.9861 6.32788 14.24C6.45921 14.4939 6.45921 14.8016 6.32788 15.0346C6.19656 15.2706 6.00255 15.5335 5.99061 15.635C5.98165 15.7366 6.02046 15.7545 6.2861 15.6888C6.55174 15.6231 6.85618 15.0734 6.92782 14.9629C6.99945 14.8494 6.83231 14.485 6.76963 14.249C6.70695 14.013 6.29804 13.762 6.22939 13.7083Z" fill="white"/>'
        + '<path d="M4.28608 15.9786C4.28608 15.9786 4.1846 16.3848 4.28608 16.5611C4.38757 16.7343 4.59053 17.0301 4.75469 17.1525C4.91885 17.275 5.10987 17.3975 5.2024 17.1525C5.29493 16.9076 5.38447 16.797 5.4382 16.7761C5.48894 16.7552 5.59639 16.7403 5.56057 16.9703C5.52475 17.2003 5.48894 17.6424 5.36656 17.8874C5.24419 18.1323 5.06212 18.3146 4.81737 18.3265C4.57262 18.3355 4.3816 18.2847 4.24131 18.0935C4.10402 17.8993 3.88016 17.8067 3.85927 17.971C3.83837 18.1353 4.06223 18.2966 4.29802 18.5207C4.53382 18.7447 4.69499 18.9299 5.02033 18.9389C5.34567 18.9478 5.50983 18.8074 5.68295 18.5834C5.85606 18.3594 6.05007 17.9531 6.07096 17.4632C6.09186 16.9733 6.09186 16.8209 5.97844 16.5043C5.86501 16.1877 5.62325 16.0443 5.51878 15.9845C5.4173 15.9248 5.33671 15.883 5.15166 16.0861C4.96959 16.2892 4.89796 16.564 4.81438 16.4834C4.7338 16.4027 4.66216 15.9845 4.69201 15.871C4.72186 15.7575 4.95467 15.6171 4.96661 15.4528C4.97855 15.2885 4.96661 15.166 4.82334 15.0555C4.68007 14.942 4.54874 14.7508 4.40547 14.9241C4.26221 15.0973 3.97866 15.2706 3.92792 15.402C3.87717 15.5335 3.91896 15.5962 4.02343 15.7276C4.13088 15.8591 4.2831 15.9815 4.2831 15.9815L4.28608 15.9786Z" fill="white"/>'
        + '<path d="M1.94291 20.5671C1.74891 20.5462 1.46535 20.4536 1.42357 20.5671C1.38178 20.6807 1.66832 21.0361 1.76084 21.1377C1.85337 21.2393 1.96381 21.2184 2.49509 21.2602C3.02638 21.302 3.59646 21.3199 3.91285 21.5051C4.22923 21.6874 4.54561 21.771 4.60531 21.6366C4.665 21.5051 4.3904 21.1078 3.95463 20.9644C3.51587 20.8211 1.94888 20.5671 1.94888 20.5671H1.94291Z" fill="white"/>'
        + '<path d="M1.949 22.6163C1.949 22.6163 1.9102 22.8672 1.73708 22.8582C1.56397 22.8493 1.47443 22.6163 1.34907 22.5476C1.22371 22.4789 1.26848 22.3355 1.4207 22.2966C1.57292 22.2578 1.62068 22.1114 1.72813 22.0846C1.83558 22.0547 1.91318 22.2011 1.91318 22.2488C1.91318 22.2488 3.37869 22.2488 3.62643 22.2578C3.87416 22.2638 4.14876 22.3833 4.24725 22.5595C4.34277 22.7328 4.3159 23.0136 4.30396 23.2287C4.29501 23.4407 4.22636 23.5304 4.16965 23.5692C4.11294 23.608 3.95773 23.6857 4.101 23.7932C4.24725 23.9008 4.28606 24.0949 4.20845 24.1726C4.13085 24.2503 3.90699 24.319 4.01444 24.3847C4.1219 24.4534 4.22636 24.558 4.18756 24.7043C4.14876 24.8507 4.01444 24.9075 3.95475 24.9373C3.89804 24.9672 3.95475 25.0628 4.05026 25.1106C4.14876 25.1584 4.14876 25.3137 4.13682 25.4302C4.12786 25.5467 4.09802 25.9918 4.07712 26.0994C4.05922 26.2069 3.93087 26.2338 3.89207 26.2726C3.85327 26.3115 3.92192 26.3682 3.99952 26.4578C4.07712 26.5445 4.10697 26.6938 4.10697 26.891C4.10697 27.0881 4.06817 27.4944 4.03832 27.6408C4.00848 27.7871 3.89207 27.9036 3.81447 27.9604C3.73686 28.0172 3.75776 28.056 3.82342 28.2024C3.89207 28.3487 3.98758 28.4443 3.96072 28.7729C3.93087 29.1015 3.76074 29.3793 3.65031 29.5376C3.53987 29.696 3.37869 29.693 3.27124 29.7229C3.16379 29.7527 1.92512 29.6751 1.77887 29.6751C1.63262 29.6751 1.53711 29.687 1.48935 29.7288C1.44159 29.7707 1.29534 29.7318 1.09238 29.6362C0.889417 29.5406 0.743164 29.2688 0.743164 29.221C0.743164 29.1732 0.955081 29.1523 1.15804 29.1642C1.36101 29.1732 2.56386 29.212 2.80562 29.221C3.04739 29.23 3.16379 29.1254 3.22349 28.9312C3.2802 28.7371 3.37869 28.3398 3.27124 28.4264C3.16379 28.513 3.07723 28.6504 3.00859 28.7072C2.93994 28.764 2.64146 28.5519 2.52506 28.4264C2.40865 28.3009 2.38776 27.817 2.62952 27.584C2.87129 27.351 3.1041 27.4108 3.16081 27.5063C3.2205 27.6019 3.30109 27.6019 3.34586 27.4585C3.38765 27.3122 3.38168 26.9955 3.38765 26.8103C3.39063 26.6221 3.38765 26.4698 3.25035 26.3832C3.11604 26.2965 3.01754 26.3264 2.93994 26.2159C2.86233 26.1024 2.84442 25.9679 3.03545 25.959C3.22946 25.95 3.48018 25.9978 3.50107 25.6871C3.51898 25.3765 3.56375 25.0867 3.51898 25.018C3.47719 24.9493 3.26826 24.8447 3.11305 24.785C2.95784 24.7282 2.93994 24.5819 3.17275 24.561C3.40556 24.54 3.7488 24.4952 3.54285 24.3011C3.33691 24.1069 3.12201 24.0681 3.04142 24.0083C2.96083 23.9516 3.1041 23.8619 3.2414 23.8619C3.37869 23.8619 3.59658 23.8858 3.60553 23.8141C3.61449 23.7454 3.65926 23.6558 3.47421 23.5901C3.28915 23.5214 3.19364 23.4736 3.18469 23.4049C3.17573 23.3362 3.13991 23.2496 3.39063 23.2406C3.64135 23.2316 3.76373 23.1271 3.73686 22.9747C3.71 22.8224 3.68015 22.7268 3.68015 22.7268L1.94602 22.6193L1.949 22.6163Z" fill="white"/>'
        + '<path d="M1.05151 30.94L0.895328 31.0963C0.820729 31.1709 0.820729 31.292 0.895328 31.3666L1.05151 31.5229C1.12611 31.5976 1.24706 31.5976 1.32165 31.5229L1.47783 31.3666C1.55243 31.292 1.55243 31.1709 1.47783 31.0963L1.32166 30.94C1.24706 30.8653 1.12611 30.8653 1.05151 30.94Z" fill="white"/>'
        + '<path d="M1.43823 27.4951L1.28205 27.6514C1.20745 27.7261 1.20745 27.8471 1.28205 27.9218L1.43823 28.0781C1.51283 28.1528 1.63377 28.1528 1.70837 28.0781L1.86455 27.9218C1.93915 27.8471 1.93915 27.7261 1.86455 27.6514L1.70837 27.4951C1.63377 27.4205 1.51283 27.4205 1.43823 27.4951Z" fill="white"/>'
        + '<path d="M1.96719 26.0382L1.81093 26.1945C1.73629 26.2691 1.73622 26.3901 1.81078 26.4648L1.96688 26.6212C2.04144 26.6959 2.16239 26.696 2.23703 26.6214L2.39329 26.4652C2.46793 26.3905 2.46799 26.2695 2.39343 26.1948L2.23734 26.0384C2.16278 25.9637 2.04183 25.9636 1.96719 26.0382Z" fill="white"/>'
        + '<path d="M5.9711 18.3109L6.16592 18.2132C6.25933 18.1664 6.37548 18.2051 6.42226 18.2986L6.51982 18.4936C6.5666 18.5871 6.52796 18.7033 6.43455 18.7501L6.23972 18.8478C6.14365 18.8959 6.03016 18.8559 5.98339 18.7624L5.88583 18.5674C5.83771 18.4713 5.87769 18.3577 5.9711 18.3109Z" fill="white"/>'
        + '<path d="M6.18872 17.6529L6.38337 17.5549C6.47937 17.5066 6.59292 17.5464 6.63986 17.6398L6.73776 17.8346C6.7847 17.928 6.74626 18.0443 6.65294 18.0913L6.45828 18.1893C6.36496 18.2363 6.24874 18.1978 6.2018 18.1044L6.1039 17.9096C6.05696 17.8162 6.09539 17.6998 6.18872 17.6529Z" fill="white"/>'
        + '<path d="M18.7451 5.65134L18.8281 5.4497C18.8678 5.35302 18.9808 5.3059 19.0774 5.34571L19.2789 5.42874C19.3755 5.46855 19.4226 5.58164 19.3828 5.67831L19.2998 5.87996C19.2601 5.97663 19.1471 6.02375 19.0505 5.98395L18.849 5.90092C18.7524 5.86111 18.7053 5.74802 18.7451 5.65134Z" fill="white"/>'
        + '<path d="M6.30164 36.6488L6.40232 36.4554C6.45059 36.3627 6.56735 36.3259 6.65999 36.3742L6.85323 36.475C6.94852 36.5247 6.98264 36.6401 6.93437 36.7329L6.83369 36.9262C6.78542 37.019 6.66867 37.0558 6.57602 37.0075L6.38279 36.9067C6.29014 36.8584 6.25337 36.7415 6.30164 36.6488Z" fill="white"/>'
        + '<path d="M6.55262 37.3324L6.6533 37.139C6.70156 37.0463 6.81832 37.0095 6.91097 37.0578L7.1042 37.1586C7.19685 37.2069 7.23362 37.3237 7.18535 37.4164L7.08467 37.6098C7.0364 37.7026 6.91964 37.7394 6.827 37.6911L6.63376 37.5903C6.54112 37.542 6.50435 37.4251 6.55262 37.3324Z" fill="white"/>'
        + '<path d="M5.25907 32.035C4.82927 31.7094 4.14576 31.7841 4.14576 31.7841C4.14576 31.7841 4.11293 31.3211 4.09801 31.109C4.08308 30.8969 3.93683 30.5414 3.6682 30.3682C3.39958 30.1979 2.88023 30.2636 2.46535 30.3682C2.05047 30.4727 1.90422 30.873 1.88034 30.9865C1.85646 31.1 2.05943 31.3599 2.22956 31.4346C2.39969 31.5093 2.72503 31.566 2.8862 31.5153C3.04738 31.4675 3.28317 31.3032 3.29213 31.1C3.30108 30.8969 3.10409 30.7027 3.10409 30.7027C3.01455 30.4996 3.2981 30.6878 3.39062 30.882C3.48315 31.0791 3.48614 31.2793 3.49509 31.4734C3.50404 31.6676 3.54285 31.8707 3.39062 31.9036C3.2384 31.9365 2.97574 32.1485 2.85934 32.4144C2.74592 32.6833 3.09513 32.967 3.39062 33.0089C3.68611 33.0507 4.1189 33.0328 4.23232 32.74C4.34574 32.4473 4.2174 32.1456 4.2174 32.1456C4.2174 32.1456 4.73674 32.1874 4.98149 32.4532C5.22624 32.7221 5.35459 33.1104 5.34563 33.4121C5.33668 33.7138 5.46801 33.7855 5.53367 33.7288C5.59933 33.672 5.81722 33.3554 5.80827 33.0537C5.79931 32.752 5.68589 32.3547 5.25609 32.0291L5.25907 32.035ZM2.59668 31.1508C2.51609 31.1508 2.45043 31.0851 2.45043 31.0044C2.45043 30.9238 2.51609 30.8581 2.59668 30.8581C2.67727 30.8581 2.74293 30.9238 2.74293 31.0044C2.74293 31.0851 2.67727 31.1508 2.59668 31.1508ZM3.58463 32.6175C3.50404 32.6175 3.43838 32.5518 3.43838 32.4712C3.43838 32.3905 3.50404 32.3248 3.58463 32.3248C3.66522 32.3248 3.73088 32.3905 3.73088 32.4712C3.73088 32.5518 3.66522 32.6175 3.58463 32.6175Z" fill="white"/>'
        + '<path d="M3.99372 34.0603C3.99372 34.0603 3.743 34.2724 3.59675 34.362C3.4505 34.4516 3.19082 34.3949 3.02069 34.362C2.85056 34.3291 2.90727 34.2306 3.0774 34.0603C3.24753 33.89 3.45647 33.6451 3.84747 33.6361C4.23847 33.6271 4.91004 33.7825 5.09808 33.9707C5.28611 34.1559 5.48012 34.3441 5.52191 34.6936C5.5637 35.0431 5.48908 35.3687 5.4652 35.4822C5.44132 35.5957 5.28611 35.6375 5.15777 35.303C5.02644 34.9684 4.80856 34.0185 3.9967 34.0603H3.99372Z" fill="white"/>'
        + '<path d="M4.48927 36.8565C4.48927 36.8565 4.12513 36.6205 4.04156 36.5398C3.96097 36.4592 3.93709 36.4502 4.04156 36.3935C4.14602 36.3367 4.15199 36.1425 3.96992 36.0679C3.78785 35.9932 3.54012 36.0589 3.39387 36.2561C3.24463 36.4502 3.35805 36.5637 3.57892 36.743C3.79681 36.9222 4.2296 37.2478 4.48927 37.3105C4.74894 37.3763 5.19665 37.3434 5.17278 36.976C5.1489 36.6115 5.04145 36.274 5.17278 36.3098C5.30709 36.3457 5.58467 36.6683 5.716 36.967C5.84733 37.2687 5.97567 37.6242 5.86225 37.911C5.74883 38.1948 5.54587 38.2844 5.22949 38.3083C4.9131 38.3322 4.78177 38.2933 4.78177 38.4636C4.78177 38.6339 5.12204 38.6667 5.53393 38.6578C5.94284 38.6488 6.43831 38.2366 6.54576 37.9827C6.65022 37.7317 6.41741 37.2418 6.21147 36.8356C6.0085 36.4293 5.71003 36.0828 5.39066 35.9334C5.07129 35.7811 4.5221 35.7781 4.45644 36.0798C4.39077 36.3815 4.62657 36.8774 4.48927 36.8505V36.8565Z" fill="white"/>'
        + '<path d="M23.1258 27.1092C23.1258 27.1092 23.3407 37.3554 23.3079 37.8453C23.278 38.3352 22.9109 39.9722 21.4126 41.4688C19.9142 42.9683 18.3263 44.1154 16.2788 44.7726C14.2313 45.4298 11.5719 44.3454 11.5122 41.4538C11.4525 38.5622 13.3 36.5757 13.5895 36.268C13.8791 35.9633 14.0671 35.8199 14.1895 35.7273C14.3118 35.6347 14.4253 35.6556 14.485 35.7273C14.5447 35.799 14.5267 35.9932 14.4044 36.0828C14.282 36.1754 13.5895 36.9282 13.5179 38.4905C13.4463 40.0498 13.8044 41.8242 14.2611 42.2634C14.7208 42.7025 15.9923 43.4254 17.9891 42.6099C19.9858 41.7944 20.9857 41.0595 21.2902 39.6824L21.1827 30.8223C21.1827 30.8223 20.9529 30.3414 20.6246 30.2876C20.2963 30.2338 20.356 30.0964 20.5022 29.9501C20.6485 29.8037 21.8841 28.2832 22.1677 27.7933C22.4512 27.3034 22.9407 26.6104 23.1527 26.6104C23.3646 26.6104 23.29 26.8075 23.1228 27.1032L23.1258 27.1092Z" fill="white"/>'
        + '<path d="M26.0984 27.0733C26.0387 26.8074 25.9253 26.3384 25.6895 27.124C25.4537 27.9097 24.8657 29.693 24.5374 30.4279C24.2121 31.1628 23.8031 31.6736 23.6927 31.805C23.5823 31.9364 23.5106 32.1515 23.824 32.1426C24.1404 32.1336 24.4867 32.1844 24.9045 32.6534C25.3224 33.1224 26.9431 34.9266 27.6594 37.0983C28.3788 39.2701 28.8832 40.7995 29.0056 41.9914C29.0056 41.9914 28.9996 42.4903 29.2145 42.4903C29.4294 42.4903 29.692 40.8802 29.692 39.748C29.692 38.6159 29.5488 36.6383 28.7459 34.4457C27.94 32.2531 27.2565 30.6519 26.9968 29.929C26.7371 29.2061 26.1671 27.8679 26.0954 27.0733H26.0984Z" fill="white"/>'
        + '<path d="M31.6562 42.7561C31.6562 42.7561 29.2624 45.1518 27.394 46.0749C27.394 46.0749 27.2656 46.1496 26.803 45.9853C26.3404 45.821 24.5406 44.8949 23.7616 44.7097C22.9825 44.5245 22.699 44.5783 22.4871 44.423C22.2781 44.2676 22.4125 44.184 22.887 44.1929C23.3616 44.2049 25.639 44.2527 27.4238 43.5387C29.2057 42.8248 30.4205 42.2244 30.8175 40.3992C30.8175 40.3992 30.7518 30.7803 30.7518 30.6877C30.7518 30.5951 30.513 30.2456 30.3608 30.1411C30.2086 30.0395 29.9937 29.9887 30.2593 29.7647C30.525 29.5406 31.7577 27.8678 31.901 27.593C32.0442 27.3182 32.471 26.8163 32.6859 26.6908C32.9008 26.5624 33.0232 26.6849 32.9725 27.124C32.9217 27.5631 32.9217 29.9798 32.9307 30.4488C32.9396 30.9178 32.9844 41.1042 32.9844 41.1042C32.9844 41.1042 33.8589 42.0332 35.6408 41.9615C37.4227 41.8898 37.5958 41.1968 37.9928 41.1251C37.9928 41.1251 36.9631 40.3394 35.6587 40.3603C34.3544 40.3812 33.7545 40.8891 33.5903 41.0325C33.4262 41.1758 33.1933 41.0414 33.3366 40.7278C33.4799 40.4111 34.1932 38.5053 34.3365 38.2305C34.4798 37.9556 34.826 37.7196 35.8736 37.7405C36.9243 37.7615 37.8495 38.3111 38.6853 38.8817C39.521 39.4522 40.7418 40.0646 41.9446 40.4022C43.1475 40.7397 43.0878 40.7875 43.4012 40.7875C43.7146 40.7875 43.9981 40.8831 43.5385 41.1938C43.0758 41.5074 42.5296 41.8241 42.2043 42.2662C41.879 42.7083 41.7148 42.9174 41.0999 42.8965C40.4821 42.8726 39.4016 42.7919 38.2256 43.3147C37.0496 43.8375 36.1423 44.1302 35.026 44.175C33.9097 44.2228 32.4591 43.7837 31.6592 42.7561H31.6562Z" fill="white"/>'
        + '<path d="M28.6028 3.94314C28.6954 3.85053 28.8386 3.71013 28.6745 3.52194C28.5312 3.35764 28.367 3.33673 28.367 3.24413C28.367 3.33673 28.2029 3.35764 28.0596 3.52194C27.8955 3.71013 28.0387 3.85053 28.1402 3.94314L28.0417 7.04387H27.4627L27.3522 2.47044C27.4836 2.339 27.6895 2.13587 27.4567 1.86702C27.2508 1.63103 27.015 1.60415 27.015 1.46972C27.015 1.60116 26.7792 1.63103 26.5732 1.86702C26.3404 2.13587 26.5434 2.339 26.6777 2.47044H26.6896L26.5464 7.04387H25.9464L25.8718 3.94314C25.9643 3.85053 26.1076 3.71013 25.9434 3.52194C25.8002 3.35764 25.636 3.33673 25.636 3.24413C25.636 3.33673 25.4718 3.35764 25.3286 3.52194C25.1644 3.71013 25.3077 3.85053 25.4092 3.94314L25.3107 7.04387H24.7615L24.651 2.47044C24.7824 2.339 24.9883 2.13587 24.7555 1.86702C24.5496 1.63103 24.3138 1.60415 24.3138 1.46972C24.3138 1.60116 24.078 1.63103 23.872 1.86702C23.6392 2.13587 23.8422 2.339 23.9735 2.47044H23.9854L23.8123 7.98484H30.1877L30.0564 2.47044C30.1877 2.339 30.3937 2.13587 30.1579 1.86702C29.9519 1.63103 29.7162 1.60415 29.7162 1.46972C29.7162 1.60116 29.4804 1.63103 29.2744 1.86702C29.0416 2.13587 29.2446 2.339 29.3759 2.47044H29.3878L29.2446 7.04387H28.6745L28.5999 3.94314H28.6028ZM22.8423 0.531738H31.1578V8.85412H22.8423V0.531738Z" fill="#308240"/>'
        + '<path d="M28.6028 3.94314C28.6953 3.85054 28.8386 3.71014 28.6744 3.52194C28.5312 3.35765 28.367 3.33674 28.367 3.24413C28.367 3.33674 28.2028 3.35765 28.0596 3.52194C27.8954 3.71014 28.0387 3.85054 28.1402 3.94314L28.0417 7.04387H27.4626L27.3522 2.47044C27.4835 2.33901 27.6895 2.13588 27.4567 1.86703C27.2507 1.63104 27.0149 1.60415 27.0149 1.46973C27.0149 1.60116 26.7791 1.63104 26.5732 1.86703C26.3404 2.13588 26.5433 2.33901 26.6776 2.47044H26.6896L26.5463 7.04387H25.9464L25.8718 3.94314C25.9643 3.85054 26.1075 3.71014 25.9434 3.52194C25.8001 3.35765 25.636 3.33674 25.636 3.24413C25.636 3.33674 25.4718 3.35765 25.3285 3.52194C25.1644 3.71014 25.3076 3.85054 25.4091 3.94314L25.3106 7.04387H24.7614L24.651 2.47044C24.7823 2.33901 24.9883 2.13588 24.7555 1.86703C24.5495 1.63104 24.3137 1.60415 24.3137 1.46973C24.3137 1.60116 24.0779 1.63104 23.872 1.86703C23.6392 2.13588 23.8421 2.33901 23.9735 2.47044H23.9854L23.8123 7.98484H30.1877L30.0564 2.47044C30.1877 2.33901 30.3936 2.13588 30.1578 1.86703C29.9519 1.63104 29.7161 1.60415 29.7161 1.46973C29.7161 1.60116 29.4803 1.63104 29.2744 1.86703C29.0416 2.13588 29.2445 2.33901 29.3758 2.47044H29.3878L29.2445 7.04387H28.6744L28.5998 3.94314H28.6028Z" fill="white"/>'
        + '</g><defs><clipPath id="clip0_2173_5869"><rect width="54" height="50" fill="white"/></clipPath></defs></svg>')
    }
    else {
        $('#wgDirectorymodal .modalbox .modaldetail .modaltitle .halaliconholder').html('');
    }



    $("#wgDirectorymodal .modalbox .modaldetail .modalblog .bleft #tenantUnitNum").text(tenant.storeUnitNum);

    $("#wgDirectorymodal .modalbox .modaldetail .modalblog .bleft #tenantTime").text(tenant.storeOperatingHour);

    $("#wgDirectorymodal .modalbox .modaldetail .modalblog .bleft #tenantPhone").text(tenant.storePhoneNum);

    // $("#wgDirectorymodal .modalbox .modaldetail .modalblog .bright .qrholder").attr('src', tenant.storeQrCode);

    $("#wgDirectorymodal .modalbox .modaldesc .destxtarea #tenantDescription").html(decodeHTML(tenant.storeDescEng));

    $('#wgDirectorymodal .modalbox .btnholder').unbind('click');

    $('#wgDirectorymodal .modalbox .btnholder').css('pointer-events', 'visible');

    $('#wgDirectorymodal .modalbox .btnholder').on('click', function() {
            $('#wgDirectorymodal').fadeOut(100);
            onclickwayfindDirectory(tenant.storeUnitNum, tenant.id);
        }
    );
    }
    else {
        return;
    }
}

function decodeHTML(text) {
    var txtArea = document.createElement('textarea');
    txtArea.innerHTML = text;
    return txtArea.value;
}
  
function encodeHTML(text) {
var textArea = document.createElement('textarea');
textArea.innerText = text;
var encodedOutput=textArea.innerHTML;
var arr=encodedOutput.split('<br>');
encodedOutput=arr.join('\n');
return encodedOutput;
}

function onclickwayfindDirectory(shopunitnum, id) {

    hideWayfindingResult();

    desfloor = "";

    $("#swiperDirectory .wayfindingbtn").click(function(event){
        event.stopPropagation();
        event.currentTarget.children[0].style.background = "#006EB8";
        event.currentTarget.children[0].children[0].children[0].attributes.fill.value = "#FFFFFF";
    });

    $("#wgConcierge #infoContainer .infoRow .wayfindingbtn").click(function(event){
        event.stopPropagation();
        event.currentTarget.children[0].style.background = "#006EB8";
        event.currentTarget.children[0].children[0].children[0].attributes.fill.value = "#FFFFFF";
    });

    $("#swiperDining .wayfindingbtn").click(function(event){
        event.stopPropagation();
        event.currentTarget.children[0].style.background = "#006EB8";
        event.currentTarget.children[0].children[0].children[0].attributes.fill.value = "#FFFFFF";
    });


    wayfindshopunit = shopunitnum;
    endshopId = id;
    // if(shopunitnum != "#03-00") {
    // }

    var shop = getTenantObj(id);
    endshopentityname = shop.storeEntityName;
    // else {
    //     //pass
    // }

    // for testing
    desfloor = getFloor(shopunitnum.split('-')[0].split('#')[1]);
    // show route box (different level)
    if(kioskInfo[0].kioskFloor != desfloor) {
        $("#wgWayFindescliftPopup").show();
    }
    else {
        $('#wgWayFindescliftPopup').hide();
        if(!isatFloorGuide) {
            $('.navmenu .navgroup .navbox #navFloorGuide').css('pointer-events', 'visible');
            onclickNavBtn('wgFloorGuide');
            wayfindvalue = shopunitnum + '|' + 'esc';
        }
        else {
            wayfindvalue = shopunitnum + '|' + 'esc';
        }
        timeout = setTimeout(function() {
            myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
        },300);
    }

}

function onclickLiftWayFind() {
    $('#wgWayFindescliftPopup').fadeOut('fast');
    onclickNavBtn("wgFloorGuide");
    hideIconsbtn();

    wayfindvalue = wayfindshopunit + '|' + "lift";

    route = 'lift';
    // calling unity wayfind function 
    timeout = setTimeout(function() {
        myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
    },300);
}

function onclickEscWayFind() {
    $('#wgWayFindescliftPopup').fadeOut('fast');
    onclickNavBtn("wgFloorGuide");
    hideIconsbtn();

    wayfindvalue = wayfindshopunit + '|' + "esc";
    route = 'esc';
    // calling unity wayfind function
    timeout = setTimeout(function() {
        myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
    },300);
}

function getFloor(floor) {
    switch (floor) {
        case "B2":
            finaldes = "B2";
            break;
        case "B1":
            finaldes = "B1";
            break;
        case "01":
            finaldes = "L1";
            break;
        case "02":
            finaldes = "L2";
            break;
        case "03":
            finaldes = "L3";
            break;
        case "04":
            finaldes = "L4";
            break;
        case "05":
            finaldes = "L5";
            break;
    }
    return finaldes;
}

// Happening nav button on click
function onclickHappeningsBtn(id) {

    $('#wgHappenings .menuHappenings .navgroup > div').attr("style","");
    $('#wgHappenings .menuHappenings .navgroup > div .btntxt').css({"color":"#222222", "border-left":"6px solid #BBE3FA", "border-right":"0px"});
    $('#wgHappenings .menuHappenings .navgroup #' + id).css("background-color", "#006EB8");
    // $('#wgHappenings .menuHappenings .navgroup #' + id).css();
    $('#wgHappenings .menuHappenings .navgroup #' + id + ' .btntxt').css({"color":"#FFFFFF", "border-right":"6px solid #BBE3FA", "border-left":"0px"});
    $('#wgHappenings #swiperHappenings .swiper-wrapper').html("");
    // update swiper

    switch (id) {
        case "all" : {
            
            // console.log(happeningsArray);

            createHappeningSwiper(happeningsArray, 3,3);
            break;
        }

        case "event" : {

            var filtered_hpn = getHappeningsByCategory(happeningsArray, id);
            createHappeningSwiper(filtered_hpn,3,3);

            break;   
        }

        case "promotion" : {

            var filtered_hpn = getHappeningsByCategory(happeningsArray, id);
            createHappeningSwiper(filtered_hpn,3,3);
            break;                                                       
        }
    }

    SwiperHappenings.update();
    SwiperHappenings.slideTo(0,1,false);

}

// Happening Page
// Return Happening objects by category
function getHappeningsByCategory(happeningsArray, category) {

    var filtered_hpn = new Array();
    
    if(category == "all") {
        return happeningsArray;
    }

    for (let i=0;i<happeningsArray.length;i++) {

        if(happeningsArray[i].hpnTypes == category) {
            filtered_hpn.push(happeningsArray[i]);
        }
        else if(happeningsArray[i].hpnTypes == category) {
            filtered_hpn.push(happeningsArray[i]);
        }
    }
    return filtered_hpn;
}

// Happening popup on click
function onclickHappening(id) {

    var happening = getHappeningObj(id);
    // console.log(happening);

    $("#happeningpopup").fadeIn('fast');

    $("#happeningpopup #hpnpopup_text").text(happening.hpnTitle);

    if(happening.hpnImgUrl == "" || happening.hpnImgUrl == null) {
        $('#happeningpopup #hpnpopup_imgholder img').attr('src', './asset/error/errorimg.jpg');
    }
    else {
        var imgurl = happening.hpnImgUrl.split('/');
        // console.log(imgurl);
        var imgdetail = getHappeningsImage(imgurl[imgurl.length - 1]);
        // console.log(imgdetail.file_path);
        $("#happeningpopup #hpnpopup_imgholder img").attr('src', `../${imgdetail.file_path}/${imgdetail.file_name}`);
    }

    var happening_sd = "";
    var happening_ed = "";
    var happeningtext = "";

    if(happening.hpnStartDate == "" && happening.hpnEndDate == "") {
        happening_sd = "";
        happening_ed = "";
        happeningtext = "";
    }
    else if(happening.hpnStartDate == "") {
        happening_ed = convertToMonth(Number(happening.hpnEndDate));
        happeningtext = happening_ed;
    }
    else if(happening.hpnEndDate == "") {
        happening_sd = convertToMonth(Number(happening.hpnStartDate));
        happeningtext = happening_sd;
    }
    else {
        happening_sd = convertToMonth(Number(happening.hpnStartDate));
        happening_ed = convertToMonth(Number(happening.hpnEndDate));
        happeningtext = happening_sd + " - " + happening_ed ;
    }
    
    $('#happeningpopup #hpnpopup_info #hpnpopup_row1 #hpnpopup_date').html('<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">' 
    + '<path d="M23.2222 27H3.77778C2.24365 27 1 25.7912 1 24.3V5.4C1 3.90883 2.24365 2.7 3.77778 2.7H6.55556V0H9.33333V2.7H17.6667V0H20.4444V2.7H23.2222C24.7563 2.7 26 3.90883 26 5.4V24.3C26 25.7912 24.7563 27 23.2222 27ZM3.77778 10.8V24.3H23.2222V10.8H3.77778ZM3.77778 5.4V8.1H23.2222V5.4H3.77778Z" fill="#222222"/>'
    + '</svg> <span class=hpnpopup_span>' + happeningtext + '</span>');

    if(happening.hpnTypes == "event") {
        if(happening.hpnQrCode == null || happening.hpnQrCode == ""){
            $('#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2').hide();
        }
        else {
            $('#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2').show();
            $('#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2 #hpnpopup_qrcode').show();
            new QRCode(document.querySelector('#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2 #hpnpopup_qrcode #hpnpopup_qr'), {
                text: happening.hpnQrCode,
                width: 80,
                height: 80
            });
        }
    }
    else {
        $('#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2').hide();
    }



    // $('#happeningpopup #hpnpopup_info #hpnpopup_row1 #hpnpopup_location').html('<svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">'
    // + '<path d="M10.7499 27C8.81025 25.3843 7.01232 23.613 5.37497 21.7046C2.91784 18.8387 1.35705e-06 14.5706 1.35705e-06 10.5034C-0.00217652 6.2556 2.61722 2.42515 6.63589 0.7995C10.6546 -0.826155 15.2804 0.0734141 18.3548 3.07843C20.3765 5.04394 21.509 7.71756 21.4999 10.5034C21.4999 14.5706 18.5821 18.8387 16.1249 21.7046C14.4876 23.613 12.6896 25.3843 10.7499 27ZM10.7499 6.00433C9.10398 6.00433 7.58305 6.86185 6.76007 8.25387C5.93708 9.64588 5.93708 11.3609 6.76007 12.7529C7.58305 14.145 9.10398 15.0025 10.7499 15.0025C13.2944 15.0025 15.3571 12.9882 15.3571 10.5034C15.3571 8.01863 13.2944 6.00433 10.7499 6.00433Z" fill="#B30000"/>'
    // + '</svg> <span class=hpnpopup_span> Location | ' + happening.hpnLocation + '</span>');

    $('#happeningpopup #hpnpopup_info #hpnpopup_row3 #hpnpopup_descholder #hpnpopup_desc').html(happening.hpnDescription);
    
    // $('#happeningpopup #hpnpopup_wayfindingbtn #wayfindlogo').attr('onclick', 'wayfindClick(\"'+ id + '\")');

    $('#happeningpopup').attr("style", "");
}

// return each happening object
function getHappeningObj(happening_id) {
    for(var i=0; i<happeningsArray.length; i++) {
        if(happening_id == happeningsArray[i].id) {
            return happeningsArray[i];
        }
    }
}

function getDiningSubcategory(dining_catid) {
    for(var i=0; i< subcategoryArray.length; i++) {
        if(subcategoryArray[i].category == dining_catid) {
            diningsubcategoryArray.push(subcategoryArray[i]);
        }
    }
}

 function onWayfindingComplete(arrfloor)
{
//     console.log(arrfloor);

//     var floors = arrfloor.split(',');

//     var htmlstr = "";

//     for(var i=0;i<floors.length-1;i++)
//     {
//         htmlstr = htmlstr + '<div class="btnfloor"><button onclick="onclickSwitchFloor(\''+floors[i]+'\')">'+floors[i]+'</button></div>';

//         if(i!=(floors.length-2))
//         {
//             htmlstr = htmlstr + ' <div class="nexticon"><img src="assets/image/nexticon.png" /></div>';
//         }
//     }

//     $('#endwayfindingnav #btnflow').html(htmlstr);

//     $('#endwayfindingnav').fadeIn('fast');

 }

// Transport nav button on click
function onclickTransportBtn(id){

    // change style
    $('#wgTransport .menuTransport .navgroup > div').attr("style","");
    $('#wgTransport .menuTransport .navgroup > div .btntxt').css({"color":"#222222", "border-left":"6px solid #BBE3FA", "border-right":"0px"});
    $('#wgTransport .menuTransport .navgroup #' + id).css("background-color", "#006EB8");
    $('#wgTransport .menuTransport .navgroup #' + id + ' .btntxt').css({"color":"#FFFFFF", "border-right":"6px solid #BBE3FA", "border-left":"0px"});

    switch (id) {
        case "btncarpark" : {

            $('.heading').html('<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">'
            + '<rect width="53" height="53" rx="26.5" fill="#006EB8"/>'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M36.8 30.9001C37.1 30.9001 37.4 30.6001 37.4 30.3001V28.4001C37.4 28.1001 37.1 27.8001 36.8 27.8001H32.6C32.3 27.8001 32 28.1001 32 28.4001V30.3001C32 30.6001 32.3 30.9001 32.6 30.9001H36.8ZM21.3 30.9001C21.6 30.9001 21.9 30.6001 21.9 30.3001V28.4001C21.9 28.1001 21.6 27.8001 21.3 27.8001H17.2C16.9 27.8001 16.6 28.1001 16.6 28.4001V30.3001C16.6 30.6001 16.9 30.9001 17.2 30.9001H21.3ZM19.2 18.4001L17 23.6001C16.7 24.2001 17.1 24.7001 17.8 24.7001H36.2C36.9 24.7001 37.2 24.2001 37 23.6001L34.8 18.4001C34.5 17.8001 33.8 17.3001 33.1 17.3001H20.9C20.2 17.3001 19.5 17.8001 19.2 18.4001ZM33.8 16.1001C34.9 16.1001 36.2 16.9001 36.6 18.0001L38 21.4001L39.4 21.0001C39.5 21.0001 39.7 21.0001 39.8 21.0001C40.5 21.0001 41 21.5001 41 22.2001V22.9001C41 23.7001 40.3 24.4001 39.5 24.4001H39.4L39.6 24.9001C40 25.9001 40.3 27.5001 40.3 28.5001V35.3001C40.3 36.1001 39.6 36.8001 38.8 36.8001H36.9C36 36.8001 35.4 36.1001 35.4 35.3001V33.6001H18.6V35.3001C18.6 36.1001 17.9 36.8001 17.1 36.8001H15.3C14.4 36.8001 13.8 36.1001 13.8 35.3001V28.5001C13.8 27.5001 14.1 25.9001 14.5 24.9001L14.7 24.4001H14.5C13.7 24.5001 13 23.8001 13 22.9001V22.2001C13 21.5001 13.5 21.0001 14.2 21.0001C14.3 21.0001 14.4 21.0001 14.6 21.0001L15.9 21.4001L17.4 18.0001C17.8 17.0001 19.1 16.1001 20.2 16.1001H21.2" fill="white"/>'
            + '</svg> <span class="headingtxt">Carpark Charges</span>');

           $('.MapPreview').hide();

           $('.Stops').hide();

           $('.carparkholder').show();

           $('.taxibodyholder').hide();

            break;
        }

        case "btntrain" : {
            $('.heading').html('<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">'
            + '<rect width="53" height="53" rx="26.5" fill="#006EB8"/>' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.0556 26H35.8889V18.2H28.0556V26ZM33.9306 32.5C32.8469 32.5 31.9722 31.629 31.9722 30.55C31.9722 29.471 32.8469 28.6 33.9306 28.6C35.0129 28.6 35.8889 29.471 35.8889 30.55C35.8889 31.629 35.0129 32.5 33.9306 32.5ZM17.6111 26H25.4444V18.2H17.6111V26ZM19.5694 32.5C18.4858 32.5 17.6111 31.629 17.6111 30.55C17.6111 29.471 18.4858 28.6 19.5694 28.6C20.6518 28.6 21.5278 29.471 21.5278 30.55C21.5278 31.629 20.6518 32.5 19.5694 32.5ZM33.36 36.2635C36.2022 36.2635 38.5 34.1224 38.5 31.473V18.473C38.5 13.6838 33.2412 13 26.75 13C20.2575 13 15 13.6838 15 18.473V31.473C15 34.1224 17.3056 36.2635 20.1413 36.2635L17.9375 39H35.5625L33.36 36.2635Z" fill="white"/>'+ 
            '</svg> <span class="headingtxt">Train</span>');

           $('.MapPreview img').attr("src", "asset/mrt_map_preview.png");

           $('.MapPreview').show();

           $('.Stops h4').text("Train");

           $('.Stops span').text("Jurong East, North-South Line (NS1), East-West Line (EW24)");

           $('.Stops').show();

           $('.carparkholder').hide();

           $('.taxibodyholder').hide();

           break;
        }
        
        case 'btnbus' : {
            $('.heading').html('<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="53" height="53" rx="26.5" fill="#006EB8"/>' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1355 27.6471H35.6466V18.5949H18.1355V27.6471ZM33.3035 35.5955C32.2869 35.5955 31.4595 34.7815 31.4595 33.778C31.4595 32.776 32.2855 31.9633 33.3035 31.9633C34.3216 31.9633 35.1461 32.776 35.1461 33.778C35.1461 34.7815 34.3216 35.5955 33.3035 35.5955ZM20.5946 35.5955C19.5765 35.5955 18.7506 34.7815 18.7506 33.778C18.7506 32.776 19.5765 31.9633 20.5946 31.9633C21.6113 31.9633 22.4372 32.776 22.4372 33.778C22.4372 34.7815 21.6113 35.5955 20.5946 35.5955ZM20.4097 17.5222H33.3738V15.5888H20.4097V17.5222ZM38.6822 19.8471C38.4499 17.6112 38.0814 15.8715 37.4964 15.1874C35.0859 12.3749 18.2028 12.1686 16.2857 15.1874C15.8154 15.9266 15.487 17.6607 15.2676 19.8499C14.5549 19.9333 14 20.5241 14 21.2477V23.9852C14 24.5944 14.3915 25.1074 14.9378 25.3081C14.8073 29.6201 14.9134 34.12 15.107 36.3573C15.107 38.0829 16.2857 37.7975 16.2857 37.7975H17.3884V39.663C17.3884 40.4022 18.1613 41 19.1134 41C20.0684 41 20.8413 40.4022 20.8413 39.663V37.7975H33.6792V39.663C33.6792 40.4022 34.4536 41 35.4071 41C36.3607 41 37.1336 40.4022 37.1336 39.663V37.7975H37.4964C37.4964 37.7975 38.8815 37.9854 38.9704 37.1714C38.9704 34.9398 39.1138 29.9946 38.9962 25.3265C39.577 25.147 40 24.6198 40 23.9852V21.2477C40.0014 20.5071 39.4193 19.9064 38.6822 19.8471Z" fill="white"/>'
            + '</svg> <span class="headingtxt">Bus</span>');

           $('.MapPreview img').attr("src", "asset/bus_map_preview.png");

           $('.MapPreview').show();

           $('.Stops h4').text("Bus");

           $('.Stops span').text("41, 49, 51, 52, 66, 78, 79, 97, 97e, 98, 98M, 99, 105,143, 143M, 160, 183, 197, 333, 334, 335, 506, 990");

           $('.Stops').show();
           $('.carparkholder').hide();
           $('.taxibodyholder').hide();

           break;

        }
    }
}

// concierge wayfind 
function onclickConciergeWayfind(location) {

}

// category menu
function onclickCatBtn(content,id) {
    
    if (content == 'wgDirectory'){
        $("#" + content + " #swiperCategory .catcol > div").css('background', '#FFFFFF');
        $("#" + content + " #swiperCategory .catcol > div .cattxt").css('color', '#222222');
    
    
        $("#" + content + " #swiperCategory .catcol #" + id).css('background', '#006EB8');
        $("#" + content + " #swiperCategory .catcol #" + id + ' .cattxt').css('color', '#FFFFFF');
        var filtered_tenant = getTenantbyCategory(displayonDirectorytenant, id);
        createDirectorySwiper(filtered_tenant, 4);
        $('#wgDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper').css('min-height', '936px');
        SwiperDirectory.update();
    }
    else if (content == 'wgDining') {
        $("#" + content + " #swiperSubCategory .catcol > div").css('background', '#FFFFFF');
        $("#" + content + " #swiperSubCategory .catcol > div .cattxt").css('color', '#222222');
    
    
        $("#" + content + " #swiperSubCategory .catcol #" + id).css('background', '#006EB8');
        $("#" + content + " #swiperSubCategory .catcol #" + id + ' .cattxt').css('color', '#FFFFFF');
        var filtered_tenant = getTenantbySubcategory(diningArray, id);
        createDiningSwiper(filtered_tenant,4);
        $('#wgDining #SwiperDiningPage #swiperDining .swiper-wrapper').css('min-height', '936px');
        SwiperDining.update();
    }
    else {}
}

function onclickLvlBtn(content, id) {

    $("#" + content + " .menuLevel .lvlgroup > div").css('background-color', '#FFFFFF');
    $("#" + content + " .menuLevel .lvlgroup > div .lvltxt").css('color', '#222222');
    $("#" + content + " .menuLevel .lvlgroup #" + id).css('background-color', '#006EB8');
    $("#" + content + " .menuLevel .lvlgroup #" + id + ' .lvltxt').css('color', '#FFFFFF');

    if (content == 'wgDirectory'){
        var filtered_tenant = getTenantbyLevel(displayonDirectorytenant,id);
        createDirectorySwiper(filtered_tenant,5);
        // $('#wgDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper').css('min-height', '1140px');
        SwiperDirectory.update();
    }
    else if(content == 'wgDining') {
        var filtered_tenant = getTenantbyLevel(diningArray, id);
        createDiningSwiper(filtered_tenant, 5);
        // $('#wgDining #SwiperDiningPage #swiperDining .swiper-wrapper').css('min-height', '1140px');
        SwiperDining.update();
    }
    else {}

}

function resizeInput()
{
    this.style.width = (this.value.length+9)+"ch";
}

function filterTenantbyKeyword(tenantArray, word) {
    var match = tenantArray.filter(tenant => {
        if( tenant.storeMetatag != null) {
            return tenant.storeMetatag.toUpperCase().includes(word.trim().toUpperCase()) || tenant.storeNameEng.toUpperCase().startsWith(word.trim().toUpperCase())
        }
        else {
            return tenant.storeNameEng.toUpperCase().startsWith(word.trim().toUpperCase());
        }
        
    })
    return match;
}

function convertToMonth(ms) {
    var date = new Date(ms);
    var year = date.getFullYear();
    var month = monthNames[date.getMonth()];
    var day = ("0" + date.getDate()).slice(-2);
    var format = `${day} ${month} ${year}`
    return format;
}

function displayDate() {
    var date = new Date();
    var day = date.getDay();
    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for(var i=0; i< days.length -1; i++) {
        if(i == day) {
            $('#wgHome #currentDay').text(days[i]);
            break;
        }
    }

    $('#wgHome #currentDate').text(', ' + convertToMonth(date.getTime()));
}

function displayTime() {
    var date = new Date();
    var today_time = "";
    var hr = date.getHours();
    var min = date.getMinutes();
    var am_pm = hr >= 12 ? 'PM' : 'AM';
    hr = hr % 12;
    hr = hr ? hr : 12;
    min = min < 10 ? '0' + min : min;
    today_time = hr + ":" + min + " " + am_pm;

    $('#wgHome #currentTime').text(today_time);
}

function sortTenants(x,y) {
    if(x.storeNameEng.toUpperCase() < y.storeNameEng.toUpperCase()) {return -1;}
    if(x.storeNameEng.toUpperCase() > y.storeNameEng.toUpperCase()) {return 1;}
    return 0;
}

function sortCategory(x,y) {
    if(x.catName.toUpperCase() < y.catName.toUpperCase()) {return -1;}
    if(x.catName.toUpperCase() > y.catName.toUpperCase()) {return 1;}
    return 0;
}

function sortHappening(x,y) {
    if(x.hpnTitle.toUpperCase() < y.hpnTitle.toUpperCase()) {return -1;}
    if(x.hpnTitle.toUpperCase() > y.hpnTitle.toUpperCase()) {return 1;}
    return 0;
}

function sortsubCategory(x,y) {
    if(x.name.toUpperCase() < y.name.toUpperCase()) {return -1;}
    if(x.name.toUpperCase() > y.name.toUpperCase()) {return 1;}
    return 0;
}

function checkDateRange(sd, ed) {
    if(sd == "" || ed == "") {
        return true;
    }

    var today = new Date().getTime();
    var startdate = new Date(sd).getTime();
    var enddate = new Date(ed).getTime();

    if(today >= startdate && today <= enddate) {
        return true;
    }
    else {
        return false;
    }
}

function checkDaysRange(days) {
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var todayDay = weekday[today.getDay()];

    for(var i=0; i<days.length; i++) {
        if(days[i] == todayDay) {
            return true;
        }
        var isLastIndex = i  == days.length - 1;
        
        if(isLastIndex) {
            return false;
        }
    }
}

function checkTimeRange(st, et) {
    if(st == "0:00" || et == "0:00") {
        return true;
    }

    var now = new Date();
    var starttime = new Date();
    starttime.setHours(st.split(":")[0], st.split(":")[1], 0, 0);
    console.log(starttime);

    var endtime = new Date();
    endtime.setHours(et.split(":")[0], et.split(":")[1], 0, 0);

    if ((now.getTime() >= starttime.getTime()) && (now.getTime() <= endtime.getTime())) {
        return true;
    }
    else {
        return false;
    }

}

function sortContentByOrder(a,b) {
    if(Number(a.contentOrder) < Number(b.contentOrder)) {
        return -1;
    }
    if (Number(a.contentOrder) > Number(b.contentOrder)) {
        return 1;
    }
    return 0;
}

function onclickhiddenbutton() {

    press_count = press_count + 1;

    if (press_count > 10) {

        $.get(
            "http://localhost:8888/api/main_controller/open_login_form"
        );

    }

    setTimeout(function () {

        press_count = 0;

    }, 5000);

}

function sortByOrder(a,b) {
    if(Number(a.order) < Number(b.order)) {
        return -1;
    }
    if(Number(a.order) > Number(b.order)) {
        return 1;
    }
    return 0;
}

function onscreenTouchPad() {
    // Get the touchpad element
    var touchpad = document.getElementById('touchpad');
    var mouse = document.getElementById('custommouse');
    var leftclick = document.getElementById('leftclick');

    // Set the initial cursor position
    var cursorX = 0;
    var cursorY = 0;

    const maxWidth = 1080;
    const maxHeight = 1716;

// Initialize Interact.js on the touchpad element
interact(touchpad)
  .draggable({
    inertia: true,
    restrict: {
      restriction: 'parent',
      endOnly: true
    },
    listeners: {
      start: function(event) {
        cursorX = cursorX;
        cursorY = cursorY;
      // requestAnimationFrame(updateCursor);
      },
      move: function(event) {

        cursorX += event.dx;
        cursorY += event.dy;
        // Restrict cursor position within the defined boundaries
        cursorX = Math.max(0, Math.min(cursorX, maxWidth - mouse.offsetWidth));
        cursorY = Math.max(0, Math.min(cursorY, maxHeight - mouse.offsetHeight));
        // Move the cursor
        mouse.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
    }
  })
}

// Close Popup
function closehappeningPopUp() {
    $('#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2 #hpnpopup_qrcode').hide();
    $("#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2 #hpnpopup_qrcode #hpnpopup_qr").html("");
    $("#happeningpopup").fadeOut('fast');
}

function closedirectoryPopUp() {
    $("#wgDirectorymodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");
    $("#wgDirectorymodal").fadeOut('fast');
    // $('#wgDirectorymodal .modalbox .modalimgholder img').attr('src', '');
}

function closediningPopUp() {
    $("#wgDiningmodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");
    $("#wgDiningmodal").fadeOut('fast');
}

function closeWayFindPopUp() {
    // $("#wgWayFindescliftPopup .modalbox").html("");
    $("#wgWayFindescliftPopup").fadeOut('fast');
    $("#swiperDirectory .wayfindingbtn .btnholder").css('background', '#CAD401');
    $("#swiperDining .wayfindingbtn .btnholder").css('background', '#CAD401');
    $('#wgConcierge #infoContainer .infoRow .wayfindingbtn .btnholder').css('background', '#CAD401');
}

// get objects from data arrays
function getTenantObj(tenant_id) {
    for(var i=0; i<tenantArray.length; i++) {
        if(tenant_id == tenantArray[i].id){
            return tenantArray[i];
        }
    }
}

// show on map, hide on list
function filterTenantObj(tenantArray) {
    for(var i=0; i < tenantArray.length; i++) {
        if(tenantArray[i].storeDisplayOnList == "T") {
            displayonDirectorytenant.push(tenantArray[i]);
        }
    }
}

// filter shopping by 3 category Ids
function filterShoppingTenant(tenantArray, shoppingcat_id) {
    for(var i=0; i<tenantArray.length; i++) {
        if(tenantArray[i].storeCategory == shoppingcat_id) {
            shoppingArray.push(tenantArray[i]);
        }
    }
}

function filterDiningTenant(tenantArray, diningcat_id) {
    for(var i=0; i<tenantArray.length; i++) {
        if(tenantArray[i].storeCategory == diningcat_id) {
            diningArray.push(tenantArray[i]);
        }
    }
}

function getTenantbyCategory(tenantArray, cat_id) {
    var filtered_tenant = new Array ();
    for (var i=0; i<tenantArray.length; i++) {
        if(tenantArray[i].storeCategory == cat_id) {
            filtered_tenant.push(tenantArray[i]);
        }
    }
    return filtered_tenant;
}

// by ID
function getTenantbySubcategory(tenantArray, subcat_id) {
    var filtered_tenant = new Array ();
    for (var i=0; i<tenantArray.length; i++) {
        if(tenantArray[i].storeSubCategory.length > 1) {
            for(var j=0; j<tenantArray[i].storeSubCategory.length; j ++) {
                if(tenantArray[i].storeSubCategory[j] == subcat_id) {
                    filtered_tenant.push(tenantArray[i]);
                    break;
                }
            }
        }
        else {
            if(tenantArray[i].storeSubCategory == subcat_id) {
                filtered_tenant.push(tenantArray[i]);
            }
        }
    }
    return filtered_tenant;
}

function getSubcategorybyCategoryId(subcategoryArray, cat_id) {
    var filtered_subcategory = new Array();
    for(var i=0; i<subcategoryArray.length; i++) {
        if(subcategoryArray[i].category == cat_id) {
            filtered_subcategory.push(subcategoryArray[i]);
        }
    }
    return filtered_subcategory;
}

function getTenantbyLevel(tenantArray, lvl_id) {
    var filtered_tenant = new Array();
    for(var i=0; i<tenantArray.length; i++){
        if(tenantArray[i].storeFloor == lvl_id){
            filtered_tenant.push(tenantArray[i]);
        }
    }
    return filtered_tenant;
}

function getTenantThumbnail(imgname) {
    for(var i=0; i<tenantImageArray.length; i++) {
        if(imgname == tenantImageArray[i].file_name) {
            return tenantImageArray[i];
        }
    }
}

function getHappeningsImage(imgname) {
    for(var i=0; i< happeningImageArray.length; i++) {
        if(imgname == happeningImageArray[i].file_name) {
            return happeningImageArray[i];
        }
    }
}

function getMediabyId(media_id) {
    for(var i=0; i< mediaArray.length; i++) {
        if(media_id == mediaArray[i].id) {
            return mediaArray[i];
        }
    }
}

function getPlaylistbyId(py_id) {

    for(var i=0;i<pylistArray.length; i++) {
        if( py_id == pylistArray[i].id) {
            return pylistArray[i];
        }
    }
}

function getContentbyId(ctn_id) {
    for(var i=0; i< contentArray.length; i++) {
        if(ctn_id == contentArray[i].id) {
            return contentArray[i];
        }
    }
}

function getSequencebyId(seq_id) {
    for(var i=0;i<sequenceArray.length;i ++) {
        if(seq_id == sequenceArray[i].id) {
            return sequenceArray[i];
        }
    }
}

// remove NULL category
function filteredCategory(unfilteredcategoryArray) {
    for(var i=0; i<unfilteredcategoryArray.length; i++) {
        if(unfilteredcategoryArray[i].catName != "NULL") {
            categoryArray.push(unfilteredcategoryArray[i]);
        }
    }
}

function loadImages() {
    $.getJSON('../commonfile/data/kiosk_data.json', function(data) {
        tenantImageArray = data.store_list;
        happeningImageArray = data.happening_list;
    }).then(() => {
        loadJson();
    })
    
}

function loadJson() {
    $.getJSON("../commonfile/data/kiosk_content.json", function(data) {
        happeningsArray = data.happening.sort(sortHappening);
        tenantArray =  data.store.sort(sortTenants);
        kioskInfo = data.kiosk;
        unfilteredcategoryArray = data.category.sort(sortCategory);
        channelArray = data.channel;
        pylistArray = data.playlist;
        contentArray = data.content;
        mapArray = data.map;
        mediaArray = data.media;
        sequenceArray = data.sequence;
        subcategoryArray = data.subcategory.sort(sortsubCategory);
        console.log("done loading");
        // initialSetting();
        filteredCategory(unfilteredcategoryArray);
    }).then(()=> {
        loadjsontimeout = setTimeout(initialSetting(), 4000);
    });
}

// service workers
function initServiceWorker(){
    if("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js");
    }
}