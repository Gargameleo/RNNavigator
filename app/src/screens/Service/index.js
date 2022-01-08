import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Service = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Service Page!</Text>
    </View>
  );
};

Service.propTypes = {};
Service.defaultProps = {};

export default Service;
