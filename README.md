##Usage

```js
var React = require('react');
var render = require('cheerio-react');

var testComponent = React.createElement('div', {className: 'testClass'}, 'Test');

var testComponentOutput = render(testComponent);

console.log('test 1: ' + testComponentOutput.is('div'))
console.log('test 2: ' + testComponentOutput.hasClass('testClass'))
console.log('test 3: ' + (testComponentOutput.text() == 'Test'))

```

Useful for writing assertions in Mocha tests without having to moc the dom.

For the full object api see [cheerio](https://www.npmjs.com/package/cheerio)