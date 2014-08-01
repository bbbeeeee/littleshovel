module.exports = require('./lib/getter.js');

var x = require('./lib/getter.js');

x.get('http://www.brandontruong.com', function(data){
	console.log(data);
});