import { UIChartsViewBase } from './ui-charts.common';
export declare class UIChartsView extends UIChartsViewBase {
    onLoaded(): void;
    createNativeView(): any;
    onUnloaded(): void;
    disposeNativeView(): void;
    initNativeView(): void;
    setChartOptions({ type, series, yAxis, backgroundColor, axisColor, axisTextColor, titleColor, categories, step }: {
        type?: string;
        series: any;
        yAxis: any;
        backgroundColor: any;
        axisColor: any;
        axisTextColor: any;
        titleColor: any;
        categories: any;
        step: any;
    }): void;
    setOptions(opts: any): void;
    colorToString(color: any): string;
}
