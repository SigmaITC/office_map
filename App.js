import React from 'react';
import List from './List.js';
import OfficeMapSearchBar from './OfficeMapSearchBar.js'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const App = () => {
   return (
      <View>
      <OfficeMapSearchBar/>
      <ScrollView>
      <List />
      </ScrollView>
      </View>
   )
}

export default App;
