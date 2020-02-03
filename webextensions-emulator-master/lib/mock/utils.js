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
