import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TextLabel extends Component {
  render() {
    return (
        <Text>{this.props.textString}</Text>
    );
  }
}