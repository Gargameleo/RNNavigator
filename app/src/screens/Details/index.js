import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const Details = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Details Page !</Text>
    </View>
  );
};

Details.propTypes = {};
Details.defaultProps = {};

export default Details;
