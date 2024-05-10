import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import styles from './Authorized.module.scss';

import MainButton from '../../Shared/Button/MainButton.jsx';

import useAuth from '../../../hooks/useAuth.js';
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
          {newUser ? t('templates.authorization.userEntered.SignUp')
            : t('templates.authorization.userEntered.LogIn')}
        </p>
        <p>{t('templates.authorization.userEntered.text')}</p>
      </div>

      <MainButton className={styles.logout} onClick={handleLogout} text={t('templates.buttons.logOut')} />
    </div>
  );
};

export default UserEntered;
