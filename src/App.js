import React, {Component} from 'react';

import IntroScreenReduxApi from './screens/IntroNameScreenReduxApi';
import IntroAgeScreen_3Api from './screens/IntroAgeScreenReduxApi';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import configureStore from './store/store';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
        <NavigationContainer>
          <Stack.Navigator>


          <Stack.Screen
              name="IntroNameScreenReduxClassApi"
              component={IntroScreenReduxApi}
              options={{
                headerShown: false,

              }}
            />

             <Stack.Screen
              name="IntroAgeScreen_3Api"
              component={IntroAgeScreen_3Api}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
