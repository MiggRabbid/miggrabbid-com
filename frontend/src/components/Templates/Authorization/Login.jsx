import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';

import styles from './Login.module.scss';

import MainButton from '../Button/MainButton';

import useAuth from '../../../hooks/useAuth';
import useActions from '../../../hooks/useActions';
import { getError } from '../../../selectors/authSelectors';
import routes from '../../../routes';

const Login = () => {
  const { isSignUp, loginFailed, modalOpen } = useActions();
  const { logIn } = useAuth();
  const error = useSelector(getError);
  const passwordRef = useRef(null);
  const usernameRef = useRef();

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await axios.post(routes.loginRequestPath(), values);
        logIn(response.data);
        modalOpen('success');
      } catch (e) {
        console.error(e.response.data);
        modalOpen('error');
        loginFailed(e.response.data);
      }
      setSubmitting(false);
    },
  });

  useEffect(() => {
    console.log('Login error -', error);
  }, [error]);

  const hundleSignUp = () => {
    isSignUp();
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>Войти</h5>
      </div>

      <div className={styles.login}>
        <form className={styles.login__form} onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="usernameInput"
              className={styles.form__label}
            >
              {' '}
              Имя пользователя
            </label>
            <input
              type="text"
              name="username"
              id="usernameInput"
              placeholder="Имя пользователя"
              autoComplete="username"
              required
              ref={usernameRef}
              value={formik.values.username}
              onChange={formik.handleChange}
              className={styles.form__input}
            />
          </div>
          <div>
            <label
              htmlFor="passwordInput"
              label="Пароль"
              className={styles.form__label}
            >
              {' '}
              Пароль
            </label>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              id="passwordInput"
              autoComplete="current-password"
              required
              ref={passwordRef}
              value={formik.values.password}
              onChange={formik.handleChange}
              className={styles.form__input}
            />
          </div>

          <MainButton text="Войти" />

        </form>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__signup}>
          <span>Нет аккаунта? </span>
          <button type="button" onClick={hundleSignUp}>Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
