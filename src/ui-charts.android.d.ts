import { UIChartsViewBase } from './ui-charts.common';
export declare class UIChartsView extends UIChartsViewBase {
    onLoaded(): void;
    createNativeView(): any;
    onUnloaded(): void;
    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void;
    disposeNativeView(): void;
    onOrientationChange(): void;
    setOptions(opts: any): void;
    updateOptions(opts: any): void;
    setExtremes(newMin: any, newMax: any, xAxisIndex?: number): void;
}
