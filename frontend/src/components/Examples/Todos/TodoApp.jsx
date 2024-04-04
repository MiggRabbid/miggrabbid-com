import { useSelector } from 'react-redux';
import styles from './TodoApp.module.scss';

import { getModalState, getModalType } from '../../../selectors/modalSelectors';

import Todo from './Todo';
import ModalBox from '../../Templates/Modal/ModalBox';

const TodoApp = () => {
  console.log('------- TodoApp');
  const modalState = useSelector(getModalState);
  const modalType = useSelector(getModalType);

  const isAuthModalType = (type) => type === 'addAndChangeTodos' || type === 'delTodo';

  return (
    <div className={styles.container}>
      <Todo title="Hook useState" />
      <Todo title="Redux Toolkit" />
      {(modalState && isAuthModalType(modalType)) && <ModalBox />}
    </div>
  );
};

export default TodoApp;
