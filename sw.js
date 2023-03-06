const STATIC_CACHE = "static";

const APP_SHELL =[
    "/" , 
    "/index.html",
    "/icons/ic_launcher1.png",
    "/icons/ic_launcher2.png",
    "/icons/ic_launcher3.png",
    "/icons/ic_launcher4.png",
    "/icons/ic_launcher5.png",
    "/img/chispas.jpg",
    "/img/chispas2.jpg",
    "/img/paleteri.jpg"

]; 
self.addEventListener("install", (e) => {
    console.log("intalar");
    const cahceStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll (APP_SHELL));
    e.waitUntil(cahceStatic);
});
self.addEventListener("fetch", (e) => {
    console.log("fetch", e.request);
    e.respondWith(
        caches
        .match(e.request)
        .then(res => res || fetch (e.request))
        .catch (console.log)
        );
        
     });
