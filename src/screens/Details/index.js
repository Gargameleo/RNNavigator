import React from 'react';
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

export default Details;
