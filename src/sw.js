self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('sw-cache').then(cache => {
            return cache.addAll([
                // '/',
                './css/main.css',
                './js/main.js',
                './asset/bus_map_preview.png',
                './asset/font/NotoSans-Regular.ttf',
                './asset/font/NotoSans-Bold.ttf'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});