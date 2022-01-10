import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Reset = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Reset Password !</Text>
    </View>
  );
};

export default Reset;
