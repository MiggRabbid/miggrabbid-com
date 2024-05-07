import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    error: null,
    signUp: false,
    logIn: false,
    newUser: false,
  },
  reducers: {
    isSignUp: (state) => ({
      ...state,
      signUp: true,
      newUser: true,
    }),
    signUpSuccess: (state) => ({
      ...state,
      signUp: false,
    }),
    loginSuccess: (state) => ({
      ...state,
      isAuthenticated: true,
      error: null,
    }),
    loginFailed: (state, action) => ({
      ...state,
      isAuthenticated: false,
      error: action.payload,
    }),
    logoutStore: (state) => ({
      ...state,
      isAuthenticated: false,
      error: null,
      signUp: false,
      newUser: false,
    }),
  },
});

export const { actions } = authSlice;

export default authSlice.reducer;
