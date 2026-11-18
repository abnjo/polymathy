/**
 * POLYMATHY — Progressive Web App Service Worker
 * Provides offline caching, background asset sync, and instant load capability.
 */
const CACHE_NAME = "polymathy-pwa-v2";

const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./manifest.json",
  "./curriculum.json",
  "./curriculum.js",
  "./002_arts_and_cad_patch.json",
  "./patches/002_arts_and_cad_patch.json",
  "./playlists/index.json",
  "./playlists/presets.js",
  "./playlists/preset_jee_adv_stem.json",
  "./playlists/preset_theoretical_physics_gr.json",
  "./playlists/preset_modern_ai_foundations.json",
  "./playlists/preset_programming_languages.json",
  "./playlists/preset_fullstack_systems_developer.json",
  "./presets/index.json",
  "./presets/presets.js",
  "./presets/preset_jee_adv_stem.json",
  "./presets/preset_theoretical_physics_gr.json",
  "./presets/preset_modern_ai_foundations.json",
  "./presets/preset_programming_languages.json",
  "./presets/preset_fullstack_systems_developer.json",
  "./resources/vinci.svg",
  "./resources/vinci.jpg",
  "./resources/icon-192.png",
  "./resources/icon-512.png",
  "./resources/icon-maskable-192.png",
  "./resources/icon-maskable-512.png",
  "./resources/apple-touch-icon.png",
  "./resources/icon-32.png",
  "./favicon.ico"
];

// Pre-cache core application shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Clean up stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-first for code/data to ensure edits on disk/server are immediately loaded; cache-first for media
self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;
  if (!request.url.startsWith("http://") && !request.url.startsWith("https://")) return;

  const url = new URL(request.url);
  const isCodeOrData = url.pathname.endsWith(".json") || url.pathname.endsWith(".js") || url.pathname.endsWith(".html") || url.pathname === "/" || url.pathname.endsWith("/");

  if (isCodeOrData) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            if (request.mode === "navigate") {
              return caches.match("./index.html");
            }
            return null;
          });
        })
    );
  } else {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
  }
});
