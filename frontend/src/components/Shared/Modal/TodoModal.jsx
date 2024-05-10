import { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { uniqueId } from 'lodash';

import styles from './TodoModal.module.scss';

import SmallButton from '../Button/SmallButton';
import MainButton from '../Button/MainButton';
import { iconBack } from '../icons';

const isAddModal = (type) => type === 'addTodo';
const isOpenModal = (type) => type === 'openTodo';

const getValidationSchema = () => yup.object({
  title: yup.string().trim()
    .min(1, 'от 1 до 15 символов')
    .max(15, 'от 1 до 15 символов')
    .required('обязательно для заполнения'),
  body: yup.string()
    .min(1, 'от 1 до до 260 символов')
    .max(260, 'от 1 до 260 символов')
    .required('обязательно для заполнения'),
});

/**
* TodoModal плохое название, т.к. элемент добавляет или изменяет задачу.
*/
const TodoModal = (props) => {
  const {
    state, setState, initialModalState, setModal, modalState, id,
  } = props;
  const modalInputRef = useRef(null);

  useEffect(() => {
    if (isAddModal(modalState.modalType)) {
      modalInputRef.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues: { title: '', body: '' },
    validationSchema: getValidationSchema(),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      const todoId = uniqueId(`${id}-`);
      const newState = [...state, { ...values, id: todoId }];
      setState(newState);
      setSubmitting(false);
      setModal(initialModalState);
    },
  });

  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  return (
    <div className={styles.container}>
      <div className={styles.modal} role="dialog" aria-modal="true">

        { isAddModal(modalState.modalType)
          && (
            <form className={styles.modal__form} onSubmit={formik.handleSubmit}>
              <div>
                <label
                  htmlFor="titleInput"
                  className={styles.form__label}
                >
                  {' '}
                  Название задачи
                  {' '}
                </label>
                <input
                  ref={modalInputRef}
                  type="text"
                  name="title"
                  id="titleInput"
                  placeholder="Название задачи"
                  autoComplete="username"
                  required
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  className={
                    !formik.errors.title
                      ? (styles.form__input)
                      : (styles.form__invalid)
                    }
                />
                <div className={
                    !formik.errors.title
                      ? (styles.feedback__hidden)
                      : (styles.form__feedback)
                    }
                >
                  {formik.errors.title}
                </div>
              </div>

              <div>
                <label
                  htmlFor="bodyInput"
                  className={styles.form__label}
                >
                  {' '}
                  Описание задачи
                  {' '}
                </label>
                <textarea
                  type="textarea"
                  name="body"
                  id="bodyInput"
                  placeholder="Описание задачи"
                  required
                  value={formik.values.body}
                  onChange={formik.handleChange}
                  className={
                    !formik.errors.body
                      ? (styles.form__input__textarea)
                      : (styles.form__invalid__textarea)
                    }
                />
                <div className={
                    !formik.errors.body
                      ? (styles.feedback__hidden)
                      : (styles.form__feedback)
                    }
                >
                  {formik.errors.body}
                </div>
              </div>

              <div className={styles.modal__footer}>
                <SmallButton
                  className={styles.form__back}
                  icon={iconBack}
                  onClick={() => setModal(initialModalState)}
                />
                <MainButton
                  className={styles.form_submit}
                  text="Добавить"
                />
              </div>
            </form>
          )}

        { isOpenModal(modalState.modalType)
          && (
            <div className={styles.modal__todo}>
              <div>
                <p className={styles.todo__title}>
                  {modalState.todo.title}
                </p>
                <SmallButton
                  className={styles.todo__back}
                  icon={iconBack}
                  onClick={() => setModal(initialModalState)}
                />
              </div>
              <div className={styles.todo__body}>
                <p>
                  {modalState.todo.body}
                </p>
              </div>

            </div>
          )}

      </div>
    </div>
  );
};

export default TodoModal;
