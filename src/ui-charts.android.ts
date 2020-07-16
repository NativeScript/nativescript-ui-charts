import { UIChartsViewBase } from './ui-charts.common';
import * as OptionsHandler from './options-handlers/';

export class UIChartsView extends UIChartsViewBase {

    public onLoaded() {
        super.onLoaded();

        const hiOptions = new com.highsoft.highcharts.common.hichartsclasses.HIOptions();
        
        for (const key in this.options) {
            if (this.options.hasOwnProperty(key)) {
                const handler = `${key}Handler`;
                if (typeof OptionsHandler[handler] === 'function') {
                    OptionsHandler[handler](hiOptions, this.options[key]);
                } else {
                    console.log('OptionsHandler is not implemented for key', key);
                }
            }
        }

        const exporting = new com.highsoft.highcharts.common.hichartsclasses.HIExporting();
        exporting.setEnabled(new java.lang.Boolean(false));
        hiOptions.setExporting(exporting);

        (<any>this.nativeView).setOptions(hiOptions);
    }

    public createNativeView() {
        const chartView = new com.highsoft.highcharts.core.HIChartView(this._context) as any;
        chartView.setBackgroundColor(android.graphics.Color.TRANSPARENT);
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
        (<any>this.nativeView).generateDefaultLayoutParams();
        super.initNativeView();
    }


    public setChartOptions({ type = "spline", series, yAxis, style, backgroundColor, axisColor, axisTextColor, titleColor, categories, step }) {
        try {
            const hiOptions = new com.highsoft.highcharts.common.hichartsclasses.HIOptions();
            const chart = new com.highsoft.highcharts.common.hichartsclasses.HIChart();
            chart.setBorderRadius(new java.lang.Double(6.0));
            
            const exporting = new com.highsoft.highcharts.common.hichartsclasses.HIExporting();
            exporting.setEnabled(new java.lang.Boolean(false));
            hiOptions.setExporting(exporting);
            
            const navigation = new com.highsoft.highcharts.common.hichartsclasses.HINavigation();
            navigation.setButtonOptions(new com.highsoft.highcharts.common.hichartsclasses.HIButtonOptions());
            navigation.getButtonOptions().setSymbolStroke(com.highsoft.highcharts.common.HIColor.initWithRGBA(255,255,255,0.4));
            const theme = new com.highsoft.highcharts.common.hichartsclasses.HITheme();
            theme.setFill(com.highsoft.highcharts.common.HIColor.initWithRGBA(0,0,0,0));
            navigation.getButtonOptions().setTheme(theme);
            navigation.getButtonOptions().setEnabled(new java.lang.Boolean(false));
            hiOptions.setNavigation(navigation);
            
            const credits = new com.highsoft.highcharts.common.hichartsclasses.HICredits();
            credits.setEnabled(new java.lang.Boolean(true));
            const creditsStyle = new com.highsoft.highcharts.common.hichartsclasses.HICSSObject();
            creditsStyle.setColor("rgba(255, 255, 255, 0.4)");
            credits.setStyle(creditsStyle);
            hiOptions.setCredits(credits);
            
            if (this.title) {
                const title = new com.highsoft.highcharts.common.hichartsclasses.HITitle();
                title.setText(this.title);
                title.setAlign("left");
                const titleStyle = new com.highsoft.highcharts.common.hichartsclasses.HICSSObject();
                titleStyle.setFontFamily("Arial");
                titleStyle.setFontSize("14px");
                titleStyle.setColor(this.colorToString(titleColor));
                title.setStyle(titleStyle);
                title.setY(new java.lang.Double(16));
                hiOptions.setTitle(title);
            }

            if (this.subtitle) {
                const subtitle = new com.highsoft.highcharts.common.hichartsclasses.HISubtitle();
                subtitle.setText(this.subtitle);
                subtitle.setAlign( "left");
                const subtitleStyle = new  com.highsoft.highcharts.common.hichartsclasses.HICSSObject();
                subtitleStyle.setFontFamily("Arial");
                subtitleStyle.setFontSize("9px");
                subtitleStyle.setColor(this.colorToString(titleColor));
                subtitle.setStyle(subtitleStyle);
                subtitle.setY(new java.lang.Double(28));
                hiOptions.setSubtitle(subtitle);
            }

            const xaxis = new com.highsoft.highcharts.common.hichartsclasses.HIXAxis();
            xaxis.setTickColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(255, 255, 255, 0.0));
            xaxis.setLineColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(axisColor.r, axisColor.g, axisColor.b, axisColor.a/255));
            xaxis.setLabels(new com.highsoft.highcharts.common.hichartsclasses.HILabels());
            const xaxisStyle = new com.highsoft.highcharts.common.hichartsclasses.HICSSObject();
            xaxisStyle.setColor(this.colorToString(axisTextColor));
            xaxisStyle.setFontSize("10px");
            xaxisStyle.setFontFamily("Arial");
            xaxis.getLabels().setStyle(xaxisStyle);

