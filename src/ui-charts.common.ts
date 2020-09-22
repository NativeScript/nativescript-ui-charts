import { View, Property } from '@nativescript/core';
export class UIChartsViewBase extends View {
  options: any;
  events = {
    chartLoaded: 'chartLoaded'
  };
}

export const optionsProperty = new Property<UIChartsViewBase, {}>({
  name: 'options',
  defaultValue: {},
  affectsLayout: true
});
optionsProperty.register(UIChartsViewBase);
