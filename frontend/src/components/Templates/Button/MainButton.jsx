import styles from './MainButton.module.scss';

const MainButton = ({ onClick, text }) => (
  <div className={styles.container}>
    <button type="submit" onClick={onClick}>
      {text}
    </button>
  </div>
);

export default MainButton;
