import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Home = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Home Page !</Text>
    </View>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
