
# react-native-haptic

## Install the package in your project directory

`$ npm install react-native-haptic --save`

#### Link the library to the XCode proj of your React Native project (ios -> "your_project.xcodeproj").

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `-react-native-haptic` and add `ReactNativeHaptic.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libReactNativeHaptic.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

## How to use
```javascript  
  import ReactNativeHaptic from 'react-native-haptic';
  
  <TouchableHighlight style={styles.wrapper} onPress={() => ReactNativeHaptic.generate('notification')}>
  ```
## Example
![alt tag](http://imgur.com/1eTeFeR.png)

I would suggest to run the example directly on your device, since chances are you won't feel the feedback in the simulator ;)
## Methods
```javascript
  /**
   * @static
   * @method prepare
   * @description Prepares the Taptic Engine (Awaken state). Usually used seconds before triggering a feedback.
   * This is optional, mostly used when the feedback needs to be synced with sound.
   *
   */
  
    static prepare() {
      ReactNativeHaptic.prepare();
    }
  
  /**
   * @static
   * @method Generate
   * @description Triggers haptic feedback of type :type
   * @param type Type of haptic feedback
   */

    static generate(type: 'impact' | 'notification' | 'selection' | 'impactLight' | 'impactMedium' | 'impactHeavy' | 'notificationError' | ' notificationSuccess' | 'notificationWarning') {
      ReactNativeHaptic.generate(type);
    }
  ```

