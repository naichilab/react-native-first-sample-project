import React, {Component} from 'react';
import {AppRegistry, Image} from 'react-native';

export default class Naichi extends Component {
    render() {
        let pic = {
            uri: 'https://pbs.twimg.com/profile_images/922160532580327424/MTtqKRGm_400x400.jpg'
        };
        return (
            <Image source={pic} style={{width: 120, height: 120}}/>
        );
    }
}
