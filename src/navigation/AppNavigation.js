import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home_screen'

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen }
  });

export default SimpleApp