import browser from 'sinon-chrome/webextensions'
import { openIframe, utoolsStorage, loadAllJs, restoreIndexedBDData, restoreLocalStorageData } from '../mock/utils'
import { exportDatabase } from '../mock/idb-export-import'
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
let latestVersion = '7.15.1'

utools.onPluginEnter(({ code, type, payload }) => {
    console.log('utools.onPluginEnter')
    // let clipboardText = clipboard.readText();
    if (payload == "沙拉查词" || payload == "saladict") {
        payload = ''
    }
    enterEventListener = () => {
        openIframe('quick-search.html', { hideCloseBtn: true })
        document.execCommand = function (cmd) {
            // console.log("document.execCommand -> cmd", cmd,payload)
            // let clipboardText = clipboard.readText();
            // let queryStr = payload || clipboardText;
            if(cmd == 'copy'){
                let textArea = document.querySelectorAll('textarea');
                textArea = textArea[textArea.length - 1];
                let text = textArea.value;
                utools.copyText(text)
            }else if(cmd == 'paste'){
                document.getElementById("saladict-paste").value = payload
            }
        }
    }
    if (inited) {
        enterEventListener();
    }

})

async function init() {
    utools.db.remove("indexedDBData")
    localStorageData = new utoolsStorage('localStorageData');
    indexedDBData = new utoolsStorage('indexedDBDataV2');
    versionData = new utoolsStorage('versionData');
    // 还原内部storage
    restoreLocalStorageData(localStorageData);
    // 还原indexedDB
    await restoreIndexedBDData(indexedDBData)
    let utoolsPageScript = [
      "assets/runtime.9f8be0be.js",
      "assets/view-vendor.3dc611a9.js",
      "assets/dexie.ff1da2a5.js",
      "assets/20.16ec49ef.js",
      "assets/background.bea7b0f5.js"
    ];
    // 加载沙拉
    await loadAllJs(utoolsPageScript);

    inited = true;
    await mockOnInstalled();
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
    return window.browser.storage.sync.get().then((data) => {
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
    return new Promise(async (resolve, reject) => {
        let data = await exportDatabase('SaladictWords')
        console.log("saveIndexedBDData -> data", data)
        if (data) {
            indexedDBData.save(data);
        }
        resolve()
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
