import { UIChartsViewBase } from './ui-charts.common';
import { optionsHandler } from './options-handlers/options-handler';

export class UIChartsView extends UIChartsViewBase {

    public onLoaded() {
        super.onLoaded();

        const hiOptions = optionsHandler(this.options);
        const exporting = new HIExporting();
        exporting.enabled = 0;
        hiOptions.exporting = exporting;

        console.log(hiOptions);

        (<any>this.nativeView).options = hiOptions;
    }

    public createNativeView() {
        const chartView = new HIChartView({ frame: CGRectMake(0, 0, 200, 200) }) as any;
        chartView.delegate = new HighchartsViewDelegateImpl();
        return chartView;
    }

    public onUnloaded() {
        super.onUnloaded();
    }

    public disposeNativeView() {
        super.disposeNativeView();
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();

        // NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock("valueChange", null, NSOperationQueue.mainQueue, this.onValueChange);
    }

    public setChartOptions({ type = "spline", series, yAxis, backgroundColor, axisColor, axisTextColor, titleColor, categories, step }) {

        let hioptions = new HIOptions();
        let chart = new HIChart();
        let exporting = new HIExporting();
        exporting.enabled = 0;
        hioptions.exporting = exporting;
        chart.borderRadius = 6;

        let navigation = new HINavigation();
        navigation.buttonOptions = new HIButtonOptions();
        navigation.buttonOptions.symbolStroke = new HIColor({ RGBA: 255, green: 255, blue: 255, alpha: 0 });
        navigation.buttonOptions.theme = new HITheme();
        navigation.buttonOptions.theme.fill = new HIColor({ RGBA: 0, green: 0, blue: 0, alpha: 0.0 });
        navigation.buttonOptions.enabled = 0;
        hioptions.navigation = navigation;

        let credits = new HICredits();
        credits.enabled = 0;
        hioptions.credits = credits;

        if (this.title) {
            let title = new HITitle();
            title.align = "left";
            title.style = new HICSSObject();
            title.style.fontFamily = "Arial";
            title.style.fontSize = "14px";
            title.style.color = this.colorToString(titleColor);
            title.y = 16;
            title.text = this.title;
            hioptions.title = title;
        }
        
        if (this.subtitle) {
            let subtitle = new HISubtitle();
            subtitle.align = "left";
            subtitle.style = new HICSSObject();
            subtitle.style.fontFamily = "Arial";
            subtitle.style.fontSize = "10px";
            subtitle.style.color = this.colorToString(titleColor);
            subtitle.y = 28;
            subtitle.text = this.subtitle;
            hioptions.subtitle = subtitle;
        }

        let tooltip = new HITooltip();
        tooltip.headerFormat = "";
        hioptions.tooltip = tooltip;

        let xaxis = new HIXAxis();
        xaxis.tickColor = new HIColor({ RGBA: 255, green: 255, blue: 255, alpha: 0.0 });
        xaxis.lineColor = new HIColor(axisColor.ios);
        xaxis.lineWidth = 1;
        xaxis.labels = new HILabels();
        xaxis.labels.style = new HICSSObject();
        xaxis.labels.style.color = this.colorToString(axisTextColor);
        xaxis.labels.style.textOutline = "10px Arial";

        yAxis = yAxis || { opposite: 0 };
        let axisArr = []
        yAxis.forEach(element => {
            const yaxis = new HIYAxis();
            if (element.hidden) {
                yaxis.gridLineWidth = 0;
                yaxis.labels = new HILabels();
                yaxis.labels.enabled = 0;
                yaxis.title = new HITitle();
                yaxis.title.text = "";
            } else {
                yaxis.lineWidth = 1;
                yaxis.gridLineWidth = 0;
                yaxis.lineColor = new HIColor(axisColor.ios);
                yaxis.labels = new HILabels();
                yaxis.labels.style = new HICSSObject();
                yaxis.labels.style.color = this.colorToString(axisTextColor);
                yaxis.labels.style.textOutline = "10px Arial";
                yaxis.labels.x = element.opposite ? 5 : -5;
                yaxis.title = new HITitle();
                yaxis.title.text = "";
                yaxis.opposite = element.opposite;
                if (element.min && element.max) {
                    yaxis.min = element.min;
                    yaxis.max = element.max;
                }
            }
            axisArr.push(yaxis);
        });
        hioptions.yAxis = new NSArray({ array: axisArr });
        if (backgroundColor) {
            if (backgroundColor.linearGradient) {
                const stops = backgroundColor.stops.map((stop, index) => [index, this.colorToString(stop)]);
                chart.backgroundColor = new HIColor({ 
                    linearGradient: NSDictionary.dictionaryWithObjectsForKeys(backgroundColor.linearGradient, ["x1", "y1", "x2", "y2"]), 
                    stops: stops
                });
            } else if (backgroundColor.isValid && backgroundColor.isValid()) {
                chart.backgroundColor = new HIColor(backgroundColor.ios)
            }
        }

        if (type === 'spline') {
            
            chart.type = "spline";
            hioptions.chart = chart;
            
            if (step) xaxis.labels.step = step;
            if (categories) xaxis.categories = new NSArray({ array: categories } );
            hioptions.xAxis = new NSArray({ array: [xaxis] });
            
            const seriesArr = [];
            series.forEach(s => {
                let spline = new HISpline();
                if (s.color) spline.color = new HIColor(s.color.ios);
                spline.tooltip = new HITooltip();
                spline.tooltip.headerFormat = "";
                if (s.valueSuffix) spline.tooltip.valueSuffix = s.valueSuffix;
                spline.showInLegend = 0;
                const limitedData = s.data.length < this.maxDataPoints 
                    ? s.data
                    : s.data.filter((value, index) => {
                        const factor = ~~(s.data.length / this.maxDataPoints);
                        return index % factor == 0;
                    });
                spline.data = new NSArray({ array: limitedData }); 
                if (s.name) spline.name = s.name;
                spline.yAxis = s.yAxis ? s.yAxis : 0;
                seriesArr.push(spline);
            })
            
            hioptions.series = new NSArray({ array: seriesArr });

        } else if (type === 'column') {

            chart.type = 'column';
            hioptions.chart = chart;
            
            if (step) xaxis.labels.step = step;
            if (categories) xaxis.categories = new NSArray({ array: categories } );
            hioptions.xAxis = new NSArray({ array: [xaxis] });
            
            const seriesArr = [];
            series.forEach(s => {
                let column = new HIColumn();
                column.tooltip = new HITooltip();
                column.tooltip.headerFormat = ""
                if (s.valueSuffix) column.tooltip.valueSuffix = s.valueSuffix;
                column.showInLegend = 0;
            
                if (s.color) column.color = new HIColor(s.color.ios);
                column.borderRadius = 2;
                column.borderWidth = 0;

                const limitedData = s.data.length < this.maxDataPoints 
                    ? s.data
                    : s.data.filter((value, index) => {
                        const factor = ~~(s.data.length / this.maxDataPoints);
                        return index % factor == 0;
                    });
                column.data = new NSArray({ array: limitedData }); 
                if (s.name) column.name = s.name;
                column.yAxis = s.yAxis ? s.yAxis : 0;
                seriesArr.push(column)
            });
            hioptions.series = new NSArray({ array: seriesArr });

        } else if (type === 'area') {
    
            chart.type = 'area';
            hioptions.chart = chart;

            if (step) xaxis.labels.step = step;
            if (categories) xaxis.categories = new NSArray({ array: categories } );
            hioptions.xAxis = new NSArray({ array: [xaxis] });
            
            const seriesArr = [];
            series.forEach(s => {
                let area = new HIArea();
                area.tooltip = new HITooltip();
                area.tooltip.headerFormat = "";
                if (s.valueSuffix) area.tooltip.valueSuffix = s.valueSuffix;
                area.showInLegend = 0;
                area.fillColor = new HIColor({ linearGradient: NSDictionary.dictionaryWithObjectsForKeys([0, 0, 0, 1], ["x1", "y1", "x2", "y2"]), stops: [[0, "rgba(255,255,255, 0.75)"], [1, "rgba(255,255,255, 0.02)"]] });
                const limitedData = s.data.length < this.maxDataPoints 
                    ? s.data
                    : s.data.filter((value, index) => {
                        const factor = ~~(s.data.length / this.maxDataPoints);
                        return index % factor == 0;
                    });
                area.data = new NSArray({ array: limitedData });
                if (s.color) area.color = new HIColor(s.color.ios);
                if (s.name) area.name = s.name;
                area.yAxis = s.yAxis ? s.yAxis : 0;
                seriesArr.push(area);
            });
            hioptions.series = new NSArray({ array: seriesArr });
        } else if (type === 'time') {
            
            chart.type = "spline";
            hioptions.chart = chart;
            
            xaxis.type = 'datetime';
            const labelformats = new HIDateTimeLabelFormats();
            const day = new HIDay();
            day.main = "%e \%b";
            const month = new HIMonth();
            month.main = '%b \'%y';
            labelformats.day = day;
            labelformats.month = month;
            xaxis.dateTimeLabelFormats = labelformats;
            hioptions.xAxis = new NSArray({ array: [xaxis] });

            const seriesArr = [];
            let i = 0;
            for (const s of series) {
                let spline = new HISpline();
                if (s.color) spline.color = new HIColor(s.color.ios);
                spline.lineWidth = s.lineWidth ? s.lineWidth : spline.lineWidth;
                spline.tooltip = new HITooltip();
                spline.tooltip.headerFormat = "";
                if (s.valueSuffix) spline.tooltip.valueSuffix = s.valueSuffix;
                spline.showInLegend = 0;
                const limitedData = s.data.length < this.maxDataPoints 
                    ? s.data
                    : s.data.filter((value, index) => {
                        const factor = ~~(s.data.length / this.maxDataPoints);
                        return index % factor == 0;
                    });
                spline.data = new NSArray({ array: limitedData }); 
                if (s.name) spline.name = s.name;
                spline.yAxis = s.yAxis ? s.yAxis : 0;
                seriesArr.push(spline);
                i++;
            }
            
            hioptions.series = new NSArray({ array: seriesArr });

        }
        this.setOptions(hioptions);
    }

    public setOptions(opts: any) {
        const nativeview = (<any>this.nativeView);
        nativeview.options = opts;
    }

    colorToString(color: any) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a/255})`;
    }

}

class HighchartsViewDelegateImpl
    extends NSObject // native delegates mostly always extend NSObject
    implements HIChartViewDelegate {

    static ObjCProtocols = [HIChartViewDelegate] // define our native protocalls

    static new(): HighchartsViewDelegateImpl {
        return <HighchartsViewDelegateImpl>super.new() // calls new() on the NSObject
    }

    chartViewDidLoad(chart) {
        console.log("HighchartsViewDelegateImpl Did load chart:", chart)
    }
}