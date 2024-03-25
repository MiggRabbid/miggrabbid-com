import styles from './Header.module.scss';
import iconEmail from '../../assets/icon-em.png';
import iconTelegram from '../../assets/icon-tg.png';
import iconGitHub from '../../assets/icon-git.png';
import iconHabr from '../../assets/icon-hb.png';
import iconLinkedIn from '../../assets/icon-in.png';

const Header = () => (
  <header className={styles.container}>
    <div className={styles.header}>
      <div className={styles.header__title}>
        <h3>
          Hi there! My name is Anatoliy
          {' '}
        </h3>
      </div>
      <div className={styles.header__link}>
        <nav>
          <a href="https://github.com/MiggRabbid" target="_blank" rel="noreferrer">
            <img src={iconGitHub} alt="My GitHub" />
          </a>

          <a href="https://t.me/MiggRabbid" target="_blank" rel="noreferrer">
            <img src={iconTelegram} alt="My Telegram" />
          </a>

          <a href="https://career.habr.com/miggrabbid" target="_blank" rel="noreferrer">
            <img src={iconHabr} alt="My Habr" />
          </a>

          <a href="https://linkedin.com/in/miggrabbid" target="_blank" rel="noreferrer">
            <img src={iconLinkedIn} alt="My LinkedIn" />
          </a>

          <a href="mailto:mig26@inbox.ru" target="_blank" rel="noreferrer">
            <img src={iconEmail} alt="My Email" />
          </a>
        </nav>
      </div>
    </div>
  </header>

);

export default Header;
