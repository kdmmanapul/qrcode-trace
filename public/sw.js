if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return a[e]||(n=new Promise(async n=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=n}else importScripts(e),n()})),n.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},n=(n,a)=>{Promise.all(n.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(n)};self.define=(n,s,i)=>{a[n]||(a[n]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+n.slice(1)};return Promise.all(s.map(n=>{switch(n){case"exports":return a;case"module":return c;default:return e(n)}})).then(e=>{const n=i(...e);return a.default||(a.default=n),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/213234e6d7d4db6f4c28307ff0a908df1dccab78.33d73df9ebc2d8827ec0.js",revision:"e2e11d4029097c184a40bcaf555b7a22"},{url:"/_next/static/chunks/627f6a005eaaa1ea31f8d19f110f96a366f83682.df4f11d8f516dfebeda9.js",revision:"9a51c3dba7b3c68893d1596d18b4421f"},{url:"/_next/static/chunks/963308660f0db6ab294798860aca010c850d9f65.0927259193b81f31ef8b.js",revision:"9183a9f77672ab27b03672dfe0c1ce51"},{url:"/_next/static/chunks/commons.134088cfec0460eb6c7d.js",revision:"e5fe7d95fb3fad29009ff5e976ac4e9a"},{url:"/_next/static/chunks/framework.12e901aaa2ac04e8f22b.js",revision:"7da6dac0b3db473fbbd04bd5e405999e"},{url:"/_next/static/runtime/main-3730e6f0670346399b23.js",revision:"ee475ad6845e9ebefcd74798a04d73de"},{url:"/_next/static/runtime/polyfills-ee4ee5083d7312778722.js",revision:"6982f5627752b9ed0514905d47bb9d8f"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/_buildManifest.js",revision:"9004c79dcb66263878c1143e4cb37044"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/_app.js",revision:"8e1d49c2ed9ba299f6d7c3ebc2289d6c"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/_error.js",revision:"c019f3fc4528b8358e8955595b356871"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/components/header.js",revision:"a7f90b05228297a6f31a74b081a1e467"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/history.js",revision:"d81e8a01210d2e73c3c7959b32cfef49"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/homepage.js",revision:"5d4abaa4b3b63d25c5dcbdb6bcdcad76"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/index.js",revision:"681b61c5bdf32be501d1ac4829dcae1d"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/profile.js",revision:"d4391a87247cca476caec1009d52c88b"},{url:"/_next/static/zUWSinm-a_VnjO_SPwxfI/pages/qrScanner.js",revision:"aaea6597ca2fdc91b5b14e3e0a600b96"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-128x128.png",revision:"7aeda42267a627eb10a0ab2ebe6e89d0"},{url:"/icons/icon-144x144.png",revision:"0e903dd6f6ebf4b16062b81dd9278d1d"},{url:"/icons/icon-152x152.png",revision:"78c0bdbe7230886e89aec06d79fdfd85"},{url:"/icons/icon-192x192.png",revision:"57ad3b4ece3016b4de9aefeff6ea44d8"},{url:"/icons/icon-384x384.png",revision:"6bad2ef3de1d4c16b8164974c1817733"},{url:"/icons/icon-512x512.png",revision:"8a022dd4491b6727a1a54c23f2a449cd"},{url:"/icons/icon-72x72.png",revision:"d8f166410cd2b8386e281a7ae1253055"},{url:"/icons/icon-96x96.png",revision:"f6f472bde3630368d2efbcd452663057"},{url:"/manifest.json",revision:"b58c6451611c2e59c48acb85254a4c06"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
