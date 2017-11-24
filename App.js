import React from 'react';
import {SearchBar} from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder='SearcdjhSDFJKHsdh room...'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    justifyContent: 'center',
  },
});
