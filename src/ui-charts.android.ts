import { UIChartsViewBase } from './ui-charts.common';
import { optionsHandler } from './options-handlers/options-handler';

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

    public disposeNativeView() {
        super.disposeNativeView();
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        (<any>this.nativeView).generateDefaultLayoutParams();
        super.initNativeView();
    }

    public setOptions(opts: any) {
         const nativeview = (<any>this.nativeView);
         nativeview.setOptions(opts);
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