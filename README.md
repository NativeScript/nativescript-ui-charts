NOTE: This repo was moved [here](https://github.com/NativeScript/ui-kit) for further development.

# @nativescript/ui-charts ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)

<!-- [![npm](https://img.shields.io/npm/v/@nativescript/ui-charts.svg)](https://www.npmjs.com/package/@nativescript/ui-charts)
[![npm](https://img.shields.io/npm/dm/@nativescript/ui-charts.svg)](https://www.npmjs.com/package/@nativescript/ui-charts) -->

Nativescript wrapper for Highcharts iOS and Android SDKs

<img src="https://github.com/NativeScript/nativescript-ui-charts/blob/master/assets/screenshot-android.png?raw=true" height="320" >

## Installation

In Command prompt / Terminal navigate to your application root folder and run:

```
tns plugin add @nativescript/ui-charts
```

## Usage 

The best way to explore the usage of the plugin is to inspect the demo app in the plugin's root folder. 
In `demo` folder you can find the usage of the plugin for TypeScript non-Angular application. Refer to `demo/app/demos` for different chart types.

### NativeScript Core
	
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:uc="@nativescript/ui-charts">  <!-- Don't forget to declare the namespace -->
  <GridLayout>
    <uc:UIChartsView id="chartView" loaded="chartViewLoaded" />
  </GridLayout>
</Page>
```

```ts
export function chartViewLoaded(args) {
  chartView = args.object;
  chartView.setOptions(viewModel.get('chartOptions'));
}
```

The `chartOptions` is a HICharts options object,
refer to https://www.highcharts.com/demo/ for inspiration, and also checkout https://api.highcharts.com/highcharts/ for API reference
