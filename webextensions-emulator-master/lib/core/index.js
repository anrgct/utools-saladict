import browser from 'sinon-chrome/webextensions'
import { openIframe, utoolsStorage, loadAllJs, restoreIndexedBDData, restoreLocalStorageData } from '../mock/utils'
import { exportToJson } from '../mock/idb-backup-and-restore.js'
import { run } from '../mock/addon'
import '../mock/refactor.css'
window.browser = browser
window.chrome = browser
const req = require.context('./patches', false, /\.js$/)
req.keys().map(req)

window.openIframe = openIframe
window.addEventListener('load', run)

let inited, enterEventListener;
let localStorageData, indexedDBData, versionData;
let latestVersion = '7.13.2'

utools.onPluginEnter(({ code, type, payload }) => {
    console.log('utools.onPluginEnter')
    // let clipboardText = clipboard.readText();
    if (payload == "沙拉查词" || payload == "saladict") {
        payload = ''
    }
    enterEventListener = () => {
        openIframe('quick-search.html', { hideCloseBtn: true })
        document.execCommand = function (e) {
            // let clipboardText = clipboard.readText();
            // let queryStr = payload || clipboardText;
            document.getElementById("saladict-paste").value = payload
        }
    }
    if (inited) {
        enterEventListener();
    }

})

async function init() {
    localStorageData = new utoolsStorage('localStorageData');
    indexedDBData = new utoolsStorage('indexedDBData');
    versionData = new utoolsStorage('versionData');
    restoreLocalStorageData(localStorageData);
    let utoolsPageScript = [
      "assets/runtime.7c358480.js",
      "assets/view-vendor.e505b0d9.js",
      "assets/dexie.8d869c28.js",
      "assets/20.c4eab594.js",
      "assets/background.3ba95e36.js"
    ];
    // 先加载沙拉
    await loadAllJs(utoolsPageScript);
    // 再还原indexedDB
    await restoreIndexedBDData(indexedDBData)

    inited = true;
    mockOnInstalled();
    enterEventListener && enterEventListener();

}
window.init = init;
console.log('core run ')
utools.onPluginReady(() => {
    console.log('utools.onPluginReady')
    init()
})
// 模拟install事件
function mockOnInstalled(){
    //install
    window.browser.storage.sync.get().then((data) => {
        if (!data.activeProfileID) {
          console.log('mock install')
          window.browser.runtime.onInstalled._listeners.forEach((listener) => {
            if (!_.isFunction(listener)) {
              return
            }
            listener({ reason: 'install' })
          })
          let versionInfo = versionData.getData();
          versionData.save({...versionInfo, version:latestVersion})
        }
      }).finally(()=>{
        //update
        let versionInfo = versionData.getData();
        if(!versionInfo || versionInfo.version < latestVersion){
            console.log('mock update')
            window.browser.runtime.onInstalled._listeners.forEach((listener) => {
                if (!_.isFunction(listener)) {
                return
                }
                listener({ reason: 'update' });
            })
            versionData.save({...versionInfo, version:latestVersion})
        }
      })
}
// 保存indexedDB
function saveIndexedBDData() {
    console.log("saveIndexedBDData -> saveIndexedBDData")
    return new Promise((resolve, reject) => {
        var request = indexedDB.open('SaladictWords')
        request.onsuccess = async function (event) {
            let db = request.result;
            // console.log('数据库打开成功');
            let data = await exportToJson(db)
            if (data) {
                indexedDBData.save(data);
            }
            db.close()
            resolve()
        };
    })
}

// 保存localstorage
function saveLocalStorageData(data) {
    console.log("saveLocalStorageData -> saveLocalStorageData")
    if (data) {
        localStorageData.save(data);
    }
}
window.outPlugin = function () {
    utools.outPlugin()
}
window.latestVersion = latestVersion;
window.saveLocalStorageData = saveLocalStorageData;
window.saveIndexedBDData = saveIndexedBDData;
