import { View, Property } from '@nativescript/core';
export class UIChartsViewBase extends View {
  options: any;
}

export const optionsProperty = new Property<UIChartsViewBase, {}>({
  name: 'options',
  defaultValue: {
    title: {
      text: ''
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  },
  affectsLayout: true,
  valueChanged: (target, oldValue, newValue) => {
    (<any>target).updateOptions(newValue)
  }
});
optionsProperty.register(UIChartsViewBase);
