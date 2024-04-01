import { useTranslation } from 'react-i18next';

import styles from './SwicthBox.module.scss';

import Switcher from './Swtcher';

const SwitchBox = () => {
  const { t, i18n } = useTranslation();
  const curLng = i18n.language;
  const altLang = curLng === t('languages.ru') ? t('languages.en') : t('languages.ru');

  const switchLng = () => {
    console.log('switchLng - ', curLng, altLang);
    i18n.changeLanguage(altLang);
  };

  return (
    <div className={styles.switcher}>
      <Switcher
        className={styles.switcher__lang}
        onClick={switchLng}
        title="Переключение языков"
        firstBtn={t('languages.ru')}
        secondBtn={t('languages.en')}
        curValue={curLng}
      />

      <Switcher
        className={styles.switcher__theme}
        onClick={switchLng}
        title="Переключение цветовой темы"
        firstBtn="LIGTH"
        secondBtn="DARK"
        curValue="DARK"
      />
    </div>
  );
};

export default SwitchBox;
