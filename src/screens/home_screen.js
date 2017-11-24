import React from 'react';
import List from './List.js';
import OfficeMapSearchBar from './OfficeMapSearchBar.js'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Office Map by Sigma'
    };
    render() {
        return (
            <View>
                <OfficeMapSearchBar />
                <ScrollView>
                    <List />
                </ScrollView>
            </View>
        )
    }
}