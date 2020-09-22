import { Component, OnInit } from "@angular/core";
import { UIChartsView } from "@nativescript/ui-charts";

@Component({
    selector: "ns-basic-line",
    templateUrl: "./basic-line.component.html"
})
export class BasicLineComponent implements OnInit {
  chartOptions: any; 
  private _chart: UIChartsView;
  // {
  //   legend: {
  //     enabled: false
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   yAxis: {
  //     title: {
  //       text: '',
  //     }
  //   },
  //   series: [
  //     {
  //       name: 'Installation',
  //       data: [],
  //     },
  //     {
  //       name: 'Manufacturing',
  //       data: [],
  //     },
  //     {
  //       name: 'Sales & Distribution',
  //       data: [],
  //     },
  //     {
  //       name: 'Project Development',
  //       data: [],
  //     },
  //     {
  //       name: 'Other',
  //       data: [],
  //     },
  //   ],
  // };
  constructor() { 
    this.chartOptions = {
      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016',
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
            color: 'gray'
          }
        }
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
        enabled: true
      },
      credits: {
        enabled: true
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
    }
  }

  ngOnInit(): void {
    // setTimeout(() => {
      
    // }, 2000);
  }

  onDataChange(args) {
    const cOpts = this.chartOptions;
    if (cOpts.title.text === 'Title Changed') {
      cOpts.title.text = "Title Changed Again into a very long sentence making it span across multiple lines";
      cOpts.subtitle.text = "Subtitle Changed Again";
      cOpts.series = [
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
      cOpts.title.text = "Title Changed";
      cOpts.subtitle.text = "Subtitle Changed";
      cOpts.series = [
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
    
    this.chartOptions = Object.assign({}, cOpts);
    this._chart.setOptions(this.chartOptions);
  }

  loaded(args) {
    console.log(args.object)
    this._chart = args.object;
    this._chart.setOptions(this.chartOptions);
  }
}
