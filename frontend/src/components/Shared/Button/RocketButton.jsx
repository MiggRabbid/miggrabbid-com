import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as RocketIcon } from '../../../assets/rocket-button.svg';
import styles from './RocketButton.module.scss';

const RocketButton = () => {
  const { t } = useTranslation();
  const buttonRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = 0.3 * viewportHeight; // 30vh

      if (scrollHeight > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickOnUp = () => {
    const currentTarget = !scrolled ? document.getElementById('stack') : document.getElementById('app');
    if (currentTarget) {
      window.scrollTo({
        behavior: 'smooth',
        top: currentTarget.offsetTop,
      });
    }
  };

  return (
    <div>
      <button
        type="button"
        ref={buttonRef}
        className={scrolled ? styles.app_button__rotated : styles.app_button}
        onClick={handleClickOnUp}
      >
        <RocketIcon className={styles.button__icon} />
        {t('templates.buttons.up')}
      </button>
    </div>
  );
};

export default RocketButton;
