import { useContext } from 'react';

import { ThemeContext } from '../contexts/index';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
