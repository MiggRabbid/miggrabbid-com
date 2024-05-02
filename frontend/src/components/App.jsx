import { useTranslation } from 'react-i18next';

import styles from './App.module.scss';

import Header from './Header/Header';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import StackPage from './Pages/StackPage';
import SkillsPage from './Pages/SkillsPage';

import { ReactComponent as RocketButton } from '../assets/rocket-button.svg';

const App = () => {
  const { t } = useTranslation();

  const handleClickOnUp = () => {
    console.log('---handleClickOnUp');
    const button = document.getElementById('button-up');

    button.classList.toggle('clicked');
    setTimeout(() => button.classList.toggle('clicked'), 5500);

    const currentTarget = document.getElementById('app');
    console.log(currentTarget);
    if (currentTarget) {
      window.scrollTo({
        behavior: 'smooth',
        top: currentTarget.offsetTop,
      });
    }
  };

  return (
    <div className={styles.app} id="app">
      <Header />
      <MainPage />
      <StackPage />
      <AboutPage />
      <SkillsPage />

      <div>
        <button type="button" id="button-up" className={styles.app_button} onClick={handleClickOnUp}>
          <RocketButton className={styles.button__icon} />
          {t('templates.buttons.up')}
        </button>
      </div>

    </div>
  );
};

export default App;
