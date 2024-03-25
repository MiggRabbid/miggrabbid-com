import styles from './App.module.scss';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/Sections/About';
import Stack from './components/Sections/Stack';
import Skills from './components/Sections/Skills';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Title />
    <Stack />
    <About />
    <Skills />
  </div>
);

export default App;
