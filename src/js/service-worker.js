/* global workbox */
workbox.setConfig({
  debug: false,
});

if (workbox) {
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
}

workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
    ],
  }),
);

self.addEventListener('message', (e) => {
  if (!e.data) {
    return;
  }

  switch (e.data) {
  case 'skipWaiting':
    self.skipWaiting();
    break;
  default:
    // NOOP
    break;
  }
});
