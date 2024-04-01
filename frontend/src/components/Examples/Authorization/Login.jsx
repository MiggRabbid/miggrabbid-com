import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import axios from 'axios';

import styles from './Login.module.scss';

import MainButton from '../../Templates/Button/MainButton';

import useAuth from '../../../hooks/useAuth';
import useActions from '../../../hooks/useActions';
import { getError } from '../../../selectors/authSelectors';
import routes from '../../../routes';

const MODAL_ERROR = 'error';
const MODAL_SUCCESS = 'success';

const Login = () => {
  const { t } = useTranslation();
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
        modalOpen({ modalType: MODAL_SUCCESS, message: t('templates.modal.success') });
      } catch (e) {
        console.error(e.response.data);
        loginFailed(e.response.data);
        const payload = { modalType: MODAL_ERROR, message: t('validationError.networkErr') };
        if (!e.isAxiosError) {
          payload.message = t('validationError.unknownErr');
        } else if (e.response.status === 401) {
          payload.message = t('validationError.thisUserDoesNotExists');
        }
        modalOpen(payload);
      }
      setSubmitting(false);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h5>{t('templates.authorization.logIn.title')}</h5>
      </div>

      <div className={styles.login}>
        <form className={styles.login__form} onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="usernameInput"
              className={styles.form__label}
            >
              {t('templates.authorization.logIn.inputName.label')}
            </label>
            <input
              type="text"
              name="username"
              id="usernameInput"
              placeholder={t('templates.authorization.logIn.inputName.placeholder')}
              autoComplete="username"
              required
              ref={usernameRef}
              value={formik.values.username}
              onChange={formik.handleChange}
              className={
                !error
                  ? (styles.form__input)
                  : (styles.form__invalid)
                }
            />
          </div>

          <div>
            <label
              htmlFor="passwordInput"
              className={styles.form__label}
            >
              {t('templates.authorization.logIn.inputPass.label')}
            </label>
            <input
              type="password"
              name="password"
              placeholder={t('templates.authorization.logIn.inputPass.placeholder')}
              id="passwordInput"
              autoComplete="current-password"
              required
              ref={passwordRef}
              value={formik.values.password}
              onChange={formik.handleChange}
              className={
                !error
                  ? (styles.form__input)
                  : (styles.form__invalid)
                }
            />
          </div>

          <MainButton className={styles.form_submit} text={t('templates.buttons.logIn')} />
        </form>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer__signup}>
          <span>{t('templates.authorization.logIn.footer.text')}</span>
          <button
            type="button"
            onClick={() => isSignUp()}
          >
            {t('templates.authorization.logIn.footer.link')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
