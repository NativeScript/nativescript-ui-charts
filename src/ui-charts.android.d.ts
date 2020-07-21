import { UIChartsViewBase } from './ui-charts.common';
export declare class UIChartsView extends UIChartsViewBase {
    onLoaded(): void;
    createNativeView(): any;
    onUnloaded(): void;
    disposeNativeView(): void;
    initNativeView(): void;
    setChartOptions({ type, series, yAxis, style, backgroundColor, axisColor, axisTextColor, titleColor, categories, step }: {
        type?: string;
        series: any;
        yAxis: any;
        style: any;
        backgroundColor: any;
        axisColor: any;
        axisTextColor: any;
        titleColor: any;
        categories: any;
        step: any;
    }): void;
    setOptions(opts: any): void;
    private _convertJSArrayToNative;
    private _fromJSToNativePrimitive;
    private _toArrayList;
    private _toLinkedList;
    private _toArrayListRecursive;
    colorToString(color: any): string;
}
