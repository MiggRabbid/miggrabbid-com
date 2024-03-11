import styles from './AboutMe.module.scss';

import MyStack from '../MyStack/MyStack';
/* eslint-disable */
const Main = () => (
  <div className={styles.container}>

    <div className={styles.title}>
      <p className={styles.title__text}>
        OLD
        {' '}
        <span>MAN</span>
      </p>
      <p className={styles.title__text}>&</p>
      <p className={styles.title__text}>
        <span>NEW</span>
        {' '}
        DEV
      </p>
    </div>

    <div className={styles.aboutMe} >
      <p className={styles.aboutMe__text}>
        Hey there! I&apos;m a beginner Frontend developer. In March of this year I graduated from the Hexlet programming school, but I continue to develop as a developer. I want to become part of a professional and friendly team, working on complex and interesting projects. In which I can continue to develop my development skills in JavaScript and React, as well as gain new skills and knowledge. Willing to complete a test task to demonstrate your skill level.
      </p>
      <p className={styles.aboutMe__text}>
        My journey in programming began in 2021. Thanks to recommendations from YouTube, I took a short tutorial on the basics of Python, and since I love solving complex problems and flexing my brain, I really enjoyed it. Until 2023, I took several more courses on the basics of Python, Java and JavaScript. After much analysis and deliberation, I decided to devote my life to development. I chose Frontend because, in addition to solving complex problems, I like working with graphics and UX/UI.
      </p>
      <p className={styles.aboutMe__text}>
        Perseverance and diligence allow me to focus on tasks and solve them successfully, even if it requires significant effort (on Hexlet all problems are solved 100%, without prompts). Perfectionism and responsibility help me bring my work to Pixel Perfect.
      </p>
    </div>


    <MyStack />
  </div>
);

export default Main;
