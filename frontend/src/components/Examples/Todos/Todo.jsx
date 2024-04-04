import { useEffect, useState } from 'react';

import styles from './Todo.module.scss';

import useActions from '../../../hooks/useActions';

import SmallButton from '../../Templates/Button/SmallButton';
import {
  iconLeft, iconRight, iconAdd, iconReset,
} from '../../Templates/icons';

const ADD_N_CHANGE_TODO = 'addAndChangeTodos';

const Todo = ({ title }) => {
  console.log('------- Todo');
  const [todos, setTodos] = useState([]);
  const { modalOpen } = useActions();

  useEffect(() => {
    console.log('todos length -', todos.length);
  }, [todos]);

  const handleAddTodo = () => {
    modalOpen({ modalType: ADD_N_CHANGE_TODO });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{title}</p>
        <SmallButton
          className={styles.header__botton}
          text={iconReset}
          onClick={() => {
            console.log('Todo reset');
            setTodos([]);
          }}
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
              <li className={styles.body__list}>
                задача 1
              </li>
              <li className={styles.body__list}>
                задача 2
              </li>
              <li className={styles.body__list}>
                задача 3
              </li>
              <li className={styles.body__list}>
                задача 4
              </li>
              <li className={styles.body__list}>
                задача 5
              </li>
              <li className={styles.body__list}>
                задача 6
              </li>
            </ul>
          )}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__pagination}>
          <SmallButton
            className={todos.length <= 7
              ? (styles.footer__bottom_disable)
              : styles.footer__bottom}
            isDisabled={todos.length <= 7}
            text={iconLeft}
            onClick={() => console.log('Todo left')}

          />
          <SmallButton
            className={todos.length <= 7
              ? (styles.footer__bottom_disable)
              : styles.footer__bottom}
            onClick={() => console.log('Todo left')}
            isDisabled={todos.length <= 7}
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
  );
};

export default Todo;
