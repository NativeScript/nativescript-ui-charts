import { UIChartsViewBase } from './ui-charts.common';
import { optionsHandler } from './options-handlers/options-handler';

export class UIChartsView extends UIChartsViewBase {

    public onLoaded() {
        super.onLoaded();

        const hiOptions = optionsHandler(this.options);
        (<any>this.nativeView).options = hiOptions;
    }

    public createNativeView() {
        const chartView = new HIChartView({ frame: CGRectMake(0, 0, 200, 200) }) as any;
        chartView.delegate = new HighchartsViewDelegateImpl();
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
        super.initNativeView();

        // NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock("valueChange", null, NSOperationQueue.mainQueue, this.onValueChange);
    }

    public setOptions(opts: any) {
        const nativeview = (<any>this.nativeView);
        nativeview.options = opts;
    }

}

class HighchartsViewDelegateImpl
    extends NSObject // native delegates mostly always extend NSObject
    implements HIChartViewDelegate {

    static ObjCProtocols = [HIChartViewDelegate] // define our native protocalls

    static new(): HighchartsViewDelegateImpl {
        return <HighchartsViewDelegateImpl>super.new() // calls new() on the NSObject
    }

    chartViewDidLoad(chart) {
        console.log("HighchartsViewDelegateImpl Did load chart:", chart)
    }
}