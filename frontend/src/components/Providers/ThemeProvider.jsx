import { useLayoutEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/index';

const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

const ThemeProvider = ({ children }) => {
  console.log('ThemeProvider');
  const initValue = localStorage.getItem('siteTheme');
  const [theme, setTheme] = useState(initValue || THEME_DARK);

  useLayoutEffect(() => {
    console.log('ThemeProvider useEffect theme -', theme);
    if (theme === THEME_DARK) {
      document.documentElement.setAttribute('data-theme', THEME_DARK);
    }
    if (theme === THEME_LIGHT) {
      document.documentElement.setAttribute('data-theme', THEME_LIGHT);
    }
  }, [theme]);

  const contextValue = useMemo(() => {
    const changeTheme = () => {
      const newTheme = (theme === THEME_DARK) ? THEME_LIGHT : THEME_DARK;
      console.log('ThemeProvider theme    -', theme);
      console.log('ThemeProvider newTheme -', newTheme);
      setTheme(newTheme);
      localStorage.setItem('siteTheme', newTheme);
    };
    return { theme, changeTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
