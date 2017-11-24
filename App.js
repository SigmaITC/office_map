import React from 'react';
import AppNavigation from './src/navigation/AppNavigation'
import { Platform, View,StyleSheet } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <AppNavigation />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
      },
      android: {
        paddingTop:20
      },
    }),
  },
});
