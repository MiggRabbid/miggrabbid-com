import { useMemo, useState } from 'react';

import { AuthContext } from '../../contexts/index';

const AuthProvider = ({ children }) => {
  console.log('----- AuthProvider');
  const initialUser = useMemo(() => {
    const currentUser = localStorage.getItem('user');
    return currentUser ? JSON.parse(currentUser) : null;
  }, []);

  const [user, setUser] = useState(initialUser);

  const logIn = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setUser({ username: data.username, token: data.token });
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const getAuthHeader = useMemo(() => () => {
    const localUser = localStorage.getItem('user');
    if (localUser) {
      const { token } = JSON.parse(localUser);
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{
      user, logIn, logOut, getAuthHeader,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
