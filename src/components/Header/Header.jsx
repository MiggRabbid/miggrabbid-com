import styles from './Header.module.scss';

const Header = () => {
  console.log('start app');
  console.log(styles.container);
  return (
    <header className={styles.container}>
      <div>
        <h3>
          Welcome to my site
        </h3>
      </div>
    </header>
  );
};

export default Header;
