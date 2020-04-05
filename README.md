# Cucumber-export

This cucumber formatter works well with cucumber versions from  6.x inclusive

## Installation

```sh
npm i -S @restqa/cucumber-export
```

## API

```js
const cucumberExport = require('@restqa/cucumber-export')
```

The `bodyParser` object exposes various factories to create middlewares. All
middlewares will populate the `req.body` property with the parsed body when
the `Content-Type` request header matches the `type` option, or an empty
object (`{}`) if there was no body to parse, the `Content-Type` was not matched,
or an error occurred.

The various errors returned by this module are described in the
[errors section](#errors).

### cucumberExport.getFormatter([options])

Returns middleware that only parses `json` and only looks at requests where
the `Content-Type` header matches the `type` option. This parser accepts any
Unicode encoding of the body and supports automatic inflation of `gzip` and
`deflate` encodings.

A new `body` object containing the parsed data is populated on the `request`
object after the middleware (i.e. `req.body`).

#### Options

The `json` function takes an optional `options` object that may contain any of
the following keys:

##### uuid

When set to `true`, then deflated (compressed) bodies will be inflated; when
`false`, deflated bodies are rejected. Defaults to `true`.

##### name

Controls the maximum request body size. If this is a number, then the value
specifies the number of bytes; if it is a string, the value is passed to the
[bytes](https://www.npmjs.com/package/bytes) library for parsing. Defaults
to `'100kb'`.

##### outputs

The `reviver` option is passed directly to `JSON.parse` as the second
argument. You can find more information on this argument
[in the MDN documentation about JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter).


## Usage

### Install formatter to your project dir

```cmd
npm i -S @restqa/cucumber-export
```

### Setup your formatter

Create a new file at the root of your project. (restqa-formatter.js)

```js
# <root-dir>/restqa-formatter.js

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

### Run cucumber-js

`cucumber-js -f ./restqa-formatter.js`

### Configuration

You can configure different output, the available output reporters are : 

### elastic search


