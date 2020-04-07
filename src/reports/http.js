const got = require('got')
const { URL } = require('url')

module.exports = function (config, result) {
  return new Promise((resolve, reject) => {
    if (!config.url) return reject(new Error('config.url is required for the "http" report'))

    const url = new URL(config.url)

    const options = {
      hostname: url.hostname,
      port: url.port,
      protocol: url.protocol,
      pathname: url.pathname,
      method: config.method || 'POST',
      headers: config.headers || {},
      responseType: 'json',
      json: result
    }

    got(options)
      .then(res => {
        resolve(`[HTTP REPORT][${res.statusCode}] - ${config.url}`)
      })
      .catch(err => {
        // console.log(err)
        reject(new Error(`[HTTP REPORT][${err.response.statusCode}] - ${config.url} : ${JSON.stringify(err.response.body)}`))
      })
  })
}
