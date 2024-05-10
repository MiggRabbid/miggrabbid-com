import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './App.module.scss';

import useTheme from '../hooks/useTheme';

import Header from './Header/Header';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import StackPage from './Pages/StackPage';
import SkillsPage from './Pages/SkillsPage';

import { ReactComponent as RocketButton } from '../assets/rocket-button.svg';

const App = () => {
  console.log('----- App');
  const { t } = useTranslation();
  const { siteTheme } = useTheme();
  const buttonRef = useRef(null);

  const handleClickOnUp = () => {
    const button = buttonRef.current;

    button.classList.toggle('clicked');
    setTimeout(() => button.classList.toggle('clicked'), 5500);

    const currentTarget = document.getElementById('app');
    if (currentTarget) {
      window.scrollTo({
        behavior: 'smooth',
        top: currentTarget.offsetTop,
      });
    }
  };

  return (
    <div className={styles[siteTheme]} id="app">
      <Header />
      <MainPage />
      <StackPage />
      <AboutPage />
      <SkillsPage />

      <div>
        <button type="button" ref={buttonRef} className={styles.app_button} onClick={handleClickOnUp}>
          <RocketButton className={styles.button__icon} />
          {t('templates.buttons.up')}
        </button>
      </div>
    </div>
  );
};

export default App;
