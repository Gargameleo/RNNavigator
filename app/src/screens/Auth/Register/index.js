import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Register = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Register Page !</Text>
    </View>
  );
};

Register.propTypes = {};
Register.defaultProps = {};

export default Register;
