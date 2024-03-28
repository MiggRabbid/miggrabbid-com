import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { actions as authActions } from './authSlice';
import modalReducer, { actions as modalActions } from './modalSlice';

const actions = {
  ...authActions,
  ...modalActions,
};

export { actions };

export default combineReducers({
  authReducer,
  modalReducer,
});
