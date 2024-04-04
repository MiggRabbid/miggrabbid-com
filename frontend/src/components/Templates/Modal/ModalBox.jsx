import { useSelector } from 'react-redux';

import { getModalType } from '../../../selectors/modalSelectors';
import useActions from '../../../hooks/useActions';
import AuthModal from './AuthModal';
import ChangeTodo from './ChangeTodo';

const mappingModal = {
  error: AuthModal,
  success: AuthModal,
  addAndChangeTodos: ChangeTodo,
  delTodos: ChangeTodo,
};

const ModalBox = () => {
  const { modalClose } = useActions();
  const modalType = useSelector(getModalType);
  const CurrentModal = mappingModal[modalType];

  return (
    <CurrentModal
      modalType={modalType}
      modalClose={modalClose}
    />
  );
};

export default ModalBox;
