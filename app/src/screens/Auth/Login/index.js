import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Login = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Login Page !</Text>
    </View>
  );
};

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
