import { useFormik } from 'formik';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import axios from 'axios';

import styles from './SignUp.module.scss';

import MainButton from '../Button/MainButton';
import useAuth from '../../../hooks/useAuth';
import useActions from '../../../hooks/useActions';
import routes from '../../../routes';

const getValidationSchema = (t) => yup.object({
  username: yup.string().trim()
    .min(3, t('validationError.wronglengthName'))
    .max(20, t('validationError.wronglengthName'))
    .required(t('validationError.requiredField')),
  password: yup.string()
    .min(6, t('validationError.wronglengthPass'))
    .required(t('validationError.requiredField')),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], t('validationError.invalidPassConfirm')),
});

const SignUp = () => {
  const { t } = useTranslation();
  const { signUpSuccess, loginFailed, modalOpen } = useActions();
  const { logIn } = useAuth();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPassword = useRef();

  const formik = useFormik({
    initialValues: { username: '', password: '', confirmPassword: '' },
    validationSchema: getValidationSchema(t),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const response = await axios.post(routes.signupRequestPath(), values);
        console.log('Login SugnUp -', response.data);
        logIn(response.data);
        signUpSuccess();
        modalOpen({ modalType: 'success', message: t('templates.modal.success') });
      } catch (e) {
        console.error(e.response.data);
        loginFailed(e.response.data);
        if (!e.isAxiosError) {
          modalOpen({ modalType: 'error', message: t('validationError.unknownErr') });
        } else if (e.response.status === 409) {
          modalOpen({ modalType: 'error', message: t('validationError.thisUserExists') });
        } else {
          modalOpen({ modalType: 'error', message: t('validationError.networkErr') });
        }
      }
      setSubmitting(false);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>{t('templates.authorization.signUp.title')}</h5>
      </div>

      <div className={styles.login}>
        <form className={styles.login__form} onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="usernameInput"
              className={styles.form__label}
            >
              {t('templates.authorization.signUp.inputName.label')}
            </label>
            <input
              type="text"
              name="username"
              id="usernameInput"
              placeholder={t('templates.authorization.signUp.inputName.placeholder')}
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
              {t('templates.authorization.signUp.inputPass.label')}
            </label>
            <input
              type="password"
              name="password"
              placeholder={t('templates.authorization.signUp.inputPass.placeholder')}
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
              {t('templates.authorization.signUp.inputConfirmPass.label')}
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder={t('templates.authorization.signUp.inputConfirmPass.placeholder')}
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

          <MainButton text={t('templates.buttons.signUp')} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
