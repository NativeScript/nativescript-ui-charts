import { fromObject } from '@nativescript/core/data/observable';

const viewModel = fromObject({
  selectedType: 'Line',
  chartTypes: ['Line', 'Area', 'Bar', 'Column', '3D'],
  lineChart: [
    {
      name: 'Basic Line Chart (async data)',
      route: 'demos/line-charts/basic-line/basic-line-page',
    },
    {
      name: 'With Data Labels',
      route: 'demos/line-charts/with-data-labels/with-data-labels-page',
    },
    {
      name: 'Time data with irregular intervals (styled)',
      route: 'demos/line-charts/spline-irregular-time/spline-irregular-time-page',
    },
    {
      name: 'Dynamic chart height',
      route: 'demos/line-charts/dynamic-chart-height/dynamic-chart-height-page',
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
    {
      name: 'Percentage Area Chart',
      route: 'demos/area-charts/area-stacked-percent/area-stacked-percent-page',
    },
    {
      name: 'Area Spline Chart',
      route: 'demos/area-charts/area-spline/area-spline-page',
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
  columnChart: [
    {
      name: 'Basic Column Chart',
      route: 'demos/column-charts/basic-column/basic-column-page',
    },
    {
      name: 'Stacked Column Chart',
      route: 'demos/column-charts/column-stacked/column-stacked-page',
    },
  ],
  '3dChart': [
    {
      name: '3D Column Chart',
      route: 'demos/3d-charts/3d-column/3d-column-page',
    },
    {
      name: '3D Column Chart with Stacking and Grouping',
      route: 'demos/3d-charts/3d-column-sg/3d-column-sg-page',
    },
    // doesn't render currently
    // {
    //   name: '3D Cylinder Chart',
    //   route: 'demos/3d-charts/3d-cylinder/3d-cylinder-page',
    // },
    {
      name: '3D Donut Chart',
      route: 'demos/3d-charts/3d-donut/3d-donut-page',
    },
    {
      name: '3D Pie Chart',
      route: 'demos/3d-charts/3d-pie/3d-pie-page',
    },
    // doesn't render currently
    // {
    //   name: '3D Pyramid Chart',
    //   route: 'demos/3d-charts/3d-pyramid/3d-pyramid-page',
    // },

    // TODO: implement dragging
    {
      name: '3D Scatter Chart',
      route: 'demos/3d-charts/3d-scatter-draggable/3d-scatter-draggable-page',
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
