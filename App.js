import React from 'react';
import List from './List.js';
import OfficeMapSearchBar from './OfficeMapSearchBar.js'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const App = () => {
   return (
      <View>
      <OfficeMapSearchBar/>
      <List />
      </View>
   )
}

export default App;
