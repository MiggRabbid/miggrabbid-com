import styles from './TodoApp.module.scss';

import TodoRedux from './TodoForReduxRTK';
import TodoUseState from './TodoForUseState';

const TodoApp = () => {
  console.log('------- TodoApp');

  return (
    <div className={styles.container}>
      <TodoRedux />
      <TodoUseState />
    </div>
  );
};

export default TodoApp;
