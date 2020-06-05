import { importDatabase } from './idb-export-import'
export function openIframe (url, opt = {}) {
  if (!(/^\.\//.test(url) || /^bolb/.test(url) || /^http/.test(url))) {
    url = `./${url}`
  }
  let existIframe = document.querySelector(`iframe[src="${url}"]`)
  if (existIframe) {
    existIframe.contentWindow.location.reload()
    return
  }
  let { hideCloseBtn } = opt
  var iframe = document.createElement('iframe')
  iframe.src = url
  iframe.width = '100%'
  iframe.height = '100%'
  iframe.frameborder = 0
  var wrap = document.createElement('div')
  wrap.classList.add('iframe-wrap')
  if (!hideCloseBtn) {
    var closeBtn = document.createElement('span')
    closeBtn.innerText = '关闭'
    closeBtn.classList.add('close-iframe-btn')
    closeBtn.onclick = () => {
      document.body.removeChild(wrap)
      // 监听设置页关闭事件，保存indexedDB
      if (url.includes('options.html')) {
        window.parent.saveIndexedBDData && window.parent.saveIndexedBDData()
      }
    }
    wrap.appendChild(closeBtn)
  }
  wrap.appendChild(iframe)
  document.body.appendChild(wrap)
}
// 加载js
export async function loadAllJs (arr) {
  if(!Array.isArray(arr)){
    arr = [arr]
  }
  for (let url of arr) {
    await loadJs(url)
  }
}
function loadJs (url, callback) {
  return new Promise((res, rej) => {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null
          callback && callback()
          res()
        }
      }
    } else {
      script.onload = function () {
        callback && callback()
        res()
      }
    }
    script.src = url
    document.body.appendChild(script)
  })
}
export class utoolsStorage {
  constructor(id) {
      this.id = id;
      this.data = utools.db.get(id)
  }
  getData(){
    let data = null;
    if(this.data){
      data = this.data.data
    }
    return data
  }
  save(data) {
      let postData = {
          _id: this.id,
          data,
      }
      if (this.data && this.data._rev) {
          postData._rev = this.data._rev
      }
      let result = utools.db.put(postData);
      if (result.error) {
          console.error(result.message)
      } else {
          this.data = {
              _rev: result.rev,
              data: { ...data }
          }
      }
  }
}
export function restoreIndexedBDData(indexedDBData) {
  let data = indexedDBData.getData();
  if (data) {
      return importDatabase(data)
      // new Promise(async (resolve, reject) => {
      //     var request = indexedDB.open('SaladictWords')
      //     request.onsuccess = async function (event) {
      //         let db = request.result;
      //         // console.log('数据库打开成功');
      //         await clearDatabase(db)
      //         await importFromJson(db, indexedDBData.getData())
      //         db.close()
      //         resolve()
      //     };
      //     request.onerror = function (event) {
      //         // console.log('数据库打开报错', event);
      //         reject()
      //     };
      // })
  } else {
      return Promise.resolve()
  }
}

// 还原localstorage
export function restoreLocalStorageData(localStorageData) {
  if (localStorageData.getData()) {
      window.restoreLocalStorageData(localStorageData.getData())
  }
}