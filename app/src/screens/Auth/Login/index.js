import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';

import { LOGIN } from '../../../store/constants/auth';

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
        title="Login"
        onPress={() => {
          console.log('login button pressed!');
          dispatch({ type: LOGIN, payload: userInfo });
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          console.log('login button pressed!');
          navigation.navigate('register');
        }}
      />
      <Button
        title="Forget Password"
        onPress={() => {
          console.log('login button pressed!');
          navigation.navigate('forget');
        }}
      />
      <Button
        title="Reset Password"
        onPress={() => {
          console.log('login button pressed!');
          navigation.navigate('reset');
        }}
      />
    </View>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
