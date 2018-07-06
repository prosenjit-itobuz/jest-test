module.exports = {
  setupTestFrameworkScriptFile: './jest/browser.js',
  globals: { // available in all tests
    browser: null,
    page: null,
    baseUrl: "http://localhost:4200/",
    api: "https://api.amigosconderechos.es/api/",
    emailFrom: "Amigos con Derechos",
    activateES: "activar",
    profileES: "perfil/Clondepitbull",
    redirectCheckUrl: "http://www.redirect-checker.org/"
  }
}
