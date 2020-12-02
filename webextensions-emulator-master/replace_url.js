const replace = require('replace-in-file')
const options = [
  {
    files: '../ext-saladic/assets/runtime*.js',
    from: /n.p="\/"/g,
    to: 'n.p="./"'
  },
  {
    files: '../ext-saladic/assets/background*.js',
    from: /\/options.html/g,
    to: 'options.html'
  },
  {
    files: '../ext-saladic/assets/runtime*.js',
    from: /n.p\+"assets\/"/g,
    to: 'n.p+""'
  },
  {
    files: '../ext-saladic/assets/runtime*.js',
    from: /"assets\/"/g,
    to: '"./"'
  },
  {
    files: '../ext-saladic/assets/*.js',
    from: /a="\/assets\/"\+`antd/g,
    to: 'a="./assets/"+`antd'
  },
  //替换axios模块
  {
    files: '../ext-saladic/assets/*.js',
    from: /[\w]\(596\)/g,
    to: 'window.axios'
  },
  {
    files: '../ext-saladic/assets/*.js',
    from: 'responseType:"document"}).then(({data:e})=>e)',
    to: 'responseType:"document"}).then(({data:e})=>new DOMParser().parseFromString(e,"text/html"))'
  },
  {
    files: '../ext-saladic/assets/*.js',
    from: /qsAuto:!1/g,
    to: 'qsAuto:!0'
  },
  {
    files: '../ext-saladic/assets/*.js',
    from: /qsPreload:"selection"/g,
    to: 'qsPreload:"clipboard"'
  },
  {
    files: '../ext-saladic/assets/*.js',
    from: /browser.runtime.getURL\("\/audio-control.html"/g,
    to: 'browser.runtime.getURL("audio-control.html"'
  },
  {
    files: '../ext-saladic/*.html',
    from: /src="\//g,
    to: 'src="./'
  },
  {
    files: '../ext-saladic/*.html',
    from: /href="\//g,
    to: 'href="./'
  },
  {
    files: '../ext-saladic/*.html',
    from: '<script src="./assets/browser-polyfill.min.js"></script>',
    to:
        '<script src="../webextensions-emulator-master/dist/background.js"></script>'
  }
]

function run (options) {
  try {
    const results = replace.sync(options)
    console.log('Replacement results:', results)
  } catch (error) {
    console.error('Error occurred:', error)
  }
}
options.forEach((it) => {
  //   it.dry = true
  it.numReplacements = true
  it.numMatches = true
  run(it)
})
