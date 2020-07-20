import { fromObject } from '@nativescript/core/data/observable';

const viewModel = fromObject({
  lineCharts: [
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
  selectedSource: [],
  onItemTap(args) {
    const demo = this.selectedSource[args.index];
    args.object.page.frame.navigate(demo.route);
  },
});

export function onNavigatedTo(args) {
  if (args.isBackNavigation) return;

  viewModel.set('selectedSource', viewModel.get('lineCharts'));
  args.object.bindingContext = viewModel;
}
