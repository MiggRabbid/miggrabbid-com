import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './ModalBox.module.scss';

import { getModalType } from '../../../selectors/modalSelectors';
import useActions from '../../../hooks/useActions';
import AuthModal from './AuthModal';

const mappingModal = {
  error: AuthModal,
  success: AuthModal,
};

const ModalBox = () => {
  const { modalClose } = useActions();
  const modalType = useSelector(getModalType);
  const CurrentModal = mappingModal[modalType];

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('Close modal');
      modalClose();
    }, 5500);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className={styles.container}>
      <CurrentModal modalType={modalType} />
    </div>
  );
};

export default ModalBox;
