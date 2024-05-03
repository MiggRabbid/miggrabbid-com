import { useSelector } from 'react-redux';

import getTodo from '../../../selectors/todoSelectors.js';
import useActions from '../../../hooks/useActions.js';

import Todo from './Todo.jsx';

const TodoRedux = () => {
  console.log('------- TodoRedux');
  const todos = useSelector(getTodo);
  const { addTodo } = useActions();

  return (
    <Todo title="Redux Toolkit" todos={todos} setTodo={addTodo} id="rtk" />
  );
};

export default TodoRedux;
