export declare type HapticFeedbackType = 
  'impact' |
  'notification' |
  'selection' |
  'impactLight' |
  'impactMedium' |
  'impactHeavy' |
  'notificationError' |
  'notificationSuccess' |
  'notificationWarning';

declare const ReactNativeHaptic: {
  generate(type: HapticFeedbackType): void
}

export default ReactNativeHaptic;