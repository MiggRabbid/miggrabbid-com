import { useEffect, useRef } from 'react';
import { uniqueId } from 'lodash';

import styles from './BgAnimation.module.scss';

import jsBuildData from '../../../data/jsForBg';

const BgAnimation = ({ siteTheme }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const letters = card.querySelector('#card_letters');

    const handleOnMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      letters.style.setProperty('--x', `${x}px`);
      letters.style.setProperty('--y', `${y}px`);

      letters.innerText = jsBuildData;
    };

    card.addEventListener('mousemove', handleOnMove);
    card.addEventListener('touchmove', (e) => handleOnMove(e.touches[0]));

    return () => {
      card.removeEventListener('mousemove', handleOnMove);
      card.removeEventListener('touchmove', (e) => handleOnMove(e.touches[0]));
    };
  }, []);

  return (
    <div className={styles[siteTheme]}>
      <div className={styles.card_wrapper} ref={cardRef}>
        <div className={styles.card}>
          <div className={styles.card_gradient} />
          <div className={styles.card_letters} id="card_letters" />
        </div>
        <div className={styles.card_corners}>
          {[...Array(4)].map(() => (
            <span key={uniqueId()} className={styles.card_corner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BgAnimation;
