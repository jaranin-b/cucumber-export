let { Before, Given, When, Then } = require('@cucumber/cucumber')

Before('@skip', function() {
  return 'skipped'
})

Given('I have the dashboard page', (cb) => {
 setTimeout(cb, 3000)
})

When('I click on my account', () => {
  throw new Error('The button my button hasn\'t been found')
})

Then('The title of the page should be {string}', (bar) => {

 return true
})
