var _ = require('lodash');

var Generic = require('../Generic');

var MkdirFail = function () {
	var parent = new Generic('MkdirFail');

	_.assign(this, parent);
};

module.exports = MkdirFail;