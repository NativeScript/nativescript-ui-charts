const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	env.watchNodeModules = true;
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	return webpack.resolveConfig();
};


