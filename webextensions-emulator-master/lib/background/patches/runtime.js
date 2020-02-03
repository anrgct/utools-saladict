import {
  makeListener,
  msgPageListeners,
  msgBgListeners,
  runtimeSendMessage,
  connectPageListeners,
  connectBgListeners,
  runtimeConnect
} from '../../helpers'

export const runtime = new Proxy(window.parent.browser.runtime, {
  get: (...args) => {
    switch (args[1]) {
      case 'sendMessage':
        return runtimeSendMessage(window.parent[msgPageListeners] ? window.parent[msgPageListeners] : window.parent.parent[msgPageListeners])
      case 'onMessage':
        return makeListener(window.parent[msgBgListeners] ? window.parent[msgBgListeners] : window.parent.parent[msgBgListeners])
      case 'connect':
        return runtimeConnect(window.parent[connectPageListeners] ? window.parent[connectPageListeners] : window.parent.parent[connectPageListeners])
      case 'onConnect':
        return makeListener(window.parent[connectBgListeners] ? window.parent[connectBgListeners] : window.parent.parent[connectBgListeners])
    }
    return Reflect.get(...args)
  }
})
