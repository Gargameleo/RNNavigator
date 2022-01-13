import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Button } from 'react-native';

import { actions } from '../../store/actions/auth';

import styles from './styles';

const Profile = ({ navigation }) => {
  const { container } = styles;

  const dispatch = useDispatch();

  return (
    <View style={container}>
      <Button
        title="Logout"
        onPress={() => {
          console.log('logout button pressed');
          dispatch({ type: actions.LOGOUT });
        }}
      />
    </View>
  );
};

export default Profile;
