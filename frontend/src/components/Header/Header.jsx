import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

import SmallButton from '../Templates/Button/SmallButton';
import iconEmail from '../../assets/icon-em.png';
import iconTelegram from '../../assets/icon-tg.png';
import iconGitHub from '../../assets/icon-git.png';
import iconHabr from '../../assets/icon-hb.png';
import iconLinkedIn from '../../assets/icon-in.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const curLng = i18n.language;
  const altLang = curLng === t('languages.ru') ? t('languages.en') : t('languages.ru');

  const handleLangSwitch = () => {
    i18n.changeLanguage(altLang);
  };

  return (
    <header className={styles.container} id="header">
      <div className={styles.header}>
        <SmallButton
          className={styles.header_button}
          text={altLang}
          onClick={handleLangSwitch}
        />
        <div className={styles.header__title}>
          <h3>
            {t('header.title')}
          </h3>
        </div>
        <div className={styles.header__link}>
          <nav>
            <a href="https://github.com/MiggRabbid" target="_blank" rel="noreferrer">
              <img src={iconGitHub} alt="My GitHub" />
              <p>{t('header.links.git')}</p>
            </a>

            <a href="https://t.me/MiggRabbid" target="_blank" rel="noreferrer">
              <img src={iconTelegram} alt="My Telegram" />
              <p>{t('header.links.tg')}</p>
            </a>

            <a href="https://career.habr.com/miggrabbid" target="_blank" rel="noreferrer">
              <img src={iconHabr} alt="My Habr" />
              <p>{t('header.links.habr')}</p>
            </a>

            <a href="https://linkedin.com/in/miggrabbid" target="_blank" rel="noreferrer">
              <img src={iconLinkedIn} alt="My LinkedIn" />
              <p>{t('header.links.in')}</p>
            </a>

            <a href="mailto:mig26@inbox.ru" target="_blank" rel="noreferrer">
              <img src={iconEmail} alt="My Email" />
              <p>{t('header.links.em')}</p>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
