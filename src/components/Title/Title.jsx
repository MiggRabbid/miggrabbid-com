import React from 'react';
import styles from './Title.module.scss';

const Title = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <div className={styles.title__title}>
        <p>
          OLD
          {' '}
          <span>MAN</span>
        </p>
        <p> & </p>
        <p>
          <span>NEW</span>
          {' '}
          DEV
        </p>
      </div>
      <div className={styles.title__body}>
        <h3>
          The site is under construction
        </h3>
      </div>
    </div>
  </div>
);

export default Title;
