if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const c=e=>s(e,o),d={module:{uri:o},exports:l,require:c};i[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),l)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon-180x180.png",revision:"eb55992b4fcb48c217a60377b866ead4"},{url:"assets/browser-ponyfill-jAWeKcSh.js",revision:null},{url:"assets/index-CNygt6Na.css",revision:null},{url:"assets/index-CyD2MNgp.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"favicon.ico",revision:"29837b6f2916b4c6427e9aefbd0a19f2"},{url:"favicon.svg",revision:"4d35ad7e48bd8451a885788dd9ac516d"},{url:"index.html",revision:"163129081c96d28fdf6e77caed0002db"},{url:"maskable-icon-512x512.png",revision:"b7fc1e66824bdf4db44b6383d1d4b44b"},{url:"pwa-192x192.png",revision:"9025394ca35341fef387c472ca0cdece"},{url:"pwa-512x512.png",revision:"c323495832b5616296b44598b52e458d"},{url:"pwa-64x64.png",revision:"8a1cf0e9ccc7e022927805f06506a2e7"},{url:"manifest.webmanifest",revision:"019eada9da2424f0e42585ea30c79e64"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
