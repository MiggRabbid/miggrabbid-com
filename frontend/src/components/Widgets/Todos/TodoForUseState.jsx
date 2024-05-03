/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import getTodo from '../../../selectors/todoSelectors.js';

import Todo from './Todo.jsx';

const RegexpForTodosLocalId = /^usestate.*/i;

const TodoUseState = () => {
  console.log('------- TodoRedux');
  const [todosLocal, setTodo] = useState([]);
  const todosGlobal = useSelector(getTodo);

  /**
   * костыль 1 - еще 1 useState, чтобы отображать 2 состояния
   */
  const [generalState, setGeneralState] = useState([]);

  /**
   * костыль 2 - чтобы корректно отображались 2 состояния
   */
  useEffect(() => {
    if (todosLocal.length === 0) {
      setGeneralState([...todosGlobal]);
    } else if (todosGlobal.length === 0) {
      setGeneralState([...todosLocal]);
    } else {
      const todosId = generalState.map((todo) => todo.id);
      const newLocalTodos = todosLocal.filter((todo) => !todosId.includes(todo.id));
      const newGlobalTodos = todosGlobal.filter((todo) => !todosId.includes(todo.id));
      setGeneralState([...generalState, ...newLocalTodos, ...newGlobalTodos]);
    }
  }, [todosLocal, todosGlobal]);

  /**
   * костыль 3 - чтобы todosGlobal не попадало в todosLocal из generalState при setTodo()
   */
  const setLocalTodoWithoutGlobal = (todos) => {
    const newLocalTodos = todos.filter((todo) => RegexpForTodosLocalId.test(todo.id));
    setTodo(newLocalTodos);
  };

  return (
    <Todo title="Hook useState" todos={generalState} setTodo={setLocalTodoWithoutGlobal} id="usestate" />
  );
};

export default TodoUseState;
