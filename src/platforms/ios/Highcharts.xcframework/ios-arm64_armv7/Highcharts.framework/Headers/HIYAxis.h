/**
* (c) 2009-2020 Highsoft AS
*
* License: www.highcharts.com/license
* For commercial usage, a valid license is required. To purchase a license for Highcharts iOS, please see our website: https://shop.highsoft.com/
* In case of questions, please contact sales@highsoft.com
*/

#import "HILabels.h"
#import "HIPlotBands.h"
#import "HIPlotLines.h"
#import "HIStackLabels.h"
#import "HITitle.h"
#import "HIAccessibility.h"
#import "HIBreaks.h"
#import "HIDateTimeLabelFormats.h"
#import "HIEvents.h"
#import "HICrosshair.h"
#import "HIColor.h"
#import "HIFunction.h"


/**
The Y axis or value axis. Normally this is the vertical axis, though if the chart is inverted this is the horizontal axis. In case of multiple axes, the yAxis node is an array of configuration objects. See `the Axis object` for programmatic access to the axis.
*/
@interface HIYAxis: HIChartsJSONSerializable

/**
Padding of the min value relative to the length of the axis. A padding of 0.05 will make a 100px axis 5px longer. This is useful when you don't want the lowest data value to appear on the edge of the plot area. When the axis' `min` option is set or a max extreme is set using `axis.setExtremes()`, the maxPadding will be ignored. Also the `softThreshold` option takes precedence over `minPadding`, so if the data is tangent to the threshold, `minPadding` may not apply unless `softThreshold` is set to false.

**Defaults to** `0.01`.

**Try it**

* [Min padding of 0.2](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minpadding/)
*/
@property(nonatomic, readwrite) NSNumber *minPadding;
/**
The axis labels show the number or category for each tick. Since v8.0.0: Labels are animated in categorized x-axis with updating data if `tickInterval` and `step` is set to 1.
*/
@property(nonatomic, readwrite) HILabels *labels;
/**
The height of the Y axis. If it's a number, it is interpreted as pixels. Since Highcharts 2: If it's a percentage string, it is interpreted as percentages of the total plot height.
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ height;
/**
Solid gauge only. Unless `stops` are set, the color to represent the maximum value of the Y axis.

**Defaults to** `#003399`.

**Try it**

* [Min and max colors](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/mincolor-maxcolor/)
*/
@property(nonatomic, readwrite) HIColor *maxColor;
/**
A soft maximum for the axis. If the series data maximum is less than this, the axis will stay at this maximum, but if the series data maximum is higher, the axis will flex to show all data. **Note**: The `series.softThreshold` option takes precedence over this option.

**Try it**

* [Soft min and max](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/softmin-softmax/)
*/
@property(nonatomic, readwrite) NSNumber *softMax;
/**
The minimum value of the axis. If `null` the min value is automatically calculated. If the `startOnTick` option is true (default), the `min` value might be rounded down. The automatically calculated minimum value is also affected by `floor`, `softMin`, `minPadding`, `minRange` as well as `series.threshold` and `series.softThreshold`.

**Try it**

* [-50 with startOnTick to false](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/min-startontick-false/)
* [-50 with startOnTick true by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/min-startontick-true/)
*/
@property(nonatomic, readwrite) NSNumber *min;
/**
An array of colored bands stretching across the plot area marking an interval on the axis. In styled mode, the plot bands are styled by the `.highcharts-plot-band` class in addition to the `className` option.
*/
@property(nonatomic, readwrite) NSArray <HIPlotBands *> *plotBands;
/**
Solid gauge series only. Color stops for the solid gauge. Use this in cases where a linear gradient between a `minColor` and `maxColor` is not sufficient. The stops is an array of tuples, where the first item is a float between 0 and 1 assigning the relative position in the gradient, and the second item is the color. For solid gauges, the Y axis also inherits the concept of [data classes](https://api.highcharts.com/highmaps#colorAxis.dataClasses) from the Highmaps color axis.

**Try it**

* [True by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/gauge-solid/)
*/
@property(nonatomic, readwrite) NSArray *stops;
/**
Whether to force the axis to end on a tick. Use this option with the `maxPadding` option to control the axis end. This option is always disabled, when panning type is either `y` or `xy`.

**Try it**

* [True by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/chart/reflow-true/)
* [False](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/endontick/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *endOnTick;
/**
The maximum value of the axis. If `null`, the max value is automatically calculated. If the `endOnTick` option is true, the `max` value might be rounded up. If a `tickAmount` is set, the axis may be extended beyond the set max in order to reach the given number of ticks. The same may happen in a chart with multiple axes, determined by `chart.alignTicks`, where a `tickAmount` is applied internally.

**Try it**

* [Y axis max of 200](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/max-200/)
* [Y axis max on logarithmic axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/max-logarithmic/)
*/
@property(nonatomic, readwrite) NSNumber *max;
/**
A soft minimum for the axis. If the series data minimum is greater than this, the axis will stay at this minimum, but if the series data minimum is lower, the axis will flex to show all data. **Note**: The `series.softThreshold` option takes precedence over this option.

**Try it**

* [Soft min and max](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/softmin-softmax/)
*/
@property(nonatomic, readwrite) NSNumber *softMin;
/**
The type of axis. Can be one of `linear`, `logarithmic`, `datetime`, `category` or `treegrid`. Defaults to `treegrid` for Gantt charts, `linear` for other chart types. In a datetime axis, the numbers are given in milliseconds, and tick marks are placed on appropriate values, like full hours or days. In a category or treegrid axis, the `point names` of the chart's series are used for categories, if a `categories` array is not defined.

**Defaults to** `linear`.

**Try it**

* [Logarithmic with minor grid lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/type-log-minorgrid/)
* [Logarithmic with extension to emulate negative values](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/type-log-negative/)
*/
@property(nonatomic, readwrite) NSString *type;
/**
If tickInterval is `null` this option sets the approximate pixel interval of the tick marks. Not applicable to categorized axis. The tick interval is also influenced by the `minTickInterval` option, that, by default prevents ticks from being denser than the data points.

**Try it**

* [50 px on X axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickpixelinterval-50/)
*/
@property(nonatomic, readwrite) NSNumber *tickPixelInterval;
/**
The pixel width of the major tick marks.

**Defaults to** `0`.

**Try it**

* [10 px width](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickwidth/)
*/
@property(nonatomic, readwrite) NSNumber *tickWidth;
/**
Whether to display the axis on the opposite side of the normal. The normal is on the left side for vertical axes and bottom for horizontal, so the opposite sides will be right and top respectively. This is typically used with dual or multiple axes.

**Try it**

* [Secondary Y axis opposite](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/opposite/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *opposite;
/**
Whether to reverse the axis so that the highest number is closest to the origin.

**Try it**

* [Reversed Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/reversed/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *reversed;
/**
An array of lines stretching across the plot area, marking a specific value on one of the axes. In styled mode, the plot lines are styled by the `.highcharts-plot-line` class in addition to the `className` option.

**Try it**

* [Basic plot line](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/plotlines-color/)
* [Solid gauge plot line](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series-solidgauge/labels-auto-aligned/)
*/
@property(nonatomic, readwrite) NSArray <HIPlotLines *> *plotLines;
/**
The width of the grid lines extending the ticks across the plot area. In styled mode, the stroke width is given in the `.highcharts-grid-line` class.

**Defaults to** `0`.

**Try it**

* [2px lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/gridlinewidth/)
* [Styled mode](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis-grid/)
*/
@property(nonatomic, readwrite) NSNumber *gridLineWidth;
/**
Parallel coordinates only. Format that will be used for point.y and available in `tooltip.pointFormat` as `{point.formattedValue}`. If not set, `{point.formattedValue}` will use other options, in this order: 1. `yAxis.labels.format` will be used if  set 2. If yAxis is a category, then category name will be displayed 3. If yAxis is a datetime, then value will use the same format as  yAxis labels 4. If yAxis is linear/logarithmic type, then simple value will be  used

**Defaults to** `undefined`.

**Try it**

* [Different tooltipValueFormats's](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples//highcharts/parallel-coordinates/tooltipvalueformat/)
*/
@property(nonatomic, readwrite) NSString *tooltipValueFormat;
/**
The width of the line marking the axis itself. In styled mode, the stroke width is given in the `.highcharts-axis-line` or `.highcharts-xaxis-line` class.

**Defaults to** `1`.

**Try it**

* [A 1px line on Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/linecolor/)
* [Axes in styled mode](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis/)
*/
@property(nonatomic, readwrite) NSNumber *lineWidth;
/**
Solid gauge only. Unless `stops` are set, the color to represent the minimum value of the Y axis.

**Defaults to** `#e6ebf5`.

**Try it**

* [Min and max color](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/mincolor-maxcolor/)
*/
@property(nonatomic, readwrite) HIColor *minColor;
/**
Whether to show the last tick label. Defaults to `true` on cartesian charts, and `false` on polar charts.

**Defaults to** `True`.

**Try it**

* [Set to true on X axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/showlastlabel-true/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *showLastLabel;
/**
Whether to force the axis to start on a tick. Use this option with the `maxPadding` option to control the axis start. This option is always disabled, when panning type is either `y` or `xy`.

**Try it**

* [False by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/startontick-false/)
* [True](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/startontick-true/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *startOnTick;
/**
The stack labels show the total value for each bar in a stacked column or bar chart. The label will be placed on top of positive columns and below negative columns. In case of an inverted column chart or a bar chart the label is placed to the right of positive bars and to the left of negative bars.
*/
@property(nonatomic, readwrite) HIStackLabels *stackLabels;
/**
Padding of the max value relative to the length of the axis. A padding of 0.05 will make a 100px axis 5px longer. This is useful when you don't want the highest data value to appear on the edge of the plot area. When the axis' `max` option is set or a max extreme is set using `axis.setExtremes()`, the maxPadding will be ignored. Also the `softThreshold` option takes precedence over `maxPadding`, so if the data is tangent to the threshold, `maxPadding` may not apply unless `softThreshold` is set to false.

**Defaults to** `0.01`.

**Try it**

* [Max padding of 0.2](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/maxpadding-02/)
*/
@property(nonatomic, readwrite) NSNumber *maxPadding;
/**
The color of the line marking the axis itself. In styled mode, the line stroke is given in the `.highcharts-axis-line` or `.highcharts-xaxis-line` class.

**Defaults to** `#ccd6eb`.

**Try it**

* [A red line on Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/linecolor/)
* [Axes in styled mode](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis/)
*/
@property(nonatomic, readwrite) HIColor *lineColor;
/**
The axis title, showing next to the axis line.
*/
@property(nonatomic, readwrite) HITitle *title;
/**
If `true`, the first series in a stack will be drawn on top in a positive, non-reversed Y axis. If `false`, the first series is in the base of the stack.

**Defaults to** `true`.

**Try it**

* [Non-reversed stacks](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/reversedstacks-false/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *reversedStacks;
/**
The top position of the Y axis. If it's a number, it is interpreted as pixel position relative to the chart. Since Highcharts 2: If it's a percentage string, it is interpreted as percentages of the plot height, offset from plot area top.
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ top;
/**
Whether to zoom axis. If `chart.zoomType` is set, the option allows to disable zooming on an individual axis.

**Defaults to** `enabled`.

**Try it**

* [Zoom enabled is false](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/zoomenabled/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *zoomEnabled;
/**
Color for the minor tick marks.

**Defaults to** `#999999`.

**Try it**

* [Black tick marks on Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickcolor/)
*/
@property(nonatomic, readwrite) HIColor *minorTickColor;
/**
Refers to the index in the `panes` array. Used for circular gauges and polar charts. When the option is not set then first pane will be used.

**Try it**

* [Two gauges with different center](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/gauge-vu-meter)
*/
@property(nonatomic, readwrite) NSNumber *pane;
/**
For categorized axes only. If `on` the tick mark is placed in the center of the category, if `between` the tick mark is placed between categories. The default is `between` if the `tickInterval` is 1, else `on`.

**Accepted values:** `["on", "between"]`.

**Try it**

* ["between" by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickmarkplacement-between/)
* ["on"](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickmarkplacement-on/)
*/
@property(nonatomic, readwrite) NSString *tickmarkPlacement;
/**
The Z index of the grid lines.

**Defaults to** `1`.

**Try it**

* [A Z index of 4 renders the grid above the graph](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/gridzindex/)
*/
@property(nonatomic, readwrite) NSNumber *gridZIndex;
/**
Accessibility options for an axis. Requires the accessibility module.
*/
@property(nonatomic, readwrite) HIAccessibility *accessibility;
/**
Whether axis, including axis title, line, ticks and labels, should be visible.

**Defaults to** `true`.
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *visible;
/**
When using multiple axis, the ticks of two or more opposite axes will automatically be aligned by adding ticks to the axis or axes with the least ticks, as if `tickAmount` were specified. This can be prevented by setting `alignTicks` to false. If the grid lines look messy, it's a good idea to hide them for the secondary axis by setting `gridLineWidth` to 0. If `startOnTick` or `endOnTick` in an Axis options are set to false, then the `alignTicks ` will be disabled for the Axis. Disabled for logarithmic axes.

**Defaults to** `true`.
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *alignTicks;
/**
The minimum tick interval allowed in axis values. For example on zooming in on an axis with daily data, this can be used to prevent the axis from showing hours. Defaults to the closest distance between two points on the axis.
*/
@property(nonatomic, readwrite) NSNumber *minTickInterval;
/**
Whether to show the first tick label.

**Defaults to** `true`.

**Try it**

* [Set to false on X axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/showfirstlabel-false/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *showFirstLabel;
/**
For datetime axes, this decides where to put the tick between weeks. 0 = Sunday, 1 = Monday.

**Try it**

* [Monday by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/startofweek-monday/)
* [Sunday](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/startofweek-sunday/)
*/
@property(nonatomic, readwrite) NSNumber *startOfWeek;
/**
An id for the axis. This can be used after render time to get a pointer to the axis object through `chart.get()`.

**Try it**

* [Get the object](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/id/)
*/
@property(nonatomic, readwrite) NSString *id;
/**
An array defining where the ticks are laid out on the axis. This overrides the default behaviour of `tickPixelInterval` and `tickInterval`.

**Try it**

* [Demo of tickPositions and tickPositioner](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickpositions-tickpositioner/)
*/
@property(nonatomic, readwrite) NSArray<NSNumber *> *tickPositions;
/**
The minimum range to display on this axis. The entire axis will not be allowed to span over a smaller interval than this. For example, for a datetime axis the main unit is milliseconds. If minRange is set to 3600000, you can't zoom in more than to one hour. The default minRange for the x axis is five times the smallest interval between any of the data points. On a logarithmic axis, the unit for the minimum range is the power. So a minRange of 1 means that the axis can be zoomed to 10-100, 100-1000, 1000-10000 etc. **Note**: The `minPadding`, `maxPadding`, `startOnTick` and `endOnTick` settings also affect how the extremes of the axis are computed.

**Try it**

* [Minimum range of 5](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/minrange/)
*/
@property(nonatomic, readwrite) NSNumber *minRange;
/**
In a polar chart, this is the angle of the Y axis in degrees, where 0 is up and 90 is right. The angle determines the position of the axis line and the labels, though the coordinate system is unaffected. Since v8.0.0 this option is also applicable for X axis (inverted polar).

**Defaults to** `0`.

**Try it**

* [Custom X axis' angle on inverted polar chart](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/angle/)
* [Dual axis polar chart](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/angle/)
*/
@property(nonatomic, readwrite) NSNumber *angle;
/**
Whether to allow decimals in this axis' ticks. When counting integers, like persons or hits on a web page, decimals should be avoided in the labels.

**Defaults to** `true`.

**Try it**

* [True by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/allowdecimals-true/)
* [False](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/allowdecimals-false/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *allowDecimals;
/**
The lowest allowed value for automatically computed axis extremes.

**Try it**

* [Floor and ceiling](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/floor-ceiling/)
*/
@property(nonatomic, readwrite) NSNumber *floor;
/**
Color of the minor, secondary grid lines. In styled mode, the stroke width is given in the `.highcharts-minor-grid-line` class.

**Defaults to** `#f2f2f2`.

**Try it**

* [Bright grey lines from Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minorgridlinecolor/)
* [Styled mode](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis-grid/)
*/
@property(nonatomic, readwrite) HIColor *minorGridLineColor;
/**
A callback function returning array defining where the ticks are laid out on the axis. This overrides the default behaviour of `tickPixelInterval` and `tickInterval`. The automatic tick positions are accessible through `this.tickPositions` and can be modified by the callback.

**Try it**

* [Demo of tickPositions and tickPositioner](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickpositions-tickpositioner/)
*/
@property(nonatomic, readwrite) HIFunction *tickPositioner;
/**
The dash or dot style of the minor grid lines. For possible values, see [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).

**Defaults to** `Solid`.

**Try it**

* [Long dashes on minor grid lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minorgridlinedashstyle/)
*/
@property(nonatomic, readwrite) NSString *minorGridLineDashStyle;
/**
The width as the horizontal axis. If it's a number, it is interpreted as pixels. Since Highcharts v5.0.13: If it's a percentage string, it is interpreted as percentages of the total plot width.
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ width;
/**
The pixel length of the minor tick marks.

**Try it**

* [10px on Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minorticklength/)
*/
@property(nonatomic, readwrite) NSNumber *minorTickLength;
/**
Datetime axis only. An array determining what time intervals the ticks are allowed to fall on. Each array item is an array where the first value is the time unit and the second value another array of allowed multiples. Defaults to: ```js units: [[   'millisecond', // unit name   [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples ], [   'second',   [1, 2, 5, 10, 15, 30] ], [   'minute',   [1, 2, 5, 10, 15, 30] ], [   'hour',   [1, 2, 3, 4, 6, 8, 12] ], [   'day',   [1] ], [   'week',   [1] ], [   'month',   [1, 3, 6] ], [   'year',   null ]] ```
*/
@property(nonatomic, readwrite) NSArray<NSArray *> *units;
/**
Polar charts only. Whether the grid lines should draw as a polygon with straight lines between categories, or as circles. Can be either `circle` or `polygon`. Since v8.0.0 this option is also applicable for X axis (inverted polar).

**Accepted values:** `["circle", "polygon"]`.

**Try it**

* [Polygon grid lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/polar-spider/)
* [Circle and polygon on inverted polar](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/gridlineinterpolation/)
* [Circle and polygon](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/gridlineinterpolation/)
*/
@property(nonatomic, readwrite) NSString *gridLineInterpolation;
/**
The pixel length of the main tick marks.

**Try it**

* [20 px tick length on the X axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/ticklength/)
*/
@property(nonatomic, readwrite) NSNumber *tickLength;
/**
The highest allowed value for automatically computed axis extremes.

**Try it**

* [Floor and ceiling](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/floor-ceiling/)
*/
@property(nonatomic, readwrite) NSNumber *ceiling;
/**
Whether to show the axis line and title when the axis has no data.

**Try it**

* [When clicking the legend to hide series, one axis preserves line and title, the other doesn't](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/showempty/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *showEmpty;
/**
The dash or dot style of the grid lines. For possible values, see [this demonstration](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/).

**Defaults to** `Solid`.

**Try it**

* [Long dashes](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/gridlinedashstyle/)
*/
@property(nonatomic, readwrite) NSString *gridLineDashStyle;
/**
The position of the minor tick marks relative to the axis line. Can be one of `inside` and `outside`.

**Accepted values:** `["inside", "outside"]`.

**Try it**

* [Outside by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickposition-outside/)
* [Inside](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickposition-inside/)
*/
@property(nonatomic, readwrite) NSString *minorTickPosition;
/**
An array defining breaks in the axis, the sections defined will be left out and all the points shifted closer to each other.

**Try it**

* [Simple break](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/axisbreak/break-simple/)
* [Advanced with callback](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/axisbreak/break-visualized/)
*/
@property(nonatomic, readwrite) NSArray <HIBreaks *> *breaks;
/**
For a datetime axis, the scale will automatically adjust to the appropriate unit. This member gives the default string representations used for each unit. For intermediate values, different units may be used, for example the `day` unit can be used on midnight and `hour` unit be used for intermediate values on the same axis. For an overview of the replacement codes, see `dateFormat`. Defaults to: ```js {   millisecond: '%H:%M:%S.%L',   second: '%H:%M:%S',   minute: '%H:%M',   hour: '%H:%M',   day: '%e. %b',   week: '%e. %b',   month: '%b \'%y',   year: '%Y' } ```
*/
@property(nonatomic, readwrite) HIDateTimeLabelFormats *dateTimeLabelFormats;
/**
Enable or disable minor ticks. Unless `minorTickInterval` is set, the tick interval is calculated as a fifth of the `tickInterval`. On a logarithmic axis, minor ticks are laid out based on a best guess, attempting to enter approximately 5 minor ticks between each major tick. Prior to v6.0.0, ticks were unabled in auto layout by setting `minorTickInterval` to `"auto"`.

**Defaults to** `false`.

**Try it**

* [Enabled on linear Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minorticks-true/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *minorTicks;
/**
The pixel width of the minor tick mark.

**Defaults to** `0`.

**Try it**

* [3px width](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickwidth/)
*/
@property(nonatomic, readwrite) NSNumber *minorTickWidth;
/**
The distance in pixels from the plot area to the axis line. A positive offset moves the axis with it's line, labels and ticks away from the plot area. This is typically used when two or more axes are displayed on the same side of the plot. With multiple axes the offset is dynamically adjusted to avoid collision, this can be overridden by setting offset explicitly.

**Defaults to** `0`.

**Try it**

* [Y axis offset of 70](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/offset/)
* [Axes positioned in the center of the plot](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/offset-centered/)
*/
@property(nonatomic, readwrite) NSNumber *offset;
/**
Color for the main tick marks. In styled mode, the stroke is given in the `.highcharts-tick` class.

**Defaults to** `#ccd6eb`.

**Try it**

* [Red ticks on X axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickcolor/)
* [Styled mode](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis-grid/)
*/
@property(nonatomic, readwrite) HIColor *tickColor;
/**
The interval of the tick marks in axis units. When `undefined`, the tick interval is computed to approximately follow the `tickPixelInterval` on linear and datetime axes. On categorized axes, a `undefined` tickInterval will default to 1, one category. Note that datetime axes are based on milliseconds, so for example an interval of one day is expressed as `24 * 3600 * 1000`. On logarithmic axes, the tickInterval is based on powers, so a tickInterval of 1 means one tick on each of 0.1, 1, 10, 100 etc. A tickInterval of 2 means a tick of 0.1, 10, 1000 etc. A tickInterval of 0.2 puts a tick on 0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 40 etc. If the tickInterval is too dense for labels to be drawn, Highcharts may remove ticks. If the chart has multiple axes, the `alignTicks` option may interfere with the `tickInterval` setting.

**Try it**

* [Tick interval of 5 on a linear axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickinterval-5/)
*/
@property(nonatomic, readwrite) NSNumber *tickInterval;
/**
The position of the major tick marks relative to the axis line. Can be one of `inside` and `outside`.

**Accepted values:** `["inside", "outside"]`.

**Try it**

* ["outside" by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickposition-outside/)
* ["inside"](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/tickposition-inside/)
*/
@property(nonatomic, readwrite) NSString *tickPosition;
/**
If categories are present for the xAxis, names are used instead of numbers for that axis. Since Highcharts 3.0, categories can also be extracted by giving each point a `name` and setting axis `type` to `category`. However, if you have multiple series, best practice remains defining the `categories` array. Example: `categories: ['Apples', 'Bananas', 'Oranges']`

**Try it**

* [With](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/line-labels/)
* [Without](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/categories/)
*/
@property(nonatomic, readwrite) NSArray<NSString *> *categories;
/**
Color of the grid lines extending the ticks across the plot area. In styled mode, the stroke is given in the `.highcharts-grid-line` class.

**Defaults to** `#e6e6e6`.

**Try it**

* [Green lines](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/gridlinecolor/)
* [Styled mode](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis-grid/)
*/
@property(nonatomic, readwrite) HIColor *gridLineColor;
/**
Index of another axis that this axis is linked to. When an axis is linked to a master axis, it will take the same extremes as the master, but as assigned by min or max or by setExtremes. It can be used to show additional info, or to ease reading the chart by duplicating the scales.

**Try it**

* [Different string formats of the same date](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/linkedto/)
* [Y values on both sides](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/linkedto/)
*/
@property(nonatomic, readwrite) NSNumber *linkedTo;
/**
When using an alternate grid color, a band is painted across the plot area between every other grid line.

**Try it**

* [Alternate grid color on the Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/alternategridcolor/)
*/
@property(nonatomic, readwrite) HIColor *alternateGridColor;
/**
Applies only when the axis `type` is `category`. When `uniqueNames` is true, points are placed on the X axis according to their names. If the same point name is repeated in the same or another series, the point is placed on the same X position as other points of the same name. When `uniqueNames` is false, the points are laid out in increasing X positions regardless of their names, and the X axis category will take the name of the last point in each position.

**Defaults to** `true`.

**Try it**

* [True by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/uniquenames-true/)
* [False](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/uniquenames-false/)
*/
@property(nonatomic, readwrite) NSNumber /* Bool */ *uniqueNames;
/**
Event handlers for the axis.
*/
@property(nonatomic, readwrite) HIEvents *events;
/**
A class name that opens for styling the axis by CSS, especially in Highcharts styled mode. The class name is applied to group elements for the grid, axis elements and labels.

**Try it**

* [Multiple axes with separate styling](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis/)
*/
@property(nonatomic, readwrite) NSString *className;
/**
The amount of ticks to draw on the axis. This opens up for aligning the ticks of multiple charts or panes within a chart. This option overrides the `tickPixelInterval` option. This option only has an effect on linear axes. Datetime, logarithmic or category axes are not affected.

**Try it**

* [8 ticks on Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/tickamount/)
*/
@property(nonatomic, readwrite) NSNumber *tickAmount;
/**
Configure a crosshair that follows either the mouse pointer or the hovered point. In styled mode, the crosshairs are styled in the `.highcharts-crosshair`, `.highcharts-crosshair-thin` or `.highcharts-xaxis-category` classes.

**Defaults to** `false`.

**Try it**

* [Crosshair on both axes](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/xaxis/crosshair-both/)
*/
@property(nonatomic, readwrite) HICrosshair *crosshair;
/**
Width of the minor, secondary grid lines. In styled mode, the stroke width is given in the `.highcharts-grid-line` class.

**Try it**

* [2px lines from Y axis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minorgridlinewidth/)
* [Styled mode](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/axis-grid/)
*/
@property(nonatomic, readwrite) NSNumber *minorGridLineWidth;
/**
Specific tick interval in axis units for the minor ticks. On a linear axis, if `"auto"`, the minor tick interval is calculated as a fifth of the tickInterval. If `null` or `undefined`, minor ticks are not shown. On logarithmic axes, the unit is the power of the value. For example, setting the minorTickInterval to 1 puts one tick on each of 0.1, 1, 10, 100 etc. Setting the minorTickInterval to 0.1 produces 9 ticks between 1 and 10, 10 and 100 etc. If user settings dictate minor ticks to become too dense, they don't make sense, and will be ignored to prevent performance problems.

**Try it**

* [Null by default](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickinterval-null/)
* [5 units](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickinterval-5/)
* ["auto"](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickinterval-log-auto/)
* [0.1](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/yaxis/minortickinterval-log/)
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ minorTickInterval;
/**
If there are multiple axes on the same side of the chart, the pixel margin between the axes. Defaults to 0 on vertical axes, 15 on horizontal axes.
*/
@property(nonatomic, readwrite) NSNumber *margin;
/**
The left position as the horizontal axis. If it's a number, it is interpreted as pixel position relative to the chart. Since Highcharts v5.0.13: If it's a percentage string, it is interpreted as percentages of the plot width, offset from plot area left.
*/
@property(nonatomic, readwrite) id /* NSNumber, NSString */ left;

