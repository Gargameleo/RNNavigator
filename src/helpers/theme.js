import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

export const defaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
  },
};

export const darkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
  },
};
