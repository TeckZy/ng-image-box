// postinstall.js
const package = require('./package.json');

if (package.version.includes('alpha')) {
	console.log('You are using an alpha version. Beware!');
}
console.log('You are using an alpha version. Beware!');
