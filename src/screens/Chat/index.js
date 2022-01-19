import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Chat = () => {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>Chat Page !</Text>
    </View>
  );
};

export default Chat;
