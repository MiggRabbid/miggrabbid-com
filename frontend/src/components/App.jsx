import styles from './App.module.scss';

import useTheme from '../hooks/useTheme';

import Header from './Header/Header';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import StackPage from './Pages/StackPage';
import SkillsPage from './Pages/SkillsPage';
import RocketButton from './Shared/Button/RocketButton';

const App = () => {
  console.log('----- App');
  const { siteTheme } = useTheme();

  return (
    <div className={styles[siteTheme]} id="app">
      <Header />
      <MainPage />
      <StackPage />
      <AboutPage />
      <SkillsPage />
      <RocketButton />
    </div>
  );
};

export default App;
