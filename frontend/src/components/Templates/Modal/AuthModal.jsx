import { useSelector } from 'react-redux';

import styles from './AuthModal.module.scss';

import { getModalMessage } from '../../../selectors/modalSelectors';

const AuthModal = ({ modalType }) => {
  const modalMessage = useSelector(getModalMessage);
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
