import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class List extends Component {
   state = {
      rooms: [
         {
            id: 0,
            room: 'Ben',
         },
         {
            id: 1,
            room: 'Susan',
         },
         {
            id: 2,
            room: 'Robert',
         },
         {
            id: 3,
            room: 'Mary',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.room)
   }
   render() {
      return (
         <View>
            {
               this.state.rooms.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>

                     <Text style = {styles.text}>
                        {item.room}
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
