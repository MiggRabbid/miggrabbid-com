/* eslint-disable max-len */
import React from 'react';
import styles from './Title.module.scss';
import bgTitleBody from '../../assets/bgTitleBody.svg';

const Title = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <div className={styles.title__title}>
        <div>
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
      </div>

      <div className={styles.title__body}>This site is under construction</div>

      <div className={styles.title__about}>
        <img src={bgTitleBody} alt="" />
        <h3 className={styles.greeting}>
          Hi there! My mane is Anatoliy.
        </h3>
        <p>
          I`m Frontend developer.
        </p>
        <p>
          My journey in programming began in 2021. Thanks to YouTube recommendations, I completed a short introductory course on the fundamentals of &quot;Python&quot;, and it changed my life.
        </p>
        <p>
          In March of this year I finished my studies at the
          {' '}
          <a href="https://ru.hexlet.io/u/miggrabbid" target="_blank" rel="noreferrer">&quot;Hexlet&quot;</a>
          {' '}
          programming school, but I continue to develop as a developer.
        </p>
        <p>
          I enjoy working with graphic design and UX/UI, as well as solving complex problems. I am always ready to learn and enhance my skills.
        </p>
      </div>

    </div>
  </div>
);

export default Title;
