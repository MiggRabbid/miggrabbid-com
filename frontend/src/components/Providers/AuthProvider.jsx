import { useState } from 'react';

import AuthContext from '../../contexts/index';

const AuthProvider = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(currentUser
    ? { username: currentUser.username, token: currentUser.token }
    : null);

  const logIn = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setUser({ username: data.username, token: data.token });
  };

  const logOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const getAuthHeader = () => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser && localUser.token) {
      return { Authorization: `Bearer ${localUser.token}` };
    }
    return {};
  };

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
