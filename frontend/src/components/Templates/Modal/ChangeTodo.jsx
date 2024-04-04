import styles from './ChangeTodo.module.scss';

// ChangeTodo явно плохое название, т.к. элемент добавляет или изменяет тодо.
const ChangeTodo = () => {
  console.log('----- ChangeTodo');
  return (
    <div className={styles.container}>
      <div className={styles.modal}>

        <div className={styles.modal__header}>
          HEADER
        </div>

        <div className={styles.modal__body}>
          BODY
        </div>

        <div className={styles.modal__footer}>
          FOOTER
        </div>

      </div>
    </div>
  );
};

export default ChangeTodo;
