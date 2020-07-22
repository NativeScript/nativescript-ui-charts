import { NgModule } from "@angular/core";
import { registerElement } from '@nativescript/angular/element-registry';

import { DIRECTIVES } from './ui-charts.directive';

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class UIChartsViewModule { }

registerElement('UIChartsView', () => require('../ui-charts').UIChartsView);