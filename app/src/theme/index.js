import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const appDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
  },
};

export const appDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    text: '#fff',
  },
};
