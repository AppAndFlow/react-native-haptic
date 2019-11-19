
import { NativeModules, Platform, Vibration } from 'react-native';

class ReactNativeHaptic {
    static generate = (type = 'selection') => {
        if (Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 10) {
            NativeModules.ReactNativeHaptic.generate(type)
        } else {
            if (Platform.OS === "android") {
                switch (type) {
                    case "selection":
                        Vibration.vibrate(22)
                        break;
                    case "impactLight":
                        Vibration.vibrate(25)
                        break;
                    case "impactMedium":
                        Vibration.vibrate(30)
                        break;
                    case "impactHeavy":
                        Vibration.vibrate(35)
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
            } else if (Platform.OS === "ios") {
                Vibration.vibrate()
            }
        }
    }
}

export default ReactNativeHaptic;
