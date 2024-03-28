import styles from './AuthModal.module.scss';

const AuthModal = ({ modalType }) => (
  <div className={styles[modalType]}>
    <p className={styles.modal__text}>
      Какая-то ошибка
    </p>
    <div />
  </div>
);

export default AuthModal;