-(NSDictionary *)getParams;

/**
 Add a plot band after render time.
 
 **Try it**
 
 * [Toggle the plot band from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-addplotband/)
 
 @param options A configuration object for the plot band, as defined in [xAxis.plotBands](https://api.highcharts.com/highcharts/xAxis.plotBands).
 */
-(void)addPlotBand:(HIPlotBands *)options;

/**
 Add a plot line after render time.
 
 **Try it**
 
 * [Toggle the plot line from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-addplotline/)
 
 @param options A configuration object for the plot line, as defined in [xAxis.plotLines](https://api.highcharts.com/highcharts/xAxis.plotLines).
 */
-(void)addPlotLine:(HIPlotLines *)options;

/**
 Adds the title defined in axis.options.title.
 @param display Whether or not to display the title.
 */
-(void)addTitle:(NSNumber /* Bool */ *)display;

/**
 Internal function to draw a crosshair.
 
 **Fires:**
 
 * Highcharts.Axis#event:afterDrawCrosshair
 * Highcharts.Axis#event:drawCrosshair
 */
-(void)drawCrosshair;

/**
 Hide the crosshair if visible.
 */
-(void)hideCrosshair;

/**
 Remove the axis from the chart.
 
 **Try it**
 
 * [Add and remove axes](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/chart-addaxis/)
 */
