// require(__dirname + '/components/component1.js');
require('./module1.js');
var test = require('./components/component1.js');
console.log('hello');
console.log('this is a test')
console.log(JSON.stringify(test))
// console.log(__dirname + '/components/component1.js');