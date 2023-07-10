var happeningsArray;
var tenantArray;
var displayonDirectorytenant = new Array();
var diningsubcategoryLandingArray = [
    {'catId' : "6396eec27871f34f48f09f6b",
    'catCode':'B&C', 
    'catName':'Bakery & Confectionery', 
    'catSVG' : '<svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0283 1.23235C27.7643 1.0118 26.4065 0.0257843 25.1011 3.32007e-05C24.9721 -0.00245884 24.8937 0.13585 24.9605 0.242592C24.9965 0.299909 25.0278 0.352658 25.0544 0.400837C25.5395 1.28759 25.6467 1.92514 25.6604 2.27361C25.6651 2.40569 25.5108 2.48543 25.3998 2.40776L22.5074 0.374255C22.4924 0.363872 22.4757 0.355565 22.4581 0.350581C21.8174 0.16617 20.6851 -0.0585299 18.061 0.701128C17.7961 0.777967 17.5977 0.878894 17.4383 0.991867C17.3633 1.04462 17.3474 1.14637 17.4036 1.21781C17.776 1.69005 18.082 2.1083 18.229 2.3762C18.7737 3.37219 18.8333 4.36983 18.8226 4.86201C18.8191 4.99451 18.6597 5.06511 18.5543 4.98038L14.5848 1.813C14.5651 1.79721 14.542 1.786 14.5171 1.7806C14.407 1.75692 14.2866 1.73408 14.1528 1.7129C12.7698 1.49443 11.2283 2.05763 10.3047 2.93898C10.1748 3.06276 10.0728 3.17822 9.98928 3.28621C9.94556 3.34311 9.94599 3.42078 9.99014 3.47727C10.3291 3.9113 10.6056 4.293 10.7427 4.54345C11.2874 5.53943 11.347 6.53667 11.3358 7.02926C11.3328 7.16175 11.173 7.23195 11.0676 7.14763L7.92957 4.64313C7.906 4.62444 7.87771 4.61239 7.84728 4.60824C7.40542 4.55009 6.91214 4.47201 6.21143 4.68508C5.93928 4.76732 5.20814 5.024 4.6 5.65614C4.44014 5.82228 4.33386 5.96807 4.25457 6.10305C4.222 6.15871 4.22672 6.22765 4.267 6.27874C4.67114 6.78753 5.00714 7.24192 5.16314 7.52684C5.70828 8.52283 5.76786 9.52048 5.75671 10.0127C5.75328 10.1451 5.59386 10.2153 5.48843 10.1314L2.66929 7.88112C2.62815 7.84873 2.57372 7.8371 2.52272 7.85039C2.14515 7.948 1.74658 8.03563 1.28115 8.41235C0.145435 9.3315 0.0374352 10.8205 0.0190067 11.078C-0.012279 11.505 -0.0915646 12.6027 0.643006 13.4783C1.16372 14.0992 2.02258 14.7841 2.77172 14.9378C5.84843 15.5703 18.5127 11.1856 20.6028 10.6182C24.0815 9.67291 27.9931 8.47132 29.3041 6.62347C31.2417 3.89344 28.576 1.69005 28.0283 1.23235" fill="white"/></svg>',
    'catImg' : 'Bakery.jpg'},
    {'catCode':'C&D',
    'catId' : "6396eec07871f34f48f09f61", 
    'catName':'Cafe & Desserts Bar', 
    'catSVG' : '<svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_206_904" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H29.9706V18.8675H0V0Z" fill="white"/></mask><g mask="url(#mask0_206_904)"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.8762 6.00301L27.1277 8.99651C26.7164 10.6417 25.2449 11.7906 23.549 11.7906H22.5036C23.1703 10.3311 23.5425 8.70993 23.5425 7.00329V4.41295H26.6346C27.0314 4.41295 27.399 4.59233 27.6434 4.90521C27.8875 5.21788 27.9723 5.61801 27.8762 6.00301M29.2629 3.64048V3.64055C28.6265 2.82555 27.6686 2.35808 26.6346 2.35808H23.5425V0H0.264658V7.00329C0.264658 10.7827 2.08918 14.1429 4.90247 16.2531H0.898562C0.655479 16.2531 0.435342 16.3501 0.273562 16.5068H0.272808V16.5075C0.104795 16.6708 0 16.8989 0 17.1517V17.9688C0 18.4651 0.402329 18.8675 0.898562 18.8675H22.8955C23.3918 18.8675 23.7942 18.4651 23.7942 17.9688V17.1517C23.7942 16.9054 23.6949 16.6823 23.5343 16.52V16.5068H23.5205C23.3588 16.3501 23.1387 16.2531 22.8955 16.2531H18.9057C19.8142 15.5716 20.6197 14.76 21.2937 13.8454H23.549C26.1895 13.8454 28.4808 12.0564 29.1212 9.49486L29.8696 6.50137C30.1203 5.49822 29.8992 4.45555 29.2629 3.64048" fill="white"/></g></svg>',
    'catImg' : 'Cafe.jpg'},
    {'catCode':'FF', 
    'catName':'Fast Food', 
    'catId' : "6396eecf7871f34f48f09f96",
    'catSVG' : '<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_206_913" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="22" width="28" height="5"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.2688 22.3252H28.7314V26.6366H1.2688V22.3252Z" fill="white"/></mask><g mask="url(#mask0_206_913)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.2688 22.3252V23.5216C1.2688 25.2391 2.66638 26.6366 4.38411 26.6366H25.6161C27.3339 26.6366 28.7314 25.2393 28.7314 23.5216V22.3252H1.2688Z" fill="white"/></g><mask id="mask1_206_913" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="11" width="30" height="6"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.5557H30V16.6595H0V11.5557Z" fill="white"/></mask><g mask="url(#mask1_206_913)"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.8018 13.955C29.4626 13.955 30 13.4167 30 12.7554C30 12.094 29.4623 11.5557 28.8018 11.5557H1.19818C0.537656 11.5559 0 12.094 0 12.7554C0 13.4167 0.537656 13.955 1.19818 13.955H15.5702H15.5704H15.5882C15.5999 13.955 15.6114 13.9564 15.6228 13.9566C15.629 13.9571 15.6349 13.9573 15.6411 13.9578C15.8842 13.9697 16.106 14.0637 16.2787 14.2137L20.4213 16.6595L24.5638 14.2137C24.7369 14.0637 24.9584 13.9699 25.2018 13.9578C25.2077 13.9573 25.2139 13.9571 25.2198 13.9566C25.2315 13.956425.2429 13.955 25.2546 13.955H25.2725H25.2727H28.8018Z" fill="white"/></g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.2062 5.45221C20.6507 5.45221 20.2391 4.99811 20.2151 4.46092C20.1911 3.92578 20.6877 3.46986 21.2062 3.46986C21.7619 3.46986 22.1734 3.92396 22.1975 4.46092C22.2215 4.99629 21.7248 5.45221 21.2062 5.45221M19.1375 7.49086C18.5818 7.49086 18.1703 7.03676 18.1462 6.49957C18.1224 5.9642 18.6191 5.50852 19.1375 5.50852C19.6933 5.50852 20.1046 5.96262 20.1288 6.49957C20.1527 7.03494 19.656 7.49086 19.1375 7.49086M17.0687 5.45221C16.5132 5.45221 16.1017 4.99811 16.0776 4.46092C16.0536 3.92578 16.5503 3.46986 17.0687 3.46986C17.6244 3.46986 18.036 3.92396 18.06 4.46092C18.084 4.99629 17.5873 5.45221 17.0687 5.45221M15 7.49086C14.4443 7.49086 14.033 7.03676 14.0088 6.49957C13.985 5.9642 14.4816 5.50852 15 5.50852C15.5557 5.50852 15.9671 5.96262 15.9913 6.49957C16.0151 7.03494 15.5185 7.49086 15 7.49086M12.9314 5.45221C12.3757 5.45221 11.9642 4.99811 11.9401 4.46092C11.9161 3.92578 12.4128 3.46986 12.9314 3.46986C13.4869 3.46986 13.8984 3.92396 13.9224 4.46092C13.9465 4.99629 13.4498 5.45221 12.9314 5.45221M10.8626 7.49086C10.3068 7.49086 9.89553 7.03676 9.87127 6.49957C9.84748 5.9642 10.3441 5.50852 10.8626 5.50852C11.4183 5.50852 11.8298 5.96262 11.8538 6.49957C11.8776 7.03494 11.3809 7.49086 10.8626 7.49086M8.79391 5.45221C8.2382 5.45221 7.82664 4.99811 7.80262 4.46092C7.77859 3.92578 8.27529 3.46986 8.79391 3.46986C9.34943 3.46986 9.76094 3.92396 9.78496 4.46092C9.80898 4.99629 9.31234 5.45221 8.79391 5.45221M18.1009 0H11.8991C6.39432 0 1.85488 4.20615 1.32227 9.57322H28.6778C28.1452 4.20615 23.6058 0 18.1009 0" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29.8679 18.1991C29.8679 17.0249 28.9133 16.0693 27.74 16.0693H25.3196L20.9589 18.6443C20.7962 18.7402 20.6104 18.791 20.4215 18.791C20.2325 18.791 20.0466 18.7402 19.8839 18.6443L15.5233 16.0693H2.25997C1.08675 16.0693 0.13208 17.0247 0.13208 18.1991C0.13208 19.3735 1.08675 20.3289 2.25997 20.3289H27.74C28.9133 20.3289 29.8679 19.3735 29.8679 18.1991" fill="white"/></svg>',
    'catImg' : 'FastFood.jpg'},
    {'catCode':'LB', 
    'catId' : '6396eec07871f34f48f09f66',
    'catName':'Food Kiosk/Light Bites', 
    'catSVG' : '<svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.3991 8.37012L25.3993 15.9063H14.7643V8.61849C14.2818 9.14837 13.62 9.51417 12.8747 9.62377V22.791L4.60337 22.7912C4.60208 22.7905 4.59987 22.7883 4.59978 22.7864L4.59932 8.37058C4.14784 8.97978 3.48094 9.42233 2.70996 9.58723V22.7864C2.70996 23.8324 3.55806 24.6804 4.60401 24.6804H25.3947C26.4407 24.6804 27.2887 23.8324 27.2887 22.7864V9.58723C26.5176 9.42233 25.8505 8.9796 25.3991 8.37012" fill="#FEFEFE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.64018 0L0 6.51837C0 7.62681 0.913252 8.52534 2.04009 8.52534C3.16675 8.52534 4.08 7.62681 4.08 6.51837L6.00202 0H2.64018Z" fill="#FEFEFE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.18359 6.51837C5.18359 7.62681 6.09694 8.52534 7.22369 8.52534C8.35034 8.52534 9.26359 7.62681 9.26359 6.51837L10.2732 0H6.91126L5.18359 6.51837Z" fill="#FEFEFE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3674 6.1837C10.3674 7.62681 11.2808 8.52534 12.4074 8.52534C13.5342 8.52534 14.4475 7.62681 14.4475 6.51837L14.5447 0H11.1828L10.3674 6.51837Z" fill="#FEFEFE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4539 0L15.551 6.51837C15.551 7.62681 16.4642 8.52534 17.591 8.52534C18.7178 8.52534 19.6311 7.62681 19.6311 6.51837L18.8158 0H15.4539Z" fill="#FEFEFE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7253 0L20.7349 6.51837C20.7349 7.62681 21.6482 8.52534 22.7749 8.52534C23.9017 8.52534 24.8149 7.62681 24.8149 6.51837L23.0872 0H19.7253Z" fill="#FEFEFE"/><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3584 0H23.9963L25.9185 6.51837C25.9185 7.62681 26.8318 8.52534 27.9584 8.52534C29.0852 8.52534 29.9985 7.62681 29.9985 6.51837L27.3584 0Z" fill="#FEFEFE"/></svg>',
    'catImg' : 'LightBites.jpg'},
    {'catCode':'FC', 
    'catId' : "6396eec07871f34f48f09f5f",
    'catName':'Japanese Cuisine', 
    'catSVG' : '<svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.991 18.2139V27.8567C12.991 29.0407 13.951 29.9996 15.1338 29.9996C16.3178 29.9996 17.2767 29.0407 17.2767 27.8567V18.2139H12.991Z" fill="white"/><mask id="mask0_206_933" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="12" y="0" width="6" height="18"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.991 0H17.2767V17.1426H12.991V0Z" fill="white"/></mask><g mask="url(#mask0_206_933)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4188 0.377873C14.4749 -0.457841 12.991 0.179659 12.991 1.43859V17.1426H15.8485C16.637 17.1426 17.2767 16.5029 17.2767 15.7143V4.8018C17.2767 2.88073 16.5535 1.38073 15.4188 0.377873" fill="white"/></g><mask id="mask1_206_933" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="30"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H8.57143V30H0V0Z" fill="white"/></mask><g mask="url(#mask1_206_933)"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.57143 6.96429C8.57143 3.11786 6.6525 0 4.28571 0C1.91893 0 0 3.11786 0 6.96429C0 8.98286 0.522857 10.7946 1.36714 12.0675C2.74286 13.995 2.92179 15.4479 2.81571 17.0979L2.12893 27.6214C2.12893 28.935 3.09429 30 4.28571 30C5.47714 30 6.4425 28.935 6.4425 27.6214L5.75571 17.0979C5.64964 15.4479 5.82 13.9939 7.19571 12.0675C8.04 10.7946 8.57143 8.98286 8.57143 6.96429" fill="white"/></g></svg>',
    'catImg' : 'JapaneseCuisine.jpg'},
    {'catCode':'Res', 
    'catId' : "6396eec07871f34f48f09f5e",
    'catName':'Restaurant', 
    'catSVG' : '<svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_206_958" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="15" width="25" height="12"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.7129H24.4808V26.4804H0V15.7129Z" fill="white"/></mask><g mask="url(#mask0_206_958)"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.4808 15.7129C24.3979 20.3368 21.9011 24.3536 18.2351 26.4804H6.2457C2.57986 24.3536 0.0830769 20.3368 0 15.7129H24.4808Z" fill="white"/></g><mask id="mask1_206_958" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="29"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 28.6643H29.888V0H0V28.6643Z" fill="white"/></mask><g mask="url(#mask1_206_958)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.64868 28.6643H16.8319V27.1338H7.64868V28.6643Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M29.8881 2.97313L29.8544 2.20996L4.63135 3.4663L4.65266 3.94887L7.21162 3.84992V15.2188H7.64886V3.83295L8.2228 3.81082V15.2188H8.66017V3.79385L9.23411 3.77173V15.2188H9.67135V3.75476L10.2454 3.73263V15.2188H10.6827V3.71566L11.2566 3.69354V15.2188H11.694V3.67657L29.8881 2.97313Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.95278 3.09923L29.0985 0.760181L29.0236 0L3.90527 2.61842L3.95278 3.09923Z" fill="white"/></g></svg>',
    'catImg' : 'Restaurant.jpg'},
    
]
var timeout;
var shoppingArray = new Array();
var diningArray = new Array();
var unfilteredcategoryArray;
var categoryArray = new Array();
// hard code for shopping subcategory
var shoppingsubcategory = [
    {
        "id": "6396eebf7871f34f48f09f58",
        "name": "fashion",
        "businessEntity": [
          "6390008b52267e162768e630",
          "6390008252267e162768e62e"
        ]
      },
      {
        "id": "6396eec07871f34f48f09f64",
        "name": "homeandfurnishing",
        "businessEntity": [
          "6390008b52267e162768e630",
          "6390008252267e162768e62e"
        ]
      },
      {
        "id": "6396eeca7871f34f48f09f85",
        "name": "electronicsandtechnology",
        "businessEntity": [
          "6390008b52267e162768e630",
          "6390008252267e162768e62e"
        ]
      }
]
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

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

loadImages();
swiperSetting();
setAllEventListener();
loadJson();
onclickNavBtn('skHome');
onclickTransportBtn('btnbus');

function swiperSetting() {

    // SwiperScreenSaver = new Swiper('#swiperScreensaver', {
    //     init: false,
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    //     speed: 0,
    //     effect: 'fade',
    //     allowTouchMove: false,
    //     autoplay: {
    //         disableOnInteraction :false,
    //     },
    //     loop: true,
    //     fadeEffect: {
    //         crossFade: true
    //     },
    //     on: {
    //         init: function () {

    //             if(this.slides.length != 0) {
    //             // stats
    //             var dataSet = new Object();
    //             dataSet.media = this.slides[this.activeIndex].children[0].children[0].id;
    //             dataSet.date = new Date();
    //             dataSet.airtime = Number(SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].dataset.swiperAutoplay)/ 1000;
    //             dataSet.appearTime = 1;

    //             staticArray.push(dataSet);
    //             }

    //             // if(this.activeIndex == this.slides.length -1) {
    //             //     moveSlideToNext(0, Number(this.slides[this.activeIndex].dataSet.swiperAutoplay)/ 1000);
    //             // }
    //             // else {
    //             //     moveSlideToNext(this.activeIndex + 1, Number(this.slides[this.activeIndex].dataset.swiperAutoplay) / 1000);
    //             // }

    //             if(this.slides[this.activeIndex].children[0].children[0].tagName == "VIDEO") {
    //                 this.slides[this.activeIndex].children[0].children[0].play();
    //             }

    //             // save stats for 1 image screen swiper
    //             if(this.slides.length == 1){
    //                 var currentmedia = window.SwiperScreenSaver.slides[window.SwiperScreenSaver.activeIndex].children[0].children[0].id;
        
    //                 var interval = setInterval(function() {
                        
    //                     for(var i=0; i<staticArray.length; i++) {
        
    //                     //The Media Already Exist in Static Arr
    //                     if(staticArray[i].media == currentmedia){

    //                         staticArray[i].airtime = Number(staticArray[i].airtime) + Number(window.SwiperScreenSaver.slides[window.SwiperScreenSaver.activeIndex].dataset.swiperAutoplay) / 1000;
    //                         staticArray[i].appear_time = Number(staticArray[i].appear_time) + 1;
        
    //                         break;
        
    //                     }
    //                 }
    //                 }, Number(window.SwiperScreenSaver.slides[window.SwiperScreenSaver.activeIndex].dataset.swiperAutoplay));
                
    //             };

    //         },
    //         slideChangeTransitionStart : function ()  {


    //             if(pauseonVideoTimeleft === undefined) {
    //                 this.autoplay.resume();
    //                 this.update();
    //             }
    //             else {
    //                 this.autoplay.timeLeft = pauseonVideoTimeleft;
    //                 this.autoplay.resume();
    //                 this.update();
    //             }

    //             var currentmedia = SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].id;

    //             for(var i=0;i<staticArray.length;i++){

    //                 //The Media Already Exist in Static Arr
    //                 if(staticArray[i].media == currentmedia){

    //                     staticArray[i].airtime = Number(staticArray[i].airtime) +  Number(SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].dataset.swiperAutoplay) / 1000;
    //                     staticArray[i].appearTime = Number(staticArray[i].appearTime) + 1;

    //                     break;

    //                 }

    //                 //Last Index, Media Not Found in Static Arr
    //                 if(i==staticArray.length-1){

    //                     var dataSet = new Object();
    //                     dataSet.media = SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].id;
    //                     dataSet.date = new Date();
    //                     dataSet.airtime = Number(SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].dataset.swiperAutoplay) / 1000;
    //                     dataSet.appearTime = 1;

    //                     staticArray.push(dataSet);
    //                     break;
    //                 }

    //             }

    //             //console.log(this.activeIndex);
    //             if (this.slides.length > 0) {
    //                 if (this.slides[this.activeIndex].children[0].children[0].tagName == "VIDEO") {
    //                     this.slides[this.activeIndex].children[0].children[0].play();
    //                 }
    //             }
        
    //             // if (this.activeIndex == this.slides.length - 1) {
    //             //     moveSlideToNext(0, Number(this.slides[this.activeIndex].dataset.swiperAutoplay) / 1000);
    //             // }
    //             // else {
    //             //     moveSlideToNext(this.activeIndex + 1, Number(this.slides[this.activeIndex].dataset.swiperAutoplay) / 1000);
    //             // }
    //         }
    //     }
    // });


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

}

function clearWayfindingtimeout() {
    clearTimeout(timeout);
}

function moveSlideToNext(index, delay) {

    setTimeout(function () {

        if (screenOut) {

        }
        else {
            countTimer++;
        }

        if (countTimer < delay) {
            moveSlideToNext(index, delay);
        }
        else {
            SwiperScreenSaver.slideTo(index, 1000);
            countTimer = 0;
        }

    }, 1000);

}

function setAllEventListener() {

    // Directory Page menu buttons
    $('#skDirectory .menuDirectory .navgroup .btnDirectorymenu').on('click',function(e){

        $('#skDirectory #swiperDirectory .swiper-wrapper').html("");

        $('#skDirectory .menuDirectory .btnDirectorymenu').css("background-color","#FFFFFF");
        $('#skDirectory .menuDirectory .btnDirectorymenu .btntxt').css({"color":"#222222"});

        $('#skDirectory .menuDirectory #'+this.id).css("background-color","#006EB8");
        $('#skDirectory .menuDirectory #'+this.id+' .btntxt').css({"color":"#FFFFFF"});

        //Hide all sub-menu
        $('#skDirectory .menuCategory').hide();
        $('#skDirectory .menuLevel').hide();

        $('#skDirectory .menuDirectory .navgroup > div').css('pointer-events','visible');

        switch(this.id)
        {
            case 'btnall':{ 

                $('#skDirectory #SwiperDirectoryPage').css('height', '1070px');
                $('#skDirectory .menuDirectory #btnall').css('pointer-events','none');
                createDirectorySwiper(displayonDirectorytenant,3,4); 
                $('#skDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper .swiper-slide').css('min-height', '1070px');
                break;
            }

            case 'btncat':{
                // reset style
                $('#skDirectory #SwiperDirectoryPage').css('height', '');
                $('#skDirectory .menuDirectory #btncat').css('pointer-events','none');
                $("#skDirectory #swiperCategory .catcol > div").css('background', '#FFFFFF');
                $("#skDirectory #swiperCategory .catcol > div .cattxt").css('color', '#222222');
                onclickCatBtn("skDirectory", "6396eebf7871f34f48f09f56");
                //createDirectorySwiper(displayonDirectorytenant,2,4); 
                $('#skDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper').css('min-height', '718px');
                $('#skDirectory .menuCategory').fadeIn('fast'); 
                break;
            }
            
            case 'btnlvl':{ 
                $('#skDirectory #SwiperDirectoryPage').css('height', '');
                $('#skDirectory .menuDirectory #btnlvl').css('pointer-events','none');
                $("#skDirectory .menuLevel .lvlgroup > div").css('background-color', '#FFFFFF');
                $("#skDirectory .menuLevel .lvlgroup > div .lvltxt").css('color', '#222222');
                onclickLvlBtn('skDirectory', 'B1');
                $('#skDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper .swiper-slide').css('min-height', '718px');
                // createDirectorySwiper(displayonDirectorytenant,2,4); 
                $('#skDirectory .menuLevel').fadeIn('fast');
                break;
            }
        }

    });

    // Dining Page menu buttons
    $('#skDining .menuDirectory .navgroup .btnDirectorymenu').on('click',function(e){

        $('#skDining #swiperDining .swiper-wrapper').html("");

        $('#skDining .menuDirectory .btnDirectorymenu').css("background-color","#FFFFFF");
        $('#skDining .menuDirectory .btnDirectorymenu .btntxt').css({"color":"#222222"});

        $('#skDining .menuDirectory #'+this.id).css("background-color","#006EB8");
        $('#skDining .menuDirectory #'+this.id+' .btntxt').css({"color":"#FFFFFF"});

        //Hide all sub-menu
        $('#skDining .menuCategory').hide();
        $('#skDining .menuLevel').hide();

        $('#skDining .menuDirectory .navgroup > div').css('pointer-events','visible');

        switch(this.id)
        {
            case 'btnall':{ 
                $('#skDining #SwiperDiningPage').css('height', '1070px');
                $('#skDining .menuDirectory #btnall').css('pointer-events', 'none');
                createDiningSwiper(diningArray,3,4);
                $('#skDining #SwiperDiningPage #swiperDining .swiper-wrapper .swiper-slide').css('min-height', '1070px');
                break;
            }

            case 'btncat':{
                // reset style
                $('#skDining #SwiperDiningPage').css('height', '');
                $('#skDining .menuDirectory #btncat').css('pointer-events','none');
                $("#skDining #swiperCategory .catcol > div").css('background', '#FFFFFF');
                $("#skDining #swiperCategory .catcol > div .cattxt").css('color', '#222222');
                createDiningSwiper(diningArray,2,4); 
                $('#skDining #SwiperDiningPage #swiperDining .swiper-wrapper').css('min-height', '718px');
                $('#skDining #SwiperDiningPage #swiperDining .swiper-wrapper .swiper-slide').css('min-height', '718px');
                $('#skDining .menuCategory').fadeIn('fast'); 
                break;
            }
            
            case 'btnlvl':{ 
                $('#skDining #SwiperDiningPage').css('height', '');
                $('#skDining .menuDirectory #btnlvl').css('pointer-events','none');
                $("#skDining .menuLevel .lvlgroup > div").css('background-color', '#FFFFFF');
                $("#skDining .menuLevel .lvlgroup > div .lvltxt").css('color', '#222222');
                onclickLvlBtn('skDining', 'B1');
                $('#skDining #SwiperDiningPage #swiperDining .swiper-wrapper .swiper-slide').css('min-height', '718px');
                // createDiningSwiper(diningArray,2,4); 
                $('#skDining .menuLevel').fadeIn('fast');
                break;
            }
        }

    });

    // Shopping Page menu buttons
    $('#skShopping .menuDirectory .navgroup .btnDirectorymenu').on('click',function(e){

        $('#skShopping #swiperShopping .swiper-wrapper').html("");

        $('#skShopping .menuDirectory .btnDirectorymenu').css("background-color","#FFFFFF");
        $('#skShopping .menuDirectory .btnDirectorymenu .btntxt').css({"color":"#222222"});

        $('#skShopping .menuDirectory #'+this.id).css("background-color","#006EB8");
        $('#skShopping .menuDirectory #'+this.id+' .btntxt').css({"color":"#FFFFFF"});

        //Hide all sub-menu
        $('#skShopping .menuCategory').hide();
        $('#skShopping .menuLevel').hide();

        $('#skShopping .menuDirectory .navgroup > div').css('pointer-events','visible');

        switch(this.id)
        {
            case 'btnall':{ 
                $('#skShopping #SwiperShoppingPage').css('height', '1070px');
                $('#skShopping .menuDirectory #btnall').css('pointer-events','none');
                createShoppingSwiper(shoppingArray,3,4); 
                $('#skShopping #SwiperShoppingPage #swiperShopping .swiper-wrapper .swiper-slide').css('min-height', '1070px');
                break;
            }

            case 'btncat':{
                // reset style
                $('#skShopping #SwiperShoppingPage').css('height', '');
                $('#skShopping .menuDirectory #btncat').css('pointer-events','none');
                $("#skShopping #swiperCategory .catcol > div").css('background', '#FFFFFF');
                $("#skShopping #swiperCategory .catcol > div .cattxt").css('color', '#222222');
                onclickCatBtn("skShopping", "6396eebf7871f34f48f09f58");
                //createShoppingSwiper(shoppingArray,2,4); 
                $('#skShopping #SwiperShoppingPage #swiperShopping .swiper-wrapper').css('min-height', '718px');
                $('#skShopping .menuCategory').fadeIn('fast'); 
                break;
            }
            
            case 'btnlvl':{ 
                $('#skShopping #SwiperShoppingPage').css('height', '');
                $('#skShopping .menuDirectory #btnlvl').css('pointer-events','none');
                $("#skShopping .menuLevel .lvlgroup > div").css('background-color', '#FFFFFF');
                $("#skShopping .menuLevel .lvlgroup > div .lvltxt").css('color', '#222222');
                onclickLvlBtn('skShopping', 'B1');
                $('#skShopping #SwiperShoppingPage #swiperShopping .swiper-wrapper .swiper-slide').css('min-height', '718px');
                // createShoppingSwiper(shoppingArray,2,4); 
                $('#skShopping .menuLevel').fadeIn('fast');
                break;
            }
        }

    });

    // Directory Page - search
    $('#skDirectory #searchDirectory').on('input', resizeInput);
    resizeInput.call($('#searchDirectory')[0]);

    //Directory Page - searchbar
    $('#skDirectory .search').on('click',()=>{

        $('#skDirectory .keyboard .kyrow .keybox').css('background', '#fff');

        $('#skDirectory .keyboard .kyrow .keybox .key').css('color', '#000');

        $('#skDirectory #SwiperDirectoryPage').css('height', '');

        $('#skDirectory .searchBarBox .closebtn').show();

        $('#skDirectory .searchBarBox').css('background', '#FEF8ED');
        
        $('#skDirectory .menuCategory').hide();
        $('#skDirectory .menuLevel').hide();

        $('.navmenu').css('box-shadow', 'none');

        createDirectorySwiper(displayonDirectorytenant,2,4);

        $('#skDirectory .menuDirectory').fadeOut('fast');
        gsap.to('#skDirectory .searchBarBox',{top:'1126px',duration:0.2, onComplete:()=>{ $('#skDirectory .keyboard').fadeIn('fast'); }});

    });

    //Directory Page - keyboard close button
    $('#skDirectory .searchBarBox .closebtn').on('click',()=>{
        $('#skDirectory .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');

        $('#skDirectory #searchDirectory').val("");

        $('#skDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper').html("");

        $('#skDirectory .keyboard').hide();

        gsap.to('#skDirectory .searchBarBox',{'top' :'',duration: 0.2, ease:'power3'});

        $('#skDirectory .menuDirectory').show();

        $('#skDirectory .menuDirectory #btnall').trigger('click');

        $('#skDirectory .searchBarBox').css('background','transparent');

        $('#skDirectory .searchBarBox .closebtn').hide();
        
    });

    // Directory Page - keyboard search
    $("#skDirectory .keybox").on("click", function(){

        resizeInput.call($('#searchDirectory')[0]);

        $('#skDirectory .keyboard .kyrow .keybox').css('background-color', 'white');
        $('#skDirectory .keyboard .kyrow .keybox .key').css('color', '');
        $('#skDirectory .keyboard .kyrow .keybox .keyspacetxt').css('color', '');
        $('#skDirectory .keyboard .kyrow .keycleartxt').css('color', '#000');
        $('#skDirectory .keyboard .kyrow #delete svg path').attr('fill', '#222222');
        this.style.backgroundColor = '#0077C1';
        $(this).find(".key").css('color', 'white');

        var keyword = $("#searchDirectory").val();
        var key = $(this).attr('id');
    
        if (key == "delete") {
    
            if (keyword == "") {
            }
            else {
                keyword = keyword.substring(0, keyword.length - 1);
                $('#skDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
            }
        }
        else if (key == "clear") {
            keyword = "";
            $('#skDirectory .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');
            $('#skDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else if (key == "space") {
            keyword = keyword + ' ';
            // console.log(keyword);
            $('#skDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else {
            keyword = keyword + key;
            $('#skDirectory .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }

        // Filter by keyword search
        var filtered_tenant = filterTenantbyKeyword(displayonDirectorytenant,keyword);

        if (filtered_tenant.length != 0) {
            createDirectorySwiper(filtered_tenant,2,4);
            SwiperDirectory.update();
        }
        else {
            createDirectorySwiper(filtered_tenant,2,4);
            SwiperDirectory.update();
            // $('#skDirectory #swiperDirectory').css({'height':'936px'});
        }

    });

    // Dining Page - search
    $('#skDining #searchDining').on('input', resizeInput);
    resizeInput.call($('#searchDining')[0]);

    //Dining Page - searchbar
    $('#skDining .search').on('click',()=>{

        $('#skDining .keyboard .kyrow .keybox').css('background', '#fff');

        $('#skDining .keyboard .kyrow .keybox .key').css('color', '#000');

        $('#skDining .searchBarBox .closebtn').show();

        $('#skDining .searchBarBox').css('background', '#FEF8ED');
        
        $('#skDining .menuCategory').hide();
        $('#skDining .menuLevel').hide();

        $('.navmenu').css('box-shadow', 'none');

        createDiningSwiper(diningArray,2,4);

        $('#skDining .menuDirectory').fadeOut('fast');
        gsap.to('#skDining .searchBarBox',{top:'1126px',duration:0.2, onComplete:()=>{ $('#skDining .keyboard').fadeIn('fast'); }});

    });

    //Dining Page - keyboard close button
    $('#skDining .searchBarBox .closebtn').on('click',()=>{

        $('#skDining #searchDining').val("");

        $('#skDining .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');

        $('#skDining #SwiperDiningPage #swiperDining .swiper-wrapper').html("");

        $('#skDining .keyboard').hide();

        gsap.to('#skDining .searchBarBox',{'top' :'',duration: 0.2, ease:'power3'});

        $('#skDining .menuDirectory').show();

        $('#skDining .menuDirectory #btnall').trigger('click');

        $('#skDining .searchBarBox').css('background','transparent');

        $('#skDining .searchBarBox .closebtn').hide();
        
    });

    // Dining Page - keyboard search
    $("#skDining .keybox").on("click", function(){

        resizeInput.call($('#searchDining')[0]);

        $('#skDining .keyboard .kyrow .keybox').css('background-color', 'white');
        $('#skDining .keyboard .kyrow .keybox .key').css('color', '');
        $('#skDining .keyboard .kyrow .keybox .keyspacetxt').css('color', '');
        $('#skDining .keyboard .kyrow .keycleartxt').css('color', '#000');
        $('#skDining .keyboard .kyrow #delete svg path').attr('fill', '#222222');
        this.style.backgroundColor = '#0077C1';
        $(this).find(".key").css('color', 'white');

        var keyword = $("#searchDining").val();
        var key = $(this).attr('id');
    
        if (key == "delete") {
    
            if (keyword == "") {
            }
            else {
                keyword = keyword.substring(0, keyword.length - 1);
                $('#skDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
            }
        }
        else if (key == "clear") {
            keyword = "";
            $('#skDining .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');
            $('#skDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else if (key == "space") {
            keyword = keyword + ' ';
            // console.log(keyword);
            $('#skDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else {
            keyword = keyword + key;
            $('#skDining .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }

        // Filter by keyword search
        var filtered_tenant = filterTenantbyKeyword(diningArray,keyword);

        if (filtered_tenant.length != 0) {
            createDiningSwiper(filtered_tenant,2,4);
            SwiperDining.update();
        }
        else {
            createDiningSwiper(filtered_tenant,2,4);
            SwiperDining.update();
            // $('#skDirectory #swiperDirectory').css({'height':'936px'});
        }

    });

    // Shopping Page - search
    $('#skShopping #searchShopping').on('input', resizeInput);
    resizeInput.call($('#searchShopping')[0]);

    //Shopping Page - searchbar
    $('#skShopping .search').on('click',()=>{

        $('#skShopping .keyboard .kyrow .keybox').css('background', '#fff');

        $('#skShopping .keyboard .kyrow .keybox .key').css('color', '#000');

        $('#skShopping .searchBarBox .closebtn').show();

        $('#skShopping .searchBarBox').css('background', '#FEF8ED');
        
        $('#skShopping .menuCategory').hide();
        $('#skShopping .menuLevel').hide();

        $('.navmenu').css('box-shadow', 'none');

        createShoppingSwiper(shoppingArray,2,4);

        $('#skShopping .menuDirectory').fadeOut('fast');
        gsap.to('#skShopping .searchBarBox',{top:'1126px',duration:0.2, onComplete:()=>{ $('#skShopping .keyboard').fadeIn('fast'); }});

    });

    //Shopping Page - keyboard close button
    $('#skShopping .searchBarBox .closebtn').on('click',()=>{

        $('#skShopping #searchShopping').val("");

        $('#skShopping .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');

        $('#skShopping #SwiperShoppingPage #swiperShopping .swiper-wrapper').html("");

        $('#skShopping .keyboard').hide();

        gsap.to('#skShopping .searchBarBox',{'top' :'',duration: 0.2, ease:'power3'});

        $('#skShopping .menuDirectory').show();

        $('#skShopping .menuDirectory #btnall').trigger('click');

        $('#skShopping .searchBarBox').css('background','transparent');

        $('#skShopping .searchBarBox .closebtn').hide();
        
    });

    // Shopping Page - keyboard search
    $("#skShopping .keybox").on("click", function(){

        resizeInput.call($('#searchShopping')[0]);

        var keyword = $("#searchShopping").val();
        var key = $(this).attr('id');
    
        if (key == "delete") {
    
            if (keyword == "") {
            }
            else {
                keyword = keyword.substring(0, keyword.length - 1);
                $('#skShopping .searchBarBox .searchbar .search .searchclass input').val(keyword);
            }
        }
        else if (key == "clear") {
            keyword = "";
            $('#skShopping .searchBarBox .searchbar .search .searchclass input').css('width', '9ch');
            $('#skShopping .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else if (key == "space") {
            keyword = keyword + ' ';
            console.log(keyword);
            $('#skShopping .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }
        else {
            keyword = keyword + key;
            $('#skShopping .searchBarBox .searchbar .search .searchclass input').val(keyword);
        }

        // Filter by keyword search
        var filtered_tenant = filterTenantbyKeyword(shoppingArray,keyword);

        if (filtered_tenant.length != 0) {
            createShoppingSwiper(filtered_tenant,2,4);
            SwiperShopping.update();
        }
        else {
            createShoppingSwiper(filtered_tenant,2,4);
            SwiperShopping.update();
            // $('#skDirectory #swiperDirectory').css({'height':'936px'});
        }

    });

    // Floor guide page - lvl btn
    $('#skFloorGuide .lvlbtn').on('click', function(e) {
        $('#skFloorGuide .lvlbtn .lvltxt').css({'color': '#222222', "font-weight": '400'}); 
        $('#skFloorGuide .lvlbtngroup #'+this.id+' .lvltxt').css({"color":"#0077C1", "font-weight" : "700"});
        onclickLevelBtn(this.id);
    });

    // wayfind result
    $('#skWayfindresult .wfresult #wfhideicon').on('click', function() {

        iswfresulthidden = true;

        // $('#wgWayfindresult .wfresult').css(  'transition-timing-function', 'ease-out');

        tween = gsap.to('#skWayfindresult .wfresult', {x: 200, duration: 1, onComplete:() => 
            {
            $('#skWayfindresult .wfresult #wfhideicon').hide();
            // $('#wgWayfindresult .wfresult #wfhideicon').html('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="17" fill="white" stroke="#BBE3FA" stroke-width="2"/><path d="M17.8468 12L19.2233 13.4106L14.7483 18.003L19.2233 22.5953L17.8468 24L12 18L17.8458 12H17.8468ZM23.1244 12L24.5 13.4106L20.0249 18.003L24.5 22.5884L23.1244 24L17.2767 18L23.1234 12H23.1244Z" fill="#006EB8"/></svg>');
            $('#skWayfindresult .wfresult #wfshowicon').show();
        }

        });
        
    });

    $('#skWayfindresult .wfresult #wfshowicon').on('click', function() {

        iswfresulthidden = false;

        tween.reverse();

            $('#skWayfindresult .wfresult #wfshowicon').hide();

            $('#skWayfindresult .wfresult #wfhideicon').show();

        }
    );

}

function initialSetting() {

    filterTenantObj(tenantArray);
    filterShoppingTenant(tenantArray, '6396eebf7871f34f48f09f58'); // by fashion cat id
    filterShoppingTenant(tenantArray, '6396eeca7871f34f48f09f85'); // by electronic & tech cat id
    filterShoppingTenant(tenantArray, '6396eec07871f34f48f09f64'); // by home & furnishing cat id
    filterDiningTenant(tenantArray, '6396eec07871f34f48f09f5d'); // by food and beverage category id
    diningsubcategory = getSubcategorybyCategoryId(subcategoryArray, '6396eec07871f34f48f09f5d' ) // filter subcategory by food and beverage category ID
    // shoppingsubcategory = getSubcategorybyCategoryId(subcategoryArray, "6396eebf7871f34f48f09f58" ) // filter with shopping category ID
    // if(channelArray != null) {
    //     createScreenSaverSwiper(channelArray[0]);
    //     initialScreenSaverRefresh();
    // }
    createHomeSwiper(happeningsArray);
    createDirectorySwiper(displayonDirectorytenant, 3,4);

    $('#sourcelocation').text('Your Location | ' + kioskInfo[0].kioskFloor);
    createHappeningSwiper(happeningsArray);
    //createDiningSwiper(tenantArray,3,4);
}

//Navigation
function resetNavBtnDefaultSvg()
{
    $('.navmenu #navHome .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<rect width="124" height="124" rx="24" fill="#A3CEE9"/>'
    + '<rect x="3" y="3" width="118" height="118" rx="22" fill="white"/>'
    + '</svg>'
    );

    $('.navmenu #navHome .navborder').css('box-shadow', '');

    $('.navmenu #navHome .navlogo').html('<svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.3167 0.504923C28.5627 -0.154636 27.437 -0.154636 26.6831 0.504923L1.67329 22.3825C0.283221 23.5985 1.14324 25.8878 2.9901 25.8878H10.6663V46.0002C10.6663 47.1048 11.5617 48.0002 12.6663 48.0002H23.6665V36.2069H32.3333V48.0002H43.3334C44.438 48.0002 45.3334 47.1048 45.3334 46.0002V25.8878H53.0096C54.8565 25.8878 55.7165 23.5985 54.3264 22.3825L29.3167 0.504923Z" fill="#A3CEE9"/><mask id="path-2-inside-1_867_293" fill="white">'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3167 0.504923C28.5627 -0.154636 27.437 -0.154636 26.6831 0.504923L1.67329 22.3825C0.283221 23.5985 1.14324 25.8878 2.9901 25.8878H10.6663V46.0002C10.6663 47.1048 11.5617 48.0002 12.6663 48.0002H23.6665V36.2069H32.3333V48.0002H43.3334C44.438 48.0002 45.3334 47.1048 45.3334 46.0002V25.8878H53.0096C54.8565 25.8878 55.7165 23.5985 54.3264 22.3825L29.3167 0.504923Z"/> </mask>'
    + '<path d="M26.6831 0.504923L27.6707 1.63392L27.6707 1.63392L26.6831 0.504923ZM29.3167 0.504923L28.3291 1.63392L28.3291 1.63392L29.3167 0.504923ZM1.67329 22.3825L2.66089 23.5115L2.6609 23.5115L1.67329 22.3825ZM10.6663 25.8878H12.1663V24.3878H10.6663V25.8878ZM23.6665 48.0002V49.5002H25.1665V48.0002H23.6665ZM23.6665 36.2069V34.7069H22.1665V36.2069H23.6665ZM32.3333 36.2069H33.8333V34.7069H32.3333V36.2069ZM32.3333 48.0002H30.8333V49.5002H32.3333V48.0002ZM45.3334 25.8878V24.3878H43.8334V25.8878H45.3334ZM54.3264 22.3825L55.3141 21.2535L55.3141 21.2535L54.3264 22.3825ZM27.6707 1.63392C27.8592 1.46903 28.1406 1.46903 28.3291 1.63392L30.3043 -0.624075C28.9848 -1.7783 27.0149 -1.7783 25.6955 -0.624075L27.6707 1.63392ZM2.6609 23.5115L27.6707 1.63392L25.6955 -0.624075L0.685686 21.2535L2.6609 23.5115ZM2.9901 24.3878C2.52838 24.3878 2.31338 23.8155 2.66089 23.5115L0.685687 21.2535C-1.74694 23.3815 -0.241906 27.3878 2.9901 27.3878V24.3878ZM10.6663 24.3878H2.9901V27.3878H10.6663V24.3878ZM9.16629 25.8878V46.0002H12.1663V25.8878H9.16629ZM9.16629 46.0002C9.16629 47.9332 10.7333 49.5002 12.6663 49.5002V46.5002C12.3901 46.5002 12.1663 46.2763 12.1663 46.0002H9.16629ZM12.6663 49.5002H23.6665V46.5002H12.6663V49.5002ZM25.1665 48.0002V36.2069H22.1665V48.0002H25.1665ZM23.6665 37.7069H32.3333V34.7069H23.6665V37.7069ZM30.8333 36.2069V48.0002H33.8333V36.2069H30.8333ZM32.3333 49.5002H43.3334V46.5002H32.3333V49.5002ZM43.3334 49.5002C45.2664 49.5002 46.8334 47.9332 46.8334 46.0002H43.8334C43.8334 46.2763 43.6096 46.5002 43.3334 46.5002V49.5002ZM46.8334 46.0002V25.8878H43.8334V46.0002H46.8334ZM53.0096 24.3878H45.3334V27.3878H53.0096V24.3878ZM53.3388 23.5115C53.6864 23.8155 53.4714 24.3878 53.0096 24.3878V27.3878C56.2417 27.3878 57.7467 23.3815 55.3141 21.2535L53.3388 23.5115ZM28.3291 1.63392L53.3388 23.5115L55.3141 21.2535L30.3043 -0.624076L28.3291 1.63392Z" fill="#0077C1" mask="url(#path-2-inside-1_867_293)"/></svg>'
    );

    $('.navmenu #navFloorGuide .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="#A3CEE9"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="white"/>' +
            '</svg>'
    );

    $('.navmenu #navFloorGuide .navborder').css('box-shadow', '');

    $('.navmenu #navFloorGuide .navlogo').html('<svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<mask id="path-1-inside-1_867_380" fill="white">'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8917 0.821829C17.1015 0.290281 16.1708 0.00429839 15.2175 7.17673e-05C14.5854 -0.00337392 13.9588 0.117288 13.3736 0.355169C12.7883 0.59305 12.2557 0.943491 11.8063 1.38648C11.3569 1.82947 10.9995 2.35634 10.7544 2.93699C10.5094 3.51765 10.3815 4.14073 10.378 4.77065C10.3719 5.72071 10.6487 6.65125 11.1734 7.44448C11.6981 8.23771 12.4472 8.85798 13.3258 9.22679C14.2043 9.5956 15.173 9.69636 16.109 9.51633C17.0451 9.33629 17.9066 8.88356 18.5844 8.21542C19.2622 7.54728 19.7258 6.69377 19.9167 5.76292C20.1075 4.83206 20.017 3.86571 19.6565 2.98615C19.2961 2.10659 18.6819 1.35338 17.8917 0.821829ZM8.38662 19.8158L8.38628 19.816C7.96835 19.9634 7.58287 20.0995 7.20291 20.2502C7.09824 20.3132 7.01701 20.4085 6.97153 20.5217C5.87749 22.7023 4.78674 24.8829 3.69926 27.0634C3.35792 27.752 2.83115 28.1755 2.05821 28.2295C1.70844 28.267 1.35529 28.2019 1.04216 28.0421C0.729041 27.8823 0.469591 27.6348 0.295716 27.33C0.135701 27.085 0.0372462 26.8052 0.0086815 26.5143C-0.0198831 26.2234 0.0222829 25.9299 0.13161 25.6586L0.499217 24.6863C1.4067 22.2856 2.31414 19.885 3.24962 17.4945C3.39711 17.1637 3.62634 16.8756 3.91588 16.6571C5.79658 15.179 7.68928 13.7153 9.58064 12.2526L9.5807 12.2525L9.58075 12.2525L9.58112 12.2522L10.5359 11.5137C11.1967 11.0149 11.9846 10.7109 12.8101 10.6361C13.6356 10.5614 14.4656 10.7189 15.2058 11.0908C15.946 11.4627 16.5666 12.034 16.9972 12.7399C17.4278 13.4457 17.6511 14.2578 17.6417 15.0839V24.2701C17.6289 24.3908 17.657 24.5122 17.7215 24.6151C17.7861 24.7179 17.8833 24.7963 17.9978'
    + '24.8376C19.2282 25.4452 20.4563 26.0577 21.6845 26.6702L21.6851 26.6705L21.6861 26.671L21.6862 26.671L21.6862 26.6711C23.0294 27.3409 24.3726 28.0107 25.7189 28.6744C26.7036 29.165 27.2632 29.9107 27.3337 31.0179C27.4022 32.0889 27.4749 33.1599 27.5477 34.2308C27.6022 35.0341 27.6568 35.8373 27.7095 36.6406C27.8014 38.0143 27.8884 39.3881 27.9705 40.7619C28.0098 41.1124 28.0098 41.4662 27.9705 41.8167C27.8809 42.332 27.6145 42.8003 27.2167 43.1414C26.819 43.4825 26.3146 43.6752 25.79 43.6866C25.2654 43.698 24.7531 43.5274 24.3408 43.2039C23.9285 42.8804 23.6418 42.4241 23.5298 41.9132C23.3102 40.8978 23.1116 39.8715 22.9131 38.8455L22.9131 38.8453L22.9129 38.8445C22.8238 38.3837 22.7346 37.9229 22.6436 37.4632C22.5825 37.1544 22.5208 36.845 22.4591 36.5352L22.4589 36.5343L22.4587 36.5333L22.4585 36.5323C22.2915 35.6945 22.1239 34.8539 21.9659 34.0141C21.959 33.898 21.913 33.7876 21.8352 33.7009C21.7575 33.6142 21.6525 33.5562 21.5375 33.5365C19.423 32.9846 17.31 32.4222 15.1975 31.86C14.1802 31.5892 13.163 31.3185 12.1458 31.049C10.0239 30.4831 8.81772 28.936 8.81772 26.7609V19.6631C8.66972 19.7159 8.52635 19.7665 8.38662 19.8158ZM9.12255 30.5158C10.1576 31.6088 11.5045 31.9475 12.8495 32.2857C12.9354 32.3073 13.0213 32.3289 13.107 32.3507C13.4295 32.4329 13.7508 32.5198 14.0719 32.6065L14.0724 32.6066L14.0729 32.6068L14.0729 32.6068C14.5881 32.746 15.1027 32.8851 15.6211 33.0049C15.9132 33.0736 15.9707 33.1897 15.9297 33.4726L15.8811 33.8131L15.8811 33.8131L15.8811 33.8132L15.8811 33.8132C15.5395 36.2102 15.1976 38.6087 14.8827 41.0087C14.5577 43.4883 14.2592 45.9678 13.9607 48.4473L13.9112 48.8588C13.7749 49.9955 13.048 50.8066 11.9632 50.9735C11.4676 51.0505 10.9604 50.9586 10.5237 50.7125C10.0871 50.4664 9.74662 50.0807 9.55744 49.6177C9.43821 49.3109 9.37593 48.985 9.37364 48.656C9.34719 46.5795 9.3265 44.5025 9.30582 42.4255L9.30582 42.4253L9.30581 42.4252L9.30581 42.425C9.28672 40.5076 9.26762 38.5902 9.24399 36.6732C9.22728 35.3411 9.19621 34.0144 9.16514 32.6878V32.6877V32.6877V32.6876L9.16511 32.6866C9.15042 32.0591 9.13572 31.4316 9.12255 30.8036C9.1204 30.7467 9.12107 30.6855 9.12179 30.6205C9.12217 30.5866 9.12255 30.5517 9.12255 30.5158ZM18.828 15.6299C18.9537 15.8482 19.0833 16.0644 19.2129 16.2806C19.5097 16.7758 19.8065 17.2708 20.0555'
    + '17.7887C20.2323 18.1841 20.4878 18.5396 20.8066 18.8337C21.1253 19.1277 21.5007 19.3542 21.9099 19.4994C23.0621 19.9437 24.1899 20.4539 25.3168 20.9637C25.7372 21.1539 26.1574 21.344 26.5787 21.5306C26.8937 21.6572 27.1615 21.8781 27.3452 22.1628C27.5289 22.4476 27.6195 22.7821 27.6043 23.1203C27.5902 23.4586 27.467 23.7835 27.2529 24.0465C27.0389 24.3096 26.7455 24.4969 26.4162 24.5807C26.1173 24.6492 25.8064 24.6464 25.5087 24.5725C24.0228 24.1628 22.54 23.7399 21.0577 23.3171L21.0574 23.3171L21.0554 23.3165C20.3791 23.1236 19.7029 22.9308 19.0265 22.7392C18.8493 22.6885 18.7279 22.6394 18.7295 22.4121C18.7361 20.9489 18.7339 19.4849 18.7317 18.0212L18.7317 18.0172C18.7306 17.2868 18.7295 16.5564 18.7295 15.8262C18.7295 15.7928 18.7339 15.7601 18.7384 15.7264C18.7412 15.7056 18.744 15.6845 18.7459 15.6627L18.828 15.6299ZM16.9219 60H27.5963C27.8408 60 28.0753 59.902 28.2482 59.7277C28.4211 59.5533 28.5182 59.3168 28.5182 59.0702V52.6668H36.791C37.0355 52.6668 37.27 52.5688 37.4429 52.3944C37.6158 52.2201 37.7129 51.9836 37.7129 51.737V46.6667H46.4768C46.7213 46.6667 46.9558 46.5687 47.1287 46.3944C47.3016 46.22 47.3987 45.9835 47.3987 45.7369V40.9355H55.0781C55.1992 40.9358 55.3192 40.9119 55.4311 40.8652C55.5431 40.8186 55.6448 40.7501 55.7305 40.6637C55.8161 40.5773 55.884 40.4747 55.9303 40.3618C55.9765 40.2489 56.0002 40.1279 56 40.0058V37.9298C56 37.6832 55.9029 37.4467 55.73 37.2723C55.5571 37.098 55.3226 37 55.0781 37H44.4184C44.1738 37 43.9394 37.098 43.7665 37.2723C43.5936 37.4467 43.4964 37.6832 43.4964 37.9298V42.7311H34.7326C34.4881 42.7311 34.2536 42.8291 34.0807 43.0035C33.9078 43.1778 33.8107 43.4143 33.8107 43.6609V48.7312H25.5378C25.2933 48.7312 25.0588 48.8292 24.8859 49.0035C24.713 49.1779 24.6159 49.4144 24.6159 49.661V56.0645H16.9219C16.8009 56.0642 16.6811 56.0881 16.5692 56.1346C16.4574 56.1812 16.3558 56.2495 16.2701 56.3357C16.1845 56.4219 16.1166 56.5243 16.0702 56.637C16.0239 56.7497 16 56.8706 16 56.9926V59.0702C16 59.3168 16.0971 59.5533 16.27 59.7277C16.4429 59.902 16.6774 60 16.9219 60Z"/>'
    + '</mask> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8917 0.821829C17.1015 0.290281 16.1708 0.00429839 15.2175 7.17673e-05C14.5854 -0.00337392 13.9588 0.117288 13.3736 0.355169C12.7883 0.59305 12.2557 0.943491 11.8063 1.38648C11.3569 1.82947 10.9995 2.35634 10.7544 2.93699C10.5094 3.51765 10.3815 4.14073 10.378 4.77065C10.3719 5.72071 10.6487 6.65125 11.1734 7.44448C11.6981 8.23771 12.4472 8.85798 13.3258 9.22679C14.2043 9.5956 15.173 9.69636 16.109 9.51633C17.0451 9.33629 17.9066 8.88356 18.5844 8.21542C19.2622 7.54728 19.7258 6.69377 19.9167 5.76292C20.1075 4.83206 20.017 3.86571 19.6565 2.98615C19.2961 2.10659 18.6819 1.35338 17.8917 0.821829ZM8.38662 19.8158L8.38628 19.816C7.96835 19.9634 7.58287 20.0995 7.20291 20.2502C7.09824 20.3132 7.01701 20.4085 6.97153 20.5217C5.87749 22.7023 4.78674 24.8829 3.69926 27.0634C3.35792 27.752 2.83115 28.1755 2.05821 28.2295C1.70844 28.267 1.35529 28.2019 1.04216 28.0421C0.729041 27.8823 0.469591 27.6348 0.295716 27.33C0.135701 27.085 0.0372462 26.8052 0.0086815 26.5143C-0.0198831 26.2234 0.0222829 25.9299 0.13161 25.6586L0.499217 24.6863C1.4067 22.2856 2.31414 19.885 3.24962 17.4945C3.39711 17.1637 3.62634 16.8756 3.91588 16.6571C5.79658 15.179 7.68928 13.7153 9.58064 12.2526L9.5807 12.2525L9.58075 12.2525L9.58112 12.2522L10.5359 11.5137C11.1967 11.0149 11.9846 10.7109 12.8101 10.6361C13.6356 10.5614 14.4656 10.7189 15.2058 11.0908C15.946 11.4627 16.5666 12.034 16.9972 12.7399C17.4278 13.4457 17.6511 14.2578 17.6417 15.0839V24.2701C17.6289 24.3908 17.657 24.5122 17.7215 24.6151C17.7861 24.7179 17.8833 24.7963 17.9978 24.8376C19.2282 25.4452 20.4563 26.0577 21.6845 26.6702L21.6851 26.6705L21.6861 26.671L21.6862 26.671L21.6862 26.6711C23.0294 27.3409 24.3726 28.0107 25.7189 28.6744C26.7036 29.165 27.2632 29.9107 27.3337 31.0179C27.4022 32.0889 27.4749 33.1599 27.5477 34.2308C27.6022 35.0341 27.6568 35.8373 27.7095 36.6406C27.8014 38.0143 27.8884 39.3881 27.9705 40.7619C28.0098 41.1124 28.0098 41.4662 27.9705 41.8167C27.8809 42.332 27.6145 42.8003 27.2167 43.1414C26.819 43.4825 26.3146 43.6752 25.79 43.6866C25.2654 43.698 24.7531 43.5274 24.3408 43.2039C23.9285 42.8804 23.6418 42.4241 23.5298 41.9132C23.3102 40.8978 23.1116 39.8715 22.9131 38.8455L22.9131 38.8453L22.9129 38.8445C22.8238 38.3837 22.7346 37.9229 22.6436 37.4632C22.5825 37.1544 22.5208 36.845 22.4591 36.5352L22.4589 36.5343L22.4587 '
    + '36.5333L22.4585 36.5323C22.2915 35.6945 22.1239 34.8539 21.9659 34.0141C21.959 33.898 21.913 33.7876 21.8352 33.7009C21.7575 33.6142 21.6525 33.5562 21.5375 33.5365C19.423 32.9846 17.31 32.4222 15.1975 31.86C14.1802 31.5892 13.163 31.3185 12.1458 31.049C10.0239 30.4831 8.81772 28.936 8.81772 '
    + ' 26.7609V19.6631C8.66972 19.7159 8.52635 19.7665 8.38662 19.8158ZM9.12255 30.5158C10.1576 31.6088 11.5045 31.9475 12.8495 32.2857C12.9354 32.3073 13.0213 32.3289 13.107 32.3507C13.4295 32.4329 13.7508 32.5198 14.0719 32.6065L14.0724 32.6066L14.0729 32.6068L14.0729 32.6068C14.5881 32.746 15.1027 32.8851 15.6211 33.0049C15.9132 33.0736 15.9707 33.1897 15.9297 33.4726L15.8811 33.8131L15.8811 33.8131L15.8811 33.8132L15.8811 33.8132C15.5395 36.2102 15.1976 38.6087 14.8827 41.0087C14.5577 43.4883 14.2592 45.9678 13.9607 48.4473L13.9112 48.8588C13.7749 49.9955 13.048 50.8066 11.9632 50.9735C11.4676 51.0505 10.9604 50.9586 10.5237 50.7125C10.0871 50.4664 9.74662 50.0807 9.55744 49.6177C9.43821 49.3109 9.37593 48.985 9.37364 48.656C9.34719 46.5795 9.3265 44.5025 9.30582 42.4255L9.30582 42.4253L9.30581 42.4252L9.30581 42.425C9.28672 40.5076 9.26762 38.5902 9.24399 36.6732C9.22728 35.3411 9.19621 34.0144 9.16514 32.6878V32.6877V32.6877V32.6876L9.16511 32.6866C9.15042 32.0591 9.13572 31.4316 9.12255 30.8036C9.1204 30.7467 9.12107 30.6855 9.12179 30.6205C9.12217 30.5866 9.12255 30.5517 9.12255 30.5158ZM18.828 15.6299C18.9537 15.8482 19.0833 16.0644 19.2129 16.2806C19.5097 16.7758 19.8065 17.2708 20.0555 17.7887C20.2323 18.1841 20.4878 18.5396 20.8066 18.8337C21.1253 19.1277 21.5007 19.3542 21.9099 19.4994C23.0621 19.9437 24.1899 20.4539 25.3168 20.9637C25.7372 21.1539 26.1574 21.344 26.5787 21.5306C26.8937 21.6572 27.1615 21.8781 27.3452 22.1628C27.5289 22.4476 27.6195 22.7821 27.6043 23.1203C27.5902 23.4586 27.467 23.7835 27.2529 24.0465C27.0389 24.3096 26.7455 24.4969 26.4162 24.5807C26.1173 24.6492 25.8064 24.6464 25.5087 24.5725C24.0228 24.1628 22.54 23.7399 21.0577 23.3171L21.0574 23.3171L21.0554 23.3165C20.3791 23.1236 19.7029 22.9308 19.0265 22.7392C18.8493 22.6885 18.7279 22.6394 18.7295 22.4121C18.7361 20.9489 18.7339 19.4849 18.7317 18.0212L18.7317 18.0172C18.7306 17.2868 18.7295 16.5564 18.7295 15.8262C18.7295 15.7928 18.7339 15.7601 18.7384 15.7264C18.7412 15.7056 18.744 15.6845 18.7459 15.6627L18.828 15.6299ZM16.9219 60H27.5963C27.8408 60 28.0753 59.902 28.2482 59.7277C28.4211 59.5533 28.5182 59.3168 28.5182 59.0702V52.6668H36.791C37.0355 52.6668 37.27 52.5688 37.4429 52.3944C37.6158 52.2201 37.7129 51.9836 37.7129 51.737V46.6667H46.4768C46.7213 46.6667 46.9558'
    + '46.5687 47.1287 46.3944C47.3016 46.22 47.3987 45.9835 47.3987 45.7369V40.9355H55.0781C55.1992 40.9358 55.3192 40.9119 55.4311 40.8652C55.5431 40.8186 55.6448 40.7501 55.7305 40.6637C55.8161 40.5773 55.884 40.4747 55.9303 40.3618C55.9765 40.2489 56.0002 40.1279 56 40.0058V37.9298C56 37.6832'
    + '55.9029 37.4467 55.73 37.2723C55.5571 37.098 55.3226 37 55.0781 37H44.4184C44.1738 37 43.9394 37.098 43.7665 37.2723C43.5936 37.4467 43.4964 37.6832 43.4964 37.9298V42.7311H34.7326C34.4881 42.7311 34.2536 42.8291 34.0807 43.0035C33.9078 43.1778 33.8107 43.4143 33.8107 43.6609V48.7312H25.5378C25.2933 48.7312 25.0588 48.8292 24.8859 49.0035C24.713 49.1779 24.6159 49.4144 24.6159 49.661V56.0645H16.9219C16.8009 56.0642 16.6811 56.0881 16.5692 56.1346C16.4574 56.1812 16.3558 56.2495 16.2701 56.3357C16.1845 56.4219 16.1166 56.5243 16.0702 56.637C16.0239 56.7497 16 56.8706 16 56.9926V59.0702C16 59.3168 16.0971 59.5533 16.27 59.7277C16.4429 59.902 16.6774 60 16.9219 60Z" fill="#A3CEE9"/>'
    + '<path d="M15.2175 7.17673e-05L15.2093 1.50005L15.2108 1.50006L15.2175 7.17673e-05ZM13.3736 0.355169L13.9383 1.74478L13.3736 0.355169ZM11.8063 1.38648L10.7533 0.318244L10.7533 0.318245L11.8063 1.38648ZM10.7544 2.93699L9.37248 2.35373L9.37248 2.35373L10.7544 2.93699ZM10.378 4.77065L11.878 4.78037L11.878 4.77883L10.378 4.77065ZM11.1734 7.44448L12.4244 6.61691L12.4244 6.61691L11.1734 7.44448ZM13.3258 9.22679L12.7452 10.6099L12.7452 10.6099L13.3258 9.22679ZM16.109 9.51633L15.8258 8.04332L15.8258 8.04332L16.109 9.51633ZM18.5844 8.21542L19.6374 9.28366L19.6374 9.28366L18.5844 8.21542ZM19.9167 5.76292L18.4472 5.46164L18.4472 5.46165L19.9167 5.76292ZM19.6565 2.98615L18.2686 3.55497L18.2686 3.55497L19.6565 2.98615ZM8.38628 19.816L8.88548 21.2305L8.89695 21.2264L8.38628 19.816ZM8.38662 19.8158L7.88746 18.4013L7.87596 18.4054L8.38662 19.8158ZM7.20291 20.2502L6.6498 18.8559L6.53494 18.9015L6.42908 18.9652L7.20291 20.2502ZM6.97153 20.5217L8.31225 21.1944L8.3401 21.1388L8.36327 21.0812L6.97153 20.5217ZM3.69926 27.0634L2.35693 26.394L2.35535 26.3972L3.69926 27.0634ZM2.05821 28.2295L1.95373 26.7332L1.92591 26.7351L1.89818 26.7381L2.05821 28.2295ZM1.04216 28.0421L0.3603 29.3782L0.3603 29.3782L1.04216 28.0421ZM0.295716 27.33L1.5986 26.5867L1.57625 26.5475L1.55158 26.5098L0.295716 27.33ZM0.0086815 26.5143L-1.48414 26.6609L-1.48414 26.6609L0.0086815 26.5143ZM0.13161 25.6586L1.52286 26.2193L1.52893 26.2043L1.53468 26.1891L0.13161 25.6586ZM0.499217 24.6863L1.90228 25.2168L1.90232 25.2167L0.499217 24.6863ZM3.24962 17.4945L1.87965 16.8836L1.86546 16.9154L1.85277 16.9479L3.24962 17.4945ZM3.91588 16.6571L4.81942 17.8545L4.83119 17.8456L4.84279 17.8365L3.91588 16.6571ZM9.58064 12.2526L10.4983 13.4391L10.5042 13.4345L10.5101 13.4299L9.58064 12.2526ZM9.58075 12.2525L8.66044 11.0679L8.65128 11.0752L9.58075 12.2525ZM9.58112 12.2522L8.66339 11.0657L8.66084 11.0677L9.58112 12.2522ZM10.5359 11.5137L9.63222 10.3165L9.62516 10.3218L9.61817 10.3272L10.5359 11.5137ZM12.8101 10.6361L12.6748 9.14225L12.6748 9.14225L12.8101 10.6361ZM15.2058 11.0908L15.8792 9.75043L15.8792 9.75043L15.2058 11.0908ZM17.6417 15.0839L16.1418 15.0668L16.1417 15.0753V15.0839H17.6417ZM17.6417 24.2701L19.1333 24.4282L19.1417 24.3494V24.2701H17.6417ZM17.7215 24.6151L18.9921 23.8178L18.9921 23.8178L17.7215 24.6151ZM17.9978 24.8376L18.662 23.4927L18.5866 23.4554L18.5075 23.4269L17.9978 24.8376ZM21.6845 26.6702L22.3554 25.3286L22.354 25.3279L21.6845 26.6702ZM21.6851'
    + '26.6705L21.0142 28.0121L21.0172 28.0136L21.6851 26.6705ZM21.6861 26.671L21.0182 28.0141L21.0416 28.0257L21.0654 28.0366L21.6861 26.671ZM21.6862 26.6711L22.3557 25.3287L22.3315 25.3167L22.3069 25.3055L21.6862 26.6711ZM25.7189 28.6744L26.3879 27.3318L26.3821 27.3289L25.7189 28.6744ZM27.3337 31.0179L25.8368 31.1133L25.8368 31.1136L27.3337 31.0179ZM27.5477 34.2308L29.0442 34.1292L29.0442 34.1292L27.5477 34.2308ZM27.7095 '
    + '36.6406L26.2128 36.7389L26.2129 36.7407L27.7095 36.6406ZM27.9705 40.7619L26.4731 40.8513L26.4755 40.8904L26.4798 40.9293L27.9705 40.7619ZM27.9705 41.8167L29.4483 42.0736L29.4561 42.029L29.4611 41.9841L27.9705 41.8167ZM27.2167 43.1414L28.1932 44.28L28.1932 44.28L27.2167 43.1414ZM24.3408 43.2039L23.4148 44.384L23.4148 44.384L24.3408 43.2039ZM23.5298 41.9132L22.0637 42.2303L22.0646 42.2344L23.5298 41.9132ZM22.9131 38.8455L24.3859 38.5606L24.384 38.5513L22.9131 38.8455ZM22.9131 38.8453L21.4395 39.1255L21.4408 39.1325L21.4422 39.1395L22.9131 38.8453ZM22.9129 38.8445L24.3865 38.5643L24.3856 38.5596L22.9129 38.8445ZM22.6436 37.4632L21.1721 37.7543L21.1722 37.7546L22.6436 37.4632ZM22.4591 36.5352L20.9875 36.8261L20.988 36.8285L22.4591 36.5352ZM22.4585 36.5323L23.93 36.2414L23.9295 36.239L22.4585 36.5323ZM21.9659 34.0141L20.4684 34.1021L20.4741 34.1975L20.4917 34.2914L21.9659 34.0141ZM21.5375 33.5365L21.1587 34.9879L21.2207 35.0041L21.2838 35.0149L21.5375 33.5365ZM15.1975 31.86L15.5833 30.4104L15.5833 30.4104L15.1975 31.86ZM12.1458 31.049L11.7593 32.4984L11.7616 32.499L12.1458 31.049ZM8.81772 19.6631H10.3177V17.5347L8.31326 18.2505L8.81772 19.6631ZM12.8495 32.2857L13.2154 30.831L13.2154 30.831L12.8495 32.2857ZM9.12255 30.5158L10.2117 29.4844L7.62255 26.7503V30.5158H9.12255ZM13.107 32.3507L13.4777 30.8972L13.4763 30.8969L13.107 32.3507ZM14.0719 32.6065L13.6806 34.0546L13.681 34.0547L14.0719 32.6065ZM14.0724 32.6066L13.6815 34.0548L13.6879 34.0565L14.0724 32.6066ZM14.0729 32.6068L14.5594 31.1879L14.5089 31.1706L14.4574 31.1569L14.0729 32.6068ZM14.0729 32.6068L13.5864 34.0257L13.6336 34.0419L13.6817 34.0549L14.0729 32.6068ZM15.6211 33.0049L15.9645 31.5447L15.959 31.5434L15.6211 33.0049ZM15.9297 33.4726L14.4452 33.2574L14.4447 33.261L15.9297 33.4726ZM15.8811 33.8131L17.3646 34.0356L17.3661 34.0247L15.8811 33.8131ZM15.8811 33.8132L14.3977 33.5907L14.3961 33.6016L15.8811 33.8132ZM14.8827 41.0087L13.3954 40.8136L13.3954 40.8138L14.8827 41.0087ZM13.9607 48.4473L15.4499 48.6266L15.4499 48.6266L13.9607 48.4473ZM13.9112 48.8588L12.4219 48.6795L12.4218 48.6804L13.9112 48.8588ZM11.9632 50.9735L11.7352 49.4909L11.7327 49.4913L11.9632 50.9735ZM10.5237 50.7125L9.7873 52.0193L9.78731 52.0193L10.5237 50.7125ZM9.55744 49.6177L8.1593 50.161L8.16399 50.1731L8.16888 '
    + '50.1851L9.55744 49.6177ZM9.37364 48.656L10.8736 48.6456L10.8735 48.6369L9.37364 48.656ZM9.30582 42.4255L10.8058 42.4106L10.8056 42.3987L9.30582 42.4255ZM9.30581 42.425L7.80584 42.44L7.80605'
    + '42.4518L9.30581 42.425ZM9.24399 36.6732L10.7439 36.6547L10.7439 36.6544L9.24399 36.6732ZM9.16514 32.6878H7.66514V32.7053L7.66555 32.7229L9.16514 32.6878ZM9.16514 32.6876H10.6651V32.6691L10.6647 32.6506L9.16514 32.6876ZM9.16511 32.6866L7.66552 32.7217L7.66557 32.7237L9.16511 32.6866ZM9.12255 30.8036L10.6222 30.7721L10.622 30.7595L10.6215 30.7468L9.12255 30.8036ZM9.12179 30.6205L7.62188 30.6039L7.62188 30.604L9.12179 30.6205ZM19.2129 16.2806L20.4995 15.5094L20.4995 '
    + '15.5094L19.2129 16.2806ZM18.828 15.6299L20.1278 14.8813L19.4793 13.7555L18.2725 14.2366L18.828 15.6299ZM20.0555 17.7887L21.4248 17.1764L21.4163 17.1575L21.4074 17.1388L20.0555 17.7887ZM21.9099 19.4994L22.4496 18.0998L22.4306 18.0925L22.4115 18.0857L21.9099 19.4994ZM25.3168 20.9637L25.9351 19.5971L25.9351 19.5971L25.3168 20.9637ZM26.5787 21.5306L25.9712 22.9021L25.9951 22.9127L26.0193 22.9224L26.5787 21.5306ZM27.3452 22.1628L28.6057 21.3496L28.6057 21.3496L27.3452 22.1628ZM27.6043 23.1203L26.1058 23.0532L26.1056 23.0576L27.6043 23.1203ZM26.4162 24.5807L26.751 26.0429L26.7686 26.0388L26.786 26.0344L26.4162 24.5807ZM25.5087 24.5725L25.1099 26.0185L25.1287 26.0237L25.1476 26.0284L25.5087 24.5725ZM21.0577 23.3171L21.4691 21.8746L21.4609 21.8723L21.0577 23.3171ZM21.0574 23.3171L20.6453 24.7594L20.6542 24.7619L21.0574 23.3171ZM21.0554 23.3165L21.4675 21.8742L21.4668 21.874L21.0554 23.3165ZM19.0265 22.7392L18.614 24.1814L18.6178 24.1824L19.0265 22.7392ZM18.7295 22.4121L20.2295 22.4229L20.2295 22.4188L18.7295 22.4121ZM18.7317 18.0212L17.2317 18.0234L17.2317 18.0234L18.7317 18.0212ZM18.7317 18.0172L20.2317 18.0151L20.2317 18.015L18.7317 18.0172ZM18.7384 15.7264L20.2251 15.9258L20.2251 15.9257L18.7384 15.7264ZM18.7459 15.6627L18.1905 14.2693L17.3308 14.612L17.2514 15.5341L18.7459 15.6627ZM28.5182 52.6668V51.1668H27.0182V52.6668H28.5182ZM37.4429 52.3944L36.3777 51.3383L36.3777 51.3383L37.4429 52.3944ZM37.7129 46.6667V45.1667H36.2129V46.6667H37.7129ZM47.3987 40.9355V39.4355H45.8987V40.9355H47.3987ZM55.0781 40.9355L55.0808 39.4355H55.0781V40.9355ZM55.4311 40.8652L54.8542 39.4806L54.8541 39.4806L55.4311 40.8652ZM55.7305 40.6637L56.7956 41.7199L56.7956 41.7198L55.7305 40.6637ZM56 40.0058H54.5L54.5 40.0084L56 40.0058ZM43.4964 42.7311V44.2311H44.9964V42.7311H43.4964ZM34.0807 43.0035L35.1458 44.0596L35.1458 44.0596L34.0807 43.0035ZM33.8107 48.7312V50.2312H35.3107V48.7312H33.8107ZM24.8859 49.0035L25.9511 50.0597L25.9511 50.0597L24.8859 49.0035ZM24.6159 56.0645V57.5645H26.1159V56.0645H24.6159ZM16.9219 56.0645L16.9192 57.5645H16.9219V56.0645ZM16.5692 56.1346L15.9929 54.7498L15.9929 54.7498L16.5692 56.1346ZM16.2701 56.3357L17.3343 57.3928L17.3344 57.3928L16.2701 56.3357ZM16.27 59.7277L17.3352 58.6715L17.3352 58.6715L16.27 '
    + '59.7277ZM15.2108 1.50006C15.8685 1.50297 16.5101 1.70029 17.0544 2.06643L18.7289 -0.422777C17.6928 -1.11973 16.4731 -1.49438 15.2241 -1.49991L15.2108 1.50006ZM13.9383 1.74478C14.3416 1.58088 14.7735 1.49767 15.2093 1.50005L15.2257 -1.49991C14.3973 -1.50442 13.5761 -1.3463 12.8088 -1.03444L13.9383 1.74478ZM12.8594 2.45472C13.1685 2.15001 13.5351 1.90868 13.9383 1.74478L12.8088 -1.03444C12.0415 -0.722583 11.343 -0.263025 10.7533 0.318244L12.8594 2.45472ZM12.1364 3.52026C12.3047 3.12154 12.5503 2.75942 12.8594 2.45472L10.7533 0.318245C10.1636 0.899521 9.69434 1.59113 9.37248 2.35373L12.1364 3.52026ZM11.878 4.77883C11.8804 4.34661 11.9681 3.91896 12.1364 3.52025L9.37248 2.35373C9.05061 3.11634 8.88257 3.93485 8.87805 4.76246L11.878 4.77883ZM12.4244 6.61691C12.0637 6.07163 11.8738 5.4325 11.878 4.78037L8.87806 4.76092C8.86996 6.00893 9.23359 7.23087 9.92233 8.27205L12.4244 6.61691ZM13.9063 7.8437C13.3007 7.58947 '
    + '12.7852 7.16226 12.4244 6.61691L9.92233 8.27205C10.611 9.31317 11.5936 10.1265 12.7452 10.6099L13.9063 7.8437ZM15.8258 8.04332C15.1801 8.1675 14.512 8.09795 13.9063 7.8437L12.7452 10.6099C13.8967 11.0932 15.1659 11.2252 16.3923 10.9893L15.8258 8.04332ZM17.5313 7.14718C17.0649 7.607 16.4714 7.91915 15.8258 8.04332L16.3923 10.9893C17.6189 10.7534 18.7483 10.1601 19.6374 9.28366L17.5313 7.14718ZM18.4472 5.46165C18.3162 6.10072 17.9977 6.68742 17.5313 7.14719L19.6374 9.28366C20.5266 8.40715 21.1354 7.28682 21.3861 '
    + '6.06419L18.4472 5.46165ZM18.2686 3.55497C18.5162 4.15912 18.5783 4.82259 18.4472 5.46164L21.3861 6.0642C21.6368 4.84154 21.5178 3.57229 21.0445 2.41733L18.2686 3.55497ZM17.0544 2.06643C17.5987 2.43254 18.0209 2.95078 18.2686 3.55497L21.0445 2.41733C20.5712 1.2624 19.765 0.274209 18.7289 -0.422777L17.0544 2.06643ZM8.89695 21.2264L8.89728 21.2262L7.87596 18.4054L7.87562 18.4056L8.89695 21.2264ZM7.75603 21.6445C8.10456 21.5062 8.46243 21.3797 8.88546 21.2305L7.88711 18.4015C7.47427 18.5471 7.06117 18.6927 6.6498 18.8559L7.75603 21.6445ZM8.36327 21.0812C8.28687 21.2713 8.15084 21.4304 7.97675 21.5352L6.42908 18.9652C6.04564 19.1961 5.74716 19.5458 5.57978 19.9622L8.36327 21.0812ZM5.0416 27.7329C6.12853 25.5534 7.21875 23.3739 8.31225 21.1944L5.63081 19.849C4.53623 22.0307 3.44494 24.2124 2.35693 26.394L5.0416 27.7329ZM2.16269 29.7259C3.5611 29.6282 4.51053 28.8041 5.04318 27.7297L2.35535 26.3972C2.2659 26.5776 2.18957 26.6484 2.15358 26.6748C2.12736 26.694 2.07829 26.7245 1.95373 26.7332L2.16269 29.7259ZM0.3603 29.3782C0.933182 29.6705 1.5789 29.7896 2.21823 29.721L1.89818 26.7381C1.83797 26.7445 1.77739 26.7333 1.72403 26.706L0.3603 29.3782ZM-1.00717 28.0733C-0.68816 28.6325 -0.212624 29.0858 0.3603 29.3782L1.72403 26.706C1.67071 26.6788 1.62734 26.6371 1.5986 26.5867L-1.00717 28.0733ZM-1.48414 26.6609C-1.43195 27.1924 -1.25209 27.7033 -0.960145 28.1503L1.55158 26.5098C1.52349 26.4668 1.50644 26.418 1.5015 26.3677L-1.48414 26.6609ZM-1.25964 25.0979C-1.45926 25.5932 -1.53633 26.1293 -1.48414 26.6609L1.5015 26.3677C1.49656 26.3174 1.50383 26.2666 1.52286 26.2193L-1.25964 25.0979ZM-0.90385 24.1558L-1.27146 25.1281L1.53468 26.1891L1.90228 25.2168L-0.90385 24.1558ZM1.85277 16.9479C0.913591 19.3478 0.00308097 21.7566 -0.903887 24.1559L1.90232 25.2167C2.81031 22.8146 3.7147 20.4221 4.64647 18.0411L1.85277 16.9479ZM3.01235 15.4598C2.52056 15.8309 2.13068 16.3207 1.87965 16.8836L4.61958 18.1054C4.66354 18.0068 4.73211 17.9204 4.81942 17.8545L3.01235 15.4598ZM8.663 11.066C6.77242 12.5281 4.87506 13.9954 2.98898 15.4778L4.84279 17.8365C6.71809 16.3626 8.60615 14.9024 10.4983 13.4391L8.663 11.066ZM8.65123 11.0752L8.65118 11.0752L10.5101 13.4299L10.5102 13.4298L8.65123 11.0752ZM8.65128 11.0752L8.65123 11.0752L10.5102 13.4298L10.5102 13.4298L8.65128 11.0752ZM8.66084 11.0677L8.66047 11.068L10.501 13.437L10.5014 13.4367L8.66084 11.0677ZM9.61817 10.3272L8.66339 11.0657L10.4989 13.4387L11.4536 12.7002L9.61817 10.3272ZM12.6748 '
    + '9.14225C11.5709 9.24223 10.5167 9.64884 9.63222 10.3165L11.4396 12.7109C11.8766 12.381 12.3983 12.1796 12.9454 12.13L12.6748 9.14225ZM15.8792 9.75043C14.8889 9.25286 13.7787 9.04227 12.6748 9.14225L12.9454 12.13C13.4925 12.0805 14.0424 12.1849 14.5324 12.4311L15.8792 9.75043ZM18.2778 11.9587C17.7008 11.0129 16.8696 10.248 15.8792 9.75043L14.5324 12.4311C15.0223 12.6773 15.4325 13.0551 15.7167 13.521L18.2778 11.9587ZM19.1416 15.101C19.1542 13.9933 18.8548 12.9046 18.2778 11.9587L15.7167 13.521C16.0009 13.9869 16.148 14.5224 16.1418 15.0668L19.1416 15.101ZM19.1417 24.2701V15.0839H16.1417V24.2701H19.1417ZM18.9921 23.8178C19.1061 23.9994 19.156 24.2144 19.1333 24.4282L16.15 24.112C16.1018 24.5672 16.2079 25.025 16.451 25.4124L18.9921 23.8178ZM18.5075 23.4269C18.7073 23.4991 18.8782 23.6363 18.9921 23.8178L16.451 25.4123C16.6939 25.7995 17.0593 26.0935 17.4881 26.2484L18.5075 23.4269ZM22.354 25.3279C21.1262 24.7156 19.8954 24.1018 18.662 23.4927L17.3336 26.1826C18.5609 26.7887 19.7865 27.3998 21.0151 28.0126L22.354 25.3279ZM22.3559 25.3288L22.3554 25.3286L21.0137 28.0119L21.0142 28.0121L22.3559 25.3288ZM22.354 25.3279L22.353 25.3274L21.0172 28.0136L21.0182 28.0141L22.354 25.3279ZM22.3069 25.3055L22.3068 25.3055L21.0654 28.0366L21.0655 28.0366L22.3069 25.3055ZM22.3069 25.3055L22.3069 25.3055L21.0655 28.0366L21.0655 28.0366L22.3069 25.3055ZM26.3821 27.3289C25.0394 26.6671 23.6993 25.9988 22.3557 25.3287L21.0168 28.0134C22.3594 28.683 23.7058 29.3544 25.0558 30.0198L26.3821 27.3289ZM28.8307 30.9225C28.7801 30.1285 28.5461 29.3914 28.0958 28.7516C27.6504 28.1188 27.0505 27.662 26.3879 27.3318L25.05 30.0169C25.372 30.1774 25.5443 30.3387 25.6425 30.4783C25.7358 30.6108 25.8168 30.8001 25.8368 31.1133L28.8307 30.9225ZM29.0442 34.1292C28.9715 33.0577 28.8989 31.9897 28.8307 30.9223L25.8368 31.1136C25.9055 32.1881 25.9784 33.262 26.0511 34.3325L29.0442 34.1292ZM29.2063 36.5423C29.1534 35.7371 29.0988 34.9322 29.0442 34.1292L26.0511 34.3325C26.1057 35.136 26.1602 35.9376 26.2128 36.7389L29.2063 36.5423ZM29.4678 40.6725C29.3855 39.2951 29.2983 37.9178 29.2062 36.5405L26.2129 36.7407C26.3046 38.1109 26.3913 39.4811 26.4731 40.8513L29.4678 40.6725ZM29.4611 41.9841C29.513 41.5224 29.513 41.0563 29.4611 40.5945L26.4798 40.9293C26.5067 41.1686 26.5067 41.4101 26.4798 41.6494L29.4611 41.9841ZM28.1932 44.28C28.8549 43.7126 29.299 42.9328 29.4483 42.0736L26.4926 41.5599C26.4629 41.7312 26.3741 41.888 26.2403 42.0027L28.1932 ' 
    + '44.28ZM25.8226 45.1863C26.6936 45.1673 27.5316 44.8474 28.1932 44.28L26.2403 42.0027C26.1063 42.1176 25.9357 42.1831 25.7574 42.187L25.8226 45.1863ZM23.4148 44.384C24.1005 44.9219 24.9516 45.2052 25.8226 45.1863L25.7574 42.187C25.5791 42.1909 25.4057 42.1328 25.2667 42.0238L23.4148 44.384ZM22.0646 42.2344C22.2513 43.0863 22.7291 43.8459 23.4148 44.384L25.2667 42.0238C25.1278 41.9148 25.0322 41.762 24.995 41.592L22.0646 42.2344ZM21.4404 39.1304C21.6384 40.1536 21.84 41.1961 22.0637 42.2303L24.9959 41.5961C24.7803 40.5995 24.5848 39.5893 24.3858 38.5606L21.4404 39.1304ZM21.4422 39.1395L21.4423 39.1397L24.384 38.5513L24.384 38.5512L21.4422 39.1395ZM21.4393 39.1247L21.4395 39.1255L24.3867 38.5651L24.3865 38.5643L21.4393 39.1247ZM21.1722 37.7546C21.2625 38.2105 21.351 38.668 21.4402 39.1294L24.3856 38.5596C24.2966 38.0993 24.2068 37.6353 24.115 37.1718L21.1722 37.7546ZM20.988 36.8285C21.0498 37.1385 21.1113 37.4468 21.1721 37.7543L24.1151 37.1721C24.0538 36.862 23.9918 36.5515 23.9301 36.2419L20.988 36.8285ZM20.9874 36.8251L20.9876 36.8261L23.9306 36.2444L23.9304 36.2434L20.9874 36.8251ZM20.9872 36.8242L20.9874 36.8251L23.9304 36.2434L23.9302 36.2424L20.9872 36.8242ZM20.987 36.8232L20.9872 36.8242L23.9302 36.2424L23.93 36.2414L20.987 36.8232ZM20.4917 34.2914C20.6515 35.1405 20.8207 35.9892 20.9874 36.8256L23.9295 36.239C23.7622 35.3999 23.5962 34.5672 23.44 33.7367L20.4917 34.2914ZM20.7186 34.7024C20.5701 34.5369 20.4816 34.3254 20.4684 34.1021L23.4633 33.926C23.4365 33.4706 23.2559 33.0383 22.9519 32.6993L20.7186 34.7024ZM21.2838 35.0149C21.0663 34.9776 20.8669 34.8678 20.7186 34.7024L22.9519 32.6993C22.648 32.3605 22.2388 32.1349 21.7913 32.0581L21.2838 35.0149ZM14.8117 33.3095C16.9236 33.8716 19.0401 34.4349 21.1587 34.9879L21.9164 32.0851C19.8059 31.5343 17.6964 30.9728 15.5833 30.4104L14.8117 33.3095ZM11.7616 32.499C12.7779 32.7682 13.7943 33.0387 14.8117 33.3095L15.5833 30.4104C14.5661 30.1397 13.5481 29.8688 12.53 29.599L11.7616 32.499ZM7.31772 26.7609C7.31772 28.133 7.70225 29.4001 8.50159 30.4288C9.29977 31.456 10.4331 32.1447 11.7593 32.4984L12.5323 29.5997C11.7366 29.3875 11.2059 29.0197 10.8705 28.5881C10.5363 28.1579 10.3177 27.5639 10.3177 26.7609H7.31772ZM7.31772 19.6631V26.7609H10.3177V19.6631H7.31772ZM8.88576 21.2304C9.02516 21.1812 9.17111 21.1297 9.32217 21.0757L8.31326 18.2505C8.16832 18.3022 8.02754 18.3519 7.88748 18.4013L8.88576 21.2304ZM13.2154 30.831C11.8099 30.4776 10.9023 30.2137 '
    +'10.2117 29.4844L8.03341 31.5471C9.41291 33.0039 11.199 33.4174 12.4837 33.7404L13.2154 30.831ZM13.4763 30.8969C13.3885 30.8746 13.3009 30.8526 13.2154 30.831L12.4837 33.7404C12.5699 33.7621 12.654 33.7833 12.7378 33.8046L13.4763 30.8969ZM14.4632 31.1584C14.1438 31.0721 13.8122 30.9825 13.4777 30.8972L12.7364 33.8042C13.0468 33.8834 13.3578 33.9674 13.6806 34.0546L14.4632 31.1584ZM14.4633 31.1585L14.4628 31.1584L13.681 34.0547L13.6815 34.0548L14.4633 31.1585ZM14.4574 31.1569L14.4569 31.1568L13.6879 34.0565L13.6884 34.0567L14.4574 31.1569ZM14.5594 31.1879L14.5594 31.1879L13.5864 34.0257L13.5864 34.0257L14.5594 31.1879ZM15.959 31.5434C15.4719 31.4308 14.9838 31.2991 14.4642 31.1587L13.6817 34.0549C14.1923 34.1928 14.7336 34.3393 15.2833 34.4663L15.959 31.5434ZM17.4141 33.6879C17.4401 33.5088 17.5247 32.9256 17.1713 32.3618C16.7967 31.7642 16.2007 31.6003 15.9645 31.5447L15.2778 34.4651C15.2752 34.4644 15.2556 34.4598 15.2246 34.449C15.1937 34.4381 15.1428 34.4182 15.0807 34.3843C14.9478 34.3119 14.7692 '
    + '34.1782 14.6293 33.9551C14.4927 33.737 14.4545 33.5314 14.4447 33.4106C14.436 33.3027 14.448 33.2377 14.4452 33.2574L17.4141 33.6879ZM17.3661 34.0247L17.4147 33.6843L14.4447 33.261L14.3961 33.6014L17.3661 34.0247ZM17.3645 34.0356L17.3645 34.0356L14.3977 33.5906L14.3977 33.5906L17.3645 34.0356ZM17.3645 34.0357L17.3645 34.0356L14.3977 33.5906L14.3977 33.5907L17.3645 34.0357ZM17.3645 34.0357L17.3645 34.0357L14.3977 33.5907L14.3977 33.5907L17.3645 34.0357ZM16.3699 41.2039C16.6836 38.8135 17.0243 36.4233 17.3661 34.0249L14.3961 33.6016C14.0547 35.9972 13.7116 38.4039 13.3954 40.8136L16.3699 41.2039ZM15.4499 48.6266C15.7486 46.1458 16.0461 43.6741 16.3699 41.2037L13.3954 40.8138C13.0692 43.3025 12.7698 45.7898 12.4714 48.2681L15.4499 48.6266ZM15.4004 49.0381L15.4499 48.6266L12.4714 48.268L12.4219 48.6795L15.4004 49.0381ZM12.1912 52.456C14.0099 52.1764 15.1927 50.7711 15.4005 49.0373L12.4218 48.6804C12.3572 49.2198 12.086 49.4369 11.7352 49.4909L12.1912 52.456ZM9.78731 52.0193C10.5176 52.4309 11.3655 52.5844 12.1937 52.4556L11.7327 49.4913C11.5697 49.5166 11.4031 49.4863 11.2602 49.4057L9.78731 52.0193ZM8.16888 50.1851C8.48621 50.9617 9.05686 51.6076 9.7873 52.0193L11.2602 49.4057C11.1173 49.3252 11.007 49.1997 10.946 49.0503L8.16888 50.1851ZM7.87368 48.6665C7.87723 49.1779 7.97405 49.6843 8.1593 50.161L10.9556 49.0743C10.9024 48.9374 10.8746 48.7922 10.8736 48.6456L7.87368 48.6665ZM7.80589 42.4404C7.82657 44.5171 7.84728 46.5962 7.87376 48.6751L10.8735 48.6369C10.8471 46.5628 10.8264 44.4879 10.8057 42.4106L7.80589 42.4404ZM7.80606 42.4521L7.80606 42.4523L10.8056 42.3987L10.8056 42.3986L7.80606 42.4521ZM7.80605 42.452L7.80606 42.4521L10.8056 42.3986L10.8056 42.3984L7.80605 42.452ZM7.80605 42.4518L7.80605 42.452L10.8056 42.3984L10.8056 42.3982L7.80605 42.4518ZM7.7441 36.6917C7.76771 38.6066 7.78679 40.5222 7.80589 42.44L10.8057 42.4101C10.7866 40.493 10.7675 38.5738 10.7439 36.6547L7.7441 36.6917ZM7.66555 32.7229C7.69665 34.0508 7.72752 35.3695 7.74411 36.692L10.7439 36.6544C10.727 35.3128 10.6958 33.9779 10.6647 32.6527L7.66555 32.7229ZM7.66514 32.6877V32.6878H10.6651V32.6877H7.66514ZM7.66514 32.6877V32.6877H10.6651V32.6877H7.66514ZM7.66514 32.6876V32.6877H10.6651V32.6876H7.66514ZM7.66557 32.7237L7.6656 32.7247L10.6647 32.6506L10.6647 32.6495L7.66557 32.7237ZM7.62288 30.835C7.6361 31.4652 7.65084 32.0945 7.66552 32.7217L10.6647 32.6515C10.65 32.0237 10.6353 31.398 10.6222 30.7721L7.62288 30.835ZM7.62188 30.604C7.62126 '
    + '30.6603 7.61982 30.7599 7.62363 30.8604L10.6215 30.7468C10.621 30.7335 10.6209 30.7107 10.6217 30.6371L7.62188 30.604ZM7.62255 30.5158C7.62255 30.5421 7.62227 30.5689 7.62188 30.6039L10.6217 30.6372C10.6221 30.6043 10.6226 30.5613 10.6226 30.5158H7.62255ZM20.4995 15.5094C20.3687 15.2913 20.2458 15.0863 20.1278 14.8813L17.5282 16.3786C17.6615 16.6101 17.7979 16.8375 17.9264 17.0519L20.4995 15.5094ZM21.4074 17.1388C21.1234 16.5483 20.7902 15.9945 20.4995 15.5094L17.9264 17.0519C18.2293 17.5571 18.4895 17.9933 18.7036 18.4387L21.4074 17.1388ZM21.8236 17.7311C21.6541 17.5747 21.5185 17.386 21.4248 17.1764L18.6861 18.401C18.946 18.9823 19.3215 19.5045 19.7895 19.9362L21.8236 17.7311ZM22.4115 18.0857C22.1931 18.0083 21.9932 17.8875 21.8236 17.7311L19.7895 19.9362C20.2575 20.3679 20.8082 20.7001 21.4083 20.9131L22.4115 18.0857ZM25.9351 19.5971C24.8147 19.0902 23.6482 18.562 22.4496 18.0998L21.3702 20.899C22.476 21.3253 23.5651 21.8176 24.6986 22.3304L25.9351 19.5971ZM27.1861 20.1591C26.7712 19.9753 26.3563 19.7877 25.9351 19.5971L24.6986 22.3304C25.118 22.5202 25.5436 22.7127 25.9712 22.9021L27.1861 20.1591ZM28.6057 21.3496C28.2534 20.8036 27.7403 20.3809 27.138 20.1388L26.0193 22.9224C26.0471 22.9336 26.0697 22.9526 26.0848 22.9761L28.6057 21.3496ZM29.1028 23.1874C29.1319 22.5378 28.958 21.8957 28.6057 21.3496L26.0848 22.9761C26.0999 22.9994 26.107 23.0263 26.1058 23.0532L29.1028 23.1874ZM28.4165 24.9932C28.8343 24.4796 29.0754 23.8448 29.103 23.1829L26.1056 23.0576C26.105 23.0725 26.0996 23.0873 26.0894 23.0999L28.4165 24.9932ZM26.786 26.0344C27.4268 25.8714 27.9988 25.5066 28.4165 24.9932L26.0894 23.0999C26.079 23.1126 26.0641 23.1225 26.0464 23.127L26.786 26.0344ZM25.1476 26.0284C25.6735 26.1589 26.2228 26.1638 26.751 26.0429L26.0814 23.1186C26.0117 23.1345 25.9392 23.1339 25.8698 23.1166L25.1476 26.0284ZM20.6463 24.7596C22.1276 25.1821 23.6167 25.6067 25.1099 26.0185L25.9075 23.1265C24.429 22.7188 22.9525 22.2977 21.4691 21.8746L20.6463 24.7596ZM20.6542 24.7619L20.6545 24.7619L21.4609 21.8723L21.4606 21.8723L20.6542 24.7619ZM20.6433 24.7588L20.6453 24.7593L21.4695 21.8748L21.4675 21.8742L20.6433 24.7588ZM18.6178 24.1824C19.2926 24.3736 19.9675 24.566 20.644 24.759L21.4668 21.874C20.7907 21.6812 20.1132 21.488 19.4353 21.296L18.6178 24.1824ZM17.2295 22.4013C17.2266 22.8066 17.3468 23.3427 17.8082 23.7575C18.1549 24.0691 18.5654 24.1675 18.614 24.1814L19.4391 21.297C19.4015 21.2863 19.4348 21.2941 19.4873 21.3163C19.545 '
    + '21.3406 19.6748 21.4015 19.8137 21.5263C19.9654 21.6627 20.0842 21.8359 20.1559 22.0282C20.222 22.2055 20.23 22.3507 20.2295 22.4229L17.2295 22.4013ZM17.2317 18.0234C17.2339 19.4879 17.2361 20.9474 17.2295 22.4054L20.2295 22.4188C20.2361 20.9504 20.2339 19.4819 20.2317 18.019L17.2317 18.0234ZM17.2317 18.0194L17.2317 18.0234L20.2317 18.0191L20.2317 18.0151L17.2317 18.0194ZM17.2295 15.8262C17.2295 16.5577 17.2306 17.2892 17.2317 18.0194L20.2317 18.015C20.2306 17.2843 20.2295 16.5551 20.2295 15.8262H17.2295ZM17.2517 15.527C17.2495 15.544 17.2295 15.676 17.2295 15.8262H20.2295C20.2295 15.8745 20.2264 15.9104 20.2248 15.9262C20.224 15.9342 20.2234 15.939 20.2234 15.9386C20.2236 15.9374 20.2238 15.9352 20.2251 15.9258L17.2517 15.527ZM17.2514 15.5341C17.2524 15.5223 17.2534 15.5147 17.2535 15.5137C17.2536 15.5131 17.2535 15.5137 17.2532 15.516C17.2529 15.5186 17.2525 15.5215 17.2517 15.5271L20.2251 15.9257C20.2272 15.91 20.235 15.8542 20.2404 15.7912L17.2514 15.5341ZM18.2725 14.2366L18.1905 14.2693L19.3013 17.056L19.3834 17.0233L18.2725 14.2366ZM27.5963 58.5H16.9219V61.5H27.5963V58.5ZM27.183 58.6715C27.2904 58.5632 27.4388 58.5 27.5963 58.5V61.5C28.2427 61.5 28.8601 61.2409 29.3133 60.7838L27.183 58.6715ZM27.0182 59.0702C27.0182 58.9231 27.076 58.7794 27.183 58.6715L29.3133 60.7838C29.7661 60.3272 30.0182 59.7106 30.0182 59.0702H27.0182ZM27.0182 52.6668V59.0702H30.0182V52.6668H27.0182ZM36.791 51.1668H28.5182V54.1668H36.791V51.1668ZM36.3777 51.3383C36.4852 51.23 36.6336 51.1668 36.791 51.1668V54.1668C37.4375 54.1668 38.0549 53.9076 38.5081 53.4506L36.3777 51.3383ZM36.2129 51.737C36.2129 51.5898 36.2708 51.4462 36.3777 51.3383L38.5081 53.4506C38.9608 52.994 39.2129 52.3773 39.2129 51.737H36.2129ZM36.2129 46.6667V51.737H39.2129V46.6667H36.2129ZM46.4768 45.1667H37.7129V48.1667H46.4768V45.1667ZM46.0635 45.3382C46.171 45.2299 46.3194 45.1667 46.4768 45.1667V48.1667C47.1233 48.1667 47.7407 47.9076 48.1938 47.4505L46.0635 45.3382ZM45.8987 45.7369C45.8987 45.5898 45.9566 45.4461 46.0635 45.3382L48.1938 47.4505C48.6466 46.9939 48.8987 46.3772 48.8987 45.7369H45.8987ZM45.8987 40.9355V45.7369H48.8987V40.9355H45.8987ZM55.0781 39.4355H47.3987V42.4355H55.0781V39.4355ZM54.8541 39.4806C54.9256 39.4508 55.0027 39.4354 55.0808 39.4355L55.0754 42.4355C55.3957 42.4361 55.7127 42.3729 56.0081 42.2498L54.8541 39.4806ZM54.6653 39.6075C54.7187 39.5537 54.7827 39.5104 54.8542 39.4806L56.0081 42.2498C56.3034 42.1268 56.5709 41.9464 56.7956 41.7199L54.6653 ' 
    + '39.6075ZM54.5422 39.7932C54.5703 39.7246 54.612 39.6614 54.6653 39.6076L56.7956 41.7198C57.0202 41.4933 57.1977 41.2249 57.3183 40.9305L54.5422 39.7932ZM54.5 40.0084C54.4999 39.9348 54.5141 39.8617 54.5422 39.7932L57.3183 40.9305C57.4389 40.6361 57.5006 40.3211 57.5 40.0032L54.5 40.0084ZM54.5 37.9298V40.0058H57.5V37.9298H54.5ZM54.6648 38.3285C54.5578 38.2206 54.5 38.0769 54.5 37.9298H57.5C57.5 37.2895 57.2479 36.6728 56.7951 36.2162L54.6648 38.3285ZM55.0781 38.5C54.9206 38.5 54.7722 38.4368 54.6648 38.3285L56.7951 36.2162C56.3419 35.7591 55.7245 35.5 55.0781 35.5V38.5ZM44.4184 38.5H55.0781V35.5H44.4184V38.5ZM44.8316 38.3285C44.7242 38.4368 44.5758 38.5 44.4184 38.5V35.5C43.7719 35.5 43.1545 35.7591 42.7013 36.2162L44.8316 38.3285ZM44.9964 37.9298C44.9964 38.0769 44.9386 38.2206 44.8316 38.3285L42.7013 36.2162C42.2485 36.6728 41.9964 37.2895 41.9964 37.9298H44.9964ZM44.9964 42.7311V37.9298H41.9964V42.7311H44.9964ZM34.7326 44.2311H43.4964V41.2311H34.7326V44.2311ZM35.1458 44.0596C35.0384 44.1679 34.89 44.2311 34.7326 44.2311V41.2311C34.0861 41.2311 33.4687 41.4903 33.0155 41.9473L35.1458 44.0596ZM35.3107 43.6609C35.3107 43.8081 35.2528 43.9517 35.1458 44.0596L33.0155 41.9473C32.5628 42.4039 32.3107 43.0206 32.3107 43.6609H35.3107ZM35.3107 48.7312V43.6609H32.3107V48.7312H35.3107ZM25.5378 50.2312H33.8107V47.2312H25.5378V50.2312ZM25.9511 50.0597C25.8437 50.168 25.6953 50.2312 25.5378 50.2312V47.2312C24.8913 47.2312 24.274 47.4903 23.8208 47.9474L25.9511 50.0597ZM26.1159 49.661C26.1159 49.8081 26.0581 49.9518 25.9511 50.0597L23.8208 47.9474C23.368 48.404 23.1159 49.0207 23.1159 49.661H26.1159ZM26.1159 56.0645V49.661H23.1159V56.0645H26.1159ZM16.9219 57.5645H24.6159V54.5645H16.9219V57.5645ZM17.1456 57.5195C17.0742 57.5492 16.9972 57.5646 16.9192 57.5645L16.9246 54.5645C16.6046 54.5639 16.288 54.627 15.9929 54.7498L17.1456 57.5195ZM17.3344 57.3928C17.281 57.4465 17.217 57.4898 17.1456 57.5195L15.9929 54.7498C15.6978 54.8726 15.4305 55.0525 15.2059 55.2786L17.3344 57.3928ZM17.4575 57.2075C17.4293 57.2761 17.3876 57.3392 17.3343 57.3928L15.2059 55.2786C14.9813 55.5047 14.8038 55.7725 14.6829 56.0665L17.4575 57.2075ZM17.5 56.9926C17.5 57.0659 17.4857 57.1389 17.4575 57.2075L14.6829 56.0665C14.562 56.3605 14.5 56.6752 14.5 56.9926H17.5ZM17.5 59.0702V56.9926H14.5V59.0702H17.5ZM17.3352 58.6715C17.4422 58.7794 17.5 58.9231 17.5 59.0702H14.5C14.5 59.7105 14.7521 60.3272 15.2049 60.7838L17.3352 58.6715ZM16.9219 58.5C17.0794 58.5 17.2278 58.5632 ' 
    + '17.3352 58.6715L15.2049 60.7838C15.6581 61.2409 16.2754 61.5 16.9219 61.5V58.5Z" fill="#0077C1" mask="url(#path-1-inside-1_867_380)"/>'
    + '</svg>'
    );

    $('.navmenu #navDirectory .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="124" height="124" rx="24" fill="#A3CEE9"/>' +
    '<rect x="3" y="3" width="118" height="118" rx="22" fill="white"/>' +
    '</svg>'
    );

    $('.navmenu #navDirectory .navborder').css('box-shadow', '');

    $('.navmenu #navDirectory .navlogo').html('<svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_867_392" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.3628 37.2006C30.7321 40.1988 26.0764 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21C42 25.4845 40.5943 29.6407 38.1996 33.052L53.8075 49.035C54.5695 49.8153 54.5659 51.0621 53.7994 51.8379L52.6443 53.0072C51.8581 53.803 50.5721 53.7993 49.7905 52.999L34.3628 37.2006ZM36 21C36 29.2843 29.2843 36 21 36C12.7157 36 6 29.2843 6 21C6 12.7157 12.7157 6 21 6C29.2843 6 36 12.7157 36 21Z"/></mask>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3628 37.2006C30.7321 40.1988 26.0764 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21C42 25.4845 40.5943 29.6407 38.1996 33.052L53.8075 49.035C54.5695 49.8153 54.5659 51.0621 53.7994 51.8379L52.6443 53.0072C51.8581 53.803 50.5721 53.7993 49.7905 52.999L34.3628 37.2006ZM36 21C36 29.2843 29.2843 36 21 36C12.7157 36 6 29.2843 6 21C6 12.7157 12.7157 6 21 6C29.2843 6 36 12.7157 36 21Z" fill="#A3CEE9"/>'
    + '<path d="M34.3628 37.2006L35.436 36.1526L34.4718 35.1652L33.4077 36.044L34.3628 37.2006ZM38.1996 33.052L36.9719 32.1901L36.2565 33.2092L37.1264 34.1L38.1996 33.052ZM53.8075 49.035L52.7343 50.083L52.7343 50.083L53.8075 49.035ZM53.7994 51.8379L52.7323 50.7837L52.7323 50.7837L53.7994 51.8379ZM52.6443 53.0072L51.5771 51.9531L51.5771 51.9531L52.6443 53.0072ZM49.7905 52.999L48.7174 54.047L48.7174 54.047L49.7905 52.999ZM21 43.5C26.4377 43.5 31.4283 41.5692 35.318 38.3572L33.4077 36.044C30.0358 38.8284 25.7151 40.5 21 40.5V43.5ZM-1.5 21C-1.5 33.4264 8.57359 43.5 21 43.5V40.5C10.2304 40.5 1.5 31.7696 1.5 21H-1.5ZM21 -1.5C8.57359 -1.5 -1.5 8.57359 -1.5 21H1.5C1.5 10.2304 10.2304 1.5 21 1.5V-1.5ZM43.5 21C43.5 8.57359 33.4264 -1.5 21 -1.5V1.5C31.7696 1.5 40.5 10.2304 40.5 21H43.5ZM39.4272 33.9138C41.9935 30.2583 43.5 25.8029 43.5 21H40.5C40.5 25.1662 39.1952 29.0231 36.9719 32.1901L39.4272 33.9138ZM54.8807 47.987L39.2727 32.004L37.1264 34.1L52.7343 50.083L54.8807 47.987ZM54.8665 52.8921C56.2078 51.5344 56.2141 49.3524 54.8807 47.987L52.7343 50.083C52.9248 50.2781 52.9239 50.5898 52.7323 50.7837L54.8665 52.8921ZM53.7114 54.0614L54.8665 52.8921L52.7323 50.7837L51.5771 51.9531L53.7114 54.0614ZM48.7174 54.047C50.0851 55.4476 52.3356 55.4541 53.7114 54.0614L51.5771 51.9531C51.3806 52.152 51.0591 52.1511 50.8637 51.951L48.7174 54.047ZM33.2897 38.2486L48.7174 54.047L50.8637 51.951L35.436 36.1526L33.2897 38.2486ZM21 37.5C30.1127 37.5 37.5 30.1127 37.5 21H34.5C34.5 28.4558 28.4558 34.5 21 34.5V37.5ZM4.5 21C4.5 30.1127 11.8873 37.5 21 37.5V34.5C13.5442 34.5 7.5 28.4558 7.5 21H4.5ZM21 4.5C11.8873 4.5 4.5 11.8873 4.5 21H7.5C7.5 13.5442 13.5442 7.5 21 7.5V4.5ZM37.5 21C37.5 11.8873 30.1127 4.5 21 4.5V7.5C28.4558 7.5 34.5 13.5442 34.5 21H37.5Z" fill="#0077C1" mask="url(#path-1-inside-1_867_392)"/>'
    + '<circle opacity="0.1" cx="21" cy="21" r="15" fill="white"/></svg>'
    );

    $('.navmenu #navDining .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="124" height="124" rx="24" fill="#A3CEE9"/>' +
    '<rect x="3" y="3" width="118" height="118" rx="22" fill="white"/>' +
    '</svg>'
    );

    $('.navmenu #navDining .navborder').css('box-shadow', '');

    $('.navmenu #navDining .navlogo').html('<svg width="40" height="62" viewBox="0 0 40 62" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.4454C16 6.12432 12.6421 1 8.5 1C4.35787 1 1 6.12432 1 12.4454C1 17.3683 3.03668 21.5652 5.89435 23.181C6.33824 23.4321 6.61132 23.9372 6.59629 24.4817L5.67635 57.9553C5.67635 59.6369 6.92791 61 8.47178 61H8.52822C10.0721 61 11.3237 59.6369 11.3237 57.9553L10.4036 24.4817C10.3887 23.9372 10.6618 23.4321 11.1057 23.181C13.9633 21.5652 16 17.3683 16 12.4454" fill="#A3CEE9"/>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7288 1H37.7073C37.1156 1 36.6357 1.4413 36.6357 1.98568V14.375C36.6357 14.9067 36.1672 15.3377 35.5894 15.3377H35.5682C34.9902 15.3377 34.5217 14.9067 34.5217 14.375V1.98555C34.5217 1.4413 34.0419 1 33.4503 1H33.4286C32.837 1 32.3572 1.4413 32.3572 1.98568V14.375C32.3572 14.9067 31.8887 15.3377 31.3107 15.3377H31.2895C30.7116 15.3377 30.2432 14.9067 30.2432 14.375V1.98555C30.2432 1.4413 29.7633 1 29.1716 1H29.1501C28.5584 1 28.0787 1.4413 28.0787 1.98568V14.375C28.0787 14.9067 27.6102 15.3377 27.0322 15.3377H27.011C26.433 15.3377 25.9645 14.9067 25.9645 14.375V1.98555C25.9645 1.4413 25.4848 1 24.8931 1H24.8716C24.2799 1 23.8 1.4413 23.8 1.98568V15.3377V18.1088V18.1652C23.8 20.6387 25.5503 22.736 27.9733 23.4666C28.6187 23.6611 29.0411 24.2318 29.0208 24.8565L27.9441 57.9432C27.9441 59.6315 29.4317 61 31.2667 61H31.3337C33.1686 61 34.6561 59.6315 34.6561 57.9432L33.5796 24.8565C33.5593 24.2318 33.9817 23.6611 34.627 23.4666C37.0501 22.736 38.8 20.6387 38.8 18.1652V18.1088V15.3377V1.98555C38.8 1.4413 38.3205 1 37.7288 1" fill="#A3CEE9"/>'
    + '<path d="M16 12.4454C16 6.12432 12.6421 1 8.5 1C4.35787 1 1 6.12432 1 12.4454C1 17.3683 3.03668 21.5652 5.89435 23.181C6.33824 23.4321 6.61132 23.9372 6.59629 24.4817L5.67635 57.9553C5.67635 59.6369 6.92791 61 8.47178 61H8.52822C10.0721 61 11.3237 59.6369 11.3237 57.9553L10.4036 24.4817C10.3887 23.9372 10.6618 23.4321 11.1057 23.181C13.9633 21.5652 16 17.3683 16 12.4454" stroke="#0077C1" stroke-width="1.5"/>'
    + '<path d="M37.7288 1H37.7073C37.1156 1 36.6357 1.4413 36.6357 1.98568V14.375C36.6357 14.9067 36.1672 15.3377 35.5894 15.3377H35.5682C34.9902 15.3377 34.5217 14.9067 34.5217 14.375V1.98555C34.5217 1.4413 34.0419 1 33.4503 1H33.4286C32.837 1 32.3572 1.4413 32.3572 1.98568V14.375C32.3572 14.9067 31.8887 15.3377 31.3107 15.3377H31.2895C30.7116 15.3377 30.2432 14.9067 30.2432 14.375V1.98555C30.2432 1.4413 29.7633 1 29.1716 1H29.1501C28.5584 1 28.0787 1.4413 28.0787 1.98568V14.375C28.0787 14.9067 27.6102 15.3377 27.0322 15.3377H27.011C26.433 15.3377 25.9645 14.9067 25.9645 14.375V1.98555C25.9645 1.4413 25.4848 1 24.8931 1H24.8716C24.2799 1 23.8 1.4413 23.8 1.98568V15.3377V18.1088V18.1652C23.8 20.6387 25.5503 22.736 27.9733 23.4666C28.6187 23.6611 29.0411 24.2318 29.0208 24.8565L27.9441 57.9432C27.9441 59.6315 29.4317 61 31.2667 61H31.3337C33.1686 61 34.6561 59.6315 34.6561 57.9432L33.5796 24.8565C33.5593 24.2318 33.9817 23.6611 34.627 23.4666C37.0501 22.736 38.8 20.6387 38.8 18.1652V18.1088V15.3377V1.98555C38.8 1.4413 38.3205 1 37.7288 1" stroke="#0077C1" stroke-width="1.5"/>'
    + '</svg>'
    );

    $('.navmenu #navHappenings .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="124" height="124" rx="24" fill="#A3CEE9"/>' +
    '<rect x="3" y="3" width="118" height="118" rx="22" fill="white"/>' +
    '</svg>'
    );

    $('.navmenu #navHappenings .navborder').css('box-shadow', '');

    $('.navmenu #navHappenings .navlogo').html('<svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.41 9.66844C31.418 7.10844 33.572 5.35144 35.171 4.96744C35.378 4.91744 35.569 4.89144 35.748 4.89144C36.32 4.89144 36.767 5.15144 37.209 5.71444C38.038 6.76944 37.899 7.42944 37.654 7.93544C36.61 10.0804 31.954 12.1944 27.231 12.9184C27.796 11.9114 28.525 10.7964 29.41 9.66844M10.246 7.93544C10 7.42944 9.861 6.76944 10.69 5.71444C11.132 5.15144 11.579 4.89144 12.151 4.89144C12.33 4.89144 12.521 4.91744 12.727 4.96744C14.327 5.35044 16.481 7.10744 18.489 9.66844C19.374 10.7964 20.103 11.9114 20.668 12.9174C15.945 12.1934 11.288 10.0804 10.246 7.93544M44.395 15.3664H33.289C33.479 15.2984 33.678 15.2434 33.865 15.1714C36.443 14.1814 39.801 12.4174 41.153 9.63644C42.16 7.56444 41.846 5.31744 40.27 3.31044C38.748 1.37344 36.614 0.620441 34.263 1.18344C30.263 2.14344 26.262 6.75544 23.95 10.8264C21.637 6.75544 17.636 2.14244 13.635 1.18344C11.284 0.616441 9.15 1.37444 7.63 3.31044C6.053 5.31744 5.739 7.56444 6.746 9.63644C8.098 12.4174 11.456 14.1814 14.035 15.1714C14.213 15.2404 14.398 15.3014 14.579 15.3664H3.498C2.118 15.3664 1 16.4854 1 17.8654V27.7904H21.353V16.9244C22.238 17.0194 23.109 17.0714 23.947 17.0714V17.0374H23.952V17.0714C24.354 17.0714 24.764 17.0594 25.178 17.0374H25.181V17.0374C25.626 17.0134 26.085 16.9554 26.541 16.9074V27.7904H46.894V17.8654C46.894 16.4854 45.775 15.3664 44.395 15.3664" fill="#A3CEE9"/>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M41.706 51.2759H26.541V30.0879H44.206V48.7759C44.206 50.1569 43.086 51.2759 41.706 51.2759" fill="#A3CEE9"/>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.18774 51.2759H21.3527V30.0879H3.68774V48.7759C3.68774 50.1569 4.80674 51.2759 6.18774 51.2759" fill="#A3CEE9"/>'
    + '<path d="M35.171 4.96744L35.3461 5.69671L35.3471 5.69648L35.171 4.96744ZM37.209 5.71444L36.6191 6.17758L36.6193 6.17783L37.209 5.71444ZM37.654 7.93544L38.3284 8.26366L38.329 8.26229L37.654 7.93544ZM27.231 12.9184L26.5769 12.5515L25.8243 13.8928L27.3446 13.6598L27.231 12.9184ZM10.69 5.71444L11.2797 6.17783L11.2799 6.17758L10.69 5.71444ZM12.727 4.96744L12.5501 5.69628L12.5524 5.69684L12.727 4.96744ZM18.489 9.66844L17.8988 10.1312L17.8989 10.1314L18.489 9.66844ZM20.668 12.9174L20.5544 13.6588L22.0755 13.892L21.3219 12.5502L20.668 12.9174ZM33.289 15.3664L33.0363 14.6603L33.289 16.1164V15.3664ZM33.865 15.1714L33.5961 14.4713L33.5955 14.4715L33.865 15.1714ZM41.153 9.63644L41.8275 9.96436L41.8276 9.96428L41.153 9.63644ZM40.27 3.31044L40.8599 2.84724L40.8597 2.84706L40.27 3.31044ZM34.263 1.18344L34.0883 0.454063L34.088 0.454151L34.263 1.18344ZM23.95 10.8264L23.2979 11.1969L23.9501 12.3449L24.6022 11.1968L23.95 10.8264ZM13.635 1.18344L13.4592 1.91254L13.4602 1.91278L13.635 1.18344ZM7.63 3.31044L8.21973 3.77382L8.21991 3.77359L7.63 3.31044ZM6.746 9.63644L6.07145 9.96428L6.07149 9.96436L6.746 9.63644ZM14.035 15.1714L14.3061 14.4721L14.3038 14.4713L14.035 15.1714ZM14.579 15.3664V16.1164L14.8325 14.6606L14.579 15.3664ZM1 27.7904H0.25V28.5404H1V27.7904ZM21.353 27.7904V28.5404H22.103V27.7904H21.353ZM21.353 16.9244L21.4331 16.1787L20.603 16.0896V16.9244H21.353ZM23.947 17.0714V17.8214H24.697V17.0714H23.947ZM23.947 17.0374V16.2874H23.197V17.0374H23.947ZM23.952 17.0374H24.702V16.2874H23.952V17.0374ZM23.952 17.0714H23.202V17.8214H23.952V17.0714ZM25.178 17.0374V16.2874H25.1581L25.1382 16.2885L25.178 17.0374ZM26.541 16.9074H27.291V16.0744L26.4625 16.1616L26.541 16.9074ZM26.541 27.7904H25.791V28.5404H26.541V27.7904ZM46.894 27.7904V28.5404H47.644V27.7904H46.894ZM30.0001 10.1313C30.9771 8.88577 31.9797 7.84866 32.918 7.08305C33.8681 6.30787 34.7036 5.851 35.3461 5.69671L34.9959 4.23818C34.0394 4.46788 32.9984 5.08152 31.9697 5.92083C30.9293 6.76973 29.8509 7.89111 28.8199 9.20556L30.0001 10.1313ZM35.3471 5.69648C35.5104 5.65702 35.6412 5.64144 35.748 5.64144V4.14144C35.4968 4.14144 35.2456 4.17786 34.9949 4.23841L35.3471 5.69648ZM35.748 5.64144C36.0237 5.64144 36.2727 5.7364 36.6191 6.17758L37.7989 5.25131C37.2613 4.56648 36.6164 4.14144 35.748 4.14144V5.64144ZM36.6193 6.17783C36.9763 6.63215 37.0694 6.93112 37.0884 7.11003C37.1065 7.27995 37.0674 7.42592 36.979 7.6086L38.329 8.26229C38.4856 7.93897 38.6385 7.50193 38.5801 6.9516C38.5226 6.41027 38.2707 5.85173 37.7987 5.25105L36.6193 6.17783ZM36.9796 7.60722C36.7882 8.00054 36.3983 8.45096 35.7887 8.92515C35.1864 9.39363 34.4097 9.85433 33.5027 10.2812C31.6883 11.1352 29.4136 11.8251 27.1174 12.1771L27.3446 13.6598C29.7714 13.2878 32.1862 12.5587 34.1415 11.6384C35.1194 11.1782 35.9977 10.6629 36.7096 10.1091C37.4142 9.56105 37.9978 8.94285 38.3284 8.26366L36.9796 7.60722ZM27.8851 13.2854C28.4315 12.3115 29.1392 11.2286 30.0001 10.1314L28.8199 9.20549C27.9108 10.3643 27.1605 11.5114 26.5769 12.5515L27.8851 13.2854ZM10.9205 7.60752C10.8319 7.42516 10.7927 7.27941 10.8107 7.10977C10.8296 6.93106 10.9227 6.63219 11.2797 6.17783L10.1003 5.25105C9.6283 5.8517 9.37637 6.41033 9.31904 6.95186C9.26075 7.50247 9.41414 7.93972 9.57149 8.26337L10.9205 7.60752ZM11.2799 6.17758C11.6263 5.7364 11.8753 5.64144 12.151 5.64144V4.14144C11.2826 4.14144 10.6377 4.56648 10.1001 5.25131L11.2799 6.17758ZM12.151 5.64144C12.2579 5.64144 12.3884 5.65704 12.5501 5.69628L12.9039 4.2386C12.6536 4.17784 12.4021 4.14144 12.151 4.14144V5.64144ZM12.5524 5.69684C13.1952 5.85069 14.0308 6.30721 14.9809 7.08233C15.9193 7.84788 16.9218 8.88518 17.8988 10.1312L19.0792 9.20568C18.0482 7.8907 16.9697 6.76901 15.9291 5.92005C14.9002 5.08068 13.8588 4.46719 12.9016 4.23805L12.5524 5.69684ZM17.8989 10.1314C18.7598 11.2286 19.4675 12.3116 20.0141 13.2847L21.3219 12.5502C20.7385 11.5113 19.9882 10.3643 19.0791 9.20549L17.8989 10.1314ZM20.7816 12.1761C18.4854 11.8241 16.2104 11.1344 14.3959 10.2807C13.4889 9.85392 12.7124 9.39335 12.1104 8.92502C11.501 8.45095 11.1115 8.00074 10.9206 7.60773L9.57139 8.26316C9.90147 8.94264 10.4849 9.56093 11.1893 10.109C11.9012 10.6627 12.7794 11.1778 13.7573 11.6379C15.7126 12.558 18.1276 13.2868 20.5544 13.6588L20.7816 12.1761ZM44.395 14.6164H33.289V16.1164H44.395V14.6164ZM33.5417 16.0726C33.6226 16.0437 33.7051 16.0175 33.8084 15.9842C33.9058 15.9528 34.0197 15.9155 34.1345 15.8714L33.5955 14.4715C33.5233 14.4993 33.4442 14.5256 33.3479 14.5567C33.2574 14.5858 33.1455 14.6212 33.0363 14.6603L33.5417 16.0726ZM34.1339 15.8716C35.4555 15.364 36.9975 14.6508 38.3929 13.6941C39.7838 12.7405 41.0741 11.5142 41.8275 9.96436L40.4785 9.30852C39.8799 10.5397 38.8152 11.5859 37.5446 12.457C36.2785 13.3251 34.8525 13.9888 33.5961 14.4713L34.1339 15.8716ZM41.8276 9.96428C42.9761 7.60096 42.5892 5.04947 40.8599 2.84724L39.6801 3.77364C41.1028 5.58541 41.3439 7.52792 40.4784 9.30861L41.8276 9.96428ZM40.8597 2.84706C39.1605 0.68455 36.7301 -0.178575 34.0883 0.454063L34.4377 1.91282C36.4979 1.41946 38.3355 2.06233 39.6803 3.77382L40.8597 2.84706ZM34.088 0.454151C31.8955 0.980335 29.7773 2.48138 27.9443 4.30689C26.1002 6.1434 24.4823 8.37052 23.2978 10.4561L24.6022 11.1968C25.7297 9.21136 27.2683 7.09698 29.0027 5.36974C30.7482 3.6315 32.6305 2.34655 34.438 1.91273L34.088 0.454151ZM24.6021 10.4559C23.4172 8.37048 21.7991 6.14314 19.9547 4.3065C18.1214 2.48086 16.0029 0.979755 13.8098 0.454099L13.4602 1.91278C15.2681 2.34613 17.1506 3.63102 18.8963 5.36938C20.6309 7.09675 22.1698 9.2114 23.2979 11.1969L24.6021 10.4559ZM13.8108 0.454345C11.1672 -0.18323 8.73662 0.686451 7.04009 2.84729L8.21991 3.77359C9.56338 2.06243 11.4008 1.41611 13.4592 1.91254L13.8108 0.454345ZM7.04027 2.84706C5.30983 5.04935 4.92285 7.60092 6.07145 9.96428L7.42055 9.30861C6.55515 7.52796 6.79617 5.58554 8.21973 3.77382L7.04027 2.84706ZM6.07149 9.96436C6.82494 11.5142 8.11517 12.7405 9.5063 13.6942C10.9018 14.6509 12.444 15.3641 13.7662 15.8716L14.3038 14.4713C13.047 13.9888 11.6207 13.325 10.3545 12.457C9.08383 11.5859 8.01906 10.5397 7.42051 9.30852L6.07149 9.96436ZM13.7639 15.8707C13.9517 15.9435 14.1715 16.017 14.3255 16.0723L14.8325 14.6606C14.6245 14.5859 14.4743 14.5373 14.3061 14.4721L13.7639 15.8707ZM14.579 14.6164H3.498V16.1164H14.579V14.6164ZM3.498 14.6164C1.7034 14.6164 0.25 16.0716 0.25 17.8654H1.75C1.75 16.8993 2.5326 16.1164 3.498 16.1164V14.6164ZM0.25 17.8654V27.7904H1.75V17.8654H0.25ZM1 28.5404H21.353V27.0404H1V28.5404ZM22.103 27.7904V16.9244H20.603V27.7904H22.103ZM21.273 17.6702C22.1805 17.7676 23.0785 17.8214 23.947 17.8214V16.3214C23.1395 16.3214 22.2955 16.2713 21.4331 16.1787L21.273 17.6702ZM24.697 17.0714V17.0374H23.197V17.0714H24.697ZM23.947 17.7874H23.952V16.2874H23.947V17.7874ZM23.202 17.0374V17.0714H24.702V17.0374H23.202ZM23.952 17.8214C24.3688 17.8214 24.7922 17.809 25.2178 17.7864L25.1382 16.2885C24.7358 16.3099 24.3392 16.3214 23.952 16.3214V17.8214ZM25.178 17.7874H25.181V16.2874H25.178V17.7874ZM25.2214 17.7864C25.6918 17.761 26.1852 17.699 26.6195 17.6533L26.4625 16.1616C25.9848 16.2118 25.5602 16.2659 25.1406 16.2885L25.2214 17.7864ZM25.791 16.9074V27.7904H27.291V16.9074H25.791ZM26.541 28.5404H46.894V27.0404H26.541V28.5404ZM47.644 27.7904V17.8654H46.144V27.7904H47.644ZM47.644 17.8654C47.644 16.0712 46.1892 14.6164 44.395 14.6164V16.1164C45.3608 16.1164 46.144 16.8997 46.144 17.8654H47.644Z" fill="#0077C1"/>'
    + '<path d="M41.706 51.2759H26.541V30.0879H44.206V48.7759C44.206 50.1569 43.086 51.2759 41.706 51.2759" stroke="#0077C1" stroke-width="1.5"/>'
    + '<path d="M6.1875 51.2759H21.3525V30.0879H3.6875V48.7759C3.6875 50.1569 4.8065 51.2759 6.1875 51.2759" stroke="#0077C1" stroke-width="1.5"/>'
    + '</svg>'
    );

    $('.navmenu #navTransport .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="124" height="124" rx="24" fill="#A3CEE9"/>' +
    '<rect x="3" y="3" width="118" height="118" rx="22" fill="white"/>' +
    '</svg>'
    );

    $('.navmenu #navTransport .navborder').css('box-shadow', '');

    $('.navmenu #navTransport .navlogo').html('<svg width="48" height="53"  viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6878 35.5665C10.9072 35.5525 9.42989 37.0323 9.42488 38.8365C9.41861 40.651 10.8684 42.1333 12.6564 42.1409C14.442 42.1486 15.9093 40.6777 15.9206 38.8683C15.9331 37.0628 14.4821 35.5805 12.6878 35.5665V35.5665ZM35.157 42.1448C36.9463 42.141 38.3923 40.6688 38.3936 38.8505C38.3961 37.0399 36.9401 35.5639 35.1533 35.5626C33.3702 35.5614 31.9079 37.0183 31.8766 38.8276C31.8453 40.6192 33.3589 42.1499 35.157 42.1448V42.1448ZM8.35479 27.6089H39.2331V11.2382H8.35479V27.6089ZM45.299 30.655C45.2689 35.2662 45.2213 39.8773 45.18 44.4885C45.1699 45.5841 44.6775 46.1223 43.5899 46.1846C43.0548 46.2152 42.5185 46.1897 41.9221 46.1897C41.9221 47.2038 41.9234 48.1658 41.9221 49.129C41.9209 50.6508 41.1828 51.5593 39.708 51.8964C38.8935 52.0822 38.1142 52.0059 37.3548 51.6674C36.3236 51.2106 35.7936 50.4128 35.7898 49.2664C35.7885 48.2637 35.7898 47.2611 35.7898 46.2203H13.1226C13.1226 47.1873 13.1238 48.1492 13.1226 49.1112C13.1213 50.6075 12.4046 51.5236 10.9736 51.8812C10.1241 52.0937 9.30208 52.0237 8.51268 51.6509C7.5278 51.1839 6.97271 50.4357 7.00278 49.2829C7.02659 48.279 7.00779 47.2738 7.00779 46.1808C6.36374 46.1808 5.74975 46.1299 5.1458 46.1923C3.80506 46.3284 3.09209 45.5026 3.02693 44.2086C2.86404 40.9487 2.66982 37.6901 2.61468 34.4277C2.55579 30.9387 2.63724 27.446 2.67358 23.9545C2.67859 23.5868 2.58712 23.3807 2.25757 23.1974C1.45939 22.7521 1.03838 22.0179 1.02209 21.1043C0.992015 19.4159 0.994521 17.7261 1.01833 16.0376C1.03587 14.8174 1.6912 13.9267 2.8277 13.5845C3.18732 13.475 3.27252 13.288 3.32014 12.9584C3.58578 11.1211 3.81508 9.27484 4.16969 7.45531C4.4015 6.27325 4.69721 5.04283 5.74224 4.27558C6.38504 3.80352 7.08047 3.36326 7.81599 3.07316C10.4824 2.01961 13.2892 1.60226 16.1236 1.33124C20.469 0.915166 24.8183 0.899897 29.1676 1.23581C32.7124 1.51065 36.2284 1.99416 39.6015 3.19658C40.9234 3.66737 42.3256 4.22977 42.9233 5.61796C43.4997 6.9578 43.833 8.41597 44.1638 9.84869C44.4043 10.8959 44.4795 11.9838 44.6061 13.0577C44.6399 13.3452 44.7276 13.4649 45.0258 13.5361C46.1962 13.8199 46.953 14.7525 46.9743 15.9931C47.0069 17.7007 47.0106 19.4095 46.9731 21.1171C46.948 22.2915 46.2425 23.018 45.3028 23.4456C45.3028 25.9128 45.3165 28.2832 45.299 30.655Z" fill="#A3CEE9"'
    + '/><path d="M9.42488 38.8365L10.1749 38.8391L10.1749 38.8386L9.42488 38.8365ZM12.6564 42.1409L12.6596 41.391L12.6596 41.391L12.6564 42.1409ZM15.9206 38.8683L15.1706 38.8631L15.1706 38.8637L15.9206 38.8683ZM38.3936 38.8505L37.6436 38.8495L37.6436 38.85L38.3936 38.8505ZM35.1533 35.5626L35.1527 36.3126L35.1527 36.3126L35.1533 35.5626ZM31.8766 38.8276L32.6265 38.8407L32.6265 38.8406L31.8766 38.8276ZM8.35479 27.6089H7.60479V28.3589H8.35479V27.6089ZM39.2331 27.6089V28.3589H39.9831V27.6089H39.2331ZM39.2331 11.2382H39.9831V10.4882H39.2331V11.2382ZM8.35479 11.2382V10.4882H7.60479V11.2382H8.35479ZM45.299 30.655L44.549 30.6494L44.549 30.6501L45.299 30.655ZM45.18 44.4885L45.9299 44.4954L45.9299 44.4953L45.18 44.4885ZM43.5899 46.1846L43.6326 46.9334L43.6328 46.9334L43.5899 46.1846ZM41.9221 46.1897V45.4397H41.1721V46.1897H41.9221ZM41.9221 49.129L41.1721 49.128L41.1721 49.1284L41.9221 49.129ZM39.708 51.8964L39.8748 52.6277L39.8752 52.6276L39.708 51.8964ZM37.3548 51.6674L37.6602 50.9824L37.6586 50.9817L37.3548 51.6674ZM35.7898 49.2664L35.0398 49.2673L35.0398 49.2689L35.7898 49.2664ZM35.7898 46.2203H36.5398V45.4703H35.7898V46.2203ZM13.1226 46.2203V45.4703H12.3726V46.2203H13.1226ZM13.1226 49.1112L12.3726 49.1102L12.3726 49.1105L13.1226 49.1112ZM10.9736 51.8812L10.7918 51.1535L10.7916 51.1536L10.9736 51.8812ZM8.51268 51.6509L8.19136 52.3286L8.19239 52.329L8.51268 51.6509ZM7.00278 49.2829L7.75253 49.3025L7.75257 49.3007L7.00278 49.2829ZM7.00779 46.1808H7.75779V45.4308H7.00779V46.1808ZM5.1458 46.1923L5.22157 46.9384L5.22281 46.9383L5.1458 46.1923ZM3.02693 44.2086L2.27786 44.246L2.27788 44.2463L3.02693 44.2086ZM2.61468 34.4277L1.86479 34.4403L1.86479 34.4403L2.61468 34.4277ZM2.67358 23.9545L1.92364 23.9443L1.92362 23.9467L2.67358 23.9545ZM2.25757 23.1974L1.89214 23.8524L1.89312 23.8529L2.25757 23.1974ZM1.02209 21.1043L0.272206 21.1177L0.272207 21.1177L1.02209 21.1043ZM1.01833 16.0376L0.268406 16.0269L0.268403 16.0271L1.01833 16.0376ZM2.8277 13.5845L3.04398 14.3026L3.04603 14.302L2.8277 13.5845ZM3.32014 12.9584L2.57785 12.8511L2.57784 12.8512L3.32014 12.9584ZM4.16969 7.45531L3.43371 7.31097L3.43354 7.31184L4.16969 7.45531ZM5.74224 4.27558L6.1861 4.88013L6.18617 4.88008L5.74224 4.27558ZM7.81599 3.07316L8.09118 3.77085L8.0916 3.77068L7.81599 3.07316ZM16.1236 1.33124L16.1949 2.07784L16.195 2.07783L16.1236 1.33124ZM29.1676 1.23581L29.2255 0.488055L29.2253 0.488038L29.1676 1.23581ZM39.6015 3.19658L39.3497 '
    + '3.90304L39.3499 3.90311L39.6015 3.19658ZM42.9233 5.61796L43.6122 5.32157L43.6121 5.32136L42.9233 5.61796ZM44.1638 9.84869L44.8947 9.68076L44.8945 9.67996L44.1638 9.84869ZM44.6061 13.0577L45.3509 12.9701L45.3509 12.9699L44.6061 13.0577ZM45.0258 13.5361L45.2026 12.8072L45.2001 12.8066L45.0258 13.5361ZM46.9743 15.9931L46.2244 16.006L46.2244 16.0074L46.9743 15.9931ZM46.9731 21.1171L46.2232 21.1006L46.2232 21.1011L46.9731 21.1171ZM45.3028 23.4456L44.9922 22.7629L44.5528 22.9628V23.4456H45.3028ZM12.6937 34.8165C10.4885 34.7991 8.68102 36.6235 8.67488 38.8344L10.1749 38.8386C10.1788 37.441 11.326 36.3058 12.6819 36.3164L12.6937 34.8165ZM8.67488 38.8339C8.66722 41.052 10.4409 42.8815 12.6532 42.8909L12.6596 41.391C11.2958 41.3851 10.17 40.2499 10.1749 38.8391L8.67488 38.8339ZM12.6532 42.8909C14.8616 42.9004 16.6568 41.0867 16.6705 38.873L15.1706 38.8637C15.1618 40.2686 14.0224 41.3968 12.6596 41.391L12.6532 42.8909ZM16.6705 38.8735C16.6859 36.6586 14.9065 34.8337 12.6936 34.8165L12.6819 36.3164C14.0577 36.3272 15.1803 37.467 15.1706 38.8631L16.6705 38.8735ZM35.1586 42.8948C37.3728 42.89 39.1421 41.0711 39.1436 38.851L37.6436 38.85C37.6426 40.2664 36.5199 41.3919 35.1554 41.3948L35.1586 42.8948ZM39.1436 38.8516C39.1466 36.6352 37.3636 34.8142 35.1538 34.8126L35.1527 36.3126C36.5165 36.3136 37.6455 37.4446 37.6436 38.8495L39.1436 38.8516ZM35.1538 34.8126C32.9513 34.8111 31.1649 36.6061 31.1267 38.8146L32.6265 38.8406C32.6509 37.4304 33.7891 36.3117 35.1527 36.3126L35.1538 34.8126ZM31.1267 38.8145C31.088 41.0287 32.9434 42.901 35.1591 42.8948L35.1549 41.3948C33.7745 41.3987 32.6025 40.2097 32.6265 38.8407L31.1267 38.8145ZM8.35479 28.3589H39.2331V26.8589H8.35479V28.3589ZM39.9831 27.6089V11.2382H38.4831V27.6089H39.9831ZM39.2331 10.4882H8.35479V11.9882H39.2331V10.4882ZM7.60479 11.2382V27.6089H9.10479V11.2382H7.60479ZM44.549 30.6501C44.519 35.2601 44.4714 39.8693 44.43 44.4818L45.9299 44.4953C45.9713 39.8854 46.0189 35.2723 46.049 30.6599L44.549 30.6501ZM44.43 44.4817C44.4259 44.9305 44.3233 45.1238 44.2404 45.2127C44.1605 45.2984 43.9836 45.4108 43.547 45.4359L43.6328 46.9334C44.2838 46.8961 44.8969 46.7083 45.3377 46.2354C45.7754 45.7657 45.924 45.1421 45.9299 44.4954L44.43 44.4817ZM43.5471 45.4359C43.0391 45.4649 42.567 45.4397 41.9221 45.4397V46.9397C42.4701 46.9397 43.0706 46.9655 43.6326 46.9334L43.5471 45.4359ZM41.1721 46.1897C41.1721 47.2052 41.1734 48.1654 41.1721 49.128L42.6721 49.13C42.6734 '
    + '48.1662 42.6721 47.2025 42.6721 46.1897H41.1721ZM41.1721 49.1284C41.1716 49.7682 41.0177 50.1949 40.7829 50.4873C40.5475 50.7804 40.163 51.0231 39.5408 51.1653L39.8752 52.6276C40.7279 52.4326 41.4497 52.0525 41.9524 51.4266C42.4556 50.8 42.6714 50.0115 42.6721 49.1296L41.1721 49.1284ZM39.5412 51.1652C38.8846 51.315 38.2709 51.2546 37.6602 50.9824L37.0495 52.3524C37.9574 52.7571 38.9025 52.8494 39.8748 52.6277L39.5412 51.1652ZM37.6586 50.9817C37.2495 50.8005 36.9831 50.5721 36.8144 50.3146C36.6459 50.0572 36.5413 49.7194 36.5398 49.2639L35.0398 49.2689C35.0421 49.9598 35.2044 50.5941 35.5596 51.1364C35.9147 51.6786 36.4289 52.0776 37.0511 52.3531L37.6586 50.9817ZM36.5398 49.2655C36.5385 48.2634 36.5398 47.2624 36.5398 46.2203H35.0398C35.0398 47.2598 35.0385 48.2641 35.0398 49.2673L36.5398 49.2655ZM35.7898 45.4703H13.1226V46.9703H35.7898V45.4703ZM12.3726 46.2203C12.3726 47.1887 12.3738 48.1488 12.3726 49.1102L13.8726 49.1121C13.8738 48.1496 13.8726 47.1859 13.8726 46.2203H12.3726ZM12.3726 49.1105C12.372 49.7392 12.2226 50.1664 11.9921 50.4629C11.762 50.7588 11.3892 51.0043 10.7918 51.1535L11.1554 52.6088C11.989 52.4005 12.69 52.0091 13.1763 51.3835C13.6623 50.7585 13.8718 49.9795 13.8726 49.1118L12.3726 49.1105ZM10.7916 51.1536C10.1031 51.3258 9.45916 51.2684 8.83296 50.9727L8.19239 52.329C9.145 52.7789 10.1451 52.8615 11.1556 52.6088L10.7916 51.1536ZM8.83399 50.9732C8.43134 50.7823 8.16682 50.558 8.00231 50.3098C7.84137 50.0669 7.74089 49.7484 7.75252 49.3025L6.25304 49.2634C6.23459 49.9703 6.39663 50.6022 6.75194 51.1384C7.10367 51.6692 7.60913 52.0525 8.19136 52.3286L8.83399 50.9732ZM7.75257 49.3007C7.77665 48.2854 7.75779 47.2548 7.75779 46.1808H6.25779C6.25779 47.2929 6.27653 48.2726 6.25299 49.2652L7.75257 49.3007ZM7.00779 45.4308C6.44953 45.4308 5.72149 45.3789 5.06878 45.4462L5.22281 46.9383C5.77802 46.881 6.27794 46.9308 7.00779 46.9308V45.4308ZM5.07003 45.4461C4.57331 45.4965 4.29873 45.3655 4.13624 45.2043C3.95669 45.0262 3.80261 44.6997 3.77598 44.1709L2.27788 44.2463C2.31641 45.0115 2.55139 45.7449 3.0798 46.2692C3.62526 46.8103 4.37754 47.0241 5.22157 46.9384L5.07003 45.4461ZM3.77599 44.1712C3.6126 40.9013 3.41944 37.6613 3.36458 34.415L1.86479 34.4403C1.9202 37.7189 2.11547 40.9961 2.27786 44.246L3.77599 44.1712ZM3.36458 34.415C3.30591 30.9397 3.38706 27.4667 3.42353 23.9623L1.92362 23.9467C1.88741 27.4253 1.80567 30.9378 1.86479 34.4403L3.36458 34.415ZM3.42351 23.9647C3.42675 23.7264 '
    + '3.4023 23.4376 3.25457 23.1572C3.10134 22.8664 2.8656 22.6774 2.62202 22.542L1.89312 23.8529C1.91484 23.865 1.92969 23.8746 1.93934 23.8813C1.94888 23.888 1.9526 23.8915 1.95243 23.8914C1.95007 23.8892 1.93835 23.877 1.92749 23.8564C1.91721 23.8369 1.91656 23.8265 1.91841 23.837C1.92075 23.8503 1.92449 23.8823 1.92365 23.9443L3.42351 23.9647ZM2.623 22.5425C2.06793 22.2328 1.7837 21.749 1.77197 21.091L0.272207 21.1177C0.293053 22.2869 0.85086 23.2714 1.89214 23.8524L2.623 22.5425ZM1.77197 21.091C1.74207 19.4121 1.74453 17.7305 1.76825 16.0482L0.268403 16.0271C0.244508 17.7218 0.241963 19.4197 0.272206 21.1177L1.77197 21.091ZM1.76825 16.0484C1.7751 15.5721 1.90449 15.2017 2.10713 14.9268C2.30881 14.6532 2.61372 14.4322 3.04398 14.3026L2.61142 12.8663C1.90518 13.079 1.31418 13.4745 0.899683 14.0368C0.486144 14.5979 0.2791 15.283 0.268406 16.0269L1.76825 16.0484ZM3.04603 14.302C3.32627 14.2167 3.60386 14.0677 3.80232 13.7884C3.98341 13.5335 4.03537 13.253 4.06243 13.0657L2.57784 12.8512C2.57337 12.8821 2.56925 12.9058 2.56546 12.9243C2.56168 12.9426 2.55874 12.9532 2.55722 12.9581C2.55441 12.9672 2.55906 12.9484 2.57951 12.9196C2.58956 12.9055 2.60127 12.892 2.61395 12.88C2.62649 12.8681 2.63738 12.8602 2.64448 12.8557C2.65754 12.8473 2.6519 12.854 2.60937 12.8669L3.04603 14.302ZM4.06242 13.0658C4.33095 11.2084 4.55589 9.3944 4.90584 7.59877L3.43354 7.31184C3.07427 9.15528 2.8406 11.0338 2.57785 12.8511L4.06242 13.0658ZM4.90567 7.59964C5.14235 6.39272 5.40464 5.45388 6.1861 4.88013L5.29837 3.67102C3.98978 4.63179 3.66064 6.15377 3.43371 7.31097L4.90567 7.59964ZM6.18617 4.88008C6.80501 4.42561 7.44116 4.02723 8.09118 3.77085L7.54081 2.37547C6.71977 2.6993 5.96506 3.18142 5.2983 3.67107L6.18617 4.88008ZM8.0916 3.77068C10.6578 2.75675 13.3796 2.34704 16.1949 2.07784L16.0522 0.584646C13.1988 0.857488 10.3071 1.28247 7.54039 2.37563L8.0916 3.77068ZM16.195 2.07783C20.4948 1.66613 24.8007 1.65077 29.1098 1.98358L29.2253 0.488038C24.8359 0.149022 20.4433 0.164201 16.0521 0.584655L16.195 2.07783ZM29.1096 1.98357C32.6299 2.25651 36.0689 2.73356 39.3497 3.90304L39.8533 2.49012C36.3878 1.25477 32.7948 0.764793 29.2255 0.488055L29.1096 1.98357ZM39.3499 3.90311C40.7117 4.3881 41.7828 4.8656 42.2344 5.91455L43.6121 5.32136C42.8684 3.59394 41.1352 2.94664 39.8531 2.49005L39.3499 3.90311ZM42.2343 5.91434C42.7793 7.1811 43.099 8.57089 43.433 10.0174L44.8945 9.67996C44.5669 8.26104 44.2201 6.7345 43.6122 5.32157L42.2343 '
    + '5.91434ZM43.4328 10.0166C43.6612 11.0109 43.7289 12.0226 43.8612 13.1455L45.3509 12.9699C45.2301 11.9449 45.1475 10.7808 44.8947 9.68076L43.4328 10.0166ZM43.8612 13.1453C43.8831 13.3316 43.9353 13.6162 44.145 13.8633C44.3599 14.1166 44.6406 14.2152 44.8516 14.2656L45.2001 12.8066C45.1129 12.7858 45.2006 12.7889 45.2887 12.8928C45.3303 12.9418 45.3489 12.9867 45.3553 13.0059C45.3601 13.0203 45.3562 13.0145 45.3509 12.9701L43.8612 13.1453ZM44.8491 14.265C45.6859 14.4679 46.2089 15.1048 46.2244 16.006L47.7242 15.9802C47.6971 14.4002 46.7064 13.1718 45.2026 12.8072L44.8491 14.265ZM46.2244 16.0074C46.2569 17.7066 46.2606 19.405 46.2232 21.1006L47.7229 21.1336C47.7607 19.414 47.7569 17.6947 47.7242 15.9788L46.2244 16.0074ZM46.2232 21.1011C46.2062 21.9006 45.759 22.414 44.9922 22.7629L45.6133 24.1282C46.726 23.622 47.6898 22.6824 47.7229 21.1331L46.2232 21.1011ZM44.5528 23.4456C44.5528 25.9187 44.5665 28.2812 44.549 30.6494L46.049 30.6605C46.0666 28.2852 46.0528 25.9068 46.0528 23.4456H44.5528Z"'
    + 'fill="#0077C1"/></svg>');

    $('.navmenu #navShopping .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect width="124" height="124" rx="24" fill="#A3CEE9"/>' +
    '<rect x="3" y="3" width="118" height="118" rx="22" fill="white"/>' +
    '</svg>'
    );

    $('.navmenu #navShopping .navborder').css('box-shadow', '');

    $('.navmenu #navShopping .navlogo').html('<svg width="45" height="57" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<path d="M6.17536 56H38.8172C38.8627 55.9719 38.9111 55.9488 38.9616 55.9311C42.3666 55.178 44.1579 52.897 43.9891 49.4238C43.7581 44.7599 43.4795 40.0989 43.2183 35.4364C42.9094 29.9343 42.599 24.435 42.2872 18.9385C42.205 17.4394 41.4789 16.7192 39.9777 16.7178C37.6548 16.7178 35.3318 16.7178 33.0088 16.7178H32.391C32.391 16.4122 32.391 16.1827 32.391 15.9517C32.3766 13.9849 32.4445 12.0123 32.3319 10.0498C32.0071 4.34148 26.3705 0.0606361 20.7295 1.17819C15.9301 2.12933 12.6896 6.00132 12.6376 10.866C12.6189 12.6005 12.6376 14.3363 12.6376 16.0722V16.7077H12.0054C9.62806 16.7077 7.25072 16.7006 4.87482 16.7077C3.62914 16.7077 2.80638 17.4638 2.7371 18.6617C2.4715 23.305 2.21216 27.9493 1.95908 32.5945C1.76133 36.1136 1.55348 39.6312 1.35573 43.1503C1.22726 45.4184 1.05549 47.6865 1.00208 49.9575C0.945788 52.326 2.02981 54.1278 4.11125 55.2727C4.7377 55.6256 5.48251 55.7647 6.17536 56ZM16.5955 16.6833C16.5955 14.5429 16.5753 12.4714 16.61 10.3998C16.634 9.88177 16.7392 9.37064 16.9217 8.88486C17.3783 7.57982 18.2826 6.47618 19.476 5.76746C20.6693 5.05875 22.0757 4.7902 23.4483 5.00891C24.821 5.22761 26.0724 5.91962 26.9831 6.96357C27.8937 8.00752 28.4056 9.33679 28.4288 10.7183C28.4606 12.3451 28.4375 13.9734 28.4375 15.5959V16.679L16.5955 16.6833Z" fill="#A3CEE9" stroke="#0077C1" stroke-width="1.5"/>'
    + '</svg>'
    );

    $('.navmenu .followtab .navright .info').html('<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<rect x="1" y="1" width="64" height="64" rx="32" fill="white" stroke="#A3CEE9" stroke-width="2"/>'
    + '<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M36.5556 43.4423C36.4516 43.9371 36.3618 44.3818 36.2623 44.823C36.2474 44.8889 36.1972 44.9724 36.1471 44.9944C35.1042 45.4373 34.1061 46.0437 32.9943 46.2318C31.9469 46.4093 30.901 46.3996 29.9306 45.831C28.9183 45.2378 28.3452 44.2711 28.3071 42.9141C28.2719 41.6407 28.5487 40.4288 28.8338 39.2169C29.2468 37.4601 29.6672 35.7059 30.0436 33.9377C30.1521 33.4262 30.164 32.8708 30.1431 32.3391C30.1057 31.4312 29.7376 31.0489 28.9595 30.9988C28.4021 30.9628 27.8582 31.0357 27.3315 31.2607C27.1646 31.3319 26.9941 31.3934 26.7778 31.4769C26.8833 30.9663 26.9783 30.4891 27.0838 30.0154C27.0951 29.9635 27.1579 29.9073 27.2073 29.8888C28.2525 29.4855 29.2872 29.0293 30.3503 28.7068C31.1681 28.4598 32.0165 28.531 32.8425 28.8079C34.2572 29.2824 35.066 30.7026 34.971 32.4507C34.9037 33.7065 34.6396 34.9053 34.3463 36.1022C34.0156 37.453 33.6699 38.7985 33.3871 40.1634C33.2338 40.9025 33.1425 41.6732 33.1238 42.4343C33.0998 43.3571 33.4687 43.7508 34.2505 43.8782C34.8199 43.9705 35.3668 43.8817 35.9084 43.6893C36.1105 43.6181 36.3102 43.5364 36.5556 43.4423" fill="#A3CEE9"/>'
    + '<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M34.9922 25.4447C33.7035 25.4366 32.4937 24.5177 32.2015 23.3234C31.7924 21.6546 32.8117 20.0118 34.4488 19.7226C35.5804 19.5219 36.5518 19.8599 37.2918 20.8129C38.2747 22.0795 38.0128 23.9108 36.7362 24.8606C36.2133 25.2497 35.6198 25.448 34.9922 25.4447" fill="#A3CEE9"/>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M36.5556 43.4423C36.4516 43.9371 36.3618 44.3818 36.2623 44.823C36.2474 44.8889 36.1972 44.9724 36.1471 44.9944C35.1042 45.4373 34.1061 46.0437 32.9943 46.2318C31.9469 46.4093 30.901 46.3996 29.9306 45.831C28.9183 45.2378 28.3452 44.2711 28.3071 42.9141C28.2719 41.6407 28.5487 40.4288 28.8338 39.2169C29.2468 37.4601 29.6672 35.7059 30.0436 33.9377C30.1521 33.4262 30.164 32.8708 30.1431 32.3391C30.1057 31.4312 29.7376 31.0489 28.9595 30.9988C28.4021 30.9628 27.8582 31.0357 27.3315 31.2607C27.1646 31.3319 26.9941 31.3934 26.7778 31.4769C26.8833 30.9663 26.9783 30.4891 27.0838 30.0154C27.0951 29.9635 27.1579 29.9073 27.2073 29.8888C28.2525 29.4855 29.2872 29.0293 30.3503 28.7068C31.1681 28.4598 32.0165 28.531 32.8425 28.8079C34.2572 29.2824 35.066 30.7026 34.971 32.4507C34.9037 33.7065 34.6396 34.9053 34.3463 36.1022C34.0156 37.453 33.6699 38.7985 33.3871 40.1634C33.2338 40.9025 33.1425 41.6732 33.1238 42.4343C33.0998 43.3571 33.4687 43.7508 34.2505 43.8782C34.8199 43.9705 35.3668 43.8817 35.9084 43.6893C36.1105 43.6181 36.3102 43.5364 36.5556 43.4423" fill="#A3CEE9"/>'
    + '<path d="M36.5556 43.4423C36.4516 43.9371 36.3618 44.3818 36.2623 44.823C36.2474 44.8889 36.1972 44.9724 36.1471 44.9944C35.1042 45.4373 34.1061 46.0437 32.9943 46.2318C31.9469 46.4093 30.901 46.3996 29.9306 45.831C28.9183 45.2378 28.3452 44.2711 28.3071 42.9141C28.2719 41.6407 28.5487 40.4288 28.8338 39.2169C29.2468 37.4601 29.6672 35.7059 30.0436 33.9377C30.1521 33.4262 30.164 32.8708 30.1431 32.3391C30.1057 31.4312 29.7376 31.0489 28.9595 30.9988C28.4021 30.9628 27.8582 31.0357 27.3315 31.2607C27.1646 31.3319 26.9941 31.3934 26.7778 31.4769C26.8833 30.9663 26.9783 30.4891 27.0838 30.0154C27.0951 29.9635 27.1579 29.9073 27.2073 29.8888C28.2525 29.4855 29.2872 29.0293 30.3503 28.7068C31.1681 28.4598 32.0165 28.531 32.8425 28.8079C34.2572 29.2824 35.066 30.7026 34.971 32.4507C34.9037 33.7065 34.6396 34.9053 34.3463 36.1022C34.0156 37.453 33.6699 38.7985 33.3871 40.1634C33.2338 40.9025 33.1425 41.6732 33.1238 42.4343C33.0998 43.3571 33.4687 43.7508 34.2505 43.8782C34.8199 43.9705 35.3668 43.8817 35.9084 43.6893C36.1105 43.6181 36.3102 43.5364 36.5556 43.4423" stroke="#0077C1"/>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.9922 25.4447C33.7035 25.4366 32.4937 24.5177 32.2015 23.3234C31.7924 21.6546 32.8117 20.0118 34.4488 19.7226C35.5804 19.5219 36.5518 19.8599 37.2918 20.8129C38.2747 22.0795 38.0128 23.9108 36.7362 24.8606C36.2133 25.2497 35.6198 25.448 34.9922 25.4447" fill="#A3CEE9"/>'
    + '<path d="M34.9922 25.4447C33.7035 25.4366 32.4937 24.5177 32.2015 23.3234C31.7924 21.6546 32.8117 20.0118 34.4488 19.7226C35.5804 19.5219 36.5518 19.8599 37.2918 20.8129C38.2747 22.0795 38.0128 23.9108 36.7362 24.8606C36.2133 25.2497 35.6198 25.448 34.9922 25.4447" stroke="#0077C1"/></svg>');

}

function onclickNavBtn(id)
{
    $('.content .skPage').hide();

    $('.content #'+id).fadeIn('fast');

    $('.navmenu').css('box-shadow', '0px -4px 16px rgb(209 184 179 / 20%)');
    
    resetNavBtnDefaultSvg();
    hideWayfindingResult();

    $('.navmenu .navgroup .navbox > .navbtn').css('pointer-events', 'visible');

    isatFloorGuide = false;
    
    switch(id)
    {
        case "skScreenSaver" : {

            SwiperHome.autoplay.stop();

            $('.navmenu').hide();
            $('#skHome').hide();
            $('.skModal').hide();

            screenOut = false;
            // screensavertimeout = setTimeout(autoplay, contentArray[0].contentDuration * 1000);
            // SwiperScreenSaver.init();
            // SwiperScreenSaver.init();
            // SwiperScreenSaver.update();

            // if (SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].tagName == "VIDEO") {
            //         SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].play();
            //     if (pauseonVideoTimeleft === undefined) {
            //         SwiperScreenSaver.autoplay.timeLeft = SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].dataset.swiperAutoplay;
            //         SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].play();
            //         SwiperScreenSaver.autoplay.resume();
            //     } else {
            //         SwiperScreenSaver.autoplay.stop();
            //         SwiperScreenSaver.autoplay.delay = pauseonVideoTimeleft;
            //         SwiperScreenSaver.slides[SwiperScreenSaver.activeIndex].children[0].children[0].play();
            //         SwiperScreenSaver.autoplay.start();
            //         //SwiperScreenSaver.autoplay.start();
            //     }
            // }
            // else {
            //     SwiperScreenSaver.autoplay.start();
            // }

            break;
        }
        case "skHome": {

            // SwiperScreenSaver.autoplay.pause();
            $('.content .skModal').hide();
            $('#skWayfindresult').hide();
            SwiperHome.autoplay.start();
 
            $('.navmenu .navgroup .navbox #navHome ').css('pointer-events', 'none');

            $(document.body).css({'background':'url("../src/asset/homebackground.png") no-repeat 0 0', 'box-shadow' : 'inset 0 0 0 2000px rgba(0, 0, 0, 0.2'});

            $('.header, .content, .navmenu').css('background', 'transparent');

            $('.header').css('height', '14.375%');

            $('.content').css('height', '67.75%');

            $('.header .hleft .logoholder').css({'width': '462px', 'height': '276px', 'padding' : '34px 40px 24px 90px'})

            $('.header .hleft .logoholder img').attr('src', './asset/sengkanggrandlogo.png');

            $('.header .hleft .logoholder img').css({'width': 'auto', 'height': 'auto'});

            $('.header .hright .optimebox').css({'position': 'absolute', 'top': '298px', 'right': '51px'});

            $('.detailbox p, .navmenu p').css('color', 'white');

            $('.navmenu').css('box-shadow', 'none');

            $('.navmenu .followtab .navleft svg path, .header .hright .optimebox .logoholder svg path').attr('fill', 'white');

            $('.navmenu .followtab .navright .info svg').css({'box-shadow': '0px 6px 10px rgba(0, 119, 193, 0.24)', 'border-radius': '50%'})

            $('.navmenu #navHome .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="white"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="#0077C1"/>' +
            '</svg>'
            );

            $('.navmenu #navHome .navborder').css({'box-shadow':'0px 4px 20px rgba(0, 119, 193, 0.4)', 'border-radius':'24px'});

            $('.navmenu #navHome .navlogo').html('<svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3168 0.504434C28.5628 -0.155124 27.4372 -0.155124 26.6832 0.504435L1.67341 22.382C0.283343 23.598 1.14336 25.8874 2.99022 25.8874H10.6664V45.9997C10.6664 47.1043 11.5618 47.9997 12.6664 47.9997H23.6666V36.2065H32.3334V47.9997H43.3336C44.4381 47.9997 45.3336 47.1043 45.3336 45.9997V25.8874H53.0098C54.8566 25.8874 55.7166 23.598 54.3266 22.382L29.3168 0.504434Z" fill="white"/>'
            + '<mask id="path-2-inside-1_203_99" fill="white">'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M29.3168 0.504434C28.5628 -0.155124 27.4372 -0.155124 26.6832 0.504435L1.67341 22.382C0.283343 23.598 1.14336 25.8874 2.99022 25.8874H10.6664V45.9997C10.6664 47.1043 11.5618 47.9997 12.6664 47.9997H23.6666V36.2065H32.3334V47.9997H43.3336C44.4381 47.9997 45.3336 47.1043 45.3336 45.9997V25.8874H53.0098C54.8566 25.8874 55.7166 23.598 54.3266 22.382L29.3168 0.504434Z"/>'
            + '</mask>'
            + '<path d="M26.6832 0.504435L27.6708 1.63343L26.6832 0.504435ZM29.3168 0.504434L28.3292 1.63343V1.63343L29.3168 0.504434ZM1.67341 22.382L2.66102 23.511L2.66102 23.511L1.67341 22.382ZM10.6664 25.8874H12.1664V24.3874H10.6664V25.8874ZM23.6666 47.9997V49.4997H25.1666V47.9997H23.6666ZM23.6666 36.2065V34.7065H22.1666V36.2065H23.6666ZM32.3334 36.2065H33.8334V34.7065H32.3334V36.2065ZM32.3334 47.9997H30.8334V49.4997H32.3334V47.9997ZM45.3336 25.8874V24.3874H43.8336V25.8874H45.3336ZM54.3266 22.382L55.3142 21.253L54.3266 22.382ZM27.6708 1.63343C27.8593 1.46854 28.1407 1.46854 28.3292 1.63343L30.3044 -0.624564C28.9849 -1.77879 27.0151 -1.77879 25.6956 -0.624563L27.6708 1.63343ZM2.66102 23.511L27.6708 1.63343L25.6956 -0.624563L0.685808 21.253L2.66102 23.511ZM2.99022 24.3874C2.5285 24.3874 2.3135 23.815 2.66102 23.511L0.685809 21.253C-1.74682 23.381 -0.241783 27.3874 2.99022 27.3874V24.3874ZM10.6664 24.3874H2.99022V27.3874H10.6664V24.3874ZM9.16641 25.8874V45.9997H12.1664V25.8874H9.16641ZM9.16641 45.9997C9.16641 47.9327 10.7334 49.4997 12.6664 49.4997V46.4997C12.3903 46.4997 12.1664 46.2758 12.1664 45.9997H9.16641ZM12.6664 49.4997H23.6666V46.4997H12.6664V49.4997ZM25.1666 47.9997V36.2065H22.1666V47.9997H25.1666ZM23.6666 37.7065H32.3334V34.7065H23.6666V37.7065ZM30.8334 36.2065V47.9997H33.8334V36.2065H30.8334ZM32.3334 49.4997H43.3336V46.4997H32.3334V49.4997ZM43.3336 49.4997C45.2666 49.4997 46.8336 47.9327 46.8336 45.9997H43.8336C43.8336 46.2759 43.6097 46.4997 43.3336 46.4997V49.4997ZM46.8336 45.9997V25.8874H43.8336V45.9997H46.8336ZM53.0098 24.3874H45.3336V27.3874H53.0098V24.3874ZM53.339 23.511C53.6865 23.815 53.4715 24.3874 53.0098 24.3874V27.3874C56.2418 27.3874 57.7468 23.381 55.3142 21.253L53.339 23.511ZM28.3292 1.63343L53.339 23.511L55.3142 21.253L30.3044 -0.624564L28.3292 1.63343Z" fill="white" mask="url(#path-2-inside-1_203_99)"/>'
            + '</svg>'
            );

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            break;
        }

        case 'skFloorGuide': {

            resetPage();

            isatFloorGuide = true;

            SwiperHome.autoplay.stop();

            $('.navmenu .navgroup .navbox #navFloorGuide ').css('pointer-events', 'none');

            $('.navmenu #navFloorGuide .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="white"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="#0077C1"/>' +
            '</svg>'
            );

            $('.navmenu #navFloorGuide .navborder').css({'box-shadow':'0px 4px 20px rgba(0, 119, 193, 0.4)', 'border-radius':'24px'});

            $('.navmenu #navFloorGuide .navlogo').html('<svg width="56" height="60" viewBox="0 0 56 60" fill="none" xmlns="http://www.w3.org/2000/svg">'
            + '<mask id="path-1-inside-1_240_3251" fill="white">'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8917 0.821829C17.1015 0.290281 16.1708 0.00429839 15.2175 7.17673e-05C14.5854 -0.00337392 13.9588 0.117288 13.3736 0.355169C12.7883 0.59305 12.2557 0.943491 11.8063 1.38648C11.3569 1.82947 10.9995 2.35634 10.7544 2.93699C10.5094 3.51765 10.3815 4.14073 10.378 4.77065C10.3719 5.72071 10.6487 6.65125 11.1734 7.44448C11.6981 8.23771 12.4472 8.85798 13.3258 9.22679C14.2043 9.5956 15.173 9.69636 16.109 9.51633C17.0451 9.33629 17.9066 8.88356 18.5844 8.21542C19.2622 7.54728 19.7258 6.69377 19.9167 5.76292C20.1075 4.83206 20.017 3.86571 19.6565 2.98615C19.2961 2.10659 18.6819 1.35338 17.8917 0.821829ZM8.38662 19.8158L8.38628 19.816C7.96835 19.9634 7.58287 20.0995 7.20291 20.2502C7.09824 20.3132 7.01701 20.4085 6.97153 20.5217C5.87749 22.7023 4.78674 24.8829 3.69926 27.0634C3.35792 27.752 2.83115 28.1755 2.05821 28.2295C1.70844 28.267 1.35529 28.2019 1.04216 28.0421C0.729041 27.8823 0.469591 27.6348 0.295716 27.33C0.135701 27.085 0.0372462 26.8052 0.0086815 26.5143C-0.0198831 26.2234 0.0222829 25.9299 0.13161 25.6586L0.499217 24.6863C1.4067 22.2856 2.31414 19.885 3.24962 17.4945C3.39711 17.1637 3.62634 16.8756 3.91588 16.6571C5.79658 15.179 7.68928 13.7153 9.58064 12.2526L9.5807 12.2525L9.58075 12.2525L9.58112 12.2522L10.5359 11.5137C11.1967 11.0149 11.9846 10.7109 12.8101 10.6361C13.6356 10.5614 14.4656 10.7189 15.2058 11.0908C15.946 11.4627 16.5666 12.034 16.9972 12.7399C17.4278 13.4457 17.6511 14.2578 17.6417 15.0839V24.2701C17.6289 24.3908 17.657 24.5122 17.7215 24.6151C17.7861 24.7179 17.8833 24.7963 17.9978 24.8376C19.2282 25.4452 20.4563 26.0577 21.6845 26.6702L21.6851 26.6705L21.6861 26.671L21.6862 26.671L21.6862 26.6711C23.0294 27.3409 24.3726 28.0107 25.7189 28.6744C26.7036 29.165 27.2632 29.9107 27.3337 31.0179C27.4022 32.0889 27.4749 33.1599 27.5477 34.2308C27.6022 35.0341 27.6568 35.8373 27.7095 36.6406C27.8014 38.0143 27.8884 39.3881 27.9705 40.7619C28.0098 41.1124 28.0098 41.4662 27.9705 41.8167C27.8809 42.332 27.6145 42.8003 27.2167 43.1414C26.819 43.4825 26.3146 43.6752 25.79 43.6866C25.2654 43.698 24.7531 43.5274 24.3408 43.2039C23.9285 42.8804 23.6418 42.4241 23.5298 41.9132C23.3102 40.8978 23.1116 39.8715 22.9131 38.8455L22.9131 38.8453L22.9129 38.8445C22.8238 38.3837 22.7346 37.9229 22.6436 37.4632C22.5825 37.1544 22.5208 36.845 22.4591 36.5352L22.4589 36.5343L22.4587 36.5333L22.4585 36.5323C22.2915 35.6945 22.1239 34.8539 21.9659 34.0141C21.959 33.898 21.913 33.7876 21.8352 33.7009C21.7575 33.6142 21.6525 33.5562 21.5375 33.5365C19.423 32.9846 17.31 32.4222 15.1975 31.86C14.1802 31.5892 13.163 31.3185 12.1458 31.049C10.0239 30.4831 8.81772 28.936 8.81772 26.7609V19.6631C8.66972 19.7159 8.52635 19.7665 8.38662 19.8158ZM9.12255 30.5158C10.1576 31.6088 11.5045 31.9475 12.8495 32.2857C12.9354 32.3073 13.0213 32.3289 13.107 32.3507C13.4295 32.4329 13.7508 32.5198 14.0719 32.6065L14.0724 32.6066L14.0729 32.6068L14.0729 32.6068C14.5881 32.746 15.1027 32.8851 15.6211 33.0049C15.9132 33.0736 15.9707 33.1897 15.9297 33.4726L15.8811 33.8131L15.8811 33.8131L15.8811 33.8132L15.8811 33.8132C15.5395 36.2102 15.1976 38.6087 14.8827 41.0087C14.5577 43.4883 14.2592 45.9678 13.9607 48.4473L13.9112 48.8588C13.7749 49.9955 13.048 50.8066 11.9632 50.9735C11.4676 51.0505 10.9604 50.9586 10.5237 50.7125C10.0871 50.4664 9.74662 50.0807 9.55744 49.6177C9.43821 49.3109 9.37593 48.985 9.37364 48.656C9.34719 46.5795 9.3265 44.5025 9.30582 42.4255L9.30582 42.4253L9.30581 42.4252L9.30581 42.425C9.28672 40.5076 9.26762 38.5902 9.24399 36.6732C9.22728 35.3411 9.19621 34.0144 9.16514 32.6878V32.6877V32.6877V32.6876L9.16511 32.6866C9.15042 32.0591 9.13572 31.4316 9.12255 30.8036C9.1204 30.7467 9.12107 30.6855 9.12179 30.6205C9.12217 30.5866 9.12255 30.5517 9.12255 30.5158ZM18.828 15.6299C18.9537 15.8482 19.0833 16.0644 19.2129 16.2806C19.5097 16.7758 19.8065 17.2708 20.0555 17.7887C20.2323 18.1841 20.4878 18.5396 20.8066 18.8337C21.1253 19.1277 21.5007 19.3542 21.9099 19.4994C23.0621 19.9437 24.1899 20.4539 25.3168 20.9637C25.7372 21.1539 26.1574 21.344 26.5787 21.5306C26.8937 21.6572 27.1615 21.8781 27.3452 22.1628C27.5289 22.4476 27.6195 22.7821 27.6043 23.1203C27.5902 23.4586 27.467 23.7835 27.2529 24.0465C27.0389 24.3096 26.7455 24.4969 26.4162 24.5807C26.1173 24.6492 25.8064 24.6464 25.5087 24.5725C24.0228 24.1628 22.54 23.7399 21.0577 23.3171L21.0574 23.3171L21.0554 23.3165C20.3791 23.1236 19.7029 22.9308 19.0265 22.7392C18.8493 22.6885 18.7279 22.6394 18.7295 22.4121C18.7361 20.9489 18.7339 19.4849 18.7317 18.0212L18.7317 18.0172C18.7306 17.2868 18.7295 16.5564 18.7295 15.8262C18.7295 15.7928 18.7339 15.7601 18.7384 15.7264C18.7412 15.7056 18.744 15.6845 18.7459 15.6627L18.828 15.6299ZM16.9219 60H27.5963C27.8408 60 28.0753 59.902 28.2482 59.7277C28.4211 59.5533 28.5182 59.3168 28.5182 59.0702V52.6668H36.791C37.0355 52.6668 37.27 52.5688 37.4429 52.3944C37.6158 52.2201 37.7129 51.9836 37.7129 51.737V46.6667H46.4768C46.7213 46.6667 46.9558 46.5687 47.1287 46.3944C47.3016 46.22 47.3987 45.9835 47.3987 45.7369V40.9355H55.0781C55.1992 40.9358 55.3192 40.9119 55.4311 40.8652C55.5431 40.8186 55.6448 40.7501 55.7305 40.6637C55.8161 40.5773 55.884 40.4747 55.9303 40.3618C55.9765 40.2489 56.0002 40.1279 56 40.0058V37.9298C56 37.6832 55.9029 37.4467 55.73 37.2723C55.5571 37.098 55.3226 37 55.0781 37H44.4184C44.1738 37 43.9394 37.098 43.7665 37.2723C43.5936 37.4467 43.4964 37.6832 43.4964 37.9298V42.7311H34.7326C34.4881 42.7311 34.2536 42.8291 34.0807 43.0035C33.9078 43.1778 33.8107 43.4143 33.8107 43.6609V48.7312H25.5378C25.2933 48.7312 25.0588 48.8292 24.8859 49.0035C24.713 49.1779 24.6159 49.4144 24.6159 49.661V56.0645H16.9219C16.8009 56.0642 16.6811 56.0881 16.5692 56.1346C16.4574 56.1812 16.3558 56.2495 16.2701 56.3357C16.1845 56.4219 16.1166 56.5243 16.0702 56.637C16.0239 56.7497 16 56.8706 16 56.9926V59.0702C16 59.3168 16.0971 59.5533 16.27 59.7277C16.4429 59.902 16.6774 60 16.9219 60Z"/>'
            + '</mask>'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8917 0.821829C17.1015 0.290281 16.1708 0.00429839 15.2175 7.17673e-05C14.5854 -0.00337392 13.9588 0.117288 13.3736 0.355169C12.7883 0.59305 12.2557 0.943491 11.8063 1.38648C11.3569 1.82947 10.9995 2.35634 10.7544 2.93699C10.5094 3.51765 10.3815 4.14073 10.378 4.77065C10.3719 5.72071 10.6487 6.65125 11.1734 7.44448C11.6981 8.23771 12.4472 8.85798 13.3258 9.22679C14.2043 9.5956 15.173 9.69636 16.109 9.51633C17.0451 9.33629 17.9066 8.88356 18.5844 8.21542C19.2622 7.54728 19.7258 6.69377 19.9167 5.76292C20.1075 4.83206 20.017 3.86571 19.6565 2.98615C19.2961 2.10659 18.6819 1.35338 17.8917 0.821829ZM8.38662 19.8158L8.38628 19.816C7.96835 19.9634 7.58287 20.0995 7.20291 20.2502C7.09824 20.3132 7.01701 20.4085 6.97153 20.5217C5.87749 22.7023 4.78674 24.8829 3.69926 27.0634C3.35792 27.752 2.83115 28.1755 2.05821 28.2295C1.70844 28.267 1.35529 28.2019 1.04216 28.0421C0.729041 27.8823 0.469591 27.6348 0.295716 27.33C0.135701 27.085 0.0372462 26.8052 0.0086815 26.5143C-0.0198831 26.2234 0.0222829 25.9299 0.13161 25.6586L0.499217 24.6863C1.4067 22.2856 2.31414 19.885 3.24962 17.4945C3.39711 17.1637 3.62634 16.8756 3.91588 16.6571C5.79658 15.179 7.68928 13.7153 9.58064 12.2526L9.5807 12.2525L9.58075 12.2525L9.58112 12.2522L10.5359 11.5137C11.1967 11.0149 11.9846 10.7109 12.8101 10.6361C13.6356 10.5614 14.4656 10.7189 15.2058 11.0908C15.946 11.4627 16.5666 12.034 16.9972 12.7399C17.4278 13.4457 17.6511 14.2578 17.6417 15.0839V24.2701C17.6289 24.3908 17.657 24.5122 17.7215 24.6151C17.7861 24.7179 17.8833 24.7963 17.9978 24.8376C19.2282 25.4452 20.4563 26.0577 21.6845 26.6702L21.6851 26.6705L21.6861 26.671L21.6862 26.671L21.6862 26.6711C23.0294 27.3409 24.3726 28.0107 25.7189 28.6744C26.7036 29.165 27.2632 29.9107 27.3337 31.0179C27.4022 32.0889 27.4749 33.1599 27.5477 34.2308C27.6022 35.0341 27.6568 35.8373 27.7095 36.6406C27.8014 38.0143 27.8884 39.3881 27.9705 40.7619C28.0098 41.1124 28.0098 41.4662 27.9705 41.8167C27.8809 42.332 27.6145 42.8003 27.2167 43.1414C26.819 43.4825 26.3146 43.6752 25.79 43.6866C25.2654 43.698 24.7531 43.5274 24.3408 43.2039C23.9285 42.8804 23.6418 42.4241 23.5298 41.9132C23.3102 40.8978 23.1116 39.8715 22.9131 38.8455L22.9131 38.8453L22.9129 38.8445C22.8238 38.3837 22.7346 37.9229 22.6436 37.4632C22.5825 37.1544 22.5208 36.845 22.4591 36.5352L22.4589 36.5343L22.4587 36.5333L22.4585 36.5323C22.2915 35.6945 22.1239 34.8539 21.9659 34.0141C21.959 33.898 21.913 33.7876 21.8352 33.7009C21.7575 33.6142 21.6525 33.5562 21.5375 33.5365C19.423 32.9846 17.31 32.4222 15.1975 31.86C14.1802 31.5892 13.163 31.3185 12.1458 31.049C10.0239 30.4831 8.81772 28.936 8.81772 26.7609V19.6631C8.66972 19.7159 8.52635 19.7665 8.38662 19.8158ZM9.12255 30.5158C10.1576 31.6088 11.5045 31.9475 12.8495 32.2857C12.9354 32.3073 13.0213 32.3289 13.107 32.3507C13.4295 32.4329 13.7508 32.5198 14.0719 32.6065L14.0724 32.6066L14.0729 32.6068L14.0729 32.6068C14.5881 32.746 15.1027 32.8851 15.6211 33.0049C15.9132 33.0736 15.9707 33.1897 15.9297 33.4726L15.8811 33.8131L15.8811 33.8131L15.8811 33.8132L15.8811 33.8132C15.5395 36.2102 15.1976 38.6087 14.8827 41.0087C14.5577 43.4883 14.2592 45.9678 13.9607 48.4473L13.9112 48.8588C13.7749 49.9955 13.048 50.8066 11.9632 50.9735C11.4676 51.0505 10.9604 50.9586 10.5237 50.7125C10.0871 50.4664 9.74662 50.0807 9.55744 49.6177C9.43821 49.3109 9.37593 48.985 9.37364 48.656C9.34719 46.5795 9.3265 44.5025 9.30582 42.4255L9.30582 42.4253L9.30581 42.4252L9.30581 42.425C9.28672 40.5076 9.26762 38.5902 9.24399 36.6732C9.22728 35.3411 9.19621 34.0144 9.16514 32.6878V32.6877V32.6877V32.6876L9.16511 32.6866C9.15042 32.0591 9.13572 31.4316 9.12255 30.8036C9.1204 30.7467 9.12107 30.6855 9.12179 30.6205C9.12217 30.5866 9.12255 30.5517 9.12255 30.5158ZM18.828 15.6299C18.9537 15.8482 19.0833 16.0644 19.2129 16.2806C19.5097 16.7758 19.8065 17.2708 20.0555 17.7887C20.2323 18.1841 20.4878 18.5396 20.8066 18.8337C21.1253 19.1277 21.5007 19.3542 21.9099 19.4994C23.0621 19.9437 24.1899 20.4539 25.3168 20.9637C25.7372 21.1539 26.1574 21.344 26.5787 21.5306C26.8937 21.6572 27.1615 21.8781 27.3452 22.1628C27.5289 22.4476 27.6195 22.7821 27.6043 23.1203C27.5902 23.4586 27.467 23.7835 27.2529 24.0465C27.0389 24.3096 26.7455 24.4969 26.4162 24.5807C26.1173 24.6492 25.8064 24.6464 25.5087 24.5725C24.0228 24.1628 22.54 23.7399 21.0577 23.3171L21.0574 23.3171L21.0554 23.3165C20.3791 23.1236 19.7029 22.9308 19.0265 22.7392C18.8493 22.6885 18.7279 22.6394 18.7295 22.4121C18.7361 20.9489 18.7339 19.4849 18.7317 18.0212L18.7317 18.0172C18.7306 17.2868 18.7295 16.5564 18.7295 15.8262C18.7295 15.7928 18.7339 15.7601 18.7384 15.7264C18.7412 15.7056 18.744 15.6845 18.7459 15.6627L18.828 15.6299ZM16.9219 60H27.5963C27.8408 60 28.0753 59.902 28.2482 59.7277C28.4211 59.5533 28.5182 59.3168 28.5182 59.0702V52.6668H36.791C37.0355 52.6668 37.27 52.5688 37.4429 52.3944C37.6158 52.2201 37.7129 51.9836 37.7129 51.737V46.6667H46.4768C46.7213 46.6667 46.9558 46.5687 47.1287 46.3944C47.3016 46.22 47.3987 45.9835 47.3987 45.7369V40.9355H55.0781C55.1992 40.9358 55.3192 40.9119 55.4311 40.8652C55.5431 40.8186 55.6448 40.7501 55.7305 40.6637C55.8161 40.5773 55.884 40.4747 55.9303 40.3618C55.9765 40.2489 56.0002 40.1279 56 40.0058V37.9298C56 37.6832 55.9029 37.4467 55.73 37.2723C55.5571 37.098 55.3226 37 55.0781 37H44.4184C44.1738 37 43.9394 37.098 43.7665 37.2723C43.5936 37.4467 43.4964 37.6832 43.4964 37.9298V42.7311H34.7326C34.4881 42.7311 34.2536 42.8291 34.0807 43.0035C33.9078 43.1778 33.8107 43.4143 33.8107 43.6609V48.7312H25.5378C25.2933 48.7312 25.0588 48.8292 24.8859 49.0035C24.713 49.1779 24.6159 49.4144 24.6159 49.661V56.0645H16.9219C16.8009 56.0642 16.6811 56.0881 16.5692 56.1346C16.4574 56.1812 16.3558 56.2495 16.2701 56.3357C16.1845 56.4219 16.1166 56.5243 16.0702 56.637C16.0239 56.7497 16 56.8706 16 56.9926V59.0702C16 59.3168 16.0971 59.5533 16.27 59.7277C16.4429 59.902 16.6774 60 16.9219 60Z" fill="white"/>'
            + '<path d="M15.2175 7.17673e-05L15.2093 1.50005L15.2108 1.50006L15.2175 7.17673e-05ZM13.3736 0.355169L13.9383 1.74478L13.3736 0.355169ZM11.8063 1.38648L10.7533 0.318244V0.318245L11.8063 1.38648ZM10.7544 2.93699L9.37248 2.35373L9.37248 2.35373L10.7544 2.93699ZM10.378 4.77065L11.878 4.78037L11.878 4.77883L10.378 4.77065ZM11.1734 7.44448L12.4244 6.61691L12.4244 6.61691L11.1734 7.44448ZM13.3258 9.22679L12.7452 10.6099L13.3258 9.22679ZM16.109 9.51633L15.8258 8.04332L15.8258 8.04332L16.109 9.51633ZM18.5844 8.21542L19.6374 9.28366L19.6374 9.28366L18.5844 8.21542ZM19.9167 5.76292L18.4472 5.46164V5.46165L19.9167 5.76292ZM19.6565 2.98615L18.2686 3.55497V3.55497L19.6565 2.98615ZM8.38628 19.816L8.88548 21.2305L8.89695 21.2264L8.38628 19.816ZM8.38662 19.8158L7.88746 18.4013L7.87596 18.4054L8.38662 19.8158ZM7.20291 20.2502L6.6498 18.8559L6.53494 18.9015L6.42908 18.9652L7.20291 20.2502ZM6.97153 20.5217L8.31225 21.1944L8.3401 21.1388L8.36327 21.0812L6.97153 20.5217ZM3.69926 27.0634L2.35693 26.394L2.35535 26.3972L3.69926 27.0634ZM2.05821 28.2295L1.95373 26.7332L1.92591 26.7351L1.89818 26.7381L2.05821 28.2295ZM1.04216 28.0421L0.3603 29.3782H0.3603L1.04216 28.0421ZM0.295716 27.33L1.5986 26.5867L1.57625 26.5475L1.55158 26.5098L0.295716 27.33ZM0.0086815 26.5143L-1.48414 26.6609L-1.48414 26.6609L0.0086815 26.5143ZM0.13161 25.6586L1.52286 26.2193L1.52893 26.2043L1.53468 26.1891L0.13161 25.6586ZM0.499217 24.6863L1.90228 25.2168L1.90232 25.2167L0.499217 24.6863ZM3.24962 17.4945L1.87965 16.8836L1.86546 16.9154L1.85277 16.9479L3.24962 17.4945ZM3.91588 16.6571L4.81942 17.8545L4.83119 17.8456L4.84279 17.8365L3.91588 16.6571ZM9.58064 12.2526L10.4983 13.4391L10.5042 13.4345L10.5101 13.4299L9.58064 12.2526ZM9.58075 12.2525L8.66044 11.0679L8.65128 11.0752L9.58075 12.2525ZM9.58112 12.2522L8.66339 11.0657L8.66084 11.0677L9.58112 12.2522ZM10.5359 11.5137L9.63222 10.3165L9.62516 10.3218L9.61817 10.3272L10.5359 11.5137ZM12.8101 10.6361L12.6748 9.14225H12.6748L12.8101 10.6361ZM15.2058 11.0908L15.8792 9.75043L15.8792 9.75043L15.2058 11.0908ZM17.6417 15.0839L16.1418 15.0668L16.1417 15.0753V15.0839H17.6417ZM17.6417 24.2701L19.1333 24.4282L19.1417 24.3494V24.2701H17.6417ZM17.7215 24.6151L18.9921 23.8178L18.9921 23.8178L17.7215 24.6151ZM17.9978 24.8376L18.662 23.4927L18.5866 23.4555L18.5075 23.4269L17.9978 24.8376ZM21.6845 26.6702L22.3554 25.3286L22.354 25.3279L21.6845 26.6702ZM21.6851 26.6705L21.0142 28.0121L21.0172 28.0136L21.6851 26.6705ZM21.6861 26.671L21.0182 28.0141L21.0416 28.0257L21.0654 28.0366L21.6861 26.671ZM21.6862 26.6711L22.3557 25.3287L22.3315 25.3167L22.3069 25.3055L21.6862 26.6711ZM25.7189 28.6744L26.3879 27.3318L26.3821 27.3289L25.7189 28.6744ZM27.3337 31.0179L25.8368 31.1133L25.8368 31.1136L27.3337 31.0179ZM27.5477 34.2308L29.0442 34.1292L27.5477 34.2308ZM27.7095 36.6406L26.2128 36.7389L26.2129 36.7407L27.7095 36.6406ZM27.9705 40.7619L26.4731 40.8513L26.4755 40.8904L26.4798 40.9293L27.9705 40.7619ZM27.9705 41.8167L29.4483 42.0736L29.4561 42.029L29.4611 41.9841L27.9705 41.8167ZM27.2167 43.1414L28.1932 44.28L28.1932 44.28L27.2167 43.1414ZM24.3408 43.2039L23.4148 44.384L23.4148 44.384L24.3408 43.2039ZM23.5298 41.9132L22.0637 42.2303L22.0646 42.2344L23.5298 41.9132ZM22.9131 38.8455L24.3859 38.5606L24.384 38.5513L22.9131 38.8455ZM22.9131 38.8453L21.4395 39.1255L21.4408 39.1325L21.4422 39.1395L22.9131 38.8453ZM22.9129 38.8445L24.3865 38.5643L24.3856 38.5596L22.9129 38.8445ZM22.6436 37.4632L21.1721 37.7543L21.1722 37.7546L22.6436 37.4632ZM22.4591 36.5352L20.9875 36.8261L20.988 36.8285L22.4591 36.5352ZM22.4585 36.5323L23.93 36.2414L23.9295 36.239L22.4585 36.5323ZM21.9659 34.0141L20.4684 34.1021L20.4741 34.1975L20.4917 34.2914L21.9659 34.0141ZM21.5375 33.5365L21.1587 34.9879L21.2207 35.0041L21.2838 35.0149L21.5375 33.5365ZM15.1975 31.86L15.5833 30.4104H15.5833L15.1975 31.86ZM12.1458 31.049L11.7593 32.4984L11.7616 32.499L12.1458 31.049ZM8.81772 19.6631H10.3177V17.5347L8.31326 18.2505L8.81772 19.6631ZM12.8495 32.2857L13.2154 30.831L13.2154 30.831L12.8495 32.2857ZM9.12255 30.5158L10.2117 29.4844L7.62255 26.7503V30.5158H9.12255ZM13.107 32.3507L13.4777 30.8972L13.4763 30.8969L13.107 32.3507ZM14.0719 32.6065L13.6806 34.0546L13.681 34.0547L14.0719 32.6065ZM14.0724 32.6066L13.6815 34.0548L13.6879 34.0565L14.0724 32.6066ZM14.0729 32.6068L14.5594 31.1879L14.5089 31.1706L14.4574 31.1569L14.0729 32.6068ZM14.0729 32.6068L13.5864 34.0257L13.6336 34.0419L13.6817 34.0549L14.0729 32.6068ZM15.6211 33.0049L15.9645 31.5447L15.959 31.5434L15.6211 33.0049ZM15.9297 33.4726L14.4452 33.2574L14.4447 33.261L15.9297 33.4726ZM15.8811 33.8131L17.3646 34.0356L17.3661 34.0247L15.8811 33.8131ZM15.8811 33.8132L14.3977 33.5907L14.3961 33.6016L15.8811 33.8132ZM14.8827 41.0087L13.3954 40.8136L13.3954 40.8138L14.8827 41.0087ZM13.9607 48.4473L15.4499 48.6266L15.4499 48.6266L13.9607 48.4473ZM13.9112 48.8588L12.4219 48.6795L12.4218 48.6804L13.9112 48.8588ZM11.9632 50.9735L11.7352 49.4909L11.7327 49.4913L11.9632 50.9735ZM10.5237 50.7125L9.7873 52.0193L9.78731 52.0193L10.5237 50.7125ZM9.55744 49.6177L8.1593 50.161L8.16399 50.1731L8.16888 50.1851L9.55744 49.6177ZM9.37364 48.656L10.8736 48.6456L10.8735 48.6369L9.37364 48.656ZM9.30582 42.4255L10.8058 42.4106L10.8056 42.3987L9.30582 42.4255ZM9.30581 42.425L7.80584 42.44L7.80605 42.4518L9.30581 42.425ZM9.24399 36.6732L10.7439 36.6547L10.7439 36.6544L9.24399 36.6732ZM9.16514 32.6878H7.66514V32.7053L7.66555 32.7229L9.16514 32.6878ZM9.16514 32.6876H10.6651V32.6691L10.6647 32.6506L9.16514 32.6876ZM9.16511 32.6866L7.66552 32.7217L7.66557 32.7237L9.16511 32.6866ZM9.12255 30.8036L10.6222 30.7721L10.622 30.7595L10.6215 30.7468L9.12255 30.8036ZM9.12179 30.6205L7.62188 30.6039L7.62188 30.604L9.12179 30.6205ZM19.2129 16.2806L20.4995 15.5094L20.4995 15.5094L19.2129 16.2806ZM18.828 15.6299L20.1278 14.8813L19.4793 13.7555L18.2725 14.2366L18.828 15.6299ZM20.0555 17.7887L21.4248 17.1764L21.4163 17.1575L21.4074 17.1388L20.0555 17.7887ZM21.9099 19.4994L22.4496 18.0998L22.4306 18.0925L22.4115 18.0857L21.9099 19.4994ZM25.3168 20.9637L25.9351 19.5971H25.9351L25.3168 20.9637ZM26.5787 21.5306L25.9712 22.9021L25.9951 22.9127L26.0193 22.9224L26.5787 21.5306ZM27.3452 22.1628L28.6057 21.3496L28.6057 21.3496L27.3452 22.1628ZM27.6043 23.1203L26.1058 23.0532L26.1056 23.0576L27.6043 23.1203ZM26.4162 24.5807L26.751 26.0429L26.7686 26.0388L26.786 26.0344L26.4162 24.5807ZM25.5087 24.5725L25.1099 26.0185L25.1287 26.0237L25.1476 26.0284L25.5087 24.5725ZM21.0577 23.3171L21.4691 21.8746L21.4609 21.8723L21.0577 23.3171ZM21.0574 23.3171L20.6453 24.7594L20.6542 24.7619L21.0574 23.3171ZM21.0554 23.3165L21.4675 21.8742L21.4668 21.874L21.0554 23.3165ZM19.0265 22.7392L18.614 24.1814L18.6178 24.1824L19.0265 22.7392ZM18.7295 22.4121L20.2295 22.4229L20.2295 22.4188L18.7295 22.4121ZM18.7317 18.0212L17.2317 18.0234V18.0234L18.7317 18.0212ZM18.7317 18.0172L20.2317 18.0151V18.015L18.7317 18.0172ZM18.7384 15.7264L20.2251 15.9258L20.2251 15.9257L18.7384 15.7264ZM18.7459 15.6627L18.1905 14.2693L17.3308 14.612L17.2514 15.5341L18.7459 15.6627ZM28.5182 52.6668V51.1668H27.0182V52.6668H28.5182ZM37.4429 52.3944L36.3778 51.3383L37.4429 52.3944ZM37.7129 46.6667V45.1667H36.2129V46.6667H37.7129ZM47.3987 40.9355V39.4355H45.8987V40.9355H47.3987ZM55.0781 40.9355L55.0808 39.4355H55.0781V40.9355ZM55.4311 40.8652L54.8542 39.4806L54.8541 39.4806L55.4311 40.8652ZM55.7305 40.6637L56.7956 41.7199L56.7956 41.7198L55.7305 40.6637ZM56 40.0058H54.5L54.5 40.0084L56 40.0058ZM43.4964 42.7311V44.2311H44.9964V42.7311H43.4964ZM34.0807 43.0035L35.1458 44.0596L35.1458 44.0596L34.0807 43.0035ZM33.8107 48.7312V50.2312H35.3107V48.7312H33.8107ZM24.8859 49.0035L25.9511 50.0597L25.9511 50.0597L24.8859 49.0035ZM24.6159 56.0645V57.5645H26.1159V56.0645H24.6159ZM16.9219 56.0645L16.9192 57.5645H16.9219V56.0645ZM16.5692 56.1346L15.9929 54.7498L15.9929 54.7498L16.5692 56.1346ZM16.2701 56.3357L17.3343 57.3928L17.3344 57.3928L16.2701 56.3357ZM16.27 59.7277L17.3352 58.6715L17.3352 58.6715L16.27 59.7277ZM15.2108 1.50006C15.8685 1.50297 16.5101 1.70029 17.0544 2.06643L18.7289 -0.422777C17.6928 -1.11973 16.4731 -1.49438 15.2241 -1.49991L15.2108 1.50006ZM13.9383 1.74478C14.3416 1.58088 14.7735 1.49767 15.2093 1.50005L15.2257 -1.49991C14.3973 -1.50442 13.5761 -1.3463 12.8088 -1.03444L13.9383 1.74478ZM12.8594 2.45472C13.1685 2.15001 13.5351 1.90868 13.9383 1.74478L12.8088 -1.03444C12.0415 -0.722583 11.343 -0.263025 10.7533 0.318244L12.8594 2.45472ZM12.1364 3.52026C12.3047 3.12154 12.5503 2.75942 12.8594 2.45472L10.7533 0.318245C10.1636 0.899521 9.69434 1.59113 9.37248 2.35373L12.1364 3.52026ZM11.878 4.77883C11.8804 4.34661 11.9681 3.91896 12.1364 3.52025L9.37248 2.35373C9.05061 3.11634 8.88257 3.93485 8.87805 4.76246L11.878 4.77883ZM12.4244 6.61691C12.0637 6.07163 11.8738 5.4325 11.878 4.78037L8.87806 4.76092C8.86996 6.00893 9.23359 7.23087 9.92233 8.27205L12.4244 6.61691ZM13.9063 7.8437C13.3007 7.58947 12.7852 7.16226 12.4244 6.61691L9.92233 8.27205C10.611 9.31317 11.5936 10.1265 12.7452 10.6099L13.9063 7.8437ZM15.8258 8.04332C15.1801 8.1675 14.512 8.09795 13.9063 7.8437L12.7452 10.6099C13.8967 11.0932 15.1659 11.2252 16.3923 10.9893L15.8258 8.04332ZM17.5313 7.14718C17.0649 7.607 16.4714 7.91915 15.8258 8.04332L16.3923 10.9893C17.6189 10.7534 18.7483 10.1601 19.6374 9.28366L17.5313 7.14718ZM18.4472 5.46165C18.3162 6.10072 17.9977 6.68742 17.5313 7.14719L19.6374 9.28366C20.5266 8.40715 21.1354 7.28682 21.3861 6.06419L18.4472 5.46165ZM18.2686 3.55497C18.5162 '
            + '4.15912 18.5783 4.82259 18.4472 5.46164L21.3861 6.0642C21.6368 4.84154 21.5178 3.57229 21.0445 2.41733L18.2686 3.55497ZM17.0544 2.06643C17.5987 2.43254 18.0209 2.95078 18.2686 3.55497L21.0445 2.41733C20.5712 1.2624 19.765 0.274209 18.7289 -0.422777L17.0544 2.06643ZM8.89695 21.2264L8.89728 21.2262L7.87596 18.4054L7.87562 18.4056L8.89695 21.2264ZM7.75603 21.6445C8.10456 21.5062 8.46243 21.3797 8.88546 21.2305L7.88711 18.4015C7.47427 18.5471 7.06117 18.6927 6.6498 18.8559L7.75603 21.6445ZM8.36327 21.0812C8.28687 21.2713 8.15084 21.4304 7.97675 21.5352L6.42908 18.9652C6.04564 19.1961 5.74716 19.5458 5.57978 19.9622L8.36327 21.0812ZM5.0416 27.7329C6.12853 25.5534 7.21875 23.3739 8.31225 21.1944L5.63081 19.849C4.53623 22.0307 3.44494 24.2124 2.35693 26.394L5.0416 27.7329ZM2.16269 29.7259C3.5611 29.6282 4.51053 28.8041 5.04318 27.7297L2.35535 26.3972C2.2659 26.5776 2.18957 26.6484 2.15358 26.6748C2.12736 26.694 2.07829 26.7245 1.95373 26.7332L2.16269 29.7259ZM0.3603 29.3782C0.933182 29.6705 1.5789 29.7896 2.21823 29.721L1.89818 26.7381C1.83797 26.7445 1.77739 26.7333 1.72403 26.706L0.3603 29.3782ZM-1.00717 28.0733C-0.68816 28.6325 -0.212624 29.0858 0.3603 29.3782L1.72403 26.706C1.67071 26.6788 1.62734 26.6371 1.5986 26.5867L-1.00717 28.0733ZM-1.48414 26.6609C-1.43195 27.1924 -1.25209 27.7033 -0.960145 28.1503L1.55158 26.5098C1.52349 26.4668 1.50644 26.418 1.5015 26.3677L-1.48414 26.6609ZM-1.25964 25.0979C-1.45926 25.5932 -1.53633 26.1293 -1.48414 26.6609L1.5015 26.3677C1.49656 26.3174 1.50383 26.2666 1.52286 26.2193L-1.25964 25.0979ZM-0.90385 24.1558L-1.27146 25.1281L1.53468 26.1891L1.90228 25.2168L-0.90385 24.1558ZM1.85277 16.9479C0.913591 19.3478 0.00308097 21.7566 -0.903887 24.1559L1.90232 25.2167C2.81031 22.8146 3.7147 20.4221 4.64647 18.0411L1.85277 16.9479ZM3.01235 15.4598C2.52056 15.8309 2.13068 16.3207 1.87965 16.8836L4.61958 18.1054C4.66354 18.0068 4.73211 17.9204 4.81942 17.8545L3.01235 15.4598ZM8.663 11.066C6.77242 12.5281 4.87506 13.9954 2.98898 15.4778L4.84279 17.8365C6.71809 16.3626 8.60615 14.9024 10.4983 13.4391L8.663 11.066ZM8.65123 11.0752L8.65118 11.0752L10.5101 13.4299L10.5102 13.4298L8.65123 11.0752ZM8.65128 11.0752L8.65123 11.0752L10.5102 13.4298L10.5102 13.4298L8.65128 11.0752ZM8.66084 11.0677L8.66047 11.068L10.501 13.437L10.5014 13.4367L8.66084 11.0677ZM9.61817 10.3272L8.66339 11.0657L10.4989 13.4387L11.4536 12.7002L9.61817 10.3272ZM12.6748 9.14225C11.5709 9.24223 10.5167 9.64884 9.63222 10.3165L11.4396 12.7109C11.8766 12.381 12.3983 12.1796 12.9454 12.13L12.6748 9.14225ZM15.8792 9.75043C14.8889 9.25286 13.7787 9.04227 12.6748 9.14225L12.9454 12.13C13.4925 12.0805 14.0424 12.1849 14.5324 12.4311L15.8792 9.75043ZM18.2778 11.9587C17.7008 11.0129 16.8696 10.248 15.8792 9.75043L14.5324 12.4311C15.0223 12.6773 15.4325 13.0551 15.7167 13.521L18.2778 11.9587ZM19.1416 15.101C19.1542 13.9933 18.8548 12.9046 18.2778 11.9587L15.7167 13.521C16.0009 13.9869 16.148 14.5224 16.1418 15.0668L19.1416 15.101ZM19.1417 24.2701V15.0839H16.1417V24.2701H19.1417ZM18.9921 23.8178C19.1061 23.9994 19.156 24.2144 19.1333 24.4282L16.15 24.112C16.1018 24.5672 16.2079 25.025 16.451 25.4123L18.9921 23.8178ZM18.5075 23.4269C18.7073 23.4991 18.8782 23.6363 18.9921 23.8178L16.451 25.4123C16.6939 25.7995 17.0593 26.0935 17.4881 26.2484L18.5075 23.4269ZM22.354 25.3279C21.1262 24.7156 19.8954 24.1018 18.662 23.4927L17.3336 26.1826C18.5609 26.7887 19.7865 27.3998 21.0151 28.0126L22.354 25.3279ZM22.3559 25.3288L22.3554 25.3286L21.0137 28.0119L21.0142 28.0121L22.3559 25.3288ZM22.354 25.3279L22.353 25.3274L21.0172 28.0136L21.0182 28.0141L22.354 25.3279ZM22.3069 25.3055L22.3068 25.3055L21.0654 28.0366L21.0655 28.0366L22.3069 25.3055ZM22.3069 25.3055L22.3069 25.3055L21.0655 28.0366L21.0655 28.0366L22.3069 25.3055ZM26.3821 27.3289C25.0394 26.6671 23.6993 25.9988 22.3557 25.3287L21.0168 28.0134C22.3594 28.683 23.7058 29.3544 25.0558 30.0198L26.3821 27.3289ZM28.8307 30.9225C28.7801 30.1285 28.5461 29.3914 28.0958 28.7516C27.6504 28.1188 27.0505 27.662 26.3879 27.3318L25.05 30.0169C25.372 30.1774 25.5443 30.3387 25.6425 30.4783C25.7358 30.6108 25.8168 30.8001 25.8368 31.1133L28.8307 30.9225ZM29.0442 34.1292C28.9715 33.0577 28.8989 31.9897 28.8307 30.9223L25.8368 31.1136C25.9055 32.1881 25.9784 33.262 26.0511 34.3325L29.0442 34.1292ZM29.2063 36.5423C29.1534 35.7371 29.0988 34.9322 29.0442 34.1292L26.0511 34.3325C26.1057 35.136 26.1602 35.9376 26.2128 36.7389L29.2063 36.5423ZM29.4678 40.6725C29.3855 39.2951 29.2983 37.9178 29.2062 36.5405L26.2129 36.7407C26.3046 38.1109 26.3913 39.4811 26.4731 40.8513L29.4678 40.6725ZM29.4611 41.9841C29.513 41.5224 29.513 41.0563 29.4611 40.5945L26.4798 40.9293C26.5067 41.1686 26.5067 41.4101 26.4798 41.6494L29.4611 41.9841ZM28.1932 44.28C28.8549 43.7126 29.299 42.9328 29.4483 42.0736L26.4926 41.5599C26.4629 41.7312 26.3741 41.888 26.2403 42.0027L28.1932 44.28ZM25.8226 45.1863C26.6936 45.1674 27.5316 44.8474 28.1932 44.28L26.2403 42.0027C26.1063 42.1176 25.9357 42.1831 25.7574 42.187L25.8226 45.1863ZM23.4148 44.384C24.1005 44.9219 24.9516 45.2052 25.8226 45.1863L25.7574 42.187C25.5791 42.1909 25.4057 42.1328 25.2667 42.0238L23.4148 44.384ZM22.0646 42.2344C22.2513 43.0863 22.7291 43.8459 23.4148 44.384L25.2667 42.0238C25.1278 41.9148 25.0322 41.762 24.995 41.592L22.0646 42.2344ZM21.4404 39.1304C21.6384 40.1536 21.84 41.1961 22.0637 42.2303L24.9959 41.5961C24.7803 40.5995 24.5848 39.5893 24.3858 38.5606L21.4404 39.1304ZM21.4422 39.1395L21.4423 39.1397L24.384 38.5513L24.384 38.5512L21.4422 39.1395ZM21.4393 39.1247L21.4395 39.1255L24.3867 38.5651L24.3865 38.5643L21.4393 39.1247ZM21.1722 37.7546C21.2625 38.2105 21.351 38.668 21.4402 39.1294L24.3856 38.5596C24.2966 38.0993 24.2068 37.6353 24.115 37.1718L21.1722 37.7546ZM20.988 36.8285C21.0498 37.1385 21.1113 37.4468 21.1721 37.7543L24.1151 37.1721C24.0538 36.862 23.9918 36.5515 23.9301 36.2419L20.988 36.8285ZM20.9874 36.8251L20.9876 36.8261L23.9306 36.2444L23.9304 36.2434L20.9874 36.8251ZM20.9872 36.8242L20.9874 36.8251L23.9304 36.2434L23.9302 36.2424L20.9872 36.8242ZM20.987 36.8232L20.9872 36.8242L23.9302 36.2424L23.93 36.2414L20.987 36.8232ZM20.4917 34.2914C20.6515 35.1405 20.8207 35.9892 20.9874 36.8256L23.9295 36.239C23.7622 35.3999 23.5962 34.5672 23.44 33.7367L20.4917 34.2914ZM20.7186 34.7024C20.5701 34.5369 20.4816 34.3254 20.4684 34.1021L23.4633 33.926C23.4365 33.4706 23.2559 33.0383 22.9519 32.6993L20.7186 34.7024ZM21.2838 35.0149C21.0663 34.9776 20.8669 34.8678 20.7186 34.7024L22.9519 32.6993C22.648 32.3605 22.2388 32.1349 21.7913 32.0581L21.2838 35.0149ZM14.8117 33.3095C16.9236 33.8716 19.0401 34.4349 21.1587 34.9879L21.9164 32.0851C19.8059 31.5343 17.6964 30.9728 15.5833 30.4104L14.8117 33.3095ZM11.7616 32.499C12.7779 32.7682 13.7943 33.0387 14.8117 33.3095L15.5833 30.4104C14.5661 30.1397 13.5481 29.8688 12.53 29.599L11.7616 32.499ZM7.31772 26.7609C7.31772 28.133 7.70225 29.4001 8.50159 30.4288C9.29977 31.456 10.4331 32.1447 11.7593 32.4984L12.5323 29.5997C11.7366 29.3875 11.2059 29.0197 10.8705 28.5881C10.5363 28.1579 10.3177 27.5639 10.3177 26.7609H7.31772ZM7.31772 19.6631V26.7609H10.3177V19.6631H7.31772ZM8.88576 21.2304C9.02516 21.1812 9.17111 21.1297 9.32217 21.0757L8.31326 18.2505C8.16832 18.3022 8.02754 18.3519 7.88748 18.4013L8.88576 21.2304ZM13.2154 30.831C11.8099 30.4776 10.9023 30.2137 10.2117 29.4844L8.03341 31.5471C9.41291 33.0039 11.199 33.4174 12.4837 33.7404L13.2154 30.831ZM13.4763 30.8969C13.3885 30.8746 13.3009 30.8526 13.2154 30.831L12.4837 33.7404C12.5699 33.7621 12.654 33.7833 12.7378 33.8046L13.4763 30.8969ZM14.4632 31.1584C14.1438 31.0721 13.8122 30.9825 13.4777 30.8972L12.7364 33.8042C13.0468 33.8834 13.3578 33.9674 13.6806 34.0546L14.4632 31.1584ZM14.4633 31.1585L14.4628 31.1584L13.681 34.0547L13.6815 34.0548L14.4633 31.1585ZM14.4574 31.1569L14.4569 31.1568L13.6879 34.0565L13.6884 34.0567L14.4574 31.1569ZM14.5594 31.1879L14.5594 31.1879L13.5864 34.0257L13.5864 34.0257L14.5594 31.1879ZM15.959 31.5434C15.4719 31.4308 14.9838 31.2991 14.4642 31.1587L13.6817 34.0549C14.1923 34.1928 14.7336 34.3393 15.2833 34.4663L15.959 31.5434ZM17.4141 33.6879C17.4401 33.5088 17.5247 32.9256 17.1713 32.3618C16.7967 31.7642 16.2007 31.6003 15.9645 31.5447L15.2778 34.4651C15.2752 34.4645 15.2556 34.4598 15.2246 34.449C15.1937 34.4381 15.1428 34.4182 15.0807 34.3843C14.9478 34.3119 14.7692 34.1782 14.6293 33.9551C14.4927 33.737 14.4545 33.5314 14.4447 33.4106C14.436 33.3027 14.448 33.2377 14.4452 33.2574L17.4141 33.6879ZM17.3661 34.0247L17.4146 33.6843L14.4447 33.261L14.3961 33.6014L17.3661 34.0247ZM17.3645 34.0356L17.3645 34.0356L14.3977 33.5905L14.3977 33.5906L17.3645 34.0356ZM17.3645 34.0357L17.3645 34.0356L14.3977 33.5906L14.3977 33.5907L17.3645 34.0357ZM17.3645 34.0357L17.3645 34.0357L14.3977 33.5907L14.3977 33.5907L17.3645 34.0357ZM16.3699 41.2039C16.6836 38.8135 17.0243 36.4233 17.3661 34.0249L14.3961 33.6016C14.0547 35.9972 13.7116 38.4039 13.3954 40.8136L16.3699 41.2039ZM15.4499 48.6266C15.7486 46.1458 16.0461 43.6741 16.3699 41.2037L13.3954 40.8138C13.0692 43.3025 12.7698 45.7898 12.4714 48.2681L15.4499 48.6266ZM15.4004 49.0381L15.4499 48.6266L12.4714 48.2681L12.4219 48.6795L15.4004 49.0381ZM12.1912 52.456C14.0099 52.1764 15.1927 50.7711 15.4005 49.0373L12.4218 48.6804C12.3572 49.2198 12.086 49.4369 11.7352 49.4909L12.1912 52.456ZM9.78731 52.0193C10.5176 52.4309 11.3655 52.5844 12.1937 52.4556L11.7327 49.4913C11.5697 49.5166 11.4031 49.4863 11.2602 49.4057L9.78731 52.0193ZM8.16888 50.1851C8.48621 50.9617 9.05686 51.6076 9.7873 52.0193L11.2602 49.4057C11.1173 49.3252 11.007 49.1997 10.946 49.0503L8.16888 50.1851ZM7.87368 48.6665C7.87723 49.1779 7.97405 49.6843 8.1593 50.161L10.9556 49.0743C10.9024 48.9374 10.8746 48.7922 10.8736 48.6456L7.87368 48.6665ZM7.80589 42.4404C7.82657 44.5171 7.84728 46.5962 7.87376 48.6751L10.8735 48.6369C10.8471 46.5628 10.8264 44.4879 10.8057 42.4106L7.80589 42.4404ZM7.80606 42.4521L7.80606 42.4523L10.8056 '
            + '42.3987L10.8056 42.3986L7.80606 42.4521ZM7.80605 42.452L7.80606 42.4521L10.8056 42.3986L10.8056 42.3984L7.80605 42.452ZM7.80605 42.4518L7.80605 42.452L10.8056 42.3984L10.8056 42.3982L7.80605 42.4518ZM7.7441 36.6917C7.76771 38.6066 7.78679 40.5222 7.80589 42.44L10.8057 42.4101C10.7866 40.493 10.7675 38.5738 10.7439 36.6547L7.7441 36.6917ZM7.66555 32.7229C7.69665 34.0508 7.72752 35.3695 7.74411 36.692L10.7439 36.6544C10.727 35.3128 10.6958 33.9779 10.6647 32.6527L7.66555 32.7229ZM7.66514 32.6877V32.6878H10.6651V32.6877H7.66514ZM7.66514 32.6877V32.6877H10.6651V32.6877H7.66514ZM7.66514 32.6876V32.6877H10.6651V32.6876H7.66514ZM7.66557 32.7237L7.6656 32.7247L10.6647 32.6506L10.6647 32.6495L7.66557 32.7237ZM7.62288 30.835C7.6361 31.4652 7.65084 32.0945 7.66552 32.7217L10.6647 32.6515C10.65 32.0237 10.6353 31.398 10.6222 30.7721L7.62288 30.835ZM7.62188 30.604C7.62126 30.6603 7.61982 30.7599 7.62363 30.8604L10.6215 30.7468C10.621 30.7335 10.6209 30.7107 10.6217 30.6371L7.62188 30.604ZM7.62255 30.5158C7.62255 30.5421 7.62227 30.5689 7.62188 30.6039L10.6217 30.6372C10.6221 30.6043 10.6226 30.5613 10.6226 30.5158H7.62255ZM20.4995 15.5094C20.3687 15.2913 20.2458 15.0863 20.1278 14.8813L17.5282 16.3786C17.6615 16.6101 17.7979 16.8375 17.9264 17.0519L20.4995 15.5094ZM21.4074 17.1388C21.1234 16.5483 20.7902 15.9945 20.4995 15.5094L17.9264 17.0519C18.2293 17.5571 18.4895 17.9933 18.7036 18.4387L21.4074 17.1388ZM21.8236 17.7311C21.6541 17.5747 21.5185 17.386 21.4248 17.1764L18.6861 18.401C18.946 18.9823 19.3215 19.5045 19.7895 19.9362L21.8236 17.7311ZM22.4115 18.0857C22.1931 18.0083 21.9932 17.8875 21.8236 17.7311L19.7895 19.9362C20.2575 20.3679 20.8082 20.7001 21.4083 20.9131L22.4115 18.0857ZM25.9351 19.5971C24.8147 19.0902 23.6482 18.562 22.4496 18.0998L21.3702 20.899C22.476 21.3253 23.5651 21.8176 24.6986 22.3304L25.9351 19.5971ZM27.1861 20.1591C26.7712 19.9753 26.3563 19.7877 25.9351 19.5971L24.6986 22.3304C25.118 22.5202 25.5436 22.7127 25.9712 22.9021L27.1861 20.1591ZM28.6057 21.3496C28.2534 20.8036 27.7403 20.3809 27.138 20.1388L26.0193 22.9224C26.0471 22.9336 26.0697 22.9526 26.0848 22.9761L28.6057 21.3496ZM29.1028 23.1874C29.1319 22.5378 28.958 21.8957 28.6057 21.3496L26.0848 22.9761C26.0999 22.9994 26.107 23.0263 26.1058 23.0532L29.1028 23.1874ZM28.4165 24.9932C28.8343 24.4796 29.0754 23.8448 29.103 23.1829L26.1056 23.0576C26.105 23.0725 26.0996 23.0873 26.0894 23.0999L28.4165 24.9932ZM26.786 26.0344C27.4268 25.8714 27.9988 25.5066 28.4165 24.9932L26.0894 23.0999C26.079 23.1126 26.0641 23.1225 26.0464 23.127L26.786 26.0344ZM25.1476 26.0284C25.6735 26.1589 26.2228 26.1638 26.751 26.0429L26.0814 23.1186C26.0117 23.1345 25.9392 23.1339 25.8698 23.1166L25.1476 26.0284ZM20.6463 24.7596C22.1276 25.1821 23.6167 25.6067 25.1099 26.0185L25.9075 23.1265C24.429 22.7188 22.9525 22.2977 21.4691 21.8746L20.6463 24.7596ZM20.6542 24.7619L20.6545 24.7619L21.4609 21.8723L21.4606 21.8723L20.6542 24.7619ZM20.6433 24.7588L20.6453 24.7593L21.4695 21.8748L21.4675 21.8742L20.6433 24.7588ZM18.6178 24.1824C19.2926 24.3736 19.9675 24.566 20.644 24.759L21.4668 21.874C20.7907 21.6812 20.1132 21.488 19.4353 21.296L18.6178 24.1824ZM17.2295 22.4013C17.2266 22.8066 17.3468 23.3427 17.8082 23.7575C18.1549 24.0691 18.5654 24.1675 18.614 24.1814L19.4391 21.297C19.4015 21.2863 19.4348 21.2941 19.4873 21.3163C19.545 21.3406 19.6748 21.4015 19.8137 21.5263C19.9654 21.6627 20.0842 21.8359 20.1559 22.0282C20.222 22.2055 20.23 22.3507 20.2295 22.4229L17.2295 22.4013ZM17.2317 18.0234C17.2339 19.4879 17.2361 20.9474 17.2295 22.4054L20.2295 22.4188C20.2361 20.9504 20.2339 19.4819 20.2317 18.019L17.2317 18.0234ZM17.2317 18.0194L17.2317 18.0234L20.2317 18.0191L20.2317 18.0151L17.2317 18.0194ZM17.2295 15.8262C17.2295 16.5577 17.2306 17.2892 17.2317 18.0194L20.2317 18.015C20.2306 17.2843 20.2295 16.5551 20.2295 15.8262H17.2295ZM17.2517 15.527C17.2495 15.544 17.2295 15.676 17.2295 15.8262H20.2295C20.2295 15.8745 20.2264 15.9104 20.2248 15.9262C20.224 15.9342 20.2234 15.939 20.2234 15.9386C20.2236 15.9374 20.2238 15.9352 20.2251 15.9258L17.2517 15.527ZM17.2514 15.5341C17.2524 15.5223 17.2534 15.5147 17.2535 15.5137C17.2536 15.5131 17.2535 15.5137 17.2532 15.516C17.2529 15.5186 17.2525 15.5215 17.2517 15.5271L20.2251 15.9257C20.2272 15.91 20.235 15.8542 20.2404 15.7912L17.2514 15.5341ZM18.2725 14.2366L18.1905 14.2693L19.3013 17.056L19.3834 17.0233L18.2725 14.2366ZM27.5963 58.5H16.9219V61.5H27.5963V58.5ZM27.183 58.6715C27.2904 58.5632 27.4388 58.5 27.5963 58.5V61.5C28.2427 61.5 28.8601 61.2409 29.3133 60.7838L27.183 58.6715ZM27.0182 59.0702C27.0182 58.9231 27.076 58.7794 27.183 58.6715L29.3133 60.7838C29.7661 60.3272 30.0182 59.7105 30.0182 59.0702H27.0182ZM27.0182 52.6668V59.0702H30.0182V52.6668H27.0182ZM36.791 51.1668H28.5182V54.1668H36.791V51.1668ZM36.3778 51.3383C36.4852 51.23 36.6336 51.1668 36.791 51.1668V54.1668C37.4375 54.1668 38.0549 53.9076 38.5081 53.4506L36.3778 51.3383ZM36.2129 51.737C36.2129 51.5898 36.2708 51.4462 36.3778 51.3383L38.5081 53.4506C38.9608 52.994 39.2129 52.3773 39.2129 51.737H36.2129ZM36.2129 46.6667V51.737H39.2129V46.6667H36.2129ZM46.4768 45.1667H37.7129V48.1667H46.4768V45.1667ZM46.0635 45.3382C46.171 45.2299 46.3194 45.1667 46.4768 45.1667V48.1667C47.1233 48.1667 47.7407 47.9076 48.1938 47.4505L46.0635 45.3382ZM45.8987 45.7369C45.8987 45.5898 45.9566 45.4461 46.0635 45.3382L48.1938 47.4505C48.6466 46.9939 48.8987 46.3772 48.8987 45.7369H45.8987ZM45.8987 40.9355V45.7369H48.8987V40.9355H45.8987ZM55.0781 39.4355H47.3987V42.4355H55.0781V39.4355ZM54.8541 39.4806C54.9256 39.4508 55.0027 39.4354 55.0808 39.4356L55.0754 42.4355C55.3957 42.4361 55.7127 42.3729 56.0081 42.2498L54.8541 39.4806ZM54.6653 39.6075C54.7187 39.5537 54.7827 39.5104 54.8542 39.4806L56.0081 42.2498C56.3034 42.1268 56.5709 41.9464 56.7956 41.7199L54.6653 39.6075ZM54.5422 39.7932C54.5703 39.7246 54.612 39.6614 54.6653 39.6076L56.7956 41.7198C57.0202 41.4933 57.1977 41.2249 57.3183 40.9305L54.5422 39.7932ZM54.5 40.0084C54.4999 39.9348 54.5141 39.8617 54.5422 39.7932L57.3183 40.9305C57.4389 40.6361 57.5006 40.3211 57.5 40.0032L54.5 40.0084ZM54.5 37.9298V40.0058H57.5V37.9298H54.5ZM54.6648 38.3285C54.5578 38.2206 54.5 38.0769 54.5 37.9298H57.5C57.5 37.2895 57.2479 36.6728 56.7951 36.2162L54.6648 38.3285ZM55.0781 38.5C54.9206 38.5 54.7722 38.4368 54.6648 38.3285L56.7951 36.2162C56.3419 35.7591 55.7245 35.5 55.0781 35.5V38.5ZM44.4184 38.5H55.0781V35.5H44.4184V38.5ZM44.8316 38.3285C44.7242 38.4368 44.5758 38.5 44.4184 38.5V35.5C43.7719 35.5 43.1545 35.7591 42.7013 36.2162L44.8316 38.3285ZM44.9964 37.9298C44.9964 38.0769 44.9386 38.2206 44.8316 38.3285L42.7013 36.2162C42.2485 36.6728 41.9964 37.2895 41.9964 37.9298H44.9964ZM44.9964 42.7311V37.9298H41.9964V42.7311H44.9964ZM34.7326 44.2311H43.4964V41.2311H34.7326V44.2311ZM35.1458 44.0596C35.0384 44.1679 34.89 44.2311 34.7326 44.2311V41.2311C34.0861 41.2311 33.4687 41.4903 33.0155 41.9473L35.1458 44.0596ZM35.3107 43.6609C35.3107 43.8081 35.2528 43.9517 35.1458 44.0596L33.0155 41.9473C32.5628 42.4039 32.3107 43.0206 32.3107 43.6609H35.3107ZM35.3107 48.7312V43.6609H32.3107V48.7312H35.3107ZM25.5378 50.2312H33.8107V47.2312H25.5378V50.2312ZM25.9511 50.0597C25.8437 50.168 25.6953 50.2312 25.5378 50.2312V47.2312C24.8913 47.2312 24.274 47.4903 23.8208 47.9474L25.9511 50.0597ZM26.1159 49.661C26.1159 49.8081 26.0581 49.9518 25.9511 50.0597L23.8208 47.9474C23.368 48.404 23.1159 49.0207 23.1159 49.661H26.1159ZM26.1159 56.0645V49.661H23.1159V56.0645H26.1159ZM16.9219 57.5645H24.6159V54.5645H16.9219V57.5645ZM17.1456 57.5195C17.0742 57.5492 16.9972 57.5646 16.9192 57.5644L16.9246 54.5645C16.6046 54.5639 16.288 54.627 15.9929 54.7498L17.1456 57.5195ZM17.3344 57.3928C17.281 57.4465 17.217 57.4898 17.1456 57.5195L15.9929 54.7498C15.6978 54.8726 15.4305 55.0525 15.2059 55.2786L17.3344 57.3928ZM17.4575 57.2075C17.4293 57.2761 17.3876 57.3392 17.3343 57.3928L15.2059 55.2786C14.9813 55.5047 14.8038 55.7725 14.6829 56.0665L17.4575 57.2075ZM17.5 56.9926C17.5 57.0659 17.4857 57.139 17.4575 57.2075L14.6829 56.0665C14.562 56.3605 14.5 56.6752 14.5 56.9926H17.5ZM17.5 59.0702V56.9926H14.5V59.0702H17.5ZM17.3352 58.6715C17.4422 58.7794 17.5 58.9231 17.5 59.0702H14.5C14.5 59.7105 14.7521 60.3272 15.2049 60.7838L17.3352 58.6715ZM16.9219 58.5C17.0794 58.5 17.2278 58.5632 17.3352 58.6715L15.2049 60.7838C15.6581 61.2409 16.2754 61.5 16.9219 61.5V58.5Z" fill="white" mask="url(#path-1-inside-1_240_3251)"/>'
            + '</svg>'
            );

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

        case 'skDirectory': {

            resetPage();

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            $('.navmenu .navgroup .navbox #navDirectory ').css('pointer-events', 'none');

            $('.navmenu #navDirectory .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="white"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="#0077C1"/>' +
            '</svg>'
            );

            $('.navmenu #navDirectory .navborder').css({'box-shadow':'0px 4px 20px rgba(0, 119, 193, 0.4)', 'border-radius':'24px'});

            $('.navmenu #navDirectory .navlogo').html('<svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">'
            + '<mask id="path-1-inside-1_206_3259" fill="white">'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3628 37.2006C30.7321 40.1988 26.0764 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21C42 25.4845 40.5943 29.6407 38.1996 33.052L53.8075 49.035C54.5695 49.8153 54.5659 51.0621 53.7994 51.8379L52.6443 53.0072C51.8581 53.803 50.5721 53.7993 49.7905 52.999L34.3628 37.2006ZM36 21C36 29.2843 29.2843 36 21 36C12.7157 36 6 29.2843 6 21C6 12.7157 12.7157 6 21 6C29.2843 6 36 12.7157 36 21Z"/>'
            + '</mask>'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M34.3628 37.2006C30.7321 40.1988 26.0764 42 21 42C9.40202 42 0 32.598 0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21C42 25.4845 40.5943 29.6407 38.1996 33.052L53.8075 49.035C54.5695 49.8153 54.5659 51.0621 53.7994 51.8379L52.6443 53.0072C51.8581 53.803 50.5721 53.7993 49.7905 52.999L34.3628 37.2006ZM36 21C36 29.2843 29.2843 36 21 36C12.7157 36 6 29.2843 6 21C6 12.7157 12.7157 6 21 6C29.2843 6 36 12.7157 36 21Z" fill="white"/>'
            + '<path d="M34.3628 37.2006L35.436 36.1526L34.4718 35.1652L33.4077 36.044L34.3628 37.2006ZM38.1996 33.052L36.9719 32.1901L36.2565 33.2092L37.1264 34.1L38.1996 33.052ZM53.8075 49.035L54.8807 47.987L53.8075 49.035ZM53.7994 51.8379L52.7323 50.7837L52.7323 50.7837L53.7994 51.8379ZM52.6443 53.0072L51.5771 51.9531L52.6443 53.0072ZM49.7905 52.999L48.7174 54.047L49.7905 52.999ZM21 43.5C26.4377 43.5 31.4283 41.5692 35.318 38.3572L33.4077 36.044C30.0359 38.8284 25.7151 40.5 21 40.5V43.5ZM-1.5 21C-1.5 33.4264 8.57359 43.5 21 43.5V40.5C10.2304 40.5 1.5 31.7696 1.5 21H-1.5ZM21 -1.5C8.57359 -1.5 -1.5 8.57359 -1.5 21H1.5C1.5 10.2304 10.2304 1.5 21 1.5V-1.5ZM43.5 21C43.5 8.57359 33.4264 -1.5 21 -1.5V1.5C31.7696 1.5 40.5 10.2304 40.5 21H43.5ZM39.4272 33.9138C41.9935 30.2583 43.5 25.8029 43.5 21H40.5C40.5 25.1662 39.1952 29.0231 36.9719 32.1901L39.4272 33.9138ZM54.8807 47.987L39.2727 32.004L37.1264 34.1L52.7343 50.083L54.8807 47.987ZM54.8665 52.8921C56.2078 51.5344 56.2141 49.3525 54.8807 47.987L52.7343 50.083C52.9248 50.2781 52.9239 50.5898 52.7323 50.7837L54.8665 52.8921ZM53.7114 54.0614L54.8665 52.8921L52.7323 50.7837L51.5771 51.9531L53.7114 54.0614ZM48.7174 54.047C50.0851 55.4476 52.3356 55.4541 53.7114 54.0614L51.5771 51.9531C51.3806 52.152 51.0591 52.1511 50.8637 51.951L48.7174 54.047ZM33.2897 38.2486L48.7174 54.047L50.8637 51.951L35.436 36.1526L33.2897 38.2486ZM21 37.5C30.1127 37.5 37.5 30.1127 37.5 21H34.5C34.5 28.4558 28.4558 34.5 21 34.5V37.5ZM4.5 21C4.5 30.1127 11.8873 37.5 21 37.5V34.5C13.5442 34.5 7.5 28.4558 7.5 21H4.5ZM21 4.5C11.8873 4.5 4.5 11.8873 4.5 21H7.5C7.5 13.5442 13.5442 7.5 21 7.5V4.5ZM37.5 21C37.5 11.8873 30.1127 4.5 21 4.5V7.5C28.4558 7.5 34.5 13.5442 34.5 21H37.5Z" fill="white" mask="url(#path-1-inside-1_206_3259)"/>'
            + '</svg>'
            );
            
            $('#skDirectory .closebtnholder').trigger('click'); // reset keyboard

            $('#skDirectory .menuDirectory #btnall').trigger('click'); // default selection

            $('#skDirectory .searchBarBox .closebtn').hide();

            createCategorybtn('skDirectory', categoryArray, 3);

            break;
        }

        case 'skDining': {

            resetPage();

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            $('.navmenu .navgroup .navbox #navDining ').css('pointer-events', 'none');

            $('.navmenu #navDining .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="white"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="#0077C1"/>' +
            '</svg>'
            );

            $('.navmenu #navDining .navborder').css({'box-shadow':'0px 4px 20px rgba(0, 119, 193, 0.4)', 'border-radius':'24px'});

            $('.navmenu #navDining .navlogo').html('<svg width="40" height="62" viewBox="0 0 40 62" fill="none" xmlns="http://www.w3.org/2000/svg">'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M16 12.4454C16 6.12432 12.6421 1 8.5 1C4.35787 1 1 6.12432 1 12.4454C1 17.3683 3.03668 21.5652 5.89435 23.181C6.33824 23.4321 6.61132 23.9372 6.59629 24.4817L5.67635 57.9553C5.67635 59.6369 6.92791 61 8.47178 61H8.52822C10.0721 61 11.3237 59.6369 11.3237 57.9553L10.4036 24.4817C10.3887 23.9372 10.6618 23.4321 11.1057 23.181C13.9633 21.5652 16 17.3683 16 12.4454Z" fill="white"/>'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7286 1H37.707C37.1153 1 36.6355 1.4413 36.6355 1.98568V14.375C36.6355 14.9067 36.167 15.3377 35.5892 15.3377H35.5679C34.99 15.3377 34.5214 14.9067 34.5214 14.375V1.98555C34.5214 1.4413 34.0416 1 33.45 1H33.4284C32.8368 1 32.357 1.4413 32.357 1.98568V14.375C32.357 14.9067 31.8884 15.3377 31.3105 15.3377H31.2893C30.7113 15.3377 30.2429 14.9067 30.2429 14.375V1.98555C30.2429 1.4413 29.7631 1 29.1714 1H29.1499C28.5581 1 28.0785 1.4413 28.0785 1.98568V14.375C28.0785 14.9067 27.6099 15.3377 27.032 15.3377H27.0107C26.4328 15.3377 25.9643 14.9067 25.9643 14.375V1.98555C25.9643 1.4413 25.4846 1 24.8929 1H24.8713C24.2796 1 23.7998 1.4413 23.7998 1.98568V15.3377V18.1088V18.1652C23.7998 20.6387 25.5501 22.736 27.973 23.4666C28.6185 23.6611 29.0409 24.2318 29.0205 24.8565L27.9439 57.9432C27.9439 59.6315 29.4315 61 31.2664 61H31.3335C33.1684 61 34.6559 59.6315 34.6559 57.9432L33.5794 24.8565C33.559 24.2318 33.9814 23.6611 34.6267 23.4666C37.0498 22.736 38.7998 20.6387 38.7998 18.1652V18.1088V15.3377V1.98555C38.7998 1.4413 38.3203 1 37.7286 1Z" fill="white"/>'
            + '<path d="M16 12.4454C16 6.12432 12.6421 1 8.5 1C4.35787 1 1 6.12432 1 12.4454C1 17.3683 3.03668 21.5652 5.89435 23.181C6.33824 23.4321 6.61132 23.9372 6.59629 24.4817L5.67635 57.9553C5.67635 59.6369 6.92791 61 8.47178 61H8.52822C10.0721 61 11.3237 59.6369 11.3237 57.9553L10.4036 24.4817C10.3887 23.9372 10.6618 23.4321 11.1057 23.181C13.9633 21.5652 16 17.3683 16 12.4454" stroke="white" stroke-width="1.5"/>'
            + '<path d="M37.7286 1H37.707C37.1153 1 36.6355 1.4413 36.6355 1.98568V14.375C36.6355 14.9067 36.167 15.3377 35.5892 15.3377H35.5679C34.99 15.3377 34.5214 14.9067 34.5214 14.375V1.98555C34.5214 1.4413 34.0416 1 33.45 1H33.4284C32.8368 1 32.357 1.4413 32.357 1.98568V14.375C32.357 14.9067 31.8884 15.3377 31.3105 15.3377H31.2893C30.7113 15.3377 30.2429 14.9067 30.2429 14.375V1.98555C30.2429 1.4413 29.7631 1 29.1714 1H29.1499C28.5581 1 28.0785 1.4413 28.0785 1.98568V14.375C28.0785 14.9067 27.6099 15.3377 27.032 15.3377H27.0107C26.4328 15.3377 25.9643 14.9067 25.9643 14.375V1.98555C25.9643 1.4413 25.4846 1 24.8929 1H24.8713C24.2796 1 23.7998 1.4413 23.7998 1.98568V15.3377V18.1088V18.1652C23.7998 20.6387 25.5501 22.736 27.973 23.4666C28.6185 23.6611 29.0409 24.2318 29.0205 24.8565L27.9439 57.9432C27.9439 59.6315 29.4315 61 31.2664 61H31.3335C33.1684 61 34.6559 59.6315 34.6559 57.9432L33.5794 24.8565C33.559 24.2318 33.9814 23.6611 34.6267 23.4666C37.0498 22.736 38.7998 20.6387 38.7998 18.1652V18.1088V15.3377V1.98555C38.7998 1.4413 38.3203 1 37.7286 1" stroke="white" stroke-width="1.5"/>'
            + '</svg>'
            );

            $('#skDiningLanding #skDiningContainer').html("");

            createDiningLanding(diningsubcategoryLandingArray);

            // SwiperDining.slideTo(0,1,true);
            $('#skDining .closebtnholder').trigger('click'); // reset keyboard

            $('#skDining .searchBarBox .closebtn').hide();

            createSubCategorybtn('skDining', diningsubcategory, 3); // dining sub category

            break;
        }

        case 'skHappenings': {

            resetPage();

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log('null');
            }
            else {
                myGameInstance.SendMessage('MainCamera', 'QuickReset');
            }

            $('.navmenu .navgroup .navbox #navHappenings ').css('pointer-events', 'none');

            $('.navmenu #navHappenings .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="white"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="#0077C1"/>' +
            '</svg>'
            );

            $('.navmenu #navHappenings .navborder').css({'box-shadow':'0px 4px 20px rgba(0, 119, 193, 0.4)', 'border-radius':'24px'});

            $('.navmenu #navHappenings .navlogo').html('<svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">'
            +'<path fill-rule="evenodd" clip-rule="evenodd" d="M29.41 9.66844C31.418 7.10844 33.572 5.35144 35.171 4.96744C35.378 4.91744 35.569 4.89144 35.748 4.89144C36.32 4.89144 36.767 5.15144 37.209 5.71444C38.038 6.76944 37.899 7.42944 37.654 7.93544C36.61 10.0804 31.954 12.1944 27.231 12.9184C27.796 11.9114 28.525 10.7964 29.41 9.66844M10.246 7.93544C10 7.42944 9.861 6.76944 10.69 5.71444C11.132 5.15144 11.579 4.89144 12.151 4.89144C12.33 4.89144 12.521 4.91744 12.727 4.96744C14.327 5.35044 16.481 7.10744 18.489 9.66844C19.374 10.7964 20.103 11.9114 20.668 12.9174C15.945 12.1934 11.288 10.0804 10.246 7.93544M44.395 15.3664H33.289C33.479 15.2984 33.678 15.2434 33.865 15.1714C36.443 14.1814 39.801 12.4174 41.153 9.63644C42.16 7.56444 41.846 5.31744 40.27 3.31044C38.748 1.37344 36.614 0.620441 34.263 1.18344C30.263 2.14344 26.262 6.75544 23.95 10.8264C21.637 6.75544 17.636 2.14244 13.635 1.18344C11.284 0.616441 9.15 1.37444 7.63 3.31044C6.053 5.31744 5.739 7.56444 6.746 9.63644C8.098 12.4174 11.456 14.1814 14.035 15.1714C14.213 15.2404 14.398 15.3014 14.579 15.3664H3.498C2.118 15.3664 1 16.4854 1 17.8654V27.7904H21.353V16.9244C22.238 17.0194 23.109 17.0714 23.947 17.0714V17.0374H23.952V17.0714C24.354 17.0714 24.764 17.0594 25.178 17.0374H25.181V17.0374C25.626 17.0134 26.085 16.9554 26.541 16.9074V27.7904H46.894V17.8654C46.894 16.4854 45.775 15.3664 44.395 15.3664" fill="white"/>'
            +'<path fill-rule="evenodd" clip-rule="evenodd" d="M41.706 51.2759H26.541V30.0879H44.206V48.7759C44.206 50.1569 43.086 51.2759 41.706 51.2759" fill="white"/>'
            +'<path fill-rule="evenodd" clip-rule="evenodd" d="M6.18774 51.2759H21.3527V30.0879H3.68774V48.7759C3.68774 50.1569 4.80674 51.2759 6.18774 51.2759" fill="white"/>'
            +'<path d="M35.171 4.96744L35.3461 5.69671L35.3471 5.69648L35.171 4.96744ZM37.209 5.71444L36.6191 6.17758L36.6193 6.17783L37.209 5.71444ZM37.654 7.93544L38.3284 8.26366L38.329 8.26229L37.654 7.93544ZM27.231 12.9184L26.5769 12.5515L25.8243 13.8928L27.3446 13.6598L27.231 12.9184ZM10.69 5.71444L11.2797 6.17783L11.2799 6.17758L10.69 5.71444ZM12.727 4.96744L12.5501 5.69628L12.5524 5.69684L12.727 4.96744ZM18.489 9.66844L17.8988 10.1312L17.8989 10.1314L18.489 9.66844ZM20.668 12.9174L20.5544 13.6588L22.0755 13.892L21.3219 12.5502L20.668 12.9174ZM33.289 15.3664L33.0363 14.6603L33.289 16.1164V15.3664ZM33.865 15.1714L33.5961 14.4713L33.5955 14.4715L33.865 15.1714ZM41.153 9.63644L41.8275 9.96436L41.8276 9.96428L41.153 9.63644ZM40.27 3.31044L40.8599 2.84724L40.8597 2.84706L40.27 3.31044ZM34.263 1.18344L34.0883 0.454063L34.088 0.454151L34.263 1.18344ZM23.95 10.8264L23.2979 11.1969L23.9501 12.3449L24.6022 11.1968L23.95 10.8264ZM13.635 1.18344L13.4592 1.91254L13.4602 1.91278L13.635 1.18344ZM7.63 3.31044L8.21973 3.77382L8.21991 3.77359L7.63 3.31044ZM6.746 9.63644L6.07145 9.96428L6.07149 9.96436L6.746 9.63644ZM14.035 15.1714L14.3061 14.4721L14.3038 14.4713L14.035 15.1714ZM14.579 15.3664V16.1164L14.8325 14.6606L14.579 15.3664ZM1 27.7904H0.25V28.5404H1V27.7904ZM21.353 27.7904V28.5404H22.103V27.7904H21.353ZM21.353 16.9244L21.4331 16.1787L20.603 16.0896V16.9244H21.353ZM23.947 17.0714V17.8214H24.'
            + '697V17.0714H23.947ZM23.947 17.0374V16.2874H23.197V17.0374H23.947ZM23.952 17.0374H24.702V16.2874H23.952V17.0374ZM23.952 17.0714H23.202V17.8214H23.952V17.0714ZM25.178 17.0374V16.2874H25.1581L25.1382 16.2885L25.178 17.0374ZM26.541 16.9074H27.291V16.0744L26.4625 16.1616L26.541 16.9074ZM26.541 27.7904H25.791V28.5404H26.541V27.7904ZM46.894 27.7904V28.5404H47.644V27.7904H46.894ZM30.0001 10.1313C30.9771 8.88577 31.9797 7.84866 32.918 7.08305C33.8681 6.30787 34.7036 5.851 35.3461 5.69671L34.9959 4.23818C34.0394 4.46788 32.9984 5.08152 31.9697 5.92083C30.9293 6.76973 29.8509 7.89111 28.8199 9.20556L30.0001 10.1313ZM35.3471 5.69648C35.5104 5.65702 35.6412 5.64144 35.748 5.64144V4.14144C35.4968 4.14144 35.2456 4.17786 34.9949 4.23841L35.3471 5.69648ZM35.748 5.64144C36.0237 5.64144 36.2727 5.7364 36.6191 6.17758L37.7989 5.25131C37.2613 4.56648 36.6164 4.14144 35.748 4.14144V5.64144ZM36.6193 6.17783C36.9763 6.63215 37.0694 6.93112 37.0884 7.11003C37.1065 7.27995 37.0674 7.42592 36.979 7.6086L38.329 8.26229C38.4856 7.93897 38.6385 7.50193 38.5801 6.9516C38.5226 6.41027 38.2707 5.85173 37.7987 5.25105L36.6193 6.17783ZM36.9796 7.60722C36.7882 8.00054 36.3983 8.45096 35.7887 8.92515C35.1864 9.39363 34.4097 9.85433 33.5027 10.2812C31.6883 11.1352 29.4136 11.8251 27.1174 12.1771L27.3446 13.6598C29.7714 13.2878 32.1862 12.5587 34.1415 11.6384C35.1194 11.1782 35.9977 10.6629 36.7096 10.1091C37.4142 '
            + '9.56105 37.9978 8.94285 38.3284 8.26366L36.9796 7.60722ZM27.8851 13.2854C28.4315 12.3115 29.1392 11.2286 30.0001 10.1314L28.8199 9.20549C27.9108 10.3643 27.1605 11.5114 26.5769 12.5515L27.8851 13.2854ZM10.9205 7.60752C10.8319 7.42516 10.7927 7.27941 10.8107 7.10977C10.8296 6.93106 10.9227 6.63219 11.2797 6.17783L10.1003 5.25105C9.6283 5.8517 9.37637 6.41033 9.31904 6.95186C9.26075 7.50247 9.41414 7.93972 9.57149 8.26337L10.9205 7.60752ZM11.2799 6.17758C11.6263 5.7364 11.8753 5.64144 12.151 5.64144V4.14144C11.2826 4.14144 10.6377 4.56648 10.1001 5.25131L11.2799 6.17758ZM12.151 5.64144C12.2579 5.64144 12.3884 5.65704 12.5501 5.69628L12.9039 4.2386C12.6536 4.17784 12.4021 4.14144 12.151 4.14144V5.64144ZM12.5524 5.69684C13.1952 5.85069 14.0308 6.30721 14.9809 7.08233C15.9193 7.84788 16.9218 8.88518 17.8988 10.1312L19.0792 9.20568C18.0482 7.8907 16.9697 6.76901 15.9291 5.92005C14.9002 5.08068 13.8588 4.46719 12.9016 4.23805L12.5524 5.69684ZM17.8989 10.1314C18.7598 11.2286 19.4675 12.3116 20.0141 13.2847L21.3219 12.5502C20.7385 11.5113 19.9882 10.3643 19.0791 9.20549L17.8989 10.1314ZM20.7816 12.1761C18.4854 11.8241 16.2104 11.1344 14.3959 10.2807C13.4889 9.85392 12.7124 9.39335 12.1104 8.92502C11.501 8.45095 11.1115 8.00074 10.9206 7.60773L9.57139 8.26316C9.90147 8.94264 10.4849 9.56093 11.1893 10.109C11.9012 10.6627 12.7794 11.1778 13.7573 11.6379C15.7126 12.558 18.1276 13.2868 20.5544 '
            + '13.6588L20.7816 12.1761ZM44.395 14.6164H33.289V16.1164H44.395V14.6164ZM33.5417 16.0726C33.6226 16.0437 33.7051 16.0175 33.8084 15.9842C33.9058 15.9528 34.0197 15.9155 34.1345 15.8714L33.5955 14.4715C33.5233 14.4993 33.4442 14.5256 33.3479 14.5567C33.2574 14.5858 33.1455 14.6212 33.0363 14.6603L33.5417 16.0726ZM34.1339 15.8716C35.4555 15.364 36.9975 14.6508 38.3929 13.6941C39.7838 12.7405 41.0741 11.5142 41.8275 9.96436L40.4785 9.30852C39.8799 10.5397 38.8152 11.5859 37.5446 12.457C36.2785 13.3251 34.8525 13.9888 33.5961 14.4713L34.1339 15.8716ZM41.8276 9.96428C42.9761 7.60096 42.5892 5.04947 40.8599 2.84724L39.6801 3.77364C41.1028 5.58541 41.3439 7.52792 40.4784 9.30861L41.8276 9.96428ZM40.8597 2.84706C39.1605 0.68455 36.7301 -0.178575 34.0883 0.454063L34.4377 1.91282C36.4979 1.41946 38.3355 2.06233 39.6803 3.77382L40.8597 2.84706ZM34.088 0.454151C31.8955 0.980335 29.7773 2.48138 27.9443 4.30689C26.1002 6.1434 24.4823 8.37052 23.2978 10.4561L24.6022 11.1968C25.7297 9.21136 27.2683 7.09698 29.0027 5.36974C30.7482 3.6315 32.6305 2.34655 34.438 1.91273L34.088 0.454151ZM24.6021 10.4559C23.4172 8.37048 21.7991 6.14314 19.9547 4.3065C18.1214 2.48086 16.0029 0.979755 13.8098 0.454099L13.4602 1.91278C15.2681 2.34613 17.1506 3.63102 18.8963 5.36938C20.6309 7.09675 22.1698 9.2114 23.2979 11.1969L24.6021 10.4559ZM13.8108 0.454345C11.1672 -0.18323 8.73662 0.686451 7.04009 2.84729L8.21991 3.77359C9.56338 '
            + '2.06243 11.4008 1.41611 13.4592 1.91254L13.8108 0.454345ZM7.04027 2.84706C5.30983 5.04935 4.92285 7.60092 6.07145 9.96428L7.42055 9.30861C6.55515 7.52796 6.79617 5.58554 8.21973 3.77382L7.04027 2.84706ZM6.07149 9.96436C6.82494 11.5142 8.11517 12.7405 9.5063 13.6942C10.9018 14.6509 12.444 15.3641 13.7662 15.8716L14.3038 14.4713C13.047 13.9888 11.6207 13.325 10.3545 12.457C9.08383 11.5859 8.01906 10.5397 7.42051 9.30852L6.07149 9.96436ZM13.7639 15.8707C13.9517 15.9435 14.1715 16.017 14.3255 16.0723L14.8325 14.6606C14.6245 14.5859 14.4743 14.5373 14.3061 14.4721L13.7639 15.8707ZM14.579 14.6164H3.498V16.1164H14.579V14.6164ZM3.498 14.6164C1.7034 14.6164 0.25 16.0716 0.25 17.8654H1.75C1.75 16.8993 2.5326 16.1164 3.498 16.1164V14.6164ZM0.25 17.8654V27.7904H1.75V17.8654H0.25ZM1 28.5404H21.353V27.0404H1V28.5404ZM22.103 27.7904V16.9244H20.603V27.7904H22.103ZM21.273 17.6702C22.1805 17.7676 23.0785 17.8214 23.947 17.8214V16.3214C23.1395 16.3214 22.2955 16.2713 21.4331 16.1787L21.273 17.6702ZM24.697 17.0714V17.0374H23.197V17.0714H24.697ZM23.947 17.7874H23.952V16.2874H23.947V17.7874ZM23.202 17.0374V17.0714H24.702V17.0374H23.202ZM23.952 17.8214C24.3688 17.8214 24.7922 17.809 25.2178 17.7864L25.1382 16.2885C24.7358 16.3099 24.3392 16.3214 23.952 16.3214V17.8214ZM25.178 17.7874H25.181V16.2874H25.178V17.7874ZM25.2214 17.7864C25.6918 17.761 26.1852 17.699 26.6195 17.6533L26.4625 16.1616C25.9848 16.2118 25.5602 16.2659 25.1406 16.2885L25.2214 17.7864ZM25.791 16.9074V27.7904H27.291V16.9074H25.791ZM26.541 28.5404H46.894V27.0404H26.541V28.5404ZM47.644 27.7904V17.8654H46.144V27.7904H47.644ZM47.644 17.8654C47.644 16.0712 46.1892 14.6164 44.395 14.6164V16.1164C45.3608 16.1164 46.144 16.8997 46.144 17.8654H47.644Z" fill="white"/>'
            +'<path d="M41.706 51.2759H26.541V30.0879H44.206V48.7759C44.206 50.1569 43.086 51.2759 41.706 51.2759" stroke="white" stroke-width="1.5"/>'
            +'<path d="M6.1875 51.2759H21.3525V30.0879H3.6875V48.7759C3.6875 50.1569 4.8065 51.2759 6.1875 51.2759" stroke="white" stroke-width="1.5"/>'
            +'</svg>');

            SwiperHappenings.slideTo(0,1,true);

            break;
        }

        case 'skTransport': {

            resetPage();

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }

            $('.navmenu .navgroup .navbox #navTransport').css('pointer-events', 'none');

            $('.navmenu #navTransport .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="white"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="#0077C1"/>' +
            '</svg>'
            );

            $('.navmenu #navTransport .navborder').css({'box-shadow':'0px 4px 20px rgba(0, 119, 193, 0.4)', 'border-radius':'24px'});

            $('.navmenu #navTransport .navlogo').html('<svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">'
            + '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6878 35.5665C10.9072 35.5525 9.42989 37.0323 9.42488 38.8365C9.41861 40.651 10.8684 42.1333 12.6564 42.1409C14.442 42.1486 15.9093 40.6777 15.9206 38.8683C15.9331 37.0628 14.4821 35.5805 12.6878 35.5665ZM35.157 42.1448C36.9463 42.1409 38.3923 40.6688 38.3936 38.8505C38.3961 37.0399 36.9401 35.5639 35.1533 35.5626C33.3702 35.5614 31.9079 37.0183 31.8766 38.8276C31.8453 40.6192 33.3589 42.1499 35.157 42.1448ZM8.35479 27.6089H39.2331V11.2382H8.35479V27.6089ZM45.299 30.655C45.2689 35.2662 45.2213 39.8773 45.18 44.4885C45.1699 45.5841 44.6775 46.1223 43.5899 46.1846C43.0548 46.2152 42.5185 46.1897 41.9221 46.1897C41.9221 47.2038 41.9234 48.1658 41.9221 49.129C41.9209 50.6508 41.1828 51.5593 39.708 51.8964C38.8935 52.0822 38.1142 52.0059 37.3548 51.6674C36.3236 51.2106 35.7936 50.4128 35.7898 49.2664C35.7885 48.2637 35.7898 47.2611 35.7898 46.2203H13.1226C13.1226 47.1873 13.1238 48.1492 13.1226 49.1112C13.1213 50.6075 12.4046 51.5236 10.9736 51.8812C10.1241 52.0937 9.30208 52.0237 8.51268 51.6509C7.5278 51.1839 6.97271 50.4357 7.00278 49.2829C7.02659 48.279 7.00779 47.2738 7.00779 46.1808C6.36374 46.1808 5.74975 46.1299 5.1458 46.1923C3.80506 46.3284 3.09209 45.5026 3.02693 44.2086C2.86404 40.9487 2.66982 37.6901 2.61468 34.4277C2.55579 30.9387 2.63724 27.446 2.67358 23.9545C2.67859 23.5868 2.58712 23.3807 2.25757 23.1974C1.45939 22.7521 1.03838 22.0179 1.02209 21.1043C0.992015 19.4159 0.994521 17.7261 1.01833 16.0376C1.03587 14.8174 1.6912 13.9267 2.8277 13.5845C3.18732 13.475 3.27252 13.288 3.32014 12.9584C3.58578 11.1211 3.81508 9.27484 4.16969 7.45531C4.4015 6.27325 4.69721 5.04283 5.74224 4.27558C6.38504 3.80352 7.08047 3.36326 7.81599 3.07316C10.4824 2.01961 13.2892 1.60226 16.1236 1.33124C20.469 0.915166 24.8183 0.899897 29.1676 1.23581C32.7124 1.51065 36.2284 1.99416 39.6015 3.19658C40.9234 3.66737 42.3256 4.22977 42.9233 5.61796C43.4997 6.9578 43.833 8.41597 44.1638 9.84869C44.4044 10.8959 44.4795 11.9838 44.6061 13.0577C44.6399 13.3452 44.7276 13.4649 45.0258 13.5361C46.1962 13.8199 46.953 14.7525 46.9743 15.9931C47.0069 17.7007 47.0106 19.4095 46.9731 21.1171C46.948 22.2915 46.2425 23.018 45.3028 23.4456C45.3028 25.9128 45.3166 28.2832 45.299 30.655Z" fill="white"/>'
            + '<path d="M9.42488 38.8365L10.1749 38.8391L10.1749 38.8386L9.42488 38.8365ZM12.6564 42.1409L12.6596 41.391H12.6596L12.6564 42.1409ZM15.9206 38.8683L15.1706 38.8631L15.1706 38.8637L15.9206 38.8683ZM38.3936 38.8505L37.6436 38.8495L37.6436 38.85L38.3936 38.8505ZM35.1533 35.5626L35.1527 36.3126H35.1527L35.1533 35.5626ZM31.8766 38.8276L32.6265 38.8407L32.6265 38.8406L31.8766 38.8276ZM8.35479 27.6089H7.60479V28.3589H8.35479V27.6089ZM39.2331 27.6089V28.3589H39.9831V27.6089H39.2331ZM39.2331 11.2382H39.9831V10.4882H39.2331V11.2382ZM8.35479 11.2382V10.4882H7.60479V11.2382H8.35479ZM45.299 30.655L44.549 30.6494L44.549 30.6501L45.299 30.655ZM45.18 44.4885L45.9299 44.4954V44.4953L45.18 44.4885ZM43.5899 46.1846L43.6326 46.9334L43.6328 46.9334L43.5899 46.1846ZM41.9221 46.1897V45.4397H41.1721V46.1897H41.9221ZM41.9221 49.129L41.1721 49.128V49.1284L41.9221 49.129ZM39.708 51.8964L39.8748 52.6277L39.8752 52.6276L39.708 51.8964ZM37.3548 51.6674L37.6602 50.9824L37.6586 50.9817L37.3548 51.6674ZM35.7898 49.2664L35.0398 49.2673L35.0398 49.2689L35.7898 49.2664ZM35.7898 46.2203H36.5398V45.4703H35.7898V46.2203ZM13.1226 46.2203V45.4703H12.3726V46.2203H13.1226ZM13.1226 49.1112L12.3726 49.1102L12.3726 49.1105L13.1226 49.1112ZM10.9736 51.8812L10.7918 51.1535L10.7916 51.1536L10.9736 51.8812ZM8.51268 51.6509L8.19136 52.3286L8.19239 52.329L8.51268 51.6509ZM7.00278 49.2829L7.75253 49.3025L7.75257 49.3007L7.00278 49.2829ZM7.00779 46.1808H7.75779V45.4308H7.00779V46.1808ZM5.1458 46.1923L5.22157 46.9384L5.22281 46.9383L5.1458 46.1923ZM3.02693 44.2086L2.27786 44.246L2.27788 44.2463L3.02693 44.2086ZM2.61468 34.4277L1.86479 34.4403L1.86479 34.4403L2.61468 34.4277ZM2.67358 23.9545L1.92364 23.9443L1.92362 23.9467L2.67358 23.9545ZM2.25757 23.1974L1.89214 23.8524L1.89312 23.8529L2.25757 23.1974ZM1.02209 21.1043L0.272206 21.1177L0.272206 21.1177L1.02209 21.1043ZM1.01833 16.0376L0.268406 16.0269L0.268403 16.0271L1.01833 16.0376ZM2.8277 13.5845L3.04398 14.3026L3.04603 14.302L2.8277 13.5845ZM3.32014 12.9584L2.57785 12.8511L2.57784 12.8512L3.32014 12.9584ZM4.16969 7.45531L3.43371 7.31097L3.43354 7.31184L4.16969 7.45531ZM5.74224 4.27558L6.1861 4.88013L6.18617 4.88008L5.74224 4.27558ZM7.81599 3.07316L8.09118 3.77085L8.0916 3.77068L7.81599 3.07316ZM16.1236 1.33124L16.1949 2.07784L16.195 2.07783L16.1236 1.33124ZM29.1676 1.23581L29.2255 0.488055L29.2253 0.488038L29.1676 1.23581ZM39.6015 3.19658L39.3497 3.90304L39.3499 3.90311L39.6015 3.19658ZM42.9233 5.61796L43.6122 5.32157L43.6121 5.32136L42.9233 5.61796ZM44.1638 9.84869L44.8947 9.68076L44.8945 9.67996L44.1638 9.84869ZM44.6061 13.0577L45.3509 12.9701L45.3509 12.9699L44.6061 13.0577ZM45.0258 13.5361L45.2026 12.8072L45.2001 12.8066L45.0258 13.5361ZM46.9743 15.9931L46.2244 16.006L46.2244 16.0074L46.9743 15.9931ZM46.9731 21.1171L46.2232 21.1006L46.2232 21.1011L46.9731 21.1171ZM45.3028 23.4456L44.9922 22.7629L44.5528 22.9628V23.4456H45.3028ZM12.6937 34.8165C10.4885 34.7991 8.68102 36.6235 8.67488 38.8344L10.1749 38.8386C10.1788 37.441 11.326 36.3058 12.6819 36.3164L12.6937 34.8165ZM8.67488 38.8339C8.66722 41.052 10.4409 42.8815 12.6532 42.8909L12.6596 41.391C11.2958 41.3851 10.17 40.2499 10.1749 38.8391L8.67488 38.8339ZM12.6532 42.8909C14.8616 42.9004 16.6568 41.0867 16.6705 38.873L15.1706 38.8637C15.1618 40.2686 14.0224 41.3968 12.6596 41.391L12.6532 42.8909ZM16.6705 38.8735C16.6859 36.6586 14.9065 34.8337 12.6936 34.8165L12.6819 36.3164C14.0577 36.3272 15.1803 37.467 15.1706 38.8631L16.6705 38.8735ZM35.1586 42.8948C37.3728 42.89 39.1421 41.0711 39.1436 38.851L37.6436 38.85C37.6426 40.2664 36.5199 41.3919 35.1554 41.3948L35.1586 42.8948ZM39.1436 38.8516C39.1466 36.6352 37.3636 34.8142 35.1538 34.8126L35.1527 36.3126C36.5165 36.3136 37.6455 37.4446 37.6436 38.8495L39.1436 38.8516ZM35.1538 34.8126C32.9513 34.8111 31.1649 36.6061 31.1267 38.8146L32.6265 38.8406C32.6509 37.4304 33.7891 36.3117 35.1527 36.3126L35.1538 34.8126ZM31.1267 38.8145C31.088 41.0287 32.9434 42.901 35.1591 42.8948L35.1549 41.3948C33.7745 41.3987 32.6025 40.2097 32.6265 38.8407L31.1267 38.8145ZM8.35479 28.3589H39.2331V26.8589H8.35479V28.3589ZM39.9831 27.6089V11.2382H38.4831V27.6089H39.9831ZM39.2331 10.4882H8.35479V11.9882H39.2331V10.4882ZM7.60479 11.2382V27.6089H9.10479V11.2382H7.60479ZM44.549 30.6501C44.519 35.2601 44.4714 39.8693 44.43 44.4818L45.9299 44.4953C45.9713 39.8854 46.0189 35.2723 46.049 30.6599L44.549 30.6501ZM44.43 44.4817C44.4259 44.9305 44.3233 45.1238 44.2404 45.2127C44.1605 45.2984 43.9836 45.4108 43.547 45.4359L43.6328 46.9334C44.2838 46.8961 44.8969 46.7083 45.3377 46.2354C45.7754 45.7657 45.924 45.1421 45.9299 44.4954L44.43 44.4817ZM43.5471 45.4359C43.0391 45.4649 42.567 45.4397 41.9221 45.4397V46.9397C42.4701 46.9397 43.0706 46.9655 43.6326 46.9334L43.5471 45.4359ZM41.1721 46.1897C41.1721 47.2052 41.1734 48.1654 41.1721 49.128L42.6721 49.13C42.6734 48.1662 42.6721 47.2025 42.6721 46.1897H41.1721ZM41.1721 49.1284C41.1716 49.7682 41.0177 50.1949 40.7829 50.4873C40.5475 50.7804 40.163 51.0231 39.5408 51.1653L39.8752 52.6276C40.7279 52.4326 41.4497 52.0525 41.9524 51.4266C42.4556 50.8 42.6714 50.0115 42.6721 49.1296L41.1721 49.1284ZM39.5412 51.1652C38.8846 51.315 38.2709 51.2546 37.6602 50.9824L37.0495 52.3524C37.9574 52.7571 38.9025 52.8494 39.8748 52.6277L39.5412 51.1652ZM37.6586 50.9817C37.2495 50.8005 36.9831 50.5721 36.8144 50.3146C36.6459 50.0573 36.5413 49.7194 36.5398 49.2639L35.0398 49.2689C35.0421 49.9598 35.2044 50.5941 35.5596 51.1364C35.9147 51.6786 36.4289 52.0776 37.0511 52.3531L37.6586 50.9817ZM36.5398 49.2655C36.5385 48.2634 36.5398 47.2624 36.5398 46.2203H35.0398C35.0398 47.2598 35.0385 48.2641 35.0398 49.2673L36.5398 49.2655ZM35.7898 45.4703H13.1226V46.9703H35.7898V45.4703ZM12.3726 46.2203C12.3726 47.1887 12.3738 48.1488 12.3726 49.1102L13.8726 49.1121C13.8738 48.1496 13.8726 47.1859 13.8726 46.2203H12.3726ZM12.3726 49.1105C12.372 49.7392 12.2226 50.1664 11.9921 50.4629C11.762 50.7588 11.3892 51.0043 10.7918 51.1535L11.1554 52.6088C11.989 52.4005 12.69 52.0091 13.1763 51.3835C13.6623 50.7585 13.8718 49.9795 13.8726 49.1118L12.3726 49.1105ZM10.7916 51.1536C10.1031 51.3258 9.45916 51.2684 8.83296 50.9727L8.19239 52.329C9.145 52.7789 10.1451 52.8615 11.1556 52.6088L10.7916 51.1536ZM8.83399 50.9732C8.43134 50.7823 8.16682 50.558 8.00231 50.3098C7.84137 50.0669 7.74089 49.7484 7.75252 49.3025L6.25304 49.2634C6.23459 49.9703 6.39663 50.6022 6.75194 51.1384C7.10367 51.6692 7.60913 52.0525 8.19136 52.3286L8.83399 50.9732ZM7.75257 49.3007C7.77665 48.2854 7.75779 47.2548 7.75779 46.1808H6.25779C6.25779 47.2929 6.27653 48.2726 6.25299 49.2652L7.75257 49.3007ZM7.00779 45.4308C6.44953 45.4308 5.72149 45.3789 5.06878 45.4462L5.22281 46.9383C5.77802 46.881 6.27794 46.9308 7.00779 46.9308V45.4308ZM5.07003 45.4461C4.57331 45.4965 4.29873 45.3655 4.13624 45.2043C3.95669 45.0262 3.80261 44.6997 3.77598 44.1709L2.27788 44.2463C2.31641 45.0115 2.55139 45.7449 3.0798 46.2692C3.62526 46.8103 4.37754 47.0241 5.22157 46.9384L5.07003 45.4461ZM3.77599 44.1712C3.6126 40.9013 3.41944 37.6613 3.36458 34.415L1.86479 34.4403C1.9202 37.7189 2.11547 40.9961 2.27786 44.246L3.77599 44.1712ZM3.36458 34.415C3.30591 30.9397 3.38706 27.4667 3.42353 23.9623L1.92362 23.9467C1.88741 27.4253 1.80567 30.9378 1.86479 34.4403L3.36458 34.415ZM3.42351 23.9647C3.42675 23.7264 3.4023 23.4376 3.25457 23.1572C3.10135 22.8664 2.8656 22.6774 2.62202 22.542L1.89312 23.8529C1.91484 23.865 1.92969 23.8746 1.93934 23.8813C1.94888 23.888 1.9526 23.8915 1.95243 23.8914C1.95007 23.8892 1.93835 23.877 1.92749 23.8564C1.91721 23.8369 1.91656 23.8265 1.91841 23.837C1.92075 23.8503 1.92449 23.8823 1.92365 23.9443L3.42351 23.9647ZM2.623 22.5425C2.06793 22.2328 1.7837 21.749 1.77197 21.091L0.272206 21.1177C0.293053 22.2869 0.85086 23.2714 1.89214 23.8524L2.623 22.5425ZM1.77197 21.091C1.74207 19.4121 1.74453 17.7305 1.76825 16.0482L0.268403 16.0271C0.244508 17.7218 0.241963 19.4197 0.272206 21.1177L1.77197 21.091ZM1.76825 16.0484C1.7751 15.5721 1.90449 15.2017 2.10713 14.9268C2.30881 14.6532 2.61372 14.4322 3.04398 14.3026L2.61142 12.8663C1.90518 13.079 1.31418 13.4745 0.899683 14.0368C0.486144 14.5979 0.2791 15.283 0.268406 16.0269L1.76825 16.0484ZM3.04603 14.302C3.32627 14.2167 3.60386 14.0677 3.80232 13.7884C3.98341 13.5335 4.03537 13.253 4.06243 13.0657L2.57784 12.8512C2.57337 12.8821 2.56925 12.9058 2.56546 12.9243C2.56168 12.9426 2.55874 12.9532 2.55722 12.9581C2.55441 12.9672 2.55906 12.9484 2.57951 12.9196C2.58956 12.9055 2.60127 12.892 2.61395 12.88C2.62649 12.8681 2.63738 12.8602 2.64447 12.8557C2.65754 12.8473 2.6519 12.854 2.60937 12.8669L3.04603 14.302ZM4.06242 13.0658C4.33095 11.2084 4.55589 9.3944 4.90584 7.59877L3.43354 7.31184C3.07427 9.15528 2.8406 11.0338 2.57785 12.8511L4.06242 13.0658ZM4.90567 7.59964C5.14235 6.39272 5.40464 5.45388 6.1861 4.88013L5.29837 3.67102C3.98978 4.63179 3.66064 6.15377 3.43371 7.31097L4.90567 7.59964ZM6.18617 4.88008C6.80501 4.42561 7.44116 4.02723 8.09118 3.77085L7.54081 2.37547C6.71977 2.6993 5.96507 3.18142 5.2983 3.67107L6.18617 4.88008ZM8.0916 3.77068C10.6578 2.75675 13.3796 2.34704 16.1949 2.07784L16.0522 0.584646C13.1988 0.857488 10.3071 1.28247 7.54039 2.37563L8.0916 3.77068ZM16.195 2.07783C20.4948 1.66613 24.8007 1.65077 29.1098 1.98358L29.2253 0.488038C24.8359 0.149022 20.4433 0.164201 16.0521 0.584655L16.195 2.07783ZM29.1096 1.98357C32.6299 2.25651 36.0689 2.73356 39.3497 3.90304L39.8533 2.49012C36.3878 1.25477 32.7948 0.764793 29.2255 0.488055L29.1096 1.98357ZM39.3499 3.90311C40.7117 4.3881 41.7828 4.8656 42.2344 5.91455L43.6121 5.32136C42.8684 3.59394 41.1352 2.94664 39.8531 2.49005L39.3499 3.90311ZM42.2343 5.91434C42.7793 7.1811 43.099 8.57089 43.433 10.0174L44.8945 9.67996C44.5669 8.26104 44.2201 6.7345 43.6122 5.32157L42.2343 5.91434ZM43.4328 10.0166C43.6612 11.0109 43.7289 12.0226 43.8612 13.1455L45.3509 12.9699C45.2301 11.9449 45.1475 10.7808 44.8947 9.68076L43.4328 10.0166ZM43.8612 13.1453C43.8831 13.3316 '
            + '43.9353 13.6162 44.145 13.8633C44.3599 14.1166 44.6406 14.2152 44.8516 14.2656L45.2001 12.8066C45.1129 12.7858 45.2006 12.7889 45.2887 12.8928C45.3303 12.9418 45.3489 12.9867 45.3553 13.0059C45.3601 13.0203 45.3562 13.0145 45.3509 12.9701L43.8612 13.1453ZM44.8491 14.265C45.6859 14.4679 46.2089 15.1048 46.2244 16.006L47.7242 15.9802C47.6971 14.4002 46.7064 13.1718 45.2026 12.8072L44.8491 14.265ZM46.2244 16.0074C46.2569 17.7066 46.2606 19.405 46.2232 21.1006L47.7229 21.1336C47.7607 19.414 47.7569 17.6947 47.7242 15.9788L46.2244 16.0074ZM46.2232 21.1011C46.2062 21.9006 45.759 22.414 44.9922 22.7629L45.6133 24.1282C46.726 23.622 47.6898 22.6824 47.7229 21.1331L46.2232 21.1011ZM44.5528 23.4456C44.5528 25.9187 44.5665 28.2812 44.549 30.6494L46.049 30.6605C46.0666 28.2852 46.0528 25.9068 46.0528 23.4456H44.5528Z" fill="white"/>'
            + '</svg>'
            );

            onclickTransportBtn('btnbus');

            break;
        }

        case 'skShopping': {

            resetPage();

            SwiperHome.autoplay.stop();

            if(myGameInstance == null) {
                console.log("null");
            }
            else {
                myGameInstance.SendMessage("MainCamera", "QuickReset");
            }


            $('.navmenu .navgroup .navbox #navShopping ').css('pointer-events', 'none');

            $('.navmenu #navShopping .navborder').html('<svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="124" height="124" rx="24" fill="white"/>' +
            '<rect x="3" y="3" width="118" height="118" rx="22" fill="#0077C1"/>' +
            '</svg>'
            );

            $('.navmenu #navShopping .navborder').css({'box-shadow':'0px 4px 20px rgba(0, 119, 193, 0.4)', 'border-radius':'24px'});

            $('.navmenu #navShopping .navlogo').html('<svg width="45" height="57" viewBox="0 0 45 57" fill="none" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M6.17536 56H38.8172C38.8627 55.9719 38.9111 55.9488 38.9616 55.9311C42.3666 55.178 44.1579 52.897 43.9891 49.4238C43.7581 44.7599 43.4795 40.0989 43.2183 35.4364C42.9094 29.9343 42.599 24.435 42.2872 18.9385C42.205 17.4394 41.4789 16.7192 39.9777 16.7178C37.6548 16.7178 35.3318 16.7178 33.0088 16.7178H32.391C32.391 16.4122 32.391 16.1827 32.391 15.9517C32.3766 13.9849 32.4445 12.0123 32.3319 10.0498C32.0071 4.34148 26.3705 0.0606361 20.7295 1.17819C15.9301 2.12933 12.6896 6.00132 12.6376 10.866C12.6189 12.6005 12.6376 14.3363 12.6376 16.0722V16.7077H12.0054C9.62806 16.7077 7.25072 16.7006 4.87482 16.7077C3.62914 16.7077 2.80638 17.4638 2.7371 18.6617C2.4715 23.305 2.21216 27.9493 1.95908 32.5945C1.76133 36.1136 1.55348 39.6312 1.35573 43.1503C1.22726 45.4184 1.05549 47.6865 1.00208 49.9575C0.945788 52.326 2.02981 54.1278 4.11125 55.2727C4.7377 55.6256 5.48251 55.7647 6.17536 56ZM16.5955 16.6833C16.5955 14.5429 16.5753 12.4714 16.61 10.3998C16.634 9.88177 16.7392 9.37064 16.9217 8.88486C17.3783 7.57982 18.2826 6.47618 19.476 5.76746C20.6693 5.05875 22.0757 4.7902 23.4483 5.00891C24.821 5.22761 26.0724 5.91962 26.9831 6.96357C27.8937 8.00752 28.4056 9.33679 28.4288 10.7183C28.4606 12.3451 28.4375 13.9734 28.4375 15.5959V16.679L16.5955 16.6833Z" fill="white" stroke="white" stroke-width="1.5"/>'
            + '</svg>'
            );

            $('#skShopping .closebtnholder').trigger('click'); // reset keyboard

            $('#skShopping .menuDirectory #btnall').trigger('click'); // default selection

            $('#skShopping .searchBarBox .closebtn').hide();

            createSubCategorybtn('skShopping', shoppingsubcategory, 3);

            createShoppingSwiper(shoppingArray,3,4);

            break;
        }
    }

}

// create category buttons
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
            var string = categoryArray[catIndex].catName.split('and');
            if(string.length > 1) {
                var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1) + ' & ' + string[1].charAt(0).toUpperCase() + string[1].slice(1);
            }
            else {
                var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1);
            }
            
            cattext.innerText = catstring;

            catcard.appendChild(cattext);
            catcol.appendChild(catcard);
            catrow.appendChild(catcol);

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
                var string = categoryArray[catIndex].catName.split('and');
                if(string.length > 1) {
                    var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1) + ' & ' + string[1].charAt(0).toUpperCase() + string[1].slice(1);
                }
                else {
                    var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1);
                }
            
            cattext.innerText = catstring;

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


}

// create subcategory button for dining and shopping
function createSubCategorybtn(content, categoryArray, numRow) {

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
            var string = categoryArray[catIndex].name.split('and');
            if(string.length > 1) {
                var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1) + ' & ' + string[1].charAt(0).toUpperCase() + string[1].slice(1);
            }
            else {
                var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1);
            }
            
            cattext.innerText = catstring;

            catcard.appendChild(cattext);
            catcol.appendChild(catcard);
            catrow.appendChild(catcol);

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
            var string = categoryArray[catIndex].name.split('and');
            if(string.length > 1) {
                var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1) + ' & ' + string[1].charAt(0).toUpperCase() + string[1].slice(1);
            }
            else {
                if(string[0] == "foodkiosklightbites") {
                    var catstring = "Food Kiosk / Light Bites"
                }
                else if(string[0] == "japanesecuisine") {
                    var catstring = "Japanese Cuisine"
                }
                else {
                    var catstring = string[0].charAt(0).toUpperCase() + string[0].slice(1);
                }

            }
            
            cattext.innerText = catstring;

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


}


// All Swiper
// function createScreenSaverSwiper(channelArray) {

//     //var swiperwrapper = document.querySelector('#skScreenSaver #SwiperScreenSaver #swiperScreensaver .swiper-wrapper');
//     for(var c=0; c<channelArray.chnZone.length; c++){

//         $('#skScreenSaver #SwiperScreenSaver .swiper-wrapper').html("");
//         var swiperwrapper = document.querySelector('#skScreenSaver #SwiperScreenSaver .swiper-wrapper');

//         //console.log(swiperwrapper);

//         // get channel data 
//         var fittype = channelArray.chnZone[c].zoneFitType;
//         var bgColor = channelArray.chnZone[c].zoneBgColor;

//         var sequence = new Array();

//         for(var j=0; j< channelArray.chnZone[c].zoneSequence.length;j++) {
//             sequence.push(getSequencebyId(channelArray.chnZone[c].zoneSequence[j]));
//         }

//         sequence.sort(sortByOrder);

//         for(var i=0; i<sequence.length; i++) {
    
//             if(checkDateRange(sequence[i].startDate, sequence[i].endDate)) {
                
//                 if(checkDaysRange(sequence[i].days)) {
    
//                     if(checkTimeRange(sequence[i].startTime, sequence[i].endTime)) {
    
//                         var pylist = getPlaylistbyId(sequence[i].playlist);
//                         var ctnArray = new Array();
    
//                         for(var j=0; j<pylist.pylistSeq.length; j++) {
    
//                             ctnArray.push(getContentbyId(pylist.pylistSeq[j]));
//                         }
    
//                         //console.log("content array");
//                         ctnArray.sort(sortContentByOrder);
    
//                         for(var k=0; k<ctnArray.length; k++) {
    
//                             var media = getMediabyId(ctnArray[k].media);
    
//                             var swiperslide = document.createElement('div');
//                             swiperslide.className = 'swiper-slide';
//                             swiperslide.style = "background-color:" + bgColor;
    
//                             if( media.mediaType.substr(0,5) == "image") {
//                                 swiperslide.setAttribute('data-swiper-autoplay', ctnArray[k].contentDuration * 1000);
//                             }
//                             else {
//                                 swiperslide.setAttribute('data-swiper-autoplay', ctnArray[k].contentDuration * 1000);
//                             }
    
//                             var divimg = document.createElement('div');
//                             divimg.className = fittype + 'Img';
    
//                             var mediaName = media.mediaServerUrl.split("/");
    
//                             if(media.mediaType.substr(0,5) == "image") {
//                                 var img = document.createElement('img');
//                                 img.id = media.id;
//                                 img.src = '../commonfile/media/' + mediaName[mediaName.length - 1];
//                                 divimg.appendChild(img);
    
//                             }
//                             else {
//                                 var video = document.createElement('video');
//                                 video.id = media.id;
//                                 video.src = '../commonfile/media/' + mediaName[mediaName.length - 1];
//                                 divimg.appendChild(video);
//                             }
    
//                             // divimg.appendChild(img);
//                             swiperslide.append(divimg);
    
//                             swiperwrapper.appendChild(swiperslide);
//                         }
    
//                     }
//                 }
//             }
//         }
//     }

// }

function createScreenSaverSwiper(channelArray) {

    //var swiperwrapper = document.querySelector('#skScreenSaver #SwiperScreenSaver #swiperScreensaver .swiper-wrapper');
    for(var c=0; c<channelArray.chnZone.length; c++){

        $('#skScreenSaver #SwiperScreenSaver .carousel').html("");
        var swiperwrapper = document.querySelector('#skScreenSaver #SwiperScreenSaver .carousel');

        //console.log(swiperwrapper);

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
    
                        //console.log("content array");
                        ctnArray.sort(sortContentByOrder);
    
                        for(var k=0; k<ctnArray.length; k++) {
    
                            var media = getMediabyId(ctnArray[k].media);
    
                            // var swiperslide = document.createElement('div');
                            // swiperslide.className = 'swiper-slide';
                            // swiperslide.style = "background-color:" + bgColor;
                            // swiperslide.style = "width:100%";

                            // var img = document.createElement('img');
    
                            // if( media.mediaType.substr(0,5) == "image") {
                            //     swiperslide.setAttribute('data-swiper-autoplay', ctnArray[k].contentDuration * 1000);
                            // }
                            // else {
                            //     swiperslide.setAttribute('data-swiper-autoplay', ctnArray[k].contentDuration * 1000);
                            // }
    
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
                            // swiperslide.append(divimg);
    
                            swiperwrapper.appendChild(divimg);
                        }
    
                    }
                }
            }
        }
    }

}

function createHomeSwiper(happeningsArray) {

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
            // console.log(imgdetail);
            if(imgdetail == undefined){
                img.src = './asset/error/errorimg.jpg';
            }
            //console.log(imgdetail.file_name);
            img.src = '../' + imgdetail.file_path + '/' + imgdetail.file_name;

        }
        else {
            img.src = './asset/error/errorimg.jpg';
        }

        var infocontainer = document.createElement('div');
        infocontainer.className = "infocontainer";

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
        
        var daterange = document.createElement("p");
        daterange.className = 'daterange';

        if(happeningsArray[i].hpnStartDate == "" || happeningsArray[i].hpnEndDate == "") {
            daterange.innerHTML = " - ";
        }
        else {
            var hpnStartDate = convertToMonth(Number(happeningsArray[i].hpnStartDate));
            var hpnEndDate = convertToMonth(Number(happeningsArray[i].hpnEndDate));
            daterange.innerHTML = hpnStartDate + '-' + hpnEndDate;
        }

        var infoholder = document.createElement("div");
        infoholder.className = "infoholder";

        var info = document.createElement("p");
        info.className = 'info';
        info.innerHTML =  happeningsArray[i].hpnDescription;

        infoholder.appendChild(info);
        dateholder.appendChild(daterange);
        datelocationbox.appendChild(dateholder);
        datelocationbox.appendChild(infoholder);
        detailholder.appendChild(datelocationbox);
        // detailholder.appendChild(qrcodeholder);
        titleholder.appendChild(title);
        infocontainer.appendChild(titleholder);
        infocontainer.appendChild(detailholder);
        imgholder.appendChild(img);
        itemHome.appendChild(imgholder);
        itemHome.appendChild(infocontainer);
        slide.appendChild(itemHome);

        $('#swiperHome .swiper-wrapper').append(slide);
    }

    SwiperHome.init();
    SwiperHome.update();
    // SwiperHome.slideTo(0,1,true);
}

function createDirectorySwiper (tenantArray, num_row, num_column) {

    $('#skDirectory #swiperDirectory .swiper-wrapper').html("");

    if(tenantArray.length == 0) {
        return "No tenant found"
    }

    var total_box = num_row * num_column;
    var num_slides = Math.floor(tenantArray.length/ total_box);
    var num_left_tenant = tenantArray.length % total_box;
    var tenant_index = 0;

    //create slide for tenants 
    if (num_slides > 0) {
        for(let i=1; i<= num_slides; i++) {
            var slide = document.createElement("div");
            slide.className = "swiper-slide";

            for (tenant_index; tenant_index<total_box * i; tenant_index++) {
                if(tenant_index % num_column == 0) {

                    var row = document.createElement("div");
                    row.classList = "row";
                }

                var col = document.createElement("div");
                col.className = "col";

                var card = document.createElement("div"); 
                card.className = "card";
                // happening.setAttribute("onclick", "onclickHappening(620e0e3638150a1e86e0001e)");
                card.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenant_index].id + "\")");

                var tenant_logo = document.createElement('div');
                tenant_logo.className = "tenantlogo";
                // onclick happening popup

                var newobj = new Object();
                newobj.FIT_TYPE = "stretchImg";
                if (tenantArray[tenant_index].storeThumbnailUrl != null || tenantArray[tenant_index].storeThumbnailUrl != '') {
                    var imgurl = tenantArray[tenant_index].storeThumbnailUrl.split('/');
                    var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
                    newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
                }
                else {
                    newobj.MAIN_URL = './asset/error/errorimg.jpg';
                }
                tenant_logo.appendChild(createImg(newobj));

                var tenant_title = document.createElement('div');
                tenant_title.className = "tenantTitle";
                
                var name = document.createElement("p");
                name.className = "tenantname";
                name.innerHTML = tenantArray[tenant_index].storeNameEng;

                var tenant_detail = document.createElement('div');
                tenant_detail.className = "tenantdetail";

                var tenant_unit= document.createElement("div");
                tenant_unit.className = "tenantunit";
                tenant_unit.innerHTML = tenantArray[tenant_index].storeUnitNum;

                var wayfindingbtn = document.createElement("div");
                wayfindingbtn.className = 'wayfindingbtn';

                var btnholder = document.createElement('div');
                btnholder.className = 'btnholder';
                btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenant_index].storeUnitNum+"\",\""+tenantArray[tenant_index].id+"\")");

                $(btnholder).html('<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83884 23.9334C2.47703 24.1692 3.16356 23.7587 3.36522 23.017L5 17.0818L3.51854 15.5932C3.3242 15.4014 3.16014 15.2004 3.02586 15L1.05856 22.1486C0.853475 22.8903 1.20455 23.6936 1.83884 23.9334ZM6.89888 13.0247C6.83458 13.5337 6.92312 13.7616 7.28147 14.0996L8.95731 15.679C9.332 16.0343 9.59339 16.5869 9.63028 17.1264L9.99654 22.4695C10.0487 23.2506 9.50486 23.9393 8.78815 23.9961C8.07091 24.0535 7.43852 23.4658 7.38634 22.6802L7.03958 17.6441L4.30449 15.0867C3.47079 14.3056 3.25736 13.5205 3.4144 12.2918L3.89765 8.56768L3.19306 8.97114L2.12959 12.748C1.952 13.3713 1.33963 13.7225 0.767845 13.5337C0.195531 13.3409 -0.126461 12.6734 0.0469192 12.0507L1.14254 8.17283C1.28746 7.65516 1.65003 7.17709 2.08902 6.92686L4.21596 5.7073C4.72345 5.41346 5.25519 5.05362 5.83119 5.00541C6.9189 4.91301 7.8053 6.01894 7.65195 7.19029L6.89888 13.0247ZM6.9995 0C8.1034 0 9 0.896101 9 2C9 3.1034 8.1034 4 6.9995 4C5.89208 4 5 3.1034 5 2C5 0.896101 5.89208 0 6.9995 0ZM8.33747 9L11.5848 11.2677C12.0481 11.5929 12.1385 12.2012 11.781 12.6233C11.4276 13.0454 10.7598 13.124 10.297 12.8021L8 11.1993L8.33747 9Z" fill="#0077C1"/></svg>'
                );

                wayfindingbtn.appendChild(btnholder);
                tenant_detail.appendChild(tenant_unit);
                tenant_detail.appendChild(wayfindingbtn);
                tenant_title.appendChild(name);
                card.appendChild(tenant_logo);
                card.appendChild(tenant_title);
                card.appendChild(tenant_detail);
                col.appendChild(card);
                row.appendChild(col);

                if ((tenant_index + 1) % 3 == 0) {
                    slide.appendChild(row);
                }
            }

            $("#swiperDirectory .swiper-wrapper").append(slide);
        }
    }

    if (num_left_tenant != 0) {

        // create slide for remaining happenings 
        var slide = document.createElement('div');
        slide.className = "swiper-slide";

        for(var j=0; j<num_left_tenant; j++) {

            if (tenant_index % num_column == 0) {

                if (j!= 0) {
                    slide.appendChild(row);
                }
                var row = document.createElement("div");
                row.className = 'row';
            }

            var col = document.createElement("div");
            col.className = "col";

            var card = document.createElement("div"); 
            card.className = "card";
            // happening.setAttribute("onclick", "onclickHappening(620e0e3638150a1e86e0001e)");
            card.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenant_index].id + "\")");

            var tenant_logo = document.createElement('div');
            tenant_logo.className = "tenantlogo";
            // onclick happening popup

            var newobj = new Object();
            newobj.FIT_TYPE = "stretchImg";
            if (tenantArray[tenant_index].storeThumbnailUrl != null || tenantArray[tenant_index].storeThumbnailUrl != '') {
                var imgurl = tenantArray[tenant_index].storeThumbnailUrl.split('/');
                var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
                newobj.MAIN_URL = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
            }
            else {
                newobj.MAIN_URL = './asset/error/errorimg.jpg';
            }
            tenant_logo.appendChild(createImg(newobj));

            var tenant_title = document.createElement('div');
            tenant_title.className = "tenantTitle";
            
            var name = document.createElement("p");
            name.className = "tenantname";
            name.innerHTML = tenantArray[tenant_index].storeNameEng;

            var tenant_detail = document.createElement('div');
            tenant_detail.className = "tenantdetail";

            var tenant_unit= document.createElement("div");
            tenant_unit.className = "tenantunit";
            tenant_unit.innerHTML = tenantArray[tenant_index].storeUnitNum;

            var wayfindingbtn = document.createElement("div");
            wayfindingbtn.className = 'wayfindingbtn';

            var btnholder = document.createElement('div');
            btnholder.className = 'btnholder';
            btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenant_index].storeUnitNum+"\", \""+tenantArray[tenant_index].id+"\)");

            $(btnholder).html('<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83884 23.9334C2.47703 24.1692 3.16356 23.7587 3.36522 23.017L5 17.0818L3.51854 15.5932C3.3242 15.4014 3.16014 15.2004 3.02586 15L1.05856 22.1486C0.853475 22.8903 1.20455 23.6936 1.83884 23.9334ZM6.89888 13.0247C6.83458 13.5337 6.92312 13.7616 7.28147 14.0996L8.95731 15.679C9.332 16.0343 9.59339 16.5869 9.63028 17.1264L9.99654 22.4695C10.0487 23.2506 9.50486 23.9393 8.78815 23.9961C8.07091 24.0535 7.43852 23.4658 7.38634 22.6802L7.03958 17.6441L4.30449 15.0867C3.47079 14.3056 3.25736 13.5205 3.4144 12.2918L3.89765 8.56768L3.19306 8.97114L2.12959 12.748C1.952 13.3713 1.33963 13.7225 0.767845 13.5337C0.195531 13.3409 -0.126461 12.6734 0.0469192 12.0507L1.14254 8.17283C1.28746 7.65516 1.65003 7.17709 2.08902 6.92686L4.21596 5.7073C4.72345 5.41346 5.25519 5.05362 5.83119 5.00541C6.9189 4.91301 7.8053 6.01894 7.65195 7.19029L6.89888 13.0247ZM6.9995 0C8.1034 0 9 0.896101 9 2C9 3.1034 8.1034 4 6.9995 4C5.89208 4 5 3.1034 5 2C5 0.896101 5.89208 0 6.9995 0ZM8.33747 9L11.5848 11.2677C12.0481 11.5929 12.1385 12.2012 11.781 12.6233C11.4276 13.0454 10.7598 13.124 10.297 12.8021L8 11.1993L8.33747 9Z" fill="#0077C1"/></svg>'
            );

            wayfindingbtn.appendChild(btnholder);
            tenant_detail.appendChild(tenant_unit);
            tenant_detail.appendChild(wayfindingbtn);
            tenant_title.appendChild(name);
            card.appendChild(tenant_logo);
            card.appendChild(tenant_title);
            card.appendChild(tenant_detail);
            col.appendChild(card);
            row.appendChild(col);

            tenant_index++;
        }

        var blank_col = num_column - (num_left_tenant % num_column);

        if (blank_col % num_column != 0) {
            
            for(var num=0; num < blank_col; num++) {
                
                var col = document.createElement("div");
                col.className = "col";
                row.appendChild(col);
            }
        }
        
        slide.appendChild(row);
        $("#swiperDirectory .swiper-wrapper").append(slide);
    }

    SwiperDirectory.update();
    SwiperDirectory.slideTo(0,1,false);
}

function createHappeningSwiper(happeningsArray) {

    // Loop through all happenings
    $('#swiperHappenings .swiper-wrapper').html("");

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
            img.src = '../' + imgdetail.file_path + '/' + imgdetail.file_name;
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
        
        var daterange = document.createElement("p");
        daterange.className = 'daterange';

        if(happeningsArray[i].hpnStartDate == "" || happeningsArray[i].hpnEndDate == "") {
            
            daterange.innerHTML = " - ";
        }
        else {
            var hpnStartDate = convertToMonth(Number(happeningsArray[i].hpnStartDate));
            var hpnEndDate = convertToMonth(Number(happeningsArray[i].hpnEndDate))
            daterange.innerHTML = hpnStartDate + ' - ' + hpnEndDate;
        }

        var infoholder = document.createElement("div");
        infoholder.className = "infoholder";

        var info = document.createElement("p");
        info.className = 'info';
        info.innerHTML =  happeningsArray[i].hpnDescription;

        infoholder.appendChild(info);
        dateholder.appendChild(daterange);
        datelocationbox.appendChild(dateholder);
        datelocationbox.appendChild(infoholder);
        detailholder.appendChild(datelocationbox);
        // detailholder.appendChild(qrcodeholder);
        titleholder.appendChild(title);
        imgholder.appendChild(img);
        itemHome.appendChild(imgholder);
        itemHome.appendChild(titleholder);
        itemHome.appendChild(detailholder);
        slide.appendChild(itemHome);

        $('#swiperHappenings .swiper-wrapper').append(slide);
    }

    SwiperHappenings.update();
    SwiperHappenings.slideTo(0,1,true);

}

function createDiningSwiper (tenantArray, num_row, num_column) {

    $('#skDining #swiperDining .swiper-wrapper').html("");

    if(tenantArray.length == 0) {
        return "No tenant found"
    }

    var total_box = num_row * num_column;
    var num_slides = Math.floor(tenantArray.length/ total_box);
    var num_left_tenant = tenantArray.length % total_box;
    var tenant_index = 0;

    //create slide for tenants 
    if (num_slides > 0) {
        for(let i=1; i<= num_slides; i++) {
            var slide = document.createElement("div");
            slide.className = "swiper-slide";

            for (tenant_index; tenant_index<total_box * i; tenant_index++) {
                if(tenant_index % num_column == 0) {

                    var row = document.createElement("div");
                    row.classList = "row";
                }

                var col = document.createElement("div");
                col.className = "col";

                var card = document.createElement("div"); 
                card.className = "card";
                // happening.setAttribute("onclick", "onclickHappening(620e0e3638150a1e86e0001e)");
                card.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenant_index].id + "\")");
                //card.setAttribute("onclick", "onclickDining(\""+ tenantArray[tenant_index].id + "\")");

                var tenant_logo = document.createElement('div');
                tenant_logo.className = "tenantlogo";
                // onclick happening popup

                var newobj = new Object();
                newobj.FIT_TYPE = "centerImg";
                newobj.MAIN_URL = tenantArray[tenant_index].storeThumbnailUrl;
                tenant_logo.appendChild(createImg(newobj));

                var tenant_title = document.createElement('div');
                tenant_title.className = "tenantTitle";
                
                var name = document.createElement("p");
                name.className = "tenantname";
                name.innerHTML = tenantArray[tenant_index].storeNameEng;

                var tenant_detail = document.createElement('div');
                tenant_detail.className = "tenantdetail";

                var tenant_unit= document.createElement("div");
                tenant_unit.className = "tenantunit";
                tenant_unit.innerHTML = tenantArray[tenant_index].storeUnitNum;

                var wayfindingbtn = document.createElement("div");
                wayfindingbtn.className = 'wayfindingbtn';

                var btnholder = document.createElement('div');
                btnholder.className = 'btnholder';
                btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenant_index].storeUnitNum+"\", \""+tenantArray[tenant_index].id+"\")");

                $(btnholder).html('<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83884 23.9334C2.47703 24.1692 3.16356 23.7587 3.36522 23.017L5 17.0818L3.51854 15.5932C3.3242 15.4014 3.16014 15.2004 3.02586 15L1.05856 22.1486C0.853475 22.8903 1.20455 23.6936 1.83884 23.9334ZM6.89888 13.0247C6.83458 13.5337 6.92312 13.7616 7.28147 14.0996L8.95731 15.679C9.332 16.0343 9.59339 16.5869 9.63028 17.1264L9.99654 22.4695C10.0487 23.2506 9.50486 23.9393 8.78815 23.9961C8.07091 24.0535 7.43852 23.4658 7.38634 22.6802L7.03958 17.6441L4.30449 15.0867C3.47079 14.3056 3.25736 13.5205 3.4144 12.2918L3.89765 8.56768L3.19306 8.97114L2.12959 12.748C1.952 13.3713 1.33963 13.7225 0.767845 13.5337C0.195531 13.3409 -0.126461 12.6734 0.0469192 12.0507L1.14254 8.17283C1.28746 7.65516 1.65003 7.17709 2.08902 6.92686L4.21596 5.7073C4.72345 5.41346 5.25519 5.05362 5.83119 5.00541C6.9189 4.91301 7.8053 6.01894 7.65195 7.19029L6.89888 13.0247ZM6.9995 0C8.1034 0 9 0.896101 9 2C9 3.1034 8.1034 4 6.9995 4C5.89208 4 5 3.1034 5 2C5 0.896101 5.89208 0 6.9995 0ZM8.33747 9L11.5848 11.2677C12.0481 11.5929 12.1385 12.2012 11.781 12.6233C11.4276 13.0454 10.7598 13.124 10.297 12.8021L8 11.1993L8.33747 9Z" fill="#0077C1"/></svg>'
                );

                wayfindingbtn.appendChild(btnholder);
                tenant_detail.appendChild(tenant_unit);
                tenant_detail.appendChild(wayfindingbtn);
                tenant_title.appendChild(name);
                card.appendChild(tenant_logo);
                card.appendChild(tenant_title);
                card.appendChild(tenant_detail);
                col.appendChild(card);
                row.appendChild(col);

                if ((tenant_index + 1) % 3 == 0) {
                    slide.appendChild(row);
                }
            }

            $("#swiperDining .swiper-wrapper").append(slide);
        }
    }

    if (num_left_tenant != 0) {

        // create slide for remaining happenings 
        var slide = document.createElement('div');
        slide.className = "swiper-slide";

        for(var j=0; j<num_left_tenant; j++) {

            if (tenant_index % num_column == 0) {

                if (j!= 0) {
                    slide.appendChild(row);
                }
                var row = document.createElement("div");
                row.className = 'row';
            }

            var col = document.createElement("div");
            col.className = "col";

            var card = document.createElement("div"); 
            card.className = "card";
            // happening.setAttribute("onclick", "onclickHappening(620e0e3638150a1e86e0001e)");
            card.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenant_index].id + "\")");

            var tenant_logo = document.createElement('div');
            tenant_logo.className = "tenantlogo";
            // onclick happening popup

            var newobj = new Object();
            newobj.FIT_TYPE = "centerImg";
            newobj.MAIN_URL = tenantArray[tenant_index].storeThumbnailUrl;
            tenant_logo.appendChild(createImg(newobj));

            var tenant_title = document.createElement('div');
            tenant_title.className = "tenantTitle";
            
            var name = document.createElement("p");
            name.className = "tenantname";
            name.innerHTML = tenantArray[tenant_index].storeNameEng;

            var tenant_detail = document.createElement('div');
            tenant_detail.className = "tenantdetail";

            var tenant_unit= document.createElement("div");
            tenant_unit.className = "tenantunit";
            tenant_unit.innerHTML = tenantArray[tenant_index].storeUnitNum;

            var wayfindingbtn = document.createElement("div");
            wayfindingbtn.className = 'wayfindingbtn';

            var btnholder = document.createElement('div');
            btnholder.className = 'btnholder';
            btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenant_index].storeUnitNum+"\",\""+tenantArray[tenant_index].id+"\")");

            $(btnholder).html('<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83884 23.9334C2.47703 24.1692 3.16356 23.7587 3.36522 23.017L5 17.0818L3.51854 15.5932C3.3242 15.4014 3.16014 15.2004 3.02586 15L1.05856 22.1486C0.853475 22.8903 1.20455 23.6936 1.83884 23.9334ZM6.89888 13.0247C6.83458 13.5337 6.92312 13.7616 7.28147 14.0996L8.95731 15.679C9.332 16.0343 9.59339 16.5869 9.63028 17.1264L9.99654 22.4695C10.0487 23.2506 9.50486 23.9393 8.78815 23.9961C8.07091 24.0535 7.43852 23.4658 7.38634 22.6802L7.03958 17.6441L4.30449 15.0867C3.47079 14.3056 3.25736 13.5205 3.4144 12.2918L3.89765 8.56768L3.19306 8.97114L2.12959 12.748C1.952 13.3713 1.33963 13.7225 0.767845 13.5337C0.195531 13.3409 -0.126461 12.6734 0.0469192 12.0507L1.14254 8.17283C1.28746 7.65516 1.65003 7.17709 2.08902 6.92686L4.21596 5.7073C4.72345 5.41346 5.25519 5.05362 5.83119 5.00541C6.9189 4.91301 7.8053 6.01894 7.65195 7.19029L6.89888 13.0247ZM6.9995 0C8.1034 0 9 0.896101 9 2C9 3.1034 8.1034 4 6.9995 4C5.89208 4 5 3.1034 5 2C5 0.896101 5.89208 0 6.9995 0ZM8.33747 9L11.5848 11.2677C12.0481 11.5929 12.1385 12.2012 11.781 12.6233C11.4276 13.0454 10.7598 13.124 10.297 12.8021L8 11.1993L8.33747 9Z" fill="#0077C1"/></svg>'
            );

            wayfindingbtn.appendChild(btnholder);
            tenant_detail.appendChild(tenant_unit);
            tenant_detail.appendChild(wayfindingbtn);
            tenant_title.appendChild(name);
            card.appendChild(tenant_logo);
            card.appendChild(tenant_title);
            card.appendChild(tenant_detail);
            col.appendChild(card);
            row.appendChild(col);

            tenant_index++;
        }

        var blank_col = num_column - (num_left_tenant % num_column);

        if (blank_col % num_column != 0) {
            
            for(var num=0; num < blank_col; num++) {
                
                var col = document.createElement("div");
                col.className = "col";
                row.appendChild(col);
            }
        }
        
        slide.appendChild(row);
        $("#swiperDining .swiper-wrapper").append(slide);
    }

    SwiperDining.update();
    SwiperDining.slideTo(0,1,false);
}

function createShoppingSwiper (tenantArray, num_row, num_column) {

    $('#skShopping #swiperShopping .swiper-wrapper').html("");

    if(tenantArray.length == 0) {
        return "No tenant found"
    }

    var total_box = num_row * num_column;
    var num_slides = Math.floor(tenantArray.length/ total_box);
    var num_left_tenant = tenantArray.length % total_box;
    var tenant_index = 0;

    //create slide for tenants 
    if (num_slides > 0) {
        for(let i=1; i<= num_slides; i++) {
            var slide = document.createElement("div");
            slide.className = "swiper-slide";

            for (tenant_index; tenant_index<total_box * i; tenant_index++) {
                if(tenant_index % num_column == 0) {

                    var row = document.createElement("div");
                    row.classList = "row";
                }

                var col = document.createElement("div");
                col.className = "col";

                var card = document.createElement("div"); 
                card.className = "card";
                // happening.setAttribute("onclick", "onclickHappening(620e0e3638150a1e86e0001e)");
                card.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenant_index].id + "\")");

                var tenant_logo = document.createElement('div');
                tenant_logo.className = "tenantlogo";
                // onclick happening popup

                var newobj = new Object();
                newobj.FIT_TYPE = "centerImg";
                newobj.MAIN_URL = tenantArray[tenant_index].storeThumbnailUrl;
                tenant_logo.appendChild(createImg(newobj));

                var tenant_title = document.createElement('div');
                tenant_title.className = "tenantTitle";
                
                var name = document.createElement("p");
                name.className = "tenantname";
                name.innerHTML = tenantArray[tenant_index].storeNameEng;

                var tenant_detail = document.createElement('div');
                tenant_detail.className = "tenantdetail";

                var tenant_unit= document.createElement("div");
                tenant_unit.className = "tenantunit";
                tenant_unit.innerHTML = tenantArray[tenant_index].storeUnitNum;

                var wayfindingbtn = document.createElement("div");
                wayfindingbtn.className = 'wayfindingbtn';

                var btnholder = document.createElement('div');
                btnholder.className = 'btnholder';
                btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenant_index].storeUnitNum+"\",\""+tenantArray[tenant_index].id+"\")");

                $(btnholder).html('<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83884 23.9334C2.47703 24.1692 3.16356 23.7587 3.36522 23.017L5 17.0818L3.51854 15.5932C3.3242 15.4014 3.16014 15.2004 3.02586 15L1.05856 22.1486C0.853475 22.8903 1.20455 23.6936 1.83884 23.9334ZM6.89888 13.0247C6.83458 13.5337 6.92312 13.7616 7.28147 14.0996L8.95731 15.679C9.332 16.0343 9.59339 16.5869 9.63028 17.1264L9.99654 22.4695C10.0487 23.2506 9.50486 23.9393 8.78815 23.9961C8.07091 24.0535 7.43852 23.4658 7.38634 22.6802L7.03958 17.6441L4.30449 15.0867C3.47079 14.3056 3.25736 13.5205 3.4144 12.2918L3.89765 8.56768L3.19306 8.97114L2.12959 12.748C1.952 13.3713 1.33963 13.7225 0.767845 13.5337C0.195531 13.3409 -0.126461 12.6734 0.0469192 12.0507L1.14254 8.17283C1.28746 7.65516 1.65003 7.17709 2.08902 6.92686L4.21596 5.7073C4.72345 5.41346 5.25519 5.05362 5.83119 5.00541C6.9189 4.91301 7.8053 6.01894 7.65195 7.19029L6.89888 13.0247ZM6.9995 0C8.1034 0 9 0.896101 9 2C9 3.1034 8.1034 4 6.9995 4C5.89208 4 5 3.1034 5 2C5 0.896101 5.89208 0 6.9995 0ZM8.33747 9L11.5848 11.2677C12.0481 11.5929 12.1385 12.2012 11.781 12.6233C11.4276 13.0454 10.7598 13.124 10.297 12.8021L8 11.1993L8.33747 9Z" fill="#0077C1"/></svg>'
                );

                wayfindingbtn.appendChild(btnholder);
                tenant_detail.appendChild(tenant_unit);
                tenant_detail.appendChild(wayfindingbtn);
                tenant_title.appendChild(name);
                card.appendChild(tenant_logo);
                card.appendChild(tenant_title);
                card.appendChild(tenant_detail);
                col.appendChild(card);
                row.appendChild(col);

                if ((tenant_index + 1) % 3 == 0) {
                    slide.appendChild(row);
                }
            }

            $("#swiperShopping .swiper-wrapper").append(slide);
        }
    }

    if (num_left_tenant != 0) {

        // create slide for remaining happenings 
        var slide = document.createElement('div');
        slide.className = "swiper-slide";

        for(var j=0; j<num_left_tenant; j++) {

            if (tenant_index % num_column == 0) {

                if (j!= 0) {
                    slide.appendChild(row);
                }
                var row = document.createElement("div");
                row.className = 'row';
            }

            var col = document.createElement("div");
            col.className = "col";

            var card = document.createElement("div"); 
            card.className = "card";
            // happening.setAttribute("onclick", "onclickHappening(620e0e3638150a1e86e0001e)");
            card.setAttribute("onclick", "onclickDirectory(\""+ tenantArray[tenant_index].id + "\")");

            var tenant_logo = document.createElement('div');
            tenant_logo.className = "tenantlogo";
            // onclick happening popup

            var newobj = new Object();
            newobj.FIT_TYPE = "centerImg";
            newobj.MAIN_URL = tenantArray[tenant_index].storeThumbnailUrl;
            tenant_logo.appendChild(createImg(newobj));

            var tenant_title = document.createElement('div');
            tenant_title.className = "tenantTitle";
            
            var name = document.createElement("p");
            name.className = "tenantname";
            name.innerHTML = tenantArray[tenant_index].storeNameEng;

            var tenant_detail = document.createElement('div');
            tenant_detail.className = "tenantdetail";

            var tenant_unit= document.createElement("div");
            tenant_unit.className = "tenantunit";
            tenant_unit.innerHTML = tenantArray[tenant_index].storeUnitNum;

            var wayfindingbtn = document.createElement("div");
            wayfindingbtn.className = 'wayfindingbtn';

            var btnholder = document.createElement('div');
            btnholder.className = 'btnholder';
            btnholder.setAttribute('onclick', "onclickwayfindDirectory(\""+ tenantArray[tenant_index].storeUnitNum+"\",\""+tenantArray[tenant_index].id+"\")");

            $(btnholder).html('<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83884 23.9334C2.47703 24.1692 3.16356 23.7587 3.36522 23.017L5 17.0818L3.51854 15.5932C3.3242 15.4014 3.16014 15.2004 3.02586 15L1.05856 22.1486C0.853475 22.8903 1.20455 23.6936 1.83884 23.9334ZM6.89888 13.0247C6.83458 13.5337 6.92312 13.7616 7.28147 14.0996L8.95731 15.679C9.332 16.0343 9.59339 16.5869 9.63028 17.1264L9.99654 22.4695C10.0487 23.2506 9.50486 23.9393 8.78815 23.9961C8.07091 24.0535 7.43852 23.4658 7.38634 22.6802L7.03958 17.6441L4.30449 15.0867C3.47079 14.3056 3.25736 13.5205 3.4144 12.2918L3.89765 8.56768L3.19306 8.97114L2.12959 12.748C1.952 13.3713 1.33963 13.7225 0.767845 13.5337C0.195531 13.3409 -0.126461 12.6734 0.0469192 12.0507L1.14254 8.17283C1.28746 7.65516 1.65003 7.17709 2.08902 6.92686L4.21596 5.7073C4.72345 5.41346 5.25519 5.05362 5.83119 5.00541C6.9189 4.91301 7.8053 6.01894 7.65195 7.19029L6.89888 13.0247ZM6.9995 0C8.1034 0 9 0.896101 9 2C9 3.1034 8.1034 4 6.9995 4C5.89208 4 5 3.1034 5 2C5 0.896101 5.89208 0 6.9995 0ZM8.33747 9L11.5848 11.2677C12.0481 11.5929 12.1385 12.2012 11.781 12.6233C11.4276 13.0454 10.7598 13.124 10.297 12.8021L8 11.1993L8.33747 9Z" fill="#0077C1"/></svg>'
            );

            wayfindingbtn.appendChild(btnholder);
            tenant_detail.appendChild(tenant_unit);
            tenant_detail.appendChild(wayfindingbtn);
            tenant_title.appendChild(name);
            card.appendChild(tenant_logo);
            card.appendChild(tenant_title);
            card.appendChild(tenant_detail);
            col.appendChild(card);
            row.appendChild(col);

            tenant_index++;
        }

        var blank_col = num_column - (num_left_tenant % num_column);

        if (blank_col % num_column != 0) {
            
            for(var num=0; num < blank_col; num++) {
                
                var col = document.createElement("div");
                col.className = "col";
                row.appendChild(col);
            }
        }
        
        slide.appendChild(row);
        $("#swiperShopping .swiper-wrapper").append(slide);
    }

    SwiperShopping.update();
    SwiperShopping.slideTo(0,1,false);
}

// ScreenSaver Page
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

    // SwiperScreenSaver.autoplay.pause();

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

    onclickNavBtn('skHome');
    $('.navmenu').show();

}

function download(content, fileName, contentType) {

    var a = document.createElement('a');
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();

}

// Information page 
function onclickInfo() {

    isatFloorGuide = false;
    resetPage();
    hideWayfindingResult();
    myGameInstance.SendMessage('MainCamera', 'QuickReset');

    $('.skPage').hide();
    // $('#skInfo #infoContainer .infoRow .qrcodebox .capitastarqrholder, #skInfo #infoContainer .infoRow .qrcodebox .ecapitaqrholder').html('');
    // // generate qr code

    // new QRCode(document.querySelector("#skInfo #infoContainer .infoRow .qrcodebox .ecapitaqrholder"), {
    //     text: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    //     width: 80,
    //     height: 80,
    //     correctLevel : QRCode.CorrectLevel.H,
    //     background: '#ffffff',
    // });

    $('#skInfo').show();
    resetNavBtnDefaultSvg();
    $('.navmenu .followtab .navright .info').html('<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">'
    + '<rect x="1" y="1" width="62" height="62" rx="31" fill="#0077C1" stroke="white" stroke-width="2"/>'
    + '<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M35.5551 42.4423C35.4511 42.9371 35.3613 43.3818 35.2618 43.823C35.2469 43.8889 35.1967 43.9724 35.1466 43.9944C34.1037 44.4373 33.1056 45.0437 31.9939 45.2318C30.9464 45.4093 29.9005 45.3996 28.9301 44.831C27.9178 44.2378 27.3448 43.2711 27.3066 41.9141C27.2714 40.6407 27.5483 39.4288 27.8333 38.2169C28.2463 36.4601 28.6668 34.7059 29.0431 32.9377C29.1516 32.4262 29.1635 31.8708 29.1426 31.3391C29.1052 30.4312 28.7371 30.0489 27.959 29.9988C27.4016 29.9628 26.8577 30.0357 26.331 30.2607C26.1641 30.3319 25.9936 30.3934 25.7773 30.4769C25.8828 29.9663 25.9779 29.4891 26.0833 29.0154C26.0946 28.9635 26.1574 28.9073 26.2068 28.8888C27.252 28.4855 28.2867 28.0293 29.3498 27.7068C30.1676 27.4598 31.016 27.531 31.842 27.8079C33.2568 28.2824 34.0655 29.7026 33.9705 31.4507C33.9032 32.7065 33.6391 33.9053 33.3458 35.1022C33.0151 36.453 32.6694 37.7985 32.3866 39.1634C32.2333 39.9025 32.142 40.6732 32.1233 41.4343C32.0993 42.3571 32.4682 42.7508 33.25 42.8782C33.8194 42.9705 34.3663 42.8817 34.908 42.6893C35.11 42.6181 35.3097 42.5364 35.5551 42.4423" fill="#A3CEE9"/>'
    + '<path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M33.9919 24.4447C32.7032 24.4366 31.4934 23.5177 31.2012 22.3234C30.7922 20.6546 31.8114 19.0118 33.4485 18.7226C34.5801 18.5219 35.5516 18.8599 36.2916 19.8129C37.2744 21.0795 37.0126 22.9108 35.736 23.8606C35.2131 24.2497 34.6196 24.448 33.9919 24.4447" fill="#A3CEE9"/>'
    + '<mask id="path-4-inside-1_1050_210" fill="white">'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5551 42.4423C35.4511 42.9371 35.3613 43.3818 35.2618 43.823C35.2469 43.8889 35.1967 43.9724 35.1466 43.9944C34.1037 44.4373 33.1056 45.0437 31.9939 45.2318C30.9464 45.4093 29.9005 45.3996 28.9301 44.831C27.9178 44.2378 27.3448 43.2711 27.3066 41.9141C27.2714 40.6407 27.5483 39.4288 27.8333 38.2169C28.2463 36.4601 28.6668 34.7059 29.0431 32.9377C29.1516 32.4262 29.1635 31.8708 29.1426 31.3391C29.1052 30.4312 28.7371 30.0489 27.959 29.9988C27.4016 29.9628 26.8577 30.0357 26.331 30.2607C26.1641 30.3319 25.9936 30.3934 25.7773 30.4769C25.8828 29.9663 25.9779 29.4891 26.0833 29.0154C26.0946 28.9635 26.1574 28.9073 26.2068 28.8888C27.252 28.4855 28.2867 28.0293 29.3498 27.7068C30.1676 27.4598 31.016 27.531 31.842 27.8079C33.2568 28.2824 34.0655 29.7026 33.9705 31.4507C33.9032 32.7065 33.6391 33.9053 33.3458 35.1022C33.0151 36.453 32.6694 37.7985 32.3866 39.1634C32.2333 39.9025 32.142 40.6732 32.1233 41.4343C32.0993 42.3571 32.4682 42.7508 33.25 42.8782C33.8194 42.9705 34.3663 42.8817 34.908 42.6893C35.11 42.6181 35.3097 42.5364 35.5551 42.4423"/>'
    + '</mask>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M35.5551 42.4423C35.4511 42.9371 35.3613 43.3818 35.2618 43.823C35.2469 43.8889 35.1967 43.9724 35.1466 43.9944C34.1037 44.4373 33.1056 45.0437 31.9939 45.2318C30.9464 45.4093 29.9005 45.3996 28.9301 44.831C27.9178 44.2378 27.3448 43.2711 27.3066 41.9141C27.2714 40.6407 27.5483 39.4288 27.8333 38.2169C28.2463 36.4601 28.6668 34.7059 29.0431 32.9377C29.1516 32.4262 29.1635 31.8708 29.1426 31.3391C29.1052 30.4312 28.7371 30.0489 27.959 29.9988C27.4016 29.9628 26.8577 30.0357 26.331 30.2607C26.1641 30.3319 25.9936 30.3934 25.7773 30.4769C25.8828 29.9663 25.9779 29.4891 26.0833 29.0154C26.0946 28.9635 26.1574 28.9073 26.2068 28.8888C27.252 28.4855 28.2867 28.0293 29.3498 27.7068C30.1676 27.4598 31.016 27.531 31.842 27.8079C33.2568 28.2824 34.0655 29.7026 33.9705 31.4507C33.9032 32.7065 33.6391 33.9053 33.3458 35.1022C33.0151 36.453 32.6694 37.7985 32.3866 39.1634C32.2333 39.9025 32.142 40.6732 32.1233 41.4343C32.0993 42.3571 32.4682 42.7508 33.25 42.8782C33.8194 42.9705 34.3663 42.8817 34.908 42.6893C35.11 42.6181 35.3097 42.5364 35.5551 42.4423" fill="white"/>'
    + '<path d="M35.2618 43.823L36.237 44.0444L36.2373 44.043L35.2618 43.823ZM35.1466 43.9944L35.5376 44.9149L35.5481 44.9102L35.1466 43.9944ZM31.9939 45.2318L31.8271 44.2458L31.8267 44.2458L31.9939 45.2318ZM28.9301 44.831L28.4245 45.6938L28.4245 45.6938L28.9301 44.831ZM27.3066 41.9141L26.307 41.9417L26.307 41.9423L27.3066 41.9141ZM27.8333 38.2169L28.8067 38.4458L28.8068 38.4457L27.8333 38.2169ZM29.0431 32.9377L30.0212 33.1458L30.0213 33.1451L29.0431 32.9377ZM29.1426 31.3391L30.1418 31.2997L30.1417 31.2979L29.1426 31.3391ZM27.959 29.9988L27.8945 30.9967L27.8947 30.9968L27.959 29.9988ZM26.331 30.2607L26.7234 31.1805L26.7238 31.1803L26.331 30.2607ZM25.7773 30.4769L24.798 30.2746L24.427 32.0703L26.1376 31.4098L25.7773 30.4769ZM26.0833 29.0154L27.0594 29.2328L27.0607 29.2269L26.0833 29.0154ZM26.2068 28.8888L26.5569 29.8256L26.5669 29.8218L26.2068 28.8888ZM29.3498 27.7068L29.0607 26.7495L29.0595 26.7499L29.3498 27.7068ZM31.842 27.8079L32.16 26.8598L32.1598 26.8597L31.842 27.8079ZM33.9705 31.4507L32.972 31.3964L32.9719 31.3971L33.9705 31.4507ZM33.3458 35.1022L32.3745 34.8643L32.3745 34.8645L33.3458 35.1022ZM32.3866 39.1634L33.3658 39.3666L33.3658 39.3663L32.3866 39.1634ZM32.1233 41.4343L33.1229 41.4602L33.123 41.4589L32.1233 41.4343ZM33.25 42.8782L33.0892 43.8652L33.09 43.8654L33.25 42.8782ZM34.908 42.6893L34.5756 41.7461L34.5731 41.747L34.908 42.6893ZM34.5765 42.2366C34.4703 42.7418 34.3837 43.1713 34.2863 43.603L36.2373 44.043C36.339 43.5923 36.4319 43.1324 36.5337 42.648L34.5765 42.2366ZM34.2867 43.6016C34.3084 43.5057 34.3434 43.4349 34.3785 43.3809C34.3982 43.3505 34.4299 43.307 34.4776 43.2594C34.5211 43.2161 34.6088 43.1383 34.7452 43.0785L35.5481 44.9102C35.8401 44.7822 35.9976 44.5599 36.0563 44.4694C36.1327 44.3516 36.2003 44.2062 36.237 44.0444L34.2867 43.6016ZM34.7557 43.0739C34.4743 43.1934 34.2001 43.3222 33.9421 43.4445C33.6787 43.5693 33.4354 43.6858 33.1901 43.7947C32.7003 44.0123 32.2616 44.1723 31.8271 44.2458L32.1606 46.2178C32.8379 46.1032 33.4541 45.8659 34.002 45.6225C34.2755 45.501 34.5468 45.3711 34.7986 45.2518C35.0558 45.1299 35.2974 45.0168 35.5375 44.9148L34.7557 43.0739ZM31.8267 44.2458C30.8843 44.4056 30.1147 44.3661 29.4357 43.9682L28.4245 45.6938C29.6862 46.4331 31.0085 46.413 32.161 46.2177L31.8267 44.2458ZM29.4357 43.9683C28.7464 43.5643 28.3355 42.9287 28.3062 41.886L26.307 41.9423C26.354 43.6135 27.0892 44.9113 28.4245 45.6938L29.4357 43.9683ZM28.3062 41.8865C28.2752 40.7618 28.5185 39.6713 28.8067 38.4458L26.8599 37.9879C26.578 39.1862 26.2677 40.5196 26.307 41.9417L28.3062 41.8865ZM28.8068 38.4457C29.2183 36.6951 29.642 34.9273 30.0212 33.1458L28.065 32.7295C27.6915 34.4845 27.2743 36.225 26.8598 37.988L28.8068 38.4457ZM30.0213 33.1451C30.155 32.5148 30.164 31.8639 30.1418 31.2997L28.1434 31.3784C28.163 31.8776 28.1481 32.3375 28.0648 32.7302L30.0213 33.1451ZM30.1417 31.2979C30.1187 30.7387 29.9897 30.1421 29.5715 29.678C29.1375 29.1962 28.5555 29.0352 28.0232 29.0009L27.8947 30.9968C28.1406 31.0126 28.1317 31.0678 28.0856 31.0166C28.0554 30.9831 28.1291 31.0315 28.1434 31.3802L30.1417 31.2979ZM28.0235 29.0009C27.3332 28.9563 26.6293 29.0459 25.9382 29.3411L26.7238 31.1803C27.0861 31.0256 27.4701 30.9693 27.8945 30.9967L28.0235 29.0009ZM25.9385 29.3409C25.7928 29.4031 25.661 29.4499 25.4171 29.544L26.1376 31.4098C26.3262 31.337 26.5354 31.2607 26.7234 31.1805L25.9385 29.3409ZM26.7567 30.6792C26.8641 30.1592 26.9562 29.6965 27.0594 29.2328L25.1073 28.798C24.9995 29.2817 24.9016 29.7734 24.798 30.2746L26.7567 30.6792ZM27.0607 29.2269C27.0317 29.3608 26.9793 29.4584 26.9422 29.5161C26.9034 29.5767 26.8635 29.6216 26.8311 29.6534C26.7765 29.707 26.6893 29.7761 26.5569 29.8256L25.8567 27.9521C25.6749 28.0201 25.5316 28.1265 25.4304 28.2258C25.3406 28.3139 25.1702 28.5071 25.106 28.8039L27.0607 29.2269ZM26.5669 29.8218C27.6718 29.3953 28.6236 28.9721 29.6401 28.6637L29.0595 26.7499C27.9498 27.0865 26.8322 27.5756 25.8467 27.9559L26.5669 29.8218ZM29.6389 28.6641C30.2123 28.491 30.8435 28.5279 31.5242 28.756L32.1598 26.8597C31.1885 26.5342 30.1229 26.4287 29.0607 26.7495L29.6389 28.6641ZM31.524 28.756C32.4052 29.0516 33.0493 29.9738 32.972 31.3964L34.969 31.5049C35.0817 29.4315 34.1083 27.5133 32.16 26.8598L31.524 28.756ZM32.9719 31.3971C32.9099 32.5533 32.6659 33.675 32.3745 34.8643L34.3171 35.3402C34.6122 34.1356 34.8964 32.8597 34.9691 31.5042L32.9719 31.3971ZM32.3745 34.8645C32.0475 36.2002 31.695 37.5727 31.4074 38.9605L33.3658 39.3663C33.6439 38.0244 33.9827 36.7059 34.3171 35.34L32.3745 34.8645ZM31.4075 38.9602C31.2423 39.7561 31.1438 40.5867 31.1236 41.4097L33.123 41.4589C33.1402 40.7598 33.2242 40.0488 33.3658 39.3666L31.4075 38.9602ZM31.1236 41.4084C31.1086 41.9885 31.2096 42.5951 31.6089 43.0857C32.0124 43.5815 32.5756 43.7815 33.0892 43.8652L33.4109 41.8913C33.1426 41.8475 33.1305 41.7869 33.1601 41.8233C33.1855 41.8545 33.1141 41.8028 33.1229 41.4602L31.1236 41.4084ZM33.09 43.8654C33.8697 43.9917 34.5909 43.8632 35.2428 43.6316L34.5731 41.747C34.1416 41.9003 33.7691 41.9493 33.41 41.8911L33.09 43.8654ZM35.2403 43.6324C35.4585 43.5555 35.6959 43.4593 35.9129 43.3761L35.1973 41.5085C34.9236 41.6134 34.7614 41.6807 34.5756 41.7461L35.2403 43.6324Z" fill="white" mask="url(#path-4-inside-1_1050_210)"/>'
    + '<mask id="path-6-inside-2_1050_210" fill="white">'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M33.9919 24.4447C32.7032 24.4366 31.4934 23.5177 31.2012 22.3234C30.7922 20.6546 31.8114 19.0118 33.4485 18.7226C34.5801 18.5219 35.5516 18.8599 36.2916 19.8129C37.2744 21.0795 37.0126 22.9108 35.736 23.8606C35.2131 24.2497 34.6196 24.448 33.9919 24.4447"/></mask>'
    + '<path fill-rule="evenodd" clip-rule="evenodd" d="M33.9919 24.4447C32.7032 24.4366 31.4934 23.5177 31.2012 22.3234C30.7922 20.6546 31.8114 19.0118 33.4485 18.7226C34.5801 18.5219 35.5516 18.8599 36.2916 19.8129C37.2744 21.0795 37.0126 22.9108 35.736 23.8606C35.2131 24.2497 34.6196 24.448 33.9919 24.4447" fill="white"/>'
    + '<path d="M31.2012 22.3234L32.1726 22.0858L32.1725 22.0853L31.2012 22.3234ZM33.4485 18.7226L33.6225 19.7073L33.6231 19.7072L33.4485 18.7226ZM36.2916 19.8129L37.0816 19.1999L37.0814 19.1996L36.2916 19.8129ZM35.736 23.8606L35.1391 23.0583L35.139 23.0584L35.736 23.8606ZM33.9982 23.4448C33.1359 23.4393 32.3484 22.8044 32.1726 22.0858L30.2299 22.561C30.6385 24.231 32.2706 25.4339 33.9856 25.4447L33.9982 23.4448ZM32.1725 22.0853C31.8914 20.9385 32.5939 19.8891 33.6225 19.7073L33.2745 17.7378C31.029 18.1346 29.693 20.3707 30.23 22.5615L32.1725 22.0853ZM33.6231 19.7072C34.4035 19.5688 34.9981 19.7777 35.5017 20.4262L37.0814 19.1996C36.105 17.9421 34.7567 17.475 33.2739 17.7379L33.6231 19.7072ZM35.5015 20.4259C36.138 21.2462 35.9701 22.44 35.1391 23.0583L36.3329 24.6629C38.0551 23.3816 38.4108 20.9129 37.0816 19.1999L35.5015 20.4259ZM35.139 23.0584C34.7836 23.3228 34.4 23.4468 33.9971 23.4447L33.9867 25.4447C34.8392 25.4491 35.6426 25.1766 36.333 24.6628L35.139 23.0584Z" fill="white" mask="url(#path-6-inside-2_1050_210)"/>'
    + '</svg>');
}

// floor guide (unity function)
function UnityLoadingComplete()
{
    console.log("3D ready");

}

function onSwitchFloorComplete()
{
    // console.log("SF completed");
}

function changeLevelDisplay(level)
{
    $('#skFloorGuide #floorleveltxt').text(level);
}

function onclickLevelBtn(id)
{
    if(currentLevel == id)
    {
        return;
    }

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
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn svg path').attr('fill', '#0077C1');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn svg circle').attr('stroke', '#A3CEE9');
    $('.amenities .iconholder svg rect').attr('fill', '#0077C1');

}

function selectFloorlvlbtn(desfloor) {
    
    switch(desfloor)
    {
        case 'B1': {
            //$('#skFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#skFloorGuide .lvlbtn .lvltxt').css({"color":"#222222", "font-weight" : "400"});
            $('#skFloorGuide .lvlbtngroup #B1 .lvltxt').css({"color":"#0077C1", "font-weight" : "700"});
            break;
        }

        case 'L1' : {
            //$('#skFloorGuide .lvlbtn').css({"background-color":"white"});
            $('#skFloorGuide .lvlbtn .lvltxt').css({"color":"#222222", "font-weight": "400"});
            $('#skFloorGuide .lvlbtngroup #L1 .lvltxt').css({"color":"#0077C1", "font-weight" : "700"});
            break;
        }

        case 'L2': {
            $('#skFloorGuide .lvlbtn .lvltxt').css({"color":"#222222", "font-weight": "400"});
            $('#skFloorGuide .lvlbtngroup #L2 .lvltxt').css({"color":"#0077C1", "font-weight" : "700"});
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
        $('#skFloorGuide .bottomlayout .updownicon img').attr('src','asset/up.gif');
        
    }
    else{
        $('#skFloorGuide .bottomlayout .updownicon img').attr('src','asset/down.gif');
    }
    
    currentfloor = desfloor;
    currentLevel = currentfloor;

    $('#skFloorGuide .bottomlayout .lvlbtngroup').hide();
    $('#skFloorGuide .bottomlayout .updownicon').fadeIn('fast');
}

function hideIconsbtn() {
    $('#skFloorGuide .webgl-wrapper .webgl-content #unityContainer #unity-canvas').css('pointer-events', 'none');
    // disable icons
    $('.middlelayout').css('pointer-events','none');
    $('.bottomlayout').css('pointer-events', 'none');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn').css('pointer-events', 'none');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn svg path').attr('fill', '#AAAAAA');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn svg circle').attr('stroke', '#AAAAAA');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btntext').css('color', '#AAAAAA');
    $('.amenities .iconholder svg path').attr('fill', '#AAAAAA');
    $('.amenities .iconholder svg rect').attr('fill', '#AAAAAA');
    $('.amenities .iconholder').css('border', '2px solid #AAAAAA');
    $('.amenities .amenitiestxt').css('color', '#AAAAAA');
}

function showIconsbtn() {
    $('#skFloorGuide .webgl-wrapper .webgl-content #unityContainer #unity-canvas').css('pointer-events', 'visible');
    $('.middlelayout').css('pointer-events','visible');
    $('.bottomlayout').css('pointer-events', 'visible');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn').css('pointer-events', 'visible');
    resetIconbtn();
    $('.amenities .iconholder svg path').attr('fill', '#0077C1');
    $('.amenities .iconholder').css('border', '');
    $('.amenities .amenitiestxt').css('color', '#000000');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btntext').css('color', '#000000');

}

function updateCurrentlevel(currentlvl){
    newcurrentLevel = currentlvl;
    currentLevel = newcurrentLevel;
}

function onclickResetBtn()
{
    // console.log(currentLevel);
    // console.log(kioskInfo[0].kioskFloor);

    hideWayfindingResult();

    myGameInstance.SendMessage('MainCamera','Restore');

    currentLevel = kioskInfo[0].kioskFloor;

    showIconsbtn();

}

function showWayfindingResult(wfsteps){

    if (wfsteps.length == 0 ) {
        wfsteps += kioskInfo[0].kioskFloor;
        wfsteps += ',' + finaldes;
    }

    wfstepsArray = wfsteps.toString().split(',');

    if(iswfresulthidden) {
        $('#skWayfindresult .wfresult #wfshowicon').trigger('click');
        
    }
    $('#skWayfindresult').fadeIn('fast');

    $('#destinationlocation').text('Destination | ' + wfstepsArray[wfstepsArray.length - 1]);
    $('.destination').show();

    $('#skFloorGuide .toplayout .mobileqrcode .qrcode').html('');
    
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn').html('<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="27" fill="white" stroke="#A3CEE9" stroke-width="2"/><path d="M38.8902 18.9678C37.9653 17.8814 36.8747 16.9355 35.6511 16.1662C33.3966 14.7491 30.7887 14 28.1093 14C24.3406 14 20.7972 15.4561 18.1327 18.1007C15.4681 20.7453 14 24.2607 14 27.9997C14 31.7387 15.4675 35.2553 18.1327 37.8993C20.7979 40.5433 24.3406 42 28.1093 42C31.0048 42 33.7876 41.136 36.1572 39.5002C38.4708 37.9035 40.2339 35.6879 41.2555 33.0922L38.0472 31.8487C36.4368 35.939 32.5357 38.5824 28.1093 38.5824C22.2284 38.5824 17.4442 33.8352 17.4442 27.9997C17.4442 22.1642 22.2284 17.417 28.1087 17.417C31.0855 17.417 33.8375 18.6171 35.8149 20.6739L32.0665 22.7539L36.9553 25.6441L41.8442 28.5344L41.9218 22.8883L42 17.2422L38.8902 18.9678Z" fill="#0077C1"/></svg>')

    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn').attr('onclick', 'onclickReplay()');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btntext').text('Replay');

    generateWayfindsteps(wfstepsArray);

    var startshopId = kioskInfo[0].kioskLocation + '_' + kioskInfo[0].kioskFloor; // kiosk pos and floor as startpoint

    // add mobilewayfinding list
    //var mblink = "https://map.tovcloud.com/?=start="+ startshopId + '%end=' + endshopId;
    // console.log(startshopId);
    var mblink = "https://maps.capitaland.com/sengkanggrand/?start=" + startshopId + '&end=' + endshopId + '&route=' + route;

    new QRCode(document.querySelector("#skFloorGuide .toplayout .mobileqrcode .qrcode"), {
        text: mblink,
        width: 80,
        height: 80,
    });

    $('#skFloorGuide .toplayout .mobileqrcode').show();

}

function onclickReplay() {
    currentLevel = kioskInfo[0].kioskFloor;
    changeLevelDisplay(currentLevel);
    selectFloorlvlbtn(currentLevel);
    $("#skWayfindresult").hide();
    myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
}

function hideWayfindingResult() {
    clearWayfindingtimeout();
    $('#skWayfindresult').css('display','none');
    $('.destination').hide();
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn').html('<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="27" fill="white" stroke="#A3CEE9" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 26.8605L41 15L29.1395 45L25.5985 30.4015L11 26.8605ZM28.4419 27.5581C29.2125 28.3288 30.4619 28.3288 31.2326 27.5581C32.0032 26.7875 32.0032 25.5381 31.2326 24.7674C30.4619 23.9968 29.2125 23.9968 28.4419 24.7674C27.6712 25.5381 27.6712 26.7875 28.4419 27.5581Z" fill="#0077C1"/></svg>');
    // $('#skFloorGuide .toplayout .yourlocation .buttongroup').attr('onclick', 'onclickResetBtn()');
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btntext').text('Your location');
    $('#skFloorGuide .toplayout .mobileqrcode').hide();
    $('#skFloorGuide .toplayout .yourlocation .buttongroup .btn').attr('onclick', 'onclickResetBtn()');
}

function generateWayfindsteps (wfsteps) {
    $('#skWayfindresult .wfresult .wffloorcontainer').html('');

    $('#skWayfindresult .wfdetail #lvlbtncontainer').html('');

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

        $('#skWayfindresult .wfresult .wffloorcontainer').append(wffloorstep);

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
        $('#skWayfindresult .wfdetail #lvlbtncontainer').append(lvlbtn);
    }

}


// Directory page
function onclickDirectory(tenant_id){
    
    var tenant = getTenantObj(tenant_id);
    // console.log(tenant)
    if(tenant != undefined) {

    $("#skDirectorymodal").fadeIn('fast');

    $("#skDirectorymodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");
    
    if (tenant.storeImageUrl == '' || tenant.storeImageUrl == null) {
        $("#skDirectorymodal .modalbox .modalimgholder img").attr('src', './asset/error/errorimg.jpg');

    }
    else {
        var imgurl = tenant.storeImageUrl.split('/');
        // console.log(imgurl);
        var imgdetail = getTenantThumbnail(imgurl[imgurl.length - 1]);
        // console.log(imgdetail.file_path);
        $("#skDirectorymodal .modalbox .modalimgholder img").attr('src', `../${imgdetail.file_path}/${imgdetail.file_name}`);
    }

    $("#skDirectorymodal .modalbox .modaldetail #tenantName").html(tenant.storeNameEng);

    $("#skDirectorymodal .modalbox .modaldetail .modalblog .bleft #tenantUnitNum").text(tenant.storeUnitNum);

    $("#skDirectorymodal .modalbox .modaldetail .modalblog .bleft #tenantTime").text(tenant.storeOperatingHour);

    $("#skDirectorymodal .modalbox .modaldetail .modalblog .bleft #tenantPhone").text(tenant.storePhoneNum);

    // $("#wgDirectorymodal .modalbox .modaldetail .modalblog .bright .qrholder").attr('src', tenant.storeQrCode);

    new QRCode(document.querySelector("#skDirectorymodal .modalbox .modaldetail .modalblog .bright .qrholder"), {
        text: tenant.storeWebsiteLink,
        width: 80,
        height: 80,
    });

    $("#skDirectorymodal .modalbox .modaldesc .destxtarea #tenantDescription").html(decodeHTML(tenant.storeDescEng));
    
    // $("#wgDirectorymodal").attr("style", "");

    $('#skDirectorymodal .modalbox .btnholder').unbind('click');

    $('#skDirectorymodal .modalbox .btnholder').on('click', function() {
        $('#skDirectorymodal').fadeOut(100);
        onclickwayfindDirectory(tenant.storeUnitNum, tenant.id);
    });
    }
    else {
        return;
    }

    //$('#skDirectorymodal .modalbox .btnholder').unbind('click').attr('onclick', 'onclickwayfindDirectory(\""+ tenant.storeUnitNum+"\")")')
}

// Directory page (calling unity functions)
function onclickwayfindDirectory(shopunitnum, id) {

    hideWayfindingResult();

    desfloor = "";

    $("#swiperDirectory .wayfindingbtn").click(function(event){
        event.stopPropagation();
        event.currentTarget.children[0].style.background = "#006EB8";
        event.currentTarget.children[0].children[0].children[0].attributes.fill.value = "#FFFFFF";
    });

    $("#swiperDining .wayfindingbtn").click(function(event){
        event.stopPropagation();
        event.currentTarget.children[0].style.background = "#006EB8";
        event.currentTarget.children[0].children[0].children[0].attributes.fill.value = "#FFFFFF";
    });

    $("#swiperShopping .wayfindingbtn").click(function(event){
        event.stopPropagation();
        event.currentTarget.children[0].style.background = "#006EB8";
        event.currentTarget.children[0].children[0].children[0].attributes.fill.value = "#FFFFFF";
    });

    wayfindshopunit = shopunitnum;
    endshopId = id;

    // for testing
    desfloor = getFloor(shopunitnum.split('-')[0].split('#')[1]);

    // console.log(kioskInfo[0].kioskFloor);
    // console.log(desfloor);

    // show route box (different level)
    if(kioskInfo[0].kioskFloor != desfloor) {
        $("#skWayFindescliftPopup").show();
    }
    else {
        $('#skWayFindescliftPopup').hide();
        if(!isatFloorGuide) {
            $('.navmenu .navgroup .navbox #navFloorGuide').css('pointer-events', 'visible');
            onclickNavBtn('skFloorGuide');
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
    $('#skWayFindescliftPopup').fadeOut('fast');
    onclickNavBtn("skFloorGuide");
    hideIconsbtn();

    wayfindvalue = wayfindshopunit + '|' + "lift";
    route = 'lift';
    //myGameInstance.SendMessage('WayfindingObject', 'WayfindingBegin', wayfindvalue.toString());
    timeout = setTimeout(function() {
        myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
    },300);
    // myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
}

function onclickEscWayFind() {
    $('#skWayFindescliftPopup').fadeOut('fast');
    onclickNavBtn("skFloorGuide");
    hideIconsbtn();

    wayfindvalue = wayfindshopunit + '|' + "esc";
    route = 'esc';
    // calling unity wayfind function 
    //myGameInstance.SendMessage('WayfindingObject', 'WayfindingBegin', wayfindvalue.toString());
    timeout = setTimeout(function() {
        myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
    },300);
    // myGameInstance.SendMessage('WayfindingObject', 'ReplayWayfind', wayfindvalue.toString());
}

function getFloor(floor) {
    switch (floor) {
        case "B1":
            finaldes = "B1";
            break;
        case "01":
            finaldes = "L1";
            break;
        case "02":
            finaldes = "L2";
            break;
    }
    return finaldes;
}

// Dining page
function createDiningLanding(diningcategoryArray) {

    $('#skDining').hide();

    $('#skDiningLanding').show();

    for(var i=0; i<diningcategoryArray.length; i++) {
        var diningHolder = document.createElement('div');
        diningHolder.className = 'diningHolder';
        diningHolder.id = diningcategoryArray[i].catId;
        //diningHolder.setAttribute("onclick", "onclickCatBtnDining("+'"skDining"'+","+'diningcategoryArray[i].catId'+")");
        diningHolder.setAttribute("onclick", "onclickCatBtnDining("+'"skDining"'+",\""+ diningcategoryArray[i].catId + "\")");
        
        // diningHolder.setAttribute("onclick", "onclickCatBtn(\"" + diningcategoryArray[i].catId + "\")");
        // var drow = document.createElement('div');
        // drow.className = 'drow';

        var item = document.createElement('div');
        item.className = 'item';

        var itemtitle = document.createElement('div');
        itemtitle.className = 'itemtitle';
        itemtitle.innerText = diningcategoryArray[i].catName;

        var itemtitleholder = document.createElement('div');
        itemtitleholder.className = 'itemtitleholder';

        var itemtitleborder = document.createElement('div');
        itemtitleborder.className = 'itemtitleborder';

        var itemimageholder = document.createElement('div');
        itemimageholder.className = 'itemimageholder';

        var itemtitlelogo = document.createElement('div');
        itemtitlelogo.className = 'itemtitlelogo';
        itemtitlelogo.innerHTML = diningcategoryArray[i].catSVG;

        var itemimageholder = document.createElement('div');
        itemimageholder.className = 'itemimageholder';
        
        var itemimage = document.createElement('img');
        itemimage.className = 'itemimage';
        itemimage.src = '../src/asset/Category/' + diningcategoryArray[i].catImg;

        itemimageholder.appendChild(itemimage);
        itemtitleholder.appendChild(itemtitlelogo);
        itemtitleholder.appendChild(itemtitle);
        itemtitleborder.appendChild(itemtitleholder);
        item.appendChild(itemtitleborder);
        item.appendChild(itemimageholder);
        // dcol.appendChild(item);
        diningHolder.appendChild(item); 

        $('#skDiningLanding #skDiningContainer').append(diningHolder);

    }
}

function onclickDining(tenant_id){
    
    var tenant = getTenantObj(tenant_id);
    // console.log(tenant);

    $("#skDiningmodal").fadeIn('fast');

    $("#skDiningmodal .modalbox .modalimgholder img").attr('src', tenant.storeImageUrl);

    $("#skDiningmodal .modalbox .modaldetail #tenantName").html(tenant.storeNameEng);

    $("#skDiningmodal .modalbox .modaldetail .modalblog .bleft #tenantUnitNum").text(tenant.storeUnitNum);

    $("#skDiningmodal .modalbox .modaldetail .modalblog .bleft #tenantTime").text(tenant.storeOperatingHour);

    $("#skDiningmodal .modalbox .modaldetail .modalblog .bleft #tenantPhone").text(tenant.storePhoneNum);

    new QRCode(document.querySelector("#skDiningmodal .modalbox .modaldetail .modalblog .bright .qrholder"), {
        text: tenant.storeWebsiteLink,
        width: 80,
        height: 80,
    });

    $("#skDiningmodal .modalbox .modaldesc .destxtarea #tenantDescription").html(tenant.storeDescEng);
    
    $("#skDiningmodal").attr("style", "");
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
  

function closeDiningPopUp() {
    $("#skDiningmodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");
    $("#skDiningmodal").fadeOut('fast');
}
 
// Shopping page
function onclickShopping(tenant_id){
    
    var tenant = getTenantObj(tenant_id);
    // console.log(tenant);

    $("#skShoppingmodal").fadeIn('fast');

    $("#skShoppingmodal .modalbox .modalimgholder img").attr('src', tenant.storeImageUrl);

    $("#skShoppingmodal .modalbox .modaldetail #tenantName").html(tenant.storeNameEng);

    $("#skShoppingmodal .modalbox .modaldetail .modalblog .bleft #tenantUnitNum").text(tenant.storeUnitNum);

    $("#skShoppingmodal .modalbox .modaldetail .modalblog .bleft #tenantTime").text(tenant.storeOperatingHour);

    $("#skShoppingmodal .modalbox .modaldetail .modalblog .bleft #tenantPhone").text(tenant.storePhoneNum);

    new QRCode(document.querySelector("#skShoppingmodal .modalbox .modaldetail .modalblog .bright .qrholder"), {
        text: tenant.storeWebsiteLink,
        width: 80,
        height: 80,
    });

    $("#skShoppingmodal .modalbox .modaldesc .destxtarea #tenantDescription").html(tenant.storeDescEng);
    
    $("#skShoppingmodal").attr("style", "");
}

function closeShoppingPopUp() {
    $("#skShoppingmodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");
    $("#skShoppingmodal").fadeOut('fast');
}

// Transport page 
function onclickTransportBtn(id){

    // change style
    $('#skTransport .menuTransport .navgroup > div').attr("style","");
    $('#skTransport .menuTransport .navgroup > div .btntxt').css({"color":"#222222"});
    $('#skTransport .menuTransport .navgroup #' + id).css("background-color", "#006EB8");
    $('#skTransport .menuTransport .navgroup #' + id + ' .btntxt').css({"color":"#FFFFFF"});

    switch (id) {
        case "btntaxi" : {

            $('.heading').html('<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="53" height="53" rx="26.5" fill="#006EB8"/><g clip-path="url(#clip0_878_227)">'
            + '<path d="M21.2102 30.4904H18.0902C17.9363 30.4757 17.781 30.4934 17.6343 30.5422C17.4875 30.5911 17.3527 30.6701 17.2382 30.7741C17.1238 30.8781 17.0324 31.0049 16.9699 31.1464C16.9073 31.2878 16.875 31.4407 16.875 31.5954C16.875 31.75 16.9073 31.9029 16.9699 32.0444C17.0324 32.1858 17.1238 32.3126 17.2382 32.4166C17.3527 32.5206 17.4875 32.5996 17.6343 32.6485C17.781 32.6973 17.9363 32.715 18.0902 32.7004H21.2102C21.3642 32.715 21.5195 32.6973 21.6662 32.6485C21.8129 32.5996 21.9478 32.5206 22.0622 32.4166C22.1766 32.3126 22.2681 32.1858 22.3306 32.0444C22.3932 31.9029 22.4255 31.75 22.4255 31.5954C22.4255 31.4407 22.3932 31.2878 22.3306 31.1464C22.2681 31.0049 22.1766 30.8781 22.0622 30.7741C21.9478 30.6701 21.8129 30.5911 21.6662 30.5422C21.5195 30.4934 21.3642 30.4757 21.2102 30.4904Z" fill="white"/>'
            + '<path d="M34.76 30.4904H31.64C31.4861 30.4757 31.3308 30.4934 31.1841 30.5422C31.0374 30.5911 30.9025 30.6701 30.788 30.7741C30.6736 30.8781 30.5822 31.0049 30.5197 31.1464C30.4571 31.2878 30.4248 31.4407 30.4248 31.5954C30.4248 31.75 30.4571 31.9029 30.5197 32.0444C30.5822 32.1858 30.6736 32.3126 30.788 32.4166C30.9025 32.5206 31.0374 32.5996 31.1841 32.6485C31.3308 32.6973 31.4861 32.715 31.64 32.7004H34.76C34.914 32.715 35.0693 32.6973 35.216 32.6485C35.3627 32.5996 35.4976 32.5206 35.612 32.4166C35.7264 32.3126 35.8179 32.1858 35.8804 32.0444C35.943 31.9029 35.9753 31.75 35.9753 31.5954C35.9753 31.4407 35.943 31.2878 35.8804 31.1464C35.8179 31.0049 35.7264 30.8781 35.612 30.7741C35.4976 30.6701 35.3627 30.5911 35.216 30.5422C35.0693 30.4934 34.914 30.4757 34.76 30.4904Z" fill="white"/>'
            + '<path d="M37.4 26H36.77V21.13C36.7674 19.6376 36.1733 18.2072 35.1181 17.1519C34.0628 16.0967 32.6324 15.5026 31.14 15.5H30.52V13.94C30.5057 13.6954 30.4021 13.4645 30.2288 13.2912C30.0555 13.1179 29.8246 13.0143 29.58 13H23.32C23.0707 13 22.8316 13.099 22.6553 13.2753C22.479 13.4516 22.38 13.6907 22.38 13.94V15.5H21.76C20.2676 15.5026 18.8372 16.0967 17.7819 17.1519C16.7267 18.2072 16.1326 19.6376 16.13 21.13V26H15.5C14.8438 25.9999 14.2139 26.2578 13.7462 26.718C13.2785 27.1783 13.0105 27.8039 13 28.46V34.72C13 35.383 13.2634 36.0189 13.7322 36.4878C14.2011 36.9566 14.837 37.22 15.5 37.22H16.7C16.6954 37.2632 16.6954 37.3068 16.7 37.35V38.35C16.7 38.8619 16.9033 39.3528 17.2653 39.7147C17.6272 40.0767 18.1181 40.28 18.63 40.28C19.1419 40.28 19.6328 40.0767 19.9947 39.7147C20.3567 39.3528 20.56 38.8619 20.56 38.35V37.22H32.34C32.3354 37.2632 32.3354 37.3068 32.34 37.35V38.35C32.34 38.8619 32.5433 39.3528 32.9053 39.7147C33.2672 40.0767 33.7581 40.28 34.27 40.28C34.7819 40.28 35.2728 40.0767 35.6347 39.7147C35.9967 39.3528 36.2 38.8619 36.2 38.35V37.22H37.4C38.063 37.22 38.6989 36.9566 39.1678 36.4878C39.6366 36.0189 39.9 35.383 39.9 34.72V28.46C39.8895 27.8039 39.6215 27.1783 39.1538 26.718C38.6861 26.2578 38.0562 25.9999 37.4 26ZM18 21.13C18.0026 20.1345 18.4 19.1807 19.1048 18.4777C19.8097 17.7748 20.7645 17.38 21.76 17.38H31.14C31.6328 17.3787 32.1211 17.4748 32.5766 17.6628C33.0322 17.8508 33.4461 18.1269 33.7946 18.4754C34.1431 18.8239 34.4192 19.2378 34.6072 19.6934C34.7952 20.1489 34.8913 20.6372 34.89 21.13V26H18V21.13ZM38 34.72C38 34.8014 37.984 34.882 37.9528 34.9573C37.9216 35.0325 37.876 35.1008 37.8184 35.1584C37.7608 35.216 37.6925 35.2616 37.6173 35.2928C37.542 35.324 37.4614 35.34 37.38 35.34H15.5C15.3355 35.3349 15.1792 35.2665 15.0638 35.1492C14.9483 35.0319 14.8825 34.8746 14.88 34.71V28.46C14.88 28.2956 14.9453 28.1379 15.0616 28.0216C15.1779 27.9053 15.3356 27.84 15.5 27.84H37.4C37.5644 27.84 37.7221 27.9053 37.8384 28.0216C37.9547 28.1379 38.02 28.2956 38.02 28.46L38 34.72Z" fill="white"/>'
            + '</g><defs><clipPath id="clip0_878_227"><rect width="26.9" height="27.33" fill="white" transform="translate(13 13)"/></clipPath></defs></svg> <span class="headingtxt">Taxi Stand</span>');

            $('.MapPreview img').attr("src", "asset/taxi_map_preview.png");
            $('.MapPreview').show();

            $('.Stops').show();

            $('.Stops h4').html("");

            $('.Stops span').html("");

            $('.taxibodyholder').show();

            $('.carparkholder').hide();

            $('.Stops h4').text("Taxi Stand");

            $('.Stops span').html("Comfort / City Cab  &nbsp; &nbsp; 6552 1111 <br> Prime Taxi &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;6555 8888 <br> Premier Taxis &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;6778 0808<br>SMART &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;6363 6888<br>Trans-Cab &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;6555 3333");
            break;
        }

        case "btnmrt" : {
            $('.heading').html('<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">'
            + '<rect width="53" height="53" rx="26.5" fill="#0077C1"/>'
            + '<g clip-path="url(#clip0_243_8731)">'
            + '<path d="M30.364 12H22.6459C20.3536 12.0025 18.1561 12.8914 16.5352 14.4715C14.9144 16.0516 14.0026 18.1939 14 20.4285V35.0917C14.0031 35.9494 14.2943 36.7825 14.829 37.4636C15.3637 38.1447 16.1125 38.6363 16.9609 38.8634L15.9739 40.4124C15.8439 40.658 15.8175 40.9435 15.9005 41.2078C15.9835 41.4721 16.1693 41.6943 16.4181 41.8268C16.5825 41.9214 16.77 41.9713 16.9609 41.9711C17.1593 41.9794 17.3563 41.9344 17.5303 41.8411C17.7043 41.7478 17.8488 41.6097 17.9479 41.442L19.4086 38.9692H33.6309L35.0916 41.4323C35.1867 41.5929 35.3233 41.7262 35.4878 41.8191C35.6524 41.912 35.8391 41.9611 36.0292 41.9615C36.2202 41.9617 36.4076 41.9118 36.572 41.8172C36.8219 41.678 37.0049 41.4479 37.0808 41.1772C37.1567 40.9066 37.1193 40.6177 36.9767 40.374L36.0588 38.8249C36.9081 38.5993 37.6578 38.108 38.1928 37.4266C38.7277 36.7452 39.0183 35.9113 39.0197 35.0532V20.4285C39.0171 18.1922 38.104 16.0484 36.481 14.4681C34.8581 12.8877 32.6579 12 30.364 12ZM22.6459 13.8089H30.364C32.1641 13.8114 33.8897 14.5096 35.1626 15.7505C36.4355 16.9914 37.1517 18.6736 37.1544 20.4285V29.8865H15.8555V20.4285C15.8555 18.6728 16.5709 16.9891 17.8444 15.7477C19.1178 14.5063 20.845 13.8089 22.6459 13.8089ZM34.9929 37.1988H18.017C17.4437 37.1988 16.8939 36.9768 16.4886 36.5817C16.0832 36.1865 15.8555 35.6506 15.8555 35.0917V31.6953H37.1544V35.0917C37.1518 35.6498 36.9232 36.1843 36.5184 36.5789C36.1136 36.9735 35.5654 37.1963 34.9929 37.1988Z" fill="white"/>'
            + '<path d="M32.6837 33.543H20.2676C20.0215 33.543 19.7856 33.6383 19.6116 33.8079C19.4376 33.9775 19.3398 34.2075 19.3398 34.4474C19.3539 34.6828 19.4562 34.9049 19.6272 35.0716C19.7983 35.2384 20.0261 35.3381 20.2676 35.3518H32.6837C32.9298 35.3518 33.1657 35.2565 33.3397 35.0869C33.5137 34.9173 33.6115 34.6873 33.6115 34.4474C33.6115 34.2075 33.5137 33.9775 33.3397 33.8079C33.1657 33.6383 32.9298 33.543 32.6837 33.543Z" fill="white"/></g>'
            + '<defs><clipPath id="clip0_243_8731"><rect width="25" height="30" fill="white" transform="translate(14 12)"/></clipPath></defs>'
            + '</svg> <span class="headingtxt">MRT</span>');

           $('.MapPreview img').attr("src", "asset/mrt_map_preview.png");

           $('.MapPreview').show();

           $('.Stops h4').text("Train");

           $('.Stops span').text("Buangkok, North-East Line (NE15)");

           $('.Stops').show();

           $('.carparkholder').hide();

           $('.taxibodyholder').hide();

           break;
        }
        
        case 'btnbus' : {
            $('.heading').html('<svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">'
            + '<rect width="53" height="53" rx="26.5" fill="#0077C1"/><g clip-path="url(#clip0_243_8519)">'
            + '<path d="M22.0408 32.7412H19.0764C18.7992 32.7412 18.5334 32.849 18.3374 33.0409C18.1414 33.2327 18.0312 33.493 18.0312 33.7643C18.0312 34.0356 18.1414 34.2959 18.3374 34.4877C18.5334 34.6796 18.7992 34.7874 19.0764 34.7874H22.0408C22.3172 34.785 22.5816 34.6764 22.777 34.4851C22.9725 34.2937 23.0834 34.0349 23.0859 33.7643C23.0859 33.493 22.9758 33.2327 22.7798 33.0409C22.5838 32.849 22.3179 32.7412 22.0408 32.7412Z" fill="white"/>'
            + '<path d="M34.8767 32.7412H31.9123C31.6351 32.7412 31.3693 32.849 31.1733 33.0409C30.9773 33.2327 30.8672 33.493 30.8672 33.7643C30.8672 34.0356 30.9773 34.2959 31.1733 34.4877C31.3693 34.6796 31.6351 34.7874 31.9123 34.7874H34.8767C35.1539 34.7874 35.4197 34.6796 35.6157 34.4877C35.8117 34.2959 35.9218 34.0356 35.9218 33.7643C35.9218 33.493 35.8117 33.2327 35.6157 33.0409C35.4197 32.849 35.1539 32.7412 34.8767 32.7412Z" fill="white"/>'
            + '<path d="M33.6604 12H20.3587C19.6567 11.9976 18.9611 12.1307 18.3116 12.3917C17.6622 12.6527 17.0718 13.0365 16.574 13.5211C16.0763 14.0058 15.6811 14.5817 15.411 15.216C15.1409 15.8504 15.0013 16.5306 15 17.2178V35.7079C14.9988 36.0132 15.059 36.3158 15.1772 36.5984C15.2954 36.881 15.4693 37.138 15.689 37.3548C15.9087 37.5715 16.1698 37.7438 16.4575 37.8618C16.7453 37.9798 17.0539 38.0411 17.3658 38.0424H18.0689V39.2329C18.1022 39.6854 18.3094 40.1088 18.6487 40.4179C18.9881 40.727 19.4344 40.8988 19.8979 40.8988C20.3614 40.8988 20.8077 40.727 21.147 40.4179C21.4863 40.1088 21.6935 39.6854 21.7269 39.2329V38.0424H32.2542V39.2329C32.2875 39.6854 32.4947 40.1088 32.834 40.4179C33.1733 40.727 33.6197 40.8988 34.0832 40.8988C34.5467 40.8988 34.993 40.727 35.3323 40.4179C35.6716 40.1088 35.8788 39.6854 35.9121 39.2329V38.0424H36.6247C37.253 38.0424 37.8558 37.7987 38.301 37.3646C38.7461 36.9306 38.9975 36.3415 39 35.7265V17.2178C38.9975 15.8331 38.4338 14.506 37.4327 13.5277C36.4316 12.5495 35.0749 12 33.6604 12ZM16.7767 19.4407H37.2233V29.2438H16.7767V19.4407ZM20.3302 13.7393H33.6318C34.5752 13.7393 35.48 14.1055 36.1479 14.7576C36.8158 15.4096 37.1923 16.2944 37.1948 17.2178V17.7014H16.7767V17.2178C16.7792 16.296 17.1544 15.4126 17.8203 14.7608C18.4861 14.109 19.3885 13.7417 20.3302 13.7393ZM36.6247 36.2845H17.3658C17.2096 36.2845 17.0597 36.2238 16.9493 36.1156C16.8388 36.0075 16.7767 35.8608 16.7767 35.7079V30.983H37.2233V35.7079C37.2208 35.8616 37.1566 36.0083 37.0447 36.1162C36.9327 36.2241 36.7818 36.2845 36.6247 36.2845Z" fill="white"/>'
            + '</g><defs><clipPath id="clip0_243_8519"><rect width="24" height="29" fill="white" transform="translate(15 12)"/></clipPath></defs>'
            + '</svg><span class="headingtxt">Bus</span>');

           $('.MapPreview img').attr("src", "asset/bus_map_preview.png");

           $('.MapPreview').show();

           $('.Stops h4').text("Bus Services");

           $('.Stops span').text("27, 43, 43M, 43e, 102, 114");

           $('.Stops').show();

           $('.carparkholder').hide();
           $('.taxibodyholder').hide();

           break;

        }

        case 'btncarpark' : {
            $('.heading').html('<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="53" height="53" rx="26.5" fill="#006EB8"/>' +
           '<path fill-rule="evenodd" clip-rule="evenodd" d="M36.7814 33.5366C37.119 33.5366 37.3981 33.2662 37.3981 32.9341V31.0008C37.3981 30.6688 37.119 30.3971 36.7814 30.3971H32.6112C32.2736 30.3971 31.9945 30.6688 31.9945 31.0008V32.9341C31.9945 33.2662 32.2736 33.5366 32.6112 33.5366H36.7814ZM21.3289 33.5366C21.6665 33.5366 21.9443 33.2662 21.9443 32.9341V31.0008C21.9443 30.6688 21.6665 30.3971 21.3289 30.3971H17.1587C16.8198 30.3971 16.542 30.6688 16.542 31.0008V32.9341C16.542 33.2662 16.8198 33.5366 17.1587 33.5366H21.3289ZM19.1948 21.0313L17.0109 26.2337C16.7535 26.8475 17.0976 27.3506 17.7767 27.3506H36.2042C36.8833 27.3506 37.2261 26.8475 36.9687 26.2337L34.7849 21.0313C34.5262 20.4175 33.7617 19.9143 33.0826 19.9143H20.897C20.2191 19.9143 19.4521 20.4175 19.1948 21.0313ZM25.1232 15.6918H22.9955V16.1484H23.7778V18.4376H24.3333V16.1484H25.1232V15.6918ZM27.4893 18.4376L26.5948 15.6918H25.9412L25.0506 18.4376H25.6138L25.8074 17.7333H26.7108L26.907 18.4376H27.4893ZM28.1773 15.6918H27.5593L28.2932 17.0201L27.5122 18.4376H28.1021L28.4003 17.8301C28.4619 17.6979 28.5202 17.5634 28.5865 17.4106L28.6016 17.376H28.6156C28.6596 17.465 28.6986 17.5476 28.7361 17.6268C28.769 17.6965 28.8007 17.7636 28.8335 17.8301L29.1456 18.4376H29.7636L28.9813 17.0465L29.7139 15.6918H29.1278L28.8653 16.2566C28.8054 16.3861 28.7481 16.5207 28.6793 16.6905H28.6627C28.6159 16.5959 28.5761 16.5123 28.5391 16.4343C28.5097 16.3723 28.482 16.314 28.4538 16.2566L28.1773 15.6918ZM30.7166 18.4376H30.1598V15.6918H30.7166V18.4376ZM39.4201 23.6614C39.5488 23.6275 39.68 23.6086 39.8062 23.6086C40.498 23.6086 41 24.1268 41 24.8387V25.567C41 26.3984 40.3082 27.0739 39.4583 27.0739H39.3386L39.545 27.5632C39.945 28.5166 40.2699 30.1304 40.2699 31.1618V37.9919C40.2699 38.8245 39.5794 39.5 38.7282 39.5H36.8757C36.0246 39.5 35.3327 38.8245 35.3327 37.9919V36.3139H18.6469V37.9919C18.6469 38.8245 17.955 39.5 17.1052 39.5H15.2514C14.4003 39.5 13.7084 38.8245 13.7084 37.9919V31.1618C13.7084 30.1304 14.0346 28.5166 14.4347 27.5632L14.6411 27.0739H14.5417C13.6918 27.0739 13 26.3984 13 25.567V24.8387C13 24.1268 13.502 23.6086 14.1926 23.6086C14.32 23.6086 14.4487 23.6275 14.5786 23.6614L15.9216 24.0237L17.3575 20.6036C17.7869 19.5772 19.0597 18.7433 20.1949 18.7433H21.1722V15.9044C21.1722 15.405 21.5863 15 22.0959 15H31.9028C32.4125 15 32.8278 15.405 32.8278 15.9044V18.7433H33.7847C34.9186 18.7433 36.1928 19.5772 36.6234 20.6036L38.0606 24.0274L39.4201 23.6614ZM26.3593 16.4645C26.4076'
           + '16.6489 26.4559 16.833 26.5084 17.0061L26.59 17.3055H25.93L26.0115 17.0061C26.0956 16.7206 26.1772 16.4086 26.2498 16.108H26.2638C26.2964 16.2249 26.3279 16.3448 26.3593 16.4645Z" fill="white"/>' +
           '</svg> <span class="headingtxt">Car</span>');

           $('.MapPreview').hide();

           $('.Stops').hide();

           $('.carparkholder').show();

           $('.taxibodyholder').hide();

        }
    }
}

// small non page related functions
function resetPage() {
    $('.header').css({"background":"#FEF8ED"});

    $(document.body).css('background', '');

    $('.header, .content, .navmenu').css('background', '');

    $('.header').css('height', '');

    $('.content').css('height', '');

    $('.header .hleft .logoholder').css({'width': '', 'height': '', 'padding' : ''})

    $('.header .hleft .logoholder img').attr('src', './asset/sengkanggrandlogo2.png');

    $('.header .hright .optimebox').css({'position': '', 'top': '', 'right': ''});

    $('.detailbox p, .navmenu p').css('color', '');

    $('.navmenu .followtab .navright .info svg').css({'box-shadow': ''})

    $('.navmenu .followtab .navleft svg path, .header .hright .optimebox .logoholder svg path').attr('fill', '#1C3D6A');

    $('.navmenu .navgroup .navbox > .navbtn').css('pointer-events', 'visible');
}

function onclickCatBtn(content,id) {

    // category menu buttons
    $("#" + content + " #swiperCategory .catcol > div").css('background', '#FFFFFF');
    $("#" + content + " #swiperCategory .catcol > div .cattxt").css('color', '#222222');

    $("#" + content + " #swiperCategory .catcol #" + id).css('background', '#006EB8');
    $("#" + content + " #swiperCategory .catcol #" + id + ' .cattxt').css('color', '#FFFFFF');
    // console.log(filtered_tenant);
    
    if (content == 'skDirectory'){
        var filtered_tenant = getTenantbyCategory(displayonDirectorytenant, id);
        createDirectorySwiper(filtered_tenant, 2,4);
        $('#skDirectory #SwiperDirectoryPage #swiperDirectory .swiper-wrapper .swiper-slide').css('min-height', '718px');
        SwiperDirectory.update();
    }
    else if (content == 'skDining') {
        var filtered_tenant = getTenantbySubcategory(diningArray, id);
        console.log(filtered_tenant);
        createDiningSwiper(filtered_tenant, 2,4);
        $('#skDining #SwiperDiningPage #swiperDining .swiper-wrapper .swiper-slide').css('min-height', '718px');
        SwiperDining.update();
    }
    else if (content == 'skShopping') {
        var filtered_tenant = getTenantbyCategory(shoppingArray, id);
        console.log(filtered_tenant);
        createShoppingSwiper(filtered_tenant, 2,4);
        $('#skShopping #SwiperShoppingPage #swiperShopping .swiper-wrapper .swiper-slide').css('min-height', '718px');
        SwiperShopping.update();
    }
    else {}
}

function onclickCatBtnDining(content, id) {

    // Dining landing page

    $("#" + content + " #swiperCategory .catcol > div").css('background', '#FFFFFF');
    $("#" + content + " #swiperCategory .catcol > div .cattxt").css('color', '#222222');

    var filtered_tenant = getTenantbySubcategory(diningArray, id);

    console.log(id);

    $("#" + content + " #swiperCategory .catcol #" + id).css('background', '#006EB8');
    $("#" + content + " #swiperCategory .catcol #" + id + ' .cattxt').css('color', '#FFFFFF');

    // console.log(filtered_tenant);
    
    if (content == 'skDining') {
        $('#skDiningLanding').hide();
        $('#skDining').show();
        $('#skDining .menuDirectory .navgroup #btncat').trigger('click');
        $("#skDining #swiperCategory .catcol #" + id).trigger('click');
    }
}

function onclickLvlBtn(content, id) {

    $("#" + content + " .menuLevel .lvlgroup > div").css('background-color', '#FFFFFF');
    $("#" + content + " .menuLevel .lvlgroup > div .lvltxt").css('color', '#222222');
    $("#" + content + " .menuLevel .lvlgroup #" + id).css('background-color', '#006EB8');
    $("#" + content + " .menuLevel .lvlgroup #" + id + ' .lvltxt').css('color', '#FFFFFF');

    if (content == 'skDirectory'){
        var filtered_tenant = getTenantbyLevel(displayonDirectorytenant,id);
        createDirectorySwiper(filtered_tenant, 2, 4);
        SwiperDirectory.update();
    }
    else if(content == 'skDining') {
        var filtered_tenant = getTenantbyLevel(diningArray,id);
        createDiningSwiper(filtered_tenant, 2, 4);
        SwiperDining.update();
    }
    else if(content == 'skShopping') {
        var filtered_tenant = getTenantbyLevel(shoppingArray,id);
        createShoppingSwiper(filtered_tenant, 2, 4);
        SwiperShopping.update();
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
    var format = `${day} ${month} ${year}`;

    return format;
}

function displayDate() {
    var date = new Date();
    var day = date.getDay();
    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    for(var i=0; i< days.length -1; i++) {
        if(i == day) {
            $('#skHome #currentDay').text(days[i]);
            break;
        }
    }

    $('#skHome #currentDate').text(', ' + convertToMonth(date.getTime()));
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

    $('#skHome #currentTime').text(today_time);
}


function sortTenants(x,y) {
    if(x.storeNameEng.toUpperCase() < y.storeNameEng.toUpperCase()) {return -1;}
    if(x.storeNameEng.toUpperCase() > y.storeNameEng.toUpperCase()) {return 1;}
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

// Close popup
function closeHappeninPopUp() {
    $("#happeningpopup #hpnpopup_box #hpnpopup_info #hpnpopup_row2 #hpnpopup_qrcode #hpnpopup_qr").html("");
    $("#happeningpopup").fadeOut('fast');
}

function closeDirectoryPopUp() {
    $("#skDirectorymodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");
    $('#skDirectorymodal .modalbox .modalimgholder img').attr('src', '');
    $("#skDirectorymodal").fadeOut('fast');
}

function closediningPopUp() {
    $("#skDiningmodal .modalbox .modaldetail .modalblog .bright .qrcodebox .qrholder").html("");
    $("#skDiningmodal").fadeOut('fast');
}

function closeWayFindPopUp() {
    // $("#wgWayFindescliftPopup .modalbox").html("");
    $("#skWayFindescliftPopup").fadeOut('fast');
    $("#swiperDirectory .wayfindingbtn .btnholder").css('background', '');
    $("#swiperDining .wayfindingbtn .btnholder").css('background', '');
    $("#swiperShopping .wayfindingbtn .btnholder").css('background', '');
    $("#swiperDirectory .wayfindingbtn .btnholder svg path").attr('fill', '#0077C1');
    $("#swiperDining .wayfindingbtn .btnholder svg path").attr('fill', '#0077C1');
    $("#swiperShopping .wayfindingbtn .btnholder svg path").attr('fill', '#0077C1');
    // currentLevel = kioskInfo[0].kioskFloor;
    clearWayfindingtimeout();
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
    })
    
}

function loadJson() {
    $.getJSON("../commonfile/data/kiosk_content.json", function(data) {
        happeningsArray = data.happening;
        tenantArray =  data.store.sort(sortTenants);
        kioskInfo = data.kiosk;
        unfilteredcategoryArray = data.category;
        channelArray = data.channel;
        pylistArray = data.playlist;
        contentArray = data.content;
        mapArray = data.map;
        mediaArray = data.media;
        sequenceArray = data.sequence;
        subcategoryArray = data.subcategory;
        console.log("done loading");
        loadjsontimeout = setTimeout(initialSetting(), 4000);
        // initialSetting();
        filteredCategory(unfilteredcategoryArray);
    })
}