-(void)remove;

/**
 Remove the axis from the chart.
 
 **Try it**
 
 * [Add and remove axes](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/chart-addaxis/)
 @param redraw Whether to redraw the chart following the remove.
 */
-(void)remove:(NSNumber /* Bool */ *)redraw;

/**
 Remove a plot band by its id.
 
 **Try it**
 
 * [Remove plot band by id](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-removeplotband/)
 * [Toggle the plot band from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-addplotband/)
 
 @param id The plot band's `id` as given in the original configuration object or in the `addPlotBand` option.
 */
-(void)removePlotBand:(NSString *)id;

/**
 Remove a plot line by its id.
 
 **Try it**
 
 * [Remove plot line by id](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-removeplotband/)
 * [Toggle the plot line from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-addplotline/)
 
 @param id The plot line's `id` as given in the original configuration object or in the `addPlotLine` option.
 */
-(void)removePlotLine:(NSString *)id;

/**
 Render the axis line. Called internally when rendering and redrawing the axis.
 */
-(void)renderLine;

/**
 Render a minor tick into the given position. If a minor tick already exists in this position, move it.
 @param pos The position in axis values.
 */
-(void)renderMinorTick:(NSNumber *)pos;

/**
 Render a major tick into the given position. If a tick already exists in this position, move it.
 @param pos The position in axis values.
 @param i The tick index.
 */
