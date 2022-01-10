import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppTabNavigator from '../AppTabNavigator';

import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import Forget from '../../screens/Auth/Forget';
import Reset from '../../screens/Auth/Reset';

import Details from '../../screens/Details';

import { appDefaultTheme, appDarkTheme } from '../../theme';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <NavigationContainer theme={appDarkTheme}>
      <Stack.Navigator>
        {token ? (
          <>
            <Stack.Screen name="app-tabs" component={AppTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="details" component={Details} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="login"
              component={Login}
              options={{ headerShown: false, animationTypeForReplace: token ? 'push' : 'pop' }}
            />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="forget" component={Forget} />
            <Stack.Screen name="reset" component={Reset} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
