import { NavigatedData, Page } from '@nativescript/core/ui/page';
import { fromObject } from '@nativescript/core/data/observable';

const viewModel = fromObject({
  chartOptions: {
    chart: {
      type: 'arearange',
      zoomType: 'x',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1,
      },
    },

    title: {
      text: 'Temperature variation by day',
    },

    xAxis: {
      type: 'datetime',
      accessibility: {
        rangeDescription: 'Range: Jan 1st 2017 to Dec 31 2017.',
      },
    },

    yAxis: {
      title: {
        text: null,
      },
    },

    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C',
      xDateFormat: '%A, %b %e',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        name: 'Temperatures',
        data: getData(),
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

function getData() {
  return [
    [1483232400000, 1.4, 4.7],
    [1483318800000, -1.3, 1.9],
    [1483405200000, -0.7, 4.3],
    [1483491600000, -5.5, 3.2],
    [1483578000000, -9.9, -6.6],
    [1483664400000, -9.6, 0.1],
    [1483750800000, -0.9, 4.0],
    [1483837200000, -2.2, 2.9],
    [1483923600000, 1.3, 2.3],
    [1484010000000, -0.3, 2.9],
    [1484096400000, 1.1, 3.8],
    [1484182800000, 0.6, 2.1],
    [1484269200000, -3.4, 2.5],
    [1484355600000, -2.9, 2.0],
    [1484442000000, -5.7, -2.6],
    [1484528400000, -8.7, -3.3],
    [1484614800000, -3.5, -0.3],
    [1484701200000, -0.2, 7.0],
    [1484787600000, 2.3, 8.5],
    [1484874000000, 5.6, 9.5],
    [1484960400000, 0.4, 5.8],
    [1485046800000, 0.1, 3.1],
    [1485133200000, 1.5, 4.1],
    [1485219600000, -0.2, 2.8],
    [1485306000000, 2.3, 10.3],
    [1485392400000, -0.8, 9.4],
    [1485478800000, -1.3, 4.6],
    [1485565200000, -0.6, 5.3],
    [1485651600000, 1.4, 5.8],
    [1485738000000, -3.6, 0.9],
    [1485824400000, -5.4, -2.6],
    [1485910800000, -5.5, 0.8],
    [1485997200000, -0.8, 2.5],
    [1486083600000, 1.6, 4.1],
    [1486170000000, 1.3, 4.8],
    [1486256400000, 0.7, 4.6],
    [1486342800000, -1.1, 4.5],
    [1486429200000, -5.5, -0.9],
    [1486515600000, -8.6, -4.2],
    [1486602000000, -8.3, -1.6],
    [1486688400000, -4.0, 0.9],
    [1486774800000, -5.3, -0.5],
    [1486861200000, -5.8, 0.4],
    [1486947600000, -4.4, 0.4],
    [1487034000000, -4.3, 0.6],
    [1487120400000, -4.6, 2.7],
    [1487206800000, 1.6, 3.2],
    [1487293200000, 2.3, 6.2],
    [1487379600000, 2.4, 4.1],
    [1487466000000, 2.3, 8.5],
    [1487552400000, 3.8, 6.8],
    [1487638800000, 2.4, 4.9],
    [1487725200000, 0.4, 4.5],
    [1487811600000, -5.9, 4.0],
    [1487898000000, -5.9, 1.5],
    [1487984400000, -6.2, -1.7],
    [1488070800000, -4.5, 2.3],
    [1488157200000, 0.9, 5.6],
    [1488243600000, 1.6, 4.9],
    [1488330000000, -0.2, 5.5],
    [1488416400000, -1.8, 4.4],
    [1488502800000, -1.9, 3.3],
    [1488589200000, -4.4, 2.5],
    [1488675600000, 0.7, 4.1],
    [1488762000000, -6.0, 2.7],
    [1488848400000, -8.1, -0.1],
    [1488934800000, -10.2, -0.5],
    [1489021200000, -2.3, 3.7],
    [1489107600000, 0.3, 4.7],
    [1489194000000, -1.9, 5.2],
    [1489280400000, 1.1, 3.1],
    [1489366800000, 2.3, 7.0],
    [1489453200000, 3.1, 7.7],
    [1489539600000, 2.8, 6.3],
    [1489626000000, 1.9, 8.9],
    [1489712400000, 0.8, 5.5],
    [1489798800000, -1.6, 4.3],
    [1489885200000, -1.9, 3.3],
    [1489971600000, 0.5, 4.4],
    [1490058000000, 1.7, 6.6],
    [1490144400000, 0.4, 5.1],
    [1490230800000, -1.2, 3.5],
    [1490317200000, 0.9, 7.4],
    [1490403600000, 3.3, 8.4],
    [1490490000000, 4.6, 10.1],
    [1490572800000, 3.9, 11.8],
    [1490659200000, 1.3, 8.9],
    [1490745600000, 1.4, 9.8],
    [1490832000000, -0.1, 2.4],
    [1490918400000, 1.9, 6.8],
    [1491004800000, 4.3, 12.2],
    [1491091200000, 5.4, 9.3],
    [1491177600000, 2.5, 11.1],
    [1491264000000, 5.6, 10.2],
    [1491350400000, 3.7, 7.6],
    [1491436800000, 3.3, 7.4],
    [1491523200000, 6.9, 12.0],
    [1491609600000, 5.8, 10.9],
    [1491696000000, 7.5, 12.1],
    [1491782400000, 2.3, 9.7],
    [1491868800000, 2.1, 7.1],
    [1491955200000, 0.4, 6.9],
    [1492041600000, 3.0, 7.0],
    [1492128000000, -1.2, 8.9],
    [1492214400000, 0.4, 7.5],
    [1492300800000, 0.9, 4.4],
    [1492387200000, -0.9, 8.2],
    [1492473600000, -1.7, 9.6],
    [1492560000000, 2.2, 7.5],
    [1492646400000, 3.9, 9.1],
    [1492732800000, 2.3, 6.5],
    [1492819200000, 2.0, 7.4],
    [1492905600000, 1.6, 6.9],
    [1492992000000, 1.4, 4.7],
    [1493078400000, -0.9, 9.7],
    [1493164800000, 1.8, 7.9],
    [1493251200000, 0.5, 10.6],
    [1493337600000, 0.8, 11.0],
    [1493424000000, 4.3, 11.6],
    [1493510400000, -1.6, 11.7],
    [1493596800000, -0.6, 14.3],
    [1493683200000, 1.1, 16.1],
    [1493769600000, 1.7, 17.1],
    [1493856000000, 3.1, 17.6],
    [1493942400000, 5.3, 19.2],
    [1494028800000, 5.6, 20.3],
    [1494115200000, 5.4, 18.0],
    [1494201600000, 2.9, 12.1],
    [1494288000000, 0.9, 8.6],
    [1494374400000, 1.2, 7.7],
    [1494460800000, 3.3, 10.1],
    [1494547200000, 2.7, 14.1],
    [1494633600000, 2.5, 16.6],
    [1494720000000, 9.0, 12.7],
    [1494806400000, 8.2, 17.0],
    [1494892800000, 9.0, 11.8],
    [1494979200000, 9.3, 16.9],
    [1495065600000, 10.2, 12.1],
    [1495152000000, 9.9, 20.3],
    [1495238400000, 9.0, 23.1],
    [1495324800000, 9.9, 16.9],
    [1495411200000, 7.2, 12.5],
    [1495497600000, 3.3, 18.1],
    [1495584000000, 8.3, 12.9],
    [1495670400000, 8.5, 13.1],
    [1495756800000, 10.5, 16.1],
    [1495843200000, 10.3, 22.3],
    [1495929600000, 9.0, 18.2],
    [1496016000000, 12.3, 15.6],
    [1496102400000, 12.5, 16.3],
    [1496188800000, 9.9, 13.6],
    [1496275200000, 3.7, 14.8],
    [1496361600000, 8.6, 14.3],
    [1496448000000, 10.0, 18.3],
    [1496534400000, 9.7, 13.0],
    [1496620800000, 9.0, 14.3],
    [1496707200000, 8.3, 14.3],
    [1496793600000, 11.1, 18.4],
    [1496880000000, 10.7, 16.6],
    [1496966400000, 7.2, 16.3],
    [1497052800000, 11.5, 15.3],
    [1497139200000, 11.1, 15.1],
    [1497225600000, 10.4, 16.5],
    [1497312000000, 11.3, 14.6],
    [1497398400000, 9.1, 17.6],
    [1497484800000, 9.9, 15.5],
    [1497571200000, 12.3, 14.9],
    [1497657600000, 10.5, 15.1],
    [1497744000000, 11.4, 18.0],
    [1497830400000, 9.9, 14.8],
    [1497916800000, 8.1, 12.4],
    [1498003200000, 8.6, 15.5],
    [1498089600000, 9.4, 13.0],
    [1498176000000, 11.2, 13.0],
    [1498262400000, 9.0, 15.3],
    [1498348800000, 7.7, 13.6],
    [1498435200000, 10.3, 13.6],
    [1498521600000, 6.3, 18.0],
    [1498608000000, 5.5, 21.7],
    [1498694400000, 9.1, 23.2],
    [1498780800000, 12.6, 25.4],
    [1498867200000, 10.6, 19.6],
    [1498953600000, 11.3, 14.5],
    [1499040000000, 9.2, 16.1],
    [1499126400000, 8.7, 17.9],
    [1499212800000, 6.9, 19.5],
    [1499299200000, 6.6, 20.0],
    [1499385600000, 9.7, 15.7],
    [1499472000000, 11.9, 14.2],
    [1499558400000, 8.7, 14.2],
    [1499644800000, 9.7, 18.4],
    [1499731200000, 10.3, 16.8],
    [1499817600000, 10.9, 15.5],
    [1499904000000, 10.2, 16.8],
    [1499990400000, 6.0, 18.9],
    [1500076800000, 9.1, 19.1],
    [1500163200000, 11.6, 15.7],
    [1500249600000, 8.8, 12.4],
    [1500336000000, 9.2, 16.3],
    [1500422400000, 6.2, 23.0],
    [1500508800000, 8.2, 26.2],
    [1500595200000, 11.7, 20.3],
    [1500681600000, 13.6, 24.1],
    [1500768000000, 13.8, 25.3],
    [1500854400000, 13.7, 18.6],
    [1500940800000, 12.9, 20.8],
    [1501027200000, 12.9, 20.5],
    [1501113600000, 13.6, 18.2],
    [1501200000000, 12.3, 17.5],
    [1501286400000, 10.4, 17.0],
    [1501372800000, 12.6, 19.0],
    [1501459200000, 12.3, 18.1],
    [1501545600000, 11.3, 14.4],
    [1501632000000, 11.3, 17.2],
    [1501718400000, 10.7, 21.4],
    [1501804800000, 12.1, 15.2],
    [1501891200000, 12.3, 17.0],
    [1501977600000, 12.4, 18.7],
    [1502064000000, 11.7, 16.3],
    [1502150400000, 10.0, 15.2],
    [1502236800000, 8.1, 19.3],
    [1502323200000, 11.9, 17.5],
    [1502409600000, 15.3, 17.6],
    [1502496000000, 12.7, 15.8],
    [1502582400000, 9.4, 14.8],
    [1502668800000, 9.3, 15.2],
    [1502755200000, 10.6, 13.6],
    [1502841600000, 10.8, 15.6],
    [1502928000000, 10.2, 15.8],
    [1503014400000, 12.3, 18.2],
    [1503100800000, 11.7, 18.0],
    [1503187200000, 11.5, 16.9],
    [1503273600000, 11.5, 17.7],
    [1503360000000, 7.6, 18.5],
    [1503446400000, 6.7, 19.8],
    [1503532800000, 8.3, 17.2],
    [1503619200000, 7.7, 20.5],
    [1503705600000, 8.1, 19.4],
    [1503792000000, 6.7, 17.9],
    [1503878400000, 12.6, 15.8],
    [1503964800000, 9.0, 16.5],
    [1504051200000, 10.3, 16.7],
    [1504137600000, 9.2, 17.3],
    [1504224000000, 10.3, 14.8],
    [1504310400000, 5.3, 17.6],
    [1504396800000, 5.2, 16.7],
    [1504483200000, 7.1, 19.2],
    [1504569600000, 10.3, 14.0],
    [1504656000000, 11.9, 15.1],
    [1504742400000, 11.9, 14.2],
    [1504828800000, 9.6, 15.9],
    [1504915200000, 9.1, 14.0],
    [1505001600000, 8.3, 13.7],
    [1505088000000, 6.8, 15.0],
    [1505174400000, 6.8, 14.3],
    [1505260800000, 7.1, 15.5],
    [1505347200000, 5.1, 15.3],
    [1505433600000, 6.7, 16.8],
    [1505520000000, 4.0, 16.1],
    [1505606400000, 3.5, 15.8],
    [1505692800000, 8.1, 12.7],
    [1505779200000, 10.4, 13.4],
    [1505865600000, 7.4, 11.8],
    [1505952000000, 4.6, 11.6],
    [1506038400000, 9.4, 13.3],
    [1506124800000, 7.2, 16.0],
    [1506211200000, 6.2, 13.7],
    [1506297600000, 6.7, 19.5],
    [1506384000000, 7.8, 17.1],
    [1506470400000, 10.3, 16.9],
    [1506556800000, 11.9, 18.2],
    [1506643200000, 10.0, 18.9],
    [1506729600000, 9.8, 13.5],
    [1506816000000, 9.1, 16.0],
    [1506902400000, 9.8, 15.9],
    [1506988800000, 8.6, 9.7],
    [1507075200000, 6.3, 11.2],
    [1507161600000, 6.0, 9.5],
    [1507248000000, 8.3, 11.9],
    [1507334400000, 5.6, 10.0],
    [1507420800000, 0.7, 10.0],
    [1507507200000, -0.8, 8.9],
    [1507593600000, 1.2, 7.7],
    [1507680000000, 5.3, 7.1],
    [1507766400000, 5.8, 9.6],
    [1507852800000, 4.8, 8.1],
    [1507939200000, 7.5, 12.7],
    [1508025600000, 7.9, 14.7],
    [1508112000000, 7.6, 15.7],
    [1508198400000, 6.2, 8.0],
    [1508284800000, 0.5, 6.6],
    [1508371200000, -1.3, 5.6],
    [1508457600000, 3.8, 10.9],
    [1508544000000, 6.8, 11.2],
    [1508630400000, 7.2, 11.0],
    [1508716800000, 3.4, 9.8],
    [1508803200000, 4.8, 7.4],
    [1508889600000, 4.9, 6.5],
    [1508976000000, 2.6, 6.8],
    [1509062400000, 4.1, 9.2],
    [1509148800000, 3.5, 10.2],
    [1509235200000, 4.0, 6.8],
    [1509325200000, 3.2, 5.1],
    [1509411600000, 3.1, 5.2],
    [1509498000000, 5.2, 6.7],
    [1509584400000, 1.4, 9.4],
    [1509670800000, 1.3, 6.3],
    [1509757200000, 4.3, 7.4],
    [1509843600000, 4.8, 6.9],
    [1509930000000, 0.9, 6.8],
    [1510016400000, 2.9, 6.9],
    [1510102800000, 4.6, 8.7],
    [1510189200000, 3.9, 9.2],
    [1510275600000, 1.2, 4.7],
    [1510362000000, 1.0, 3.9],
    [1510448400000, 2.9, 6.5],
    [1510534800000, -0.6, 5.7],
    [1510621200000, 0.1, 1.8],
    [1510707600000, 1.8, 5.2],
    [1510794000000, 1.7, 5.2],
    [1510880400000, 2.7, 6.8],
    [1510966800000, 1.1, 5.2],
    [1511053200000, -0.1, 3.6],
    [1511139600000, 0.9, 2.7],
    [1511226000000, -4.1, 0.8],
    [1511312400000, -3.8, -0.3],
    [1511398800000, -1.0, 5.4],
    [1511485200000, 2.4, 4.5],
    [1511571600000, 1.3, 3.9],
    [1511658000000, -3.3, 2.8],
    [1511744400000, -3.9, -0.7],
    [1511830800000, -5.3, -0.6],
    [1511917200000, -8.4, -5.1],
    [1512003600000, -8.7, -5.4],
    [1512090000000, -8.2, -2.8],
    [1512176400000, -2.6, 3.8],
    [1512262800000, 1.8, 4.3],
    [1512349200000, 0.9, 3.8],
    [1512435600000, 0.8, 5.9],
    [1512522000000, 1.5, 3.0],
    [1512608400000, 2.5, 7.3],
    [1512694800000, 2.0, 4.9],
    [1512781200000, -0.8, 2.6],
    [1512867600000, -1.4, 0.2],
    [1512954000000, -2.3, -0.9],
    [1513040400000, -9.0, -2.2],
    [1513126800000, -8.8, -2.6],
    [1513213200000, -7.0, -3.9],
    [1513299600000, -8.1, -5.5],
    [1513386000000, -7.5, -3.4],
    [1513472400000, -8.1, -1.8],
    [1513558800000, -1.5, 1.9],
    [1513645200000, 1.3, 2.2],
    [1513731600000, 2.1, 6.0],
    [1513818000000, 2.2, 7.1],
    [1513904400000, 2.7, 5.9],
    [1513990800000, 2.5, 8.6],
    [1514077200000, 1.8, 5.6],
    [1514163600000, 1.0, 3.1],
    [1514250000000, 1.3, 1.6],
    [1514336400000, 0.8, 1.3],
    [1514422800000, -3.3, -1.4],
    [1514509200000, -1.5, -0.2],
    [1514595600000, -2.7, -1.0],
    [1514682000000, -2.8, 0.3],
  ];
}
