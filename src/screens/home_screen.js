import React from 'react';
import List from './List.js';
import rooms2 from '../../rooms2.json';
import OfficeMapSearchBar from './OfficeMapSearchBar.js'
import { Button, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'


export default class HomeScreen extends React.Component {
    state = {rooms2}
    static navigationOptions = {
        title: 'Office Map by Sigma'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <OfficeMapSearchBar />
                <ScrollView>
                    {
               this.state.rooms2.map((item, index) => (
                  <TouchableOpacity
                     key = {item.roomName}
                     style = {styles.container}
                     onPress={() => navigate('Floor', { room: item.roomName })}>

                     <Text style = {styles.text}>
                        Namn: {item.roomName}
                     </Text>
                     <Text style = {styles.text}>
                      Rum number: {item.roomNumber}
                     </Text>
                     <Text>
                      {item.noOfPeolple}pl
                     </Text>
                     <Text>
                      Description: {item.roomDescription}
                     </Text>
                  </TouchableOpacity>
               ))
            }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginLeft: 20,
       marginRight: 20,
       marginTop: 10,
       backgroundColor: '#ebebe0',
       alignItems: 'center',
    },
    text: {
       color: '#4f603c'
    }
 })