/* eslint-disable max-len */
import styles from './Skills.module.scss';
import SignUp from '../Templates/Authorization/SignUp';
import Login from '../Templates/Authorization/Login';

const Skills = () => (
  <section className={styles.container}>
    <div className={styles.title}>
      <h2>My skills and experience</h2>
    </div>
    <div className={styles.skills}>
      <div className={styles.skills__experience}>
        <h3>My development experience includes educational projects on &quot;Hexlet&quot;</h3>

        <div className={styles.skills__project}>
          <h5>Basic projects</h5>
          <p>
            &quot;
            <a href="https://github.com/MiggRabbid/frontend-project-44" target="_blank" rel="noreferrer">Brain Games</a>
            &quot; - five console game pack, &quot;
            <a href="https://github.com/MiggRabbid/frontend-project-46" target="_blank" rel="noreferrer">Difference Calculator</a>
            &quot; - command line utility (cli), &quot;
            <a href="https://github.com/MiggRabbid/frontend-project-11" target="_blank" rel="noreferrer">RSS aggregatorр</a>
            &quot; - service for aggregation of RSS feeds.
          </p>
          <ul>As part of these projects, I implemented:</ul>
          <li>working with Ubuntu within WSL, working with Node.js (within the command line and NPM);</li>
          <li>working with JavaScript, using algorithms and working with data structure. And also applying the MVC design pattern;</li>
          <li>code linting using Eslint, using the Airbnb standard. Debug and test projects using the Jest framework;</li>
          <li>layout using Bootstrap and working with DOM;</li>
          <li>working with asynchronous http requests using Axios;</li>
          <li>build using Webpack and deploy the project to Vercel.</li>
          <p>Stack used: JavaScript, Node.JS (working with npm), Bootstrap, Eslint + Airbnb, Jest, Yup, i18next, Axios, Webpack, Vercel.</p>
        </div>

        <div className={styles.skills__project}>
          <h5>Diploma project</h5>
          <p>
            <a href="https://github.com/MiggRabbid/frontend-project-12" target="_blank" rel="noreferrer">Real-time app</a>
            , analogue of Slack chat (simplified version).
          </p>
          <ul>As part of the project, I implemented</ul>
          <li>layout using functional components React, React-Bootstrap;</li>
          <li>working with context and providers, for language transfer and authorization, as well as working with storage using the Redux Toolkit;</li>
          <li>routing across pages using React-Router-Dom;</li>
          <li>internationalization, for Russian and English languages, using i18next;</li>
          <li>working with forms, including: authorization, creating/changing channels and sending messages. As well as validation (Yup) and filtering (Leo-Profanity) of entered data;</li>
          <li>working with the backend using socket.io, Axios. Using REST API;</li>
          <li>project assembly (Webpack), deployment (Render.com) and error monitoring in production (Rollbar);</li>
          <p>Stack used: JavaScript, Node.JS (working with npm), React, React-Dom, React-Router-Dom, React-Bootstrap, React-Redux, Redux Toolkit, Formik, React-Toastify, Eslint + Airbnb, Yup, i18next , Leo-Profanity, REST API, Axios, Socket.io, Webpack, Render.com, Rollbar.</p>
        </div>
      </div>

      <div className={styles.skills__can}>
        <h3>My skills</h3>
        <div className={styles.can__made}>
          <SignUp />
          <p>I can create various forms for data entry, both using standard methods and using third-party libraries, such as Formik. For example, registration/authorization forms, with validation and filtering of input data</p>
        </div>

        <div className={styles.can__made}>
          <Login />
          <p>I can work with state, both standard useState and using Redux Toolkit</p>
        </div>

        <div className={styles.can__made}>
          <div className={styles.made__cap}>here will be a component</div>
          <p>I can work with modal windows</p>
        </div>

        <div className={styles.can__made}>
          <div className={styles.made__cap}>here will be a component</div>
          <p>I know how to work with internationalization, context and providers</p>
        </div>

        <div className={styles.can__made}>
          <div className={styles.made__cap}>here will be a component</div>
          <p>Add the required skills and abilities...</p>
        </div>
      </div>
    </div>

  </section>
);

export default Skills;
