/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';

import styles from './SkillsPage.module.scss';

import useTheme from '../../hooks/useTheme';

import AuthApp from '../Widgets/Authorization/AuthApp';
import SwitchBox from '../Widgets/Switches/SwitchBox';
import TodoApp from '../Widgets/Todos/TodoApp';

const SkillsPage = () => {
  const { t } = useTranslation();
  const { siteTheme } = useTheme();

  return (
    <section className={styles[siteTheme]} id="skills">
      <div className={styles.title}>
        <h2>{t('skills.title')}</h2>
      </div>
      <div className={styles.skills}>

        <section className={styles.skills__examples}>
          <div className={styles.examples__block}>

            <article className={styles.block__example}>
              <AuthApp />
              <div className={styles.examples__decs}>
                <p className={styles.decs__text__main}>{t('skills.examples.firstExam_1')}</p>
                <p className={styles.decs__text__main}>{t('skills.examples.firstExam_2')}</p>
                <p className={styles.decs__text__second}>{t('skills.examples.firstExam_3')}</p>
              </div>
            </article>

            <article className={styles.block__example}>
              <SwitchBox />
              <div className={styles.examples__decs}>
                <p className={styles.decs__text__main}>{t('skills.examples.secondExam_1')}</p>
                <p className={styles.decs__text__main}>{t('skills.examples.secondExam_2')}</p>
                <p className={styles.decs__text__second}>{t('skills.examples.secondExam_3')}</p>
              </div>
            </article>

            <article className={styles.block__example}>
              <TodoApp />
              <div className={styles.examples__decs}>
                <p className={styles.decs__text__main}>{t('skills.examples.thirdExam_1')}</p>
                <p className={styles.decs__text__main}>{t('skills.examples.thirdExam_2')}</p>
                <p className={styles.decs__text__second}>{t('skills.examples.thirdExam_3')}</p>
              </div>

            </article>
          </div>
        </section>

        <section className={styles.skills__experience}>
          <h3>{t('skills.educExp.title')}</h3>

          <article className={styles.skills__project}>
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
            <p className={styles.project__desc}>{t('skills.educExp.base.usedStack')}</p>
          </article>

          <article className={styles.skills__project}>
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
          </article>
        </section>

        <section className={styles.skills__footer}>
          <p className={styles.footer__text}>{t('skills.examples.otherExam')}</p>
        </section>

      </div>
    </section>
  );
};

export default SkillsPage;
