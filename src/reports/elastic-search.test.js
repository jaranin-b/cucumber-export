beforeEach(() => {
  jest.resetModules()
})

describe('#Channel - Elastic-search', () => {
  const moment = require('moment')
  const currentDate = moment().format('YYYYMMDD')

  test('Rejected if the config doesn\'t contain the url', () => {
    const Es = require('./elastic-search')
    const config = {}
    const result = {}
    expect(Es(config, result)).rejects.toThrow(new Error('config.url is required for the "elastic-search" report'))
  })

  test('Rejected if call fails', async () => {
    const got = require('got')
    jest.mock('got')
    got.mockRejectedValue({
      response: {
        statusCode: 503,
        body: {
          err: 'foo/bar'
        }
      }
    })
    const Es = require('./elastic-search')
    const config = {
      url: 'http://my-elk.test',
      index: 'my-index'
    }

    const result = {
      features: [{
        fea: 'foo',
        elements: [{
          el: 'bar'
        }]
      }]
    }

    const { features } = result

    const expectedResult = [
      `[ELASTIC-SEARCH REPORT][503] - http://my-elk.test - index : my-index-${currentDate}`,
      `[ELASTIC-SEARCH REPORT][503] - http://my-elk.test - index : my-index-${currentDate}`,
      `[ELASTIC-SEARCH REPORT][503] - http://my-elk.test - index : my-index-${currentDate}`
    ]

    await expect(Es(config, result)).resolves.toEqual(expectedResult)
    expect(result.features).toBeUndefined()

    expect(got.mock.calls.length).toBe(3)

    const index = `my-index-${currentDate}`
    let expectOptions = {
      hostname: 'my-elk.test',
      port: '',
      protocol: 'http:',
      pathname: `/${index}/_doc`,
      method: 'POST',
      responseType: 'json',
      json: result
    }
    expect(got.mock.calls[0][0]).toEqual(expectOptions)

    expectOptions = {
      hostname: 'my-elk.test',
      port: '',
      protocol: 'http:',
      pathname: `/${index}/_doc`,
      method: 'POST',
      responseType: 'json',
      json: features[0]
    }
    expect(got.mock.calls[1][0]).toEqual(expectOptions)

    expectOptions = {
      hostname: 'my-elk.test',
      port: '',
      protocol: 'http:',
      pathname: `/${index}/_doc`,
      method: 'POST',
      responseType: 'json',
      json: features[0].elements[0]
    }
    expect(got.mock.calls[2][0]).toEqual(expectOptions)
  })

  test('Rejected if another error occured', async () => {
    const got = require('got')
    jest.mock('got')
    got.mockRejectedValue({
      code: 'ERR'
    })
    const Es = require('./elastic-search')
    const config = {
      url: 'http://my-elk.test',
      index: 'my-index'
    }

    const result = {
      features: [{
        fea: 'foo',
        elements: [{
          el: 'bar'
        }]
      }]
    }

    const expectedResult = [
      `[ELASTIC-SEARCH REPORT][ERR] - http://my-elk.test - index : my-index-${currentDate}`,
      `[ELASTIC-SEARCH REPORT][ERR] - http://my-elk.test - index : my-index-${currentDate}`,
      `[ELASTIC-SEARCH REPORT][ERR] - http://my-elk.test - index : my-index-${currentDate}`
    ]

    await expect(Es(config, result)).resolves.toEqual(expectedResult)
    expect(result.features).toBeUndefined()
    expect(got.mock.calls.length).toBe(3)
  })

  test('Resolved if call succeed', async () => {
    const got = require('got')
    jest.mock('got')
    got.mockResolvedValue({
      statusCode: 201,
      body: {
        foo: 'bar'
      }
    })
    const Es = require('./elastic-search')
    const config = {
      url: 'http://my-elk.test'
    }

    const result = {
      features: [{
        fea: 'foo',
        elements: [{
          el: 'bar'
        }]
      }]
    }

    const { features } = result

    const index = `restqa-bdd-rest-api-${currentDate}`
    const expectedResult = [
      `[ELASTIC-SEARCH REPORT][201] - http://my-elk.test - index : ${index}`,
      `[ELASTIC-SEARCH REPORT][201] - http://my-elk.test - index : ${index}`,
      `[ELASTIC-SEARCH REPORT][201] - http://my-elk.test - index : ${index}`
    ]

    await expect(Es(config, result)).resolves.toEqual(expectedResult)
    expect(result.features).toBeUndefined()

    expect(got.mock.calls.length).toBe(3)

    let expectOptions = {
      hostname: 'my-elk.test',
      port: '',
      protocol: 'http:',
      pathname: `/${index}/_doc`,
      method: 'POST',
      responseType: 'json',
      json: result
    }
    expect(got.mock.calls[0][0]).toEqual(expectOptions)

    expectOptions = {
      hostname: 'my-elk.test',
      port: '',
      protocol: 'http:',
      pathname: `/${index}/_doc`,
      method: 'POST',
      responseType: 'json',
      json: features[0]
    }
    expect(got.mock.calls[1][0]).toEqual(expectOptions)

    expectOptions = {
      hostname: 'my-elk.test',
      port: '',
      protocol: 'http:',
      pathname: `/${index}/_doc`,
      method: 'POST',
      responseType: 'json',
      json: features[0].elements[0]
    }
    expect(got.mock.calls[2][0]).toEqual(expectOptions)
  })
})
