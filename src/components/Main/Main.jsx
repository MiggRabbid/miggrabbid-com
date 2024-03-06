import styles from './Main.module.scss';

const Main = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <p className={styles.text}>
        OLD
        {' '}
        <span>MAN</span>
      </p>
      <p className={styles.text}>&</p>
      <p className={styles.text}>
        <span>NEW</span>
        {' '}
        DEV
      </p>
    </div>
  </div>
);

export default Main;
