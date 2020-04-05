const moment = require('moment')
const { v4: uuidv4 } = require('uuid')
const Format = require('./format')
const Reports = require('./reports')

module.exports = function (config, testRunResult, logger) {
  return function (result) {
    result = JSON.parse(result)

    if (!result.length) return

    const metadata = {
      id: config.uuid || uuidv4(),
      startTime: config.startTime || moment().format(),
      name: config.name,
      key: config.key,
      env: config.env,
      ...testRunResult.result
    }

    result = Format(metadata, result)

    const outputs = config.outputs
      .filter(output => output.enabled)
      .map(output => {
        return Reports[output.type].call(this, output.config, result)
      })

    Promise.all(outputs)
      .then(response => {
        // console.log(result)
        console.log('\n')
        console.log('==========================================')
        console.log(response.flat().join('\n'))
        console.log('==========================================')
        // logger(result.flat().join('\n'))
      })
      .catch(err => {
        console.log(err)
        // logger(err)
      })
  }
}
