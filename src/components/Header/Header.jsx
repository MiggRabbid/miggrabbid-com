import styles from './Header.module.scss';
import iconEmail from '../../assets/icon-em.png';
import iconTelegram from '../../assets/icon-tg.png';
import iconGitHub from '../../assets/icon-git.png';

const Header = () => (
  <header className={styles.container}>
    <div className={styles.icons}>
      <a className={styles.icons__link} href="/">
        <img src={iconEmail} alt="Email" />
      </a>
      <a className={styles.icons__link} href="/">
        <img src={iconTelegram} alt="Telegram" />
      </a>
      <a className={styles.icons__link} href="/">
        <img src={iconGitHub} alt="GitHub" />
      </a>
    </div>
    <div className={styles.title}>
      <h3>
        WELCOME TO MY SITE
      </h3>
      <button type="button" className={styles.title_open} aria-label="Open Stack">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {' '}
          <line x1="12" y1="19" x2="12" y2="5" />
          {' '}
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  </header>
);

export default Header;
