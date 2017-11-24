import React, { Component } from 'react'
import rooms2 from '../../rooms2.json';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
   state = {rooms2}
   alertItemName = (item) => {
      alert(item.roomName)
   }
   render() {
      return (
         <View>
            {
               this.state.rooms2.map((item, index) => (
                  <TouchableOpacity
                     key = {item.roomName}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>

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
         </View>
      )
   }
}

export default List

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
