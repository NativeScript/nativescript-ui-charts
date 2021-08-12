import { Property, View } from '@nativescript/core';
export declare class UIChartsViewBase extends View {
    _chartInitialized: boolean;
    options: any;
    langOptions: any;
    updateChartContent: boolean;
}
export declare const optionsProperty: Property<UIChartsViewBase, {}>;
export declare const langOptionsProperty: Property<UIChartsViewBase, {}>;
export declare const updateChartContentProperty: Property<UIChartsViewBase, boolean>;
