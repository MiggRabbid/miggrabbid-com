import styles from './SmallButton.module.scss';

const SmallButton = (props) => {
  const {
    className, text, onClick,
  } = props;

  return (
    <div className={className}>
      <button className={styles.button} type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default SmallButton;
