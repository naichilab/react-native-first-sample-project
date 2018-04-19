import React, {Component} from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View
} from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Davin1'},
                        {key: 'naichi1'},
                        {key: 'Davin2'},
                        {key: 'naichi2'},
                        {key: 'Davin3'},
                        {key: 'naichi3'},
                        {key: 'Davin4'},
                        {key: 'naichi4'},
                        {key: 'Davin5'},
                        {key: 'naichi5'},
                        {key: 'Davin6'},
                        {key: 'naichi6'},
                        {key: 'Davin7'},
                        {key: 'naichi7'},
                        {key: 'Davin8'},
                        {key: 'naichi8'},
                        {key: 'Davin9'},
                        {key: 'naichi9'},
                        {key: 'Davin0'},
                        {key: 'naich0i'},
                        {key: 'Davin11'},
                        {key: 'naichi11'},
                        {key: 'Davin12'},
                        {key: 'naichi12'},
                        {key: 'Davin13'},
                        {key: 'naichi13'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})