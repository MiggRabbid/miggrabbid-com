import styles from './Switcher.module.scss';

import MainButton from '../../Shared/Button/MainButton';

const Switcher = (props) => {
  const {
    className, onClick, title, firstBtn, secondBtn, curValue,
  } = props;

  const firstBtnClass = (curValue !== firstBtn) ? styles.button : styles.button__disable;
  const secondBtnClass = (curValue !== secondBtn) ? styles.button : styles.button__disable;

  return (
    <div className={className}>
      <p className={styles.title}>{title}</p>
      <div className={styles.buttons}>
        <MainButton
          className={firstBtnClass}
          text={firstBtn}
          onClick={onClick}
          isDisabled={curValue === firstBtn}
        />
        <MainButton
          className={secondBtnClass}
          text={secondBtn}
          onClick={onClick}
          isDisabled={curValue === secondBtn}
        />
      </div>
    </div>
  );
};

export default Switcher;
