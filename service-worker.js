const CACHE_NAME = 'diario-tecnico-pwa-v7-career-flow';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './assets/clubs/ars.png',
  './assets/clubs/avl.png',
  './assets/clubs/bha.png',
  './assets/clubs/bla.png',
  './assets/clubs/bou.png',
  './assets/clubs/bre.png',
  './assets/clubs/bur.png',
  './assets/clubs/che.png',
  './assets/clubs/cov.png',
  './assets/clubs/cry.png',
  './assets/clubs/eve.png',
  './assets/clubs/ful.png',
  './assets/clubs/hud.png',
  './assets/clubs/lee.png',
  './assets/clubs/lei.png',
  './assets/clubs/liv.png',
  './assets/clubs/lut.png',
  './assets/clubs/mci.png',
  './assets/clubs/mid.png',
  './assets/clubs/mil.png',
  './assets/clubs/mun.png',
  './assets/clubs/new.png',
  './assets/clubs/nfo.png',
  './assets/clubs/nor.png',
  './assets/clubs/pne.png',
  './assets/clubs/qpr.png',
  './assets/clubs/shu.png',
  './assets/clubs/sou.png',
  './assets/clubs/tot.png',
  './assets/clubs/wat.png',
  './assets/clubs/whu.png',
  './assets/clubs/wol.png',
  './assets/trophies/champions.png',
  './assets/trophies/conference.png',
  './assets/trophies/copa-del-rey.png',
  './assets/trophies/copa-do-brasil.png',
  './assets/trophies/efl-cup.png',
  './assets/trophies/europa.png',
  './assets/trophies/fa-cup.png',
  './assets/trophies/generic.png',
  './assets/trophies/league.png',
  './assets/trophies/libertadores.png',
  './assets/trophies/supercup.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
