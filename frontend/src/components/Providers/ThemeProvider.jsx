import { useLayoutEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/index';

const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

const ThemeProvider = ({ children }) => {
  console.log('----- ThemeProvider');
  const [siteTheme, setSiteTheme] = useState(THEME_DARK);

  const availableThemes = { THEME_DARK, THEME_LIGHT };

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', siteTheme);
  }, [siteTheme]);

  const setTheme = (newTheme) => {
    setSiteTheme(newTheme);
    localStorage.setItem('siteTheme', newTheme);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{
      siteTheme, setTheme, availableThemes,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
