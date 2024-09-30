import React, {useEffect, useState, useCallback, useColorScheme} from 'react';
import {Appearance} from 'react-native';
import {light, dark} from './theme';

export const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  const colorScheme = Appearance.getColorScheme();
  // const [theme, setTheme] = useState(colorScheme);

  // const themeChangeListener = useCallback(() => {
  //   setTheme(Appearance.getColorScheme());
  // }, []);

  // useEffect(() => {
  //   Appearance.addChangeListener(themeChangeListener);
  //   return () => Appearance.removeChangeListener(themeChangeListener);
  // }, [themeChangeListener]);

  return (
    <ThemeContext.Provider value={colorScheme === 'dark' ? dark : light}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
