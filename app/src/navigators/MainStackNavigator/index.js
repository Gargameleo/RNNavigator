import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppTabNavigator from '../AppTabNavigator';
import AuthStackNavigator from '../AuthStackNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthStackNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="App" component={AppTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
