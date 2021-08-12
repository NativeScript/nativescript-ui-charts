import { booleanConverter, Property, View } from '@nativescript/core';
export class UIChartsViewBase extends View {
  _chartInitialized = false;
  options: any;
  langOptions: any;
  updateChartContent: boolean;
}

export const optionsProperty = new Property<UIChartsViewBase, {}>({
  name: 'options',
  defaultValue: {},
  affectsLayout: true,
  valueChanged: (target, oldValue, newValue) => {
    if (!target._chartInitialized) {
      (<any>target).setOptions(newValue);
      target._chartInitialized = true;
    } else {
      if (target.updateChartContent) {
        (<any>target).updateOptions(newValue);
      } else {
        (<any>target).setOptions(newValue);
      }
    }
  },
});
optionsProperty.register(UIChartsViewBase);

export const langOptionsProperty = new Property<UIChartsViewBase, {}>({
  name: 'langOptions',
  defaultValue: {},
  affectsLayout: false,
  valueChanged: (target, oldValue, newValue) => {
    (<any>target).setLangOptions(newValue);
  },
});
langOptionsProperty.register(UIChartsViewBase);

export const updateChartContentProperty = new Property<UIChartsViewBase, boolean>({
  name: 'updateChartContent',
  defaultValue: false,
  affectsLayout: false,
  valueConverter: (v: string) => booleanConverter(v),
  valueChanged: (chartsViewBase: UIChartsViewBase, oldValue: boolean, newValue: boolean) => {
    chartsViewBase.updateChartContent = newValue;
  },
});
updateChartContentProperty.register(UIChartsViewBase);
