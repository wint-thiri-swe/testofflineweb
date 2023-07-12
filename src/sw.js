var storeimages = new Array();
var happeningimage;
var storeimgtoCache = new Array();
const CACHE_NAME = 'cache-v1';

var CACHE_ASSETS = [
    // '../src',
    './index.html',
    './css/main.css',
    './css/admincss.css',
    './css/font.css',
    './css/img.css',
    './css/bootstrap.min.css',
    './css/style.css',
    './css/reset.css',
    './css/swiper-bundle.min.css',
    './js/bootstrap.bundle.min.js',
    './js/gsap.min.js',
    './js/img.js',
    './js/jquery-3.5.1.min.js',
    './js/swiper-bundle.min.js',
    './js/main.js',
    './MyLoader.js'
];

// read file
const getcontent = async () => {
    var storeimage;
    return fetch("https://github.com/wint-thiri-swe/testofflineweb/blob/main/commonfile/data/kiosk_data.json")
    .then(res => res.json())
    .then(data => {
      storeimage = data.store_list;
      for(var i=0; i<storeimage.length; i++) {
        storeimgtoCache.push(`../commonfile/store/${storeimage[i].file_name}`)
      }
       return CACHE_ASSETS.concat(storeimgtoCache);
    })
}

const addResourcesToCache = async (resources) => {
    resources = await getcontent();
    const cache = await caches.open("CACHE_NAME");
    await cache.addAll(resources);
  };


self.addEventListener('install', event => {
    // console.log('install');
    self.skipWaiting();
    event.waitUntil(
        caches.open('cache_name').then(cache => {
            return cache.addAll(CACHE_ASSETS)
        })
        // addResourcesToCache(CACHE_ASSETS)
    );
});

self.addEventListener('activate', event => {
    console.log('SW : activated');
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
