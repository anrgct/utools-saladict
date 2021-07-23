import _ from 'lodash'
import sinon from 'sinon'

export const msgPageListeners = ('fake_env_msgPageListeners')
export const msgBgListeners = ('fake_env_msgBackgroundListeners')

export function runtimeSendMessage (listenersArea) {
  function sendMessage (extensionId, message) {
    // console.log('runtime.sendMessage:',extensionId && extensionId.type,message)
    // 监听WORD_SAVED保存indexedDB
    if (extensionId && extensionId.type && ['WORD_SAVED'].includes(extensionId.type)) {
      window.saveIndexedBDData && window.saveIndexedBDData()
    }
    // 修改不能删除生词记录问题
    if (extensionId && extensionId.type && ['SYNC_SERVICE_DOWNLOAD'].includes(extensionId.type)) {
      return Promise.resolve(true)
    }
    return new Promise((resolve, reject) => {
      if (typeof extensionId !== 'string') {
        message = extensionId
      }
      try {
        message = JSON.parse(JSON.stringify(message))
      } catch (err) {
        return reject(new TypeError('Wrong argument type'))
      }

      let isClosed = false
      let isAsync = false
      function sendResponse (response) {
        if (isClosed) {
          return reject(new Error('Attempt to response a closed channel'))
        }
        if (response) {
          try {
            // deep clone & check data
            response = JSON.parse(JSON.stringify(response))
          } catch (err) {
            return reject(new TypeError('Response data not serializable'))
          }
        }
        
        resolve(response)
      }

      listenersArea.forEach(listener => {
        const hint = listener(
          message,
          sendMessage._sender(message),
          sendResponse
        )
        // return true or Promise to send a response asynchronously
        if (hint === true) {
          isAsync = true
        } else if (hint && _.isFunction(hint.then)) {
          // promise style
          isAsync = true
          hint.then(sendResponse)
        }
      })

      // close synchronous response
      setTimeout(() => {
        if (!isAsync) {
          isClosed = true
        }
      }, 0)
    })
  }

  sendMessage._sender = sinon.stub().callsFake(() => ({}))

  return sendMessage
}

export const connectPageListeners = ('fake_env_connectPageListeners')
export const connectBgListeners = ('fake_env_connectBackgroundListeners')

export function runtimeConnect (listenersArea) {
  return function connect (...args) {
    const name =
      args[0] && typeof args[0] === 'object'
        ? args[0].name || ''
        : args[1] && typeof args[1] === 'object'
          ? args[1].name || ''
          : ''

    const fromOnDisconnect = []
    const fromOnMessage = []
    const toOnDisconnect = []
    const toOnMessage = []

    var fromPort = {
      name,
      disconnect: () => toOnDisconnect.forEach(fn => fn()),
      onDisconnect: makeListener(fromOnDisconnect),
      onMessage: makeListener(fromOnMessage),
      postMessage: message =>
        toOnMessage.forEach(fn => fn(JSON.parse(JSON.stringify(message))))
    }

    var toPort = {
      name,
      disconnect: () => fromOnDisconnect.forEach(fn => fn()),
      onDisconnect: makeListener(toOnDisconnect),
      onMessage: makeListener(toOnMessage),
      postMessage: message =>
        fromOnMessage.forEach(fn => fn(JSON.parse(JSON.stringify(message))))
    }

    listenersArea.forEach(fn => fn(toPort))

    return fromPort
  }
}

export function makeListener (listenersArea) {
  return {
    addListener: listener => {
      if (!_.isFunction(listener)) {
        throw new TypeError('Wrong argument type')
      }
      listenersArea.add(listener)
    },
    removeListener: listener => {
      if (!_.isFunction(listener)) {
        throw new TypeError('Wrong argument type')
      }
      listenersArea.delete(listener)
    },
    hasListener: listener => {
      if (!_.isFunction(listener)) {
        throw new TypeError('Wrong argument type')
      }
      return listenersArea.has(listener)
    }
  }
}
