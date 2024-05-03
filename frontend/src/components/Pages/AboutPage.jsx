import { useTranslation } from 'react-i18next';

import styles from './AboutPage.module.scss';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <div className={styles.title}>
        <h2>{t('aboutMe.title')}</h2>
      </div>
      <div className={styles.about}>
        <p>
          {t('aboutMe.description.first_1_P')}
        </p>
        <p>
          {t('aboutMe.description.second_1_p')}
          <span>{t('aboutMe.description.second_2_sp')}</span>
          {t('aboutMe.description.second_3_p')}
          <span>{t('aboutMe.description.second_4_sp')}</span>
          {t('aboutMe.description.second_5_p')}
          <span>{t('aboutMe.description.second_6_sp')}</span>
        </p>
        <p>
          {t('aboutMe.description.third_1_p')}
          <span>
            {t('aboutMe.description.third_2_sp')}
          </span>
          {t('aboutMe.description.third_3_p')}
        </p>
        <p>
          {t('aboutMe.description.fourth_1_p')}
          <span>
            {t('aboutMe.description.fourth_2_sp')}
          </span>

          {t('aboutMe.description.fourth_3_p')}
          <span>
            <a href="https://ru.hexlet.io/u/miggrabbid" target="_blank" rel="noreferrer">
              {t('aboutMe.description.fourth_4_sp')}
            </a>
          </span>

          {t('aboutMe.description.fourth_5_p')}
          <span>
            {t('aboutMe.description.fourth_6_sp')}
          </span>
        </p>
        <p>
          {t('aboutMe.description.fifth_1_p')}
          <span>{t('aboutMe.description.fifth_2_sp')}</span>
          {t('aboutMe.description.fifth_2_p')}
        </p>
        <p>
          <span>{t('aboutMe.description.sixth_1_sp')}</span>
          {t('aboutMe.description.sixth_1_p')}
        </p>
      </div>

    </section>
  );
};

export default AboutPage;
