import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TextLabel extends Component {
  render() {
    return (
      <Text style={this.props.textStyle}>{this.props.textString}</Text>
    );
  }
}