import { useSelector } from 'react-redux';

import styles from './AuthApp.module.scss';

import useAuth from '../../../hooks/useAuth';
import { isSignUp } from '../../../selectors/authSelectors';
import { getModalState, getModalType } from '../../../selectors/modalSelectors';

import Login from './Login';
import SignUp from './SignUp';
import Authorized from './Authorized';
import ModalBox from '../../Templates/Modal/ModalBox';

const PrivateOutlet = () => {
  const authentication = useAuth();
  const isAuthenticated = !!authentication.user;
  return isAuthenticated ? <Authorized /> : <Login />;
};

const AuthApp = () => {
  const signUp = useSelector(isSignUp);
  const modalState = useSelector(getModalState);
  const modalType = useSelector(getModalType);

  const isAuthModalType = (type) => type === 'error' || type === 'success';

  return (
    <div className={styles.container}>
      { signUp ? <SignUp /> : <PrivateOutlet />}
      {(modalState && isAuthModalType(modalType)) && <ModalBox />}
    </div>
  );
};

export default AuthApp;
