const got = require('got')
const { URL } = require('url')
const moment = require('moment')
const $async = require('async')

module.exports = function (config, testRun) {
  return new Promise((resolve, reject) => {
    if (!config.url) return reject(new Error('config.url is required for the "elastic-search" report'))

    const url = new URL(config.url)
    config.index = config.index || 'restqa-e2e-result'
    const index = config.index + '-' + moment().format('YYYYMMDD')

    const options = {
      hostname: url.hostname,
      port: url.port,
      protocol: url.protocol,
      pathname: `/${index}/_doc`,
      method: 'POST',
      responseType: 'json'
    }

    const result = []

    const q = $async.queue(function (opt, callback) {
      got(opt)
        .then(res => {
          result.push(`[ELASTIC-SEARCH REPORT][${res.statusCode}] - ${config.url} - index : ${index}`)
          callback()
        })
        .catch(callback)
    }, 5)

    q.error(function (err, task) {
      let code = err.code
      if (err.response) {
        code = err.response.statusCode
      }
      result.push(`[ELASTIC-SEARCH REPORT][${code}] - ${config.url} - index : ${index}`)
    })

    q.drain(() => {
      resolve(result)
    })

    const { features } = testRun
    delete testRun.features

    q.push(Object.assign({ json: testRun }, options))

    features.forEach(feature => {
      q.push(Object.assign({ json: feature }, options))
      feature.elements.forEach(scenario => {
        q.push(Object.assign({ json: scenario }, options))
      })
    })
  })
}
