import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import Forget from '../../screens/Auth/Forget';
import Reset from '../../screens/Auth/Reset';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="forget" component={Forget} />
      <Stack.Screen name="reset" component={Reset} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
