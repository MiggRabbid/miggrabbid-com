import { useFormik } from 'formik';
import { useRef } from 'react';
import * as yup from 'yup';
import axios from 'axios';

import styles from './SignUp.module.scss';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
// import axios from 'axios';
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
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { t } = useTranslation();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassword = useRef();
  // const { user, logIn } = useAuth();

  // const error = useSelector(getError);

  const formik = useFormik({
    initialValues: { username: '', password: '', confirmPassword: '' },
    validationSchema: getValidationSchema(),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log('click submit in SugnUp -', values);
      try {
        const response = await axios.post(routes.signupRequestPath(), values);
        console.log('click submit in SugnUp -', response);
        console.log('Login SugnUp -', response);
        // logIn(response.data);
        // navigate(routes.chatPagePath());
      } catch (e) {
        console.error(e);
        // if (!e.isAxiosError) {
        //   toast.error(t('toasts.auth.unknownErr'));
        // } else if (e.response.status === 409) {
        //   dispatch(authActions.loginFailed(e.response.data));
        // } else {
        //   toast.error(t('toasts.auth.networkErr'));
        // }
      }
      setSubmitting(false);
    },
  });
  // eslint-disable-next-line no-extra-boolean-cast

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>Зарегистрироваться</h5>
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
            <lable
              htmlFor="passwordInput"
              label="Пароль"
              className={styles.form__lable}
            />
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
            <lable
              htmlFor="confirmPassword"
              label="Подтвердите пароль"
              className={styles.form__lable}
            />
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

          <div className={styles.form__submit}>
            <button type="submit">
              Зарегистрироваться
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignUp;
