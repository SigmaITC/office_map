import React from 'react';
import rooms from '../../rooms.json';
import { Button, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['roomName'];

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Office Map by Sigma'
    };

    constructor() {
        super();
        this.state = { searchTerm: ""};
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }

    render() {
        const filteredRooms = rooms.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        const { navigate } = this.props.navigation;
        return (
            <View>
                  <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Search room..."
                  />
                    <ScrollView style={styles.scrollViewContainer}>
                        {
                            filteredRooms.map((item, index) => (
                                <TouchableOpacity
                                    key={item.roomName}
                                    style={styles.container}
                                    onPress={() => navigate('Floor', { room: item })}>

                                    <Text style={styles.text}>
                                        Namn: {item.roomName}
                                    </Text>
                                    <Text style={styles.text}>
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

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        backgroundColor: '#ff6600',
        flex: 1
    },
    text: {
        color: '#000000'
    },
    scrollViewContainer:{
        marginBottom: 100
    },
    searchInput:{
      padding: 10,
      borderColor: 'blue',
      borderWidth: 1,
      paddingTop: 10,
      marginLeft: 20,
      marginRight: 20
    }
})
