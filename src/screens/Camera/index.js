import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Camera = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Camera Page !</Text>
    </View>
  );
};

export default Camera;
