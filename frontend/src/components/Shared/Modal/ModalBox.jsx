import { useSelector } from 'react-redux';

import { getModalType } from '../../../selectors/modalSelectors';
import useActions from '../../../hooks/useActions';
import AuthModal from './AuthModal';

const ModalBox = (props) => {
  const { modalClose } = useActions();
  const modalType = useSelector(getModalType);

  return (
    <AuthModal
      modalType={modalType}
      modalClose={modalClose}
      props={props}
    />
  );
};

export default ModalBox;
