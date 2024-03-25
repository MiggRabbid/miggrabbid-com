/* eslint-disable max-len */
import styles from './About.module.scss';

const About = () => (
  <section className={styles.container}>
    <div className={styles.title}>
      <h2>About me</h2>
    </div>
    <div className={styles.about}>
      <p>
        I&apos;m a beginner Frontend developer.
      </p>
      <p>
        My journey in programming began in 2021. Thanks to recommendations from YouTube, I took a short tutorial on the basics of Python, and since
        {' '}
        <span>I love solving difficult problems</span>
        {' '}
        and flexing my brain, I really enjoyed it.
      </p>
      <p>
        Until 2023, I took several more courses on the basics of &quot;Python&quot;, &quot;Java&quot; and &quot;JavaScript&quot;. After much analysis and deliberation, I decided to devote my life to development. I chose Frontend because, in addition to solving complex problems,
        {' '}
        <span>I like working with graphics and UX/UI</span>
        .
      </p>
      <p>
        In March of this year
        {' '}
        <span>I graduated</span>
        {' '}
        from the
        {' '}
        <span><a href="https://ru.hexlet.io/u/miggrabbid">&quot;Hexlet&quot;</a></span>
        {' '}
        programming school, but I continue to develop as a developer.
        {' '}
        And
        {' '}
        <span>I have a university degree in economics</span>
        .
      </p>
      <p>
        Perseverance and diligence allow me to focus on tasks and solve them successfully, even if it requires significant effort (
        <span>on Hexlet all problems are solved 100%</span>
        , without prompts). Perfectionism and responsibility help me bring my work to Pixel Perfect.
      </p>
      <p>
        <span>I have extensive experience in managing my own business</span>
        . This taught me to effectively communicate and interact with employees and colleagues, take their opinions into account and share my own, as well as jointly solve any tasks and problems.
      </p>
    </div>

  </section>
);

export default About;
