import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import getTodo from '../../../../selectors/todoSelectors.js';

import Todo from './Todo';

const TodoUseState = () => {
  console.log('------- TodoRedux');
  const [todos, setTodo] = useState([]);
  const todosGlobal = useSelector(getTodo);

  useEffect(() => {
    const todosId = todos.map((todo) => todo.id);
    const newGlobalTodos = todosGlobal.filter((todo) => !todosId.includes(todo.id));
    setTodo([...todos, ...newGlobalTodos]);
  }, [todosGlobal]);

  return (
    <Todo title="Hook useState" todos={todos} setTodo={setTodo} id="usestate" />
  );
};

export default TodoUseState;
