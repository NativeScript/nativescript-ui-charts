import { UIChartsViewBase } from './ui-charts.common';
export declare class UIChartsView extends UIChartsViewBase {
    onLoaded(): void;
    createNativeView(): any;
    onUnloaded(): void;
    disposeNativeView(): void;
    initNativeView(): void;
    setOptions(opts: any): void;
}
