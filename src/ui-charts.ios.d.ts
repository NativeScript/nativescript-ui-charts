import { UIChartsViewBase } from './ui-charts.common';
export declare class UIChartsView extends UIChartsViewBase {
    private _delegate;
    createNativeView(): any;
    setOptions(opts: any): void;
    updateOptions(opts: any): void;
    setExtremes(newMin: any, newMax: any, xAxisIndex?: number): void;
}
