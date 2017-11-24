import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home_screen'
import FloorScreen from '../screens/floor_view'

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Floor: { screen: FloorScreen },
  });

export default SimpleApp