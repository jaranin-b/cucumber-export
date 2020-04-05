beforeEach(() => {
  jest.resetModules()
})

describe('#Channel - CSV', () => {

  const path = require('path')

  test('Rejected if the config doesn\'t contain the path', () => {
    const File = require('./file')
    let config  = {}
    let result  = {}
    expect(File(config, result)).rejects.toThrow(new Error('config.path is required for the "file" report'))
  })

  test('Rejected if the writting is failing', () => {
    let fs = require('fs')
    jest.mock('fs')
    fs.writeFile = jest.fn((filename, output, format, cb) => {
      cb('foo is not working')
    })

    const File = require('./file')
    let config  = {
      path: 'test.json'
    }
    let result  = {}
    expect(File(config, result)).rejects.toThrow(new Error('[FILE REPORT][ERROR] - test.json : foo is not working'))
    expect(fs.writeFile.mock.calls.length).toBe(1)
    expect(fs.writeFile.mock.calls[0][0]).toEqual(path.resolve('test.json'))
    expect(fs.writeFile.mock.calls[0][1]).toEqual('{}')
    expect(fs.writeFile.mock.calls[0][2]).toEqual('utf8')
  })

  test('Success Case', () => {
    let fs = require('fs')
    jest.mock('fs')
    fs.writeFile = jest.fn((filename, output, format, cb) => {
      cb()
    })

    const File = require('./file')
    let config  = {
      path: 'test.json'
    }
    let result  = {}
    expect(File(config, result)).resolves.toEqual(`[FILE REPORT][SUCCESS] - ${path.resolve('test.json')}`)
  })
})
