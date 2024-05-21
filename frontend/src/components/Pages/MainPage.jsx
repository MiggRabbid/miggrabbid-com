/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';

import styles from './MainPage.module.scss';

import bgTitleBody from '../../assets/bgTitleBody.png';
import BgAnimation from '../Shared/BgAnimation/BgAnimation';
import useTheme from '../../hooks/useTheme';

const MainPage = () => {
  const { t } = useTranslation();
  const { siteTheme } = useTheme();

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
    <section className={styles[siteTheme]} id="main">
      <div className={styles.title}>
        <h1>{t('main.title')}</h1>
      </div>

      <div className={styles.main}>
        <nav className={styles.main__nav}>
          <div className={styles.nav__bg}>
            <img src={bgTitleBody} alt="" />
          </div>
          <ul className={styles.nav__list}>
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

        <div className={styles.main__bg}>
          <BgAnimation siteTheme={siteTheme} />
        </div>
      </div>

      <div className={styles.dev}>{t('main.dev')}</div>
    </section>
  );
};

export default MainPage;
