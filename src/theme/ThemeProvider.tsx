import React, { useCallback, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

import { darkTheme, lightTheme } from './theme';

export const ThemeContext = React.createContext(lightTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = Appearance.getColorScheme();

  const [theme, setTheme] = useState(colorScheme);

  const themeChangeListener = useCallback(() => {
    setTheme(Appearance.getColorScheme());
  }, []);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(themeChangeListener);
    return () => subscription.remove();
  }, [themeChangeListener]);

  return (
    <ThemeContext.Provider value={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
