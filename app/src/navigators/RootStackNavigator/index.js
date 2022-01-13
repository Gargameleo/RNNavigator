import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

// App main tab navigation
import AppTabNavigator from '../AppTabNavigator';
// Authentication relatives pages
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import Forget from '../../screens/Auth/Forget';
import Reset from '../../screens/Auth/Reset';
// App relative pages
import Details from '../../screens/Details';
import { useTheme } from '../../contexts/ThemeProvider';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const { token } = useSelector((state) => state.auth);
  const { theme } = useTheme();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
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
    </PaperProvider>
  );
};

export default RootStackNavigator;
