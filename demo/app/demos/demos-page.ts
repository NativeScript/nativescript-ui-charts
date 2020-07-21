import { fromObject } from '@nativescript/core/data/observable';

const viewModel = fromObject({
  selectedType: 'Line',
  chartTypes: ['Line', 'Area', 'Bar'],
  lineChart: [
    {
      name: 'Basic Line Chart',
      route: 'demos/line-charts/basic-line/basic-line-page',
    },
    {
      name: 'With Data Labels',
      route: 'demos/line-charts/with-data-labels/with-data-labels-page',
    },
    {
      name: 'Time data with irregular intervals',
      route: 'demos/line-charts/spline-irregular-time/spline-irregular-time-page',
    },
  ],
  areaChart: [
    {
      name: 'Basic Area Chart',
      route: 'demos/area-charts/basic-area/basic-area-page',
    },
    {
      name: 'Stacked Area Chart',
      route: 'demos/area-charts/area-stacked/area-stacked-page',
    },
    {
      name: 'Area Range Chart',
      route: 'demos/area-charts/area-ranged/area-ranged-page',
    },
  ],
  barChart: [
    {
      name: 'Basic Bar Chart',
      route: 'demos/bar-charts/basic-bar/basic-bar-page',
    },
    {
      name: 'Stacked Bar Chart',
      route: 'demos/bar-charts/bar-stacked/bar-stacked-page',
    },
    {
      name: 'Bar With Negative Stack Chart',
      route: 'demos/bar-charts/bar-negative-stack/bar-negative-stack-page',
    },
  ],
  selectedSource: [],
  onItemTap(args) {
    const demo = this.selectedSource[args.index];
    args.object.page.frame.navigate(demo.route);
  },
  onSelectCategory(args) {
    const chartType = args.object.text.toLowerCase() + 'Chart';
    
    if (viewModel[chartType]) {
      console.log('selected chart type:', `${args.object.text}`);
      viewModel.set('selectedType', `${args.object.text}`);
      viewModel.set('selectedSource', viewModel[chartType]);
    } else {
      console.log('Chart type', chartType, 'not implemented');
    }

    args.object.backgroundColor = '#90EF7F';
    setTimeout(() => {
      args.object.backgroundColor = 'rgba(255,255,255,0.2)';
    }, 100);
  }
});

export function onNavigatedTo(args) {
  if (args.isBackNavigation) return;

  viewModel.set('selectedSource', viewModel.get('lineChart'));
  args.object.bindingContext = viewModel;
}
