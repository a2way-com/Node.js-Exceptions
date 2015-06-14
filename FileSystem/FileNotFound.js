var _ = require('lodash');

var Generic = require('../Generic');

var FileNotFound = function () {
	var parent = new Generic('FileNotFound');

	_.assign(this, parent);
};

module.exports = FileNotFound;