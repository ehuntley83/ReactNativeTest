import React from 'react';
import { StyleSheet, View } from 'react-native';
import Bananas from './components/Bananas';
import BlinkingTextLabel from './components/BlinkingTextLabel';
import TextLabel from './components/TextLabel';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextLabel textString='-=< React Native tests >=-' />
        <BlinkingTextLabel text='Bananas!!!' timeIntervalMs={1500} />
        <Bananas />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
