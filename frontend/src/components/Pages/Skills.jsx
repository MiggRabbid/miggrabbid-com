/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';

import styles from './Skills.module.scss';

import AuthApp from '../Examples/Authorization/AuthApp';
import SwitchBox from '../Examples/Switches/SwicthBox';
import TodoApp from '../Examples/Todos/TodoApp';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>{t('skills.title')}</h2>
      </div>
      <div className={styles.skills}>
        <div className={styles.skills__experience}>
          <h3>{t('skills.educExp.title')}</h3>

          <div className={styles.skills__project}>
            <h5>{t('skills.educExp.base.title')}</h5>
            <p className={styles.project__desc}>
              <a href="https://github.com/MiggRabbid/frontend-project-44" target="_blank" rel="noreferrer">
                {t('skills.educExp.base.desc_bg_a')}
              </a>
              {t('skills.educExp.base.desc_bg_p')}
              <a href="https://github.com/MiggRabbid/frontend-project-46" target="_blank" rel="noreferrer">
                {t('skills.educExp.base.desc_dc_a')}
              </a>
              {t('skills.educExp.base.desc_dc_p')}
              <a href="https://github.com/MiggRabbid/frontend-project-11" target="_blank" rel="noreferrer">
                {t('skills.educExp.base.desc_ra_a')}
              </a>
              {t('skills.educExp.base.desc_ra_p')}
            </p>
            <ul>{t('skills.educExp.base.ul')}</ul>
            <li>{t('skills.educExp.base.li_1')}</li>
            <li>{t('skills.educExp.base.li_2')}</li>
            <li>{t('skills.educExp.base.li_3')}</li>
            <li>{t('skills.educExp.base.li_4')}</li>
            <li>{t('skills.educExp.base.li_5')}</li>
            <li>{t('skills.educExp.base.li_6')}</li>
            <p className={styles.project__desc}>{t('skills.educExp.base.usedStack')}</p>
          </div>

          <div className={styles.skills__project}>
            <h5>{t('skills.educExp.diploma.title')}</h5>
            <p className={styles.project__desc}>
              <a href="https://github.com/MiggRabbid/frontend-project-12" target="_blank" rel="noreferrer">{t('skills.educExp.diploma.desc_sc_a')}</a>
              {t('skills.educExp.diploma.desc_sc_p')}
            </p>
            <ul>{t('skills.educExp.diploma.ul')}</ul>
            <li>{t('skills.educExp.diploma.li_1')}</li>
            <li>{t('skills.educExp.diploma.li_2')}</li>
            <li>{t('skills.educExp.diploma.li_3')}</li>
            <li>{t('skills.educExp.diploma.li_4')}</li>
            <li>{t('skills.educExp.diploma.li_5')}</li>
            <li>{t('skills.educExp.diploma.li_6')}</li>
            <li>{t('skills.educExp.diploma.li_7')}</li>
            <p className={styles.project__desc}>
              {t('skills.educExp.diploma.usedStack')}
            </p>
          </div>
        </div>

        <div className={styles.skills__examples}>
          <h3>{t('skills.examples.title')}</h3>
          <div className={styles.examples}>
            <AuthApp />
            <p className={styles.examples__decs}>{t('skills.examples.firstExam')}</p>
          </div>

          <div className={styles.examples}>
            <SwitchBox />
            <p className={styles.examples__decs}>{t('skills.examples.secondExam')}</p>
          </div>

          <div className={styles.examples}>
            <TodoApp />
            <p className={styles.examples__decs}>{t('skills.examples.thirdExam')}</p>
          </div>
        </div>

        <div className={styles.skills__footer}>
          <p className={styles.footer__text}>{t('skills.examples.otherExam')}</p>
        </div>
      </div>

    </section>
  );
};

export default Skills;
