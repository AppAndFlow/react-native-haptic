
# -react-native-haptic

## Getting started

`$ npm install -react-native-haptic --save`

### Mostly automatic installation

`$ react-native link -react-native-haptic`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `-react-native-haptic` and add `ReactNativeHaptic.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libReactNativeHaptic.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.ReactNativeHapticPackage;` to the imports at the top of the file
  - Add `new ReactNativeHapticPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':-react-native-haptic'
  	project(':-react-native-haptic').projectDir = new File(rootProject.projectDir, 	'../node_modules/-react-native-haptic/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':-react-native-haptic')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `ReactNativeHaptic.sln` in `node_modules/-react-native-haptic/windows/ReactNativeHaptic.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.ReactNativeHaptic;` to the usings at the top of the file
  - Add `new ReactNativeHapticPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import ReactNativeHaptic from '-react-native-haptic';

// TODO: What do with the module?
ReactNativeHaptic;
```
  