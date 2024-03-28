import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './UserEntered.module.scss';

import MainButton from '../Button/MainButton';

import useAuth from '../../../hooks/useAuth';
import useActions from '../../../hooks/useActions.js';
import { isNewUser } from '../../../selectors/authSelectors.js';

const UserEntered = () => {
  const { logoutStore } = useActions();
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut();
    logoutStore();
  };

  const newUser = useSelector(isNewUser);
  useEffect(() => {
    console.log('newUser', newUser);
  }, [newUser]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>
          { user.username }
          , Добро пожаловать
        </h5>
      </div>

      <div className={styles.body}>
        <p className={styles.body__text}>
          {newUser ? 'Регистрация прошла успешно' : 'Авторизация прошла успешно'}
        </p>
      </div>

      <MainButton onClick={handleLogout} text="Выйти" />
    </div>
  );
};

export default UserEntered;
