const fs = require('fs-extra')
const path = require('path')
const url = require('url')

module.exports = function (config, result) {

  const HTML_TEMPLATE_FOLDER = path.resolve(__dirname, '..', '..', 'html-report', 'dist')

  return new Promise((resolve, reject) => {
    config = config || {}
    config.folder = config.folder || path.resolve(process.cwd(), 'report')

    try {
      fs.copySync(HTML_TEMPLATE_FOLDER, config.folder, {overwrite: true})

      const output = `window.RESTQA_RESULT = ${JSON.stringify(result, null, 2)}`
      fs.writeFileSync(path.resolve(config.folder, 'restqa-result.js'), output)

      resolve(`[HTML REPORT][SUCCESS] - Your report has been generated at ${url.pathToFileURL(path.resolve(config.folder, 'index.html')).href}`)
    } catch(e) {
      return reject(new Error(`[HTML REPORT][ERROR] - ${config.folder} : ${e.message}`))
    }
  })
}

