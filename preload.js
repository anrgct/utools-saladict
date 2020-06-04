const shell = require('electron').shell

window.openExternal = function (url) {
    shell.openExternal(url)
}

