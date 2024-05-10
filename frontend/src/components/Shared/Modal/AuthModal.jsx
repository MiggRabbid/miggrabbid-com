import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './AuthModal.module.scss';

import { getModalMessage } from '../../../selectors/modalSelectors';

const AuthModal = ({ modalType, modalClose }) => {
  const modalMessage = useSelector(getModalMessage);

  useEffect(() => {
    const timerId = setTimeout(() => modalClose(), 5500);
    return () => clearTimeout(timerId);
  }, [modalClose]);

  return (
    <div className={styles[modalType]}>
      <p className={styles.modal__text}>
        { modalMessage }
      </p>
      <div />
    </div>
  );
};

export default AuthModal;
