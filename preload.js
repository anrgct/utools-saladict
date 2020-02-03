const clipboard = require('electron').clipboard
const shell = require('electron').shell
utools.onPluginEnter(({ code, type, payload }) => {
    let clipboardText = clipboard.readText();
    if (payload == "沙拉查词" || payload == "saladict") {
        payload = ''
    }
    let queryStr = payload || clipboardText;
    // console.log('用户进入插件', 'payload:',payload, ',clipboardText:',clipboardText, ',queryStr:', queryStr)
    openIframe('./quick-search.html', { hideCloseBtn: true })
    document.execCommand = function (e) {
        let clipboardText = clipboard.readText();
        let queryStr = payload || clipboardText;
        document.getElementById("saladict-paste").value = queryStr
    }
})
openExternal = function (url) {
    shell.openExternal(url)
}