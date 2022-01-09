import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';

import styles from './styles';

const Login = () => {
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
          dispatch({ type: 'LOGIN', payload: userInfo });
        }}
      />
    </View>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
