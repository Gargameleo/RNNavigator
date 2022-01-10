import React, { createContext, useContext, useState } from 'react';

import { defaultTheme, darkTheme } from '../../helpers/theme';

const ThemeContext = createContext();

export const THEMES = {
  Light: 'light',
  Dark: 'dark',
  Default: 'light',
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = (themeMode) => {
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

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
