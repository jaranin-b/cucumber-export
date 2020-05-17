const { JsonFormatter, Formatter } = require('cucumber')
const Transport = require('./src')
const fs = require('fs')

function getFormatter (config) {
  return class RestQaFormatter extends Formatter {
    constructor (options) {
      super(options)
      if (this.stream.fd === process.stdout.fd) { // Stop the process IF the current stream is stdout...
        const errorMessage = [
          this.colorFns.failed('You need to specify a PATH to store the debug logs (example: --format <TYPE[:PATH]>)'),
          this.colorFns.pending('=> Refer at the cucumber-js documentation (https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md#formats)'),
          ''
        ]
        this.log(errorMessage.join('\n'))
        return
      }
      options.eventBroadcaster.on('test-run-finished', this.onTestRunFinished.bind(this))
    }

    onTestRunFinished (testRunResult) {
      const logFileName = fs.readlinkSync('/proc/self/fd/' + this.stream.fd)
      process.nextTick(async () => {
        const format = new Transport(config, testRunResult)
        const options = {
          eventDataCollector: this.eventDataCollector,
          eventBroadcaster: ({ on: () => {} }),
          log: async (result) => {
            const STATUS_ICON = {
              fulfilled: '✅',
              rejected: '❌'
            }

            process.stdout.write('|===> CUCUMBER EXPORT 📦  \n')

            let inProgress = true
            let response = []
            const timer = setInterval(() => {
              if (inProgress) {
                return process.stdout.write('.')
              }
              clearTimeout(timer)
            }, 100)

            try {
              result = JSON.parse(result)
              response = await format.exports(result)
              inProgress = false
              const stdOut = response.map(_ => {
                return `\n|=> ${STATUS_ICON[_.status]}  ${(_.status === 'fulfilled') ? 'Successful' : 'Unsuccessful'} export - ${_.value || _.reason.customMsg}`
              })
              process.stdout.write(stdOut.join(''))
            } catch (err) {
              inProgress = false
              console.log(err) // @TODO : do something here please...
            }

            const errors = response.filter(_ => _.reason)
            if (errors.length) {
              const logs = errors.map(err => {
                return err.reason.toString() + '\n\n-------------------------------------------------------------'
              })
              fs.writeFileSync(logFileName, logs.join('\n'))
              process.stdout.write(`\n\n🥺  Find the detail of the errors on the file : ${logFileName}\n`)

              if (process.stdout.isTTY) {
                process.stdout.write(logs.join('\n'))
              }
            }

            process.stdout.write('\n')

          }
        }

        const jsonResult = new JsonFormatter(options)
        jsonResult.onTestRunFinished()
      })
    }
  }
}

module.exports = {
  getFormatter
}
