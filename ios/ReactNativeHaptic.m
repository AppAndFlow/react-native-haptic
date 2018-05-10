/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "ReactNativeHaptic.h"
#import <UIKit/UIKit.h>
#import <AudioToolbox/AudioServices.h>
#import <sys/utsname.h>

NSString* deviceName()
{
  struct utsname systemInfo;
  uname(&systemInfo);
  
  return [NSString stringWithCString:systemInfo.machine
                            encoding:NSUTF8StringEncoding];
}

@implementation ReactNativeHaptic

{
  UIImpactFeedbackGenerator *_impactFeedback;
  UINotificationFeedbackGenerator *_notificationFeedback;
  UISelectionFeedbackGenerator *_selectionFeedback;
}

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()

- (void)setBridge:(RCTBridge *)bridge
{
  _bridge = bridge;
  if ([UIFeedbackGenerator class]) {
    _impactFeedback = [UIImpactFeedbackGenerator new];
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
  if ([type isEqual: @"impact"]) {
    [_impactFeedback impactOccurred];
  } else if ([type isEqual:@"notification"]) {
    [_notificationFeedback notificationOccurred:UINotificationFeedbackTypeWarning];
  } else if ([type isEqual:@"selection"]) {
    [_selectionFeedback selectionChanged];
  }
}

RCT_EXPORT_METHOD(prepare)
{
  // Only calling prepare on one generator, it's sole purpose is to awake the taptic engine
  [_impactFeedback prepare];
}

#pragma mark - Private

- (BOOL)needsAlternativeHaptic {
  NSArray *devices = @[@"iPhone8,1", @"iPhone8,2"]; // only needed for iPhone 6s and 6s+
  return [devices containsObject:deviceName()];
}

- (BOOL)activatedAlternativeHapticForType:(NSString *)type {
  if([self needsAlternativeHaptic]){
    if ([type isEqual: @"impact"]) {
      AudioServicesPlaySystemSound((SystemSoundID) 1520);
    } else if ([type isEqual:@"notification"]) {
      AudioServicesPlaySystemSound((SystemSoundID) 1521);
    } else if ([type isEqual:@"selection"]) {
      AudioServicesPlaySystemSound((SystemSoundID) 1519);
    }
    return YES;
  }
  return NO;
}

@end

