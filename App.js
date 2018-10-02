import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Bananas from './components/Bananas';
import BlinkingTextLabel from './components/BlinkingTextLabel';
import TextLabel from './components/TextLabel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{height: 85}} 
          placeholder="Type some text here!"
          onChangeText={(text) => this.setState({text})} />
        <View style={styles.title}>
          <TextLabel textStyle={styles.titleText} textString={this.state.text} />
        </View>
        <View style={styles.content}>
          <BlinkingTextLabel text='Bananas!!!' timeIntervalMs={1500} />
          <Bananas />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: 'powderblue',
    alignItems: 'center'
  },
  titleText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  },
  content: {
    flex: 5,
    alignItems: 'center'
  }
});
