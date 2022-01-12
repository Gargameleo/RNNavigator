import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { defaultTheme, darkTheme } from '../../helpers/theme';

const ThemeContext = createContext();

export const THEMES = {
  Light: 'light',
  Dark: 'dark',
  Default: 'light',
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  // useEffect(() => {
  //   getThemeMode();
  // }, [getThemeMode]);

  // const getThemeMode = useCallback(async () => {
  //   try {
  //     const themeMode = await AsyncStorage.getItem('themeMode');
  //     setThemeMode(themeMode);
  //   } catch (e) {}
  // }, []);

  const setThemeMode = (themeMode) => {
    switch (themeMode) {
      case THEMES.Light:
        setTheme(defaultTheme);
        break;
      case THEMES.Dark:
        setTheme(darkTheme);
        break;
      // case other theme modes
      default:
        setTheme(defaultTheme);
    }
  };

  return <ThemeContext.Provider value={{ theme, setThemeMode }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
