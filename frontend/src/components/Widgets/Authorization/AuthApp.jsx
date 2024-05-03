import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './AuthApp.module.scss';

import useAuth from '../../../hooks/useAuth';
import { isSignUp } from '../../../selectors/authSelectors';
import { getModalState } from '../../../selectors/modalSelectors';

import Login from './Login';
import SignUp from './SignUp';
import Authorized from './Authorized';
import ModalBox from '../../Shared/Modal/ModalBox';

const PrivateOutlet = () => {
  const authentication = useAuth();
  const isAuthenticated = !!authentication.user;
  return isAuthenticated ? <Authorized /> : <Login />;
};

const AuthApp = () => {
  const signUp = useSelector(isSignUp);
  const modalIsOpen = useSelector(getModalState);

  useEffect(() => console.log(modalIsOpen), [modalIsOpen]);

  return (
    <div className={styles.container}>
      { signUp ? <SignUp /> : <PrivateOutlet />}
      {modalIsOpen && <ModalBox />}
    </div>
  );
};

export default AuthApp;
