import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home';
import Service from '../../screens/Service';
import Camera from '../../screens/Camera';
import Chat from '../../screens/Chat';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="service" component={Service} />
      <Tab.Screen name="camera" component={Camera} />
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppTabNavigator;
