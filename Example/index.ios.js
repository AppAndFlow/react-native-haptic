'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  HapticFeedbackIOS,
  AppRegistry,
} = ReactNative;

import HapticFeedbackIOS from 'react-native-haptic';

class Example extends Component {
  render(){
    return (
      <View style={styles.wrapper}>
          <TouchableHighlight
          style={styles.wrapper}
          onPress={() => HapticFeedbackIOS.prepare()}>
            <View style={styles.button}>
              <Text>Prepare Taptic Engine for Haptic Feedback</Text>
            </View>
          </TouchableHighlight>

        <TouchableHighlight
        style={styles.wrapper}
        onPress={() => HapticFeedbackIOS.generate('impact')}>
          <View style={styles.button}>
            <Text>Impact Feedback</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
        style={styles.wrapper}
        onPress={() => HapticFeedbackIOS.generate('notification')}>
          <View style={styles.button}>
            <Text>Notification Feedback</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
        style={styles.wrapper}
        onPress={() => HapticFeedbackIOS.generate('selection')}>
          <View style={styles.button}>
            <Text>Selection Changed Feedback</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

AppRegistry.registerComponent('Example', () => Example);
