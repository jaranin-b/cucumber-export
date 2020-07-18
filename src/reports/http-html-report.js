const got = require('got')
const Errors = require('../errors')
const { URL } = require('url')

module.exports = function (config, result) {
  return new Promise((resolve, reject) => {

    const url = new URL(config.url || 'https://html-report.restqa.io')

    const options = {
      hostname: url.hostname,
      port: url.port,
      protocol: url.protocol,
      pathname: url.pathname,
      method: 'POST',
      responseType: 'json',
      json: result,

    }

    got(options)
      .then(res => {
        resolve(`[HTTP HTML REPORT][${res.statusCode}] - Access to your test report : ${res.body.url}`)
      })
      .catch(err => {
        reject(new Errors.HTTP('HTTP HTML REPORT', err))
      })
  })
}

