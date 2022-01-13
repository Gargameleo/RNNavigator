import React from 'react';
// import { useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

// import { LOGIN } from '../../../store/constants/auth';

import styles from './styles';

const Login = ({ navigation }) => {
  const { container } = styles;

  // const dispatch = useDispatch();

  // const userInfo = {
  //   username: 'leo',
  //   token: 'token xxx',
  // };

  return (
    <View style={container}>
      <Button
        testID="login-btn"
        onPress={() => {
          console.log('login button pressed!');
          navigation.navigate('app-tabs');
          // dispatch({ type: LOGIN, payload: userInfo });
        }}>
        Login
      </Button>
      <Text>Login</Text>
      <Button
        onPress={() => {
          console.log('login button pressed!');
          navigation.navigate('register');
        }}>
        Sign Up
      </Button>
      <Button
        onPress={() => {
          console.log('login button pressed!');
          navigation.navigate('forget');
        }}>
        Forget Password
      </Button>
      <Button
        onPress={() => {
          console.log('login button pressed!');
          navigation.navigate('reset');
        }}>
        Reset Password
      </Button>
    </View>
  );
};

export default Login;
