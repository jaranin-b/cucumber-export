const { JsonFormatter } = require('cucumber')
const Transport = require('./src')

function getFormatter (config) {
  return class RestQaFormatter extends JsonFormatter {
    onTestRunFinished (result) {
      const instance = this
      instance.log = new Transport(config, result, this.log)
      super.onTestRunFinished.call(instance)
    }
  }
}

module.exports = {
  getFormatter
}
