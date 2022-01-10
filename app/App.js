/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import configStore from './src/store/configStore';
import MainStackNavigator from './src/navigators/MainStackNavigator';

const store = configStore();

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainStackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
