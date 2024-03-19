import styles from './Header.module.scss';
import iconEmail from '../../assets/icon-em.png';
import iconTelegram from '../../assets/icon-tg.png';
import iconGitHub from '../../assets/icon-git.png';

const Header = () => (
  <nav className={styles.container}>
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h3>
          WELCOME TO MY SITE
        </h3>
      </div>
      <div className={styles.header__body}>
        <a href="https://t.me/MiggRabbid" target="_blank" rel="noreferrer">
          <img src={iconTelegram} alt="My Telegram" />
        </a>
        <a href="https://github.com/MiggRabbid" target="_blank" rel="noreferrer">
          <img src={iconGitHub} alt="My GitHub" />
        </a>
        <a href="mailto:mig26@inbox.ru" target="_blank" rel="noreferrer">
          <img src={iconEmail} alt="My Email" />
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
