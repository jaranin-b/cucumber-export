# cucumber-export

### Usage

```js
const { getFormatter } = require('@restqa/cucumber-export')

let envConfig = {
  uuid: 'xxx-yyy-zzz',
  name: 'local',
  outputs: [
    {
      type: 'http',
      enabled: true,
      config: {
        url: 'https://httpdump.io/lb8f7',
        method: 'POST'
      }
    },
    {
      type: 'elastic-search',
      enabled: true,
      config: {
        url: 'http://my-elastic-search.local:9200',
        index: 'bdd-e2e'
      }
    },
    {
      type: 'file',
      enabled: true,
      config: {
        path: 'my-report.json' // File to save
      }
    }
  ]
}

module.exports = getFormatter(envConfig)
```