-(void)renderTick:(NSNumber *)pos index:(NSNumber *)i;

/**
 Set new axis categories and optionally redraw.
 
 **Try it**
 
 * [Set categories by click on a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setcategories/)
 
 @param categories The new categories.
 */
-(void)setAxisCategories:(NSArray<NSString *> *)categories;

/**
 Set new axis categories and optionally redraw.
 
 **Try it**
 
 * [Set categories by click on a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setcategories/)
 
 @param categories The new categories.
 @param redraw Whether to redraw the chart.
 */
-(void)setAxisCategories:(NSArray<NSString *> *)categories redraw:(NSNumber /* Bool */ *)redraw;

/**
 Set the minimum and maximum of the axes after render time. If the `startOnTick` and `endOnTick` options are true, the minimum and maximum values are rounded off to the nearest tick. To prevent this, these options can be set to false before calling setExtremes. Also, setExtremes will not allow a range lower than the `minRange` option, which by default is the range of five points.
 
 **Try it**
 
 * [Set extremes from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes/)
 * [Set extremes on a datetime axis](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-datetime/)
 * [Set extremes off ticks](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-off-ticks/)
 */
-(void)setExtremes;

/**
 Set the minimum and maximum of the axes after render time. If the `startOnTick` and `endOnTick` options are true, the minimum and maximum values are rounded off to the nearest tick. To prevent this, these options can be set to false before calling setExtremes. Also, setExtremes will not allow a range lower than the `minRange` option, which by default is the range of five points.
 
 **Try it**
 
 * [Set extremes from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes/)
 * [Set extremes on a datetime axis](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-datetime/)
 * [Set extremes off ticks](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-off-ticks/)
 
 @param newMin The new minimum value.
 */
