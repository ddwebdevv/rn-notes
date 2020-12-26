import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/redux/configureStore';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Notes'
    }
  }
);

const { persistor, store } = ConfigureStore();

const App = createAppContainer(navigator);

export default () => {
  return(
    <Provider store={store}>
      <PersistGate
              persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );   
};