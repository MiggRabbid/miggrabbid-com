import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Todo.module.scss';

import TodoModal from '../../Shared/Modal/TodoModal';
import SmallButton from '../../Shared/Button/SmallButton';
import {
  iconLeft, iconRight, iconAdd, iconReset,
} from '../../Shared/icons';

const ADD_TODO = 'addTodo';
const OPEN_TODO = 'openTodo';
// const DEL_TODO = 'deleteTodo';

const LINES_PER_PAGE = 9;

const initialModalState = {
  isOpen: false,
  modalType: null,
  todo: null,
};

const Todo = (props) => {
  const { t } = useTranslation();
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
    setModal({ isOpen: true, modalType: ADD_TODO, todo: null });
  };

  const handleClickTodo = (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      const todoId = e.target.dataset.id;
      const currentTodo = todos.filter((todo) => todo.id === todoId);
      setModal({ isOpen: true, modalType: OPEN_TODO, todo: currentTodo[0] });
    }
  };

  return (
    <div className={styles.container} id={id}>
      <div className={styles.header}>
        <h5>{title}</h5>
      </div>
      <div className={styles.body}>
        {todos.length === 0
          ? (
            <p className={styles.body__placeholder}>
              Добавьте задачи
            </p>
          )
          : (
            <ul
              role="listbox"
              className={styles.body__table}
              onClick={handleClickTodo}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === 'Space') handleClickTodo(e);
              }}
            >
              <div className={styles.table__title}>
                <p>Актуальные задачи</p>
                <SmallButton
                  className={styles.title__bottom}
                  onClick={() => setTodo([])}
                  icon={iconReset}
                  text={t('templates.buttons.resetTodo')}
                />
              </div>
              {currentTodos.map((item) => (
                <li key={item.id} data-id={item.id} className={styles.body__list}>
                  {item.title}
                </li>
              ))}
            </ul>
          )}

      </div>

      <div className={styles.footer}>
        <div className={styles.footer__pagination}>
          <SmallButton
            className={(currentPage <= 1)
              ? (styles.footer__bottom_disable)
              : styles.footer__bottom}
            isDisabled={currentPage <= 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            icon={iconLeft}
            text={t('templates.buttons.prevPage')}
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
            isDisabled={todos.length <= LINES_PER_PAGE || currentPage >= totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            icon={iconRight}
            text={t('templates.buttons.nextPage')}
          />
        </div>
        <SmallButton
          className={styles.footer__bottom}
          onClick={handleAddTodo}
          icon={(iconAdd)}
          text={t('templates.buttons.addTodo')}
        />
      </div>

      {
        modal.isOpen
        && (
        <TodoModal
          state={todos}
          setState={setTodo}
          modalState={modal}
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
