const NAME='codex-packit-nord-beta-041';
const FILES=['./','./index.html','./styles.css?v=0.4.1','./app.js?v=0.4.1','./storage.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(NAME).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('codex-packit-')&&k!==NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;const url=new URL(e.request.url);if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{const clone=r.clone();caches.open(NAME).then(c=>c.put('./index.html',clone)).catch(()=>{});return r;}).catch(()=>caches.match('./index.html')));return;}e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request)));});
