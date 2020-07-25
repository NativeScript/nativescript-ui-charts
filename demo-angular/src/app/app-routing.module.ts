import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { DemosComponent } from "./demos/demos.component";
import { BasicLineComponent } from "./demos/line-charts/basic-line/basic-line.component";

const routes: Routes = [
    { path: "", redirectTo: "/demos", pathMatch: "full" },
    { path: "demos", component: DemosComponent },
    { path: "demos/line-charts/basic-line/basic-line-page", component: BasicLineComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
