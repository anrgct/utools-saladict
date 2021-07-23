window.browser.cookies.get.callsFake(() => Promise.resolve());
window.browser.cookies.getAll.callsFake(() => Promise.resolve());
window.browser.cookies.getAllCookieStores.callsFake(() => Promise.resolve());
window.browser.cookies.remove.callsFake(() => Promise.resolve());
// window.browser.cookies.set.callsFake(() => Promise.resolve());

window.browser.cookies.set.callsFake((obj) => {
  // obj.key = obj.name;
  // let cookie = new tough.Cookie(obj);
  // tough._CookieJar.setCookie(cookie, obj.url);
  // return Promise.resolve()
  return new Promise((res, rej)=>{
    obj.key = obj.name;
    let cookie = new tough.Cookie(obj);
    tough._CookieJar.setCookie(cookie, obj.url, ()=>{
      res()
    });
  })
});
