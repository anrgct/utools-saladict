const shell = require("electron").shell;
//打开外部链接
window.openExternal = function (url) {
  shell.openExternal(url);
};

//处理请求自定义cookie问题
const adapter = require("axios/lib/adapters/http");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
const CookieJar = new tough.CookieJar();
const axios = require("axios").create({
  adapter,
  headers:{
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
  },
  jar: CookieJar,
  // proxy: {
  //   host: "localhost",
  //   port: 8888,
  // },
});
tough._CookieJar = CookieJar;
axiosCookieJarSupport(axios);
axios.interceptors.request.use(
  (config) => {
    //处理腾讯翻译君bug
    config.headers.referer = config.url;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
  // console.log("🚀 ~ file: preload.js ~ line 36 ~ response", response)
    return response;
  },
  (error) => {
  // console.log("🚀 ~ file: preload.js ~ line 40 ~ error", error)
    return Promise.reject(error);
  }
);

window.axios = axios;
window.tough = tough;
window.navigator.product === "NativeScript";
