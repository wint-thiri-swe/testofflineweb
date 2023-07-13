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
    './MyLoader.js',
    './asset/westgatelogo.png'
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
        // caches.open('CACHE_NAME').then(cache => {
        //     return cache.addAll(CACHE_ASSETS)
        // })
        addResourcesToCache(CACHE_ASSETS)
    );
});

self.addEventListener('activate', event => {
    console.log('SW : activated');
})

const cacheFirst = async ({ request, fallbackUrl }) => {
    // First try to get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
  
    // Next try to get the resource from the network
    try {
      const responseFromNetwork = await fetch(request);
      // response may be used only once
      // we need to save clone to put one copy in cache
      // and serve second one
      putInCache(request, responseFromNetwork.clone());
      return responseFromNetwork;
    } catch (error) {
      const fallbackResponse = await caches.match(fallbackUrl);
      if (fallbackResponse) {
        return fallbackResponse;
      }
      // when even the fallback response is not available,
      // there is nothing we can do, but we must always
      // return a Response object
      return new Response("Network error happened", {
        status: 408,
        headers: { "Content-Type": "text/html" },
      });
    }
  };
  

self.addEventListener("fetch", (event) => {
    event.respondWith(
      cacheFirst({
        request: event.request,
        fallbackUrl: "./index.html",
      }),
    );
  });
