import React, { Component } from 'react';
import { Text } from 'react-native';

export default class BlinkingTextLabel extends Component {
    constructor(props) {
        super(props);

        this.state = { isShowingText: true };

        // Toggle the state every time interval
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, props.timeIntervalMs);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';

        return (
            <Text>{display}</Text>
        );
    }
}