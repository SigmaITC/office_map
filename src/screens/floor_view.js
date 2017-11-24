import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native'

export default class FloorView extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.room}`,
    });
    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <ScrollView contentContainerStyle={{ height: 1000 }}>
                    <ScrollView horizontal contentContainerStyle={{ width: 1100 }}>
                        <Image source={require('../../assets/images/floor_plans/gothenburg/lindholmen/floor_2.png')} />
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}