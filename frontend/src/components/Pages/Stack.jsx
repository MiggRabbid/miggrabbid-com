import { useTranslation } from 'react-i18next';

import styles from './Stack.module.scss';

import stackMain from '../../data/stackMain';
import stackSecond from '../../data/stackSecond';

const getStack = (stack, index) => {
  const quarter = 0.25;
  const sliceIndex = Math.floor(stackMain.length * quarter);
  if (index === 'second') {
    return [...stack.slice(sliceIndex), ...stack.slice(0, sliceIndex)];
  }
  if (index === 'third') {
    return [...stack.slice(sliceIndex * 2), ...stack.slice(0, sliceIndex * 2)];
  }
  if (index === 'fourth') {
    return [...stack.slice(sliceIndex * 3), ...stack.slice(0, sliceIndex * 3)];
  }
  return stack;
};

const Stack = () => {
  const { t } = useTranslation();

  const liFirst = getStack(stackMain, 'first').map((item) => (<li key={item}>{item}</li>));
  const liSecond = getStack(stackMain, 'second').map((item) => (<li key={item}>{item}</li>));
  const liThird = getStack(stackMain, 'third').map((item) => (<li key={item}>{item}</li>));
  const liFourth = getStack(stackMain, 'fourth').map((item) => (<li key={item}>{item}</li>));

  const liSecondFirst = getStack(stackSecond, 'first').map((item) => (<li key={item}>{item}</li>));
  const liSecondSecond = getStack(stackSecond, 'second').map((item) => (<li key={item}>{item}</li>));
  const liSecondThird = getStack(stackSecond, 'third').map((item) => (<li key={item}>{item}</li>));
  const liSecondFourth = getStack(stackSecond, 'fourth').map((item) => (<li key={item}>{item}</li>));

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>{t('stack.title')}</h2>
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
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__fourth}>{liFourth}</ul>
          <ul className={styles.scroll__fourth}>{liFourth}</ul>
        </div>
      </div>
      <div className={styles.stack__second}>
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__first}>{liSecondFirst}</ul>
          <ul className={styles.scroll__first}>{liSecondFirst}</ul>
        </div>
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__second}>{liSecondSecond}</ul>
          <ul className={styles.scroll__second}>{liSecondSecond}</ul>
        </div>
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__third}>{liSecondThird}</ul>
          <ul className={styles.scroll__third}>{liSecondThird}</ul>
        </div>
        <div className={styles.stack__scroll}>
          <ul className={styles.scroll__fourth}>{liSecondFourth}</ul>
          <ul className={styles.scroll__fourth}>{liSecondFourth}</ul>
        </div>
      </div>
    </section>
  );
};

export default Stack;
