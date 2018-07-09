'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  AppRegistry,
} = ReactNative;

import ReactNativeHaptic from 'react-native-haptic';

class Example extends React.Component {
  render(){
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.wrapper}>
            <TouchableHighlight
            style={styles.wrapper}
            onPress={() => ReactNativeHaptic.prepare()}>
              <View style={styles.button}>
                <Text>Prepare Taptic Engine for Haptic Feedback</Text>
              </View>
            </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('impactHeavy')}>
            <View style={styles.button}>
              <Text>Impact Heavy</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('impactMedium')}>
            <View style={styles.button}>
              <Text>Impact Medium</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('impactLight')}>
            <View style={styles.button}>
              <Text>Impact Light</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('notificationWarning')}>
            <View style={styles.button}>
              <Text>Notification Warning</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('notificationError')}>
            <View style={styles.button}>
              <Text>Notification Error</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('notificationSuccess')}>
            <View style={styles.button}>
              <Text>Notification Success</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('selection')}>
            <View style={styles.button}>
              <Text>Selection Changed</Text>
            </View>
          </TouchableHighlight>
      </View>
    </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems:'center',
    flex: 1,
  },
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

AppRegistry.registerComponent('Example', () => Example);
