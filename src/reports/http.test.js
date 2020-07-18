beforeEach(() => {
  jest.resetModules()
})

describe('#report - HTTP', () => {
  test('Rejected if the config doesn\'t contain the url', () => {
    const Http = require('./http')
    const config = {}
    const result = {}
    expect(Http(config, result)).rejects.toThrow(new Error('config.url is required for the "http" report'))
  })

  test('Rejected if the request fail', () => {
    const Errors = require('../errors')
    const got = require('got')
    jest.mock('got')
    const gotError = new Error('got Msg')
    gotError.response = {
      statusCode: 503,
      body: {
        err: 'foo/bar'
      }
    }

    got.mockRejectedValue(gotError)

    const Http = require('./http')
    const config = {
      url: 'http://my-url.test/report'
    }

    const result = {
      success: true
    }
    expect(Http(config, result)).rejects.toThrow(new Errors.HTTP('HTTP REPORT', gotError))
    const expectedOptions = {
      hostname: 'my-url.test',
      port: '',
      protocol: 'http:',
      pathname: '/report',
      method: 'POST',
      headers: {},
      json: {
        success: true
      }
    }
    expect(got.mock.calls.length).toBe(1)
    expect(got.mock.calls[0][0]).toEqual(expectedOptions)
  })

  test('Success Case with headers', () => {
    const got = require('got')
    jest.mock('got')
    got.mockResolvedValue({
      statusCode: 201,
      body: {
        err: 'foo/bar'
      }
    })

    const Http = require('./http')
    const config = {
      url: 'http://my-url.test/report',
      method: 'PUT',
      headers: {
        'x-foo': 'bar'
      }
    }

    const result = {
      success: true
    }
    expect(Http(config, result)).resolves.toBe('[HTTP REPORT][201] - http://my-url.test/report')

    const expectedOptions = {
      hostname: 'my-url.test',
      port: '',
      protocol: 'http:',
      pathname: '/report',
      method: 'PUT',
      headers: {
        'x-foo': 'bar'
      },
      json: {
        success: true
      }
    }
    expect(got.mock.calls.length).toBe(1)
    expect(got.mock.calls[0][0]).toEqual(expectedOptions)
  })
})
