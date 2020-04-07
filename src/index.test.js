beforeEach(() => {
  jest.resetModules()
})

describe('#index - src', () => {
  test('Throw Error when the config outputs is not an array', () => {
    const Format = require('./format')
    jest.mock('./format')

    const Index = require('./index')
    const config = {}
    const testRunResult = {}
    expect(() => {
      /* eslint-disable no-new */
      new Index(config, testRunResult)
    }).toThrow('The config.outputs needs to be an array')
    expect(Format.mock.calls.length).toBe(0)
  })

  test('No output', () => {
    const Format = require('./format')
    jest.mock('./format')

    const Index = require('./index')
    const config = {
      outputs: []
    }
    const testRunResult = {}
    const instance = new Index(config, testRunResult)
    const result = JSON.stringify({})
    instance(result)
    expect(Format.mock.calls.length).toBe(0)
  })

  test('Success calls with any ouputs enabled (default config)', () => {
    const { v4: uuidv4 } = require('uuid')
    jest.mock('uuid')
    uuidv4.mockReturnValue(123456)

    jest.mock('moment', () => () => ({ format: () => '2018–01–30T12:34:56+00:00' }))

    const Format = require('./format')
    jest.mock('./format')
    Format.mockReturnValue({ result: true })

    let Reports = require('./reports')
    jest.mock('./reports')
    Reports = {
      elk: jest.fn()
    }

    const Index = require('./index')
    const config = {
      outputs: [{
        type: 'elk',
        enabled: false
      }]
    }

    const testRunResult = {
      result: {
        duration: 2000
      }
    }

    const instance = new Index(config, testRunResult)
    const result = JSON.stringify([{
      foo: 'bar'
    }])

    instance(result)

    expect(Format.mock.calls.length).toBe(1)
    const expectedMetadata = {
      id: 123456,
      startTime: '2018–01–30T12:34:56+00:00',
      ...testRunResult.result
    }
    expect(Format.mock.calls[0][0]).toEqual(expectedMetadata, [{ foo: 'bar' }])
    expect(Reports.elk.mock.calls.length).toBe(0)
  })

  test('Success calls with some ouputs enabled', async () => {
    jest.mock('moment', () => () => ({ format: () => '2020–01–30T12:34:56+00:00' }))

    const Format = require('./format')
    jest.mock('./format')
    Format.mockReturnValue({ result: true })

    const Reports = require('./reports')
    jest.mock('./reports')
    Reports.elk = jest.fn(() => Promise.resolve(['my elk response']))

    const Index = require('./index')
    const config = {
      uuid: 987,
      name: 'my name',
      key: 'my key',
      env: 'my env',
      outputs: [{
        type: 'elk',
        enabled: true,
        config: {
          you: 'test'
        }
      }]
    }

    const testRunResult = {
      result: {
        duration: 2000
      }
    }

    const logger = jest.fn()

    const instance = new Index(config, testRunResult, logger)
    const result = JSON.stringify([{
      foo: 'bar'
    }])

    await instance(result)

    expect(Format.mock.calls.length).toBe(1)

    const expectedMetadata = {
      id: 987,
      name: 'my name',
      key: 'my key',
      env: 'my env',
      startTime: '2020–01–30T12:34:56+00:00',
      ...testRunResult.result
    }

    expect(Format.mock.calls[0][0]).toEqual(expectedMetadata, [{ foo: 'bar' }])

    expect(Reports.elk.mock.calls.length).toBe(1)
    expect(Reports.elk.mock.calls[0][0]).toEqual({ you: 'test' })
    expect(Reports.elk.mock.calls[0][1]).toEqual({ result: true })
    expect(logger.mock.calls.length).toBe(1)
    const expectedOutput = [
      '\n',
      '==========================================',
      'my elk response',
      '=========================================='
    ].join('\n')
    expect(logger.mock.calls.length).toBe(1)
    expect(logger.mock.calls[0][0]).toEqual(expectedOutput)
  })

  test('Error returns from the return', async () => {
    const Format = require('./format')
    jest.mock('./format')
    Format.mockReturnValue({ result: true })

    const Reports = require('./reports')
    jest.mock('./reports')
    Reports.elk = jest.fn(() => Promise.reject(new Error('my elk Error')))

    const Index = require('./index')
    const config = {
      uuid: 987,
      startTime: '2020–01–30T12:34:56+00:00',
      outputs: [{
        type: 'elk',
        enabled: true,
        config: {
          you: 'test'
        }
      }]
    }

    const testRunResult = {
      result: {
        duration: 2000
      }
    }

    const logger = jest.fn()

    const instance = new Index(config, testRunResult, logger)
    const result = JSON.stringify([{
      foo: 'bar'
    }])

    await instance(result)

    expect(Format.mock.calls.length).toBe(1)

    const expectedMetadata = {
      id: 987,
      startTime: '2020–01–30T12:34:56+00:00',
      name: undefined,
      key: undefined,
      env: undefined,
      ...testRunResult.result
    }

    expect(Format.mock.calls[0][0]).toEqual(expectedMetadata, [{ foo: 'bar' }])

    expect(Reports.elk.mock.calls.length).toBe(1)
    expect(Reports.elk.mock.calls[0][0]).toEqual({ you: 'test' })
    expect(Reports.elk.mock.calls[0][1]).toEqual({ result: true })
    expect(logger.mock.calls.length).toBe(1)
    const expectedOutput = [
      'my elk Error'
    ]
    expect(logger.mock.calls.length).toBe(1)
    expect(logger.mock.calls[0][0]).toEqual(expectedOutput[0])
  })
})