            yAxis = yAxis || { opposite: 0 };
            let axisArr = []
            yAxis.forEach(element => {
                const yaxis = new com.highsoft.highcharts.common.hichartsclasses.HIYAxis();
                yaxis.setLabels(new com.highsoft.highcharts.common.hichartsclasses.HILabels());
                yaxis.setTitle(new com.highsoft.highcharts.common.hichartsclasses.HITitle());
                yaxis.getTitle().setText("");
                if (element.hidden) {
                    yaxis.setGridLineWidth(new java.lang.Double(0));
                    yaxis.getLabels().setEnabled(new java.lang.Boolean(false));
                } else {
                    yaxis.setLineColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(axisColor.r, axisColor.g, axisColor.b, axisColor.a/255));
                    yaxis.setLineWidth(new java.lang.Double(1));
                    yaxis.setGridLineWidth(new java.lang.Double(0));
                    const yaxisStyle = new com.highsoft.highcharts.common.hichartsclasses.HICSSObject();
                    yaxisStyle.setColor(this.colorToString(axisTextColor));
                    yaxisStyle.setFontFamily("Arial");
                    yaxisStyle.setFontSize("10px");
                    yaxis.getLabels().setStyle(yaxisStyle);
                    yaxis.getLabels().setX(new java.lang.Double(-5));
                    if (element.min && element.max) {
                        yaxis.setMin(this._fromJSToNativePrimitive(element.min));
                        yaxis.setMax(this._fromJSToNativePrimitive(element.max));
                    }
                    yaxis.setOpposite(new java.lang.Boolean(element.opposite ? true : false));
                }
                axisArr.push(yaxis);
            });
            
            hiOptions.setYAxis(this._convertJSArrayToNative(axisArr));
            
            // backgroundColor
            if (backgroundColor.linearGradient) {
                const grad = backgroundColor.linearGradient;
                const gradient = new com.highsoft.highcharts.common.HIGradient(grad[0], grad[1], grad[2], grad[3]);
                const stops = backgroundColor.stops.map((stop, i) => new com.highsoft.highcharts.common.HIStop(i, com.highsoft.highcharts.common.HIColor.initWithRGBA(stop.r, stop.g, stop.b, stop.a / 255)))
                const stopslist = this._toLinkedList(stops);
                chart.setBackgroundColor(com.highsoft.highcharts.common.HIColor.initWithLinearGradient(gradient, stopslist));
            } else if (backgroundColor.isValid && backgroundColor.isValid()) {
                chart.setBackgroundColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(backgroundColor.r, backgroundColor.g, backgroundColor.b, backgroundColor.a/255));
            }
            
            if (type === "column") {
                chart.setType("column");
                hiOptions.setChart(chart);
    
                xaxis.getLabels().setStep(new java.lang.Double(step));
                xaxis.setCategories(this._convertJSArrayToNative(categories));
                hiOptions.setXAxis(this._convertJSArrayToNative([xaxis]));
    
                const seriesArr = [];
                for (const s of series) {
                    
                    const column = new com.highsoft.highcharts.common.hichartsclasses.HIColumn();
                    const tooltip = new com.highsoft.highcharts.common.hichartsclasses.HITooltip();
                    column.setTooltip(tooltip);
                    tooltip.setHeaderFormat("")
                    tooltip.setValueSuffix(s.valueSuffix);
                    column.setShowInLegend(new java.lang.Boolean(false));
                    const parsedData = (s.data.length < this.maxDataPoints 
                        ? s.data
                        : s.data.filter((value, index) => {
                            const factor = ~~(s.data.length / this.maxDataPoints);
                            return index % factor == 0;
                        }));
                    column.setData(this._convertJSArrayToNative(parsedData));
                    if (s.color) column.setColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(s.color.r, s.color.g, s.color.b, s.color.a/255));
                    if (s.lineWidth) column.setLineWidth(this._fromJSToNativePrimitive(s.lineWidth));
                    if (s.name) column.setName(s.name);
                    column.setBorderRadius(this._fromJSToNativePrimitive(2));
                    column.setBorderWidth(this._fromJSToNativePrimitive(0));
                    column.setYAxis(this._fromJSToNativePrimitive(s.yAxis));
                    seriesArr.push(column);
                }
                
                hiOptions.setSeries(this._convertJSArrayToNative(seriesArr));
    
            } else if (type === "spline") {
                chart.setType("spline");
                hiOptions.setChart(chart);
    
                xaxis.getLabels().setStep(new java.lang.Double(step));
                xaxis.setCategories(this._convertJSArrayToNative(categories));
                hiOptions.setXAxis(this._convertJSArrayToNative([xaxis]));
    
                const seriesArr = [];
                for (const s of series) {
                    
                    const spline = new com.highsoft.highcharts.common.hichartsclasses.HISpline();
                    const tooltip = new com.highsoft.highcharts.common.hichartsclasses.HITooltip();
                    spline.setTooltip(tooltip);
                    tooltip.setHeaderFormat("")
                    tooltip.setValueSuffix(s.valueSuffix);
                    spline.setShowInLegend(new java.lang.Boolean(false));
                    const parsedData = (s.data.length < this.maxDataPoints 
                        ? s.data
                        : s.data.filter((value, index) => {
                            const factor = ~~(s.data.length / this.maxDataPoints);
                            return index % factor == 0;
                        }));
                    spline.setData(this._convertJSArrayToNative(parsedData));
                    if (s.color) spline.setColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(s.color.r, s.color.g, s.color.b, s.color.a/255));
                    if (s.lineWidth) spline.setLineWidth(this._fromJSToNativePrimitive(s.lineWidth));
                    if (s.name) spline.setName(s.name);
                    spline.setYAxis(this._fromJSToNativePrimitive(s.yAxis));
                    seriesArr.push(spline);
                }
                
                hiOptions.setSeries(this._convertJSArrayToNative(seriesArr));
    
            } else if (type === "area") {
                
                chart.setType(type);
                hiOptions.setChart(chart);
    
                const plotOptions = new com.highsoft.highcharts.common.hichartsclasses.HIPlotOptions();
                plotOptions.setArea(new com.highsoft.highcharts.common.hichartsclasses.HIArea());
                const fillGradient = new com.highsoft.highcharts.common.HIGradient(0, 0, 0, 1);
                const fillStops = new java.util.LinkedList();
                fillStops.add(new com.highsoft.highcharts.common.HIStop(0, com.highsoft.highcharts.common.HIColor.initWithRGBA(255, 255, 255, 0.75)));
                fillStops.add(new com.highsoft.highcharts.common.HIStop(1, com.highsoft.highcharts.common.HIColor.initWithRGBA(255, 255, 255, 0.02)));
                plotOptions.getArea().setFillColor(com.highsoft.highcharts.common.HIColor.initWithLinearGradient(fillGradient, fillStops));
                hiOptions.setPlotOptions(plotOptions);
    
                xaxis.getLabels().setStep(new java.lang.Double(step));
                xaxis.setCategories(this._convertJSArrayToNative(categories));
                hiOptions.setXAxis(this._convertJSArrayToNative([xaxis]));
    
                const seriesArr = [];
                for (const s of series) {
                    const area = new com.highsoft.highcharts.common.hichartsclasses.HIArea();
                    area.setTooltip(new com.highsoft.highcharts.common.hichartsclasses.HITooltip());
                    area.getTooltip().setHeaderFormat("");
                    if (s.valueSuffix) area.getTooltip().setValueSuffix(s.valueSuffix);
                    if (s.color) area.setColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(s.color.r, s.color.g, s.color.b, s.color.a/255));
                    if (s.name) area.setName(s.name);
                    area.setShowInLegend(new java.lang.Boolean(false));
                    const parsedData = (s.data.length < this.maxDataPoints 
                        ? s.data
                        : s.data.filter((value, index) => {
                            const factor = ~~(s.data.length / this.maxDataPoints);
                            return index % factor == 0;
                        }));

                    area.setData(this._convertJSArrayToNative(parsedData));
                    seriesArr.push(area)
                }
                hiOptions.setSeries(this._convertJSArrayToNative(seriesArr));
    
            } else if (type === 'time') {
                
                chart.setType("spline");
                hiOptions.setChart(chart);
                
                xaxis.setType('datetime');
                
                const labelformats = new com.highsoft.highcharts.common.hichartsclasses.HIDateTimeLabelFormats();
                // const hour = new com.highsoft.highcharts.common.hichartsclasses.HIHour();
                // hour.setMain("%e \%b");
                const day = new com.highsoft.highcharts.common.hichartsclasses.HIDay();
                day.setMain("%e \%b");
                const month = new com.highsoft.highcharts.common.hichartsclasses.HIMonth();
                month.setMain('%b \'%y');
                labelformats.setDay(day);
                labelformats.setMonth(month);
                // labelformats.setHour(hour);
                xaxis.setDateTimeLabelFormats(labelformats); 
                hiOptions.setXAxis(this._convertJSArrayToNative([xaxis]));
                
                const seriesArr = [];
                for (const s of series) {
                    
                    const spline = new com.highsoft.highcharts.common.hichartsclasses.HISpline();
                    const tooltip = new com.highsoft.highcharts.common.hichartsclasses.HITooltip();
                    spline.setTooltip(tooltip);
                    tooltip.setHeaderFormat("")
                    tooltip.setValueSuffix(s.valueSuffix);
                    spline.setShowInLegend(new java.lang.Boolean(false));
                    const parsedData = (s.data.length < this.maxDataPoints 
                        ? s.data
                        : s.data.filter((value, index) => {
                            const factor = ~~(s.data.length / this.maxDataPoints);
                            return index % factor == 0;
                        })).map(ele => {
                            return this._toArrayList([new java.lang.Long(ele[0]), new java.lang.Double(ele[1])]);
                        });

                    spline.setData(this._toArrayList(parsedData));
                    if (s.color) spline.setColor(com.highsoft.highcharts.common.HIColor.initWithRGBA(s.color.r, s.color.g, s.color.b, s.color.a/255));
                    if (s.lineWidth) spline.setLineWidth(this._fromJSToNativePrimitive(s.lineWidth));
                    if (s.name) spline.setName(s.name);
                    spline.setYAxis(this._fromJSToNativePrimitive(s.yAxis));
                    seriesArr.push(spline);
                }
                
                hiOptions.setSeries(this._convertJSArrayToNative(seriesArr));
            }
            this.setOptions(hiOptions)
        } catch (e) {
            console.log("HighChartsView -> getOptions -> catch(e)", e);
        }
    }

    public setOptions(opts: any) {
         const nativeview = (<any>this.nativeView);
         nativeview.setOptions(opts);
    }

    /**
     * @private
     */
    private _convertJSArrayToNative(jsArray: Array<any>): java.util.ArrayList<any> {
        const nativeArray = new java.util.ArrayList<any>();
        for (let i = 0, l = jsArray.length; i < l; i++) {
            nativeArray.add(this._fromJSToNativePrimitive(jsArray[i]));
        }
    
        return nativeArray;
    }
    
    /**
     * @private
     */
    private _fromJSToNativePrimitive(value: any): any {
        
        if (typeof value === 'string') return value;

        if (Number.isInteger(value)) {
            return new java.lang.Integer(value);
        }
    
        if (!isNaN(Number(value))) {
            return new java.lang.Double(value.toString());
        }
    
        return value;
    }

    /**
     * @private
     */
    private _toArrayList(arr, isNumber = false) {
        const arrayList = new java.util.ArrayList<any>();
        arr.forEach(item => {
            arrayList.add(item);
        })
        return arrayList;
    }

    /**
     * @private
     */
    private _toLinkedList(arr, isNumber = false) {
        const linkedList = new java.util.LinkedList<any>();
        arr.forEach((item, i) => {
            linkedList.add(i, item);
        })
        return linkedList;
    }

    /**
     * @private
     */
    private _toArrayListRecursive(arr, isNumber = false) {
        const arrayList = new java.util.ArrayList<any>();
        arr.forEach(item => {
            if (item.length) {
                arrayList.add(this._toArrayListRecursive(item));
            } else {
                arrayList.add(item);
            }
        })
        return arrayList;
    }

    colorToString(color: any) {
        return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a/255})`;
    }
}