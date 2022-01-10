import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Switch } from 'react-native-paper';

import styles from './styles';

import { THEMES, useTheme } from '../../contexts/ThemeProvider';

const Home = ({ navigation }) => {
  const { container } = styles;

  const { theme, changeTheme } = useTheme();

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  useEffect(() => {
    const themeMode = isSwitchOn ? THEMES.Dark : THEMES.Light;
    changeTheme(themeMode);
  }, [changeTheme, isSwitchOn]);

  console.log(theme);

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
