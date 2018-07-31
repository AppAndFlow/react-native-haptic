#import "ReactNativeHaptic.h"
#import <UIKit/UIKit.h>
#import <AudioToolbox/AudioServices.h>
#import <sys/utsname.h>

#pragma mark - Notification Types

// Deprecated names (including these to avoid breaking changes)
static NSString * const HAPTIC_DEPRECATED_IMPACT = @"impact";
static NSString * const HAPTIC_DEPRECATED_NOTIFICATION = @"notification";

static NSString * const HAPTIC_IMPACT_LIGHT = @"impactLight";
static NSString * const HAPTIC_IMPACT_MEDIUM = @"impactMedium";
static NSString * const HAPTIC_IMPACT_HEAVY = @"impactHeavy";

static NSString * const HAPTIC_NOTIFICATION_ERROR = @"notificationError";
static NSString * const HAPTIC_NOTIFICATION_SUCCESS = @"notificationSuccess";
static NSString * const HAPTIC_NOTIFICATION_WARNING = @"notificationWarning";

static NSString * const HAPTIC_SELECTION = @"selection";

NSString* deviceName()
{
  static NSString *deviceName;
  if (deviceName == nil) {
    struct utsname systemInfo;
    uname(&systemInfo);

    deviceName = [NSString stringWithCString:systemInfo.machine
                                    encoding:NSUTF8StringEncoding];
  }
  return deviceName;
}

@implementation ReactNativeHaptic

{
  UIImpactFeedbackGenerator *_impactFeedbackHeavy;
  UIImpactFeedbackGenerator *_impactFeedbackMedium;
  UIImpactFeedbackGenerator *_impactFeedbackLight;

  UINotificationFeedbackGenerator *_notificationFeedback;

  UISelectionFeedbackGenerator *_selectionFeedback;
}

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()

- (void)setBridge:(RCTBridge *)bridge
{
  _bridge = bridge;
  if ([UIFeedbackGenerator class]) {
    _impactFeedbackHeavy = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleHeavy];
    _impactFeedbackMedium = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleMedium];
    _impactFeedbackLight = [[UIImpactFeedbackGenerator alloc] initWithStyle:UIImpactFeedbackStyleLight];

    _notificationFeedback = [UINotificationFeedbackGenerator new];

    _selectionFeedback = [UISelectionFeedbackGenerator new];
  }
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(generate:(NSString *)type)
{
  if([self activatedAlternativeHapticForType:type]){
    return;
  }

  // Impact notifications
  if ([type isEqualToString:HAPTIC_IMPACT_HEAVY]) {
    [_impactFeedbackHeavy impactOccurred];
  } else if ([type isEqualToString:HAPTIC_IMPACT_MEDIUM]) {
    [_impactFeedbackMedium impactOccurred];
  } else if ([type isEqualToString:HAPTIC_IMPACT_LIGHT]) {
    [_impactFeedbackLight impactOccurred];
  }

  else if ([type isEqualToString:HAPTIC_NOTIFICATION_ERROR]) {
    [_notificationFeedback notificationOccurred:UINotificationFeedbackTypeError];
  } else if ([type isEqualToString:HAPTIC_NOTIFICATION_WARNING]) {
    [_notificationFeedback notificationOccurred:UINotificationFeedbackTypeWarning];
  } else if ([type isEqualToString:HAPTIC_NOTIFICATION_SUCCESS]) {
    [_notificationFeedback notificationOccurred:UINotificationFeedbackTypeSuccess];
  }

  else if ([type isEqualToString:HAPTIC_SELECTION]) {
    [_selectionFeedback selectionChanged];
  }

  else if ([type isEqualToString:HAPTIC_DEPRECATED_IMPACT]) {
    [_impactFeedbackMedium impactOccurred];
  } else if ([type isEqualToString:HAPTIC_DEPRECATED_NOTIFICATION]) {
    [_notificationFeedback notificationOccurred:UINotificationFeedbackTypeWarning];
  }
}

RCT_EXPORT_METHOD(prepare)
{
  // Only calling prepare on one generator, it's sole purpose is to awake the taptic engine
  [_impactFeedbackMedium prepare];
}

#pragma mark - Private

- (BOOL)needsAlternativeHaptic {
  NSArray *devices = @[@"iPhone8,1", @"iPhone8,2"]; // only needed for iPhone 6s and 6s+
  return [devices containsObject:deviceName()];
}

- (BOOL)activatedAlternativeHapticForType:(NSString *)type {
  // TODO: add support for all haptic styles?
  if([self needsAlternativeHaptic]){
    if (type == HAPTIC_DEPRECATED_IMPACT) {
      AudioServicesPlaySystemSound((SystemSoundID) 1520);
    } else if (type == HAPTIC_DEPRECATED_NOTIFICATION) {
      AudioServicesPlaySystemSound((SystemSoundID) 1521);
    } else if (type == HAPTIC_SELECTION) {
      AudioServicesPlaySystemSound((SystemSoundID) 1519);
    }
    return YES;
  }
  return NO;
}

@end

