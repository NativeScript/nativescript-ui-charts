/// <reference path="references.d.ts" />
import { NgModule, Directive } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { UIChartsView } from '@nativescript/ui-charts';

registerElement('UIChartsView', () => UIChartsView);

@Directive({
    selector: 'UIChartsView'
})
export class UIChartsViewDirective { }

@NgModule({
    declarations: [UIChartsViewDirective],
    exports: [UIChartsViewDirective],
})
export class UIChartsViewModule { }
