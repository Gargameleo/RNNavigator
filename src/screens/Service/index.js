import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Service = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Service Page!</Text>
    </View>
  );
};

export default Service;
