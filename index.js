'use strict';

var path = require('path'),
	dust = require('dustjs-linkedin');

module.exports = function(content) {
	if (this.cacheable) {
		this.cacheable();
	}
	
	var name = path.basename(this.resourcePath).replace(/\.dust|\.html/, '');
	
	return dust.compile(content, name);
};
