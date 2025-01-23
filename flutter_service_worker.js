'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "663e2c05cc3719a885451a5a68fba163",
"assets/AssetManifest.bin.json": "0d1ddd8c88df759d61c3e294f2498616",
"assets/AssetManifest.json": "a18be02de7e5b86e468ca61ee9c98bce",
"assets/assets/Beam/Gorlax_full.png": "1493e177bd61d7f4a065cc8570f6409e",
"assets/assets/Beam/ItchIO_Cover.png": "bc5f4ff8805cb083c83d59e6d4bb4de3",
"assets/assets/Beam/spartamus_full.png": "5a89a38d79efe8a7a2da2bbe9b2e7db8",
"assets/assets/datasExperiences.json": "806efaca4a44e3ff770d65310abd07e9",
"assets/assets/datasProjects.json": "99738c54393cea740ba60a98855dc2d1",
"assets/assets/Dreamstrike/1.png": "da6e38fab0cd10cba30fbc5683d4a7d0",
"assets/assets/Dreamstrike/2.png": "2576c5c58c88aa0a4ed56fcd2fa84040",
"assets/assets/Dreamstrike/3.png": "037a6e94e5d5dedff10fa853de60be0f",
"assets/assets/Dreamstrike/Trailer.mp4": "3cd4de5ef8c87453381ac8e51e48b7cf",
"assets/assets/EgolfSeries/1.webp": "34d22ba35fa44bb5f3d8f8bdf51b2aaf",
"assets/assets/EgolfSeries/2.webp": "79d249397f096c9bb4c016ec229a47a4",
"assets/assets/EgolfSeries/3.webp": "d7ab7d7f765dcd80358e24d421e52e6f",
"assets/assets/EgolfSeries/4.webp": "34d22ba35fa44bb5f3d8f8bdf51b2aaf",
"assets/assets/GameEngine/1.JPG": "f6fd8ad73f45faea14c1f81452726249",
"assets/assets/GamesPhotos/dontlookaway.png": "78359c7e1f0adcfd282c6fe31c3e0119",
"assets/assets/GamesPhotos/dreamstrike.png": "e6b46a60d9e8fc568ad9ca6bf1aca718",
"assets/assets/GamesPhotos/gameengine.png": "23aba0473db345db92aeaf7b9fefc8bd",
"assets/assets/GamesPhotos/headsout.png": "af8163789c895e04a84e79d1e4979b74",
"assets/assets/GamesPhotos/loopout.png": "df62992c964bfc8dbdf96007f988d643",
"assets/assets/Icons/androidstudio-original.svg": "f45824a5ae74092cba63532b26c45518",
"assets/assets/Icons/cplusplus-original.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/Icons/csharp-original.svg": "ec7be0a3500b106a4e451fd951e1c717",
"assets/assets/Icons/dart-original.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/Icons/figma-original.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/Icons/firebase-original.svg": "e49de29322e84ba9bef16c93af22891d",
"assets/assets/Icons/flutter-original.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/Icons/github-original.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/Icons/godot-original.svg": "7f662044b29f162df1ef99f635e05085",
"assets/assets/Icons/python-original.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/Icons/unity-original.svg": "6c6026d853495519f672912cadb3d702",
"assets/assets/Icons/unrealengine-original.svg": "ee3376a5046a52315af19e74accf0e69",
"assets/assets/Icons/vscode-original.svg": "6a23ad24f853ca7abfb78b19df78e615",
"assets/assets/IconSite.png": "04e06e2e7c99daeaf7f1c06f285a10f6",
"assets/assets/logo-noback.png": "3ca41fb03a18d18ad2020b57c682f4a0",
"assets/assets/logo.png": "97a094190a2f5647496574898f45fb46",
"assets/assets/LoopOut/1.png": "1cd602fc6aeb7119b171c11684b9f2cd",
"assets/assets/LoopOut/2.png": "4b5e9696e97c6d6ab892b982ea48e037",
"assets/assets/LoopOut/3.png": "8f71c16145d0d644d0a320bd10c39fb1",
"assets/assets/LoopOut/4.png": "e3e3467ad6f3abbae4f1d1032d56edac",
"assets/assets/NoisetteStudio/1.jpeg": "b525f2ee38d868e23525841ff1cbdb67",
"assets/assets/NoteIt/1.png": "b7f5b87238d3dba5a8060b0adf837396",
"assets/assets/NoteIt/2.png": "71a97f613e39d23f4901e9b31c39c4a4",
"assets/assets/NoteIt/3.png": "9e5e693886be3eb0fa47d553cf341059",
"assets/assets/photo.jpeg": "d1515849fc962345d2682937f4cc3c8e",
"assets/assets/PokemonLike/1.JPG": "9d808305179fce7b90dc1d1d74a15dbe",
"assets/assets/PokemonLike/2.JPG": "53b551c0db746ee7b3ee3692befb4186",
"assets/assets/PokemonLike/3.JPG": "2b546fc7b7b11e19601ef158bd9a1d0a",
"assets/assets/PokemonLike/4.JPG": "d32cb89e351dc047d46c8a1ba68a31bd",
"assets/assets/ZeldaLike/1.png": "d2f9dafb8a3b3d3db335ef9258fb64a9",
"assets/assets/ZeldaLike/2.png": "bd4955ca6fbaae37b02fe57564f453db",
"assets/assets/ZeldaLike/3.png": "05fc1cd1cfe282ccbb902e0569e7e3ba",
"assets/assets/ZeldaLike/Video1.mp4": "31ac83c6e0ab549ebd98c70ef7469d8a",
"assets/assets/ZeldaLike/Video2.mp4": "0d73d9b411ee734b56578c816c0a1861",
"assets/assets%255CIcons/csharp-original.svg": "ec7be0a3500b106a4e451fd951e1c717",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1b5238b059210cd4357aff1827bfe0a9",
"assets/NOTICES": "c65fc61c17811abcc5a4b0a6c92d988c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "4f99870011508b6dd03611c61ef519f6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f42bd38dabf782c394c59fc7a427bbf",
"/": "1f42bd38dabf782c394c59fc7a427bbf",
"logo-noback.png": "3ca41fb03a18d18ad2020b57c682f4a0",
"main.dart.js": "1740c05719cf30667fa659cd994d77fe",
"manifest.json": "ac990f168847ba9d2d98096b245212a0",
"version.json": "cdea01eeb1f23c0c355a156d5709659b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
