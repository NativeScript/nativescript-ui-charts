import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.chartsdemocore',
  appResourcesPath: 'app/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
  },
  webpackConfigPath: './charts.webpack.config.js',
  appPath: 'app',
} as NativeScriptConfig;
