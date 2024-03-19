import styles from './App.module.scss';
import Header from './components/Header/Header';
import Title from './components/Title/Title';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Title />
  </div>
);

export default App;
