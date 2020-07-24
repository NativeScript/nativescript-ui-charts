import { UIChartsViewBase } from './ui-charts.common';
import { optionsHandler } from './options-handlers/options-handler';
import { Application } from '@nativescript/core';

export class UIChartsView extends UIChartsViewBase {
    public onLoaded() {
        super.onLoaded();

        const hiOptions = optionsHandler(this.options);
        (<any>this.nativeView).setOptions(hiOptions);
    }

    public createNativeView() {
        const chartView = new com.highsoft.highcharts.core.HIChartView(this._context) as any;
        chartView.setBackgroundColor(android.graphics.Color.TRANSPARENT);
        return chartView;
    }

    public onUnloaded() {
        super.onUnloaded();
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = new WeakRef(this);
        (<any>this.nativeView).generateDefaultLayoutParams();
        (<any>this)._orientationHandler = this.onOrientationChange.bind(this);
        Application.on('orientationChanged', (<any>this)._orientationHandler);
        super.initNativeView();
    }

    public disposeNativeView() {
        Application.off('orientationChanged', (<any>this)._orientationHandler);
        super.disposeNativeView();
    }

    onOrientationChange() {
        setTimeout(() => {
            const w = (<any>this).nativeView.owner.get();
            if (w) {
                // TODO: redraw the chart here to handle orientation change
            }
        });
    }

    public setOptions(opts: any) {
        this.options = opts;
        const hiOptions = optionsHandler(this.options);
        if (this.nativeView) {
            this.nativeView.setOptions(hiOptions);
        }
    }

    public updateOptions(opts) {
        this.options = opts;
        const hiOptions = optionsHandler(this.options);
        if (this.nativeView) {
            this.nativeView.update(hiOptions);
        }
    }

    public setExtremes(newMin: any, newMax: any, xAxisIndex = 0) {
        const nativeview = (<any>this.nativeView);
        const opts = (nativeview.getOptions() as com.highsoft.highcharts.common.hichartsclasses.HIOptions);
        const xaxisArr = opts.getXAxis();
        const xaxis = xaxisArr.get(xAxisIndex);
        xaxis.setMin(new java.lang.Long(newMin));
        xaxis.setMax(new java.lang.Long(newMax));
        nativeview.zoomOut();
        nativeview.update(opts);
    }
}