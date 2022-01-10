import React, { useEffect, useCallback } from 'react';
import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Switch } from 'react-native-paper';

import styles from './styles';

import { THEMES, useTheme } from '../../contexts/ThemeProvider';

const Home = ({ navigation }) => {
  const { container } = styles;

  const { theme, setThemeMode } = useTheme();

  const [isSwitchOn, setIsSwitchOn] = React.useState(theme.dark);

  useEffect(() => {
    setAppTheme(isSwitchOn ? THEMES.Dark : THEMES.Light);
  }, [isSwitchOn, setAppTheme]);

  const setAppTheme = useCallback(
    async (themeMode) => {
      try {
        await AsyncStorage.setItem('themeMode', themeMode);
        setThemeMode(themeMode);
      } catch (e) {}
    },
    [setThemeMode],
  );

  return (
    <View style={[container, { backgroundColor: theme.backgroundColor }]}>
      <Button
        title="Go to details page"
        onPress={() => {
          navigation.navigate('details');
        }}
      />
      <Switch value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} />
      <Text>{theme.dark.toString()}</Text>
    </View>
  );
};

export default Home;