-(void)setExtremes:(NSNumber *)newMin;

/**
 Set the minimum and maximum of the axes after render time. If the `startOnTick` and `endOnTick` options are true, the minimum and maximum values are rounded off to the nearest tick. To prevent this, these options can be set to false before calling setExtremes. Also, setExtremes will not allow a range lower than the `minRange` option, which by default is the range of five points.
 
 **Try it**
 
 * [Set extremes from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes/)
 * [Set extremes on a datetime axis](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-datetime/)
 * [Set extremes off ticks](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-off-ticks/)
 
 @param newMin The new minimum value.
 @param newMax The new maximum value.
 */
-(void)setExtremes:(NSNumber *)newMin newMax:(NSNumber *)newMax;

/**
 Set the minimum and maximum of the axes after render time. If the `startOnTick` and `endOnTick` options are true, the minimum and maximum values are rounded off to the nearest tick. To prevent this, these options can be set to false before calling setExtremes. Also, setExtremes will not allow a range lower than the `minRange` option, which by default is the range of five points.
 
 **Try it**
 
 * [Set extremes from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes/)
 * [Set extremes on a datetime axis](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-datetime/)
 * [Set extremes off ticks](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-off-ticks/)
 
 @param newMin The new minimum value.
 @param newMax The new maximum value.
 @param redraw Whether to redraw the chart or wait for an explicit call to [Highcharts.Chart#redraw](https://api.highcharts.com/class-reference/Highcharts.Chart.html#redraw)
 */
