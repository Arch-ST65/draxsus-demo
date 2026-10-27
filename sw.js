// Service worker of the phone demo: keeps every file of the build on the phone and serves it from there, so
// after the first visit the demo opens without internet. build_pwa.mjs fills in the version and the file list.
const CACHE = 'draxsus-d27f9b4f3da5';
const FILES = ["./","assets/app-icon-180.png","assets/app-icon-512.png","assets/avatars/bear.png","assets/avatars/dragon.png","assets/avatars/eagle.png","assets/avatars/fox.png","assets/avatars/panda.png","assets/avatars/shark.png","assets/avatars/tiger.png","assets/avatars/wolf.png","assets/cards/_index.json","assets/cards/bar-25.jpg","assets/cards/bar-26.jpg","assets/cards/bar-27.jpg","assets/cards/bar-28.jpg","assets/cards/bar-29.jpg","assets/cards/bar-30.jpg","assets/cards/bar-31.jpg","assets/cards/bar-32.jpg","assets/cards/bar-33.jpg","assets/cards/bar-34.jpg","assets/cards/bar-35.jpg","assets/cards/bar-36.jpg","assets/cards/bar-37.jpg","assets/cards/bar-38.jpg","assets/cards/bar-39.jpg","assets/cards/bar-40.jpg","assets/cards/bar-41.jpg","assets/cards/bar-42.jpg","assets/cards/bar-43.jpg","assets/cards/bar-44.jpg","assets/cards/bar-45.jpg","assets/cards/bar-46.jpg","assets/cards/bar-47.jpg","assets/cards/bar-48.jpg","assets/cards/best-025.jpg","assets/cards/best-026.jpg","assets/cards/best-027.jpg","assets/cards/best-028.jpg","assets/cards/best-029.jpg","assets/cards/best-030.jpg","assets/cards/best-031.jpg","assets/cards/best-032.jpg","assets/cards/best-033.jpg","assets/cards/best-034.jpg","assets/cards/best-035.jpg","assets/cards/best-036.jpg","assets/cards/best-037.jpg","assets/cards/best-038.jpg","assets/cards/best-039.jpg","assets/cards/best-040.jpg","assets/cards/best-041.jpg","assets/cards/best-042.jpg","assets/cards/best-043.jpg","assets/cards/best-044.jpg","assets/cards/best-045.jpg","assets/cards/best-046.jpg","assets/cards/best-047.jpg","assets/cards/best-048.jpg","assets/cards/best-145.jpg","assets/cards/best-146.jpg","assets/cards/best-147.jpg","assets/cards/best-148.jpg","assets/cards/best-149.jpg","assets/cards/best-150.jpg","assets/cards/best-151.jpg","assets/cards/best-152.jpg","assets/cards/best-153.jpg","assets/cards/best-154.jpg","assets/cards/best-155.jpg","assets/cards/best-156.jpg","assets/cards/best-157.jpg","assets/cards/best-158.jpg","assets/cards/best-159.jpg","assets/cards/best-160.jpg","assets/cards/best-161.jpg","assets/cards/best-162.jpg","assets/cards/best-163.jpg","assets/cards/best-164.jpg","assets/cards/best-165.jpg","assets/cards/best-166.jpg","assets/cards/best-167.jpg","assets/cards/best-168.jpg","assets/cards/leg-01.jpg","assets/cards/leg-02.jpg","assets/cards/leg-03.jpg","assets/cards/leg-04.jpg","assets/cards/leg-05.jpg","assets/cards/leg-06.jpg","assets/cards/leg-07.jpg","assets/cards/leg-08.jpg","assets/cards/leg-09.jpg","assets/cards/leg-10.jpg","assets/cards/leg-11.jpg","assets/cards/leg-12.jpg","assets/cards/leg-13.jpg","assets/cards/leg-14.jpg","assets/cards/leg-15.jpg","assets/cards/leg-16.jpg","assets/cards/leg-17.jpg","assets/cards/leg-18.jpg","assets/cards/leg-19.jpg","assets/cards/leg-20.jpg","assets/cards/leg-21.jpg","assets/cards/leg-22.jpg","assets/cards/leg-23.jpg","assets/cards/leg-24.jpg","assets/cards/leg-25.jpg","assets/cards/leg-26.jpg","assets/cards/leg-27.jpg","assets/cards/leg-28.jpg","assets/cards/leg-29.jpg","assets/cards/leg-30.jpg","assets/cards/leg-31.jpg","assets/cards/leg-32.jpg","assets/cards/leg-33.jpg","assets/cards/leg-34.jpg","assets/cards/leg-35.jpg","assets/cards/leg-36.jpg","assets/cards/leg-37.jpg","assets/cards/leg-38.jpg","assets/cards/leg-39.jpg","assets/cards/leg-40.jpg","assets/cards/leg-41.jpg","assets/cards/leg-42.jpg","assets/cards/leg-43.jpg","assets/cards/leg-44.jpg","assets/cards/leg-45.jpg","assets/cards/leg-46.jpg","assets/cards/leg-47.jpg","assets/cards/leg-48.jpg","assets/cards/wc-073.jpg","assets/cards/wc-074.jpg","assets/cards/wc-075.jpg","assets/cards/wc-076.jpg","assets/cards/wc-077.jpg","assets/cards/wc-078.jpg","assets/cards/wc-079.jpg","assets/cards/wc-080.jpg","assets/cards/wc-081.jpg","assets/cards/wc-082.jpg","assets/cards/wc-083.jpg","assets/cards/wc-084.jpg","assets/cards/wc-085.jpg","assets/cards/wc-086.jpg","assets/cards/wc-087.jpg","assets/cards/wc-088.jpg","assets/cards/wc-089.jpg","assets/cards/wc-090.jpg","assets/cards/wc-091.jpg","assets/cards/wc-092.jpg","assets/cards/wc-093.jpg","assets/cards/wc-094.jpg","assets/cards/wc-095.jpg","assets/cards/wc-096.jpg","assets/cards/wc-145.jpg","assets/cards/wc-146.jpg","assets/cards/wc-147.jpg","assets/cards/wc-148.jpg","assets/cards/wc-149.jpg","assets/cards/wc-150.jpg","assets/cards/wc-151.jpg","assets/cards/wc-160.jpg","assets/cards/wc-161.jpg","assets/cards/wc-162.jpg","assets/cards/wc-163.jpg","assets/cards/wc-164.jpg","assets/cards/wc-165.jpg","assets/cards/wc-166.jpg","assets/game/ball.png","assets/game/fox-kick.png","assets/game/fox-ready.png","assets/game/stadium.jpg","assets/logo-red.png","assets/logo-white.png","assets/scan-desk.jpg","fonts/JetBrainsMono-cyrillic.woff2","fonts/JetBrainsMono-latin.woff2","fonts/Manrope-cyrillic.woff2","fonts/Manrope-latin.woff2","fonts/Unbounded-cyrillic.woff2","fonts/Unbounded-latin.woff2","fonts/fonts.css","index.html","js/add.js","js/album.js","js/app.js","js/cards.js","js/game.js","js/ios-frame.js","js/onboarding.js","js/parents.js","js/shared.js","js/shop.js","js/social.js","js/team.js","manifest.webmanifest","offline.js","robots.txt","styles.css","vendor/react-dom.production.min.js","vendor/react.production.min.js"];

async function tell(msg) {
  for (const c of await self.clients.matchAll({ includeUncontrolled: true })) c.postMessage(msg);
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    let next = 0, done = 0;
    const worker = async () => {          // six downloads at a time
      while (next < FILES.length) {
        await cache.add(new Request(FILES[next++], { cache: 'reload' }));
        if (++done % 10 === 0 || done === FILES.length) await tell({ type: 'cache-progress', done, total: FILES.length });
      }
    };
    try {
      await Promise.all(Array.from({ length: 6 }, worker));
    } catch (e) {
      await tell({ type: 'cache-error' });
      throw e;                             // install fails; the next visit tries again
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true });   // ?app, ?s=album… are the same page
    if (hit) return hit;
    try {
      return await fetch(req);
    } catch (e) {
      if (req.mode === 'navigate') return cache.match('./');
      throw e;
    }
  })());
});
