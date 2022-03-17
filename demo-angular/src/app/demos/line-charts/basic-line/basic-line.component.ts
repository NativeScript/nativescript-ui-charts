import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EventData } from '@nativescript/core';
import { UIChartsView } from '@nativescript/ui-charts';

@Component({
  selector: 'ns-basic-line',
  templateUrl: './basic-line.component.html',
})
export class BasicLineComponent implements OnInit {
  private _chart: UIChartsView;
  public _langOptions = {};
  public _updateChartContent = true;

  // onAndroid it is required for you to pass a series skeleton if the data
  // will be loaded asynchronously
  chartOptions: any;
  chartOptionsBase: any = {
    title: {
      text: 'Empty Chart',
    },
    subtitle: {
      text: 'A subtitle',
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    series: [
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
      {
        name: 'Manufacturing',
        data: [],
      },
      {
        name: 'Sales & Distribution',
        data: [],
      },
      {
        name: 'Project Development',
        data: [],
      },
      {
        name: 'Other',
        data: [],
      },
    ],
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    this.chartOptions = JSON.parse(JSON.stringify(this.chartOptionsBase));
    this.chartOptions = {
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016',
      },
      exporting: {
        enabled: false,
      },
      subtitle: {
        text: 'Source: thesolarfoundation.com',
      },
      yAxis: {
        title: {
          text: 'Number of Employees',
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: 'gray',
          },
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: 'Range: 2010 to 2017',
        },
      },

      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        enabled: true,
      },
      credits: {
        enabled: true,
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2010,
        },
      },
      series: [
        {
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
      ],
    };
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  onReloadChart(args: EventData) {
    this._updateChartContent = false;
    this.chartOptions = JSON.parse(JSON.stringify(this.chartOptionsBase));
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////
  onDataChange(args: EventData) {
    this._updateChartContent = true;
    // create shallow copy in order for change detection to run
    this.chartOptions = Object.assign({}, this.chartOptions);

    if (this.chartOptions.title.text === 'Title Changed') {
      this.chartOptions.title.text =
        'Title Changed Again into a very long sentence making it span across multiple lines';
      this.chartOptions.subtitle.text = 'Subtitle Changed Again';
      this.chartOptions.series = [
        {
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: 'Sales & Distribution',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
      ];
    } else {
      this.chartOptions.title.text = 'Title Changed';
      this.chartOptions.subtitle.text = 'Subtitle Changed';
      this.chartOptions.series = [
        {
          name: 'Project Development',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227].reverse(),
        },
        {
          name: 'Installation',
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175].reverse(),
        },
        {
          name: 'Manufacturing',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: 'Other',
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
      ];
    }
  }
}
