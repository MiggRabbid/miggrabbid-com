/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';

import styles from './Main.module.scss';

import bgTitleBody from '../../assets/bgTitleBody.png';

const Main = () => {
  const { t } = useTranslation();

  const currentTheme = document.documentElement.getAttribute('data-theme');
  const themeClass = `container__${currentTheme}`;
  console.log('Main -', currentTheme);
  console.log('Main -', themeClass);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.title__title}>
          <h1>{t('main.title')}</h1>
        </div>

        <div className={styles.title__nav}>
          <nav>
            <div className={styles.nav__bg}>
              <img src={bgTitleBody} alt="" />
            </div>
            <ul>
              <li>
                {t('main.menu.stack')}
              </li>
              <li>
                {t('main.menu.about')}
              </li>
              <li>
                {t('main.menu.skills')}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.dev}>{t('main.dev')}</div>
    </div>
  );
};

export default Main;
