import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { actions } from '../../../store/actions/auth';

import styles from './styles';

const Login = ({ navigation }) => {
  const { container } = styles;

  const dispatch = useDispatch();

  const userInfo = {
    username: 'leo',
    token: 'token xxx',
  };

  return (
    <View style={container}>
      <Button
        testID="login-btn"
        onPress={() => {
          console.log('Login button pressed!');
          dispatch({ type: actions.LOGIN, payload: userInfo });
        }}>
        Login
      </Button>
      <Button
        testID="register-btn"
        onPress={() => {
          console.log('Sign Up button pressed!');
          navigation.navigate('register');
        }}>
        Sign Up
      </Button>
      <Button
        onPress={() => {
          console.log('Forget button pressed!');
          navigation.navigate('forget');
        }}>
        Forget Password
      </Button>
      <Button
        onPress={() => {
          console.log('Reset button pressed!');
          navigation.navigate('reset');
        }}>
        Reset Password
      </Button>
    </View>
  );
};

export default Login;
