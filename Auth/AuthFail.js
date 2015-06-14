var _ = require('lodash');

var Generic = require('../Generic');

var AuthFail = function () {
	var parent = new Generic('AuthFail');

	_.assign(this, parent);
};

module.exports = AuthFail;