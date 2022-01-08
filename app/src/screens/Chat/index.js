import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Chat = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Chat Page !</Text>
    </View>
  );
};

Chat.propTypes = {};
Chat.defaultProps = {};

export default Chat;
