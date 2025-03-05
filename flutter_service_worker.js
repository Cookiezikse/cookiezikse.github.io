'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "85fc360166a0f429524c71fa673934ce",
"assets/AssetManifest.bin.json": "df9f6efaaa029eef5e83b73492b776be",
"assets/AssetManifest.json": "b95d3fd93284ee81d484c763f79e9b8e",
"assets/assets/appainter_theme.json": "6bc66296da39784dbc12beb3ec9c365e",
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
"assets/assets/font/Alexandria-VariableFont_wght.ttf": "9d6b12baa3fa9324502098b13d8a25f2",
"assets/assets/GameEngine/1.JPG": "f6fd8ad73f45faea14c1f81452726249",
"assets/assets/GamesPhotos/dontlookaway.png": "78359c7e1f0adcfd282c6fe31c3e0119",
"assets/assets/GamesPhotos/dreamstrike.png": "e6b46a60d9e8fc568ad9ca6bf1aca718",
"assets/assets/GamesPhotos/gameengine.png": "23aba0473db345db92aeaf7b9fefc8bd",
"assets/assets/GamesPhotos/headsout.png": "af8163789c895e04a84e79d1e4979b74",
"assets/assets/GamesPhotos/loopout.png": "df62992c964bfc8dbdf96007f988d643",
"assets/assets/Icons/androidstudio-original.svg": "263988c61542ba3dd4efbb1859b65168",
"assets/assets/Icons/cplusplus-original.svg": "6f2a76ffb3b72fcb544ed350170ffeae",
"assets/assets/Icons/csharp-original.svg": "ec7be0a3500b106a4e451fd951e1c717",
"assets/assets/Icons/dart-original.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/Icons/figma-original.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/Icons/firebase-original.svg": "62f4806427924370bad7d79d2de0bb68",
"assets/assets/Icons/flutter-original.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/Icons/github-original.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/Icons/godot-original.svg": "7f662044b29f162df1ef99f635e05085",
"assets/assets/Icons/linkedin-48.png": "5c9171e57d07dac9e6e3834effbf52ac",
"assets/assets/Icons/python-original.svg": "19816abc24d61b6c0cf28814ba9394ab",
"assets/assets/Icons/unity-original.svg": "421a4e5697e7fb9120b1bd8fab8895f4",
"assets/assets/Icons/unrealengine-original.svg": "b0e1ae5dad530dfdd9fc39ede57f72e1",
"assets/assets/Icons/vscode-original.svg": "25cb5a121aaab90a0bc21f43a979cd48",
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
"assets/assets/photoself.jpg": "288a60d3569074242fd3325fe6d1fffa",
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
"assets/FontManifest.json": "9c8f9ad2e1ddf2610cb3292f6fd7623a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "73d2b6b3d9606d36adef07d6feed14f6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "71aa44771e710204f10acbdd5a25d8cd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "c06149eb3ddca18c4a2313867146dab6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
