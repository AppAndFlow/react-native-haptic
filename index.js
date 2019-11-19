
import { NativeModules, Platform, Vibration } from 'react-native';

class ReactNativeHaptic {
    // default type is 'selection' if no parameter is given
    static generate = (type = 'selection') => {
        // checking if ios is greater than or equal to 10.0 (to utilize haptic engine)
        if (Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 10) {
            NativeModules.ReactNativeHaptic.generate(type)
        } else {
            // if platform is android, comparable vibration patterns based on type
            if (Platform.OS === "android") {
                switch (type) {
                    case "selection":
                        Vibration.vibrate(22)
                        break;
                    case "impactLight":
                        Vibration.vibrate(30)
                        break;
                    case "impactMedium":
                        Vibration.vibrate(40)
                        break;
                    case "impactHeavy":
                        Vibration.vibrate(50)
                        break;
                    case "notification":
                        Vibration.vibrate([10, 40, 60, 30])
                        break;
                    case "notificationSuccess":
                        Vibration.vibrate([10, 75, 100, 40])
                        break;
                    case "notificationWarning":
                        Vibration.vibrate([10, 30, 80, 40, 80, 50])
                        break;
                    case "notificationError":
                        Vibration.vibrate([10, 40, 80, 30, 80, 50])
                        break;
                    default:
                        Vibration.vibrate(22)
                        break;
                }
                // vibration fallback for ios lower than 10.0
            } else if (Platform.OS === "ios" && parseInt(Platform.Version, 10) < 10) {
                Vibration.vibrate()
            }
        }
    }
}

export default ReactNativeHaptic;
