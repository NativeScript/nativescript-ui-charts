import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { fromObject } from '@nativescript/core/data/observable';

let chartView;
const viewModel = fromObject({
  chartOptions: {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Historic and Estimated Worldwide Population Distribution by Region',
    },
    subtitle: {
      text: 'Source: Wikipedia.org',
    },
    xAxis: {
      categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false,
      },
    },
    yAxis: {
      labels: {
        format: '{value}%',
      },
      title: {
        enabled: false,
      },
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
      split: true,
    },
    plotOptions: {
      area: {
        stacking: 'percent',
        lineColor: '#ffffff',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#ffffff',
        },
        accessibility: {
          pointDescriptionFormatter: function(point){
            function round(x) {
              return Math.round(x*100)/100
            }
            return(point.index+1+', '+point.category+', '+point.y+' millions, '+round(point.percentage)+'%, '+point.series.name)
          },
        },
      },
    },
    series: [
      {
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268],
      },
      {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766],
      },
      {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628],
      },
      {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201],
      },
      {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46],
      },
    ],
  },
});

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;

  if (args.isBackNavigation) return;

  page.bindingContext = viewModel;
}

export function goBack(args) {
  args.object.page.frame.goBack();
}

export function chartViewLoaded(args) {
  chartView = args.object;
  chartView.setOptions(viewModel.get('chartOptions'));
}
