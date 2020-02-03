// const clipboard = require('electron').clipboard
const shell = require('electron').shell
const {exportToJson, importFromJson, clearDatabase} = require('./webextensions-emulator-master/lib/mock/idb-backup-and-restore.js')
let inited, enterEventListener;
utools.onPluginEnter(({ code, type, payload }) => {
    // let clipboardText = clipboard.readText();
    if (payload == "沙拉查词" || payload == "saladict") {
        payload = ''
    }
    enterEventListener = ()=>{
        openIframe('./quick-search.html', { hideCloseBtn: true })
        document.execCommand = function (e) {
            // let clipboardText = clipboard.readText();
            // let queryStr = payload || clipboardText;
            document.getElementById("saladict-paste").value = payload
        }
    }
    if(inited){
        enterEventListener();
    }
    
})

let localStorageData, indexedDBData;

utools.onPluginReady(async () => {
    await loadAllJs(["./webextensions-emulator-master/dist/core.js"]);
    localStorageData = new utoolsStorage('localStorageData');
    indexedDBData = new utoolsStorage('indexedDBData');
    restoreLocalStorageData();
    let utoolsPageScript = ["./assets/runtime.a044b40a.js","./assets/15.ce10c657.js",
    "./assets/1.c7c5ffd6.js","./assets/3.d0692a3d.js",
    "./assets/background.21ede37f.js","./addon.js"];
    // 先加载沙拉
    await loadAllJs(utoolsPageScript);
    // 再还原indexedDB
    await restoreIndexedBDData()

    inited = true;
    enterEventListener && enterEventListener();
})
// utools.onPluginOut(async () => {
//     // console.log('用户退出插件');
//     await saveIndexedBDData()
// })
// 还原indexedDB
function restoreIndexedBDData() {
    if (indexedDBData.data && indexedDBData.data.data != "{}") {
        return new Promise((resolve, reject) => {
            var request = indexedDB.open('SaladictWords')
            request.onsuccess = async function (event) {
                let db = request.result;
                // console.log('数据库打开成功');
                await clearDatabase(db)
                await importFromJson(db, indexedDBData.data.data)
                db.close()
                resolve()
            };
            request.onerror = function (event) {
                // console.log('数据库打开报错', event);
                reject()
              };
        })
    } else {
        return Promise.resolve()
    }
}
// 保存indexedDB
function saveIndexedBDData() {
    return new Promise((resolve, reject) => {
        var request = indexedDB.open('SaladictWords')
        request.onsuccess = async function (event) {
            let db = request.result;
            // console.log('数据库打开成功');
            let data = await exportToJson(db)
            if(data){
                indexedDBData.save(data);
            }
            db.close()
            resolve()
        };
    })
}
// 还原localstorage
function restoreLocalStorageData() {
    if (localStorageData.data) {
        window.restoreLocalStorageData(localStorageData.data.data)
    } else {
        return Promise.resolve()
    }
}
// 保存localstorage
function saveLocalStorageData(data) {
    if (data) {
        localStorageData.save(data);
    }
}
// 加载js
async function loadAllJs(arr){
    for(let url of arr){
        await loadJs(url)
    }
}
function loadJs(url, callback) {
    return new Promise((res, rej)=>{
        var script = document.createElement('script');
        script.type = "text/javascript";
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback && callback();
                    res();
                }
            }
        } else {
            script.onload = function () {
                callback && callback();
                res();
            }
        }
        script.src = url;
        document.body.appendChild(script);
    })
}

window.saveLocalStorageData = saveLocalStorageData;
window.saveIndexedBDData = saveIndexedBDData;
window.openExternal = function (url) {
    shell.openExternal(url)
}
window.outPlugin = function(){
    utools.outPlugin()
}
class utoolsStorage {
    constructor(id) {
        this.id = id;
        this.data = utools.db.get(id)
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
                _rev:result.rev,
                data:{ ...data }
            }
        }
    }
}