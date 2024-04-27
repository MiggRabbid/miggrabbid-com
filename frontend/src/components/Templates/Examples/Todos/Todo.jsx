import { useState } from 'react';

import styles from './Todo.module.scss';

import TodoModal from '../../Modal/TodoModal';
import SmallButton from '../../Button/SmallButton';
import {
  iconLeft, iconRight, iconAdd, iconReset,
} from '../../icons';

const ADD_N_CHANGE_TODO = 'addAndChangeTodos';

const LINES_PER_PAGE = 6;

const initialModalState = {
  isOpen: false,
  modalType: null,
};

const Todo = (props) => {
  console.log('------- Todo');
  const {
    title, todos, setTodo, id,
  } = props;
  const [modal, setModal] = useState(initialModalState);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastTodo = currentPage * LINES_PER_PAGE;
  const indexOfFirstTodo = indexOfLastTodo - LINES_PER_PAGE;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPages = Math.ceil(todos.length / LINES_PER_PAGE);

  const handleAddTodo = () => {
    setModal({ isOpen: true, modalType: ADD_N_CHANGE_TODO });
  };

  return (
    <div className={styles.container} id={id}>
      <div className={styles.header}>
        <p>{title}</p>
        <SmallButton
          className={styles.header__bottom}
          text={iconReset}
          onClick={() => setTodo([])}
        />
      </div>
      <div className={styles.body}>
        {todos.length === 0
          ? (
            <p className={styles.body__placeholder}>
              Добавьте задачи
            </p>
          )
          : (
            <ul className={styles.body__table}>
              <p>Актуальные задачи:</p>
              {currentTodos.map((item) => (
                <li key={item.id} className={styles.body__list}>
                  {item.title}
                </li>
              ))}
            </ul>
          )}

        <div className={styles.footer}>
          <div className={styles.footer__pagination}>
            <SmallButton
              className={(currentPage < 2)
                ? (styles.footer__bottom_disable)
                : styles.footer__bottom}
              isDisabled={currentPage < 2}
              text={iconLeft}
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            <div className={styles.pagination__text}>
              {
              todos.length > 0 && (
              <p>
                {`${currentPage} из ${totalPages}`}
              </p>
              )
            }
            </div>
            <SmallButton
              className={todos.length <= LINES_PER_PAGE || currentPage >= totalPages
                ? (styles.footer__bottom_disable)
                : styles.footer__bottom}
              onClick={() => setCurrentPage(currentPage + 1)}
              isDisabled={todos.length <= LINES_PER_PAGE || currentPage >= totalPages}
              text={iconRight}
            />
          </div>
          <SmallButton
            className={styles.footer__bottom}
            text={(iconAdd)}
            onClick={handleAddTodo}
          />
        </div>
      </div>

      {
        modal.isOpen
        && (
        <TodoModal
          state={todos}
          setState={setTodo}
          setModal={setModal}
          initialModalState={initialModalState}
          id={id}
        />
        )
      }
    </div>
  );
};

export default Todo;
