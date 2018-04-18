import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View, Button, Alert} from 'react-native';

export default class ButtonDemo extends Component {
    render() {
        return (
            <View style={{padding: 10}}>
                <Button
                    color="green"
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    title="Press Me"
                />

            </View>
        );
    }
}