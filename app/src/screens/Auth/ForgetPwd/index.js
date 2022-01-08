import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Component = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Component !</Text>
    </View>
  );
};

Component.propTypes = {};
Component.defaultProps = {};

export default Component;
