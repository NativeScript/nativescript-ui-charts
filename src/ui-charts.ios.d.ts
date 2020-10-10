import { UIChartsViewBase } from './ui-charts.common';
export declare class UIChartsView extends UIChartsViewBase {
    private _delegate;
    onLoaded(): void;
    createNativeView(): any;
    onUnloaded(): void;
    disposeNativeView(): void;
    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void;
    setOptions(opts: any): void;
    setLangOptions(opts: any): void;
    updateOptions(opts: any): void;
    setExtremes(newMin: any, newMax: any, xAxisIndex?: number): void;
}
