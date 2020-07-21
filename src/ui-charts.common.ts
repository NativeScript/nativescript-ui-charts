import { View } from '@nativescript/core';
import { Property } from '@nativescript/core/ui/page';

export class UIChartsViewBase extends View {
  options: any;
}

export const optionsProperty = new Property<UIChartsViewBase, {}>({
  name: 'options',
  defaultValue: {},
  affectsLayout: true
});
optionsProperty.register(UIChartsViewBase);
