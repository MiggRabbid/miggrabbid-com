import { useSelector } from 'react-redux';

import { getModalType } from '../../../selectors/modalSelectors';
import useActions from '../../../hooks/useActions';
import AuthModal from './AuthModal';
import TodoModal from './TodoModal';

const mappingModal = {
  error: AuthModal,
  success: AuthModal,
  addAndChangeTodos: TodoModal,
  delTodos: TodoModal,
};

const ModalBox = ({ state, setState }) => {
  const { modalClose } = useActions();
  const modalType = useSelector(getModalType);
  const CurrentModal = mappingModal[modalType];

  return (
    <CurrentModal
      modalType={modalType}
      modalClose={modalClose}
      state={state}
      setState={setState}
    />
  );
};

export default ModalBox;
