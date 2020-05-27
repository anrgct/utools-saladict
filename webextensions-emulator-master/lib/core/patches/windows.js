window.browser.windows.create.callsFake(({ url }) => {
  window.openIframe && window.openIframe(url)
  return Promise.resolve()
})
window.browser.windows.update.callsFake(() => Promise.resolve());
