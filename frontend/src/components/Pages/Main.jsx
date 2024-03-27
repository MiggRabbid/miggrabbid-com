/* eslint-disable max-len */
import React from 'react';
import styles from './Main.module.scss';
import bgTitleBody from '../../assets/bgTitleBody.png';

const Main = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <div className={styles.title__title}>
        <h1>I`M FRONTEND DEVELOPER</h1>
      </div>

      <div className={styles.title__nav}>
        <nav>
          <div className={styles.nav__bg}>
            <img src={bgTitleBody} alt="" />
          </div>
          <ul>
            <li>
              Stack
            </li>
            <li>
              About
            </li>
            <li>
              Skills
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div className={styles.dev}>THIS SITE IS UNDER DEVELOPMENT</div>
  </div>
);

export default Main;
