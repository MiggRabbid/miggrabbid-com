import styles from './App.module.scss';

import Header from './components/Header/Header';
import AboutMe from './components/Body/AboutMe/AboutMe';

const App = () => (
  <div className={styles.app}>
    <Header />
    <AboutMe />
  </div>
);

export default App;
