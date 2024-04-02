import styles from './App.module.scss';

import Header from './Header/Header';
import Main from './Pages/Main';
import About from './Pages/About';
import Stack from './Pages/Stack';
import Skills from './Pages/Skills';

const App = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeClass = `app__${currentTheme}`;
  console.log('App currentTheme -', currentTheme);
  console.log('App themeClass   -', themeClass);

  return (
    <div className={styles.app} id="app">
      <Header />
      <Main />
      <Stack />
      <About />
      <Skills />
    </div>
  );
};

export default App;
