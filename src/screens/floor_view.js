import React from 'react';
const gothenburg_floor_2 = require('../../assets/images/floor_plans/gothenburg/lindholmen/floor_2.png');
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native'

export default class FloorView extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Vån: ${navigation.state.params.room.floorNumber}, rum: ${navigation.state.params.room.roomNumber}`,
    });
    renderFloorPlan(office, floor) {
        let floor_image_source = null;
        if(office == 'Göteborg'){
            if(floor == '2'){
                floor_image_source = gothenburg_floor_2;
            }
        }
        if(floor_image_source){
            return (<Image source={floor_image_source} />);
        }
        else{
            return (<Text style={styles.text}>No map for that plan exists</Text>);
        }
       
    }

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ height: 1000 }}>
                    <ScrollView horizontal contentContainerStyle={{ width: 1100 }}>
                        {this.renderFloorPlan(params.room.city, params.room.floorNumber)}
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 22,
        paddingTop: 10
    }
});
