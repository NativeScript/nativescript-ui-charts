import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { fromObject } from '@nativescript/core/data/observable';

let chartView;
const viewModel = fromObject({
  chartOptions: {
    chart: {
      type: 'areaspline',
    },
    title: {
      text: 'Average fruit consumption during one week',
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
    },
    xAxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      plotBands: [
        {
          // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)',
        },
      ],
    },
    yAxis: {
      title: {
        text: 'Fruit units',
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: ' units',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5,
      },
    },
    series: [
      {
        name: 'John',
        data: [3, 4, 3, 5, 4, 10, 12],
      },
      {
        name: 'Jane',
        data: [1, 3, 4, 3, 3, 5, 4],
      },
    ],
  },
});

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;

  if (args.isBackNavigation) return;

  page.bindingContext = viewModel;
}

export function chartViewLoaded(args) {
  chartView = args.object;
  chartView.setOptions(viewModel.get('chartOptions'));
}

export function goBack(args) {
  args.object.page.frame.goBack();
}
