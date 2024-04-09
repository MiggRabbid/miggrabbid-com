/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';

import styles from './Main.module.scss';

import bgTitleBody from '../../assets/bgTitleBody.png';

const Main = () => {
  const { t } = useTranslation();

  const handleClickOnMenu = (e) => {
    const currentTarget = e.target.dataset.target.toLowerCase();

    const element = document.getElementById(currentTarget);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };

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
              <li className={styles.nav__li}>
                <button type="button" data-target={t('main.menu.stack')} onClick={handleClickOnMenu}>{t('main.menu.stack')}</button>
              </li>
              <li className={styles.nav__li}>
                <button type="button" data-target={t('main.menu.about')} onClick={handleClickOnMenu}>{t('main.menu.about')}</button>
              </li>
              <li className={styles.nav__li}>
                <button type="button" data-target={t('main.menu.skills')} onClick={handleClickOnMenu}>{t('main.menu.skills')}</button>
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
