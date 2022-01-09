import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

import styles from './styles';

const Home = ({ navigation }) => {
  const { container } = styles;

  return (
    <View style={container}>
      <Button
        title="Go to details page"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
