import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './UserEntered.module.scss';

import MainButton from '../Button/MainButton';

import useAuth from '../../../hooks/useAuth';
import useActions from '../../../hooks/useActions.js';
import { isNewUser } from '../../../selectors/authSelectors.js';

const UserEntered = () => {
  const { t } = useTranslation();
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
          {t('templates.authorization.userEntered.title')}
        </h5>
      </div>

      <div className={styles.body}>
        <p className={styles.body__text}>
          {newUser ? t('templates.authorization.userEntered.SigUp')
            : t('templates.authorization.userEntered.LogIn')}
        </p>
        <p>{t('templates.authorization.userEntered.text')}</p>
      </div>

      <MainButton onClick={handleLogout} text={t('templates.buttons.logOut')} />
    </div>
  );
};

export default UserEntered;