-(void)setExtremes:(NSNumber *)newMin newMax:(NSNumber *)newMax redraw:(NSNumber /* Bool */ *)redraw;

/**
 Set the minimum and maximum of the axes after render time. If the `startOnTick` and `endOnTick` options are true, the minimum and maximum values are rounded off to the nearest tick. To prevent this, these options can be set to false before calling setExtremes. Also, setExtremes will not allow a range lower than the `minRange` option, which by default is the range of five points.
 
 **Try it**
 
 * [Set extremes from a button](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes/)
 * [Set extremes on a datetime axis](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-datetime/)
 * [Set extremes off ticks](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-setextremes-off-ticks/)
 
 @param newMin The new minimum value.
 @param newMax The new maximum value.
 @param redraw Whether to redraw the chart or wait for an explicit call to [Highcharts.Chart#redraw](https://api.highcharts.com/class-reference/Highcharts.Chart.html#redraw)
 @param animation Enable or modify animations.
 */
-(void)setExtremes:(NSNumber *)newMin newMax:(NSNumber *)newMax redraw:(NSNumber /* Bool */ *)redraw animation:(HIAnimationOptionsObject *)animation;

/**
 Now we have computed the normalized tickInterval, get the tick positions
 
 **Fires:**
 
 * Highcharts.Axis#event:afterSetTickPositions
 */
