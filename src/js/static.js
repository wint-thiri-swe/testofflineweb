const cacheName = "static_file";
const appShellFiles = [
    // "../asset/bus_map_preview.png",
    "../",
    "../css/main.css",
    "../js/main.js",
    "../Build/",
    "../MyLoader.js",
    "../index.html"
]



self.addEventListener('activate', function(event) {
    console.log('Claiming control');
    return self.clients.claim();
  });
  

self.addEventListener("fetch", (e) => {
    e.respondWith(
        (async () => {
            const r = await caches.match(e.request);
            console.log(`fetching resources: ${e.request.url}`);
            if(r) {
                return r;
            }
            const response = await fetch(e.request);
            const cache = await caches.open(cacheName);
            console.log(`creating new resource : ${e.request.url}`);
            cache.put(e.request, response.clone());
            return response;
        })(),
    )
})