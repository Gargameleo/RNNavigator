/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppStackNavigator from './src/navigators/AppStackNavigator';

const App: () => Node = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
