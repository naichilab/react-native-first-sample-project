import React, {Component} from 'react';
import {
    AppRegistry, ScrollView, Image, Text
} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView minimumZoomScale={0.2} maximumZoomScale={100}>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>SIf you like</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>SIf you like</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>SIf you like</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>SIf you like</Text>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Image source={require('./img/favicon.png')}/>
                <Text style={{fontSize: 96}}>SIf you like</Text>
            </ScrollView>
        );
    }
}