-(void)setTickPositions;

/**
 Update the axis title by options after render time.
 
 **Try it**
 
 * [Set a new Y axis title](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-settitle/)
 
 @param title The additional title options.
 */
-(void)setAxisTitle:(HITitle *)title;

/**
 Update the axis title by options after render time.
 
 **Try it**
 
 * [Set a new Y axis title](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-settitle/)
 
 @param title The additional title options.
 @param redraw Whether to redraw the chart after setting the title.
 */
-(void)setAxisTitle:(HITitle *)title redraw:(NSNumber /* Bool */ *)redraw;

/**
 Update an axis object with a new set of options. The options are merged with the existing options, so only new or altered options need to be specified.
 
 **Try it**
 
 * [Axis update demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-update/)
 
 @param options The new options that will be merged in with existing options on the axis.
 */
-(void)update:(HIYAxis *)options;

/**
 Update an axis object with a new set of options. The options are merged with the existing options, so only new or altered options need to be specified.
 
 **Try it**
 
 * [Axis update demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/members/axis-update/)
 
 @param options The new options that will be merged in with existing options on the axis.
 @param redraw Whether to redraw the chart after the axis is altered. If doing more operations on the chart, it is a good idea to set redraw to false and call [Highcharts.Chart#redraw](https://api.highcharts.com/class-reference/Highcharts.Chart.html#redraw) after.
 */
-(void)update:(HIYAxis *)options redraw:(NSNumber /* Bool */ *)redraw;

@end
