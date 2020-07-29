const webpackConfig = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => {
  env = env || {};

  const config = webpackConfig(env);

  const platform = env && ((env.android && 'android') || (env.ios && 'ios') || env.platform);
  const isAnySourceMapEnabled = !!env.sourceMap || !!env.hiddenSourceMap;

  config.optimization.minimizer = [
    new TerserPlugin({
      parallel: true,
      cache: true,
      sourceMap: isAnySourceMapEnabled,
      exclude: ['vendor.js'],
      terserOptions: {
        output: {
          comments: false,
          semicolons: !isAnySourceMapEnabled,
        },
        compress: {
          // The Android SBG has problems parsing the output
          // when these options are enabled
          collapse_vars: platform !== 'android',
          sequences: platform !== 'android',
        },
      },
    }),
  ];

  return config;
};
