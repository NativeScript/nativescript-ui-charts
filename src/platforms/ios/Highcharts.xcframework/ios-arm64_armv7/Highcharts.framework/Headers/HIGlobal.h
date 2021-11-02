/**
* (c) 2009-2020 Highsoft AS
*
* License: www.highcharts.com/license
* For commercial usage, a valid license is required. To purchase a license for Highcharts iOS, please see our website: https://shop.highsoft.com/
* In case of questions, please contact sales@highsoft.com
*/

#import "HIChartsJSONSerializable.h"


/**
 */
@interface HIGlobal: HIChartsJSONSerializable

/**
Path to the pattern image required by VML browsers in order to draw radial gradients.
*/
@property(nonatomic, readwrite) NSString *VMLRadialGradientURL;

-(NSDictionary *)getParams;

@end
