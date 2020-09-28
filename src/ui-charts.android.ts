import { Application } from '@nativescript/core';
import { UIChartsViewBase } from './ui-charts.common';
import { optionsHandler } from './options-handlers/options-handler';

export class UIChartsView extends UIChartsViewBase {
  private _orientationHandler: () => void;

  public createNativeView() {
    const chartView = new com.highsoft.highcharts.core.HIChartView(this._context) as any;
    chartView.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    return chartView;
  }

  /**
   * Initializes properties/listeners of the native view.
   */
  initNativeView(): void {
    // Attach the owner to nativeView.
    // When nativeView is tapped we get the owning JS object through this field.
    (<any>this.nativeView).owner = new WeakRef(this);
    (<any>this.nativeView).generateDefaultLayoutParams();
    this._orientationHandler = this.onOrientationChange.bind(this);
    Application.on('orientationChanged', this._orientationHandler);
    super.initNativeView();
  }

  public disposeNativeView() {
    Application.off('orientationChanged', this._orientationHandler);
    super.disposeNativeView();
  }

  onOrientationChange() {
    setTimeout(() => {
      const w = (<any>this).this.nativeViewProtected.owner.get();
      if (w) {
        // TODO: redraw the chart here to handle orientation change
      }
    });
  }

  public setOptions(opts: any) {
    this.options = opts;
    const hiOptions = optionsHandler(this.options);
    if (this.nativeViewProtected) {
      this.nativeViewProtected.setOptions(hiOptions);
    }
  }

  public updateOptions(opts) {
    this.options = opts;
    const hiOptions = optionsHandler(this.options);
    if (this.nativeViewProtected) {
      this.nativeViewProtected.update(hiOptions);
    }
  }

  public setExtremes(newMin: any, newMax: any, xAxisIndex = 0) {
    const opts = this.nativeViewProtected.getOptions() as com.highsoft.highcharts.common.hichartsclasses.HIOptions;
    const xaxisArr = opts.getXAxis();
    const xaxis = xaxisArr.get(xAxisIndex);
    xaxis.setMin(new java.lang.Long(newMin));
    xaxis.setMax(new java.lang.Long(newMax));
    this.nativeViewProtected.zoomOut();
    this.nativeViewProtected.update(opts);
  }
}
