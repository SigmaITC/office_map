import React from 'react';
import { Text, View } from 'react-native'

export default class FloorView extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });
    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Looking at {params.room}</Text>
            </View>
        );
    }
}