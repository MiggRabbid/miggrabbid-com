import { useTranslation } from 'react-i18next';

import styles from './SwicthBox.module.scss';

import useTheme from '../../../hooks/useTheme';
import Switcher from './Switcher';

const SwitchBox = () => {
  const { theme, changeTheme } = useTheme();

  const { t, i18n } = useTranslation();

  const themeLight = t('theme.light', { lng: 'en' });
  const themeDark = t('theme.dark', { lng: 'en' });
  const curLng = i18n.language;
  const altLang = curLng === t('languages.ru') ? t('languages.en') : t('languages.ru');

  const switchLng = () => {
    i18n.changeLanguage(altLang);
  };

  const switchTheme = () => {
    console.log('SwitchBox -', theme);
    changeTheme();
  };

  return (
    <div className={styles.switcher}>
      <Switcher
        className={styles.switcher__lang}
        onClick={switchLng}
        title={t('languages.title')}
        firstBtn={t('languages.ru')}
        secondBtn={t('languages.en')}
        curValue={curLng}
      />

      <Switcher
        className={styles.switcher__theme}
        onClick={switchTheme}
        title={t('theme.title')}
        firstBtn={themeLight}
        secondBtn={themeDark}
        curValue={theme}
      />
    </div>
  );
};

export default SwitchBox;
