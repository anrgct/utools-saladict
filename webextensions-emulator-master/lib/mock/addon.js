
export function run () {
  document.addEventListener('click', function (e) {
    var el = e.target
    if (el.tagName == 'A' && el.target == '_blank' && el.href) {
      let openExternal = window.openExternal || window.parent.openExternal
      if (openExternal) {
        openExternal(el.href)
      }
    }
  })
  // background页面
  if (location.href.includes('utools.html')) {

  }
  // quick-search页面
  if (location.href.includes('quick-search.html')) {
    document.addEventListener('keydown', function (e) {
      if (e && e.keyCode == 27) {
        // 按 Esc
        window.parent.outPlugin && window.parent.outPlugin()
      }
    })
  }
  // 替换全局window.close
  var _windowClose = window.close
  window.close = function () {
    if (
      window.parent &&
      window.parent.document.querySelector('.close-iframe-btn')
    ) {
      window.parent.document.querySelector('.close-iframe-btn').click()
    } else {
      _windowClose()
    }
  }
}
// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function () {
//         // navigator.serviceWorker.ready.then((registration) => {
//         //   registration.unregister();
//         // });
//       navigator.serviceWorker.register("./sw.js").then(
//         function (registration) {
//           // Registration was successful
//           console.log(
//             "ServiceWorker registration successful with scope:",
//             registration.scope,
//             location.href
//           );
//         },
//         function (err) {
//           // registration failed :(
//           console.log("ServiceWorker registration failed:", err);
//         }
//       );
//     });
//   }
