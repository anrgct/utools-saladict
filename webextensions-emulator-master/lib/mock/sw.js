// importScripts("./workbox-sw.js");
// const match = ({ url, event }) => {
//   console.log("match -> url", url);
//   if (url.pathname === "/example") {
//     return {
//       name: "Workbox",
//       type: "guide",
//     };
//   }
// };

// const handler = async ({ url, event, params }) => {
//   // Response will be "A guide to Workbox"
//   return new Response(`A ${params.type} to ${params.name}`);
// };
// // console.log(123)
// workbox.routing.registerRoute(match, handler);

self.addEventListener("fetch", function (event) {
  let url = event.request.url;
  let fileHost = location.href.split('/').slice(0,-1).join('/');
  console.log("url", url);
  if(url.includes(fileHost)){

  }else if(url.includes('file://')){
    let splitUrl = url.split('file://')[1];
    splitUrl[0] == '/' && (splitUrl = '.'+splitUrl);
    console.log("splitUrl", splitUrl)
    event.respondWith(fetch(splitUrl));
  }
//   if (url.includes("utools.html")) {
//   } else {
//     event.respondWith(fetch(event.request.url));
//   }
  //   caches.match(event.request).then(res => {
  //     return res ||
  //       fetch(event.request)
  //         .then(responese => {
  //           const responeseClone = responese.clone();
  //           caches.open('sw_demo').then(cache => {
  //             cache.put(event.request, responeseClone);
  //           })
  //           return responese;
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });
  //   })
});
