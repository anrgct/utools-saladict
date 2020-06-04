import { runtime } from './patches/runtime'
import { tabs } from './patches/tabs'
import { run } from '../mock/addon'
import '../mock/refactor.css'
window.browser = new Proxy(window.parent.browser, {
  get: (...args) => {
    switch (args[1]) {
      case 'tabs':
        return tabs
      case 'runtime':
        return runtime
    }
    return Reflect.get(...args)
  }
})
window.chrome = window.browser
window.addEventListener('load', run)
