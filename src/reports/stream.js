const stream = require('stream')

module.exports = function (config, result) {
  return new Promise((resolve, reject) => {
    if (!config.instance) return reject(new Error('config.instance is required for the "stream" report'))

    if (!(config.instance instanceof stream.Writable)) {
      return reject(new Error('config.instance should be a writable stream'))
    }

    config.instance.on('error', err => {
      return reject(new Error(`[STREAM REPORT][ERROR] - ${err.message}`))
    })

    config.instance.write(Buffer.from(JSON.stringify(result)))

    config.instance.end(err => {
      if (err) return reject(new Error(`[STREAM REPORT][ERROR] - ${err.message}`))
      resolve('[STREAM REPORT] - Content successfully written into the stream')
    })
  })
}
