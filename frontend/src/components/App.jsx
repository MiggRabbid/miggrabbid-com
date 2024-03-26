import styles from './App.module.scss';
import Header from './Header/Header';
import Main from './Pages/Main';
import About from './Pages/About';
import Stack from './Pages/Stack';
import Skills from './Pages/Skills';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Stack />
    <About />
    <Skills />
  </div>
);

export default App;
