import styles from './App.module.scss';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/Sections/About';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Title />
    <About />
  </div>
);

export default App;
