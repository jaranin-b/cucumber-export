function Http (formatter, error) {
  var instance = error
  instance.formatter = formatter
  instance.name = 'HTTP'
  const { response } = error
  instance.customMsg = `[${formatter}][${response.statusCode}] - ${response.requestUrl} : ${JSON.stringify(response.body)}`
  instance.info = {
    formatter,
    formatterMessage: instance.customMsg,
    message: error.message,
    statusCode: response.statusCode,
    url: response.requestUrl,
    responseBody: JSON.stringify(response.body),
    responseHeaders: JSON.stringify(response.headers),
    stack: error.stack
  }

  instance.toString = function () {
    return Object.keys(this.info).map(_ => `${_} : ${this.info[_]}`).join('\n')
  }

  Object.setPrototypeOf(instance, Object.getPrototypeOf(this))
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, Http)
  }
  return instance
}

module.exports = Http
