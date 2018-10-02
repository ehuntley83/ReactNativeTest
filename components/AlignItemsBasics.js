import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'stretch',

      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <View style={{flex: 1, backgroundColor: 'red'}}><Text>Button 1</Text></View>
          <View style={{flex: 1, backgroundColor: 'pink'}}><Text>Button 2</Text></View>
        </View>
        <View style={{flex: 4, backgroundColor: 'skyblue'}} />
        <View style={{flex: 6, backgroundColor: 'steelblue'}} />
        <View style={{flex: 1, textAlign: 'center', textTransform: 'uppercase', backgroundColor: 'lightgrey'}}><Text>Submit</Text></View>
      </View>
    );
  }
};
