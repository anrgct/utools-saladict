import browser from 'sinon-chrome/webextensions'
import { openIframe } from '../mock/utils'
window.browser = browser
window.chrome = browser
window.openIframe = openIframe
const req = require.context('./patches', false, /\.js$/)
req.keys().map(req)
