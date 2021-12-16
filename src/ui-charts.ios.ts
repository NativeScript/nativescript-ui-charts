import { UIChartsViewBase } from './ui-charts.common';
import { optionsHandler } from './options-handlers/options-handler';
import { langHandler } from './options-handlers/lang/lang-handler';

export class UIChartsView extends UIChartsViewBase {
  public _chartInitialized: boolean = false;
  private _delegate: HighchartsViewDelegateImpl;
  public onLoaded() {
    super.onLoaded();
  }

  public createNativeView() {
    const chartView = new HIChartView({ frame: CGRectMake(0, 0, 200, 200) }) as any;
    // always retain delegate on owner class to ensure it doesn't inadvertently get garbage collected
    this._delegate = new HighchartsViewDelegateImpl();
    chartView.delegate = this._delegate;
    const currentVC = getVisibleViewController();
    chartView.viewController = currentVC;
    return chartView;
  }

  public onUnloaded() {
    super.onUnloaded();
  }

  public disposeNativeView() {
    this._chartInitialized = false;
    super.disposeNativeView();
  }

  /**
   * Initializes properties/listeners of the native view.
   */
  initNativeView(): void {
    // Attach the owner to nativeView.
    // When nativeView is tapped we get the owning JS object through this field.
    (<any>this.nativeView).owner = new WeakRef(this);
    super.initNativeView();

    // NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock("valueChange", null, NSOperationQueue.mainQueue, this.onValueChange);
  }

  public setOptions(opts: any) {
    this.options = opts;
    const hiOptions = optionsHandler(this.options);
    if (this.nativeView) {
      this.nativeView.options = hiOptions;
      this._chartInitialized = true;
      this.nativeView.reload();
    }
  }

  public setLangOptions(opts: any) {
    const hiLang = langHandler(opts);
    if (this.nativeView) {
      this.nativeView.lang = hiLang;
    }
  }

  public updateOptions(opts) {
    this.options = opts;
    const hiOptions = optionsHandler(this.options);
    if (this.nativeView) {
      this.nativeView.updateRedrawOneToOneAnimation(hiOptions, 1, 1, new HIAnimationOptionsObject());
    }
  }

  setExtremes(newMin, newMax, xAxisIndex = 0) {
    const nativeview = this.nativeView;
    if (nativeview) {
      const opts = nativeview.options;
      const xaxis = opts.xAxis.objectAtIndex(xAxisIndex);

      if (xaxis) {
        xaxis.min = newMin;
        xaxis.max = newMax;
      }
      nativeview.zoomOut();
      nativeview.updateRedrawOneToOneAnimation(nativeview.options, 1, 1, new HIAnimationOptionsObject());
    }
  }

  public enableAnnotationsModule() {
    if (this.nativeView) {
      this.nativeView.plugins = ['annotations'];
    }
  }
}

@NativeClass() // native delegates mostly always extend NSObject
class HighchartsViewDelegateImpl extends NSObject implements HIChartViewDelegate {
  static ObjCProtocols = [HIChartViewDelegate]; // define our native protocalls

  static new(): HighchartsViewDelegateImpl {
    return <HighchartsViewDelegateImpl>super.new(); // calls new() on the NSObject
  }

  chartViewDidLoad(chart) {
    // console.log('HighchartsViewDelegateImpl Did load chart:', chart);
  }
}

function getVisibleViewController(rootViewController?: UIViewController): UIViewController {
  if (!rootViewController) {
    rootViewController = UIApplication.sharedApplication.keyWindow.rootViewController;
  }
  if (rootViewController.presentedViewController) {
    return getVisibleViewController(rootViewController.presentedViewController);
  }

  if (rootViewController.isKindOfClass(UINavigationController.class())) {
    return getVisibleViewController((<UINavigationController>rootViewController).visibleViewController);
  }

  if (rootViewController.isKindOfClass(UITabBarController.class())) {
    return getVisibleViewController((<UITabBarController>rootViewController).selectedViewController);
  }

  return rootViewController;
}
