import _ from 'lodash'

const storageData = ('fake_env_storageData')
function genStorage (prefix, source = {}) {
  function restore (args) {
    let name = `ls_${prefix}`
    let objStr = localStorage.getItem(name)
    if (/\{.*\}/.test(objStr) || /\[.*\]/.test(objStr)) {
      objStr = eval(`(${objStr})`)
    } else if (objStr == 'undefined' || objStr == 'NaN' || objStr == 'null') {
      objStr = eval(`(${objStr})`)
    }
    _.extend(args[0], objStr)
    return args[0]
  }
  function save (args) {
    let name = `ls_${prefix}`
    let objStr = args[0]
    if (typeof objStr === 'object') {
      objStr = JSON.stringify(objStr)
    }
    localStorage.setItem(name, objStr)
    return objStr
  }
  return new Proxy(source, {
    get: (...args) => {
      switch (args[1]) {
        case 'save':
          return save.bind(args[0], args)
        case 'restore':
          return restore.bind(args[0], args)
        case '__prefix__':
          return prefix
      }
      return Reflect.get(...args)
    }
  })
}

// window.aa = genStorage('test')
window[storageData] = {
  local: genStorage('local'),
  sync: genStorage('sync'),
  managed: genStorage('managed'),
  listeners: []
}
window[storageData].local.restore()
window[storageData].sync.restore()
window[storageData].managed.restore()
window.browser.storage.onChanged.addListener = listener => {
  if (!_.isFunction(listener)) {
    return Promise.reject(new TypeError('Wrong argument type'))
  }
  if (!window[storageData].listeners.some(x => x === listener)) {
    window[storageData].listeners.push(listener)
  }
}
window.browser.storage.onChanged.removeListener = listener => {
  if (!_.isFunction(listener)) {
    return Promise.reject(new TypeError('Wrong argument type'))
  }
  window[storageData].listeners = window[storageData].listeners.filter(
    x => x !== listener
  )
}
window.browser.storage.onChanged.hasListener = listener => {
  if (!_.isFunction(listener)) {
    return Promise.reject(new TypeError('Wrong argument type'))
  }
  window[storageData].listeners.some(x => x === listener)
}

genStorageApis('sync')
genStorageApis('local')
genStorageApis('managed')

function genStorageApis (area) {
  window.browser.storage[area].get.callsFake(keys => {
    if (keys == null) {
      return Promise.resolve(_.cloneDeep(window[storageData][area]))
    }

    if (_.isString(keys)) {
      if (!keys) {
        return Promise.resolve({})
      }
      keys = [keys]
    } else if (_.isArray(keys)) {
      if (keys.length <= 0) {
        return Promise.resolve({})
      }
    } else if (_.isObject(keys)) {
      keys = Object.keys(keys)
      if (keys.length <= 0) {
        return Promise.resolve({})
      }
    } else {
      return Promise.reject(new TypeError('Wrong argument type'))
    }

    return Promise.resolve(_.pick(_.cloneDeep(window[storageData][area]), keys))
  })

  window.browser.storage[area].set.callsFake(data => {
    if (!_.isObject(data)) {
      return Promise.reject(new TypeError('Argument 1 should be an object'))
    }

    try {
      // deep clone & check data
      data = JSON.parse(JSON.stringify(data))
    } catch (err) {
      return Promise.reject(new TypeError('Data not serializable'))
    }

    const newData = _.assign({}, window[storageData][area], data)
    const changedItems = Object.keys(data).filter(
      k => !_.isEqual(newData[k], window[storageData][area][k])
    )

    if (changedItems.length > 0) {
      const changes = changedItems.reduce((x, k) => {
        x[k] = {
          newValue: _.cloneDeep(newData[k]),
          oldValue: _.cloneDeep(window[storageData][area][k])
        }
        return x
      }, {})
      setTimeout(() => notifyListeners(changes, area), 0)
    }

    window[storageData][area] = genStorage(window[storageData][area]['__prefix__'], newData)
    window[storageData][area].save()
    return Promise.resolve()
  })

  window.browser.storage[area].remove.callsFake(keys => {
    if (_.isString(keys)) {
      keys = keys ? [keys] : []
    } else if (!_.isArray(keys)) {
      return Promise.reject(new TypeError('Wrong argument type'))
    }

    const newData = _.omit(window[storageData][area], keys)
    const changedItems = keys.filter(
      k => !_.isUndefined(window[storageData][area][k])
    )

    if (changedItems.length > 0) {
      const changes = changedItems.reduce((x, k) => {
        x[k] = {
          newValue: void 0,
          oldValue: _.cloneDeep(window[storageData][area][k])
        }
        return x
      }, {})
      setTimeout(() => notifyListeners(changes, area), 0)
    }

    window[storageData][area] = genStorage(window[storageData][area]['__prefix__'], newData)
    window[storageData][area].save()
    return Promise.resolve()
  })

  window.browser.storage[area].clear.callsFake(() => {
    const changedItems = Object.keys(window[storageData][area]).filter(
      k => !_.isUndefined(window[storageData][area][k])
    )

    if (changedItems.length > 0) {
      const changes = changedItems.reduce((x, k) => {
        x[k] = {
          newValue: void 0,
          oldValue: _.cloneDeep(window[storageData][area][k])
        }
        return x
      }, {})
      setTimeout(() => notifyListeners(changes, area), 0)
    }

    window[storageData][area] = genStorage(window[storageData][area]['__prefix__'], {})
    window[storageData][area].save()
    return Promise.resolve()
  })

  window.browser.storage[area].getBytesInUse.callsFake(keys => {
    if (_.isNull(keys)) {
      return Promise.resolve(
        new Blob([JSON.stringify(window[storageData][area])]).size
      )
    }

    if (_.isString(keys)) {
      keys = keys ? [keys] : []
    } else if (!_.isArray(keys)) {
      return Promise.reject(new TypeError('Wrong argument type'))
    }

    if (keys.length <= 0) {
      return Promise.resolve(0)
    }

    return Promise.resolve(
      new Blob([JSON.stringify(_.pick(window[storageData][area], keys))]).size
    )
  })
}

function notifyListeners (changes, area) {
  window[storageData].listeners.forEach(listener =>
    listener(_.cloneDeep(changes), area)
  )
}
