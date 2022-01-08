import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppTabNavigator from '../AppTabNavigator';

const Stack = createNativeStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AppTab" component={AppTabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
