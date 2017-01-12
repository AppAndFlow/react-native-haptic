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
          onPress={() => ReactNativeHaptic.generate('impact')}>
            <View style={styles.button}>
              <Text>Impact Feedback</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('notification')}>
            <View style={styles.button}>
              <Text>Notification Feedback</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => ReactNativeHaptic.generate('selection')}>
            <View style={styles.button}>
              <Text>Selection Changed Feedback</Text>
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
