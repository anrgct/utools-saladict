document.addEventListener('click',function(e){
    var el = e.target
    if(el.tagName == 'A' && el.target == '_blank' && el.href){
        let openExternal = window.openExternal || window.parent.openExternal;
        if(openExternal){
            openExternal(el.href)
        }
    }
})
if(location.href.includes('utools.html')){
    window.browser.storage.sync.get().then(data=>{
        if(!data.activeProfileID){
            window.browser.runtime.onInstalled._listeners.forEach(listener => {
                if (!_.isFunction(listener)) {
                    throw new TypeError('Wrong argument type')
                }
                // delay startup calls
                listener({ reason: '' })
            })
        }
    })
    
    // openIframe('./quick-search.html',{hideCloseBtn : true})
}
if(location.href.includes('quick-search.html')){
    document.addEventListener('keydown',function(e){
        if(e && e.keyCode==27){ // 按 Esc  
            window.parent.outPlugin && window.parent.outPlugin()
        } 
    })
}