import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellWidth: 0,
        };
    }
    render() {
        return <View
            onLayout={event => {
                const width = event.nativeEvent.layout.width;
                if (this.state.cellWidth !== width) {
                    this.setState({ cellWidth: width });
                }
            } }>
            <TouchableOpacity
                style={{
                    width: this.state.cellWidth,
                    height: this.props.height,
                    justifyContent: 'center'
                }}
                onPress={this.props.onPress}>
                <Text
                    style={{ textAlign: 'center', fontSize: 24, color: '#fff' }}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        </View>
    }
}
export { Button };
