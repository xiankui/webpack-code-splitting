var Common = require('./common');

Common();

require(['./a', './b'], function (a, b) {
	console.log('----------------require-------------------');
	a.say();
	b.say();
});

require.ensure(['./c'], function (require) {
	// c is loaded, but doesn't evaluate yet!!
	console.log('------------require.ensure-----------------');

	// and now, it evaluated.
	var c = require('./c');
	c.say();
});