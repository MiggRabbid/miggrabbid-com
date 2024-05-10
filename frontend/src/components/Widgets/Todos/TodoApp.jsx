import styles from './TodoApp.module.scss';

import TodoRedux from './TodoForReduxRTK';
import TodoUseState from './TodoForUseState';

const TodoApp = () => (
  <div className={styles.container}>
    <TodoRedux />
    <TodoUseState />
  </div>
);

export default TodoApp;
