import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Camera = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Camera Page !</Text>
    </View>
  );
};

Camera.propTypes = {};
Camera.defaultProps = {};

export default Camera;
