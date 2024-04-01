import { useSelector } from 'react-redux';

import styles from './AuthApp.module.scss';

import useAuth from '../../../hooks/useAuth';
import { isSignUp } from '../../../selectors/authSelectors';
import { getModalState } from '../../../selectors/modalSelectors';

import Login from './Login';
import SignUp from './SignUp';
import UserEntered from './UserEntered';
import ModalBox from '../../Templates/Modal/ModalBox';

const PrivateOutlet = () => {
  const authentication = useAuth();
  const isAuthenticated = !!authentication.user;
  return isAuthenticated ? <UserEntered /> : <Login />;
};

const AuthApp = () => {
  const signUp = useSelector(isSignUp);
  const modalState = useSelector(getModalState);

  return (
    <div className={styles.container}>
      { signUp ? <SignUp /> : <PrivateOutlet />}
      {modalState && <ModalBox />}
    </div>
  );
};

export default AuthApp;
