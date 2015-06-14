module.exports = {
	Generic: require('./Generic'),
	FileSystem: {
		FileNotFound: require('./FileSystem/FileNotFound'),
		MkdirFail: require('./FileSystem/MkdirFail')
	},
	Auth: {
		AuthFail: require('./Auth/AuthFail')
	}

};