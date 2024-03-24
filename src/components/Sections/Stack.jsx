/* eslint-disable max-len */
import styles from './Stack.module.scss';

const stack = ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS', 'SCSS', 'Redux', 'Bootstrap', 'Tailwind'];

const getStack = (index) => {
  if (index === 'second') {
    console.log('second -', [...stack.slice(3), ...stack.slice(0, 3)]);
    return [...stack.slice(3), ...stack.slice(0, 3)];
  }
  if (index === 'third') {
    console.log('third -', [...stack.slice(6), ...stack.slice(0, 6)]);
    return [...stack.slice(6), ...stack.slice(0, 6)];
  }
  console.log('first -', stack);
  return stack;
};

const Stack = () => {
  const liFirst = getStack('first').map((item) => (<li key={item}>{item}</li>));
  const liSecond = getStack('second').map((item) => (<li key={item}>{item}</li>));
  const liThird = getStack('third').map((item) => (<li key={item}>{item}</li>));

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>My stack</h2>
      </div>
      <div className={styles.stack}>
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__first}>{liFirst}</ul>
          <ul className={styles.scroll__first}>{liFirst}</ul>
        </div>
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__second}>{liSecond}</ul>
          <ul className={styles.scroll__second}>{liSecond}</ul>
        </div>
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__third}>{liThird}</ul>
          <ul className={styles.scroll__third}>{liThird}</ul>
        </div>
      </div>
    </section>
  );
};

export default Stack;
