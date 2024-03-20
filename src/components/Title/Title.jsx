/* eslint-disable max-len */
import React from 'react';
import styles from './Title.module.scss';
import bgTitleBody from '../../assets/bgTitleBody.svg';

const Title = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <div className={styles.title__title}>
        <h1>I`M FRONTEND DEVELOPER</h1>
      </div>

      <div className={styles.title__nav}>
        <img src={bgTitleBody} alt="" />
        <nav>
          <ul>
            <li>
              About
            </li>
            <li>
              Stack
            </li>
            <li>
              Skills
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
);

export default Title;
