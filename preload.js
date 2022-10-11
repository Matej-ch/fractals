/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const os = require('os')
const path = require('path')
const Toastify = require('toastify-js');
const { contextBridge } = require('electron')

window.addEventListener('DOMContentLoaded', () => {

})

contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir(),
})

contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
})

contextBridge.exposeInMainWorld('Toastify', {
  toast: (options) => Toastify(options).showToast(),
})
