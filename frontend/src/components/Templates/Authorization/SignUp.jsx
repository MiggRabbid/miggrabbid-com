import { useFormik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';
import axios from 'axios';

import styles from './SignUp.module.scss';

import MainButton from '../Button/MainButton';
import useAuth from '../../../hooks/useAuth';
import useActions from '../../../hooks/useActions';
import routes from '../../../routes';

const getValidationSchema = () => yup.object({
  username: yup.string().trim()
    .min(3, 'Минимальаня длинна 3 символа')
    .max(20, 'Максимальная длинна 20 символов')
    .required('Поле обязательно для заполнения'),
  password: yup.string()
    .min(6, 'Минимальаня длинна 6 символов')
    .required('Поле обязательно для заполнения'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
});

const SignUp = () => {
  const { signUpSuccess, openModal } = useActions();
  const { logIn } = useAuth();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassword = useRef();

  const formik = useFormik({
    initialValues: { username: '', password: '', confirmPassword: '' },
    validationSchema: getValidationSchema(),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await axios.post(routes.signupRequestPath(), values);
        console.log('Login SugnUp -', response.data);
        logIn(response.data);
        signUpSuccess();
        openModal();
      } catch (e) {
        console.error(e);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>Зарегистрироваться</h5>
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
              className={
                !formik.errors.username
                  ? (styles.form__input)
                  : (styles.form__invalid)
                }
            />
            <div className={
                !formik.errors.username
                  ? (styles.feedback__hidden)
                  : (styles.form__feedback)
                }
            >
              От 3 до 20 символов
            </div>
          </div>

          <div>
            <label
              htmlFor="passwordInput"
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
              className={
                !formik.errors.password
                  ? (styles.form__input)
                  : (styles.form__invalid)
                }
            />
            <div className={
                !formik.errors.password
                  ? (styles.feedback__hidden)
                  : (styles.form__feedback)
                }
            >
              Не менее 6 символов
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className={styles.form__label}
            >
              {' '}
              Подтвердите пароль
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Подтвердите пароль"
              id="confirmPassword"
              autoComplete="current-password"
              required
              ref={confirmPassword}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              className={
                !formik.errors.confirmPassword
                  ? (styles.form__input)
                  : (styles.form__invalid)
              }
            />
            <div className={
                !formik.errors.confirmPassword
                  ? (styles.feedback__hidden)
                  : (styles.form__feedback)
                }
            >
              Пароли не совпадают
            </div>
          </div>

          <MainButton text="Зарегистрироваться" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
