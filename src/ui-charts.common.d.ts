import { View, Property } from '@nativescript/core';
export declare class UIChartsViewBase extends View {
    options: any;
    events: {
        chartLoaded: string;
    };
}
export declare const optionsProperty: Property<UIChartsViewBase, {}>;
