import { SearchBar } from 'react-native-elements'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class OfficeMapSearchBar extends Component {
  render() {
     return (
        <View style = {styles.container}>
          <SearchBar
            placeholder='Search room...'
          />
        </View>
     )
  }
}

const styles = StyleSheet.create ({
   container: {
      paddingTop: 10,
      marginLeft: 20,
      marginRight: 20

   }
})

export default OfficeMapSearchBar;
