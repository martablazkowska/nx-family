if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-c9018aa3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"84cfb070aeeca35926fb4cca3224424c"},{url:"/_next/static/0NBhIZoS3NSBllFgzCsP1/_buildManifest.js",revision:"dbd27fa76a50fbdf38c89f9126af90c3"},{url:"/_next/static/0NBhIZoS3NSBllFgzCsP1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/136-6ce264fb57e7ad16.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/151-739ee4948674e1fc.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/1dd3208c-599f0cd8c44e2cdd.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/40-c1498a552f33744e.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/_not-found-dd282eaae4046a45.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/dashboard/(auth)/login/page-89fa75dc15605516.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/dashboard/(auth)/register/page-4017e8aa39572b01.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/dashboard/page-4ae52568d9bd4bc4.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/layout-2284e51ec81838ea.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/page-24f0f51b63fe2c76.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/plans/page-aa874e3d8bbdd1d9.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/posts/%5Bid%5D/page-8252c77d4a180f21.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/posts/page-f7dc89744e186433.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/receipts/%5Bid%5D/page-0ea88bc054c3b8ff.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/receipts/loading-d967c7bc74dfcc5c.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/app/receipts/page-0a92627c5d4d206e.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/framework-9e68550641db712d.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/main-0f57be38df1f1e2c.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/main-app-308f97f2dd9671a5.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/pages/_app-22ef1381f3010e9c.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/pages/_error-2312f57de16788ac.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e8cce1fe5ebafbc0.js",revision:"0NBhIZoS3NSBllFgzCsP1"},{url:"/_next/static/css/455380e8d74e6160.css",revision:"455380e8d74e6160"},{url:"/_next/static/css/5d58a5995c96d828.css",revision:"5d58a5995c96d828"},{url:"/_next/static/css/698762200dc3c303.css",revision:"698762200dc3c303"},{url:"/_next/static/css/c3bf85b7e13f8e63.css",revision:"c3bf85b7e13f8e63"},{url:"/_next/static/media/desery.0e64a3b7.jpg",revision:"f06e88022ffa7a9bdc650e5110ef91ed"},{url:"/assets/img/cieple_napoje.jpg",revision:"8ecbe789458157663ad7b5a1168105e3"},{url:"/assets/img/desery.jpg",revision:"f06e88022ffa7a9bdc650e5110ef91ed"},{url:"/assets/img/pieczywo.jpg",revision:"e64278e4845c457ce85c5ba045a48cc2"},{url:"/assets/img/przekaski.jpg",revision:"02e76f7a1c2a6e62c1cabbf2ab3ae271"},{url:"/favicon.ico",revision:"d4d62b2ac4cfa63ade7f1766fb098bc5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
