import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';

import { LOGOUT } from '../../store/constants/auth';

import styles from './styles';

const Profile = () => {
  const { container } = styles;

  const dispatch = useDispatch();

  return (
    <View style={container}>
      <Button
        title="Logout"
        onPress={() => {
          console.log('logout button pressed');
          dispatch({ type: LOGOUT });
        }}
      />
    </View>
  );
};

Profile.propTypes = {};
Profile.defaultProps = {};

export default Profile;
