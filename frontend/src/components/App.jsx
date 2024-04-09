import styles from './App.module.scss';

import Header from './Header/Header';
import Main from './Pages/Main';
import About from './Pages/About';
import Stack from './Pages/Stack';
import Skills from './Pages/Skills';

import { ReactComponent as RocketButton } from '../assets/rocket-button.svg';

const App = () => {
  const handleClickOnUp = () => {
    console.log('---handleClickOnUp');
    const button = document.getElementById('button-up');

    button.classList.toggle('clicked');
    setTimeout(() => button.classList.toggle('clicked'), 5500);

    const currentTarget = document.getElementById('app');
    console.log(currentTarget);
    if (currentTarget) {
      window.scrollTo({
        behavior: 'smooth',
        top: currentTarget.offsetTop,
      });
    }
  };

  return (
    <div className={styles.app} id="app">
      <Header />
      <Main />
      <Stack />
      <About />
      <Skills />

      <div>
        <button type="button" id="button-up" className={styles.app_button} onClick={handleClickOnUp}>
          <RocketButton className={styles.button__icon} />
          Click me
        </button>
      </div>

    </div>
  );
};

export default App;
