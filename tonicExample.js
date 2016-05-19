require("react-dom/package.json"); // react-dom is a peer dependency.
require("react/package.json"); // react is a peer dependency.
require("cheerio-react")

var React = require('react');
var render = require('cheerio-react');

var testComponent = React.createElement('div', {className: 'testClass'}, 'Test');

var testComponentOutput = render(testComponent);

console.log('test 1: ' + testComponentOutput.is('div'))
console.log('test 2: ' + testComponentOutput.hasClass('testClass'))
console.log('test 3: ' + (testComponentOutput.text() == 'Test'))