import { openIframe } from '../../mock/utils'
window.browser.tabs.create.callsFake(({ url }) => {
  if (!url) {
    return Promise.reject(new Error('invalid url'))
  }
  if(url.includes('http')){
    window.openExternal(url)
  }else{
    openIframe(url)
  }
  return Promise.resolve({
    active: true,
    url: url,
    id: `${Date.now()}`
  })
})
window.browser.tabs.query.callsFake((...args) => {
  if(_.isEmpty(args[0])){
    return Promise.resolve([{id:'forWordSaved',url:'utools.html'}])
  }else{
    return Promise.resolve([])
  }
})
window.browser.tabs.highlight.callsFake(() => Promise.resolve())
window.browser.tabs.sendMessage.callsFake((tabId, message) => {
  if(tabId == 'forWordSaved'){
    return window.browser.runtime.sendMessage(message)
  }else{
    return Promise.resolve()
  }
})
