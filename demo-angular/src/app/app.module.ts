import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UIChartsViewModule } from "@nativescript/ui-charts/angular";

import { DemosComponent } from "./demos/demos.component";
import { BasicLineComponent } from "./demos/line-charts/basic-line/basic-line.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        UIChartsViewModule
    ],
    declarations: [
        AppComponent,
        DemosComponent,
        BasicLineComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
