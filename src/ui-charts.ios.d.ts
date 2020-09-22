import { UIChartsViewBase } from './ui-charts.common';
export declare class UIChartsView extends UIChartsViewBase {
    private _delegate;
    createNativeView(): any;
    /**
     * Initializes properties/listeners of the native view.
     */
    setOptions(opts: any): void;
    updateOptions(opts: any): void;
    setExtremes(newMin: any, newMax: any, xAxisIndex?: number): void;
}
