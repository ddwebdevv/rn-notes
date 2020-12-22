import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import { Provider } from './src/context/NotesContext';

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Notes'
    }
  }
);


const App = createAppContainer(navigator);

export default () => {
  return(
    <Provider>
      <App />
    </Provider>
  );   
};