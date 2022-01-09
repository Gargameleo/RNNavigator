import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Reset = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Reset Password !</Text>
    </View>
  );
};

Reset.propTypes = {};
Reset.defaultProps = {};

export default Reset;
