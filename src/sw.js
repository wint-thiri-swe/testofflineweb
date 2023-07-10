
const CACHE_NAME = 'cache-v1';

const CACHE_ASSETS = [
    // '/',
    './index.html',
    './css/main.css',
    './js/main.js',
    './asset/bus_map_preview.png',
    './asset/font/NotoSans-Regular.ttf',
    './asset/font/NotoSans-Bold.ttf'
];


self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open('CACHE_NAME').then(cache => {
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('SW : activated');

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache  !== CACHE_NAME) {
                        console.log('delete old cache');
                        caches.delete(cache);
                    }
                })
            )
        } )
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
        // caches.match(event.request).then(response => {
        //     return response || fetch(event.request);
        // })
    );
});

// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
// const OFFLINE_VERSION = 1;
// const CACHE_NAME = "offline";
// // Customize this with a different URL if needed.
// const START_URL = "index.html";
// const OFFLINE_URL = "offline.html";

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     (async () => {
//       const cache = await caches.open(CACHE_NAME);
//       // Setting {cache: 'reload'} in the new request will ensure that the
//       // response isn't fulfilled from the HTTP cache; i.e., it will be from
//       // the network.
//       await Promise.all([
//         cache.add(new Request(OFFLINE_URL, { cache: "reload" })),
//         cache.add(new Request(START_URL, { cache: "reload" })),
//       ]);
//     })()
//   );
//   // Force the waiting service worker to become the active service worker.
//   self.skipWaiting();
// });

// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     (async () => {
//       // Enable navigation preload if it's supported.
//       // See https://developers.google.com/web/updates/2017/02/navigation-preload
//       if ("navigationPreload" in self.registration) {
//         await self.registration.navigationPreload.enable();
//       }
//     })()
//   );

//   // Tell the active service worker to take control of the page immediately.
//   self.clients.claim();
// });

// self.addEventListener("fetch", (event) => {
//   // We only want to call event.respondWith() if this is a navigation request
//   // for an HTML page.
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       (async () => {
//         try {
                  
//           // First, try to use the navigation preload response if it's supported.
//           const preloadResponse = await event.preloadResponse;
//           if (preloadResponse) {
//             return preloadResponse;
//           }

//           // Always try the network first.
//           const networkResponse = await fetch(event.request);
//           return networkResponse;
//         } catch (error) {
//           // catch is only triggered if an exception is thrown, which is likely
//           // due to a network error.
//           // If fetch() returns a valid HTTP response with a response code in
//           // the 4xx or 5xx range, the catch() will NOT be called.
//           console.log("Fetch failed; returning cached page instead.", error);

//           const cache = await caches.open(CACHE_NAME);
//           if (event.request.url.includes(START_URL)) {
//             return await cache.match(START_URL);
//           }
//           return await cache.match(OFFLINE_URL);
//         }
//       })()
//     );
//   }

//   // If our if() condition is false, then this fetch handler won't intercept the
//   // request. If there are any other fetch handlers registered, they will get a
//   // chance to call event.respondWith(). If no fetch handlers call
//   // event.respondWith(), the request will be handled by the browser as if there
//   // were no service worker involvement.
// });