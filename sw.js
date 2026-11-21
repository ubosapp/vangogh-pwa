const CACHE_NAME = "van-gogh-gallery-v1";
const APP_FILES = [
  "./", "./index.html", "./styles.css", "./app.js", "./manifest.webmanifest",
  "./assets/icon.svg", "./assets/starry-night.jpg", "./assets/sunflowers.jpg",
  "./assets/bedroom.jpg", "./assets/potato-eaters.jpg", "./assets/almond-blossom.jpg"
];
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(APP_FILES);
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) { return key !== CACHE_NAME; }).map(function (key) { return caches.delete(key); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(function (cached) {
    if (cached) return cached;
    return fetch(event.request).then(function (response) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
      return response;
    }).catch(function () {
      if (event.request.mode === "navigate") return caches.match("./index.html");
      return Response.error();
    });
  }));
});
