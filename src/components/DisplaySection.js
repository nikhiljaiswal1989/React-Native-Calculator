import React from 'react';
import { View, Text } from 'react-native';

const DisplaySection = (props) => {
    const { displayContainerStyle, displayText } = styles;
    return (
        <View style={displayContainerStyle}>
            <Text style={displayText}>{props.displayresult}</Text>
            <Text style={displayText}>{props.displayText}</Text>
        </View>
    );
};

const styles = {
    displayContainerStyle: {
        borderBottomWidth: 1,
        padding: 8,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderColor: '#ddd',
    },
    displayText: {
        fontSize: 32,
        color: '#000',
    }
};

export { DisplaySection };
