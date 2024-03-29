import styles from './SmallButton.module.scss';

const SmallButton = ({ curr, alt, onClick }) => {
  console.log('SmallButton');
  return (
    <button data-lang={curr} className={styles.button} type="button" onClick={onClick}>
      {alt}
    </button>
  );
};

export default SmallButton;
