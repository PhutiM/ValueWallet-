import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import HomeScreen from './Sign-up'
import DetailsScreen from './Sign-in'
import LandingScreen from './Airtime'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Landing: {
      screen: LandingScreen,
    },
  },
  {
    headerMode: 'none',
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

 class App extends React.Component {
  render() {
    return <AppContainer/>;
  } 
}

export default App