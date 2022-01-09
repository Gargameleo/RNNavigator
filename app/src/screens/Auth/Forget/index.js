import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Forget = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Forget Password Page !</Text>
    </View>
  );
};

Forget.propTypes = {};
Forget.defaultProps = {};

export default Forget;
