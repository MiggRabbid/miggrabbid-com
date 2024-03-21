/* eslint-disable max-len */
import styles from './Stack.module.scss';

const stack = ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS', 'SCSS', 'Redux', 'Bootstrap', 'Tailwind'];

const Stack = () => {
  const li = stack.map((item) => (<li key={item}>{item}</li>));

  return (
    <section className={styles.container}>
      <div className={styles.stack}>
        <div className={styles.stack__scroll}>
          <ul className={styles.main}>
            {li}
          </ul>
          <ul className={styles.main}>
            {li}
          </ul>
          <ul className={styles.main}>
            {li}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stack;
