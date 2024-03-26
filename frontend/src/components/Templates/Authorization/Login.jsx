import { useFormik } from 'formik';
import { useRef } from 'react';
import axios from 'axios';

import styles from './Login.module.scss';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';

import routes from '../../../routes';

const Login = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { t } = useTranslation();
  const passwordRef = useRef(null);
  const usernameRef = useRef();
  // const { user, logIn } = useAuth();

  // const error = useSelector(getError);

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log('click submit in login -', values);
      try {
        const response = await axios.post(routes.loginRequestPath(), values);
        console.log('Login post -', response);
        // logIn(response.data);
        // navigate(routes.chatPagePath());
      } catch (e) {
        console.error(e);
        // if (!e.isAxiosError) {
        //   toast.error(t('toasts.auth.unknownErr'));
        // } else if (e.response.status === 401) {
        //   dispatch(authActions.loginFailed(e.response.data));
        // } else {
        //   toast.error(t('toasts.auth.networkErr'));
        // }
      }
      setSubmitting(false);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>Войти</h5>
      </div>

      <div className={styles.login}>
        <form className={styles.login__form} onSubmit={formik.handleSubmit}>
          <div>
            <lable
              htmlFor="usernameInput"
              label="Ваш ник"
              className={styles.form__lable}
            />
            <input
              type="text"
              name="username"
              id="usernameInput"
              placeholder="Ваш ник"
              autoComplete="username"
              required
              ref={usernameRef}
              value={formik.values.username}
              onChange={formik.handleChange}
              className={styles.form__input}
            />
          </div>
          <div>
            <lable
              htmlFor="passwordInput"
              label="Пароль"
              className={styles.form__lable}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              id="password"
              autoComplete="current-password"
              required
              ref={passwordRef}
              value={formik.values.password}
              onChange={formik.handleChange}
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__submit}>
            <button type="submit">
              Войти
            </button>
          </div>

        </form>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__signup}>
          <span>Нет аккаунта? </span>
          <a href="/signup">Регистрация</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
