// public/sw.js
// Basic Service Worker to enable PWA install prompt (Add to Home Screen)

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // We must have a fetch event handler.
  // We will just let the browser handle requests normally.
  return;
});
