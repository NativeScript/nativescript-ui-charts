/**
* (c) 2009-2020 Highsoft AS
*
* License: www.highcharts.com/license
* For commercial usage, a valid license is required. To purchase a license for Highcharts iOS, please see our website: https://shop.highsoft.com/
* In case of questions, please contact sales@highsoft.com
*/

#import "HIChartsJSONSerializable.h"
#import "HIColor.h"


/**
Options for annotation's shapes. Each shape inherits options from the shapeOptions object. An option from the shapeOptions can be overwritten by config for a specific shape.
*/
@interface HIShapeOptions: HIChartsJSONSerializable

/**
The URL for an image to use as the annotation shape. Note, type has to be set to `'image'`.

**Try it**

* [Define a marker image url for annotations](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape-src/)
*/
@property(nonatomic, readwrite) NSString *src;
/**
Name of the dash style to use for the shape's stroke.

**Try it**

* [Possible values demonstrated](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-dashstyle-all/)
*/
@property(nonatomic, readwrite) NSString *dashStyle;
/**
The pixel stroke width of the shape.

**Try it**

* [Basic shape annotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape/)
*/
@property(nonatomic, readwrite) NSNumber *strokeWidth;
/**
The height of the shape.

**Try it**

* [Basic shape annotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape/)
*/
@property(nonatomic, readwrite) NSNumber *height;
/**
The width of the shape.

**Try it**

* [Basic shape annotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape/)
*/
@property(nonatomic, readwrite) NSNumber *width;
/**
The color of the shape's stroke.

**Try it**

* [Basic shape annotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape/)
*/
@property(nonatomic, readwrite) HIColor *stroke;
/**
The radius of the shape.

**Try it**

* [Basic shape annotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape/)
*/
@property(nonatomic, readwrite) NSNumber *r;
/**
Defines additional snapping area around an annotation making this annotation to focus. Defined in pixels.
*/
@property(nonatomic, readwrite) NSNumber *snap;
/**
The type of the shape, e.g. circle or rectangle.

**Defaults to** `rect`.

**Try it**

* [Basic shape annotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape/)
*/
@property(nonatomic, readwrite) NSString *type;
/**
The color of the shape's fill.

**Try it**

* [Basic shape annotation](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/annotations/shape/)
*/
@property(nonatomic, readwrite) HIColor *fill;

-(NSDictionary *)getParams;

@end
