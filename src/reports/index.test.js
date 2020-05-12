describe('#services - Channels', () => {
  test('init module', () => {
    const index = require('./index')
    expect(Object.keys(index).length).toEqual(4)
    expect(Object.keys(index)).toEqual(['http', 'elastic-search', 'file', 'slack'])
  })
})
