import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './styles';

const Profile = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Profile Page !</Text>
    </View>
  );
};

Profile.propTypes = {};
Profile.defaultProps = {};

export default Profile;
